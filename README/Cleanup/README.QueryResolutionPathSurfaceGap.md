# Dynamical Memory Engine — Query Resolution Path Surfacing Gap Note v0

# STATUS: CONCEPTUAL BOTTLENECK
# LAYER: Query / Structural Memory Interface
# BLOCKED BY: QueryOp instrumentation (resolution trace emission)
# TYPE: Mechanization-dependent invariant

This document defines resolution path equivalence as a requirement for structural memory validity.

It is not yet enforceable due to missing QueryOp resolution trace surfaces.

## Status

This document defines the current bounded gap between:

- declared identity law,
- declared query/claim law,
- and the mechanized ability to check **resolution path equivalence** during continuity audit.

It is a supporting cleanup / formalization note.

It does **not** override:

- `README_MasterConstitution.md`
- `README_WorkflowContract.md`
- `README.StructuralIdentityLaw.md`
- `README.DeclaredVsMechanizedAudit.md`
- `README.MechanizationClosureGate.md`
- `README.PacketWorkflowChain.md`
- `README_DoorOneDevelopmentalOutline.md`
- `README.QueryTaxonomy.md`
- `README.ClaimTaxonomy.md`
- `README.SemanticOverlayContract.v0.md`
- `README.PerturbationSettlementSeamSpec.v0.md`

Its purpose is narrower:

- name the current conceptual/mechanization bottleneck around resolution path equivalence,
- define why QueryOp path surfacing matters,
- prevent premature identity-path claims without inspectable query-resolution evidence,
- and provide a stable cleanup target for later bounded implementation packets.

This note governs **query-path surfacing gap posture** only.

It does **not** govern:

- runtime truth,
- canon activation,
- final QueryOp redesign,
- or final identity-path mechanization law by itself.

---

## 1. Why this note exists

Recent continuity and settlement clarification produced a strong identity-break rule:

> the smallest failure condition forcing `new_identity_class_required` is that the defining bounded query no longer resolves through the same lawful path.

That rule is strong conceptually.

However, it exposes a real bottleneck:

**the resolution-path equivalence test is only as strong as what QueryOp actually surfaces about its own resolution behavior.**

If QueryOp does not emit enough structured information about:

- what constraints were active,
- what support surfaces were accessed,
- what structural neighborhood / basin was consulted,
- and what class of path was used,

then “same lawful path” remains partly declared and only weakly mechanized.

This note exists to prevent that gap from disappearing into conversation residue or being mistaken for solved architecture.

One-line summary:

**Resolution path equivalence is now conceptually pinned, but QueryOp path surfacing is the next real declared-vs-mechanized bottleneck.**

---

## 2. Current posture

What is now true:

- Structural Identity Law already requires that the same bounded question remain answerable under the same declared constraints with sufficient support and mechanized basis for stronger continuity to survive. :contentReference[oaicite:0]{index=0}
- Query Taxonomy already defines queries as bounded question objects with support requirements and lawful answer ceilings. :contentReference[oaicite:1]{index=1}
- Claim Taxonomy already defines assertion strength as downstream of query class and support ceiling. :contentReference[oaicite:2]{index=2}
- The perturbation settlement seam now depends on distinguishing:
  - settlement,
  - migration,
  - and identity continuity
  through bounded-query continuity rather than similarity or probability.

What is **not yet claimed**:

- that QueryOp already exposes a sufficient structured path record to make resolution-path equivalence fully auditable.

---

## 3. Core gap statement

The current gap is:

> **DME can now state that identity continuity depends on the same bounded query resolving through the same lawful path, but QueryOp may not yet emit enough structured evidence to test that claim fail-closed.**

This is not a contradiction.

It is a bounded formalization gap between:

- declared law,
- and inspectable runtime/read-side evidence.

That places it squarely inside the DME anti-overclaim framework:
- declared is not mechanized,
- displayed is not mechanized,
- shaped law must not outrun implemented support. 

---

## 4. Why this matters

Without explicit query-path surfacing, several risks become active:

- identity continuity being inferred from output resemblance,
- same-value answers being mistaken for same-path answers,
- lawful migration being overread without actual path comparison,
- settlement classification being stronger than the query evidence can support,
- and query/identity law remaining elegant but under-auditable.

This matters especially because the architecture now correctly blocks probabilistic continuity language in this seam.

The system should not say:
- “probably the same object”

when the better posture is:
- same lawful path confirmed,
- different lawful path detected,
- or unresolved due to insufficient path evidence.

---

## 5. What “resolution path” means here

For current DME purposes, **resolution path** means:

> the bounded structural/support route by which a query became answerable under active constraints.

This is narrower than “all computation that happened.”

