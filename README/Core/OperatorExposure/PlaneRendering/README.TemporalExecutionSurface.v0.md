# Dynamical Memory Engine — Temporal Execution Surface v0

## Status

This document defines the bounded posture for the first TemporalRegime execution surface in the V2 rebuild substrate.

It is a supporting read-side and execution-guidance note.

It does **not** override:

- `README_MasterConstitution.md`
- `README_WorkflowContract.md`
- `README.RebuildPosture.md`
- `README.RepoLayout.v2.md`
- `README.TemporalDevelopmentProjection.v0.md`
- `README.PlanePosture.v0.md`
- `README.ValidatorAndOperatorReturnPosture.v0.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- define the first bounded execution surface for TemporalRegime inspection,
- define how `.wav` inputs enter this inspection surface,
- define the relationship between execution surface and plane rendering,
- preserve truthful read-side inspection posture,
- and prevent the first inspection handle from drifting into a premature product shell.

This note governs **TemporalRegime execution surface posture** only.

It does **not** govern:

- runtime operator semantics by itself,
- support-regime admission,
- symbolic overlay behavior,
- final viewer architecture,
- or full product packaging.

---

## 1. Why this note exists

The TemporalRegime primary chain is now mechanized through:

- `P0`
- `P1`
- `P2`
- `P3`

The next lawful pressure is to make that chain directly inspectable by Reed.

This requires an execution surface.

Without an explicit posture note, the first execution surface risks drifting into:

- product-shell inflation,
- dashboard clutter,
- support/semantic substitution,
- renderer/runtime collapse,
- or app polish outrunning chain legibility.

This note exists to keep the first execution surface narrow, honest, and useful.

One-line summary:

**The Temporal Execution Surface is Reed’s bounded handle for running and inspecting the mechanized TemporalRegime chain, not a premature product shell.**

---

## 2. Core execution-surface rule

**The first TemporalRegime execution surface exists to admit bounded source inputs, run the mechanized temporal chain, and expose truthful read-side plane inspection over emitted objects.**

Corollary rules:

- the execution surface is not a runtime lane,
- the execution surface is not a semantic overlay engine,
- the execution surface is not a support/review surface by default,
- and the execution surface must not imply more runtime maturity than the underlying chain actually supports.

If the execution surface becomes more authoritative than the chain it hosts, it has drifted.

---

## 3. Execution surface definition

The Temporal Execution Surface is a bounded inspection handle.

Its current job is to let Reed:

- upload or select `.wav` inputs,
- save or retain bounded source references for execution,
- run the mechanized TemporalRegime chain,
- inspect the emitted chain through truthful planes,
- and move across `P0 → P3` without requiring semantic mediation.

The execution surface is not yet:

- a general audio workstation,
- a support-regime viewer,
- a symbolic interface,
- a semantic dashboard,
- or a final app shell.

One-line summary:

**The execution surface is an operator-facing inspection handle, not a finished app identity.**

---

## 4. First active source family

The first active source family for the execution surface is:

- `.wav`

This means the execution surface should support:

- `.wav` file intake
- source-path or saved-source reference handling
- bounded execution against the current TemporalRegime chain

Recognized but deferred:

- live stream intake
- microphone input
- multi-source orchestration
- non-audio temporal families

These may come later, but they are not required for the first truthful execution surface.

---

## 5. First execution path

The first bounded execution path is:

`.wav` input  
→ `IngestOp`  
→ `ClockAlignOp`  
→ `WindowOp`  
→ `TransformOp`  
→ plane inspection surfaces

This execution path should remain explicit.

The execution surface must not silently skip seams or hide emitted stages.

---

## 6. Minimum execution-surface capabilities

The first execution surface should support only the minimum capabilities needed for lawful inspection.

### 6.1 Input handling

- upload `.wav`
- select saved `.wav`
- persist bounded source reference for local inspection use

### 6.2 Execution control

- run the temporal chain
- expose run success / failure honestly
- allow rerun on the same source

### 6.3 Chain inspection routing

- expose the emitted stages:
  - `P0`
  - `P1`
  - `P2`
  - `P3`
  - `D3` where explicitly selected

### 6.4 Plane selection

- choose which pinned plane to inspect
- switch between primary and bounded diagnostic view without collapsing them

---

## 7. Explicit non-goals for the first execution surface

The first execution surface should **not** try to:

- be a full product shell
- solve SupportRegime inspection
- solve SymbolicRegime interaction
- provide semantic labeling by default
- provide readiness/review posture
- hide the chain behind one “smart” composite view
- auto-select the “best” frame or “most meaningful” output
- become a dashboard of mixed truths

These are legitimate future pressures, but not the first lawful execution-surface goal.

---

## 8. Relationship to PlaneRenderer

The execution surface and PlaneRenderer must remain distinct.

### 8.1 Execution surface role

The execution surface should handle:

- source intake
- execution triggering
- run/result routing
- plane selection
- bounded inspection flow

### 8.2 PlaneRenderer role

The PlaneRenderer should handle:

- rendering a declared plane class
- preserving projection-class truthfulness
- rendering direct primary views faithfully
- rendering bounded diagnostic views only as diagnostic

### 8.3 Separation rule

The execution surface hosts and routes planes.

The PlaneRenderer renders them.

The execution surface must not silently become the renderer.
The renderer must not silently become runtime logic.

One-line summary:

**Execution Surface routes inspection. PlaneRenderer renders declared planes.**

---

## 9. First plane set for the execution surface

The first lawful plane set is:

- `Plane-P0`
- `Plane-P1`
- `Plane-P2`
- `Plane-P3`
- `Plane-D3`

Priority order:

1. `Plane-P0`
2. `Plane-P1`
3. `Plane-P2`
4. `Plane-P3`
5. `Plane-D3`

This keeps direct primary visibility ahead of richer diagnostic views.

---

## 10. Truthful inspection rule

The execution surface must help Reed inspect what is actually emitted.

This means:

- no hidden semantic relabeling
- no support/accounting substitution for primary visibility
- no derived view presented as if it were direct primary structure
- no diagnostic richness presented as if it were the core truth surface
- no “helpful” compression that hides the chain itself

If a richer presentation competes with direct emitted truth, direct emitted truth wins.

---

## 11. Saved-source posture

The execution surface may support a bounded saved-source posture for `.wav` inspection.

This saved-source posture should remain:

- local
- explicit
- source-family limited
- non-semantic
- non-authoritative

Saved source references are convenience for rerunning and inspecting the temporal chain.
They are not yet SupportRegime objects, memory claims, or review objects.

---

## 12. Failure posture

The execution surface must expose failure honestly.

Examples:

- invalid source type
- malformed `.wav`
- channel-selection failure
- validator failure
- downstream operator failure

Failure should remain:

- visible
- bounded
- classed where possible
- not softened into fake success

One-line summary:

**The execution surface must expose insufficiency and failure rather than cosmetically absorbing them.**

---

## 13. Future combinability rule

The execution surface should be combinable with future regime planes.

This means the first design should leave room for:

- future SupportRegime planes
- future SymbolicRegime planes
- future diagnostic plane families

But that future combinability must not widen the current implementation scope.

Recognized future combination is not present authorization.

---

## 14. Implementation posture

The first implementation should remain thin.

That means:

- no heavy framework abstraction unless later justified
- no broad viewer engine
- no mixed-surface dashboard
- no semantic runtime coupling
- no future-regime shortcuts

The current implementation goal is:

**make the mechanized TemporalRegime chain directly runnable and viewable.**

---

## 15. Non-goals

This note does not yet define:

- final UI design
- final viewer design
- support-regime execution surface
- symbolic-regime execution surface
- semantic overlay behavior
- multi-user or distributed execution posture

Those require later bounded packets.

---

## 16. One-line operational summary

**Temporal Execution Surface v0 defines the first bounded inspection handle for uploading `.wav` inputs, running the mechanized TemporalRegime chain, and viewing truthful primary and bounded diagnostic planes through a separate PlaneRenderer.**