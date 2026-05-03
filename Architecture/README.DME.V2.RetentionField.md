# README.DME.V2.RetentionField.md

# DME V2 — Retention Field

## 1. Purpose

The Retention Field defines how DME V2 governs persistence, decay, archive, quarantine, echo eligibility, and lawful re-entry of traces, records, projections, proofs, failures, authority decisions, and causal signatures.

It answers:

> What may persist, for how long, under what authority ceiling, with what decay behavior, and under what conditions may it re-enter future processing?

The Retention Field governs:

- trace persistence
- causal signature lifecycle
- proof object persistence
- proof failure persistence
- projection receipt persistence
- runtime trace decay
- relation/topology candidate retention
- decision topology retention
- governance decision retention
- admissibility profile retention
- agent authority record retention
- quarantine retention
- archive posture
- echo eligibility
- re-entry conditions

The Retention Field does not define:

- identity
- proof
- source truth
- runtime authority
- governance consequence
- projection access
- agent sovereignty
- semantic memory
- canon

Retention preserves governed trace.

It does not make the retained trace true.

---

## 2. Placement

Runtime placement:

Authority / Governance
→ Projection / Retention / Agency Feedback
→ Retention Field
→ Ledger Hypergraph / Runtime Manifold / Projection Field / Agency Field
→ Future Recursion

Operationally:

Ledger records continuity.
Projection exposes bounded view.
Retention governs persistence and re-entry.
Echo reintroduces retained trace under admissibility.
Runtime may use retained support.
Proof tests survival.
Governance authorizes consequence.

The Retention Field sits between ledgered history and future runtime recursion.

It is the persistence and re-entry governance layer of DME V2.

3. Core Thesis

Retention is not memory as identity.

Retention is governed persistence of trace under declared lifecycle conditions.

A retained structure may support future reconstruction, replay, audit, projection, proof, governance, or runtime echo.

But retention alone cannot prove identity, authorize consequence, expand agency, or mutate system behavior.

Final compression:

trace
→ retention decision
→ lifecycle posture
→ decay / archive / quarantine / echo eligibility
→ possible re-entry
→ admissibility evaluation
→ runtime/proof/projection/governance route

Core law:

Retention preserves trace.
Echo reintroduces trace.
Admissibility permits re-entry.
Proof tests survival.
Governance authorizes consequence.
4. Authority Ceiling

The maximum authority of the Retention Field is:

retention posture

The Retention Field may emit:

RetentionCandidate
RetentionDecision
RetentionRecord
RetentionReceipt
RetentionFailure
CausalSignatureRetention
EchoEligibilityRecord
DecaySchedule
ArchiveRecord
QuarantineRetentionRecord
ReEntryHandle
SupersessionRecord
ExpiryRecord

The Retention Field may not emit:

identity
proof object
governance decision
authority vector update
projection permission
agent authority
mutation authority
source truth
ledger truth
semantic memory
canon
5. Non-Claims

The Retention Field does not claim:

retention = identity
retention = proof
retention = authority
retention = source
retention = projection
retention = agency
retention = semantic truth
retention = canon
recurrence = identity
persistence = authority
echo = proof
archive = truth
quarantine = deletion
decay = erasure

Every RetentionRecord must carry explicit non-claims.

6. Retention vs Ledger

Ledger and Retention are coupled but distinct.

Ledger

Ledger records lawful continuity.

Ledger answers:

What happened, where did it come from, and what lawful path produced it?

Ledger stores:

retention records
projection records
proof traces
proof objects
proof failures
governance decisions
admissibility decisions
causal signatures
echo edges
revocation/supersession edges

Ledger does not decide what should persist.

Retention

Retention governs lifecycle posture.

Retention answers:

What remains eligible to persist, decay, echo, archive, quarantine, or re-enter?

Retention may configure:

duration
decay behavior
echo eligibility
re-entry scope
review conditions
revocation conditions
archive posture
quarantine posture
compression posture
reconstruction support posture

Ledger records retention.

Retention governs persistence.

Neither grants identity.

7. Retention vs Projection

Projection exposes bounded view-space.

Retention governs whether projection traces persist and whether they may later influence runtime, proof, governance, or agency.

Projection may produce retention-relevant artifacts:

ProjectionObject
ProjectionRecord
ProjectionReceipt
ProjectionFailure
AgentReadPacket
GovernanceReviewPacket
TrainingProjectionCandidate
ProjectionExpiryRecord

Retention decides:

