# Dynamical Memory Engine — Temporal Development Projection v0

## Status

This document defines the bounded development projection for the TemporalRegime rebuild floor in V2.

It is a supporting implementation-guidance note.

It does **not** override:

* `README.MasterConstitution.md`
* `README.WorkflowContract.md`
* `README.RebuildPosture.md`
* `README.RepoLayout.v2.md`
* `README.ActiveLawKernel.md`
* the active TemporalRegime floor contracts
* `README.ValidatorAndOperatorReturnPosture.v0.md`

Its purpose is narrower:

* map the currently active TemporalRegime rebuild landscape,
* identify what is already pinned,
* identify what should be built next,
* identify what is explicitly deferred,
* and give Codex and future packet work a lawful deferment surface.

This note governs **TemporalRegime development projection** only.

It does **not** govern:

* runtime truth by itself,
* canon posture,
* DerivedRegime activation,
* SymbolicRegime activation,
* or full long-run project roadmap authority.

---

## 1. Why this note exists

The V2 rebuild now has enough pinned law, floor contracts, type surfaces, and layout posture that the next risk is no longer architectural collapse.

The next risk is **scope improvisation**.

Without a bounded development projection, implementation helpers may:

* build too far ahead,
* solve deferred seams opportunistically,
* introduce unpinned abstractions,
* collapse read-side and runtime surfaces for convenience,
* or widen the current rebuild beyond the trusted floor.

This note exists to keep the implementation landscape explicit before packet execution begins.

One-line summary:

**Temporal Development Projection v0 defines what is active, what is next, and what is deferred so the rebuild can advance one lawful move at a time.**

---

## 2. Core projection rule

**The TemporalRegime rebuild should mechanize only what has already been pinned strongly enough to support honest implementation, and should defer everything else explicitly rather than solving it by helper improvisation.**

Corollary rules:

* mapped is not active by default,
* recognized is not authorized by default,
* adjacent is not in scope by default,
* and future utility is not present implementation permission.

If a seam has not been pinned enough to implement without arbitrary local decisions, it should remain deferred.

---

## 3. Current active floor

The currently active rebuild floor is the TemporalRegime through the first four operator floors:

* `P0` — ingest
* `P1` — clock align
* `P2` — window
* `P3` — transform

with adjacent families:

* `V0–V3`
* `L0–L3`
* `A0–A3`
* `D0–D3`
* `T0–T3` declared but deferred
* read-side planes for primary temporal and transform surfaces

This is the trusted initial rebuild substrate.

---

## 4. What is already pinned

The following surfaces are already pinned strongly enough to support implementation:

### 4.1 Repo posture

* rebuild substrate is fresh and non-hybrid by default
* runtime and law surfaces are explicitly separated
* active implementation is limited to `temporal/`

### 4.2 Repo layout

* `operators/`
* `planes/`
* `types/`
* `validators/`
* `packets/`
* `README/`
* `test_signal/`

with regime subfolders:

* `temporal/`
* `structural/`
* `symbolic/`

### 4.3 Floor contracts

Pinned floor contracts currently exist for:

* ingest
* clock align
* window
* transform

### 4.4 Type substrate

Pinned type substrate currently includes:

* temporal primitives
* temporal floor types
* shared emission bundle posture
* explicit planes as read-side types
* explicit deferred tertiary placeholders

### 4.5 Return posture

Pinned return posture currently includes:

* validators normally return explicit `V*` objects
* operators normally return explicit emission bundles
* throws are reserved for cases where lawful emission cannot be produced
* human legibility outranks abstraction cleverness at this stage

---

## 5. Immediate next implementation order

The preferred next build order is:

1. temporal validators
2. `IngestOp`
3. `ClockAlignOp`
4. `WindowOp`
5. `TransformOp`
6. plane implementation only where needed for bounded inspection
7. post-transform admission only after explicit review

This order remains active unless a later bounded packet explicitly revises it.

---

## 6. Validator implementation projection

Validator implementation should proceed one floor at a time.

Preferred early file pattern:

