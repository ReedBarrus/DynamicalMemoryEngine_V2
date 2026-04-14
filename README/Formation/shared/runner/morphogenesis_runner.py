from __future__ import annotations
import argparse
import json
import re
from pathlib import Path
from typing import Any, Dict, Optional
import sys

try:
    import jsonschema
except ImportError:
    print("Please install jsonschema: pip install jsonschema", file=sys.stderr)
    raise

H1 = re.compile(r"^(#|##|###|####)\s+(.*)$", re.MULTILINE)

def load_json(path: Path) -> Dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))

def write_json(path: Path, obj: Dict[str, Any]) -> None:
    path.write_text(json.dumps(obj, indent=2), encoding="utf-8")

def load_schema(schemas_dir: Path, name: str) -> Dict[str, Any]:
    return load_json(schemas_dir / name)

def validate_json(instance: Dict[str, Any], schema: Dict[str, Any], base_uri: Path) -> None:
    registry = jsonschema.validators.validator_for(schema)
    resolver = jsonschema.RefResolver(base_uri=base_uri.as_uri() + "/", referrer=schema)
    registry(schema, resolver=resolver).validate(instance)

def append_jsonl(path: Path, obj: Dict[str, Any]) -> None:
    with path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(obj))
        f.write("\n")

def replace_section(markdown: str, section_anchor: str, new_text: str) -> str:
    lines = markdown.splitlines()
    start_idx = None
    start_level = None
    for i, line in enumerate(lines):
        m = H1.match(line)
        if m and m.group(2).strip() == section_anchor.strip():
            start_idx = i
            start_level = len(m.group(1))
            break
    if start_idx is None:
        raise ValueError(f"Section anchor not found: {section_anchor}")

    end_idx = len(lines)
    for j in range(start_idx + 1, len(lines)):
        m = H1.match(lines[j])
        if m and len(m.group(1)) <= start_level:
            end_idx = j
            break

    replacement = new_text.strip("\n").splitlines()
    new_lines = lines[:start_idx] + replacement + lines[end_idx:]
    return "\n".join(new_lines) + ("\n" if markdown.endswith("\n") else "")

def append_section(markdown: str, new_text: str) -> str:
    if not markdown.endswith("\n"):
        markdown += "\n"
    return markdown + "\n" + new_text.strip("\n") + "\n"

def apply_patch(live_surface_path: Path, response: Dict[str, Any]) -> None:
    if not response.get("mutated_live_surface"):
        return
    patch = response.get("live_surface_patch", {})
    mode = patch.get("mode", "no_mutation")
    if mode == "no_mutation":
        return

    current = live_surface_path.read_text(encoding="utf-8")
    if mode == "replace_section":
        section_anchor = patch["section_anchor"]
        new_text = patch["new_text"]
        updated = replace_section(current, section_anchor, new_text)
    elif mode == "append_section":
        updated = append_section(current, patch["new_text"])
    else:
        raise ValueError(f"Unsupported patch mode: {mode}")
    live_surface_path.write_text(updated, encoding="utf-8")

def update_subject_register(register_path: Path, update: Dict[str, Any]) -> None:
    reg = load_json(register_path)
    subject_id = update.get("subject_id")
    found = False
    for subj in reg.get("subjects", []):
        if subj.get("subject_id") == subject_id:
            for k, v in update.items():
                if k in {"subject_id"}:
                    continue
                subj[k] = v
            found = True
            break
    if not found:
        reg.setdefault("subjects", []).append(update)
    if update.get("next_active_subject_id"):
        reg["active_subject_id"] = update["next_active_subject_id"]
    write_json(register_path, reg)

def derive_next_role(response: Dict[str, Any], config: Dict[str, Any]) -> str:
    explicit = response.get("recommended_next_role")
    if explicit:
        return explicit
    state = response.get("state_after")
    return config["routing_defaults"].get(state, "constructor")

