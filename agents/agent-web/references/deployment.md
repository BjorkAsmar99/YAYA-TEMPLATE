# AgentWeb Deployment Reference

## Purpose

Publish finished websites automatically to GitHub and Vercel.

## Standard flow

1. Build or verify the project locally.
2. Choose a repository name.
3. Run:

```bash
scripts/publish-site.sh <project-dir> <repo-name> [github-owner]
```

## Behavior

The script:
- initializes git if missing
- creates the GitHub repo if `origin` does not exist yet
- pushes code to `main`
- deploys to Vercel production
- prints the GitHub URL and Vercel URL

## Example

```bash
scripts/publish-site.sh /home/ubuntu/.openclaw/workspace/shared/projects/pasta-cosi pasta-cosi
```

## Notes

- GitHub CLI auth must already work on the host.
- Vercel CLI auth must already work on the host.
- Prefer running install/build checks before deployment.
- If a project should not be public, keep GitHub repo visibility private unless explicitly changed.
