# Dynamical Memory Engine - V2 Architect Bundle Seed

## 1. Title

V2 Architect Bundle Seed

## 2. Status

This document is a compact architecture-formation seed for the next V2 stabilization pass.

It is grounded in current repo reality from:

- the active root matrices
- the current V2 architecture and projection notes that pin the clean floor through `Transform`
- the audited V1 chain, salvage ledger, and Phase C findings
- the live V1 operator/runtime/read-side seams

It does not yet settle final V2 contracts for `Compress`, `Identify`, `Merge`, `Query`, `Reconstruct`, basin characterization, or later benchmark harnesses.

## 3. Purpose

This bundle exists to define one compact structural grammar for the next restatement pass so later work can talk about runtime carriage, commit, substrate continuity, and read-side characterization without collapsing them into one generic pipeline.

## 4. Scope

This bundle governs:

- the main architectural cut
- lane, regime, plane, and object-class grammar
- the commit boundary
- support recruitment posture
- read-side and dynamical characterization posture
- the best first source-family sequence for next benchmarking and wrapping work

This bundle does not govern:

- implementation details
- test design
- exact operator-local schemas
- canon or truth admission
- broad repo reorganization

## 5. Architectural Thesis

Current repo evidence supports one bounded thesis: V2 already has a clean constraint-floor signal path through `Ingest -> Clock Align -> Window -> Transform`, while V1 translation findings show that support recruitment begins only after that floor, that commit is the first load-bearing cut into substrate continuity, and that query, replay, basin, neighborhood, and projection surfaces must remain downstream read-side or observational surfaces rather than extensions of forward operator carriage.

## 6. Major Partition

The strongest current architecture cut is:

1. Signal pipeline
   `Ingest -> Clock Align -> Window -> Transform -> Compress -> Identify -> Merge`

2. Commit boundary
   The cut where active runtime outputs stop being carriage objects and become committed continuity under explicit provenance and geometry preservation.

3. Substrate continuity
   Append-only committed state plus lawful indexing, grouping, and continuity-bearing support structure over committed objects.

4. Read-side / dynamical characterization
   Query, basin/neighborhood characterization, recurrence and transition summaries, reconstruct/replay, and projection planes over already emitted or already committed objects.

Current V2 directly pins only the first segment through `Transform`. The rest of this partition is the recommended V2 restatement shape because it matches the root matrices, the constraint-regime boundary at `Compress`, and the V1 carry-forward versus mixed seam evidence.

## 7. Lane Grammar

A lane is an active runtime carriage path for one declared class family before commit.

What belongs in a lane:

- source-bearing and transformed structural objects while they are still moving forward through runtime
- explicit companion support lanes only when they remain subordinate and do not replace the carried object
- declared provenance, accounting, or diagnostics only as lane-distinct companions rather than as substitutes for the carried object

What does not belong in a lane:

- planes
- committed substrate fields
- query results
- replay outputs
- review overlays

Lane behavior ends at commit.

After commit, lane outputs are no longer carriage paths. They become committed fields or committed state surfaces that may later be read, queried, reconstructed, or projected, but they are no longer the active forward lane.

The minimum lane reading supported by current evidence is:

- a pure signal lane through `Ingest`, `Clock Align`, `Window`, and `Transform`
- support recruitment entering later at `Compress`

## 8. Regime Grammar

The most useful regime split for the next pass is:

- Constraint regime
  Pure structural floor through `Ingest`, `Clock Align`, `Window`, and `Transform`. This regime stops before support reduction.

- Formative support regime
  Begins at `Compress`. This regime reduces, compares, groups, and prepares identity-supportive structure without claiming truth, canon, or memory closure. `Identify` and `Merge` belong here unless a later audit proves a better cut.

- Substrate continuity regime
  Begins after commit. This regime preserves committed continuity, indexing, segment continuity, and later basin-support organization over committed objects.

- Read-side / observational regime
  Lives over already emitted or already committed objects. `Query`, `Reconstruct`, basin and neighborhood characterization, recurrence summaries, transition summaries, and planes belong here when they stay observational and explicitly non-authoritative.

