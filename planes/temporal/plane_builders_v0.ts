import type { TemporalChainStageOutputsV0 } from "../../execution/orchestration/minimal_orchestrator_v0.ts";
import type {
    P0EmissionBundle,
    P1EmissionBundle,
    P2EmissionBundle,
    P3EmissionBundle,
    PlaneD3DiagnosticView,
    PlaneP0TemporalView,
    PlaneP1TemporalView,
    PlaneP2TemporalView,
    PlaneP3SpectralView,
} from "../../types/temporal/temporal_floor_types_v0.ts";

export type SupportedTemporalPlaneV0 =
    | PlaneP0TemporalView
    | PlaneP1TemporalView
    | PlaneP2TemporalView
    | PlaneP3SpectralView
    | PlaneD3DiagnosticView;

export type SupportedTemporalPlaneClassV0 =
    | "PlaneP0TemporalView"
    | "PlaneP1TemporalView"
    | "PlaneP2TemporalView"
    | "PlaneP3SpectralView"
    | "PlaneD3DiagnosticView";

export type PlaneBuilderRequestV0 =
    | { plane_class: "PlaneP0TemporalView"; bundle: P0EmissionBundle }
    | { plane_class: "PlaneP1TemporalView"; bundle: P1EmissionBundle }
    | { plane_class: "PlaneP2TemporalView"; bundle: P2EmissionBundle }
    | { plane_class: "PlaneP3SpectralView"; bundle: P3EmissionBundle }
    | { plane_class: "PlaneD3DiagnosticView"; bundle: P3EmissionBundle };

export interface PlaneBuildFromStageOutputsRequestV0 {
    plane_class: SupportedTemporalPlaneClassV0;
    stage_outputs: TemporalChainStageOutputsV0;
    frame_index?: number;
}

