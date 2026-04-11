# DME Visual Seam Workflow Gate v0

## Status

This note defines the required workflow gate for visual seams.

It governs how shell, plane, plot, and other visible surfaces are changed.

It exists to stop drift, hidden renderer freedom, accidental prose re-entry, and unapproved invariant mutation.

---

## 1. Core rule

No visual seam may be changed directly.

Every visual seam change must pass through this sequence in order:

1. contract
2. oracle
3. plan
4. review
5. implementation
6. verification

If any stage is missing, the change is invalid.

---

## 2. Contract stage

The contract defines exact allowed behavior.

The contract must contain only:

- exact preserve rules
- exact remove rules
- exact do-not-change rules
- exact allowlists
- exact forbidden transforms
- exact region existence rules
- exact subset/domain/margin rules where relevant

The contract must not contain:

- improve
- cleaner
- more legible
- more scientific
- more intuitive
- simplify
- minimize unless paired with exact deletion rules
- optimize
- refine

If a sentence describes a preference instead of a constraint, reject it.

---

## 3. Oracle stage

The oracle defines exact invariants that must be checked after implementation.

For a visual seam, the oracle must list all invariants to be preserved or intentionally changed.

Examples:

- visible subset count
- selectable subset count
- readout subset count
- x domain
- y domain
- zero inclusion
- fixed margins
- allowed visible text
- forbidden visible text
- selected point index
- selected point values
- visible regions that must exist
- visible regions that must not exist

If an invariant cannot be checked, it is not yet an oracle.

No implementation may proceed without an oracle.

---

## 4. Plan stage

Before any code changes, the implementer must return a plan only.

The plan must answer in exact form:

- files to modify
- files not to modify
- subset changes: yes/no
- x-domain changes: yes/no
- y-domain changes: yes/no
- margin changes: yes/no
- visible text removed
- visible text retained
- visible text added
- visible regions removed
- visible regions retained
- visible regions added

If any answer is vague, implementation must not proceed.

No code until the plan is reviewed and explicitly accepted.

---

## 5. Review stage

Review happens before implementation.

The reviewer checks:

- contract conformance
- oracle completeness
- plan completeness
- forbidden vocabulary absence
- no unapproved seam widening
- no mixed-purpose packet

If the plan changes more than one seam, reject it.

If the plan mixes layout, projection, copy, measurement, navigation, or state behavior in one packet without explicit approval, reject it.

---

## 6. Implementation stage

Implementation is bounded to the approved plan only.

If the implementer discovers that another change is needed, implementation stops.

No silent widening.
No “while here” changes.
No companion cleanup.
No aesthetic adjustment.
No prose insertion.
No extra state mutation.

---

## 7. Verification stage

No visual seam packet may be accepted with build success alone.

Required verification:

- build result
- screenshot
- oracle check report

The oracle check report must list every invariant as one of:

- preserved
- changed intentionally
- failed

If screenshot and report disagree, the screenshot wins and the packet fails.

---

## 8. Visual text rule

Visible text on temporal instrumentation surfaces is deny-by-default.

Allowed visible text only:

- control labels
- axis labels
- tick labels
- numeric values
- one global context strip
- minimal unavailable/failure tokens

All other visible text is forbidden.

Every plan and return packet must include:

- visible text removed
- visible text retained
- visible text added

If any added text is outside the allowlist, the packet fails.

---

## 9. Vocabulary constraints

Packets, plans, and reviews for visual seams must use hard constraint vocabulary only.

Allowed forms:

- preserve
- remove
- delete
- keep
- use exact
- map exact
- derive exactly from
- clamp
- fix
- pin
- restrict
- forbid
- allow only
- include
- exclude
- equal
- match
- do not change

Forbidden forms:

- improve
- simplify
- minimize
- optimize
- refine
- clean up
- make clearer
- make cleaner
- make more legible
- make more scientific
- make more intuitive
- enhance
- better
- nicer
- friendlier
- demote unless paired with exact geometry rules

If wording creates freedom, reject it and rewrite it as a constraint.

---

## 10. Packet grammar rule

Every visual seam packet must include:

### Contract reference
Which exact contract governs the seam.

### Oracle reference
Which exact invariants must be checked.

### Plan gate
A required non-coding plan response before implementation.

### Single seam declaration
Exactly one seam only.

### Forbidden drift declaration
An explicit list of what must not change.

Without all five, the packet is invalid.

---

## 11. Failure rule

If a packet restores one invariant but mutates another unapproved invariant, the packet fails.

Examples:

- graph restored but sign/polarity changed -> fail
- prose removed but layout changed unexpectedly -> fail
- axes restored but subset changed -> fail
- plot box corrected but y-domain changed unapproved -> fail

Partial wins do not pass.

---

## 12. Kernel rule

Do not build visual surfaces one by one without a stable kernel.

For each surface family, stabilize:

- contract
- oracle
- reference screenshot
- implementation kernel

Only then reuse the kernel elsewhere.

---

## 13. Enforcement question

Before accepting any visual seam packet, ask:

Did this packet change exactly what was contracted, and nothing else?

If no, reject it.