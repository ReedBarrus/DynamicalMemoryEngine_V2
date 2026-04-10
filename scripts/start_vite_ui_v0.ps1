param(
    [string]$ListenHost = "127.0.0.1",
    [int]$Port = 4173
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

foreach ($path in @($stdoutPath, $stderrPath)) {
    if (Test-Path -LiteralPath $path) {
        Remove-Item -LiteralPath $path -Force
    }
}

$process = Start-Process `
    -FilePath "npm.cmd" `
    -ArgumentList "run", "dev", "--", "--host", $ListenHost, "--port", "$Port", "--strictPort", "--clearScreen", "false" `
    -WorkingDirectory $repoRoot `
    -PassThru `
    -RedirectStandardOutput $stdoutPath `
    -RedirectStandardError $stderrPath

[pscustomobject]@{
    helper = "vite_ui"
    process_id = $process.Id
    host = $ListenHost
    port = $Port
    stdout_log = $stdoutPath
    stderr_log = $stderrPath
}
