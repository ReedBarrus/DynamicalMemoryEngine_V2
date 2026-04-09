import type { SelectedSourceReferenceV0 } from "../intake/source_intake_v0.ts";
import { clockAlignOpV0, type ClockAlignOptionsV0 } from "../../operators/temporal/clock_align_op_v0.ts";
import { ingestOpV0 } from "../../operators/temporal/ingest_op_v0.ts";
import { transformOpV0 } from "../../operators/temporal/transform_op_v0.ts";
import { windowOpV0, type WindowOptionsV0 } from "../../operators/temporal/window_op_v0.ts";
import type {
    P0EmissionBundle,
    P1EmissionBundle,
    P2EmissionBundle,
    P3EmissionBundle,
} from "../../types/temporal/temporal_floor_types_v0.ts";

export type OrchestratorFailureCodeV0 =
    | "malformed_execution_request"
    | "absent_selected_source_reference"
    | "malformed_selected_source_reference"
    | "unsupported_source_family";

export type OperatorStageV0 = "ingest" | "clock_align" | "window" | "transform";

export interface MinimalOrchestratorRequestV0 {
    selected_source_reference?: SelectedSourceReferenceV0;
    channel_index?: number;
    clock_align_options?: ClockAlignOptionsV0;
    window_options?: WindowOptionsV0;
}

export interface TemporalChainStageOutputsV0 {
    p0: P0EmissionBundle | null;
    p1: P1EmissionBundle | null;
    p2: P2EmissionBundle[] | null;
    p3: P3EmissionBundle[];
}

export interface MinimalOrchestratorSuccessV0 {
    status: "completed";
    selected_source_reference: SelectedSourceReferenceV0;
    stage_order: typeof STAGE_ORDER;
    stage_outputs: TemporalChainStageOutputsV0;
}

export interface MinimalOrchestratorFailureV0 {
    status: "orchestrator_failure";
    seam: "orchestrator";
    failure_class: "orchestrator_failure";
    failure_code: OrchestratorFailureCodeV0;
    message: string;
    stage_outputs: TemporalChainStageOutputsV0;
}

export interface SurfacedOperatorFailureV0 {
    status: "surfaced_failure";
    seam: "operator";
    failure_class: "operator_failure";
    failure_code: "operator_error";
    operator_stage: OperatorStageV0;
    message: string;
    selected_source_reference: SelectedSourceReferenceV0;
    stage_outputs: TemporalChainStageOutputsV0;
    failed_window_index?: number;
}

export type MinimalOrchestratorResultV0 =
    | MinimalOrchestratorSuccessV0
    | MinimalOrchestratorFailureV0
    | SurfacedOperatorFailureV0;

const STAGE_ORDER = ["ingest", "clock_align", "window", "transform"] as const;

function createEmptyStageOutputs(): TemporalChainStageOutputsV0 {
    return {
        p0: null,
        p1: null,
        p2: null,
        p3: [],
    };
}

function buildOrchestratorFailure(
    failureCode: OrchestratorFailureCodeV0,
    message: string,
    stageOutputs: TemporalChainStageOutputsV0
): MinimalOrchestratorFailureV0 {
    return {
        status: "orchestrator_failure",
        seam: "orchestrator",
        failure_class: "orchestrator_failure",
        failure_code: failureCode,
        message,
        stage_outputs: stageOutputs,
    };
}

function buildOperatorFailure(
    operatorStage: OperatorStageV0,
    message: string,
    selectedSourceReference: SelectedSourceReferenceV0,
    stageOutputs: TemporalChainStageOutputsV0,
    failedWindowIndex?: number
): SurfacedOperatorFailureV0 {
    return {
        status: "surfaced_failure",
        seam: "operator",
        failure_class: "operator_failure",
        failure_code: "operator_error",
        operator_stage: operatorStage,
        message,
        selected_source_reference: selectedSourceReference,
        stage_outputs: stageOutputs,
        failed_window_index: failedWindowIndex,
    };
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function isSelectedSourceReferenceV0(
    value: unknown
): value is SelectedSourceReferenceV0 {
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
        return false;
    }

    const candidate = value as Record<string, unknown>;

    return (
        candidate.reference_class === "SelectedSourceReferenceV0" &&
        (candidate.selection_mode === "local_path" || candidate.selection_mode === "saved_reference") &&
        isNonEmptyString(candidate.source_family) &&
        isNonEmptyString(candidate.selected_reference_id) &&
        isNonEmptyString(candidate.display_name) &&
        isNonEmptyString(candidate.absolute_path) &&
        isNonEmptyString(candidate.relative_path)
    );
}

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    return String(error);
}

export function minimalOrchestratorV0(
    request: MinimalOrchestratorRequestV0
): MinimalOrchestratorResultV0 {
    const stageOutputs = createEmptyStageOutputs();

    if (request === null || typeof request !== "object" || Array.isArray(request)) {
        return buildOrchestratorFailure(
            "malformed_execution_request",
            "Minimal Orchestrator v0 expects an execution request object.",
            stageOutputs
        );
    }

    if (request.selected_source_reference === undefined) {
        return buildOrchestratorFailure(
            "absent_selected_source_reference",
            "Minimal Orchestrator v0 requires selected_source_reference.",
            stageOutputs
        );
    }

    if (!isSelectedSourceReferenceV0(request.selected_source_reference)) {
        return buildOrchestratorFailure(
            "malformed_selected_source_reference",
            "Minimal Orchestrator v0 requires a lawful SelectedSourceReferenceV0 object.",
            stageOutputs
        );
    }

    if (request.selected_source_reference.source_family !== "wav") {
        return buildOrchestratorFailure(
            "unsupported_source_family",
            "Minimal Orchestrator v0 currently supports only .wav selected source references.",
            stageOutputs
        );
    }

    const selectedSourceReference = request.selected_source_reference;
    let p0Bundle: P0EmissionBundle;
    let p1Bundle: P1EmissionBundle;
    let p2Bundles: P2EmissionBundle[];

    try {
        p0Bundle = ingestOpV0({
            wav_file_path: selectedSourceReference.absolute_path,
            channel_index: request.channel_index,
        });
        stageOutputs.p0 = p0Bundle;
    } catch (error) {
        return buildOperatorFailure(
            "ingest",
            getErrorMessage(error),
            selectedSourceReference,
            stageOutputs
        );
    }

    try {
        p1Bundle = clockAlignOpV0(
            p0Bundle.primary,
            request.clock_align_options
        );
        stageOutputs.p1 = p1Bundle;
    } catch (error) {
        return buildOperatorFailure(
            "clock_align",
            getErrorMessage(error),
            selectedSourceReference,
            stageOutputs
        );
    }

    try {
        p2Bundles = windowOpV0(
            p1Bundle.primary,
            request.window_options
        );
        stageOutputs.p2 = p2Bundles;
    } catch (error) {
        return buildOperatorFailure(
            "window",
            getErrorMessage(error),
            selectedSourceReference,
            stageOutputs
        );
    }

    for (let windowIndex = 0; windowIndex < p2Bundles.length; windowIndex += 1) {
        try {
            stageOutputs.p3.push(transformOpV0(p2Bundles[windowIndex].primary));
        } catch (error) {
            return buildOperatorFailure(
                "transform",
                getErrorMessage(error),
                selectedSourceReference,
                stageOutputs,
                windowIndex
            );
        }
    }

    return {
        status: "completed",
        selected_source_reference: selectedSourceReference,
        stage_order: STAGE_ORDER,
        stage_outputs: stageOutputs,
    };
}
