param(
    [string]$ListenHost = "127.0.0.1",
    [int]$BridgePort = 4318,
    [int]$UiPort = 4173,
    [switch]$StopStaleRepoLocalProcesses
)

if ([string]::IsNullOrWhiteSpace($ListenHost)) {
    throw "start_local_shell_v0.ps1 requires ListenHost to be a non-empty string."
}

if ($BridgePort -le 0) {
    throw "start_local_shell_v0.ps1 requires BridgePort to be a positive integer."
}

if ($UiPort -le 0) {
    throw "start_local_shell_v0.ps1 requires UiPort to be a positive integer."
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$logRoot = Join-Path $repoRoot ".local/logs"

function Invoke-CanonicalLauncher {
    param(
        [string]$Helper,
        [string]$ScriptPath,
        [int]$Port
    )

    try {
        return & $ScriptPath `
            -ListenHost $ListenHost `
            -Port $Port `
            -StopStaleRepoLocalProcesses:$StopStaleRepoLocalProcesses
    } catch {
        [pscustomobject]@{
            helper = $Helper
            status = "launcher_error"
            host = $ListenHost
            port = $Port
            stdout_log = Join-Path $logRoot "$Helper.stdout.log"
            stderr_log = Join-Path $logRoot "$Helper.stderr.log"
            message = $_.Exception.Message
        }
    }
}

$hostBridgeResult = Invoke-CanonicalLauncher `
    -Helper "host_bridge" `
    -ScriptPath (Join-Path $PSScriptRoot "start_local_host_bridge_v0.ps1") `
    -Port $BridgePort

$viteUiResult = Invoke-CanonicalLauncher `
    -Helper "vite_ui" `
    -ScriptPath (Join-Path $PSScriptRoot "start_vite_ui_v0.ps1") `
    -Port $UiPort

$successfulStatuses = @("started", "already_running", "launch_started_unverified")
$bridgeSucceeded = $successfulStatuses -contains $hostBridgeResult.status
$uiSucceeded = $successfulStatuses -contains $viteUiResult.status

$overallStatus =
    if ($bridgeSucceeded -and $uiSucceeded) {
        "ready"
    } elseif ($bridgeSucceeded -or $uiSucceeded) {
        "partial_failure"
    } else {
        "failed"
    }

$uiUrl =
    if ($uiSucceeded -and $null -ne $viteUiResult.host -and $null -ne $viteUiResult.port) {
        "http://$($viteUiResult.host):$($viteUiResult.port)/"
    } else {
        $null
    }

$summaryMessage =
    switch ($overallStatus) {
        "ready" {
            "Canonical local shell pair is available."
        }
        "partial_failure" {
            "One launcher completed while the other reported a non-ready posture. Inspect the child results before continuing shell testing."
        }
        default {
            "Neither launcher reported a ready posture. Inspect the child results and logs."
        }
    }

[pscustomobject]@{
    helper = "local_shell"
    status = $overallStatus
    listen_host = $ListenHost
    bridge = $hostBridgeResult
    ui = $viteUiResult
    ui_url = $uiUrl
    log_files = [pscustomobject]@{
        host_bridge_stdout = $hostBridgeResult.stdout_log
        host_bridge_stderr = $hostBridgeResult.stderr_log
        vite_ui_stdout = $viteUiResult.stdout_log
        vite_ui_stderr = $viteUiResult.stderr_log
    }
    message = $summaryMessage
}
