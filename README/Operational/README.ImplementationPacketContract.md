# Dynamical Memory Engine — Implementation Packet Contract

Live Repo State:
https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

## Status

This document defines the implementation-side packet contract for repo mutation in DME.

It is an operational workflow note.

It governs only:

- implementation-side packet shape
- repo-mutation prerequisites
- allowed implementation actions
- blocked-condition reporting
- implementation return requirements

It does not govern:

- constitutional boundary posture
- repo placement by itself
- role definitions by themselves
- packet law in general
- evaluation judgment by itself

The live repo is the authority for current file and folder reality.

If this document and live repo state conflict about what currently exists, live repo state wins.

If this document conflicts with `README.ConstraintMatrix.md`, constraint wins.

If this document conflicts with `README.FormationMatrix.md` on structure or placement, formation wins.

If this document conflicts with `README.DecisionMatrix.md` on movement law or repo-mutation law, decision wins.

If this document conflicts with `README.EvaluationMatrix.md` on judgment or resolution, evaluation wins.

If this document conflicts with `README/Operational/README.RolePacketContract.md`, the general role packet contract wins unless this document is explicitly narrower.

---

## 1. Function

This document exists only to answer:

- when repo mutation is lawful
- what an implementation packet must contain
- what implementation may do
- what implementation must not do
- what must be returned after implementation work
- how blocked implementation is reported honestly

Nothing else belongs here.

---

## 2. Core implementation law

Implementation is not a primary authority role.

Implementation is a bounded repo-mutation posture operating only from an accepted packet.

Implementation may occur only when:

- the active seam is named
- files in scope are explicit
- governing surfaces are declared
- non-goals are declared
- acceptance target is declared
- repo mutation is actually required

If repo mutation is not required, implementation is not the lawful next move.

Implementation does not approve its own scope.

Implementation does not redefine architecture on its own authority.

Implementation does not silently cross macro verbs.

---

## 3. Required implementation prerequisites

Before implementation begins, the packet must already declare:

- packet id
- parent packet id, if applicable
- packet status = accepted
- active seam
- active macro verb
- active role that authorized mutation
- governing surfaces
- files in scope
- non-goals
- acceptance target
- current repo state reference
- expected emitted object
- worker assignment, if known

If any of these are missing, implementation is not ready.

---

## 4. Lawful implementation contexts

Implementation is lawful only in the following contexts.

### 4.1 Decision-authorized repo mutation

Used when a decision packet has already selected a bounded candidate and repo state must be changed to realize it.

### 4.2 Formation-authorized structural construction

Used when bounded structural externalization, compression, relocation, separation, or construction is required to produce the identity object.

### 4.3 Repair-authorized local correction

Used when a lawful in-scope fix is required to complete the accepted packet honestly without widening scope.

No other implementation context is active unless explicitly admitted later.

---

## 5. Required implementation packet body

Every implementation packet must include:

- implementation objective
- mutation class
- files to read
- files allowed to change
- files allowed to create
- files forbidden to change
- local dependency notes
- expected local references to repair, if any
- blocked-condition rule
- return requirements

### 5.1 Mutation class

Allowed mutation classes are:

- create
- edit
- move
- delete
- split
- merge
- repair_local_reference
- classify_only

If a mutation does not fit one of these classes, the packet must be escalated before work begins.

### 5.2 Files allowed to change

This list is binding.

Implementation may not silently mutate files outside this list.

### 5.3 Files forbidden to change

This list should be explicit whenever adjacent authority surfaces exist.

### 5.4 Blocked-condition rule

The packet must state what conditions require implementation to stop and report rather than improvise.

Examples:

- hidden dependency outside scope
- contradiction with governing surface
- required architecture choice not yet decided
- inability to preserve identity-bearing distinction
- repo reality mismatch versus packet state

---

## 6. Allowed implementation actions

Implementation may:

- read files in scope
- edit files in scope
- create bounded files in scope
- move files in scope when explicitly allowed
- split mixed-role artifacts when explicitly allowed
- repair lawful local references in scope
- report blocked or unresolved conditions

Implementation may perform only the minimum mutation needed to satisfy the accepted packet.

---

## 7. Forbidden implementation actions

Implementation must not:

- widen scope silently
- change active seam silently
- redefine architecture silently
- promote deferred layers
- rewrite governing surfaces without explicit scope
- preserve mixed-role artifacts for convenience when the packet explicitly requires separation
- convert proposal into approval
- convert local repair into broad redesign
- mutate neighboring files merely because they are available
- invent missing authority

If implementation discovers a better idea outside the packet, it must report it rather than silently doing it.

---

## 8. Implementation return contract

Every implementation pass must return a bounded implementation receipt.

The receipt must state:

- packet id
- parent packet id, if applicable
- result status
- implementation worker
- active seam
- active macro verb
- mutation class actually performed
- files read
- files changed
- files created
- files moved
- files deleted
- local references repaired
- what was done
- what is now true
- what is not claimed
- blocked conditions, if any
- unresolved conditions, if any
- emitted object impact
- next legal moves

### 8.1 Result status

Allowed result status values are:

- completed
- blocked
- deferred
- recruited_downward
- partial_with_block
- rejected

### 8.2 Emitted object impact

Implementation must state one of:

- emitted object advanced
- emitted object completed
- emitted object unchanged
- emitted object blocked

Implementation does not declare promotion or final evaluation outcome.

---

## 9. Partial completion rule

Partial completion is lawful only when:

- meaningful bounded progress was made
- the stopping point is explicit
- the blocked condition is explicit
- the remaining gap is narrower than before

If ambiguity increased, the implementation pass failed.

---

## 10. Honest block rule

A blocked implementation pass is valid when it states:

- exactly what blocked progress
- exactly where the block appeared
- whether the block is structural, decision-side, evaluation-side, or admission-side
- which lawful next thread should receive handoff or escalation

Implementation must not hide uncertainty behind broad edits.

Implementation must not solve uncertainty by inventing authority.

---

## 11. Minimal implementation packet skeleton

```text
packet_id:
parent_packet_id:
packet_status: accepted

active_seam:
active_macro_verb:
authorizing_role:

governing_surfaces:
current_repo_state_reference:

implementation_objective:
mutation_class:

files_to_read:
files_allowed_to_change:
files_allowed_to_create:
files_forbidden_to_change:

non_goals:
acceptance_target:

local_dependency_notes:
expected_reference_repairs:
blocked_condition_rule:

worker_assignment:
return_requirements:
```
## 12. Minimal implementation receipt skeleton
packet_id:
parent_packet_id:
result_status:

implementation_worker:
active_seam:
active_macro_verb:
mutation_class_performed:

files_read:
files_changed:
files_created:
files_moved:
files_deleted:
local_references_repaired:

what_was_done:
what_is_now_true:
what_is_not_claimed:

blocked_conditions:
unresolved_conditions:
emitted_object_impact:

next_legal_moves:

## 13. One-line summary

Implementation packets authorize only the minimum bounded repo mutation required to satisfy an accepted packet, while preserving seam, scope, governing surfaces, and honest reporting of blocks, limits, and results.