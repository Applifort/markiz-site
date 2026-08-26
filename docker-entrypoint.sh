#!/bin/sh
set -e
cd /app

if [ ! -f package.json ]; then
  echo "Error: package.json not found in /app. Mount project root to /app." >&2
  exit 1
fi

if [ ! -d node_modules/astro ]; then
  echo "Dependencies not found, installing..."
  if [ -f package-lock.json ]; then
    npm ci
  else
    npm install
  fi
fi

exec "$@"
