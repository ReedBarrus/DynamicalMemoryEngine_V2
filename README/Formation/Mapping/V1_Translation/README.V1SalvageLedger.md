# Dynamical Memory Engine - V1 Salvage Ledger

## Status

This document defines the compact salvage-ledger surface for Phase A.2 of the V1 -> V2 translation pass.

It is a supporting formation mapping note.

It exists to keep V1 seam salvage records:

- compact
- legible
- operational
- bounded to translation support

It does not grant authority to V1.

It stays subordinate to the active root constraint, formation, decision, evaluation, and memory authorities, plus:

- `README.WorkflowFieldPrimitives.md`
- `README.V1toV2.TranslationTodo.md`

## Purpose

This ledger exists only to record one compact row per audited V1 seam so translation work can classify what may survive without widening into redesign.

Its job is narrower than audit closure.

It supports:

- seam-level salvage visibility
- object-class discipline
- translation posture routing
- resumable Phase A.2 bookkeeping

## Scope Boundary

This surface is limited to V1 translation mapping support under `Root/README/Formation/Mapping/V1_Translation/`.

It is placed in the formation mapping region because it is a structure-and-placement support surface for translation work, not a root authority note and not a runtime surface.

Live repo state is the authority for current file reality.

This ledger may record:

- bounded seam names
- directly relevant files in scope
- emitted objects named at seam level
- object class
- seam classification
- translation bucket
- bounded notes and non-claims

This ledger must not silently widen into:

- broad repo classification
- V1 redesign
- V1 expansion
- chain-map construction
- evaluation closure
- retention or promotion decisions

## Classification Vocabulary

### Object Class

Allowed values:

- `Primary object`
- `Derived support object`
- `Interpretive object`

### Seam Classification

Allowed values:

- `Intact`
- `Mixed but recoverable`
- `Structurally unsound`

### Translation Bucket

Allowed values:

- `Carry forward`
- `Quarantine`
- `Re-derive`

## Ledger Table

