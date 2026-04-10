# Dynamical Memory Engine — Frame and Plane Context v0

## Status

This document defines the bounded posture for frame navigation and plane-local exposure context inside the first regime-capable inspection shell.

It is a supporting shell-inspection note.

It does **not** override:

- `README_MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RepoLayout.md`
- `README/Core/Foundations/Architecture/Shell/README.RegimeCapableShellPosture.v0.md`
- `README/Core/Foundations/Architecture/Shell/README.OperatorExposureNavigation.v0.md`
- `README/Core/Regimes/Temporal/Execution/README.TemporalExecutionSurface.v0.md`
- `README/Core/Regimes/Temporal/Inspection/Planes/README.PlanePosture.v0.md`
- `README/Core/Regimes/Temporal/Inspection/Rendering/README.PlaneRenderer.md`

Its purpose is narrower:

- define why Frame and Plane must remain distinct shell concepts,
- define the difference between global run context and local plane context,
- define how run navigation and local object exposure relate,
- preserve explicit frame navigation for long runs and multiplicity seams,
- and prevent shell drift into compressed, smart-selected, or context-blurring views.

This note governs **frame and plane context posture** only.

It does **not** govern:

- runtime operator semantics by itself,
- operator selection semantics by itself,
- semantic overlay behavior,
- support-regime inspection,
- symbolic-regime inspection,
- or final shell implementation details.

---

## 1. Why this note exists

The first inspection shell must support two different but tightly related navigation realities:

1. movement through a run across emitted objects
2. direct exposure of the currently selected object’s internal geometry

Without an explicit note, several drift risks become likely:

- frame navigation collapsing into plane-mode logic,
- local plane axes being mistaken for whole-run navigation,
- long runs being compressed into illegible “overview” shapes,
- spectral/operator-local geometry being forced into time-axis metaphors where it does not belong,
- or smart frame selection replacing explicit human navigation.

This note exists to keep run navigation and local object exposure explicit and distinct.

One-line summary:

**Frame context chooses where you are in the run; plane context shows what the currently selected object looks like locally.**

---

## 2. Core rule

**Frame context and plane context must remain separate.**

Corollary rules:

- frame navigation is not the same as local plotted x-axis,
- local plotted x-axis is not sufficient for navigating the whole run,
- plane-local geometry must not be forced to pretend it is whole-run navigation,
- and the shell must preserve both global run context and local object context explicitly.

If the shell hides either context, inspection drift has begun.

---

## 3. Frame context definition

In the shell, **Frame** answers:

**Which bounded emitted object instance in the run is currently active?**

Frame context is therefore a run-navigation concept.

It should allow the user to move through emitted objects across the run using:

- previous
- next
- numeric frame input
- current frame index
- total frame count

Later extensions may add sliders or jumps, but the first shell should remain instrument-like and explicit.

One-line summary:

**Frame context is external navigation through the run.**

---

## 4. Plane context definition

In the shell, **Plane** answers:

**How is the currently selected object being exposed locally?**

Plane context is therefore a local-object exposure concept.

Plane-local context may include:

- the local plot axis
- the local value axis
- the local exposure mode
- the local object metadata relevant to the selected operator family

One-line summary:

**Plane context is internal exposure of the selected object.**

---

## 5. Global vs local context

The shell must preserve two simultaneous contexts:

### 5.1 Global run context

Global run context tells the user where the selected object sits inside the run.

Examples:

- source name
- active regime
- active operator
- selected frame index
- total frame count
- selected plane mode
- frame time or `grid_t0` where available

### 5.2 Local object context

Local object context tells the user what the currently selected object looks like internally.

Examples:

- local temporal waveform
- local Cartesian spectral geometry
- local derived diagnostic geometry

Both contexts are required.

If either is missing, the shell becomes less trustworthy and less navigable.

One-line summary:

**The shell must show both where you are in the run and what the selected object contains locally.**

---

## 6. Why frame is not redundant with plane

A frame selector is not redundant with a plotted plane.

Why:

Because a plotted plane typically shows the internal geometry of one selected object.

That plane does **not** automatically answer:

- which frame number in the full run this object came from
- how many frames exist overall
- where this frame sits relative to the rest of the run
- or how to move explicitly to another bounded emitted object

Therefore:

- Frame remains its own shell region
- Plane remains its own shell region or plane-mode exposure control

One-line summary:

