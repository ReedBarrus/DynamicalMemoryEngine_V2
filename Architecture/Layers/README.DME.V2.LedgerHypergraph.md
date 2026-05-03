# README.DME.V2.LedgerHypergraph.md

# DME V2 — Ledger Hypergraph

## 1. Purpose

The Ledger Hypergraph defines the causal structural memory substrate of DME V2.

It records lawful continuity across:

native emissions
payload references
ingest nodes
structural objects
transforms
charts
features
distinction evidence
distinction regions
runtime candidates
admissibility decisions
relation/topology candidates
decision topology maps
proof executions
proof traces
proof objects
proof failures
governance candidates
governance decisions
projection records
retention records
agent authority records

The ledger answers:

What exists as a recorded artifact?
Where did it come from?
What lawful path produced it?
What changed?
What persisted?
What failed?
What was admitted, proven, governed, projected, retained, or revoked?
What can be replayed, reconstructed, audited, or challenged?

The ledger preserves lawful causal structure.

It does not decide truth.

It does not simulate runtime.

It does not grant authority automatically.

2. Core Thesis

The Ledger Hypergraph is an append-oriented, typed, temporal-causal hypergraph for preserving structural memory.

It is not:

a runtime manifold
a projection layer
a semantic database
a truth oracle
an authority engine
a frozen copy of the full runtime field

It is:

a causal structural memory substrate

Final compression:

runtime may become active;
ledger records lawful continuity;
proof validates survival;
governance authorizes consequence.
3. Architectural Placement

DME V2 uses four primary substrates:

Native Emission / Payload
→ Ledger Hypergraph
→ Runtime Manifold
→ Projection / Index

The ledger sits between source-native material and active runtime processing as the continuity substrate.

It stores references, lineage, admissibility, proof, governance, projection, and retention records.

It does not replace the Runtime Manifold.

It does not replace Projection / Index.

It does not replace Retention.

It does not replace Governance.

4. Authority Ceiling

The maximum authority of the Ledger Hypergraph is:

recorded lawful continuity

The ledger may record:

evidence
lineage
causal paths
operator paths
transition records
proof results
governance decisions
projection records
retention records
authority records

The ledger may not claim:

stored = true
recorded = proven
proven = authorized
retained = identity
projected = source
runtime trace = ledger truth

Core law:

The ledger records lawful continuity, not runtime sovereignty.
5. Non-Claims

The Ledger Hypergraph does not claim:

ledger_entry = truth
lineage = proof
trace = identity
record = authority
snapshot = full runtime
projection_record = source
retention_record = identity
proof_object = governance authorization
governance_decision = permanent authority

The ledger preserves what can be audited.

It does not decide what matters.

6. Temporal Framing
6.1 Purpose

The ledger is temporal because causal memory requires order.

However, DME V2 must not collapse all time into a single clock.

The ledger tracks multiple temporal frames:

ledger sequence time
source-local time
runtime cycle time
external / OS clock time
projection exposure time
governance effective time
retention lifecycle time

These frames may correlate.

They are not identical.

6.2 Ledger Sequence Time

Ledger sequence time is the append order of ledger records.

It answers:

In what recorded order did DME admit, derive, test, govern, expose, or retain artifacts?

Canonical field:

ledger_seq

Properties:

monotonic
append-only
system-local
causal-order preserving
required for replay

Ledger sequence time is the primary ledger ordering mechanism.

6.3 Source-Local Time

Source-local time is time inside the source family.

Examples:

audio sample index
audio timestamp
token position
JSON path/order
OS event timestamp
tool-call emitted timestamp
model-call emitted timestamp
file diff order
test execution order
sensor timestamp

Canonical field:

source_time

Source-local time answers:

Where did this structure occur inside its native source domain?

Source-local time is not always wall-clock time.

For audio, it may be sample index.

For text, it may be sequence position.

For JSON, it may be structural order.

For OS/tool traces, it may include external timestamps.

6.4 Runtime Cycle Time

Runtime cycle time is the active Runtime Manifold frame or update count.

Canonical fields:

runtime_cycle
runtime_frame
activation_cycle

Runtime cycle time answers:

When did this structure become active, update, interfere, decay, route, or release inside the manifold?

Runtime cycle time belongs to active dynamics.

The ledger may record runtime cycle references, but it does not store the full active field by default.

6.5 External / OS Clock Time

External clock time is wall-clock or environment time.

Canonical fields:

observed_at
created_at
recorded_at
external_timestamp
os_timestamp

External clock time answers:

When did this occur relative to the outside operating environment?

External clock time is useful for:

OS events
tool calls
file diffs
logs
test runs
human review
agent actions
projection exposure
governance decisions
retention expiry

But external clock time is not sufficient for causality.

Clock order may disagree with causal order due to:

async execution
delayed logging
batch processing
clock skew
replay
simulation
projection delay
agent/tool latency

Therefore:

external clock time is metadata;
ledger sequence and lineage define causal order.
6.6 Projection Exposure Time

Projection exposure time records when a bounded view was created, displayed, queried, consumed, or expired.

Canonical fields:

projection_created_at
projection_exposed_at
projection_consumed_at
projection_expired_at

Projection exposure time answers:

When was this view exposed, and to whom or what?

Projection time is not source time.

Projection time is not proof time.

Projection time is access history.

6.7 Governance Effective Time

Governance effective time records when an authority, admissibility profile, retention posture, projection scope, or agent permission becomes active, expires, is revoked, or is superseded.

Canonical fields:

decision_recorded_at
effective_from
effective_until
review_after
revoked_at
superseded_by

Governance effective time answers:

When did this decision govern consequence?

Governance decisions are temporal, scoped, and revocable.

6.8 Retention Lifecycle Time

Retention lifecycle time records persistence, decay, review, echo eligibility, quarantine, archive, and re-entry windows.

Canonical fields:

retention_started_at
retention_expires_at
decay_schedule
echo_eligible_from
echo_expires_at
review_after
quarantine_until
archived_at
reentered_at

Retention lifecycle time answers:

How long may this trace persist, and when may it re-enter?

Retention time is not identity.

Retention time is persistence governance.

6.9 Temporal Frame Object

Any ledger record may include a temporal frame:

{
  "temporal_frame": {
    "ledger_seq": null,
    "source_time": {},
    "runtime_cycle": null,
    "external_time": {},
    "projection_time": {},
    "governance_time": {},
    "retention_time": {},
    "temporal_uncertainty": {},
    "temporal_non_claims": [
      "external_time_is_not_causal_order",
      "runtime_cycle_is_not_source_time",
      "projection_time_is_not_source_time"
    ]
  }
}
6.10 Temporal Law
Causal order is lineage + ledger sequence.
External time is supporting metadata.
Runtime time is active-frame-local.
Source time is source-domain-local.
Projection time is exposure history.
Governance time is consequence validity.
Retention time is persistence lifecycle.

No object may silently substitute one temporal frame for another.

7. Hypergraph Definition

The Ledger Hypergraph is a directed, typed, append-oriented temporal-causal hypergraph.

It contains:

nodes
edges
hyperedges
records
receipts
causal signatures
7.1 Node

A node records an artifact, object, result, decision, or state boundary.

A node may represent:

NativeEmission reference
PayloadRef
IngestNode
StructuralObject
Chart
StructuralSignature
Feature
DistinctionEvidencePacket
DistinctionRegion
Distinction-State reference
FieldProfile summary
InterferenceTrace summary
RelationCandidate
TopologyCandidate
DecisionTopologyProjection
DecisionNode
TransitionEdge
AdmissibilityDecision
ProofCandidate
ProofExecution
ProofTrace
ProofObject
ProofFailureObject
GovernanceCandidate
GovernanceDecision
ProjectionRecord
RetentionRecord
AgentAuthorityRecord

Nodes are typed.

Nodes are append-only.

Nodes must preserve lineage.

7.2 Edge

An edge records a directed relationship between two nodes.

Examples:

derived_from
transformed_by
selected_from
measured_by
compared_with
projected_from
activated_from
interfered_with
related_to
transitioned_to
admitted_by
proved_by
failed_by
governed_by
projected_to
retained_as
echoed_from
revoked_by
superseded_by

Edges are typed, directional, temporal, and scoped.

7.3 Hyperedge

A hyperedge records a relationship involving multiple nodes simultaneously.

Examples:

transform application
cross-basis comparison
distinction formation
interference event
relation candidate formation
topology candidate formation
decision topology mapping
proof execution
governance review
projection construction
retention policy application
agent authorization review

Hyperedges preserve multi-input / multi-output causality.

7.4 Record

A record is a ledger entry that stores a node, edge, hyperedge, receipt, or lifecycle update.

Record authority ceiling:

recorded evidence

Record does not equal Commit.

A record writes trace.

A commit stabilizes under declared scope and authority.

7.5 Receipt

A receipt is a bounded record of an operation having occurred.

Examples:

ingest receipt
transform receipt
projection receipt
admissibility receipt
proof receipt
governance receipt
retention receipt
agent action receipt

A receipt must declare:

operator path
inputs
outputs
temporal frame
authority ceiling
non-claims

Receipt does not imply proof.

8. Ledger Record Classes

The ledger supports three primary record classes.

causal records
bounded structural snapshots
projection records

Default priority:

causal records > bounded structural snapshots > projection records
8.1 Causal Records

Causal records preserve what happened, how, from what, and under which lawful transition.

They include:

source lineage
operator path
transform chain
candidate transition
admissibility decision
runtime route
proof execution
governance decision
retention action
projection exposure
agent action
revocation / demotion / quarantine

Causal records are the core ledger function.

They support:

replay
audit
proof
reconstruction
governance review
causal signature formation
8.2 Bounded Structural Snapshots

A bounded structural snapshot is a declared frozen representation of structure under scope.

Examples:

chart snapshot
structural signature snapshot
distinction region snapshot
field profile summary
relation candidate snapshot
topology candidate snapshot
decision topology snapshot
proof result snapshot
projection output snapshot

Snapshots must declare:

scope
basis
domain
metric
scale
preserved axes
omitted axes
loss profile
uncertainty
authority ceiling
reconstruction bounds
temporal frame

Snapshots are not full reality.

Snapshots are not active runtime.

Snapshots are bounded freeze artifacts.

8.3 Projection Records

Projection records preserve what view was exposed, to whom or what, under what scope, and with what limits.

Projection records include:

projection_id
projection_type
source_refs
viewer / consumer scope
preserved axes
omitted axes
loss profile
uncertainty
authority ceiling
created_at
exposed_at
expired_at
non-claims

Projection records do not replace the projection layer.

They record exposure history and access accountability.

9. Causal Signatures
9.1 Purpose

A CausalSignature is a typed record of causal contribution, transition effect, lineage path, or influence pattern sufficient to support future replay, reconstruction, proof, audit, retention, or governance review.

A causal signature is not proof.

A causal signature is not identity.

It is structured causal evidence.

9.2 Causal Signature Sources

Causal signatures may derive from:

operator path
lineage path
transform chain
candidate transition
admissibility decision
interference trace summary
relation candidate
topology candidate
decision topology map
proof trace
proof failure
governance decision
projection exposure
retention re-entry
agent action
9.3 Causal Signature Shape
{
  "causal_signature_id": "...",
  "signature_type": "lineage | transform | transition | interference | relation | topology | decision | proof | governance | projection | retention | agent_action",
  "source_refs": [],
  "input_refs": [],
  "output_refs": [],
  "operator_path": [],
  "temporal_frame": {},
  "effect_summary": {},
  "preserved_axes": [],
  "changed_axes": [],
  "omitted_axes": [],
  "uncertainty": {},
  "loss_profile": {},
  "authority": {
    "ceiling": "causal_evidence"
  },
  "non_claims": [
    "causal_signature_is_not_proof",
    "causal_signature_is_not_identity",
    "causal_signature_is_not_authority"
  ]
}
9.4 Relationship to Retention

The ledger defines how causal signatures are stored.

Retention Field will define:

which causal signatures persist
which decay
which may echo
which may re-enter
which require review
which remain quarantined
which become reconstruction support

Ledger stores causal signature structure.

Retention governs causal signature lifecycle.

10. Canonical Ledger Object Ladder

The ledger may record references or bounded objects across the full DME ladder:

NativeEmissionRef
PayloadRef
IngestNode
StructuralObjectRef
ChartRef
StructuralSignatureRef
FeatureRef
DistinctionEvidencePacketRef
DistinctionRegionRef
DistinctionStateRef
FieldProfileSummary
InterferenceTraceSummary
RelationCandidateRef
TopologyCandidateRef
DecisionTopologyProjectionRef
DecisionNodeRef
TransitionEdgeRef
AdmissibilityDecision
ProofCandidateRef
ProofExecution
ProofTrace
ProofObject
ProofFailureObject
GovernanceCandidate
GovernanceDecision
ProjectionRecord
RetentionRecord
AgentAuthorityRecord
CausalSignature

The ledger generally stores refs and bounded summaries, not full active objects.

11. Node Classes
11.1 Payload Node

Records a PayloadRef.

Authority ceiling:

payload reference only

Must include:

payload_ref
source_family
encoding
extent
source_time where applicable
content_hash
11.2 Ingest Node

Records admission of a PayloadRef.

Authority ceiling:

structural admission

Must include:

payload_ref
source_family
ingest_context
temporal_frame
provenance_root
non-claims
11.3 Structural Node

Records a StructuralObject reference or bounded snapshot.

Authority ceiling:

source-local structure only

Must include:

source_refs
payload_refs
operator_path
domain
scale
window_or_extent
loss_profile
uncertainty
temporal_frame
11.4 Transform Node

Records a transform application.

Authority ceiling:

transform receipt / derived structure

Must include:

input_refs
output_refs
transform_name
operator_path
basis_in
basis_out
domain
metric
scale
loss_profile
bias_profile
uncertainty
reconstruction_bounds
temporal_frame
11.5 Chart Node

Records a chart reference or bounded chart snapshot.

Authority ceiling:

basis-local representation

Must include:

structural_refs
transform_refs
basis
domain
metric
scale
loss_profile
bias_profile
uncertainty
temporal_frame
11.6 Signature Node

