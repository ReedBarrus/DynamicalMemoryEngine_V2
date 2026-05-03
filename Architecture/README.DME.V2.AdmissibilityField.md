# README.DME.V2.AdmissibilityField.md

## 1. Identity

**Name:** Admissibility Field  
**Type:** Runtime Constraint Field / Governance Bridge  
**Placement:** Runtime Field Rules → Decision Topology Mapping → Proof Eligibility → T5 Authority Field  
**Substrate Placement:** Runtime Manifold + Ledger + Projection / Index  

---

## 2. Purpose

The Admissibility Field defines the dynamic runtime constraint envelope that determines which activations, interactions, transitions, projections, proof entries, deferrals, and candidate emissions are permitted under current conditions.

It exists so DME can run bounded recursion without allowing runtime activity to become authority.

It answers:

> What may happen next, under this local field, constraint regime, uncertainty posture, budget, lineage, and governance context?

---

## 3. Core Definition

Admissibility is the local field of permitted transition.

```text
Admissible(s → s') iff:
  transition remains inside declared constraint envelope
```
Expanded:

Admissible(s → s') iff:
  locality_valid
  AND lineage_valid
  AND uncertainty_within_mode
  AND budget_available
  AND distinguishability_supported
  AND constraints_compatible
  AND temporal_order_preserved
  AND projection_boundary_respected
  AND proof_preconditions_met_if_required
  AND authority_ceiling_not_exceeded

Admissibility is not binary by default.

It may return:

allow
allow_limited
defer
reduce_resolution
route_to_index
route_to_projection
route_to_proof
quarantine
reject
## 4. Non-Claims

Admissibility is not:

proof
identity
governance
authority
semantic judgment
truth
policy mutation
agent permission by itself

Admissibility governs runtime possibility.

Authority governs permitted consequence.

Admissibility = what transitions may occur.
Authority = what consequences may persist, mutate, expose, delegate, or govern.
## 5. Relationship to T1

T1 defines Admissibility Conservation:

all state transitions must remain inside declared constraints.

The Admissibility Field operationalizes that invariant.

T1 says:

transition must be lawful

This document defines:

how runtime evaluates transition lawfulness
## 6. Relationship to T5

T5 may configure admissibility profiles.

The Admissibility Field enforces those profiles during runtime.

T5 authority configures admissibility.
Admissibility governs transition possibility.
Admissibility does not grant authority.

Example:

T5 grants agent diagnostic mode.
Admissibility Field allows high-uncertainty inspection.
Admissibility Field blocks mutation.
## 7. Admissibility Axes

Each admissibility evaluation produces a vector:

A_adm(x) = [
  locality_validity,
  lineage_validity,
  uncertainty_bound,
  budget_cost_bound,
  salience_threshold,
  distinguishability_support,
  constraint_compatibility,
  temporal_validity,
  projection_boundary,
  proof_precondition
]

These axes do not define identity.

They define runtime permission geometry.

## 8. Axis 1 — Locality Validity

Locality validity determines whether a transition remains within reachable, observable, or influence-admissible bounds.

Checks:

target ∈ local_neighborhood
OR target ∈ query_scope
OR target ∈ shared_lineage_scope
OR target ∈ proof_requested_scope

Failure modes:

global reach assumption
invalid neighbor expansion
cross-scope interaction
unbounded field spread

Possible outputs:

allow
allow_limited
reduce_scope
reject
## 9. Axis 2 — Lineage Validity

Lineage validity determines whether a transition preserves provenance, source refs, transform refs, and trace continuity.

Checks:

source_refs valid
parent_refs valid
transform_refs declared
trace path reconstructable
lineage authority ceiling preserved

Failure modes:

broken lineage
orphan transition
hidden transform
unsupported echo
reconstruction gap

Possible outputs:

allow
defer
route_to_reconstruction
reject
## 10. Axis 3 — Uncertainty Bound

Uncertainty bound determines whether unresolved distinguishability is acceptable for the current mode.

Checks:

H ≤ H_mode_max
missing_axes within tolerance
cross_basis_disagreement within tolerance
instability within tolerance

High uncertainty does not always reject.

In diagnostic or exploratory mode, high uncertainty may be admissible.

In governance mutation mode, high uncertainty usually blocks consequence.

Possible outputs:

allow
allow_limited
route_to_uncertainty_probe
route_to_proof
quarantine
reject
## 11. Axis 4 — Budget / Cost Bound

Budget/cost bound determines whether runtime has enough attention-energy, compute, time, or execution budget to proceed.

Checks:

cost_estimate ≤ mode_cost_max
attention_available
activation_budget_available
branch_depth_available
counterfactual_budget_available

Failure modes:

branch explosion
field overactivation
proof overload
projection overquery
agent/tool cost runaway

Possible outputs:

allow
reduce_resolution
route_to_index
defer
reject
## 12. Axis 5 — Salience Threshold

Salience threshold determines whether the transition has enough processing priority to consume active runtime resources.

Checks:

salience ≥ mode_salience_min
OR query_requested
OR failure_related
OR proof_requested
OR governance_requested

Salience is not authority.

Salience only affects runtime processing priority.

Possible outputs:

allow
defer
decay
release
route_to_index
## 13. Axis 6 — Distinguishability Support

Distinguishability support determines whether the proposed transition preserves or improves resolvable structure.

Checks:

separation ≥ τ
support ≥ σ
uncertainty ≤ υ OR mode allows uncertainty
distinction boundary remains traceable

Failure modes:

distinction collapse
over-merge
underresolved region
semantic projection
unsupported transition

Possible outputs:

allow
allow_limited
reduce_resolution
route_to_structural_probe
defer
reject
## 14. Axis 7 — Constraint Compatibility

Constraint compatibility determines whether the transition violates declared structural, runtime, proof, projection, agent, or governance constraints.

Checks:

operator_allowed
mode_allows_transition
field_constraints_satisfied
agent_scope_satisfied
projection_scope_satisfied
authority_ceiling_preserved

Failure modes:

operator smuggling
authority leakage
projection overclaim
agent overreach
cross-layer leakage

Possible outputs:

allow
allow_limited
route_low_authority
quarantine
reject
## 15. Axis 8 — Temporal Validity

Temporal validity determines whether causal ordering, replay path, recurrence, and trace continuity remain lawful.

Checks:

temporal_order_preserved
echo_source_precedes_current_use
replay_path_valid
recursion_trace_valid
expiry_not_reached

Failure modes:

future information leak
invalid echo
stale authority
recurrence without trace
reordered cause/effect

Possible outputs:

allow
defer
expire
route_to_replay
reject
## 16. Axis 9 — Projection Boundary

Projection boundary determines whether a transition or output remains within declared exposure limits.

Checks:

projection_scope_valid
preserved_axes declared
omitted_axes declared
loss_profile declared
audience allowed
authority_ceiling visible

Failure modes:

projection inflation
hidden omission
overexposure
reconstruction overclaim
agent sees beyond scope

Possible outputs:

allow_projection
redact
summarize
route_to_lower_projection
reject
## 17. Axis 10 — Proof Precondition

Proof precondition determines whether a candidate may enter proof-space.

Checks:

lineage_valid
basis_declared
uncertainty_declared
state_history_sufficient
declared_use_present
requested_axes_present
challenge_protocol_declared_if_needed

Proof precondition is not proof.

It only decides whether proof testing may begin.

Possible outputs:

proof_eligible
defer
request_more_evidence
route_low_authority
reject
## 18. Admissibility Modes

Admissibility modes define threshold profiles for runtime behavior.

Modes are not authority states.

They are runtime operating regimes.

mode = threshold profile + permitted outputs + blocked outputs
## 19. Mode — Exploratory

Used when the system is discovering structure.

Characteristics:

uncertainty_tolerance: high
cost_tolerance: bounded-medium
proof_required: no
mutation_allowed: no
output_ceiling: candidate_or_trace

Allows:

activation
local exploration
provisional relation candidates
uncertainty-bearing traces

Blocks:

identity commitment
mutation
training export
agent authority expansion
## 20. Mode — Diagnostic

Used when inspecting ambiguity, failure, instability, drift, or anomaly.

Characteristics:

uncertainty_tolerance: high
salience_min: low if failure/uncertainty-linked
cost_tolerance: medium
proof_required: no unless consequence requested
output_ceiling: diagnostic_trace

Allows:

high-uncertainty probing
failure surface mapping
branch inspection
relation anomaly detection

Blocks:

mutation
reduction
durable promotion
## 21. Mode — Exploitative

Used when the system prefers known stable paths.

Characteristics:

uncertainty_tolerance: low-medium
cost_tolerance: low-medium
proof_support_preferred: yes
output_ceiling: bounded_runtime_use

Allows:

routing through stable paths
reuse of proven/retained structures
low-cost projection
bounded runtime activation

Blocks:

high-risk branch expansion
speculative mutation
unsupported merge/reduction
## 22. Mode — Constrained

Used under limited budget, narrow scope, or safety-sensitive execution.

Characteristics:

uncertainty_tolerance: low
cost_tolerance: low
locality_radius: narrow
output_ceiling: trace_or_projection_only

Allows:

limited projection
index lookup
low-cost structural comparison
defer/release

Blocks:

broad manifold exploration
branch explosion
high-cost proof challenge
agent expansion
## 23. Mode — Proof-Seeking

Used when preparing candidates for T4.

Characteristics:

uncertainty_tolerance: declared
lineage_required: strict
state_history_required: yes
basis_required: yes
output_ceiling: proof_candidate

Allows:

proof eligibility evaluation
perturbation preparation
reconstruction challenge setup
proof trace generation

Blocks:

governance mutation
authority expansion
projection overclaim
## 24. Mode — Recovery

Used when reconstructing, repairing, replaying, or restoring structure.

Characteristics:

lineage_required: strict
reversibility_required: yes
uncertainty_tolerance: medium
output_ceiling: reconstruction_or_repair_candidate

Allows:

replay
reconstruction
repair path search
failure trace echo
recovery proof preparation

Blocks:

deletion
reduction without proof
policy mutation
authority escalation
## 25. Mode — Quarantine

Used when structure is informative but unsafe, unstable, suspicious, contaminated, or authority-risky.

Characteristics:

output_ceiling: quarantine_trace
mutation_allowed: no
projection_allowed: restricted
echo_allowed: restricted

Allows:

retention under block
diagnostic inspection
proof challenge under isolation
failure preservation

Blocks:

runtime influence
projection expansion
agent access unless explicitly authorized
training emission
## 26. Mode — Projection-Only

Used when the system may expose a bounded view but may not activate, mutate, or expand runtime behavior.

Characteristics:

output_ceiling: bounded_projection
activation_allowed: no or limited
mutation_allowed: no
proof_required: depends on projection claim

Allows:

summaries
index lookup
bounded reconstruction views
proof/status exposure

Blocks:

active manifold exploration
mutation candidates
agent/tool execution
## 27. Mode — Agent-Limited

Used when an agent may interact with the system under constrained scope.

Characteristics:

allowed_reads: scoped_projection
allowed_actions: proposal_or_limited_tool
proof_required_for_mutation: yes
human_review_triggers: declared
output_ceiling: agent_proposal_or_trace

Allows:

projection reads
branch simulation
proposal emission
proof requests
scoped tool execution if authorized

Blocks:

direct ledger mutation
self-authority promotion
hidden tool use
training emission
## 28. Mode — Governance-Ready

Used when a candidate is being prepared for T5 review.

Characteristics:

proof_required: yes
consequence_map_required: yes
risk_model_required: yes
reversibility_plan_required: yes
monitoring_plan_required: yes
output_ceiling: governance_candidate

Allows:

authority sufficiency review
consequence mapping
mutation candidate packaging
human review routing

Blocks:

direct mutation
automatic authority grant
silent consequence
## 29. Admissibility Profile Schema
{
  "admissibility_profile_id": "...",
  "mode": "exploratory | diagnostic | exploitative | constrained | proof_seeking | recovery | quarantine | projection_only | agent_limited | governance_ready",
  "scope": {},
  "axes": {
    "locality_validity": {},
    "lineage_validity": {},
    "uncertainty_bound": {},
    "budget_cost_bound": {},
    "salience_threshold": {},
    "distinguishability_support": {},
    "constraint_compatibility": {},
    "temporal_validity": {},
    "projection_boundary": {},
    "proof_precondition": {}
  },
  "permitted_outputs": [],
  "blocked_outputs": [],
  "authority_ceiling": "...",
  "failure_policy": "defer | reduce_resolution | route_to_index | route_to_proof | quarantine | reject",
  "configured_by": {
    "source": "default | governance | user | agent_authority | runtime_policy",
    "refs": []
  },
  "expiry_or_review_window": {},
  "non_claims": [
    "admissibility_is_not_authority",
    "admissibility_is_not_proof",
    "admissibility_is_scope_bound"
  ]
}
## 30. Admissibility Decision Schema
{
  "admissibility_decision_id": "...",
  "profile_ref": "...",
  "candidate_transition": {
    "from": "...",
    "to": "...",
    "operator_path": [],
    "context": {}
  },
  "axis_results": {
    "locality_validity": {},
    "lineage_validity": {},
    "uncertainty_bound": {},
    "budget_cost_bound": {},
    "salience_threshold": {},
    "distinguishability_support": {},
    "constraint_compatibility": {},
    "temporal_validity": {},
    "projection_boundary": {},
    "proof_precondition": {}
  },
  "decision": "allow | allow_limited | defer | reduce_resolution | route_to_index | route_to_projection | route_to_proof | quarantine | reject",
  "output_ceiling": "trace_only | runtime_candidate | relation_candidate | topology_candidate | proof_candidate | projection_only | governance_candidate",
  "uncertainty": {},
  "lineage_refs": [],
  "authority_ceiling": "...",
  "non_claims": [
    "admissibility_decision_is_not_proof",
    "admissibility_decision_is_not_authority",
    "runtime_permission_is_not_persistence_permission"
  ]
}
## 31. Transition Outputs
Allow

    Transition may proceed inside declared scope.

Allow Limited

    Transition may proceed with reduced scope, reduced resolution, or reduced output authority.

Defer

    Transition pauses while retaining trace and uncertainty.

Reduce Resolution

    Transition proceeds using smaller field, lower scale, fewer branches, or index handles.

Route to Index

    Field-level processing is too expensive or unstable; emit support/index handle.

Route to Projection

    Expose bounded view instead of active runtime transition.

Route to Proof

    Candidate is mature enough or consequential enough to require T4.

Quarantine

    Preserve structure while blocking runtime consequence.

Reject

    Transition violates hard constraints.

## 32. Relationship to Decision Topology Mapping

Decision topology depends on admissibility.

A decision node exists only when multiple admissible, distinguishable outgoing transitions exist under uncertainty.

Decision Topology Mapping defines:

DecisionNode(Dᵢ) iff:
  |T_admissible(Dᵢ)| ≥ 2
  AND distinguishable(T₁...Tₙ) ≥ τ_branch
  AND H(Dᵢ) ≥ H_min
  AND realized_transition exists or is being selected

The Admissibility Field determines T_admissible(Dᵢ).

So:

Admissibility Field → possible branches
Decision Topology Mapping → branch geometry
Proof Ecology → branch survival
Governance → branch consequence
## 33. Relationship to Runtime Manifold

The Runtime Manifold uses admissibility to constrain:

activation
interaction
interference
relation formation
field expansion
branch projection
decay / release
runtime candidate emission

The manifold may sustain active runtime persistence, but only inside admissibility bounds.

The manifold cannot grant durable identity persistence or governance authority.

## 34. Relationship to Attention-Energy Dynamics

Attention-Energy provides the runtime quantities that admissibility evaluates.

Relevant values include:

information_density
activation_energy
uncertainty_entropy
constraint_strength
phase_alignment
salience_weight
recursion_depth
cost
curvature
recurrence
retention_pressure

Admissibility decides whether those quantities permit further transition.

Example:

high salience + high uncertainty + diagnostic mode → allow uncertainty probe
high salience + high uncertainty + governance mode → defer or request proof
35. Relationship to Field Differential Dynamics

Field Differential Dynamics exposes pressure, gradient, and flow.

Admissibility evaluates whether those dynamics may continue, expand, or route elsewhere.

Examples:

activation_flux too high → reduce resolution or budget damp
uncertainty_pressure high → diagnostic probe or quarantine
curvature spike → relation/proof candidate or stabilization
gradient explosion → defer / reduce / quarantine
## 36. Relationship to Proof Eligibility

Admissibility gates proof entry.

Proof Eligibility determines whether a candidate has enough declared structure to be tested.

The proof precondition axis checks:

lineage_valid
basis_declared
uncertainty_declared
state_history_sufficient
declared_use_present
requested_axes_present
challenge_protocol_declared_if_needed

If satisfied:

route_to_proof

If not:

defer
request_more_evidence
route_low_authority
reject
## 37. Relationship to T5 Authority Field

T5 may update admissibility profiles.

Examples:

agent moved to agent_limited mode
structure moved to quarantine mode
behavior candidate moved to proof_seeking mode
projection moved to projection_only mode
mutation candidate moved to governance_ready mode

But the Admissibility Field cannot authorize consequence.

It can only enforce runtime permission.

## 38. Relationship to Ledger

The ledger may record:

admissibility profiles
admissibility decisions
mode changes
governance-configured constraints
transition denials
quarantine entries
proof-routing decisions

The ledger does not decide admissibility by itself.

It preserves admissibility history for replay, audit, and proof.

## 39. Relationship to Projection / Index

Projection and index are often used when admissibility blocks full runtime expansion.

Examples:

field_too_expensive → index_projection
underresolved_region → uncertainty_record
projection_only_mode → bounded view
agent_limited_mode → scoped projection

Every projection must declare:

included scope
omitted scope
preserved axes
omitted axes
uncertainty
authority ceiling
## 40. Governance Configuration of Admissibility

Governance may configure admissibility by issuing an admissibility profile update.

Example:

{
  "governance_decision": "accept_limited",
  "effect": {
    "set_admissibility_mode": "agent_limited",
    "scope": {
      "agent": "agent:42",
      "tools": ["read_index", "simulate_branch"],
      "duration": "session"
    }
  }
}

This changes what transitions are allowed, not what consequences are authorized beyond that scope.

## 41. Constraint Laws
Law 1 — Admissibility Is Not Authority

    Runtime permission is not consequence permission.

Law 2 — Admissibility Is Local

    No transition is globally admissible by default.

Law 3 — Admissibility Is Mode-Dependent

    Different runtime regimes allow different uncertainty, cost, salience, and proof thresholds.

Law 4 — Admissibility Must Declare Output Ceiling

    Every admissibility decision must declare what kind of output it may produce.

Law 5 — Admissibility Must Preserve Trace

    Allowed, rejected, deferred, and quarantined transitions must remain traceable when consequential.

Law 6 — High Salience Is Not Sufficient

    Salience may trigger processing, but cannot override constraint compatibility, lineage, proof preconditions, or authority ceiling.

Law 7 — High Uncertainty Is Contextual

    High uncertainty may be admissible in exploratory or diagnostic mode and inadmissible in governance or mutation contexts.

Law 8 — Admissibility Profiles Are Revocable

    Profiles configured by governance may expire, demote, or be revoked.

## 42. Failure Modes
Admissibility / Authority Collapse

    Runtime permission is mistaken for governance authority.

Salience Override

    High salience bypasses proof, lineage, or constraint checks.

Cost Blindness

    Expensive recursion proceeds without budget declaration.

Uncertainty Misrouting

    High uncertainty is either suppressed when it should be probed or allowed when consequence is too high.

Projection Escape

    A blocked runtime transition escapes through an overbroad projection.

Agent Scope Drift

    Agent-limited mode expands through repeated local allowances.

Mode Confusion

    A diagnostic profile is used as if it were governance-ready.

Proof-Gate Bypass

    Candidate enters proof without required proof preconditions.

Quarantine Leakage

    Quarantined structure influences runtime or projection beyond scope.

Stale Profile

    Expired or superseded admissibility profile continues to regulate runtime.

## 43. Summary

The Admissibility Field defines the runtime permission geometry of DME/RIFT.

It converts:

potential transitions
→ admissibility evaluation
→ bounded runtime permission
→ routing / deferral / proof entry / quarantine

It preserves the boundary:

possible ≠ admissible
admissible ≠ proven
proven ≠ authorized
authorized ≠ permanent

Final anchor:

    Admissibility governs what may happen next; authority governs what consequences may persist