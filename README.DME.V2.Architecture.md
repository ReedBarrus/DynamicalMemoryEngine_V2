# README.DME.V2.Architecture.md

# DME V2 — Architecture

## 1. Purpose

DME V2 defines a deterministic structural runtime for preserving, comparing, testing, and governing distinguishable structure across transformation.

It is an implementation-facing expression of RIFT as a runtime system.

DME V2 is not:

- a semantic reasoning engine
- a database
- a model training system
- an agent framework
- a generic memory abstraction
- a truth machine

DME V2 is:

> a distinction-first, proof-governed, admissibility-bound runtime for preserving and governing structural identity across transformation, relation, projection, and recursion.

---

## 2. Architectural Reset

All prior DME / ExecutionSurface / CCE structures are non-authoritative unless explicitly migrated into V2 through current contracts.

DME V2 is built from the current RIFT chain:

```text
T0 — Primitive Field Theory
T1 — Conservation Invariants
T2 — Phase Operators
T3 — Observables / Detectors / Stabilizers
T4 — Proof Ecology
T5 — Authority Field / Governance Ecology
```
The architecture no longer treats events as the primary runtime substrate.

The primary runtime unit is:

Distinction-State

Events may still exist as resolved artifacts, projections, or ledgered structures, but they are not the primitive basis of runtime behavior.

## 3. Core Thesis

Identity is not a label.

Identity is structure that preserves invariance across declared transformation, perturbation, reconstruction, and context conditions.

DME V2 exists to make that process explicit:

native emission
→ structural exposure
→ cross-basis distinction
→ active distinction-state
→ local runtime dynamics
→ relation/topology candidates
→ admissibility-bound decision/transition mapping
→ proof execution
→ governance-authorized consequence
→ projection / retention / agency feedback

Compressed:

structure
→ distinction
→ active state
→ relation
→ proof
→ authority
→ governed recursion

## 4. RIFT Runtime Chain

DME V2 implements the RIFT causal chain as runtime layers:

Potential
→ Admissibility
→ Observation
→ Mapping
→ Proof
→ Authority
→ Governance
→ Retention
→ Recursion

Meaning:

Potential defines what could happen.
Admissibility defines what may proceed.
Observation measures what is happening.
Mapping turns detected structure into navigable topology.
Proof tests what survives lawful challenge.
Authority defines what may have consequence.
Governance decides what may change the system.
Retention controls what may persist or re-enter.
Recursion feeds retained structure back into future processing.

## 5. Four Substrate Contract

DME V2 operates across four primary substrates.

These substrates must not collapse into one another.

Native Emission / Payload
→ Ledger Hypergraph
→ Runtime Manifold
→ Projection / Index

### 5.1 Native Emission / Payload Substrate

Role:

preserve source-native material.

Contains:

audio arrays
text streams
JSON objects
OS/runtime events
tool calls
model calls
file diffs
test results
cached transform payloads when declared

Answers:

What was emitted or encountered in native form?

Properties:

source-native
content-addressable
immutable by default
provenance-linked
non-interpretive

Does not:

define identity
prove structure
perform reasoning
create distinctions
create relations
create authority

### 5.2 Ledger Hypergraph

Role:

preserve lawful continuity.

Contains:

payload refs
ingest nodes
structural object refs
transform refs
lineage edges
provenance records
admissibility records
proof traces
proof objects
governance decisions
projection records
retention records
agent authority records

Answers:

What exists, where did it come from, and what lawful path produced it?

Properties:

append-oriented
lineage-preserving
provenance-aware
replayable
reference-based
governance-auditable

Does not:

simulate runtime dynamics
infer meaning
decide salience
grant authority automatically
replace proof or governance

### 5.3 Runtime Manifold

Role:

    process active distinction dynamics.

Contains:

    active Distinction-States
    local frames
    state vectors
    attention-energy budgets
    field differentials
    interference traces
    relation candidates
    topology candidates
    admissibility decisions
    decision-node detections

