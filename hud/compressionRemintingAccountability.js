"use strict";

import { deriveOperatorThresholdPosture, deriveOperatorWeakStateDiscipline } from "./replayThresholdFidelityPosture.js";
import { deriveStructuralIdentityPosture } from "./structuralIdentityPosture.js";

function safeArray(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [];
}

function supportBasisLabel(replay) {
    const basis = safeArray(replay?.replay_fidelity_record_v0?.support_basis ?? replay?.support_basis);
    return basis.length > 0 ? basis.join(", ") : "bounded support only";
}

function reconstructionClass(replay) {
    return replay?.replay_fidelity_record_v0?.reconstruction_class
        ?? replay?.reconstruction_summary?.reconstruction_class
        ?? replay?.reconstruction_class
        ?? null;
}

function unresolvedAccountability(note, lawfulNextPosture = "defer") {
    return {
        classCode: "unresolved",
        classLabel: "unresolved",
        chipCode: "unresolved",
        accountabilityBasis: note,
        whatSurvived: "No accountable preservation or reminting route is yet active.",
        whatDegraded: "Accountability remains open because active support or reconstruction basis is not yet present.",
        notPreserved: "Direct preservation, reminting accountability, and replay legitimacy all remain unresolved.",
        lawfulNextPosture,
        note,
    };
}

