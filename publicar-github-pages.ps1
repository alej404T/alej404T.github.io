param(
  [string]$Repositorio = "alej404T.github.io"
)

$ErrorActionPreference = "Stop"

Write-Host "Este script prepara o envio para o GitHub Pages."
Write-Host "Antes de rodar, crie no GitHub um repositorio chamado: $Repositorio"
Write-Host ""

$remoteUrl = "https://github.com/alej404T/$Repositorio.git"

if (-not (git remote get-url origin 2>$null)) {
  git remote add origin $remoteUrl
} else {
  git remote set-url origin $remoteUrl
}

git branch -M main
git push -u origin main

Write-Host ""
Write-Host "Depois do push, ative o Pages em Settings > Pages."
Write-Host "Se o repositorio for alej404T.github.io, o site deve ficar em:"
Write-Host "https://alej404T.github.io"
