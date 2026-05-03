# README.DME.V2.ProjectionField.md

# DME V2 — Projection Field

## 1. Purpose

The Projection Field defines how DME V2 lawfully exposes bounded views of internal structure without allowing exposure to become truth, identity, proof, authority, retention, or agency.

It governs:

- query views
- reconstruction views
- relation views
- proof summaries
- decision topology views
- runtime manifold slices
- agent read packets
- governance review packets
- training-set projections when authorized

The Projection Field answers:

> What may be exposed, to whom or what, through which lens, under what scope, with what loss, uncertainty, and authority ceiling?

The Projection Field does not define:

- source truth
- identity
- proof
- governance authority
- retention authority
- agent sovereignty
- semantic meaning
- canon

Projection exposes bounded view-space.

It does not replace the thing projected.

---

## 2. Placement

Runtime placement:

Authority / Governance
→ Projection / Retention / Agency Feedback
→ Projection Field
→ Projection / Index Substrate
→ User / Agent / Tool / UI

Operationally:

Ledger / Runtime Manifold / Proof / Governance / Retention
→ Projection Field
→ Projection Object / Projection Record / Agent Read Packet
→ Consumer

The Projection Field sits between governed system state and external or internal consumers.

It is the exposure geometry of DME V2.

3. Core Thesis

Projection is not access to reality.

Projection is bounded exposure of selected structure through a declared lens.

Every projection preserves some axes, omits others, introduces loss, carries uncertainty, and has an authority ceiling.

Final compression:

source/system state
→ selected refs
→ declared lens
→ preserved/omitted axes
→ bounded view
→ projection record
→ consumer access

Core law:

Projection is view-space, not source-space.

Projection may support cognition, query, inspection, proof review, governance review, reconstruction, retention, and agency.

Projection may not become any of them.

4. Authority Ceiling

The maximum authority of the Projection Field is:

bounded view

Projection Field may emit:

ProjectionRequest
ProjectionDecision
ProjectionObject
ProjectionRecord
ProjectionReceipt
ProjectionFailure
ProjectionIndexHandle
AgentReadPacket
ReconstructionView
ProofSummaryView
DecisionTopologyView
GovernanceReviewPacket

Projection Field may not emit:

identity
proof object
governance decision
authority vector update
retention authority
agent authority
source mutation
ledger truth
training-set emission without governance
semantic truth
5. Non-Claims

The Projection Field does not claim:

projection = source
projection = identity
projection = proof
projection = authority
projection = retention
projection = agent permission
projection = semantic truth
projection = complete reconstruction
projection = full runtime state
projection = canon

Every ProjectionObject must carry explicit non-claims.

6. Projection vs Index

Projection and Index are related but distinct.

Index

Index provides structured access paths into ledger, runtime, proof, governance, retention, or projection records.

Index answers:

Where can relevant structure be found?

Index may provide:

lookup path
candidate refs
retrieval handles
similarity handles
time/source-family filters
lineage routes
proof refs
governance refs

Index does not construct the exposed view by itself.

Projection

Projection constructs the bounded view.

Projection answers:

What view is being exposed?

Projection may include:

selected source refs
reconstructed structure
summary
relation view
proof summary
topology view
decision map
agent-readable packet
UI view

Index routes.

Projection exposes.

Neither grants authority.

7. Projection Field Inputs

The Projection Field may read from:

NativeEmission refs
PayloadRefs
Ledger records
StructuralObjects
Charts
StructuralSignatures
Features
DistinctionEvidencePackets
DistinctionRegions
Distinction-State refs
FieldProfile summaries
InterferenceTrace summaries
RelationCandidates
TopologyCandidates
DecisionTopologyProjections
AdmissibilityDecisions
ProofCandidates
ProofExecutions
ProofTraces
ProofObjects
ProofFailureObjects
GovernanceCandidates
GovernanceDecisions
RetentionRecords
AgentAuthorityRecords
CausalSignatures

Every input must preserve:

lineage refs
source refs
temporal frame
uncertainty
authority ceiling
loss profile where applicable
non-claims
8. Projection Field Outputs

The Projection Field may emit:

ProjectionObject
ProjectionRecord
ProjectionReceipt
ProjectionFailure
ProjectionIndexHandle
ProjectionView
AgentReadPacket
GovernanceReviewPacket
ReconstructionView
ProofSummaryView
DecisionTopologyView
TrainingProjectionCandidate

