import ViewerModeShellFrame from "./ViewerModeShellFrame.jsx";

function AuditRow({ label, value }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "150px 1fr",
                gap: "10px",
                padding: "10px 0",
                borderBottom: "1px solid #243047",
            }}
        >
            <div
                style={{
                    color: "#64748b",
                    fontFamily: "'IBM Plex Mono', 'Cascadia Code', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </div>
            <div style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.55 }}>
                {value}
            </div>
        </div>
    );
}

export default function InspectionModeShell({ payload, onGoHome, onOpenLegacy }) {
    return (
        <ViewerModeShellFrame
            modeLabel="Inspection"
            modeTitle="Audit-facing mode shell"
            modeNote="Inspection mode is explicit forensics and audit posture. It remains a dedicated route and does not silently become the default top-level face again."
            payload={payload}
            onGoHome={onGoHome}
            onOpenLegacy={onOpenLegacy}
        >
            <div
                style={{
                    border: "1px solid #334155",
                    borderRadius: "14px",
                    padding: "14px",
                    background: "#111827",
                }}
            >
                <AuditRow label="inspection role" value="Dense audit-facing shell for structural questioning, replay/reconstruction visibility, and bounded operator review." />
                <AuditRow label="home boundary" value="Inspection does not replace the Home / Router shell and does not become the dense default top-level face." />
                <AuditRow label="semantic boundary" value="Layout density here does not imply truth, settlement, identity continuity, or canon posture." />
            </div>
        </ViewerModeShellFrame>
    );
}
