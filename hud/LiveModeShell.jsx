import ViewerModeShellFrame from "./ViewerModeShellFrame.jsx";

function SignalCard({ title, note }) {
    return (
        <div
            style={{
                border: "1px solid #334155",
                borderRadius: "14px",
                padding: "14px",
                background: "#111827",
            }}
        >
            <div style={{ color: "#e2e8f0", fontSize: "15px", fontWeight: 600, marginBottom: "6px" }}>
                {title}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.5 }}>
                {note}
            </div>
        </div>
    );
}

export default function LiveModeShell({ payload, onGoHome, onOpenLegacy }) {
    return (
        <ViewerModeShellFrame
            modeLabel="Live"
            modeTitle="Runtime-facing mode shell"
            modeNote="Live mode is timing-aware and runtime-facing. This shell reserves that posture now without pretending telemetry or rich motion rendering already exist."
            payload={payload}
            onGoHome={onGoHome}
            onOpenLegacy={onOpenLegacy}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "14px",
                }}
            >
                <SignalCard
                    title="Live identity"
                    note="Use this shell for runtime-facing viewing. Motion and pacing belong here later; they do not belong in Static or Inspection by implication."
                />
                <SignalCard
                    title="Telemetry honesty"
                    note="Telemetry is not yet implemented here. The shell only carries explicit placeholder posture so timing conditions are not faked or silently absorbed."
                />
                <SignalCard
                    title="Structural priority"
                    note="The shared structural payload remains primary. Live mode changes pacing and display posture, not the truth object."
                />
            </div>
        </ViewerModeShellFrame>
    );
}