TrainingProjectionCandidate is not a training record.

Training-set emission requires governance authority.

9. Projection Field Axes

Every projection is evaluated across projection axes:

P_proj(x) = [
  scope_validity,
  source_boundary,
  lineage_validity,
  lens_validity,
  preserved_axes,
  omitted_axes,
  loss_profile,
  uncertainty_visibility,
  audience_validity,
  authority_ceiling,
  expiry_validity,
  reversibility_or_reconstruction_bounds
]

These axes define exposure geometry.

They do not define identity.

10. Axis 1 — Scope Validity

Scope validity determines whether the projection remains inside declared boundaries.

Projection scope may include:

source scope
ledger scope
runtime scope
proof scope
governance scope
retention scope
agent scope
user/query scope
time window
locality window
domain
basis
audience

Failure modes:

global scope assumption
hidden inclusion
undeclared exclusion
cross-scope leakage
broad exposure from narrow authority

Possible outputs:

allow_projection
narrow_scope
redact
summarize
defer
reject
11. Axis 2 — Source Boundary

Source boundary determines whether the projection preserves the difference between source material and exposed view.

Checks:

source refs declared
projection does not replace source
raw payload access is authorized if included
transformed structure is labeled as transformed
reconstruction is labeled as reconstruction
summary is labeled as summary

Failure modes:

projection treated as source
reconstruction overclaim
summary overclaim
transform result treated as native material
hidden source omission

Core law:

Projection may expose source refs.
Projection may not become source.
12. Axis 3 — Lineage Validity

Lineage validity determines whether the projection can account for where its exposed content came from.

Checks:

source refs valid
parent refs valid
transform refs declared
proof refs declared if proof claims appear
governance refs declared if authority claims appear
retention refs declared if echo/re-entry appears
causal signatures declared where relevant

Failure modes:

orphan projection
hidden transform
missing proof refs
unsupported authority display
untraceable reconstruction

Possible outputs:

allow_projection
route_to_index
request_lineage
route_to_reconstruction
defer
reject
13. Axis 4 — Lens Validity

Lens validity determines whether the basis of exposure is declared.

A projection lens must declare:

basis
domain
metric
scale
context
audience
uncertainty
bias
intended use

Examples:

structural_lens
runtime_lens
relation_lens
proof_lens
decision_topology_lens
governance_lens
agent_lens
reconstruction_lens

Failure modes:

lensless projection
semantic lens masquerading as structural lens
proof lens used as authority lens
runtime lens used as identity lens
agent lens exposing beyond scope

Core law:

No lens, no lawful projection.
14. Axis 5 — Preserved Axes

Every projection must declare which invariant or structural axes it preserves.

Canonical invariant axes:

composition
magnitude
alignment
persistence
separation
convergence

Additional projection-preserved axes may include:

temporal order
lineage path
uncertainty
proof status
authority ceiling
retention posture
admissibility status
source boundary
relation type
decision branch status

Preserved axes do not mean full fidelity.

They mean:

these axes were intentionally carried into view-space.
15. Axis 6 — Omitted Axes

Every projection must declare what it omits.

Omissions may include:

raw payload
source-local detail
inactive branches
failed branches
uncertainty detail
proof trace detail
full runtime field geometry
sensitive agent scope
governance risk detail
retained but non-exposable traces

Omission must declare:

reason
risk
authority consequence
reconstruction bounds if any

Failure modes:

hidden omission
lossy projection presented as complete
omitted failures erased from behavior map
omitted uncertainty converted into confidence

Core law:

No silent omission.
16. Axis 7 — Loss Profile

Projection is lossy unless explicitly proven otherwise.

Loss profile must declare:

loss type
compression method
omitted axes
reduced resolution
aggregation behavior
reconstruction bounds
confidence limits
irreversibility if any

Loss types may include:

none_declared
resolution_loss
axis_loss
temporal_loss
lineage_loss
context_loss
basis_loss
semantic_loss
privacy_redaction
compression_loss
summary_loss
runtime_state_loss

No ProjectionObject may claim losslessness unless losslessness is proven or structurally guaranteed.

17. Axis 8 — Uncertainty Visibility