| Seam | Files in Scope | Emitted Objects | Object Class | Seam Classification | Translation Bucket | Notes / Non-Claims |
| --- | --- | --- | --- | --- | --- | --- |
| `Input boundary seam` | `DME_Version_1/operators/sampler/AnalogSamplerOp.js`; `DME_Version_1/runtime/DoorOneExecutiveLane.js` | lawful raw ingest input shape, either passed through directly or emitted as sampler-flush `ingest_input` then normalized to `raw_input` | `Primary object` | `Intact` | `Carry forward` | Admits raw sample/value streams at sampler level and prebuilt raw ingest objects or ok sampler-flush results at executive normalization; transforms only by buffering/timestamping/chunking into IngestOp-ready input, then copy-normalizing to one lawful raw input shape; preserves sample order, sample values, timestamps, `source_id`, `channel`, `modality`, `clock_policy_id`, optional `stream_id`, and sampler metadata/ingest policy receipts; memory posture not reached here; sampler remains a pre-ingest adapter rather than artifact authority, and the seam does not claim pipeline artifact status, canon, promotion, ontology, truth, reordered samples, or content transformation. |
| `Executive handoff seam` | `DME_Version_1/runtime/DoorOneExecutiveLane.js` | validated `raw_input` handed to one `DoorOneOrchestrator.runBatch()` call | `Primary object` | `Intact` | `Carry forward` | Admits either prebuilt raw ingest input or ok sampler-flush `ingest_input`; transforms only by copy-normalization and raw-shape validation before handoff; preserves `timestamps`, `values`, `stream_id`, `source_id`, `channel`, `modality`, and `clock_policy_id`; memory posture not reached here; does not attach support/interpretive overlays or claim canon, promotion, truth, completed-run mutation, or bypass authority. |
| `3a - primary alignment/window seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/operators/ingest/IngestOp.js`; `DME_Version_1/operators/clock/ClockAlignOp.js`; `DME_Version_1/operators/window/WindowOp.js` | primary artifacts `A1` `ClockStreamChunk`, `A2` `AlignedStreamChunk`, and `W1` `WindowFrame[]` | `Primary object` | `Intact` | `Carry forward` | Admits validated `raw_input` from the executive handoff seam; transforms it by deterministic ingest chunking into `A1`, deterministic clock-grid alignment into `A2`, and deterministic fixed-schedule windowing into `W1[]`. Invariants remain primary-only throughout: `stream_id` is preserved once established, raw source order and values are preserved exactly in `A1`, `ClockAlignOp` records rather than hides gap/drift handling while conserving stream identity, and each `W1` preserves the exact aligned slice before taper alongside the windowed samples. Provenance remains reconstructable through `A1.provenance.stream_id_resolution`, then `A2.provenance.input_refs`, then `W1.provenance.input_refs`, plus preserved `clock_policy_id`, `grid_policy_id`, `window_policy_id`, `window_id`, and grid/time coordinates. Memory posture is not reached here; `SegmentTracker` initialization in the orchestrator is runtime setup, not a seam-emitted support object. No object acted above class. The seam does not claim transform/compress/anomaly/merge/query/substrate authority, memory closure, canon, promotion, ontology, truth, reordered source samples, or interpretive meaning. |
| `3b - primary compression/novelty commit seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/operators/transform/TransformOp.js`; `DME_Version_1/operators/compress/CompressOp.js`; `DME_Version_1/operators/anomaly/AnomalyOp.js`; `DME_Version_1/operators/trajectory/SegmentTracker.js`; `DME_Version_1/operators/substrate/MemorySubstrate.js` | primary `H1` `HarmonicState`; optional support `An` `AnomalyReport`; optional support `SegmentTransition`; subordinate substrate commit of immutable `H1` into trajectory/index paths | `Primary object` | `Intact` | `Carry forward` | Admits one `W1` plus current segment context from `SegmentTracker`, and on non-baseline windows also admits the current baseline `H1` for bounded anomaly comparison. Transforms `W1 -> S1 -> H1`, then optionally compares current `H1` against the baseline `H1` to emit an `AnomalyReport`, and finally commits the already-produced `H1` through the first primary/support touchpoint at `MemorySubstrate.commit(...)`; if the anomaly gate triggers, `SegmentTracker.observe(...)` emits a `SegmentTransition` for the next segment boundary. Class split remains readable: `H1` stays a primary artifact, while `AnomalyReport`, `SegmentTransition`, and substrate/trajectory effects remain subordinate support observation/bookkeeping rather than new authority objects. Invariants remain explicit across the seam: `CompressOp` requires rather than fabricates `segment_id`, `AnomalyOp` does not mutate artifacts and limits itself to structural deviation evidence, `MemorySubstrate` stores immutable copies and does not mint pipeline artifacts, and segment advancement occurs only after the current `H1` has been compressed and committed. Provenance remains reconstructable through `W1 -> S1 -> H1` lineage, `H1.provenance.input_refs`, preserved policy chain, `receipts.provenance_anchor.source_window_ids`, anomaly `input_refs` to current and baseline `H1`, and substrate legitimacy checks that reject broken lineage. Memory posture reaches the first runtime support touchpoint here, but not lawful memory closure: the seam stores and indexes already-produced `H1` state under structural/runtime memory language without promoting canon, truth, identity, or memory authority. No object acted above class. The seam does not claim merge/reconstruct/query/basin authority, canon promotion, continuity verdict, identity verdict, semantic cause, review closure, or memory substance beyond bounded structural/support commitment. |
| `3c - merge/reconstruct seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/operators/merge/MergeOp.js`; `DME_Version_1/operators/reconstruct/ReconstructOp.js`; `DME_Version_1/operators/substrate/MemorySubstrate.js` | primary `M1` `MergedState[]`; optional replay/audit `A3` `ReconstructedChunk`; subordinate substrate commit of immutable `M1` into storage/index paths | `Primary object` | `Mixed but recoverable` | `Re-derive` | Admits committed `H1` states grouped by `segment_id` for pairwise merge, then admits the first available `M1` or fallback `H1` as the reconstruction target. Transforms those primary states by deterministic phase-aligned merge into `M1[]`, commits each emitted `M1` through `MemorySubstrate.commit(...)`, and optionally reconstructs one replay chunk `A3` from the first `M1` or fallback `H1` without feeding that replay output back into the pipeline. Class split remains readable but no longer singular: `M1` stays a primary continuation artifact with explicit merge receipts, while `A3` is explicitly replay/audit/visualization-only and non-authoritative; substrate-side state is support-adjacent here because commit validates/stores the already-emitted `M1` but does not steer merge or reconstruction class. Provenance remains reconstructable through `M1.receipts.merge.merged_from`, `merge_record.inputs`, `M1.provenance.input_refs`, preserved policy chain, and `A3.reconstruct_receipt.source_artifact_ids` / `source_artifact_class` plus `A3.provenance.input_refs`. Memory posture remains below lawful closure: merge produces structural consolidation evidence and `M1` is committed into runtime memory support paths, but neither merge nor reconstruct closes memory, identity, continuity, canon, or review authority. No object acted above class. The seam is mixed because one bounded seam emits both a primary continuation artifact (`M1`) and an explicitly derived replay artifact (`A3`), even though both remain subordinate to their written non-claims. The seam does not claim query/basin authority, truth, same-object verdict, memory claim, identity claim, semantic enhancement, canon promotion, or that `A3` becomes a new structural/runtime authority surface. |
| `3d - substrate basin/query seam` | `DME_Version_1/operators/substrate/MemorySubstrate.js`; `DME_Version_1/operators/basin/BasinOp.js`; `DME_Version_1/operators/query/QueryOp.js` | support `BN` `BasinSet` from `rebuildBasins()` and support/tooling `Q` `QueryResult` from `queryStates()` | `Derived support object` | `Intact` | `Carry forward` | Admits already committed `H1` / `M1` substrate state only: `rebuildBasins()` takes one segment's committed states, and `queryStates()` builds a safe-copy corpus from committed states with optional `segment_id`, `stream_id`, or `artifact_class` filters before delegating to `QueryOp`. Transforms are support-only and read-side: BasinOp deterministically clusters one segment into `BasinSet` / `BasinState` outputs and back-fills trajectory basin assignments, while QueryOp deterministically emits a `Q` recognition/retrieval snapshot over the filtered corpus without mutating stored states. Invariants remain explicit throughout: committed artifacts are not modified, reads are over immutable copies, basin/query outputs are observational/tooling surfaces rather than authoritative pipeline artifacts, and scope/filtering is retrieval discipline rather than ontological classification. Provenance remains reconstructable through `BasinSet.provenance.input_refs` listing contributing state ids, `BasinSet.receipts` counts/policy id, `QueryResult.provenance.input_refs` / `consulted_refs`, query receipts, query class, claim ceiling, and explicit non-claims. Memory posture remains runtime support only: substrate organization, basin assignment, and query retrieval operate over stored state but do not close memory, identity, continuity, truth, or canon authority. No object acted above class. The seam does not claim attractor truth, normality classification, future prediction, same-object verdict, continuity verdict, memory claim, identity claim, symbolic interpretation, canon promotion, or mutation of committed artifacts. |
| `Result assembly seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/runtime/TrajectoryInterpretationReport.js`; `DME_Version_1/runtime/AttentionMemoryReport.js` | composite `DoorOneResult` carrying `artifacts`, `substrate`, `summaries`, `semantic_overlay`, `interpretation`, `audit`, plus empty `readiness_overlay` and `review_overlay` | `Derived support object` | `Mixed but recoverable` | `Re-derive` | Class split at emission: primary `artifacts` (`a1`, `a2`, `h1s`, `m1s`, `a3`, `q`, `anomaly_reports`, `basin_sets`); support `substrate`, `summaries`, `audit`; interpretive `semantic_overlay.trajectory`, `semantic_overlay.attention_memory`, and compatibility alias `interpretation`; provenance/evidence remain visible through section labels, `generated_from`, `evidence_refs`, and explicit non-claims; memory posture does not close here beyond bounded candidate/support overlay language; mixed because primary/support/interpretive surfaces are co-packaged in one result and interpretive overlays are duplicated under `interpretation`; does not claim canon, prediction, ontology, identity verdict, runtime memory substance, retention substance, or readiness closure. |
| `Cross-run accumulation seam` | `DME_Version_1/runtime/CrossRunSession.js`; `DME_Version_1/runtime/CrossRunDynamicsReport.js` | `runtime:cross_run_dynamics_report` carrying `per_run_signatures`, `pairwise_comparisons`, `reproducibility_summary`, `dynamics_flags`, and `notes` | `Derived support object` | `Mixed but recoverable` | `Re-derive` | Admits only successful `DoorOneOrchestrator` results that already include `interpretation.trajectory` and `interpretation.attention_memory`; transforms stored run results into an evidence-first comparative support report; emitted support artifacts are the cross-run report, per-run signatures, pairwise comparisons, and reproducibility summary; interpretive fields remain subordinate through `comparison_posture`, `claim_ceiling`, explicit non-claims, and `semantic_summary.subordinate_to_evidence`; provenance remains reconstructable through `run_labels`, `stream_ids`, per-run evidence fields, and pairwise deltas; memory posture does not close here and support surfaces do not become identity or memory authority; mixed because session admission depends on inherited interpretive overlays and per-run signatures still carry attention/memory candidate labels, even while the seam narrows them back under structural/support evidence and rejects same-object, identity, memory, promotion, canon, and truth claims. |
| `Workbench integration seam` | `DME_Version_1/runtime/DoorOneWorkbench.js`; `DME_Version_1/runtime/PromotionReadinessReport.js`; `DME_Version_1/runtime/CanonCandidateDossier.js`; `DME_Version_1/operators/consensus/ConsensusOp.js` | `runtime:door_one_workbench` carrying `runtime`, `semantic_overlay`, `readiness_overlay`, `review_overlay`, `cross_run`, `compatibility_aliases`, plus mirrored top-level `interpretation`, `promotion_readiness`, `canon_candidate`, and `consensus_review` bundles | `Derived support object` | `Mixed but recoverable` | `Re-derive` | Class split at emission: primary/support `runtime` section preserves `artifacts`, `substrate`, `summaries`, and `audit`; interpretive/read-side overlays include `semantic_overlay`, `readiness_overlay`, and `review_overlay`; optional `ConsensusOp` review remains an explicit review-boundary result, not canon. Provenance stays reconstructable through `generated_from`, `scope`, copied runtime sections, cross-run context, dossier `source_refs` / `evidence_bundle` / receipts, and explicit routing notes. Memory posture does not close here and support surfaces do not lawfully become identity or memory authority. Mixed because packaging becomes stronger exposure: readiness and canon-review surfaces are attached inside one inspection object, `ConsensusOp` is invoked from a runtime helper, and compatibility aliases are mirrored at top level for downstream consumers. No single emitted object clearly overran its class in code, but the seam increases overread risk despite explicit non-claims that reject canon, promotion, truth, ontology, C1 minting, and implicit review closure. |
| `7a - direct terminal HUD consumer seam` | `DME_Version_1/hud/DoorOneHUD.js`; `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/runtime/DoorOneWorkbench.js` | deterministic terminal HUD string for runtime result or workbench inspection, plus bounded failure string on invalid input | `Interpretive object` | `Intact` | `Carry forward` | Admits lawful `DoorOneResult` or `runtime:door_one_workbench` shapes exactly as labeled upstream; transforms only by copying selected sections into a local `view` and formatting them into a deterministic display string; emitted class split remains explicit in presentation: primary/support runtime sections stay under `runtime`, interpretive overlays stay under `interpretation`, and workbench-only review surfaces stay labeled as review-only; provenance remains reconstructable through visible section headers, field names, and direct reuse of upstream ids/counts/status fields; memory posture not reached here; seam functions as a direct read-side display consumer and formatting-only interpretive seam, not an authority seam; no object acted above class, and the seam explicitly rejects canon, promotion, ontology, true-basin language, recomputation of authority, and C1 minting by display. |
| `7b - structural HUD projection seam` | `DME_Version_1/hud/DoorOneStructuralMemoryHudModel.js`; `DME_Version_1/hud/DoorOneStructuralMemoryHud.jsx`; `DME_Version_1/hud/workbenchLayerReaders.js`; `DME_Version_1/runtime/DoorOneWorkbench.js` | structural HUD projection model carrying `provenance`, `run_health`, `runtime_evidence`, `audit`, `layer_sources`, `structure`, `review`, `neighborhoods`, `transitions`, `segmentTransitions`, and optional cross-run summary, then rendered React inspection panes over that model | `Interpretive object` | `Mixed but recoverable` | `Re-derive` | Admits `runtime:door_one_workbench` plus optional cross-run report; transforms by alias-reading overlay sections, collapsing multiple layers into one HUD model, synthesizing projection-side neighborhood ids/labels (`NBHD-*` fallback), ranking dominant neighborhood/transition summaries, and rendering read-side panes from that projection model. Provenance remains partially reconstructable because raw neighborhood/source evidence, `layer_sources`, and review counts are preserved, but traceability weakens through `firstDefined(...)` fallback chains in the reader/model path and through projection-only labels (`structure`, `review`, `run_health`). No memory posture closes here and the seam repeatedly states read-side/non-authority posture. No single object clearly acts above class, but the seam is mixed because it fuses primary/support/interpretive surfaces into a new projection object and relies on alias fallback that can weaken direct source identity. This row excludes the separate `7c` consultation attachment surface. |
| `7c - consultation attachment seam` | `DME_Version_1/hud/DoorOneStructuralMemoryHud.jsx`; `DME_Version_1/hud/DoorOneStructuralMemoryHudDemo.jsx`; `DME_Version_1/out_canon/c1_first_consultation_result.json`; `DME_Version_1/operators/consensus/consultC1.js` | Plane 5 consultation-strip panel over a precomputed consultation result record, attached alongside the structural HUD as a separate read-side section | `Interpretive object` | `Mixed but recoverable` | `Quarantine` | Admits separate precomputed canon-adjacent consultation material from `out_canon/` via demo import and passes it into `C1ConsultationStrip` as `c1ConsultationResult`, rather than consuming ordinary V1 runtime/workbench output. Transforms only by formatting consultation fields into a separate panel with explicit source footer, generated timestamp, and repeated read-side/non-authority notes. Provenance remains visible through the dedicated Plane 5 title, `source: out_canon/`, `generated_at`, and preserved consultation field names. No memory posture or canon closure is reached here. No single object acts above class, but the seam is mixed because Door Two consultation content is attached by proximity inside a V1 read-side surface, which raises quiet-authority risk even though the code explicitly rejects live C1 access, canon activation, mutation, and authority status. This row covers the attachment seam only and does not widen into broader Door Two audit. |

