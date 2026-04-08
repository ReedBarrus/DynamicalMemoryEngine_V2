# Dynamical Memory Engine — Repo Layout v2

## Status

This document defines the active repository layout for the V2 rebuild substrate.

It is a supporting implementation-governance note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RebuildPosture.md`
- the active TemporalRegime floor contracts
- any later operator or validator contracts

Its purpose is narrower:

- define the active folder layout for the rebuild substrate,
- distinguish runtime implementation surfaces from read-side surfaces and law surfaces,
- provide a boring and explicit placement grammar for Codex and future packet work,
- and reduce repo-shape drift before implementation packets begin.

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
- or law/runtime cohabitation.

This note exists to stop that drift before packetized implementation begins.

One-line summary:

**Repo Layout v2 defines a simple rebuild placement grammar so runtime, read-side, typing, validation, packets, and law remain boringly distinct.**

---

## 2. Core layout rule

**Each top-level folder should answer one implementation job only.**

Corollary rules:

- runtime operators are not planes,
- planes are not runtime lanes,
- validators are not diagnostics,
- types are not operator logic,
- packets are not law,
- and README law is not runtime implementation.

If a folder begins answering more than one job, the layout has started drifting.

---

## 3. Active top-level folders

The active V2 rebuild layout currently recognizes:

- `operators/`
- `planes/`
- `types/`
- `validators/`
- `README/`
- `packets/`
- `test_signal/`

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

### 4.2 `planes/`

Purpose:

read-side projection surfaces only

This folder contains typed, explicit read-side projection logic and plane-facing surfaces.

Planes are:

- human-facing
- read-side
- removable
- non-primary
- not runtime lanes

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

- primary artifact families
- companion families
- deferred placeholders
- primitive enums / unions
- plane types

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

- are required fields present?
- are forbidden fields absent?
- does this object satisfy its floor contract?

Validators are not diagnostics.

Validators are not operator transforms.

Validators are not planes.

One-line summary:

**`validators/` is for contract enforcement, not runtime mutation or diagnostics.**

---

### 4.5 `README/`

Purpose:

law, architecture, contracts, and governance notes

This folder contains the active law bank and rebuild documentation.

It is the place for:

- constitutions
- workflow notes
- floor contracts
- regime notes
- admission criteria
- repo layout notes

It must not become a runtime code surface.

One-line summary:

**`README/` is the law bank, not the runtime.**

---

### 4.6 `packets/`

Purpose:

bounded implementation movement objects

This folder contains packet specs, packet return records, and related bounded implementation artifacts where needed.

Packets are workflow instruments.

They are not runtime code.
They are not law by themselves.

One-line summary:

**`packets/` is for packetized development movement.**

---

### 4.7 `test_signal/`

Purpose:

bounded signal fixtures and source-side testing material

This folder contains test input material relevant to the active rebuild floor.

Examples:

- `.wav` inputs
- generated signal fixtures
- bounded real-source test materials

It must not become a dumping ground for unrelated outputs.

One-line summary:

**`test_signal/` is for bounded input fixtures and source-side tests.**

---

## 5. Regime subfolder rule

The following subfolder grammar is currently recognized inside the implementation folders:

- `temporal/`
- `structural/`
- `symbolic/`

These regime subfolders may appear inside:

- `operators/`
- `planes/`
- `types/`
- `validators/`

Current active implementation scope is:

- `temporal/`

The existence of `structural/` and `symbolic/` does **not** activate those regimes.
They are recognized placement surfaces only.

One-line summary:

**Regime folders may exist before regime activation, but inactive regimes must not silently shape current implementation.**

---

## 6. Active rebuild posture

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

---

## 7. Placement rules

### Rule 1 — Operators stay in `operators/`

No runtime operator implementation should begin life in `types/`, `validators/`, or `planes/`.

### Rule 2 — Planes stay in `planes/`

No read-side projection should be treated as a runtime lane or operator output family by folder placement.

### Rule 3 — Validators stay in `validators/`

Validation logic must remain distinct from diagnostics and distinct from operators.

### Rule 4 — Types stay in `types/`

Shared shapes, literals, enums, and type families belong in `types/`, not scattered across operators.

### Rule 5 — README law stays in `README/`

Governance and architecture notes must remain explicit and inspectable, not embedded as runtime comments only.

### Rule 6 — Packets stay in `packets/`

Implementation movement objects must remain separate from runtime source and separate from law.

---

## 8. Initial file placement guidance

The current trusted TemporalRegime floor type file belongs in:

- `types/temporal/temporal_floor_types_v0.ts`

If primitives are split, the preferred companion placement is:

- `types/temporal/temporal_primitives_v0.ts`

If validators are introduced next, preferred placement is:

- `validators/temporal/`

If operators are introduced after validators, preferred placement is:

- `operators/temporal/`

If read-side planes are later implemented as code surfaces, preferred placement is:

- `planes/temporal/`

---

## 9. Anti-drift notes

The following drifts must remain fenced:

- plane/runtime collapse
- validator/diagnostic collapse
- law/runtime collapse
- type/operator collapse
- inactive regime bleed-through
- packet/runtime blending

If a new file placement makes one of those easier, the placement should be rejected or revised.

---

## 10. TS floor decisions locked for initial implementation

The following decisions are currently locked for the first TemporalRegime type substrate:

1. **literal class strings stay explicit**
2. **validation detail may expand in validators even if type-level checks remain compact**
3. **`D3.derived_geometry` is hard-gated to `magnitude` and `phase` only**
4. **planes are typed early and remain read-side only**
5. **`T0–T3` placeholders remain declared but deferred**
6. **primitive splitting is allowed and may be preferred where it improves legibility and reduces repeated touch surfaces**

These decisions should not be re-opened casually during early implementation.

---

## 11. Non-goals

This note does not yet define:

- final long-run repo layout,
- product packaging layout,
- build tooling layout,
- deployment layout,
- or DerivedRegime / SymbolicRegime implementation specifics.

Those require later bounded packets.

---

## 12. One-line operational summary

**Repo Layout v2 defines a simple rebuild placement grammar in which operators, planes, types, validators, packets, and law remain explicitly separate, with active implementation currently limited to the TemporalRegime subtree.**