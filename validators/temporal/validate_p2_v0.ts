import type {
    P2_WindowFrame,
    V2_WindowValidation,
} from "../../types/temporal/temporal_floor_types_v0";

const REQUIRED_FIELDS = [
    "lane",
    "artifact_class",
    "primary_handle",
    "upstream_primary_handle",
    "window_id",
    "grid_t0",
    "Fs",
    "n",
    "x",
] as const;

const ALLOWED_FIELDS = new Set<string>(REQUIRED_FIELDS);

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function isFiniteNumberArray(value: unknown): value is number[] {
    return (
        Array.isArray(value) &&
        value.every((item) => typeof item === "number" && Number.isFinite(item))
    );
}

export function validateP2(primary: P2_WindowFrame): V2_WindowValidation {
    if (primary === null || typeof primary !== "object" || Array.isArray(primary)) {
        throw new TypeError("validateP2 expects a P2_WindowFrame object.");
    }

    const candidate = primary as unknown as Record<string, unknown>;
    const keys = Object.keys(candidate);
    const failureCodes = new Set<string>();

    const required_fields_present = REQUIRED_FIELDS.every((field) =>
        Object.prototype.hasOwnProperty.call(candidate, field)
    );
    const forbidden_fields_absent = keys.every((field) => ALLOWED_FIELDS.has(field));
    const fs_positive =
        typeof candidate.Fs === "number" && Number.isFinite(candidate.Fs) && candidate.Fs > 0;
    const grid_t0_finite =
        typeof candidate.grid_t0 === "number" && Number.isFinite(candidate.grid_t0);
    const x_numeric = isFiniteNumberArray(candidate.x);
    const n_matches_x_length =
        Number.isInteger(candidate.n) &&
        Array.isArray(candidate.x) &&
        candidate.n === candidate.x.length;
    const window_id_present = isNonEmptyString(candidate.window_id);
    const upstream_primary_handle_present = isNonEmptyString(
        candidate.upstream_primary_handle
    );

    const laneValid = candidate.lane === "P";
    const artifactClassValid = candidate.artifact_class === "P2_WindowFrame";
    const primaryHandleValid = isNonEmptyString(candidate.primary_handle);

    if (!required_fields_present) {
        failureCodes.add("missing_required_field");
    }

    if (!forbidden_fields_absent) {
        failureCodes.add("forbidden_field_present");
    }

    if (!laneValid) {
        failureCodes.add("invalid_lane_literal");
    }

    if (!artifactClassValid) {
        failureCodes.add("invalid_artifact_class_literal");
    }

    if (!primaryHandleValid || !window_id_present || !upstream_primary_handle_present) {
        failureCodes.add("empty_string_field");
    }

    if (!fs_positive || !(typeof candidate.Fs === "number" && Number.isFinite(candidate.Fs))) {
        failureCodes.add("non_positive_number");
    }

    if (!grid_t0_finite) {
        failureCodes.add("non_finite_number");
    }

    if (!x_numeric) {
        failureCodes.add("non_numeric_array");
    }

    if (!n_matches_x_length) {
        failureCodes.add("length_mismatch");
    }

    const checks: V2_WindowValidation["checks"] = {
        required_fields_present,
        forbidden_fields_absent,
        fs_positive,
        grid_t0_finite,
        n_matches_x_length,
        x_numeric,
        window_id_present,
        upstream_primary_handle_present,
    };

    const status =
        Object.values(checks).every(Boolean) &&
            laneValid &&
            artifactClassValid &&
            primaryHandleValid
            ? "pass"
            : "fail";

    return {
        lane: "V",
        validation_class: "V2_WindowValidation",
        primary_handle:
            typeof candidate.primary_handle === "string" ? candidate.primary_handle : "",
        status,
        failure_codes: Array.from(failureCodes),
        checks,
    };
}
