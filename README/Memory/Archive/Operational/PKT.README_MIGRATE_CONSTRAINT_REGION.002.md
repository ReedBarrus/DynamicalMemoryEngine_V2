# DME Packet — Constraint Region Migration

Live Repo State:
https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

## Status

This is a bounded region-migration packet.

It initializes the first README migration leg under the approved sequence.

It governs only:

- Constraint-region README migration
- bounded file relocation and local reclassification
- direct-scope local reference repair only when required for truthful placement
- blocked-condition reporting
- return requirements

It does not authorize:

- Formation-region migration
- Evaluation-region migration
- Memory-region migration
- Decision cleanup beyond directly affected references
- bank-wide stale-authority repair
- document compression or merging
- silent scope expansion

If this packet conflicts with root matrix authority, the root matrices win.

If this packet conflicts with live repo state, live repo state wins.

---

## 1. Packet header

packet_id: PKT.README_MIGRATE_CONSTRAINT_REGION.002
packet_type: formation packet
packet_status: accepted

active_role: Formation-Constructor / Compressor
active_macro_verb: Form
active_seam: README-constraint-region-migration

## 2. Governing surfaces

- `README.ConstraintMatrix.md`
- `README.FormationMatrix.md`
- `README.DecisionMatrix.md`
- `README.EvaluationMatrix.md`
- `README.MemoryMatrix.md`
- `README.WorkflowFieldPrimitives.md`
- `README/Decision/README.ThreadRolePolicy.md`
- `README/Decision/README.RolePacketContract.md`
- `README/Decision/README.ImplementationPacketContract.md`
- `README/Operational/README.SeamAccounting.md`
- `README/Operational/PKT.README_AUDIT_INVENTORY_MAP.001.md`
- `README/Operational/PKT.README_BLOCKER_DISPOSITION.001.md`
- `README/Operational/PKT.README_BLOCKER_RECONCILE.002.md`

## 3. Current repo state reference

Ground all mutation in current live repo reality on `main`.

The audit inventory and migration map are advisory input.

Current repo state is controlling reality.

## 4. Role posture

Codex is acting only as:

**Formation-Constructor / Compressor**

This pass authorizes bounded repo mutation only for the approved Constraint-region family.

Codex must not silently perform:

- broad Evaluation-Auditor work beyond confirming current in-scope reality
- Decision-Reflector authority beyond bounded local disposition needed to complete this packet honestly
- migration of non-Constraint families
- bank-wide stale-reference repair

## 5. Task statement

Migrate the approved low-ambiguity Constraint-support README family into `README/Constraint/`.

This pass is to:

1. identify the live in-scope Constraint-support notes approved by the audit
2. move them into `README/Constraint/`
3. preserve truthful file identity and naming unless rename is required for lawful placement
4. repair only directly local references necessary so moved notes remain truthful and navigable
5. return a bounded migration receipt

This pass is **not** to:

- compress overlapping docs
- rewrite note substance broadly
- clean stale authority references outside direct moved-file scope
- migrate mixed-role or unresolved docs unless this packet explicitly names them

## 6. In-scope migration family

Primary in-scope family from the prior audit includes:

- `README/Constitution/Identity/README.DeterministicInvarianceThreshold.md`
- `README/Constitution/Identity/README.NoiseUncertaintyDistortionAccount.md`
- `README/Constitution/Identity/README.StructuralIdentityLaw.md`
- `README/Constitution/Mechanization/README.MechanizationClosureGate.md`
- `README/Constitution/Surfaces/README.OperatorExposurePlaneLaw.md`
- `README/Constitution/Surfaces/README.OperatorSupportSurfaceLaw.md`
- `README/Constitution/Surfaces/README.TemporalInstrumentationSurfaceLaw.md`
- `README/Constitution/Workflow/README.DevelopmentPressure.md`
- `README/Constitution/Workflow/README.RebuildPosture.md`
- `README/Constitution/Workflow/README.StructuralExposureLaw.md`

If current live repo state differs, reconcile only within the same bounded family and report the discrepancy.

## 7. Explicitly out of scope

The following remain out of scope for this packet:

- `README/Constitution/Identity/README.StructuralMemoryClosureInvariant.md` (mixed / memory-adjacent)
- `README/Constitution/Surfaces/README.StructuralSurfacePacketContract.md` (mixed)
- all Decision-facing workflow contract notes
- all Formation-family architecture notes
- all Evaluation-family audit/evidence notes
- all Memory-family taxonomy/archive/roadmap notes
- any root matrix
- `README.md`

## 8. Allowed mutation classes

Allowed mutation classes are:

- move
- rename (only if required for truthful placement)
- repair_local_reference
- classify_only
- edit (only minimal local edits required for truthful placement headers or directly adjacent path references)

## 9. Placement directives

Place migrated files under:

- `README/Constraint/`

Do not create additional subfolders inside `README/Constraint/` during this pass unless current repo formation law already requires them and the need is unavoidable for truthful placement.

Prefer the simplest lawful landing.

## 10. Local reference rule

Repair only references that are directly broken by moving the in-scope files.

Do not perform broad stale-authority cleanup across unrelated docs.

If a moved file still contains older historical references that are not newly broken by the move, note them in the receipt rather than widening scope.

## 11. Acceptance target

This pass is accepted only if it returns:

1. the migrated in-scope Constraint-support files under `README/Constraint/`
2. a truthful list of files moved, renamed, or locally edited
3. explicit note of any files skipped because live repo state made them mixed or unresolved
4. what is now true in repo-visible reality
5. what is not claimed
6. narrowed next legal moves

## 12. Blocked-condition rule

Stop and report rather than improvise if:

- an in-scope file is now materially mixed-role in live repo state
- a move would require broad content rewrite to stay truthful
- placement creates name collision or hidden dependency outside direct scope
- direct local reference repair expands beyond bounded family
- live repo state differs from the audit in a way that widens the seam

## 13. Return contract

Return a bounded migration receipt containing:

- packet id
- result status
- files read
- files changed
- files moved
- files renamed
- local references repaired
- files skipped with reasons
- what is now true
- what is not claimed
- blocked conditions, if any
- next legal moves

## 14. One-line summary

Codex is authorized only to migrate the approved low-ambiguity Constraint-support README family into `README/Constraint/` with minimal lawful mutation and without widening into cross-region cleanup.