# Repo Structure, README-Bank, and Test-Placement Audit

## Packet Metadata

- packet_id: `PKT-REPO-AUDIT-001`
- task_title: `Repo structure, README-bank, and test-placement audit`
- audit_date: `2026-04-06`
- result_status: `complete`
- repo_snapshot_basis: `local repo topology and checked paths in current workspace`
- active_door: `Door One`
- audit_scope: `repo topology / README-bank / test placement`
- explicit_non_claims:
  - no file moves are approved by this report
  - no runtime semantics were changed
  - no canon or Door promotion is implied
  - no architectural redesign is proposed here

## Summary of Change

This packet adds one cleanup-facing audit report that classifies the current repo structure, README-bank, and tests by present function, placement strength, and likely cleanup routing value.

The repo is broadly legible at the top level, but three cleanup pressures are now concrete:

1. `tests/` is only partially grouped by verification function; 41 JS tests remain flat at root and `tests/door_two/` is a rhetorical grouping rather than a functional one.
2. `README/Cleanup/` and `README/Transformer/LanguageKernel/` are coherent real surfaces, but they are under-accounted in the placement constitution summary.
3. A few path/accounting seams show drift, especially `test_signal/`, `dist/`, standalone workflow notes in `README/`, and the `consultC1` path assumptions in one Door Two test.

## Files Read

Directly read:

- `README.RepoPlacementConstitution.md`
- `README.WorkflowContract.md`
- `README.md`
- `README/Core/README.AddressRegistryModel.md`
- `README/Cleanup/README.CleanupFolderIndex.md`
- `README/Cleanup/README.PerturbationSettlementSeam.md`
- `README/Transformer/LanguageKernel/README.LanguageKernelContract.v0.md`
- `README/Transformer/LanguageKernel/README.LanguageKernelBenchmarkContract.v0.md`
- `package.json`
- `operators/consensus/consultC1.js`
- `tests/test_door_one_contracts.js`
- `tests/test_door_one_hud.js`
- `tests/test_cross_run_session.js`
- `tests/workflow/test_replay_reconstruction_closure_gate.js`
- `tests/reconstruction/test_provenance_reconstruction_pipeline.js`
- `tests/adapters/test_ingest_adapter_seam.js`
- `tests/door_two/test_door_one_canon_handoff.js`
- `tests/door_two/test_semantic_oscilloscope_app_surface.js`

Inventoried without modification:

- top-level directory tree
- full `README/` tree: `121` files
- full `tests/` tree: `77` JS files
- `Transformer/`, `canon/`, `packets/`, `fixtures/`, `dist/`, and generated-output folders

## Repo Snapshot

- top-level directories observed: `22`
- README-bank observed: `README/` plus `8` named subzones and `2` extra live subzones (`Cleanup`, `Transformer`)
- tests observed:
  - `41` JS files flat in `tests/`
  - `2` JS files in `tests/adapters/`
  - `32` JS files in `tests/door_two/`
  - `1` JS file in `tests/reconstruction/`
  - `1` JS file in `tests/workflow/`

## Top-Level Zone Classification

