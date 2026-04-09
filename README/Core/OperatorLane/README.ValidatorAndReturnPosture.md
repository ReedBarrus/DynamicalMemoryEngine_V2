// Dynamical Memory Engine — Temporal Floor Types v0.1
//
// Purpose:
// - define the trusted TypeScript object families for the TemporalRegime rebuild floor
// - import shared primitives from temporal_primitives_v0
// - encode P0–P3 primary artifacts
// - encode V0–V3, L0–L3, A0–A3, D0–D3 companion families
// - encode Plane-P0, Plane-P1, Plane-P2, Plane-P3, Plane-D3 read-side projections
//
// Posture:
// - structural primacy first
// - companions remain single-job and explicitly attached to a primary_handle
// - planes are read-side projections, not runtime lanes
// - T0–T3 remain declared but deferred placeholders

import type {
  PrimaryHandle,
  CompanionHandle,
  PlaneHandle,
  RuntimeLane,
  AudioSourceKind,
  AudioModalityRef,
  AdmissionMode,
  ValueEncoding,
  TimestampMode,
  AlignmentMode,
  InterpolationMode,
  GapPolicy,
  EdgePolicy,
  GridSource,
  WindowFunction,
  WindowBoundaryPolicy,
  SegmentationMode,
  TransformKind,
  TransformDomain,
  NormalizationMode,
  NumericPrecision,
  BinGenerationMode,
  DeferredTertiaryStatus,
  A0NonClaims,
  A1NonClaims,
  A2NonClaims,
  A3NonClaims,
  TemporalXAxis,
  SignalYAxis,
  FrequencyXAxis,
  ComplexComponentYAxis,
  DerivedDiagnosticYAxis,
  SpectralBinCartesian,
  SpectralDiagnosticValue,
} from "./temporal_primitives_v0";

// -----------------------------------------------------------------------------
// Shared base families
// -----------------------------------------------------------------------------

export interface PrimaryBase {
  lane: "P";
  artifact_class: string;
  primary_handle: PrimaryHandle;
}

export interface LinkedPrimaryBase extends PrimaryBase {
  upstream_primary_handle: PrimaryHandle;
}

export interface ValidationBase {
  lane: "V";
  validation_class: string;
  primary_handle: PrimaryHandle;
  status: "pass" | "fail";
  failure_codes: string[];
}

export interface CompanionBase {
  primary_handle: PrimaryHandle;
  companion_handle: CompanionHandle;
}

export interface LineageBase extends CompanionBase {
  lane: "L";
  lineage_class: string;
}

export interface AccountingBase extends CompanionBase {
  lane: "A";
  accounting_class: string;
}

export interface DiagnosticsBase extends CompanionBase {
  lane: "D";
  diagnostics_class: string;
}

export interface DeferredTertiaryBase extends CompanionBase {
  lane: "T";
  tertiary_class: string;
  status: DeferredTertiaryStatus;
}

export interface PlaneBase {
  plane_class: string;
  primary_handle: PrimaryHandle;
}

// -----------------------------------------------------------------------------
// P0 Floor — Ingest
// -----------------------------------------------------------------------------

export interface P0_IngestFrame extends PrimaryBase {
  artifact_class: "P0_IngestFrame";
  source_axis_ref: string;
  time_axis_ref: string;
  t: number[];
  x: number[];
}

export interface V0_IngestValidation extends ValidationBase {
  validation_class: "V0_IngestValidation";
  checks: {
    required_fields_present: boolean;
    forbidden_fields_absent: boolean;
    t_x_same_length: boolean;
    t_numeric: boolean;
    x_numeric: boolean;
    time_axis_ref_present: boolean;
    source_axis_ref_present: boolean;
  };
}

export interface L0_IngestLineage extends LineageBase {
  lineage_class: "L0_IngestLineage";
  source_kind: AudioSourceKind;
  source_ref: string;
  channel_ref?: string;
  modality_ref: AudioModalityRef;
  ingest_event_id: string;
  operator_id: "IngestOp";
  operator_version: string;
}

export interface A0_IngestAccounting extends AccountingBase {
  accounting_class: "A0_IngestAccounting";
  admission_mode: AdmissionMode;
  value_encoding: ValueEncoding;
  timestamp_mode: TimestampMode;
  declared_mutation: "none";
  non_claims: A0NonClaims;
}

export interface D0_IngestDiagnostics extends DiagnosticsBase {
  diagnostics_class: "D0_IngestDiagnostics";
  sample_count: number;
  value_min?: number;
  value_max?: number;
  value_rms?: number;
  repeated_timestamp_count?: number;
  non_monotonic_timestamp_count?: number;
  estimated_gap_count?: number;
  clipping_detected?: boolean;
}

export interface T0_Deferred extends DeferredTertiaryBase {
  tertiary_class: "T0_Deferred";
}

export interface PlaneP0TemporalView extends PlaneBase {
  plane_class: "PlaneP0TemporalView";
  x_axis: TemporalXAxis;
  y_axis: SignalYAxis;
  t: number[];
  x: number[];
}