Current V2 strongly pins the first regime. The latter three are the cleanest next restatement shape supported by the live repo and V1 translation findings.

## 9. Plane Grammar

A plane is a removable read-side projection surface for direct inspection of an already-emitted object or already-committed surface under a declared lens and projection class.

A plane may expose:

- direct primary geometry
- bounded derived diagnostics
- committed-state inspection views
- query or replay-facing read models
- characterization summaries with explicit claim ceilings

A plane must never claim:

- runtime carriage authority
- operator execution authority
- identity proof
- memory closure
- basin truth
- recurrence truth
- transition truth
- canon or promotion authority

Planes differ from other classes this way:

- lanes carry active runtime objects before commit
- operators emit or transform objects
- committed substrate fields preserve continuity after commit
- planes only project already-emitted or already-committed reality for inspection

## 10. Object-Class Grammar

The best bounded working ladder is:

1. Source structure
   Admitted source-bearing object. Not yet comparison-ready.

2. Aligned structure
   Temporally comparable source object. Not yet a frame.

3. Frame
   Bounded local working unit. Not yet a region or identity candidate.

4. Transformed frame
   Alternate-basis structural exposure. Still below support recruitment and below identity.

5. Compressed support object
   First reduced support-bearing object produced after `Compress`. Useful for comparison, commit preparation, and support recruitment. Not yet truth, memory, or unconditional identity.

6. Region
   A declared local support grouping or neighborhood-bearing structural grouping. Region language belongs after support entry, not on the constraint floor.

7. Identity candidate
   A declared candidate object whose basis must be explicit. If it is derived directly from `Transform` output, that basis must be declared. If it is derived from `Compress` output, that basis must also be declared.

8. Merged object
   A later continuity-consolidated object. It is stronger than an identity candidate in continuity handling, but it is still not memory closure, truth, or canon.

Class-strength rule:

- classes `1-4` are dry structural floor objects
- classes `5-8` are later and stronger, but every upward move remains bounded by non-claims

## 11. Commit-Boundary Law

Commit is the law-governed cut where an already-emitted bounded object stops being treated as active runtime carriage and starts being treated as continuity-bearing committed state.

This cut must stay explicit because preservation, indexing, grouping, query, and characterization are not merely later pipeline stages. They are downstream uses of already committed objects.

`Compress` is the first lawful pre-commit support-entry threshold. It may prepare support-bearing structure for later continuity, but it is not commit.

What ends at commit:

- active lane carriage for the committed object
- treatment of that same object as still-provisional in-flight runtime material
- silent ambiguity about whether the object is still being formed or is already preserved continuity

What begins at commit:

- governed preservation of the already-emitted object under substrate continuity
- lawful indexing, grouping, and continuity handling over committed copies
- downstream eligibility for query, reconstruct/replay, characterization, and projection over committed state

What commit must preserve at minimum:

- the emitted object's declared class
- source and input lineage
- declared policy chain
- enough temporal, grid, or coordinate geometry for later comparison
- enough continuity-identity handles for stream, segment, and state continuity
- enough provenance to reconstruct how the committed object was formed

Current repo evidence supports this law most strongly at the `H1` commit seam:

- `processWindow()` emits `H1` before substrate continuity work
- `MemorySubstrate.commit(...)` stores immutable committed copies rather than minting a stronger pipeline artifact
- trajectory and index paths preserve continuity-bearing handles such as `state_id`, `stream_id`, `segment_id`, ordering, and comparison-ready structure

Commit therefore does not upgrade class. It preserves an already-emitted bounded object into continuity posture. It does not silently turn support evidence into truth, or committed state into canon, promotion, or memory closure.

Bounded note:

- late support formation may pressure the edge of commit, but it remains pre-commit until the cut is crossed
- `Merge` must eventually be related explicitly to commit timing, but this pass does not force its final placement

Commit is not:

- memory closure
- identity closure
- canon
- truth
- promotion
- review closure
- final legitimacy beyond the bounded class already emitted

