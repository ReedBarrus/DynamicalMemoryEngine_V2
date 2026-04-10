export const LOCAL_HOST_BRIDGE_BASE_URL = "http://127.0.0.1:4318";

export interface LocalHostBridgeFailureV0 {
    status: "local_host_bridge_failure";
    seam: "local_host_bridge";
    failure_class: "local_host_bridge_failure";
    failure_code: string;
    message: string;
}

export interface BrowserFileHandoffFailureV0 {
    status: "handoff_failure";
    seam: "browser_file_handoff";
    failure_class: "browser_file_handoff_failure";
    failure_code: string;
    message: string;
}

export interface BrowserFileHandoffSuccessV0 {
    status: "handed_off";
    handoff_class: "BrowserFileHandoffV0";
    source_family: "wav";
    original_file_name: string;
    declared_mime_type?: string;
    runtime_handoff_path: string;
    runtime_handoff_relative_path: string;
    source_intake_request: {
        selection_mode: "local_path";
        wav_file_path: string;
    };
}

export interface ShellBridgeCallFailureV0 {
    status: "shell_bridge_call_failure";
    seam: "app_shell";
    failure_class: "shell_bridge_call_failure";
    failure_code:
        | "bridge_unreachable"
        | "malformed_bridge_response"
        | "file_read_failed"
        | "missing_selected_source";
    message: string;
}

export interface LocalHostBridgeRunSuccessV0 {
    status: "run_completed";
    bridge_class: "LocalHostBridgeRunSuccessV0";
    selected_source_reference: {
        reference_class: "SelectedSourceReferenceV0";
        source_family: "wav";
        selection_mode: "local_path" | "saved_reference";
        selected_reference_id: string;
        display_name: string;
        absolute_path: string;
        relative_path: string;
    } | null;
    stage_selection: {
        stage: "P0" | "P1" | "P2" | "P3" | "D3";
        frame_index?: number;
    };
    plane_selection_request: {
        stage: "P0" | "P1" | "P2" | "P3" | "D3";
        plane_class:
            | "PlaneP0TemporalView"
            | "PlaneP1TemporalView"
            | "PlaneP2TemporalView"
            | "PlaneP3SpectralView"
            | "PlaneD3DiagnosticView";
        frame_index?: number;
    };
    rendered_output: {
        render_type: string;
        projection_kind?: string;
        [key: string]: unknown;
    };
}

export type RoutedBridgeFailureV0 =
    | LocalHostBridgeFailureV0
    | BrowserFileHandoffFailureV0
    | {
          status: string;
          seam: string;
          failure_class?: string;
          failure_code?: string;
          message: string;
          [key: string]: unknown;
      };

export type BrowserFileHandoffCallResultV0 =
    | BrowserFileHandoffSuccessV0
    | RoutedBridgeFailureV0
    | ShellBridgeCallFailureV0;

export type LocalHostBridgeRunResultV0 =
    | LocalHostBridgeRunSuccessV0
    | RoutedBridgeFailureV0
    | ShellBridgeCallFailureV0;

export interface LocalHostBridgeRunRequestV0 {
    source_intake_request: {
        selection_mode: "local_path";
        wav_file_path: string;
    };
    intake_interaction_kind: "drag_and_drop" | "file_picker";
    inspection_request: {
        execution_mode: "run_now";
        run_options: {
            clock_align_options: {
                target_sample_rate_hz: number;
            };
            window_options: {
                window_length_n: number;
                hop_n: number;
            };
        };
        stage_selection: {
            stage: "P3";
            frame_index: 0;
        };
        plane_selection_request: {
            stage: "P3";
            plane_class: "PlaneP3SpectralView";
            frame_index: 0;
        };
    };
}

function createShellBridgeFailure(
    failureCode: ShellBridgeCallFailureV0["failure_code"],
    message: string
): ShellBridgeCallFailureV0 {
    return {
        status: "shell_bridge_call_failure",
        seam: "app_shell",
        failure_class: "shell_bridge_call_failure",
        failure_code: failureCode,
        message,
    };
}

function isObjectRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    return String(error);
}

function readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onerror = () => {
            reject(reader.error ?? new Error("Browser shell could not read the selected file."));
        };

        reader.onload = () => {
            if (typeof reader.result !== "string") {
                reject(new Error("Browser shell expected a data URL string from FileReader."));
                return;
            }

            const separatorIndex = reader.result.indexOf(",");

            if (separatorIndex < 0) {
                reject(new Error("Browser shell could not extract base64 bytes from the selected file."));
                return;
            }

            resolve(reader.result.slice(separatorIndex + 1));
        };

        reader.readAsDataURL(file);
    });
}

async function postJsonV0(path: string, payload: unknown): Promise<unknown> {
    let response: Response;

    try {
        response = await fetch(`${LOCAL_HOST_BRIDGE_BASE_URL}${path}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    } catch (error) {
        return createShellBridgeFailure(
            "bridge_unreachable",
            `Browser shell could not reach Local Host Bridge v0 at ${LOCAL_HOST_BRIDGE_BASE_URL}. ${getErrorMessage(error)}`
        );
    }

    let parsedBody: unknown;

    try {
        parsedBody = await response.json();
    } catch (error) {
        return createShellBridgeFailure(
            "malformed_bridge_response",
            `Browser shell expected JSON from Local Host Bridge v0. ${getErrorMessage(error)}`
        );
    }

    if (!isObjectRecord(parsedBody) || typeof parsedBody.status !== "string") {
        return createShellBridgeFailure(
            "malformed_bridge_response",
            "Browser shell received a malformed Local Host Bridge v0 response."
        );
    }

    return parsedBody;
}

export async function handoffBrowserFileThroughHostBridgeV0(
    file: File
): Promise<BrowserFileHandoffCallResultV0> {
    let fileBytesBase64: string;

    try {
        fileBytesBase64 = await readFileAsBase64(file);
    } catch (error) {
        return createShellBridgeFailure(
            "file_read_failed",
            `Browser shell could not read ${file.name}. ${getErrorMessage(error)}`
        );
    }

    return (await postJsonV0("/api/source/handoff", {
        file_name: file.name,
        mime_type: file.type,
        file_bytes_base64: fileBytesBase64,
    })) as BrowserFileHandoffCallResultV0;
}

export async function runThroughHostBridgeV0(
    request: LocalHostBridgeRunRequestV0
): Promise<LocalHostBridgeRunResultV0> {
    return (await postJsonV0("/api/run", request)) as LocalHostBridgeRunResultV0;
}