| path | current_zone | object_class | status | door_scope | function_group | placement_issue | proposed_zone | move_confidence | duplication_risk | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `README.MasterConstitution.md`, `README.WorkflowContract.md`, `README.ConstitutionAppendix.md`, `README.RepoPlacementConstitution.md`, `README.CollaboratorTiers.md`, `README.md`, `package.json`, `vite.config.js`, `app.html`, `demo.html`, `execution.html`, `index.html` | `root/` | governance_and_entry_surface | active | cross-door | constitutional posture and entry metadata | none | `root/` | high | low | Matches placement law overall; some internal doc references still use underscore-style legacy names, which is normalization debt rather than a move issue. |
| `README/` | `README/` | README_bank | active | cross-door | supporting notes and accounting bank | weak | `README/` | high | low | Folder is real and coherent, but its live subzones now exceed the older compact summary in the placement constitution. |
| `operators/` | `operators/` | runtime_operator_code | active | door_one | deterministic operators | none | `operators/` | high | low | Clean match to declared repo law. |
| `runtime/` | `runtime/` | runtime_coordination_code | active | door_one | orchestration and session/report coordination | none | `runtime/` | high | low | Clean match to declared repo law. |
| `hud/` | `hud/` | readside_surface_code | active | door_one | HUD, app shell, replay/request shaping, adapters | none | `hud/` | high | low | Clean match to declared repo law. |
| `scripts/` | `scripts/` | runner_wrapper_code | active | cross-door | thin executable wrappers and probe runners | none | `scripts/` | high | low | Clean match; several scripts still hard-code `test_signal/` paths, which makes fixture moves non-trivial. |
| `tests/` | `tests/` | verification_bank | active | cross-door | contracts, reports, probes, reconstruction, read-side checks | strong | `tests/` with deeper functional subgroups | high | medium | Flat root grouping and rhetorical `door_two/` grouping now obscure verification purpose. |
| `fixtures/` | `fixtures/` | reusable_test_fixture_code | active | door_one | shared JS fixture helpers | none | `fixtures/` | high | low | Clean match, but it currently holds JS fixture code only, not the large recorded-audio fixture set. |
| `test_signal/` | `root/` | recorded_audio_fixture_bank | active | door_one | recorded and synthetic WAV cohorts used across scripts/tests/docs | strong | `fixtures/test_signal/` or `fixtures/recorded_audio/` | medium | low | Functionally this is a fixture zone, but many tests, scripts, HUD helpers, and notes pin the current path directly. |
| `packets/` | `packets/` | review_packet_bank | supporting | cross-door | bounded packet materials | none | `packets/` | high | medium | Constitutionally expected; version-paired packet files suggest explicit lineage/supersession accounting would help. |
| `canon/` | `canon/` | canon_object_bank | experimental | door_two | live C1 object storage | none | `canon/` | high | low | Current folder only holds the JSON C1 object. The consultation helper itself lives in `operators/consensus/`, which is fine, but path assumptions around it have drifted in at least one test/header. |
| `Transformer/` | `root/` | experimental_overlay_code_bank | experimental | cross-door | Language Kernel code, schemas, examples, benchmarks, outputs | weak | keep current pending dedicated constitution refresh | low | low | Real experimental seam with both code and docs; under-accounted in the higher-level placement summary, but not obviously misfiled enough to move blindly. |
| `out/`, `out_canon/`, `out_experiments/`, `out_live/`, `out_provenance/`, `out_substrate/`, `out_workbench/` | `out*/` | generated_output_bank | supporting | cross-door | generated outputs only | none | `out/` and `out_*` | high | low | Matches placement law. |
| `dist/` | `root/` | build_output_bank | supporting | unclear | Vite build artifact output | strong | `out/dist/` or untracked build output | high | medium | Function overlaps with generated-output zones already declared elsewhere. |
| `.github/` | `root hidden` | automation_config | supporting | cross-door | repo automation | weak | keep current | high | low | Standard GitHub infra surface; not named in the constitution, but not a cleanup priority. |
| `.codex/` | `root hidden` | local_agent_tooling | supporting | unclear | local agent/tooling state | weak | keep current or ignore in repo-law cleanup | low | low | Local tooling seam, not meaningful architecture or runtime evidence. |
| `node_modules/` | `root/` | dependency_cache | supporting | unclear | installed dependencies | weak | keep local/untracked | high | low | Environment artifact, not repo-structure meaning. |

## README-Bank Classification