Records a StructuralSignature or support signature.

Authority ceiling:

measurement / support only

Must include:

source_refs
chart_refs
measurement_name
domain
metric
scale
uncertainty
bias
loss_profile
temporal_frame
11.7 Feature Node

Records a chart-local feature.

Authority ceiling:

chart-local pattern

Must include:

chart_refs
signature_refs
basis
scale
metric
domain
support
uncertainty
local_context
temporal_frame

Non-claim:

feature_is_not_distinction
11.8 Distinction Evidence Node

Records a DistinctionEvidencePacket or ref.

Authority ceiling:

evidence packet only

Must include:

source_refs
payload_refs
structural_object_refs
chart_refs
signature_refs
feature_refs
basis_declarations
domain_map
metric_map
scale_map
loss_profile
bias_map
uncertainty_map
candidate_regions
invariant_axis_evidence
temporal_frame
11.9 Distinction Region Node

Records a DistinctionRegion.

Authority ceiling:

candidate distinction

Must include:

evidence_packet_ref
source_refs
lineage_refs
region_bounds
local_frame_seed
invariant_vector
basis_contribution
feature_support
uncertainty
bias
loss_profile
support_score
separation_score
admissibility_notes
temporal_frame

Non-claims:

distinction_region_is_not_identity
distinction_region_is_not_proof
distinction_region_is_not_authority
distinction_region_is_not_active_runtime_state
11.10 Runtime Reference Node

Records a bounded reference to runtime activity.

Authority ceiling:

runtime trace / runtime evidence

May include refs or summaries of:

Distinction-State
FieldProfile
InterferenceTrace
CandidateTransition
RelationCandidate
TopologyCandidate
AdmissibilityDecision

Must include:

runtime_cycle
scope
lineage_refs
authority_ceiling
uncertainty
non-claims

The ledger does not store full active manifold state by default.

11.11 Relation Candidate Node

Records a RelationCandidate.

Authority ceiling:

relation candidate

Must include:

relation_type
participants
source_interference_traces
state_delta_summary
field_delta_summary
context
metric
stability
uncertainty
temporal_frame

Non-claim:

relation_is_not_proof
11.12 Topology Candidate Node

Records a TopologyCandidate.

Authority ceiling:

topology candidate

Must include:

topology_type
relation_candidate_refs
state_refs
interference_trace_refs
field_profile_refs
temporal_extent
stability
uncertainty
temporal_frame
11.13 Decision Topology Node

Records a DecisionTopologyProjection.

Authority ceiling:

mapping only

Must include:

source_trace_refs
scope
decision_nodes
transition_edges
realized_trajectories
rejected_branches
failure_surfaces
repair_paths
drift_regions
convergence_regions
behavioral_attractors
uncertainty
temporal_frame

Non-claims:

mapping_is_not_proof
mapping_is_not_authority
mapping_is_not_intent
mapping_is_not_semantic_truth
11.14 Admissibility Decision Node

Records an admissibility evaluation.

Authority ceiling:

runtime transition permission only

Must include:

candidate_transition_ref
admissibility_profile_ref
axis_results
decision
output_ceiling
blocked_outputs
failure_policy
scope
lineage_refs
temporal_frame

Non-claim:

admissibility_is_not_authority
11.15 Proof Execution Node

Records a proof execution process.

Authority ceiling:

proof process

Must include:

proof_execution_id
candidate_ref
proof_scope
state_machine_status
admissibility_profile_ref
perturbation_refs
temporal_frame
11.16 Proof Trace Node

Records evidence from proof execution.

Authority ceiling:

proof evidence

Must include:

candidate_id
proof_standard
declared_use
perturbations_applied
axis_results
field_results
uncertainty_delta
lineage_status
admissibility_status
survival_status
failure_modes
authority_ceiling_after_proof
temporal_frame
11.17 Proof Object Node

Records a validation result.

Authority ceiling:

authority eligibility

Must include:

candidate_id
proof_type
proof_standard
declared_scope
validated_axes
omitted_axes
uncertainty
lineage_refs
perturbation_refs
survival_summary
failure_summary
authority_ceiling
temporal_frame

Non-claim:

proof_is_not_governance
11.18 Proof Failure Node

Records failed proof as structural evidence.

Authority ceiling:

failure evidence

Must include:

candidate_id
failure_type
failure_stage
failed_axes
failed_perturbations
uncertainty
lineage_status
admissibility_status
recovery_options
routing_outcome
temporal_frame

Failure is retained as evidence unless governance/retention policy says otherwise.

11.19 Governance Candidate Node

Records a proposed consequence.

Authority ceiling:

proposal only

Must include:

