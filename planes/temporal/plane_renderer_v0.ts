import type {
    PlaneD3DiagnosticView,
    PlaneP0TemporalView,
    PlaneP1TemporalView,
    PlaneP2TemporalView,
    PlaneP3SpectralView,
} from "../../types/temporal/temporal_floor_types_v0";

export type SupportedTemporalPlane =
    | PlaneP0TemporalView
    | PlaneP1TemporalView
    | PlaneP2TemporalView
    | PlaneP3SpectralView
    | PlaneD3DiagnosticView;

interface ScalarPoint {
    x: number;
    y: number;
}

interface ComplexCartesianPoint {
    frequency: number;
    re: number;
    im: number;
}

interface DiagnosticScalarSeries {
    series_name: "magnitude" | "phase";
    points: ScalarPoint[];
}

interface DirectTemporalRender {
    render_class:
        | "RenderPlaneP0Temporal"
        | "RenderPlaneP1Temporal"
        | "RenderPlaneP2Temporal";
    plane_class:
        | "PlaneP0TemporalView"
        | "PlaneP1TemporalView"
        | "PlaneP2TemporalView";
    projection_kind: "direct_primary";
    primary_handle: string;
    x_axis: "time";
    y_axis: "signal";
    samples: ScalarPoint[];
}

interface DirectSpectralRender {
    render_class: "RenderPlaneP3Spectral";
    plane_class: "PlaneP3SpectralView";
    projection_kind: "direct_primary";
    primary_handle: string;
    x_axis: "frequency";
    y_axis: "complex_component";
    bins: ComplexCartesianPoint[];
}

interface DerivedDiagnosticRender {
    render_class: "RenderPlaneD3Diagnostic";
    plane_class: "PlaneD3DiagnosticView";
    projection_kind: "derived_diagnostic";
    primary_handle: string;
    diagnostics_handle: string;
    x_axis: "frequency";
    y_axis: "derived_diagnostic_value";
    series: DiagnosticScalarSeries[];
    indicators: {
        nan_detected?: boolean;
        inf_detected?: boolean;
    };
}

export type TemporalPlaneRenderV0 =
    | DirectTemporalRender
    | DirectSpectralRender
    | DerivedDiagnosticRender;

function isFiniteNumber(value: unknown): value is number {
    return typeof value === "number" && Number.isFinite(value);
}

function assertNonEmptyString(value: unknown, fieldName: string): asserts value is string {
    if (typeof value !== "string" || value.trim().length === 0) {
        throw new TypeError(`PlaneRenderer v0 expected ${fieldName} to be a non-empty string.`);
    }
}

function assertScalarPointArrays(xValues: unknown, yValues: unknown, fieldName: string): void {
    if (!Array.isArray(xValues) || !Array.isArray(yValues) || xValues.length !== yValues.length) {
        throw new TypeError(
            `PlaneRenderer v0 expected ${fieldName} arrays to be present and have the same length.`
        );
    }

    if (!xValues.every(isFiniteNumber) || !yValues.every(isFiniteNumber)) {
        throw new TypeError(
            `PlaneRenderer v0 expected ${fieldName} arrays to contain only finite numeric values.`
        );
    }
}

function renderPlaneP0(plane: PlaneP0TemporalView): DirectTemporalRender {
    assertNonEmptyString(plane.primary_handle, "primary_handle");
    assertScalarPointArrays(plane.t, plane.x, "PlaneP0TemporalView");

    return {
        render_class: "RenderPlaneP0Temporal",
        plane_class: "PlaneP0TemporalView",
        projection_kind: "direct_primary",
        primary_handle: plane.primary_handle,
        x_axis: "time",
        y_axis: "signal",
        samples: plane.t.map((time, index) => ({
            x: time,
            y: plane.x[index],
        })),
    };
}

function renderGridSignalPlane(
    plane: PlaneP1TemporalView | PlaneP2TemporalView
): DirectTemporalRender {
    assertNonEmptyString(plane.primary_handle, "primary_handle");

    if (!isFiniteNumber(plane.grid_t0) || !isFiniteNumber(plane.Fs) || plane.Fs <= 0) {
        throw new TypeError(
            `PlaneRenderer v0 expected ${plane.plane_class} to carry finite grid_t0 and positive Fs.`
        );
    }

    if (!Number.isInteger(plane.n) || plane.n < 0) {
        throw new TypeError(`PlaneRenderer v0 expected ${plane.plane_class} to carry integer n.`);
    }

    if (!Array.isArray(plane.x) || plane.x.length !== plane.n || !plane.x.every(isFiniteNumber)) {
        throw new TypeError(
            `PlaneRenderer v0 expected ${plane.plane_class} x values to match n and remain finite.`
        );
    }

    return {
        render_class:
            plane.plane_class === "PlaneP1TemporalView"
                ? "RenderPlaneP1Temporal"
                : "RenderPlaneP2Temporal",
        plane_class: plane.plane_class,
        projection_kind: "direct_primary",
        primary_handle: plane.primary_handle,
        x_axis: "time",
        y_axis: "signal",
        samples: plane.x.map((value, index) => ({
            x: plane.grid_t0 + (index / plane.Fs),
            y: value,
        })),
    };
}

