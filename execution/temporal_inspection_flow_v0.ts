import {
    runTemporalExecutionSurfaceV0,
    routePlaneSelectionRequestV0,
    selectExecutionStageV0,
    type ExecutionRunOptionsV0,
    type ExecutionStageSelectionV0,
    type PlaneSelectionRequestV0,
    type TemporalExecutionSurfaceFailureV0,
    type TemporalExecutionSurfaceStateV0,
} from "./temporal_execution_surface_v0.ts";
import type { TemporalChainStageOutputsV0 } from "./orchestration/minimal_orchestrator_v0.ts";
import {
    buildPlaneFromStageOutputsV0,
    type SupportedTemporalPlaneV0,
} from "../planes/temporal/plane_builders_v0.ts";
import {
    renderPlaneV0,
    type TemporalPlaneRenderV0,
} from "../planes/temporal/plane_renderer_v0.ts";

export type InspectionExecutionModeV0 = "reuse_last_run" | "run_now";

export type InspectionFlowFailureCodeV0 =
    | "malformed_inspection_request"
    | "unsupported_plane_request"
    | "selection_request_mismatch"
    | "missing_completed_stage_outputs";

export interface TemporalInspectionFlowRequestV0 {
    execution_mode?: InspectionExecutionModeV0;
    run_options?: ExecutionRunOptionsV0;
    stage_selection: ExecutionStageSelectionV0;
    plane_selection_request: PlaneSelectionRequestV0;
}

export interface InspectionFlowHostFailureV0 {
    status: "inspection_flow_failure";
    seam: "inspection_flow";
    failure_class: "inspection_flow_failure";
    failure_code: InspectionFlowFailureCodeV0;
    message: string;
}

export interface PlaneBuilderFailureV0 {
    status: "plane_builder_failure";
    seam: "plane_builder";
    failure_class: "plane_builder_failure";
    failure_code: "plane_builder_error";
    message: string;
}

export interface RendererFailureV0 {
    status: "renderer_failure";
    seam: "renderer";
    failure_class: "renderer_failure";
    failure_code: "renderer_error";
    message: string;
}

export type TemporalInspectionFlowFailureV0 =
    | TemporalExecutionSurfaceFailureV0
    | InspectionFlowHostFailureV0
    | PlaneBuilderFailureV0
    | RendererFailureV0;

export interface TemporalInspectionFlowSuccessV0 {
    status: "rendered";
    execution_surface_state: TemporalExecutionSurfaceStateV0;
    stage_selection: ExecutionStageSelectionV0;
    plane_selection_request: PlaneSelectionRequestV0;
    built_plane: SupportedTemporalPlaneV0;
    rendered_output: TemporalPlaneRenderV0;
}

export interface TemporalInspectionFlowFailureResultV0 {
    status: "inspection_failed";
    execution_surface_state: TemporalExecutionSurfaceStateV0;
    surfaced_failure: TemporalInspectionFlowFailureV0;
}

export type TemporalInspectionFlowResultV0 =
    | TemporalInspectionFlowSuccessV0
    | TemporalInspectionFlowFailureResultV0;

const SUPPORTED_PLANE_CLASSES = new Set<string>([
    "PlaneP0TemporalView",
    "PlaneP1TemporalView",
    "PlaneP2TemporalView",
    "PlaneP3SpectralView",
    "PlaneD3DiagnosticView",
]);

function isStateObject(
    state: unknown
): state is TemporalExecutionSurfaceStateV0 {
    return state !== null && typeof state === "object" && !Array.isArray(state);
}

function isRequestObject(
    request: unknown
): request is TemporalInspectionFlowRequestV0 {
    return request !== null && typeof request === "object" && !Array.isArray(request);
}

function createInspectionFlowFailure(
    failureCode: InspectionFlowFailureCodeV0,
    message: string
): InspectionFlowHostFailureV0 {
    return {
        status: "inspection_flow_failure",
        seam: "inspection_flow",
        failure_class: "inspection_flow_failure",
        failure_code: failureCode,
        message,
    };
}

function createPlaneBuilderFailure(message: string): PlaneBuilderFailureV0 {
    return {
        status: "plane_builder_failure",
        seam: "plane_builder",
        failure_class: "plane_builder_failure",
        failure_code: "plane_builder_error",
        message,
    };
}

function createRendererFailure(message: string): RendererFailureV0 {
    return {
        status: "renderer_failure",
        seam: "renderer",
        failure_class: "renderer_failure",
        failure_code: "renderer_error",
        message,
    };
}

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    return String(error);
}

function getCompletedStageOutputs(
    state: TemporalExecutionSurfaceStateV0
): TemporalChainStageOutputsV0 | null {
    if (state.last_run_result?.status !== "completed") {
        return null;
    }

    return state.last_run_result.stage_outputs;
}