// -----------------------------------------------------------------------------
// P1 Floor — Clock Align
// -----------------------------------------------------------------------------

export interface P1_ClockAlignedFrame extends LinkedPrimaryBase {
  artifact_class: "P1_ClockAlignedFrame";
  grid_t0: number;
  Fs: number;
  n: number;
  x: number[];
}

export interface V1_ClockAlignValidation extends ValidationBase {
  validation_class: "V1_ClockAlignValidation";
  checks: {
    required_fields_present: boolean;
    forbidden_fields_absent: boolean;
    fs_positive: boolean;
    grid_t0_finite: boolean;
    n_matches_x_length: boolean;
    x_numeric: boolean;
    upstream_primary_handle_present: boolean;
  };
}

export interface L1_ClockAlignLineage extends LineageBase {
  lineage_class: "L1_ClockAlignLineage";
  upstream_primary_handle: PrimaryHandle;
  upstream_lineage_handle?: CompanionHandle;
  alignment_event_id: string;
  operator_id: "ClockAlignOp";
  operator_version: string;
}

export interface A1_ClockAlignApplication extends AccountingBase {
  accounting_class: "A1_ClockAlignApplication";
  target_sample_rate_hz: number;
  alignment_mode: AlignmentMode;
  interpolation_mode: InterpolationMode;
  gap_policy: GapPolicy;
  edge_policy: EdgePolicy;
  grid_source: GridSource;
  non_claims: A1NonClaims;
}

export interface D1_ClockAlignDiagnostics extends DiagnosticsBase {
  diagnostics_class: "D1_ClockAlignDiagnostics";
  repeated_timestamp_count?: number;
  non_monotonic_timestamp_count?: number;
  estimated_gap_count?: number;
  drift_estimate_ppm?: number;
  offset_estimate_ms?: number;
  fill_count?: number;
  dropped_sample_count?: number;
  interpolation_coverage_ratio?: number;
  residual_irregularity_score?: number;
}

export interface T1_Deferred extends DeferredTertiaryBase {
  tertiary_class: "T1_Deferred";
}

export interface PlaneP1TemporalView extends PlaneBase {
  plane_class: "PlaneP1TemporalView";
  x_axis: TemporalXAxis;
  y_axis: SignalYAxis;
  grid_t0: number;
  Fs: number;
  n: number;
  x: number[];
}

// -----------------------------------------------------------------------------
// P2 Floor — Window
// -----------------------------------------------------------------------------

export interface P2_WindowFrame extends LinkedPrimaryBase {
  artifact_class: "P2_WindowFrame";
  window_id: string;
  grid_t0: number;
  Fs: number;
  n: number;
  x: number[];
}

export interface V2_WindowValidation extends ValidationBase {
  validation_class: "V2_WindowValidation";
  checks: {
    required_fields_present: boolean;
    forbidden_fields_absent: boolean;
    fs_positive: boolean;
    grid_t0_finite: boolean;
    n_matches_x_length: boolean;
    x_numeric: boolean;
    window_id_present: boolean;
    upstream_primary_handle_present: boolean;
  };
}

export interface L2_WindowLineage extends LineageBase {
  lineage_class: "L2_WindowLineage";
  upstream_primary_handle: PrimaryHandle;
  upstream_lineage_handle?: CompanionHandle;
  window_event_id: string;
  operator_id: "WindowOp";
  operator_version: string;
}

export interface A2_WindowApplication extends AccountingBase {
  accounting_class: "A2_WindowApplication";
  window_function: WindowFunction;
  window_length_n: number;
  hop_n: number;
  boundary_policy: WindowBoundaryPolicy;
  segmentation_mode: SegmentationMode;
  non_claims: A2NonClaims;
}

export interface D2_WindowDiagnostics extends DiagnosticsBase {
  diagnostics_class: "D2_WindowDiagnostics";
  padded: boolean;
  clipped: boolean;
  estimated_gap_count?: number;
  gap_total_duration?: number;
  missing_ratio?: number;
}

export interface T2_Deferred extends DeferredTertiaryBase {
  tertiary_class: "T2_Deferred";
}

export interface PlaneP2TemporalView extends PlaneBase {
  plane_class: "PlaneP2TemporalView";
  x_axis: TemporalXAxis;
  y_axis: SignalYAxis;
  grid_t0: number;
  Fs: number;
  n: number;
  x: number[];
}

// -----------------------------------------------------------------------------
// P3 Floor — Transform
// -----------------------------------------------------------------------------

export interface P3_SpectralFrame extends LinkedPrimaryBase {
  artifact_class: "P3_SpectralFrame";
  window_id: string;
  Fs: number;
  n: number;
  df: number;
  bins: SpectralBinCartesian[];
}

export interface V3_TransformValidation extends ValidationBase {
  validation_class: "V3_TransformValidation";
  checks: {
    required_fields_present: boolean;
    forbidden_fields_absent: boolean;
    fs_positive: boolean;
    n_positive: boolean;
    df_positive: boolean;
    bins_present: boolean;
    bins_have_required_fields: boolean;
    bins_values_numeric: boolean;
    window_id_present: boolean;
    upstream_primary_handle_present: boolean;
  };
}

