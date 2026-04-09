# Dynamical Memory Engine — Seam Registry

## Status

This document defines the bounded operational seam registry for the V2 rebuild substrate.

It is an operational tracking surface.

It does **not** override:

- `README_MasterConstitution.md`
- `README_WorkflowContract.md`
- `README.RebuildPosture.md`
- `README.RepoLayout.v2.md`
- `README.TemporalDevelopmentProjection.v0.md`
- `README.ValidatorAndOperatorReturnPosture.v0.md`
- `README/Core/OperatorExposure/PlaneRendering/README.PlanePosture.v0.md`
- `README/Core/OperatorExposure/PlaneRendering/README.PlaneRenderer.md`
- `README/Core/OperatorExposure/README.TemporalExecutionSurface.v0.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- record current bounded seams,
- track seam relationships across runtime, validators, planes, and execution surfaces,
- preserve seam ownership and responsibility boundaries,
- support Codex packet work with an explicit seam inventory,
- and reduce implementation drift as runtime and read-side complexity increase.

This note governs **operational seam accounting** only.

It does **not** govern:

- runtime truth by itself,
- architectural meaning by itself,
- canon posture,
- or acceptance by itself.

---

## 1. Why this note exists

The V2 rebuild now has enough live and near-live surfaces that seam complexity is increasing.

This is especially true as the project moves from:

- contracts and types

into:

- validators
- operators
- planes
- execution surface routing
- renderer staging

Without a seam registry, several drifts become more likely:

- seam ownership blur
- runtime/read-side collapse
- validator/operator collapse
- multiple surfaces claiming the same job
- or later packet work widening across seams without noticing

This note exists to make the current seam landscape explicit before wiring complexity increases further.

One-line summary:

**The Seam Registry is the bounded operational surface for tracking what seams exist, what they take, what they emit, who owns them, and what they explicitly do not do.**

---

## 2. Core seam-registry rule

**Every active seam should answer one bounded job and remain traceable by input class, output class, owner surface, and governing note.**

Corollary rules:

- a seam is not defined only by file location,
- a seam is not defined only by a function name,
- and a seam should not silently inherit adjacent responsibilities because those surfaces are nearby.

If a seam cannot be described clearly in this registry, it is not yet pinned strongly enough for confident implementation.

---

## 3. Entry model

Each seam entry should preserve at minimum:

- `seam_id`
- `seam_name`
- `seam_type`
- `input_class`
- `output_class`
- `owner_surface`
- `governing_surface`
- `status`
- `explicit_non_goals`
- `notes`

Optional fields may be added later if useful, but this registry should remain compact and operational rather than encyclopedic.

---

## 4. Seam types

The current rebuild recognizes the following seam types:

- `validator`
- `operator`
- `plane`
- `execution_surface`
- `renderer`
- `admission_boundary`
- `routing_surface`

Not every seam type is active yet.

Recognized is not active by default.

---

## 5. Status posture

Each seam may be marked with a bounded status posture such as:

- `declared`
- `typed`
- `partially_mechanized`
- `mechanized`
- `deferred`

These statuses are operational seam postures.
They are not canon, not review posture, and not approval by themselves.

---

## 6. Current active seam inventory

### 6.1 Validator seams

#### Seam Entry

- `seam_id`: `VAL-P0`
- `seam_name`: `validateP0`
- `seam_type`: `validator`
- `input_class`: `P0_IngestFrame`
- `output_class`: `V0_IngestValidation`
- `owner_surface`: `validators/temporal/validate_p0_v0.ts`
- `governing_surface`: `README.IngestFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no mutation
  - no diagnostics
  - no operator logic
- `notes`: floor-local ingest validator

#### Seam Entry

- `seam_id`: `VAL-P1`
- `seam_name`: `validateP1`
- `seam_type`: `validator`
- `input_class`: `P1_ClockAlignedFrame`
- `output_class`: `V1_ClockAlignValidation`
- `owner_surface`: `validators/temporal/validate_p1_v0.ts`
- `governing_surface`: `README.ClockAlignFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no mutation
  - no diagnostics
  - no operator logic
- `notes`: floor-local clock-align validator

#### Seam Entry

- `seam_id`: `VAL-P2`
- `seam_name`: `validateP2`
- `seam_type`: `validator`
- `input_class`: `P2_WindowFrame`
- `output_class`: `V2_WindowValidation`
- `owner_surface`: `validators/temporal/validate_p2_v0.ts`
- `governing_surface`: `README.WindowFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no mutation
  - no diagnostics
  - no operator logic
