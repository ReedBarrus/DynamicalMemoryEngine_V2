# Dynamical Memory Engine — Repo Layout

Live Repo State:
https://github.com/ReedBarrus/DynamicalMemoryEngine_V2

## Status

This document is the placement authority for DME.

It governs only:

- current repo zones
- root authority files
- placement rules
- active-vs-non-active repo structure

It does not govern:

- constitutional boundaries
- workflow procedure
- operator semantics
- artifact meaning by itself

The live repo is the authority for current file and folder reality.

If this document and live repo state conflict about what currently exists, live repo state wins.

If repo layout and constitution conflict on boundary posture, constitution wins.

If repo layout and workflow conflict on movement procedure, workflow wins.

---

## 1. Layout function

This document exists only to answer:

- what top-level zones currently exist
- what each zone is for
- what root files are authoritative
- where new files should go
- what must not cohabit

Nothing else belongs here.

---

## 2. Current top-level zones

Current top-level repo zones are:

- `.codex/`
- `.github/`
- `.local/`
- `README/`
- `app/`
- `execution/`
- `operators/`
- `planes/`
- `scripts/`
- `test_signal/`
- `types/`
- `validators/`

If a zone is not present in the live repo, it is not part of current layout reality.

---

## 3. Root authority files

Current root authority files are:

- `README.MasterConstitution.md`
- `README.WorkflowContract.md`
- `README.RepoLayout.md`

Other root files may exist, but they are not root authority by default.

Archived, transitional, or redundant root files should not be treated as authority merely because they remain present.

---

## 4. Zone roles

### `README/`
Documentation bank only.

### `app/`
Browser-facing app shell only.

### `execution/`
Execution-facing runtime support only.

### `operators/`
Runtime operator implementation only.

### `planes/`
Read-side projection only.

### `types/`
Shape definitions only.

### `validators/`
Contract enforcement only.

### `scripts/`
Bounded helper scripts only.

### `test_signal/`
Input fixtures and source-side tests only.

### `.codex/`
Codex/tooling configuration only.

### `.github/`
GitHub automation/configuration only.

### `.local/`
Local machine artifacts only.
Not authority.
Not portable repo structure.

---

## 5. Placement rules

### Rule 1
Runtime operators stay in `operators/`.

### Rule 2
Read-side projections stay in `planes/`.

### Rule 3
Validators stay in `validators/`.

### Rule 4
Shared shapes stay in `types/`.

### Rule 5
Execution-facing seams stay in `execution/`.

### Rule 6
Browser-facing shell code stays in `app/`.

### Rule 7
Helper scripts stay in `scripts/`.

### Rule 8
Fixtures stay in `test_signal/`.

### Rule 9
Documentation stays in `README/`.

### Rule 10
Local machine artifacts do not become repo authority.

---

## 6. README root regime split

Inside `README/`, the first classification question is:

- boundary
- movement
- placement

README branches should derive from one of these three root regimes unless explicitly mixed.

If a README is mixed, that mixed role must be explicit.

---

## 7. Active reality rule

This document describes current repo reality, not ideal future layout.

If a folder is planned but not present, it is not active layout.

If a file remains present but no longer carries active authority, that must be stated elsewhere and should eventually be cleaned up.

---

## 8. One-line summary

Repo Layout defines the current placement grammar of the live repo, with live repo state winning for what currently exists and root authority limited to boundary, movement, and placement anchors.