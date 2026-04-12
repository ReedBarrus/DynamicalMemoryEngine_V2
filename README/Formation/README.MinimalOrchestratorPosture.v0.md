# Dynamical Memory Engine — Minimal Orchestrator Posture v0

## Status

This document defines the bounded posture for the first minimal orchestrator in the V2 rebuild substrate.

It is a supporting execution-guidance note.

It does **not** override:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README/Constitution/Workflow/README.RebuildPosture.md`
- `README.RepoLayout.md`
- `README/Core/Regimes/Temporal/README.TemporalDevelopmentProjection.md`
- `README/Core/Regimes/Temporal/Validators/README.ValidatorAndReturnPosture.md`
- `README/Formation/README.SourceIntakeSurface.md`
- `README/Formation/README.TemporalExecutionSurface.v0.md`
- `README/Core/Regimes/Temporal/Execution/Failure/README.SeamFailurePosture.v0.md`
- the active TemporalRegime floor contracts

Its purpose is narrower:

- define what the first minimal orchestrator is and is not,
- define the bounded runtime chain it is allowed to call,
- define how it relates to source intake, execution surface, and renderer,
- preserve deterministic chain calling without semantic inflation,
- and prevent orchestration from silently becoming app logic, review logic, or regime expansion.

This note governs **minimal orchestrator posture** only.

It does **not** govern:

- source intake by itself,
- execution-surface hosting by itself,
- plane rendering by itself,
- support-regime admission,
- symbolic-regime routing,
- semantic overlay behavior,
- or final runtime shell architecture.

---

## 1. Why this note exists

The TemporalRegime primary chain is now mechanized through:

- `P0`
- `P1`
- `P2`
- `P3`

The project now needs a bounded way to call that chain as one lawful execution path.

Without an explicit orchestrator note, several drifts become likely:

- execution surface silently becoming runtime chain logic,
- source intake silently becoming execution control,
- renderer/runtime coupling,
- ad hoc chain calling with hidden policy assumptions,
- or future support/symbolic expansion leaking into the first runtime path.

This note exists to keep the first orchestration layer thin and honest.

One-line summary:

**The minimal orchestrator is the thin runtime chain caller for the mechanized TemporalRegime path; it is not source intake, not rendering, and not semantic control.**

---

## 2. Core orchestrator rule

**The first minimal orchestrator exists only to call the bounded mechanized TemporalRegime chain in lawful order and return explicit stage outputs without inventing new meaning, policy, or cross-regime behavior.**

Corollary rules:

- orchestrator is not source intake,
- orchestrator is not the execution surface,
- orchestrator is not the renderer,
- orchestrator is not a semantic layer,
- and orchestrator must not silently widen scope beyond the currently mechanized temporal chain.

If the orchestrator begins deciding what outputs mean, which regime should activate, or what support/symbolic posture should be applied, it has drifted.

---

## 3. Orchestrator definition

The first minimal orchestrator is a thin runtime execution seam.

Its current job is to:

- accept a bounded selected-source reference or equivalent narrow execution request,
- call the mechanized TemporalRegime operators in lawful order,
- preserve stage order,
- return explicit stage outputs,
- and expose failure honestly without erasing seam identity.

It is not responsible for:

- source upload or selection,
- UI hosting,
- plane rendering,
- semantic interpretation,
- support-regime admission,
- symbolic-regime routing,
- or review posture.

One-line summary:

**The minimal orchestrator runs the chain. It does not decide what the chain means.**

---

## 4. First lawful chain

The first lawful orchestrated chain is:

selected `.wav` source reference  
→ `IngestOp`  
→ `ClockAlignOp`  
→ `WindowOp`  
→ `TransformOp`

This chain must remain explicit.

The orchestrator should not silently:

- skip stages,
- merge stages,
- infer extra stages,
- or widen into post-transform support handling.

---

## 5. Input posture

The minimal orchestrator should accept only a bounded execution request.

At the current stage, that request should remain narrow enough to include things like:

- selected source reference
- optional declared runtime options needed by the active temporal chain

It should not require:

- support-regime objects
- symbolic-regime objects
- semantic review objects
- broad workflow packets
- mixed dashboard state

This note does not yet require a final request schema.
It only requires that orchestrator input remain narrow and honest.

---

## 6. Output posture

The minimal orchestrator should return explicit stage outputs from the current mechanized chain.

At the current stage, that means returning bounded outputs that make the chain inspectable, such as:

- `P0EmissionBundle`
- `P1EmissionBundle`
- `P2EmissionBundle[]`
- one or more `P3EmissionBundle` results, depending on selected execution mode

The output should remain:

- explicit
- stage-addressable
- non-semantic
- non-promotional
- directly inspectable

The orchestrator should not silently collapse stage outputs into one “smart result.”

One-line summary:

**The minimal orchestrator should return the chain as a chain, not as a hidden composite conclusion.**

---

## 7. Relationship to Source Intake Surface

The minimal orchestrator is not the Source Intake Surface.

The Source Intake Surface should:

- admit/select source
- expose bounded source reference

The minimal orchestrator should:

- accept that bounded source reference
- call the chain from it
- return stage outputs

One-line summary:

**Source Intake chooses the source. The minimal orchestrator runs the chain from that source.**

---

## 8. Relationship to Temporal Execution Surface

The minimal orchestrator is not the Temporal Execution Surface.

The Temporal Execution Surface should:

- trigger execution
- host stage selection
- host plane selection
- host inspection routing
- surface seam-local failures honestly

The minimal orchestrator should:

- execute the mechanized chain
- return stage outputs and seam-local results
- remain below hosting and inspection concerns

One-line summary:

**The execution surface hosts execution flow. The orchestrator performs chain calling.**

---

## 9. Relationship to PlaneRenderer

The minimal orchestrator is not the PlaneRenderer.

The orchestrator should not:

- render plane objects
- choose render style
- host charts
- infer display semantics

The renderer should remain a separate read-side seam.

---

## 10. Determinism rule

The first minimal orchestrator must preserve deterministic chain calling.

This means:

- same source reference
- same declared options
- same mechanized operator implementations

should yield the same bounded chain posture, subject to the already-declared operator laws.

The orchestrator must not introduce:

- hidden randomness
- hidden policy adaptation
- hidden fallback heuristics
- semantic reclassification

One-line summary:

**The minimal orchestrator must not become a hidden source of runtime drift.**

---

## 11. Failure posture

The minimal orchestrator may surface failure from the seams it calls, but it must preserve seam identity.

That means it may surface:

- ingest failure as ingest failure
- clock-align failure as clock-align failure
- window failure as window failure
- transform failure as transform failure

It must not flatten them into one generic “runtime failed” surface unless the original seam identity remains visible.

The minimal orchestrator may also have its own bounded failures, such as:

- malformed execution request
- impossible stage routing request
- absent selected source reference

These should remain orchestrator-owned rather than being blamed on lower seams.

---

## 12. Explicit non-goals

The first minimal orchestrator should **not** try to:

- manage source upload
- manage saved-source storage
- render planes
- classify semantic meaning
- activate SupportRegime
- activate SymbolicRegime
- perform review or consultation
- choose the “best” window or “best” transform result
- silently compress the chain into one answer object
- become a broad runtime framework

These are legitimate future pressures, but not lawful orchestrator scope now.

---

## 13. First implementation posture

The first implementation should remain thin.

That means:

- explicit ordered chain calls are acceptable
- explicit stage-return objects are acceptable
- low abstraction is acceptable
- direct readability is preferred over framework cleverness
- future generalization should be deferred unless a bounded packet justifies it

The current goal is:

**make the mechanized TemporalRegime chain callable as one bounded runtime path without collapsing source intake, execution hosting, rendering, and semantics into one seam.**

---

## 14. Future combinability rule

The minimal orchestrator should leave room for later combination with:

- richer execution surfaces
- additional plane sets
- future SupportRegime transitions
- future SymbolicRegime transitions

But recognized future combinability is not present authorization.

The first orchestrator should remain strictly inside the currently mechanized temporal chain.

---

## 15. Non-goals

This note does not yet define:

- final orchestrator architecture
- support-regime orchestration
- symbolic-regime orchestration
- distributed execution posture
- queueing / scheduling posture
- final app runtime shell
- or semantic runtime routing

Those require later bounded packets.

---

## 16. One-line operational summary

**Minimal Orchestrator Posture v0 defines the first thin runtime chain caller for the mechanized TemporalRegime path, keeping source intake, execution hosting, rendering, failure ownership, and semantics explicitly separate while the first runnable inspection stack is stabilized.**
