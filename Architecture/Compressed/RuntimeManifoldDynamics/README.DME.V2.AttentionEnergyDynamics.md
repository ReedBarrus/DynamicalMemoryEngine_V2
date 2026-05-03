README.DME.V2.AttentionEnergyDynamics.md
1. Identity

Name: Attention-Energy Dynamics
Type: Runtime dynamics contract
Tier Placement: Runtime Manifold / Relational Dynamics
Position: Manifold Ingest → Relation Operator

This defines how active Distinction-States receive, spend, transfer, damp, and redistribute runtime influence.

2. Core Definition

Attention-Energy is the bounded runtime resource that determines which Distinction-States are processed, perturbed, related, stabilized, or allowed to decay.

It is not literal heat.

It is a measurable runtime analogue for:

activation
salience
influence
uncertainty pressure
processing priority
field deformation

The Runtime Manifold is already defined as active but non-authoritative; this model preserves that boundary.

3. Active Distinction-State

Each active state Dᵢ contains:

Dᵢ(t) = {
  geometry_region,
  local_frame,
  lineage_ref,
  state_vector,
  attention_budget,
  authority_ceiling
}

State vector:

Sᵢ(t) = [
  ρᵢ,  // information density
  Eᵢ,  // activation energy
  Hᵢ,  // uncertainty entropy
  Kᵢ,  // constraint strength
  φᵢ,  // phase/alignment
  Aᵢ,  // salience / attention weight
  rᵢ   // recursion depth
]

Where:

ρ = distinguishable structure density
E = available activation/influence
H = uncertainty or unresolved degrees of freedom
K = constraint/boundary strength
φ = alignment/coherence posture
A = attention allocation
r = local recursion depth
4. Global Runtime Budget

The manifold has a bounded runtime budget:

B_total(t)

Conservation rule:

Σᵢ Aᵢ(t) ≤ B_total(t)
Σᵢ Eᵢ(t) ≤ E_total(t)

No state may accumulate unlimited influence.

5. Initial Attention Allocation

For new active states:

Aᵢ(0) = normalize(
  w_q Qᵢ
+ w_n Nᵢ
+ w_u Hᵢ
+ w_m Mᵢ
+ w_r Rᵢ
+ w_p Pᵢ
)

Where:

Qᵢ = query relevance
Nᵢ = novelty
Hᵢ = uncertainty requiring resolution
Mᵢ = magnitude / signal strength
Rᵢ = recurrence
Pᵢ = prior proof/retention support

Then clamp:

Aᵢ(0) ∈ [A_min, A_max]
6. Activation Energy

Activation energy measures runtime influence.

Eᵢ(t) = Aᵢ(t) · ρᵢ(t) · Kᵢ(t) · (1 - Hᵢ(t))

Interpretation:

high attention increases activation
high information density increases activation
strong constraint gives sharper boundary/influence
high uncertainty reduces usable activation unless uncertainty is the target

Optional uncertainty-seeking mode:

Eᵢ_uncertainty = Aᵢ · Hᵢ · Q_uncertainty

This allows the system to deliberately inspect ambiguous regions.

7. Salience

Salience is current importance weighting:

Salienceᵢ = Aᵢ · (Nᵢ + Mᵢ + Rᵢ + Qᵢ + Pᵢ) / (1 + Hᵢ)

Salience is not authority.

It says:

this region deserves processing.

8. Symbolic Gravity / Attraction Pressure

Symbolic gravity is influence over nearby states.

Gᵢⱼ = (Eᵢ · Kᵢ · Cᵢⱼ) / (Dᵢⱼ + ε)²

Where:

Gᵢⱼ = attraction pressure from Dᵢ to Dⱼ
Cᵢⱼ = compatibility/coherence between local frames
Dᵢⱼ = distinguishability distance
ε = stability constant

This is not proof. It is runtime field pressure.

9. Informational Curvature

Curvature measures how much a state deforms local relation geometry.

Curvᵢ = Σⱼ |Dᵢⱼ(t+1) - Dᵢⱼ(t)| · Aⱼ

High curvature means:

this region changes how nearby states relate.

Curvature is useful for detecting:

attractor formation
conceptual pivots
anomaly influence
context reorganization
10. Entropy / Uncertainty

Uncertainty entropy:

Hᵢ = cross_basis_disagreement + missing_axis_penalty + instability_penalty

A useful form:

Hᵢ = αUᵢ + βMᵢ_missing + γVᵢ_variance

Where:

Uᵢ = chart disagreement
Mᵢ_missing = missing required axes
Vᵢ_variance = instability over cycles
11. Negentropy / Stabilization