function renderPlaneP3(plane: PlaneP3SpectralView): DirectSpectralRender {
    assertNonEmptyString(plane.primary_handle, "primary_handle");

    if (!isFiniteNumber(plane.Fs) || plane.Fs <= 0 || !Number.isInteger(plane.n) || plane.n <= 0) {
        throw new TypeError(
            "PlaneRenderer v0 expected PlaneP3SpectralView to carry positive finite Fs and positive integer n."
        );
    }

    if (!isFiniteNumber(plane.df) || plane.df <= 0) {
        throw new TypeError("PlaneRenderer v0 expected PlaneP3SpectralView to carry positive df.");
    }

    if (!Array.isArray(plane.bins)) {
        throw new TypeError("PlaneRenderer v0 expected PlaneP3SpectralView bins to be an array.");
    }

    const bins = plane.bins.map((bin) => {
        if (
            !isFiniteNumber(bin.f) ||
            !isFiniteNumber(bin.re) ||
            !isFiniteNumber(bin.im)
        ) {
            throw new TypeError(
                "PlaneRenderer v0 expected PlaneP3SpectralView bins to remain finite Cartesian points."
            );
        }

        return {
            frequency: bin.f,
            re: bin.re,
            im: bin.im,
        };
    });

    return {
        render_class: "RenderPlaneP3Spectral",
        plane_class: "PlaneP3SpectralView",
        projection_kind: "direct_primary",
        primary_handle: plane.primary_handle,
        x_axis: "frequency",
        y_axis: "complex_component",
        bins,
    };
}

function renderDiagnosticSeries(
    seriesName: "magnitude" | "phase",
    values: PlaneD3DiagnosticView["magnitude"] | PlaneD3DiagnosticView["phase"]
): DiagnosticScalarSeries | null {
    if (values === undefined) {
        return null;
    }

    if (!Array.isArray(values)) {
        throw new TypeError(
            `PlaneRenderer v0 expected PlaneD3DiagnosticView ${seriesName} to be an array when present.`
        );
    }

    return {
        series_name: seriesName,
        points: values.map((value) => {
            if (!isFiniteNumber(value.f) || !isFiniteNumber(value.value)) {
                throw new TypeError(
                    `PlaneRenderer v0 expected PlaneD3DiagnosticView ${seriesName} values to remain finite.`
                );
            }

            return {
                x: value.f,
                y: value.value,
            };
        }),
    };
}

function renderPlaneD3(plane: PlaneD3DiagnosticView): DerivedDiagnosticRender {
    assertNonEmptyString(plane.primary_handle, "primary_handle");
    assertNonEmptyString(plane.diagnostics_handle, "diagnostics_handle");

    const series = [
        renderDiagnosticSeries("magnitude", plane.magnitude),
        renderDiagnosticSeries("phase", plane.phase),
    ].filter((value): value is DiagnosticScalarSeries => value !== null);

    return {
        render_class: "RenderPlaneD3Diagnostic",
        plane_class: "PlaneD3DiagnosticView",
        projection_kind: "derived_diagnostic",
        primary_handle: plane.primary_handle,
        diagnostics_handle: plane.diagnostics_handle,
        x_axis: "frequency",
        y_axis: "derived_diagnostic_value",
        series,
        indicators: {
            nan_detected: plane.nan_detected,
            inf_detected: plane.inf_detected,
        },
    };
}

export function renderPlaneV0(plane: SupportedTemporalPlane): TemporalPlaneRenderV0 {
    if (plane === null || typeof plane !== "object" || Array.isArray(plane)) {
        throw new TypeError("PlaneRenderer v0 expects one declared plane object per call.");
    }

    if (typeof plane.plane_class !== "string") {
        throw new TypeError("PlaneRenderer v0 expected the incoming object to carry plane_class.");
    }

    switch (plane.plane_class) {
        case "PlaneP0TemporalView":
            return renderPlaneP0(plane);
        case "PlaneP1TemporalView":
            return renderGridSignalPlane(plane);
        case "PlaneP2TemporalView":
            return renderGridSignalPlane(plane);
        case "PlaneP3SpectralView":
            return renderPlaneP3(plane);
        case "PlaneD3DiagnosticView":
            return renderPlaneD3(plane);
        default:
            throw new Error(
                `PlaneRenderer v0 does not support plane_class ${plane.plane_class}.`
            );
    }
}
