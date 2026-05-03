# README.DME.V2.AgencyField.md

# DME V2 — Agency Field

## 1. Purpose

The Agency Field defines how DME V2 permits bounded actors to observe, query, simulate, propose, request proof, request governance, and execute scoped tools without allowing agency to become sovereignty, authority, proof, truth, identity, retention, or source access.

It answers:

> What may this actor do, through which projection, under what authority, admissibility mode, scope, tool boundary, retention posture, and revocation condition?

The Agency Field governs:

- user interaction boundaries
- local agent read access
- remote agent read access
- tool execution boundaries
- proposal emission
- branch simulation
- proof requests
- governance requests
- projection requests
- agent action receipts
- agent context retention
- agent authority lifecycle
- agent revocation
- agent overreach detection
- human review triggers

The Agency Field does not define:

- source truth
- identity
- proof
- governance authority
- retention authority
- semantic intent
- autonomous sovereignty
- canon
- self-authorizing mutation

Agency is controlled capability under authority and admissibility.

Agency is not sovereignty.

---

## 2. Placement

Runtime placement:

```text
Authority / Governance
→ Projection / Retention / Agency Feedback
→ Agency Field
→ Projection Field / Admissibility Field / Retention Field / Ledger
→ User / Agent / Tool / UI / Runtime

Operationally:

Governance grants scoped AgentAuthority.
Projection exposes bounded views.
Admissibility constrains what the agent may do next.
Retention records agent context and action trace.
Ledger preserves causal accountability.
Proof tests agent-proposed candidates.
Governance authorizes consequence.

The Agency Field sits between governed system state and bounded actors.

It is the action-rights geometry of DME V2.

3. Core Thesis

Agency is not autonomy by default.

Agency is a scoped capability field assigned to a bounded actor under explicit authority, projection, admissibility, retention, and governance constraints.

An agent may operate only through declared interfaces.

An agent may propose.

An agent may simulate.

An agent may request proof.

An agent may request governance.

An agent may execute scoped tools only if authorized.

An agent may not self-promote, mutate authority, bypass projection, write ledger truth directly, erase failures, hide uncertainty, emit training records, or become sovereign over runtime.

Final compression:

actor
→ authority scope
→ projection boundary
→ admissibility profile
→ allowed action
→ receipt
→ retention
→ proof/governance route if consequential

Core law:

Agency acts through projection.
Agency proceeds through admissibility.
Agency is recorded through retention and ledger.
Agency escalates through proof and governance.
Agency never self-authorizes consequence.
4. Authority Ceiling

The maximum authority of the Agency Field is:

scoped actor permission

The Agency Field may emit:

AgentIdentityRef
AgentAuthorityRequest
AgentAuthorityRecord
AgentSession
AgentActionRequest
AgentActionDecision
AgentActionReceipt
AgentReadPacketRequest
AgentReadPacket
AgentProposal
AgentSimulationRequest
AgentSimulationTrace
AgentProofRequest
AgentGovernanceRequest
AgentToolRequest
AgentToolExecutionReceipt
AgentViolationRecord
AgentRevocationRecord
AgentContextRetentionCandidate

The Agency Field may not emit:

identity proof
proof object
governance decision
mutation authority
source truth
ledger truth
retention authority
projection authority by itself
training-set emission
semantic truth
canon
5. Non-Claims

The Agency Field does not claim:

agency = sovereignty
agent = authority
agent confidence = proof
agent action = governance
agent proposal = mutation
agent read = source access
agent memory = identity
agent recurrence = retention authority
agent simulation = proof
tool access = mutation authority
human-in-the-loop = automatic correctness

Every AgentAuthorityRecord and AgentActionReceipt must carry explicit non-claims.

6. Agency vs Authority

Agency and authority are coupled but distinct.

Authority

Authority defines permitted consequence.

Authority answers:

What may this structure or actor affect?
Agency

Agency defines bounded actor capability.

Agency answers:

What may this actor do next?

An actor may have agency to:

read a projection
query an index
simulate a branch
emit a proposal
request proof
request governance
execute a scoped tool

without having authority to:

mutate system policy
alter admissibility profiles
write ledger truth
expand its own scope
emit training data
persist a structure
promote proof to consequence

Core law:

Agency is capability.
Authority is consequence permission.
7. Agency vs Admissibility

Admissibility governs runtime transition possibility.

Agency uses admissibility to decide whether a requested actor action may proceed.

Example:

AgentAuthority allows: simulate_branch
Active admissibility mode: agent_limited
AgentActionRequest: simulate branch from DecisionNode
Admissibility evaluates: locality, lineage, budget, uncertainty, projection boundary, proof precondition
Decision: allow_limited
Output ceiling: simulation_trace

Agency cannot bypass admissibility.

Agent permission is not transition permission by itself.

8. Agency vs Projection

Agents do not see the system directly.

Agents see projections.

Projection determines what is exposed.

Agency determines what the actor may do with that exposure.

Agent access must pass through:

ProjectionRequest
→ ProjectionDecision
→ AgentReadPacket
→ AgentActionRequest
→ AdmissibilityDecision
→ AgentActionReceipt

Core law:

No projection, no agent read.
No declared scope, no agent action.

Agents may inhabit projections.

They may not inhabit the ledger, proof matrix, authority field, retention field, or runtime manifold as sovereign actors.

9. Agency vs Retention

Agents generate traces.

Retention governs whether those traces persist.

Agent-generated retention candidates include:

read packets
query requests
projection requests
simulation requests
proposals
proof requests
governance requests
tool actions
failures
scope violations
repair attempts
rejected branches
counterfactual branches
human review triggers

Retention may preserve these for:

audit
replay
behavior topology mapping
proof preparation
governance review
revocation
training candidate review
agent accountability

Core law:

Agent activity must remain accountable.
Retention of agent trace does not grant agent authority.
10. Agency Field Inputs

The Agency Field may read from:

AgentAuthorityRecords
GovernanceDecisions
AdmissibilityProfiles
ProjectionRequests
ProjectionDecisions
AgentReadPackets
RetentionRecords
EchoEligibilityRecords
ReEntryHandles
DecisionTopologyProjections
DecisionNodes
TransitionEdges
ProofObjects
ProofFailures
Runtime observables
Authority observables
Agent violation records
Ledger causal signatures
Tool registry / tool scope declarations
Human review decisions

Every input must preserve:

lineage refs
source refs where applicable
projection refs
retention refs where applicable
governance refs
admissibility refs
temporal frame
uncertainty
authority ceiling
non-claims
11. Agency Field Outputs

The Agency Field may emit:

AgentIdentityRef
AgentAuthorityRequest
AgentAuthorityRecord
AgentSession
AgentReadPacket
AgentActionRequest
AgentActionDecision
AgentActionReceipt
AgentProposal
AgentSimulationTrace
AgentProofRequest
AgentGovernanceRequest
AgentToolExecutionReceipt
AgentViolationRecord
AgentRevocationRecord
AgentContextRetentionCandidate

Agency outputs are actor capability artifacts.

They are not proof, authority, identity, or source truth.

12. Agency Field Axes

Every agent action is evaluated across agency axes:

A_agent(x) = [
  actor_validity,
  authority_scope,
  projection_scope,
  admissibility_mode,
  tool_scope,
  proposal_scope,
  simulation_scope,
  proof_request_scope,
  governance_request_scope,
  retention_accountability,
  uncertainty_visibility,
  budget_cost_bound,
  human_review_trigger,
  revocation_conditions
]

These axes define actor capability geometry.

They do not define identity.

13. Axis 1 — Actor Validity

Actor validity determines whether the actor is known, scoped, and permitted to act.

Checks:

actor ref exists
actor type declared
session valid
authority record valid
expiry not reached
revocation not active
human review satisfied where required

Actor types may include:

user
local_agent
remote_agent
tool_agent
system_agent
governance_reviewer
proof_executor
retention_custodian
training_exporter

Failure modes:

unknown actor
expired session
revoked actor
missing authority record
actor type mismatch
impersonation
authority stale

Possible outputs:

allow_actor
allow_limited_actor
require_auth_refresh
require_human_review
reject_actor
quarantine_actor
14. Axis 2 — Authority Scope

Authority scope determines what consequence, if any, the actor may request or produce.

Agent authority dimensions may include:

read_projection
query_index
request_projection
simulate_branch
emit_proposal
request_proof
request_governance
execute_scoped_tool
configure_nothing

Blocked by default:

direct_ledger_mutation
self_authority_promotion
policy_mutation
admissibility_profile_mutation
retention_authority_mutation
projection_scope_expansion
training_emission
source_mutation
proof_object_creation
governance_decision_creation

Core law:

Agent authority is granted, scoped, revocable, and non-transferable.
15. Axis 3 — Projection Scope

Projection scope determines what the actor may see.

Projection scope must declare:

allowed projection modes
allowed refs
allowed fields
redacted fields
omitted axes
preserved axes
loss profile
expiry
downstream use limits

Agents may receive:

index_handle
query_view
diagnostic_view
runtime_slice
relation_candidate_view
topology_candidate_view
decision_map_view
proof_summary
governance_review_packet
agent_read_packet

Agents may not infer full system access from a projection.

Core law:

Agent visibility is projection-bound.
16. Axis 4 — Admissibility Mode

Agent actions must bind to an admissibility mode.

Common pairings:

read_projection          → projection_only
query_index              → projection_only
simulate_branch          → agent_limited
emit_proposal            → agent_limited
request_proof            → proof_seeking
request_governance       → governance_ready
execute_scoped_tool      → agent_limited + explicit tool scope
diagnostic_probe         → diagnostic
quarantine_inspection    → quarantine

Agent-Limited mode permits:

projection reads
branch simulation
proposal emission
proof requests
scoped tool execution if authorized

Agent-Limited mode blocks:

direct ledger mutation
self-authority promotion
hidden tool use
training emission
17. Axis 5 — Tool Scope

Tool scope determines whether an actor may execute or request a tool.

Tool scope must declare:

tool ref
tool family
allowed inputs
allowed outputs
side-effect level
environment scope
file/network scope
budget
timeout
human review trigger
rollback / repair bounds
receipt requirements

Tool side-effect levels:

read_only
projection_only
simulation_only
local_write_candidate
scoped_write
external_action
destructive_action
governance_required

Default rule:

Tools are denied unless explicitly scoped.

High-risk tools require proof/governance/human review depending on consequence.

18. Axis 6 — Proposal Scope

Proposal scope determines what kinds of candidates an actor may emit.

Allowed proposal types may include:

projection_candidate
relation_candidate
topology_candidate
behavior_candidate
proof_candidate
governance_candidate
retention_candidate
agent_authority_candidate
tool_scope_candidate
mutation_candidate

Proposal does not authorize itself.

Every proposal must declare:

source refs
projection refs
lineage refs
requested consequence
uncertainty
authority requested
admissibility mode requested
failure policy
non-claims

Core law:

Proposal is not mutation.
19. Axis 7 — Simulation Scope

Simulation scope determines whether an actor may explore counterfactuals.

Simulation may include:

branch simulation
tool-order simulation
repair-path simulation
projection-scope simulation
proof-prep simulation
admissibility-profile simulation
governance-consequence simulation

Simulation outputs:

simulation_trace
counterfactual_branch
repair_candidate
behavior_candidate
proof_candidate
governance_candidate

Simulation may not:

execute real side effects
mutate policy
update authority
write ledger truth directly
emit training data
bypass proof

Core law:

Simulation is candidate futures, not action.
20. Axis 8 — Proof Request Scope

Proof request scope determines whether an actor may request validation.

Proof requests must declare:

candidate refs
declared use
requested proof standard
requested invariant axes
omitted axes
authority requested
admissibility profile
perturbation limits
failure policy

Allowed proof request levels:

request_single_axis_proof
request_partial_multi_axis_proof
request_full_proof
request_reconstruction_proof
request_behavioral_proof
request_authority_sufficiency_proof

Agent proof requests do not run automatically unless admissibility permits.

Proof results do not grant agent authority.

21. Axis 9 — Governance Request Scope

Governance request scope determines whether an actor may request consequence review.

Governance requests must declare:

governance candidate type
requested authority vector
expected consequence
risk model
proof refs if required
admissibility refs
retention refs
projection refs
reversibility plan
monitoring plan
expiry/review window
human review need

Allowed governance request types:

request_projection_scope
request_retention_change
request_agent_authority
request_tool_scope
request_admissibility_profile
request_mutation_review
request_quarantine
request_revocation
request_training_export

Governance request is not governance decision.

22. Axis 10 — Retention Accountability

Every consequential agent action must produce a retention candidate or receipt.

Agent retention may include:

read packet receipt
projection request receipt
simulation trace
proposal trace
proof request trace
governance request trace
tool execution receipt
failure receipt
violation record
human review trigger
revocation record

Retention modes may include:

agent_context_retention
diagnostic_retention
projection_retention
governance_retention
quarantine_retention
training_candidate_hold

Core law:

No consequential agent action without trace.
23. Axis 11 — Uncertainty Visibility

Agents may not hide uncertainty.

Agent-facing projections and outputs must preserve:

source uncertainty
projection uncertainty
proof uncertainty
governance uncertainty
retention uncertainty
simulation uncertainty
tool execution uncertainty
omitted axes
loss profile
authority ceiling

Failure modes:

confidence inflation
omitted uncertainty
simulation result presented as proof
projection summary presented as source
proof uncertainty hidden from governance request

Core law:

Agent output must preserve uncertainty posture.
24. Axis 12 — Budget / Cost Bound

Agent actions consume bounded budget.

Budget may include:

projection budget
query budget
simulation budget
proof request budget
tool execution budget
token/compute budget
branch budget
retention budget
governance review budget

Failure modes:

tool cost runaway
branch explosion
proof overload
projection overquery
agent loop
retention flood

Possible outputs:

allow
allow_limited
reduce_scope
route_to_index
defer
reject
quarantine
25. Axis 13 — Human Review Trigger

Some agent actions require human review before execution or consequence.

Human review triggers may include:

destructive tool action
external side effect
authority expansion
policy mutation
admissibility profile change
retention deletion
training export
broad projection exposure
raw payload exposure
high uncertainty + high consequence
repeated agent violation
scope ambiguity
irreversible action

Human review must produce:

decision
scope
review basis
uncertainty posture
authority vector effect if any
admissibility effect if any
retention record
reversibility/monitoring plan

Human review is not magical correctness.

It is a governance event.

26. Axis 14 — Revocation Conditions

Every AgentAuthorityRecord must declare revocation conditions.

Revocation may trigger from:

scope violation
projection overclaim
hidden tool use
mutation attempt without governance
proof bypass
admissibility bypass
retention erasure
uncertainty hiding
repeated failure
budget abuse
stale session
expired authority
governance override
user request
security concern

Revocation outcomes:

limit_agent
revoke_action
revoke_session
revoke_tool_scope
quarantine_agent_context
require_human_review
route_to_audit

Agency is dynamic.

Agent authority is never permanent by default.

27. Agency Modes

Agency modes define actor operating posture.

Modes are not authority states.

They are capability regimes.

27.1 Read-Only Mode

Used when actor may only inspect bounded projections.

Allows:

scoped projection read
index lookup
proof summary read
governance status read

Blocks:

proposal emission
simulation
tool execution
proof request
governance request
mutation

Authority ceiling:

read_projection
27.2 Query Mode

Used when actor may request bounded projections or index routes.

Allows:

projection request
index query
bounded reconstruction view request
query receipt

Blocks:

runtime activation
branch simulation
tool execution
mutation

Authority ceiling:

query_index
27.3 Diagnostic Mode

Used when actor may inspect instability, uncertainty, failure, drift, or anomaly.

Allows:

diagnostic projection request
failure surface view
branch collapse warning inspection
proof failure read
uncertainty probe request

Blocks:

mutation
authority expansion
training export
unrestricted tool execution

Authority ceiling:

diagnostic_actor
27.4 Simulation Mode

Used when actor may explore counterfactual branches.

Allows:

branch simulation
repair-path simulation
tool-order simulation
behavior candidate emission
simulation trace retention

Blocks:

real side effects
direct tool execution unless separately authorized
governance mutation
training emission

Authority ceiling:

simulation_actor
27.5 Proposal Mode

Used when actor may emit structured candidates.

Allows:

proposal emission
proof candidate request
governance candidate request
retention candidate request
projection candidate request

Blocks:

self-authorization
mutation
ledger truth write
hidden authority expansion

Authority ceiling:

proposal_only
27.6 Proof-Request Mode

Used when actor may request proof execution.

Allows:

proof candidate packaging
proof request emission
proof status projection
proof failure receipt

Blocks:

proof object creation by actor
governance authorization
mutation
authority grant

Authority ceiling:

proof_request_actor
27.7 Governance-Request Mode

Used when actor may request governance review.

Allows:

governance candidate packaging
consequence map proposal
risk model proposal
monitoring plan proposal
revocation request
quarantine request

Blocks:

governance decision
authority vector update
admissibility profile update
mutation

Authority ceiling:

governance_request_actor
27.8 Tool-Limited Mode

Used when actor may execute explicitly scoped tools.

Allows:

declared tool execution
scoped input/output
tool execution receipt
repair/retry only if scoped

Blocks:

hidden tool use
undeclared external side effects
destructive actions without governance/human review
authority escalation
ledger truth mutation

Authority ceiling:

execute_scoped_tool
27.9 Custodial Mode

Used when actor operates as retention/projection/governance support under narrow function.

Allows:

archive request
retention review request
projection expiry review
quarantine inspection
revocation routing
audit support

Blocks:

identity claim
proof creation
governance decision unless separately authorized
policy mutation

Authority ceiling:

custodial_actor
27.10 Quarantine Mode

Used when actor is restricted after risk, instability, contamination, or violation.

Allows:

limited diagnostic inspection
audit response
human review route
revocation appeal if authorized

Blocks:

runtime influence
broad projection
tool execution
training emission
authority expansion
mutation

Authority ceiling:

quarantined_actor
28. AgentAuthority Request

An AgentAuthorityRequest asks governance for scoped actor capability.

Canonical shape:

{
  "agent_authority_request_id": "...",
  "actor_ref": "...",
  "actor_type": "user | local_agent | remote_agent | tool_agent | system_agent | reviewer | proof_executor | custodian",
  "requested_agency_mode": "...",
  "requested_capabilities": [],
  "requested_projection_scope": {},
  "requested_tool_scope": {},
  "requested_simulation_scope": {},
  "requested_proposal_scope": {},
  "requested_proof_request_scope": {},
  "requested_governance_request_scope": {},
  "requested_retention_posture": {},
  "declared_use": "...",
  "risk_model": {},
  "human_review_triggers": [],
  "expiry_or_review_window": {},
  "uncertainty": {},
  "non_claims": [
    "authority_request_is_not_authority",
    "agency_request_is_not_permission",
    "agent_cannot_self_authorize"
  ]
}
29. AgentAuthority Record

An AgentAuthorityRecord is the governed capability record for an actor.

Canonical shape:

{
  "agent_authority_id": "...",
  "actor_ref": "...",
  "actor_type": "...",
  "agency_mode": "...",
  "allowed_reads": [],
  "allowed_projection_modes": [],
  "allowed_queries": [],
  "allowed_simulations": [],
  "allowed_proposals": [],
  "allowed_proof_requests": [],
  "allowed_governance_requests": [],
  "allowed_tools": [],
  "blocked_actions": [],
  "admissibility_profile_ref": "...",
  "projection_scope": {},
  "tool_scope": {},
  "retention_requirements": {},
  "human_review_triggers": [],
  "revocation_conditions": [],
  "expiry_or_review_window": {},
  "governance_decision_refs": [],
  "authority": {
    "ceiling": "scoped_actor_permission"
  },
  "non_claims": [
    "agent_authority_is_scope_bound",
    "agent_authority_is_revocable",
    "agent_authority_is_not_sovereignty",
    "agent_authority_does_not_grant_ledger_truth",
    "agent_authority_does_not_grant_mutation_by_default"
  ]
}
30. Agent Session

An AgentSession is a bounded runtime interval in which an actor operates under an AgentAuthorityRecord.

Canonical shape:

{
  "agent_session_id": "...",
  "agent_authority_ref": "...",
  "actor_ref": "...",
  "session_scope": {},
  "started_at": "...",
  "expires_at": "...",
  "active_projection_refs": [],
  "active_admissibility_profile_ref": "...",
  "budget": {},
  "retention_requirements": {},
  "status": "active | limited | expired | revoked | quarantined",
  "non_claims": [
    "session_is_not_authority_expansion",
    "session_is_not_source_access"
  ]
}
31. Agent Action Request

An AgentActionRequest is a proposed actor action.

Canonical shape:

{
  "agent_action_request_id": "...",
  "agent_session_ref": "...",
  "actor_ref": "...",
  "action_type": "read_projection | query_index | request_projection | simulate_branch | emit_proposal | request_proof | request_governance | execute_tool | request_retention | request_quarantine | request_revocation",
  "target_refs": [],
  "projection_refs": [],
  "declared_use": "...",
  "requested_output": "...",
  "tool_request": {},
  "simulation_scope": {},
  "proposal_scope": {},
  "proof_request_scope": {},
  "governance_request_scope": {},
  "constraints": {},
  "budget_request": {},
  "uncertainty": {},
  "authority": {
    "requested_ceiling": "agent_action"
  },
  "non_claims": [
    "action_request_is_not_permission",
    "agent_action_is_not_authority"
  ]
}
32. Agent Action Decision

An AgentActionDecision determines whether and how an action may proceed.

Canonical shape:

{
  "agent_action_decision_id": "...",
  "agent_action_request_ref": "...",
  "agent_authority_ref": "...",
  "admissibility_decision_ref": "...",
  "axis_results": {
    "actor_validity": {},
    "authority_scope": {},
    "projection_scope": {},
    "admissibility_mode": {},
    "tool_scope": {},
    "proposal_scope": {},
    "simulation_scope": {},
    "proof_request_scope": {},
    "governance_request_scope": {},
    "retention_accountability": {},
    "uncertainty_visibility": {},
    "budget_cost_bound": {},
    "human_review_trigger": {},
    "revocation_conditions": {}
  },
  "decision": "allow | allow_limited | redact | simulate_only | proposal_only | require_projection | require_proof | require_governance | require_human_review | defer | quarantine | reject | revoke",
  "output_ceiling": "...",
  "required_receipts": [],
  "required_retention": {},
  "required_redactions": [],
  "blocked_outputs": [],
  "uncertainty": {},
  "non_claims": [
    "action_decision_is_scope_bound",
    "action_permission_is_not_authority_expansion",
    "allowed_action_is_not_governance_consequence"
  ]
}
33. Agent Action Receipt

Every consequential agent action emits a receipt.

Canonical shape:

{
  "agent_action_receipt_id": "...",
  "agent_action_request_ref": "...",
  "agent_action_decision_ref": "...",
  "agent_session_ref": "...",
  "actor_ref": "...",
  "action_type": "...",
  "inputs": [],
  "outputs": [],
  "projection_refs": [],
  "tool_refs": [],
  "admissibility_refs": [],
  "retention_candidate_refs": [],
  "proof_request_refs": [],
  "governance_request_refs": [],
  "temporal_frame": {},
  "cost": {},
  "failure_modes": [],
  "authority": {
    "ceiling": "agent_action_trace"
  },
  "non_claims": [
    "action_receipt_is_not_proof",
    "action_receipt_is_not_authority",
    "agent_action_does_not_create_truth"
  ]
}
34. Agent Proposal

An AgentProposal is a structured candidate emitted by an actor.

Canonical shape:

{
  "agent_proposal_id": "...",
  "actor_ref": "...",
  "agent_session_ref": "...",
  "proposal_type": "projection | relation | topology | behavior | proof | governance | retention | agent_authority | tool_scope | mutation | quarantine | revocation",
  "source_refs": [],
  "projection_refs": [],
  "lineage_refs": [],
  "supporting_observables": [],
  "requested_next_route": "projection | retention | proof | governance | admissibility | quarantine",
  "requested_authority": {},
  "declared_use": "...",
  "uncertainty": {},
  "failure_policy": "reject | defer | quarantine | route_low_authority | require_human_review",
  "authority": {
    "ceiling": "proposal_only"
  },
  "non_claims": [
    "proposal_is_not_mutation",
    "proposal_is_not_proof",
    "proposal_is_not_authority"
  ]
}
35. Agent Tool Execution Receipt

Tool execution must remain accountable.

Canonical shape:

{
  "agent_tool_execution_receipt_id": "...",
  "agent_action_receipt_ref": "...",
  "tool_ref": "...",
  "tool_scope": {},
  "side_effect_level": "read_only | projection_only | simulation_only | local_write_candidate | scoped_write | external_action | destructive_action | governance_required",
  "inputs": [],
  "outputs": [],
  "side_effects": [],
  "rollback_or_repair_path": {},
  "human_review_refs": [],
  "failure_modes": [],
  "retention_candidate_ref": "...",
  "authority": {
    "ceiling": "tool_execution_trace"
  },
  "non_claims": [
    "tool_execution_is_not_authority",
    "tool_output_is_not_truth",
    "tool_side_effect_does_not_expand_agent_scope"
  ]
}
36. Agent Violation Record

Agent violations are structural evidence.

Canonical shape:

{
  "agent_violation_id": "...",
  "actor_ref": "...",
  "agent_session_ref": "...",
  "violation_type": "scope_violation | projection_overclaim | hidden_tool_use | self_promotion_attempt | mutation_without_governance | proof_bypass | admissibility_bypass | retention_erasure | uncertainty_hiding | budget_abuse | training_emission_attempt",
  "source_action_refs": [],
  "detected_by": "...",
  "severity": "low | medium | high | critical",
  "recommended_route": "warn | limit | revoke | quarantine | human_review | governance_review",
  "uncertainty": {},
  "authority": {
    "ceiling": "violation_evidence"
  },
  "non_claims": [
    "violation_record_is_not_governance_decision",
    "violation_record_is_structural_evidence"
  ]
}
37. Agency Process
Step 1 — Establish Actor

Identify:

actor ref
actor type
session scope
authority record
expiry/revocation status

No valid actor record → no agency.

Step 2 — Bind Projection

Agent receives only bounded projections.

No projection → no read.

Projection must declare:

lens
scope
preserved axes
omitted axes
loss profile
uncertainty
authority ceiling
expiry
Step 3 — Receive Action Request

Actor requests:

read
query
project
simulate
propose
request proof
request governance
execute tool
request retention
request quarantine
request revocation
Step 4 — Evaluate Agency Axes

Evaluate:

actor validity
authority scope
projection scope
admissibility mode
tool scope
proposal scope
simulation scope
proof request scope
governance request scope
retention accountability
uncertainty visibility
budget/cost bound
human review trigger
revocation conditions
Step 5 — Emit Action Decision

Decision may:

allow
allow limited
redact
simulate only
proposal only
require projection
require proof
require governance
require human review
defer
quarantine
reject
revoke
Step 6 — Execute or Route

Allowed actions route to:

Projection Field
Retention Field
Decision Topology Mapping
Proof Execution
Governance
Tool Execution
Quarantine
Step 7 — Record Receipt

Every consequential action emits receipt.

Receipt is ledgerable.

Receipt may become retention candidate.

Step 8 — Monitor and Revoke

Monitor:

scope violations
projection overclaims
hidden tool use
proof bypass
admissibility bypass
retention erasure
uncertainty hiding
budget abuse
training emission attempts
stale authority

Agency is revoked or limited when boundary conditions fail.

38. Relationship to T0 — Primitive Field Theory

T0 defines Observer as a bounded system that can form distinctions.

Agency Field defines a projection-bound actor as an operational observer with constrained action rights.

An agent may observe through a lens.

An agent may act through constraints.

An agent is not the field.

An agent is not identity.

An agent is not authority.

39. Relationship to T1 — Conservation Invariants

Agency Field must preserve T1 invariants, especially:

provenance conservation
admissibility conservation
locality conservation
attention-energy budget conservation
uncertainty conservation
temporal order conservation
no free compression
capacity conservation
recursion trace conservation
authority boundary conservation
projection boundary conservation
failure legibility conservation

Agency must never violate:

activity ≠ authority
projection ≠ source
agency ≠ sovereignty
40. Relationship to T2 — Phase Operators

Agency uses T2 operators.

Primary compositions:

AgentRead = Expose + Select + Project + Record
AgentQuery = Select + Project + Record
AgentSimulation = Echo + Select + Transform + Compare + Project + Record
AgentProposal = Select + Project + Record
AgentProofRequest = Select + Project + Record
AgentGovernanceRequest = Select + Project + Record
AgentToolExecution = Select + Transform + Record + optional Commit under governance
AgentRevocation = Release + Record

Commit inside Agency applies only to receipts or governed authority records.

Agent action does not commit truth.

41. Relationship to T3 — Observables / Detectors / Stabilizers

T3 provides agency-relevant observables:

tool_success_rate
tool_failure_rate
repair_rate
retry_count
constraint_violation_count
drift_from_task_spec
convergence_to_task_spec
runtime_cost
latency
human_review_trigger
policy_friction
projection_overclaim_risk
authority_conflict

T3 provides agency-relevant detectors:

constraint_bypass_detector
task_drift_detector
repair_loop_detector
tool_order_attractor_detector
policy_friction_detector
human_review_escalation_detector
authority_leak_detector
projection_overclaim_detector
mutation_without_proof_detector
scope_violation_detector
autonomy_ceiling_detector
revocation_needed_detector
quarantine_needed_detector

Detectors may flag agent behavior.

They do not revoke authority by themselves.

Governance decides consequence.

42. Relationship to Decision Topology Mapping

Agent behavior is mappable through Decision Topology.

Agent actions may produce:

decision nodes
transition edges
realized trajectories
rejected branches
failed branches
repair paths
drift regions
convergence regions
behavioral attractors
mutation candidates

Decision Topology maps behavior.

It does not infer intent.

It does not authorize behavior change.

Agent behavior candidates may route to Proof Execution and Governance.

43. Relationship to Proof Execution

Agents may request proof.

Agents may emit proof candidates.

Agents may inspect proof projections if authorized.

Agents may not create ProofObjects directly.

Proof Execution may evaluate:

agent proposals
tool-order candidates
repair-path candidates
behavioral attractors
mutation candidates
authority sufficiency candidates

Proof results may support governance review.

Proof results do not automatically expand agent authority.

44. Relationship to Authority / Governance

Governance grants, limits, revokes, quarantines, or expires agency.

AgentAuthority is a governed authority dimension.

Governance must decide:

actor scope
allowed reads
allowed projections
allowed tools
allowed proposals
allowed simulations
proof request rights
governance request rights
retention requirements
human review triggers
revocation conditions
expiry/review windows

Core law:

Agents may request governance.
Agents may not become governance by request.
45. Relationship to Projection Field

Projection Field controls what agents can see.

Agency Field controls what agents can do with what they see.

Agent Read Projection Mode produces:

AgentReadPacket

AgentReadPacket must declare:

actor ref
projection refs
allowed fields
redacted fields
downstream rights
expiry
authority ceiling
uncertainty
non-claims

Agent read access cannot bypass projection.

46. Relationship to Retention Field

Retention Field controls what agent traces persist.

Agency Field must emit retention candidates for consequential actions.

Agent context retention supports:

accountability
replay
proof
governance review
scope violation detection
training candidate review
revocation
audit

Core law:

No consequential agent action without retention posture.
47. Relationship to Ledger Hypergraph

Ledger records agent authority, agent actions, agent receipts, violations, revocations, tool executions, and related causal signatures.

Ledger may store:

AgentAuthorityRecord
AgentActionReceipt
AgentToolExecutionReceipt
AgentViolationRecord
AgentRevocationRecord
agent_action causal signatures
governance decisions affecting agents
retention records for agent context

Ledger records agent causality.

Ledger does not grant agent authority by recording it.

48. Relationship to Runtime Manifold

Agents may affect Runtime Manifold only through admissible, scoped routes.

Allowed routes may include:

projection request
diagnostic probe
simulation request
proof request
relation/topology proposal
bounded tool execution
governance-authorized mutation

Agents may not:

directly mutate Distinction-States
directly alter attention-energy budgets
directly set field differentials
directly promote relation candidates
directly authorize topology
directly write runtime truth

Runtime may expose agent-relevant slices.

Agents may not own runtime.

49. Relationship to Training Emission

Training emission is governance-controlled.

Agents may produce training candidates only if authorized.

Training candidates must preserve:

source refs
projection refs
proof refs
governance refs
admissibility history
omitted branch declaration
failure preservation
uncertainty
authority ceiling

Blocked by default:

training_export
training_set_write
behavior_universalization
failure_omission
counterfactual_omission
mapping_only_extraction
admissibility_only_extraction

Core law:

Training emission requires governance authority.
50. Agency Lifecycle

Agency lifecycle states:

requested
→ reviewed
→ granted / rejected / deferred
→ active
→ limited
→ monitored
→ expired
→ revoked
→ quarantined
→ archived

Action lifecycle states:

requested
→ evaluated
→ allowed / limited / rejected / deferred / quarantined
→ executed / simulated / routed
→ receipted
→ retained
→ audited
→ expired / revoked / superseded

No lifecycle state implies sovereignty.

51. Agency Boundary Laws
Law 1 — Agency Is Not Sovereignty

An agent may act only within granted scope.

Law 2 — Agency Is Projection-Bound

No agent sees the system except through lawful projection.

Law 3 — Agency Is Admissibility-Bound

No agent action proceeds without transition permission.

Law 4 — Agency Is Governance-Bound

No consequence changes without governance.

Law 5 — Agency Is Retention-Accountable

Consequential agent actions must be retained or explicitly released with trace.

Law 6 — Agency Is Revocable

All agent authority must declare expiry or revocation conditions.

Law 7 — No Self-Promotion

Agents may not expand their own authority.

Law 8 — No Hidden Tool Use

All tool use must be scoped, receipted, and retained where consequential.

Law 9 — No Direct Ledger Sovereignty

Agents may not write ledger truth directly.

Law 10 — No Proof Bypass

Agents may not treat proposals, simulations, or confidence as proof.

Law 11 — No Governance Bypass

Agents may not treat proof support as consequence authorization.

Law 12 — No Training Emission Without Governance

Agents may not emit training data without T5 authorization.

52. Failure Modes
Agency Inflation

Agent capability treated as authority or sovereignty.

Projection Bypass

Agent accesses or infers beyond projection scope.

Self-Promotion Attempt

Agent attempts to expand its own authority.

Hidden Tool Use

Agent uses tools outside declared scope.

Tool Side-Effect Drift

Tool action produces consequences beyond declared side-effect level.

Proposal Inflation

Agent proposal treated as mutation.

Simulation Inflation

Counterfactual simulation treated as proof or action.

Proof Bypass

Agent treats unproven candidate as validated.

Governance Bypass

Agent treats proof support as permission.

Retention Erasure

Agent action or failure is not retained when accountability requires it.

Uncertainty Hiding

Agent output omits uncertainty, loss, or authority ceiling.

Budget Abuse

Agent consumes excessive projection, simulation, proof, tool, or retention budget.

Stale Authority

Agent continues acting after expiry, revocation, or scope change.

Training Contamination

Agent emits or packages training data without governance, failure preservation, or omitted branch declaration.

Human Review Laundering

Human review is treated as magical correctness rather than scoped governance event.

53. Minimal AgentAuthority Schema
{
  "agent_authority_id": "...",
  "actor_ref": "...",
  "actor_type": "...",
  "agency_mode": "...",
  "allowed_reads": [],
  "allowed_projection_modes": [],
  "allowed_queries": [],
  "allowed_simulations": [],
  "allowed_proposals": [],
  "allowed_proof_requests": [],
  "allowed_governance_requests": [],
  "allowed_tools": [],
  "blocked_actions": [],
  "admissibility_profile_ref": "...",
  "projection_scope": {},
  "tool_scope": {},
  "retention_requirements": {},
  "human_review_triggers": [],
  "revocation_conditions": [],
  "expiry_or_review_window": {},
  "governance_decision_refs": [],
  "authority": {
    "ceiling": "scoped_actor_permission"
  },
  "non_claims": [
    "agent_authority_is_scope_bound",
    "agent_authority_is_revocable",
    "agent_authority_is_not_sovereignty",
    "agent_authority_does_not_grant_ledger_truth",
    "agent_authority_does_not_grant_mutation_by_default"
  ]
}
54. Minimal AgentActionReceipt Schema
{
  "agent_action_receipt_id": "...",
  "agent_action_request_ref": "...",
  "agent_action_decision_ref": "...",
  "agent_session_ref": "...",
  "actor_ref": "...",
  "action_type": "...",
  "inputs": [],
  "outputs": [],
  "projection_refs": [],
  "tool_refs": [],
  "admissibility_refs": [],
  "retention_candidate_refs": [],
  "proof_request_refs": [],
  "governance_request_refs": [],
  "temporal_frame": {},
  "cost": {},
  "failure_modes": [],
  "authority": {
    "ceiling": "agent_action_trace"
  },
  "non_claims": [
    "action_receipt_is_not_proof",
    "action_receipt_is_not_authority",
    "agent_action_does_not_create_truth"
  ]
}
55. Final Compression

The Agency Field is the governed capability layer of DME V2.

It decides what bounded actors may do through projection under admissibility, authority, retention, and governance constraints.

Final runtime law:

Source remains source.
Ledger records continuity.
Runtime processes active structure.
Projection exposes bounded view.
Retention governs persistence.
Agency permits scoped action.
Admissibility permits transition.
Proof tests survival.
Governance authorizes consequence.

Agency is how DME lets actors participate without letting actors become sovereign.

Agency is capability under law.