import { readFileSync } from "node:fs";
import { basename, extname, resolve } from "node:path";
import { randomUUID } from "node:crypto";

import type { P0EmissionBundle } from "../../types/temporal/temporal_floor_types_v0";
import { validateP0 } from "../../validators/temporal/validate_p0_v0.ts";

const OPERATOR_ID = "IngestOp" as const;
const OPERATOR_VERSION = "v0";

export interface IngestWavInputV0 {
    wav_file_path: string;
    channel_index?: number;
}

interface DecodedWavChannel {
    sample_rate_hz: number;
    channel_index: number;
    channel_count: number;
    value_encoding: "pcm16" | "float32" | "float64";
    x: number[];
    t: number[];
    value_min: number | undefined;
    value_max: number | undefined;
    value_rms: number | undefined;
    clipping_detected: boolean | undefined;
}

function createHandle(prefix: string): string {
    return `${prefix}_${randomUUID()}`;
}

function readChunkId(buffer: Buffer, offset: number): string {
    return buffer.toString("ascii", offset, offset + 4);
}

function getValueEncoding(
    formatCode: number,
    bitsPerSample: number
): DecodedWavChannel["value_encoding"] {
    if (formatCode === 1 && bitsPerSample === 16) {
        return "pcm16";
    }

    if (formatCode === 3 && bitsPerSample === 32) {
        return "float32";
    }

    if (formatCode === 3 && bitsPerSample === 64) {
        return "float64";
    }

    throw new Error(
        `IngestOp v0 only supports PCM16, float32, and float64 .wav files. Received formatCode=${formatCode}, bitsPerSample=${bitsPerSample}.`
    );
}

function decodeSelectedChannel(
    wavBuffer: Buffer,
    wavFilePath: string,
    channelIndex: number
): DecodedWavChannel {
    if (wavBuffer.length < 12) {
        throw new Error("IngestOp v0 expected a RIFF/WAVE file with a valid header.");
    }

    const riffId = readChunkId(wavBuffer, 0);
    const waveId = readChunkId(wavBuffer, 8);

    if (riffId !== "RIFF" || waveId !== "WAVE") {
        throw new Error("IngestOp v0 only supports RIFF/WAVE .wav files.");
    }

    let fmtChunkOffset: number | undefined;
    let fmtChunkSize: number | undefined;
    let dataChunkOffset: number | undefined;
    let dataChunkSize: number | undefined;

    let offset = 12;

    while (offset + 8 <= wavBuffer.length) {
        const chunkId = readChunkId(wavBuffer, offset);
        const chunkSize = wavBuffer.readUInt32LE(offset + 4);
        const chunkDataOffset = offset + 8;
        const chunkEnd = chunkDataOffset + chunkSize;

        if (chunkEnd > wavBuffer.length) {
            throw new Error(`IngestOp v0 found a truncated ${chunkId} chunk in ${wavFilePath}.`);
        }

        if (chunkId === "fmt " && fmtChunkOffset === undefined) {
            fmtChunkOffset = chunkDataOffset;
            fmtChunkSize = chunkSize;
        }

        if (chunkId === "data" && dataChunkOffset === undefined) {
            dataChunkOffset = chunkDataOffset;
            dataChunkSize = chunkSize;
        }

        offset = chunkEnd + (chunkSize % 2);
    }

    if (fmtChunkOffset === undefined || fmtChunkSize === undefined || fmtChunkSize < 16) {
        throw new Error(`IngestOp v0 could not find a valid fmt chunk in ${wavFilePath}.`);
    }

    if (dataChunkOffset === undefined || dataChunkSize === undefined) {
        throw new Error(`IngestOp v0 could not find a data chunk in ${wavFilePath}.`);
    }

    const formatCode = wavBuffer.readUInt16LE(fmtChunkOffset);
    const channelCount = wavBuffer.readUInt16LE(fmtChunkOffset + 2);
    const sampleRateHz = wavBuffer.readUInt32LE(fmtChunkOffset + 4);
    const blockAlign = wavBuffer.readUInt16LE(fmtChunkOffset + 12);
    const bitsPerSample = wavBuffer.readUInt16LE(fmtChunkOffset + 14);

    if (!Number.isInteger(channelIndex) || channelIndex < 0) {
        throw new TypeError("IngestOp v0 expects channel_index to be a non-negative integer.");
    }

    if (channelCount < 1) {
        throw new Error(`IngestOp v0 found an invalid channel count in ${wavFilePath}.`);
    }

    if (channelIndex >= channelCount) {
        throw new Error(
            `IngestOp v0 channel_index ${channelIndex} is out of range for ${channelCount} channel(s).`
        );
    }

    if (sampleRateHz <= 0) {
        throw new Error(`IngestOp v0 found an invalid sample rate in ${wavFilePath}.`);
    }

    const valueEncoding = getValueEncoding(formatCode, bitsPerSample);
    const bytesPerSample = bitsPerSample / 8;

    if (!Number.isInteger(bytesPerSample)) {
        throw new Error(`IngestOp v0 found a non-byte-aligned sample width in ${wavFilePath}.`);
    }

    const expectedBlockAlign = channelCount * bytesPerSample;

    if (blockAlign !== expectedBlockAlign) {
        throw new Error(
            `IngestOp v0 expected blockAlign=${expectedBlockAlign} but found ${blockAlign} in ${wavFilePath}.`
        );
    }

    if (dataChunkSize % blockAlign !== 0) {
        throw new Error(
            `IngestOp v0 found a data chunk whose size is not frame-aligned in ${wavFilePath}.`
        );
    }

    const frameCount = dataChunkSize / blockAlign;
    const x = new Array<number>(frameCount);
    const t = new Array<number>(frameCount);

    let valueMin = Number.POSITIVE_INFINITY;
    let valueMax = Number.NEGATIVE_INFINITY;
    let sumSquares = 0;
    let clippingDetected =
        valueEncoding === "pcm16"
            ? false
            : undefined;

    for (let frameIndex = 0; frameIndex < frameCount; frameIndex += 1) {
        const sampleOffset =
            dataChunkOffset + frameIndex * blockAlign + channelIndex * bytesPerSample;

        let sampleValue: number;

        if (valueEncoding === "pcm16") {
            sampleValue = wavBuffer.readInt16LE(sampleOffset);
        } else if (valueEncoding === "float32") {
            sampleValue = wavBuffer.readFloatLE(sampleOffset);
        } else {
            sampleValue = wavBuffer.readDoubleLE(sampleOffset);
        }

        if (!Number.isFinite(sampleValue)) {
            throw new Error(
                `IngestOp v0 encountered a non-finite decoded sample at frame ${frameIndex} in ${wavFilePath}.`
            );
        }

        x[frameIndex] = sampleValue;
        t[frameIndex] = frameIndex / sampleRateHz;
        valueMin = Math.min(valueMin, sampleValue);
        valueMax = Math.max(valueMax, sampleValue);
        sumSquares += sampleValue * sampleValue;

        if (clippingDetected !== undefined) {
            clippingDetected = clippingDetected || sampleValue <= -32768 || sampleValue >= 32767;
        }
    }

    return {
        sample_rate_hz: sampleRateHz,
        channel_index: channelIndex,
        channel_count: channelCount,
        value_encoding: valueEncoding,
        x,
        t,
        value_min: frameCount > 0 ? valueMin : undefined,
        value_max: frameCount > 0 ? valueMax : undefined,
        value_rms: frameCount > 0 ? Math.sqrt(sumSquares / frameCount) : undefined,
        clipping_detected: clippingDetected,
    };
}

