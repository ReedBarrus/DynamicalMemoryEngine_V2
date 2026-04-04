"use strict";

import { validateIngestPayload } from "./adapters/ingestAdapters.js";

const DEFAULT_CLOCK_POLICY_ID = "clock.file.v1";
const DEFAULT_TARGET_SAMPLE_RATE = 2400;

export const RECORDED_SOURCE_FIXTURES = [
    {
        id: "recorded_room_change_baseline_001",
        label: "Recorded · Room Change · baseline_001.wav",
        shortLabel: "Room Change · baseline_001",
        relativePath: "test_signal/daw_tone_sine_400hz_RoomChange/baseline_001.wav",
        sourceId: "recorded.wav.room_change.baseline_001",
        sourceFamilyLabel: "Recorded Source (WAV fixture)",
        recordedFamily: "daw_tone_sine_400hz_RoomChange",
        description: "Recorded 400Hz room-change family baseline. Stable reference-like structure from the room-change cohort.",
    },
    {
        id: "recorded_continuity_noise_break_01",
        label: "Recorded · Continuity Noise · continuity_break_01.wav",
        shortLabel: "Continuity Noise · continuity_break_01",
        relativePath: "test_signal/daw_tone_continuity_noise/continuity_break_01.wav",
        sourceId: "recorded.wav.continuity_noise.continuity_break_01",
        sourceFamilyLabel: "Recorded Source (WAV fixture)",
        recordedFamily: "daw_tone_continuity_noise",
        description: "Recorded continuity-noise perturbation. Break structure plus noise-bed family for bounded contrast against the room-change baseline.",
    },
];

function fixtureFilename(fixture) {
    return fixture?.relativePath?.split("/")?.pop() ?? "recorded_source.wav";
}

function toArrayBuffer(input) {
    if (input instanceof ArrayBuffer) return input;
    if (ArrayBuffer.isView(input)) {
        return input.buffer.slice(input.byteOffset, input.byteOffset + input.byteLength);
    }
    throw new Error("Recorded source helper requires ArrayBuffer or ArrayBuffer view input");
}

function readAscii(bytes, offset, length) {
    let out = "";
    for (let i = 0; i < length; i += 1) out += String.fromCharCode(bytes[offset + i]);
    return out;
}

function parseWavArrayBuffer(arrayBuffer) {
    const buffer = toArrayBuffer(arrayBuffer);
    const bytes = new Uint8Array(buffer);
    const view = new DataView(buffer);

    if (bytes.byteLength < 44) {
        throw new Error("Recorded WAV is too small to decode");
    }
    if (readAscii(bytes, 0, 4) !== "RIFF" || readAscii(bytes, 8, 4) !== "WAVE") {
        throw new Error("Recorded WAV is missing RIFF/WAVE header");
    }

    let offset = 12;
    let fmt = null;
    let dataOffset = 0;
    let dataSize = 0;

    while (offset + 8 <= bytes.byteLength) {
        const chunkId = readAscii(bytes, offset, 4);
        const chunkSize = view.getUint32(offset + 4, true);
        const chunkDataStart = offset + 8;

        if (chunkId === "fmt ") {
            fmt = {
                audioFormat: view.getUint16(chunkDataStart + 0, true),
                numChannels: view.getUint16(chunkDataStart + 2, true),
                sampleRate: view.getUint32(chunkDataStart + 4, true),
                blockAlign: view.getUint16(chunkDataStart + 12, true),
                bitsPerSample: view.getUint16(chunkDataStart + 14, true),
            };
        } else if (chunkId === "data") {
            dataOffset = chunkDataStart;
            dataSize = chunkSize;
        }

        offset = chunkDataStart + chunkSize + (chunkSize % 2);
    }

    if (!fmt) throw new Error("Recorded WAV is missing fmt chunk");
    if (!dataOffset || !dataSize) throw new Error("Recorded WAV is missing data chunk");

    const { audioFormat, numChannels, sampleRate, bitsPerSample, blockAlign } = fmt;
    const bytesPerSample = bitsPerSample / 8;
    const frameCount = Math.floor(dataSize / blockAlign);
    const mono = new Array(frameCount);

    function sampleAt(frameIndex, channelIndex) {
        const sampleOffset = dataOffset + frameIndex * blockAlign + channelIndex * bytesPerSample;

        if (audioFormat === 1) {
            if (bitsPerSample === 8) {
                return (view.getUint8(sampleOffset) - 128) / 128;
            }
            if (bitsPerSample === 16) {
                return view.getInt16(sampleOffset, true) / 32768;
            }
            if (bitsPerSample === 24) {
                const b0 = bytes[sampleOffset];
                const b1 = bytes[sampleOffset + 1];
                const b2 = bytes[sampleOffset + 2];
                let int = b0 | (b1 << 8) | (b2 << 16);
                if (int & 0x800000) int |= ~0xffffff;
                return int / 8388608;
            }
            if (bitsPerSample === 32) {
                return view.getInt32(sampleOffset, true) / 2147483648;
            }
            throw new Error(`Unsupported PCM bit depth: ${bitsPerSample}`);
        }

        if (audioFormat === 3) {
            if (bitsPerSample === 32) {
                return view.getFloat32(sampleOffset, true);
            }
            if (bitsPerSample === 64) {
                return view.getFloat64(sampleOffset, true);
            }
            throw new Error(`Unsupported float bit depth: ${bitsPerSample}`);
        }

        throw new Error(`Unsupported WAV audio format: ${audioFormat}`);
    }

    for (let i = 0; i < frameCount; i += 1) {
        let sum = 0;
        for (let ch = 0; ch < numChannels; ch += 1) {
            sum += sampleAt(i, ch);
        }
        mono[i] = sum / numChannels;
    }

    return {
        sampleRate,
        numChannels,
        bitsPerSample,
        audioFormat,
        frameCount,
        mono,
    };
}