| path | current_zone | object_class | status | door_scope | function_group | placement_issue | proposed_zone | move_confidence | duplication_risk | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `README/Core/` | `README/Core/` | core_accounting_bank | active | door_one | active Door One accounting, boundary, retention, support notes | none | `README/Core/` | high | low | This is the most load-bearing README zone and matches placement law well. |
| `README/Core/DynamicalTaxonomy/` | `README/Core/` | taxonomy_bank | supporting | cross-door | query/claim/memory/coherence taxonomies | none | `README/Core/DynamicalTaxonomy/` | high | low | Coherent sub-bank; no immediate placement issue. |
| `README/Diagnostics/` | `README/Diagnostics/` | diagnostic_note_bank | supporting | door_one | probes, distortion/fidelity diagnostics, investigative notes | none | `README/Diagnostics/` | high | low | Clean match to constitution. |
| `README/Diagnostics/AppSurface/` | `README/Diagnostics/` | app_surface_diagnostic_bank | supporting | cross-door | viewer/app-surface contracts and transition notes | weak | keep current | medium | low | Coherent, but app-surface notes could also justify a dedicated subzone later if this family keeps growing. |
| `README/Experiments/` | `README/Experiments/` | experiment_note_bank | supporting | door_one | experiment framing and replay-scope notes | none | `README/Experiments/` | high | low | Clean match to constitution. |
| `README/ResultInterpretation/` | `README/ResultInterpretation/` | interpretation_note_bank | supporting | door_one | Door One capstones and result writeups | none | `README/ResultInterpretation/` | high | low | Clean match to constitution. |
| `README/ResultInterpretation/door_two/` | `README/ResultInterpretation/door_two/` | consultation_record_bank | experimental | door_two | consultation records and comparative read-side outcomes | none | `README/ResultInterpretation/door_two/` | high | low | Folder function is coherent; future cleanup should preserve “record” vs “roadmap” distinction. |
| `README/Roadmap/` | `README/Roadmap/` | roadmap_bank | supporting | cross-door | forward architecture and future-door notes | none | `README/Roadmap/` | high | low | Clean match to constitution. |
| `README/Roadmap/door_two/` | `README/Roadmap/door_two/` | door_two_plan_bank | experimental | door_two | C1 plans, memos, defer/review notes, resonance supports | weak | keep current with later internal subgrouping | medium | medium | Functionally coherent, but mixes plan, memo, review, and supersession records in one zone. |
| `README/Roadmap/demo/` | `README/Roadmap/demo/` | demo_plan_bank | supporting | cross-door | demo-facing app-surface planning | weak | keep current | medium | low | Acceptable as roadmap/demo material; could later align with app-surface note grouping if demo notes expand. |
| `README/WorkflowMechanization/` | `README/WorkflowMechanization/` | workflow_note_bank | supporting | cross-door | packet law, closure gates, identity law, workflow support | none | `README/WorkflowMechanization/` | high | low | Clean match to constitution. |
| `README/Cleanup/` | `README/Cleanup/` | cleanup_backlog_bank | supporting | door_one | cleanup backlog, placement/accounting gaps, conceptual bottlenecks | weak | keep current and later formalize in placement constitution | low | medium | Real live subzone with coherent cleanup purpose, but not named in the canonical README-subzone summary. |
| `README/Transformer/LanguageKernel/` | `README/Transformer/LanguageKernel/` | language_kernel_doc_bank | experimental | cross-door | Language Kernel contract, benchmark contract, schemas | weak | keep current pending dedicated repo-zone accounting | low | low | Coherent seam with matching code under `Transformer/LanguageKernel/`; not yet fully harmonized with the higher-level placement summary. |
| `README/GitHub_VSCode_CheatSheet.md` | `README/` root | workflow_tooling_note | supporting | cross-door | local GitHub/VSCode workflow support | strong | `README/WorkflowMechanization/` | high | low | Standalone tooling note currently sits at README-bank root without a primary-responsibility subzone. |

## Test Grouping Classification

