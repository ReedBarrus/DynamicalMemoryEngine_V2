param(
    [ValidateSet("host_bridge", "vite_ui")]
    [string]$Helper,
    [int]$Port,
    [switch]$Stop,
    [switch]$IncludeCommandLine
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$escapedRepoRoot = [regex]::Escape($repoRoot)

function Get-HelperPattern {
    param(
        [string]$HelperName
    )

    switch ($HelperName) {
        "host_bridge" {
            return "local_host_bridge_v0\.mjs"
        }
        "vite_ui" {
            return "vite\.js|npm\.cmd run dev|vite --host"
        }
    }
}

$helperPattern = Get-HelperPattern -HelperName $Helper

$listenerProcessIds = @()
$listenerProcesses = @()

if ($Port -gt 0) {
    $listenerProcessIds =
        @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
            Select-Object -ExpandProperty OwningProcess -Unique)

    if ($listenerProcessIds.Count -gt 0) {
        $listenerProcesses =
            @(Get-CimInstance Win32_Process |
                Where-Object { $listenerProcessIds -contains $_.ProcessId })
    }
}

$matchingProcesses =
    @(Get-CimInstance Win32_Process |
        Where-Object {
            $_.Name -in @("node.exe", "cmd.exe", "npm.cmd") -and
            $null -ne $_.CommandLine -and
            (
                ($_.CommandLine -match $escapedRepoRoot -and $_.CommandLine -match $helperPattern) -or
                ($_.CommandLine -match $helperPattern)
            )
        })

$repoLocalListenerProcesses =
    @($listenerProcesses |
        Where-Object {
            $null -ne $_.CommandLine -and
            (
                ($_.CommandLine -match $escapedRepoRoot -and $_.CommandLine -match $helperPattern) -or
                ($_.CommandLine -match $helperPattern)
            )
        })

$scopedProcesses =
    if ($listenerProcessIds.Count -gt 0) {
        $matchingProcesses |
            Where-Object {
                ($listenerProcessIds -contains $_.ProcessId) -or
                ($_.CommandLine -match [regex]::Escape([string]$Port))
            }
    } else {
        $matchingProcesses
    }

$scopedProcessIds = @($scopedProcesses | Select-Object -ExpandProperty ProcessId -Unique)

if ($Stop -and $scopedProcessIds.Count -gt 0) {
    Stop-Process -Id $scopedProcessIds -Force

    foreach ($processId in $scopedProcessIds) {
        for ($attempt = 0; $attempt -lt 10; $attempt++) {
            $stillRunning =
                @(Get-CimInstance Win32_Process -Filter "ProcessId = $processId" -ErrorAction SilentlyContinue).Count -gt 0

            if (-not $stillRunning) {
                break
            }

            Start-Sleep -Milliseconds 200
        }
    }
}

$status =
    if ($Stop) {
        "stopped"
    } elseif ($repoLocalListenerProcesses.Count -gt 0) {
        "already_running"
    } elseif ($listenerProcessIds.Count -gt 0) {
        "port_in_use"
    } elseif ($scopedProcessIds.Count -gt 0) {
        "stale_processes_detected"
    } else {
        "clear"
    }

[pscustomobject]@{
    helper = $Helper
    repo_root = $repoRoot
    port = if ($Port -gt 0) { $Port } else { $null }
    listener_process_ids = $listenerProcessIds
    repo_local_listener_process_ids = @($repoLocalListenerProcesses | Select-Object -ExpandProperty ProcessId -Unique)
    matched_process_ids = $scopedProcessIds
    status = $status
    processes =
        @($scopedProcesses | ForEach-Object {
            [pscustomobject]@{
                process_id = $_.ProcessId
                process_name = $_.Name
                command_line = if ($IncludeCommandLine) { $_.CommandLine } else { $null }
            }
        })
}
