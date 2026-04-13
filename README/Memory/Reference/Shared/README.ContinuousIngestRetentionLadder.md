# DME Continuous Ingest Retention Ladder

## Status

Active Memory reference note. Imported from the V1 retention ladder and aligned with the current Door One replay / reconstruction posture.

## Purpose

- define the lawful retention ladder for continuous ingest runs
- state what each tier preserves, how replay/reconstruction claims attach, and when downgrade is required
- keep ingest helpers and packet templates from over-claiming retention support during long-running capture
- connect retention tiers to the replay/reconstruction and invariance notes so the full ingest→retention→replay line stays honest

This note governs retention ladder definitions only. It does **not** authorize:

- live ingest automation beyond Door One’s current adapters
- SupportRegime helper admission
- symbolic/semantic promotion of replayed content
- canon or Door Two activation

---

## 1. Ladder overview

| Tier | What it preserves | Replay posture | Typical use |
| --- | --- | --- | --- |
| **H0** | Raw .wav / capture chunks + ingest metadata | Highest fidelity; lens = raw measurement | offline replay, regeneration of H1/H2 | 
| **H1** | P-lane structural emissions (P0–P3 bundles) with direct provenance | Direct replay under declared lens | primary runtime comparison, operator debug |
| **M1** | Compressed runtime memory (H1-derived) retaining chain handles + invariance metadata | Replay requires econstructable posture; defaults to degraded unless invariance gate passes | long-run inspection, retention across sessions |
| **M2** | Summary substrates (trajectories, basin candidates, recurrence maps) | No direct replay; only reconstruction via declared route | substrate analytics, Door One planning |
| **Archive** | Frozen packet receipts / consult exports | No replay; historical reference only | accountability, audit

Declaring continuous ingest means the pipeline cycles through these tiers while input is still arriving. Packets targeting continuous ingest must specify which tier they rely on and how the transition between tiers is triggered.

---

## 2. Tier transitions

- **H0 → H1**: governed by ingest + operator contracts. Loss of raw capture must be declared explicitly.
- **H1 → M1**: requires invariance gate (README/Constraint/Law/Shared/README.DeterministicInvarianceThreshold.md). Downgrade to degraded or econstructable_only when support weakens.
- **M1 → M2**: requires structural identity and distortion audits to state what distinctions are being collapsed. Any replay claim at this level is reconstruction-only.
- **M2 → Archive**: packetized retention for historical/audit use. No replay without reopening upstream tiers.

Each transition must emit:

1. declared_lens
2. etained_tier
3. support_basis
4. idelity_posture
5. downgrade_clause

(Fields defined in README.ReconstructionReplaySurface.md).

---

## 3. Continuous ingest constraints

- Continuous ingest is lawful only while ddress_id: seam/op-p0 (ingest operator) and its validators remain mechanized.
- If H0 backlog exceeds declared limits, ingestion must pause or spill to Archive; do not silently drop H0 data without packetized downgrade.
- Helpers must not assume SupportRegime storage; no cloud push or helper-side caches count as H0/H1 unless declared and governed.
- Replay claims during a live ingest window must cite the H1 buffer they pull from and include timestamp ranges.

---

## 4. Downgrade triggers

| Trigger | Action |
| --- | --- |
| H0 window loss (storage cap, corruption) | Emit downgrade: H0_missing, mark next H1/H2 objects as reconstructed |
| Validator failure (VAL-P0…VAL-P3) | Flag corresponding H1 objects as unresolved until revalidated |
| Distortion audit hit | Record distortion note ID in the ladder entry and downgrade tier before replay |
| Invariance threshold failure | Move objects to econstructable_only; require retention packet to restore support |
| Replay latency breach | Add latency posture; no helper/UX auto-play until packetized correction |

---

## 5. Workflow guidance

1. **Packet declaration** – any continuous ingest packet must list the highest tier it expects to access plus the export requirement (aw, structural, compressed).
2. **Accounting hook** – repo accounting should list active ladder tiers per ingest run (linking the address registry).
3. **Seam linkage** – seam registry entries for ingest operators/validators must cite their retention responsibilities using the new ladder vocabulary.
4. **Review** – evaluation packets reviewing retention must reference this note plus README.ReconstructionReplaySurface.md for replay honesty.

---

## 6. Landing decision

- This packet created a new survivor: README/Memory/Reference/Shared/README.ContinuousIngestRetentionLadder.md.
- No other notes were edited; Replay/Retention references already point here for ladder requirements.

---

## 7. One-line summary

**Continuous ingest is only lawful when its retention ladder stays explicit: H0 raw capture, H1 structural emissions, M1 compressed runtime memory, M2 substrate summaries, and archive—all with declared lens, fidelity posture, and downgrade clauses.**