| path | current_zone | object_class | status | door_scope | function_group | placement_issue | proposed_zone | move_confidence | duplication_risk | verifies_what | current_grouping | recommended_grouping | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `tests/test_substrate_contracts.js` | `tests/` | contract_suite | active | door_one | substrate core contracts | weak | `tests/runtime/substrate/` | high | low | substrate memory-state contract invariants | flat root test bank | group with runtime/substrate contract tests | Single-purpose contract suite is easy to place more precisely. |
| `tests/test_door_one_orchestrator.js`; `tests/test_door_one_contracts.js`; `tests/test_door_one_anti_bypass_contracts.js` | `tests/` | contract_suite | active | door_one | orchestration and operator contract hardening | strong | `tests/runtime/core/` and `tests/operators/contracts/` | high | low | orchestrator behavior, operator input honesty, anti-bypass/runtime-boundary guarantees | flat root test bank | split by orchestration vs operator contract seam | These are load-bearing and currently discoverable only by filename scanning. |
| `tests/test_anomaly_op_fencing.js`; `tests/test_merge_op_fencing.js`; `tests/test_query_op_query_posture.js`; `tests/test_consensus_op.js` | `tests/` | posture_suite | active | cross-door | operator posture and fencing | strong | `tests/operators/posture/` | high | low | operator-specific boundary, query posture, consensus promotion gating | flat root test bank | group by operator posture/fencing | Good candidates for a single bounded cleanup packet. |
| `tests/adapters/test_ingest_adapter_seam.js`; `tests/test_door_one_ingest_hardening.js`; `tests/test_rms_envelope_adapter.js` | `tests/adapters/` and `tests/` | adapter_suite | active | door_one | ingest and adapter validation | strong | `tests/adapters/` | high | low | ingest payload validation, adapter routing, envelope conversion, ingest hardening | mixed dedicated folder plus flat root | consolidate all adapter tests under `tests/adapters/` | Current placement is partly grouped already. |
| `tests/test_door_one_hud.js`; `tests/test_door_one_structural_memory_hud.js`; `tests/test_door_one_hud_workbench.js`; `tests/test_door_one_executive_lane.js`; `tests/test_door_one_workbench.js` | `tests/` | app_surface_suite | active | door_one | Door One HUD, workbench, and execution surfaces | strong | `tests/hud/door_one/` | high | low | HUD rendering honesty, workbench integration, executive lane surface behavior | flat root test bank | group by Door One read-side surface verification | Clean functional family currently dispersed at root. |
| `tests/adapters/test_hud_demo_tandem_adapter.js` | `tests/adapters/` | adapter_suite | active | cross-door | HUD/demo projection adapter | weak | `tests/hud/adapters/` or `tests/adapters/` | medium | low | tandem projection from one state to HUD/demo surfaces | dedicated adapter folder | keep in adapter family, optionally split HUD adapters later | Not urgent; already legible. |
| `tests/test_cross_run_session.js`; `tests/test_cross_run_dynamics_report.js`; `tests/test_attention_memory_report.js`; `tests/test_trajectory_interpretation_report.js` | `tests/` | report_suite | active | door_one | runtime report/session surfaces | strong | `tests/runtime/reporting/` | high | low | session storage/comparison plus report object behavior | flat root test bank | group by reporting/session seam | These are reporting/runtime tests, not generic root tests. |
| `tests/test_promotion_readiness_report.js`; `tests/test_canon_candidate_dossier.js` | `tests/` | report_suite | experimental | cross-door | readiness and candidate reporting | strong | `tests/reporting/readiness/` | high | medium | bounded readiness/candidate report surfaces below promotion authority | flat root test bank | group as readiness-reporting family | Read-side/reporting placement is clearer than leaving them at root. |
| `tests/test_door_one_live_provenance_retention.js`; `tests/test_door_one_provenance_digest.js`; `tests/test_door_one_pin_packet.js`; `tests/test_door_one_archive_bundle.js` | `tests/` | provenance_suite | active | door_one | provenance, retention, packet pin/archive outputs | strong | `tests/provenance/` | high | low | provenance retention, digest, pinning, archive bundle output seams | flat root test bank | group as provenance/retention family | Clear functional family with strong cleanup value. |
| `tests/reconstruction/test_provenance_reconstruction_pipeline.js` | `tests/reconstruction/` | reconstruction_suite | active | door_one | reconstruction backend | none | `tests/reconstruction/` | high | low | provenance reconstruction backend contract | dedicated reconstruction folder | keep current | Already grouped by function. |
| `tests/workflow/test_replay_reconstruction_closure_gate.js` | `tests/workflow/` | workflow_audit_suite | active | cross-door | mechanization closure-gate audit | weak | `tests/workflow/` or `tests/reconstruction/` | medium | low | closure-gate enforcement across README, runtime backend, and HUD surface | dedicated workflow folder | keep current unless reconstruction audits become a larger family | This is one of the few root-independent audit tests already placed intentionally. |
| `tests/test_active_interaction_zone_probe.js`; `tests/test_boundary_stress_test_probe.js`; `tests/test_directional_flow_probe.js`; `tests/test_basin_phase_ratio_probe.js`; `tests/test_harmonic_placement_resonance_probe.js` | `tests/` | probe_suite | supporting | door_one | diagnostic probes and metric derivations | strong | `tests/probes/diagnostics/` | high | low | diagnostic probe math and structural metric shaping | flat root test bank | group as diagnostic probe family | Probe suites are currently mixed into the same root band as contract tests. |
| `tests/test_continuous_master_phase_probe.js`; `tests/test_continuous_replay_flow_probe.js`; `tests/test_replay_resilience_surface_probe.js`; `tests/test_real_source_replay_probe.js`; `tests/test_structural_transition_probe.js`; `tests/test_tighter_band_real_source_probe.js`; `tests/test_spectral_concentration_probe.js`; `tests/test_passive_multiscale_evaluation.js` | `tests/` | probe_suite | supporting | door_one | replay and real-source experiment probes | strong | `tests/probes/replay_real_source/` | high | low | real-source WAV cohorts, replay flow, resilience, transition, concentration, multiscale evaluation | flat root test bank | group as replay/real-source probe family | Many of these depend directly on `test_signal/` path stability. |
| `tests/test_identity_probe_multiscale.js`; `tests/test_identity_probe_scale_calibrated.js`; `tests/test_basin_identity_diagnostics_calibrated.js` | `tests/` | probe_suite | supporting | door_one | identity and calibration probes | strong | `tests/probes/identity_calibration/` | high | low | multiscale identity and basin calibration probe behavior | flat root test bank | group as identity calibration family | Small, coherent cluster currently hidden at root. |
| `tests/door_two/test_door_one_c1_consultation_strip.js`; `tests/door_two/test_handoff_activation_request_surface.js`; `tests/door_two/test_metalayer_consultation_demo.js` | `tests/door_two/` | consultation_suite | experimental | door_two | consultation and handoff read-side seams | strong | `tests/consultation/` | high | low | consultation strip visibility, activation request surface, demo consultation posture | rhetorical `door_two` folder | group by consultation/handoff function | Functionally coherent; current folder name overstates chronology instead of verification purpose. |
| `tests/door_two/test_door_one_canon_handoff.js` | `tests/door_two/` | consultation_suite | experimental | door_two | C1 consultation helper contract | strong | `tests/consultation/` after path repair | medium | low | fail-closed consultable C1 handoff behavior | rhetorical `door_two` folder | group with consultation tests after import/path cleanup | This file still uses `../canon/consultC1.js` and `../canon/C1_BASELINE_SINE400_001.json` relative assumptions from its current folder, and its header still says `tests/test_door_one_canon_handoff.js`. |
| `tests/door_two/test_semantic_oscilloscope_app_surface.js`; `tests/door_two/test_metalayer_execution_shell.js`; `tests/door_two/test_drag_drop_file_intake_surface.js`; `tests/door_two/test_execution_shell_state_routing.js`; `tests/door_two/test_demo_lab_source_differentiation.js`; `tests/door_two/test_request_surface_honesty.js` | `tests/door_two/` | app_surface_suite | experimental | cross-door | top-level app shell, routing, intake, and request surface behavior | strong | `tests/hud/app_surfaces/` | high | low | app shell split, execution shell, drag/drop intake, route state, request-surface honesty | rhetorical `door_two` folder | group as app-surface verification family | These read-side surface tests are discoverable by function, not by future-door label. |
| `tests/door_two/test_failure_insufficiency_discipline.js`; `tests/door_two/test_operator_replay_reconstruction_hardening.js`; `tests/door_two/test_reconstruction_replay_surface.js`; `tests/door_two/test_retained_tier_replay_legitimacy.js`; `tests/door_two/test_threshold_fidelity_posture_mapping.js`; `tests/door_two/test_threshold_state_distinctions.js` | `tests/door_two/` | reconstruction_suite | experimental | cross-door | replay reconstruction, threshold, downgrade, and insufficiency posture | strong | `tests/reconstruction/readside/` | high | low | reconstruction read-side behavior, threshold posture, downgrade and insufficiency honesty | rhetorical `door_two` folder | group as reconstruction/read-side family | Strong functional cluster already exists under the filenames. |
| `tests/door_two/test_operator_legibility_panel.js`; `tests/door_two/test_bounded_object_tracking_visibility.js`; `tests/door_two/test_memory_bearing_classification.js`; `tests/door_two/test_weak_state_accounting_visibility.js`; `tests/door_two/test_structural_identity_continuity_visibility.js`; `tests/door_two/test_runtime_evidence_differentiation.js`; `tests/door_two/test_readside_bundle_boundary_hygiene.js`; `tests/door_two/test_leg1_closure_audit.js`; `tests/door_two/test_leg2_closure_audit.js`; `tests/door_two/test_leg3_closure_audit.js`; `tests/door_two/test_compression_reminting_accountability.js` | `tests/door_two/` | readside_accounting_suite | experimental | cross-door | read-side accounting, closure, visibility, and legibility | strong | `tests/readside/accounting/` | high | low | legibility models, closure audits, weak-state accounting, object tracking, compression reminting accountability | rhetorical `door_two` folder | group as read-side accounting and closure family | Large family and good candidate for a dedicated cleanup packet. |
| `tests/door_two/test_recorded_source_lane.js`; `tests/door_two/test_source_registry_adaptive_ingest.js`; `tests/door_two/test_source_registry_large_run_regression.js`; `tests/door_two/test_operator_source_basis_comparison.js`; `tests/door_two/test_source_to_runtime_evidence_trace.js` | `tests/door_two/` | source_registry_suite | experimental | cross-door | recorded-source and source-registry seams | strong | `tests/source_registry/` | high | low | recorded source lane, source registry, source-basis comparison, source-to-runtime evidence tracing | rhetorical `door_two` folder | group as source-registry verification family | Several of these depend on `test_signal/` and recorded-source fixture path stability. |

