📘 README.DME.V2.ProjectionIndexSubstrate.md
1. Identity

Name: Projection / Index Substrate
Type: Substrate
Tier Placement: Tier 1 — Substrates
Position: External Interface Layer

2. Purpose

The Projection / Index Substrate defines:

how DME V2 exposes bounded, non-authoritative views of internal state for access, interaction, and reconstruction.

It is the only layer that:

agents interact with
users query
tools consume
3. Core Definition

A projection is a declared, bounded view of system state that preserves specific identity axes while omitting others.

An index is a structured access path into the ledger/manifold constrained by declared scope.

4. Fundamental Principle

From substrate law:

Projection is bounded access—not truth.

This means:

projections are lossy by default
projections must declare their limits
projections cannot claim identity unless proven
5. Role in System
Ledger / Manifold
→ Projection / Index
→ Query / Agent / UI
→ Feedback → Manifold

It answers:

What view of the system is being exposed, and under what constraints?

6. Core Components
6.1 Index

Structured references into the ledger and manifold.

Index provides:

lookup paths
filtering mechanisms
candidate selection

Examples:

event lookup
similarity index
time-based index
source-family index
6.2 Projection

A constructed output from indexed data under declared constraints.

Projection may include:

reconstructed structure
event summaries
relation views
proof summaries
6.3 Query Interface

Mechanism for requesting projections.

Inputs:

filters
context
identity axes
constraints
7. Projection Types
7.1 Reconstruction Projection
attempts to rebuild structure
must declare fidelity limits
7.2 Relational Projection
exposes relationships
may include similarity, alignment, etc.
7.3 Proof Projection
exposes validation results
must declare proof coverage
7.4 Event Projection
shows resolved event structures
bounded by EventEnvelope limits
7.5 Distinction Projection
exposes active distinction field slices
highly context-dependent
8. Required Projection Declaration

Every projection must declare:

preserved_axes
omitted_axes
uncertainty
authority_ceiling
source_refs
lens/context
9. Authority Ceiling

The maximum claim a projection is allowed to make.

Examples:

Projection Type	Authority
raw payload view	full fidelity
reconstruction	bounded
relation view	non-authoritative
manifold state	non-authoritative
10. Loss and Fidelity

Projection must explicitly declare:

loss_type
reconstruction_bounds
confidence

Rule:

No silent loss is allowed.

11. Relationship to Ledger

Projection:

reads ledger nodes
reads lineage
reads proofs

It does NOT:

mutate ledger
create nodes
alter history
12. Relationship to Runtime Manifold

Projection may expose:

active state
candidate relations
attention distribution

But:

manifold state is non-authoritative

13. Relationship to Agents

Agents:

read through projection
propose through projection

They cannot:

access raw ledger directly
mutate truth
bypass proof
14. Indexing Constraints
Constraint 1 — No Identity Assumption

Indexing cannot define identity.

Constraint 2 — No Hidden Filtering

All filtering must be declared.

Constraint 3 — No Cross-Layer Collapse

Index cannot merge manifold and ledger semantics.

15. Projection Constraints
Constraint 1 — Must Declare Scope

What is included vs excluded.

Constraint 2 — Must Declare Lens

What basis/context was used.

Constraint 3 — Must Declare Authority

What claims are allowed.

Constraint 4 — Must Declare Uncertainty

Confidence must be explicit.

16. Failure Modes
Projection Inflation

Projection treated as truth.

Hidden Loss

Important structure omitted without declaration.

Authority Leakage

Projection claims identity without proof.

Index Bias

Indexing filters distort structure invisibly.

Reconstruction Overclaim

Rebuilt structure assumed to be exact.

17. Minimal Projection Schema
{
  projection_id,
  source_refs,
  preserved_axes,
  omitted_axes,
  uncertainty,
  authority_ceiling,
  context,
  output_data
}
18. Summary

The Projection / Index Substrate:

provides access to the system
exposes bounded views
supports querying and reconstruction
enforces epistemic honesty

It is:

the interface layer between DME and external systems

🔥 Final Anchor

Everything seen through projection is a view—not the thing itself.