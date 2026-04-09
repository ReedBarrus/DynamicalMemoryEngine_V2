import { createHash } from "node:crypto";

import type {
    P2_WindowFrame,
    P3EmissionBundle,
} from "../../types/temporal/temporal_floor_types_v0";
import { validateP3 } from "../../validators/temporal/validate_p3_v0.ts";

const OPERATOR_ID = "TransformOp" as const;
const OPERATOR_VERSION = "v0" as const;

const DEFAULT_TRANSFORM_KIND = "dft" as const;
const DEFAULT_TRANSFORM_DOMAIN = "complex_cartesian" as const;
const DEFAULT_NORMALIZATION_MODE = "none" as const;
const DEFAULT_NUMERIC_PRECISION = "float64" as const;
const DEFAULT_BIN_GENERATION_MODE = "full" as const;

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function isFiniteNumberArray(value: unknown): value is number[] {
    return (
        Array.isArray(value) &&
        value.every((item) => typeof item === "number" && Number.isFinite(item))
    );
}

function buildDeterministicToken(primary: P2_WindowFrame): string {
    const digest = createHash("sha1");

    digest.update(primary.primary_handle);
    digest.update(primary.upstream_primary_handle);
    digest.update(primary.window_id);
    digest.update(String(primary.grid_t0));
    digest.update(String(primary.Fs));
    digest.update(String(primary.n));
    digest.update(String(primary.x[0]));
    digest.update(String(primary.x[primary.x.length - 1]));

    return digest.digest("hex").slice(0, 16);
}

export function transformOpV0(primary: P2_WindowFrame): P3EmissionBundle {
    if (primary === null || typeof primary !== "object" || Array.isArray(primary)) {
        throw new TypeError("transformOpV0 expects a P2_WindowFrame object.");
    }

    if (primary.lane !== "P" || primary.artifact_class !== "P2_WindowFrame") {
        throw new TypeError("transformOpV0 expects a P2_WindowFrame primary artifact.");
    }

    if (
        !isNonEmptyString(primary.primary_handle) ||
        !isNonEmptyString(primary.upstream_primary_handle) ||
        !isNonEmptyString(primary.window_id)
    ) {
        throw new TypeError(
            "transformOpV0 expects primary_handle, upstream_primary_handle, and window_id to be non-empty strings."
        );
    }

    if (
        typeof primary.grid_t0 !== "number" ||
        !Number.isFinite(primary.grid_t0) ||
        typeof primary.Fs !== "number" ||
        !Number.isFinite(primary.Fs) ||
        primary.Fs <= 0
    ) {
        throw new TypeError("transformOpV0 expects finite grid_t0 and positive finite Fs.");
    }

    if (!Number.isInteger(primary.n) || primary.n <= 0) {
        throw new TypeError("transformOpV0 expects n to be a positive integer.");
    }

    if (!isFiniteNumberArray(primary.x) || primary.x.length !== primary.n) {
        throw new TypeError(
            "transformOpV0 expects x to be a finite numeric array matching primary.n."
        );
    }

    const df = primary.Fs / primary.n;
    const bins = new Array<{
        k: number;
        f: number;
        re: number;
        im: number;
    }>(primary.n);
    const magnitude = new Array<{ k: number; f: number; value: number }>(primary.n);
    const phase = new Array<{ k: number; f: number; value: number }>(primary.n);

    let frequencyEnergy = 0;
    let nanDetected = false;
    let infDetected = false;

    for (let k = 0; k < primary.n; k += 1) {
        let re = 0;
        let im = 0;

        for (let sampleIndex = 0; sampleIndex < primary.n; sampleIndex += 1) {
            const angle = (2 * Math.PI * k * sampleIndex) / primary.n;
            const sampleValue = primary.x[sampleIndex];

            re += sampleValue * Math.cos(angle);
            im -= sampleValue * Math.sin(angle);
        }

        nanDetected = nanDetected || Number.isNaN(re) || Number.isNaN(im);
        infDetected = infDetected || !Number.isFinite(re) || !Number.isFinite(im);

        const frequencyHz = k * df;
        const magnitudeValue = Math.hypot(re, im);
        const phaseValue = Math.atan2(im, re);

        bins[k] = {
            k,
            f: frequencyHz,
            re,
            im,
        };

        magnitude[k] = {
            k,
            f: frequencyHz,
            value: magnitudeValue,
        };

        phase[k] = {
            k,
            f: frequencyHz,
            value: phaseValue,
        };

        frequencyEnergy += (re * re) + (im * im);
    }

    const timeEnergy = primary.x.reduce(
        (sum, sampleValue) => sum + (sampleValue * sampleValue),
        0
    );
    const reconstructedTimeEnergy = frequencyEnergy / primary.n;
    const parsevalError = reconstructedTimeEnergy - timeEnergy;

    const token = buildDeterministicToken(primary);
    const transformPrimary = {
        lane: "P" as const,
        artifact_class: "P3_SpectralFrame" as const,
        primary_handle: `p3_${token}`,
        upstream_primary_handle: primary.primary_handle,
        window_id: primary.window_id,
        Fs: primary.Fs,
        n: primary.n,
        df,
        bins,
    };

    const validation = validateP3(transformPrimary);

    if (validation.status !== "pass") {
        throw new Error(
            `transformOpV0 produced a non-lawful P3 emission: ${validation.failure_codes.join(", ")}`
        );
    }

    return {
        primary: transformPrimary,
        validation,
        lineage: {
            lane: "L" as const,
            lineage_class: "L3_TransformLineage" as const,
            companion_handle: `l3_${token}`,
            primary_handle: transformPrimary.primary_handle,
            upstream_primary_handle: primary.primary_handle,
            transform_event_id: `transform_event_${token}`,
            operator_id: OPERATOR_ID,
            operator_version: OPERATOR_VERSION,
        },
        accounting: {
            lane: "A" as const,
            accounting_class: "A3_TransformApplication" as const,
            companion_handle: `a3_${token}`,
            primary_handle: transformPrimary.primary_handle,
            transform_kind: DEFAULT_TRANSFORM_KIND,
            transform_domain: DEFAULT_TRANSFORM_DOMAIN,
            normalization_mode: DEFAULT_NORMALIZATION_MODE,
            numeric_precision: DEFAULT_NUMERIC_PRECISION,
            bin_generation_mode: DEFAULT_BIN_GENERATION_MODE,
            non_claims: [
                "not_interpretation",
                "not_quality_by_default",
                "not_polar_view_by_default",
            ] as [
                "not_interpretation",
                "not_quality_by_default",
                "not_polar_view_by_default",
            ],
        },
        diagnostics: {
            lane: "D" as const,
            diagnostics_class: "D3_TransformDiagnostics" as const,
            companion_handle: `d3_${token}`,
            primary_handle: transformPrimary.primary_handle,
            residue: {
                parseval_error: parsevalError,
                nan_detected: nanDetected,
                inf_detected: infDetected,
            },
            derived_geometry: {
                magnitude,
                phase,
            },
        },
        tertiary: {
            lane: "T" as const,
            tertiary_class: "T3_Deferred" as const,
            companion_handle: `t3_${token}`,
            primary_handle: transformPrimary.primary_handle,
            status: "declared_but_deferred" as const,
        },
    };
}
