// Dynamical Memory Engine — Temporal Primitives v0
//
// Purpose:
// - define the shared primitive literals and helper shapes for the TemporalRegime rebuild floor
// - keep runtime family definitions readable by moving repeated literal unions here
// - remain boring, explicit, and easy to audit
//
// Posture:
// - primitives only
// - no operator logic
// - no validators
// - no runtime mutation
// - no semantic interpretation

// -----------------------------------------------------------------------------
// Core handle aliases
// -----------------------------------------------------------------------------

export type PrimaryHandle = string;
export type CompanionHandle = string;
export type PlaneHandle = string;

// -----------------------------------------------------------------------------
// Core lane literals
// -----------------------------------------------------------------------------

export type RuntimeLane = "P" | "V" | "L" | "A" | "D" | "T";

// -----------------------------------------------------------------------------
// Regime literals
// -----------------------------------------------------------------------------

export type ActiveRegime = "temporal" | "structural" | "symbolic";

// -----------------------------------------------------------------------------
// Source/admission primitives
// -----------------------------------------------------------------------------

export type AudioSourceKind = "wav" | "live_stream";
export type AudioModalityRef = "audio";

export type AdmissionMode = "file_decode" | "stream_capture";
export type ValueEncoding = "pcm16" | "float32" | "float64" | "unknown";
export type TimestampMode = "source_provided" | "capture_assigned";

// -----------------------------------------------------------------------------
// Clock-align primitives
// -----------------------------------------------------------------------------

export type AlignmentMode =
    | "grid_align"
    | "resample"
    | "interpolate_resample";

export type InterpolationMode =
    | "none"
    | "nearest"
    | "linear"
    | "sinc"
    | "other_declared";

export type GapPolicy =
    | "none"
    | "hold"
    | "linear_fill"
    | "drop"
    | "other_declared";

export type EdgePolicy =
    | "truncate"
    | "pad"
    | "hold"
    | "other_declared";

export type GridSource = "declared" | "derived_from_p0";

// -----------------------------------------------------------------------------
// Window primitives
// -----------------------------------------------------------------------------

export type WindowFunction =
    | "hann"
    | "hamming"
    | "rectangular"
    | "other_declared";

export type WindowBoundaryPolicy =
    | "truncate"
    | "pad"
    | "drop"
    | "other_declared";

export type SegmentationMode =
    | "sliding"
    | "fixed"
    | "other_declared";

// -----------------------------------------------------------------------------
// Transform primitives
// -----------------------------------------------------------------------------

export type TransformKind =
    | "dft"
    | "fft"
    | "rfft"
    | "other_declared";

export type TransformDomain = "complex_cartesian";

export type NormalizationMode =
    | "none"
    | "unitary"
    | "forward"
    | "inverse"
    | "other_declared";

export type NumericPrecision =
    | "float32"
    | "float64"
    | "other_declared";

export type BinGenerationMode =
    | "full"
    | "half_spectrum"
    | "other_declared";

// -----------------------------------------------------------------------------
// Deferred tertiary posture
// -----------------------------------------------------------------------------

export type DeferredTertiaryStatus = "declared_but_deferred";

// -----------------------------------------------------------------------------
// Shared non-claim tuples
// -----------------------------------------------------------------------------

export type A0NonClaims = ["none"];

export type A1NonClaims = [
    "not_raw_source",
    "not_identity_preserving_by_default"
];

export type A2NonClaims = [
    "not_raw_segment",
    "not_selection_or_quality_by_default"
];

export type A3NonClaims = [
    "not_interpretation",
    "not_quality_by_default",
    "not_polar_view_by_default"
];

// -----------------------------------------------------------------------------
// Shared axis literals for planes
// -----------------------------------------------------------------------------

export type TemporalXAxis = "time";
export type SignalYAxis = "signal";

export type FrequencyXAxis = "frequency";
export type ComplexComponentYAxis = "complex_component";
export type DerivedDiagnosticYAxis = "derived_diagnostic_value";

// -----------------------------------------------------------------------------
// Shared spectral helper shapes
// -----------------------------------------------------------------------------

export interface SpectralBinCartesian {
    k: number;
    f: number;
    re: number;
    im: number;
}

export interface SpectralDiagnosticValue {
    k: number;
    f: number;
    value: number;
}