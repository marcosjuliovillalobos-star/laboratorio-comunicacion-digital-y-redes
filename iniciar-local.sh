#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js no está instalado."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm no está instalado."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Instalando dependencias..."
  npm install
fi

echo "Iniciando Laboratorio Virtual de Comunicación Digital y Redes..."
npm run dev
