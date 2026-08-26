#!/bin/sh
set -e
cd /app

if [ ! -f package.json ]; then
  echo "Error: package.json not found in /app. Run docker compose from the repo root." >&2
  exit 1
fi

if [ ! -f src/pages/index.astro ]; then
  echo "Error: src/pages/index.astro not found. Compose is not mounting the project root." >&2
  ls -la >&2
  exit 1
fi

if [ ! -x node_modules/.bin/astro ]; then
  echo "Dependencies missing, installing..."
  if [ -f package-lock.json ]; then
    npm ci || npm ci
  else
    npm install || npm install
  fi
fi

echo "Markiz site: http://127.0.0.1:4321/  (if localhost 404s: npm run free-localhost)"
exec "$@"