It should be thought of as the smallest inspectable answer-path surface relevant to continuity audit.

At minimum, a resolution path may include:

- active query class,
- active declared constraint bundle,
- support surfaces accessed,
- structural neighborhood or basin consulted,
- retained vs live support route,
- and any bounded review/routing path class relevant to the answer.

One-line summary:

**Resolution path is the lawful answer route, not just the returned value.**

---

## 6. Key distinction: value equivalence vs path equivalence

This distinction is now non-negotiable.

### Value equivalence
Two queries may return:
- the same answer value,
- or numerically similar outputs.

That alone is **not** sufficient for identity continuity.

### Path equivalence
The same bounded query must still resolve:
- through the same class of constraint/support route,
- under the same declared seam conditions,
- strongly enough that the same bounded object can still be treated as the same.

Therefore:

- same value does not imply same path,
- same path may tolerate bounded value variation,
- and path change is the stronger identity-warning signal.

---

## 7. Minimum QueryOp path record needed

This note does not finalize QueryOp redesign, but it does define the minimum categories that likely must become inspectable if resolution-path equivalence is to be checked lawfully.

### 7.1 Query class
At minimum:
- `Q0`–`Q7` class
- bounded question ID or equivalent bounded question reference

Why:
Query class drift is one of the cleanest continuity failure modes. 

### 7.2 Active constraint surface
At minimum:
- which declared constraint classes were active
- or a structured constraint profile sufficient for audit

Why:
A changed answer under a changed constraint bundle is not the same path. :contentReference[oaicite:5]{index=5}

### 7.3 Support surfaces accessed
At minimum:
- live/runtime support
- retained support
- lineage/receipt-backed support
- replay-facing support
- or equivalent structural support route markers

Why:
Support path change may force downgrade even when outputs look stable. 

### 7.4 Structural neighborhood / basin route
At minimum:
- basin ID / neighborhood ID / structural locality marker
- if basin-local resolution was involved

Why:
A query resolved from a different basin may indicate lawful migration, degraded continuity, or new identity class pressure. This cannot be inferred safely from answer similarity alone.

### 7.5 Resolution path class
At minimum:
- a compact path classification or route signature
- enough to compare:
  - same-path
  - different-path
  - unresolved-path

Why:
Without a path-class surface, identity audit remains partly rhetorical.

### 7.6 Mechanization posture
At minimum:
- whether the path was fully mechanized,
- partially mechanized,
- or declared/displayed only

Why:
A query-path claim should not outrun actual mechanized support. 

---

## 8. What this note is *not* saying

This note is **not** saying that QueryOp must immediately become a giant semantic router.

It is **not** saying that every low-level internal step must be surfaced.

It is **not** saying that full query introspection is required before any more development can proceed.

It is saying something narrower:

> if DME wants to use “same lawful path” as an identity-break condition, then QueryOp must eventually expose enough structured path evidence for that statement to be auditable.

That is the bottleneck.

---

## 9. Relationship to the perturbation settlement seam

The new settlement seam can still be specified and later built without full query-path formalization.

However:

- settlement can only remain cleanly separate from identity
- if identity audit later has a real way to check path continuity

So the relationship is:

- settlement seam = ready for read-side specification now
- query-path surfacing = next conceptual/mechanization bottleneck underneath the strongest identity rule

This means the settlement seam should proceed,
but the identity-break condition should remain explicitly marked as:

- conceptually pinned,
- mechanization-dependent,
- and not yet fully surfaced in QueryOp.

---

## 10. Recommended current posture

Current best posture:

### Allowed now
- use “resolution path equivalence” as a guiding review rule
- use it in README/spec language
- use it to prevent probabilistic continuity slippage

### Not yet allowed
- claim full mechanized identity-path audit if QueryOp does not actually emit the needed path record

### Best interim label
If path evidence is incomplete, downstream continuity surfaces should prefer:
- `identity_unresolved`
- `path_equivalence_unavailable`
- or equivalent bounded insufficiency posture

rather than silently over-asserting same-object continuity.

This is directly consistent with Uncertainty Taxonomy and anti-overclaim law. 

---

## 11. Candidate future cleanup / execution target

A future cleanup packet may need to inspect and possibly extend QueryOp so it can emit a bounded **query resolution record**.

A hypothetical minimal shape could look like:

```json
{
  "query_class": "Q5",
  "bounded_question_id": "identity.audit.packet_X",
  "constraint_profile": ["C1", "C2", "C4"],
  "support_route": ["retained_support", "lineage_receipts"],
  "basin_id": "B_17",
  "path_class": "same_class_route",
  "mechanization_posture": "mechanized"
}