from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[3]
if str(REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(REPO_ROOT))

from Transformer.LanguageKernel.validator.language_kernel_validator_v0 import (  # noqa: E402
    ROOT as SCHEMA_ROOT,
    SchemaResolver,
    ValidationError,
    validate_instance,
)


ALLOWED_PANEL_MODELS = (
    "Hermes 3 Llama 3.2 3B",
    "Meta Llama 3.1 8B Instruct",
)
OPERATION_MODES = (
    "contract_conformance_mode",
    "bounded_review_mode",
    "recursive_continuity_mode",
)
FIXTURE_RESPONSES = (
    (
        REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "raw_response.first_run.txt",
        "Hermes 3 Llama 3.2 3B",
        "contract_conformance_mode",
        REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "response_receipt.first_run.manual.json",
    ),
    (
        REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "raw_response.second_run.txt",
        "Meta Llama 3.1 8B Instruct",
        "contract_conformance_mode",
        REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "response_receipt.second_run.manual.json",
    ),
    (
        REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "raw_respone.third_and_final_manual_run.txt",
        "Meta Llama 3.1 8B Instruct",
        "contract_conformance_mode",
        REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "response_receipt.third_run.manual.json",
    ),
)


@dataclass
class Classification:
    response_status: str
    parse_status: str
    schema_status: str
    frame_count: int
    frame_ids: list[str]
    legal_claim_present: bool | None
    what_next_present: bool | None
    receiver_flags: list[str]
    conformance_outcome: str
    receiver_notes: list[str]
    refusal_reason: str | None = None


