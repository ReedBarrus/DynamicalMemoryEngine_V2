# README.DME.V2.StructuralAdmissionLayer.md

# DME V2 — Structural Admission Layer

## 1. Purpose

The Structural Admission Layer defines how source-native material becomes distinction-ready structure.

It converts:


NativeEmission
→ PayloadRef
→ IngestNode
→ StructuralObject
→ Chart
→ StructuralSignature
→ Feature
→ DistinctionEvidencePacket
→ DistinctionRegion

It does not activate runtime.

It does not create identity.

It does not prove structure.

It does not authorize consequence.

Structural Admission prepares what may be lawfully distinguished.

2. Placement

Runtime placement:

Native Emission Capture
→ Ledger Admission
→ Structural Admission
→ Manifold Ingest
→ Runtime Manifold Dynamics

Structural Admission begins after source-native capture and ledger admission.

Structural Admission ends at:

DistinctionRegion

Runtime begins when Manifold Ingest activates a DistinctionRegion as a:

Distinction-State

Boundary law:

DistinctionRegion = final Structural Admission output.
Distinction-State = first Runtime Manifold unit.
3. Core Thesis

DME V2 does not begin with meaning.

DME V2 does not begin with events.

DME V2 begins with source-native emissions and exposes source-local structure through declared operations.

That structure becomes runtime-ready only after:

source fidelity
→ provenance binding
→ structural exposure
→ transform declaration
→ chart/signature/feature generation
→ cross-basis comparison
→ uncertainty and bias declaration
→ invariant-axis projection
→ distinction support evaluation

Final compression:

source material
→ source-local structure
→ cross-basis evidence
→ candidate distinction
4. Authority Ceiling

The maximum authority of this layer is:

candidate distinction / evidence only

Structural Admission may emit:

source-local structure
measurement evidence
chart-local features
cross-basis evidence
candidate distinction regions

Structural Admission may not emit:

identity
proof
authority
governance decision
relation truth
semantic meaning
active runtime state
agent permission
training record
5. Non-Claims

Structural Admission does not claim:

source = structure
structure = distinction
feature = distinction
distinction = identity
similarity = relation
measurement = proof
projection = source
event = primitive

This layer prepares evidence.

It does not decide consequence.

6. Layer Sequence
6.1 NativeEmission

A NativeEmission is source-native material preserved exactly as received.

Examples:

audio array
text stream
JSON object
OS event
tool call
model call
file diff
test result
sensor reading
log entry

Authority ceiling:

source material only

NativeEmission must preserve:

encoding
ordering
timing where applicable
source family
raw extent
content addressability

NativeEmission may not:

interpret
normalize
segment
transform
infer structure
create distinction
create event
create identity
6.2 PayloadRef

A PayloadRef is a stable content-addressed reference to a NativeEmission.

Authority ceiling:

payload reference only

PayloadRef exists so later stages can process structure without mutating source-native material.

A PayloadRef must preserve:

source reference
content hash / stable address
source family declaration
encoding declaration
extent declaration
created timestamp or ordering reference

PayloadRef may not:

modify payload
summarize payload
replace payload
claim structure
claim identity
6.3 IngestNode

An IngestNode is the initial ledger admission record for a PayloadRef.

Authority ceiling:

structural admission

IngestNode records:

payload_ref
source_family
ingest_time_or_order
declared encoding
declared domain
initial provenance root
non-claims

IngestNode may not:

prove identity
create relation
simulate dynamics
grant authority
replace native payload
6.4 StructuralObject

A StructuralObject is a source-local representation under declared operations.

Examples:

audio window
FFT frame
token span
syntax tree
JSON subtree
OS event slice
tool-call trace slice
test-result group

Authority ceiling:

source-local structure only

StructuralObject must declare:

source refs
operator path
domain
scale
window or extent
basis if transformed
metric if measured
loss profile
uncertainty

StructuralObject may not:

claim cross-family identity
claim distinction by itself
claim relation
claim proof
claim authority
6.5 Chart

A Chart is a declared coordinate representation of a StructuralObject.

Examples:

waveform chart
frequency spectrum
token sequence
syntax tree
JSON graph
embedding projection
execution trace graph

Authority ceiling:

basis-local representation

Every Chart must declare:

basis
domain
metric
scale
window / extent
source refs
transform refs
bias
loss
uncertainty

Chart law:

A chart exposes structure through a basis.
A chart does not define the structure absolutely.
6.6 StructuralSignature

A StructuralSignature is a declared source-local measurement of a StructuralObject or Chart.

Examples:

RMS
peak amplitude
spectral centroid
token frequency
n-gram distribution
tree depth
branching factor
latency
tool success rate
retry count
test failure rate

Authority ceiling:

measurement only

StructuralSignature must declare:

measurement name
domain
metric
basis
scale
source refs
chart refs where applicable
uncertainty
bias
loss

StructuralSignature may support distinction formation.

It does not create distinction by itself.

6.7 Feature

A Feature is a chart-local pattern detected within a Chart or StructuralSignature.

Examples:

spectral peak
energy spike
token motif
JSON branch anomaly
tool retry cluster
test failure recurrence
structural discontinuity

Authority ceiling:

chart-local pattern

Core law:

Feature ≠ Distinction

Feature extraction detects patterns inside a representation.

Distinction formation evaluates whether patterns remain separable, supported, uncertainty-bounded, and provenance-linked across declared evidence.

Feature must declare:

chart_ref
signature_refs
basis
scale
metric
domain
support
uncertainty
local context

Feature may not:

claim identity
claim event
claim proof
claim cross-basis invariance
claim semantic meaning
7. Structural Operators

Structural operators are implementation operators that expose, prepare, or measure source-local structure.

They must decompose into T2 phase operators:

Expose
Select
Transform
Compare
Project
Commit
Record
Echo
Release

The core structural operators are:

IngestOp
NormalizeOp
SegmentOp / WindowOp / ParseOp
TransformOp
FeatureExtractionOp
CrossBasisAnalysisOp
DistinctionFormationOp
7.1 IngestOp

Purpose:

admit source-native material into ledger continuity

Composition:

Expose + Record + Commit

Inputs:

NativeEmission
PayloadRef

Outputs:

IngestNode

May not:

transform
interpret
segment
create distinction
7.2 NormalizeOp

Purpose:

apply declared source-local normalization while preserving loss and reversibility bounds

Composition:

Select + Transform + Record

NormalizeOp must declare:

normalization rule
domain
scale
loss profile
reversibility / reconstruction bounds
uncertainty

May not:

hide correction
erase source fidelity
claim improved truth
7.3 Segment / Window / ParseOp

Purpose:

select bounded source-local extents

Composition:

Select + Transform + Record

Examples:

audio time window
token span
JSON subtree
execution trace slice
tool-call group

Must declare:

selection criteria
omitted scope
window size
overlap policy
parse rule
uncertainty

May not:

create event
create distinction
erase omitted regions
7.4 TransformOp

Purpose:

re-express structure through declared basis, scale, metric, or domain

Composition:

Transform + Record

Examples:

waveform → FFT chart
text → token span
JSON → graph
trace log → execution graph

TransformOp must declare:

input refs
output refs
basis
domain
metric
scale
loss profile
bias profile
uncertainty
reconstruction path or loss bounds

TransformOp may not:

define meaning
create identity
collapse uncertainty
hide bias
7.5 FeatureExtractionOp

Purpose:

detect chart-local patterns

Composition:

Select + Compare + Project + Record

FeatureExtractionOp must declare:

chart refs
signature refs
feature criteria
thresholds
local context
uncertainty
bias
support

FeatureExtractionOp may not:

treat feature as distinction
claim cross-basis stability
claim identity
7.6 CrossBasisAnalysisOp

Purpose:

compare structural evidence across charts, bases, metrics, scales, and domains

Composition:

Compare + Project + Record

CrossBasisAnalysisOp produces:

basis agreement
basis disagreement
uncertainty gradient
bias map
feature support map
candidate regions
invariant-axis evidence

May not:

allow one chart to dominate silently
claim proof
claim identity
claim semantic meaning
7.7 DistinctionFormationOp

Purpose:

form bounded candidate distinctions from cross-basis evidence

Composition:

Select + Compare + Project + Record

Outputs:

DistinctionEvidencePacket
DistinctionRegion

May not:

activate runtime state
form relation
prove identity
authorize persistence
8. Transform Contract

A Transform reveals structure through a declared basis.

A Transform does not create identity.

Every transform must declare:

source refs
input object refs
output object refs
basis
domain
metric
scale
operator path
loss profile
bias profile
uncertainty
reconstruction path or loss bounds

