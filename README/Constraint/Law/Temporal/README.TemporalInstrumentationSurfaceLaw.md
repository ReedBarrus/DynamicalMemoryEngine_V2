# Dynamical Memory Engine — Temporal Instrumentation Surface Law

## Status

This note defines the implementation law for temporal-regime instrumentation surfaces.

It is a supporting surface-governance note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.ActiveLawKernel.md`
- `README.RepoLayout.md`

Its purpose is narrower:

- define what a temporal instrumentation surface is allowed to show,
- make planes the primary surface,
- prevent explanatory prose from entering the shell without explicit review,
- keep temporal surfaces structurally legible,
- and establish a workflow gate for any future prose.

This note governs **temporal instrumentation surface posture** only.

It does **not** govern:

- runtime truth by itself,
- canon activation,
- semantic overlay policy outside the temporal shell,
- or higher-regime symbolic surfaces.

---

## 1. Core rule

**A temporal instrumentation surface is an instrument panel, not an explanatory panel.**

Accordingly:

- planes are primary,
- controls are subordinate,
- numeric readout is allowed,
- axis labels are allowed,
- one global context strip is allowed,
- prose is forbidden unless explicitly admitted through review.

One-line summary:

**In the temporal regime, structure is shown, not narrated.**

---

## 2. Allowed visible surface classes

A temporal instrumentation surface may display only the following by default:

### 2.1 Plane surface

The plane is the centerpiece.

This includes:

- plotted traces,
- coordinate grid,
- axis ticks,
- axis labels,
- zero line,
- lawful markers tied to visible measurement.

### 2.2 Control surface

Controls may appear only as compact operational controls.

Examples:

- Run
- Rerun
- Clear / Reset
- source picker
- operator buttons
- frame controls
- plane-mode controls

Controls must remain concise.

### 2.3 Numeric readout surface

A bounded numeric readout is allowed where it is directly tied to visible structure.

Examples:

- frequency
- bin index
- re
- im
- frame index
- current mode value

### 2.4 Global context strip

One compact global context strip is allowed.

It may include only the minimum active runtime context needed to orient the user.

Examples:

- source
- regime
- runtime target operator
- runtime target frame
- runtime target plane

This strip must remain compact.

### 2.5 Minimal failure / unavailable tokens

Failure and unavailable posture may be shown only in the smallest form needed to preserve honesty.

Examples:

- unavailable
- source failure
- run failure
- pane failure

These are posture tokens, not explanatory prose.

---

## 3. Forbidden surface classes

The following are forbidden on temporal instrumentation surfaces unless explicitly admitted through review:

- explanatory paragraphs
- descriptive summaries
- interpretive cards
- helper prose
- motivational copy
- educational copy
- narrative render descriptions
- semantic framing text
- “what this means” text
- “current path” prose blocks
- “shell render wiring” summaries
- any sentence whose absence would not reduce actual operability

One-line summary:

**If the shell still works without the sentence, the sentence is probably forbidden.**

---

## 4. Instrument-first visual hierarchy

Temporal instrumentation surfaces must preserve this hierarchy:

1. plane
2. numeric readout
3. controls
4. global context strip
5. minimal failure / unavailable tokens

Everything else is below threshold and should not appear.

This means:

- the plane must dominate the visual field,
- controls must not visually outweigh the plane,
- prose must never visually outweigh measurement.

---

## 5. Temporal prose admission rule

**No prose may enter a temporal instrumentation surface unless it passes explicit review and is admitted as operationally necessary.**

Default posture:

- rejected

A prose element must not be added merely because it is:

- clearer,
- friendlier,
- more descriptive,
- aesthetically balanced,
- or useful for onboarding.

Those are not sufficient reasons.

---

## 6. Prose admission gate

Any proposed prose for a temporal instrumentation surface must answer all of the following:

### 6.1 Necessity test

**Does the surface become operationally unusable without this text?**

If no:
- reject

### 6.2 Non-replaceability test

**Can the same function be achieved by one of the following instead?**

- control label
- axis label
- numeric value
- compact token
- position / grouping / geometry
- visual styling
- icon or indicator
- measurement readout

If yes:
- reject the prose

### 6.3 Structural primacy test

**Does this prose compete with the plane for attention?**

If yes:
- reject

### 6.4 Interpretation drift test

**Does this prose explain, summarize, or interpret rather than orient operation?**

If yes:
- reject

### 6.5 Compression test

**Can the prose be reduced to a single token or removed entirely?**

If yes:
- reduce or remove

Only if all five tests are passed may prose continue to review.

---

## 7. Prose classes

If prose survives the gate above, it must be classed explicitly.

### P0 — Label prose

Minimal control or axis labeling.

Examples:

- Source
- Run
- Frame
- Plane Mode

Allowed by default.

### P1 — Token prose

Minimal operational posture tokens.

Examples:

- active
- deferred
- unavailable
- failure

Allowed where necessary.

### P2 — Operational sentence prose

A full sentence required for operation.

Examples:
- none by default in the temporal shell

Forbidden unless explicitly reviewed and admitted.

### P3 — Interpretive prose

Any explanatory or meaning-bearing sentence.

Examples:

- what the render means
- what changed
- what the shell is doing conceptually

Always forbidden in the temporal shell.

---

## 8. Default temporal shell ceiling

The maximum default prose ceiling for the temporal shell is:

**P1**

That means:

- labels allowed
- compact tokens allowed
- sentences forbidden

If a sentence appears, it requires explicit exception review.

---

## 9. Review workflow for prose exceptions

If someone wants prose on a temporal instrumentation surface, the change must go through a dedicated review packet.

Required packet posture:

- identify exact text proposed
- identify exact surface location
- state what operational function fails without it
- state why label/token/geometry cannot replace it
- state why it does not create interpretation drift
- state why it does not compete with the plane

Without that packet:
- prose is rejected

---

## 10. Implementation rule for engineers

Engineer must assume the following by default:

- remove prose unless required
- prefer labels over sentences
- prefer geometry over explanation
- prefer numeric readout over description
- prefer visible structural cues over helper text
- prefer compact tokens over narrative state copy

Engineer must not introduce explanatory prose into the temporal shell without explicit instruction.

---

## 11. Acceptance rule for temporal shell packets

A temporal shell packet should fail review if it introduces:

- explanatory prose
- summary prose
- interpretive prose
- any sentence competing with the plane
- any surface where structure is narrated instead of exposed

A temporal shell packet should pass review when:

- the plane remains primary,
- numeric readout is clearer,
- controls remain usable,
- text is minimized to labels/tokens only,
- and interpretation drift is absent.

---

## 12. One-line enforcement question

Before allowing any text onto a temporal instrumentation surface, ask:

**Is this required to operate or measure, or is it only explaining?**

If it is explaining:
- reject it