Projection must preserve uncertainty visibly.

Uncertainty may include:

source uncertainty
transform uncertainty
cross-basis disagreement
missing axes
proof uncertainty
reconstruction uncertainty
runtime instability
governance uncertainty
retention uncertainty
projection uncertainty

Failure modes:

uncertainty hidden from consumer
confidence inflated
proof uncertainty omitted
reconstruction uncertainty omitted
runtime instability shown as stable state

Core law:

Uncertainty must travel with the view it qualifies.
18. Axis 9 — Audience Validity

Audience validity determines whether the consumer is allowed to see the projection.

Consumers may include:

user
UI
local agent
remote agent
tool
governance reviewer
proof executor
retention custodian
training exporter
external system

Every projection must declare:

consumer type
audience scope
allowed fields
redacted fields
expiry
interaction rights
downstream use limits

Audience validity prevents projection from becoming uncontrolled exposure.

19. Axis 10 — Authority Ceiling

Every projection must declare its maximum claim.

Common projection authority ceilings:

view_only
index_only
measurement_view
runtime_slice
relation_candidate_view
topology_candidate_view
decision_map_view
proof_summary
authority_summary
reconstruction_candidate
governance_review_packet
agent_read_packet
training_projection_candidate

Projection authority does not imply identity authority.

Projection authority does not imply mutation authority.

Projection authority does not imply agent authority.

Core law:

Projection can expose authority state.
Projection cannot grant authority state.
20. Axis 11 — Expiry Validity

Every projection must declare whether it expires.

Projection expiry may depend on:

time
governance decision
source update
proof contradiction
authority revocation
retention decay
agent session end
query completion
context shift
consumer access window

Projection expiration must be recorded where consequential.

Failure modes:

stale projection reused as current state
revoked authority still visible as active
expired agent read packet reused
projection consumed after scope closure
21. Axis 12 — Reconstruction Bounds

If a projection supports reconstruction, it must declare reconstruction bounds.

A ReconstructionView must declare:

source refs
lineage refs
required payload refs
proof refs if applicable
preserved axes
omitted axes
loss profile
recovery confidence
failure modes
reconstruction authority ceiling

Reconstruction projection is not reconstruction proof.

Reconstruction proof belongs to Proof Execution.

22. Projection Modes

Projection modes define exposure posture.

Modes are not authority states.

They are view-construction regimes.

22.1 Query Projection Mode

Used for ordinary user/tool/UI query response.

Allows:

bounded summaries
index handles
proof status views
relation views
source refs where authorized

Blocks:

hidden reconstruction
undeclared uncertainty collapse
agent mutation
training export

Authority ceiling:

query_view
22.2 Diagnostic Projection Mode

Used for inspecting uncertainty, failure, drift, instability, or anomaly.

Allows:

uncertainty-heavy views
failure surfaces
proof failures
branch collapse warnings
runtime instability summaries

Blocks:

mutation
identity claim
authority expansion
training emission

Authority ceiling:

diagnostic_view
22.3 Runtime Slice Projection Mode

Used for bounded exposure of active Runtime Manifold state.

Allows:

active Distinction-State slice
FieldProfile summary
InterferenceTrace summary
relation/topology candidate view
admissibility route view

Blocks:

full manifold claim
identity claim
proof claim
authority claim

Authority ceiling:

runtime_slice
22.4 Relation / Topology Projection Mode

Used to expose relation or topology candidates.

Allows:

RelationCandidate view
TopologyCandidate view
neighborhood view
trajectory view
basin view
attractor candidate view
recurrence field view

Blocks:

proven relation claim unless proof refs support it
identity claim
semantic clustering claim
governance consequence

Authority ceiling:

relation_or_topology_candidate_view
22.5 Decision Topology Projection Mode

Used to expose mapped behavior.

Allows:

decision nodes
transition edges
realized branches
rejected branches
failure surfaces
repair paths
drift regions
convergence regions
behavioral attractors

Blocks:

intent claim
agency claim
mutation
training export
policy update

Authority ceiling:

mapping_only
22.6 Proof Projection Mode

Used to expose proof status and proof results.

Allows:

proof candidate status
proof trace summary
proof object summary
proof failure summary
validated axes
omitted axes
uncertainty
authority ceiling after proof