whether the projection record persists
whether the receipt persists
whether the exposed view may be echoed
whether the consumer interaction is retained
whether projection failure feeds governance/proof
whether projection artifacts expire, decay, archive, or quarantine

Core law:

Projection exposes.
Retention governs persistence of exposure trace.

A projection record is not the source.

A retained projection record is still not the source.

8. Retention vs Echo

Retention and Echo are related but distinct.

Retention

Retention stores lifecycle posture.

It answers:

May this trace persist?
Echo

Echo reintroduces retained trace into current admissible processing.

It answers:

May this prior trace re-enter the present, and how?

Echo requires:

retained trace
echo eligibility
scope of re-entry
loss/compression declaration
temporal order preservation
authority ceiling
admissibility decision

Core law:

Retention makes echo possible.
Echo does not make retention authoritative.

Echo does not grant authority by recurrence alone.

9. Retention Field Inputs

The Retention Field may read from:

NativeEmission refs
PayloadRefs
IngestNodes
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
DecisionNodes
TransitionEdges
AdmissibilityDecisions
ProofCandidates
ProofExecutions
ProofTraces
ProofObjects
ProofFailureObjects
GovernanceCandidates
GovernanceDecisions
ProjectionObjects
ProjectionRecords
ProjectionReceipts
ProjectionFailures
AgentAuthorityRecords
CausalSignatures

Every retained input must preserve:

source refs
lineage refs
temporal frame
authority ceiling
uncertainty
loss profile
scope
non-claims
10. Retention Field Outputs

The Retention Field may emit:

RetentionCandidate
RetentionDecision
RetentionRecord
RetentionReceipt
RetentionFailure
DecaySchedule
EchoEligibilityRecord
ReEntryHandle
ArchiveRecord
QuarantineRetentionRecord
CausalSignatureRetention
RetentionSupersessionRecord
RetentionExpiryRecord
RetentionRevocationRecord

Retention outputs are lifecycle objects.

They are not proof, authority, identity, or source.

11. Retention Field Axes

Every retention decision is evaluated across retention axes:

R_ret(x) = [
  lineage_validity,
  temporal_validity,
  authority_ceiling,
  persistence_reason,
  decay_behavior,
  echo_eligibility,
  re_entry_scope,
  uncertainty_posture,
  loss_or_compression,
  reconstruction_support,
  quarantine_risk,
  privacy_or_exposure_risk,
  review_or_revocation_conditions
]

These axes define persistence geometry.

They do not define identity.

12. Axis 1 — Lineage Validity

Lineage validity determines whether the trace can lawfully persist.

Checks:

source refs valid
parent refs valid
transform refs declared
proof refs declared where proof support is invoked
governance refs declared where authority support is invoked
projection refs declared where exposure trace is retained
causal signature refs declared where causal support is retained

Failure modes:

orphan retention
hidden transform
missing proof ref
unsupported authority reference
projection retained as source
untraceable echo candidate

Possible outputs:

retain
retain_limited
route_to_reconstruction
quarantine
defer
reject_retention
13. Axis 2 — Temporal Validity

Temporal validity determines whether persistence and re-entry preserve causal order.

Retention must distinguish:

ledger sequence time
source-local time
runtime cycle time
projection exposure time
governance effective time
retention lifecycle time
external / OS clock time

Failure modes:

stale trace reused as current state
future information leak
recurrence without trace
projection exposure time substituted for source time
governance expiry ignored
retention expiry ignored
echo source does not precede echo use

Core law:

Retention preserves lifecycle time.
Echo must preserve causal order.
14. Axis 3 — Authority Ceiling

Every retention object must declare its maximum claim.

Common retention authority ceilings:

ephemeral_trace
diagnostic_trace
runtime_support
projection_record
proof_evidence
proof_supported_retention
governance_record
quarantine_retention
archive_record
reconstruction_support
agent_authority_record
causal_evidence

Retention authority does not imply epistemic authority.

Retention authority does not imply operational authority.

Retention authority does not imply mutation authority.

Retention authority does not imply agent authority.

Core law:

Retained means available under lifecycle posture.
Retained does not mean authorized for consequence.
15. Axis 4 — Persistence Reason

Retention must declare why a trace persists.

Valid persistence reasons may include:

audit_required
lineage_required
proof_support
proof_failure_evidence
governance_record
projection_accountability
agent_action_accountability
reconstruction_support
recurrence_support
diagnostic_interest
quarantine_required
archive_required
legal_or_policy_hold
user_requested
system_integrity
training_candidate_hold

No retention without reason.

Retention reason bounds future use.

