# DME Architect Morphogenesis — Subject Register Seed

## Status

This document is the active subject register for architect-bundle morphogenesis.

It exists to support the early human-administered workflow before DME has its own runtime support for process orchestration.

It is a companion surface to the architect morphogenesis workflow seed.

It does not replace:

* workflow law
* architecture bundle content
* audit notes
* archive notes

It is a control surface for tracking **what subject is active, what state it is in, and what subject may unfold next**.

## Purpose

This register exists to:

* keep one active subject in motion at a time
* track subject state across role passes
* make release, defer, downgrade, and rebound decisions explicit
* prevent uncontrolled widening
* give the Administrator and Auditor a shared targeting surface
* preserve lawful next-step selection

## Core Rule

Only one subject may be active at a time unless the workflow is explicitly upgraded beyond single-branch mode.

Alternatives may be discussed, but they remain subordinate to the active subject until explicitly activated.

## Register Fields

Each subject entry should carry:

* **Subject**
* **Layer**
* **Purpose**
* **Current State**
* **Parent Subject**
* **Eligible Next Subjects**
* **Release Criteria**
* **Known Tensions**
* **Last Role**
* **Recommended Next Role**
* **Notes**

## State Vocabulary

Allowed states are:

* **Seeded**
* **Tension-Held**
* **Compressed**
* **Gate-Pending**
* **Released**
* **Deferred**
* **Downgraded**
* **Rebound**
* **Archived**

## Layer Vocabulary

Use these layer labels unless a later workflow revision improves them:

* **L0 — Bundle Seed**
* **L1 — Element Definition**
* **L2 — Contract Shape**
* **L3 — Schema / Boundary Geometry**
* **L4 — Test / Benchmark Surface**

### Layer meaning

**L0 — Bundle Seed**
High-level architectural grammar and partition.

**L1 — Element Definition**
Definition of a named element such as lane grammar, plane grammar, or commit law.

**L2 — Contract Shape**
Bounded rule surface describing what an element must preserve, must emit, and must never claim.

**L3 — Schema / Boundary Geometry**
More explicit object shape, field family, seam geometry, or boundary arrangement.

**L4 — Test / Benchmark Surface**
Validation or proving surfaces that pressure the element in practice.

## Next-Subject Rule

A subject may only unfold into a next subject that is:

* narrower than the current subject
* more specific than the current subject
* directly implied by the current subject’s release point or unresolved tension

Do not expand into “more detail everywhere.”

Always select one named next subject.

## Release Reminder

A subject is ready for release only when:

* its boundary is explicit
* its non-claims are explicit
* its unresolved tensions are named
* its current form is compressive rather than bloated
* the next deeper subject can be named clearly in one phrase

## Active Register

