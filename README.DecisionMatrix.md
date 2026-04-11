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

## 3. Workflow field

All bounded work moves through four macro verbs:

1. **Admit**
2. **Form**
3. **Decide**
4. **Evaluate**

Each macro verb emits one bound object.

The workflow invariant is:

**No workflow step may destroy, replace, or silently inflate the active constraint-bearing identity inherited from admitted reality.**

If a macro verb cannot emit its object lawfully, it must either:

- continue inside the same macro verb,
- recruit downward,
- defer,
- or abort.

No step may be skipped silently.

---

## 4. Macro verbs

### 4.1 Admit

#### Internal phases

- Ingest
- Align
- Parse

#### Optional explicit handle

- Orient

#### Emitted object

**Bound work object**

This object contains:

- admitted reality source
- active seam
- scoped working unit
- governing constraint posture

#### Forbidden

Admit must not:

- define structural identity
- choose action
- interpret meaning
- settle truth
- silently widen scope
- import deferred-layer semantics

#### Downward recruitment

Admit is the floor.

When it fails, it does not recruit lower.
It must:

- tighten admission
- narrow scope
- or abort and restart from reality

---

### 4.2 Form

#### Internal phases

- Structure
- Compress
- Aggregate

#### Optional explicit handle

- Identify

#### Emitted object

**Identity object**

This object contains:

- structural invariance
- compressed load-bearing form
- relational placement among neighboring identities

#### Forbidden

Form must not:

- semantically weight the object
- choose action
- settle truth
- collapse recurrence into legitimacy
- collapse provisional identity-support into unconditional identity

#### Downward recruitment

Form recruits to Admit when identity failure is really admission failure.

Examples:

- malformed working unit
- bad aperture
- bad scope
- bad admission policy
- unstable structure caused by upstream overload

---

### 4.3 Decide

#### Internal phases

- Frame / Query
- Reflect / Explore
- Propose
- Implement

#### Emitted object

**Decision object**

This object contains:

- bounded selected candidate
- realized state change

#### Forbidden

Decide must not:

- invent identity from scratch
- mutate without a bounded candidate
- silently widen scope
- treat proposal as approval
- let query act as truth
- preserve ambiguity after implementation

#### Downward recruitment

Decide recruits first to Form when:

- no stable identity object exists
- the decision surface cannot be constrained
- the candidate field is too unstable or dense
- the proposal contradicts preserved invariance

It recruits to Admit only when the deeper failure is malformed reality admission.

---

### 4.4 Evaluate

#### Internal phases

- Audit
- Review
- Reconcile
- Resolve

#### Conditional branches

- Reconstruct
- Promote

#### Emitted object

**Evaluation object**

This object contains:

- measured deviation / fidelity posture
- reintegrated active state
- routed workflow outcome

#### Forbidden

Evaluate must not:

- redefine structural identity retroactively
- let review contaminate primary structure
- collapse coherence into truth
- collapse recurrence into canon
- silently upgrade outcome into authority
- treat promotion as routine runtime closure

#### Downward recruitment

Evaluate recruits first to Decide when:

- the proposal path was wrong
- the implementation mismatched the bounded candidate
- the decision object cannot be honestly sustained

Evaluate recruits to Form when evaluation reveals unstable or false identity assumptions.

Evaluate recruits to Admit only when the original source, scope, or policy was malformed.

---

## 5. Active seam rule

Only one seam may be active per packet.

A packet must define:

- active seam
- files in scope
- non-goals
- acceptance target

If the seam cannot be named clearly, the packet is not ready.

If the scoped change cannot be bounded clearly, the packet is too large.

---

## 6. Role order

Roles are:

1. Reed
2. Audit
3. Compression
4. Implementation

### Reed

Final authority for priority, acceptance, rejection, and promotion of scope.

### Audit

Reads current repo reality and reports what exists.

### Compression

Determines what survives active scope and how the current macro verb should be reduced or routed.

### Implementation

Changes repo state only from an accepted compressed packet.

No role may silently perform another role’s job.

---

## 7. Thread rule

Each active thread must have one role only.

Allowed thread classes:

- audit thread
- compression thread
- implementation thread

A thread may not mix:

- audit + compression
- compression + approval
- implementation + constitutional redesign
- architecture redesign + direct implementation

If a task needs more than one role, it must move by handoff.

---

## 8. Compression rule

Compression answers only:

- what must remain active
- what can be folded
- what must be deferred
- what should leave active scope
- whether the current macro verb emitted its required object

Every artifact in scope must be classified as:

- keep active
- fold into canonical
- defer
- archive from active use
- unresolved

If an artifact does not uniquely answer the active bounded need, it should not remain active.

---

## 9. Implementation rule

Implementation may:

- edit files in scope
- create bounded files in scope
- repair lawful local references in scope
- report blocked or unresolved conditions

Implementation may not:

- widen scope silently
- redefine architecture silently
- promote deferred layers
- preserve mixed-role artifacts for convenience
- treat proposal as approval

Implementation follows the accepted compressed packet, not free expansion.

---

## 10. Escalation and completion rule

Escalation is allowed only when:

- boundary conflict appears
- hidden dependency blocks honest completion
- packet scope is insufficient
- repo reality conflicts with declared procedure
- lawful completion is not possible inside the active macro verb

Escalation must stay bounded.

A packet is complete only when:

- the active macro verb emitted its required object, or explicitly routed downward
- the scoped change was made or honestly blocked
- what is now true is stated
- what is still not claimed is stated
- the next legal moves are fewer, not more

If ambiguity expanded, compression failed.

---

## 11. Checkpoint rule

After each accepted packet:

- repo state is the new current reality
- active scope is recomputed
- deferred and archived decisions remain explicit
- future work must start from repo state, not conversational memory

The repo carries project memory for current reality.

Threads do not.

---

## 12. One-line review question

Did this move conserve constraint-bearing identity by emitting the required object at the current macro verb, or by explicitly recruiting downward when lawful forward movement failed?

---

## 13. One-line summary

The Workflow Contract governs how bounded work moves through four macro verbs—Admit, Form, Decide, and Evaluate—using repo reality as upstream ground, emitted objects as checkpoints, and downward recruitment as the main anti-drift control.