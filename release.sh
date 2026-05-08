#!/bin/bash
# release.sh — build the static export and commit it so cPanel can deploy
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

echo "Building static export..."
npm run build

if [ ! -d out ]; then
  echo "Build failed: out/ was not generated"
  exit 1
fi

echo "Staging built export..."
git add -f out/
git add .cpanel.yml .gitignore

echo "Committing..."
git commit -m "release: update static export $(date '+%Y-%m-%d %H:%M')"

echo ""
echo "Done. Run 'git push' and then click 'Deploy HEAD Commit' in cPanel."

