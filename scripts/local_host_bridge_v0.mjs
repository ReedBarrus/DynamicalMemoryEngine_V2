import { createServer } from "node:http";
import { pathToFileURL } from "node:url";

import { handoffBrowserFileV0 } from "../execution/intake/browser_file_handoff_v0.ts";
import {
    createTemporalExecutionSurfaceStateV0,
    handleDroppedWavV0,
    handlePickedWavV0,
} from "../execution/temporal_execution_surface_v0.ts";
import { inspectTemporalExecutionSurfaceV0 } from "../execution/temporal_inspection_flow_v0.ts";

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 4318;
const MAX_REQUEST_BYTES = 64 * 1024 * 1024;

const JSON_HEADERS = {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
};

/**
 * The host bridge keeps browser-to-Node contact narrow: one upload handoff endpoint
 * and one run endpoint that delegates to the existing execution surface and inspection flow.
 */

function isObjectRecord(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
}

function isStandardBase64(value) {
    if (typeof value !== "string" || value.length % 4 !== 0) {
        return false;
    }

    let paddingCount = 0;

    for (let index = 0; index < value.length; index += 1) {
        const char = value[index];
        const isUppercase = char >= "A" && char <= "Z";
        const isLowercase = char >= "a" && char <= "z";
        const isDigit = char >= "0" && char <= "9";
        const isSymbol = char === "+" || char === "/";

        if (isUppercase || isLowercase || isDigit || isSymbol) {
            if (paddingCount > 0) {
                return false;
            }

            continue;
        }

        if (char === "=") {
            paddingCount += 1;

            if (paddingCount > 2) {
                return false;
            }

            continue;
        }

        return false;
    }

    if (paddingCount === 0) {
        return true;
    }

    for (let index = value.length - paddingCount; index < value.length; index += 1) {
        if (value[index] !== "=") {
            return false;
        }
    }

    return true;
}

function createBridgeFailure(failureCode, message) {
    return {
        status: "local_host_bridge_failure",
        seam: "local_host_bridge",
        failure_class: "local_host_bridge_failure",
        failure_code: failureCode,
        message,
    };
}

function writeJson(response, statusCode, payload) {
    response.writeHead(statusCode, JSON_HEADERS);
    response.end(JSON.stringify(payload));
}

function getPort() {
    const rawPort = process.env.DME_LOCAL_HOST_BRIDGE_PORT;

    if (rawPort === undefined) {
        return DEFAULT_PORT;
    }

    const parsed = Number(rawPort);

    if (!Number.isInteger(parsed) || parsed <= 0) {
        throw new TypeError(
            "local_host_bridge_v0 expects DME_LOCAL_HOST_BRIDGE_PORT to be a positive integer when provided."
        );
    }

    return parsed;
}

function getHost() {
    const host = process.env.DME_LOCAL_HOST_BRIDGE_HOST;

    if (host === undefined) {
        return DEFAULT_HOST;
    }

    if (!isNonEmptyString(host)) {
        throw new TypeError(
            "local_host_bridge_v0 expects DME_LOCAL_HOST_BRIDGE_HOST to be a non-empty string when provided."
        );
    }

    return host.trim();
}

function getErrorMessage(error) {
    if (error instanceof Error) {
        return error.message;
    }

    return String(error);
}

function buildArrayBufferView(buffer) {
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

async function readJsonBody(request) {
    const bodyChunks = [];
    let totalBytes = 0;

    for await (const chunk of request) {
        const bufferChunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);

        totalBytes += bufferChunk.byteLength;

        if (totalBytes > MAX_REQUEST_BYTES) {
            throw createBridgeFailure(
                "request_body_too_large",
                `Local Host Bridge v0 accepts request bodies up to ${MAX_REQUEST_BYTES} bytes.`
            );
        }

        bodyChunks.push(bufferChunk);
    }

    const rawBody = Buffer.concat(bodyChunks).toString("utf8");

    if (rawBody.trim().length === 0) {
        throw createBridgeFailure(
            "malformed_json",
            "Local Host Bridge v0 requires a JSON request body."
        );
    }

    try {
        return JSON.parse(rawBody);
    } catch (error) {
        throw createBridgeFailure(
            "malformed_json",
            error instanceof Error
                ? error.message
                : "Local Host Bridge v0 could not parse the JSON request body."
        );
    }
}

function createBrowserFileInputFromRequest(body) {
    if (!isObjectRecord(body)) {
        return createBridgeFailure(
            "malformed_handoff_request",
            "Local Host Bridge v0 requires an object request body for /api/source/handoff."
        );
    }

    if (!isNonEmptyString(body.file_name)) {
        return createBridgeFailure(
            "malformed_handoff_request",
            "Local Host Bridge v0 requires file_name for /api/source/handoff."
        );
    }

    if (typeof body.file_bytes_base64 !== "string" || !isStandardBase64(body.file_bytes_base64)) {
        return createBridgeFailure(
            "malformed_handoff_request",
            "Local Host Bridge v0 requires file_bytes_base64 as a standard base64 string for /api/source/handoff."
        );
    }

    const fileBytes = Buffer.from(body.file_bytes_base64, "base64");

    return {
        name: body.file_name,
        type: isNonEmptyString(body.mime_type) ? body.mime_type : undefined,
        size: fileBytes.byteLength,
        async arrayBuffer() {
            return buildArrayBufferView(fileBytes);
        },
    };
}