Blocks:

governance authorization claim
mutation
authority grant
semantic truth claim

Authority ceiling:

proof_summary
22.7 Governance Projection Mode

Used to expose governance-relevant review packets.

Allows:

governance candidate summary
proof sufficiency summary
authority vector before/after
admissibility profile effect
consequence map
risk model
monitoring plan
revocation conditions

Blocks:

unrecorded decision
hidden consequence
automatic authority
global scope assumption

Authority ceiling:

governance_review_view
22.8 Agent Read Projection Mode

Used when an agent reads through bounded projection.

Allows:

scoped projection reads
index handles
proof summaries
decision topology packets
simulation inputs where authorized

Blocks:

direct ledger mutation
raw ledger sovereignty
hidden tool access
self-authority promotion
bypassing projection scope

Authority ceiling:

agent_read_packet
22.9 Training Projection Candidate Mode

Used to prepare possible training-set material.

Allows:

authorized trace candidates
proof-supported behavior summaries
governance decision refs
admissibility history
omitted branch declaration
failure preservation

Blocks:

actual training emission
universal behavior claim
omission of failures
extraction from mapping-only state
extraction from admissibility-only state
extraction without governance authority

Authority ceiling:

training_projection_candidate

Training-set emission requires T5 governance authority.

23. Projection Request

A ProjectionRequest is a scoped request for bounded exposure.

Canonical shape:

{
  "projection_request_id": "...",
  "request_origin": "user | agent | tool | ui | proof | governance | runtime | retention",
  "consumer": {
    "consumer_type": "...",
    "consumer_ref": "...",
    "audience_scope": {}
  },
  "requested_projection_type": "...",
  "requested_refs": [],
  "query_context": {},
  "requested_lens": {},
  "requested_axes": [],
  "declared_use": "...",
  "authority_requested": "view_only",
  "admissibility_profile_ref": "...",
  "constraints": {},
  "non_claims": [
    "projection_request_is_not_projection",
    "request_is_not_authority"
  ]
}

A request is not a projection.

A request is not permission.

24. Projection Decision

A ProjectionDecision determines whether and how a projection may be constructed.

Canonical shape:

{
  "projection_decision_id": "...",
  "projection_request_ref": "...",
  "axis_results": {
    "scope_validity": {},
    "source_boundary": {},
    "lineage_validity": {},
    "lens_validity": {},
    "preserved_axes": [],
    "omitted_axes": [],
    "loss_profile": {},
    "uncertainty_visibility": {},
    "audience_validity": {},
    "authority_ceiling": "...",
    "expiry_validity": {},
    "reconstruction_bounds": {}
  },
  "decision": "allow | allow_limited | redact | summarize | route_to_index | route_to_reconstruction | route_to_proof | route_to_governance | defer | reject",
  "output_ceiling": "...",
  "required_redactions": [],
  "required_disclosures": [],
  "lineage_refs": [],
  "admissibility_refs": [],
  "governance_refs": [],
  "uncertainty": {},
  "non_claims": [
    "projection_decision_is_not_authority",
    "projection_permission_is_not_source_access",
    "projection_permission_is_not_mutation_permission"
  ]
}
25. Projection Object

A ProjectionObject is the bounded view emitted by the Projection Field.

Canonical shape:

{
  "projection_id": "...",
  "projection_type": "query | diagnostic | runtime_slice | relation_topology | decision_topology | proof_summary | governance_review | agent_read | reconstruction | training_candidate",
  "source_refs": [],
  "ledger_refs": [],
  "runtime_refs": [],
  "proof_refs": [],
  "governance_refs": [],
  "retention_refs": [],
  "agent_refs": [],
  "scope": {},
  "lens": {
    "basis": "...",
    "domain": "...",
    "metric": "...",
    "scale": "...",
    "context": {},
    "bias": {},
    "uncertainty": {}
  },
  "preserved_axes": [],
  "omitted_axes": [],
  "loss_profile": {},
  "uncertainty": {},
  "authority": {
    "ceiling": "bounded_view",
    "status": "projected"
  },
  "audience": {},
  "expiry": {},
  "output_data": {},
  "non_claims": [
    "projection_is_not_source",
    "projection_is_not_identity",
    "projection_is_not_proof",
    "projection_is_not_authority",
    "projection_is_scope_bound"
  ]
}
26. Projection Receipt

