import { existsSync, readdirSync, statSync } from "node:fs";
import { basename, extname, relative, resolve, sep } from "node:path";

export type SourceSelectionModeV0 = "local_path" | "saved_reference";

export type SourceIntakeFailureCodeV0 =
    | "missing_file"
    | "unsupported_source_family"
    | "malformed_selection_request"
    | "unavailable_saved_source_reference";

export interface SavedWavReferenceV0 {
    reference_class: "SavedWavReferenceV0";
    source_family: "wav";
    saved_reference_id: string;
    display_name: string;
    absolute_path: string;
    relative_path: string;
    source_root: string;
}

export interface SelectedSourceReferenceV0 {
    reference_class: "SelectedSourceReferenceV0";
    source_family: "wav";
    selection_mode: SourceSelectionModeV0;
    selected_reference_id: string;
    display_name: string;
    absolute_path: string;
    relative_path: string;
}

export interface SourceIntakeRequestV0 {
    selection_mode: SourceSelectionModeV0;
    wav_file_path?: string;
    saved_reference_id?: string;
    saved_source_roots?: string[];
}

export interface SourceIntakeSuccessV0 {
    status: "selected";
    selected_source_reference: SelectedSourceReferenceV0;
    available_saved_references: SavedWavReferenceV0[];
}

export interface SourceIntakeFailureV0 {
    status: "intake_failure";
    seam: "source_intake";
    failure_class: "source_intake_failure";
    failure_code: SourceIntakeFailureCodeV0;
    message: string;
    selection_mode: SourceSelectionModeV0;
    available_saved_references: SavedWavReferenceV0[];
}

export type SourceIntakeResultV0 = SourceIntakeSuccessV0 | SourceIntakeFailureV0;

const DEFAULT_SAVED_SOURCE_ROOTS = ["test_signal"];

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function normalizePathForId(value: string): string {
    return value.split(sep).join("/");
}

function getSavedSourceRoots(savedSourceRoots: string[] | undefined): string[] {
    const roots = savedSourceRoots ?? DEFAULT_SAVED_SOURCE_ROOTS;

    return Array.from(
        new Set(
            roots
                .filter(isNonEmptyString)
                .map((root) => resolve(root))
        )
    );
}

function buildSavedReference(
    sourceRoot: string,
    absolutePath: string
): SavedWavReferenceV0 {
    const relativePath = normalizePathForId(relative(process.cwd(), absolutePath));

    return {
        reference_class: "SavedWavReferenceV0",
        source_family: "wav",
        saved_reference_id: `saved_wav:${relativePath}`,
        display_name: basename(absolutePath),
        absolute_path: absolutePath,
        relative_path: relativePath,
        source_root: normalizePathForId(relative(process.cwd(), sourceRoot)),
    };
}

export function listSavedWavReferencesV0(
    savedSourceRoots?: string[]
): SavedWavReferenceV0[] {
    const savedReferences: SavedWavReferenceV0[] = [];

    for (const sourceRoot of getSavedSourceRoots(savedSourceRoots)) {
        if (!existsSync(sourceRoot) || !statSync(sourceRoot).isDirectory()) {
            continue;
        }

        for (const directoryEntry of readdirSync(sourceRoot, { withFileTypes: true })) {
            if (!directoryEntry.isFile()) {
                continue;
            }

            const absolutePath = resolve(sourceRoot, directoryEntry.name);

            if (extname(absolutePath).toLowerCase() !== ".wav") {
                continue;
            }

            savedReferences.push(buildSavedReference(sourceRoot, absolutePath));
        }
    }

    savedReferences.sort((left, right) =>
        left.relative_path.localeCompare(right.relative_path)
    );

    return savedReferences;
}

function buildSelectedReference(
    absolutePath: string,
    selectionMode: SourceSelectionModeV0
): SelectedSourceReferenceV0 {
    const relativePath = normalizePathForId(relative(process.cwd(), absolutePath));

    return {
        reference_class: "SelectedSourceReferenceV0",
        source_family: "wav",
        selection_mode: selectionMode,
        selected_reference_id:
            selectionMode === "saved_reference"
                ? `saved_wav:${relativePath}`
                : `local_wav:${relativePath}`,
        display_name: basename(absolutePath),
        absolute_path: absolutePath,
        relative_path: relativePath,
    };
}

function buildFailure(
    failureCode: SourceIntakeFailureCodeV0,
    message: string,
    selectionMode: SourceSelectionModeV0,
    availableSavedReferences: SavedWavReferenceV0[]
): SourceIntakeFailureV0 {
    return {
        status: "intake_failure",
        seam: "source_intake",
        failure_class: "source_intake_failure",
        failure_code: failureCode,
        message,
        selection_mode: selectionMode,
        available_saved_references: availableSavedReferences,
    };
}

export function sourceIntakeV0(request: SourceIntakeRequestV0): SourceIntakeResultV0 {
    if (request === null || typeof request !== "object" || Array.isArray(request)) {
        throw new TypeError("sourceIntakeV0 expects a request object.");
    }

    if (request.selection_mode !== "local_path" && request.selection_mode !== "saved_reference") {
        return buildFailure(
            "malformed_selection_request",
            "Source Intake v0 requires selection_mode to be local_path or saved_reference.",
            "local_path",
            listSavedWavReferencesV0(request.saved_source_roots)
        );
    }

    const availableSavedReferences = listSavedWavReferencesV0(request.saved_source_roots);

    if (request.selection_mode === "local_path") {
        if (!isNonEmptyString(request.wav_file_path)) {
            return buildFailure(
                "malformed_selection_request",
                "Source Intake v0 requires wav_file_path when selection_mode is local_path.",
                request.selection_mode,
                availableSavedReferences
            );
        }

        const absolutePath = resolve(request.wav_file_path);

        if (!existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
            return buildFailure(
                "missing_file",
                `Source Intake v0 could not find local source file ${absolutePath}.`,
                request.selection_mode,
                availableSavedReferences
            );
        }

        if (extname(absolutePath).toLowerCase() !== ".wav") {
            return buildFailure(
                "unsupported_source_family",
                "Source Intake v0 currently supports only .wav sources.",
                request.selection_mode,
                availableSavedReferences
            );
        }

        return {
            status: "selected",
            selected_source_reference: buildSelectedReference(
                absolutePath,
                request.selection_mode
            ),
            available_saved_references: availableSavedReferences,
        };
    }

    if (!isNonEmptyString(request.saved_reference_id)) {
        return buildFailure(
            "malformed_selection_request",
            "Source Intake v0 requires saved_reference_id when selection_mode is saved_reference.",
            request.selection_mode,
            availableSavedReferences
        );
    }

    const selectedSavedReference = availableSavedReferences.find(
        (savedReference) => savedReference.saved_reference_id === request.saved_reference_id
    );

    if (selectedSavedReference === undefined) {
        return buildFailure(
            "unavailable_saved_source_reference",
            `Source Intake v0 could not resolve saved reference ${request.saved_reference_id}.`,
            request.selection_mode,
            availableSavedReferences
        );
    }

    return {
        status: "selected",
        selected_source_reference: buildSelectedReference(
            selectedSavedReference.absolute_path,
            request.selection_mode
        ),
        available_saved_references: availableSavedReferences,
    };
}
