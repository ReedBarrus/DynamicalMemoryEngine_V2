## New doc: Distinction Operator

```markdown
# README.DME.V2.DistinctionOperator.md

## 1. Identity

**Name:** Distinction Operator  
**Type:** Operator  
**Tier Placement:** Tier 2 — Runtime Climb  
**Position:** Transform Layer → Distinction Geometry → Runtime Manifold

## 2. Purpose

The Distinction Operator converts cross-basis evidence into bounded geometric distinctions.

It answers:

> Which patterns are sufficiently separable, supported, and uncertainty-bounded to become active runtime structures?

## 3. Core Definition

A distinction is a bounded region of structure whose separation from its background or neighborhood exceeds an emergent or declared threshold under a declared metric, basis posture, and uncertainty bound.

Distinction is not:

- a raw feature
- a transform output
- a semantic label
- an identity
- a proof

Distinction is:

> the first runtime-selectable unit of cognition.

## 4. Inputs

The operator receives:

```text
DistinctionEvidencePacket
+ context
+ constraints
+ attention weights
+ support thresholds

Inputs include:

chart-local features
basis contribution maps
agreement maps
uncertainty gradients
candidate regions
provenance refs
declared metrics
5. Outputs

The operator emi

DistinctionVector / DistinctionRegion

A distinction must include:

{
  "distinction_id": "...",
  "source_refs": [],
  "structural_refs": [],
  "chart_refs": [],
  "feature_refs": [],
  "region": {
    "extent": {},
    "domain": "...",
    "scale": "..."
  },
  "invariant_vector": {
    "composition": null,
    "magnitude": null,
    "alignment": null,
    "persistence": null,
    "separation": null,
    "convergence": null
  },
  "feature_basis_posture": {
    "supporting_features": [],
    "conflicting_features": [],
    "basis_contributions": {},
    "dominant_basis": null
  },
  "uncertainty": {
    "cross_basis_disagreement": null,
    "missing_axes": [],
    "confidence": null
  },
  "authority": {
    "authority_ceiling": "candidate_distinction",
    "proof_status": "not_proven"
  },
  "non_claims": [
    "distinction_is_not_identity",
    "distinction_is_not_proof",
    "distinction_is_not_semantic_truth"
  ]
}
6. Emergent Thresholds

A distinction may form by declared threshold or emergent threshold.

Declared Threshold
separation ≥ τ
support ≥ σ
uncertainty ≤ υ
Emergent Threshold

An emergent threshold is derived from the local field statistics.

Example:

τ_emergent = mean(local_separation) + k · std(local_separation)

A feature region becomes a distinction when:

separation(region, background) ≥ τ_emergent
AND support(region) ≥ σ_local
AND uncertainty(region) ≤ υ_context

This allows the system to discover structure without projecting human labels.

7. How Features Express Distinction

Features express a distinction when they converge across charts.

Example:

FFT: spectral peak
RMS: energy rise
Wavelet: localized transient
Autocorrelation: recurrence change

If these features overlap in extent and agree within uncertainty bounds, the region becomes a distinction candidate.

If they conflict, the region remains ambiguous but can still be ledgered as uncertainty-bearing evidence.

8. Distinction Geometry

Distinctions are geometric/vectoral.

Each distinction has:

extent
domain
scale
invariant vector
uncertainty vector
basis contribution map
feature support map

This allows distinctions to enter the Runtime Manifold as active field structures.

9. Ledger Behavior

Candidate distinctions may be recorded if they are useful for audit.

Verified distinctions require:

valid source refs
valid structural refs
declared basis posture
uncertainty declaration
operator verification

The ledger records distinction lineage, not manifold dynamics.

10. Runtime Manifold Behavior

The Runtime Manifold operates over distinctions as active structures.

It may evaluate:

relation
interference
salience
decay
retention pressure

But the manifold does not make distinctions authoritative.

11. Constraints
No Feature Collapse

A feature is not automatically a distinction.

No Single-Basis Distinction by Default

Single-basis distinctions must be marked weak or provisional.

No Semantic Projection

Labels may annotate but may not define distinctions.

No Hidden Uncertainty

Disagreement across charts must be retained.

12. Failure Modes
Feature Inflation

A chart-local feature is treated as a distinction.

Basis Dominance

One transform overpowers cross-basis evidence.

Threshold Rigidity

Declared thresholds prevent emergent structure from appearing.

Threshold Drift

Emergent thresholds adapt too freely and admit noise.

Semantic Override

Human label replaces structural separability.

13. Summary

The Distinction Operator is the structural trunk of runtime cognition.

It converts:

features → cross-basis evidence → bounded distinctions

It is the first operator that chooses what becomes active structure.