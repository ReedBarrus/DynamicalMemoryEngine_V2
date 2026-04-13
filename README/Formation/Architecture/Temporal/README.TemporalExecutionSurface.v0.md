# Dynamical Memory Engine - Temporal Execution Surface v0

## Status

This document defines the bounded posture for the first TemporalRegime execution surface in the V2 rebuild substrate.

It is a supporting read-side and execution-guidance note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README/Constitution/Workflow/README.RebuildPosture.md`
- `README.RepoLayout.md`
- `README/Core/Regimes/Temporal/README.TemporalDevelopmentProjection.md`
- `README/Formation/README.PlanePosture.v0.md`
- `README/Core/Regimes/Temporal/Validators/README.ValidatorAndReturnPosture.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- define the first bounded execution surface for TemporalRegime inspection,
- define how execution begins from a selected source reference,
- define the relationship between execution surface, source intake, and plane rendering,
- preserve truthful read-side inspection posture,
- and prevent the first inspection handle from drifting into a premature product shell.

This note governs **TemporalRegime execution surface posture** only.

It does **not** govern:

- runtime operator semantics by itself,
- source admission by itself,
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
- source-intake / execution collapse,
- or app polish outrunning chain legibility.

This note exists to keep the first execution surface narrow, honest, and useful.

One-line summary:

**The Temporal Execution Surface is Reed's bounded handle for running and inspecting the mechanized TemporalRegime chain, not a premature product shell.**

---

## 2. Core execution-surface rule

**The first TemporalRegime execution surface exists to accept a bounded selected-source reference, run the mechanized temporal chain, and expose truthful read-side plane inspection over emitted objects.**

Corollary rules:

- the execution surface is not the Source Intake Surface,
- the execution surface is not a runtime lane,
- the execution surface is not a semantic overlay engine,
- the execution surface is not a support/review surface by default,
- and the execution surface must not imply more runtime maturity than the underlying chain actually supports.

If the execution surface becomes more authoritative than the chain it hosts, it has drifted.

---

## 3. Execution surface definition

The Temporal Execution Surface is a bounded execution-and-inspection host.

Its current job is to let Reed:

- accept a bounded source reference from the Source Intake Surface,
- trigger the mechanized TemporalRegime chain from that selected source,
- inspect the resulting emitted chain,
- route between available emitted stages,
- select among currently pinned planes,
- and host truthful rendered inspection through the PlaneRenderer.

The execution surface is not yet:

- a source intake surface,
- a general audio workstation,
- a support-regime viewer,
- a symbolic interface,
- a semantic dashboard,
- or a final app shell.

One-line summary:

**The execution surface runs and routes bounded temporal inspection; it does not own source intake, semantic closure, or future-regime viewing.**

---

## 4. Relationship to Source Intake Surface

The Temporal Execution Surface is not the Source Intake Surface.

The Source Intake Surface should:

- admit `.wav` input,
- select among available `.wav` sources,
- expose a bounded source reference,
- and remain below execution.

The Temporal Execution Surface should:

- accept a bounded source reference or execution request,
- trigger the mechanized temporal chain,
- preserve stage/result routing,
- and host inspection of emitted outputs.

One-line summary:

**Source Intake chooses the source. Temporal Execution runs the chain from the chosen source.**

---

## 5. Relationship to PlaneRenderer

The Temporal Execution Surface is not the PlaneRenderer.

The Temporal Execution Surface should:

- route the selected stage,
- choose the selected plane,
- pass the selected plane object into the renderer,
- and host the returned render-ready output.

The PlaneRenderer should:

- accept one declared plane object,
- render only what that plane class lawfully projects,
- preserve direct-vs-derived distinction,
- and fail explicitly on unsupported plane classes.

One-line summary:

**Temporal Execution hosts inspection flow. PlaneRenderer renders one declared plane truthfully.**

---

## 6. Failure posture for execution surface

The Temporal Execution Surface may surface failures from multiple seams, but it must not erase seam ownership.

This means the execution surface may host:

- source-intake failure surfaced from the Source Intake Surface,
- validator failure surfaced from a validator seam,
- operator failure surfaced from an operator seam,
- renderer failure surfaced from the PlaneRenderer,
- or execution-routing failure that belongs to the execution surface itself.

