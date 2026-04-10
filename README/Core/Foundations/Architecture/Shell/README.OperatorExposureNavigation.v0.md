# Dynamical Memory Engine — Operator Exposure Navigation v0

## Status

This document defines the bounded navigation posture for operator exposure inside the first regime-capable inspection shell.

It is a supporting shell-navigation note.

It does **not** override:

- `README_MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RepoLayout.md`
- `README/Core/Foundations/Architecture/Shell/README.RegimeCapableShellPosture.v0.md`
- `README/Core/Regimes/Temporal/Execution/README.SourceIntakeSurface.md`
- `README/Core/Regimes/Temporal/Execution/README.MinimalOrchestratorPosture.v0.md`
- `README/Core/Regimes/Temporal/Execution/README.TemporalExecutionSurface.v0.md`
- `README/Core/Regimes/Temporal/Inspection/Planes/README.PlanePosture.v0.md`
- `README/Core/Regimes/Temporal/Inspection/Rendering/README.PlaneRenderer.md`

Its purpose is narrower:

- define why the shell should navigate by operator exposure rather than generic “stage” language,
- define the difference between operator selection and plane-mode selection,
- define the first active operator exposure set for the TemporalRegime,
- preserve explicit structural exposure posture,
- and prevent navigation drift into generic pipeline abstraction or semantic surface collapse.

This note governs **operator exposure navigation posture** only.

It does **not** govern:

- runtime operator semantics by itself,
- frame navigation by itself,
- plane-rendering semantics by itself,
- semantic overlay behavior,
- support-regime operator exposure,
- or final shell implementation details.

---

## 1. Why this note exists

The first shell needs a lawful way to let Reed move between different emitted objects in the active runtime chain.

Without an explicit navigation note, several drift risks become likely:

- generic “stage” language flattening operator-specific exposure differences,
- navigation logic becoming abstract pipeline language instead of explicit structural exposure,
- operator selection collapsing into plane-mode selection,
- primary and diagnostic outputs becoming mixed in one navigation control,
- or later regimes inheriting ambiguous shell vocabulary.

This note exists to keep navigation explicit and operator-grounded.

One-line summary:

**The shell should navigate by operator exposure rather than generic stage language, because what is being inspected is operator-bounded emitted structure.**

---

## 2. Core rule

**The shell should select which bounded output family is active through an explicit Operator region, not through vague stage language or composite convenience surfaces.**

Corollary rules:

- operator navigation is not plane-mode navigation,
- operator navigation is not semantic navigation,
- operator navigation is not review posture,
- and operator navigation must remain close to actual emitted object families.

If navigation begins hiding which operator output is active, shell drift has begun.

---

## 3. Why “Operator” is preferred over “Stage”

The shell is exposing outputs produced at explicit operator seams.

The word “stage” is looser and more generic.
It can drift toward:

- abstract pipeline storytelling,
- hidden convenience grouping,
- semantic sequencing,
- or mixed surface presentation.

The word “Operator” is preferred because it keeps the shell anchored to:

- explicit bounded seams,
- explicit emitted object families,
- explicit structural differences in what can be lawfully exposed.

One-line summary:

**Operator navigation is more lawful than stage navigation because it stays anchored to real seam outputs rather than generic pipeline rhetoric.**

---

## 4. Operator navigation definition

In the shell, the Operator region answers:

**Which bounded output family is currently active for inspection?**

This means operator selection should:

- choose the active emitted family,
- update the available frame context accordingly,
- constrain which plane modes are lawful,
- and preserve explicit operator identity in the shell header.

Operator selection is not:

- a smart suggestion engine,
- a semantic filter,
- a mode for hiding runtime complexity,
- or a substitute for frame navigation.

---

## 5. Operator navigation is not Plane Mode navigation

Operator navigation and Plane Mode navigation must remain separate.

### 5.1 Operator navigation asks

**Which emitted object family is active?**

Examples:
- `P0`
- `P1`
- `P2`
- `P3`
- `D3`

### 5.2 Plane Mode navigation asks

**How is the currently active emitted family being exposed lawfully?**

Examples:
- direct temporal exposure
- `re`
- `im`
- `both`
- `magnitude`
- `phase`

One-line summary:

**Operator chooses the object family. Plane Mode chooses the lawful exposure of that family.**

---

## 6. Current active operator exposure set