| Subject                                        | Layer | Purpose                                                                                                                                               | Current State | Parent Subject  | Eligible Next Subjects                                                               | Release Criteria                                                                                                                           | Known Tensions                                                                                            | Last Role | Recommended Next Role                                  | Notes                                                              |
| ---------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| Major Partition                                | L0    | Stabilize the four-part architecture split between signal pipeline, commit boundary, substrate continuity, and read-side / dynamical characterization | Released      | none            | Commit-Boundary Law; Object-Class Grammar; Regime Grammar                            | Four-part split stays load-bearing; pre-commit vs post-commit distinction remains explicit; read-side does not collapse back into pipeline | Exact placement of Compress / Identify / Merge relative to commit-adjacent formation still needs pressure | Auditor / Gate | Constructor                                         | Released into Commit-Boundary Law                                  |
| Lane Grammar                                   | L1    | Define active runtime carriage before commit                                                                                                          | Seeded        | Major Partition | Commit-Boundary Law; Recruitment Law                                                 | Lane excludes planes, committed fields, query, replay, review; lane end at commit remains explicit                                         | Companion lane scope may still drift if underconstrained                                                  | none      | Deferred until Major Partition compresses              | Keep subordinate to partition                                      |
| Regime Grammar                                 | L1    | Define useful architectural regimes without overproliferation                                                                                         | Seeded        | Major Partition | Recruitment Law; Read-Side Posture                                                   | Constraint / formative support / substrate continuity / read-side split stays useful and non-redundant                                     | Exact naming and whether Merge sits fully inside formative support may still need pressure                | none      | Deferred until Major Partition compresses              | Candidate next subject if partition tension centers on regime cuts |
| Plane Grammar                                  | L1    | Define read-side projection surfaces and their non-claims                                                                                             | Seeded        | Major Partition | Read-Side Posture; Contract Shape for planes                                         | Plane remains removable projection surface and not runtime carriage or operator authority                                                  | Need pressure against projection inflation and substitution for missing upstream seams                    | none      | Deferred                                               | Good later stabilization target                                    |
| Object-Class Grammar                           | L1    | Stabilize bounded object ladder and class strength                                                                                                    | Seeded        | Major Partition | Commit-Boundary Law; Recruitment Law; Schema / Boundary Geometry for object families | Ladder is bounded, ordered, and non-claim posture is explicit                                                                              | “Region,” “identity candidate,” and “committed object” may still be underdefined                          | none      | Possible early next subject                            | Strong candidate for first unfold after partition                  |
| Commit-Boundary Law                            | L1    | Define the cut where active carriage ends and committed continuity begins                                                                             | Released      | Major Partition | Contract Shape for commit; Recruitment Law; Substrate Continuity Contract            | Commit clearly distinguishes active runtime from continuity-bearing committed state                                                        | Exact relation of Compress / Identify / Merge to commit timing still needs pressure                       | Auditor / Gate | Constructor                                         | Released into Contract Shape for commit                            |
| Contract Shape for commit                      | L2    | Define the minimum lawful preservation contract once an already-emitted bounded object crosses the commit cut                                         | Released      | Commit-Boundary Law | Commit Receipt Floor; Continuity Identity Handle Contract; Commit-Time Addressability Contract | Contract stays narrower than Commit-Boundary Law; non-claims remain explicit; minimum preservation and receipt floor stay bounded; `Compress` remains pre-commit; downstream continuity architecture stays outside | Final wording for lookup versus placement handles; slight overlap among lineage / policy / provenance; future generalization beyond `state_id`; minimal `Merge` anti-drift rule still carries pressure | Auditor / Gate | Constructor                                         | Released into Commit Receipt Floor                                 |
| Commit Receipt Floor                           | L3    | Define the minimum committed remainder that must exist so later lawful continuity use is possible after commit                                        | Released      | Contract Shape for commit | Commit-Time Addressability Contract; Continuity Identity Handle Contract            | Receipt floor stays narrower than the full commit contract; object-dominant receipt posture remains explicit; non-claims remain explicit; `Compress` remains pre-commit; downstream continuity organization stays outside | Whether preservation-event fallback should survive later; whether retrieval-by-identity is sufficient without narrower addressability wording; whether lineage / policy / provenance should remain fully distinct; whether the `Merge` anti-drift note can later be removed safely | Auditor / Gate | Constructor                                         | Released into Commit-Time Addressability Contract                  |
| Commit-Time Addressability Contract            | L3    | Define the narrowest lawful direct-resolution rule commit leaves behind for committed remainder access                                                | Released      | Commit Receipt Floor | Placement Residue Contract; Non-Fabrication Rule                                    | Direct committed-state access stays explicitly below broader query architecture; non-claims remain explicit; direct handle resolution remains bounded; `Compress` remains pre-commit; downstream continuity organization stays outside | Whether `direct resolution` is the cleanest final phrasing; whether placement-residue wording can compress further; whether the `Merge` anti-drift note can later be removed safely | Auditor / Gate | Constructor                                         | Released into Placement Residue Contract                           |
| Placement Residue Contract                     | L3    | Define the minimum situating residue that must remain after commit so directly resolved committed state does not become contextless                  | Released      | Commit-Time Addressability Contract | Stream / Segment Residue Contract; Temporal / Coordinate Residue Contract          | Contract stays narrower than addressability as a whole; residue families stay bounded and below downstream continuity organization; non-claims remain explicit; `Compress` remains pre-commit | Whether `lawfully situated` is the cleanest final phrase; whether temporal plus grid or coordinate can compress; whether stream and segment should remain separate indefinitely or only for now; whether the `Merge` anti-drift note can later be removed | Auditor / Gate | Constructor                                         | Released into Stream / Segment Residue Contract                    |
| Recruitment Law                                | L1    | Define when support begins and what support may or may not do                                                                                         | Seeded        | Major Partition | Object-Class Grammar; Commit-Boundary Law; Contract Shape for support entry          | Pure floor through Transform; support begins at Compress; support remains subordinate                                                      | Transform-direct vs Compress-derived Identify basis still unresolved                                      | none      | Deferred until partition or object ladder pressures it | Closely coupled to class grammar                                   |
| Read-Side / Dynamical Characterization Posture | L1    | Define query, reconstruct, basin, recurrence, and projections as downstream observational surfaces                                                    | Seeded        | Major Partition | Plane Grammar; Contract Shape for query; Contract Shape for reconstruct              | Read-side remains non-authoritative and observational                                                                                      | Basin / neighborhood / recurrence vocabulary may still outrun evidence if not constrained                 | none      | Deferred                                               | Strong later subject once partition holds                          |
| Source-Family Starter Recommendation           | L1    | Choose first proving family for stabilization and wrapping work                                                                                       | Seeded        | Major Partition | Test / Benchmark Surface; Intake Contract Family                                     | Starter family chosen by architecture stabilization needs rather than convenience alone                                                    | Audio-first vs JSON-first remains a strategic tension                                                     | none      | Deferred                                               | Better after core grammar compresses                               |

