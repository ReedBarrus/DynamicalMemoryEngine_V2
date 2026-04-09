import { createHash } from "node:crypto";

import type {
    P0_IngestFrame,
    P1EmissionBundle,
} from "../../types/temporal/temporal_floor_types_v0";
import { validateP1 } from "../../validators/temporal/validate_p1_v0.ts";

const OPERATOR_ID = "ClockAlignOp" as const;
const OPERATOR_VERSION = "v0" as const;

const DEFAULT_ALIGNMENT_MODE = "interpolate_resample" as const;
const DEFAULT_INTERPOLATION_MODE = "linear" as const;
const DEFAULT_GAP_POLICY = "linear_fill" as const;
const DEFAULT_EDGE_POLICY = "truncate" as const;

export interface ClockAlignOptionsV0 {
    target_sample_rate_hz?: number;
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function isFiniteNumberArray(value: unknown): value is number[] {
    return (
        Array.isArray(value) &&
        value.every((item) => typeof item === "number" && Number.isFinite(item))
    );
}

function median(values: number[]): number {
    const sorted = [...values].sort((left, right) => left - right);
    const midpoint = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[midpoint - 1] + sorted[midpoint]) / 2;
    }

    return sorted[midpoint];
}

function deriveSampleRateFromTimeAxisRef(timeAxisRef: string): number | undefined {
    const match = /^wav_sample_clock:(\d+(?:\.\d+)?)Hz$/.exec(timeAxisRef.trim());

    if (match === null) {
        return undefined;
    }

    const parsed = Number(match[1]);

    return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function almostEqual(left: number, right: number): boolean {
    const scale = Math.max(1, Math.abs(left), Math.abs(right));
    return Math.abs(left - right) <= Number.EPSILON * 32 * scale;
}

function buildDeterministicToken(
    primary: P0_IngestFrame,
    gridT0: number,
    targetSampleRateHz: number
): string {
    const digest = createHash("sha1");

    digest.update(primary.primary_handle);
    digest.update(primary.source_axis_ref);
    digest.update(primary.time_axis_ref);
    digest.update(String(primary.t.length));
    digest.update(String(primary.t[0]));
    digest.update(String(primary.t[primary.t.length - 1]));
    digest.update(String(primary.x.length));
    digest.update(String(primary.x[0]));
    digest.update(String(primary.x[primary.x.length - 1]));
    digest.update(String(gridT0));
    digest.update(String(targetSampleRateHz));

    return digest.digest("hex").slice(0, 16);
}

export function clockAlignOpV0(
    primary: P0_IngestFrame,
    options?: ClockAlignOptionsV0
): P1EmissionBundle {
    if (primary === null || typeof primary !== "object" || Array.isArray(primary)) {
        throw new TypeError("clockAlignOpV0 expects a P0_IngestFrame object.");
    }

    if (primary.lane !== "P" || primary.artifact_class !== "P0_IngestFrame") {
        throw new TypeError("clockAlignOpV0 expects a P0_IngestFrame primary artifact.");
    }

    if (!isNonEmptyString(primary.primary_handle)) {
        throw new TypeError("clockAlignOpV0 expects primary_handle to be a non-empty string.");
    }

    if (!isFiniteNumberArray(primary.t) || !isFiniteNumberArray(primary.x)) {
        throw new TypeError("clockAlignOpV0 expects finite numeric t and x arrays.");
    }

    if (primary.t.length !== primary.x.length || primary.t.length === 0) {
        throw new Error("clockAlignOpV0 requires non-empty t and x arrays of equal length.");
    }

    if (options !== undefined && (options === null || typeof options !== "object" || Array.isArray(options))) {
        throw new TypeError("clockAlignOpV0 options must be an object when provided.");
    }

    const t = primary.t;
    const x = primary.x;

    let repeatedTimestampCount = 0;
    let nonMonotonicTimestampCount = 0;
    const positiveDeltas: number[] = [];

    for (let index = 1; index < t.length; index += 1) {
        const delta = t[index] - t[index - 1];

        if (delta === 0) {
            repeatedTimestampCount += 1;
            continue;
        }

        if (delta < 0) {
            nonMonotonicTimestampCount += 1;
            continue;
        }

        positiveDeltas.push(delta);
    }

    if (repeatedTimestampCount > 0 || nonMonotonicTimestampCount > 0) {
        throw new Error(
            "clockAlignOpV0 v0 only supports strictly increasing upstream timestamps under its declared deterministic alignment policy."
        );
    }

    if (positiveDeltas.length === 0) {
        throw new Error(
            "clockAlignOpV0 could not derive a lawful alignment grid from fewer than two distinct timestamps."
        );
    }

    const derivedSampleRateFromAxis = deriveSampleRateFromTimeAxisRef(primary.time_axis_ref);
    const derivedSamplePeriod = median(positiveDeltas);
    const derivedSampleRateHz =
        derivedSampleRateFromAxis === undefined
            ? 1 / derivedSamplePeriod
            : derivedSampleRateFromAxis;
    const declaredSampleRateHz = options?.target_sample_rate_hz;
    const targetSampleRateHz =
        declaredSampleRateHz === undefined
            ? derivedSampleRateHz
            : declaredSampleRateHz;

    if (
        typeof targetSampleRateHz !== "number" ||
        !Number.isFinite(targetSampleRateHz) ||
        targetSampleRateHz <= 0
    ) {
        throw new TypeError(
            "clockAlignOpV0 expects target_sample_rate_hz to be a positive finite number when provided."
        );
    }

    const gridSource =
        declaredSampleRateHz === undefined
            ? "derived_from_p0" as const
            : "declared" as const;
    const gridT0 = t[0];
    const samplePeriod = 1 / targetSampleRateHz;
    const sourceEndTime = t[t.length - 1];
    const frameCount = Math.floor(((sourceEndTime - gridT0) * targetSampleRateHz) + 1e-9) + 1;

    if (!Number.isSafeInteger(frameCount) || frameCount <= 0) {
        throw new Error("clockAlignOpV0 could not construct a lawful aligned frame count.");
    }

    const alignedValues = new Array<number>(frameCount);
    let fillCount = 0;
    let sourceIndex = 0;

    // Remap each declared grid position onto the nearest bracketing source interval.
    for (let frameIndex = 0; frameIndex < frameCount; frameIndex += 1) {
        const alignedTime = gridT0 + frameIndex * samplePeriod;

        while (
            sourceIndex + 1 < t.length &&
            t[sourceIndex + 1] < alignedTime &&
            !almostEqual(t[sourceIndex + 1], alignedTime)
        ) {
            sourceIndex += 1;
        }

        if (almostEqual(alignedTime, t[sourceIndex])) {
            alignedValues[frameIndex] = x[sourceIndex];
            continue;
        }

        if (sourceIndex + 1 >= t.length) {
            throw new Error(
                "clockAlignOpV0 reached an out-of-range alignment position under truncate edge policy."
            );
        }

        if (almostEqual(alignedTime, t[sourceIndex + 1])) {
            alignedValues[frameIndex] = x[sourceIndex + 1];
            continue;
        }

        const leftTime = t[sourceIndex];
        const rightTime = t[sourceIndex + 1];
        const leftValue = x[sourceIndex];
        const rightValue = x[sourceIndex + 1];

        if (!(alignedTime > leftTime && alignedTime < rightTime)) {
            throw new Error(
                "clockAlignOpV0 could not place an aligned sample within a lawful source interval."
            );
        }

        const ratio = (alignedTime - leftTime) / (rightTime - leftTime);
        alignedValues[frameIndex] = leftValue + (rightValue - leftValue) * ratio;
        fillCount += 1;
    }

    let estimatedGapCount = 0;
    let droppedSampleCount = 0;
    let residualSumSquares = 0;

    for (let index = 0; index < positiveDeltas.length; index += 1) {
        const delta = positiveDeltas[index];
        const insertedGridPositions = Math.max(
            0,
            Math.ceil((delta - Number.EPSILON * 32) / samplePeriod) - 1
        );

        if (insertedGridPositions > 0) {
            estimatedGapCount += 1;
        }
    }

    for (let index = 0; index < t.length; index += 1) {
        const sourceTime = t[index];
        const nearestGridIndex = Math.round((sourceTime - gridT0) * targetSampleRateHz);
        const nearestGridTime = gridT0 + nearestGridIndex * samplePeriod;
        const normalizedResidual = (sourceTime - nearestGridTime) / samplePeriod;

        residualSumSquares += normalizedResidual * normalizedResidual;

        if (!almostEqual(sourceTime, nearestGridTime)) {
            droppedSampleCount += 1;
        }
    }

    const residualIrregularityScore = Math.sqrt(residualSumSquares / t.length);
    const interpolationCoverageRatio = fillCount / frameCount;
    const driftEstimatePpm =
        ((derivedSampleRateHz - targetSampleRateHz) / targetSampleRateHz) * 1_000_000;

    const token = buildDeterministicToken(primary, gridT0, targetSampleRateHz);
    const alignedPrimaryHandle = `p1_${token}`;

    const alignedPrimary = {
        lane: "P" as const,
        artifact_class: "P1_ClockAlignedFrame" as const,
        primary_handle: alignedPrimaryHandle,
        upstream_primary_handle: primary.primary_handle,
        grid_t0: gridT0,
        Fs: targetSampleRateHz,
        n: frameCount,
        x: alignedValues,
    };

    const validation = validateP1(alignedPrimary);

    if (validation.status !== "pass") {
        throw new Error(
            `clockAlignOpV0 produced a non-lawful P1 emission: ${validation.failure_codes.join(", ")}`
        );
    }

    return {
        primary: alignedPrimary,
        validation,
        lineage: {
            lane: "L" as const,
            lineage_class: "L1_ClockAlignLineage" as const,
            companion_handle: `l1_${token}`,
            primary_handle: alignedPrimary.primary_handle,
            upstream_primary_handle: primary.primary_handle,
            alignment_event_id: `alignment_event_${token}`,
            operator_id: OPERATOR_ID,
            operator_version: OPERATOR_VERSION,
        },
        accounting: {
            lane: "A" as const,
            accounting_class: "A1_ClockAlignApplication" as const,
            companion_handle: `a1_${token}`,
            primary_handle: alignedPrimary.primary_handle,
            target_sample_rate_hz: targetSampleRateHz,
            alignment_mode: DEFAULT_ALIGNMENT_MODE,
            interpolation_mode: DEFAULT_INTERPOLATION_MODE,
            gap_policy: DEFAULT_GAP_POLICY,
            edge_policy: DEFAULT_EDGE_POLICY,
            grid_source: gridSource,
            non_claims: [
                "not_raw_source",
                "not_identity_preserving_by_default",
            ] as ["not_raw_source", "not_identity_preserving_by_default"],
        },
        diagnostics: {
            lane: "D" as const,
            diagnostics_class: "D1_ClockAlignDiagnostics" as const,
            companion_handle: `d1_${token}`,
            primary_handle: alignedPrimary.primary_handle,
            repeated_timestamp_count: repeatedTimestampCount,
            non_monotonic_timestamp_count: nonMonotonicTimestampCount,
            estimated_gap_count: estimatedGapCount,
            drift_estimate_ppm: driftEstimatePpm,
            offset_estimate_ms: 0,
            fill_count: fillCount,
            dropped_sample_count: droppedSampleCount,
            interpolation_coverage_ratio: interpolationCoverageRatio,
            residual_irregularity_score: residualIrregularityScore,
        },
        tertiary: {
            lane: "T" as const,
            tertiary_class: "T1_Deferred" as const,
            companion_handle: `t1_${token}`,
            primary_handle: alignedPrimary.primary_handle,
            status: "declared_but_deferred" as const,
        },
    };
}