### Contract Shape for commit

This contract governs the commit act for an already-emitted bounded object crossing from active runtime carriage into continuity-bearing committed state.

It is narrower than Commit-Boundary Law. It does not restate the cut itself. It defines the minimum lawful preservation contract once that cut is crossed.

`Compress` remains outside this contract as pre-commit support entry and does not satisfy this contract by itself.

#### What commit must preserve

- the emitted object's declared class
- one lawful committed continuity identity handle, defaulting in current repo evidence to `state_id`
- source and input lineage
- declared policy chain
- enough temporal, grid, or coordinate geometry for later comparison and placement
- enough stream and segment continuity handles for later continuity use where those handles exist
- enough provenance to reconstruct how the committed object was formed

Any future generalization beyond `state_id` remains subordinate to this repo-real default unless later evidence proves a better common contract.

#### What commit may do

- validate whether the emitted object satisfies the minimum lawful preservation threshold
- preserve an immutable committed copy or equivalently governed committed state
- attach bounded commit-receipt and provenance anchors
- attach bounded lookup or placement handles needed to preserve later continuity addressability
- reject commit when minimum class, `state_id`, lineage, policy, or placement requirements are missing

#### What commit must never claim

- that commit formed the object it is preserving
- that support entry at `Compress` was itself commit
- that later continuity organization was completed by commit itself
- that preservation equals identity closure, memory closure, canon, truth, or promotion
- that later indexing, grouping, or availability for query proves more than the committed object lawfully proves
- that this contract settles Recruitment Law, Substrate Continuity Contract, or full Object-Class Grammar
- that `Merge` placement is resolved beyond the minimal rule that any later committed object would require its own lawful commit posture

#### What remains outside this contract

- the full pre-commit support-entry contract for `Compress`
- the full continuity architecture and later organization after commit
- the full field schema for all preserved handles
- the final placement of `Merge` relative to this seam
- read-side query, replay, reconstruct, or characterization contracts
- promotion, review, canon, or memory-closure surfaces

#### Minimum lawful commit receipt / preservation posture

At minimum, a lawful commit posture must leave behind:

- one declared committed object or committed-state preservation event
- one stable continuity identity handle for that committed object, defaulting in current repo evidence to `state_id`
- explicit object-class or artifact-class identity
- source or input references sufficient to trace formation lineage
- policy or provenance anchors sufficient to explain how the object became commit-eligible
- temporal, grid, coordinate, stream, or segment placement sufficient for later lawful continuity use

This minimum remains intentionally bounded. It is a contract-shape floor, not a full schema.

### Commit Receipt Floor

This subject defines the minimum lawful receipt floor left behind by commit once an already-emitted bounded object has been preserved into committed continuity posture.

It is narrower than Contract Shape for commit. It does not define the whole commit act. It defines the minimum committed remainder that must exist so later lawful continuity use is possible.

`Compress` remains outside this receipt floor because it is pre-commit support entry rather than committed receipt.

#### What committed remainder must exist

At minimum, commit must leave behind an explicit committed remainder.

- current repo evidence favors a committed object as the primary receipt-floor form
- committed-state preservation-event language is retained only as a bounded fallback if later evidence exposes committed preservation without a richer committed object surface

The floor does not require a richer receipt object than current repo evidence supports. It requires that committed preservation be explicit rather than merely implied.

#### What continuity identity handle must be left behind

- one stable committed continuity identity handle must remain
- current repo-real default at this layer is `state_id`
- any broader continuity-identity generalization remains deferred unless later evidence proves a better common floor

#### What class identity must remain explicit

- the committed remainder must preserve explicit object-class or artifact-class identity
- commit must not leave behind an addressable object whose class has become implicit, mixed, or inferred only from downstream usage

#### What lineage, policy, and provenance anchors must remain

- enough lineage to trace the committed object back to its formation inputs
- enough policy anchoring to state under what declared formation path the object became commit-eligible
- enough provenance anchoring to reconstruct how the committed remainder was lawfully produced and preserved