16. Axis 5 — Decay Behavior

Decay behavior determines how retained trace weakens, compresses, expires, or loses echo eligibility over time.

Decay behavior may include:

none
time_decay
use_decay
uncertainty_decay
authority_decay
projection_expiry_decay
quarantine_decay
compression_decay
review_decay
manual_review_required

Decay may affect:

salience
echo eligibility
projection eligibility
reconstruction confidence
proof support weight
agent accessibility
governance review priority

Decay is not deletion.

Decay must preserve audit trace where consequential.

17. Axis 6 — Echo Eligibility

Echo eligibility determines whether retained trace may re-enter current processing.

Echo eligibility must declare:

eligible / ineligible / restricted
earliest echo time
latest echo time
permitted modes
required admissibility profile
allowed re-entry scope
loss/compression
authority ceiling
proof/governance requirements
revocation conditions

Echo eligibility states:

not_echoable
echoable_as_index
echoable_as_support
echoable_as_diagnostic
echoable_as_runtime_bias
echoable_as_proof_support
echoable_as_governance_context
echoable_only_under_quarantine

Echo eligibility is not echo execution.

Actual echo requires an admissibility decision.

18. Axis 7 — Re-Entry Scope

Re-entry scope determines where retained trace may influence future processing.

Possible scopes:

index_only
projection_only
diagnostic_only
runtime_support
proof_support
reconstruction_support
governance_context
agent_context
training_candidate_context
quarantine_only

Re-entry must declare:

what re-enters
where it re-enters
under what admissibility mode
what authority ceiling it carries
what loss/compression applies
what cannot be claimed

Core law:

No trace may re-enter globally by default.
19. Axis 8 — Uncertainty Posture

Retention must preserve uncertainty.

Uncertainty may include:

source uncertainty
transform uncertainty
cross-basis disagreement
missing axes
runtime instability
proof uncertainty
projection uncertainty
governance uncertainty
retention uncertainty
echo uncertainty

Retention may not convert unresolved uncertainty into stable memory.

High uncertainty may route retention to:

diagnostic_retention
short_retention
quarantine_retention
proof_required_before_echo
review_required_before_echo

Core law:

Uncertainty persists with the trace it qualifies.
20. Axis 9 — Loss or Compression

Retention may store full refs, bounded summaries, causal signatures, or compressed support handles.

Every retained compression must declare:

preserved axes
omitted axes
compression method
loss profile
reconstruction bounds
uncertainty
authority ceiling

Allowed retention forms:

full_ref_retention
bounded_snapshot_retention
causal_signature_retention
summary_retention
index_handle_retention
projection_receipt_retention
failure_surface_retention
archive_bundle_retention

Core law:

No free compression in retention.
21. Axis 10 — Reconstruction Support

Some retained traces may support reconstruction.

Reconstruction support must declare:

source refs
lineage refs
payload refs where available
transform refs
preserved axes
omitted axes
proof refs if applicable
loss profile
reconstruction bounds
recovery confidence
failure modes

Reconstruction support is not reconstruction proof.

Reconstruction proof belongs to Proof Execution.

22. Axis 11 — Quarantine Risk

Retention may preserve unsafe, unstable, contaminated, or authority-risky structures under quarantine.

Quarantine retention may apply when:

proof failed but evidence is useful
projection overclaimed
lineage is incomplete
semantic contamination suspected
authority leakage detected
agent overreach occurred
training contamination risk exists
unstable runtime structure is informative
governance requires preservation without consequence

Quarantine retention blocks:

runtime influence
broad projection
training emission
agent access
authority escalation
mutation

unless governance explicitly permits a narrower route.

Quarantine is not deletion.

Quarantine is retained trace with blocked consequence.

23. Axis 12 — Privacy or Exposure Risk

Retention must account for exposure risk.

Risk sources may include:

projection audience
agent access
external tool access
training candidate status
sensitive source refs
raw payload refs
governance review contents
user-requested privacy posture
expired exposure authority
revoked projection scope

Possible outcomes:

retain_private
retain_redacted
retain_internal_only
retain_index_only
retain_quarantined
expire_projection_trace
reject_retention
require_governance_review
24. Axis 13 — Review or Revocation Conditions

Every non-ephemeral retention posture must declare review or revocation conditions.

Review/revocation triggers may include:

expiry reached
proof contradicted
governance revoked
authority scope changed
projection expired
agent authority expired
uncertainty increased
lineage broken
source ref unavailable
reconstruction failed
retention risk increased
user request
policy change
archive threshold reached

