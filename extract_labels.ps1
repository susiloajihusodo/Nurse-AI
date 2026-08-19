$lines = Get-Content "C:\Users\susilo\AppData\Local\Programs\Microsoft VS Code\nursing-assessment\js\sdki-db.js"
$labels = @()
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '^\s+label:') {
        $label = $lines[$i] -replace '^\s+label:\s*"', '' -replace '",?\s*$', ''
        $labels += $label
    }
}
$labels | Sort-Object -Unique