Answers:

    What is active, interacting, conflicting, decaying, stabilizing, or becoming structure right now?

Properties:

    dynamic
    local
    non-authoritative
    lens-bound
    budget-bound
    admissibility-bound
    proof-routable

Does not:

    write structural truth directly
    authorize consequence
    mutate governance
    replace ledger history
    convert salience into authority
    turn recurrence into identity

### 5.4 Projection / Index Surfaces

Role:

    expose bounded access.

Contains:

    index handles
    query projections
    reconstruction views
    proof summaries
    relation views
    decision topology views
    agent read packets
    UI / interface surfaces
    training-set projections when authorized

Answers:

    What lawful view or access path is being exposed?

Properties:

    bounded
    lossy unless proven otherwise
    scoped
    audience-aware
    authority-ceiling declared
    omission-declared
    provenance-linked

Does not:

    replace the ledger
    become source truth
    imply full identity
    bypass proof
    bypass governance
    let agents mutate truth directly

## 6. Core Runtime Object Ladder

DME V2 uses the following implementation-facing object ladder:

NativeEmission
PayloadRef
IngestNode
StructuralObject
Chart
StructuralSignature
Feature
DistinctionEvidencePacket
DistinctionRegion
Distinction-State
FieldProfile
InterferenceTrace
RelationCandidate
TopologyCandidate
DecisionNode
TransitionEdge
ProofCandidate
ProofExecution
ProofTrace
ProofObject
ProofFailureObject
GovernanceCandidate
GovernanceDecision
Projection
RetentionRecord
AgentAuthority

This ladder is not optional vocabulary.

It is the contract path from source material to governed consequence.

### 6.1 NativeEmission

Source-native material.

Authority:

source material only

### 6.2 PayloadRef

Content-addressed reference to NativeEmission.

Authority:

payload reference only

### 6.3 IngestNode

Ledger admission record.

Authority:

structural admission

### 6.4 StructuralObject

Source-local representation under declared operations.

Examples:

waveform window
FFT frame
token span
JSON subtree
OS event slice

Authority:

source-local structure only

### 6.5 Chart

Declared coordinate representation of structure.

Examples:

waveform chart
frequency chart
parse chart
graph chart
embedding projection

Authority:

basis-local representation

### 6.6 StructuralSignature

Declared source-local measurement under a domain and metric.

Examples:

RMS
spectral centroid
token distribution
tree depth
branching factor

Authority:

measurement only

### 6.7 Feature

Pattern detected within a chart or signature.

Authority:

chart-local pattern

Law:

Feature ≠ Distinction

### 6.8 DistinctionEvidencePacket

Handoff from structural processing into distinction formation.

Contains:

source refs
structural refs
chart refs
feature refs
basis declarations
scale declarations
domain declarations
metric declarations
uncertainty map
bias map
candidate regions

Authority:

evidence packet only

### 6.9 DistinctionRegion

Bounded region of structure whose separation, support, lineage, admissibility, and uncertainty conditions make it runtime-selectable.

Authority:

candidate distinction

### 6.10 Distinction-State

Active runtime unit.

Contains:

distinction region
local frame
state vector
attention weight
activation budget
uncertainty
lineage ref
authority ceiling

Authority:

active runtime candidate

A Distinction-State is not identity.

### 6.11 FieldProfile

Local field differential profile over active state.

May include:

salience gradient
activation flux
uncertainty pressure
constraint pressure
phase gradient
bias gradient
recurrence flow
retention pressure
persistence stiffness
curvature
recursion gradient

Authority:

field behavior evidence

### 6.12 InterferenceTrace

Record of local perturbation between active Distinction-States.

Authority:

runtime trace / optional proof evidence

Interference is not relation by itself.

### 6.13 RelationCandidate

Typed dependency candidate formed from stable interference.

Relation types may include:

similarity
alignment
recurrence
separation
transition
convergence

Authority:

relation candidate
### 6.14 TopologyCandidate

Persistent pattern of relation candidates.

Examples:

neighborhood
trajectory
basin
attractor
recurrence field

Authority:

topology candidate

### 6.15 DecisionNode

Detected branching condition in distinction-space recursion.

Definition:

a Distinction-State with multiple admissible, distinguishable outgoing transitions under non-zero uncertainty

Authority:

detection only

### 6.16 TransitionEdge

Admissible realized or candidate movement between states.

Types:

realized
rejected
counterfactual
failed
repaired
deferred
quarantined

Authority:

transition trace / transition candidate

### 6.17 ProofCandidate

Candidate requesting validation under declared use.

Authority:

proof-eligible only after admissibility and eligibility checks

### 6.18 ProofExecution

Runtime process that tests candidate survival.

Authority:

proof process, not authority

### 6.19 ProofTrace

Evidence emitted by ProofExecution.

Authority:

proof evidence

### 6.20 ProofObject

Ledgerable validation result.

Authority:

authority eligibility, not governance authorization

### 6.21 ProofFailureObject

Structured failed proof result.

Authority:

failure evidence

Failure is retained as structural evidence.

### 6.22 GovernanceCandidate

Proposal requesting consequence.

Authority:

proposal only

### 6.23 GovernanceDecision

Recorded governance outcome.

Authority:

scoped consequence authorization / denial / deferral / quarantine

### 6.24 Projection

Bounded view of system state.

Authority:

declared view only

Projection is not the source.

### 6.25 RetentionRecord

Governed persistence / trace / echo eligibility record.

Authority:

retention posture only

### 6.26 AgentAuthority

Scoped actor rights.

Authority:

projection-bound, admissibility-bound, governance-bound actor permission

## 7. Runtime Layers

DME V2 implementation is organized into runtime layers.

### 7.1 Native Emission Layer

Handles:

source capture
content addressing
native formatting
payload validation
source extent exposure

Emits:

NativeEmission
PayloadRef
IngestNode

Cannot:

interpret
create distinctions
create identity
authorize consequence

### 7.2 Structural Admission Layer

Handles:

parsing
windowing
normalization
source-local transforms
chart construction
source-local signatures
feature extraction

Emits:

StructuralObject
Chart
StructuralSignature
Feature
DistinctionEvidencePacket

Cannot:

create identity
create relation
create proof
perform cross-family authority
treat features as distinctions by label

### 7.3 Distinction Formation Layer

Handles:

cross-basis comparison
uncertainty and bias declaration
distinction support evaluation
invariant-axis projection
distinction-region formation

Emits:

DistinctionRegion
distinction evidence
candidate invariant projections

Cannot:

prove identity
authorize persistence
create semantic truth
collapse uncertainty

### 7.4 Manifold Ingest Layer

Handles:

activation of DistinctionRegions
local frame initialization
state vector initialization
attention-energy budget initialization
authority ceiling preservation

Emits:

active Distinction-State

Cannot:

validate identity
write durable consequence
bypass proof
bypass governance

### 7.5 Runtime Manifold Dynamics Layer

Handles:

attention-energy distribution
field differentials
interference
relation candidate formation
topology candidate formation
runtime stabilization
decay / release
admissibility evaluation

Emits:

FieldProfile
InterferenceTrace
RelationCandidate
TopologyCandidate
AdmissibilityDecision
ProofCandidate where routed

Cannot:

create authority
write ledger truth directly
turn salience into identity
make recurrence sovereign

### 7.6 Decision Topology Layer

Handles:

execution trace formation
decision-node detection
transition-edge mapping
branch projection
counterfactual branch formation
behavioral attractor mapping
failure surface mapping
repair path mapping

Emits:

DecisionNode
TransitionEdge
decision topology projection
behavioral proof candidates
mutation candidates

