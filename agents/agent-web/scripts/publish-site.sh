#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <project-dir> <repo-name> [github-owner]" >&2
  exit 1
fi

PROJECT_DIR="$1"
REPO_NAME="$2"
GITHUB_OWNER="${3:-}"

if [[ ! -d "$PROJECT_DIR" ]]; then
  echo "Project directory not found: $PROJECT_DIR" >&2
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI is required" >&2
  exit 1
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "vercel CLI is required" >&2
  exit 1
fi

cd "$PROJECT_DIR"

if [[ -z "$GITHUB_OWNER" ]]; then
  GITHUB_OWNER="$(gh api user --jq .login)"
fi

if [[ ! -f package.json ]]; then
  echo "Warning: package.json not found in $PROJECT_DIR" >&2
fi

if [[ ! -d .git ]]; then
  git init
  git branch -M main
fi

git add .
if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  git commit -m "chore: initial site commit"
elif ! git diff --cached --quiet || ! git diff --quiet; then
  git commit -m "chore: update site" || true
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create "$GITHUB_OWNER/$REPO_NAME" --private --source=. --remote=origin --push
else
  git push -u origin main
fi

VERCEL_OUTPUT="$(vercel --yes --prod 2>&1)"
echo "$VERCEL_OUTPUT"

REPO_URL="https://github.com/$GITHUB_OWNER/$REPO_NAME"
DEPLOY_URL="$(printf '%s\n' "$VERCEL_OUTPUT" | grep -Eo 'https://[^ ]+\.vercel\.app[^ ]*' | tail -n1 || true)"

echo "---"
echo "GitHub: $REPO_URL"
if [[ -n "$DEPLOY_URL" ]]; then
  echo "Vercel: $DEPLOY_URL"
fi
