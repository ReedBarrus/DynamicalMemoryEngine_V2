# Dynamical Memory Engine — Workflow Field Primitives

## Status

This document defines the compressed workflow field for DME.

It is a supporting workflow-architecture note.

It does **not** override:

* `README.MasterConstitution.md`
* `README.WorkflowContract.md`
* `README.RepoLayout.md`

Its purpose is narrower:

* define the four macro verbs of the DME workflow,
* define the emitted object of each macro verb,
* define what each macro verb is forbidden to do,
* define downward recruitment logic,
* and provide one stable lens for mechanization, packet routing, and workflow redesign.

This note governs **workflow field primitives** only.

It does **not** govern:

* constitutional boundary posture,
* repo placement,
* operator-local semantics by itself,
* canon or promotion authority by itself.

---

## 1. Core thesis

DME workflow is best understood as a constrained field operating across four macro verbs:

1. **Admit**
2. **Form**
3. **Decide**
4. **Evaluate**

Each macro verb emits one bound object.

Each macro verb may recruit downward when insufficiency, noise, drift, distortion, or uncertainty prevent lawful forward movement.

The workflow therefore conserves constraint-bearing identity by transforming it into progressively more stable, reusable, and governable objects.

---

## 2. Global invariant

The minimum workflow invariant is:

**No workflow step may destroy, replace, or silently inflate the active constraint-bearing identity inherited from admitted reality.**

At minimum, the workflow must conserve physics-induced constraint as the ground of useful meaning.

---

## 3. Macro verbs

## 3.1 Admit

### Internal phases

* Ingest
* Align
* Parse
* optional explicit handle: Orient

### Emitted object

**Bound work object**

This object contains:

* admitted reality source,
* active seam,
* scoped working unit,
* governing constraint posture.

### Function

Admit brings reality into the workflow through a bounded aperture, stabilizes it against current constraints, and binds it into the first workable unit.

### Forbidden

Admit must not:

* define structural identity,
* choose action,
* interpret meaning,
* settle truth,
* silently widen scope,
* import deferred-layer semantics.

### Downward recruitment

Admit is the floor.

When it fails, it does not recruit to a lower macro verb.
It either:

* tightens admission,
* narrows scope,
* or aborts and restarts from reality.

---

## 3.2 Form

### Internal phases

* Structure
* Compress
* Aggregate
* optional explicit handle: Identify

### Emitted object

**Identity object**

This object contains:

* structural invariance,
* compressed load-bearing form,
* relational placement among neighboring identities.

### Function

Form reveals, stabilizes, reduces, and relates identity so that admitted reality becomes a reusable structural object.

### Forbidden

Form must not:

* semantically weight the object,
* choose action,
* settle truth,
* collapse recurrence into legitimacy,
* collapse provisional identity-support into unconditional identity.

### Downward recruitment

Form recruits to Admit when identity failure is actually admission failure.

Examples:

* malformed working unit,
* bad aperture,
* bad scope,
* bad admission policy,
* unstable structure caused by upstream overload.

---

## 3.3 Decide

### Internal phases

* Frame / Query
* Reflect / Explore
* Propose
* Implement

### Emitted object

**Decision object**

This object contains:

* bounded selected candidate,
* realized state change.

### Function

Decide constrains the navigable identity field, explores candidates, selects one bounded path, and mutates state.

### Forbidden

Decide must not:

* invent identity from scratch,
* mutate without a bounded candidate,
* silently widen scope,
* treat proposal as approval,
* let query act as truth,
* preserve ambiguity after implementation.

### Downward recruitment

Decide recruits first to Form when:

* no stable identity object exists,
* the decision surface cannot be constrained,
* the candidate field is too unstable or dense,
* the proposal contradicts preserved invariance.

It recruits to Admit only when the deeper failure is actually malformed reality admission.

---

## 3.4 Evaluate

### Internal phases

* Audit
* Review
* Reconcile
* Resolve
* conditional branches: Reconstruct, Promote

### Emitted object

**Evaluation object**

This object contains:

* measured deviation/fidelity posture,
* reintegrated active state,
* routed workflow outcome.

### Function

Evaluate measures the result, interprets its significance, folds it back into continuity, and routes the final outcome.

### Forbidden

Evaluate must not:

* redefine structural identity retroactively,
* let review contaminate primary structure,
* collapse coherence into truth,
* collapse recurrence into canon,
* silently upgrade outcome into authority,
* treat promotion as routine runtime closure.

### Downward recruitment

Evaluate recruits first to Decide when:

* the proposal path was wrong,
* the implementation mismatched the bounded candidate,
* the decision object cannot be honestly sustained.

It recruits to Form when evaluation reveals unstable or false identity assumptions.

It recruits to Admit only when the original source/scope/policy was malformed.

---

## 4. Optional handles

The following are lawful explicit handles even if they are not required as core transform phases.

### 4.1 Orient

Admission-side explicit policy handle.

Useful when the system must expose:

* source family,
* pass type,
* or governing policy explicitly for programming, comparison, or audit.

### 4.2 Identify

Form-side explicit identity handle.

Useful when the system must expose:

* a named identity surface,
* a discrete identity checkpoint,
* or a programmatic identity object for comparison and reuse.

---

## 5. Conditional branches

### 5.1 Reconstruct

Conditional evaluation-side replay/comparison generator.

Used when expected or prior-comparable state must be explicitly regenerated before audit.

### 5.2 Promote

Deferred elevation branch only.

Promotion remains:

* separate from runtime closure,
* gated,
* and governed by higher-layer authority.

It is not part of the always-active workflow floor.

---

## 6. Always-active floor

The always-active workflow floor is:

* Admit
* Form
* Decide
* Evaluate

These four macro verbs are always active.

Handles and branches may be activated only when needed by the seam, the implementation, or the declared closure target.

---

## 7. Workflow anti-drift rule

Every workflow pass must leave behind exactly one emitted object at its current macro verb, or explicitly recruit downward.

No pass may move forward without:

* a bound work object,
* an identity object,
* a decision object,
* or an evaluation object,

depending on the current verb.

If the object does not exist, the pass is incomplete and must either:

* continue inside the same macro verb,
* recruit downward,
* defer,
* or abort.

---

## 8. One-line summary

DME workflow conserves constraint-bearing identity through four macro verbs—Admit, Form, Decide, and Evaluate—each emitting a bound object, forbidding specific authority errors, and recruiting downward when lawful forward movement is no longer possible.