Cannot:

claim intent
authorize behavior change
mutate policy
emit training sets without governance

### 7.7 Proof Execution Layer

Handles:

proof candidate formation
proof scope declaration
proof eligibility
proof activation
perturbation execution
proof matrix evaluation
proof trace generation
proof object formation
proof failure routing

Emits:

ProofExecution
ProofTrace
ProofObject
ProofFailureObject
authority ceiling recommendations
routing outcomes

Cannot:

grant authority
mutate policy
authorize agents
emit training data
create consequence without T5

### 7.8 Authority / Governance Layer

Handles:

governance candidate intake
lineage checking
proof sufficiency checking
admissibility/profile compatibility checking
consequence mapping
risk and failure horizon evaluation
authority vector updates
admissibility profile configuration
governance decision recording

Emits:

GovernanceCandidate
GovernanceDecision
authority vector deltas
admissibility profile changes
revocation / quarantine / demotion records

Cannot:

ignore proof requirements
silently mutate consequence
create global authority by default
erase failure evidence

### 7.9 Projection / Retention / Agency Surfaces

Handles:

bounded access
query projection
reconstruction views
index handles
retained trace re-entry
agent-readable packets
scoped agent proposals
training-set projections when authorized

Emits:

Projection
RetentionRecord
AgentAuthority
agent read packets
reconstruction views
training records when authorized

Cannot:

become source truth
bypass proof
bypass governance
allow agents to self-authorize
hide omission/loss

### 8. Authority Boundaries

The strongest DME V2 boundary is:

active ≠ admissible
admissible ≠ proven
proven ≠ authorized
authorized ≠ permanent

Expanded:

possible ≠ admissible
admissible ≠ proof
proof ≠ authority
authority ≠ truth
projection ≠ source
retention ≠ identity
agency ≠ sovereignty

## 9. Runtime Authority Table
Layer	Authority Ceiling
Native Emission	source material only
PayloadRef	reference only
IngestNode	structural admission
StructuralObject	source-local structure
Chart / Signature / Feature	measurement only
DistinctionEvidencePacket	evidence only
DistinctionRegion	candidate distinction
Distinction-State	active runtime candidate
FieldProfile	field behavior evidence
InterferenceTrace	runtime trace
RelationCandidate	relation candidate
TopologyCandidate	topology candidate
DecisionNode	detection only
TransitionEdge	transition candidate / trace
ProofCandidate	proof request
ProofExecution	proof process
ProofTrace	proof evidence
ProofObject	authority eligibility
GovernanceCandidate	proposal only
GovernanceDecision	scoped consequence decision
Projection	bounded view
RetentionRecord	retention posture
AgentAuthority	scoped actor permission

## 10. Runtime Grammar

All implementation operators must decompose into T2 phase operators:

Expose
Select
Transform
Compare
Project
Commit
Record
Echo
Release

Examples:

IngestOp = Expose + Record + Commit
TransformOp = Select + Transform + Record
DistinctionFormation = Compare + Project + Record
ManifoldIngest = Expose + Select + Project + Record
InterferenceProcess = Transform + Compare + Echo + Record
RelationOperator = Compare + Select + Project + Record
ProofExecution = Echo + Transform + Compare + Project + Record
GovernanceDecision = Compare + Commit + Record + Release
Projection = Select + Project + Expose + Record

No implementation operator may smuggle authority beyond its declared phase behavior.

## 11. Admissibility and Authority

DME V2 separates runtime permission from consequence permission.

Admissibility = what transitions may occur.
Authority = what consequences may persist, mutate, expose, delegate, or govern.

Admissibility governs:

activation
interaction
branching
proof entry
projection routing
quarantine
deferral
runtime candidate emission

Authority governs:

persistence
mutation
exposure
retention
agent rights
policy change
ledger-committed consequence
training emission

Governance may configure admissibility profiles, but admissibility never grants authority by itself.

