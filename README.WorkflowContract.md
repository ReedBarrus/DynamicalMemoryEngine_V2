# Dynamical Memory Engine — Workflow Contract

## Status

This document is the movement authority for DME.

It governs only:

* roles
* thread roles
* bounded workflow loop
* packet procedure
* escalation
* completion and checkpoint posture

It does not govern:

* constitutional boundaries
* repo placement
* operator-local semantics
* implementation meaning by itself

The live repo is the authority for current code and current file state.

https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

The root authority docs govern meaning and procedure.
If repo state and memory conflict, repo state wins.
If workflow and constitution conflict on boundary posture, constitution wins.

---

### Repo-current-reality rule and Role Order

The live repo is upstream of all workflow roles for current file and code reality.

Workflow begins only after current repo reality is read.

Role order for workflow execution is therefore:

1. repo current reality
2. Reed
3. Control
4. Audit
5. Compression
6. Implementation

`repo current reality` is not a collaborator role.
It is the grounding input to the workflow loop.

If declared workflow state and live repo state conflict about what currently exists, live repo state wins.

If a packet has not checked current repo reality for the active seam, the packet is not ready.

### Reed

Final authority for priority, acceptance, rejection, and promotion of scope.

### Control

Chooses the active seam, bounded question, and acceptance target.

### Audit

Reports current reality only.

### Compression

Determines what survives active scope.

### Implementation

Changes repo state only from an accepted compressed packet.

No role may silently perform another role’s job.

---

## 2. Thread rule

Each active thread must have one role only.

Allowed thread classes:

* control thread
* audit thread
* compression thread
* implementation thread

A thread may not mix:

* architecture + implementation
* audit + compression
* compression + approval
* implementation + constitutional redesign

If a task needs more than one role, it must move by handoff.

---

## 3. Workflow loop

All bounded work moves in this order:

1. anchor
2. scope one seam
3. ask one bounded question
4. audit current reality
5. compress to smallest lawful artifact set
6. implement one bounded change
7. validate
8. checkpoint

No step may be skipped silently.

---

## 4. Active seam rule

Only one seam may be active per packet.

A packet must define:

* active seam
* bounded question
* files in scope
* non-goals
* acceptance target

If the seam cannot be named clearly, the packet is not ready.

If the bounded question cannot be stated in one sentence, the packet is too large.

---

## 5. Audit rule

Audit answers only:

* what exists
* what files are relevant
* what fields / seams / artifacts are present
* what current repo reality shows

Audit does not redesign.
Audit does not compress.
Audit does not approve.

---

## 6. Compression rule

Compression answers only:

* what must remain active
* what can be folded
* what must be deferred
* what should leave active scope

Every artifact in scope must be classified as:

* keep active
* fold into canonical
* defer
* archive from active use
* unresolved

If an artifact does not uniquely answer the bounded question, it should not remain active.

---

## 7. Implementation rule

Implementation may:

* edit files in scope
* create bounded files in scope
* repair lawful local references in scope
* report blocked or unresolved conditions

Implementation may not:

* widen scope silently
* redefine architecture silently
* promote deferred layers
* preserve mixed-role artifacts for convenience
* treat proposal as approval

Implementation follows the accepted compressed packet, not free expansion.

---

## 8. Escalation rule

Escalation is allowed only when:

* boundary conflict appears
* hidden dependency blocks honest completion
* packet scope is insufficient
* repo reality conflicts with declared procedure
* lawful completion is not possible inside the active seam

Escalation must stay bounded.

Escalation is not a redesign lane.

---

## 9. Completion rule

A packet is complete only when:

* the bounded question was answered
* the scoped change was made or honestly blocked
* validation was performed or explicitly accounted for
* what is now true is stated
* what is still not claimed is stated
* the next legal moves are fewer, not more

If ambiguity expanded, compression failed.

---

## 10. Checkpoint rule

After each accepted packet:

* repo state is the new current reality
* active scope is recomputed
* deferred and archived decisions remain explicit
* future work must start from repo state, not conversational memory

The repo carries project memory for current reality.

Threads do not.

---

## 11. One-line review question

Did this move reduce decision space by advancing one seam through one bounded question, under the correct role, against current repo reality, with explicit survival, deferral, and non-claim posture?

---

## 12. One-line summary

The Workflow Contract governs who does what, how one bounded seam moves through audit, compression, and implementation, and how current repo reality replaces conversational memory as the basis for further work.