For the current TemporalRegime, the shell should expose the following operator-bounded output families:

- `P0 — Ingest`
- `P1 — Clock Align`
- `P2 — Window`
- `P3 — Transform`
- `D3 — Transform Diagnostics`

This set is sufficient for the first runnable inspection shell.

### 6.1 Primary operator exposures

The current direct primary operator exposures are:

- `P0`
- `P1`
- `P2`
- `P3`

These should remain primary in shell posture.

### 6.2 Diagnostic operator exposure

The current bounded diagnostic-secondary operator exposure is:

- `D3`

This must remain explicitly secondary and must not silently displace primary exposure posture.

---

## 7. Operator labels in the shell

The shell should prefer explicit labels that include both code and readable meaning.

Recommended first labeling form:

- `P0 — Ingest`
- `P1 — Clock Align`
- `P2 — Window`
- `P3 — Transform`
- `D3 — Transform Diagnostics`

This is preferable to showing only:

- raw short codes
or
- friendly words without the code anchor

Why:

Because the code anchor preserves seam identity, and the readable label preserves human legibility.

---

## 8. Operator-specific exposure differences

Operator navigation matters because different operator outputs have different lawful exposure capabilities.

Examples:

### 8.1 `P0–P2`

These support direct local temporal exposure.

Their selected plane can lawfully present:

- local temporal x-axis
- local value/amplitude y-axis

### 8.2 `P3`

This does **not** support local temporal x-axis as its primary plot axis.

Its selected plane should lawfully present:

- frequency/bin x-axis
- `re`, `im`, or `both` exposure modes

### 8.3 `D3`

This is diagnostic-secondary.

Its selected plane should lawfully present:

- `magnitude`
- `phase`

and remain explicitly derived.

This difference is exactly why operator selection should remain explicit.

One-line summary:

**Different operators expose different lawful internal geometries, so operator identity must remain explicit in navigation.**

---

## 9. Relationship to Frame navigation

Operator navigation is not Frame navigation.

### Operator navigation asks:
Which emitted family is active?

### Frame navigation asks:
Which bounded emitted object instance inside the run is active?

For example:
- selecting `P3` chooses the transform output family
- selecting frame `17` chooses which `P3` frame instance is currently being inspected

These must remain separate.

---

## 10. Relationship to Regime navigation

Operator navigation sits below Regime navigation.

### Regime navigation asks:
Which stack is active?

### Operator navigation asks:
Which emitted family inside that active stack is currently being exposed?

This distinction matters because later regimes may have their own operator sets.

At the current stage:
- TemporalRegime is active
- SupportRegime is inactive
- SymbolicRegime is inactive

Operator navigation should only expose active operators for the active regime.

---

## 11. Truthfulness rule

Operator navigation must remain truth-preserving.

This means:

- no hidden remapping of one operator into another,
- no collapsing primary and diagnostic outputs,
- no generic “overview mode” replacing explicit operator identity,
- no semantic labels replacing operator-bounded exposure,
- and no smart auto-jumping to whichever output looks most interesting.

If explicit operator identity competes with shell convenience, explicit operator identity wins.

---

## 12. Explicit non-goals

This note does **not** authorize:

- smart operator ranking
- semantic grouping of operators
- cross-regime mixed operator views
- multi-operator composite dashboards
- diagnostic-first navigation posture
- hiding `P0–P3` behind `D3`
- product-friendly simplification that erases seam identity

These are legitimate future pressures, but not lawful navigation scope now.

---

## 13. First implementation posture

The first shell implementation should keep operator navigation simple.

That means:

- one explicit Operator region in the left control rail
- one active operator at a time
- explicit label showing code + name
- available plane modes constrained by current operator
- frame navigation updating against the chosen operator family

The current goal is:

**make operator-bounded structural exposure easy to navigate without abstracting away the runtime seam that produced it.**

---

## 14. Non-goals

This note does not yet define:

- support-regime operator navigation
- symbolic-regime operator navigation
- multi-operator simultaneous comparison
- operator grouping / collapse behavior
- future advanced shell ergonomics

Those require later bounded packets.

---

## 15. One-line operational summary

**Operator Exposure Navigation v0 defines the shell rule that inspection should navigate by explicit operator-bounded output families rather than generic stage language, while keeping operator selection distinct from plane-mode selection, frame navigation, and regime navigation.**