candidate_type
source_refs
lineage_refs
proof_refs
decision_topology_refs
admissibility_refs
requested_authority
requested_admissibility_effect
declared_scope
expected_consequence
risk_model
uncertainty
reversibility_plan
monitoring_plan
expiry_or_review_window
failure_policy
temporal_frame
11.20 Governance Decision Node

Records a governance outcome.

Authority ceiling:

scoped consequence decision

Must include:

candidate_ref
decision
authority_vector_before
authority_vector_after
admissibility_profile_before
admissibility_profile_after
scope
proof_refs
admissibility_refs
lineage_refs
risk_summary
uncertainty
reversibility_plan
monitoring_plan
expiry_or_review_window
temporal_frame
11.21 Projection Record Node

Records a bounded view exposure.

Authority ceiling:

projection record

Must include:

projection_id
projection_type
source_refs
consumer_scope
preserved_axes
omitted_axes
loss_profile
uncertainty
authority_ceiling
projection_time
expiry
non-claims
11.22 Retention Record Node

Records persistence, echo eligibility, decay, archive, quarantine, or re-entry posture.

Authority ceiling:

retention posture

Must include:

retained_refs
retention_reason
duration
decay_behavior
echo_eligibility
lineage
uncertainty
authority_ceiling
review_or_revocation_conditions
causal_signature_refs
retention_time
11.23 Agent Authority Node

Records scoped actor permission.

Authority ceiling:

scoped actor permission

Must include:

agent_ref
projection_scope
admissibility_mode
allowed_reads
allowed_proposals
allowed_simulations
allowed_tools
proof_requirements
human_review_triggers
revocation_conditions
expiry
governance_refs
temporal_frame
12. Edge Classes
12.1 Derivation Edge
A → B

Meaning:

B was derived from A.

Required fields:

parent_ref
child_ref
operator_path
temporal_frame
loss_profile
uncertainty
12.2 Transform Edge
StructuralObject → TransformNode → Chart

Meaning:

a declared transform re-expressed structure into a new basis.
12.3 Selection Edge

Records selection of a bounded subset.

Used for:

windowing
parsing
feature extraction
distinction region selection
proof candidate selection
projection selection
12.4 Comparison Edge

Records comparison under declared metric/context.

Used for:

cross-basis analysis
invariant comparison
relation candidate support
proof matrix evaluation
decision topology comparison
12.5 Projection Edge

Records bounded projection from source refs to exposed view.

Used for:

query projection
agent read packet
proof summary
decision topology view
training-set projection when authorized
12.6 Activation Edge

Records activation of a DistinctionRegion into a Distinction-State.

DistinctionRegion → Distinction-StateRef

Activation edge authority ceiling:

active runtime candidate

Activation is not proof.

12.7 Runtime Transition Edge

Records candidate or realized runtime movement.

Statuses:

candidate
admissible
allowed_limited
deferred
rejected
quarantined
released
routed_to_proof
routed_to_projection
routed_to_index

Runtime transitions require admissibility records where consequential.

12.8 Interference Edge

Records an interference summary between active Distinction-States.

Authority ceiling:

runtime trace

Non-claim:

interference_is_not_relation
12.9 Relation Edge

Records relation candidate support or validated relation.

Statuses:

candidate
provisional
proof_supported
governance_authorized
revoked

Relation candidates are not proven relations unless proof and governance scope require it.

12.10 Topology Edge

Records neighborhood, trajectory, basin, attractor, or recurrence field candidate support.

Authority ceiling:

topology candidate
12.11 Proof Edge

Connects candidate nodes to proof executions, traces, objects, and failures.

Proof edge statuses:

proof_requested
proof_eligible
proof_activated
proof_failed
proof_supported
proof_deferred
proof_quarantined
12.12 Governance Edge

Connects proof/governance candidates to governance decisions.

Governance edge statuses:

accepted
accepted_limited
rejected
deferred
quarantined
demoted
revoked
expired
monitor_only
12.13 Retention Edge

Connects retained structure to its retention posture.

Statuses:

ephemeral
short_retention
proof_supported_retention
long_retention
archive
quarantine_retention
expired
reentered
12.14 Echo Edge

Records re-entry of retained trace into current admissible processing.

Echo edge must declare:

trace_source
scope_of_reentry
loss_or_compression
temporal_order
authority_ceiling
admissibility_ref

Echo does not grant authority by recurrence alone.

12.15 Revocation / Supersession Edge

Records authority, projection, retention, profile, or proof status being revoked or superseded.

Used for:

authority revocation
projection expiry
retention expiry
admissibility profile supersession
proof contradiction
agent permission revocation
13. Hyperedge Classes
13.1 Transform Application Hyperedge

Connects:

input structural refs
transform declaration
output chart refs
loss profile
uncertainty
13.2 Cross-Basis Analysis Hyperedge

Connects:

chart refs
feature refs
basis declarations
agreement/disagreement maps
uncertainty maps
bias maps
candidate regions

