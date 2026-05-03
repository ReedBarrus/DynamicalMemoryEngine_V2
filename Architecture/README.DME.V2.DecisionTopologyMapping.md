# README.DME.V2.DecisionTopologyMapping.md

## 1. Identity

**Name:** Decision Topology Mapping  
**Type:** Applied Projection / Behavioral Topology Instrument  
**Placement:** T3 Observables & Detectors → T4 Proof Ecology → T5 Authority Field  
**Substrate Placement:** Ledger + Runtime Manifold + Projection / Index  

---

## 2. Purpose

Decision Topology Mapping converts execution traces into branchable relational structure over decision space.

It answers:

> Where did behavior branch, what paths were available, what path was realized, what failed, what repaired, and what recurring topology emerges?

Decision Topology Mapping does not authorize behavior change.

It creates a map.

---

## 3. Core Definition

A decision topology is a graph/field of detected decision nodes connected by admissible transitions.

```text
DecisionTopology =
  DecisionNodes
+ TransitionEdges
+ RealizedTrajectories
+ RejectedBranches
+ FailureSurfaces
+ RepairPaths
+ DriftRegions
+ ConvergenceRegions
+ BehavioralAttractors

It is not:

agency
intent
semantic choice
proof
governance
authority

It is:

a bounded projection of behavior as navigable structure.

4. Core Principle
Mapping says: here is the shape of behavior.
Proof says: this behavior survives challenge.
Governance says: this behavior may alter future execution.
5. Inputs

Decision Topology Mapping may read from:

execution traces
model calls
tool calls
OS/runtime events
file diffs
test results
failure logs
repair attempts
projection requests
agent proposals
ledger lineage
runtime state histories
T3 behavioral observables
T3 decision node detections

All inputs must preserve:

source refs
lineage refs
time ordering
scope
uncertainty
authority ceiling
6. Output

The output is a bounded Decision Topology Projection.

{
  "decision_topology_id": "...",
  "source_trace_refs": [],
  "scope": {},
  "decision_nodes": [],
  "transition_edges": [],
  "realized_trajectories": [],
  "rejected_branches": [],
  "failure_surfaces": [],
  "repair_paths": [],
  "drift_regions": [],
  "convergence_regions": [],
  "behavioral_attractors": [],
  "uncertainty": {},
  "authority": {
    "ceiling": "mapping_only",
    "proof_status": "not_proven"
  },
  "non_claims": [
    "mapping_is_not_proof",
    "mapping_is_not_authority",
    "mapping_is_not_intent",
    "mapping_is_not_semantic_truth"
  ]
}
7. Decision Node

A decision node is a detected condition within distinction-space recursion.

A Distinction-State qualifies as a decision node when its local transition field contains multiple admissible, distinguishable outgoing paths under non-zero uncertainty.

DecisionNode(Dᵢ) iff:
  |T_admissible(Dᵢ)| ≥ 2
  AND distinguishable(T₁...Tₙ) ≥ τ_branch
  AND H(Dᵢ) ≥ H_min
  AND realized_transition exists or is being selected

A decision node is not a new primitive object.

It is:

a region of constrained possibility where multiple futures are available and one transition becomes realized.

8. Decision Node Schema
{
  "decision_node_id": "...",
  "state_ref": "...",
  "trace_ref": "...",
  "local_frame": {
    "axes": [
      "composition",
      "magnitude",
      "alignment",
      "persistence",
      "separation",
      "convergence"
    ],
    "domain": "...",
    "scale": "...",
    "metric": "..."
  },
  "state_vector": {
    "information_density": null,
    "activation_energy": null,
    "uncertainty_entropy": null,
    "constraint_strength": null,
    "phase_alignment": null,
    "salience_weight": null,
    "recursion_depth": null
  },
  "candidate_transitions": [],
  "realized_transition": null,
  "rejected_transitions": [],
  "branching_entropy": null,
  "transition_distinguishability": {},
  "selection_pressure": {},
  "uncertainty": {},
  "authority": {
    "ceiling": "detection_only"
  }
}
9. Transition Edge

A transition edge connects one decision node or Distinction-State to another through an admissible realized or candidate transition.

edge = Dᵢ → Dⱼ under operator path + context + constraints

Transition edges may be:

realized
rejected
counterfactual
failed
repaired
deferred
quarantined
10. Transition Edge Schema
{
  "transition_id": "...",
  "from_node": "...",
  "to_node": "...",
  "transition_status": "realized | rejected | counterfactual | failed | repaired | deferred | quarantined",
  "operator_path": [],
  "tool_or_action_refs": [],
  "constraint_context": {},
  "estimated_delta": {},
  "observed_delta": {},
  "cost": {},
  "uncertainty": {},
  "failure_refs": [],
  "repair_refs": [],
  "proof_refs": [],
  "authority": {
    "ceiling": "transition_candidate"
  }
}
11. Execution Trace Formation

Execution traces are ordered behavioral records.

They may include:

task
decision point
action/tool call
result
failure
repair
retry
test result
projection
proof request
governance action

A trace is not behavior proof.

A trace is:

a realized trajectory through decision space.

trace = D₁ → D₂ → D₃ → ...
12. Mapping Process
Step 1 — Capture Emissions

Capture:

model calls
tool calls
OS events
diffs
test results
failures
repairs

No interpretation occurs here.

Step 2 — Bind Execution Trace

Bind emissions into ordered traces:

task → decision → action → result → repair → result

This is ledger/provenance material.

Step 3 — Detect Decision Nodes

Use T3 behavioral observables and decision-node detection to locate branching regions.

Observable inputs include:

branching_factor
candidate_transition_count
transition_distinguishability
transition_uncertainty
selection_pressure
attention_distribution
constraint_pressure
tool/action availability
failure_surface proximity
repair_path availability
realized_transition
rejected_transition_refs
Step 4 — Build Transition Edges

For each decision node, identify:

admissible outgoing transitions
realized transition
rejected transitions
failed transitions
repair transitions
counterfactual transitions
Step 5 — Project Decision Space

Construct the topology:

nodes = decision nodes
edges = admissible transitions
weights = attention-energy, uncertainty, constraint, cost, outcome evidence
Step 6 — Detect Behavioral Regions

Map:

failure surfaces
repair paths
tool-order attractors
drift regions
stable convergence regions
fragile success paths
high-cost convergence paths
low-cost convergence paths
Step 7 — Emit Proof Candidates

Decision topology may emit candidates into T4:

behavior candidate
branch candidate
repair-path candidate
tool-order candidate
mutation candidate
counterfactual candidate

These are proof candidates, not authorized mutations.

13. Behavioral Regions
Failure Surface

A region where transitions repeatedly produce failure, instability, or constraint violation.

{
  "failure_surface_id": "...",
  "node_refs": [],
  "transition_refs": [],
  "failure_modes": [],
  "recurrence": null,
  "uncertainty": {},
  "authority": {
    "ceiling": "mapped_failure_region"
  }
}
Repair Path

A sequence of transitions that restores admissibility, task alignment, or structural coherence after failure.

{
  "repair_path_id": "...",
  "source_failure_refs": [],
  "transition_sequence": [],
  "repair_cost": {},
  "reconstruction_effect": {},
  "success_rate": null,
  "authority": {
    "ceiling": "repair_candidate"
  }
}
Drift Region

A region where behavior moves away from task identity, proof constraints, or declared scope.

{
  "drift_region_id": "...",
  "node_refs": [],
  "drift_axis": [],
  "drift_magnitude": null,
  "drift_direction": {},
  "uncertainty": {},
  "authority": {
    "ceiling": "drift_candidate"
  }
}
Convergence Region

A region where multiple trajectories converge toward stable task completion, structural coherence, or repair success.

{
  "convergence_region_id": "...",
  "trajectory_refs": [],
  "convergence_axes": [],
  "stability": {},
  "cost_profile": {},
  "authority": {
    "ceiling": "convergence_candidate"
  }
}
Behavioral Attractor

A recurring decision/transition pattern that repeatedly draws execution into similar paths.

{
  "behavioral_attractor_id": "...",
  "node_refs": [],
  "transition_refs": [],
  "recurrence_strength": null,
  "retention_pressure": null,
  "success_profile": {},
  "failure_profile": {},
  "authority": {
    "ceiling": "attractor_candidate"
  }
}
14. Branch Projection

Decision Topology Mapping may generate alternate candidate branches.

Questions:

What else could the system have done?
Which tool order was available?
Which constraint was ignored?
Which repair path would preserve identity better?
Which lower-cost path was admissible?

These branches are:

candidate futures
not actions
not proof
not governance
15. Counterfactual Replay

Counterfactual branches may be routed to T4 for proof challenge.

Replay tests may ask:

Would this branch preserve task identity?
Would this branch reduce drift?
Would this branch improve recovery?
Would this branch violate constraints?
Would this branch survive context shift?
Would this branch remain admissible under perturbation?

Counterfactual replay is proof preparation.

It is not mutation.

16. Coherence Scoring

Decision topology may produce provisional coherence scores over invariant axes:

composition
magnitude
alignment
persistence
separation
convergence

These scores estimate:

task identity preservation
drift reduction
repair reliability
transition stability
cost coherence
scope preservation

Coherence scoring is evidence.

It is not proof by itself.

17. Mutation Candidate Formation

If a behavioral pattern appears promising, the mapping layer may emit mutation candidates.

Examples:

prompt constraint mutation
tool-order mutation
memory retrieval mutation
test-gate mutation
autonomy limit mutation
proof-threshold mutation
projection-scope mutation
retry-strategy mutation
branch-depth mutation

Mutation candidates must enter T4 and T5.

They are not self-authorizing.

18. Relationship to T0

T0 defines the primitives that make decision topology possible:

potential
constraint
attention
uncertainty
locality
distinction
relation
recursion
authority

Decision topology is not primitive.

It is an applied projection over these primitives.

19. Relationship to T1

Decision Topology Mapping must preserve T1 invariants:

provenance
admissibility
locality
uncertainty
attention-energy budget
temporal order
failure legibility
projection boundary
authority boundary
recursion trace

Mapping may not silently collapse branches, erase failures, or inflate authority.

20. Relationship to T2

Decision Topology Mapping is composed from T2 operators:

Expose
Record
Echo
Select
Compare
Project
Release

Common composition:

Record execution trace
→ Echo prior traces
→ Compare branch outcomes
→ Project decision topology
→ Release/defer unresolved branches

It introduces no new primitive operator.

21. Relationship to T3

T3 provides the measurement foundation.

Decision Topology Mapping uses:

behavioral observables
decision node detections
lifecycle classifications
failure detectors
repair-loop detectors
tool-order attractor detectors
drift detectors
convergence detectors

T3 says:

this pattern is worth tracking.

Decision topology says:

this is the navigable shape of behavior.

22. Relationship to T4

T4 challenges decision topology outputs.

Decision topology may emit:

behavior candidate
branch candidate
repair candidate
mutation candidate
counterfactual candidate

T4 asks:

does this behavioral structure survive lawful perturbation?
23. Relationship to T5

T5 decides whether proven behavioral structures may alter future behavior.

Governance may:

accept
reject
defer
quarantine
route_low_authority
request human review
authorize scoped policy update

Decision topology cannot perform those actions by itself.

24. Relationship to Ledger

The ledger stores:

execution trace refs
decision node records
transition refs
proof traces
governance decisions
training-set emissions

The ledger does not simulate decision space.

It records the provenance of mapped behavior.

25. Relationship to Runtime Manifold

The runtime manifold may host active exploration of decision-space regions.

It may simulate:

branch pressure
transition salience
counterfactual interaction
drift gradients
repair-path convergence

But manifold exploration remains non-authoritative.

26. Relationship to Projection / Index

Decision Topology Mapping is exposed through projection/index surfaces.

Every projection must declare:

included traces
omitted traces
preserved axes
omitted axes
uncertainty
loss profile
authority ceiling

Projection is a view, not the behavior itself.

27. Canonical Training-Set Emission

Once enough authorized traces accumulate, the system may emit training-set records.

A training-set record may include:

{
  "training_record_id": "...",
  "input_or_task_spec": "...",
  "decision_topology_ref": "...",
  "action_trace_refs": [],
  "failure_mode_refs": [],
  "repair_path_refs": [],
  "proof_result_refs": [],
  "authority_decision_refs": [],
  "accepted_mutation_refs": [],
  "scope": {},
  "uncertainty": {},
  "non_claims": [
    "training_record_is_projection",
    "training_record_is_not_full_runtime",
    "training_record_is_not_universal_behavior"
  ]
}

Training-set emission requires:

proof support
governance authorization
projection honesty
lineage preservation
28. Constraints
Constraint 1 — No Intent Claim

Decision topology does not claim intent, desire, belief, or agency.

Constraint 2 — No Mapping Authority

Mapped behavior cannot alter runtime policy without proof/governance.

Constraint 3 — No Branch Erasure

Rejected, failed, deferred, and counterfactual branches must remain traceable if used.

Constraint 4 — No Behavioral Overfit

One successful path cannot become policy without proof challenge.

Constraint 5 — No Semantic Collapse

Labels may annotate decision regions but may not define them.

Constraint 6 — No Unbounded Counterfactuals

Branch projection must obey locality, budget, admissibility, and scope.

Constraint 7 — No Training Emission Without Governance

Training records require proof-supported, governance-authorized projection.

29. Failure Modes
False Decision Node

A deterministic transition is misclassified as a branching point.

Branch Inflation

Too many speculative branches overwhelm budget.

Branch Collapse

Rejected or failed paths are erased, hiding decision structure.

Trace Misbinding

Events are linked into the wrong execution trajectory.

Tool-Order Overfit

A tool sequence succeeds once and is treated as stable strategy.

Repair Path Inflation

A repair path is treated as generally valid without proof.

Drift Blindness

Task drift is not mapped or is hidden by success labels.

Mutation Leakage

A mutation candidate affects runtime before governance authorization.

Training Contamination

Training records include unproven, unauthorized, or projection-inflated behavior.

30. Summary

Decision Topology Mapping converts execution traces into navigable behavioral structure.

It maps:

decision nodes
transition edges
realized trajectories
rejected branches
counterfactual branches
failure surfaces
repair paths
drift regions
convergence regions
behavioral attractors
mutation candidates

It preserves the boundary:

mapped ≠ proven
proven ≠ authorized
branchable ≠ actionable

Final anchor:

Decision Topology Mapping turns behavior into a navigable field without giving the map authority over the territory.