# Dynamical Memory Engine — Plane Posture v0

## Status

This document defines the bounded posture for planes in the V2 rebuild substrate.

It is a supporting read-side architecture note.

It does **not** override:

* `README.MasterConstitution.md`
* `README.WorkflowContract.md`
* `README/Constitution/Workflow/README.RebuildPosture.md`
* `README.RepoLayout.md`
* `README/Core/Regimes/Temporal/README.TemporalDevelopmentProjection.md`
* `README/Core/Regimes/Temporal/Validators/README.ValidatorAndReturnPosture.md`
* the active TemporalRegime floor contracts

Its purpose is narrower:

* define what a plane is and is not,
* define the role of planes in the current rebuild,
* preserve the distinction between runtime lanes and read-side surfaces,
* define the first truthful posture for direct human inspection of the TemporalRegime chain,
* and prevent read-side convenience from silently reshaping runtime meaning.

This note governs **plane posture** only.

It does **not** govern:

* runtime operator semantics by itself,
* artifact meaning by itself,
* SupportRegime admission,
* SymbolicRegime implementation,
* semantic overlay policy by itself,
* or final app product design.

---

## 1. Why this note exists

The TemporalRegime primary chain is now mechanized through:

* `P0`
* `P1`
* `P2`
* `P3`

The next pressure is no longer only implementation correctness.

The next pressure is **inspection honesty**.

Without an explicit plane posture, read-side work tends to drift through:

* plane/runtime collapse,
* direct structure being replaced by support/accounting surfaces,
* diagnostic richness being mistaken for primary truth,
* semantic convenience outrunning structural legibility,
* and app-surface polish outrunning what the runtime actually emits.

This note exists to stop that drift before read-side stabilization begins.

One-line summary:

**Planes are explicit read-side projection surfaces for inspecting bounded emitted objects; they are not runtime lanes, not support substitution, and not semantic closure engines.**

---

## 2. Core plane rule

**A plane is a read-side projection surface for direct inspection of an already-emitted object under a declared projection class.**

Corollary rules:

* a plane is not a runtime lane,
* a plane is not operator logic,
* a plane is not a validator,
* a plane is not a diagnostic family by itself,
* a plane is not semantic overlay by default,
* and a plane must not silently become a stronger authority surface than the emitted object it projects.

If a plane begins to replace, reinterpret, or inflate the underlying emitted object, the plane has drifted.

---

## 3. Plane definition

In the V2 rebuild, a plane is:

* read-side,
* explicit,
* removable,
* bounded,
* inspectable,
* subordinate to emitted runtime objects,
* and tied to one declared projection class.

A plane is not:

* retained runtime substance,
* a substitute for primary artifacts,
* a substitute for validators,
* a substitute for diagnostics,
* or a substitute for review posture.

One-line summary:

**Planes show emitted objects. They do not become emitted objects.**

---

## 4. Plane hierarchy posture

At the current rebuild stage, planes should obey the following hierarchy:

### 4.1 Primary planes

Primary planes project primary artifacts directly.

Examples:

* `Plane-P0`
* `Plane-P1`
* `Plane-P2`
* `Plane-P3`

Primary planes are the highest-priority read-side inspection surfaces during early TemporalRegime stabilization.

### 4.2 Diagnostic planes

Diagnostic planes project bounded diagnostic objects or bounded derived diagnostic geometry.

Examples:

* `Plane-D3`
* possible future `Plane-D0`
* possible future `Plane-D1`
* possible future `Plane-D2`

Diagnostic planes must remain explicitly subordinate to primary planes.

### 4.3 Future support/accounting/validation planes

Possible future planes for:

* `V*`
* `L*`
* `A*`

are recognized but deferred.

They must not be introduced casually and must remain read-side only if later implemented.

---

## 5. Primary plane priority rule

During initial TemporalRegime read-side stabilization, primary inspection must favor direct primary planes first.

This means:

* inspect `P0` directly before support surfaces,
* inspect `P1` directly before alignment accounting,
* inspect `P2` directly before any evaluative temptation,
* inspect `P3` directly before diagnostic derived geometry.

If a richer or more helpful plane competes with direct primary visibility, direct primary visibility wins.

One-line summary:

**Primary planes come first. Richer secondary planes remain secondary.**

---

## 6. Plane/removability rule

A lawful plane must be removable.

If a plane is removed:

* the emitted runtime object must still exist,
* runtime correctness must remain,
* validator posture must remain,
* diagnostics must remain where they belong,
* and structural review must still be possible through the emitted object surface.

This means planes are aids, not prerequisites for runtime truth.

---

## 7. Plane/runtime separation rule