export interface L3_TransformLineage extends LineageBase {
  lineage_class: "L3_TransformLineage";
  upstream_primary_handle: PrimaryHandle;
  upstream_lineage_handle?: CompanionHandle;
  transform_event_id: string;
  operator_id: "TransformOp";
  operator_version: string;
}

export interface A3_TransformApplication extends AccountingBase {
  accounting_class: "A3_TransformApplication";
  transform_kind: TransformKind;
  transform_domain: TransformDomain;
  normalization_mode: NormalizationMode;
  numeric_precision: NumericPrecision;
  bin_generation_mode: BinGenerationMode;
  non_claims: A3NonClaims;
}

export interface D3_TransformDiagnostics extends DiagnosticsBase {
  diagnostics_class: "D3_TransformDiagnostics";
  residue: {
    parseval_error?: number;
    leakage_estimate?: number;
    padded_length?: number;
    nan_detected?: boolean;
    inf_detected?: boolean;
  };
  derived_geometry?: {
    magnitude: SpectralDiagnosticValue[];
    phase: SpectralDiagnosticValue[];
  };
}

export interface T3_Deferred extends DeferredTertiaryBase {
  tertiary_class: "T3_Deferred";
}

export interface PlaneP3SpectralView extends PlaneBase {
  plane_class: "PlaneP3SpectralView";
  x_axis: FrequencyXAxis;
  y_axis: ComplexComponentYAxis;
  Fs: number;
  n: number;
  df: number;
  bins: SpectralBinCartesian[];
}

export interface PlaneD3DiagnosticView extends PlaneBase {
  plane_class: "PlaneD3DiagnosticView";
  diagnostics_handle: CompanionHandle;
  x_axis: FrequencyXAxis;
  y_axis: DerivedDiagnosticYAxis;
  magnitude?: SpectralDiagnosticValue[];
  phase?: SpectralDiagnosticValue[];
  nan_detected?: boolean;
  inf_detected?: boolean;
}

// -----------------------------------------------------------------------------
// Shared emission bundles
// -----------------------------------------------------------------------------

export interface P0EmissionBundle {
  primary: P0_IngestFrame;
  validation: V0_IngestValidation;
  lineage: L0_IngestLineage;
  accounting: A0_IngestAccounting;
  diagnostics: D0_IngestDiagnostics;
  tertiary: T0_Deferred;
}

export interface P1EmissionBundle {
  primary: P1_ClockAlignedFrame;
  validation: V1_ClockAlignValidation;
  lineage: L1_ClockAlignLineage;
  accounting: A1_ClockAlignApplication;
  diagnostics: D1_ClockAlignDiagnostics;
  tertiary: T1_Deferred;
}

export interface P2EmissionBundle {
  primary: P2_WindowFrame;
  validation: V2_WindowValidation;
  lineage: L2_WindowLineage;
  accounting: A2_WindowApplication;
  diagnostics: D2_WindowDiagnostics;
  tertiary: T2_Deferred;
}

export interface P3EmissionBundle {
  primary: P3_SpectralFrame;
  validation: V3_TransformValidation;
  lineage: L3_TransformLineage;
  accounting: A3_TransformApplication;
  diagnostics: D3_TransformDiagnostics;
  tertiary: T3_Deferred;
}

// -----------------------------------------------------------------------------
// Floor unions
// -----------------------------------------------------------------------------

export type TemporalPrimary =
  | P0_IngestFrame
  | P1_ClockAlignedFrame
  | P2_WindowFrame
  | P3_SpectralFrame;

export type TemporalValidation =
  | V0_IngestValidation
  | V1_ClockAlignValidation
  | V2_WindowValidation
  | V3_TransformValidation;

export type TemporalLineage =
  | L0_IngestLineage
  | L1_ClockAlignLineage
  | L2_WindowLineage
  | L3_TransformLineage;

export type TemporalAccounting =
  | A0_IngestAccounting
  | A1_ClockAlignApplication
  | A2_WindowApplication
  | A3_TransformApplication;

export type TemporalDiagnostics =
  | D0_IngestDiagnostics
  | D1_ClockAlignDiagnostics
  | D2_WindowDiagnostics
  | D3_TransformDiagnostics;

export type TemporalDeferredTertiary =
  | T0_Deferred
  | T1_Deferred
  | T2_Deferred
  | T3_Deferred;

export type TemporalPlane =
  | PlaneP0TemporalView
  | PlaneP1TemporalView
  | PlaneP2TemporalView
  | PlaneP3SpectralView
  | PlaneD3DiagnosticView;

export type TemporalEmissionBundle =
  | P0EmissionBundle
  | P1EmissionBundle
  | P2EmissionBundle
  | P3EmissionBundle;

export type TemporalFloorObject =
  | TemporalPrimary
  | TemporalValidation
  | TemporalLineage
  | TemporalAccounting
  | TemporalDiagnostics
  | TemporalDeferredTertiary
  | TemporalPlane;