Retention is dynamic.

Retained does not mean permanent.

25. Retention Modes

Retention modes define lifecycle posture.

Modes are not authority states.

They are persistence regimes.

25.1 Ephemeral Mode

Used for transient runtime traces that do not require durable persistence.

Allows:

temporary runtime use
short diagnostic visibility
immediate release after scope

Blocks:

echo
archive
proof support
governance consequence

Authority ceiling:

ephemeral_trace
25.2 Short Retention Mode

Used for traces that may be useful soon but should decay quickly.

Allows:

short-lived index support
near-term replay
short diagnostic echo
temporary projection accountability

Blocks:

long-term identity support
unrestricted echo
governance authority

Authority ceiling:

short_retention
25.3 Diagnostic Retention Mode

Used for ambiguity, instability, drift, anomaly, or failure inspection.

Allows:

diagnostic replay
uncertainty tracking
failure surface support
proof routing
governance review support

Blocks:

mutation
identity commitment
training export
broad agent access

Authority ceiling:

diagnostic_retention
25.4 Proof-Supported Retention Mode

Used when proof traces or proof objects support stronger persistence.

Allows:

proof context preservation
future proof comparison
reconstruction support
bounded runtime support where admissible
governance review support

Blocks:

automatic authority
mutation without governance
unrestricted agent use

Authority ceiling:

proof_supported_retention
25.5 Governance Retention Mode

Used for governance candidates, decisions, authority vector updates, admissibility profile changes, revocations, and monitoring plans.

Allows:

audit
revocation review
consequence tracking
policy compatibility checks
authority history preservation

Blocks:

silent expiry
hidden authority mutation
agent bypass

Authority ceiling:

governance_record
25.6 Projection Retention Mode

Used for projection objects, projection records, receipts, failures, exposure histories, and access accountability.

Allows:

exposure audit
stale projection detection
projection overclaim review
agent read accountability
future projection correction

Blocks:

projection-as-source
retained view as identity
hidden re-use after expiry

Authority ceiling:

projection_record
25.7 Reconstruction Support Mode

Used when retained material supports future reconstruction or replay.

Allows:

lineage replay
reconstruction challenge
recovery proof preparation
loss-bound recovery support

Blocks:

reconstruction proof claim
identity claim
reduction authority without proof/governance

Authority ceiling:

reconstruction_support
25.8 Archive Mode

Used for long-term preservation under low active influence.

Allows:

audit retrieval
historical reconstruction support
governance review
proof comparison
source continuity preservation

Blocks:

automatic runtime echo
salience inflation
default projection
agent access unless scoped

Authority ceiling:

archive_record
25.9 Quarantine Retention Mode

Used for informative but unsafe, unstable, contaminated, or authority-risky traces.

Allows:

isolated diagnostic inspection
proof challenge under quarantine
governance review
failure preservation
revocation evidence

Blocks:

runtime influence
broad projection
training emission
agent access
authority escalation

Authority ceiling:

quarantine_retention
25.10 Agent Context Retention Mode

Used for agent read packets, proposals, simulations, tool actions, proof requests, and governance requests.

Allows:

agent accountability
proposal trace
tool/action audit
simulation replay
scope violation detection

Blocks:

agent self-promotion
direct ledger authority
hidden tool use
training emission without governance

Authority ceiling:

agent_context_retention
25.11 Training Candidate Hold Mode

Used only for possible training-set material before governance authorization.

Allows:

candidate packaging
proof/governance refs
omitted branch declaration
failure preservation
contamination review

Blocks:

training emission
universal behavior claim
omission of failures
extraction from mapping-only or admissibility-only states

Authority ceiling:

training_candidate_hold

Training-set emission requires T5 governance authority.

26. Retention Candidate

A RetentionCandidate is any trace or object proposed for lifecycle governance.

Canonical shape:

{
  "retention_candidate_id": "...",
  "candidate_type": "trace | proof | failure | projection | governance | admissibility | relation | topology | decision_topology | agent_action | causal_signature | reconstruction_support | archive | quarantine | training_candidate",
  "source_refs": [],
  "lineage_refs": [],
  "object_refs": [],
  "causal_signature_refs": [],
  "proposed_retention_mode": "...",
  "persistence_reason": "...",
  "requested_duration": {},
  "requested_echo_eligibility": {},
  "requested_re_entry_scope": {},
  "uncertainty": {},
  "loss_profile": {},
  "authority": {
    "requested_ceiling": "retention_posture"
  },
  "non_claims": [
    "retention_candidate_is_not_retained",
    "retention_candidate_is_not_identity",
    "retention_candidate_is_not_authority"
  ]
}