Output:

DistinctionEvidencePacket
13.3 Distinction Formation Hyperedge

Connects:

DistinctionEvidencePacket
candidate regions
invariant-axis evidence
basis contribution
uncertainty
bias
loss

Output:

DistinctionRegion
13.4 Manifold Activation Hyperedge

Connects:

DistinctionRegion
local frame
state vector
attention budget
authority ceiling
runtime scope

Output:

Distinction-StateRef
13.5 Interference Hyperedge

Connects:

participant Distinction-State refs
state vector deltas
field profile deltas
influence values
curvature delta
uncertainty shift
attention shift
admissibility refs

Output:

InterferenceTraceSummary
13.6 Relation Formation Hyperedge

Connects:

interference traces
participants
repeatability
effect size
context
uncertainty

Output:

RelationCandidate
13.7 Topology Formation Hyperedge

Connects:

relation candidates
state histories
field profiles
temporal extent
stability
uncertainty

Output:

TopologyCandidate
13.8 Decision Mapping Hyperedge

Connects:

execution traces
decision node detections
transition edges
admissibility decisions
failure surfaces
repair paths
drift regions
convergence regions
behavioral attractors

Output:

DecisionTopologyProjection
13.9 Proof Execution Hyperedge

Connects:

proof candidate
proof scope
admissibility refs
perturbation set
axis results
field results
survival status
failure modes

Outputs:

ProofTrace
ProofObject or ProofFailureObject
13.10 Governance Decision Hyperedge

Connects:

governance candidate
proof refs
admissibility refs
decision topology refs
risk model
scope
authority vector
monitoring plan

Output:

GovernanceDecision
13.11 Projection Construction Hyperedge

Connects:

source refs
ledger refs
runtime refs if scoped
proof refs
governance refs
lens
preserved axes
omitted axes
loss profile
consumer scope

Output:

ProjectionRecord
13.12 Retention Application Hyperedge

Connects:

retained refs
retention reason
causal signatures
decay posture
echo eligibility
review / revocation conditions

Output:

RetentionRecord
13.13 Agent Authority Hyperedge

Connects:

agent ref
projection scope
admissibility profile
tool rights
proof requirements
governance decision
revocation conditions

Output:

AgentAuthorityRecord
14. Minimal Ledger Record Schema

Every ledger record must include:

{
  "ledger_record_id": "...",
  "record_type": "node | edge | hyperedge | receipt | causal_signature | lifecycle_update",
  "object_type": "...",
  "refs": {
    "source_refs": [],
    "parent_refs": [],
    "input_refs": [],
    "output_refs": [],
    "lineage_refs": []
  },
  "operator_path": [],
  "temporal_frame": {
    "ledger_seq": null,
    "source_time": {},
    "runtime_cycle": null,
    "external_time": {},
    "projection_time": {},
    "governance_time": {},
    "retention_time": {},
    "temporal_uncertainty": {}
  },
  "scope": {},
  "declaration": {},
  "uncertainty": {},
  "loss_profile": {},
  "authority": {
    "ceiling": "...",
    "status": "recorded"
  },
  "lineage_hash": "...",
  "content_hash": "...",
  "non_claims": []
}
15. Addressability

Every ledger record must be addressable.

Recommended hash basis:

ledger_record_id = hash(
  record_type
+ object_type
+ parent_refs
+ input_refs
+ output_refs
+ operator_path
+ temporal_frame
+ declaration
+ uncertainty
+ authority_ceiling
)

Content-addressed payloads remain referenced, not duplicated.

16. Replay and Reconstruction
16.1 Replay

Replay reconstructs the operator path from ledger records.

Replay asks:

Can we re-run the lawful path?

Replay requires:

payload refs
operator path
transform declarations
basis/domain/metric declarations
temporal frame
uncertainty
loss profile
lineage hash
16.2 Reconstruction

Reconstruction rebuilds a bounded structure from lawful ancestry.

Reconstruction asks:

Can the structure be regenerated from lineage or bounded support?

Reconstruction requires:

lineage refs
payload refs where available
projection/support handles
proof refs where applicable
loss/recovery bounds
temporal frame

Reconstruction may fail.

Reconstruction failure is structural evidence.

16.3 Replay vs Reconstruction
Replay = re-run the path.
Reconstruction = rebuild the structure.
Retention = govern whether trace persists or re-enters.
Projection = expose a bounded view.
Proof = test survival.
Governance = authorize consequence.
17. Ledger Writeback Rules
17.1 Writeable by Default

The ledger may record by default:

PayloadRef
IngestNode
StructuralObjectRef
TransformReceipt
ChartRef
StructuralSignatureRef
FeatureRef
DistinctionEvidencePacketRef
DistinctionRegionRef
AdmissibilityDecision
ProofExecution
ProofTrace
ProofObject
ProofFailureObject
GovernanceDecision
ProjectionRecord
RetentionRecord
AgentAuthorityRecord
17.2 Conditional Writeback

