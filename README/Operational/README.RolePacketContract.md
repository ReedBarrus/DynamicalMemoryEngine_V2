# Dynamical Memory Engine — Role Packet Contract

Live Repo State:
https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

## Status

This document defines the bounded packet contract for workflow roles in DME.

It is an operational workflow note.

It governs only:

- role packet shape
- required packet fields
- packet status values
- handoff payload requirements
- role return requirements

It does not govern:

- constitutional boundary posture
- repo placement by itself
- emitted-object definitions by themselves
- evaluation judgment by itself
- implementation details by themselves

The live repo is the authority for current file and folder reality.

If this document and live repo state conflict about what currently exists, live repo state wins.

If this document conflicts with `README.ConstraintMatrix.md`, constraint wins.

If this document conflicts with `README.FormationMatrix.md` on structure or placement, formation wins.

If this document conflicts with `README.DecisionMatrix.md` on movement law, decision wins.

If this document conflicts with `README.EvaluationMatrix.md` on judgment or resolution, evaluation wins.

---

## 1. Function

This document exists only to answer:

- what every role packet must contain
- what a role must receive before beginning work
- what a role must return before a pass is complete
- how packet status is expressed
- how handoff preserves bounded continuity

Nothing else belongs here.

---

## 2. Core packet law

Every active role receives a bounded packet.

Every active role returns a bounded packet.

No role may begin lawful work without a packet.

No role may claim lawful completion without a return packet.

A packet does not grant unlimited authority.

A packet grants only the bounded authority declared inside its active macro verb, active seam, and governing surfaces.

---

## 3. Required packet header

Every packet must declare:

- packet id
- packet type
- packet status
- active role
- active macro verb
- active seam
- governing surfaces
- acceptance target

### 3.1 Packet type

Allowed packet types are:

- admission packet
- formation packet
- decision packet
- evaluation packet
- handoff packet
- escalation packet
- return packet

### 3.2 Packet status

Allowed packet status values are:

- proposed
- accepted
- in_progress
- blocked
- deferred
- recruited_downward
- completed
- rejected

No other status has workflow force unless explicitly admitted later.

---

## 4. Required bounded context

Every packet must declare:

- current repo state reference
- files in scope
- non-goals
- current constraint posture
- current emitted-object status
- expected emitted object
- worker assignment, if known

### 4.1 Current repo state reference

The packet must identify the repo reality it is grounded in.

Allowed examples include:

- branch name
- commit hash
- pushed repo state statement
- named live file state

### 4.2 Files in scope

Files in scope must be explicit.

If the files in scope cannot be named, the packet is not ready.

### 4.3 Non-goals

Every packet must state what is not being changed or claimed.

### 4.4 Current emitted-object status

The packet must state which object currently exists, if any:

- bound work object
- identity object
- decision object
- evaluation object
- none yet

### 4.5 Expected emitted object

The packet must state which object the active role is expected to emit.

---

## 5. Role-specific required payload

### 5.1 Admission packet

Must include:

- admitted reality source
- source or seam entry condition
- scoped working unit
- governing constraint posture
- admission risk or uncertainty notes

Expected emitted object:

- bound work object

### 5.2 Formation packet

Must include:

- active structural material
- identity-bearing surfaces in scope
- known mixed-role surfaces, if any
- classification or compression target
- formation-side non-goals

Expected emitted object:

- identity object

### 5.3 Decision packet

Must include:

- current identity object reference
- bounded question or proposal
- candidate path options, if more than one exists
- selection pressure or rationale
- mutation boundary

Expected emitted object:

- decision object

### 5.4 Evaluation packet

Must include:

- evaluated change set
- expected vs observed posture
- review target
- resolution target
- possible downward recruitment note, if already suspected

Expected emitted object:

- evaluation object

---

## 6. Return packet requirements

Every return packet must state:

- packet id
- parent packet id, if applicable
- active role
- active macro verb
- result status
- what was done
- what is now true
- what is not claimed
- emitted object produced, if any
- blocked conditions, if any
- downward recruitment, if any
- next legal moves

### 6.1 Result status

Allowed result status values are:

- completed
- blocked
- deferred
- recruited_downward
- rejected

### 6.2 What is now true

This must be stated positively and narrowly.

### 6.3 What is not claimed

This must be stated explicitly whenever authority, scope, or interpretation remains bounded.

### 6.4 Next legal moves

Next legal moves must reduce ambiguity, not expand it.

---

## 7. Handoff packet requirements

A handoff packet is required whenever work moves between primary roles.

Every handoff packet must preserve:

- active seam
- active macro verb status
- files in scope
- governing surfaces
- current packet status
- current emitted-object status
- non-goals
- acceptance target

Handoff may narrow scope.

Handoff may not silently widen scope.

If the seam changes, the prior pass closes and a new packet chain begins.

---

## 8. Escalation packet requirements

An escalation packet is required when lawful completion is not possible inside the current role.

Every escalation packet must state:

- why the current role cannot complete lawfully
- what boundary, dependency, or contradiction caused the block
- what has already been confirmed
- what is still unresolved
- what decision or disposition is needed

Escalation does not erase prior packet state.

Escalation remains bounded to the active seam unless Architect Reed explicitly widens scope.

---

## 9. Packet anti-drift rule

A packet must not:

- silently widen scope
- silently change macro verb
- silently change role authority
- silently redefine emitted-object status
- silently convert proposal into approval
- silently convert evaluation into promotion

If any of these occur, the packet chain is out of compliance.

---

## 10. Minimal packet skeleton

```text
packet_id:
packet_type:
packet_status:

active_role:
active_macro_verb:
active_seam:

governing_surfaces:
files_in_scope:
non_goals:

current_repo_state_reference:
current_constraint_posture:
current_emitted_object_status:
expected_emitted_object:

task_statement:
acceptance_target:

worker_assignment:
dependencies:
risks_or_uncertainties:

return_requirements:
```
## 11. Minimal return skeleton
packet_id:
parent_packet_id:
result_status:

active_role:
active_macro_verb:
active_seam:

what_was_done:
what_is_now_true:
what_is_not_claimed:

files_read:
files_changed:
files_created:
files_moved:

emitted_object_produced:
blocked_conditions:
downward_recruitment:

next_legal_moves:

## 12. One-line summary

DME role packets are bounded workflow containers that preserve seam, scope, macro-verb authority, and emitted-object continuity across role execution, handoff, escalation, and return.
