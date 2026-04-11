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
type FailureScopeV0 = "source" | "run";

interface ShellStatusCardV0 {
    tone: StatusToneV0;
    title: string;
    detail?: string;
    seam?: string;
    code?: string;
}

interface ShellViewStateV0 {
    activeRegimeId: RegimeIdV0;
    selectedOperatorId: OperatorIdV0;
    selectedFrameIndex: number;
    selectedSpectralBinIndex: number | null;
    frameValidationMessage: string | null;
    selectedPlaneModeId: PlaneModeIdV0;
    planeValidationMessage: string | null;
    selectedSource: BrowserFileHandoffSuccessV0 | null;
    sourceInteractionKind: SourceInteractionKindV0 | null;
    sourceStatus: ShellStatusCardV0;
    runStatus: ShellStatusCardV0;
    lastRunResult: LocalHostBridgeRunSuccessV0 | null;
    latestFailure: RoutedBridgeFailureV0 | ShellBridgeCallFailureV0 | null;
    latestFailureScope: FailureScopeV0 | null;
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

interface SpectralBinPointV0 {
    frequency: number;
    re: number;
    im: number;
}

interface SpectralSeriesViewV0 {
    id: "re" | "im";
    label: "re" | "im";
    colorClass: "spectral-series-re" | "spectral-series-im";
    path: string;
}

interface SpectralMeasurementReadoutV0 {
    previewBinIndex: number;
    frequencyHz: number;
    re: number;
    im: number;
    emphasisLabel: string;
}

interface SpectralAxisTickV0 {
    position: number;
    label: string;
}

interface SpectralChartMarkerV0 {
    x: number;
    y: number;
    colorClass: "spectral-series-re" | "spectral-series-im";
    label: "re" | "im";
}

interface SpectralChartViewV0 {
    viewBoxWidth: number;
    viewBoxHeight: number;
    plotLeft: number;
    plotTop: number;
    plotWidth: number;
    plotHeight: number;
    minFrequencyHz: number;
    maxFrequencyHz: number;
    minValue: number;
    maxValue: number;
    xTicks: SpectralAxisTickV0[];
    yTicks: SpectralAxisTickV0[];
    zeroLineY: number;
    selectedBinX: number;
    selectedBinLabel: string;
    selectedMarkers: SpectralChartMarkerV0[];
    yAxisTitle: string;
    xAxisTitle: string;
}

type InspectionPaneViewModelV0 =
    | {
          kind: "awaiting_run";
          title: string;
          detail: string;
      }
    | {
          kind: "unavailable";
          title: string;
          detail: string;
          meta: string[];
      }
    | {
          kind: "pane_failure";
          title: string;
          detail: string;
          meta: string[];
          seam: string;
          code: string;
      }
    | {
          kind: "spectral_supported";
          title: string;
          detail: string;
          meta: string[];
          modeLabel: string;
          runtimePlaneClass: string;
          series: SpectralSeriesViewV0[];
          previewBins: SpectralBinPointV0[];
          measurement: SpectralMeasurementReadoutV0;
          chart: SpectralChartViewV0;
      };

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
      <section class="control-region" aria-label="Source">
        <div class="control-label">Source</div>
        <div class="dropzone" data-dropzone tabindex="0" aria-label="Drop a wav file here">
          <div class="dropzone-title">.wav</div>
          <div class="dropzone-copy">drag / drop</div>
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
            <dd data-source-name>--</dd>
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
          <div class="status-heading">awaiting</div>
        </div>
      </section>

      <section class="control-region" aria-label="Run">
        <div class="control-label">Run</div>
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
          <div class="status-heading">idle</div>
        </div>
      </section>

      <section class="control-region" aria-label="Regime">
        <div class="control-label">Regime</div>
        <div class="regime-stack" role="list" aria-label="Regime Availability" data-regime-stack>
        </div>
      </section>

    </aside>

    <main class="inspection-pane" aria-label="Main Inspection Pane">
      <header class="context-header">
        <div class="context-item">
          <span class="context-key">Source</span>
          <span class="context-value" data-context-source>--</span>
        </div>
        <div class="context-item">
          <span class="context-key">Regime</span>
          <span class="context-value" data-context-regime>TemporalRegime / active</span>
        </div>
        <div class="context-item">
          <span class="context-key">Operator</span>
          <span class="context-value" data-context-operator>P3 — Transform / fixed</span>
        </div>
        <div class="context-item">
          <span class="context-key">Frame</span>
          <span class="context-value" data-context-frame>0 / fixed</span>
        </div>
        <div class="context-item">
          <span class="context-key">Plane Mode</span>
          <span class="context-value" data-context-plane>PlaneP3SpectralView / fixed</span>
        </div>
      </header>

      <div class="inspection-body">
        <section class="inspection-stage" aria-label="Plane">
          <div class="inspection-status-shell" data-main-status></div>
          <div class="inspection-result-shell" data-main-result>
            <div class="inspection-placeholder" aria-hidden="true">
              <div class="placeholder-grid"></div>
              <div class="placeholder-frame">
                <span>awaiting_run</span>
              </div>
            </div>
          </div>
        </section>