## Unused, Redundant, or Unclear Candidates

- `dist/`
  - Current role duplicates generated-output semantics already handled by `out/` and `out_*`.
  - This is the clearest top-level placement-cleanup candidate.

- `README/GitHub_VSCode_CheatSheet.md`
  - Function is coherent, but its placement is weak because it bypasses the existing workflow-oriented README subzone.

- `packets/C1_TrialPacket3_Ambiguous.yaml` and `packets/C1_TrialPacket3_Ambiguous_v2.yaml`
  - Versioning lineage is implied but not made explicit by path alone.
  - This is a duplication-risk seam, not evidence that either file should be removed in this packet.

- `README/Cleanup/`
  - Coherent live zone, but still constitution-understated.
  - This is an accounting gap more than a placement failure.

- `README/Transformer/LanguageKernel/` and `Transformer/LanguageKernel/`
  - Coherent paired docs/code seam, but the repo’s higher-level placement summary does not account for it as clearly as it accounts for Core/Diagnostics/WorkflowMechanization.
  - This is a “formalize later” seam, not a “move now” seam.

- `operators/consensus/consultC1.js`
  - Header comment still says `// canon/consultC1.js`.
  - At least one test still assumes a canon-path helper that does not exist.
  - This is path/accounting drift, not proof that operator placement is wrong.

