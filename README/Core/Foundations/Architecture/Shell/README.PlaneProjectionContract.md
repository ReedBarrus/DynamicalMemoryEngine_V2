# Dynamical Memory Engine — Plane Projection Contract v0

## Status

This note defines the projection contract for shell-visible planes in the temporal regime.

It is a supporting surface-governance note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- active operator contracts
- active execution/result contracts

Its purpose is narrower:

- define how an exposed structural subset may be projected into a visible plane,
- freeze the allowed display transform,
- prevent renderer drift,
- prevent poetic or aesthetic remapping,
- and make plane geometry auditable by contract rather than by vibe.

This note governs **plane projection posture** only.

It does **not** govern:

- runtime truth by itself,
- semantic interpretation,
- canon activation,
- or higher-regime symbolic surfaces.

---

## 1. Core rule

**A plane is a direct coordinate projection of an already-exposed structural subset.**

Projection is not interpretation.

Projection must not:

- beautify
- smooth
- narrate
- crop for aesthetics
- rescale for drama
- substitute a different subset
- add explanatory surfaces

One-line summary:

**The plane may only show what the declared exposed subset and declared coordinate transform justify.**

---

## 2. Projection seam boundary

Projection begins only after the structural source subset already exists.

Projection may only:

1. take the currently exposed lawful subset
2. map x values into screen x coordinates
3. map y values into screen y coordinates
4. draw axes
5. draw grid
6. draw zero line where required
7. draw the trace
8. draw one active point marker tied to the selected visible point

Projection must not silently perform:

- new runtime computation
- hidden filtering
- hidden resampling
- hidden smoothing
- hidden subset expansion
- hidden subset shrinkage
- hidden re-querying
- interpretive annotation

---

## 3. Same-subset rule

The following must use the exact same subset:

- plot
- selectable bins
- active point marker
- numeric readout

If the shell exposes 8 bins, the plot must use those same 8 bins.

The renderer must not:

- plot more points than the exposed subset
- plot fewer points than the exposed subset unless the shell visibly removes them everywhere
- use one subset for the plot and another for the readout

---

## 4. Current temporal P3 source rule

For the current temporal shell:

- source = currently exposed `P3` preview subset only
- no hidden expansion
- no hidden reduction
- no extra bins beyond the exposed subset
- no plotting fewer bins than the exposed subset unless the shell visibly removes them everywhere

Ordering rule:

- point order = currently exposed bin order

---

## 5. X projection rule

For current `P3` shell projection:

- x source = frequency in Hz
- x spacing = frequency-driven
- x ordering = exposed bin order
- x domain = exact min/max of the exposed subset
- no hidden domain extension
- no pretty rounding that changes point placement
- no index-based respacing if frequency values are present

---

## 6. Y projection rule

### `re` mode

- y source = real component values of the exposed subset

### `im` mode

- y source = imaginary component values of the exposed subset

### `both` mode

- y source = real and imaginary component values of the exposed subset on one shared y domain

### All `P3` modes

- y domain = exact min/max of displayed values
- zero must be included in the y domain
- no nonlinear scaling
- no vertical exaggeration
- no hidden normalization
- no smoothing

---

## 7. Plot box rule

The renderer must use a fixed plot-box policy.

Two rectangles exist:

### outer rect

The visible plane bounds.

### inner rect

The actual plotting region after margins.

Margins must be fixed by rule, not changed for aesthetics.

Default posture:

- left margin = minimal, only enough for y ticks/labels
- right margin = minimal
- top margin = minimal
- bottom margin = minimal, only enough for x ticks/labels

The renderer must not change margins adaptively to make the shape prettier.

If margins change, that is a projection change.

---

## 8. Axis and grid rule

Axes and grid are allowed only as measurement scaffolding.

Allowed:

- x-axis line
- y-axis line
- tick marks
- tick labels
- axis labels
- zero line
- light grid lines

Forbidden:

- decorative titles
- subtitles
- legends with prose
- helper text
- explanatory labels

Axis labels must remain minimal.

For current `P3` shell posture:

- x-axis label = `Hz`
- y-axis label =
  - `re` in `re` mode
  - `im` in `im` mode
  - `re/im` in `both` mode

---

## 9. Trace rule

Allowed:

- straight line segments between adjacent visible points
- actual point markers tied to actual visible points
- one selected-point marker

Forbidden:

- spline smoothing
- curve fitting
- inferred intermediate points
- glow or emphasis that materially alters perceived shape
- markers not tied to actual visible points

---

## 10. Selection rule

The selected point must:

- be one actual visible plotted point
- be drawn on the plot itself
- match the numeric readout
- remain tied to the same exposed subset as the plot

If selection resets on mode change, that reset must remain deterministic and shell-local.

---

## 11. Text rule

Allowed text on the plane:

- axis labels
- tick labels
- numeric values

Forbidden:

- summaries
- helper text
- interpretation
- descriptive sentences
- render explanation
- any prose

---

## 12. Forbidden renderer freedoms

The renderer must not:

- smooth
- beautify
- narrativize
- crop for aesthetics
- reweight points visually without declaration
- change domain/range silently
- omit zero silently when zero is structurally relevant
- compress or exaggerate range for drama
- change chart-box geometry for style
- use a different subset than the visible shell subset

One-line summary:

**No poetry in the renderer.**

---

## 13. Current P3 shell projection v0

The current shell `P3` plane is pinned as follows:

- source = currently exposed `P3` preview subset only
- x = frequency Hz
- y =
  - `re` => real values
  - `im` => imaginary values
  - `both` => both traces over one shared y domain
- x-domain = exact min/max of exposed subset
- y-domain = exact min/max of displayed values, with zero included
- line rule = straight segments only
- selected marker = one active selected visible bin
- grid = allowed
- axes = allowed
- smoothing = forbidden
- hidden subset change = forbidden
- explanatory text = forbidden

---

## 14. Enforcement question

Before accepting a plane change, ask:

**Did the exposed subset change, or did only the projection change?**

If only the projection changed, the change must still satisfy every rule above.

## 15. Visual seam vocabulary constraints

This contract uses a restricted vocabulary.

The purpose is to prevent soft language from reintroducing renderer freedom, prose drift, or aesthetic discretion.

### 15.1 Allowed contract verbs

Only the following verb classes are allowed in packets and review language for this seam:

- preserve
- remove
- delete
- keep
- use
- map
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
- derive exactly from
- do not change

These verbs are binding.

### 15.2 Forbidden soft verbs

The following verbs and phrases are forbidden for this seam:

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
- make more usable
- demote
- enhance
- adjust aesthetically
- better
- nicer
- friendlier

These phrases create unauthorized implementation freedom and must not appear in packets, plans, or return claims for this seam.

### 15.3 Allowed instruction form

Instructions for this seam must be written as exact constraints.

Examples:

- use the exact exposed subset
- keep the same visible bin count
- remove all visible prose
- map x from exact frequency values
- include zero in the y domain
- keep fixed margins
- do not change the subset
- do not change text outside the allowlist

### 15.4 Forbidden instruction form

Instructions for this seam must not be written as goals, intentions, or design aspirations.

Forbidden examples:

- make the graph clearer
- improve legibility
- minimize prose
- clean up the layout
- make it feel more like an instrument
- refine the projection
- simplify the shell

If a sentence can be read as a preference instead of a rule, it is forbidden.

### 15.5 Text allowlist rule

For the temporal shell, visible text is allowlist-only.

Allowed visible text classes:

- control labels
- axis labels
- tick labels
- numeric values
- one global context strip
- minimal failure/unavailable tokens

All other visible text is forbidden.

Packets for this seam must include:

- retained visible text
- removed visible text
- newly introduced visible text

If newly introduced visible text is not in the allowlist, the packet fails.

### 15.6 Plan-gate rule

Before implementation, the implementer must answer in exact form:

- files to modify
- subset changes: yes/no
- x-domain changes: yes/no
- y-domain changes: yes/no
- margin changes: yes/no
- visible text removed
- visible text retained
- visible text added

If any answer is vague, implementation must not proceed.

### 15.7 Verification language rule

Return packets for this seam must report invariants only in the following forms:

- preserved
- changed intentionally
- failed

Narrative justification is secondary to invariant status.

### 15.8 Enforcement question

Before approving any packet for this seam, ask:

**Does this instruction remove freedom, or does it describe a preference?**

If it describes a preference, reject it and rewrite it as a hard constraint.