A RetentionCandidate is not retained yet.

It is a lifecycle proposal.

27. Retention Decision

A RetentionDecision determines whether and how a trace persists.

Canonical shape:

{
  "retention_decision_id": "...",
  "retention_candidate_ref": "...",
  "axis_results": {
    "lineage_validity": {},
    "temporal_validity": {},
    "authority_ceiling": "...",
    "persistence_reason": "...",
    "decay_behavior": {},
    "echo_eligibility": {},
    "re_entry_scope": {},
    "uncertainty_posture": {},
    "loss_or_compression": {},
    "reconstruction_support": {},
    "quarantine_risk": {},
    "privacy_or_exposure_risk": {},
    "review_or_revocation_conditions": {}
  },
  "decision": "retain | retain_limited | decay | archive | quarantine | expire | revoke | supersede | defer | reject",
  "retention_mode": "...",
  "duration": {},
  "decay_schedule": {},
  "echo_eligibility": {},
  "re_entry_scope": {},
  "review_after": {},
  "revocation_conditions": [],
  "lineage_refs": [],
  "governance_refs": [],
  "admissibility_refs": [],
  "uncertainty": {},
  "authority": {
    "ceiling": "retention_decision"
  },
  "non_claims": [
    "retention_decision_is_not_identity",
    "retention_decision_is_not_proof",
    "retention_decision_is_not_authority"
  ]
}
28. Retention Record

A RetentionRecord is the ledgerable lifecycle posture of a retained trace.

Canonical shape:

{
  "retention_record_id": "...",
  "retention_candidate_ref": "...",
  "retention_decision_ref": "...",
  "retained_refs": [],
  "causal_signature_refs": [],
  "retention_mode": "...",
  "retention_reason": "...",
  "duration": {},
  "decay_behavior": {},
  "decay_schedule": {},
  "echo_eligibility": {
    "status": "not_echoable | echoable_as_index | echoable_as_support | echoable_as_diagnostic | echoable_as_runtime_bias | echoable_as_proof_support | echoable_as_governance_context | echoable_only_under_quarantine",
    "eligible_from": null,
    "expires_at": null,
    "required_admissibility_profile": null
  },
  "re_entry_scope": {},
  "lineage_refs": [],
  "temporal_frame": {
    "ledger_seq": null,
    "source_time": {},
    "runtime_cycle": null,
    "projection_time": {},
    "governance_time": {},
    "retention_time": {}
  },
  "uncertainty": {},
  "loss_profile": {},
  "reconstruction_bounds": {},
  "review_or_revocation_conditions": [],
  "authority": {
    "ceiling": "retention_posture",
    "status": "retained"
  },
  "non_claims": [
    "retention_record_is_not_identity",
    "retention_record_is_not_proof",
    "retention_record_is_not_authority",
    "retained_trace_is_not_source"
  ]
}
29. Retention Receipt

Every consequential retention action emits a receipt.

Canonical shape:

{
  "retention_receipt_id": "...",
  "retention_record_ref": "...",
  "retention_decision_ref": "...",
  "operator_path": [
    "Select",
    "Record",
    "Commit"
  ],
  "retained_refs": [],
  "retention_time": {
    "retention_started_at": "...",
    "retention_expires_at": null,
    "review_after": null,
    "archived_at": null,
    "quarantine_until": null,
    "reentered_at": null
  },
  "authority": {
    "ceiling": "retention_receipt"
  },
  "non_claims": [
    "receipt_is_not_identity",
    "receipt_is_not_proof",
    "receipt_is_not_authority"
  ]
}

A receipt records that retention posture was applied.

It does not prove the retained trace.

30. Echo Eligibility Record

EchoEligibilityRecord declares whether retained trace may re-enter.

Canonical shape:

{
  "echo_eligibility_id": "...",
  "retention_record_ref": "...",
  "retained_trace_ref": "...",
  "eligibility_status": "ineligible | eligible | restricted | expired | revoked | quarantine_only",
  "allowed_echo_modes": [],
  "eligible_from": null,
  "expires_at": null,
  "required_admissibility_profile_ref": null,
  "re_entry_scope": {},
  "loss_or_compression": {},
  "authority": {
    "ceiling": "echo_eligibility"
  },
  "non_claims": [
    "echo_eligibility_is_not_echo",
    "echo_is_not_proof",
    "echo_is_not_authority"
  ]
}
31. Re-Entry Handle

