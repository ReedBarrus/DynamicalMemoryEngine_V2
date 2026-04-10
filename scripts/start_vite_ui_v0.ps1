param(
    [string]$ListenHost = "127.0.0.1",
    [int]$Port = 4173,
    [switch]$StopStaleRepoLocalProcesses
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$logRoot = Join-Path $repoRoot ".local/logs"
$stdoutPath = Join-Path $logRoot "vite_ui.stdout.log"
$stderrPath = Join-Path $logRoot "vite_ui.stderr.log"

if ($Port -le 0) {
    throw "start_vite_ui_v0.ps1 requires Port to be a positive integer."
}

if ([string]::IsNullOrWhiteSpace($ListenHost)) {
    throw "start_vite_ui_v0.ps1 requires ListenHost to be a non-empty string."
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
    -Helper "vite_ui" `
    -Port $Port

if ($StopStaleRepoLocalProcesses) {
    $preflight = & (Join-Path $PSScriptRoot "normalize_local_shell_launch_v0.ps1") `
        -Helper "vite_ui" `
        -Port $Port `
        -Stop
}

if (-not $StopStaleRepoLocalProcesses -and $preflight.status -eq "already_running") {
    [pscustomobject]@{
        helper = "vite_ui"
        status = "already_running"
        host = $ListenHost
        port = $Port
        matched_process_ids = @($preflight.repo_local_listener_process_ids)
        stdout_log = $stdoutPath
        stderr_log = $stderrPath
        message = "A repo-local Vite UI already appears active for this port. Reuse it or relaunch with -StopStaleRepoLocalProcesses."
    }
    return
}

if (-not $StopStaleRepoLocalProcesses -and $preflight.status -eq "port_in_use") {
    [pscustomobject]@{
        helper = "vite_ui"
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

$process = Start-Process `
    -FilePath "npm.cmd" `
    -ArgumentList "run", "dev", "--", "--host", $ListenHost, "--port", "$Port", "--strictPort", "--clearScreen", "false" `
    -WorkingDirectory $repoRoot `
    -PassThru `
    -RedirectStandardOutput $stdoutPath `
    -RedirectStandardError $stderrPath

Start-Sleep -Seconds 2
$listener = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1

[pscustomobject]@{
    helper = "vite_ui"
    status = if ($null -ne $listener) { "started" } else { "launch_started_unverified" }
    process_id = $process.Id
    listener_process_id = if ($null -ne $listener) { $listener.OwningProcess } else { $null }
    host = $ListenHost
    port = $Port
    stdout_log = $stdoutPath
    stderr_log = $stderrPath
    message =
        if ($null -ne $listener) {
            "Repo-local Vite UI launched cleanly."
        } else {
            "Vite launch was started but listener verification did not complete before timeout. Inspect .local/logs/vite_ui.*."
        }
}
