# Dynamical Memory Engine - Repo Layout v3

Live Reference: https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

## Status

This document defines the active repository layout for the V2 rebuild substrate.

It is a supporting implementation-governance note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README/Constitution/Workflow/README.RebuildPosture.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- define the active folder layout for the rebuild substrate,
- distinguish runtime implementation surfaces from read-side surfaces and law surfaces,
- define the current internal hierarchy of the `README/` law bank,
- provide an explicit placement grammar for Codex and future packet work,
- and reduce repo-shape drift as implementation and documentation both grow.

This note governs **repo layout posture** only.

It does **not** govern:

- operator semantics by itself,
- artifact meaning by itself,
- canon posture,
- or future regime activation.

---

## 1. Why this note exists

The V2 rebuild intentionally removed the prior runtime substrate in order to prevent hybridization with legacy mixed seams.

That makes repo shape newly important.

Without a simple active layout, implementation helpers may reintroduce drift through:

- mixed placement,
- helper sprawl,
- plane/runtime collapse,
- validator/operator collapse,
- law/runtime cohabitation,
- stale path references,
- or inactive regime bleed-through.

This note exists to stop that drift before it hardens into daily workflow.

One-line summary:

**Repo Layout v3 defines a boring placement grammar in which runtime code, packet work, and the README law bank remain clearly separated, while the README bank itself is organized by document role before system area.**

---

## 2. Core layout rule

**Each top-level repo zone should answer one implementation job only, and each major `README/` subtree should answer one documentation job only.**

Corollary rules:

- runtime operators are not planes,
- planes are not runtime lanes,
- validators are not diagnostics,
- packets are not law,
- and README law is not runtime implementation.

If a folder begins answering more than one job, the layout has started drifting.

---

## 3. Active top-level layout

The active V2 rebuild layout currently recognizes:

- `operators/`
- `planes/`
- `types/`
- `validators/`
- `packets/`
- `README/`
- `test_signal/`

The repo root also intentionally retains a small set of root-level authority anchors:

- `README.md`
- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RepoLayout.md`
- `README.ActiveLawKernel.md`

These root files are navigation and authority anchors.

They do not replace the internal `README/` hierarchy.

Additional folders may be introduced later only when a bounded packet justifies them.

---

## 4. Folder roles

### 4.1 `operators/`

Purpose:

runtime operator implementation only

This folder contains active runtime operator code.

It is where lawful runtime transforms, admissions, remaps, and bounded structural emissions are implemented.

It must not become:

- a validator library,
- a plane/rendering surface,
- a README law bank,
- or a packet archive.

One-line summary:

**`operators/` is for runtime operator logic.**

---

### 4.11 `execution/`

Purpose:

execution-facing runtime support only

This folder contains bounded execution-facing implementation surfaces such as:

- source intake surfaces
- orchestrators
- execution hosts
- execution-local routing helpers

It exists to keep execution-facing seams separate from:

- runtime transform operators
- validators
- read-side planes / renderers
- packets
- and README law surfaces

This folder must not become:

- a runtime transform folder
- a plane/rendering folder
- a semantic overlay surface
- a validator library
- or a mixed product-shell implementation zone

Expected current internal posture:

- `execution/intake/`
- `execution/orchestration/`
- execution-surface implementation files may live directly under `execution/` when they are host surfaces rather than subfamilies

One-line summary:

**`execution/` is for source intake, orchestration, execution hosting, and execution-local routing — not runtime transforms, not validators, and not read-side rendering.**

### 4.2 `planes/`

Purpose:

read-side projection surfaces only

This folder contains typed, explicit read-side projection logic and plane-facing surfaces.

Planes are:

- human-facing,
- read-side,
- removable,
- non-primary,
- and not runtime lanes.

This folder must not become:

- a runtime operator folder,
- a semantic shortcut lane,
- or a place where support/accounting silently replaces direct structural exposure.

One-line summary:

**`planes/` is for read-side projection, not runtime substance.**

---

### 4.3 `types/`

Purpose:

artifact family, companion family, primitive, and plane type definitions only

This folder contains TypeScript type definitions for active rebuild surfaces.

It is where:

- primary artifact families,
- companion families,
- deferred placeholders,
- primitive unions/enums/literals,
- and plane types

are defined.

It must not become:

- operator logic,
- runtime validation logic,
- or read-side rendering code.

One-line summary:

**`types/` is for explicit shape definitions only.**

---

### 4.4 `validators/`

Purpose:

contract enforcement only

This folder contains runtime validators and contract-checking logic.

Validators answer questions like:

- are required fields present,
- are forbidden fields absent,
- and does this object satisfy its floor contract.

Validators are not diagnostics.

Validators are not operator transforms.

Validators are not planes.

One-line summary:

**`validators/` is for contract enforcement, not runtime mutation or diagnostics.**

---

### 4.5 `packets/`

Purpose:

bounded implementation movement objects

This folder contains packet specs, packet return records, and related bounded implementation artifacts where needed.

Packets are workflow instruments.

They are not runtime code.

They are not law by themselves.

One-line summary:

**`packets/` is for packetized development movement.**

---

### 4.6 `README/`

Purpose:

the active law bank, architecture bank, workflow bank, and evidence bank

This folder contains the active non-runtime documentation hierarchy.

Unlike the older flatter law-bank posture, `README/` is now organized by documentation role first.

It must not become:

- a runtime code surface,
- a dumping ground of unrelated notes,
- or a mixed archive where active and superseded documents are indistinguishable.

One-line summary:

**`README/` is the organized documentation bank, not the runtime.**

---

### 4.7 `test_signal/`

Purpose:

bounded signal fixtures and source-side testing material

This folder contains test input material relevant to the active rebuild floor.

Examples:

- `.wav` inputs,
- generated signal fixtures,
- and bounded real-source test materials.

It must not become a dumping ground for unrelated outputs.

One-line summary:

**`test_signal/` is for bounded input fixtures and source-side tests.**

---

## 5. README hierarchy rule

Inside `README/`, the first classification question is:

**What kind of document is this?**

Only after that should the question become:

**What system area, regime, or program line does it belong to?**

This means the active first-level `README/` branches are:

- `README/Constitution/`
- `README/Core/`
- `README/Operational/`
- `README/Program/`
- `README/Evidence/`
- `README/Archive/`

This is an intentional change in posture.

The old drift pattern grouped many notes by topic alone.

The current posture groups them by documentation role first so authority, runtime-adjacent law, workflow instrumentation, and future-facing planning are easier to distinguish.

---

## 6. README branch roles

### 6.1 `README/Constitution/`

Purpose:

durable governing notes and cross-cutting law

This branch contains high-authority notes governing identity, mechanization, workflow, and surface posture.

Current active subdivisions:

- `Identity/`
- `Mechanization/`
- `Surfaces/`
- `Workflow/`

One-line summary:

**`README/Constitution/` is for durable governing law and cross-cutting authority notes.**

---

### 6.2 `README/Core/`

Purpose:

active system meaning below constitutional authority

This branch contains active architecture, regime-local contracts, foundations, and taxonomy notes that describe the current rebuild substrate.

Current active subdivisions:

- `Foundations/`
- `Regimes/`
- `Taxonomy/`

One-line summary:

**`README/Core/` is for active system architecture, regime-local notes, and taxonomic meaning below constitution.**

---

### 6.3 `README/Operational/`

Purpose:

mutable workflow instrumentation and current-state tracking

This branch contains compact workflow/accounting surfaces that help current development stay bounded and inspectable.

Current active subdivisions:

- `Accounting/`
- `Lineage/`
- `Packets/`
- `Seams/`
- `Trajectories/`

One-line summary:

**`README/Operational/` is for current-state workflow instruments, not durable architecture law.**

---

### 6.4 `README/Program/`

Purpose:

future-facing program and roadmap structure

This branch contains Door-level and cross-field planning surfaces that are broader than one packet and broader than one active regime-local seam.

Current active subdivisions:

- `DoorOne/`
- `DoorTwo/`
- `DoorThree/`
- `CrossField/`

One-line summary:

**`README/Program/` is for future-facing development lines and roadmap material, not current runtime authority.**

---

### 6.5 `README/Evidence/`

Purpose:

diagnostics and experiments

This branch contains evidence-oriented notes about diagnostics, experiments, and test-facing evidence surfaces.

Current active subdivisions:

- `Diagnostics/`
- `Experiments/`

One-line summary:

**`README/Evidence/` is for diagnostics and experiment-facing evidence notes.**

---

### 6.6 `README/Archive/`

Purpose:

non-active or local-use notes retained without active-law status

This branch exists so personal notes, superseded notes, or non-authority references do not continue to read as active governing surfaces.

One-line summary:

**`README/Archive/` is for retained-but-non-active documentation.**

---

## 7. Core subtree grammar

The current `README/Core/` branch uses the following placement grammar:

### 7.1 `README/Core/Foundations/`

For cross-regime architecture and mapping notes that are active system foundations but not themselves constitutional law.

Examples:

- pipeline architecture,
- exposure-plane chain,
- emission flow mapping.

### 7.2 `README/Core/Regimes/`

For regime-local notes and regime-local build surfaces.

At present, the active regime branch is:

- `Temporal/`

Recognized but not yet active as comparable documentation banks:

- `Support/`
- `Symbolic/`

### 7.3 `README/Core/Taxonomy/`

For active taxonomies and glossary-like classification surfaces.

These notes are not workflow instruments and not runtime code.

They are classification surfaces for DME meaning.

---

## 8. Temporal regime grammar inside README

The current active temporal documentation subtree is:

- `README/Core/Regimes/Temporal/Contracts/`
- `README/Core/Regimes/Temporal/Execution/`
- `README/Core/Regimes/Temporal/Failure/`
- `README/Core/Regimes/Temporal/Inspection/`
- `README/Core/Regimes/Temporal/Operators/`
- `README/Core/Regimes/Temporal/Sources/`
- `README/Core/Regimes/Temporal/Validators/`

This subtree is intended to keep temporal notes separated by seam role rather than collecting all temporal notes into one flat bank.

One-line summary:

**Inside the active TemporalRegime README bank, placement follows seam role first: contracts, sources, execution, inspection, failure, operators, and validators.**

---

## 9. Regime subfolder rule for runtime source

The following subfolder grammar is currently recognized inside:

- `operators/`
- `planes/`
- `types/`
- `validators/`
- `packets/`

Recognized regimes:

- `temporal/`
- `support/`
- `symbolic/`

Current active implementation scope is:

- `temporal/`

The existence of `support/` and `symbolic/` does **not** activate those regimes.

They are recognized placement surfaces only.

One-line summary:

**Regime folders may exist before regime activation, but inactive regimes must not silently shape current implementation.**

---

## 10. Active rebuild posture

At present, active rebuild implementation is occurring only in the TemporalRegime floor through:

- `P0`
- `P1`
- `P2`
- `P3`

and their adjacent families:

- `V`
- `L`
- `A`
- `D`
- deferred `T`
- read-side planes

Accordingly, the first active implementation surfaces should appear primarily under:

- `types/temporal/`
- `validators/temporal/`
- `operators/temporal/`
- `planes/temporal/`
- `packets/temporal/`

and the first active temporal documentation surfaces should appear primarily under:

- `README/Core/Regimes/Temporal/Contracts/`
- `README/Core/Regimes/Temporal/Sources/`
- `README/Core/Regimes/Temporal/Execution/`
- `README/Core/Regimes/Temporal/Inspection/`
- `README/Core/Regimes/Temporal/Failure/`
- `README/Core/Regimes/Temporal/Operators/`
- `README/Core/Regimes/Temporal/Validators/`

---

## 11. Placement rules

### Rule 1 - Operators stay in `operators/`

No runtime operator implementation should begin life in `types/`, `validators/`, or `planes/`.

### Rule 2 - Planes stay in `planes/`

No read-side projection should be treated as a runtime lane or operator output family by folder placement.

### Rule 3 - Validators stay in `validators/`

Validation logic must remain distinct from diagnostics and distinct from operators.

### Rule 4 - Types stay in `types/`

Shared shapes, literals, primitives, and type families belong in `types/`, not scattered across operators.

### Rule 5 - Packets stay in `packets/`

Implementation movement objects must remain separate from runtime source and separate from law.

### Rule 6 - README law stays in `README/`

Governance and architecture notes must remain explicit and inspectable, not embedded as runtime comments only.

### Rule 7 - README placement should follow document role first

A workflow instrument should not be placed under `Core/` merely because it discusses a core seam.

A roadmap note should not be placed under `Constitution/` merely because it sounds important.

A diagnostic or experiment note should not be placed under `Operational/` merely because it is currently useful.

### Rule 8 - Archive is not active authority

If a note is archived or retained only for local/personal/non-active use, it should not remain in an active authority branch.

---

## 12. Initial file placement guidance

Current trusted TemporalRegime runtime placement:

- `types/temporal/temporal_floor_types_v0.ts`
- `types/temporal/temporal_primitives_v0.ts` where primitives are split
- `validators/temporal/` for floor validators
- `operators/temporal/` for runtime operator code
- `planes/temporal/` for read-side plane code
- `packets/temporal/` for packet artifacts

Current trusted temporal documentation placement:

- floor contracts -> `README/Core/Regimes/Temporal/Contracts/`
- source intake/source family notes -> `README/Core/Regimes/Temporal/Sources/`
- execution host notes -> `README/Core/Regimes/Temporal/Execution/`
- plane/rendering notes -> `README/Core/Regimes/Temporal/Inspection/`
- temporal failure posture -> `README/Core/Regimes/Temporal/Failure/`
- temporal operator-adjacent notes -> `README/Core/Regimes/Temporal/Operators/`
- temporal validator return posture -> `README/Core/Regimes/Temporal/Validators/`

---

## 13. Anti-drift notes

The following drifts must remain fenced:

- plane/runtime collapse
- validator/diagnostic collapse
- law/runtime collapse
- type/operator collapse
- inactive regime bleed-through
- packet/runtime blending
- authority/workflow collapse inside `README/`
- roadmap/constitution collapse inside `README/`
- active/archive collapse inside `README/`

If a new file placement makes one of those easier, the placement should be rejected or revised.

---

## 14. Packet naming pattern

The initial packet naming pattern remains:

`packets/<regime>/PKT-<SEAM>-<NNN>.md`

Examples:

- `packets/temporal/PKT-TEMPORAL-TYPES-001.md`
- `packets/temporal/PKT-TEMPORAL-VALIDATORS-001.md`
- `packets/temporal/PKT-INGEST-001.md`

If spec/return splitting is introduced later, preferred naming is:

- `PKT-TEMPORAL-TYPES-001.spec.md`
- `PKT-TEMPORAL-TYPES-001.return.md`

Flat file packet layout is preferred initially.

---

## 15. Non-goals

This note does not yet define:

- final long-run product packaging layout,
- build tooling layout,
- deployment layout,
- the final long-run documentation taxonomy beyond current active needs,
- or SupportRegime / SymbolicRegime implementation specifics.

Those require later bounded packets.

---

## 16. One-line operational summary

**Repo Layout v3 defines the current rebuild placement grammar in which runtime code, packets, and the README bank remain explicitly separate, and the README bank itself is organized by document role first and system area second so authority and workflow drift stay visible.**
