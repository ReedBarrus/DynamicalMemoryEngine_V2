# README.DME.V2.RelationOperator.md

## 1. Identity

**Name:** Relation Operator  
**Type:** Runtime Dynamics Operator  
**Tier Placement:** Runtime Manifold / Relational Dynamics  
**Position:** Interference Process → Relational Topology → Proof Eligibility

---

## 2. Purpose

The Relation Operator converts repeated or stable interference products into typed relational candidates.

It answers:

> Which perturbations between Distinction-States persist enough to be treated as relational structure?

---

## 3. Core Definition

A relation is a typed dependency between Distinction-States whose interaction produces measurable, repeatable state change under declared context.

Relation is not:

- raw similarity
- one-time perturbation
- identity
- proof
- authority

Relation is:

> stabilized interference with a declared dependency type.

---

## 4. Input

The Relation Operator receives:

```text
InterferenceTrace[]
ActiveDistinctionStates
Attention-Energy state
local frames
context/lens
thresholds

From Interference:

Dᵢ → Dⱼ
produces ΔSⱼ
5. Relation Formation Condition

A relation candidate forms when:

effect_size(Dᵢ → Dⱼ) ≥ τ_effect
AND repeatability ≥ τ_repeat
AND uncertainty ≤ τ_uncertainty
AND context_valid == true

Optional persistence condition:

relation_candidate if ΔS pattern remains stable across n cycles
6. Relation Types
6.1 Similarity Relation

Forms when two Distinction-States share low invariant distance.

D_I(Dᵢ, Dⱼ) ≤ τ_similarity

Use:

query
clustering
projection
low-stakes routing
6.2 Alignment Relation

Forms when interaction improves ordering, phase, or correspondence.

Δφ ↑
AND uncertainty ↓

Use:

sequence comparison
phase-locking
trajectory stabilization
6.3 Recurrence Relation

Forms when a state or relation pattern reappears across cycles.

pattern(Dᵢ, Dⱼ, t₀) ≈ pattern(Dᵢ, Dⱼ, tₙ)

Use:

retention pressure
persistence proof
basin detection
6.4 Separation Relation

Forms when boundaries remain distinct under interaction.

boundary_overlap ≤ τ_overlap
AND distinction collapse == false

Use:

anomaly detection
identity boundary
merge/separation proof
6.5 Transition Relation

Forms when one state predictably moves into or activates another.

Dᵢ(t) → Dⱼ(t+1)

Use:

trajectories
causal candidates
reconstruction paths
6.6 Convergence Relation

Forms when multiple paths, bases, or states point toward the same region.

paths(D₁...Dₙ) → shared attractor / region

Use:

proof preparation
identity support
basin formation
7. Relation Candidate Schema
{
  "relation_id": "...",
  "relation_type": "similarity | alignment | recurrence | separation | transition | convergence",
  "participants": [],
  "source_interference_traces": [],
  "state_delta_summary": {},
  "context": {},
  "metric": {},
  "stability": {
    "cycles_observed": 0,
    "repeatability_score": null,
    "persistence_score": null
  },
  "uncertainty": {},
  "authority": {
    "ceiling": "relation_candidate",
    "proof_status": "not_proven"
  },
  "non_claims": [
    "relation_is_not_identity",
    "relation_is_not_proof",
    "relation_is_not_authority"
  ]
}
8. Relational Topology Formation

A topology candidate forms when multiple relation candidates stabilize into a persistent pattern.

RelationCandidate[]
→ neighborhood / trajectory / basin / recurrence field

Topology is not a set of labels.

It is:

persistent relational form under repeated interference.

9. Neighborhood

A neighborhood forms when a group of Distinction-States remain mutually reachable under local influence.

Nᵢ = { Dⱼ | relation_strength(Dᵢ,Dⱼ) ≥ τ_neighbor }
10. Trajectory

A trajectory forms when relation transitions preserve ordered movement through state space.

T = D₁ → D₂ → D₃

Or:

Tᵢ = Sᵢ(t₀) → Sᵢ(t₁) → Sᵢ(t₂)
11. Basin

A basin forms when multiple trajectories or relations converge into a stable region.

B = { Dᵢ | trajectory(Dᵢ) → stable region }

Basin is not static clustering.

It is:

stable convergence behavior in relational dynamics.

12. Relationship to Proof Eligibility

Relation candidates and topology candidates may enter proof only if they satisfy eligibility requirements:

lineage declared
basis declared
uncertainty declared
state history sufficient
declared use present
requested axes present

The current Proof Eligibility Contract already defines relation and topology candidates as proof-eligible classes when those fields are declared.

13. Relationship to Runtime Manifold

The Runtime Manifold remains non-authoritative.

Relation Operator may propose:

relation candidates
neighborhood candidates
trajectory candidates
basin candidates

It may not:

write truth
assign identity
authorize mutation

The Runtime Map already places relational dynamics in the manifold and marks their outputs as proposals, not truth.

14. Relationship to Ledger

The ledger may store relation candidates only as audit or proof-support records.

Validated relations require proof.

Ledger writeback occurs only after proof/governance.

15. Constraints
Constraint 1 — No Single-Perturbation Relation

A single perturbation is not enough unless explicitly marked provisional.

Constraint 2 — No Similarity Collapse

Similarity is only one relation type.

Constraint 3 — No Topology From Labels

Topology must arise from relation patterns, not semantic naming.

Constraint 4 — No Authority

Relations are candidates until proven.

Constraint 5 — Uncertainty Preservation

Relation uncertainty must remain attached through proof.

16. Failure Modes
False Similarity

States appear close under one metric but diverge under interaction.

False Causality

Transition relation inferred from sequence alone.

Relation Inflation

Every perturbation becomes a relation.

Topology Collapse

Distinct neighborhoods/basins are merged prematurely.

Attractor Overclaim

Stable basin treated as identity without proof.

Hidden Context Dependence

Relation only holds under narrow context but is generalized.

17. Summary

The Relation Operator converts:

interference traces
→ stabilized perturbation patterns
→ typed relation candidates
→ topology candidates

It defines relation as:

stabilized dependency produced by interaction, not mere similarity.