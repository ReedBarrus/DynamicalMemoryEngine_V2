# RIFT T2 — Phase Operators

## Purpose

T2 defines the primitive lawful change operators used by RIFT/DME.

If T0 defines what can exist, and T1 defines what must be conserved, then T2 defines the minimal verbs by which structures may lawfully change.

T2 does not define:

- runtime workflows
- semantic actions
- governance decisions
- agent behavior
- implementation-specific operators
- every possible macro behavior

It defines the irreducible transition grammar underneath them.

---

## Core Thesis

All lawful system change must be expressible as a composition of primitive phase operators while preserving T1 conservation invariants.

Implementation operators may be complex, but they must decompose into T2 verbs.

---

## Phase Operator Set

The primitive phase operators are:

```text
Expose
Select
Transform
Compare
Project
Commit
Record
Echo
Release

These are intentionally minimal.

Operator 1 — Expose

Expose makes a structure, state, reference, or region available to an observer, process, or downstream operator without changing its identity or authority.

Expose answers:

What is available to be observed or operated on?

Examples:

expose payload extent
expose ledger reference
expose chart output
expose active distinction region
expose bounded projection

Expose does not:

select
validate
interpret
authorize
mutate

Conservation requirements:

preserve provenance
preserve boundary
declare lens/scope if exposure is partial
Operator 2 — Select

Select chooses a bounded subset from an exposed field, state, structure, or candidate set under declared criteria.

Select answers:

What part of the available field enters processing?

Examples:

select payload slice
select time window
select transform basis
select candidate distinction region
select active manifold states
select proof candidate

Select does not:

prove importance
imply identity
erase omitted regions
authorize persistence

Conservation requirements:

declare selection criteria
declare omitted scope
preserve uncertainty
respect attention-energy budget
Operator 3 — Transform

Transform maps structure from one representation, basis, scale, or state into another under declared rules.

Transform answers:

How is structure changed or re-expressed?

Examples:

waveform → FFT chart
text → token span
JSON → subtree
distinction state → updated state vector
proof candidate → perturbed candidate

Transform does not:

define meaning
create identity by itself
hide loss
collapse uncertainty

Conservation requirements:

declare basis
declare scale
declare metric/domain
declare loss and bias
preserve reconstruction path or loss bounds
Operator 4 — Compare

Compare evaluates difference, similarity, compatibility, distance, agreement, or disagreement under a declared metric, lens, context, and uncertainty model.

Compare answers:

How do these structures differ or agree under declared conditions?

Examples:

compare charts in cross-basis analysis
compare candidate region against background
compare invariant vectors
compare state histories
compare proof response under perturbation

Compare does not:

create relation by itself
prove identity
authorize merge
erase disagreement

Conservation requirements:

declare metric
declare context weights
declare uncertainty
preserve bias and disagreement
avoid single-basis authority
Operator 5 — Project

Project maps a structure into a bounded representation, coordinate envelope, authority envelope, or access view.

Project answers:

What bounded form is this structure allowed to take in this context?

Examples:

project chart evidence into invariant axes
project cross-basis evidence into Distinction Geometry
project DistinctionRegion into Distinction-State schema
project proof result into a bounded summary
project ledger/manifold state into agent-readable view

Project does not:

replace source
become identity
remove loss
exceed authority ceiling

Conservation requirements:

declare preserved axes
declare omitted axes
declare loss profile
declare uncertainty
declare authority ceiling
Operator 6 — Commit

Commit stabilizes a structure, transition, proof, or record into a persistence boundary under declared scope.

Commit answers:

What is being made durable, and under what authority?

Examples:

commit ingest node
commit transform receipt
commit proof object
commit validated relation
commit governance-authorized mutation

Commit does not:

imply semantic truth
bypass proof
erase reversibility requirements
grant unlimited authority

Conservation requirements:

preserve lineage
declare scope
declare authority ceiling
define repair/reversal/reconstruction bounds where applicable
Operator 7 — Record

Record writes trace, evidence, receipt, provenance, or audit material without necessarily stabilizing identity.

Record answers:

What needs to remain traceable?

Examples:

record payload reference
record transform declaration
record uncertainty
record interference trace summary
record failure
record proof trace

Record does not:

prove validity
imply persistence as identity
authorize mutation
substitute for Commit

Conservation requirements:

preserve temporal order
preserve provenance
preserve disclosure/scope limits
declare authority of the record
Operator 8 — Echo

Echo reintroduces prior trace into current admissible processing as influence, support, recurrence, or constraint.

Echo answers:

What past structure re-enters the present, and how?

Examples:

prior proof support influences activation
recurrence increases retention pressure
ledger lineage supports reconstruction
previous state affects current state
prior failure constrains future admissibility

Echo does not:

make the past present
bypass selection
imply reconstruction fidelity
grant authority by recurrence alone

Conservation requirements:

declare trace source
declare scope of re-entry
declare loss or compression
preserve temporal order
preserve authority ceiling
Operator 9 — Release

Release removes, deactivates, decays, defers, expires, or exits a structure from a processing context under declared conditions.

Release answers:

What leaves active processing, and what trace remains?

Examples:

release temporary buffer
decay inactive Distinction-State
defer underresolved field geometry
expire projection
quarantine unstable candidate
release scope after completion

Release does not:

delete provenance
hide failure
erase obligations
silently destroy identity-bearing structure

Conservation requirements:

declare release reason
preserve failure/uncertainty if applicable
record if authority-relevant
preserve reconstruction or audit bounds where required
Minimal Macro Definitions

Macros are allowed only when they are explicitly decomposable into T2 operators.

Repair
Repair = Echo + Transform + Compare + Project + Commit/Record

Purpose:

restore or compensate structure while preserving provenance, uncertainty, and repair trace.

Reconstruct
Reconstruct = Echo + Select + Transform + Compare + Project

Purpose:

rebuild a bounded structure from lineage, trace, or proof-supported references.

Reduce
Reduce = Select + Transform + Project + Compare + Proof + Commit

Purpose:

compress or remove structure only when recovery or identity preservation has been proven.

Reduce is not primitive because reduction can destroy identity.

Defer
Defer = Release + Record + optional Project(index/support handle)

Purpose:

safely stop active processing without pretending the structure was resolved.

Relationship to DME Implementation Operators

Implementation operators are concrete compositions of T2 operators.

Examples:

IngestOp
Expose + Select + Record + Commit
NormalizeOp
Select + Transform + Record
Window / Segment / ParseOp
Select + Transform + Record
TransformOp
Transform + Record
CrossBasisAnalysis
Compare + Project + Record
DistinctionOperator
Select + Compare + Project + Record
ManifoldIngest
Expose + Select + Project + Record
InterferenceProcess
Transform + Compare + Echo + Record
RelationOperator
Compare + Select + Project + Record
ProofMatrix
Compare + Transform/Perturb + Project + Commit/Record
Projection
Select + Project + Expose + Record
Relationship to T1

Every phase operator must preserve T1 conservation invariants.

No operator may violate:

core invariance conservation
distinguishability conservation
provenance conservation
admissibility conservation
locality conservation
attention-energy budget conservation
uncertainty conservation
bias declaration conservation
reversibility / repair capacity
temporal order conservation
no free compression
capacity conservation
recursion trace conservation
authority boundary conservation
projection boundary conservation
failure legibility conservation
field coherence conservation
Relationship to Runtime

T2 operators operate across all DME substrates, but their behavior depends on substrate law.

The Four Substrate Contract requires every operator to declare what payloads it reads/writes, what ledger records it creates, whether it activates manifold state, whether it exposes projection/index surfaces, and what it cannot claim.

DME implementation remains substrate-specific:

Payload: expose/select native material
Ledger: record/commit lineage and proof
Manifold: transform/compare/echo active field states
Projection: project/expose bounded views
Constraints
Constraint 1 — No Semantic Operator

No T2 operator carries meaning by itself.

Constraint 2 — No Authority Inflation

No operator grants authority unless paired with proof/governance scope.

Constraint 3 — No Hidden Loss

Any Transform, Project, Reduce, or Release must declare loss.

Constraint 4 — No Untyped Change

All implementation changes must decompose into T2 operators.

Constraint 5 — No Primitive Macro Inflation

A verb that can be composed from smaller lawful verbs is not a primitive phase operator.

Failure Modes
Operator Smuggling

A concrete operator performs undeclared phase behavior.

Macro Inflation

A complex workflow is treated as primitive.

Hidden Authority

Commit or Project treated as proof/governance.

Hidden Loss

Transform or Release drops structure without declaration.

Echo Collapse

Prior trace treated as present-state truth.

Release Erasure

Failure or uncertainty disappears when active processing ends.

Summary

T2 defines the lawful change grammar of RIFT/DME.

The primitive phase operators are:

Expose
Select
Transform
Compare
Project
Commit
Record
Echo
Release

They are minimal, composable, and substrate-aware.

Final anchor:

T2 does not define what the system becomes.
It defines the lawful verbs by which becoming may occur.