Transform failure modes:

hidden loss
basis dominance
untraceable remap
resolution distortion
false comparability
silent smoothing
single-basis authority

Transform law:

Transform may expose structure.
Transform may not decide what matters.
9. Chart / Basis / Metric / Domain
9.1 Basis

The representational frame used to expose or measure structure.

Examples:

time domain
frequency domain
token sequence
syntax tree
JSON graph
embedding projection
execution trace graph

Every basis introduces bias.

Bias must be declared.

9.2 Domain

The space where values exist.

Examples:

time-amplitude
frequency
token sequence
tree
graph
execution trace

Domain is distinct from metric.

9.3 Metric

The rule used to measure similarity, distance, divergence, compatibility, or difference within a domain.

Examples:

Euclidean distance
cosine distance
edit distance
graph distance
Jensen-Shannon divergence
invariant distance

Metric must declare:

domain
scale
context
uncertainty
valid comparison scope
9.4 Chart Transition

A transform between coordinate representations.

Examples:

time → frequency
raw text → syntax tree
JSON object → graph
trace log → execution graph

Chart transition must declare:

input basis
output basis
domain change
metric change
scale change
loss
bias
uncertainty
10. Invariance Metric

The Invariance Metric defines comparison-ready structural evidence across six axes:

I(x) = [C, M, A, P, S, V]

Where:

C = composition
M = magnitude
A = alignment
P = persistence
S = separation
V = convergence

These axes are comparison axes.

They are not semantic meanings.

10.1 Composition

Measures what the structure is made of.

Examples:

component set
spectral distribution
token mixture
graph element distribution
JSON field composition
10.2 Magnitude

Measures strength, energy, scale, amplitude, intensity, or effect size.

Examples:

signal energy
frequency power
token weight
event count
latency magnitude
failure rate
10.3 Alignment

Measures ordering, phase, correspondence, sequence relation, or structural agreement.

Examples:

phase alignment
temporal correspondence
token order
graph path correspondence
tool-order match
10.4 Persistence

Measures recurrence, stability, or continuity across time, scale, recursion, or repeated interaction.

Examples:

window-to-window stability
trace recurrence
feature survival
state continuity
pattern reappearance
10.5 Separation

Measures boundary, distinctness, non-collapse, or separability from background or neighboring structure.

Examples:

cluster separation
frequency band distinction
semantic span boundary
JSON subtree boundary
failure surface separation
10.6 Convergence

Measures agreement across paths, bases, derivations, traces, or independent supports.

Examples:

multi-chart agreement
multi-window agreement
independent derivation support
trace convergence
proof support convergence
10.7 Invariance Non-Claims

Invariant projection does not mean:

identity
proof
truth
authority
semantic meaning
global stability

Invariant projection is evidence prepared for runtime, proof, relation, or projection.

11. Distinction Evidence Packet

A DistinctionEvidencePacket is the canonical handoff from source-local structural processing into distinction formation.

Authority ceiling:

evidence packet only

It should contain:

{
  "packet_id": "...",
  "source_refs": [],
  "payload_refs": [],
  "ingest_refs": [],
  "structural_object_refs": [],
  "chart_refs": [],
  "signature_refs": [],
  "feature_refs": [],
  "basis_declarations": [],
  "domain_map": {},
  "metric_map": {},
  "scale_map": {},
  "loss_profile": {},
  "bias_map": {},
  "uncertainty_map": {},
  "candidate_regions": [],
  "invariant_axis_evidence": {
    "composition": {},
    "magnitude": {},
    "alignment": {},
    "persistence": {},
    "separation": {},
    "convergence": {}
  },
  "authority": {
    "ceiling": "evidence_only"
  },
  "non_claims": [
    "packet_is_not_distinction",
    "packet_is_not_identity",
    "packet_is_not_proof",
    "packet_is_not_authority"
  ]
}

The packet must preserve enough context for downstream Distinction Formation to evaluate support, uncertainty, bias, and provenance.

12. Distinction Formation

Distinction Formation converts cross-basis evidence into bounded candidate distinctions.

It answers:

Which patterns are sufficiently separable, supported, uncertainty-bounded, and provenance-linked to become runtime-selectable structures?

Inputs:

DistinctionEvidencePacket
basis contribution map
feature support map
uncertainty map
bias map
candidate regions
context constraints