Negentropy is structured uncertainty reduction.

Negᵢ(t) = Hᵢ(t-1) - Hᵢ(t)

Positive Negᵢ means the system clarified the region.

Negative Negᵢ means ambiguity increased.

12. Exothermic / Endothermic Runtime Behavior
Exothermic influence

A state releases influence outward:

Exoᵢ = Σⱼ max(0, Eⱼ(t+1) - Eⱼ(t)) caused_by Dᵢ

Signs:

neighbors activate
relations proliferate
uncertainty decreases nearby
trajectories form outward
Endothermic influence

A state absorbs attention inward:

Endoᵢ = max(0, Aᵢ(t+1) - Aᵢ(t)) - outward_transferᵢ

Signs:

attention concentrates
neighboring activity suppresses
local processing deepens
possible attractor lock
13. Attention Redistribution

After interactions:

Aᵢ(t+1) =
softmax(
  Salienceᵢ
+ λ₁ Curvᵢ
+ λ₂ Negᵢ
+ λ₃ G_inᵢ
- λ₄ Hᵢ
- λ₅ Costᵢ
)

Where:

G_inᵢ = incoming attraction pressure
Costᵢ = processing/resource cost
λ values are runtime tuning parameters

Then enforce budget:

Σᵢ Aᵢ(t+1) = B_total
14. Decay

Decay prevents stale dominance:

Eᵢ(t+1) = Eᵢ(t) · exp(-δᵢ Δt)

Decay rate:

δᵢ = δ_base + Hᵢ - Pᵢ - Rᵢ

Meaning:

uncertainty increases decay
proof support reduces decay
recurrence reduces decay
15. Recursion Depth
Global depth
r_global = runtime_cycle_count
Local depth
rᵢ = number_of_times(Dᵢ has been reactivated or updated)
Lineage depth

Computed from ledger ancestry.

Proof depth

Number of validation layers passed.

The ledger already tracks causal history, derivation, transforms, and validation nodes, so these depths should be ledger-computable where possible.

16. Relation Readiness

A pair becomes eligible for relation evaluation when:

Gᵢⱼ ≥ τ_influence
OR
Dᵢⱼ ≤ τ_neighbor
OR
Curvᵢⱼ ≥ τ_curvature
OR
Qᵢⱼ ≥ τ_query

This keeps relation evaluation local and bounded.

17. Neighborhood Formation

Neighborhood around Dᵢ:

Nᵢ = { Dⱼ | Dᵢⱼ ≤ rᵢ_context AND Gᵢⱼ ≥ g_min }

A neighborhood is not a label.

It is:

the region of states close enough and influential enough to matter under current context.

18. Basin Formation

A basin forms when multiple states converge under attention-energy dynamics:

Bₖ = { Dᵢ | trajectory(Dᵢ) → attractor Aₖ }

Practical detection:

basin_candidate if:
  internal_relation_strength high
  internal_uncertainty decreasing
  external_boundary stable
  recurrence increasing
19. Trajectory

A trajectory is state movement across cycles:

Tᵢ = [Sᵢ(t₀), Sᵢ(t₁), Sᵢ(t₂), ...]

Or relational traversal:

T = D₁ → D₂ → D₃

Generated by:

perturbation
attraction
decay
attention shift
uncertainty resolution
20. Stability Condition

A state is locally stable when:

|Sᵢ(t+1) - Sᵢ(t)| ≤ ε_stability
AND
Hᵢ(t) ≤ H_max
AND
Kᵢ(t) ≥ K_min

Stable does not mean true.

It means:

ready for relation/proof evaluation.

21. Core Runtime Loop
Manifold Ingest
→ initialize Distinction-States
→ allocate attention-energy
→ compute local influence
→ redistribute attention
→ update state vectors
→ form neighborhoods / trajectories / basins
→ emit relation candidates
→ proof evaluation
→ ledger writeback only if validated

The Runtime Map already frames relational outputs as proposals, with authority established only after proof/governance.

22. Constraints
No unlimited energy

All activation is budgeted.

No salience authority

High salience does not mean truth.

No gravity authority

Attraction pressure does not mean identity.

No curvature authority

Field deformation is runtime evidence, not proof.

No hidden thermodynamics

All thermodynamic metrics must declare how they were computed.

23. Summary

Attention-Energy Dynamics defines how Distinction-States behave once admitted to the Runtime Manifold.

It provides measurable runtime quantities for:

salience
activation
influence
entropy
negentropy
curvature
recurrence
basin formation
trajectory formation

Final anchor:

The manifold evolves distinction-states by conserving bounded attention-energy while allowing local influence to reveal relational structure.