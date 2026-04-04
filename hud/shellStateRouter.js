"use strict";

function resolveRunLabel(record) {
    return record?.context_run_label ?? record?.run_label ?? null;
}

function filterActiveLogEntries(log, activeRunLabel) {
    if (!Array.isArray(log) || !activeRunLabel) return [];
    return log.filter((entry) => resolveRunLabel(entry) === activeRunLabel);
}

export function annotateShellRecord(record, {
    runId = null,
    runResult = null,
    sourceFamilyLabel = "unspecified",
} = {}) {
    if (!record || typeof record !== "object") return record;

    const activeRunLabel = runResult?.run_label ?? record?.run_label ?? null;
    return {
        ...record,
        context_run_id: runId,
        context_run_label: activeRunLabel,
        source_family_label: record?.source_family_label ?? sourceFamilyLabel,
    };
}

export function buildActiveShellState({
    runId = null,
    runResult = null,
    workbench = null,
    requestLog = [],
    replayLog = [],
    sourceFamilyLabel = "unspecified",
    runStatus = "idle",
    runError = null,
} = {}) {
    const activeRunLabel = runResult?.run_label ?? null;
    const activeRequestLog = filterActiveLogEntries(requestLog, activeRunLabel);
    const activeReplayLog = filterActiveLogEntries(replayLog, activeRunLabel);
    const activeRequest = activeRequestLog[0] ?? null;

    return {
        runId,
        activeRunLabel,
        workbench,
        runResult,
        activeRequest,
        requestLog: activeRequestLog,
        replayLog: activeReplayLog,
        requestHistoryCount: Array.isArray(requestLog) ? requestLog.length : 0,
        replayHistoryCount: Array.isArray(replayLog) ? replayLog.length : 0,
        sourceFamilyLabel,
        runStatus,
        runError,
        hasActiveResult: !!(runResult?.ok && workbench),
    };
}