## Row-Entry Rule

Add one row only after a seam has been explicitly named and bounded strongly enough to support a real audit pass.

Each audited seam gets exactly one row.

Use the row to record:

- the seam name under audit
- only the files directly in scope for that seam pass
- the actual emitted objects claimed at that seam
- the object class posture needed for that seam reading
- exactly one seam classification value
- exactly one translation bucket value
- only bounded notes or non-claims that prevent overreading

Do not add speculative rows for unaudited seams.

Do not use this ledger to mark broad V1 regions as sound.

## Update Rule

Update an existing row only when seam audit reality changes in a bounded way, such as:

- files in scope becoming more exact
- emitted objects becoming more exact
- class posture becoming clearer
- seam classification changing after deeper audit
- translation bucket changing after clearer seam evidence
- notes needing a stricter non-claim

If the seam boundary itself changes materially, stop and re-bound the seam before updating the row.

Keep edits compact enough that the ledger stays quickly scannable.

## Non-Claims

This document:

- does not grant authority to V1
- does not itself classify unaudited seams as sound
- does not replace the chain map
- does not perform evaluation closure
- does not decide retention or promotion posture
- does not widen into redesign

## One-Line Summary

The V1 salvage ledger is the compact formation mapping surface that records one bounded row per audited seam so V1 -> V2 translation can proceed without authority inflation or scope drift.
