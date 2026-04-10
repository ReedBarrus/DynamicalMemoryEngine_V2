param(
    [string]$ListenHost = "127.0.0.1",
    [int]$Port = 4318
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

foreach ($path in @($stdoutPath, $stderrPath)) {
    if (Test-Path -LiteralPath $path) {
        Remove-Item -LiteralPath $path -Force
    }
}

$launchCommand = "set DME_LOCAL_HOST_BRIDGE_HOST=$ListenHost&& set DME_LOCAL_HOST_BRIDGE_PORT=$Port&& node --experimental-strip-types scripts/local_host_bridge_v0.mjs"

$process = Start-Process `
    -FilePath "cmd.exe" `
    -ArgumentList "/c", $launchCommand `
    -WorkingDirectory $repoRoot `
    -PassThru `
    -RedirectStandardOutput $stdoutPath `
    -RedirectStandardError $stderrPath

[pscustomobject]@{
    helper = "host_bridge"
    process_id = $process.Id
    host = $ListenHost
    port = $Port
    stdout_log = $stdoutPath
    stderr_log = $stderrPath
}
