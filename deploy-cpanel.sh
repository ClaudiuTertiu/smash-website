#!/bin/bash
set -euo pipefail

DEPLOYPATH="${1:-/home/smashpad/public_html}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$SCRIPT_DIR"
LOGFILE="$REPO_ROOT/.cpanel-deploy.log"
STATUSFILE="$REPO_ROOT/.cpanel-status.txt"

on_error() {
  local exit_code=$?
  {
    echo "Status: failed"
    echo "Timestamp: $(date)"
    echo "Repo root: $REPO_ROOT"
    echo "Deploy path: $DEPLOYPATH"
    echo "Exit code: $exit_code"
  } > "$STATUSFILE"
  exit "$exit_code"
}

trap on_error ERR

mkdir -p "$(dirname "$LOGFILE")"
touch "$LOGFILE"
exec > >(tee -a "$LOGFILE") 2>&1

cd "$REPO_ROOT"

{
  echo "Status: started"
  echo "Timestamp: $(date)"
  echo "Repo root: $REPO_ROOT"
  echo "Deploy path: $DEPLOYPATH"
} > "$STATUSFILE"

echo "===== cPanel deploy started: $(date) ====="
echo "Deploy path: $DEPLOYPATH"
echo "Repo cwd: $(pwd)"

command -v node >/dev/null 2>&1 || { echo "Node.js is not available in cPanel for this deploy."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "npm is not available in cPanel for this deploy."; exit 1; }

echo "Node: $(node -v)"
echo "npm: $(npm -v)"

mkdir -p "$DEPLOYPATH"

if ! npm ci --no-audit --no-fund; then
  echo "npm ci failed, retrying with npm install"
  npm install --no-audit --no-fund
fi

npm run build

if [ ! -d out ]; then
  echo "Expected static export directory ./out was not generated."
  exit 1
fi

if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete --exclude='.well-known' out/ "$DEPLOYPATH/"
else
  find "$DEPLOYPATH" -mindepth 1 -maxdepth 1 ! -name ".well-known" -exec rm -rf {} +
  cp -R out/. "$DEPLOYPATH/"
fi

{
  echo "Deployment successful"
  echo "Timestamp: $(date)"
  echo "Repo root: $REPO_ROOT"
  echo "Deploy path: $DEPLOYPATH"
  echo "Node: $(node -v)"
  echo "npm: $(npm -v)"
} > "$DEPLOYPATH/_deploy.txt"

cp "$LOGFILE" "$DEPLOYPATH/.cpanel-deploy.log"

{
  echo "Status: success"
  echo "Timestamp: $(date)"
  echo "Repo root: $REPO_ROOT"
  echo "Deploy path: $DEPLOYPATH"
} > "$STATUSFILE"

echo "Deploy done: $(date)"