export function deriveCompressionRemintingAccountability({
    objectKind = "replay",
    hasActiveResult = false,
    workbench = null,
    replay = null,
} = {}) {
    if (objectKind === "retained_signature") {
        if (!hasActiveResult || !workbench) {
            return unresolvedAccountability(
                "No active retained object is present yet, so compression/reminting accountability remains unresolved."
            );
        }

        const h1Count = Number(workbench?.runtime?.artifacts?.h1s?.length ?? 0) || 0;
        const m1Count = Number(workbench?.runtime?.artifacts?.m1s?.length ?? 0) || 0;

        if (m1Count > 0) {
            return {
                classCode: "compressed_retained",
                classLabel: "compressed_retained",
                chipCode: "compressed_retained",
                accountabilityBasis: `Merged retained states are present (H1 ${h1Count} -> M1 ${m1Count}), so this object is preserved through a declared merge/compression path rather than direct one-to-one retention.`,
                whatSurvived: `Compressed retained structure survives as ${m1Count} M1 states under the active merge/compression path.`,
                whatDegraded: "Direct one-to-one structural detail is compressed relative to the upstream H1 path.",
                notPreserved: "Compressed retention is not direct preservation of every upstream structural distinction.",
                lawfulNextPosture: "keep",
                note: "This object is compressed-retained. Compression convenience does not prove stronger continuity than the surviving retained support actually carries.",
            };
        }

        if (h1Count > 0) {
            return {
                classCode: "directly_retained",
                classLabel: "directly_retained",
                chipCode: "directly_retained",
                accountabilityBasis: `Only direct structural support survives (H1 ${h1Count}, M1 ${m1Count}), so the active retained route is direct rather than merged/compressed retention.`,
                whatSurvived: "Direct structural states survive without a stronger merged retained signature.",
                whatDegraded: "Compressed-retained support did not form at this seam.",
                notPreserved: "No reminted or reconstructed accountability claim is justified from this object alone.",
                lawfulNextPosture: "narrow",
                note: "This object preserves direct structural support, but not a stronger compressed-retained closure.",
            };
        }

        return {
            classCode: "degraded_residue",
            classLabel: "degraded_residue",
            chipCode: "degraded_residue",
            accountabilityBasis: "Retained structural survival has fallen below a stronger direct or compressed retention claim at this seam.",
            whatSurvived: "Inspectable residue only.",
            whatDegraded: "Direct retention and compressed retention both weakened below stronger accountability posture.",
            notPreserved: "No stronger preservation-bearing retention claim remains lawful.",
            lawfulNextPosture: "downgrade",
            note: "Residual structure remains, but retention accountability has degraded below stronger preservation language.",
        };
    }

    if (!replay) {
        return unresolvedAccountability(
            objectKind === "reconstruction"
                ? "No reconstruction-support object is active yet, so reminting accountability remains unresolved."
                : "No replay-support object is active yet, so compression/reminting accountability remains unresolved."
        );
    }

    const threshold = deriveOperatorThresholdPosture(replay);
    const discipline = deriveOperatorWeakStateDiscipline(replay);
    const identity = deriveStructuralIdentityPosture(replay, { objectKind });
    const supportBasis = supportBasisLabel(replay);
    const compressionSurvival = replay?.threshold_posture?.compression_survival ?? "not_declared";
    const distortionPosture = replay?.threshold_posture?.distortion_posture ?? "not_declared";

    if (threshold.classCode === "unresolved" || identity.outcomeCode === "unresolved") {
        return {
            classCode: "unresolved",
            classLabel: "unresolved",
            chipCode: "unresolved",
            accountabilityBasis: `Support basis ${supportBasis} does not yet justify a stronger preservation, reconstruction, or reminting accountability class.`,
            whatSurvived: `Some support remains available under ${supportBasis}.`,
            whatDegraded: `Compression survival ${compressionSurvival} and distortion posture ${distortionPosture} do not yet justify a stronger accountability reading.`,
            notPreserved: "Direct preservation or reminted continuity is not yet justified.",
            lawfulNextPosture: discipline.nextActionCode === "review_required" ? "review_required" : "defer",
            note: "Accountability remains unresolved rather than silently rounding weak support into preservation comfort.",
        };
    }

    if (["failed", "insufficient", "degraded"].includes(threshold.classCode) || ["broken", "degraded"].includes(identity.outcomeCode)) {
        return {
            classCode: "degraded_residue",
            classLabel: "degraded_residue",
            chipCode: "degraded_residue",
            accountabilityBasis: `Support basis ${supportBasis} survives only in weakened form, so this object remains degraded residue rather than direct preservation, reminting success, or strong reconstruction continuity.`,
            whatSurvived: `Weak support survives under ${supportBasis}.`,
            whatDegraded: `Compression survival ${compressionSurvival} | distortion posture ${distortionPosture} | threshold ${threshold.classLabel}.`,
            notPreserved: "Weak or degraded support does not justify direct preservation or confident reminting language.",
            lawfulNextPosture: discipline.nextActionCode === "review_required" ? "review_required" : "downgrade",
            note: "This object remains accountability residue. Replay or reconstruction usefulness must not hide the weakened preservation path.",
        };
    }

    if (objectKind === "replay") {
        return {
            classCode: "replay_support_only",
            classLabel: "replay_support_only",
            chipCode: "replay_support_only",
            accountabilityBasis: `Replay remains a bounded support route under ${supportBasis}; it is not itself a direct retention or reminting event.`,
            whatSurvived: "Replayable support and lineage remain visible.",
            whatDegraded: `Compression survival ${compressionSurvival} and distortion posture ${distortionPosture} remain bounded to the declared replay seam.`,
            notPreserved: "Replay convenience does not prove direct preservation, compressed retention, or reminted identity.",
            lawfulNextPosture: identity.lawfulNextPosture,
            note: "Replay remains support-only. Compression convenience does not become continuity proof.",
        };
    }

    const reconClass = reconstructionClass(replay);
    if (reconClass === "derived_structural_reminting") {
        return {
            classCode: "reminted",
            classLabel: "reminted",
            chipCode: "reminted",
            accountabilityBasis: `Reconstruction class ${reconClass} declares a derived reminting path under ${supportBasis}, so this object is reminted rather than directly preserved.`,
            whatSurvived: "Enough structural support survived to permit a derived reminted object.",
            whatDegraded: `Compression survival ${compressionSurvival} | distortion posture ${distortionPosture} keep reminting distinct from direct preservation.`,
            notPreserved: "Reminted structure is not direct retention of the original object.",
            lawfulNextPosture: identity.lawfulNextPosture,
            note: "Reminting is visible and distinct from direct preservation. It must not silently read as the same object simply because it is coherent.",
        };
    }

    return {
        classCode: "reconstructed",
        classLabel: "reconstructed",
        chipCode: "reconstructed",
        accountabilityBasis: `support-trace reconstruction remains active under ${supportBasis}, so this object is reconstructed rather than directly retained or reminted.`,
        whatSurvived: "Enough retained support survives for support-trace reconstruction.",
        whatDegraded: `Compression survival ${compressionSurvival} | distortion posture ${distortionPosture} remain bounded and visible.`,
        notPreserved: "Reconstruction is not direct preservation of the original source object.",
        lawfulNextPosture: identity.lawfulNextPosture,
        note: "Reconstruction is support-trace accountability, not direct preservation and not reminting by default.",
    };
}
