DME V2 — Four Substrate Contract
1. Native Emission / Payload Substrate

Role: preserve source-native material.

Contains:

audio arrays
text streams
JSON trees
OS event records
cached transform payloads

It answers:

What was emitted or encountered in its native form?

Core properties:

source-native formatting
content addressing
immutability by default
no interpretation
payload refs, not semantic claims

It does not:

prove identity
define events
perform runtime reasoning
create cross-family geometry
2. Hypergraph Ledger Substrate

Role: preserve lawful continuity.

Contains:

payload refs
structural object refs
lineage edges
provenance records
operator verification records
event nodes
signature nodes
proof objects
governance proof records

It answers:

What exists, where did it come from, and what lawful path produced it?

Core properties:

provenance
lineage
causal ordering
addressability
verification chain
no heavy payload duplication

It does not:

simulate active dynamics
infer meaning
decide salience
mutate from manifold pressure alone
3. Runtime Manifold Substrate

Role: process active event dynamics.

Contains:

activated EventEnvelopes
salience
attention
relation pressure
interference
decay
retention pressure
candidate neighborhoods/basins/trajectories

It answers:

What is active, interacting, conflicting, decaying, or becoming structure right now?

Core properties:

dynamic
lens-bound
non-authoritative
event-centered
writes back only through verification/proof/governance

It does not:

store structural truth
replace ledger history
create authority directly
mutate the ledger without proof
4. Projection / Index Substrate

Role: provide bounded access.

Contains:

index handles
query projections
reconstruction views
proof summaries
agent read packets
UI/exposure surfaces

It answers:

What lawful view or access path is being exposed?

Core properties:

bounded
lossy unless proven otherwise
identity-axis declared
authority-ceiling declared
provenance-linked

It does not:

replace the ledger
claim full identity unless recovery-proven
become canon
let agents write truth directly
Relationship Between the Four
Native Emission / Payload
        ↓ referenced by
Hypergraph Ledger
        ↓ activates into
Runtime Manifold
        ↓ exposes through
Projection / Index

More precisely:

payload stores source material
ledger records lawful history over payload refs
manifold processes active verified events from ledger
projection/index exposes bounded views back to users, tools, and agents
Core Substrate Laws
Law 1 — Payload is not identity

Native data is source material, not proof of identity by itself.

Law 2 — Ledger is continuity authority

Only the ledger preserves provenance, lineage, verification, and structural truth.

Law 3 — Manifold is active but non-authoritative

The manifold may propose relations, reconstructions, and proof candidates, but cannot mutate truth directly.

Law 4 — Projection is bounded access

Every projection must declare what it preserves, what it omits, and what authority ceiling it carries.

Law 5 — No cross-substrate smuggling

Payload, ledger, manifold, and projection roles must not collapse into each other.

Why this comes before operators

Every operator must declare:

what payloads it reads or writes
what ledger records it creates
whether it activates manifold state
whether it exposes projection/index surfaces
what it cannot claim

So the operator contract is downstream of substrate law.

One-line anchor:

Payload preserves material, ledger preserves continuity, manifold processes activity, projection exposes bounded access.