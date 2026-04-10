import "./shell_host_v0.css";

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
          Regime-capable shell structure only. No execution, rendering, or semantic behavior is wired here yet.
        </p>
      </div>

      <section class="control-region" aria-labelledby="source-region-title">
        <div class="control-label">Source</div>
        <h2 id="source-region-title" class="control-title">Awaiting intake wiring</h2>
        <p class="control-copy">Drag/drop and file picker stay deferred in this packet.</p>
      </section>

      <section class="control-region" aria-labelledby="run-region-title">
        <div class="control-label">Run</div>
        <h2 id="run-region-title" class="control-title">Run controls deferred</h2>
        <p class="control-copy">Run, rerun, and status remain placeholders only.</p>
      </section>

      <section class="control-region" aria-labelledby="regime-region-title">
        <div class="control-label">Regime</div>
        <h2 id="regime-region-title" class="control-title">Regime-capable host</h2>
        <div class="regime-stack" role="list" aria-label="Regime Availability">
          <div class="regime-chip regime-chip-active" role="listitem" aria-current="true">
            TemporalRegime
            <span>Active</span>
          </div>
          <div class="regime-chip regime-chip-inactive" role="listitem" aria-disabled="true">
            SupportRegime
            <span>Deferred</span>
          </div>
          <div class="regime-chip regime-chip-inactive" role="listitem" aria-disabled="true">
            SymbolicRegime
            <span>Deferred</span>
          </div>
        </div>
      </section>

      <section class="control-region" aria-labelledby="operator-region-title">
        <div class="control-label">Operator</div>
        <h2 id="operator-region-title" class="control-title">Operator exposure placeholder</h2>
        <p class="control-copy">P0, P1, P2, P3, and D3 will route here in later packets.</p>
      </section>

      <section class="control-region" aria-labelledby="frame-region-title">
        <div class="control-label">Frame</div>
        <h2 id="frame-region-title" class="control-title">Frame context placeholder</h2>
        <p class="control-copy">Explicit run navigation remains unwired for now.</p>
      </section>

      <section class="control-region" aria-labelledby="plane-mode-region-title">
        <div class="control-label">Plane Mode</div>
        <h2 id="plane-mode-region-title" class="control-title">Plane exposure placeholder</h2>
        <p class="control-copy">Plane mode stays separate from frame and operator context.</p>
      </section>
    </aside>

    <main class="inspection-pane" aria-label="Main Inspection Pane">
      <header class="context-header">
        <div class="context-item">
          <span class="context-key">Source</span>
          <span class="context-value">No source selected</span>
        </div>
        <div class="context-item">
          <span class="context-key">Regime</span>
          <span class="context-value">TemporalRegime</span>
        </div>
        <div class="context-item">
          <span class="context-key">Operator</span>
          <span class="context-value">Not selected</span>
        </div>
        <div class="context-item">
          <span class="context-key">Frame</span>
          <span class="context-value">-- / --</span>
        </div>
        <div class="context-item">
          <span class="context-key">Plane Mode</span>
          <span class="context-value">Not selected</span>
        </div>
      </header>

      <section class="inspection-stage" aria-labelledby="inspection-stage-title">
        <div class="inspection-kicker">Main Inspection Pane</div>
        <h2 id="inspection-stage-title" class="inspection-title">Local object exposure surface reserved</h2>
        <p class="inspection-copy">
          This pane remains dominant by design. It is reserved for future lawful inspection output after source,
          execution, plane building, and rendering seams are explicitly wired.
        </p>
        <div class="inspection-placeholder" aria-hidden="true">
          <div class="placeholder-grid"></div>
          <div class="placeholder-frame">
            <span>Inspection output not wired</span>
          </div>
        </div>
      </section>
    </main>
  </div>
`;