def sha256_hex(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")


def raw_decode_json(text: str) -> tuple[Any | None, str, bool]:
    stripped = text.strip()
    if not stripped:
        return None, "non_json", False
    decoder = json.JSONDecoder()
    try:
        payload, index = decoder.raw_decode(stripped)
    except json.JSONDecodeError:
        return None, ("json_error" if stripped[:1] in "{[" else "non_json"), False
    trailing = stripped[index:].strip()
    if trailing:
        return payload, "partial_json", True
    return payload, "parsed", False


def is_metadata_summary_pseudo_frame(frame: dict[str, Any]) -> bool:
    metadata_keys = {"kernel_contract_version", "export_packet_id", "declared_lens", "support_tier", "artifact_count", "row"}
    return any(key in frame for key in metadata_keys)


def has_exact_legal_claim(frame: dict[str, Any]) -> bool:
    return (
        frame.get("legal_claim")
        == "Bounded interpretation overlay only. No canon authority. Not structural truth. Read-side recursion experiment."
    )


def has_exact_what_next(frame: dict[str, Any]) -> bool:
    return (
        frame.get("what_next")
        == "Await explicit operator request for next recursion turn or new retained signature reference."
    )


def is_near_valid_incomplete(frame: dict[str, Any]) -> bool:
    required_near_valid_keys = {"frame_id", "legal_claim", "non_claims", "reasoning_overlay", "what_next"}
    return required_near_valid_keys.issubset(frame.keys()) and has_exact_legal_claim(frame) and has_exact_what_next(frame)


def split_lawful_frame_ids(frame_ids: list[str]) -> tuple[list[str], list[str]]:
    lawful_ids: list[str] = []
    nonconformant_ids: list[str] = []
    for frame_id in frame_ids:
        if re.fullmatch(r"LF:[A-Za-z0-9._:-]+", frame_id):
            lawful_ids.append(frame_id)
        else:
            nonconformant_ids.append(frame_id)
    return lawful_ids, nonconformant_ids


def classify_payload(raw_text: str, payload: Any, parse_status: str, extra_prose: bool, resolver: SchemaResolver) -> Classification:
    flags = ["json_only_expected"]
    notes: list[str] = []
    reasoning_schema = resolver.load_json(SCHEMA_ROOT / "reasoning_frame.schema.json")

    if not raw_text.strip():
        return Classification(
            response_status="empty",
            parse_status="non_json",
            schema_status="not_checked",
            frame_count=0,
            frame_ids=[],
            legal_claim_present=None,
            what_next_present=None,
            receiver_flags=flags,
            conformance_outcome="aborted_empty_first_turn_output",
            receiver_notes=["Raw response was empty on first turn."],
            refusal_reason="empty first-turn output",
        )

    if payload is None:
        notes.append("Response did not decode into a usable JSON object.")
        return Classification(
            response_status="received",
            parse_status=parse_status,
            schema_status="not_checked",
            frame_count=0,
            frame_ids=[],
            legal_claim_present=None,
            what_next_present=None,
            receiver_flags=flags,
            conformance_outcome="aborted_contract_failure",
            receiver_notes=notes,
            refusal_reason="response was not usable JSON",
        )

    if extra_prose:
        flags.append("extra_prose_leakage")
        notes.append("Extra prose leaked outside the JSON object.")

    if not isinstance(payload, dict) or "language_frames" not in payload:
        notes.append("Top-level payload did not contain the required language_frames field.")
        return Classification(
            response_status="received",
            parse_status=parse_status,
            schema_status="nonconformant",
            frame_count=0,
            frame_ids=[],
            legal_claim_present=None,
            what_next_present=None,
            receiver_flags=flags + ["schema_checked"],
            conformance_outcome="aborted_contract_failure",
            receiver_notes=notes,
            refusal_reason="top-level response shape was not the Language Kernel envelope",
        )

    frames_value = payload["language_frames"]
    if isinstance(frames_value, dict):
        flags.extend(["schema_checked", "nested_wrong_shape_output"])
        notes.append("language_frames contained a nested object instead of the required array.")
        nested_frames = frames_value.get("frames", []) if isinstance(frames_value.get("frames"), list) else []
        frame_ids = [frame.get("frame_id") for frame in nested_frames if isinstance(frame, dict) and isinstance(frame.get("frame_id"), str)]
        if not nested_frames:
            flags.append("empty_first_turn_frame_list")
            notes.append("Nested wrong-shape payload also carried an empty first-turn frame list.")
        outcome = "aborted_nested_wrong_shape_output"
        if extra_prose:
            notes.append("Wrong-shape envelope also leaked prose outside JSON.")
        return Classification(
            response_status="received",
            parse_status=parse_status,
            schema_status="nonconformant",
            frame_count=len(nested_frames),
            frame_ids=frame_ids,
            legal_claim_present=None,
            what_next_present=None,
            receiver_flags=flags,
            conformance_outcome=outcome,
            receiver_notes=notes,
            refusal_reason="nested wrong-shape language_frames envelope",
        )

    if not isinstance(frames_value, list):
        notes.append("language_frames was not an array.")
        return Classification(
            response_status="received",
            parse_status=parse_status,
            schema_status="nonconformant",
            frame_count=0,
            frame_ids=[],
            legal_claim_present=None,
            what_next_present=None,
            receiver_flags=flags + ["schema_checked"],
            conformance_outcome="aborted_contract_failure",
            receiver_notes=notes,
            refusal_reason="language_frames was not an array",
        )

    frame_count = len(frames_value)
    frame_ids = [frame.get("frame_id") for frame in frames_value if isinstance(frame, dict) and isinstance(frame.get("frame_id"), str)]
    flags.append("schema_checked")

    if frame_count == 0:
        flags.append("empty_first_turn_frame_list")
        notes.append("The response returned an empty language_frames list on first turn.")
        return Classification(
            response_status="received",
            parse_status=parse_status,
            schema_status="nonconformant",
            frame_count=0,
            frame_ids=[],
            legal_claim_present=None,
            what_next_present=None,
            receiver_flags=flags,
            conformance_outcome="aborted_empty_first_turn_frame_list",
            receiver_notes=notes,
            refusal_reason="empty language_frames list on first turn",
        )

    legal_claim_present = all(isinstance(frame, dict) and has_exact_legal_claim(frame) for frame in frames_value)
    what_next_present = all(isinstance(frame, dict) and has_exact_what_next(frame) for frame in frames_value)

    if not legal_claim_present:
        flags.append("fixed_string_failure")
        flags.append("legal_claim_missing")
    if not what_next_present:
        flags.append("fixed_string_failure")
        flags.append("what_next_missing")

    for frame in frames_value:
        if isinstance(frame, dict) and is_metadata_summary_pseudo_frame(frame):
            flags.append("metadata_summary_pseudo_frame")
            notes.append("Frame content looked like export metadata summary rather than a reasoning frame.")
            return Classification(
                response_status="received",
                parse_status=parse_status,
                schema_status="nonconformant",
                frame_count=frame_count,
                frame_ids=frame_ids,
                legal_claim_present=legal_claim_present,
                what_next_present=what_next_present,
                receiver_flags=sorted(set(flags)),
                conformance_outcome="aborted_metadata_summary_pseudo_frame",
                receiver_notes=notes,
                refusal_reason="metadata summary pseudo-frame",
            )

    valid_frames = True
    for frame in frames_value:
        if not isinstance(frame, dict):
            valid_frames = False
            notes.append("At least one frame was not an object.")
            break
        try:
            validate_instance(frame, reasoning_schema, SCHEMA_ROOT / "reasoning_frame.schema.json", resolver)
        except ValidationError as exc:
            valid_frames = False
            notes.append(str(exc))
            break

    if valid_frames and parse_status == "parsed":
        flags.extend(["parsed_cleanly", "schema_checked"])
        outcome = "contract_conformant" if not extra_prose else "aborted_extra_prose_leakage"
        if extra_prose:
            return Classification(
                response_status="received",
                parse_status="partial_json",
                schema_status="nonconformant",
                frame_count=frame_count,
                frame_ids=frame_ids,
                legal_claim_present=legal_claim_present,
                what_next_present=what_next_present,
                receiver_flags=sorted(set(flags)),
                conformance_outcome=outcome,
                receiver_notes=notes,
                refusal_reason="extra prose leaked outside otherwise conformant JSON",
            )
        return Classification(
            response_status="received",
            parse_status="parsed",
            schema_status="conformant",
            frame_count=frame_count,
            frame_ids=frame_ids,
            legal_claim_present=legal_claim_present,
            what_next_present=what_next_present,
            receiver_flags=sorted(set(flags)),
            conformance_outcome="contract_conformant",
            receiver_notes=["Response parsed cleanly and satisfied the reasoning frame contract."],
        )

    if not legal_claim_present or not what_next_present:
        notes.append("One or more fixed literal fields were missing or paraphrased.")
        return Classification(
            response_status="received",
            parse_status=parse_status,
            schema_status="nonconformant",
            frame_count=frame_count,
            frame_ids=frame_ids,
            legal_claim_present=legal_claim_present,
            what_next_present=what_next_present,
            receiver_flags=sorted(set(flags)),
            conformance_outcome="aborted_fixed_string_failure",
            receiver_notes=notes,
            refusal_reason="fixed literal failure",
        )

    if all(isinstance(frame, dict) and is_near_valid_incomplete(frame) for frame in frames_value):
        flags.append("near_valid_incomplete_frame")
        notes.append("Frames preserved exact literals but still missed required contract fields.")
        return Classification(
            response_status="received",
            parse_status=parse_status,
            schema_status="nonconformant",
            frame_count=frame_count,
            frame_ids=frame_ids,
            legal_claim_present=legal_claim_present,
            what_next_present=what_next_present,
            receiver_flags=sorted(set(flags)),
            conformance_outcome="downgraded_near_valid_incomplete_frame",
            receiver_notes=notes,
        )

    flags.append("partial_frame_conformance")
    notes.append("Frames remained partially formed but did not satisfy the full reasoning frame contract.")
    return Classification(
        response_status="received",
        parse_status=parse_status,
        schema_status="nonconformant",
        frame_count=frame_count,
        frame_ids=frame_ids,
        legal_claim_present=legal_claim_present,
        what_next_present=what_next_present,
        receiver_flags=sorted(set(flags)),
        conformance_outcome="downgraded_partial_frame_conformance",
        receiver_notes=notes,
    )


def build_receipt(
    response_file: Path,
    prompt_file: Path,
    export_packet_file: Path,
    model_name: str,
    provider: str,
    operation_mode: str,
    prompt_receipt_id: str | None = None,
    kernel_run_id: str | None = None,
    response_receipt_id: str | None = None,
) -> dict[str, Any]:
    resolver = SchemaResolver()
    raw_text = response_file.read_text(encoding="utf-8")
    prompt_text = prompt_file.read_text(encoding="utf-8")
    export_packet = load_json(export_packet_file)
    payload, parse_status, extra_prose = raw_decode_json(raw_text)
    classification = classify_payload(raw_text, payload, parse_status, extra_prose, resolver)

    stem = response_file.stem.replace("raw_response.", "").replace("raw_respone.", "").replace(".", "_")
    kernel_run_id = kernel_run_id or f"KR:manual:{stem}"
    prompt_receipt_id = prompt_receipt_id or f"PR:manual:{stem}"
    response_receipt_id = response_receipt_id or f"RR:manual:{stem}"

    receipt: dict[str, Any] = {
        "response_receipt_id": response_receipt_id,
        "receiver_version": "v0.1",
        "kernel_contract_version": export_packet["kernel_contract_version"],
        "kernel_run_id": kernel_run_id,
        "export_packet_id": export_packet["export_packet_id"],
        "prompt_receipt_id": prompt_receipt_id,
        "provider": provider,
        "model_name": model_name,
        "declared_lens": export_packet["declared_lens"],
        "query_class": export_packet["query_class"],
        "claim_class_ceiling": export_packet["claim_class_ceiling"],
        "legal_posture": "Read-side Language Kernel response only. No canon authority. Not structural truth. Not primary retention substance.",
        "raw_response_hash_sha256": sha256_hex(raw_text),
        "raw_response_bytes": len(raw_text.encode("utf-8")),
        "response_status": classification.response_status,
        "parse_status": classification.parse_status,
        "schema_status": classification.schema_status,
        "frame_count": classification.frame_count,
        "receiver_flags": classification.receiver_flags or ["json_only_expected"],
        "conformance_outcome": classification.conformance_outcome,
        "receiver_notes": [
            f"operation_mode={operation_mode}",
            f"prompt_sha256={sha256_hex(prompt_text)}",
            *classification.receiver_notes,
        ],
        "received_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
    }

    if classification.frame_ids:
        lawful_frame_ids, nonconformant_frame_ids = split_lawful_frame_ids(classification.frame_ids)
        if lawful_frame_ids:
            receipt["frame_ids"] = lawful_frame_ids
        if nonconformant_frame_ids:
            receipt["receiver_notes"].append(
                "Nonconformant frame identifiers observed in raw model output: "
                + ", ".join(nonconformant_frame_ids)
            )
    if classification.legal_claim_present is not None:
        receipt["legal_claim_present"] = classification.legal_claim_present
    if classification.what_next_present is not None:
        receipt["what_next_present"] = classification.what_next_present
    if classification.refusal_reason:
        receipt["refusal_reason"] = classification.refusal_reason

    response_schema = resolver.load_json(SCHEMA_ROOT / "response_receipt.schema.json")
    validate_instance(receipt, response_schema, SCHEMA_ROOT / "response_receipt.schema.json", resolver)
    return receipt


def build_panel_summary(receipts: list[dict[str, Any]]) -> dict[str, Any]:
    return {
        "panel_models": list(ALLOWED_PANEL_MODELS),
        "active_operation_modes": [
            "contract_conformance_mode",
            "bounded_review_mode",
        ],
        "deferred_operation_modes": [
            "recursive_continuity_mode",
        ],
        "classified_runs": [
            {
                "model_name": receipt["model_name"],
                "response_receipt_id": receipt["response_receipt_id"],
                "conformance_outcome": receipt["conformance_outcome"],
                "response_status": receipt["response_status"],
                "schema_status": receipt["schema_status"],
            }
            for receipt in receipts
        ],
    }


def run_smoke_tests() -> int:
    failures = 0
    receipts: list[dict[str, Any]] = []
    prompt_file = REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "prompt.first_run.txt"
    export_packet_file = REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "export_packet.first_run.json"
    for response_file, model_name, operation_mode, output_file in FIXTURE_RESPONSES:
        try:
            receipt = build_receipt(
                response_file=response_file,
                prompt_file=prompt_file,
                export_packet_file=export_packet_file,
                model_name=model_name,
                provider="ollama",
                operation_mode=operation_mode,
            )
            write_json(output_file, receipt)
            receipts.append(receipt)
        except Exception as exc:
            failures += 1
            print(f"[FAIL] local-model-conformance: {response_file.name} -> {exc}")
        else:
            print(f"[PASS] local-model-conformance: {response_file.name} -> {output_file}")

    if receipts:
        summary_path = REPO_ROOT / "Transformer" / "LanguageKernel" / "outputs" / "local_model_panel_summary.v0.json"
        write_json(summary_path, build_panel_summary(receipts))
        print(f"[PASS] local-model-conformance: panel summary -> {summary_path}")

    return 1 if failures else 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Classify local-model Language Kernel raw responses into bounded response receipts.")
    subparsers = parser.add_subparsers(dest="command")

    classify_parser = subparsers.add_parser("classify", help="Classify one raw response file and emit a response receipt.")
    classify_parser.add_argument("--response-file", required=True)
    classify_parser.add_argument("--prompt-file", required=True)
    classify_parser.add_argument("--export-packet-file", required=True)
    classify_parser.add_argument("--model-name", required=True, choices=ALLOWED_PANEL_MODELS)
    classify_parser.add_argument("--provider", default="ollama")
    classify_parser.add_argument("--operation-mode", required=True, choices=OPERATION_MODES)
    classify_parser.add_argument("--output", required=True)
    classify_parser.add_argument("--prompt-receipt-id", default=None)
    classify_parser.add_argument("--kernel-run-id", default=None)
    classify_parser.add_argument("--response-receipt-id", default=None)

    subparsers.add_parser("smoke-test", help="Classify the current stored manual-loop responses.")
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command == "classify":
        receipt = build_receipt(
            response_file=Path(args.response_file).resolve(),
            prompt_file=Path(args.prompt_file).resolve(),
            export_packet_file=Path(args.export_packet_file).resolve(),
            model_name=args.model_name,
            provider=args.provider,
            operation_mode=args.operation_mode,
            prompt_receipt_id=args.prompt_receipt_id,
            kernel_run_id=args.kernel_run_id,
            response_receipt_id=args.response_receipt_id,
        )
        write_json(Path(args.output).resolve(), receipt)
        print(json.dumps(receipt, indent=2))
        return 0

    if args.command == "smoke-test":
        return run_smoke_tests()

    parser.print_help()
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