Planes must remain separate from operators and runtime lanes.

This means:

* no operator should depend on a plane for correctness,
* no plane should perform operator work,
* no plane should silently mutate emitted runtime objects,
* no plane should become the default carrier of runtime meaning.

The repo placement rule follows directly from this:

* runtime operators live in `operators/`
* planes live in `planes/`

One-line summary:

**Planes inspect runtime. They do not become runtime.**

---

## 8. Plane truthfulness rule

A plane must project only what its declared projection class lawfully supports.

Examples:

* `Plane-P0` may show direct temporal signal structure
* `Plane-P1` may show aligned temporal signal structure
* `Plane-P2` may show one bounded windowed frame
* `Plane-P3` may show Cartesian spectral geometry
* `Plane-D3` may show derived diagnostic geometry such as magnitude and phase

A plane must not imply stronger meaning than the projected object justifies.

Examples of unlawful implication:

* diagnostic convenience mistaken for primary truth
* semantic labels mistaken for structural proof
* derived views mistaken for direct emitted geometry
* app polish mistaken for runtime maturity

---

## 9. Direct-vs-derived plane rule

The difference between direct and derived views must remain explicit.

### 9.1 Direct primary view

A direct primary plane projects emitted primary structure itself.

Examples:

* temporal signal arrays
* aligned temporal slabs
* bounded windowed vectors
* Cartesian spectral bins

### 9.2 Derived diagnostic view

A derived diagnostic plane projects bounded geometry derived from emitted objects or from diagnostic companions.

Examples:

* magnitude
* phase
* threshold or boundary artifacts such as NaN/Inf flags

Derived diagnostic views are lawful only if they remain:

* explicitly diagnostic,
* explicitly derived,
* removable,
* and subordinate to the direct primary plane.

One-line summary:

**Direct primary planes show emitted structure. Derived diagnostic planes show lawful secondary projections.**

---

## 10. Plane classes currently pinned

The current rebuild has the following plane classes pinned strongly enough for read-side stabilization:

* `Plane-P0`
* `Plane-P1`
* `Plane-P2`
* `Plane-P3`
* `Plane-D3`

These are sufficient to begin the first truthful inspection surface for the TemporalRegime chain.

### 10.1 Current active priority

The current practical priority order is:

1. `Plane-P0`
2. `Plane-P1`
3. `Plane-P2`
4. `Plane-P3`
5. `Plane-D3`

This order may later be revised, but it is the correct first stabilization posture.

---

## 11. Explicitly deferred plane families

The following remain recognized but deferred:

* `Plane-D0`
* `Plane-D1`
* `Plane-D2`
* all `Plane-V*`
* all `Plane-L*`
* all `Plane-A*`
* semantic overlay planes
* support-regime inspection planes
* symbolic-regime inspection planes

These are legitimate future surfaces, but not the first read-side stabilization target.

---

## 12. Human audit posture

The current rebuild requires human-auditable read-side surfaces.

That means early planes should favor:

* directness,
* legibility,
* bounded scope,
* explicit projection class,
* and fidelity to the emitted object

over:

* clever compression,
* dense UI layering,
* semantic richness,
* dashboard inflation,
* or visual drama that outruns structural honesty.

One-line summary:

**During rebuild, planes should help Reed see the chain directly, not hide it behind sophistication.**

---

## 13. Relationship to execution surface / app surface

Planes are ingredients of the future execution or app surface.

They are not identical to the app surface itself.

This means:

* one app surface may host multiple planes,
* a plane may exist without a full app shell,
* and app-surface coherence must not be mistaken for runtime mechanization.

The first execution surface should therefore be:

* minimal,
* truthful,
* plane-hosting,
* and subordinate to the emitted runtime chain.

---

## 14. Plane implementation rule

Early plane implementation should remain thin.

That means:

* no heavy framework abstractions unless a bounded packet justifies them,
* no hidden runtime coupling,
* no semantic auto-labeling,
* no support substitution for direct primary inspection,
* and no app-shell inflation before the primary chain is inspectable.

The current goal is not “build the full viewer.”

The current goal is:

**make the mechanized TemporalRegime chain truthfully viewable.**

---

## 15. Non-goals

This note does not yet define:

* final app design,
* final viewer design,
* support-regime visualization posture,
* symbolic-regime visualization posture,
* semantic overlay planes,
* or complete diagnostic plane family expansion.

Those require later bounded packets.

---

## 16. One-line operational summary

**Plane Posture v0 defines planes as removable, truthful, read-side projection surfaces that help inspect emitted runtime objects directly, with primary planes taking priority over richer secondary diagnostic views during the first TemporalRegime stabilization pass.**