Runtime action:

cross-basis comparison
→ agreement/disagreement mapping
→ support evaluation
→ uncertainty/bias declaration
→ invariant-axis projection
→ separation evaluation
→ DistinctionRegion
12.1 Distinction Condition

A candidate region may become a DistinctionRegion when:

separation ≥ threshold
AND support ≥ requirement
AND uncertainty within bounds or declared
AND provenance valid
AND basis posture declared
AND loss profile declared

If the condition fails:

remain as evidence
defer
route_to_index
request_more_structure
reject
12.2 Basis Contribution

Every DistinctionRegion must preserve a basis contribution map.

Purpose:

prevent hidden single-basis authority
preserve bias accounting
support reconstruction
support proof routing

Basis contribution must distinguish:

supporting basis
conflicting basis
missing basis
low-resolution basis
dominant basis
12.3 Uncertainty and Bias

Every DistinctionRegion must declare unresolved uncertainty and representational bias.

Uncertainty may include:

missing axes
cross-basis disagreement
insufficient resolution
ambiguous boundary
unstable support
conflicting feature evidence

Bias may include:

basis bias
metric bias
window bias
normalization bias
scale bias
source-family bias

Uncertainty and bias must be carried forward.

They may not be silently collapsed.

13. DistinctionRegion

A DistinctionRegion is a bounded region of structure whose separation, support, lineage, admissibility, and uncertainty conditions make it runtime-selectable.

Authority ceiling:

candidate distinction

Canonical shape:

{
  "distinction_region_id": "...",
  "evidence_packet_ref": "...",
  "source_refs": [],
  "lineage_refs": [],
  "region_bounds": {},
  "local_frame_seed": {},
  "invariant_vector": {
    "composition": null,
    "magnitude": null,
    "alignment": null,
    "persistence": null,
    "separation": null,
    "convergence": null
  },
  "basis_contribution": {},
  "feature_support": {},
  "uncertainty": {},
  "bias": {},
  "loss_profile": {},
  "support_score": null,
  "separation_score": null,
  "admissibility_notes": {},
  "authority": {
    "ceiling": "candidate_distinction"
  },
  "non_claims": [
    "distinction_region_is_not_identity",
    "distinction_region_is_not_proof",
    "distinction_region_is_not_authority",
    "distinction_region_is_not_active_runtime_state"
  ]
}

DistinctionRegion is not yet a Distinction-State.

14. Handoff to Manifold Ingest

Structural Admission ends by handing DistinctionRegions to Manifold Ingest.

Handoff object:

DistinctionRegion

Manifold Ingest may then initialize:

local frame
state vector
attention budget
activation posture
authority ceiling
runtime refs

Structural Admission may not initialize active runtime dynamics.

14.1 Handoff Requirements

Every handoff must include:

DistinctionRegion ref
lineage refs
evidence packet ref
invariant vector
uncertainty
bias
loss profile
basis contribution
authority ceiling
non-claims
14.2 Handoff Boundary
Structural Admission produces DistinctionRegion.
Manifold Ingest produces Distinction-State.

No document, operator, or implementation may silently skip this boundary.

15. Event Compatibility

DME V2 may still emit event-like artifacts, but events are not primary in Structural Admission.

Allowed:

Resolved Event
EventEnvelope as projection-ready artifact
UI event summary
query-facing occurrence
legacy compatibility wrapper

Disallowed:

EventEnvelope as primary runtime primitive
event as identity
event as proof
event as authority
event as semantic label
event directly from feature extraction

Event compatibility law:

Events are resolved artifacts.
Distinctions are runtime candidates.
Distinction-States are active runtime units.
16. Relationship to RuntimeMap

RuntimeMap places Structural Admission here:

Native Emission Capture
→ Ledger Admission
→ Structural Admission
→ Distinction Formation
→ Manifold Ingest

This document compresses the first four preparation layers into a single implementation-facing substrate layer.

It does not replace RuntimeMap.

It provides the detailed contract for the structural side of RuntimeMap.

17. Relationship to RIFT
17.1 Relationship to T0

Structural Admission depends on these primitives:

field
state
potential
constraint
energy
information
uncertainty
locality
observer
lens
attention
difference
distinction
transition
admissibility
structure
invariance
projection
recursion

T0 defines the primitive concepts.

Structural Admission implements their source-side preparation.

