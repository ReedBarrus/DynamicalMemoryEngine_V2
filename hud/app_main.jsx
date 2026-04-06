// hud/app_main.jsx
//
// DME Home / Router shell entry point.
// Thin top-level face above dedicated viewer routes and transitional legacy composition.
//
// Entry separation:
//   index.html     -> hud/main.jsx           -> DoorOneStructuralMemoryHudDemo (lab)
//   demo.html      -> hud/demo_main.jsx      -> MetaLayerConsultationDemo (public)
//   execution.html -> hud/execution_main.jsx -> MetaLayerObjectExecutionShell (operator)
//   app.html       -> hud/app_main.jsx       -> HomeRouterShell (top-level router)
//
// The router shell preserves existing surfaces while demoting the old composed app
// to a transitional legacy route instead of the default top-level destination.

import React from "react";
import ReactDOM from "react-dom/client";
import HomeRouterShell from "./HomeRouterShell.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HomeRouterShell />
    </React.StrictMode>
);