        <aside class="local-navigation" aria-label="Local Navigation">
          <section class="control-region" aria-label="Operator">
            <div class="control-label">Operator</div>
            <div class="operator-stack" role="list" aria-label="Temporal Operator Exposure" data-operator-stack></div>
          </section>

          <section class="control-region" aria-label="Frame">
            <div class="control-label">Frame</div>
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
            <div class="status-card status-card-neutral" data-frame-status>
              <div class="status-heading">unavailable</div>
            </div>
          </section>

          <section class="control-region" aria-label="Plane Mode">
            <div class="control-label">Plane Mode</div>
            <div class="plane-mode-stack" role="list" aria-label="Plane Mode Exposure" data-plane-mode-stack></div>
            <div class="status-card status-card-neutral" data-plane-status>
              <div class="status-heading">bounded</div>
            </div>
          </section>
        </aside>
      </div>
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
const frameStatusNode = appNode.querySelector<HTMLElement>("[data-frame-status]");
const planeModeStackNode = appNode.querySelector<HTMLElement>("[data-plane-mode-stack]");
const planeStatusNode = appNode.querySelector<HTMLElement>("[data-plane-status]");
const regimeStackNode = appNode.querySelector<HTMLElement>("[data-regime-stack]");
const operatorStackNode = appNode.querySelector<HTMLElement>("[data-operator-stack]");
const contextSourceNode = appNode.querySelector<HTMLElement>("[data-context-source]");
const contextRegimeNode = appNode.querySelector<HTMLElement>("[data-context-regime]");
const contextOperatorNode = appNode.querySelector<HTMLElement>("[data-context-operator]");
const contextFrameNode = appNode.querySelector<HTMLElement>("[data-context-frame]");
const contextPlaneNode = appNode.querySelector<HTMLElement>("[data-context-plane]");
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
    frameStatusNode === null ||
    planeModeStackNode === null ||
    planeStatusNode === null ||
    regimeStackNode === null ||
    operatorStackNode === null ||
    contextSourceNode === null ||
    contextRegimeNode === null ||
    contextOperatorNode === null ||
    contextFrameNode === null ||
    contextPlaneNode === null ||
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
            localContext: "awaiting",
            statusCard: createStatusCard("neutral", "unavailable"),
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
            localContext: "unavailable",
            statusCard: createStatusCard(
                state.frameValidationMessage === null ? "neutral" : "failure",
                state.frameValidationMessage === null ? "unavailable" : "rejected",
                state.frameValidationMessage ?? "runtime_only"
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
        localContext: `${String(state.selectedFrameIndex)} / 1`,
        statusCard: createStatusCard(
            state.frameValidationMessage === null ? "success" : "failure",
            state.frameValidationMessage === null ? "ready" : "rejected",
            state.frameValidationMessage ?? `frame_${String(runtimeFrameIndex)}`
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
            localContext: availableModes.map((mode) => mode.label).join(" / "),
            statusCard: createStatusCard(
                state.planeValidationMessage === null ? "neutral" : "failure",
                state.planeValidationMessage === null ? "local_only" : "rejected",
                state.planeValidationMessage ?? "runtime_fixed"
            ),
        };
    }

    return {
        selectedModeId: selectedMode.id,
        availableModes,
        runtimePlaneClass,
        globalContext: `${runtimePlaneClass} / fixed runtime plane`,
        localContext: selectedMode.label,
        statusCard: createStatusCard(
            state.planeValidationMessage === null ? "success" : "failure",
            state.planeValidationMessage === null ? "ready" : "rejected",
            state.planeValidationMessage ?? runtimePlaneClass
        ),
    };
}

function isFiniteNumber(value: unknown): value is number {
    return typeof value === "number" && Number.isFinite(value);
}

function isObjectRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

function getRenderedOutputRecord(): Record<string, unknown> | null {
    if (state.lastRunResult === null || !isObjectRecord(state.lastRunResult.rendered_output)) {
        return null;
    }

    return state.lastRunResult.rendered_output;
}

function getRuntimeRenderClassLabel(): string {
    const renderedOutput = getRenderedOutputRecord();

    if (renderedOutput !== null && typeof renderedOutput.render_class === "string") {
        return renderedOutput.render_class;
    }

    return "unknown_render_class";
}

function getSpectralBinsFromRunResult(): SpectralBinPointV0[] | null {
    const renderedOutput = getRenderedOutputRecord();

    if (renderedOutput === null || !Array.isArray(renderedOutput.bins)) {
        return null;
    }

    const bins = renderedOutput.bins
        .map((bin) => {
            if (!isObjectRecord(bin)) {
                return null;
            }

            const frequency = bin.frequency;
            const re = bin.re;
            const im = bin.im;

            if (!isFiniteNumber(frequency) || !isFiniteNumber(re) || !isFiniteNumber(im)) {
                return null;
            }

            return {
                frequency,
                re,
                im,
            };
        })
        .filter((bin): bin is SpectralBinPointV0 => bin !== null);

    return bins.length > 0 ? bins : null;
}