function createFailureResult(
    state: TemporalExecutionSurfaceStateV0,
    failure: TemporalInspectionFlowFailureV0
): TemporalInspectionFlowFailureResultV0 {
    return {
        status: "inspection_failed",
        execution_surface_state: state,
        surfaced_failure: failure,
    };
}

function preserveExistingSurfaceFailure(
    state: TemporalExecutionSurfaceStateV0
): TemporalInspectionFlowFailureResultV0 | null {
    if (state.surfaced_failure === null) {
        return null;
    }

    if (state.surfaced_failure.status === "intake_failure") {
        return createFailureResult(state, state.surfaced_failure);
    }

    return null;
}

function validatePlaneSelectionRequest(
    request: TemporalInspectionFlowRequestV0
): InspectionFlowHostFailureV0 | null {
    if (!SUPPORTED_PLANE_CLASSES.has(request.plane_selection_request.plane_class)) {
        return createInspectionFlowFailure(
            "unsupported_plane_request",
            `Temporal Inspection Flow v0 does not support plane_class ${String(request.plane_selection_request.plane_class)}.`
        );
    }

    if (request.stage_selection.stage !== request.plane_selection_request.stage) {
        return createInspectionFlowFailure(
            "selection_request_mismatch",
            "Temporal Inspection Flow v0 requires stage_selection.stage and plane_selection_request.stage to match."
        );
    }

    if (request.stage_selection.frame_index !== request.plane_selection_request.frame_index) {
        return createInspectionFlowFailure(
            "selection_request_mismatch",
            "Temporal Inspection Flow v0 requires stage_selection.frame_index and plane_selection_request.frame_index to match."
        );
    }

    return null;
}

export function inspectTemporalExecutionSurfaceV0(
    state: TemporalExecutionSurfaceStateV0,
    request: TemporalInspectionFlowRequestV0
): TemporalInspectionFlowResultV0 {
    if (!isStateObject(state)) {
        throw new TypeError(
            "inspectTemporalExecutionSurfaceV0 expects a TemporalExecutionSurfaceStateV0 object."
        );
    }

    if (!isRequestObject(request)) {
        return createFailureResult(
            state,
            createInspectionFlowFailure(
                "malformed_inspection_request",
                "Temporal Inspection Flow v0 expects an inspection request object."
            )
        );
    }

    const validationFailure = validatePlaneSelectionRequest(request);

    if (validationFailure !== null) {
        return createFailureResult(state, validationFailure);
    }

    if (request.execution_mode !== undefined && request.execution_mode !== "reuse_last_run" && request.execution_mode !== "run_now") {
        return createFailureResult(
            state,
            createInspectionFlowFailure(
                "malformed_inspection_request",
                "Temporal Inspection Flow v0 requires execution_mode to be reuse_last_run or run_now when provided."
            )
        );
    }

    const existingFailure = preserveExistingSurfaceFailure(state);

    if (existingFailure !== null && request.execution_mode !== "run_now") {
        return existingFailure;
    }

    let workingState =
        request.execution_mode === "run_now"
            ? runTemporalExecutionSurfaceV0(state, request.run_options)
            : state;

    if (workingState.surfaced_failure !== null && workingState.last_run_result?.status !== "completed") {
        return createFailureResult(workingState, workingState.surfaced_failure);
    }

    workingState = selectExecutionStageV0(workingState, request.stage_selection);

    if (workingState.surfaced_failure !== null) {
        return createFailureResult(workingState, workingState.surfaced_failure);
    }

    workingState = routePlaneSelectionRequestV0(workingState, request.plane_selection_request);

    if (workingState.surfaced_failure !== null) {
        return createFailureResult(workingState, workingState.surfaced_failure);
    }

    const stageOutputs = getCompletedStageOutputs(workingState);

    if (stageOutputs === null) {
        return createFailureResult(
            workingState,
            createInspectionFlowFailure(
                "missing_completed_stage_outputs",
                "Temporal Inspection Flow v0 requires completed stage outputs before plane building."
            )
        );
    }

    let builtPlane: SupportedTemporalPlaneV0;

    try {
        builtPlane = buildPlaneFromStageOutputsV0({
            plane_class: request.plane_selection_request.plane_class,
            stage_outputs: stageOutputs,
            frame_index: request.plane_selection_request.frame_index,
        });
    } catch (error) {
        return createFailureResult(
            workingState,
            createPlaneBuilderFailure(getErrorMessage(error))
        );
    }

    let renderedOutput: TemporalPlaneRenderV0;

    try {
        renderedOutput = renderPlaneV0(builtPlane);
    } catch (error) {
        return createFailureResult(
            workingState,
            createRendererFailure(getErrorMessage(error))
        );
    }

    return {
        status: "rendered",
        execution_surface_state: workingState,
        stage_selection: request.stage_selection,
        plane_selection_request: request.plane_selection_request,
        built_plane: builtPlane,
        rendered_output: renderedOutput,
    };
}
