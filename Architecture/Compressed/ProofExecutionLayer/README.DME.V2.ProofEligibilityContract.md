# README.DME.V2.ProofEligibilityContract.md

## 1. Identity

**Name:** Proof Eligibility Contract  
**Type:** Validation Gate Contract  
**Tier Placement:** Tier 3 — Proof / Validation  
**Position:** Runtime Manifold → Proof Matrix

## 2. Purpose

The Proof Eligibility Contract defines which runtime candidates may enter the Proof Matrix, under what declared use, and with what authority ceiling.

It prevents unstable manifold outputs from being treated as identities.

## 3. Core Definition

A candidate is proof-eligible when it has sufficient provenance, declared basis, measurable state history, uncertainty bounds, and a declared proof purpose.

Proof eligibility does not mean the candidate is proven.

It means:

> this candidate may be tested.

## 4. Candidate Types

### 4.1 Distinction Candidate

A bounded Distinction-State or resolved distinction region.

Used for:
- local identity support
- routing
- indexing
- event resolution

### 4.2 Relation Candidate

A proposed relation between two or more Distinction-States.

Used for:
- similarity
- alignment
- recurrence
- separation
- transition
- convergence

### 4.3 Topology Candidate

A multi-relation structure.

Used for:
- neighborhood
- basin
- trajectory
- recurrence field
- attractor candidate

### 4.4 Reconstruction Candidate

A proposed recovered or regenerated structure.

Used for:
- replay
- recovery
- reduction safety
- reconstruction proof

### 4.5 Governance Candidate

A proposed mutation, reduction, merge, quarantine, promotion, or agent-authorized action.

Used for:
- authority transition
- system mutation
- canon-adjacent later work

## 5. Required Eligibility Fields

Every candidate must declare:

```json
{
  "candidate_id": "...",
  "candidate_type": "distinction | relation | topology | reconstruction | governance",
  "source_refs": [],
  "lineage_refs": [],
  "basis_refs": [],
  "state_history_refs": [],
  "invariant_axes_requested": [],
  "omitted_axes": [],
  "uncertainty": {},
  "declared_use": "...",
  "authority_requested": "...",
  "failure_policy": "defer | reject | quarantine | route_low_authority"
}
6. Declared Proof Standards
6.1 Single-Axis Proof

Tests one invariant axis.

Example:

axis = separation

Allowed for:

indexing
local routing
low-stakes query
provisional distinction

Not allowed for:

identity commitment
reduction
recovery
governance mutation
agent authority escalation

Authority ceiling:

support_only
6.2 Partial Multi-Axis Proof

Tests a declared subset of axes.

Example:

axes = [composition, alignment, persistence]

Allowed for:

relation candidates
topology candidates
bounded reconstruction
projection support
low/medium-stakes decisions

Authority ceiling depends on use:

bounded_identity_candidate
6.3 Full Proof

Tests all six axes:

composition
magnitude
alignment
persistence
separation
convergence

Required for:

identity commitment
recovery proof
reduction proof
merge/separation proof
governance proof
agent-authorized action

Authority ceiling:

identity_or_governance_eligible
7. Use-Standard Mapping
Declared Use	Minimum Standard
search / index	single-axis
query routing	single-axis
projection summary	single-axis or partial
relation candidate	partial
neighborhood / basin / trajectory	partial
event resolution	partial
identity commitment	full
reconstruction	partial or full
recovery proof	full
reduction proof	full
governance mutation	full
agent action authority	full
8. Eligibility Conditions

A candidate may enter proof if:

lineage_valid(candidate)
AND basis_declared(candidate)
AND uncertainty_declared(candidate)
AND state_history_sufficient(candidate)
AND declared_use_present(candidate)
AND requested_axes_present(candidate)

For topology/relation candidates:

relation_context_declared(candidate)
AND participating_states_resolvable(candidate)

For reconstruction/governance candidates:

proposed_use_declared(candidate)
AND challenge_protocol_declared(candidate)
9. Axis Sufficiency

Requested axes must match declared use.

A candidate must not request less proof than its intended authority requires.

If it does:

candidate → route_low_authority OR reject
10. Omitted Axis Law

Any omitted axis must be declared.

For each omitted axis:

{
  "axis": "magnitude",
  "reason": "not relevant to declared search use",
  "risk": "magnitude drift not evaluated"
}

Omitted axes lower authority ceiling.

11. Stability Requirement

A candidate does not need to be stable across all axes to be proof-eligible.

It must be stable enough across the axes required by declared use.

eligible(candidate) ≠ proven(candidate)
12. Failure Handling
Missing lineage

Reject.

Missing basis

Reject.

Missing uncertainty

Reject.

Insufficient state history

Defer.

Axis/use mismatch

Route to lower authority or reject.

High uncertainty

Defer, quarantine, or run uncertainty-targeting challenge.

13. Relationship to Proof Matrix

The Proof Eligibility Contract decides:

may_enter_proof_space(candidate)

The Proof Matrix decides:

does_candidate_survive_declared_constraints(candidate)
14. Relationship to Governance

Governance may only consider candidates whose proof standard satisfies requested authority.

No governance mutation may be authorized from single-axis proof.

15. Summary

Proof eligibility is the gate between manifold proposal and proof evaluation.

It ensures every candidate entering proof-space has:

lineage
basis
uncertainty
state history
declared use
declared axes
authority ceiling

Final anchor:

A candidate does not need to prove everything. It must prove enough for what it asks to become.