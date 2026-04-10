# Dynamical Memory Engine — Temporal Plane Exposure Modes v0

## Status

This document defines the bounded plane exposure modes for the first runnable TemporalRegime inspection stack in the V2 rebuild substrate.

It is a supporting inspection-guidance note.

It does **not** override:

- `README_MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RepoLayout.md`
- `README/Core/Foundations/Architecture/Shell/README.RegimeCapableShellPosture.v0.md`
- `README/Core/Foundations/Architecture/Shell/README.OperatorExposureNavigation.v0.md`
- `README/Core/Foundations/Architecture/Shell/README.FrameAndPlaneContext.v0.md`
- `README/Core/Regimes/Temporal/Execution/README.TemporalExecutionSurface.v0.md`
- `README/Core/Regimes/Temporal/Inspection/Planes/README.PlanePosture.v0.md`
- `README/Core/Regimes/Temporal/Inspection/Rendering/README.PlaneRenderer.md`

Its purpose is narrower:

- define the lawful exposure modes for the currently pinned TemporalRegime planes,
- preserve direct-vs-derived distinction in shell exposure,
- define the simplest lawful visual forms for `P0–P3` and `D3`,
- optimize for legibility and structural exposure,
- and prevent early shell drift into semantic, composite, or spectacle-driven views.

This note governs **TemporalRegime plane exposure modes** only.

It does **not** govern:

- runtime operator semantics by itself,
- shell navigation grammar by itself,
- frame navigation semantics by itself,
- semantic overlay behavior,
- support-regime plane exposure,
- symbolic-regime plane exposure,
- or final UI styling.

---

## 1. Why this note exists

The first runnable TemporalRegime inspection stack now exists.

That means the next pressure is not only whether the shell can route to a plane, but:

**what lawful visual exposure mode each TemporalRegime plane should use**

Without an explicit note, several drift risks become likely:

- primary planes being displaced by richer diagnostic projections,
- derived views being mistaken for direct runtime truth,
- visually dense or exciting modes outrunning legibility,
- operator-local geometry being forced into the wrong axis metaphor,
- or shell implementation inventing unsupported view modes for convenience.

This note exists to keep the first exposure set simple, structural, and inspectable.

One-line summary:

**Temporal plane exposure modes should stay boring, operator-local, and structurally truthful before they become visually ambitious.**

---

## 2. Core rule

**Each TemporalRegime plane should expose only the simplest lawful geometry that matches the selected operator output and plane class.**

Corollary rules:

- primary planes remain primary,
- diagnostic planes remain explicitly secondary,
- direct exposure outranks richer derived exposure,
- operator-local geometry outranks universal visualization metaphors,
- and legibility outranks visual density.

If a richer mode competes with structural truth, structural truth wins.

---

## 3. Direct-vs-derived rule

The shell must preserve the distinction between:

### 3.1 Direct primary exposure

Direct primary exposure means the plane is showing the emitted primary structure itself.

Examples:

- `P0`
- `P1`
- `P2`
- `P3`

### 3.2 Derived diagnostic exposure

Derived diagnostic exposure means the plane is showing a lawful secondary projection of a runtime object or diagnostic companion.

Example:

- `D3`

This distinction must remain explicit in exposure modes.

One-line summary:

**Primary planes show emitted structure directly. Diagnostic planes show lawful secondary projections.**

---

## 4. Exposure-mode design posture

The first TemporalRegime shell should prefer:

- line-based direct exposure
- explicit bin-based exposure
- low-clutter local geometry
- one active mode at a time where needed
- toggles where they improve legibility without changing meaning

It should avoid:

- matrix-heavy views
- 3D views
- multi-pane dashboards
- semantic annotations
- composite “smart” modes
- visually impressive but structurally mixed views

The first shell should behave like a scientific instrument, not a spectacle surface.

---

## 5. `P0 — Ingest` exposure mode

### 5.1 Exposure class

Direct primary temporal exposure

### 5.2 Lawful visual form

- line plot

### 5.3 Axis posture

- x-axis = local time / sample position
- y-axis = value / amplitude

### 5.4 Why this is correct

`P0` is the admitted temporal structure.
Its lawful first exposure is direct temporal shape.

The shell should not summarize, classify, or stylize it first.

### 5.5 Explicit non-goals

Do not:

- compress `P0` into a summary-only panel
- replace line exposure with semantic state labels
- introduce frequency-domain views directly on `P0`

One-line summary:

**`P0` should expose admitted temporal structure directly as a line plot.**

---

## 6. `P1 — Clock Align` exposure mode

### 6.1 Exposure class

Direct primary temporal exposure

### 6.2 Lawful visual form

- line plot

### 6.3 Axis posture

- x-axis = aligned local time / sample position
- y-axis = value / amplitude

### 6.4 Why this is correct

`P1` is still temporal structure.
Its lawful first exposure is direct aligned shape, preserving comparability with `P0`.

### 6.5 Explicit non-goals

Do not:

- replace direct temporal exposure with alignment accounting only
- introduce semantic “correction quality” overlays
- force `P1` into spectral or summary-first exposure

One-line summary:

**`P1` should expose aligned temporal structure directly as a line plot.**

---

## 7. `P2 — Window` exposure mode

### 7.1 Exposure class

Direct primary bounded temporal exposure

### 7.2 Lawful visual form

- line plot of one selected bounded window

### 7.3 Axis posture

- x-axis = local frame sample position
- y-axis = value / amplitude

