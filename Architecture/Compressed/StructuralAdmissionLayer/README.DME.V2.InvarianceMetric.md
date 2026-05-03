1. Invariant Identity Space

Let every event be represented by a vector over six invariant axes:

I(e) = [
  C(e),  // composition
  M(e),  // magnitude
  A(e),  // alignment
  P(e),  // persistence
  S(e),  // separation
  V(e)   // convergence
]

Where:

C = what structure is made of
M = strength / energy / scale
A = ordering / phase / correspondence
P = recurrence / stability across time or scale
S = boundary / distinctness from others
V = agreement across paths / bases / derivations

This directly matches the proof families already named in V2 architecture: composition, magnitude, alignment, persistence, separation, convergence.

2. Event Geometry as input to invariant space

EventGeometry is the cross-family bridge: bounded change with extent, boundary, magnitude, gradient, composition, alignment, recurrence hint, uncertainty, and provenance refs.

So:

EventEnvelope(e)
  → invariant projection
  → I(e)

But I(e) is not raw truth. It is a comparison-ready projection.

3. Formal invariant metric

For two events eᵢ and eⱼ, define invariant distance:

D_I(eᵢ, eⱼ) =
sqrt( Σ_k w_k · d_k(I_k(eᵢ), I_k(eⱼ))² )

Where:

k ∈ {C, M, A, P, S, V}
w_k = context/lens weight for that axis
d_k = axis-specific distance function
I_k(e) = event value on that invariant axis

So the universal comparison backbone is not one metric. It is:

a weighted bundle of declared axis metrics.

4. Axis distance examples
Composition distance

For distributions:

d_C = divergence(composition_i, composition_j)

Could be cosine distance, Jensen-Shannon divergence, Earth mover distance, etc.

Magnitude distance
d_M = |log(magnitude_i + ε) - log(magnitude_j + ε)|

Log helps compare scale without overreacting to absolute amplitude.

Alignment distance
d_A = 1 - alignment_score(eᵢ, eⱼ)

Could come from phase alignment, sequence alignment, path correspondence.

Persistence distance
d_P = |persistence_i - persistence_j|

Or compare recurrence profiles.

Separation distance

This one is inverted: high separation means distinct.

d_S = boundary_conflict_or_overlap(eᵢ, eⱼ)

So separation can measure whether boundaries collapse.

Convergence distance
d_V = 1 - convergence_score(eᵢ, eⱼ)

Measures whether multiple paths agree on the same identity.

5. Context-weighted metric

Context determines which axes matter.

W_context = [w_C, w_M, w_A, w_P, w_S, w_V]

Example: audio reconstruction

W = [0.30, 0.25, 0.20, 0.15, 0.05, 0.05]

Example: anomaly/security

W = [0.10, 0.20, 0.10, 0.15, 0.35, 0.10]

This makes context explicit instead of smuggling it into labels.

6. Similarity from distance
Sim_I(eᵢ, eⱼ) = exp(-D_I(eᵢ, eⱼ))

Or bounded:

Sim_I = 1 / (1 + D_I)

Similarity is not proof. It is relational evidence.

7. Distinction Kernel

Now define the kernel that converts observed structure into lawful distinctions.

K_D(O, x, L, Θ, A) → Δ

Where:

O = observer/system state
x = input structure
L = lens/context
Θ = constraints
A = attention/activation weighting
Δ = distinguishable event candidates

More expanded:

Δ = { δ_i | D_I(e_i, context_state) ≥ τ_L and support(e_i) ≥ σ_L }

Meaning:

A distinction exists when:

it is separable enough under invariant metric,
it has sufficient support under the lens,
it is grounded in provenance,
uncertainty is declared.
8. Distinction condition

A candidate event e becomes a lawful distinction if:

Distinguishable(e | O, L, Θ, A) =
  [D_I(e, background_L) ≥ τ_distinction]
  ∧ [support(e, L) ≥ τ_support]
  ∧ [uncertainty(e) ≤ τ_uncertainty]
  ∧ [lineage(e) valid]

This is the anti-projection rule.

A human label like “perturbation” does not define distinction unless it satisfies the condition.

9. Runtime interpretation

The system “observes” by doing:

input
→ structural terrain
→ candidate events
→ invariant projection I(e)
→ metric comparison D_I
→ lawful distinctions
→ event verification

So DME observation is not passive reading.

It is:

constraint-bound distinction formation.

10. Core law

A structure becomes observable to DME only when it forms a provenance-grounded, lens-supported distinction in invariant identity space.