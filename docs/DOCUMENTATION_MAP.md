# Documentation Map

Status: Draft (Day 1)
Last updated: 2025-09-27

Root docs present/expected:

- README.md: Present (Designo overview)
- WARP.md: Present (created)
- IMPLEMENTATION_PLAN.md: Added in this phase
- ROADMAP.md: Added in this phase
- progress files: progress.day-1-upgrade-foundations.md (root)

/docs present/expected:

- IMPLEMENTATION_PLAN.md: High-level plan and phases
- TESTING_STRATEGY.md: Adopt Kanban TDD approach, adapted for Designo
- API.md, TECH*SPEC.md, SECURITY*\*: To be introduced as features require
- DATABASE_SCHEMA.md: N/A for Designo unless auth DB is added (Supabase/Prisma); will add later if we persist user data

Relationships:

- IMPLEMENTATION_PLAN.md ↔ ROADMAP.md ↔ progress.\* files
- TESTING_STRATEGY.md governs how we write tests in each phase

Gaps and next:

- Add SECURITY_CHECKLIST and ERROR_HANDLING once auth is wired
- Add CI_CD_SETUP when we introduce CI in this repo
