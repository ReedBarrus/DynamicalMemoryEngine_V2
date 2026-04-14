# Dynamical Memory Engine - V1 Chain Map

## Status

This document defines the compact V1 chain-map surface for Phase A.3 of the V1 -> V2 translation pass.

It is a supporting formation mapping note.

It exists to keep the visible V1 load-bearing operator/runtime path:

- compact
- legible
- operational
- resumable

It does not grant authority to V1.

It stays subordinate to the active root constraint, formation, decision, evaluation, and memory authorities, plus:

- `README.WorkflowFieldPrimitives.md`
- `README.V1toV2.TranslationTodo.md`

## Purpose

This map exists only to expose the smallest readable end-to-end V1 operator/runtime path currently visible from repo reality so later translation audit passes know where to enter and where the first class-touch seams appear.

Its job is narrower than seam audit closure.

It supports:

- one compact end-to-end chain view
- later seam-by-seam audit placement
- first-touchpoint marking
- first-cutpoint marking

## Scope Boundary

This surface is limited to V1 translation mapping support under `Root/README/Formation/Mapping/V1_Translation/`.

It is placed in the formation mapping region because it is a structural mapping surface for translation work, not a root authority note and not a runtime surface.

Live repo state is the authority for current file reality.

This map shows only the minimum load-bearing path currently visible across:

- raw ingest entry
- executive/runtime handoff
- primary operator flow
- result assembly
- cross-run accumulation
- workbench integration
- first read-side consumers

This map must not silently widen into:

- broad repo inventory
- salvage-ledger population
- seam audit closure
- redesign
- test writing
- memory authority

## Reading Rule

Read this map in order from seam `1` to seam `7c`.

Each seam appears once at the coarsest lawful level that still helps later audit work.

If a deeper internal edge exists inside a listed seam, that deeper edge belongs to later audit passes rather than this compact map.

## Declared Path

`raw ingest input / AnalogSamplerOp flush -> DoorOneExecutiveLane -> DoorOneOrchestrator primary operator spine -> DoorOneOrchestrator result assembly -> CrossRunSession -> DoorOneWorkbench -> DoorOneHUD and DoorOneStructuralMemoryHud projection -> optional consultation strip attachment`

## End-to-End Chain Map

| Order | Seam | Files / Regions | Emitted / Passed Surface | Surface Class Touch | Current Marker |
| --- | --- | --- | --- | --- | --- |
| 1 | `Input boundary seam` | `DME_Version_1/operators/sampler/AnalogSamplerOp.js`; `DME_Version_1/runtime/DoorOneExecutiveLane.js` | Raw ingest input or sampler flush normalized to one lawful raw input shape | Primary only | `load-bearing` |
| 2 | `Executive handoff seam` | `DME_Version_1/runtime/DoorOneExecutiveLane.js` | Validated raw input handed to one single-run orchestration call | Primary only | `load-bearing` |
| 3a | `Primary alignment/window seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/operators/{ingest,clock,window}/` | `ingestAndAlign()` and `window()` emit `A1`, `A2`, `W1[]` | Primary only | `load-bearing` |
| 3b | `Primary compression/novelty commit seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/operators/{transform,compress,anomaly,trajectory,substrate}/` | `processWindow()` emits `H1`, optional anomaly report, and optional segment transition while committing into substrate support paths | Primary + support | `load-bearing`; `touchpoint: primary/support` |
| 3c | `Merge/reconstruct seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/operators/{merge,reconstruct}/` | Primary portions of `finalise()` emit `M1[]` and optional `A3` | Primary only | `load-bearing` |
| 3d | `Substrate basin/query seam` | `DME_Version_1/operators/substrate/MemorySubstrate.js`; `DME_Version_1/operators/{basin,query}/` | `rebuildBasins()` and `queryStates()` emit basin and query support surfaces only | Support only | `load-bearing` |
| 4 | `Result assembly seam` | `DME_Version_1/runtime/DoorOneOrchestrator.js`; `DME_Version_1/runtime/TrajectoryInterpretationReport.js`; `DME_Version_1/runtime/AttentionMemoryReport.js` | One composite Door One result carrying `artifacts`, `substrate`, `summaries`, `semantic_overlay`, `interpretation`, and `audit` | Primary + support + interpretive | `load-bearing`; `touchpoint: support/interpretive`; `touchpoint: primary/interpretive` |
| 5 | `Cross-run accumulation seam` | `DME_Version_1/runtime/CrossRunSession.js`; `DME_Version_1/runtime/CrossRunDynamicsReport.js` | Observational cross-run report over stored run results | Support-led seam consuming inherited mixed result input | `load-bearing` |
| 6 | `Workbench integration seam` | `DME_Version_1/runtime/DoorOneWorkbench.js`; `DME_Version_1/runtime/PromotionReadinessReport.js`; `DME_Version_1/runtime/CanonCandidateDossier.js`; `DME_Version_1/operators/consensus/ConsensusOp.js` | Workbench object carrying `runtime`, `semantic_overlay`, `readiness_overlay`, `review_overlay`, `cross_run`, and compatibility aliases | Primary + support + interpretive | `load-bearing` |
| 7a | `Direct terminal HUD consumer seam` | `DME_Version_1/hud/DoorOneHUD.js` | Deterministic terminal rendering of lawful result or workbench shapes | Interpretive/read-side consumption of already assembled surfaces | `load-bearing` |
| 7b | `Structural HUD projection seam` | `DME_Version_1/hud/DoorOneStructuralMemoryHudModel.js`; `DME_Version_1/hud/DoorOneStructuralMemoryHud.jsx`; `DME_Version_1/hud/workbenchLayerReaders.js` | Browser projection model and structural HUD view over workbench runtime, overlay, readiness, and review layers | Interpretive/read-side projection over already separated workbench layers | `load-bearing` |
| 7c | `Optional consultation attachment seam` | `DME_Version_1/hud/DoorOneStructuralMemoryHud.jsx`; `DME_Version_1/hud/DoorOneStructuralMemoryHudDemo.jsx`; `DME_Version_1/out_canon/` | Pre-computed Door Two / canon-adjacent consultation result record attached to the structural HUD as a read-side strip | Interpretive/read-side attachment below canon | `optional attachment confirmed` |

