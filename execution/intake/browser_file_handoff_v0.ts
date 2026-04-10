import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, extname, join, relative, resolve } from "node:path";
import { randomUUID } from "node:crypto";

import type { SourceIntakeRequestV0 } from "./source_intake_v0.ts";

export type BrowserFileHandoffFailureCodeV0 =
    | "malformed_browser_file"
    | "unsupported_source_family"
    | "array_buffer_read_failed"
    | "handoff_write_failed";

export interface BrowserFileInputV0 {
    name: string;
    type?: string;
    size?: number;
    arrayBuffer(): Promise<ArrayBuffer>;
}

export interface BrowserFileHandoffOptionsV0 {
    handoff_root?: string;
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

export interface BrowserFileHandoffFailureV0 {
    status: "handoff_failure";
    seam: "browser_file_handoff";
    failure_class: "browser_file_handoff_failure";
    failure_code: BrowserFileHandoffFailureCodeV0;
    message: string;
}

export type BrowserFileHandoffResultV0 =
    | BrowserFileHandoffSuccessV0
    | BrowserFileHandoffFailureV0;

const DEFAULT_HANDOFF_ROOT = resolve(tmpdir(), "dme_browser_file_handoff_v0");

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function createFailure(
    failureCode: BrowserFileHandoffFailureCodeV0,
    message: string
): BrowserFileHandoffFailureV0 {
    return {
        status: "handoff_failure",
        seam: "browser_file_handoff",
        failure_class: "browser_file_handoff_failure",
        failure_code: failureCode,
        message,
    };
}

function sanitizeBaseName(fileName: string): string {
    const normalizedBaseName = basename(fileName, extname(fileName));
    const sanitized = normalizedBaseName.replace(/[^A-Za-z0-9._-]+/g, "_");

    return sanitized.length > 0 ? sanitized : "browser_handoff";
}

function resolveHandoffRoot(options: BrowserFileHandoffOptionsV0 | undefined): string {
    if (options?.handoff_root !== undefined) {
        if (!isNonEmptyString(options.handoff_root)) {
            throw new TypeError(
                "handoffBrowserFileV0 expects handoff_root to be a non-empty string when provided."
            );
        }

        return resolve(options.handoff_root);
    }

    return DEFAULT_HANDOFF_ROOT;
}

export async function handoffBrowserFileV0(
    browserFile: BrowserFileInputV0,
    options?: BrowserFileHandoffOptionsV0
): Promise<BrowserFileHandoffResultV0> {
    if (browserFile === null || typeof browserFile !== "object" || Array.isArray(browserFile)) {
        throw new TypeError("handoffBrowserFileV0 expects a browser-file input object.");
    }

    if (!isNonEmptyString(browserFile.name) || typeof browserFile.arrayBuffer !== "function") {
        return createFailure(
            "malformed_browser_file",
            "Browser File Handoff v0 requires file name and arrayBuffer() on the incoming browser file."
        );
    }

    if (extname(browserFile.name).toLowerCase() !== ".wav") {
        return createFailure(
            "unsupported_source_family",
            "Browser File Handoff v0 currently supports only .wav browser file input."
        );
    }

    let fileBytes: ArrayBuffer;

    try {
        fileBytes = await browserFile.arrayBuffer();
    } catch (error) {
        return createFailure(
            "array_buffer_read_failed",
            error instanceof Error
                ? error.message
                : "Browser File Handoff v0 could not read browser file bytes."
        );
    }

    const handoffRoot = resolveHandoffRoot(options);
    const originalFileName = basename(browserFile.name);
    const sanitizedBaseName = sanitizeBaseName(originalFileName);
    const handoffFileName = `${sanitizedBaseName}_${randomUUID()}.wav`;
    const runtimeHandoffPath = join(handoffRoot, handoffFileName);

    try {
        // The bridge lands browser-provided bytes in one bounded local temp folder so the
        // existing path-based intake contract can consume them unchanged.
        await mkdir(handoffRoot, { recursive: true });
        await writeFile(runtimeHandoffPath, Buffer.from(fileBytes));
    } catch (error) {
        return createFailure(
            "handoff_write_failed",
            error instanceof Error
                ? error.message
                : "Browser File Handoff v0 could not write the local runtime handoff file."
        );
    }

    return {
        status: "handed_off",
        handoff_class: "BrowserFileHandoffV0",
        source_family: "wav",
        original_file_name: originalFileName,
        declared_mime_type: browserFile.type,
        runtime_handoff_path: runtimeHandoffPath,
        runtime_handoff_relative_path: relative(process.cwd(), runtimeHandoffPath),
        source_intake_request: {
            selection_mode: "local_path",
            wav_file_path: runtimeHandoffPath,
        },
    };
}
