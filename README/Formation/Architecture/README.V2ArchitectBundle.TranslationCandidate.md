# Dynamical Memory Engine - V2 Architecture Bundle Translation Candidate

## Status

This document is a candidate V2 architecture bundle for the current V1 -> V2 translation pass.

It treats V1 as:

- quarantined structural evidence
- not active authority
- not total failure

It exists to restate the surviving V1 load-bearing chain into a narrower V2 architecture that is:

- conservative
- test-first
- class-clear
- scope-bounded
- contractable

## Purpose

This candidate exists to do four things without collapsing them together:

- map the real V1 load-bearing chain
- separate the forward signal pipeline from the commit boundary
- restate substrate continuity as a post-commit process rather than more pipeline
- keep query, reconstruction, basin, and dynamical reads explicitly downstream and non-authoritative

Only the signal path is a pipeline.

Commit, substrate continuity, and read-side characterization are different architectural regimes and should not be redescribed as later pipeline stages.

## Evidence Basis

This candidate is grounded in current repo evidence from:

- `Root/README/Formation/Mapping/V1_Translation/README.V1ChainMap.md`
- `Root/README/Formation/Mapping/V1_Translation/README.V1SalvageLedger.md`
- `Root/README/Formation/Mapping/V1_Translation/README.V1PhaseC.Findings.md`
- `Root/README/Constraint/README.ConstraintRegime.md`
- `DME_Version_1/runtime/DoorOneExecutiveLane.js`
- `DME_Version_1/runtime/DoorOneOrchestrator.js`
- `DME_Version_1/operators/substrate/MemorySubstrate.js`
- `DME_Version_1/operators/trajectory/TrajectoryBuffer.js`
- the lower V1 operator chain through `IngestOp`, `ClockAlignOp`, `WindowOp`, `TransformOp`, `CompressOp`, `AnomalyOp`, `MergeOp`, `QueryOp`, and `ReconstructOp`

## Architectural Thesis

The narrowest surviving V2 restatement supported by repo reality is:

DME transforms admitted signal into bounded structural and support states, commits those states into a continuity-bearing substrate with preserved provenance and comparison geometry, and exposes read-side query and reconstruction without collapsing runtime output into truth or canon.

## V1 Anchor Path

The compact V1 path that anchors this candidate is:

`raw ingest / sampler flush -> executive handoff -> primary operator spine -> result assembly -> cross-run accumulation -> workbench -> HUD / structural memory HUD`

That path translates into V2 as follows:

| V1 chain anchor | V2 placement | Current translation posture |
| --- | --- | --- |
| raw ingest / sampler flush | signal-pipeline admission edge | carry forward |
| executive handoff | narrow pre-pipeline runtime handoff | carry forward |
| primary operator spine | signal pipeline plus commit boundary | carry forward in split form, not as one blob |
| result assembly | mixed packaging seam | re-derive, do not port as composite bundle |
| cross-run accumulation | downstream observational characterization | re-derive |
| workbench | read-side integration plane | re-derive |
| HUD / structural memory HUD | read-side projection planes | direct HUD carry-forward is limited; structural HUD must be re-derived |

## Regime Cut Markers

The current best-known cut markers remain:

- seam `2` = current best-known intact seam
- seam `3` = first primary/support touch
- seam `4` = current best-known suspected mixed seam
- seam `4` = first support/interpretive and primary/interpretive touch

These markers matter architecturally because they show where V1 stops being a clean forward corridor and starts bundling unlike classes into one convenience object.

## Major Partition

The architecture should be restated as four bounded parts:

1. Signal pipeline
2. Commit boundary
3. Substrate continuity process
4. Dynamical characterization / read-side access

Only part `1` is a forward operator pipeline.

Parts `2-4` are not later pipeline stages.

## 1. Signal Pipeline

The signal pipeline is the active runtime carriage path before commit.

Its pure constraint floor is:

- Ingest
- Clock Align
- Window
- Transform

Its formative support entry is:

- Compress
- Identify
- Merge

Current translation rule:

- support recruitment begins at `Compress`
- pure structural tracing must remain representable through `Transform` without support reduction
- `Identify` may operate on `Transform` output or `Compress` output, but the basis must be declared
- `Anomaly` should only be restated as `Identify` if the implementation semantics truly match segmentation or binding rather than mere deviation detection

Current V1 evidence supports the first four operators strongly and supports `Compress` as the first lawful support-entry seam.

Current V1 evidence does not yet prove that `AnomalyOp` is already an `Identify` operator in the V2 sense. In code, it is still a deviation gate with segmentation pressure, not a settled identity-binding operator.

### Signal Object Ladder

The minimum object ladder to preserve and clarify is:

1. source structure
2. aligned structure
3. frame
4. transformed frame
5. compressed support object
6. region
7. identity candidate
8. merged object

Strength rule:

- `1-4` are dry structural floor objects
- `5-8` are post-support-entry objects
- no object may silently act above its declared class

### Signal Class Rule

At minimum the bundle must keep these object classes explicit:

- primary object
- derived support object
- interpretive object

No object may silently act above class.

This means:

- transformed frames do not become identity candidates by convenience
- compressed support objects do not become primary truth objects
- interpretive overlays do not become runtime authority because they are useful

## 2. Commit Boundary

Commit is the cut where active runtime carriage ends and continuity-bearing preservation begins.

The key rule is simple:

the signal-processing pipeline ends at commit

After commit:

- active runtime lanes stop functioning as carriage paths
- preserved lane contents become attached committed fields
- the system is no longer processing the signal through the same forward operator chain
- the system is operating over committed state objects inside a continuity-bearing substrate

Current V1 evidence places this cut at the points where `MemorySubstrate.commit(...)` stores already-emitted `H1` and `M1` states.

### Commit Preservation Law

If commit does not preserve geometry, substrate collapses into a flat log.

Committed substrate structure must therefore preserve:

- state fields
- coordinate fields
- relational fields

In repo reality this is already visible:

- `MemorySubstrate` preserves append-only committed state copies and policy/provenance anchors
- `TrajectoryBuffer` preserves time order, `state_id`, `stream_id`, `segment_id`, neighborhood assignment slots, band-profile snapshots, and transition-ready observations

Compression rule:

- runtime lanes preserve separation during transformation
- substrate fields preserve geometry during continuity

## 3. Substrate Continuity Process

Substrate is not just a log and not just cross-session storage.

In V2 it should be restated as:

a continuity-bearing, append-only structural memory layer that stores already-emitted support-bearing state objects, preserves provenance and policy anchors, and preserves enough coordinate and relation structure for comparison, query, reconstruction, and observational geometry across time

The likely post-commit continuity family is:

- committed states
- trajectory frames
- lineage anchors
- retention-ready corpus

Current V1 code supports this family more strongly than it supports later mixed packaging seams.

What survives cleanly here:

- immutable committed `H1` and `M1` storage
- append-only trajectory frame accumulation
- basin rebuild over committed state
- query over copied committed corpus

What does not survive as-is:

- composite result packaging that bundles committed-state summaries with interpretive overlays
- workbench convenience objects that co-locate runtime, readiness, and review

## 4. Dynamical Characterization / Read-Side Access

The current best posture is:

dynamical space is observational before it is generative

That means:

- neighborhoods, recurrence, dwell, transitions, and basin candidates are observed over committed state continuity
- query and reconstruction are read-side or ceiling-side interactions with committed continuity
- observational geometry must not be silently upgraded into autonomous simulated object dynamics

### Dynamical Characterization Family

The bounded characterization family is:

- neighborhood objects
- recurrence summaries
- dwell summaries
- transition summaries
- basin objects

These are characterization surfaces over committed continuity.

They are not proof of:

- attractor truth
- same-object truth
- memory closure
- canon

### Read-Side Access Family

The minimum read-side family is:

- query result objects
- reconstructed objects

Operator posture:

- `Query` remains the operator ceiling over committed or otherwise explicitly bound objects
- `Basin` is an observational or dynamical characterization function unless stronger operator status is proved later
- `Reconstruct` may exist as an operator in V1 code form, but architecturally it should be treated as a read-side function or function-like seam
- consensus stays outside the runtime core

## Primitive Grammar

The bundle keeps these terms explicit:

- operator = bounded runtime transformation or binding step
- lane = active runtime carriage path for a class of outputs
- plane = read-side projection surface
- function = cross-pipeline capability, not necessarily a forward operator step
- object class = declared strength and type of emitted bounded thing

These terms must not be collapsed into one another.

In particular:

- a plane is not a lane
- a function is not automatically a forward operator
- a committed field is not an active carriage path

## Intact, Mixed, Unresolved

### Intact Carry-Forward Spine

The strongest surviving V1 family is:

- input boundary and sampler flush normalization
- executive handoff
- ingest / align / window / transform
- first support-entry at compress-plus-commit
- substrate basin/query reads with explicit claim ceilings
- direct formatting-only HUD consumption

These are the seams V2 should restate first.

### Mixed Seams To Re-Derive

The seams that should not be ported as composite architecture are:

- merge plus reconstruction emitted from one convenience seam
- result assembly composite object
- cross-run accumulation that depends on inherited interpretive overlays
- workbench integration that bundles runtime, readiness, and review
- structural HUD projection that synthesizes fallback identity and mixed projection objects

These retain useful intent but not a clean V2 shape.

### Unresolved Translation Points

The active unresolved points are:

- exact `Identify` basis and object contract
- whether any part of `AnomalyOp` survives as `Identify` rather than as deviation-only support evidence
- whether `Merge` should stay inside the signal pipeline tail or move to a stricter post-identification continuity seam
- the final schema split between basin object, neighborhood object, and recurrence or dwell summaries
- the exact V2 placement of reconstruction receipts and replay outputs

Until these are settled, V2 should preserve the non-claims instead of inflating architecture by hope.

## V2 Build Posture

The next V2 architecture pass should preserve these laws:

- do not widen into ontology
- do not widen into symbolic cognition
- do not treat query as truth
- do not treat recurrence as canon
- do not port mixed assemblies whole-cloth
- do not preserve complexity because it existed
- do not redesign everything from scratch before mapping what V1 actually did

The first realistic V2 proving surface is:

- admitted source structure
- transform trace through the pure floor
- first support-entry object at `Compress`
- explicit commit receipt into substrate continuity
- bounded query or reconstruction over committed continuity

## Non-Claims

This candidate does not claim:

- that V2 already mechanizes the full architecture
- that V1 mixed result assembly should survive as one object
- that query proves identity, truth, or memory
- that recurrence or basin structure proves canon
- that observational dynamics implies autonomous simulated dynamics
- that consensus belongs inside the runtime core

## One-Line Summary

V2 should be restated from V1 as a pure pre-commit signal pipeline with support recruited first at `Compress`, a real commit cut into a geometry-preserving continuity substrate, and a separate observational read-side layer for query, reconstruction, and dynamical characterization.