The ledger may conditionally record:

Distinction-State refs
FieldProfile summaries
InterferenceTrace summaries
RelationCandidates
TopologyCandidates
DecisionTopologyProjections
CandidateTransitions
runtime anomaly traces
failure surfaces
repair paths
behavioral attractors
causal signatures

Conditional writeback requires:

scope
reason
authority ceiling
uncertainty
loss profile
retention posture
non-claims
17.3 Not Written by Default

The ledger does not write by default:

full active runtime manifold state
all raw field fluctuations
all pairwise interference
unbounded all-to-all relation attempts
unscoped agent internal state
unbounded projection query history
temporary attention redistribution

These may only be recorded as bounded snapshots or summaries when useful for audit, proof, governance, retention, or debugging.

17.4 Consequential Writeback

Any writeback that affects future behavior, authority, projection, retention, admissibility, or agency requires governance or an existing authorized profile.

Examples:

validated identity
authorized relation
long-retention record
agent authority change
admissibility profile change
training-set emission
policy mutation
projection scope expansion
18. Relationship to Structural Admission

Structural Admission produces:

NativeEmission
PayloadRef
IngestNode
StructuralObject
Chart
StructuralSignature
Feature
DistinctionEvidencePacket
DistinctionRegion

The ledger records refs, receipts, lineage, operator paths, uncertainty, bias, loss, temporal frames, and authority ceilings for these artifacts.

Structural Admission prepares what may be lawfully distinguished.

The ledger preserves how it was prepared.

19. Relationship to Runtime Manifold Dynamics

Runtime Manifold Dynamics produces active behavior:

Distinction-State
FieldProfile
InterferenceTrace
RelationCandidate
TopologyCandidate
AdmissibilityDecision
ProofCandidate
support/index handles

The ledger may record:

activation edges
runtime refs
field summaries
interference summaries
relation/topology candidates
admissibility decisions
proof routing
release/decay/quarantine traces

The ledger does not store the full active Runtime Manifold by default.

Runtime Manifold Dynamics processes what becomes active.

The ledger preserves what became recordable.

20. Relationship to Admissibility Field

Admissibility Field evaluates whether candidate transitions may proceed.

The ledger records:

admissibility profiles
admissibility decisions
axis results
output ceilings
blocked outputs
failure policies
profile changes

Admissibility governs runtime possibility.

Ledger records admissibility history.

Admissibility is not authority.

21. Relationship to Decision Topology

Decision Topology Mapping converts execution traces into branchable behavioral structure.

The ledger records:

execution traces
decision topology projections
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

Decision topology is mapping.

Ledger records the map.

Neither mapping nor ledger recording authorizes behavior change.

22. Relationship to Proof Execution

Proof Execution tests candidate survival.

The ledger records:

proof candidates
proof executions
proof state transitions
proof traces
proof objects
proof failure objects
proof routing outcomes

Proof objects create authority eligibility.

They do not grant governance authorization.

23. Relationship to Governance

Governance decides consequence.

The ledger records:

governance candidates
governance decisions
authority vector changes
admissibility profile changes
risk summaries
monitoring plans
revocation records
expiration records
quarantine records
demotion records

Governance decisions may authorize ledger commits.

Governance decisions are scoped, temporal, and revocable.

24. Relationship to Projection / Index

Projection exposes bounded views.

The ledger records:

projection records
projection construction refs
consumer scope
preserved axes
omitted axes
loss profile
uncertainty
authority ceiling
projection time
expiry
non-claims

Projection records preserve access accountability.

Projection records are not source truth.

25. Relationship to Retention

Retention governs persistence, decay, echo eligibility, archive, quarantine, and re-entry.

The ledger records:

retention records
retention edges
echo edges
causal signatures
decay schedules
review windows
re-entry handles
quarantine retention
archive posture

Retention decides lifecycle.

Ledger records lifecycle.

Retention is not identity.

26. Relationship to Agency

Agency is projection-bound actor capability.

The ledger records:

agent authority records
agent proposal records
agent tool-action receipts
agent proof requests
agent governance requests
revocation records
scope violations
human review triggers

Agents may not write ledger truth directly.

Agent actions require projection scope, admissibility mode, authority ceiling, and governance where consequential.

27. Constraints
27.1 Append-Only History

Ledger history is append-only.

No record is mutated in place.

Corrections, revocations, supersessions, and reversals are new records.

27.2 Full Lineage

No derived object may exist without lineage.

Every object must declare:

source refs
parent refs
operator path
temporal frame
uncertainty
authority ceiling
27.3 No Silent Transformation

Every transform, projection, reduction, compression, echo, or re-entry must be recorded or reconstructable.