- `notes`: floor-local window validator

#### Seam Entry

- `seam_id`: `VAL-P3`
- `seam_name`: `validateP3`
- `seam_type`: `validator`
- `input_class`: `P3_SpectralFrame`
- `output_class`: `V3_TransformValidation`
- `owner_surface`: `validators/temporal/validate_p3_v0.ts`
- `governing_surface`: `README.TransformFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no mutation
  - no diagnostics
  - no operator logic
- `notes`: floor-local transform validator with expanded bin checks

---

### 6.2 Operator seams

#### Seam Entry

- `seam_id`: `OP-P0`
- `seam_name`: `ingestOpV0`
- `seam_type`: `operator`
- `input_class`: `.wav input object`
- `output_class`: `P0EmissionBundle`
- `owner_surface`: `operators/temporal/ingest_op_v0.ts`
- `governing_surface`: `README.IngestFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no alignment
  - no filtering
  - no interpolation
  - no semantic logic
- `notes`: bounded `.wav` ingest seam

#### Seam Entry

- `seam_id`: `OP-P1`
- `seam_name`: `clockAlignOpV0`
- `seam_type`: `operator`
- `input_class`: `P0_IngestFrame`
- `output_class`: `P1EmissionBundle`
- `owner_surface`: `operators/temporal/clock_align_op_v0.ts`
- `governing_surface`: `README.ClockAlignFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no bundle-input consultation
  - no adaptive policy
  - no windowing
  - no semantic logic
- `notes`: deterministic alignment seam using primary-only input

#### Seam Entry

- `seam_id`: `OP-P2`
- `seam_name`: `windowOpV0`
- `seam_type`: `operator`
- `input_class`: `P1_ClockAlignedFrame`
- `output_class`: `P2EmissionBundle[]`
- `owner_surface`: `operators/temporal/window_op_v0.ts`
- `governing_surface`: `README.WindowFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no salience scoring
  - no stationarity scoring
  - no selection narrative
  - no semantic logic
- `notes`: first lawful multiplicity seam

#### Seam Entry

- `seam_id`: `OP-P3`
- `seam_name`: `transformOpV0`
- `seam_type`: `operator`
- `input_class`: `P2_WindowFrame`
- `output_class`: `P3EmissionBundle`
- `owner_surface`: `operators/temporal/transform_op_v0.ts`
- `governing_surface`: `README.TransformFloorContract.v0.md`
- `status`: `mechanized`
- `explicit_non_goals`:
  - no support admission
  - no magnitude/phase on `P3`
  - no semantic interpretation
  - no transform engine framework
- `notes`: bounded Cartesian transform seam with bounded derived diagnostic geometry

---

### 6.3 Plane seams

#### Seam Entry

- `seam_id`: `PLANE-P0`
- `seam_name`: `Plane-P0`
- `seam_type`: `plane`
- `input_class`: `PlaneP0TemporalView`
- `output_class`: `read-side temporal inspection`
- `owner_surface`: `types/temporal/temporal_floor_types_v0.ts`
- `governing_surface`: `README/Core/OperatorExposure/PlaneRendering/README.PlanePosture.v0.md`
- `status`: `typed`
- `explicit_non_goals`:
  - not runtime lane
  - not semantic overlay
  - not support substitution
- `notes`: typed in temporal floor substrate; no plane implementation surface yet

#### Seam Entry

- `seam_id`: `PLANE-P1`
- `seam_name`: `Plane-P1`
- `seam_type`: `plane`
- `input_class`: `PlaneP1TemporalView`
- `output_class`: `read-side aligned temporal inspection`
- `owner_surface`: `types/temporal/temporal_floor_types_v0.ts`
- `governing_surface`: `README/Core/OperatorExposure/PlaneRendering/README.PlanePosture.v0.md`
- `status`: `typed`
- `explicit_non_goals`:
  - not runtime lane
  - not semantic overlay
  - not support substitution
- `notes`: typed in temporal floor substrate; no plane implementation surface yet

#### Seam Entry

