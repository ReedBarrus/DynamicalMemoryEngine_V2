# Dynamical Memory Engine — Seam Accounting

Live Repo State:
https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

## Status

This document defines seam accounting procedure for DME.

It is an operational workflow note.

It governs only:

- seam record shape
- seam classification fields
- seam posture values
- seam accounting procedure
- seam update triggers

It does not govern:

- constitutional boundary posture
- repo placement by itself
- role definitions by themselves
- packet law by itself
- implementation details by themselves

The live repo is the authority for current file and folder reality.

If this document and live repo state conflict about what currently exists, live repo state wins.

If this document conflicts with `README.ConstraintMatrix.md`, constraint wins.

If this document conflicts with `README.FormationMatrix.md` on structure or placement, formation wins.

If this document conflicts with `README.DecisionMatrix.md` on movement law, handoff law, or packet law, decision wins.

If this document conflicts with `README.EvaluationMatrix.md` on judgment or resolution, evaluation wins.

---

## 1. Function

This document exists only to answer:

- what a seam record must contain
- how seams are classified
- how seam posture is expressed
- when seam records must be created or updated
- how seam accounting stays anchored to live repo reality

Nothing else belongs here.

---

## 2. Core seam law

Every active workflow pass must name exactly one active seam. :contentReference[oaicite:0]{index=0}

If the seam cannot be named clearly, the pass is not ready. :contentReference[oaicite:1]{index=1}

A seam record does not create authority by itself.

A seam record describes bounded current reality, role ownership, and workflow posture for one seam.

Seam accounting must not silently widen scope.

Seam accounting must not silently merge distinct seams for convenience.

---

## 3. Seam record schema

Every seam record must declare:

- seam id
- seam name
- seam type
- seam status
- active macro verb
- primary role owner
- worker assignment, if known
- governing surfaces
- files in scope
- neighboring seams
- emitted-object target
- current posture
- non-goals
- current repo state reference
- notes
- last accounting update

---

## 4. Seam type

Allowed seam types are:

- authority seam
- workflow seam
- documentation seam
- structure seam
- repo-mutation seam
- evaluation seam
- mixed seam
- unresolved seam

### 4.1 Authority seam

A seam that primarily governs law, constraint, placement, movement, or judgment.

### 4.2 Workflow seam

A seam that primarily routes work through one macro verb.

### 4.3 Documentation seam

A seam whose bounded purpose is note creation, note revision, note migration, or note compression.

### 4.4 Structure seam

A seam whose bounded purpose is structural formation, classification, separation, or placement.

### 4.5 Repo-mutation seam

A seam whose bounded purpose is accepted file or folder mutation under packet law.

### 4.6 Evaluation seam

A seam whose bounded purpose is audit, review, reconciliation, or resolution.

### 4.7 Mixed seam

A seam that currently carries more than one active role or type and has not yet been cleanly separated.

Mixed status must be explicit.

### 4.8 Unresolved seam

A seam whose identity, boundary, or role ownership is not yet stable enough for active use.

---

## 5. Seam status

Allowed seam status values are:

- active
- deferred
- blocked
- archived
- mixed
- unresolved

### 5.1 Active

The seam is currently in lawful use.

### 5.2 Deferred

The seam is retained but not active in current workflow movement.

### 5.3 Blocked

The seam is active enough to matter, but lawful completion is currently blocked.

### 5.4 Archived

The seam is retained for reference but is not part of current active movement.

### 5.5 Mixed

The seam currently carries more than one active role, type, or posture and requires later separation.

### 5.6 Unresolved

The seam cannot yet be treated as stable current reality.

---

## 6. Active macro verb

Every seam record must declare one active macro verb:

- Admit
- Form
- Decide
- Evaluate
- none yet

If the seam cuts across more than one macro verb, that cross-verb condition must be handled by handoff or escalation rather than by silently broadening the seam. :contentReference[oaicite:2]{index=2}

