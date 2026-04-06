# Cleanup Queue

This folder contains architecturally valid but not yet mechanized or enforced specifications.

Each item must resolve one of the following before promotion:

- Mechanization gap (code does not support it yet)
- Instrumentation gap (cannot be audited yet)
- Boundary clarity gap (layer ownership not finalized)

## Active Items

- Resolution Path Equivalence (QueryOp dependency)
- Semantic Triad Consolidation (Claude feedback alignment)

## Promotion Criteria

An item may move to core/ or operator-level documentation when:

- It is fully checkable
- It does not rely on hidden reconstruction
- It respects layer authority boundaries