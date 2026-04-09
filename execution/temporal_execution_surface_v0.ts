import {
    minimalOrchestratorV0,
    type MinimalOrchestratorResultV0,
    type SurfacedOperatorFailureV0,
    type MinimalOrchestratorFailureV0,
    type TemporalChainStageOutputsV0,
} from "./orchestration/minimal_orchestrator_v0.ts";
import {
    sourceIntakeV0,
    type SavedWavReferenceV0,
    type SelectedSourceReferenceV0,
    type SourceIntakeFailureV0,
    type SourceIntakeResultV0,
} from "./intake/source_intake_v0.ts";
import type { ClockAlignOptionsV0 } from "../operators/temporal/clock_align_op_v0.ts";
import type { WindowOptionsV0 } from "../operators/temporal/window_op_v0.ts";

export type IntakeInteractionKindV0 = "drag_and_drop" | "file_picker";
export type ExecutionInspectableStageV0 = "P0" | "P1" | "P2" | "P3" | "D3";
export type ExecutionPlaneClassV0 =
    | "PlaneP0TemporalView"
    | "PlaneP1TemporalView"
    | "PlaneP2TemporalView"
    | "PlaneP3SpectralView"
    | "PlaneD3DiagnosticView";

export type ExecutionSurfaceFailureCodeV0 =
    | "malformed_intake_interaction"
    | "no_selected_source_reference"
    | "no_completed_run"
    | "unavailable_stage"
    | "unsupported_plane_class"
    | "plane_stage_mismatch"
    | "frame_index_required"
    | "frame_index_out_of_range";

export interface DragAndDropWavInteractionV0 {
    interaction_kind: "drag_and_drop";
    wav_file_path: string;
    saved_source_roots?: string[];
}

export interface FilePickerWavInteractionV0 {
    interaction_kind: "file_picker";
    wav_file_path: string;
    saved_source_roots?: string[];
}

export type WavIntakeInteractionV0 =
    | DragAndDropWavInteractionV0
    | FilePickerWavInteractionV0;

export interface ExecutionRunOptionsV0 {
    channel_index?: number;
    clock_align_options?: ClockAlignOptionsV0;
    window_options?: WindowOptionsV0;
}

export interface ExecutionStageSelectionV0 {
    stage: ExecutionInspectableStageV0;
    frame_index?: number;
}

export interface PlaneSelectionRequestV0 {
    stage: ExecutionInspectableStageV0;
    plane_class: ExecutionPlaneClassV0;
    frame_index?: number;
}

export interface ExecutionSurfaceHostFailureV0 {
    status: "execution_surface_failure";
    seam: "execution_surface";
    failure_class: "execution_surface_failure";
    failure_code: ExecutionSurfaceFailureCodeV0;
    message: string;
}

export type TemporalExecutionSurfaceFailureV0 =
    | SourceIntakeFailureV0
    | MinimalOrchestratorFailureV0
    | SurfacedOperatorFailureV0
    | ExecutionSurfaceHostFailureV0;

export interface TemporalExecutionSurfaceStateV0 {
    surface_class: "TemporalExecutionSurfaceStateV0";
    selected_source_reference: SelectedSourceReferenceV0 | null;
    available_saved_references: SavedWavReferenceV0[];
    last_intake_interaction: WavIntakeInteractionV0 | null;
    last_intake_result: SourceIntakeResultV0 | null;
    last_run_options: ExecutionRunOptionsV0 | null;
    last_run_result: MinimalOrchestratorResultV0 | null;
    selected_stage: ExecutionStageSelectionV0 | null;
    plane_selection_request: PlaneSelectionRequestV0 | null;
    surfaced_failure: TemporalExecutionSurfaceFailureV0 | null;
}

