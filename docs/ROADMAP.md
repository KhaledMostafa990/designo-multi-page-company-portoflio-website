# Roadmap

Status: Draft (Day 1)

Milestone 1: Foundations Upgrade (today)

- Upgrade toolchain to Next 15, React 19, Tailwind 4
- Update ESLint/TS configs
- Planning docs and progress tracking

Milestone 2: Tailwind v4 theme migration

- Move theme config to @theme in globals.scss
- Verify all custom tokens (colors, fonts, sizes)

Milestone 3: Authentication (Supabase-first)

- Supabase client + envs + endpoints
- Basic UI hooks (login, reset password)
- Optional Prisma scaffolding behind env guards

Milestone 4: Internationalization (next-intl)

- Middleware + routing + request loaders
- Messages for en/ar + layout dir switching
- Page updates to consume translations

Milestone 5: Tests & CI

- Jest + RTL smoke tests
- CI running lint, type-check, tests

Release: Merge to main after passing checks per Core Rules