---

## 7. Primary role owner

Every seam record must declare one primary role owner:

- Architect Reed
- Admission-Advisor
- Formation-Constructor / Compressor
- Decision-Reflector
- Evaluation-Auditor / Reviewer
- unassigned

Role ownership must follow the primary role model already defined in the Decision Matrix. :contentReference[oaicite:3]{index=3}

Worker capability does not override seam role ownership.

---

## 8. Governing surfaces

Every seam record must list the governing surfaces that currently constrain it.

Examples include:

- `README.ConstraintMatrix.md`
- `README.FormationMatrix.md`
- `README.DecisionMatrix.md`
- `README.EvaluationMatrix.md`
- role packet contract
- implementation packet contract
- seam-local notes or contracts

If governing surfaces are unclear, the seam is not ready for active work.

---

## 9. Files in scope

Every seam record must state the bounded files or folders in scope.

If files in scope cannot be named, the seam is not ready. :contentReference[oaicite:4]{index=4}

The seam record may also name:

- files explicitly adjacent
- files explicitly excluded
- files likely requiring later handoff

---

## 10. Neighboring seams

A seam record may name neighboring seams when useful.

Neighboring seams are not automatically in scope.

Neighboring seams exist to preserve boundary awareness without silently widening the current seam.

---

## 11. Emitted-object target

Every seam record must state which workflow object the seam is currently supporting:

- bound work object
- identity object
- decision object
- evaluation object
- none yet

This keeps seam accounting tied to the workflow floor and emitted-object law. :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}

---

## 12. Current posture

Every seam record must declare one current posture:

- stable
- unstable
- transitional
- overloaded
- mixed-role
- review-pending

### 12.1 Stable

The seam is bounded clearly enough for lawful active work.

### 12.2 Unstable

The seam exists, but its current structure or ownership is still shifting.

### 12.3 Transitional

The seam is actively being migrated, reorganized, or handed off.

### 12.4 Overloaded

The seam carries too much scope, too many files, or too many responsibilities for honest bounded work.

### 12.5 Mixed-role

The seam currently violates clean role separation and should be split later.

### 12.6 Review-pending

The seam is awaiting evaluation, reconciliation, or explicit disposition.

---

## 13. Seam accounting procedure

Seam accounting proceeds in this order:

1. read live repo reality
2. name one active seam
3. name files in scope
4. assign active macro verb
5. assign primary role owner
6. declare governing surfaces
7. declare emitted-object target
8. declare current posture
9. declare non-goals
10. record current repo state reference
11. begin work only after the seam record is bounded

If any required field is missing, the seam is not ready.

---

## 14. Update triggers

A seam record must be created or updated when:

- a new active seam is opened
- files in scope change
- the primary role owner changes
- the active macro verb changes
- the governing surfaces change
- the seam is blocked
- the seam is handed off
- the seam is archived
- the seam is split
- the seam is merged lawfully

---

## 15. Split and merge rule

A seam must be split when:

- it carries more than one primary role
- it carries more than one macro verb
- it contains unrelated files for convenience
- emitted-object targeting becomes ambiguous
- honest accounting cannot remain compact

A seam may be merged only when:

- governing surfaces remain identical
- role ownership remains identical
- macro-verb ownership remains identical
- the merged seam reduces ambiguity instead of hiding it

---

## 16. Minimal seam record skeleton

```text
seam_id:
seam_name:
seam_type:
seam_status:

active_macro_verb:
primary_role_owner:
worker_assignment:

governing_surfaces:
files_in_scope:
neighboring_seams:

emitted_object_target:
current_posture:
non_goals:

current_repo_state_reference:
notes:
last_accounting_update:
```
## 17. One-line summary

DME seam accounting records one bounded active seam at a time, ties it to a macro verb, role owner, governing surfaces, emitted-object target, and scoped repo reality, and prevents silent scope inflation through explicit posture and update rules.