## 12. Event Compatibility

DME V2 may still use event terminology, but event terms are no longer primary runtime primitives.

New rule:

EventEnvelope = resolved artifact / projection-ready bounded distinction structure

Not:

EventEnvelope = primary runtime unit

Allowed event usage:

projection artifact
ledgered resolved distinction artifact
compatibility term for older docs
UI or query-facing bounded occurrence

Disallowed event usage:

primary runtime primitive
proof of identity by itself
authority-bearing object by default
semantic event label

The active runtime operates on Distinction-States.

## 13. Core Laws
Law 1 — No Layer Collapse

Payload, ledger, manifold, projection, proof, and governance roles must remain distinct.

Law 2 — No Identity Without Invariance

Identity requires survival under declared transformation, perturbation, reconstruction, or context shift.

Law 3 — No Runtime Authority

The Runtime Manifold may propose structure but cannot authorize consequence.

Law 4 — No Admissibility as Authority

Runtime permission is not consequence permission.

Law 5 — No Proof as Governance

Proof creates eligibility; governance grants consequence.

Law 6 — No Projection as Source

Projection is a bounded view, not the source structure.

Law 7 — No Retention as Identity

Persistence or recurrence does not prove identity.

Law 8 — No Agency as Sovereignty

Agents operate only through scoped projection, admissibility, and authority constraints.

Law 9 — No Silent Loss

All loss, omission, compression, or projection must declare bounds.

Law 10 — No Free Reduction

Reduction requires recovery or reconstruction proof and governance authorization.

Law 11 — No Global Scope by Default

All runtime, proof, projection, and authority behavior must declare locality/scope.

Law 12 — Failure Is Structural Evidence

Failures must remain typed, retained, and routable.

## 14. Implementation Target

Door 1 implementation should prioritize:

Native emission capture
→ structural admission
→ transform/chart/signature generation
→ distinction evidence packets
→ distinction regions
→ manifold ingest
→ active Distinction-State dynamics
→ admissibility decisions
→ proof execution
→ bounded projection

Initial source families:

audio
text / language
JSON / structured data
OS / tool / execution traces

Door 1 should not attempt full autonomous agency, canon formation, or unbounded cross-domain governance.

## 15. Document Stack

Canonical root documents:

README.DME.V2.Architecture.md
README.DME.V2.RuntimeMap.md
README.DME.V2.Glossary.md

Canonical theory spine:

README.DME.V2.RIFT.PrimitiveFieldTheory.md
README.DME.V2.RIFT.ConservationInvariants.md
README.DME.V2.RIFT.PhaseOperators.md
README.DME.V2.RIFT.ObservablesDetectorsStabilizers.md
README.DME.V2.RIFT.ProofEcology.md
README.DME.V2.RIFT.AuthorityFieldGovernance.md

Canonical runtime docs after compression:

README.DME.V2.SubstrateContract.md
README.DME.V2.StructuralAdmissionLayer.md
README.DME.V2.DistinctionFormationLayer.md
README.DME.V2.RuntimeManifoldDynamics.md
README.DME.V2.AdmissibilityField.md
README.DME.V2.DecisionTopologyMapping.md
README.DME.V2.ProofExecutionLayer.md
README.DME.V2.ProjectionField.md
README.DME.V2.RetentionField.md
README.DME.V2.AgencyField.md

## 16. Summary

DME V2 is a structural runtime for governing recursive identity formation.

It converts:

native emission
→ source-local structure
→ cross-basis distinction
→ active runtime state
→ relation/topology candidate
→ proof-tested identity
→ governance-authorized consequence
→ bounded projection / retention / agency feedback

It preserves the boundary:

runtime may reveal what can become structure;
proof tests what survives;
governance decides what may matter.

Final anchor:

DME V2 is the implementation surface of RIFT: a bounded runtime where distinguishable structure can become active, relational, provable, and consequential without allowing activity itself to become authority.