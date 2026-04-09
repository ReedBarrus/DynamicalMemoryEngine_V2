# Dynamical Memory Engine — Plane Renderer v0

## Status

This document defines the bounded posture for the PlaneRenderer in the V2 rebuild substrate.

It is a supporting read-side implementation note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README/Constitution/Workflow/README.RebuildPosture.md`
- `README.RepoLayout.md`
- `README/Core/Regimes/Temporal/README.TemporalDevelopmentProjection.md`
- `README/Core/Regimes/Temporal/Inspection/Planes/README.PlanePosture.v0.md`
- `README/Core/Regimes/Temporal/Execution/README.TemporalExecutionSurface.v0.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- define what the PlaneRenderer is and is not,
- define what kinds of plane objects it should accept,
- define the rendering truthfulness posture,
- preserve the distinction between direct primary planes and derived diagnostic planes,
- and prevent rendering convenience from silently becoming semantic or runtime authority.

This note governs **PlaneRenderer posture** only.

It does **not** govern:

- runtime operator behavior,
- execution-surface control flow by itself,
- semantic overlay behavior,
- support-regime rendering,
- symbolic-regime rendering,
- or final UI architecture.

---

## 1. Why this note exists

The TemporalRegime chain is now mechanized and the first execution surface is being staged.

That means rendered inspection is becoming a real seam.

Without an explicit renderer note, the PlaneRenderer may drift through:

- rendering/runtime collapse,
- direct-vs-derived ambiguity,
- semantic convenience inflation,
- app polish outrunning projected object truth,
- or silent insertion of interpretation into rendering logic.

This note exists to stop that drift.

One-line summary:

**The PlaneRenderer renders declared plane objects truthfully; it does not create runtime meaning, semantic closure, or hidden operator logic.**

---

## 2. Core renderer rule

**The PlaneRenderer accepts a declared plane object and renders only what that plane class lawfully projects.**

Corollary rules:

- the renderer is not a runtime operator,
- the renderer is not a validator,
- the renderer is not a semantic overlay engine,
- the renderer is not a support substitute,
- and the renderer must not imply stronger meaning than the incoming plane object justifies.

If the renderer adds meaning not present in the declared plane class, it has drifted.

---

## 3. Renderer definition

The PlaneRenderer is a read-side rendering surface.

Its job is to:

- accept a declared plane object,
- inspect its plane class,
- render it faithfully,
- keep direct primary and derived diagnostic posture distinct,
- and remain removable from the runtime chain.

It is not responsible for:

- generating runtime emissions,
- repairing runtime objects,
- inventing diagnostics,
- choosing the “best” view by semantic convenience,
- or silently performing review.

---

## 4. Accepted plane classes

The first renderer posture should support only the currently pinned plane classes:

- `Plane-P0`
- `Plane-P1`
- `Plane-P2`
- `Plane-P3`
- `Plane-D3`

Recognized but deferred:

- `Plane-D0`
- `Plane-D1`
- `Plane-D2`
- `Plane-V*`
- `Plane-L*`
- `Plane-A*`
- support-regime planes
- symbolic-regime planes

The renderer should not opportunistically expand beyond the currently pinned plane set.

---

## 5. Direct-vs-derived rendering rule

The renderer must preserve the distinction between:

### 5.1 Direct primary rendering

Direct primary rendering means rendering the projected primary object itself.

Examples:

- `Plane-P0` temporal signal
- `Plane-P1` aligned temporal signal
- `Plane-P2` bounded windowed signal
- `Plane-P3` Cartesian spectral bins

### 5.2 Derived diagnostic rendering

Derived diagnostic rendering means rendering a lawful secondary projection.

Examples:

- `Plane-D3` magnitude
- `Plane-D3` phase
- `Plane-D3` threshold/boundary indicators such as NaN/Inf flags

Derived diagnostic rendering must remain:

- explicitly diagnostic
- explicitly secondary
- clearly distinguishable from direct primary rendering

One-line summary:

**The renderer must never blur direct primary rendering into derived diagnostic rendering.**

---

## 6. Truthfulness rule

The renderer must render the declared plane class honestly.

This means:

- no hidden semantic relabeling
- no “helpful” reinterpretation
- no silent conversion of primary views into richer derived views
- no support/accounting substitution for primary inspection
- no treating diagnostic planes as primary truth surfaces

If the renderer offers richer visualization, it must still preserve projection-class honesty.

---

## 7. Minimal rendering posture

The first renderer should favor:

- directness
- legibility
- bounded scope
- explicit class handling
- low abstraction
- inspectable code paths

over:

- dashboard complexity
- auto-layout cleverness
- semantic embellishment
- unbounded chart utility layers
- or visual drama that outruns the projected object

One-line summary:

**The first renderer should help Reed see the object, not impress Reed away from it.**

---

## 8. Relationship to execution surface

The PlaneRenderer is not the execution surface.

The execution surface should:

- route source selection
- route run initiation
- route plane selection
- host rendered outputs

The PlaneRenderer should:

- render the selected plane object
- remain class-aware
- remain projection-truthful

This split must remain explicit.

---

## 9. Renderer/removability rule

The renderer must be removable.

If the renderer is removed:

- the runtime chain still exists
- emitted objects still exist
- validators still exist
- diagnostics still exist
- execution can still occur

This means the renderer is a read-side inspection aid, not a runtime dependency.

---

## 10. Non-inference rule

The renderer must not infer:

- semantic labels
- anomaly meaning
- review posture
- readiness posture
- support significance
- symbolic meaning

unless a future bounded note explicitly authorizes such behavior.

At the current stage, rendering is projection, not interpretation.

---

## 11. First implementation posture

The first renderer implementation should stay thin.

That means:

- explicit plane-class branching is acceptable
- minimal dedicated rendering logic per pinned plane class is acceptable
- broad generic visualization frameworks are not required
- heavy abstraction is not required
- future plane support should be deferred rather than pre-generalized

---

## 12. Non-goals

This note does not yet define:

- final renderer architecture
- support-regime renderer behavior
- symbolic-regime renderer behavior
- semantic overlay rendering
- multi-panel orchestration
- advanced interaction design

Those require later bounded packets.

---

## 13. One-line operational summary

**PlaneRenderer v0 defines a thin, truthful read-side rendering surface that accepts declared plane objects and preserves the distinction between direct primary rendering and bounded derived diagnostic rendering without adding runtime or semantic authority.**