Every projection should emit a receipt when consequential.

Canonical shape:

{
  "projection_receipt_id": "...",
  "projection_ref": "...",
  "projection_request_ref": "...",
  "projection_decision_ref": "...",
  "constructed_from_refs": [],
  "operator_path": [
    "Expose",
    "Select",
    "Project",
    "Record"
  ],
  "consumer": {},
  "projection_time": {
    "projection_created_at": "...",
    "projection_exposed_at": "...",
    "projection_consumed_at": null,
    "projection_expired_at": null
  },
  "loss_profile": {},
  "uncertainty": {},
  "authority": {
    "ceiling": "projection_record"
  },
  "non_claims": [
    "receipt_is_not_source",
    "receipt_is_not_proof",
    "receipt_is_not_authority"
  ]
}

The receipt records exposure.

It does not validate the projection’s content as truth.

27. Projection Failure

Projection failure must remain legible.

Failure outcomes include:

reject
defer
redact
summarize
route_to_index
route_to_reconstruction
route_to_proof
route_to_governance
quarantine
expire

Canonical shape:

{
  "projection_failure_id": "...",
  "projection_request_ref": "...",
  "failure_type": "scope_invalid | lineage_missing | lens_invalid | audience_invalid | authority_exceeded | loss_undeclared | uncertainty_hidden | source_boundary_violation | expired | governance_required",
  "failed_axes": [],
  "available_low_authority_routes": [],
  "required_next_step": "...",
  "uncertainty": {},
  "authority": {
    "ceiling": "projection_failure_evidence"
  },
  "non_claims": [
    "projection_failure_is_not_deletion",
    "projection_failure_is_structural_evidence"
  ]
}

Failure is not garbage.

Projection failure may feed governance, proof, retention, or agent review.

28. Projection Field Process
Step 1 — Receive Projection Request

Receive request from:

user
UI
tool
agent
proof process
governance process
retention process
runtime route

No projection exists yet.

Step 2 — Bind Request Scope

Declare:

consumer
audience
use
requested refs
requested lens
requested axes
authority ceiling
admissibility profile

No scope, no projection.

Step 3 — Resolve Index Handles

Use index only to locate candidate refs.

Index may return:

source refs
ledger refs
proof refs
governance refs
runtime refs
retention refs
causal signature refs

Index does not construct the view.

Step 4 — Evaluate Projection Axes

Evaluate:

scope validity
source boundary
lineage validity
lens validity
preserved axes
omitted axes
loss profile
uncertainty visibility
audience validity
authority ceiling
expiry
reconstruction bounds
Step 5 — Emit Projection Decision

Decision may:

allow
allow limited
redact
summarize
route to index
route to reconstruction
route to proof
route to governance
defer
reject
Step 6 — Construct Projection Object

Use T2 composition:

Projection = Expose + Select + Project + Record

Optional reconstruction view:

ReconstructionView = Echo + Select + Transform + Compare + Project

No projection may silently skip declaration.

Step 7 — Record Projection Receipt

Record:

what was exposed
to whom / what
when
from what refs
under what lens
with what loss
with what authority ceiling
with what expiry
Step 8 — Monitor Expiry / Revocation

Projection may expire, be revoked, be superseded, or be quarantined.

Projection lifecycle must remain ledger-visible where consequential.

29. Relationship to T0 — Primitive Field Theory

T0 defines observer, lens, attention, uncertainty, locality, distinction, relation, identity, authority, and recursion.

Projection Field operationalizes observer-relative exposure.

Projection is always relative to:

observer / consumer
lens
scope
locality
uncertainty
authority ceiling

No projection is context-free.

30. Relationship to T1 — Conservation Invariants

Projection Field must preserve T1 invariants, especially:

provenance conservation
distinguishability conservation
uncertainty conservation
bias declaration conservation
no free compression
projection boundary conservation
authority boundary conservation
recursion trace conservation
failure legibility conservation

Projection is one of the highest-risk compression surfaces.

Therefore:

Every projection must declare what it preserves, what it omits, what it loses, and what it cannot claim.
31. Relationship to T2 — Phase Operators

Projection Field uses T2 operators.

Primary composition:

Projection = Expose + Select + Project + Record

