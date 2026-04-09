# Dynamical Memory Engine — Source Intake Surface v0

## Status

This document defines the bounded posture for the first source intake surface in the V2 rebuild substrate.

It is a supporting execution-guidance note.

It does **not** override:

- `README_MasterConstitution.md`
- `README_WorkflowContract.md`
- `README.RebuildPosture.md`
- `README.RepoLayout.v2.md`
- `README.TemporalDevelopmentProjection.v0.md`
- `README.ValidatorAndOperatorReturnPosture.v0.md`
- `README.TemporalExecutionSurface.v0.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- define the first bounded source intake surface for TemporalRegime execution,
- define what source intake is and is not,
- define the current first active source family,
- define source selection / upload / saved-reference posture,
- and prevent source intake from silently becoming execution, review, or runtime orchestration.

This note governs **source intake posture** only.

It does **not** govern:

- runtime operator semantics by itself,
- execution routing by itself,
- plane rendering by itself,
- support-regime admission,
- symbolic-regime intake,
- or full source-registry architecture.

---

## 1. Why this note exists

The TemporalRegime primary chain is now mechanized through `P3`.

The next read-side stabilization step requires a way to choose and admit sources for execution.

Without an explicit source-intake note, source handling tends to drift through:

- intake/execution collapse,
- source-selection logic becoming orchestration,
- source storage being mistaken for runtime memory,
- support-review posture leaking into intake,
- or premature source-registry architecture appearing by convenience.

This note exists to keep source intake narrow and honest.

One-line summary:

**The Source Intake Surface is the bounded handle for selecting or uploading sources for TemporalRegime execution; it is not the execution chain, not memory, and not review.**

---

## 2. Core source-intake rule

**The Source Intake Surface exists to admit, select, and reference bounded source inputs for possible execution.**

Corollary rules:

- source intake is not runtime execution,
- source intake is not source interpretation,
- source intake is not support classification,
- source intake is not review posture,
- and source intake must not silently become a full source-registry or orchestration layer.

If source intake begins deciding what the chain should mean or how execution should behave beyond bounded intake responsibility, it has drifted.

---

## 3. Source intake definition

The Source Intake Surface is a bounded source-facing handle.

Its current job is to let Reed:

- upload a `.wav`,
- select an available `.wav`,
- retain a bounded local reference to the selected `.wav`,
- and pass that reference forward for possible execution.

It is not yet responsible for:

- executing the chain,
- rendering planes,
- semantic labeling,
- support-regime admission,
- symbolic intake,
- or review classification.

One-line summary:

**Source intake handles source selection and bounded source reference, not execution or interpretation.**

---

## 4. First active source family

The first active source family is:

- `.wav`

This means the Source Intake Surface should currently support:

- `.wav` upload
- `.wav` selection
- bounded saved `.wav` reference posture

Recognized but deferred:

- live stream
- microphone input
- non-audio temporal families
- multi-source bundles
- support-regime source families
- symbolic-regime source families

Recognized is not active by default.

---

## 5. Source intake responsibilities

The first Source Intake Surface may lawfully handle:

### 5.1 Upload

- receive `.wav` input from Reed
- preserve explicit file identity
- reject unsupported source families honestly

### 5.2 Selection

- choose among available `.wav` sources
- expose current selected source reference

### 5.3 Saved-source reference posture

- keep a bounded local saved reference for later execution
- allow repeat execution against the same source without re-upload

This saved-source reference posture is convenience only.

It is not:

- runtime memory
- support object formation
- review posture
- or canon-like persistence

---

## 6. Explicit non-goals for source intake

The first Source Intake Surface should **not** try to:

- run the TemporalRegime chain
- host planes
- classify failures from downstream seams
- perform review/readiness logic
- maintain a broad source registry
- infer source meaning
- infer source quality
- infer support significance
- widen into support-regime or symbolic-regime intake

These are all legitimate future pressures, but not lawful source-intake scope now.

---

## 7. Output posture

The output of the Source Intake Surface should remain bounded and simple.

At the current stage, source intake should emit or expose something like:

- a bounded source reference
- a selected `.wav` reference
- or a simple intake request object

The output should remain:

- explicit
- local
- non-semantic
- non-promotional
- and narrow enough to hand into the next execution-facing seam

This note does not yet require a final source-reference schema.
It only requires that intake output remain narrow and honest.

---

## 8. Relationship to Temporal Execution Surface

The Source Intake Surface is not the Temporal Execution Surface.

The Source Intake Surface should:

- admit/select source
- expose bounded source reference

The Temporal Execution Surface should:

- initiate execution
- route results
- support stage/plane inspection

This split must remain explicit.

One-line summary:

**Source Intake chooses the source. Temporal Execution runs the chain.**

---

## 9. Relationship to future orchestrator

Source intake is also not the orchestrator.

A future minimal orchestrator may:

- receive a selected source reference
- run the mechanized operator chain
- return stage outputs or chain results

But the intake surface itself should not silently become that orchestrator.

If orchestration is introduced later, it must be explicitly named and bounded.

---

## 10. Failure posture at intake

Source intake should expose intake-local failure honestly.

Examples:

- unsupported file extension
- missing file
- malformed source selection request
- unavailable saved source reference

These failures should remain intake-local.

The intake surface should not absorb downstream execution failures and relabel them as intake errors.

One-line summary:

**Source intake should surface intake-local failure, not claim failures owned by later seams.**

---

## 11. Saved-source caution rule

Saved source references must remain clearly below stronger continuity claims.

A saved `.wav` reference is:

- a local convenience handle
- not runtime memory
- not support-bearing memory
- not identity posture
- not review posture
- not canonical source truth

This distinction must remain explicit.

---

## 12. First implementation posture

The first source-intake implementation should remain thin.

That means:

- no broad registry framework
- no semantic metadata layer
- no support classification
- no dashboard expansion
- no hidden orchestration logic
- no review posture

The current goal is:

**make `.wav` source intake explicit, local, and easy to hand into execution.**

---

## 13. Non-goals

This note does not yet define:

- final source-reference schema
- support-regime intake posture
- symbolic-regime intake posture
- live-stream intake posture
- multi-source intake behavior
- registry synchronization
- or source review policy

Those require later bounded packets.

---

## 14. One-line operational summary

**Source Intake Surface v0 defines the first bounded handle for uploading, selecting, and referencing `.wav` sources for TemporalRegime execution without collapsing into execution, review, support, or orchestration logic.**