17.2 Relationship to T1

Structural Admission must preserve:

core invariance
distinguishability
provenance
admissibility
locality
attention-energy budget where applicable
uncertainty
bias declaration
repair/reversibility
temporal order
no free compression
capacity
recursion trace
authority boundary
projection boundary
failure legibility
field coherence
17.3 Relationship to T2

Structural Admission uses T2 operators:

Expose
Select
Transform
Compare
Project
Commit
Record
Release

Echo is generally not source-side unless retained trace or prior structure is being reintroduced under declared scope.

17.4 Relationship to T3

Structural Admission emits observables and evidence for T3 detection.

Examples:

feature_density
chart_agreement
chart_disagreement
basis_bias
structural_variance
window_stability
signature_repeatability
loss_exposure
underresolution

T3 may detect patterns.

T3 does not prove them.

17.5 Relationship to T4

Structural Admission emits proof-ready evidence but not proof.

DistinctionRegions, structural signatures, basis maps, uncertainty maps, and loss profiles may become proof inputs.

Proof Execution determines survival.

17.6 Relationship to T5

Structural Admission has no consequence authority.

Governance may regulate:

allowed source families
allowed transforms
projection boundaries
retention requirements
admissibility profile configuration
agent access to structural views

But Structural Admission itself cannot grant authority.

18. Failure Modes
18.1 Payload Mutation

Native source material is altered during capture or reference.

Mitigation:

content addressing
immutable payload refs
ledger admission record
18.2 Hidden Compression

Structure is reduced without declaring loss.

Mitigation:

loss profile
omitted scope
reconstruction bounds
non-claims
18.3 Encoding Corruption

Source encoding is misread or altered.

Mitigation:

encoding declaration
source family declaration
validation receipt
18.4 Source-Family Confusion

A source is processed under the wrong domain or operator family.

Mitigation:

source family declaration
operator compatibility check
admissibility notes
18.5 Feature Inflation

Chart-local features are treated as distinctions.

Mitigation:

Feature ≠ Distinction law
cross-basis comparison
DistinctionEvidencePacket
18.6 Basis Dominance

One basis silently controls distinction formation.

Mitigation:

basis contribution map
bias map
cross-basis disagreement preservation
18.7 Single-Chart Bias

A single chart produces a candidate that appears stable only inside that representation.

Mitigation:

multi-chart comparison
basis perturbation
uncertainty declaration
18.8 Semantic Projection

Human-readable labels replace measured structural evidence.

Mitigation:

non-claims
structural evidence requirements
no semantic operator
18.9 Premature Event Formation

Features or structural regions are wrapped as events before distinction formation.

Mitigation:

event compatibility boundary
DistinctionRegion before EventEnvelope
18.10 Uncertainty Collapse

Ambiguity is hidden or erased to produce cleaner output.

Mitigation:

uncertainty map
missing axis declaration
defer / route_to_index / request_more_structure
18.11 Threshold Drift

Distinction thresholds change without declaration.

Mitigation:

threshold refs
profile refs
operator config refs
ledger record
18.12 Hidden Transform Loss

Transform loss is not recorded.

Mitigation:

transform contract
loss profile
bias profile
reconstruction bounds
19. Implementation Priorities

Door 1 should implement Structural Admission minimally.

Initial target source families:

audio
text / language
JSON / structured data
OS / tool / execution traces

Minimal Door 1 structural chain:

NativeEmission
→ PayloadRef
→ IngestNode
→ StructuralObject
→ Chart
→ StructuralSignature
→ Feature
→ DistinctionEvidencePacket
→ DistinctionRegion

Defer:

full autonomous agency
training-set emission
canon formation
unbounded event modeling
global cross-domain authority
20. Summary

The Structural Admission Layer compresses native emission, source-local structural processing, transforms, features, invariance metrics, and distinction formation into one canonical preparation layer.

It converts:

source-native emission
→ source-local structure
→ chart-local features
→ cross-basis evidence
→ candidate distinction regions

It preserves:

source fidelity
provenance
basis declarations
domain declarations
metric declarations
scale declarations
loss profiles
bias maps
uncertainty maps
invariant-axis evidence
authority ceilings

It refuses:

semantic meaning
event primacy
identity
proof
authority
runtime activation

Final anchor:

Structural Admission does not decide what matters; it prepares what may be lawfully distinguished.