## Subject Priority Order

Default priority order for early passes:

1. **Major Partition**
2. **Commit-Boundary Law**
3. **Object-Class Grammar**
4. **Recruitment Law**
5. **Regime Grammar**
6. **Plane Grammar**
7. **Read-Side / Dynamical Characterization Posture**
8. **Lane Grammar**
9. **Source-Family Starter Recommendation**

This order may be changed by the Administrator when the Auditor or Creative identifies a more load-bearing next subject.

## Deferral Notes Region

Use this region to preserve valuable but inactive tensions.

### Deferred tensions

* exact Identify basis: transform-direct vs compress-derived
* exact placement of Merge relative to commit-adjacent formation
* whether “region” survives as a necessary object rung
* whether audio-first remains correct once wrapper benchmarking becomes the dominant need

## Archive Notes Region

Use this region for inactive but informative alternatives.

### Archived alternatives

* multi-branch subject handling before DME runtime support exists
* separate Gate role before Auditor-as-Gate proves insufficient
* fully non-linear routing as default before the single-branch protocol stabilizes

## Register Update Rule

Every role pass must update or report against:

* active subject
* current state
* state transition, if any
* recommended next subject
* recommended next role

If a pass changes the subject implicitly, the pass is incomplete.

## One-Line Summary

This register keeps architect-bundle morphogenesis targeted by tracking one active subject at a time, its current state, its lawful next subjects, and the tensions that still need pressure before release.

## Metastability Rule

A subject may remain active as a **bounded leaf** when:

* it still carries real structural gain
* deeper descent would buy wording more than control
* upward compression would erase a still-live distinction

This state is called **Metastable Hold**.

### Metastable Hold

Metastable Hold means:

* the subject remains active
* no deeper child subject is opened
* no upward compression occurs yet
* the next pass must stabilize, tighten, or monitor the leaf rather than force motion

### Leaf-Stabilization Pass

When a subject is in Metastable Hold, the next role may perform a **Leaf-Stabilization Pass**.

A Leaf-Stabilization Pass may:

* tighten wording
* preserve live distinctions
* make the compression-up condition explicit
* reduce overstatement
* prepare the subject either for future compression upward or future reactivation

A Leaf-Stabilization Pass must not:

* open a new child subject
* force upward compression without evidence
* widen the subject into neighboring architecture

### Gate rule for metastability

When gating a subject, Auditor / Gate must consider three lawful outcomes:

* **Release downward** when a narrower child subject adds control
* **Compress upward** when the current distinction no longer earns its own depth
* **Metastable Hold** when the distinction still earns its own depth but further descent would produce diminishing-return fractalization

Structural-gain judgment: descend / hold as metastable leaf / compress upward

When a subject enters Metastable Hold, Administrator must either:

park it and activate a new subject,
or explicitly schedule a later re-open condition.

### One-line summary

A subject may lawfully remain as a metastable bounded leaf when it still carries structural gain but neither deeper descent nor upward compression is yet justified.