Other lawful compositions:

QueryProjection = Expose + Select + Project + Record

ReconstructionProjection = Echo + Select + Transform + Compare + Project + Record

ProofProjection = Select + Project + Expose + Record

DecisionTopologyProjection = Record + Echo + Compare + Project

GovernanceReviewProjection = Select + Project + Record

AgentReadProjection = Select + Project + Expose + Record

Projection may not smuggle Commit.

Commit belongs to persistence, proof, governance, or ledger-authorized operations.

32. Relationship to T3 — Observables / Detectors / Stabilizers

Projection Field may expose T3 observables, detector outputs, and stabilized views.

But:

Observable projection ≠ proof.
Detector projection ≠ identity.
Stabilized projection ≠ optimized truth.

Projection may show:

measurement views
detector flags
lifecycle states
failure surfaces
overclaim risks

Projection may not convert them into authority.

33. Relationship to Admissibility Field

Admissibility determines whether projection routing may proceed.

Projection-relevant admissibility axes include:

locality validity
lineage validity
uncertainty bound
budget / cost bound
salience threshold
distinguishability support
constraint compatibility
temporal validity
projection boundary
proof precondition

A projection may be admissible as:

projection_only
diagnostic_trace
query_view
agent_read_packet
governance_candidate

without being authorized as:

identity
mutation
agent_right
training_export
ledger_commit

Admissibility permits projection transition.

Authority governs projection consequence.

34. Relationship to Runtime Manifold

Projection Field may expose bounded runtime slices.

Allowed runtime projections:

active Distinction-State slice
FieldProfile summary
InterferenceTrace summary
RelationCandidate view
TopologyCandidate view
decision topology view
proof routing view
support/index handle

Runtime projection constraints:

no full-manifold claim
no identity claim
no proof claim
no authority claim
no hidden instability
no global coordinate assumption

Runtime manifold state is active and non-authoritative.

Projection must preserve that ceiling.

35. Relationship to Ledger Hypergraph

The Ledger records ProjectionRecords and ProjectionReceipts.

The Ledger may store:

projection construction records
projection exposure time
consumer scope
preserved axes
omitted axes
loss profile
uncertainty
authority ceiling
projection expiry
projection revocation
projection causal signature

The Ledger does not become the Projection Field.

The Ledger records exposure accountability.

Projection Field constructs exposure.

36. Relationship to Proof Execution

Projection may expose proof state.

Proof projections may include:

proof candidate status
proof execution status
proof trace summary
proof object summary
proof failure summary
validated axes
omitted axes
authority ceiling after proof
uncertainty

But:

Proof projection ≠ proof.
Proof object ≠ governance authorization.
Proof summary ≠ full proof trace unless declared.

If a projection claims proof support, proof refs must be present.

37. Relationship to Authority / Governance

Governance controls exposure authority.

Projection Field must obey:

exposure authority
audience scope
governance decisions
active policies
revocation conditions
admissibility profile constraints
training export constraints

T5 may authorize:

projection expansion
projection restriction
redaction
quarantine view
agent read packet
governance review packet
training-set projection candidate
external disclosure

Projection Field may not authorize these by itself.

38. Relationship to Retention Field

Retention determines whether projection traces persist or may re-enter future processing.

Projection may produce retention-relevant material:

projection record
projection receipt
projection failure
consumer interaction trace
causal signature
reconstruction support handle
agent read history
governance review packet

Retention decides:

duration
decay behavior
echo eligibility
archive posture
quarantine retention
review/revocation window

Projection does not decide persistence.

39. Relationship to Agency Field

Agents interact through Projection Field.

An agent may only see:

authorized projection
authorized index handle
authorized proof summary
authorized decision topology packet
authorized simulation packet
authorized governance request packet

Agents may not:

access raw ledger directly
bypass projection scope
infer hidden omitted axes as known
mutate projection into authority
self-expand projection access
convert read access into write permission

Agent projection requires:

AgentAuthority ref
admissibility profile ref
projection scope
allowed reads
allowed proposals
revocation conditions
expiry
40. Projection Lifecycle

Projection lifecycle states:

requested
→ scoped
→ indexed
→ evaluated
→ allowed / limited / rejected / deferred
→ constructed
→ exposed
→ consumed
→ recorded
→ monitored
→ expired / revoked / superseded / retained