function createSeriesPathV0(values: number[]): string {
    if (values.length === 0) {
        return "";
    }

    const width = 560;
    const height = 180;
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const span = maxValue - minValue || 1;

    return values.map((value, index) => {
        const x = values.length === 1 ? width / 2 : (index / (values.length - 1)) * width;
        const y = height - (((value - minValue) / span) * height);
        return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(" ");
}

function formatSpectralAxisValueV0(value: number): string {
    return value.toFixed(4);
}

function formatSpectralFrequencyTickV0(value: number): string {
    return `${value.toFixed(2)} Hz`;
}

function createSeriesPathFromMappedPointsV0(
    bins: SpectralBinPointV0[],
    valueSelector: (bin: SpectralBinPointV0) => number,
    chart: {
        plotLeft: number;
        plotTop: number;
        plotWidth: number;
        plotHeight: number;
        minFrequencyHz: number;
        maxFrequencyHz: number;
        minValue: number;
        maxValue: number;
    }
): string {
    if (bins.length === 0) {
        return "";
    }

    const span = chart.maxValue - chart.minValue || 1;
    const frequencySpan = chart.maxFrequencyHz - chart.minFrequencyHz || 1;

    return bins.map((bin, index) => {
        const x =
            bins.length === 1 || frequencySpan === 0
                ? chart.plotLeft + (chart.plotWidth / 2)
                : chart.plotLeft + (((bin.frequency - chart.minFrequencyHz) / frequencySpan) * chart.plotWidth);
        const value = valueSelector(bin);
        const y =
            chart.plotTop +
            chart.plotHeight -
            (((value - chart.minValue) / span) * chart.plotHeight);

        return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(" ");
}

function getSpectralTickIndicesV0(length: number): number[] {
    if (length <= 1) {
        return [0];
    }

    const candidateIndices = [0, Math.floor((length - 1) / 3), Math.floor(((length - 1) * 2) / 3), length - 1];
    return [...new Set(candidateIndices)];
}

function buildSpectralChartViewV0(
    previewBins: SpectralBinPointV0[],
    selectedModeId: PlaneModeIdV0,
    selectedMeasurementIndex: number
): SpectralChartViewV0 {
    const viewBoxWidth = 640;
    const viewBoxHeight = 232;
    const plotLeft = 52;
    const plotTop = 10;
    const plotWidth = 576;
    const plotHeight = 176;

    const displayedValues = previewBins.flatMap((bin) => {
        if (selectedModeId === "re") {
            return [bin.re];
        }

        if (selectedModeId === "im") {
            return [bin.im];
        }

        return [bin.re, bin.im];
    });
    const minValue = Math.min(...displayedValues, 0);
    const maxValue = Math.max(...displayedValues, 0);
    const span = maxValue - minValue || 1;
    const frequencies = previewBins.map((bin) => bin.frequency);
    const minFrequencyHz = Math.min(...frequencies);
    const maxFrequencyHz = Math.max(...frequencies);
    const frequencySpan = maxFrequencyHz - minFrequencyHz || 1;

    const xTickIndices = getSpectralTickIndicesV0(previewBins.length);
    const xTicks = xTickIndices.map((index) => ({
        position:
            previewBins.length === 1 || frequencySpan === 0
                ? plotLeft + (plotWidth / 2)
                : plotLeft + (((previewBins[index]?.frequency ?? minFrequencyHz) - minFrequencyHz) / frequencySpan) * plotWidth,
        label: formatSpectralFrequencyTickV0(previewBins[index]?.frequency ?? 0),
    }));

    const yTickValues = [maxValue, maxValue / 2, 0, minValue / 2, minValue];
    const yTicks = yTickValues.map((value) => ({
        position: plotTop + plotHeight - (((value - minValue) / span) * plotHeight),
        label: formatSpectralAxisValueV0(value),
    }));

    const selectedBinX =
        previewBins.length === 1 || frequencySpan === 0
            ? plotLeft + (plotWidth / 2)
            : plotLeft + ((((previewBins[selectedMeasurementIndex]?.frequency ?? minFrequencyHz) - minFrequencyHz) / frequencySpan) * plotWidth);
    const selectedBin = previewBins[selectedMeasurementIndex];

    const mapValueToY = (value: number): number =>
        plotTop + plotHeight - (((value - minValue) / span) * plotHeight);

    const selectedMarkers: SpectralChartMarkerV0[] = [];

    if (selectedBin !== undefined && (selectedModeId === "re" || selectedModeId === "both")) {
        selectedMarkers.push({
            x: selectedBinX,
            y: mapValueToY(selectedBin.re),
            colorClass: "spectral-series-re",
            label: "re",
        });
    }

    if (selectedBin !== undefined && (selectedModeId === "im" || selectedModeId === "both")) {
        selectedMarkers.push({
            x: selectedBinX,
            y: mapValueToY(selectedBin.im),
            colorClass: "spectral-series-im",
            label: "im",
        });
    }

    return {
        viewBoxWidth,
        viewBoxHeight,
        plotLeft,
        plotTop,
        plotWidth,
        plotHeight,
        minFrequencyHz,
        maxFrequencyHz,
        minValue,
        maxValue,
        xTicks,
        yTicks,
        zeroLineY: mapValueToY(0),
        selectedBinX,
        selectedBinLabel: `Preview Bin ${String(selectedMeasurementIndex)}`,
        selectedMarkers,
        yAxisTitle: selectedModeId === "re" ? "re" : selectedModeId === "im" ? "im" : "re/im",
        xAxisTitle: "Hz",
    };
}

function getDefaultPreviewBinIndexV0(
    previewBins: SpectralBinPointV0[],
    selectedModeId: PlaneModeIdV0
): number {
    if (previewBins.length === 0) {
        return 0;
    }

    let strongestIndex = 0;
    let strongestValue = Number.NEGATIVE_INFINITY;

    previewBins.forEach((bin, index) => {
        const candidateValue =
            selectedModeId === "re"
                ? Math.abs(bin.re)
                : selectedModeId === "im"
                ? Math.abs(bin.im)
                : Math.max(Math.abs(bin.re), Math.abs(bin.im));

        if (candidateValue > strongestValue) {
            strongestValue = candidateValue;
            strongestIndex = index;
        }
    });

    return strongestIndex;
}

function getMeasurementEmphasisLabelV0(selectedModeId: PlaneModeIdV0): string {
    if (selectedModeId === "re") {
        return "re";
    }

    if (selectedModeId === "im") {
        return "im";
    }

    return "both";
}

function getInspectionPaneViewModel(): InspectionPaneViewModelV0 {
    if (state.lastRunResult === null) {
        return {
            kind: "awaiting_run",
            title: "awaiting_run",
            detail: "",
        };
    }

    const selectedOperator = getSelectedOperatorDescriptor();
    const planeContext = getPlaneModeExposureContext();

    if (selectedOperator.id !== "P3") {
        return {
            kind: "unavailable",
            title: "unavailable",
            detail: "",
            meta: [
                `operator / ${selectedOperator.label}`,
                `mode / ${getSelectedPlaneModeDescriptor(state.selectedOperatorId, state.selectedPlaneModeId).label}`,
                `plane / ${planeContext.runtimePlaneClass}`,
            ],
        };
    }

    const spectralBins = getSpectralBinsFromRunResult();

    if (spectralBins === null) {
        return {
            kind: "pane_failure",
            title: "failure",
            detail: "",
            meta: [
                `operator / ${selectedOperator.label}`,
                `mode / ${getSelectedPlaneModeDescriptor(state.selectedOperatorId, state.selectedPlaneModeId).label}`,
                `render / ${getRuntimeRenderClassLabel()}`,
            ],
            seam: "app_shell",
            code: "missing_shell_render_bins",
        };
    }

    const selectedMode = getSelectedPlaneModeDescriptor(state.selectedOperatorId, state.selectedPlaneModeId);
    const previewBins = spectralBins.slice(0, 32);
    const previewMeasurementBins = previewBins.slice(0, 8);
    const series: SpectralSeriesViewV0[] = [];

    const defaultMeasurementIndex = getDefaultPreviewBinIndexV0(previewMeasurementBins, selectedMode.id);
    const selectedMeasurementIndex =
        state.selectedSpectralBinIndex !== null &&
            state.selectedSpectralBinIndex >= 0 &&
            state.selectedSpectralBinIndex < previewMeasurementBins.length
            ? state.selectedSpectralBinIndex
            : defaultMeasurementIndex;
    const selectedMeasurementBin = previewMeasurementBins[selectedMeasurementIndex];
    const chart = buildSpectralChartViewV0(previewMeasurementBins, selectedMode.id, selectedMeasurementIndex);

    if (selectedMode.id === "re" || selectedMode.id === "both") {
        series.push({
            id: "re",
            label: "re",
            colorClass: "spectral-series-re",
            path: createSeriesPathFromMappedPointsV0(previewMeasurementBins, (bin) => bin.re, {
                plotLeft: chart.plotLeft,
                plotTop: chart.plotTop,
                plotWidth: chart.plotWidth,
                plotHeight: chart.plotHeight,
                minFrequencyHz: chart.minFrequencyHz,
                maxFrequencyHz: chart.maxFrequencyHz,
                minValue: chart.minValue,
                maxValue: chart.maxValue,
            }),
        });
    }

    if (selectedMode.id === "im" || selectedMode.id === "both") {
        series.push({
            id: "im",
            label: "im",
            colorClass: "spectral-series-im",
            path: createSeriesPathFromMappedPointsV0(previewMeasurementBins, (bin) => bin.im, {
                plotLeft: chart.plotLeft,
                plotTop: chart.plotTop,
                plotWidth: chart.plotWidth,
                plotHeight: chart.plotHeight,
                minFrequencyHz: chart.minFrequencyHz,
                maxFrequencyHz: chart.maxFrequencyHz,
                minValue: chart.minValue,
                maxValue: chart.maxValue,
            }),
        });
    }

    return {
        kind: "spectral_supported",
        title: selectedMode.label,
        detail: "",
        meta: [
            `operator / ${selectedOperator.label}`,
            `frame / ${String(state.selectedFrameIndex)}`,
            `plane / ${planeContext.runtimePlaneClass}`,
        ],
        modeLabel: selectedMode.label,
        runtimePlaneClass: planeContext.runtimePlaneClass,
        series,
            previewBins: previewMeasurementBins,
            measurement: {
                previewBinIndex: selectedMeasurementIndex,
                frequencyHz: selectedMeasurementBin.frequency,
            re: selectedMeasurementBin.re,
            im: selectedMeasurementBin.im,
            emphasisLabel: getMeasurementEmphasisLabelV0(selectedMode.id),
        },
        chart,
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

    return kind === "drag_and_drop" ? "drag_drop" : "picker";
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
    return {
        title: "failure",
        detail: code ?? "failure",
        seam,
        code,
    };
}

function getFailureScopeCopy(scope: FailureScopeV0): {
    label: string;
    regionTitle: string;
    panelDetail: string;
} {
    if (scope === "source") {
        return {
            label: "source",
            regionTitle: "failure",
            panelDetail: "source",
        };
    }

    return {
        label: "run",
        regionTitle: "failure",
        panelDetail: "run",
    };
}

const state: ShellViewStateV0 = {
    activeRegimeId: "temporal",
    selectedOperatorId: "P3",
    selectedFrameIndex: 0,
    selectedSpectralBinIndex: null,
    frameValidationMessage: null,
    selectedPlaneModeId: "both",
    planeValidationMessage: null,
    selectedSource: null,
    sourceInteractionKind: null,
    sourceStatus: createStatusCard("neutral", "awaiting"),
    runStatus: createStatusCard("neutral", "idle"),
    lastRunResult: null,
    latestFailure: null,
    latestFailureScope: null,
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
    const detailLine =
        card.detail === undefined || card.detail.length === 0
            ? ""
            : `<div class="status-detail">${escapeHtml(card.detail)}</div>`;

    node.innerHTML = `
      <div class="status-heading">${escapeHtml(card.title)}</div>
      ${metaLine}
      ${detailLine}
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
    operatorStackNode.innerHTML = OPERATOR_OPTIONS_V0.map((operator) => `
      <button
        type="button"
        class="operator-chip ${operator.id === state.selectedOperatorId ? "operator-chip-selected" : ""}"
        data-operator-id="${escapeHtml(operator.id)}"
        aria-pressed="${operator.id === state.selectedOperatorId ? "true" : "false"}"
      >
        <span class="operator-chip-label">${escapeHtml(operator.label)}</span>
        <span class="operator-chip-meta">
          ${operator.isRuntimeTarget ? "fixed" : "local"}
        </span>
      </button>
    `).join("");
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
      </button>
    `).join("");
    renderStatusCard(planeStatusNode, planeContext.statusCard);
}

function renderMainPane(): void {
    if (state.latestFailure !== null && state.latestFailureScope !== null) {
        const failureSummary = getFailureSummary(state.latestFailure);
        const failureScope = getFailureScopeCopy(state.latestFailureScope);

        mainStatusNode.innerHTML = `
          <div class="main-callout main-callout-failure">
            <div class="main-callout-label">failure</div>
            <div class="main-callout-meta">
              <span>region / ${escapeHtml(failureScope.label)}</span>
              <span>seam / ${escapeHtml(failureSummary.seam ?? "app_shell")}</span>
              <span>code / ${escapeHtml(failureSummary.code ?? "none")}</span>
            </div>
          </div>
        `;
    } else {
        const paneView = getInspectionPaneViewModel();

        const toneClass =
            paneView.kind === "pane_failure"
                ? "main-callout-failure"
                : paneView.kind === "spectral_supported"
                ? "main-callout-success"
                : "main-callout-neutral";
        const label =
            paneView.kind === "spectral_supported"
                ? "live"
                : paneView.kind === "pane_failure"
                ? "failure"
                : paneView.kind;

        mainStatusNode.innerHTML = `
          <div class="main-callout ${toneClass}">
            <div class="main-callout-label">${escapeHtml(label)}</div>
            <div class="main-callout-meta">
              ${paneView.kind === "pane_failure"
                    ? `<span>seam / ${escapeHtml(paneView.seam)}</span><span>code / ${escapeHtml(paneView.code)}</span>`
                    : ""}
              ${"meta" in paneView ? paneView.meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("") : ""}
            </div>
          </div>
        `;
    }

    const paneView = getInspectionPaneViewModel();

    if (state.latestFailure !== null && state.latestFailureScope !== null) {
        const failureSummary = getFailureSummary(state.latestFailure);
        const failureScope = getFailureScopeCopy(state.latestFailureScope);

        mainResultNode.innerHTML = `
          <div class="result-panel result-panel-failure">
            <div class="result-summary-grid">
              <div class="result-summary">
                <div class="result-key">Region</div>
                <div class="result-value">${escapeHtml(failureScope.label)}</div>
              </div>
              <div class="result-summary">
                <div class="result-key">Seam</div>
                <div class="result-value">${escapeHtml(failureSummary.seam ?? "app_shell")}</div>
              </div>
              <div class="result-summary">
                <div class="result-key">Code</div>
                <div class="result-value">${escapeHtml(failureSummary.code ?? "none")}</div>
              </div>
              <div class="failure-detail-card">
                <div class="result-key">State</div>
                <div class="failure-detail-value">${escapeHtml(failureSummary.detail)}</div>
              </div>
            </div>
          </div>
        `;
        return;
    }

    if (paneView.kind === "spectral_supported") {
        mainResultNode.innerHTML = `
          <div class="result-panel result-panel-live">
            <div class="result-summary-grid">
              <div class="result-summary">
                <div class="result-key">Selected Source</div>
                <div class="result-value">${escapeHtml(
                    state.lastRunResult?.selected_source_reference?.display_name ?? state.selectedSource?.original_file_name ?? "--"
                )}</div>
              </div>
              <div class="result-summary">
                <div class="result-key">Runtime Render</div>
                <div class="result-value">${escapeHtml(getRuntimeRenderClassLabel())}</div>
              </div>
              <div class="result-summary">
                <div class="result-key">Plane Mode</div>
                <div class="result-value">${escapeHtml(paneView.modeLabel)}</div>
              </div>
            </div>
            <div class="measurement-panel">
              <div class="measurement-panel-header">
                <div class="result-key">Readout</div>
                <div class="measurement-chip">Preview Bin ${escapeHtml(String(paneView.measurement.previewBinIndex))}</div>
              </div>
              <div class="measurement-grid">
                <div class="measurement-card">
                  <div class="result-key">Frequency</div>
                  <div class="measurement-value">${escapeHtml(paneView.measurement.frequencyHz.toFixed(2))} Hz</div>
                </div>
                <div class="measurement-card">
                  <div class="result-key">re</div>
                  <div class="measurement-value">${escapeHtml(paneView.measurement.re.toFixed(6))}</div>
                </div>
                <div class="measurement-card">
                  <div class="result-key">im</div>
                  <div class="measurement-value">${escapeHtml(paneView.measurement.im.toFixed(6))}</div>
                </div>
                <div class="measurement-card">
                  <div class="result-key">Mode</div>
                  <div class="measurement-value">${escapeHtml(paneView.measurement.emphasisLabel)}</div>
                </div>
              </div>
            </div>
            <div class="spectral-panel">
              <div class="spectral-panel-header">
                <div class="result-key">P3</div>
                <div class="spectral-legend">
                  ${paneView.series.map((series) => `
                    <span class="spectral-legend-item">
                      <span class="spectral-swatch ${series.colorClass}"></span>
                      ${escapeHtml(series.label)}
                    </span>
                  `).join("")}
                </div>
              </div>
              <svg
                class="spectral-chart"
                viewBox="0 0 ${String(paneView.chart.viewBoxWidth)} ${String(paneView.chart.viewBoxHeight)}"
                role="img"
                aria-label="Shell-local spectral preview with coordinate grid"
              >
                <rect
                  x="0"
                  y="0"
                  width="${String(paneView.chart.viewBoxWidth)}"
                  height="${String(paneView.chart.viewBoxHeight)}"
                  class="spectral-chart-bg"
                ></rect>
                ${paneView.chart.xTicks.map((tick) => `
                  <line
                    class="spectral-grid-line"
                    x1="${tick.position.toFixed(2)}"
                    y1="${paneView.chart.plotTop.toFixed(2)}"
                    x2="${tick.position.toFixed(2)}"
                    y2="${(paneView.chart.plotTop + paneView.chart.plotHeight).toFixed(2)}"
                  ></line>
                `).join("")}
                ${paneView.chart.yTicks.map((tick) => `
                  <line
                    class="spectral-grid-line"
                    x1="${paneView.chart.plotLeft.toFixed(2)}"
                    y1="${tick.position.toFixed(2)}"
                    x2="${(paneView.chart.plotLeft + paneView.chart.plotWidth).toFixed(2)}"
                    y2="${tick.position.toFixed(2)}"
                  ></line>
                `).join("")}
                <line
                  class="spectral-zero-line"
                  x1="${paneView.chart.plotLeft.toFixed(2)}"
                  y1="${paneView.chart.zeroLineY.toFixed(2)}"
                  x2="${(paneView.chart.plotLeft + paneView.chart.plotWidth).toFixed(2)}"
                  y2="${paneView.chart.zeroLineY.toFixed(2)}"
                ></line>
                <line
                  class="spectral-axis-line"
                  x1="${paneView.chart.plotLeft.toFixed(2)}"
                  y1="${paneView.chart.plotTop.toFixed(2)}"
                  x2="${paneView.chart.plotLeft.toFixed(2)}"
                  y2="${(paneView.chart.plotTop + paneView.chart.plotHeight).toFixed(2)}"
                ></line>
                <line
                  class="spectral-axis-line"
                  x1="${paneView.chart.plotLeft.toFixed(2)}"
                  y1="${(paneView.chart.plotTop + paneView.chart.plotHeight).toFixed(2)}"
                  x2="${(paneView.chart.plotLeft + paneView.chart.plotWidth).toFixed(2)}"
                  y2="${(paneView.chart.plotTop + paneView.chart.plotHeight).toFixed(2)}"
                ></line>
                ${paneView.series.map((series) => `
                  <path class="spectral-path ${series.colorClass}" d="${series.path}"></path>
                `).join("")}
                ${paneView.chart.selectedMarkers.map((marker) => `
                  <g class="spectral-marker-group">
                    <circle
                      class="spectral-marker ${marker.colorClass}"
                      cx="${marker.x.toFixed(2)}"
                      cy="${marker.y.toFixed(2)}"
                      r="4.5"
                    ></circle>
                  </g>
                `).join("")}
                ${paneView.chart.yTicks.map((tick) => `
                  <g class="spectral-axis-label-group">
                    <line
                      class="spectral-axis-tick"
                      x1="${(paneView.chart.plotLeft - 6).toFixed(2)}"
                      y1="${tick.position.toFixed(2)}"
                      x2="${paneView.chart.plotLeft.toFixed(2)}"
                      y2="${tick.position.toFixed(2)}"
                    ></line>
                    <text
                      class="spectral-axis-label spectral-axis-label-y"
                      x="${(paneView.chart.plotLeft - 10).toFixed(2)}"
                      y="${(tick.position + 4).toFixed(2)}"
                    >${escapeHtml(tick.label)}</text>
                  </g>
                `).join("")}
                ${paneView.chart.xTicks.map((tick) => `
                  <g class="spectral-axis-label-group">
                    <line
                      class="spectral-axis-tick"
                      x1="${tick.position.toFixed(2)}"
                      y1="${(paneView.chart.plotTop + paneView.chart.plotHeight).toFixed(2)}"
                      x2="${tick.position.toFixed(2)}"
                      y2="${(paneView.chart.plotTop + paneView.chart.plotHeight + 6).toFixed(2)}"
                    ></line>
                    <text
                      class="spectral-axis-label spectral-axis-label-x"
                      x="${tick.position.toFixed(2)}"
                      y="${(paneView.chart.plotTop + paneView.chart.plotHeight + 20).toFixed(2)}"
                    >${escapeHtml(tick.label)}</text>
                  </g>
                `).join("")}
                <text
                  class="spectral-axis-title spectral-axis-title-x"
                  x="${(paneView.chart.plotLeft + (paneView.chart.plotWidth / 2)).toFixed(2)}"
                  y="${(paneView.chart.viewBoxHeight - 10).toFixed(2)}"
                >${escapeHtml(paneView.chart.xAxisTitle)}</text>
                <text
                  class="spectral-axis-title spectral-axis-title-y"
                  x="18"
                  y="${(paneView.chart.plotTop + (paneView.chart.plotHeight / 2)).toFixed(2)}"
                  transform="rotate(-90 18 ${(paneView.chart.plotTop + (paneView.chart.plotHeight / 2)).toFixed(2)})"
                >${escapeHtml(paneView.chart.yAxisTitle)}</text>
              </svg>
            </div>
            <div class="result-summary">
              <div class="result-key">Bins</div>
              <div class="bin-preview-grid">
                ${paneView.previewBins.map((bin, index) => `
                  <button
                    type="button"
                    class="bin-preview-card ${index === paneView.measurement.previewBinIndex ? "bin-preview-card-active" : ""}"
                    data-preview-bin-index="${escapeHtml(String(index))}"
                    aria-pressed="${index === paneView.measurement.previewBinIndex ? "true" : "false"}"
                  >
                    <div class="bin-preview-frequency">Preview Bin ${escapeHtml(String(index))}</div>
                    <div class="bin-preview-values">${escapeHtml(bin.frequency.toFixed(2))} Hz</div>
                    <div class="bin-preview-values">re ${escapeHtml(bin.re.toFixed(4))}</div>
                    <div class="bin-preview-values">im ${escapeHtml(bin.im.toFixed(4))}</div>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        `;
        return;
    }

    if (paneView.kind === "pane_failure") {
        mainResultNode.innerHTML = `
          <div class="result-panel result-panel-failure">
            <div class="result-summary-grid">
              <div class="result-summary">
                <div class="result-key">Pane</div>
                <div class="result-value">failure</div>
              </div>
              <div class="result-summary">
                <div class="result-key">Seam</div>
                <div class="result-value">${escapeHtml(paneView.seam)}</div>
              </div>
              <div class="result-summary">
                <div class="result-key">Code</div>
                <div class="result-value">${escapeHtml(paneView.code)}</div>
              </div>
            </div>
            <div class="main-callout-meta">
              ${paneView.meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
          </div>
        `;
        return;
    }

    if (paneView.kind === "unavailable") {
        mainResultNode.innerHTML = `
          <div class="result-panel result-panel-unavailable">
            <div class="result-summary">
              <div class="result-key">Pane</div>
              <div class="result-value">${escapeHtml(paneView.title)}</div>
            </div>
            <div class="main-callout-meta">
              ${paneView.meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
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
              <div class="result-key">Runtime</div>
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
          <span>awaiting_run</span>
        </div>
      </div>
    `;
}

function renderShell(): void {
    const activeRegime = getActiveRegimeDescriptor();
    const runtimeOperator = getRuntimeOperatorDescriptor();
    const frameContext = getFrameExposureContext();
    const planeContext = getPlaneModeExposureContext();

    sourceNameNode.textContent = state.selectedSource?.original_file_name ?? "--";
    sourceKindNode.textContent = formatInteractionKind(state.sourceInteractionKind);
    sourcePathNode.textContent = state.selectedSource?.runtime_handoff_relative_path ?? "--";

    contextSourceNode.textContent = state.selectedSource?.original_file_name ?? "--";
    contextRegimeNode.textContent = `${activeRegime.label} / ${activeRegime.statusLabel.toLowerCase()}`;
    contextOperatorNode.textContent = `${runtimeOperator.label} / fixed`;
    contextFrameNode.textContent = `${String(FIXED_INSPECTION_REQUEST_V0.stage_selection.frame_index)} / fixed`;
    contextPlaneNode.textContent = `${planeContext.runtimePlaneClass} / fixed`;

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
    state.latestFailureScope = "source";
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
    state.latestFailureScope = "run";
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
    state.selectedSpectralBinIndex = null;
    state.frameValidationMessage = null;
    state.planeValidationMessage = null;
    state.lastRunResult = null;
    state.latestFailure = null;
    state.latestFailureScope = null;
    state.hasRunAttempted = false;
    state.sourceStatus = createStatusCard("busy", "uploading", file.name);
    state.runStatus = createStatusCard("neutral", "idle");
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
    state.latestFailureScope = null;
    state.sourceStatus = createStatusCard("success", "ready", result.original_file_name);
    state.runStatus = createStatusCard("neutral", "ready");
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
    state.selectedSpectralBinIndex = null;
    state.planeValidationMessage = null;
    state.latestFailure = null;
    state.latestFailureScope = null;
    state.lastRunResult = null;
    state.runStatus = createStatusCard("busy", "running");
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
    state.selectedSpectralBinIndex = null;
    state.frameValidationMessage = null;
    state.lastRunResult = result;
    state.latestFailure = null;
    state.latestFailureScope = null;
    state.runStatus = createStatusCard("success", "completed", result.stage_selection.stage);
    renderShell();
}

function clearShellStateV0(): void {
    state.selectedSource = null;
    state.sourceInteractionKind = null;
    state.selectedFrameIndex = 0;
    state.selectedSpectralBinIndex = null;
    state.frameValidationMessage = null;
    state.planeValidationMessage = null;
    state.lastRunResult = null;
    state.latestFailure = null;
    state.latestFailureScope = null;
    state.hasRunAttempted = false;
    state.isUploading = false;
    state.isRunning = false;
    state.sourceStatus = createStatusCard("neutral", "cleared");
    state.runStatus = createStatusCard("neutral", "cleared");
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
        state.frameValidationMessage = "unavailable";
        renderShell();
        return;
    }

    if (!Number.isInteger(nextFrameIndex)) {
        state.frameValidationMessage = "integer_only";
        renderShell();
        return;
    }

    if (nextFrameIndex !== frameContext.runtimeFrameIndex) {
        state.frameValidationMessage = `out_of_range / ${String(frameContext.runtimeFrameIndex)}`;
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
        state.planeValidationMessage = `${planeModeId} / unavailable`;
        renderShell();
        return;
    }

    state.selectedPlaneModeId = planeModeId;
    state.selectedSpectralBinIndex = null;
    state.planeValidationMessage = null;
    renderShell();
});

mainResultNode.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
        return;
    }

    const previewBinButton = target.closest<HTMLButtonElement>("[data-preview-bin-index]");

    if (previewBinButton === null) {
        return;
    }

    const previewBinIndex = Number(previewBinButton.dataset.previewBinIndex);

    if (!Number.isInteger(previewBinIndex) || previewBinIndex < 0) {
        return;
    }

    state.selectedSpectralBinIndex = previewBinIndex;
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
    state.selectedSpectralBinIndex = null;
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
