# Implementation Plan (Day 1)

Scope today:
- Align core tooling with Kanban: Next.js 15, React 19, TypeScript 5.7, Tailwind 4, ESLint config
- Prep Tailwind v4: update PostCSS, keep current theme for now; migrate theme tokens to @theme CSS in a later phase
- Do not break current UI; no functional refactors yet
- Produce docs and progress tracking per Core Rules

Next phases (high-level):
1) Tailwind v4 theme migration
   - Move theme tokens from tailwind.config.cjs to src/app/globals.scss using `@theme`
   - Keep responsive grid utilities and custom classes stable
2) Auth (based on Kanban)
   - Add Supabase client (lib/supabase.ts)
   - API endpoints: /api/auth/account, /api/auth/reset-password, /api/auth/callback (service role)
   - Optional Prisma integration for server-side data (gated by env)
   - UI: Auth modal + user menu, reuse Designo design system
3) i18n (based on BrightWebPath with next-intl)
   - Add middleware.ts + i18n routing and request loaders
   - Add messages/en.json, messages/ar.json; integrate <NextIntlClientProvider/>
   - Update layouts to set dir=ltr/rtl and language alternates
4) Testing & CI
   - Adopt TDD per TESTING_STRATEGY.md (unit + integration)
   - Add Jest + RTL setup and initial smoke tests
   - Add CI workflow running type-check, lint, tests

Risks:
- Tailwind v4 breaking classes (mitigate by migrating theme after upgrade)
- Next 15 + React 19 strictness (address TS updates and ESLint next rules)
- Auth env/secrets setup (coordinate Supabase credentials)

Deliverables today:
- Branch created: day-1/upgrade-foundations
- Updated configs & package.json for Next 15/Tailwind 4
- Docs: Implementation Plan, Documentation Map, Roadmap, progress file
