# DME Visual Seam Workflow Contract v0

## Core rule

For any visual seam, no code changes are allowed until five things exist in order:

1. contract
2. oracle
3. implementation plan
4. implementation
5. verification

If any stage is missing, the packet must not proceed.

---

## 1. Contract stage

The contract defines what is allowed.

It must contain only hard rules, never soft goals.

Allowed:
- exact visible regions
- exact text allowlist
- exact data subset rule
- exact x rule
- exact y rule
- exact margin rule
- exact marker rule
- exact controls that remain
- exact controls that do not exist

Forbidden contract language:
- improve
- cleaner
- more legible
- scientific
- intuitive
- minimal unless accompanied by exact deletion rules
- necessary unless accompanied by exact allowlist

Contract format must answer:
- what exists
- what does not exist
- what transforms are allowed
- what transforms are forbidden

---

## 2. Oracle stage

The oracle defines what must remain true after the patch.

The oracle must be checkable.

For a plane, that means exact invariants such as:
- visible subset count
- selectable subset count
- readout subset count
- x domain
- y domain
- zero inclusion
- margin values
- selected point index
- selected point values
- visible text allowlist

If an invariant cannot be checked, it is not yet an oracle.

No implementation packet may proceed without an oracle.

---

## 3. Plan stage

Before code, the implementer must return a plan only.

The plan must state:
- files to modify
- which oracle invariants will change
- which oracle invariants will not change
- exact visible text to remove
- exact visible text to retain
- exact visible text to add
- whether subset changes: yes or no
- whether x domain changes: yes or no
- whether y domain changes: yes or no
- whether margins change: yes or no

If any answer is vague, reject the plan.

No code until the plan is approved.

---

## 4. Implementation stage

Implementation is bounded to the approved plan only.

If the implementer discovers a needed change outside the approved plan, implementation stops and returns to plan review.

No silent widening.

No “while I was here” changes.

No combined packets across:
- layout
- projection
- copy
- measurement
- navigation

One packet, one seam.

---

## 5. Verification stage

No visual packet may be accepted with build success alone.

Required verification:
- build result
- screenshot
- oracle check report

The oracle check report must state every invariant as:
- preserved
- changed intentionally
- failed

If screenshot and oracle disagree, screenshot wins and the packet fails.

---

## 6. Text policy for temporal shell

For temporal instrumentation surfaces, visible text is deny-by-default.

Allowed text only:
- control labels
- axis labels
- numeric values
- one global context strip
- minimal unavailable/failure tokens

All other visible text is forbidden.

Implementation packets must include:
- visible text allowlist
- visible text denylist

The implementer must report:
- retained visible text
- removed visible text
- newly introduced visible text

If any newly introduced visible text is outside the allowlist, the packet fails.

---

## 7. Packet grammar rule

Every visual packet must use hard verbs.

Allowed:
- delete
- preserve
- clamp
- fix
- pin
- forbid
- restrict
- use exact subset
- keep same domain
- remove all text except allowlist

Forbidden:
- minimize
- simplify
- improve
- make clearer
- make cleaner
- make more scientific
- make more intuitive

---

## 8. Failure rule

If a packet restores one invariant but mutates another unapproved invariant, the packet fails.

Examples:
- graph restored but y polarity changed -> fail
- prose removed but regions changed unexpectedly -> fail
- axes added but subset changed -> fail

Partial wins do not pass if unapproved drift occurred.

---

## 9. Kernel rule

Do not build hundreds of visual surfaces independently.

Stabilize one projection kernel per family:
- temporal line kernel
- spectral Cartesian kernel
- diagnostic scalar kernel

Only after a kernel passes contract + oracle + screenshot verification may it be reused elsewhere.

---

## 10. Enforcement question

Before approving any visual patch, ask:

Did this packet change exactly what was contracted, and nothing else?