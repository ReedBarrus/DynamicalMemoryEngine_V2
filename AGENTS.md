# AGENTS.md

## Project posture

This repository follows a bounded, law-first development workflow.

Preserve:
- deterministic runtime honesty
- artifact and lineage honesty
- explicit layer boundaries
- replay honesty
- provenance-first inspection posture
- bounded workflow closure

Do not silently:
- redesign architecture
- change layer meaning
- change artifact meaning
- promote runtime/read-side outputs into canon/truth
- treat replay as restoration
- treat candidate/readiness/review surfaces as canon

## Working rules

- Prefer the smallest lawful patch.
- Stay inside the active seam and packet scope.
- Read touched files directly before making concrete implementation claims.
- Preserve names, contracts, and boundary posture unless the packet explicitly changes them.
- If a task reveals a real conflict, surface it explicitly instead of silently widening scope.
- Do not broaden scope just because a richer design is imaginable.
- Keep ambiguity visible when support is weak.

## Git and branch discipline

- Never work directly on `main`.
- Assume work happens on the currently checked out task branch.
- Do not create or delete branches unless explicitly asked.
- Do not force-push unless explicitly asked.
- Do not commit unless explicitly asked.
- Do not stage unrelated files.
- Respect `.gitignore` and do not re-introduce ignored generated outputs.

## File scope discipline

Unless explicitly requested, do not modify:
- root constitutional/governance notes
- repo placement/governance docs
- unrelated README banks
- generated output folders
- archival or preserved output artifacts

Modify only:
- files named in the active packet
- directly adjacent seam files when necessary and justified

## Testing and commands

- Run only the minimum commands needed to validate the active packet.
- Prefer narrow, seam-local tests over broad repo-wide runs unless the packet requests broader validation.
- Before running any destructive, broad, or stateful command, ask for confirmation unless explicitly authorized.

## Output expectations

When completing a task, summarize:
- what changed
- what was intentionally left unchanged
- what tests/commands were run
- what remains unclaimed
- any open conflicts or escalation points

## Escalation posture

Escalate instead of silently redesigning when you hit:
- contract conflict
- hidden dependency outside packet scope
- seam overmixing
- unclear boundary authority
- inability to complete the task honestly within current constraints