function createHostFailure(
    failureCode: ExecutionSurfaceFailureCodeV0,
    message: string
): ExecutionSurfaceHostFailureV0 {
    return {
        status: "execution_surface_failure",
        seam: "execution_surface",
        failure_class: "execution_surface_failure",
        failure_code: failureCode,
        message,
    };
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function cloneRunOptions(options: ExecutionRunOptionsV0 | undefined): ExecutionRunOptionsV0 | null {
    if (options === undefined) {
        return null;
    }

    return {
        channel_index: options.channel_index,
        clock_align_options:
            options.clock_align_options === undefined
                ? undefined
                : { ...options.clock_align_options },
        window_options:
            options.window_options === undefined
                ? undefined
                : { ...options.window_options },
    };
}

function isInteger(value: unknown): value is number {
    return typeof value === "number" && Number.isInteger(value);
}

function getCompletedStageOutputs(
    state: TemporalExecutionSurfaceStateV0
): TemporalChainStageOutputsV0 | null {
    if (state.last_run_result?.status !== "completed") {
        return null;
    }

    return state.last_run_result.stage_outputs;
}

function validateStageSelection(
    state: TemporalExecutionSurfaceStateV0,
    selection: ExecutionStageSelectionV0
): ExecutionSurfaceHostFailureV0 | null {
    const stageOutputs = getCompletedStageOutputs(state);

    if (stageOutputs === null) {
        return createHostFailure(
            "no_completed_run",
            "Temporal Execution Surface v0 requires a completed run before stage selection."
        );
    }

    if (selection.stage === "P0" || selection.stage === "P1") {
        if (selection.frame_index === undefined || selection.frame_index === 0) {
            return null;
        }

        return createHostFailure(
            "frame_index_out_of_range",
            `Temporal Execution Surface v0 does not allow frame_index ${selection.frame_index} for ${selection.stage}.`
        );
    }

    if (!isInteger(selection.frame_index) || selection.frame_index < 0) {
        return createHostFailure(
            "frame_index_required",
            `Temporal Execution Surface v0 requires a non-negative frame_index for ${selection.stage}.`
        );
    }

    const availableCount =
        selection.stage === "P2"
            ? stageOutputs.p2?.length ?? 0
            : stageOutputs.p3.length;

    if (selection.frame_index >= availableCount) {
        return createHostFailure(
            "frame_index_out_of_range",
            `Temporal Execution Surface v0 could not route ${selection.stage} frame_index ${selection.frame_index}.`
        );
    }

    return null;
}

function getExpectedPlaneClass(stage: ExecutionInspectableStageV0): ExecutionPlaneClassV0 {
    switch (stage) {
        case "P0":
            return "PlaneP0TemporalView";
        case "P1":
            return "PlaneP1TemporalView";
        case "P2":
            return "PlaneP2TemporalView";
        case "P3":
            return "PlaneP3SpectralView";
        case "D3":
            return "PlaneD3DiagnosticView";
    }
}

function isStateObject(
    state: unknown
): state is TemporalExecutionSurfaceStateV0 {
    return state !== null && typeof state === "object" && !Array.isArray(state);
}

function routeLocalPathIntake(
    state: TemporalExecutionSurfaceStateV0,
    interaction: WavIntakeInteractionV0
): TemporalExecutionSurfaceStateV0 {
    if (!isNonEmptyString(interaction.wav_file_path)) {
        return {
            ...state,
            last_intake_interaction: interaction,
            surfaced_failure: createHostFailure(
                "malformed_intake_interaction",
                `Temporal Execution Surface v0 requires wav_file_path for ${interaction.interaction_kind}.`
            ),
        };
    }

    const intakeResult = sourceIntakeV0({
        selection_mode: "local_path",
        wav_file_path: interaction.wav_file_path,
        saved_source_roots: interaction.saved_source_roots,
    });

    if (intakeResult.status === "selected") {
        return {
            ...state,
            selected_source_reference: intakeResult.selected_source_reference,
            available_saved_references: intakeResult.available_saved_references,
            last_intake_interaction: interaction,
            last_intake_result: intakeResult,
            last_run_options: null,
            last_run_result: null,
            selected_stage: null,
            plane_selection_request: null,
            surfaced_failure: null,
        };
    }

    return {
        ...state,
        available_saved_references: intakeResult.available_saved_references,
        last_intake_interaction: interaction,
        last_intake_result: intakeResult,
        surfaced_failure: intakeResult,
    };
}

export function createTemporalExecutionSurfaceStateV0(): TemporalExecutionSurfaceStateV0 {
    return {
        surface_class: "TemporalExecutionSurfaceStateV0",
        selected_source_reference: null,
        available_saved_references: [],
        last_intake_interaction: null,
        last_intake_result: null,
        last_run_options: null,
        last_run_result: null,
        selected_stage: null,
        plane_selection_request: null,
        surfaced_failure: null,
    };
}

export function handleDroppedWavV0(
    state: TemporalExecutionSurfaceStateV0,
    interaction: DragAndDropWavInteractionV0
): TemporalExecutionSurfaceStateV0 {
    if (!isStateObject(state)) {
        throw new TypeError("handleDroppedWavV0 expects a TemporalExecutionSurfaceStateV0 object.");
    }

    return routeLocalPathIntake(state, interaction);
}

export function handlePickedWavV0(
    state: TemporalExecutionSurfaceStateV0,
    interaction: FilePickerWavInteractionV0
): TemporalExecutionSurfaceStateV0 {
    if (!isStateObject(state)) {
        throw new TypeError("handlePickedWavV0 expects a TemporalExecutionSurfaceStateV0 object.");
    }

    return routeLocalPathIntake(state, interaction);
}

export function runTemporalExecutionSurfaceV0(
    state: TemporalExecutionSurfaceStateV0,
    options?: ExecutionRunOptionsV0
): TemporalExecutionSurfaceStateV0 {
    if (!isStateObject(state)) {
        throw new TypeError(
            "runTemporalExecutionSurfaceV0 expects a TemporalExecutionSurfaceStateV0 object."
        );
    }

    if (state.selected_source_reference === null) {
        return {
            ...state,
            last_run_options: cloneRunOptions(options),
            last_run_result: null,
            selected_stage: null,
            plane_selection_request: null,
            surfaced_failure: createHostFailure(
                "no_selected_source_reference",
                "Temporal Execution Surface v0 requires a selected source reference before run."
            ),
        };
    }

    const runResult = minimalOrchestratorV0({
        selected_source_reference: state.selected_source_reference,
        channel_index: options?.channel_index,
        clock_align_options: options?.clock_align_options,
        window_options: options?.window_options,
    });

    return {
        ...state,
        last_run_options: cloneRunOptions(options),
        last_run_result: runResult,
        selected_stage: null,
        plane_selection_request: null,
        surfaced_failure: runResult.status === "completed" ? null : runResult,
    };
}

export function selectExecutionStageV0(
    state: TemporalExecutionSurfaceStateV0,
    selection: ExecutionStageSelectionV0
): TemporalExecutionSurfaceStateV0 {
    if (!isStateObject(state)) {
        throw new TypeError(
            "selectExecutionStageV0 expects a TemporalExecutionSurfaceStateV0 object."
        );
    }

    const failure = validateStageSelection(state, selection);

    if (failure !== null) {
        return {
            ...state,
            surfaced_failure: failure,
        };
    }

    return {
        ...state,
        selected_stage: selection,
        plane_selection_request: null,
        surfaced_failure: null,
    };
}

export function routePlaneSelectionRequestV0(
    state: TemporalExecutionSurfaceStateV0,
    request: PlaneSelectionRequestV0
): TemporalExecutionSurfaceStateV0 {
    if (!isStateObject(state)) {
        throw new TypeError(
            "routePlaneSelectionRequestV0 expects a TemporalExecutionSurfaceStateV0 object."
        );
    }

    const expectedPlaneClass = getExpectedPlaneClass(request.stage);

    if (request.plane_class !== expectedPlaneClass) {
        return {
            ...state,
            surfaced_failure: createHostFailure(
                "plane_stage_mismatch",
                `Temporal Execution Surface v0 expected ${expectedPlaneClass} for stage ${request.stage}, not ${request.plane_class}.`
            ),
        };
    }

    const failure = validateStageSelection(state, {
        stage: request.stage,
        frame_index: request.frame_index,
    });

    if (failure !== null) {
        return {
            ...state,
            surfaced_failure: failure,
        };
    }

    return {
        ...state,
        selected_stage: {
            stage: request.stage,
            frame_index: request.frame_index,
        },
        plane_selection_request: request,
        surfaced_failure: null,
    };
}