These anchors may overlap in implementation, but this floor keeps their bounded jobs distinct.

#### What minimum addressability or placement floor must remain

- the committed remainder must stay retrievable by its continuity identity handle
- enough temporal, grid, coordinate, stream, or segment placement must remain for later lawful continuity use
- lookup or placement handles may remain narrow at this layer so long as they preserve retrieval and lawful addressability rather than downstream organization

#### What this receipt floor must never imply

- that a receipt floor is memory closure, identity closure, truth, canon, or promotion
- that later continuity grouping or organization has already been solved
- that read-side query, replay, reconstruct, or characterization authority was granted by receipt existence alone
- that `Compress` was commit
- that `Merge` placement is resolved beyond the anti-drift rule that any later committed object needs its own lawful receipt floor

#### What remains outside this receipt-floor subject

- the full commit act and its wider contract
- the full field schema for receipt or committed-state contents
- downstream substrate continuity organization
- Recruitment Law
- full object-class redesign
- final `Merge` placement

This floor remains intentionally compact. It names only the minimum committed residue that must remain after lawful commit.

### Commit-Time Addressability Contract

This contract defines the narrowest lawful addressability rule left behind by commit for the committed remainder.

It is narrower than Commit Receipt Floor. It does not define downstream lookup architecture, grouping, query, or continuity organization. It defines only what must remain true for the committed remainder to be lawfully resolved as committed state.

`Compress` remains outside this contract because it is pre-commit support entry rather than committed addressability.

#### What it means for the committed remainder to be lawfully resolvable

A committed remainder is lawfully resolvable when:

- one stable continuity identity handle can be resolved directly to that committed remainder
- that handle resolves to the committed remainder itself rather than to a broader grouped or interpretive surface
- direct resolution remains bounded to committed-state access rather than widening into general query behavior
- unresolved handles must not fabricate or substitute a committed remainder

Current repo evidence supports this floor through direct committed-state resolution by `state_id`.

#### What continuity identity handle must support that resolution

- one stable continuity identity handle must support lawful direct resolution
- current repo-real default at this layer is `state_id`
- the handle must remain stable across commit and later committed access
- broader continuity-identity generalization remains deferred unless later evidence proves a better common contract

#### What minimum placement information must remain for lawful continuity use

- enough temporal, grid, coordinate, stream, or segment placement must remain for the committed remainder to stay lawfully situated after direct resolution
- this placement floor is not downstream organization
- it is only the minimum placement residue needed so resolved committed state is still continuity-usable rather than contextless

#### What addressability may do

- support direct resolution of the committed remainder by its continuity identity handle
- preserve narrow placement companions needed to keep the resolved remainder lawfully situated
- preserve the boundary between committed-state access and broader downstream read-side or continuity operations
- return no committed remainder rather than fabricate or substitute one when the requested handle does not resolve

#### What addressability must never imply

- that lawful direct resolution is already query architecture, grouping, or continuity organization
- that direct resolution by identity proves identity closure, memory closure, truth, canon, or promotion
- that the resolved remainder may silently change class or authority because it is addressable
- that `Compress` was commit
- that `Merge` placement is resolved beyond the anti-drift rule that any later committed object needs its own lawful addressability and receipt floor

#### What remains outside this addressability contract

- full receipt or committed-state schema
- downstream lookup, grouping, indexing, or continuity organization architecture
- general query or retrieval architecture
- Recruitment Law
- full continuity architecture after commit
- final `Merge` placement

This contract remains intentionally narrow. It names only the minimum lawful direct-resolution rule and placement residue that commit must leave behind.

### Placement Residue Contract

This contract defines the narrowest lawful placement residue that must remain after commit so directly resolved committed state stays lawfully situated.

It is narrower than Commit-Time Addressability Contract. It does not define downstream continuity organization, grouping, or broader read-side placement logic. It defines only the minimum residue that prevents directly resolved committed state from becoming contextless.

`Compress` remains outside this contract because it is pre-commit support entry rather than committed placement residue.

#### What minimum placement residue must remain after commit

