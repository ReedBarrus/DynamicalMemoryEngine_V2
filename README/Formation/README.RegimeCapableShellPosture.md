# Dynamical Memory Engine — Regime-Capable Shell Posture v0

## Status

This document defines the bounded posture for the first regime-capable inspection shell in the V2 rebuild substrate.

It is a supporting inspection-guidance note.

It does **not** override:

- `README_MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RepoLayout.md`
- `README/Core/Regimes/Temporal/README.TemporalDevelopmentProjection.md`
- `README/Core/Regimes/Temporal/Execution/README.SourceIntakeSurface.md`
- `README/Formation/README.MinimalOrchestratorPosture.v0.md`
- `README/Formation/README.TemporalExecutionSurface.v0.md`
- `README/Core/Regimes/Temporal/Execution/Failure/README.SeamFailurePosture.v0.md`
- `README/Formation/README.PlanePosture.v0.md`
- `README/Formation/README.PlaneRenderer.md`

Its purpose is narrower:

- define what the first shell is and is not,
- define why the shell must be regime-capable rather than temporal-only,
- define the shell’s bounded navigation grammar,
- preserve inspection-first posture,
- and prevent the shell from drifting into a product surface, semantic dashboard, or mixed authority layer.

This note governs **shell posture** only.

It does **not** govern:

- runtime operator semantics by itself,
- source intake semantics by itself,
- execution orchestration semantics by itself,
- plane-builder semantics by itself,
- renderer semantics by itself,
- semantic overlay behavior,
- or final app / deployment architecture.

---

## 1. Why this note exists

The V2 rebuild now has the first complete bounded inspection stack for the TemporalRegime:

- Source Intake
- Minimal Orchestrator
- Temporal Execution Surface
- Plane Builders
- Plane Renderer
- Temporal Inspection Flow

That stack is sufficient to justify the next surface pressure:

**a local shell for direct human inspection**

Without an explicit shell posture, several drifts become likely:

- temporal-only wiring hardening into future regime obstruction,
- shell logic collapsing into execution or rendering logic,
- shell navigation drifting into semantic convenience,
- inspection posture being replaced by dashboard posture,
- and product-shell aesthetics outrunning inspection truth.

This note exists to keep the shell narrow, lawful, and extensible.

One-line summary:

**The first shell is a local, regime-capable, inspection-first host for navigating bounded source, operator, frame, and plane exposure without becoming a product shell or semantic dashboard.**

---

## 2. Core shell rule

**The first shell exists to host lawful inspection across active and future regime stacks through explicit navigation and truthful exposure, while remaining below semantic interpretation, review posture, and product-surface inflation.**

Corollary rules:

- the shell is not the runtime,
- the shell is not the orchestrator,
- the shell is not the renderer,
- the shell is not semantic overlay,
- the shell is not review or consultation,
- and the shell must not imply stronger system maturity than the active mechanized seams justify.

If the shell becomes more authoritative than the seams it hosts, it has drifted.

---

## 3. Why the shell is regime-capable

The shell should not be hard-shaped only around the TemporalRegime.

The shell should instead be shaped around a broader inspection grammar that can later host:

- TemporalRegime
- SupportRegime
- SymbolicRegime

while preserving explicit active/inactive status.

This does **not** mean all regimes are active now.

It means the shell should be capable of hosting future regimes later without forcing a redesign of the whole navigation model.

At the current stage:

- TemporalRegime is active
- SupportRegime is deferred / inactive
- SymbolicRegime is deferred / inactive

Recognized future hosting is not present authorization.

One-line summary:

**The shell is regime-capable so future regimes can be added without rebuilding the host grammar, but only active regimes may shape current behavior.**

---

## 4. Shell definition

The first shell is a **local inspection shell**.

Its current job is to let Reed:

- select or provide source input through lawful source-intake pathways,
- run the mechanized chain through lawful execution hosting,
- choose the active regime,
- choose the active operator exposure,
- navigate frame position through the run,
- choose the lawful plane exposure mode,
- and inspect the resulting rendered output with seam-local failure honesty preserved.

It is not yet:

- a product shell,
- a semantic dashboard,
- a review console,
- a support-regime shell,
- a symbolic-regime shell,
- or a deployment-facing application identity.

One-line summary:

**The shell is a local inspection host, not a finished product identity.**

---

## 5. Shell navigation grammar

The shell should use the following fixed navigation grammar:

- **Source**
- **Run**
- **Regime**
- **Operator**
- **Frame**
- **Plane Mode**

This grammar should remain explicit.

Each region answers one bounded job only.

If a region begins answering multiple jobs, shell drift has begun.

---

## 6. Region roles

### 6.1 Source

The Source region handles:

- drag-and-drop source input
- file-picker source input
- selected source display
- saved source selection where present

It does not perform runtime execution or rendering.

### 6.2 Run

The Run region handles:

- run
- rerun
- clear or reset where lawful
- visible run status

It does not own source intake, rendering, or semantic interpretation.

### 6.3 Regime

The Regime region handles:

- choosing which regime stack is active in the shell

At the current stage, this should expose:

- TemporalRegime — active
- SupportRegime — inactive / deferred
- SymbolicRegime — inactive / deferred

Inactive does not mean hidden.
Inactive should remain visible but unavailable.

### 6.4 Operator

The Operator region handles:

- choosing which operator output family is currently being exposed

This is preferred over the word “stage.”

Why:

Because the shell is exposing operator-bounded output surfaces, not a generic abstract stage sequence.

For the current TemporalRegime, the active operator exposure set is:

- `P0 — Ingest`
- `P1 — Clock Align`
- `P2 — Window`
- `P3 — Transform`
- `D3 — Transform Diagnostics`

### 6.5 Frame

The Frame region handles:

- navigating which bounded emitted object in the run is active

This includes:

- previous / next
- numeric frame input
- current frame index
- total frame count

Frame is a run-navigation region, not merely a plot axis.

### 6.6 Plane Mode

The Plane Mode region handles:

- choosing how the currently selected operator output is exposed lawfully within its allowed plane family

Examples in the current TemporalRegime:

- direct temporal exposure
- `re`
- `im`
- `both`
- `magnitude`
- `phase`

Plane Mode is not the same as Operator selection.

One-line summary:

**Operator chooses which bounded output family is active. Plane Mode chooses how that active family is lawfully exposed.**

---

## 7. Shell layout posture

The first shell should use:

- a **left control rail**
- one **main inspection pane**

This layout is preferred because it keeps navigation explicit and preserves the main pane for direct structural exposure.

The shell should not start with:

- a dashboard grid,
- multiple simultaneous inspection panes,
- semantic sidecars,
- or dense mixed-surface layouts.

The first shell should behave more like a scientific instrument than a product dashboard.

---

## 8. Inspection pane posture

The main inspection pane should preserve two contexts:

### 8.1 Global run context

The shell should expose where the current selected object sits inside the run.

Examples:

- selected frame index
- total frames
- source name
- regime
- operator
- plane mode

### 8.2 Local object context

The shell should expose the internal geometry of the currently selected object.

Examples:

- temporal shape for `P0–P2`
- Cartesian spectral geometry for `P3`
- derived diagnostic geometry for `D3`

This distinction is critical.

The shell must not confuse:

- global run navigation
with
- local object exposure

One-line summary:

**The shell must show both where you are in the run and what the selected object looks like locally.**

---

## 9. Shell truthfulness rule

The shell must remain inspection-first and truth-preserving.

This means:

- no hidden semantic relabeling,
- no support/accounting substitution for direct primary exposure,
- no smart auto-selection of “best” frame,
- no smart auto-selection of “best” plane,
- no collapse of primary and diagnostic surfaces,
- no product polish that hides actual seam behavior.

If a richer presentation competes with direct emitted truth, direct emitted truth wins.

---

## 10. Relationship to mechanized seams

The shell remains above active mechanized seams and below semantic interpretation.

The shell should host and route:

- source intake
- execution hosting
- inspection flow
- plane selection
- rendered output

But it must not silently absorb:

- source intake semantics
- orchestration semantics
- rendering semantics
- semantic overlay semantics
- review posture

It is a host, not an authority layer.

---

## 11. Failure posture in the shell

The shell may surface failure from multiple seams, but must preserve seam ownership.

The shell should be able to surface:

- source-intake failure
- execution-surface failure
- orchestrator-owned failure
- operator failure
- plane-builder failure
- renderer failure
- shell-owned local routing failure

But it must not flatten them into one generic “shell error” blur.

One-line summary:

**The shell may display many failure types, but it must preserve who actually failed.**

---

## 12. Explicit non-goals

The first shell should **not** try to:

- become a product shell
- become a semantic dashboard
- provide review or consultation posture
- activate SupportRegime behavior
- activate SymbolicRegime behavior
- provide smart frame or smart plane ranking
- provide multi-pane mixed-surface comparison
- provide 3D or matrix-heavy “wow” views
- hide the run behind one composite summary surface

These are legitimate future pressures, but not lawful shell scope now.

---

## 13. First implementation posture

The first shell implementation should remain thin.

That means:

- simple local browser bootstrapping is acceptable
- explicit left-rail controls are acceptable
- direct operator/plane navigation is preferred
- visible inactive regimes are acceptable
- legibility outranks stylistic density
- inspection truth outranks visual polish

The current goal is:

**make the mechanized stack directly runnable and navigable as an inspection instrument.**

---

## 14. Non-goals

This note does not yet define:

- final deployment architecture
- multi-user shell behavior
- support-regime shell behavior
- symbolic-regime shell behavior
- semantic overlay shell behavior
- comparison dashboards
- experiment orchestration surfaces

Those require later bounded packets.

---

## 15. One-line operational summary

**Regime-Capable Shell Posture v0 defines the first local inspection shell as a regime-capable, inspection-first host with explicit navigation across source, run, regime, operator, frame, and plane mode, while remaining below semantic interpretation, review posture, and product-shell inflation.**