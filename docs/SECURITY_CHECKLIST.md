# Security Checklist

- [ ] Secrets are not committed to VCS (.env, .env.* ignored)
- [ ] Example env files exist in docs/examples with placeholders
- [ ] Rotate any secrets that were previously committed
- [ ] Use placeholders like {{SMTP_PASSWORD}} in docs
- [ ] Consider dotenv-safe to enforce required env vars in local dev
- [ ] Review security headers in Next.js (Content-Security-Policy, etc.)
- [ ] Keep dependencies updated and audited
