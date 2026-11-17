# Verification record

Checked on 17 November 2026. These are engineering checks, not learner research or predictive validation.

## Passed

- `npm test`: 20 tests across domain and virtual-DOM component suites.
- All 216 combinations of vocabulary, grammar and reading counts obey the defined area-floor rules.
- All profiles produce two or three deterministic actions, including broader assessment; perfect results do not invent weaknesses.
- Fifteen unique questions, five per area, four unique options and one valid key each.
- Frozen submitted state, idempotent submission, invalid/incomplete/expired/version-mismatched save rejection.
- Component tests: no preselection, missing-answer message, answer editing and saving; complete 15-question attempt, response review, result, explanation review and restoration; unknown responses; invalid-save/direct-result recovery.
- `npm run lint`: no errors or warnings.
- `npm run build`: TypeScript and Vite production build passed.
- Production JavaScript: approximately 80.2 KB gzip; CSS approximately 4.8 KB gzip. Under the PRD's proposed 200 KB JS budget.
- Dependency installation audit after updating the test runner: zero known vulnerabilities reported by npm.

## Not verified

- Browser screenshots, visual layout and real-device interaction: the browser access host was unavailable, and native browser app approval timed out.
- Real keyboard/screen-reader interaction, zoom/reflow and a measured contrast audit. Semantic markup, visible focus, responsive CSS, reduced motion and text labels are implemented, but these require manual browser review.
- First-load performance on slow devices/networks, real multi-tab interaction and browser-specific storage failure behaviour.
- Independent qualified German-teacher review.
- Real learner interviews, content calibration or prediction of official exam outcomes.

The virtual-DOM tests do not establish browser rendering or accessibility conformance. Complete manual desktop and phone checks before relying on this as a finished submission.

## Submission items

The app source, README, written note and video guide are prepared. A public GitHub repository cannot be created using the current CLI session because its saved GitHub authentication is invalid. The candidate's personal introduction and 5–7 minute video still need recording.