### 7.4 Why this is correct

`P2` is the first multiplicity-heavy primary seam.
Its lawful exposure is the direct bounded emitted window, not an evaluative or summary-selected substitute.

### 7.5 Explicit non-goals

Do not:

- choose “best” windows
- rank windows by salience
- replace direct exposure with aggregate summary
- collapse multiplicity into one overview plot

One-line summary:

**`P2` should expose the currently selected bounded window directly as a line plot.**

---

## 8. `P3 — Transform` exposure modes

### 8.1 Exposure class

Direct primary Cartesian spectral exposure

### 8.2 Lawful visual form

- frequency/bin-based plot

### 8.3 Axis posture

- x-axis = frequency / bin
- y-axis = selected Cartesian component exposure

### 8.4 Lawful exposure modes

The first lawful `P3` exposure modes are:

- `re`
- `im`
- `both`

### 8.5 Mode meanings

#### `re`

Expose real component only.

#### `im`

Expose imaginary component only.

#### `both`

Expose real and imaginary components together in one shared frequency/bin plot.

This should remain one local plot, not multiple dashboards.

### 8.6 Why this is correct

`P3` is primary Cartesian transform output.
Its lawful first exposure must remain Cartesian.

Magnitude and phase belong to `D3`, not `P3`.

### 8.7 Explicit non-goals

Do not:

- default `P3` to magnitude
- replace Cartesian exposure with phase/magnitude convenience
- collapse `P3` into derived geometry
- force `P3` into local time-axis exposure

One-line summary:

**`P3` should expose direct Cartesian spectral structure through `re`, `im`, or `both`, and must not silently collapse into derived magnitude/phase views.**

---

## 9. `D3 — Transform Diagnostics` exposure modes

### 9.1 Exposure class

Derived diagnostic-secondary transform exposure

### 9.2 Lawful visual form

- frequency/bin-based plot

### 9.3 Axis posture

- x-axis = frequency / bin
- y-axis = selected derived diagnostic geometry

### 9.4 Lawful exposure modes

The first lawful `D3` exposure modes are:

- `magnitude`
- `phase`

### 9.5 Mode meanings

#### `magnitude`

Expose bounded derived magnitude geometry.

#### `phase`

Expose bounded derived phase geometry.

### 9.6 Why this is correct

`D3` is explicitly the bounded derived diagnostic surface for transform-side secondary geometry.

This is where magnitude/phase belong.

### 9.7 Additional diagnostic markers

`D3` may also lawfully display bounded threshold/caution markers for:

- `nan_detected`
- `inf_detected`

These must remain explicitly diagnostic.

### 9.8 Explicit non-goals

Do not:

- present `D3` as primary truth surface
- collapse `D3` into semantic diagnostics
- replace `P3` with `D3` by default
- force simultaneous magnitude+phase overlay in v0

One-line summary:

**`D3` should expose bounded derived diagnostic geometry through toggleable `magnitude` or `phase`, remaining explicitly secondary to `P3`.**

---

## 10. Header and metadata posture

Each active plane exposure should include a compact context header.

Recommended fields:

- source
- regime
- operator
- plane mode
- frame index / total
- local object metadata where useful

Recommended operator-local metadata examples:

### `P0`
- source axis reference
- time axis reference

### `P1`
- `Fs`
- `n`
- `grid_t0`

### `P2`
- `window_id`
- `Fs`
- `n`
- `grid_t0`

### `P3`
- `Fs`
- `n`
- `df`

### `D3`
- `nan_detected`
- `inf_detected`

This header is part of legibility, not decoration.

---

## 11. Exposure-mode truthfulness rule

The shell must not:

- auto-select richer derived views because they look cleaner
- auto-replace direct primary views with diagnostic views
- add semantic labels to structural exposure modes
- compress the run into one overview surface at the cost of local inspectability
- inflate diagnostic convenience into stronger truth posture

If the user asks for direct structural exposure, the system should remain below stronger closure claims, consistent with the structural-exposure posture in the workflow contract. ([README.WorkflowContract.md])

---

## 12. Explicit non-goals

This note does **not** authorize:

- heatmaps in v0
- 3D plots in v0
- matrix-heavy views in v0
- semantic overlays in v0
- multi-plane simultaneous dashboards in v0
- smart frame or plane ranking
- support-regime or symbolic-regime exposure expansion

These may become useful later, but they are not lawful first-shell exposure modes.

---

## 13. First implementation posture

The first shell implementation should preserve:

- direct line plots for `P0–P2`
- Cartesian `re` / `im` / `both` exposure for `P3`
- toggleable `magnitude` / `phase` exposure for `D3`
- compact operator-local metadata header
- explicit frame navigation outside the plot
- no smart selection or semantic labeling

The current goal is:

**make the first TemporalRegime inspection shell structurally legible and operator-truthful before adding richer visual surfaces.**

---

## 14. Non-goals

This note does not yet define:

- advanced styling
- comparative multi-pane layouts
- whole-run overviews
- support-regime exposure modes
- symbolic-regime exposure modes
- later richer transform visualizations

Those require later bounded packets.

---

## 15. One-line operational summary

**Temporal Plane Exposure Modes v0 defines the first lawful visual exposure set for the runnable TemporalRegime shell: direct temporal line plots for `P0–P2`, direct Cartesian `re` / `im` / `both` exposure for `P3`, and toggleable derived `magnitude` / `phase` exposure for `D3`, all optimized for structural truth and legibility over spectacle.**