A projection may also route to:

redacted
summarized
quarantined
route_to_proof
route_to_governance
route_to_reconstruction

No lifecycle state implies proof or authority by itself.

41. Projection Boundary Laws
Law 1 — Projection Is Not Source

A projection may reference source.

It may not replace source.

Law 2 — Projection Is Not Identity

A projection may expose identity evidence.

It may not claim identity unless proof and authority scope support that claim.

Law 3 — Projection Is Not Proof

A projection may summarize proof.

It may not become proof.

Law 4 — Projection Is Not Authority

A projection may display authority status.

It may not grant authority.

Law 5 — No Silent Loss

Every projection must declare loss.

Law 6 — No Hidden Omission

Every projection must declare omitted axes or omitted scope.

Law 7 — No Lensless Exposure

Every projection must declare lens, context, scale, basis, metric, and uncertainty where applicable.

Law 8 — No Audience-Free Projection

Every projection must declare consumer/audience scope.

Law 9 — No Stale Projection as Current State

Projection expiry, revocation, and supersession must remain visible.

Law 10 — No Agent Direct Access

Agents interact through scoped projections and indexes only.

42. Failure Modes
Projection Inflation

Projection treated as source, proof, identity, or authority.

Hidden Loss

Projection omits or compresses structure without declaring loss.

Hidden Omission

Projection excludes branches, failures, uncertainty, or axes without declaration.

Authority Leakage

Projection carries stronger claim than its refs support.

Source Boundary Collapse

Projection replaces source-native material in downstream reasoning.

Reconstruction Overclaim

Reconstruction view presented as exact source recovery.

Runtime State Overclaim

Active manifold slice presented as durable identity or ledger truth.

Proof Summary Overclaim

Proof summary presented as complete proof object.

Governance Display Overclaim

Governance review packet presented as governance decision.

Agent Scope Escape

Agent receives projection beyond declared AgentAuthority.

Training Projection Contamination

Training candidate emitted without proof/governance/failure preservation.

Stale Projection Reuse

Expired or revoked projection reused as current state.

Projection Feedback Contamination

Projection output re-enters runtime as if it were source or proof.

43. Minimal Projection Object Schema
{
  "projection_id": "...",
  "projection_type": "...",
  "source_refs": [],
  "ledger_refs": [],
  "runtime_refs": [],
  "proof_refs": [],
  "governance_refs": [],
  "retention_refs": [],
  "agent_refs": [],
  "scope": {},
  "lens": {},
  "preserved_axes": [],
  "omitted_axes": [],
  "loss_profile": {},
  "uncertainty": {},
  "audience": {},
  "expiry": {},
  "authority": {
    "ceiling": "bounded_view",
    "status": "projected"
  },
  "output_data": {},
  "non_claims": [
    "projection_is_not_source",
    "projection_is_not_identity",
    "projection_is_not_proof",
    "projection_is_not_authority",
    "projection_is_scope_bound"
  ]
}
44. Minimal Projection Record Schema
{
  "projection_record_id": "...",
  "projection_ref": "...",
  "projection_request_ref": "...",
  "projection_decision_ref": "...",
  "consumer_scope": {},
  "source_refs": [],
  "lineage_refs": [],
  "operator_path": [
    "Expose",
    "Select",
    "Project",
    "Record"
  ],
  "temporal_frame": {
    "ledger_seq": null,
    "projection_time": {},
    "governance_time": {},
    "retention_time": {}
  },
  "preserved_axes": [],
  "omitted_axes": [],
  "loss_profile": {},
  "uncertainty": {},
  "authority": {
    "ceiling": "projection_record"
  },
  "expiry": {},
  "non_claims": [
    "projection_record_is_not_source",
    "projection_record_is_not_proof",
    "projection_record_is_not_authority"
  ]
}
45. Final Compression

The Projection Field is the governed exposure geometry of DME V2.

It converts internal structural, runtime, proof, governance, retention, and agency state into bounded view-space.

It preserves access without collapsing boundaries.

Final runtime law:

Source remains source.
Ledger records continuity.
Runtime processes active structure.
Proof tests survival.
Governance authorizes consequence.
Retention governs persistence.
Agency acts through scoped projection.
Projection exposes bounded view.