A ReEntryHandle is a bounded handle allowing retained trace to be proposed for future processing.

Canonical shape:

{
  "re_entry_handle_id": "...",
  "retention_record_ref": "...",
  "echo_eligibility_ref": "...",
  "trace_source_ref": "...",
  "proposed_re_entry_scope": {},
  "required_admissibility_mode": "...",
  "loss_or_compression": {},
  "temporal_order": {},
  "authority": {
    "ceiling": "re_entry_candidate"
  },
  "non_claims": [
    "re_entry_handle_is_not_admissibility",
    "re_entry_handle_is_not_runtime_activation",
    "re_entry_handle_is_not_authority"
  ]
}

A ReEntryHandle is not activation.

Admissibility must still evaluate re-entry.

32. Retention Failure

Retention failure must remain legible.

Failure outcomes include:

reject_retention
defer_retention
quarantine_retention
expire_trace
revoke_echo
route_to_reconstruction
route_to_governance
route_to_projection_review

Canonical shape:

{
  "retention_failure_id": "...",
  "retention_candidate_ref": "...",
  "failure_type": "lineage_missing | temporal_invalid | authority_exceeded | uncertainty_too_high | loss_undeclared | privacy_risk | projection_boundary_violation | stale_authority | echo_invalid | governance_required",
  "failed_axes": [],
  "available_low_authority_routes": [],
  "required_next_step": "...",
  "uncertainty": {},
  "authority": {
    "ceiling": "retention_failure_evidence"
  },
  "non_claims": [
    "retention_failure_is_not_deletion",
    "retention_failure_is_structural_evidence"
  ]
}

Failure is retained as structural evidence unless governance requires otherwise.

33. Retention Field Process
Step 1 — Receive Retention Candidate

Candidate may originate from:

runtime trace
projection receipt
proof trace
proof object
proof failure
governance decision
admissibility decision
relation/topology candidate
decision topology map
agent action
causal signature
reconstruction support
quarantine route
Step 2 — Bind Retention Scope

Declare:

retained refs
persistence reason
requested mode
requested duration
requested echo eligibility
re-entry scope
authority ceiling
uncertainty
loss/compression
review/revocation conditions

No scope, no retention.

Step 3 — Evaluate Retention Axes

Evaluate:

lineage validity
temporal validity
authority ceiling
persistence reason
decay behavior
echo eligibility
re-entry scope
uncertainty posture
loss/compression
reconstruction support
quarantine risk
privacy/exposure risk
review/revocation conditions
Step 4 — Emit Retention Decision

Decision may:

retain
retain limited
decay
archive
quarantine
expire
revoke
supersede
defer
reject
Step 5 — Construct Retention Record

Use T2 composition:

Retention = Select + Record + Commit

If retention includes compression:

RetentionCompression = Select + Transform + Project + Record

If retention includes re-entry support:

EchoPreparation = Record + optional Project(index/support handle)
Step 6 — Record Retention Receipt

Record:

what persisted
why
under what scope
with what decay
with what echo eligibility
with what authority ceiling
with what lifecycle time
Step 7 — Monitor Lifecycle

Monitor:

expiry
decay
review window
revocation conditions
governance changes
proof contradictions
projection expiry
agent authority expiry
quarantine state
archive transition
Step 8 — Evaluate Re-Entry

If retained trace requests re-entry:

RetentionRecord
→ EchoEligibilityRecord
→ ReEntryHandle
→ AdmissibilityDecision
→ Echo
→ Runtime / Proof / Projection / Governance route

No re-entry without admissibility.

34. Relationship to T0 — Primitive Field Theory

T0 defines recursion as feedback over structure across time, scale, or representation.

Retention Field provides the trace substrate required for lawful recursion.

Retention binds:

memory / trace
locality
uncertainty
attention influence
authority ceiling
re-entry scope

Core law:

No recursion without retained or reconstructable trace.
35. Relationship to T1 — Conservation Invariants

Retention Field must preserve T1 invariants, especially:

provenance conservation
temporal order conservation
uncertainty conservation
no free compression
capacity conservation
recursion trace conservation
authority boundary conservation
projection boundary conservation
failure legibility conservation

Retention is the primary implementation surface for recursion trace conservation.

A recursive claim is invalid without retained or reconstructable trace.

36. Relationship to T2 — Phase Operators

Retention Field uses T2 operators.

Primary compositions:

Retention = Select + Record + Commit
Decay = Release + Record
Archive = Select + Project + Record + Commit
QuarantineRetention = Select + Record + Commit + Release(runtime influence)
EchoPreparation = Record + optional Project(index/support handle)
EchoExecution = Echo + Select + Project/Transform + Record
RetentionCompression = Select + Transform + Project + Record
RetentionRevocation = Release + Record

Retention may not smuggle proof or authority.

Commit in Retention means durable lifecycle posture, not identity commitment.

37. Relationship to T3 — Observables / Detectors / Stabilizers

T3 may produce retention-relevant observables:

recurrence_flow
retention_pressure
persistence_stiffness
proof_depth
failure_surface
repair_path
authority_conflict
projection_overclaim_risk
quarantine_rate
revocation_rate

T3 detects retention pressure.

Retention Field governs lifecycle posture.

Detection does not authorize persistence by itself.

38. Relationship to Runtime Manifold

Runtime Manifold may generate traces eligible for retention:

Distinction-State refs
FieldProfile summaries
InterferenceTrace summaries
RelationCandidates
TopologyCandidates
decay/release records
support handles
proof candidates

Runtime retention constraints:

active state is not identity
salience is not retention authority
recurrence is not identity
retention pressure is not retention decision
runtime persistence is not ledger commitment

Runtime may propose retention.

Retention Field decides lifecycle posture.

Governance may constrain retention authority.

39. Relationship to Admissibility Field

Admissibility governs whether retained trace may re-enter current processing.

Retention governs whether trace may persist and become eligible for echo.

Re-entry path:

RetainedTrace
→ EchoEligibilityRecord
→ ReEntryHandle
→ AdmissibilityDecision
→ Echo
→ Runtime / Proof / Projection / Governance route

Admissibility checks:

locality validity
lineage validity
uncertainty bound
budget/cost bound
salience threshold
distinguishability support
constraint compatibility
temporal validity
projection boundary
proof precondition

Retention cannot bypass admissibility.

40. Relationship to Decision Topology Mapping

Decision topology may emit retention candidates:

DecisionTopologyProjection
DecisionNode
TransitionEdge
realized trajectory
rejected branch
counterfactual branch
failure surface
repair path
drift region
convergence region
behavioral attractor
mutation candidate

Retention must preserve failures, rejected branches, and counterfactuals where needed for behavioral audit.

Core law:

No branch collapse through retention.

A behavioral attractor may increase retention pressure.

It does not authorize mutation.

41. Relationship to Proof Execution

Proof Execution emits retention-critical objects:

ProofExecution receipt
ProofTrace
ProofObject
ProofFailureObject
overchallenge result
recovery path
request_more_evidence route
quarantine route

Retention may preserve proof material for:

future proof comparison
reconstruction challenge
reduction proof support
governance review
audit
failure surface mapping

Proof-supported retention is not governance authorization.

Proof failure should remain retained as structural evidence unless governance policy says otherwise.

42. Relationship to Authority / Governance

Governance controls retention authority.

T5 may authorize, limit, revoke, quarantine, expire, or archive retention.

Retention authority is one authority-vector dimension.

Governance may configure:

retention duration
archive status
decay behavior
echo eligibility
quarantine status
training candidate hold
agent context retention
retention revocation
retention review windows

Core law:

Retention may persist only inside authority scope.
Echo may influence only inside admissibility scope.
Consequence requires governance.
43. Relationship to Projection Field

Projection Field emits projection records, receipts, failures, exposure histories, and agent read packets.

Retention Field governs:

whether projection traces persist
whether projection receipts are archived
whether projection failures feed governance
whether agent read packets persist
whether stale projections are retained as expired
whether exposed views may later echo
whether training projection candidates remain held

Projection retention constraints:

retained projection is not source
projection receipt is not proof
projection failure is structural evidence
stale projection must not re-enter as current state
training projection candidate requires governance before emission
44. Relationship to Agency Field

Agents produce retention-relevant traces:

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

Retention supports:

agent accountability
replay of agent action
scope violation detection
proposal lineage
authority revocation
audit

Retention may not grant agent rights.

Agent authority must remain projection-bound, admissibility-bound, and governance-bound.

45. Retention Lifecycle

Retention lifecycle states:

candidate
→ evaluated
→ retained / limited / rejected / deferred
→ active_retention
→ decaying
→ echo_eligible / echo_restricted / echo_expired
→ archived / quarantined / expired / revoked / superseded
→ re_entry_requested
→ admissibility_evaluated
→ echoed / denied / deferred / quarantined

Lifecycle transitions must be recorded where consequential.

