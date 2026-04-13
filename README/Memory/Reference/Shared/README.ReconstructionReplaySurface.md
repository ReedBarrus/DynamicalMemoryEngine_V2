# DME Reconstruction & Replay Surface

## Status

Active Memory reference note. Imported from the V1 reconstruction replay surface and updated to match the current Door One mapping-target spine.

## Purpose

- define the lawful surface required whenever Door One replays or reconstructs retained structure
- keep replay claims lens-bound and retention-aware rather than aesthetic or semantic
- state the minimum metadata a replay surface must expose before it can be routed into evaluation, helper, or consult work
- prevent reconstruction convenience from outranking deterministic invariance, distortion audit, or retention ladder law

This note governs surface requirements only. It does **not** by itself:

- promote replayed structure into canon
- relax retention tier boundaries
- authorize SupportRegime activity
- change the structural identity law

---

## 1. Definitions

| Term | Meaning | Authority posture |
| --- | --- | --- |
| **Replay** | Lens-bound reinspection of retained structure under a declared tier and workflow path. | Runtime memory space only. |
| **Reconstruction** | Replay that requires transformation back into an inspectable structural frame before it can be replayed. | Runtime memory space; must expose retained tier, transformation route, and downgrade posture. |
| **Reconstruction-only** | Surfaces that can be reproduced structurally but no longer justify live replay at the original fidelity (for example because only compressed tier survives). | Runtime memory with explicit downgrade. |
| **Failed replay** | The surface cannot honestly regenerate the declared structural object and must emit unresolved or break posture. | Bounded failure — must route to downgrade and audit surfaces. |

Replay is always lens-bound. Reconstruction is the claim that the declared lens plus retained tier still allow honest regeneration of the structural question.

---

## 2. Minimum replay surface fields

Every replay / reconstruction surface must include the following metadata before any helper, UI, or export can treat it as valid:

| Field | Description | Why it matters |
| --- | --- | --- |
| `declared_lens` | The explicit lens or query context used for replay (e.g., `TemporalRegime:P3:re`). | Prevents surfaces from being mistaken for stronger continuity than declared. |
| `retained_tier` | Tier or storage level used (H1, M1, derived, archived). | Links the output to the retention ladder. |
| `support_basis` | Handles or lineage proving what support survived to justify reconstruction. | Keeps replay honest about provenance. |
| `reconstruction_route` | Ordered list of operators/transforms applied to regenerate structure. | Makes reconstruction traceable and auditable. |
| `fidelity_posture` | One of `conserved`, `degraded`, `reconstructable_only`, `unresolved`, or `failed`. | Couples to Deterministic Invariance Threshold. |
| `downgrade_clause` | Explicit downgrade or non-claims describing what is **not** being asserted. | Prevents replay convenience from implying truth. |
| `export_channels` | The lawful export surfaces generated (raw arrays, declared plots, consult packet id). | Ensures raw structure accompanies any visualization. |
| `latency_posture` (optional) | Relevant when replay latency matters. | Keeps operator expectations honest for slow rebuilds. |

If any required field is absent, the surface must be treated as unresolved and routed back through packet workflow rather than silently accepted.

---

## 3. Fidelity and downgrade classes

The following posture tags must be used verbatim so future audits can review replay honesty:

- **`conserved`** — replayed structure matches the bounded question within current deterministic threshold tests.
- **`degraded`** — structure survives but distinctions have weakened; helper/UIs must display downgrade posture.
- **`reconstructable_only`** — structure can be regenerated offline, but live replay at the declared tier is no longer justified.
- **`unresolved`** — the system cannot currently decide whether the reconstruction is trustworthy; escalate rather than over-claim.
- **`failed`** — reconstruction cannot be produced with lawful support; emit failure posture plus the threshold or retention-trigger that caused it.

These mirror the invariance threshold outcomes and should be reused anywhere else replay surfaces are referenced.

---

## 4. Relationship to other notes

- **Retention Ladder** — determines whether a retained tier even allows the desired replay. This note does not weaken that ladder; it simply records the replay outcome.
- **Deterministic Invariance Threshold** — provides the decision tree for conserved vs degraded vs break. Replay notes must cite the threshold test or gate used.
- **Distortion Audit** — explains which distinctions were lost. Replay surfaces must link to any open distortion findings relevant to the reconstruction route.
- **Noise / Uncertainty / Distortion Accounting** — supplies the accounting vocabulary for noise-driven downgrades, uncertainty, or insufficiency triggered during replay.

---

## 5. Workflow guidance

1. **Declare the lens and tier up front.** Do not attempt reconstruction until the packet specifies them.
2. **Run retention and invariance gates.** If the test fails, emit `reconstructable_only`, `unresolved`, or `failed` instead of improvising.
3. **Produce raw exports before visualization.** A replay surface that only returns an image or helper-friendly summary is not valid.
4. **Attach downgrade clauses to every delivery.** State exactly what the replay is *not* claiming (e.g., “Does not prove causal relation,” “Does not restore symbolic state”).
5. **Route failure modes.** If reconstruction triggers insufficiency or uncertainty, open a packet for retention fixes or downgraded helper behavior rather than keeping the result hidden.

---

## 6. Acceptance checklist

A reconstruction / replay import is considered complete when:

- A V2-visible README surface documents the replay contract (this file or an explicit augmentation).
- At least one live replay surface refers to this note in its metadata template.
- The minimum field list can be enforced through packet workflow (i.e., packets must cite these fields when requesting replay work).
- Degraded / unresolved / failed outcomes are routable through evaluation or helper packets instead of being buried.

If any of these fail, treat the replay import as incomplete and open a follow-up packet rather than improvising.

---

## 7. Import disposition

This packet landed the V1 `README.ReconstructionReplaySurface.md` as a new survivor at `README/Memory/Reference/Shared/README.ReconstructionReplaySurface.md`. Future replay packet templates should reference this note directly.

---

## 8. One-line summary

**Reconstruction and replay surfaces must stay lens-bound, retention-aware, and downgrade-explicit; this note defines the minimum metadata and posture required before any replay claim can be accepted in Door One.**
