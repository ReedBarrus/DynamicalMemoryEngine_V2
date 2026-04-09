import { createHash } from "node:crypto";

import type {
    P1_ClockAlignedFrame,
    P2EmissionBundle,
} from "../../types/temporal/temporal_floor_types_v0";
import { validateP2 } from "../../validators/temporal/validate_p2_v0.ts";

const OPERATOR_ID = "WindowOp" as const;
const OPERATOR_VERSION = "v0" as const;

const DEFAULT_WINDOW_FUNCTION = "hann" as const;
const DEFAULT_WINDOW_LENGTH_N = 1024;
const DEFAULT_HOP_N = 512;
const DEFAULT_BOUNDARY_POLICY = "truncate" as const;
const DEFAULT_SEGMENTATION_MODE = "sliding" as const;

export interface WindowOptionsV0 {
    window_length_n?: number;
    hop_n?: number;
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

function buildHannWindow(length: number): number[] {
    if (length === 1) {
        return [1];
    }

    const coefficients = new Array<number>(length);

    for (let index = 0; index < length; index += 1) {
        coefficients[index] = 0.5 * (1 - Math.cos((2 * Math.PI * index) / (length - 1)));
    }

    return coefficients;
}

function buildDeterministicToken(
    primary: P1_ClockAlignedFrame,
    windowLengthN: number,
    hopN: number,
    startIndex: number
): string {
    const digest = createHash("sha1");

    digest.update(primary.primary_handle);
    digest.update(String(primary.grid_t0));
    digest.update(String(primary.Fs));
    digest.update(String(primary.n));
    digest.update(String(windowLengthN));
    digest.update(String(hopN));
    digest.update(String(startIndex));

    return digest.digest("hex").slice(0, 16);
}

export function windowOpV0(
    primary: P1_ClockAlignedFrame,
    options?: WindowOptionsV0
): P2EmissionBundle[] {
    if (primary === null || typeof primary !== "object" || Array.isArray(primary)) {
        throw new TypeError("windowOpV0 expects a P1_ClockAlignedFrame object.");
    }

    if (primary.lane !== "P" || primary.artifact_class !== "P1_ClockAlignedFrame") {
        throw new TypeError("windowOpV0 expects a P1_ClockAlignedFrame primary artifact.");
    }

    if (
        !isNonEmptyString(primary.primary_handle) ||
        !isNonEmptyString(primary.upstream_primary_handle)
    ) {
        throw new TypeError(
            "windowOpV0 expects primary_handle and upstream_primary_handle to be non-empty strings."
        );
    }

    if (
        typeof primary.grid_t0 !== "number" ||
        !Number.isFinite(primary.grid_t0) ||
        typeof primary.Fs !== "number" ||
        !Number.isFinite(primary.Fs) ||
        primary.Fs <= 0
    ) {
        throw new TypeError("windowOpV0 expects finite grid_t0 and positive finite Fs.");
    }

    if (!Number.isInteger(primary.n) || primary.n <= 0) {
        throw new TypeError("windowOpV0 expects n to be a positive integer.");
    }

    if (!isFiniteNumberArray(primary.x) || primary.x.length !== primary.n) {
        throw new TypeError(
            "windowOpV0 expects x to be a finite numeric array matching primary.n."
        );
    }

    if (
        options !== undefined &&
        (options === null || typeof options !== "object" || Array.isArray(options))
    ) {
        throw new TypeError("windowOpV0 options must be an object when provided.");
    }

    const windowLengthN = options?.window_length_n ?? DEFAULT_WINDOW_LENGTH_N;
    const hopN = options?.hop_n ?? DEFAULT_HOP_N;

    if (!Number.isInteger(windowLengthN) || windowLengthN <= 0) {
        throw new TypeError(
            "windowOpV0 expects window_length_n to be a positive integer when provided."
        );
    }

    if (!Number.isInteger(hopN) || hopN <= 0) {
        throw new TypeError("windowOpV0 expects hop_n to be a positive integer when provided.");
    }

    if (windowLengthN > primary.n) {
        throw new Error(
            "windowOpV0 could not emit a lawful window because window_length_n exceeds upstream frame length under truncate boundary policy."
        );
    }

    const coefficients = buildHannWindow(windowLengthN);
    const bundles: P2EmissionBundle[] = [];

    for (
        let startIndex = 0;
        startIndex + windowLengthN <= primary.n;
        startIndex += hopN
    ) {
        const token = buildDeterministicToken(primary, windowLengthN, hopN, startIndex);
        const windowedValues = new Array<number>(windowLengthN);
        let clipped = false;

        for (let sampleIndex = 0; sampleIndex < windowLengthN; sampleIndex += 1) {
            const sourceValue = primary.x[startIndex + sampleIndex];
            const windowedValue = sourceValue * coefficients[sampleIndex];

            windowedValues[sampleIndex] = windowedValue;
            clipped =
                clipped ||
                Math.abs(windowedValue) > Math.abs(sourceValue) + Number.EPSILON * 32;
        }

        const windowGridT0 = primary.grid_t0 + startIndex / primary.Fs;
        const windowId = `window_${token}`;
        const windowPrimaryHandle = `p2_${token}`;

        const windowPrimary = {
            lane: "P" as const,
            artifact_class: "P2_WindowFrame" as const,
            primary_handle: windowPrimaryHandle,
            upstream_primary_handle: primary.primary_handle,
            window_id: windowId,
            grid_t0: windowGridT0,
            Fs: primary.Fs,
            n: windowLengthN,
            x: windowedValues,
        };

        const validation = validateP2(windowPrimary);

        if (validation.status !== "pass") {
            throw new Error(
                `windowOpV0 produced a non-lawful P2 emission: ${validation.failure_codes.join(", ")}`
            );
        }

        bundles.push({
            primary: windowPrimary,
            validation,
            lineage: {
                lane: "L" as const,
                lineage_class: "L2_WindowLineage" as const,
                companion_handle: `l2_${token}`,
                primary_handle: windowPrimary.primary_handle,
                upstream_primary_handle: primary.primary_handle,
                window_event_id: `window_event_${token}`,
                operator_id: OPERATOR_ID,
                operator_version: OPERATOR_VERSION,
            },
            accounting: {
                lane: "A" as const,
                accounting_class: "A2_WindowApplication" as const,
                companion_handle: `a2_${token}`,
                primary_handle: windowPrimary.primary_handle,
                window_function: DEFAULT_WINDOW_FUNCTION,
                window_length_n: windowLengthN,
                hop_n: hopN,
                boundary_policy: DEFAULT_BOUNDARY_POLICY,
                segmentation_mode: DEFAULT_SEGMENTATION_MODE,
                non_claims: [
                    "not_raw_segment",
                    "not_selection_or_quality_by_default",
                ] as ["not_raw_segment", "not_selection_or_quality_by_default"],
            },
            diagnostics: {
                lane: "D" as const,
                diagnostics_class: "D2_WindowDiagnostics" as const,
                companion_handle: `d2_${token}`,
                primary_handle: windowPrimary.primary_handle,
                padded: false,
                clipped,
                estimated_gap_count: 0,
                gap_total_duration: 0,
                missing_ratio: 0,
            },
            tertiary: {
                lane: "T" as const,
                tertiary_class: "T2_Deferred" as const,
                companion_handle: `t2_${token}`,
                primary_handle: windowPrimary.primary_handle,
                status: "declared_but_deferred" as const,
            },
        });
    }

    if (bundles.length === 0) {
        throw new Error(
            "windowOpV0 produced no lawful windows under the declared truncate boundary policy."
        );
    }

    return bundles;
}
