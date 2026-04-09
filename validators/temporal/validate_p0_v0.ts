import type {
    P0_IngestFrame,
    V0_IngestValidation,
} from "../../types/temporal/temporal_floor_types_v0";

const REQUIRED_FIELDS = [
    "lane",
    "artifact_class",
    "primary_handle",
    "source_axis_ref",
    "time_axis_ref",
    "t",
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

export function validateP0(primary: P0_IngestFrame): V0_IngestValidation {
    if (primary === null || typeof primary !== "object" || Array.isArray(primary)) {
        throw new TypeError("validateP0 expects a P0_IngestFrame object.");
    }

    const candidate = primary as unknown as Record<string, unknown>;
    const keys = Object.keys(candidate);
    const failureCodes = new Set<string>();

    const required_fields_present = REQUIRED_FIELDS.every((field) =>
        Object.prototype.hasOwnProperty.call(candidate, field)
    );
    const forbidden_fields_absent = keys.every((field) => ALLOWED_FIELDS.has(field));
    const t_numeric = isFiniteNumberArray(candidate.t);
    const x_numeric = isFiniteNumberArray(candidate.x);
    const t_x_same_length =
        Array.isArray(candidate.t) &&
        Array.isArray(candidate.x) &&
        candidate.t.length === candidate.x.length;
    const time_axis_ref_present = isNonEmptyString(candidate.time_axis_ref);
    const source_axis_ref_present = isNonEmptyString(candidate.source_axis_ref);

    const laneValid = candidate.lane === "P";
    const artifactClassValid = candidate.artifact_class === "P0_IngestFrame";
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

    if (!primaryHandleValid || !time_axis_ref_present || !source_axis_ref_present) {
        failureCodes.add("empty_string_field");
    }

    if (!t_numeric || !x_numeric) {
        failureCodes.add("non_numeric_array");
    }

    if (!t_x_same_length) {
        failureCodes.add("length_mismatch");
    }

    const checks: V0_IngestValidation["checks"] = {
        required_fields_present,
        forbidden_fields_absent,
        t_x_same_length,
        t_numeric,
        x_numeric,
        time_axis_ref_present,
        source_axis_ref_present,
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
        validation_class: "V0_IngestValidation",
        primary_handle:
            typeof candidate.primary_handle === "string" ? candidate.primary_handle : "",
        status,
        failure_codes: Array.from(failureCodes),
        checks,
    };
}
