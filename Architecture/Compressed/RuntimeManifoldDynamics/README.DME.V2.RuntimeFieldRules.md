# README.DME.V2.RuntimeFieldRules.md

## 1. Core Rule

Field dynamics may propose structure, but may not authorize structure.

Runtime can generate:

- gradients
- flows
- interference traces
- neighborhoods
- basins
- trajectories
- relation candidates
- proof candidates

But only proof/governance can authorize persistence or mutation.

## 2. Locality Rule

All field operations begin locally.

No global all-to-all field computation by default.

A region may interact only with:

- neighboring distinction-states
- query-relevant states
- high-salience states
- shared-lineage states
- proof-requested states

## 3. Budget Rule

Every runtime operation consumes bounded attention-energy.

If budget is exceeded:

```text
defer → summarize → index → project → request proof

No runaway activation.

4. Resolution Rule

Field geometry must declare resolution.

If the field cannot support the requested resolution:

lower resolution
OR defer to support/index handle
OR request more evidence
5. Stability Rule

Unstable field geometry may remain represented, but only as:

unstable_candidate

It cannot become relation, topology, proof, or identity until stabilized.

6. Holographic Approximation Rule

When full field geometry is too expensive, the system may use compressed local signatures.

But the projection must declare:

preserved axes
omitted axes
loss profile
uncertainty
authority ceiling

This matches the Projection/Index rule that projections are bounded views, not truth.

7. Index Deferral Rule

If field geometry is deferred, the system emits an index/support handle, not a false relation.

field_unstable → support_handle
field_too_expensive → index_projection
field_underresolved → uncertainty_record
8. No Field Authority Rule

High salience, strong curvature, or basin formation does not mean truth.

Attention-Energy already marks salience, gravity, and curvature as non-authoritative runtime evidence.

9. Runtime Promotion Ladder
field activity
→ interference trace
→ relation candidate
→ topology candidate
→ proof-eligible candidate
→ proof object
→ governance-authorized state
→ ledger write

The Runtime Map already places relational dynamics as proposals and proof/governance as the authority boundary.

10. Dynamic Defer Ladder

When the system cannot safely proceed:

continue active field processing
↓
reduce local resolution
↓
emit support/index handle
↓
record uncertainty
↓
request proof challenge
↓
quarantine candidate
11. Holographic Field Technique

For computability, each region may carry a compact “field hologram”:

{
  "field_hologram": {
    "local_signature": {},
    "boundary_signature": {},
    "gradient_summary": {},
    "flow_summary": {},
    "dominant_axes": [],
    "omitted_axes": [],
    "uncertainty": {},
    "reconstruction_bounds": {}
  }
}

This is not the field.

It is a bounded re-entry handle.

12. Final Anchor

Runtime may explore freely inside bounded field law.

But anything that persists must pass proof.