# CI/CD Setup

## CI (GitHub Actions)
- Workflow runs on push and pull_request
- Node 20+
- Steps: install, type-check, lint, test, build

## CD
- Use Vercel for preview deployments on PRs (recommended)

## Quality Gates
- Block merge on failing checks