- `seam_id`: `PLANE-P2`
- `seam_name`: `Plane-P2`
- `seam_type`: `plane`
- `input_class`: `PlaneP2TemporalView`
- `output_class`: `read-side window inspection`
- `owner_surface`: `types/temporal/temporal_floor_types_v0.ts`
- `governing_surface`: `README/Core/OperatorExposure/PlaneRendering/README.PlanePosture.v0.md`
- `status`: `typed`
- `explicit_non_goals`:
  - not evaluation surface
  - not selection engine
  - not runtime lane
- `notes`: typed in temporal floor substrate; no plane implementation surface yet

#### Seam Entry

- `seam_id`: `PLANE-P3`
- `seam_name`: `Plane-P3`
- `seam_type`: `plane`
- `input_class`: `PlaneP3SpectralView`
- `output_class`: `read-side Cartesian spectral inspection`
- `owner_surface`: `types/temporal/temporal_floor_types_v0.ts`
- `governing_surface`: `README/Core/OperatorExposure/PlaneRendering/README.PlanePosture.v0.md`
- `status`: `typed`
- `explicit_non_goals`:
  - not diagnostic substitution
  - not semantic overlay
  - not runtime lane
- `notes`: typed in temporal floor substrate; no plane implementation surface yet

#### Seam Entry

- `seam_id`: `PLANE-D3`
- `seam_name`: `Plane-D3`
- `seam_type`: `plane`
- `input_class`: `PlaneD3DiagnosticView`
- `output_class`: `read-side derived diagnostic inspection`
- `owner_surface`: `types/temporal/temporal_floor_types_v0.ts`
- `governing_surface`: `README/Core/OperatorExposure/PlaneRendering/README.PlanePosture.v0.md`
- `status`: `typed`
- `explicit_non_goals`:
  - not primary truth surface
  - not semantic overlay
  - not runtime lane
- `notes`: bounded diagnostic plane typed in temporal floor substrate; no plane implementation surface yet

---

### 6.4 Execution / rendering seams

#### Seam Entry

- `seam_id`: `EXEC-TEMPORAL-V0`
- `seam_name`: `TemporalExecutionSurface`
- `seam_type`: `execution_surface`
- `input_class`: `.wav source intake + chain selection`
- `output_class`: `bounded run routing + plane hosting`
- `owner_surface`: `README/Core/OperatorExposure/README.TemporalExecutionSurface.v0.md`
- `governing_surface`: `README/Core/OperatorExposure/README.TemporalExecutionSurface.v0.md`
- `status`: `declared`
- `explicit_non_goals`:
  - not product shell
  - not semantic dashboard
  - not support-regime surface
- `notes`: declared-only execution/routing note; no mechanized execution surface yet

#### Seam Entry

- `seam_id`: `RENDER-PLANE-V0`
- `seam_name`: `PlaneRenderer`
- `seam_type`: `renderer`
- `input_class`: `declared plane object`
- `output_class`: `truthful rendered inspection`
- `owner_surface`: `README/Core/OperatorExposure/PlaneRendering/README.PlaneRenderer.md`
- `governing_surface`: `README/Core/OperatorExposure/PlaneRendering/README.PlaneRenderer.md`
- `status`: `declared`
- `explicit_non_goals`:
  - not runtime operator
  - not semantic inference engine
  - not support substitution
- `notes`: declared-only renderer note; accepts pinned plane classes but is not yet mechanized

---

## 7. Use rule

Use this registry when the question is:

- what seams currently exist
- what each seam takes and emits
- which surface owns the seam
- what governing note constrains the seam
- what seams are mechanized vs only pinned or declared

Do not use this registry when the question is:

- what runtime truth is proven
- what packets happened historically
- what currently lives where in the repo in full
- or what architectural meaning is authoritatively settled

Those questions belong to runtime evidence, packet lineage, repo accounting, or governing notes.

---

## 8. Update triggers

Update this registry when:

- a new seam becomes active
- a seam changes type
- a seam’s input/output class changes materially
- a seam becomes mechanized
- a seam is deferred or superseded
- or a major ownership relationship changes

Do not update it for decorative churn.

---

## 9. One-line operational summary

**The Seam Registry is the bounded operational surface for tracking current seam relationships across validators, operators, planes, execution surface, and renderer so implementation complexity can grow without losing ownership, boundary, and input/output clarity.**
