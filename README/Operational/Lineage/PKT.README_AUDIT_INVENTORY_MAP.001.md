# DME Packet — README Audit Inventory and Migration Mapping

Live Repo State:
https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

## Status

This is a bounded non-mutation audit packet.

It initializes the Codex audit thread under the new role system.

It governs only:

- current audit role posture
- active seam
- audit scope
- required inventory output
- migration-map output
- blocked-condition reporting

It does not authorize:

- file moves
- file edits
- file creation beyond audit receipts if explicitly requested later
- README migration
- architecture redesign
- silent scope expansion

If this packet conflicts with root matrix authority, the root matrices win.

If this packet conflicts with live repo state, live repo state wins.

---

## 1. Packet header

packet_id: PKT.README_AUDIT_INVENTORY_MAP.001
packet_type: evaluation packet
packet_status: accepted

active_role: Evaluation-Auditor / Reviewer
active_macro_verb: Evaluate
active_seam: README-field-inventory-and-migration-mapping

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

## 3. Current repo state reference

Ground all audit findings in current live repo reality on `main`.

Do not rely on prior conversational memory when repo state and memory diverge.

## 4. Role posture

Codex is acting only as:

**Evaluation-Auditor / Reviewer**

This pass is read-only and classification-only.

Codex must not silently perform:

- Admission-Advisor
- Formation-Constructor / Compressor
- Decision-Reflector
- repo-mutation posture

except to the minimum extent required to name audit scope honestly.

## 5. Task statement

Audit the current README bank and produce a bounded README inventory and migration map.

The task is to:

1. inventory current README documents
2. classify each document by target README region
3. assign posture to each document
4. identify mixed-role notes
5. identify root-authority confusion
6. identify unresolved placement cases
7. produce a migration map

The task is **not** to perform migration.

## 6. Target README field layout

The target README field layout is:

- `README/Constraint/`
- `README/Formation/`
- `README/Decision/`
- `README/Evaluation/`
- `README/Memory/`
- `README/Operational/`

Archive posture exists inside memory-support surfaces rather than as a separate top-level README region.

## 7. Files in scope

Files in scope are:

- all current README documents at repo root except non-README metadata
- all documents under `README/`
- any current operational README surfaces relevant to migration or accounting

Files out of scope are:

- source code files outside documentation
- `.local/`
- generated outputs
- application/runtime/operator implementation files except where referenced for README placement context

## 8. Required classification fields

For each README artifact in scope, report:

- current path
- current name
- matrix lineage
- target region
- seam role
- posture
- mixed-role status
- root-authority confusion status
- recommended action
- brief justification

## 9. Allowed values

### 9.1 Matrix lineage

Allowed lineage values are:

- constraint
- formation
- decision
- evaluation
- memory
- mixed
- unresolved

### 9.2 Target region

Allowed target regions are:

- `README/Constraint/`
- `README/Formation/`
- `README/Decision/`
- `README/Evaluation/`
- `README/Memory/`
- `README/Operational/`
- unresolved

### 9.3 Posture

Allowed posture values are:

- keep active
- merge
- defer
- archive-under-memory
- unresolved

### 9.4 Recommended action

Allowed action values are:

- keep in place temporarily
- move to target region
- merge into surviving document
- split by regime
- archive under memory
- hold unresolved pending review

## 10. Specific audit checks

Codex must explicitly check for:

- notes whose function conflicts with their current location
- notes carrying more than one regime without explicit mixed status
- old authority notes still pretending to be root authority
- redundant notes overlapping newer matrix or operational surfaces
- notes that should become field-map support documents
- notes that should be archived under memory posture

## 11. Non-goals

Do not:

- move any files
- rename any files
- delete any files
- create migration folders as part of this pass
- rewrite content beyond audit receipt formatting
- compress documents yet
- resolve every ambiguity by force

## 12. Acceptance target

This pass is accepted only if it returns:

1. a complete README inventory for the bounded scope
2. a classification row for each artifact
3. explicit mixed-role and root-authority confusion flags
4. a target-region assignment or unresolved status for each artifact
5. a migration map that narrows the next legal moves
6. no repo mutation

## 13. Blocked-condition rule

Stop and report rather than improvise if:

- current repo state materially conflicts with the declared field layout
- root authority is unclear for a document
- document identity cannot be determined honestly
- a note appears to require content rewrite before placement can be decided
- scope expands beyond README inventory and migration mapping

## 14. Return contract

Return a bounded audit receipt containing:

- packet id
- result status
- files read
- inventory table
- mixed-role notes list
- root-authority confusion list
- unresolved list
- migration map
- what is now true
- what is not claimed
- next legal moves

## 15. One-line summary

Codex is authorized only to perform a read-only README audit that inventories current documentation, classifies each note by regime and target region, flags mixed-role and authority confusion, and produces a migration map without performing migration.