def build_pass_request(active_subject: Dict[str, Any], next_role: str, state_before: str, current_candidate_text: str, admin_transfer_note: str) -> Dict[str, Any]:
    return {
        "pass_id": active_subject.get("next_pass_id", "pass_auto"),
        "role": next_role,
        "active_subject_id": active_subject["subject_id"],
        "state_before": state_before,
        "purpose": f"Run {next_role} on active subject.",
        "scope": {
            "live_surface_path": active_subject["live_surface_path"],
            "section_anchor": active_subject["section_anchor"],
            "forbidden": active_subject.get("forbidden", [])
        },
        "inputs": {
            "current_candidate_text": current_candidate_text,
            "admin_transfer_note": admin_transfer_note,
            "policy_updates": active_subject.get("policy_updates", [])
        },
        "required_output_keys": []
    }

def read_latest_response(outbox_dir: Path) -> Optional[Path]:
    candidates = sorted(outbox_dir.glob("*_response.json"))
    return candidates[-1] if candidates else None

def run_benchmark(bench_path: Path) -> None:
    cases = load_json(bench_path)
    print(f"Loaded {len(cases)} gate benchmark cases.")
    for case in cases:
        print(f'- {case["case_id"]}: expect {case["expected_structural_gain_judgment"]} / {case["expected_decision"]} / {case["expected_next_layer"]}')

def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", required=True, help="Path to morphogenesis_runtime root")
    ap.add_argument("--response", help="Explicit role response json path to apply")
    ap.add_argument("--emit-next", action="store_true", help="Emit next request after applying response")
    ap.add_argument("--benchmark", action="store_true", help="Print starter benchmark cases")
    args = ap.parse_args()

    root = Path(args.root)
    cfg = load_json(root / "configs" / "runtime_config.json")
    paths = cfg["paths"]
    schemas_dir = root / paths["schemas_dir"]
    active_subject_json = root / paths["active_subject_json"]
    live_surface_md = root / paths["live_surface_md"]
    subject_register_json = root / paths["subject_register_json"]
    cycle_log_jsonl = root / paths["cycle_log_jsonl"]
    inbox_dir = root / paths["inbox_dir"]
    outbox_dir = root / paths["outbox_dir"]

    if args.benchmark:
        run_benchmark(root / paths["benchmarks_dir"] / "gate_benchmark_cases.json")
        return

    response_path = Path(args.response) if args.response else read_latest_response(outbox_dir)
    if response_path is None:
        print("No role response found.")
        sys.exit(1)

    response = load_json(response_path)
    role_response_schema = load_schema(schemas_dir, "role_response.schema.json")
    validate_json(response, role_response_schema, schemas_dir)

    role = response["role"]
    may_mutate = cfg["roles"][role].get("may_mutate_live_surface", False)
    if response.get("mutated_live_surface") and not may_mutate:
        raise ValueError(f"Role {role} is not allowed to mutate live surface")

    if response.get("mutated_live_surface"):
        apply_patch(live_surface_md, response)

    append_jsonl(cycle_log_jsonl, response["cycle_log_entry"])

    gate_decision = response.get("gate_decision")
    update = response.get("subject_register_update")
    if role == "auditor_gate":
        effective_update = None
        if gate_decision and isinstance(gate_decision, dict):
            effective_update = gate_decision.get("subject_register_update") or update
        else:
            effective_update = update
        if effective_update:
            update_subject_register(subject_register_json, effective_update)

    print(f"Applied response: {response_path.name}")

    if args.emit_next:
        active_subject = load_json(active_subject_json)
        current_candidate_text = live_surface_md.read_text(encoding="utf-8")
        next_role = derive_next_role(response, cfg)
        next_state = response["state_after"]
        admin_transfer_note = json.dumps({
            "active_subject_id": response["active_subject_id"],
            "role_completed": response["role"],
            "state_before": response["state_before"],
            "state_after": response["state_after"],
            "accepted_changes": response.get("accepted_changes", []),
            "rejected_changes": response.get("rejected_changes", []),
            "live_tensions": response.get("live_tensions", []),
            "recommended_next_role": response.get("recommended_next_role")
        }, indent=2)
        req = build_pass_request(active_subject, next_role, next_state, current_candidate_text, admin_transfer_note)
        pass_request_schema = load_schema(schemas_dir, "pass_request.schema.json")
        validate_json(req, pass_request_schema, schemas_dir)
        out_path = inbox_dir / f"{next_role}_request.json"
        write_json(out_path, req)
        print(f"Emitted next request: {out_path}")

if __name__ == "__main__":
    main()
