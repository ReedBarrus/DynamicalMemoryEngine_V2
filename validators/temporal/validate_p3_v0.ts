import type {
    P3_SpectralFrame,
    V3_TransformValidation,
} from "../../types/temporal/temporal_floor_types_v0";

const REQUIRED_FIELDS = [
    "lane",
    "artifact_class",
    "primary_handle",
    "upstream_primary_handle",
    "window_id",
    "Fs",
    "n",
    "df",
    "bins",
] as const;

const ALLOWED_FIELDS = new Set<string>(REQUIRED_FIELDS);
const ALLOWED_BIN_FIELDS = new Set(["k", "f", "re", "im"]);

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

function isBinObject(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function validateP3(primary: P3_SpectralFrame): V3_TransformValidation {
    if (primary === null || typeof primary !== "object" || Array.isArray(primary)) {
        throw new TypeError("validateP3 expects a P3_SpectralFrame object.");
    }

    const candidate = primary as unknown as Record<string, unknown>;
    const keys = Object.keys(candidate);
    const failureCodes = new Set<string>();

    const bins = Array.isArray(candidate.bins) ? candidate.bins : [];

    const required_fields_present = REQUIRED_FIELDS.every((field) =>
        Object.prototype.hasOwnProperty.call(candidate, field)
    );
    const topLevelFieldsAllowed = keys.every((field) => ALLOWED_FIELDS.has(field));
    const binsHaveNoForbiddenFields = bins.every(
        (bin) => isBinObject(bin) && Object.keys(bin).every((field) => ALLOWED_BIN_FIELDS.has(field))
    );
    const forbidden_fields_absent = topLevelFieldsAllowed && binsHaveNoForbiddenFields;
    const fs_positive =
        typeof candidate.Fs === "number" && Number.isFinite(candidate.Fs) && candidate.Fs > 0;
    const n_positive =
        typeof candidate.n === "number" && Number.isInteger(candidate.n) && candidate.n > 0;
    const df_positive =
        typeof candidate.df === "number" && Number.isFinite(candidate.df) && candidate.df > 0;
    const bins_present = Array.isArray(candidate.bins);
    const bins_have_required_fields =
        bins_present &&
        bins.every(
            (bin) =>
                isBinObject(bin) &&
                Object.prototype.hasOwnProperty.call(bin, "k") &&
                Object.prototype.hasOwnProperty.call(bin, "f") &&
                Object.prototype.hasOwnProperty.call(bin, "re") &&
                Object.prototype.hasOwnProperty.call(bin, "im")
        );
    const bins_values_numeric =
        bins_have_required_fields &&
        bins.every((bin) => {
            if (!isBinObject(bin)) {
                return false;
            }

            return (
                typeof bin.k === "number" &&
                Number.isFinite(bin.k) &&
                typeof bin.f === "number" &&
                Number.isFinite(bin.f) &&
                typeof bin.re === "number" &&
                Number.isFinite(bin.re) &&
                typeof bin.im === "number" &&
                Number.isFinite(bin.im)
            );
        });
    const window_id_present = isNonEmptyString(candidate.window_id);
    const upstream_primary_handle_present = isNonEmptyString(
        candidate.upstream_primary_handle
    );

    const laneValid = candidate.lane === "P";
    const artifactClassValid = candidate.artifact_class === "P3_SpectralFrame";
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

    if (!fs_positive || !n_positive || !df_positive) {
        failureCodes.add("non_positive_number");
    }

    if (!bins_present || !bins_have_required_fields) {
        failureCodes.add("missing_required_field");
    }

    if (!bins_values_numeric) {
        failureCodes.add("non_numeric_array");
    }

    const checks: V3_TransformValidation["checks"] = {
        required_fields_present,
        forbidden_fields_absent,
        fs_positive,
        n_positive,
        df_positive,
        bins_present,
        bins_have_required_fields,
        bins_values_numeric,
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
        validation_class: "V3_TransformValidation",
        primary_handle:
            typeof candidate.primary_handle === "string" ? candidate.primary_handle : "",
        status,
        failure_codes: Array.from(failureCodes),
        checks,
    };
}
