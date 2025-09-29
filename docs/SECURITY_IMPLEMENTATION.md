# Security Implementation

## Secrets Management
- Local development uses .env/.env.local; do not commit these files.
- CI/CD should use secure secret storage (e.g., GitHub Actions secrets, Vercel env vars).
- Use placeholders in docs and example files (e.g., {{SMTP_PASSWORD}}).

## Authentication & Data
- Supabase + Prisma (Postgres) are optional; gate DB operations by presence of DATABASE_URL.
- Prisma schema: see docs/DATABASE_SCHEMA.md.

## App Hardening
- Consider adding security headers (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) via Next.js middleware or config.
- Validate and sanitize user input on API routes.
- Add rate limiting to sensitive endpoints when introduced.
