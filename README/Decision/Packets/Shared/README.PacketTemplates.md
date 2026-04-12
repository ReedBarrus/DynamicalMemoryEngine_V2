# Dynamical Memory Engine - Packet Templates

## Status

This document defines the standard packet templates used for bounded implementation workflow in DME.

It is a workflow instrument.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RepoLayout.md`

Its purpose is narrower:

- define the standard Architect Task Spec Packet
- define the standard Engineer Implementation Return Packet
- reduce handoff ambiguity
- preserve bounded seam discipline
- keep workflow receipts legible and auditable

This note governs **packet template shape** only.

It does **not** govern:

- runtime meaning
- architectural truth
- canon posture
- artifact semantics by itself
- acceptance by itself

---

## 1. Why this note exists

DME develops through bounded packets.

As packet count increases, two workflow risks become more likely:

- handoff ambiguity
- return-packet inconsistency

This note exists to keep the default packet shapes stable without forcing every packet request to restate the full templates in chat.

One-line summary:

**This note defines the standard packet request and packet return shapes for bounded implementation workflow.**

---

## 2. Core rule

Every bounded implementation loop should prefer two packet surfaces:

1. **Architect Task Spec Packet**
2. **Engineer Implementation Return Packet**

The spec packet defines bounded intent and seam discipline.

The return packet defines implementation reality and workflow receipts.

A spec packet is not implementation.  
A return packet is not architectural approval.

---

## 3. Default usage rule

Normal packets may use a **thin handoff form** that references this document instead of pasting the full templates every time.

Use the full expanded template directly in the packet prompt only when:

- the seam is new
- the packet is high-risk
- governance surfaces are being changed
- the workflow rule is new
- earlier similar packets drifted or returned incomplete receipts

---

## 4. Architect Task Spec Packet (standard shape)

### Minimum required fields

- `packet_id`
- `task_title`
- `date`
- `requested_by`
- `active_seam`
- `seam_type`
- `bounded_goal`
- `files_in_scope`
- `explicit_non_goals`
- `governing_surfaces`
- `acceptance_target`
- `escalation_triggers` if relevant

### Preferred optional fields

- source-of-truth statement
- preservation rules
- implementation shape guidance
- allowed/disallowed patch shapes
- deliverable requirements
- completion condition

### Thin handoff form

A normal compact packet may be written as:

- Packet ID
- Task title
- Active seam
- Bounded goal
- Files in scope
- Explicit non-goals
- Acceptance target
- Escalation triggers
- “Use standard Engineer Implementation Return Packet from `README/Operational/README.PacketTemplates.md`”

---

## 5. Engineer Implementation Return Packet (standard shape)

### Full return shape

#### A. Result posture
- `result_status`
- summary of change

#### B. Files and folders
- files created
- files moved
- files modified
- folders created

#### C. Validation
- tests run
- checks run
- not-run surfaces explicitly stated if relevant

#### D. Operational receipts
- accounting updates performed
- packet lineage updates performed
- placement-law updates performed if topology changed
- path/reference repairs performed
- unresolved path/reference drift explicitly stated

#### E. Closure posture
- what is now true
- what is still not claimed
- remaining issues
- escalation-qualified open questions only if needed

#### F. Output evidence
- diff or full file output, as requested

---

## 6. Minimal return mode

For small low-risk packets, Engineer may use the compact return mode unless the packet explicitly requires the full expanded form.

### Minimal return mode fields

- result status
- summary
- files created / moved / modified
- folders created if any
- tests or checks run
- accounting updates
- lineage updates
- placement-law updates if topology changed
- path/reference repairs or unresolved drift
- remaining issues

This compact mode is acceptable only when it preserves honest closure and does not hide material packet effects.

---

## 7. Required hygiene rule

If a packet does any of the following:

- creates a file
- moves a file
- creates a folder/subfolder
- materially changes zone/grouping/status
- splits or narrows packet lineage
- repairs path/reference drift that affects later routing

then Engineer should update the relevant workflow instruments in the same packet when lawful:

- `README/Operational/README.RepoAccountingSurface.md`
- `README/Operational/README.PacketLineage.md`
- `README.RepoLayout.md` if topology changed

If that update is intentionally deferred, the return packet must say so explicitly.

---

#### 7A. Workflow append / accounting obligations

* packet-lineage update requirement:

  * if this packet changes workflow continuity materially, the Engineer must update:

    * `README/Operational/README.PacketLineage.md`
  * update triggers include:

    * new bounded lineage worth tracking
    * route result reached
    * files created
    * files moved
    * folders created
    * docs updated materially
    * packet split / supersede / merge / follow-on routing
  * the lineage entry should preserve at minimum:

    * `packet_id`
    * `task_title`
    * `date`
    * `parent_packet_id` or ancestry
    * `route_result`
    * `files_created`
    * `files_moved`
    * `folders_created`
    * `docs_updated`
    * `supersedes`
    * `split_from`
    * `merged_into`
    * `follow_on_packets`
    * `receipts`
    * `notes`
    * `explicit_non_claims`

* repo-accounting update requirement:

  * if this packet materially changes current repo/workflow placement or status, the Engineer must update:

    * `README/Operational/README.RepoAccountingSurface.md`
  * update triggers include:

    * file creation
    * file move
    * folder/subfolder creation
    * material zone classification change
    * material test grouping change
    * material README grouping change
    * recurring path/reference drift important enough to route cleanup
  * accounting updates should preserve compact current-state posture and must not become a history log

* placement-law update requirement:

  * if topology changes materially, the Engineer must also update:

    * `README.RepoLayout.md`
  * examples:

    * new repo zone
    * new README subfolder class
    * new test subgroup family
    * meaningful regrouping that changes placement law rather than only one local file

* active-trajectory update requirement:

  * if this packet materially advances, parks, activates, or re-routes a live development line, the Engineer should update:

    * `README/Operational/README.ActiveTrajectories.md`
  * this is especially relevant when:

    * a packet begins a new multi-packet line
    * a packet changes `current_packet` or `next_expected_packet`
    * a trajectory moves from projected -> active, active -> parked, or review_only -> active
  * do not update trajectories for trivial local patches that do not affect development-line motion

* required return-packet receipts:

  * the Engineer return packet must explicitly include:

    * accounting updates performed
    * packet-lineage updates performed
    * active-trajectory updates performed, if any
    * placement-law updates performed, if topology changed
    * files created
    * files moved
    * folders created
    * path/reference repairs performed
    * unresolved path/reference drift explicitly stated

* explicit defer rule:

  * if any required workflow/accounting update is intentionally deferred, the return packet must say so explicitly and explain why the deferment is lawful

* non-inflation rule:

  * packet lineage is history/route continuity, not present-state proof
  * repo accounting is present-state placement/status, not packet history
  * active trajectories are strategic motion, not roadmap authority
  * none of these workflow surfaces authorize runtime meaning, canon status, or architectural truth by themselves

Workflow append — required operational synchronization

If this packet changes lineage, route result, files/folders created or moved, docs updated materially, follow-on packet routing, or active development posture, Engineer must review and update the relevant operational surfaces.

Required update targets:

README/Operational/README.PacketLineage.md
update if packet lineage, route result, follow-on packet routing, or materially relevant file/doc effects changed
README/Operational/README.RepoAccountingSurface.md
update if repo/workflow placement, grouping, active packet surface, or seam status changed materially
README.RepoLayout.md
update only if topology changed materially enough to alter placement law or canonical target layout
README/Operational/README.ActiveTrajectories.md
update if this packet materially advances, activates, parks, narrows, or reroutes a live development line
Engineer return packet must explicitly state
files created
files moved
folders created
accounting updates performed
lineage updates performed
trajectory updates performed if any
placement-law updates performed if topology changed
path/reference repairs performed
unresolved drift, if any
If deferred

If any operational/accounting update is not performed, the return packet must say explicitly:

which update was deferred
why it was deferred
whether that deferment is lawful for this packet
which follow-on packet now owns it

## 8. One-line summary

This note defines the standard request and return packet shapes for bounded DME workflow so packet movement stays legible, auditable, and consistent without forcing full template repetition in every handoff.
