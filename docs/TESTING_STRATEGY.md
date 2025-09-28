# Testing Strategy

Philosophy: Unit-first with integration tests for critical flows. Keep UI tests light.

- Unit tests: utilities, components logic
- Integration: API endpoints (contact email, auth), context providers
- E2E: Only for auth happy-path (optional later)

Tooling (planned):

- Jest + @testing-library/react + @testing-library/jest-dom
- ts-jest / swc-jest per Next 15 recommendations

Process:

1. Write failing test
2. Implement feature
3. Refactor and document

CI: Add lint, type-check, tests in future CI pipeline