But it must not flatten them all into one generic blur.

The surfaced failure posture should preserve, where possible:

- failing seam identity,
- failure class,
- failure message,
- and whether the failure is intake / validation / operator / renderer / routing.

One-line summary:

**The Temporal Execution Surface may surface failure, but it must not steal failure ownership from the seam that actually failed.**

---

## 7. First active source family

The first active source family for the execution path hosted by the execution surface is:

- `.wav`

This means the execution surface should support:

- bounded execution against the current TemporalRegime chain from a selected `.wav` source reference,
- explicit visibility into the `.wav`-first execution path,
- and rerun from the same selected source reference where needed.

Recognized but deferred:

- live stream intake,
- microphone input,
- multi-source orchestration,
- and non-audio temporal families.

These may come later, but they are not required for the first truthful execution surface.

---

## 8. First execution path

The first bounded execution path is:

selected `.wav` source reference
-> `IngestOp`
-> `ClockAlignOp`
-> `WindowOp`
-> `TransformOp`
-> plane inspection surfaces

This execution path should remain explicit.

The execution surface must not silently skip seams or hide emitted stages.

---

## 9. Minimum execution-surface capabilities

The first execution surface should support only the minimum capabilities needed for lawful inspection.

### 9.1 Execution handoff

- accept a bounded selected-source reference from the Source Intake Surface,
- preserve the selected-source identity across rerun,
- and remain explicit about whether execution has a valid source reference.

### 9.2 Execution control

- run the temporal chain,
- expose run success / failure honestly,
- and allow rerun on the same selected source reference.

### 9.3 Chain inspection routing

- expose the emitted stages:
  - `P0`
  - `P1`
  - `P2`
  - `P3`
  - `D3` where explicitly selected

### 9.4 Plane selection

- choose which pinned plane to inspect,
- and switch between primary and bounded diagnostic view without collapsing them.

---

## 10. Explicit non-goals for the first execution surface

The first execution surface should **not** try to:

- upload or store sources itself,
- become the runtime orchestrator by hidden convenience,
- solve SupportRegime inspection,
- solve SymbolicRegime interaction,
- classify support or identity posture,
- provide semantic interpretation,
- auto-select the "best" frame,
- auto-select the "best" plane,
- collapse primary and diagnostic views,
- hide the chain behind one "smart" composite view,
- or become a broad dashboard of mixed truths.

These are legitimate future pressures, but not lawful execution-surface scope now.

---

## 11. First plane set for the execution surface

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

## 12. Truthful inspection rule

The execution surface must help Reed inspect what is actually emitted.

This means:

- no hidden semantic relabeling,
- no support/accounting substitution for primary visibility,
- no derived view presented as if it were direct primary structure,
- no diagnostic richness presented as if it were the core truth surface,
- and no "helpful" compression that hides the chain itself.

If a richer presentation competes with direct emitted truth, direct emitted truth wins.

---

## 13. Future combinability rule

The execution surface should be combinable with future regime planes.

This means the first design should leave room for:

- future SupportRegime planes,
- future SymbolicRegime planes,
- and future diagnostic plane families.

But that future combinability must not widen the current implementation scope.

Recognized future combination is not present authorization.

---

## 14. Implementation posture

The first implementation should remain thin.

That means:

- no heavy framework abstraction unless later justified,
- no broad viewer engine,
- no mixed-surface dashboard,
- no semantic runtime coupling,
- and no future-regime shortcuts.

The current implementation goal is:

**make the mechanized TemporalRegime chain directly runnable and viewable through a bounded host surface.**

---

## 15. Non-goals

This note does not yet define:

- final UI design,
- final viewer design,
- support-regime execution surface,
- symbolic-regime execution surface,
- semantic overlay behavior,
- or multi-user / distributed execution posture.

Those require later bounded packets.

---

## 16. One-line operational summary

**Temporal Execution Surface v0 defines the first bounded execution-and-inspection host for running the mechanized TemporalRegime chain from a selected `.wav` source reference and viewing truthful primary and bounded diagnostic planes through a separate PlaneRenderer.**


