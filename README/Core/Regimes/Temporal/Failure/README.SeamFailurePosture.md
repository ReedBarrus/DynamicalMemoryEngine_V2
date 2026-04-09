# Dynamical Memory Engine — Seam Failure Posture v0

## Status

This document defines the bounded posture for seam-local failure handling in the V2 rebuild substrate.

It is a supporting execution-guidance note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README/Constitution/Workflow/README.RebuildPosture.md`
- `README.RepoLayout.md`
- `README/Core/Regimes/Temporal/README.TemporalDevelopmentProjection.md`
- `README/Core/Regimes/Temporal/Validators/README.ValidatorAndReturnPosture.md`
- `README/Core/Regimes/Temporal/Sources/README.SourceIntakeSurface.md`
- `README/Core/Regimes/Temporal/Execution/README.TemporalExecutionSurface.v0.md`
- `README/Core/Regimes/Temporal/Inspection/Planes/README.PlanePosture.v0.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- define how failures should remain owned by their seams,
- define how failure should be surfaced without losing seam identity,
- prevent execution-facing surfaces from flattening multiple failure classes into one blur,
- and preserve honest inspection as runtime/read-side complexity increases.

This note governs **seam failure posture** only.

It does **not** govern:

- runtime operator semantics by itself,
- validator semantics by itself,
- plane rendering by itself,
- review posture,
- support-regime classification,
- or final UI error design.

---

## 1. Why this note exists

The V2 rebuild now has live or near-live seams across:

- source intake
- validators
- operators
- planes
- renderer
- execution-facing surfaces

As complexity increases, failure handling becomes a drift surface.

Without an explicit failure note, systems tend to:

- flatten seam-local failures into one generic message,
- relabel downstream failures as upstream problems,
- cosmetically absorb failure into fake success,
- or hide ownership of the failing seam.

This note exists to stop that drift.

One-line summary:

**Failure must remain visible, seam-local, and classed rather than flattened into one generic execution blur.**

---

## 2. Core failure rule

**When a failure occurs, the failing seam should remain identifiable, and the surfaced failure posture should preserve the original seam identity as far as lawfully possible.**

Corollary rules:

- ingest failure is not clock-align failure,
- clock-align failure is not window failure,
- window failure is not transform failure,
- renderer failure is not execution failure by default,
- and upstream surfaces must not absorb downstream failure ownership for convenience.

If a failure is surfaced without preserving seam identity, the failure surface has drifted.

---

## 3. Failure definition

In the current rebuild, a seam-local failure is a bounded failure posture that belongs to one seam.

Examples:

- source intake failure
- validator failure
- operator hard failure
- renderer unsupported-plane failure
- execution routing failure

A seam-local failure is not automatically:

- review posture,
- support significance,
- readiness posture,
- or semantic meaning.

One-line summary:

**A failure is first a seam-local event, not a semantic conclusion.**

---

## 4. Failure ownership rule

Each failure should remain owned by the seam that generated it.

Examples:

### 4.1 Source intake owns intake failures

Examples:

- unsupported file extension
- missing source file
- malformed selection request
- unavailable saved source reference

### 4.2 Validators own validation failures

Examples:

- missing required field
- forbidden field present
- length mismatch
- non-numeric array
- invalid literal field

### 4.3 Operators own operator failures

Examples:

- malformed `.wav`
- invalid channel selection
- unsupported input structure
- deterministic remap impossible under current bounded policy

### 4.4 Renderer owns renderer failures

Examples:

- unsupported plane class
- illegal render request for current pinned plane set

### 4.5 Execution surface owns only execution-surface failures

Examples:

- run request malformed
- no selected source reference
- requested stage unavailable in current run context

The execution surface must not steal ownership of lower-seam failures just because it is the host surface.

---

## 5. Failure surfacing rule

A host surface may surface a downstream failure, but it should do so without erasing the original seam.

That means a lawful surfaced failure should preserve, where possible:

- failing seam identity
- bounded failure class
- failure message
- whether the failure is intake / validation / operator / renderer / routing

One-line summary:

**Host surfaces may surface failure; they must not erase where the failure came from.**

---

## 6. Explicit anti-flattening rule

The current rebuild should avoid flattening all failures into one generic class such as:

- “execution failed”
- “viewer error”
- “runtime error”

unless the original seam identity remains visible alongside that host-level summary.

This is especially important once:

- source intake
- execution surface
- renderer
- and multiple operators

are all present together.

---

## 7. Normal insufficiency vs hard failure

The rebuild must distinguish between:

### 7.1 Classed insufficiency

Examples:

- validator returns `fail`
- emitted object exists but carries explicit bounded insufficiency
- seam returns honest failure posture without crashing execution infrastructure

### 7.2 Hard failure

Examples:

- malformed `.wav`
- impossible channel request
- impossible runtime assumption
- unsupported plane class
- absent required input

The current rebuild already prefers:

- explicit classed posture when a seam can still speak honestly
- thrown error only when the seam cannot lawfully emit an honest classed result

This distinction remains active.

---

## 8. Relationship to validators

Validation failure should remain validation failure.

A failing `V*` object is not the same as an operator hard crash.

Validators should continue to:

- return explicit validation objects
- expose checks and failure codes
- remain non-mutating

Validation failure should not be cosmetically converted into unrelated execution-surface messaging.

---

## 9. Relationship to operators

Operator hard failures should remain operator hard failures.

An operator may throw when:

- lawful emission cannot be produced
- input is impossible
- file/source structure is malformed
- bounded implementation assumptions are violated

When surfaced elsewhere, this operator origin should remain visible.

---

## 10. Relationship to planes and renderer

Planes themselves are read-side projection objects.

Renderer failure therefore belongs to the renderer seam, not to the underlying runtime object by default.

Examples:

- unsupported plane class
- unsupported render request
- render-shape mismatch

These should not be silently translated into claims that the runtime object itself is invalid unless that is actually true.

One-line summary:

**Renderer failure is about the rendering seam unless proven otherwise.**

---

## 11. Relationship to execution surface

The execution surface is likely to become the first place where multiple seam failures are surfaced together.

Therefore its job is not to collapse them.

Its job is to:

- expose them
- route them
- preserve their seam identity
- and keep inspection honest

The execution surface should not become a generic failure blender.

---

## 12. Future failure surfaces

A future dedicated failure projection surface may become useful.

But at the current stage, failure posture should remain a surface rule rather than a new plane family.

This prevents premature proliferation of failure-specific artifacts before their projected object class is pinned strongly enough.

One-line summary:

**Failure posture is a current surface rule, not yet a separate plane family.**

---

## 13. Human audit posture

The failure surface should help Reed quickly answer:

- what seam failed?
- what kind of failure was it?
- is this a classed insufficiency or a hard failure?
- did the host surface preserve seam identity honestly?

This favors:

- explicit seam names
- explicit failure class
- explicit messages
- visible ownership

over:

- generic UX smoothing
- opaque abstraction
- or “friendly” flattening that destroys auditability

---

## 14. First implementation posture

The first execution-facing implementation should:

- preserve seam-local failure identity
- expose hard failures honestly
- expose validation insufficiency honestly
- avoid speculative recovery
- avoid fake success wrapping
- avoid hidden retries or silent fallbacks

The current goal is:

**truthful failure visibility, not polished failure absorption.**

---

## 15. Non-goals

This note does not yet define:

- final UI error design
- final retry policy
- support-regime failure posture
- symbolic-regime failure posture
- failure-plane classes
- or full observability/logging architecture

Those require later bounded packets.

---

## 16. One-line operational summary

**Seam Failure Posture v0 defines the rule that failures should remain seam-local, classed, and visibly owned rather than being flattened into generic execution-surface blur as the V2 rebuild grows more complex.**