## Touchpoint Markers

Current best-known touchpoints from repo reality are:

- `touchpoint: primary/support` -> seam `3b`, where `processWindow()` first commits `H1` state into substrate and segment-tracking support paths
- `touchpoint: support/interpretive` -> seam `4`, where substrate and summary support surfaces first co-reside with `semantic_overlay` and `interpretation`
- `touchpoint: primary/interpretive` -> seam `4`, where pipeline `artifacts` first co-reside with interpretive overlays in the assembled runtime result

Seam `3` is intentionally split because the primary corridor contains more than one auditable seam in practice:

- seam `3a` covers admission-aligned primary runtime shaping through `A1`, `A2`, and `W1[]`
- seam `3b` isolates the first primary/support commit seam at `processWindow()`
- seam `3c` isolates late primary merge and reconstruction output
- seam `3d` isolates basin/query support-surface emission from primary artifact production

Seam `7` is intentionally split because the consumer region is not one single seam in practice:

- seam `7a` consumes lawful result or workbench shapes directly in terminal form
- seam `7b` builds a separate structural projection model from workbench layers through narrow reader helpers
- seam `7c` attaches pre-computed consultation material from `out_canon/` and is not just ordinary workbench display

## First Intact / First Suspected Mixed Markers

These cut markers are current best-known mapping markers only, not audit closure.

- Current best-known intact seam: seam `2` `Executive handoff seam`
  `DoorOneExecutiveLane` normalizes allowed input shapes, validates the raw ingest contract, and hands one lawful raw shape into `DoorOneOrchestrator` without attaching interpretation, review, or promotion surfaces.
- Current best-known suspected mixed seam: seam `4` `Result assembly seam`
  `DoorOneOrchestrator` result assembly returns primary artifacts, substrate/summaries support surfaces, and interpretive overlays in one composite result object, so class-contact begins there even though the sections are explicitly labeled.

## Boundary Note

This map claims only that the chain above is the smallest readable load-bearing V1 operator/runtime path currently visible from repo reality.

It does not yet claim:

- that every listed seam is sound
- that the internal class boundaries are fully clean
- that the cut markers are audit-final
- that later support or review seams should be retained as-is

Later audit is still required for:

- seam-by-seam class verification
- salvage-ledger row population
- exact translation bucket decisions
- exact retention or re-derivation posture
- whether seam `7c` should remain adjacent to the structural HUD or move behind a stricter downstream boundary later

## Non-Claims

This document:

- does not certify any seam as sound beyond current mapping knowledge
- does not replace seam audit
- does not replace the salvage ledger
- does not grant authority to V1
- does not decide translation bucket by itself
- does not widen into redesign

## Next-Use Rule

Use this map only to choose the next bounded audit seam and to keep later salvage-ledger entries anchored to one readable load-bearing path.

Update this map only when repo reality changes the visible load-bearing chain, the first-touch markers move, or the current best-known intact or suspected-mixed cutpoints change.

## One-Line Summary

The V1 chain map is the compact formation mapping surface that fixes one readable end-to-end load-bearing path, marks the first class-touch seams, and identifies the current best-known intact and suspected-mixed cutpoints without pretending audit closure.
