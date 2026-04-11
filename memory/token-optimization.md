# Token Optimization Rules

## Current Stats (2026-03-27 14:17 UTC)
- Total: 57.8k tokens (29% of 200k budget)
- Last output: 1,583 tokens (too high)
- Target: <500 tokens per response

## Rules
1. Responses <500 tokens unless justified
2. No long markdown examples - link to docs instead
3. Batch independent tool calls
4. Never repeat established context
5. Compact memory logs (factual only)
6. Code snippets: essential lines only

## What NOT to optimize away
- Critical context (USER.md, SOUL.md)
- Decision documentation
- Error explanations
- Learning moments