## Move Candidates With Confidence

| candidate | why it is a candidate | proposed target | confidence | risk if moved carelessly |
| --- | --- | --- | --- | --- |
| `README/GitHub_VSCode_CheatSheet.md` | workflow/tooling support note bypasses existing README subzone structure | `README/WorkflowMechanization/` | high | low |
| `dist/` | generated build output overlaps with `out/` semantics | `out/dist/` or untracked build artifact | high | low |
| flat root `tests/test_*.js` contract/report/probe families | root test bank is too broad for current scale | deeper functional test subfolders | high | medium |
| `tests/door_two/` families | folder name groups by rhetorical future-door label instead of verification function | `tests/consultation/`, `tests/hud/app_surfaces/`, `tests/reconstruction/readside/`, `tests/readside/accounting/`, `tests/source_registry/` | high | medium |
| `test_signal/` | function is shared fixture data, not a top-level runtime or authority zone | `fixtures/test_signal/` or `fixtures/recorded_audio/` | medium | high |
| `README/Cleanup/` | live cleanup zone is not named in canonical README-subzone summary | keep current; update placement constitution later if retained | low | low |
| `README/Transformer/LanguageKernel/` and `Transformer/LanguageKernel/` | paired experimental seam is under-accounted, but not obviously misfiled | keep current pending dedicated accounting packet | low | medium |

## Risks and Open Questions

1. `tests/door_two/test_door_one_canon_handoff.js` contains path assumptions that no longer match its folder depth.
   - This makes immediate regrouping unsafe unless a small path-repair packet happens first.

2. `test_signal/` is widely referenced by scripts, tests, HUD fixture helpers, and README result notes.
   - The folder is a strong placement-cleanup candidate, but it is also a high-reference seam.

3. The placement constitution is directionally correct, but the live repo now contains meaningful zones that deserve explicit accounting if they are meant to persist:
   - `README/Cleanup/`
   - `README/Transformer/LanguageKernel/`
   - `Transformer/LanguageKernel/`

4. The current worktree already contains unrelated drift:
   - deleted path observed: `README.ClaudeWorkflowContract.md`
   - not modified by this packet

## What Is Now True

- The repo now has a bounded audit report that classifies current zones, README groupings, and test placement using cleanup-routing language rather than restructuring by implication.
- The highest-confidence cleanup seams are now legible:
  - standalone README tooling note placement
  - generated build-output placement
  - root-level test clustering
  - functional subdivision of `tests/door_two/`
- One hidden path-risk seam is now explicit:
  - `tests/door_two/test_door_one_canon_handoff.js`

## What Is Still Not Claimed

- No file move is approved.
- No README is declared obsolete solely by this report.
- No test subgroup naming is treated as final canon.
- No runtime or canon seam is declared mechanically correct or incorrect beyond the path/accounting observations cited here.
