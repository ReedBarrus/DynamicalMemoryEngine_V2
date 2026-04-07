import ViewerModeShellFrame from "./ViewerModeShellFrame.jsx";

function PostureColumn({ title, note }) {
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
            <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.55 }}>
                {note}
            </div>
        </div>
    );
}

export default function StaticModeShell({ payload, onGoHome, onOpenLegacy }) {
    return (
        <ViewerModeShellFrame
            modeLabel="Static"
            modeTitle="Bounded structural mode shell"
            modeNote="Static mode is for bounded objects, comparison, and provenance-forward reading without live pacing pressure."
            payload={payload}
            onGoHome={onGoHome}
            onOpenLegacy={onOpenLegacy}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                }}
            >
                <PostureColumn
                    title="Bounded object posture"
                    note="Static mode is not live playback paused. It is the shell for pre-rendered or stabilized structural objects and calm comparison."
                />
                <PostureColumn
                    title="Provenance-first reading"
                    note="Source and lineage stay visible here so a bounded static object is not mistaken for the active process itself."
                />
            </div>
        </ViewerModeShellFrame>
    );
}