export function ingestOpV0(input: IngestWavInputV0): P0EmissionBundle {
    if (input === null || typeof input !== "object" || Array.isArray(input)) {
        throw new TypeError("ingestOpV0 expects an input object.");
    }

    if (typeof input.wav_file_path !== "string" || input.wav_file_path.trim().length === 0) {
        throw new TypeError("ingestOpV0 expects wav_file_path to be a non-empty string.");
    }

    const resolvedPath = resolve(input.wav_file_path);

    if (extname(resolvedPath).toLowerCase() !== ".wav") {
        throw new Error("IngestOp v0 only supports .wav file admission.");
    }

    const decoded = decodeSelectedChannel(
        readFileSync(resolvedPath),
        resolvedPath,
        input.channel_index ?? 0
    );

    const baseId = randomUUID();
    const channelSuffix =
        decoded.channel_count > 1
            ? `#ch${decoded.channel_index}`
            : "";
    const primaryHandle = `p0_${baseId}`;

    const primary = {
        lane: "P" as const,
        artifact_class: "P0_IngestFrame" as const,
        primary_handle: primaryHandle,
        source_axis_ref: `wav_stream:${basename(resolvedPath)}${channelSuffix}`,
        time_axis_ref: `wav_sample_clock:${decoded.sample_rate_hz}Hz`,
        t: decoded.t,
        x: decoded.x,
    };

    const validation = validateP0(primary);

    if (validation.status !== "pass") {
        throw new Error(
            `IngestOp v0 produced a non-lawful P0 emission: ${validation.failure_codes.join(", ")}`
        );
    }

    const lineage = {
        lane: "L" as const,
        lineage_class: "L0_IngestLineage" as const,
        companion_handle: createHandle("l0"),
        primary_handle: primary.primary_handle,
        source_kind: "wav" as const,
        source_ref: resolvedPath,
        channel_ref:
            decoded.channel_count > 1
                ? `ch${decoded.channel_index}`
                : undefined,
        modality_ref: "audio" as const,
        ingest_event_id: `ingest_event_${baseId}`,
        operator_id: OPERATOR_ID,
        operator_version: OPERATOR_VERSION,
    };

    const accounting = {
        lane: "A" as const,
        accounting_class: "A0_IngestAccounting" as const,
        companion_handle: createHandle("a0"),
        primary_handle: primary.primary_handle,
        admission_mode: "file_decode" as const,
        value_encoding: decoded.value_encoding,
        timestamp_mode: "source_provided" as const,
        declared_mutation: "none" as const,
        non_claims: ["none"] as ["none"],
    };

    const diagnostics = {
        lane: "D" as const,
        diagnostics_class: "D0_IngestDiagnostics" as const,
        companion_handle: createHandle("d0"),
        primary_handle: primary.primary_handle,
        sample_count: decoded.x.length,
        value_min: decoded.value_min,
        value_max: decoded.value_max,
        value_rms: decoded.value_rms,
        repeated_timestamp_count: 0,
        non_monotonic_timestamp_count: 0,
        estimated_gap_count: 0,
        clipping_detected: decoded.clipping_detected,
    };

    const tertiary = {
        lane: "T" as const,
        tertiary_class: "T0_Deferred" as const,
        companion_handle: createHandle("t0"),
        primary_handle: primary.primary_handle,
        status: "declared_but_deferred" as const,
    };

    return {
        primary,
        validation,
        lineage,
        accounting,
        diagnostics,
        tertiary,
    };
}