27.4 No Runtime Sovereignty

Runtime activity may be recorded.

Runtime activity may not become ledger truth by activity alone.

27.5 No Projection Collapse

Projection records must not replace source refs or structural lineage.

27.6 No Authority Inflation

A ledger node may not carry stronger authority than its source lineage, proof support, governance decision, and declared scope permit.

27.7 No Temporal Collapse

Source time, runtime time, external time, projection time, governance time, and retention time must remain distinguishable.

27.8 No Unbounded Snapshotting

Full manifold state is not recorded by default.

Snapshots must be scoped, bounded, lossy-aware, and authority-ceiling declared.

27.9 Failure Preservation

Failures are structural evidence.

Proof failures, admissibility failures, projection failures, governance failures, and agent violations must remain recordable and routable.

28. Failure Modes
28.1 Broken Lineage

A record lacks required parent/source/operator refs.

Mitigation:

lineage validation
required parent refs
lineage hash
reconstruction check
28.2 Hidden Transform

A transform occurs without declaration.

Mitigation:

transform receipt
operator path requirement
no silent transformation law
28.3 Temporal Collapse

External clock order is treated as causal order.

Mitigation:

temporal frame separation
ledger sequence
lineage path
source time / runtime time distinction
28.4 Runtime Snapshot Inflation

Too much active runtime state is recorded.

Mitigation:

bounded snapshots
conditional writeback
retention policy
projection/index handles
summary records
28.5 Projection-as-Truth

A projection record is treated as source truth.

Mitigation:

projection non-claims
source refs
loss/omission declaration
authority ceiling
28.6 Node Inflation

Too many low-value nodes accumulate.

Mitigation:

retention field
decay policy
archive posture
summary nodes
support handles
governance thresholds
28.7 Identity Collapse

Different structures are incorrectly merged.

Mitigation:

distinguishability conservation
separation axis
proof requirement
merge governance
lineage separation
28.8 Authority Leakage

Stored records are treated as authorization.

Mitigation:

authority ceiling
proof/governance boundary
non-claims
revocation edges
28.9 Stale Authority

Old governance decisions continue affecting runtime after expiry or contradiction.

Mitigation:

effective_until
review_after
revocation edges
monitoring plans
authority lifecycle records
28.10 Causal Signature Loss

Trace is retained without enough causal contribution data for replay, proof, or audit.

Mitigation:

causal_signature requirement
effect summaries
operator paths
input/output refs
temporal frame
29. Minimal Door 1 Ledger

Door 1 should implement the smallest lawful ledger:

PayloadRef
IngestNode
StructuralObjectRef
TransformReceipt
ChartRef
StructuralSignatureRef
FeatureRef
DistinctionEvidencePacketRef
DistinctionRegionRef
AdmissibilityDecision
ProofExecution
ProofTrace
ProofObject
ProofFailureObject
ProjectionRecord

Door 1 should also support:

ledger_seq
source_time
runtime_cycle
external_time
lineage_hash
content_hash
authority_ceiling
non_claims

Door 1 may defer:

full causal signature graph
agent authority records
retention lifecycle complexity
full governance lifecycle
complex topology snapshots
global replay engine
training-set emission records

But Door 1 must not defer:

lineage
temporal frame separation
authority ceilings
uncertainty
loss profile
non-claims
append-only correction model
30. Implementation Priorities

Recommended implementation order:

1. LedgerRecord base object
2. temporal_frame object
3. source / parent / input / output refs
4. content hash + lineage hash
5. authority ceiling + non-claims
6. PayloadRef / IngestNode records
7. StructuralObject / Transform / Chart / Signature / Feature refs
8. DistinctionEvidencePacket / DistinctionRegion refs
9. AdmissibilityDecision records
10. ProofExecution / ProofTrace / ProofObject / ProofFailureObject
11. ProjectionRecord
12. RetentionRecord placeholder
13. CausalSignature placeholder
14. GovernanceDecision placeholder
15. AgentAuthority placeholder
31. Summary

The Ledger Hypergraph is the causal structural memory substrate of DME V2.

It records:

what was admitted
what was derived
what was selected
what was transformed
what was distinguished
what became active
what interacted
what was admitted
what was proven
what failed
what was governed
what was projected
what was retained
what re-entered
what was revoked

It preserves:

lineage
provenance
temporal order
operator paths
uncertainty
loss
bias
authority ceilings
non-claims
causal signatures
replay paths
reconstruction support

It refuses:

truth by storage
authority by record
identity by retention
projection as source
runtime sovereignty
semantic meaning
global clock collapse
unbounded snapshotting

Final anchor:

The ledger records lawful continuity across time; it stores enough to replay, audit, reconstruct, prove, govern, project, retain, and revoke — without pretending that recorded structure is truth by storage.