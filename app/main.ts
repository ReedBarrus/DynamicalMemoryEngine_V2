import "./shell_host_v0.css";
import {
    LOCAL_HOST_BRIDGE_BASE_URL,
    handoffBrowserFileThroughHostBridgeV0,
    runThroughHostBridgeV0,
    type BrowserFileHandoffSuccessV0,
    type LocalHostBridgeRunSuccessV0,
    type RoutedBridgeFailureV0,
    type ShellBridgeCallFailureV0,
} from "./local_host_bridge_client_v0.ts";

type SourceInteractionKindV0 = "drag_and_drop" | "file_picker";
type StatusToneV0 = "neutral" | "busy" | "success" | "failure";
type RegimeIdV0 = "temporal" | "support" | "symbolic";
type OperatorIdV0 = "P0" | "P1" | "P2" | "P3" | "D3";
type PlaneModeIdV0 = "direct_temporal" | "re" | "im" | "both" | "magnitude" | "phase";

interface ShellStatusCardV0 {
    tone: StatusToneV0;
    title: string;
    detail: string;
    seam?: string;
    code?: string;
}

interface ShellViewStateV0 {
    activeRegimeId: RegimeIdV0;
    selectedOperatorId: OperatorIdV0;
    selectedFrameIndex: number;
    frameValidationMessage: string | null;
    selectedPlaneModeId: PlaneModeIdV0;
    planeValidationMessage: string | null;
    selectedSource: BrowserFileHandoffSuccessV0 | null;
    sourceInteractionKind: SourceInteractionKindV0 | null;
    sourceStatus: ShellStatusCardV0;
    runStatus: ShellStatusCardV0;
    lastRunResult: LocalHostBridgeRunSuccessV0 | null;
    latestFailure: RoutedBridgeFailureV0 | ShellBridgeCallFailureV0 | null;
    hasRunAttempted: boolean;
    isUploading: boolean;
    isRunning: boolean;
}

interface RegimeDescriptorV0 {
    id: RegimeIdV0;
    label: string;
    statusLabel: string;
    isActive: boolean;
}

interface OperatorDescriptorV0 {
    id: OperatorIdV0;
    label: string;
    summary: string;
    stage: "P0" | "P1" | "P2" | "P3" | "D3";
    isRuntimeTarget: boolean;
}

interface FrameExposureContextV0 {
    isAvailable: boolean;
    runtimeOperatorId: OperatorIdV0;
    runtimeFrameIndex: number | null;
    selectedFrameIndex: number | null;
    exposedFrameCount: number | null;
    globalContext: string;
    localContext: string;
    statusCard: ShellStatusCardV0;
}

interface PlaneModeDescriptorV0 {
    id: PlaneModeIdV0;
    label: string;
    summary: string;
}

interface PlaneModeExposureContextV0 {
    selectedModeId: PlaneModeIdV0;
    availableModes: PlaneModeDescriptorV0[];
    runtimePlaneClass: string;
    globalContext: string;
    localContext: string;
    statusCard: ShellStatusCardV0;
}

const FIXED_INSPECTION_REQUEST_V0 = {
    execution_mode: "run_now",
    run_options: {
        clock_align_options: {
            target_sample_rate_hz: 2000,
        },
        window_options: {
            window_length_n: 64,
            hop_n: 64,
        },
    },
    stage_selection: {
        stage: "P3",
        frame_index: 0,
    },
    plane_selection_request: {
        stage: "P3",
        plane_class: "PlaneP3SpectralView",
        frame_index: 0,
    },
} as const;

const REGIME_OPTIONS_V0: RegimeDescriptorV0[] = [
    { id: "temporal", label: "TemporalRegime", statusLabel: "Active", isActive: true },
    { id: "support", label: "SupportRegime", statusLabel: "Deferred", isActive: false },
    { id: "symbolic", label: "SymbolicRegime", statusLabel: "Deferred", isActive: false },
];

const OPERATOR_OPTIONS_V0: OperatorDescriptorV0[] = [
    {
        id: "P0",
        label: "P0 — Ingest",
        summary: "Source waveform intake into the temporal chain.",
        stage: "P0",
        isRuntimeTarget: false,
    },
    {
        id: "P1",
        label: "P1 — Clock Align",
        summary: "Clock-aligned primary frame preparation.",
        stage: "P1",
        isRuntimeTarget: false,
    },
    {
        id: "P2",
        label: "P2 — Window",
        summary: "Sliding primary window emission before transform.",
        stage: "P2",
        isRuntimeTarget: false,
    },
    {
        id: "P3",
        label: "P3 — Transform",
        summary: "Current fixed runtime target for spectral inspection.",
        stage: "P3",
        isRuntimeTarget: true,
    },
    {
        id: "D3",
        label: "D3 — Transform Diagnostics",
        summary: "Diagnostic transform residue exposed as a secondary shell surface.",
        stage: "D3",
        isRuntimeTarget: false,
    },
];

const PLANE_MODE_OPTIONS_V0: Record<OperatorIdV0, PlaneModeDescriptorV0[]> = {
    P0: [
        {
            id: "direct_temporal",
            label: "direct temporal",
            summary: "Direct temporal primary view for the current operator surface.",
        },
    ],
    P1: [
        {
            id: "direct_temporal",
            label: "direct temporal",
            summary: "Direct temporal primary view for the current operator surface.",
        },
    ],
    P2: [
        {
            id: "direct_temporal",
            label: "direct temporal",
            summary: "Direct temporal primary view for the current operator surface.",
        },
    ],
    P3: [
        {
            id: "re",
            label: "re",
            summary: "Real Cartesian component emphasis for the P3 shell surface.",
        },
        {
            id: "im",
            label: "im",
            summary: "Imaginary Cartesian component emphasis for the P3 shell surface.",
        },
        {
            id: "both",
            label: "both",
            summary: "Combined Cartesian component posture for the P3 shell surface.",
        },
    ],
    D3: [
        {
            id: "magnitude",
            label: "magnitude",
            summary: "Derived diagnostic magnitude series.",
        },
        {
            id: "phase",
            label: "phase",
            summary: "Derived diagnostic phase series.",
        },
    ],
};