function decimateMono(mono, factor) {
    if (!Number.isInteger(factor) || factor < 1) {
        throw new Error("Decimation factor must be an integer >= 1");
    }
    if (factor === 1) return mono.slice();
    const out = [];
    for (let i = 0; i < mono.length; i += factor) out.push(mono[i]);
    return out;
}

export function buildRecordedSourcePayloadFromArrayBuffer(arrayBuffer, fixture, options = {}) {
    const decoded = parseWavArrayBuffer(arrayBuffer);
    const targetSampleRate = options.targetSampleRate ?? DEFAULT_TARGET_SAMPLE_RATE;
    const decimationFactor = decoded.sampleRate % targetSampleRate === 0
        ? Math.max(1, Math.floor(decoded.sampleRate / targetSampleRate))
        : 1;
    const effectiveSampleRate = decimationFactor > 1
        ? Math.floor(decoded.sampleRate / decimationFactor)
        : decoded.sampleRate;
    const mono = decimateMono(decoded.mono, decimationFactor);
    const timestamps = new Array(mono.length);
    for (let i = 0; i < mono.length; i += 1) timestamps[i] = i / effectiveSampleRate;

    const filename = fixtureFilename(fixture);
    const payload = {
        timestamps,
        values: mono,
        stream_id: options.stream_id ?? `wav.stream.${fixture?.id ?? filename}`,
        source_id: options.source_id ?? fixture?.sourceId ?? filename,
        channel: options.channel ?? "mono_average",
        modality: options.modality ?? "audio_amplitude",
        clock_policy_id: options.clock_policy_id ?? DEFAULT_CLOCK_POLICY_ID,
        meta: {
            source_mode: "recorded_source",
            source_format: "wav",
            fixture_id: fixture?.id ?? null,
            fixture_label: fixture?.label ?? filename,
            recorded_family: fixture?.recordedFamily ?? null,
            original_filename: filename,
            source_path: fixture?.relativePath ?? null,
            nominal_sample_rate_hz: effectiveSampleRate,
            original_sample_rate_hz: decoded.sampleRate,
            decimation_factor: decimationFactor,
            original_channels: decoded.numChannels,
            bits_per_sample: decoded.bitsPerSample,
            decode: "mono_average",
        },
    };

    const validation = validateIngestPayload(payload);
    if (!validation.ok) {
        throw new Error(validation.reasons?.[0] ?? "Recorded source payload validation failed");
    }

    return payload;
}

export async function loadRecordedSourcePayload(fixture, options = {}) {
    if (!fixture?.relativePath) {
        throw new Error("Recorded fixture is missing relativePath");
    }

    const fixtureUrl = new URL(`../${fixture.relativePath}`, import.meta.url);
    const response = await fetch(fixtureUrl);
    if (!response.ok) {
        throw new Error(`Recorded fixture fetch failed for ${fixture.relativePath}: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return buildRecordedSourcePayloadFromArrayBuffer(arrayBuffer, fixture, options);
}