**Frame chooses which object. Plane shows the chosen object.**

---

## 7. Operator-specific frame/plane relationships

Different operator outputs relate differently to frame context and local plane axes.

### 7.1 `P0 — Ingest`

`P0` may be exposed as direct temporal structure.

Its local plane can use:

- x-axis = local time / sample position
- y-axis = value / amplitude

But for long runs, frame navigation is still necessary so the shell does not compress the whole run into illegibility.

### 7.2 `P1 — Clock Align`

`P1` may also use:

- x-axis = local aligned time / sample position
- y-axis = value / amplitude

Again, frame navigation remains necessary for inspection across longer runs.

### 7.3 `P2 — Window`

`P2` is explicitly one bounded segmented temporal frame.

Its local plane can use:

- x-axis = local frame sample position
- y-axis = value / amplitude

Frame navigation is especially important here because `P2` is the first multiplicity-heavy seam.

### 7.4 `P3 — Transform`

`P3` does **not** use time as its primary local x-axis.

Its local plane should use:

- x-axis = frequency / bin
- y-axis = `re`, `im`, or `both`

Frame navigation therefore becomes the only lawful way to move through time/run context at `P3`.

This is exactly why Frame must remain external to the local plot.

### 7.5 `D3 — Transform Diagnostics`

`D3` is diagnostic-secondary and also does **not** use time as its primary local x-axis.

Its local plane should use:

- x-axis = frequency / bin
- y-axis = `magnitude` or `phase`

Again, frame navigation must remain separate.

One-line summary:

**Some operators expose local time directly and some do not, but all runs still require explicit frame navigation through emitted objects.**

---

## 8. Frame navigation posture

The first shell should prefer:

- previous / next buttons
- numeric frame input
- current frame index / total frame count

This is preferred over:

- smart frame ranking
- auto-jumping
- implicit selection of “interesting” frames
- overly compressed whole-run views

Later enhancements such as sliders may be lawful, but the first shell should behave more like a scientific instrument than a convenience browser.

---

## 9. Plane-local axis posture

Plane-local axes must remain lawful to the selected operator and plane mode.

Examples:

- `P0–P2` may expose direct temporal x-axes
- `P3` may expose frequency/bin x-axis with `re` / `im` / `both`
- `D3` may expose frequency/bin x-axis with `magnitude` / `phase`

The shell must not force all operators into the same visual axis metaphor.

This is especially important for `P3` and `D3`.

One-line summary:

**Plane axes belong to the selected object’s lawful geometry, not to a universal shell metaphor.**

---

## 10. Header posture

The main inspection pane should include a compact header that preserves global context.

Recommended header fields:

- source
- regime
- operator
- plane mode
- frame index / total
- frame time or local origin where useful

This compact header is necessary to prevent inspection drift, especially when moving through many frames.

---

## 11. Truthfulness rule

The shell must not hide run navigation or local object context behind convenience.

This means:

- no smart frame suggestion
- no semantic ranking of frames
- no compressed whole-run substitution for explicit frame navigation
- no forcing `P3`/`D3` into fake time-axis exposure
- no hiding the selected frame identity when rendering the plane

If convenience competes with truthful context, truthful context wins.

---

## 12. Explicit non-goals

This note does **not** authorize:

- smart frame selection
- semantic frame summarization
- whole-run auto-compressed navigation surfaces
- multi-frame simultaneous comparison
- heatmaps or matrix-heavy views in v0
- 3D exposure in v0
- diagnostic-first drift that hides primary context

These are legitimate future pressures, but not lawful first-shell context posture.

---

## 13. First implementation posture

The first shell implementation should preserve the following:

- a distinct Frame region
- a distinct Plane Mode region
- a compact global-context header
- one main local object exposure pane
- operator-specific local axes
- explicit frame navigation controls

The current goal is:

**make long-run inspection navigable and local object exposure legible without compressing the run into illegibility or collapsing navigation into convenience.**

---

## 14. Non-goals

This note does not yet define:

- advanced frame timeline widgets
- multi-operator synchronized frame comparison
- support-regime frame semantics
- symbolic-regime context semantics
- multi-pane run-overview dashboards

Those require later bounded packets.

---

## 15. One-line operational summary

**Frame and Plane Context v0 defines the shell rule that frame context is explicit run navigation and plane context is local object exposure, preserving both global run position and operator-local geometry without collapsing one into the other.**