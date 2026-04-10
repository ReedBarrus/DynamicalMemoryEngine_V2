param(
    [string]$ListenHost = "127.0.0.1",
    [int]$Port = 4318,
    [switch]$StopStaleRepoLocalProcesses
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$logRoot = Join-Path $repoRoot ".local/logs"
$stdoutPath = Join-Path $logRoot "host_bridge.stdout.log"
$stderrPath = Join-Path $logRoot "host_bridge.stderr.log"

if ($Port -le 0) {
    throw "start_local_host_bridge_v0.ps1 requires Port to be a positive integer."
}

if ([string]::IsNullOrWhiteSpace($ListenHost)) {
    throw "start_local_host_bridge_v0.ps1 requires ListenHost to be a non-empty string."
}

if (-not (Test-Path -LiteralPath $logRoot)) {
    New-Item -ItemType Directory -Path $logRoot -Force | Out-Null
}

function Clear-LauncherLogFile {
    param(
        [string]$Path
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        return
    }

    for ($attempt = 0; $attempt -lt 10; $attempt++) {
        try {
            Remove-Item -LiteralPath $Path -Force -ErrorAction Stop
            return
        } catch {
            if ($attempt -eq 9) {
                throw
            }

            Start-Sleep -Milliseconds 200
        }
    }
}

$preflight = & (Join-Path $PSScriptRoot "normalize_local_shell_launch_v0.ps1") `
    -Helper "host_bridge" `
    -Port $Port

if ($StopStaleRepoLocalProcesses) {
    $preflight = & (Join-Path $PSScriptRoot "normalize_local_shell_launch_v0.ps1") `
        -Helper "host_bridge" `
        -Port $Port `
        -Stop
}

if (-not $StopStaleRepoLocalProcesses -and $preflight.status -eq "already_running") {
    [pscustomobject]@{
        helper = "host_bridge"
        status = "already_running"
        host = $ListenHost
        port = $Port
        matched_process_ids = @($preflight.repo_local_listener_process_ids)
        stdout_log = $stdoutPath
        stderr_log = $stderrPath
        message = "A repo-local host bridge already appears active for this port. Reuse it or relaunch with -StopStaleRepoLocalProcesses."
    }
    return
}

if (-not $StopStaleRepoLocalProcesses -and $preflight.status -eq "port_in_use") {
    [pscustomobject]@{
        helper = "host_bridge"
        status = "port_in_use"
        host = $ListenHost
        port = $Port
        listener_process_ids = @($preflight.listener_process_ids)
        stdout_log = $stdoutPath
        stderr_log = $stderrPath
        message = "This port is already in use by a non-matching process. Choose another port or stop that listener explicitly."
    }
    return
}

foreach ($path in @($stdoutPath, $stderrPath)) {
    Clear-LauncherLogFile -Path $path
}

$launchCommand = "set DME_LOCAL_HOST_BRIDGE_HOST=$ListenHost&& set DME_LOCAL_HOST_BRIDGE_PORT=$Port&& node --experimental-strip-types scripts/local_host_bridge_v0.mjs"

$process = Start-Process `
    -FilePath "cmd.exe" `
    -ArgumentList "/c", $launchCommand `
    -WorkingDirectory $repoRoot `
    -PassThru `
    -RedirectStandardOutput $stdoutPath `
    -RedirectStandardError $stderrPath

Start-Sleep -Seconds 2
$listener = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1

[pscustomobject]@{
    helper = "host_bridge"
    status = if ($null -ne $listener) { "started" } else { "launch_started_unverified" }
    process_id = $process.Id
    listener_process_id = if ($null -ne $listener) { $listener.OwningProcess } else { $null }
    host = $ListenHost
    port = $Port
    stdout_log = $stdoutPath
    stderr_log = $stderrPath
    message =
        if ($null -ne $listener) {
            "Repo-local host bridge launched cleanly."
        } else {
            "Host bridge launch was started but listener verification did not complete before timeout. Inspect .local/logs/host_bridge.*."
        }
}