At minimum, directly resolved committed state must retain enough residue from one or more of the following placement families:

- temporal placement
- grid or coordinate placement
- stream placement
- segment placement

This residue may remain compact. It does not require a full field inventory. It requires only enough placement reality to keep the committed remainder lawfully situated.

#### What makes that residue sufficient for lawful situation after direct resolution

Placement residue is sufficient when:

- the directly resolved committed remainder is still situatable within its committed situation
- the resolved remainder is not reduced to bare identity without lawful situation
- the remaining placement residue is enough for later lawful continuity use without becoming early continuity processing or pre-solving downstream organization

Current repo evidence supports this floor through committed state that retains temporal span, grid structure, `stream_id`, and `segment_id`.

#### What placement residue may support

- lawful situation of directly resolved committed state after direct resolution
- distinction between one committed remainder and another within the same broader continuity space
- preservation of committed-state access as narrower than downstream grouping or continuity organization

#### What placement residue must never imply

- that placement residue already performs downstream continuity organization
- that placement residue is general query architecture or read-side placement logic
- that lawful situation proves identity closure, memory closure, truth, canon, or promotion
- that `Compress` was commit
- that `Merge` placement is resolved beyond the anti-drift rule that any later committed object needs its own lawful placement residue, addressability, and receipt floor

#### What remains outside this placement-residue contract

- full schema for temporal, grid, coordinate, stream, or segment fields
- downstream grouping, indexing, or continuity organization
- general read-side or query architecture
- full Substrate Continuity Contract
- Recruitment Law
- final `Merge` placement

This contract remains intentionally compact. It names only the minimum situating residue that must survive commit so directly resolved committed state remains lawfully placed.

### Stream / Segment Residue Contract

This contract defines the narrowest lawful distinction between stream residue and segment residue inside the released placement residue floor.

It is narrower than Placement Residue Contract. It does not define downstream grouping, indexing, continuity organization, or read-side filtering. It defines only why stream and segment still do distinct bounded work for directly resolved committed state at this layer.

`Compress` remains outside this contract because it is pre-commit support entry rather than committed placement residue.

#### What stream residue must preserve

Stream residue must preserve enough stream belonging so the resolved state remains situated within the same stream.

At minimum, stream residue preserves:

- which stream the committed remainder belongs to
- continuity of belonging across committed remainders that remain in that same stream
- distinction between committed remainders that stay in one stream even when segment situation changes

#### What segment residue must preserve

Segment residue must preserve enough segment situation so the resolved state remains situated within its bounded segment.

At minimum, segment residue preserves:

- which segment the committed remainder belongs to
- distinction between one segment-bounded committed remainder and another within the same stream
- the local segment boundary needed so same-stream committed remainders are not flattened into one undifferentiated situation

#### What makes their distinction lawful and useful at this layer

Their distinction remains lawful and useful at this layer because current repo evidence still separates:

- stream as the broader belonging that persists across segment changes
- segment as the local bounded situation that may change within that stream

This distinction remains bounded. It is not yet downstream continuity organization. It is only the minimum split needed so directly resolved committed state stays lawfully situated without losing either stream belonging or segment-bounded situation.

This split should remain active only while repo evidence still requires separate stream and segment residue for structural control. If repo evidence no longer needs both to keep directly resolved committed state lawfully situated, the split should compress upward rather than descend further.

#### What each may support

Stream residue may support:

- lawful same-stream situation across committed remainders
- preservation of stream belonging after direct resolution

Segment residue may support:

- lawful segment-bounded situation after direct resolution
- distinction between one segment-bounded committed remainder and another within the same stream

#### What this split must never imply

- that stream and segment already define downstream continuity organization
- that stream residue alone is sufficient for lawful segment-bounded situation
- that segment residue alone replaces stream belonging
- that this split is general read-side filtering or query architecture
- that `Compress` was commit
- that `Merge` placement is resolved beyond the anti-drift rule that any later committed object needs its own lawful stream / segment residue, addressability, and receipt floor

#### What remains outside this residue-split contract