async function handleSourceHandoff(body) {
    const browserFileInput = createBrowserFileInputFromRequest(body);

    if (browserFileInput.status === "local_host_bridge_failure") {
        return browserFileInput;
    }

    return handoffBrowserFileV0(browserFileInput);
}

function buildExecutionSurfaceState(runRequest) {
    if (!isObjectRecord(runRequest)) {
        return createBridgeFailure(
            "malformed_run_request",
            "Local Host Bridge v0 requires an object request body for /api/run."
        );
    }

    if (
        !isObjectRecord(runRequest.source_intake_request) ||
        runRequest.source_intake_request.selection_mode !== "local_path" ||
        !isNonEmptyString(runRequest.source_intake_request.wav_file_path)
    ) {
        return createBridgeFailure(
            "malformed_run_request",
            "Local Host Bridge v0 requires source_intake_request with selection_mode local_path and wav_file_path for /api/run."
        );
    }

    if (
        runRequest.intake_interaction_kind !== "drag_and_drop" &&
        runRequest.intake_interaction_kind !== "file_picker"
    ) {
        return createBridgeFailure(
            "malformed_run_request",
            "Local Host Bridge v0 requires intake_interaction_kind to be drag_and_drop or file_picker for /api/run."
        );
    }

    if (!isObjectRecord(runRequest.inspection_request)) {
        return createBridgeFailure(
            "malformed_run_request",
            "Local Host Bridge v0 requires inspection_request for /api/run."
        );
    }

    const surfaceState = createTemporalExecutionSurfaceStateV0();
    const intakeInteraction = {
        interaction_kind: runRequest.intake_interaction_kind,
        wav_file_path: runRequest.source_intake_request.wav_file_path,
    };

    return runRequest.intake_interaction_kind === "drag_and_drop"
        ? handleDroppedWavV0(surfaceState, intakeInteraction)
        : handlePickedWavV0(surfaceState, intakeInteraction);
}

function handleRun(body) {
    const executionSurfaceState = buildExecutionSurfaceState(body);

    if (executionSurfaceState.status === "local_host_bridge_failure") {
        return executionSurfaceState;
    }

    if (executionSurfaceState.surfaced_failure !== null) {
        return executionSurfaceState.surfaced_failure;
    }

    const inspectionResult = inspectTemporalExecutionSurfaceV0(
        executionSurfaceState,
        body.inspection_request
    );

    if (inspectionResult.status === "inspection_failed") {
        return inspectionResult.surfaced_failure;
    }

    return {
        status: "run_completed",
        bridge_class: "LocalHostBridgeRunSuccessV0",
        selected_source_reference:
            inspectionResult.execution_surface_state.selected_source_reference,
        stage_selection: inspectionResult.stage_selection,
        plane_selection_request: inspectionResult.plane_selection_request,
        rendered_output: inspectionResult.rendered_output,
    };
}

async function routeRequest(request, response) {
    if (request.method === "OPTIONS") {
        response.writeHead(204, JSON_HEADERS);
        response.end();
        return;
    }

    if (request.method !== "POST") {
        writeJson(
            response,
            405,
            createBridgeFailure(
                "unsupported_method",
                `Local Host Bridge v0 does not support ${String(request.method)} for ${request.url ?? ""}.`
            )
        );
        return;
    }

    if (request.url !== "/api/source/handoff" && request.url !== "/api/run") {
        writeJson(
            response,
            404,
            createBridgeFailure(
                "unsupported_route",
                `Local Host Bridge v0 does not support route ${request.url ?? ""}.`
            )
        );
        return;
    }

    let body;

    try {
        body = await readJsonBody(request);
    } catch (error) {
        writeJson(
            response,
            400,
            error?.status === "local_host_bridge_failure"
                ? error
                : createBridgeFailure(
                      "malformed_json",
                      getErrorMessage(error)
                  )
        );
        return;
    }

    if (request.url === "/api/source/handoff") {
        const result = await handleSourceHandoff(body);
        writeJson(
            response,
            result.status === "local_host_bridge_failure" ? 400 : 200,
            result
        );
        return;
    }

    if (request.url === "/api/run") {
        const result = handleRun(body);
        writeJson(
            response,
            result.status === "local_host_bridge_failure" ? 400 : 200,
            result
        );
        return;
    }
}

export function createLocalHostBridgeV0() {
    return createServer((request, response) => {
        routeRequest(request, response).catch((error) => {
            writeJson(
                response,
                500,
                createBridgeFailure(
                    "unhandled_bridge_error",
                    getErrorMessage(error)
                )
            );
        });
    });
}

export function startLocalHostBridgeV0(options = {}) {
    const host = options.host ?? getHost();
    const port = options.port ?? getPort();
    const server = createLocalHostBridgeV0();

    server.listen(port, host, () => {
        console.log(
            `Local Host Bridge v0 listening on http://${host}:${port}`
        );
    });

    return server;
}

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
    startLocalHostBridgeV0();
}