const ALL_PLANE_MODES_V0: PlaneModeDescriptorV0[] = [
    {
        id: "direct_temporal",
        label: "direct temporal",
        summary: "Direct temporal primary view for the current operator surface.",
    },
    {
        id: "re",
        label: "re",
        summary: "Real Cartesian component emphasis for the P3 shell surface.",
    },
    {
        id: "im",
        label: "im",
        summary: "Imaginary Cartesian component emphasis for the P3 shell surface.",
    },
    {
        id: "both",
        label: "both",
        summary: "Combined Cartesian component posture for the P3 shell surface.",
    },
    {
        id: "magnitude",
        label: "magnitude",
        summary: "Derived diagnostic magnitude series.",
    },
    {
        id: "phase",
        label: "phase",
        summary: "Derived diagnostic phase series.",
    },
];

const appNode = document.querySelector<HTMLDivElement>("#app");

if (appNode === null) {
    throw new Error("Shell host v0 could not find #app.");
}

document.body.className = "shell-body";

appNode.innerHTML = `
  <div class="shell-host" data-shell-host="v0">
    <aside class="control-rail" aria-label="Control Rail">
      <div class="rail-header">
        <div class="rail-kicker">Inspection Shell v0</div>
        <h1 class="rail-title">Dynamical Memory Engine</h1>
        <p class="rail-copy">
          Local Source and Run controls are now live through the Local Host Bridge v0. Execution remains outside
          <code>app/</code>.
        </p>
      </div>

      <section class="control-region" aria-labelledby="source-region-title">
        <div class="control-label">Source</div>
        <h2 id="source-region-title" class="control-title">Local .wav handoff</h2>
        <p class="control-copy">
          Drag/drop or pick one <code>.wav</code>. Browser file bytes route through
          <code>POST /api/source/handoff</code> at ${LOCAL_HOST_BRIDGE_BASE_URL}.
        </p>
        <div class="dropzone" data-dropzone tabindex="0" aria-label="Drop a wav file here">
          <div class="dropzone-title">Drop one .wav here</div>
          <div class="dropzone-copy">No auto-run. The first dropped file becomes the next explicit handoff request.</div>
        </div>
        <div class="button-row">
          <button type="button" class="shell-button shell-button-primary" data-pick-button>
            Pick .wav
          </button>
        </div>
        <input data-file-input type="file" accept=".wav,audio/wav" class="visually-hidden" />
        <dl class="detail-list">
          <div class="detail-item">
            <dt>Selected Source</dt>
            <dd data-source-name>No source selected</dd>
          </div>
          <div class="detail-item">
            <dt>Interaction</dt>
            <dd data-source-kind>--</dd>
          </div>
          <div class="detail-item">
            <dt>Runtime Handoff</dt>
            <dd data-source-path>--</dd>
          </div>
        </dl>
        <div class="status-card status-card-neutral" data-source-status>
          <div class="status-heading">Awaiting source</div>
          <p class="status-detail">Select a <code>.wav</code> to prepare a local runtime handoff.</p>
        </div>
      </section>

      <section class="control-region" aria-labelledby="run-region-title">
        <div class="control-label">Run</div>
        <h2 id="run-region-title" class="control-title">Fixed inspection request</h2>
        <p class="control-copy">
          Manual only. Run and rerun send one explicit request through <code>POST /api/run</code>.
        </p>
        <div class="request-chip">
          P3 / PlaneP3SpectralView / frame 0 / Fs 2000 Hz / window 64 / hop 64
        </div>
        <div class="button-row">
          <button type="button" class="shell-button shell-button-primary" data-run-button disabled>
            Run
          </button>
          <button type="button" class="shell-button" data-rerun-button disabled>
            Rerun
          </button>
          <button type="button" class="shell-button shell-button-subtle" data-clear-button disabled>
            Clear / Reset
          </button>
        </div>
        <div class="status-card status-card-neutral" data-run-status>
          <div class="status-heading">Run idle</div>
          <p class="status-detail">Run remains manual after source handoff. Clear / Reset only clears shell-local state.</p>
        </div>
      </section>

      <section class="control-region" aria-labelledby="regime-region-title">
        <div class="control-label">Regime</div>
        <h2 id="regime-region-title" class="control-title">Regime navigation</h2>
        <p class="control-copy">
          Temporal is the only active path in this shell pass. Deferred regimes stay visible but unavailable.
        </p>
        <div class="regime-stack" role="list" aria-label="Regime Availability" data-regime-stack>
        </div>
      </section>

      <section class="control-region" aria-labelledby="operator-region-title">
        <div class="control-label">Operator</div>
        <h2 id="operator-region-title" class="control-title">Operator navigation</h2>
        <p class="control-copy">
          Operator selection is shell-local in this packet. The live run path remains fixed to
          <code>P3 — Transform</code>.
        </p>
        <div class="operator-stack" role="list" aria-label="Temporal Operator Exposure" data-operator-stack></div>
        <div class="operator-note" data-operator-note>
          Selected operator posture is display-only until operator-aware runtime requests are added lawfully.
        </div>
      </section>

      <section class="control-region" aria-labelledby="frame-region-title">
        <div class="control-label">Frame</div>
        <h2 id="frame-region-title" class="control-title">Frame navigation</h2>
        <p class="control-copy">
          Frame controls stay bounded to the currently exposed local frame subset only. This packet does not fetch
          additional runtime frames.
        </p>
        <div class="frame-nav-row">
          <button type="button" class="shell-button" data-frame-prev-button disabled>
            Prev
          </button>
          <label class="frame-input-label" for="frame-index-input">Frame Index</label>
          <input
            id="frame-index-input"
            data-frame-input
            class="frame-input"
            type="number"
            min="0"
            step="1"
            inputmode="numeric"
            disabled
          />
          <button type="button" class="shell-button" data-frame-next-button disabled>
            Next
          </button>
        </div>
        <div class="frame-count-row">
          <span class="frame-count-label">Frame Index / Total</span>
          <span class="frame-count-value" data-frame-count>-- / --</span>
        </div>
        <dl class="detail-list">
          <div class="detail-item">
            <dt>Global Context</dt>
            <dd data-frame-global-context>Fixed run target awaiting run</dd>
          </div>
          <div class="detail-item">
            <dt>Local Context</dt>
            <dd data-frame-local-context>Awaiting exposed frame context</dd>
          </div>
        </dl>
        <div class="status-card status-card-neutral" data-frame-status>
          <div class="status-heading">Frame unavailable</div>
          <p class="status-detail">Run the fixed inspection request to expose a lawful local frame context.</p>
        </div>
      </section>

      <section class="control-region" aria-labelledby="plane-mode-region-title">
        <div class="control-label">Plane Mode</div>
        <h2 id="plane-mode-region-title" class="control-title">Plane mode navigation</h2>
        <p class="control-copy">
          Plane mode selection is operator-dependent and shell-local in this packet. It does not change the fixed
          runtime plane request.
        </p>
        <div class="plane-mode-stack" role="list" aria-label="Plane Mode Exposure" data-plane-mode-stack></div>
        <dl class="detail-list">
          <div class="detail-item">
            <dt>Global Context</dt>
            <dd data-plane-global-context>Fixed runtime plane awaiting run</dd>
          </div>
          <div class="detail-item">
            <dt>Local Context</dt>
            <dd data-plane-local-context>Awaiting selected operator plane semantics</dd>
          </div>
        </dl>
        <div class="status-card status-card-neutral" data-plane-status>
          <div class="status-heading">Plane mode bounded</div>
          <p class="status-detail">Select an operator to expose the lawful shell-local plane modes for that surface.</p>
        </div>
      </section>
    </aside>

    <main class="inspection-pane" aria-label="Main Inspection Pane">
      <header class="context-header">
        <div class="context-item">
          <span class="context-key">Source</span>
          <span class="context-value" data-context-source>No source selected</span>
        </div>
        <div class="context-item">
          <span class="context-key">Regime</span>
          <span class="context-value" data-context-regime>TemporalRegime / active</span>
        </div>
        <div class="context-item">
          <span class="context-key">Operator</span>
          <span class="context-value" data-context-operator>P3 — Transform / fixed run target</span>
        </div>
        <div class="context-item">
          <span class="context-key">Frame</span>
          <span class="context-value" data-context-frame>Awaiting run</span>
        </div>
        <div class="context-item">
          <span class="context-key">Plane Mode</span>
          <span class="context-value" data-context-plane>Fixed P3 spectral</span>
        </div>
      </header>

      <section class="inspection-stage" aria-labelledby="inspection-stage-title">
        <div class="inspection-kicker">Main Inspection Pane</div>
        <h2 id="inspection-stage-title" class="inspection-title">Render-ready inspection response</h2>
        <p class="inspection-copy" data-inspection-copy>
          Select a local <code>.wav</code>, then run the fixed bridge-routed inspection request. No frame or plane controls
          are active in this packet.
        </p>
        <div class="inspection-status-shell" data-main-status></div>
        <div class="inspection-result-shell" data-main-result>
          <div class="inspection-placeholder" aria-hidden="true">
            <div class="placeholder-grid"></div>
            <div class="placeholder-frame">
              <span>Inspection output awaiting run</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

const dropzone = appNode.querySelector<HTMLElement>("[data-dropzone]");
const pickButton = appNode.querySelector<HTMLButtonElement>("[data-pick-button]");
const fileInput = appNode.querySelector<HTMLInputElement>("[data-file-input]");
const runButton = appNode.querySelector<HTMLButtonElement>("[data-run-button]");
const rerunButton = appNode.querySelector<HTMLButtonElement>("[data-rerun-button]");
const clearButton = appNode.querySelector<HTMLButtonElement>("[data-clear-button]");
const framePrevButton = appNode.querySelector<HTMLButtonElement>("[data-frame-prev-button]");
const frameNextButton = appNode.querySelector<HTMLButtonElement>("[data-frame-next-button]");
const frameInput = appNode.querySelector<HTMLInputElement>("[data-frame-input]");
const sourceNameNode = appNode.querySelector<HTMLElement>("[data-source-name]");
const sourceKindNode = appNode.querySelector<HTMLElement>("[data-source-kind]");
const sourcePathNode = appNode.querySelector<HTMLElement>("[data-source-path]");
const sourceStatusNode = appNode.querySelector<HTMLElement>("[data-source-status]");
const runStatusNode = appNode.querySelector<HTMLElement>("[data-run-status]");
const frameCountNode = appNode.querySelector<HTMLElement>("[data-frame-count]");
const frameGlobalContextNode = appNode.querySelector<HTMLElement>("[data-frame-global-context]");
const frameLocalContextNode = appNode.querySelector<HTMLElement>("[data-frame-local-context]");
const frameStatusNode = appNode.querySelector<HTMLElement>("[data-frame-status]");
const planeModeStackNode = appNode.querySelector<HTMLElement>("[data-plane-mode-stack]");
const planeGlobalContextNode = appNode.querySelector<HTMLElement>("[data-plane-global-context]");
const planeLocalContextNode = appNode.querySelector<HTMLElement>("[data-plane-local-context]");
const planeStatusNode = appNode.querySelector<HTMLElement>("[data-plane-status]");
const regimeStackNode = appNode.querySelector<HTMLElement>("[data-regime-stack]");
const operatorStackNode = appNode.querySelector<HTMLElement>("[data-operator-stack]");
const operatorNoteNode = appNode.querySelector<HTMLElement>("[data-operator-note]");
const contextSourceNode = appNode.querySelector<HTMLElement>("[data-context-source]");
const contextRegimeNode = appNode.querySelector<HTMLElement>("[data-context-regime]");
const contextOperatorNode = appNode.querySelector<HTMLElement>("[data-context-operator]");
const contextFrameNode = appNode.querySelector<HTMLElement>("[data-context-frame]");
const contextPlaneNode = appNode.querySelector<HTMLElement>("[data-context-plane]");
const inspectionCopyNode = appNode.querySelector<HTMLElement>("[data-inspection-copy]");
const mainStatusNode = appNode.querySelector<HTMLElement>("[data-main-status]");
const mainResultNode = appNode.querySelector<HTMLElement>("[data-main-result]");

if (
    dropzone === null ||
    pickButton === null ||
    fileInput === null ||
    runButton === null ||
    rerunButton === null ||
    clearButton === null ||
    framePrevButton === null ||
    frameNextButton === null ||
    frameInput === null ||
    sourceNameNode === null ||
    sourceKindNode === null ||
    sourcePathNode === null ||
    sourceStatusNode === null ||
    runStatusNode === null ||
    frameCountNode === null ||
    frameGlobalContextNode === null ||
    frameLocalContextNode === null ||
    frameStatusNode === null ||
    planeModeStackNode === null ||
    planeGlobalContextNode === null ||
    planeLocalContextNode === null ||
    planeStatusNode === null ||
    regimeStackNode === null ||
    operatorStackNode === null ||
    operatorNoteNode === null ||
    contextSourceNode === null ||
    contextRegimeNode === null ||
    contextOperatorNode === null ||
    contextFrameNode === null ||
    contextPlaneNode === null ||
    inspectionCopyNode === null ||
    mainStatusNode === null ||
    mainResultNode === null
) {
    throw new Error("Source and Run UI v0 could not bind the shell host nodes.");
}

function createStatusCard(
    tone: StatusToneV0,
    title: string,
    detail: string,
    seam?: string,
    code?: string
): ShellStatusCardV0 {
    return { tone, title, detail, seam, code };
}

function getActiveRegimeDescriptor(): RegimeDescriptorV0 {
    return REGIME_OPTIONS_V0.find((regime) => regime.id === state.activeRegimeId) ?? REGIME_OPTIONS_V0[0];
}

function getSelectedOperatorDescriptor(): OperatorDescriptorV0 {
    return OPERATOR_OPTIONS_V0.find((operator) => operator.id === state.selectedOperatorId) ?? OPERATOR_OPTIONS_V0[3];
}

function getRuntimeOperatorDescriptor(): OperatorDescriptorV0 {
    return OPERATOR_OPTIONS_V0.find((operator) => operator.id === FIXED_INSPECTION_REQUEST_V0.stage_selection.stage) ?? OPERATOR_OPTIONS_V0[3];
}

function getFrameExposureContext(): FrameExposureContextV0 {
    const runtimeOperator = getRuntimeOperatorDescriptor();
    const selectedOperator = getSelectedOperatorDescriptor();

    if (state.lastRunResult === null) {
        return {
            isAvailable: false,
            runtimeOperatorId: runtimeOperator.id,
            runtimeFrameIndex: null,
            selectedFrameIndex: null,
            exposedFrameCount: null,
            globalContext: `${runtimeOperator.label} / global context`,
            localContext: "Awaiting exposed frame context",
            statusCard: createStatusCard(
                "neutral",
                "Frame unavailable",
                "Run the fixed inspection request to expose a lawful local frame context."
            ),
        };
    }

    const runtimeFrameIndex = state.lastRunResult.stage_selection.frame_index ?? 0;

    if (selectedOperator.id !== runtimeOperator.id) {
        return {
            isAvailable: false,
            runtimeOperatorId: runtimeOperator.id,
            runtimeFrameIndex,
            selectedFrameIndex: null,
            exposedFrameCount: null,
            globalContext: `${runtimeOperator.label} / global context`,
            localContext: `${selectedOperator.label} has no local frame exposure in the current fixed run.`,
            statusCard: createStatusCard(
                state.frameValidationMessage === null ? "neutral" : "failure",
                state.frameValidationMessage === null ? "No local frame exposure" : "Frame request rejected",
                state.frameValidationMessage ??
                    `${selectedOperator.label} is shell-local only here. The current run exposes ${runtimeOperator.label} frame ${String(runtimeFrameIndex)} only.`
            ),
        };
    }

    return {
        isAvailable: true,
        runtimeOperatorId: runtimeOperator.id,
        runtimeFrameIndex,
        selectedFrameIndex: state.selectedFrameIndex,
        exposedFrameCount: 1,
        globalContext: `${runtimeOperator.label} / global context`,
        localContext: `Frame ${String(state.selectedFrameIndex)} of 1 exposed / local context`,
        statusCard: createStatusCard(
            state.frameValidationMessage === null ? "success" : "failure",
            state.frameValidationMessage === null ? "Single exposed frame" : "Frame request rejected",
            state.frameValidationMessage ??
                `The current run exposes one local frame only: ${runtimeOperator.label} frame ${String(runtimeFrameIndex)}.`
        ),
    };
}

function getPlaneModeOptionsForOperator(operatorId: OperatorIdV0): PlaneModeDescriptorV0[] {
    return PLANE_MODE_OPTIONS_V0[operatorId];
}

function getDefaultPlaneModeIdForOperator(operatorId: OperatorIdV0): PlaneModeIdV0 {
    return getPlaneModeOptionsForOperator(operatorId)[0].id;
}

function getSelectedPlaneModeDescriptor(
    operatorId: OperatorIdV0,
    planeModeId: PlaneModeIdV0
): PlaneModeDescriptorV0 {
    return (
        getPlaneModeOptionsForOperator(operatorId).find((mode) => mode.id === planeModeId) ??
        getPlaneModeOptionsForOperator(operatorId)[0]
    );
}

function getRuntimePlaneClassLabel(): string {
    return FIXED_INSPECTION_REQUEST_V0.plane_selection_request.plane_class;
}

function getPlaneModeExposureContext(): PlaneModeExposureContextV0 {
    const selectedOperator = getSelectedOperatorDescriptor();
    const runtimeOperator = getRuntimeOperatorDescriptor();
    const runtimePlaneClass = getRuntimePlaneClassLabel();
    const availableModes = getPlaneModeOptionsForOperator(selectedOperator.id);
    const selectedMode = getSelectedPlaneModeDescriptor(selectedOperator.id, state.selectedPlaneModeId);

    if (selectedOperator.id !== runtimeOperator.id) {
        return {
            selectedModeId: selectedMode.id,
            availableModes,
            runtimePlaneClass,
            globalContext: `${runtimePlaneClass} / fixed runtime plane`,
            localContext: `${selectedOperator.label} exposes ${availableModes.map((mode) => mode.label).join(", ")} as shell-local plane modes only.`,
            statusCard: createStatusCard(
                state.planeValidationMessage === null ? "neutral" : "failure",
                state.planeValidationMessage === null ? "Shell-local plane modes only" : "Plane mode request rejected",
                state.planeValidationMessage ??
                    `${selectedOperator.label} does not have live runtime plane switching in this packet.`
            ),
        };
    }

    return {
        selectedModeId: selectedMode.id,
        availableModes,
        runtimePlaneClass,
        globalContext: `${runtimePlaneClass} / fixed runtime plane`,
        localContext: `${selectedOperator.label} exposes ${selectedMode.label} as a shell-local mode over one fixed runtime plane.`,
        statusCard: createStatusCard(
            state.planeValidationMessage === null ? "success" : "failure",
            state.planeValidationMessage === null ? "Fixed runtime plane, shell-local mode" : "Plane mode request rejected",
            state.planeValidationMessage ??
                `${selectedMode.label} is selected in the shell. The runtime plane remains ${runtimePlaneClass}.`
        ),
    };
}

function isFailureResult(
    result: unknown
): result is RoutedBridgeFailureV0 | ShellBridgeCallFailureV0 {
    return (
        result !== null &&
        typeof result === "object" &&
        "status" in result &&
        typeof (result as { status: unknown }).status === "string" &&
        (result as { status: string }).status !== "handed_off" &&
        (result as { status: string }).status !== "run_completed"
    );
}

function formatInteractionKind(kind: SourceInteractionKindV0 | null): string {
    if (kind === null) {
        return "--";
    }

    return kind === "drag_and_drop" ? "Drag / Drop" : "File Picker";
}

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function getFailureSummary(
    failure: RoutedBridgeFailureV0 | ShellBridgeCallFailureV0
): { title: string; detail: string; seam?: string; code?: string } {
    const seam = "seam" in failure && typeof failure.seam === "string" ? failure.seam : undefined;
    const code =
        "failure_code" in failure && typeof failure.failure_code === "string"
            ? failure.failure_code
            : undefined;
    const message = "message" in failure && typeof failure.message === "string"
        ? failure.message
        : "The shell received an unspecified failure.";

    return {
        title: seam === undefined ? "Failure surfaced" : `${seam} failure surfaced`,
        detail: message,
        seam,
        code,
    };
}

const state: ShellViewStateV0 = {
    activeRegimeId: "temporal",
    selectedOperatorId: "P3",
    selectedFrameIndex: 0,
    frameValidationMessage: null,
    selectedPlaneModeId: "both",
    planeValidationMessage: null,
    selectedSource: null,
    sourceInteractionKind: null,
    sourceStatus: createStatusCard(
        "neutral",
        "Awaiting source",
        "Select a .wav to prepare a local runtime handoff."
    ),
    runStatus: createStatusCard(
        "neutral",
        "Run idle",
        "Run remains manual after source handoff. Clear / Reset only clears shell-local state."
    ),
    lastRunResult: null,
    latestFailure: null,
    hasRunAttempted: false,
    isUploading: false,
    isRunning: false,
};

function renderStatusCard(node: HTMLElement, card: ShellStatusCardV0): void {
    node.className = `status-card status-card-${card.tone}`;

    const metaLine =
        card.seam === undefined && card.code === undefined
            ? ""
            : `<div class="status-meta">${card.seam ?? "shell"}${card.code === undefined ? "" : ` / ${card.code}`}</div>`;

    node.innerHTML = `
      <div class="status-heading">${escapeHtml(card.title)}</div>
      ${metaLine}
      <p class="status-detail">${escapeHtml(card.detail)}</p>
    `;
}

function renderRegimeRegion(): void {
    regimeStackNode.innerHTML = REGIME_OPTIONS_V0.map((regime) => `
      <div
        class="regime-chip ${regime.isActive ? "regime-chip-active" : "regime-chip-inactive"}"
        role="listitem"
        ${regime.isActive ? 'aria-current="true"' : 'aria-disabled="true"'}
      >
        <span class="regime-chip-label">${escapeHtml(regime.label)}</span>
        <span>${escapeHtml(regime.statusLabel)}</span>
      </div>
    `).join("");
}

function renderOperatorRegion(): void {
    const selectedOperator = getSelectedOperatorDescriptor();

    operatorStackNode.innerHTML = OPERATOR_OPTIONS_V0.map((operator) => `
      <button
        type="button"
        class="operator-chip ${operator.id === state.selectedOperatorId ? "operator-chip-selected" : ""}"
        data-operator-id="${escapeHtml(operator.id)}"
        aria-pressed="${operator.id === state.selectedOperatorId ? "true" : "false"}"
      >
        <span class="operator-chip-label">${escapeHtml(operator.label)}</span>
        <span class="operator-chip-copy">${escapeHtml(operator.summary)}</span>
        <span class="operator-chip-meta">
          ${operator.isRuntimeTarget ? "Fixed run target" : "Shell-local view only"}
        </span>
      </button>
    `).join("");

    operatorNoteNode.textContent =
        selectedOperator.isRuntimeTarget
            ? `${selectedOperator.label} is the current fixed runtime target.`
            : `${selectedOperator.label} is selected in the shell only; the live run path remains fixed to P3 — Transform.`;
}

function renderFrameRegion(): void {
    const frameContext = getFrameExposureContext();
    const canStepBackward =
        frameContext.isAvailable &&
        frameContext.selectedFrameIndex !== null &&
        frameContext.runtimeFrameIndex !== null &&
        frameContext.selectedFrameIndex > frameContext.runtimeFrameIndex;
    const canStepForward =
        frameContext.isAvailable &&
        frameContext.selectedFrameIndex !== null &&
        frameContext.runtimeFrameIndex !== null &&
        frameContext.selectedFrameIndex < frameContext.runtimeFrameIndex;

    framePrevButton.disabled = !canStepBackward || state.isUploading || state.isRunning;
    frameNextButton.disabled = !canStepForward || state.isUploading || state.isRunning;
    frameInput.disabled = !frameContext.isAvailable || state.isUploading || state.isRunning;
    frameInput.value =
        frameContext.selectedFrameIndex === null ? "" : String(frameContext.selectedFrameIndex);
    frameCountNode.textContent =
        frameContext.selectedFrameIndex === null || frameContext.exposedFrameCount === null
            ? "-- / --"
            : `${String(frameContext.selectedFrameIndex)} / ${String(frameContext.exposedFrameCount)}`;
    frameGlobalContextNode.textContent = frameContext.globalContext;
    frameLocalContextNode.textContent = frameContext.localContext;

    if (frameContext.runtimeFrameIndex !== null) {
        frameInput.min = String(frameContext.runtimeFrameIndex);
        frameInput.max = String(frameContext.runtimeFrameIndex);
    } else {
        frameInput.min = "0";
        frameInput.max = "0";
    }

    renderStatusCard(frameStatusNode, frameContext.statusCard);
}

function renderPlaneModeRegion(): void {
    const planeContext = getPlaneModeExposureContext();
    const availableModeIds = new Set(planeContext.availableModes.map((mode) => mode.id));

    planeModeStackNode.innerHTML = ALL_PLANE_MODES_V0.map((mode) => `
      <button
        type="button"
        class="plane-mode-chip ${mode.id === planeContext.selectedModeId ? "plane-mode-chip-selected" : ""} ${availableModeIds.has(mode.id) ? "" : "plane-mode-chip-disabled"}"
        data-plane-mode-id="${escapeHtml(mode.id)}"
        ${availableModeIds.has(mode.id) ? "" : "disabled"}
        aria-pressed="${mode.id === planeContext.selectedModeId ? "true" : "false"}"
      >
        <span class="plane-mode-chip-label">${escapeHtml(mode.label)}</span>
        <span class="plane-mode-chip-copy">${escapeHtml(mode.summary)}</span>
      </button>
    `).join("");

    planeGlobalContextNode.textContent = planeContext.globalContext;
    planeLocalContextNode.textContent = planeContext.localContext;
    renderStatusCard(planeStatusNode, planeContext.statusCard);
}

function renderMainPane(): void {
    if (state.latestFailure !== null) {
        const failureSummary = getFailureSummary(state.latestFailure);

        mainStatusNode.innerHTML = `
          <div class="main-callout main-callout-failure">
            <div class="main-callout-label">Latest Failure</div>
            <h3>${escapeHtml(failureSummary.title)}</h3>
            <p>${escapeHtml(failureSummary.detail)}</p>
            <div class="main-callout-meta">
              <span>Seam: ${escapeHtml(failureSummary.seam ?? "app_shell")}</span>
              <span>Code: ${escapeHtml(failureSummary.code ?? "none")}</span>
            </div>
          </div>
        `;
    } else if (state.lastRunResult !== null) {
        mainStatusNode.innerHTML = `
          <div class="main-callout main-callout-success">
            <div class="main-callout-label">Latest Run</div>
            <h3>Render-ready inspection returned</h3>
            <p>
              The shell is showing the bounded render-ready output returned through the Local Host Bridge v0.
            </p>
            <div class="main-callout-meta">
              <span>Stage: ${escapeHtml(state.lastRunResult.stage_selection.stage)}</span>
              <span>Plane: ${escapeHtml(state.lastRunResult.plane_selection_request.plane_class)}</span>
              <span>Render Type: ${escapeHtml(state.lastRunResult.rendered_output.render_type)}</span>
            </div>
          </div>
        `;
    } else {
        mainStatusNode.innerHTML = `
          <div class="main-callout main-callout-neutral">
            <div class="main-callout-label">Current Path</div>
            <h3>Manual bridge-routed inspection only</h3>
            <p>
              This shell packet wires browser file input and run control only. Operator, frame, and plane navigation
              stay deferred.
            </p>
          </div>
        `;
    }

    if (state.lastRunResult !== null) {
        const renderedJson = JSON.stringify(state.lastRunResult.rendered_output, null, 2);

        mainResultNode.innerHTML = `
          <div class="result-panel">
            <div class="result-summary">
              <div class="result-key">Selected Source</div>
              <div class="result-value">${escapeHtml(
                  state.lastRunResult.selected_source_reference?.display_name ?? state.selectedSource?.original_file_name ?? "--"
              )}</div>
            </div>
            <div class="result-summary">
              <div class="result-key">Render Output</div>
              <div class="result-value">${escapeHtml(state.lastRunResult.rendered_output.render_type)}</div>
            </div>
            <pre class="result-code">${escapeHtml(renderedJson)}</pre>
          </div>
        `;
        return;
    }

    if (state.selectedSource !== null) {
        mainResultNode.innerHTML = `
          <div class="result-panel">
            <div class="result-summary">
              <div class="result-key">Selected Source</div>
              <div class="result-value">${escapeHtml(state.selectedSource.original_file_name)}</div>
            </div>
            <div class="result-summary">
              <div class="result-key">Fixed Request</div>
              <div class="result-value">P3 / PlaneP3SpectralView / frame 0</div>
            </div>
            <div class="result-summary">
              <div class="result-key">Run Policy</div>
              <div class="result-value">Fs 2000 Hz / window 64 / hop 64</div>
            </div>
          </div>
        `;
        return;
    }

    mainResultNode.innerHTML = `
      <div class="inspection-placeholder" aria-hidden="true">
        <div class="placeholder-grid"></div>
        <div class="placeholder-frame">
          <span>Inspection output awaiting run</span>
        </div>
      </div>
    `;
}

function renderShell(): void {
    const activeRegime = getActiveRegimeDescriptor();
    const runtimeOperator = getRuntimeOperatorDescriptor();
    const frameContext = getFrameExposureContext();
    const planeContext = getPlaneModeExposureContext();

    sourceNameNode.textContent = state.selectedSource?.original_file_name ?? "No source selected";
    sourceKindNode.textContent = formatInteractionKind(state.sourceInteractionKind);
    sourcePathNode.textContent = state.selectedSource?.runtime_handoff_relative_path ?? "--";

    contextSourceNode.textContent = state.selectedSource?.original_file_name ?? "No source selected";
    contextRegimeNode.textContent = `${activeRegime.label} / ${activeRegime.statusLabel.toLowerCase()}`;
    contextOperatorNode.textContent = `${runtimeOperator.label} / global context`;
    contextFrameNode.textContent =
        frameContext.selectedFrameIndex === null || frameContext.exposedFrameCount === null
            ? "Awaiting local context"
            : `Frame ${String(frameContext.selectedFrameIndex)} / ${String(frameContext.exposedFrameCount)} exposed / local context`;
    contextPlaneNode.textContent = `${planeContext.runtimePlaneClass} / ${getSelectedPlaneModeDescriptor(
        state.selectedOperatorId,
        state.selectedPlaneModeId
    ).label} / shell-local mode`;

    inspectionCopyNode.innerHTML =
        state.selectedSource === null
            ? `Select a local <code>.wav</code>, then run the fixed bridge-routed inspection request. No frame or plane controls
               are active in this packet.`
            : `Source handoff is ready. Run stays manual and routes through the Local Host Bridge v0, not directly into
               execution seams from <code>app/</code>.`;

    renderStatusCard(sourceStatusNode, state.sourceStatus);
    renderStatusCard(runStatusNode, state.runStatus);
    renderRegimeRegion();
    renderOperatorRegion();
    renderFrameRegion();
    renderPlaneModeRegion();

    runButton.disabled = state.selectedSource === null || state.isUploading || state.isRunning;
    rerunButton.disabled =
        state.selectedSource === null || !state.hasRunAttempted || state.isUploading || state.isRunning;
    clearButton.disabled =
        state.selectedSource === null &&
        state.lastRunResult === null &&
        state.latestFailure === null &&
        !state.hasRunAttempted;
    pickButton.disabled = state.isUploading || state.isRunning;
    dropzone.setAttribute(
        "aria-busy",
        state.isUploading || state.isRunning ? "true" : "false"
    );

    renderMainPane();
}

function applyFailureToSourceRegion(
    failure: RoutedBridgeFailureV0 | ShellBridgeCallFailureV0
): void {
    const summary = getFailureSummary(failure);

    state.isUploading = false;
    state.latestFailure = failure;
    state.sourceStatus = createStatusCard(
        "failure",
        summary.title,
        summary.detail,
        summary.seam,
        summary.code
    );
}

function applyFailureToRunRegion(
    failure: RoutedBridgeFailureV0 | ShellBridgeCallFailureV0
): void {
    const summary = getFailureSummary(failure);

    state.isRunning = false;
    state.latestFailure = failure;
    state.hasRunAttempted = true;
    state.runStatus = createStatusCard(
        "failure",
        summary.title,
        summary.detail,
        summary.seam,
        summary.code
    );
}

async function handoffFileV0(
    file: File,
    interactionKind: SourceInteractionKindV0
): Promise<void> {
    state.isUploading = true;
    state.selectedFrameIndex = 0;
    state.frameValidationMessage = null;
    state.planeValidationMessage = null;
    state.lastRunResult = null;
    state.latestFailure = null;
    state.hasRunAttempted = false;
    state.sourceStatus = createStatusCard(
        "busy",
        "Handoff in progress",
        `Sending ${file.name} through the Local Host Bridge v0.`
    );
    state.runStatus = createStatusCard(
        "neutral",
        "Run idle",
        "Run remains manual after source handoff."
    );
    renderShell();

    const result = await handoffBrowserFileThroughHostBridgeV0(file);

    if (isFailureResult(result)) {
        applyFailureToSourceRegion(result);
        renderShell();
        return;
    }

    state.isUploading = false;
    state.selectedSource = result;
    state.sourceInteractionKind = interactionKind;
    state.latestFailure = null;
    state.sourceStatus = createStatusCard(
        "success",
        "Source ready",
        `${result.original_file_name} is available for manual run through the host bridge.`
    );
    state.runStatus = createStatusCard(
        "neutral",
        "Run ready",
        "Run is now available. Rerun stays disabled until one run has completed or failed."
    );
    renderShell();
}

async function runSelectedSourceV0(): Promise<void> {
    if (state.selectedSource === null || state.sourceInteractionKind === null) {
        const failure = {
            status: "shell_bridge_call_failure",
            seam: "app_shell",
            failure_class: "shell_bridge_call_failure",
            failure_code: "missing_selected_source",
            message: "Browser shell requires a selected source before run.",
        } satisfies ShellBridgeCallFailureV0;

        applyFailureToRunRegion(failure);
        renderShell();
        return;
    }

    state.isRunning = true;
    state.frameValidationMessage = null;
    state.planeValidationMessage = null;
    state.latestFailure = null;
    state.lastRunResult = null;
    state.runStatus = createStatusCard(
        "busy",
        "Run in progress",
        "Sending the fixed inspection request through the Local Host Bridge v0."
    );
    renderShell();

    const result = await runThroughHostBridgeV0({
        source_intake_request: state.selectedSource.source_intake_request,
        intake_interaction_kind: state.sourceInteractionKind,
        inspection_request: FIXED_INSPECTION_REQUEST_V0,
    });

    if (isFailureResult(result)) {
        applyFailureToRunRegion(result);
        renderShell();
        return;
    }

    state.isRunning = false;
    state.hasRunAttempted = true;
    state.selectedFrameIndex = result.stage_selection.frame_index ?? 0;
    state.frameValidationMessage = null;
    state.lastRunResult = result;
    state.latestFailure = null;
    state.runStatus = createStatusCard(
        "success",
        "Run completed",
        `${result.stage_selection.stage} inspection output returned from the Local Host Bridge v0.`
    );
    renderShell();
}

function clearShellStateV0(): void {
    state.selectedSource = null;
    state.sourceInteractionKind = null;
    state.selectedFrameIndex = 0;
    state.frameValidationMessage = null;
    state.planeValidationMessage = null;
    state.lastRunResult = null;
    state.latestFailure = null;
    state.hasRunAttempted = false;
    state.isUploading = false;
    state.isRunning = false;
    state.sourceStatus = createStatusCard(
        "neutral",
        "Source cleared",
        "Clear / Reset removed shell-local source state only."
    );
    state.runStatus = createStatusCard(
        "neutral",
        "Run state cleared",
        "Clear / Reset removed shell-local run state only. Runtime handoff files are not deleted here."
    );
    renderShell();
}

function handleFileSelectionV0(fileList: FileList | null, interactionKind: SourceInteractionKindV0): void {
    if (state.isUploading || state.isRunning) {
        return;
    }

    const firstFile = fileList?.item(0) ?? null;

    if (firstFile === null) {
        return;
    }

    void handoffFileV0(firstFile, interactionKind);
}

function applyFrameIndexInputV0(nextFrameIndex: number): void {
    const frameContext = getFrameExposureContext();

    if (!frameContext.isAvailable || frameContext.runtimeFrameIndex === null) {
        state.frameValidationMessage = "Frame navigation is unavailable until a lawful local frame is exposed.";
        renderShell();
        return;
    }

    if (!Number.isInteger(nextFrameIndex)) {
        state.frameValidationMessage = "Frame index must be an integer.";
        renderShell();
        return;
    }

    if (nextFrameIndex !== frameContext.runtimeFrameIndex) {
        state.frameValidationMessage =
            `Frame index ${String(nextFrameIndex)} is out of range. The current run exposes ${String(frameContext.runtimeFrameIndex)} only.`;
        renderShell();
        return;
    }

    state.selectedFrameIndex = nextFrameIndex;
    state.frameValidationMessage = null;
    renderShell();
}

function stepFrameSelectionV0(direction: -1 | 1): void {
    const frameContext = getFrameExposureContext();

    if (!frameContext.isAvailable || frameContext.selectedFrameIndex === null) {
        return;
    }

    applyFrameIndexInputV0(frameContext.selectedFrameIndex + direction);
}

pickButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    handleFileSelectionV0(fileInput.files, "file_picker");
    fileInput.value = "";
});

dropzone.addEventListener("dragenter", (event) => {
    event.preventDefault();
    dropzone.classList.add("dropzone-active");
});

dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropzone.classList.add("dropzone-active");
});

dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dropzone-active");
});

dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropzone.classList.remove("dropzone-active");
    handleFileSelectionV0(event.dataTransfer?.files ?? null, "drag_and_drop");
});

dropzone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        fileInput.click();
    }
});

framePrevButton.addEventListener("click", () => {
    stepFrameSelectionV0(-1);
});

frameNextButton.addEventListener("click", () => {
    stepFrameSelectionV0(1);
});

frameInput.addEventListener("change", () => {
    const parsed = Number(frameInput.value);
    applyFrameIndexInputV0(parsed);
});

frameInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();
    const parsed = Number(frameInput.value);
    applyFrameIndexInputV0(parsed);
});

frameInput.addEventListener("blur", () => {
    if (frameInput.value.trim().length === 0) {
        renderShell();
        return;
    }

    const parsed = Number(frameInput.value);
    applyFrameIndexInputV0(parsed);
});

planeModeStackNode.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
        return;
    }

    const planeModeButton = target.closest<HTMLButtonElement>("[data-plane-mode-id]");

    if (planeModeButton === null || planeModeButton.disabled) {
        return;
    }

    const planeModeId = planeModeButton.dataset.planeModeId as PlaneModeIdV0 | undefined;

    if (planeModeId === undefined) {
        return;
    }

    const availableModeIds = new Set(
        getPlaneModeOptionsForOperator(state.selectedOperatorId).map((mode) => mode.id)
    );

    if (!availableModeIds.has(planeModeId)) {
        state.planeValidationMessage = `${planeModeId} is unavailable for ${getSelectedOperatorDescriptor().label}.`;
        renderShell();
        return;
    }

    state.selectedPlaneModeId = planeModeId;
    state.planeValidationMessage = null;
    renderShell();
});

operatorStackNode.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
        return;
    }

    const operatorButton = target.closest<HTMLElement>("[data-operator-id]");

    if (operatorButton === null) {
        return;
    }

    const operatorId = operatorButton.dataset.operatorId as OperatorIdV0 | undefined;

    if (operatorId === undefined) {
        return;
    }

    state.selectedOperatorId = operatorId;
    state.frameValidationMessage = null;
    state.planeValidationMessage = null;
    state.selectedPlaneModeId = getDefaultPlaneModeIdForOperator(operatorId);
    renderShell();
});

runButton.addEventListener("click", () => {
    void runSelectedSourceV0();
});

rerunButton.addEventListener("click", () => {
    void runSelectedSourceV0();
});

clearButton.addEventListener("click", () => {
    clearShellStateV0();
});

renderShell();