- full schema for `stream_id`, `segment_id`, or related placement fields
- downstream grouping, indexing, or continuity organization
- general read-side or query architecture
- full Substrate Continuity Contract
- Recruitment Law
- final `Merge` placement

This contract remains intentionally compact. It names only the minimum lawful split by which stream and segment still preserve different situating work for directly resolved committed state.

## 12. Recruitment Law

Before support recruitment, the floor remains pure through:

- `Ingest`
- `Clock Align`
- `Window`
- `Transform`

Support recruitment begins at:

- `Compress`

Once recruited, support may:

- reduce structure for comparison or continuity handling
- expose bounded support evidence
- group or relate local support-bearing objects
- prepare lawful identity-candidate handling
- prepare or accompany commit

Support remains subordinate by rule.

Support must not silently become:

- the primary object itself
- truth
- memory authority
- canon
- review closure
- forward-lane replacement

`Identify` is not yet fixed to one basis. Current evidence supports this rule:

- default next-pass posture should treat `Identify` as post-support-entry
- if `Identify` runs on `Transform` output, that direct-transform basis must be declared explicitly
- if `Identify` runs on `Compress` output, that compressed basis must be declared explicitly

`Merge` belongs later than `Compress` and `Identify`.

## 13. Read-Side / Dynamical Characterization Posture

Current lawful posture is:

- `Query`
  Ceiling-side retrieval and recognition over committed or otherwise explicitly bound objects. It is observational/tooling discipline, not truth, not identity proof, and not canon.

- `Reconstruct`
  Architecturally a read-side replay or regeneration function, even if older code packaged it as an operator. It is not forward operator flow and not proof-bearing continuity by itself.

- `Basin` and `neighborhood`
  Observational organization and characterization surfaces over committed continuity. They may describe grouping or convergence under a declared lens, but they do not prove attractor truth, same-object truth, or memory closure.

- `Recurrence`, `dwell`, and `transitions`
  Characterization vocabulary over committed continuity or replay-observed behavior. They remain declared read-side interpretations unless and until a later contract proves a stronger posture.

- Read-side projections
  Removable inspection aids over emitted or committed objects. They must stay below runtime, below memory authority, and below promotion.

The active non-claim rule is simple:

Read-side characterization can describe, compare, and expose patterns. It cannot silently prove what the runtime or committed object does not already lawfully prove.

## 14. Source-Family Starter Recommendation

Recommended sequence:

1. Audio first for the next stabilization pass.
2. JSON second for wrapper and benchmark harness expansion.

Why audio first:

- current V2 execution, source-intake, and temporal development notes are already pinned around `.wav`
- the live repo already has strong audio cohorts, replay probes, and continuity diagnostics
- audio exercises the actual signal-floor and commit-boundary architecture this bundle is organizing
- provenance can stay concrete through source cohort, file identity, replay phase, and ingest lineage

Why JSON second:

- JSON is more legible for schema review, wrapper receipts, and model-facing benchmark loops
- JSON is more convenient for Codex and Ollama helper wrapping once the runtime-side grammar is settled
- JSON is valuable for export, validation, and benchmark packaging, but it is weaker as the first proving ground for the signal-floor and substrate-continuity split

If one family must be chosen first, choose audio. If the task is specifically wrapper-facing after runtime grammar is stable, add JSON immediately after.

## 15. Non-Claims

This bundle does not claim:

- that the whole architecture is already mechanized in V2
- that `Identify`, `region`, or basin/neighborhood math is already settled
- that `Reconstruct` should remain an in-band forward operator
- that query or basin output proves identity, continuity, truth, or memory
- that mixed V1 packaging seams should be ported as-is
- that read-side usefulness grants authority uplift
- that benchmark success grants canon, readiness, or promotion

## 16. One-Line Summary

V2 should be restated as a pure pre-commit signal floor, a real commit cut, a separate substrate-continuity layer, and a ceiling-side read-only characterization layer, with support recruited first at `Compress` and with query, replay, basin, and projection surfaces kept explicitly downstream and non-authoritative.
