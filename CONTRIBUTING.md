# Contributing

## Branching
- Use feature branches: feature/day-3-header-scroll-animation, fix/..., chore/...

## Conventional Commits
- Types: feat, fix, chore, docs, refactor, test, perf, ci, build, style
- Example: `feat(header): add scroll-aware StickyHeaderController`

## Pull Requests
- Reference the relevant progress.day-*.md file
- Include acceptance criteria, screenshots/gifs for UI changes
- Keep PRs small and focused

## TDD Workflow
1. Write a failing test (Jest + Testing Library)
2. Implement the minimal code to pass
3. Refactor and document

## Quality Gates (CI)
- type-check, lint, test, build must pass

## Docs & Changelog
- Update root/ and /docs as single source of truth
- Keep CHANGELOG.md current for user-visible changes