function isFiniteNumber(value: unknown): value is number {
    return typeof value === "number" && Number.isFinite(value);
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function assertFiniteNumberArray(value: unknown, fieldName: string): asserts value is number[] {
    if (!Array.isArray(value) || !value.every(isFiniteNumber)) {
        throw new TypeError(
            `Plane Builders v0 expected ${fieldName} to be a finite numeric array.`
        );
    }
}

function assertNonNegativeInteger(value: unknown, fieldName: string): asserts value is number {
    if (!Number.isInteger(value) || (value as number) < 0) {
        throw new TypeError(
            `Plane Builders v0 expected ${fieldName} to be a non-negative integer.`
        );
    }
}

export function buildPlaneP0V0(bundle: P0EmissionBundle): PlaneP0TemporalView {
    if (bundle === null || typeof bundle !== "object" || Array.isArray(bundle)) {
        throw new TypeError("buildPlaneP0V0 expects a P0EmissionBundle object.");
    }

    if (bundle.primary.artifact_class !== "P0_IngestFrame") {
        throw new TypeError("buildPlaneP0V0 expects a P0_IngestFrame primary artifact.");
    }

    if (!isNonEmptyString(bundle.primary.primary_handle)) {
        throw new TypeError("buildPlaneP0V0 expects primary_handle to be a non-empty string.");
    }

    assertFiniteNumberArray(bundle.primary.t, "P0.t");
    assertFiniteNumberArray(bundle.primary.x, "P0.x");

    if (bundle.primary.t.length !== bundle.primary.x.length) {
        throw new TypeError("buildPlaneP0V0 expects P0.t and P0.x to have the same length.");
    }

    return {
        plane_class: "PlaneP0TemporalView",
        primary_handle: bundle.primary.primary_handle,
        x_axis: "time",
        y_axis: "signal",
        t: [...bundle.primary.t],
        x: [...bundle.primary.x],
    };
}

export function buildPlaneP1V0(bundle: P1EmissionBundle): PlaneP1TemporalView {
    if (bundle === null || typeof bundle !== "object" || Array.isArray(bundle)) {
        throw new TypeError("buildPlaneP1V0 expects a P1EmissionBundle object.");
    }

    if (bundle.primary.artifact_class !== "P1_ClockAlignedFrame") {
        throw new TypeError("buildPlaneP1V0 expects a P1_ClockAlignedFrame primary artifact.");
    }

    if (!isNonEmptyString(bundle.primary.primary_handle)) {
        throw new TypeError("buildPlaneP1V0 expects primary_handle to be a non-empty string.");
    }

    if (!isFiniteNumber(bundle.primary.grid_t0) || !isFiniteNumber(bundle.primary.Fs) || bundle.primary.Fs <= 0) {
        throw new TypeError("buildPlaneP1V0 expects finite grid_t0 and positive Fs.");
    }

    assertNonNegativeInteger(bundle.primary.n, "P1.n");
    assertFiniteNumberArray(bundle.primary.x, "P1.x");

    if (bundle.primary.x.length !== bundle.primary.n) {
        throw new TypeError("buildPlaneP1V0 expects P1.x length to match P1.n.");
    }

    return {
        plane_class: "PlaneP1TemporalView",
        primary_handle: bundle.primary.primary_handle,
        x_axis: "time",
        y_axis: "signal",
        grid_t0: bundle.primary.grid_t0,
        Fs: bundle.primary.Fs,
        n: bundle.primary.n,
        x: [...bundle.primary.x],
    };
}

export function buildPlaneP2V0(bundle: P2EmissionBundle): PlaneP2TemporalView {
    if (bundle === null || typeof bundle !== "object" || Array.isArray(bundle)) {
        throw new TypeError("buildPlaneP2V0 expects a P2EmissionBundle object.");
    }

    if (bundle.primary.artifact_class !== "P2_WindowFrame") {
        throw new TypeError("buildPlaneP2V0 expects a P2_WindowFrame primary artifact.");
    }

    if (!isNonEmptyString(bundle.primary.primary_handle)) {
        throw new TypeError("buildPlaneP2V0 expects primary_handle to be a non-empty string.");
    }

    if (!isFiniteNumber(bundle.primary.grid_t0) || !isFiniteNumber(bundle.primary.Fs) || bundle.primary.Fs <= 0) {
        throw new TypeError("buildPlaneP2V0 expects finite grid_t0 and positive Fs.");
    }

    assertNonNegativeInteger(bundle.primary.n, "P2.n");
    assertFiniteNumberArray(bundle.primary.x, "P2.x");

    if (bundle.primary.x.length !== bundle.primary.n) {
        throw new TypeError("buildPlaneP2V0 expects P2.x length to match P2.n.");
    }

    return {
        plane_class: "PlaneP2TemporalView",
        primary_handle: bundle.primary.primary_handle,
        x_axis: "time",
        y_axis: "signal",
        grid_t0: bundle.primary.grid_t0,
        Fs: bundle.primary.Fs,
        n: bundle.primary.n,
        x: [...bundle.primary.x],
    };
}

export function buildPlaneP3V0(bundle: P3EmissionBundle): PlaneP3SpectralView {
    if (bundle === null || typeof bundle !== "object" || Array.isArray(bundle)) {
        throw new TypeError("buildPlaneP3V0 expects a P3EmissionBundle object.");
    }

    if (bundle.primary.artifact_class !== "P3_SpectralFrame") {
        throw new TypeError("buildPlaneP3V0 expects a P3_SpectralFrame primary artifact.");
    }

    if (!isNonEmptyString(bundle.primary.primary_handle)) {
        throw new TypeError("buildPlaneP3V0 expects primary_handle to be a non-empty string.");
    }

    if (!isFiniteNumber(bundle.primary.Fs) || bundle.primary.Fs <= 0 || !isFiniteNumber(bundle.primary.df) || bundle.primary.df <= 0) {
        throw new TypeError("buildPlaneP3V0 expects positive finite Fs and df.");
    }

    assertNonNegativeInteger(bundle.primary.n, "P3.n");

    if (!Array.isArray(bundle.primary.bins)) {
        throw new TypeError("buildPlaneP3V0 expects P3.bins to be an array.");
    }

    return {
        plane_class: "PlaneP3SpectralView",
        primary_handle: bundle.primary.primary_handle,
        x_axis: "frequency",
        y_axis: "complex_component",
        Fs: bundle.primary.Fs,
        n: bundle.primary.n,
        df: bundle.primary.df,
        bins: bundle.primary.bins.map((bin) => {
            if (
                !isFiniteNumber(bin.k) ||
                !isFiniteNumber(bin.f) ||
                !isFiniteNumber(bin.re) ||
                !isFiniteNumber(bin.im)
            ) {
                throw new TypeError(
                    "buildPlaneP3V0 expects P3 bins to remain finite Cartesian values."
                );
            }

            return {
                k: bin.k,
                f: bin.f,
                re: bin.re,
                im: bin.im,
            };
        }),
    };
}

export function buildPlaneD3V0(bundle: P3EmissionBundle): PlaneD3DiagnosticView {
    if (bundle === null || typeof bundle !== "object" || Array.isArray(bundle)) {
        throw new TypeError("buildPlaneD3V0 expects a P3EmissionBundle object.");
    }

    if (bundle.primary.artifact_class !== "P3_SpectralFrame") {
        throw new TypeError("buildPlaneD3V0 expects a P3_SpectralFrame primary artifact.");
    }

    if (bundle.diagnostics.diagnostics_class !== "D3_TransformDiagnostics") {
        throw new TypeError("buildPlaneD3V0 expects D3_TransformDiagnostics.");
    }

    if (
        !isNonEmptyString(bundle.primary.primary_handle) ||
        !isNonEmptyString(bundle.diagnostics.companion_handle)
    ) {
        throw new TypeError(
            "buildPlaneD3V0 expects primary_handle and diagnostics_handle to be non-empty strings."
        );
    }

    return {
        plane_class: "PlaneD3DiagnosticView",
        primary_handle: bundle.primary.primary_handle,
        diagnostics_handle: bundle.diagnostics.companion_handle,
        x_axis: "frequency",
        y_axis: "derived_diagnostic_value",
        magnitude: bundle.diagnostics.derived_geometry?.magnitude.map((value) => {
            if (!isFiniteNumber(value.k) || !isFiniteNumber(value.f) || !isFiniteNumber(value.value)) {
                throw new TypeError(
                    "buildPlaneD3V0 expects D3 magnitude values to remain finite."
                );
            }

            return {
                k: value.k,
                f: value.f,
                value: value.value,
            };
        }),
        phase: bundle.diagnostics.derived_geometry?.phase.map((value) => {
            if (!isFiniteNumber(value.k) || !isFiniteNumber(value.f) || !isFiniteNumber(value.value)) {
                throw new TypeError(
                    "buildPlaneD3V0 expects D3 phase values to remain finite."
                );
            }

            return {
                k: value.k,
                f: value.f,
                value: value.value,
            };
        }),
        nan_detected: bundle.diagnostics.residue.nan_detected,
        inf_detected: bundle.diagnostics.residue.inf_detected,
    };
}

export function buildPlaneV0(request: PlaneBuilderRequestV0): SupportedTemporalPlaneV0 {
    switch (request.plane_class) {
        case "PlaneP0TemporalView":
            return buildPlaneP0V0(request.bundle);
        case "PlaneP1TemporalView":
            return buildPlaneP1V0(request.bundle);
        case "PlaneP2TemporalView":
            return buildPlaneP2V0(request.bundle);
        case "PlaneP3SpectralView":
            return buildPlaneP3V0(request.bundle);
        case "PlaneD3DiagnosticView":
            return buildPlaneD3V0(request.bundle);
        default:
            throw new Error(
                `Plane Builders v0 does not support plane_class ${(request as { plane_class: string }).plane_class}.`
            );
    }
}

export function buildPlaneFromStageOutputsV0(
    request: PlaneBuildFromStageOutputsRequestV0
): SupportedTemporalPlaneV0 {
    if (request === null || typeof request !== "object" || Array.isArray(request)) {
        throw new TypeError("buildPlaneFromStageOutputsV0 expects a request object.");
    }

    switch (request.plane_class) {
        case "PlaneP0TemporalView":
            if (request.stage_outputs.p0 === null) {
                throw new Error("buildPlaneFromStageOutputsV0 could not find a P0 stage output.");
            }

            return buildPlaneP0V0(request.stage_outputs.p0);
        case "PlaneP1TemporalView":
            if (request.stage_outputs.p1 === null) {
                throw new Error("buildPlaneFromStageOutputsV0 could not find a P1 stage output.");
            }

            return buildPlaneP1V0(request.stage_outputs.p1);
        case "PlaneP2TemporalView": {
            if (request.stage_outputs.p2 === null) {
                throw new Error("buildPlaneFromStageOutputsV0 could not find P2 stage outputs.");
            }

            if (!assertFrameIndexForStage(request.frame_index, request.stage_outputs.p2.length, request.plane_class)) {
                throw new Error("Unreachable frame index assertion result.");
            }

            return buildPlaneP2V0(request.stage_outputs.p2[request.frame_index]);
        }
        case "PlaneP3SpectralView": {
            if (!assertFrameIndexForStage(request.frame_index, request.stage_outputs.p3.length, request.plane_class)) {
                throw new Error("Unreachable frame index assertion result.");
            }

            return buildPlaneP3V0(request.stage_outputs.p3[request.frame_index]);
        }
        case "PlaneD3DiagnosticView": {
            if (!assertFrameIndexForStage(request.frame_index, request.stage_outputs.p3.length, request.plane_class)) {
                throw new Error("Unreachable frame index assertion result.");
            }

            return buildPlaneD3V0(request.stage_outputs.p3[request.frame_index]);
        }
        default:
            throw new Error(
                `Plane Builders v0 does not support plane_class ${(request as { plane_class: string }).plane_class}.`
            );
    }
}

function assertFrameIndexForStage(
    frameIndex: number | undefined,
    availableCount: number,
    planeClass: "PlaneP2TemporalView" | "PlaneP3SpectralView" | "PlaneD3DiagnosticView"
): frameIndex is number {
    if (!Number.isInteger(frameIndex) || frameIndex < 0) {
        throw new TypeError(
            `Plane Builders v0 requires a non-negative frame_index for ${planeClass}.`
        );
    }

    if (frameIndex >= availableCount) {
        throw new Error(
            `Plane Builders v0 could not resolve frame_index ${frameIndex} for ${planeClass}.`
        );
    }

    return true;
}