* `validators/temporal/validate_p0_v0.ts`
* `validators/temporal/validate_p1_v0.ts`
* `validators/temporal/validate_p2_v0.ts`
* `validators/temporal/validate_p3_v0.ts`

Validator expectations:

* explicit pass/fail posture
* explicit field-level checks
* no mutation
* no repair
* no diagnostics substitution
* no runtime operator logic

---

## 7. Operator implementation projection

Operator implementation should proceed one floor at a time.

Preferred early file pattern:

* `operators/temporal/ingest_op_v0.ts`
* `operators/temporal/clock_align_op_v0.ts`
* `operators/temporal/window_op_v0.ts`
* `operators/temporal/transform_op_v0.ts`

Operator expectations:

* emit floor-local bundles
* preserve lane distinction
* throw only on hard failure or impossible misuse
* stay below semantic interpretation
* stay below DerivedRegime and SymbolicRegime pressure

---

## 8. Plane implementation projection

Plane implementation is recognized but not yet the active first mechanization target.

What is currently pinned:

* planes are typed early
* planes are read-side only
* planes are not runtime lanes
* `Plane-P3` remains Cartesian
* `Plane-D3` may render bounded derived diagnostic geometry

What is not yet active by default:

* implementation of all typed planes
* diagnostic plane expansion for `D0–D2`
* support/accounting/validation plane expansion for `V/L/A/D`

These remain lawful future work, but not first-packet work.

---

## 9. Explicitly deferred items

The following items are recognized but explicitly deferred:

### 9.1 DerivedRegime implementation

Recognized in layout only.
Not active implementation scope.

### 9.2 SymbolicRegime implementation

Recognized in layout only.
Not active implementation scope.

### 9.3 Semantic overlay implementation

Recognized at law level.
Not part of the TemporalRegime rebuild floor.

### 9.4 Additional read-side plane families

Possible future planes for:

* `D0–D2`
* `V0–V3`
* `L0–L3`
* `A0–A3`

remain deferred until the primary validator/operator floor is stable.

### 9.5 Post-transform structural regime

Recognized as the next likely expansion pressure.
Not active until TemporalRegime operator floor is mechanized and tested.

### 9.6 Review/readiness packet automation

Workflow surfaces exist.
Mechanized execution of them remains deferred unless explicitly packeted.

---

## 10. Non-goals for first execution packets

The first execution packets should **not** attempt to:

* implement multiple operators at once
* widen into structural regime design
* build semantic overlays
* build broad rendering infrastructure
* solve all plane implementation
* solve post-transform merge/compress/admission architecture
* introduce framework-heavy abstractions
* optimize for elegance over legibility

These are all legitimate future pressures, but not lawful first-packet work.

---

## 11. Codex guidance posture

Codex should treat this projection as a deferment surface.

That means:

* if a seam is mapped as deferred, do not opportunistically implement it
* if a design choice has already been pinned, do not reopen it casually
* if a needed dependency is not pinned strongly enough, escalate rather than invent
* if a packet can be solved at a lower floor, do not widen it upward

One-line summary:

**Projection is for lawful deferment, not convenience expansion.**

---

## 12. Current packet projection

The currently expected early packet sequence is:

1. `PKT-TEMPORAL-VALIDATORS-001`
2. `PKT-INGEST-001`
3. `PKT-CLOCK-ALIGN-001`
4. `PKT-WINDOW-001`
5. `PKT-TRANSFORM-001`

These packet names are projection surfaces only.

They are not themselves execution history.
Execution history belongs in packet lineage and related workflow instruments.

---

## 13. Base audit question

Before starting any packet, ask:

**Is this seam already pinned strongly enough to implement without arbitrary local decisions, and if not, has it been explicitly deferred rather than improvised?**

If the answer is no, do not start the packet yet.

---

## 14. One-line operational summary

**Temporal Development Projection v0 defines the currently pinned TemporalRegime rebuild landscape, the immediate validator→operator implementation order, and the explicit deferment boundaries that should prevent Codex from widening scope by convenience.**