No lifecycle state implies identity.

46. Retention Boundary Laws
Law 1 — Retention Is Not Identity

A retained trace is not an identity claim.

Law 2 — Retention Is Not Proof

A retained proof trace is evidence, not proof unless represented as a ProofObject under T4.

Law 3 — Retention Is Not Authority

Persistence does not grant consequence.

Law 4 — Recurrence Is Not Identity

Repeated trace may increase retention pressure, but recurrence alone does not prove identity.

Law 5 — Echo Is Not Proof

Re-entry of prior trace does not validate the trace.

Law 6 — Echo Requires Admissibility

No retained trace may re-enter runtime, proof, projection, governance, or agency without admissibility.

Law 7 — No Silent Decay

Decay must declare what weakens, expires, compresses, or loses eligibility.

Law 8 — No Silent Archive

Archive must declare access, recovery, and echo constraints.

Law 9 — No Quarantine Deletion

Quarantine preserves structure while blocking consequence.

Law 10 — No Branch Collapse

Retention may not erase rejected, failed, or counterfactual branches when they are required for behavioral audit.

Law 11 — No Projection-as-Source Retention

Retained projection records remain projection records.

They do not become source records.

Law 12 — No Global Re-Entry

Retained traces may re-enter only under declared scope.

47. Failure Modes
Retention Inflation

Retained trace treated as identity, proof, or authority.

Recurrence Inflation

Repeated trace treated as proof.

Echo Inflation

Echoed trace treated as current source truth.

Hidden Decay

Trace weakens or expires without declared lifecycle rule.

Hidden Compression

Retained structure compressed without loss declaration.

Archive Inflation

Archived trace treated as authoritative due to age or persistence.

Quarantine Leakage

Quarantined trace influences runtime, projection, agent, or training paths outside allowed scope.

Stale Authority Retention

Expired or revoked authority retained as active.

Stale Projection Re-Entry

Expired projection reused as current state.

Branch Collapse

Rejected, failed, or counterfactual branches omitted from retained decision topology.

Agent Trace Erasure

Agent actions, tool calls, or proposals omitted from retention when accountability requires them.

Failure Erasure

Proof failures, projection failures, runtime failures, or governance failures deleted instead of retained as structural evidence.

Training Contamination

Training candidate retained or emitted without proof, governance, omitted branch declaration, or failure preservation.

48. Minimal Retention Record Schema
{
  "retention_record_id": "...",
  "retained_refs": [],
  "retention_mode": "...",
  "retention_reason": "...",
  "duration": {},
  "decay_behavior": {},
  "echo_eligibility": {},
  "re_entry_scope": {},
  "lineage_refs": [],
  "causal_signature_refs": [],
  "temporal_frame": {
    "ledger_seq": null,
    "source_time": {},
    "runtime_cycle": null,
    "projection_time": {},
    "governance_time": {},
    "retention_time": {}
  },
  "uncertainty": {},
  "loss_profile": {},
  "reconstruction_bounds": {},
  "review_or_revocation_conditions": [],
  "authority": {
    "ceiling": "retention_posture",
    "status": "retained"
  },
  "non_claims": [
    "retention_record_is_not_identity",
    "retention_record_is_not_proof",
    "retention_record_is_not_authority",
    "retained_trace_is_not_source"
  ]
}
49. Minimal Echo Record Schema
{
  "echo_record_id": "...",
  "retention_record_ref": "...",
  "trace_source_ref": "...",
  "re_entry_handle_ref": "...",
  "admissibility_decision_ref": "...",
  "scope_of_reentry": {},
  "loss_or_compression": {},
  "temporal_order": {},
  "operator_path": [
    "Echo",
    "Select",
    "Project",
    "Record"
  ],
  "output_route": "index | projection | runtime | proof | governance | agent_context | quarantine",
  "authority": {
    "ceiling": "echo_trace"
  },
  "non_claims": [
    "echo_is_not_identity",
    "echo_is_not_proof",
    "echo_is_not_authority",
    "echo_does_not_make_past_present"
  ]
}
50. Final Compression

The Retention Field is the governed persistence and re-entry layer of DME V2.

It decides what may remain available, decay, archive, quarantine, or echo.

It preserves trace without confusing persistence for truth.

Final runtime law:

Source remains source.
Ledger records continuity.
Runtime processes active structure.
Projection exposes bounded view.
Retention governs persistence.
Echo reintroduces retained trace.
Admissibility permits re-entry.
Proof tests survival.
Governance authorizes consequence.
Agency acts only through scoped authority.