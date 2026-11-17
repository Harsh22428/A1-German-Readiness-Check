# A1 Check · Am I exam-ready?

An independent candidate prototype for the Globio Product Manager Intern assignment. Learners answer 15 original questions across vocabulary, grammar and reading, receive a transparent foundation band, and get two or three specific next steps.

## Run locally

Requires Node.js 22.12+ (or a compatible newer release).

```sh
npm ci
npm run dev
```

```sh
npm test
npm run lint
npm run build
npm run preview
```

The production output is `dist/`. Hash-based routes work on static hosting without server rewrites. The tracked `.openai/hosting.json` identifies the Sites deployment; it contains no credentials. A public GitHub repository can be created from this folder independently of Sites source hosting.

## Product behaviour

- Exactly five questions per area; four options plus an explicit “I don’t know”.
- Editable responses and a review step before submission; answer explanations appear afterwards.
- No timer, login, personal-data form, payment or external AI service.
- Local progress and results, with expiry after seven days since the last update.
- Storage failures, corrupt/old saves and concurrent-tab updates have visible recovery paths.
- Optional provider selection changes onward resources, not scoring.
- Fixed-bank repeated attempts are labelled; no claim that a higher repeat score demonstrates learning.

## What “ready” means

The strongest band means strong foundations **in this small sample**, followed by a full mock before deciding to book.

| Band | Rule |
|---|---|
| Strong foundations | At least 4/5 in every area |
| Developing foundations | At least 3/5 in every area, excluding the strongest band |
| Foundations need practice | Fewer than 3/5 in at least one area |

One point per correct answer; incorrect and unknown responses earn zero. The percentage is correct answers on this check, not a pass probability. Area floors stop a strong total hiding a gap: 5/5, 5/5, 2/5 is 12/15 but still needs practice.

These thresholds are provisional product hypotheses. They are not official Goethe or ÖSD pass marks. Listening, writing and speaking are visibly **not assessed**. The app is not a certificate, secure exam or booking recommendation.

## Recommendations

`recommendations()` ranks areas with missed responses by lowest raw score and chooses at most two. Ties use a stable presentation order, not inferred importance. Each action cites the count and up to two missed example topics. Every result includes fuller assessment. Perfect results get maintenance practice rather than invented weaknesses.

## Code guide

- `src/content.ts`: original question bank, metadata, answer keys and official resource links.
- `src/domain.ts`: pure scoring, recommendations, saved-attempt validation and versions.
- `src/App.tsx`: accessible learner flow, local state and navigation; `main.tsx` mounts the app.
- `src/styles.css`: responsive interface and reduced-motion support.
- `src/domain.test.ts`: content integrity, all 216 score profiles, recommendation boundaries and invalid saves.
- `src/App.test.tsx`: full virtual-DOM workflow, unknowns, persistence and direct-link recovery.

The candidate authored and checked the questions and answer keys. **Independent qualified German-teacher review is pending.** No real learner interviews or predictive-accuracy study has been completed. Content is intended for prototype demonstration and requires independent review before educational reliance.

## Privacy and access

Responses remain in browser local storage. “Clear saved data” removes the saved attempt and exposure marker. Blocked storage falls back to memory; browser clearing also removes data. No remote analytics are implemented. Ordinary static-hosting requests still occur.

Answer keys are included in the public source/browser bundle by design. This is an honest self-check, not a protected assessment. Results are derived from frozen submitted responses against a matching, versioned question bank. Changing the bank/version invalidates incompatible saves.

## Research and validation

Product research and the full implementation specification are in `docs/PRD.md`.

The app complements fuller exam-format practice rather than replacing it. Research sources include [Globio’s existing mocks](https://globio.ai/german-mock-test/), [Goethe A1](https://www.goethe.de/ins/de/en/prf/gzsd1.cfm), [ÖSD A1](https://osd.at/en/portfolio-item/oesd-zertifikat-a1-za1/), [Lingoda’s placement test](https://www.lingoda.com/en/german-level-test/), and [Busuu’s placement approach](https://help.busuu.com/hc/en-us/articles/16526383831569-What-is-a-Placement-Test).

Next: independent content review; five observed learner sessions for usability and comprehension; then a prospective first-exposure comparison against fresh, blindly marked full mocks and consented official outcomes. Report false reassurance, unnecessary caution, sample counts and uncertainty. Do not interpret five interviews as score validation.

`docs/WRITTEN_NOTE.md` contains the assignment’s half-page response. `docs/VIDEO_GUIDE.md` provides a walkthrough structure; the candidate must supply their real introduction and record the video.

## Verification

See `docs/VERIFICATION.md` for the checks actually performed and remaining limitations. This prototype does not claim affiliation with Globio, Goethe-Institut or ÖSD.
