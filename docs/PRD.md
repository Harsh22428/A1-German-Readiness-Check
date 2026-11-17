# Product requirements: Am I exam-ready?

**Product:** A1 German Readiness Check  
**Version:** 1.0, proposed implementation baseline  
**Research date:** 16 November 2026, IST  
**Delivery context:** Globio Founder’s Office – Product Manager Intern assignment  
**Status:** Ready to guide implementation. Scoring thresholds are hypotheses; assessment content requires expert review. This is an independent candidate prototype, not an authorised Globio product.

## 1. Product decision

Build a mobile-friendly web app where an adult learner who has completed A1 German answers 15 questions in vocabulary, grammar and reading, receives a transparent readiness signal for those areas, and leaves with two or three specific actions before deciding whether to book an exam.

The product answers: **“What does this short check suggest, what should I practise, and what evidence do I still need before booking?”**

The strongest result means **“strong foundations in the areas checked; take a full mock next.”** It never means a guaranteed pass, an official certification, or a measured probability of passing.

The app should provide value immediately, without an account, payment, or an AI service. The assignment’s central deliverable is the complete assessment-to-recommendation experience.

Fifteen questions use the top of the requested range to provide five observations per area. This improves balance and explainability compared with an uneven ten-item split, while remaining a small screen. It does not provide enough evidence for precise mastery estimates.

## 2. Assignment contract

The founder’s supplied email is the primary requirements source.

| Founder requirement | Product response | Evidence at submission |
|---|---|---|
| A small web app | Responsive, publicly accessible app | Live URL usable without signing in |
| 10–15 vocabulary, grammar and reading questions | Exactly 15 scored questions, five per area | Question bank and working flow |
| Readiness broken down by skill | Overall foundation band plus all three area scores | Results screen |
| Two or three things to practise before booking | Rule-based, evidence-linked practice priorities and a full-mock next step | Different results produce different advice |
| Candidate decides what “ready” means | Documented, deterministic thresholds and limitations | App explanation, scoring source, README |
| Code on GitHub | Public repository, reproducible build and no secrets | GitHub URL |
| Half-page written response | Approximately 250–300 words on score validation and five learner questions | Written note |
| One 5–7 minute video | Introduction, app walkthrough, code and scoring rationale | Accessible video URL |
| 48 hours from email | Scope prioritised around required deliverables | Actual deadline calculated from email timestamp |

The email timestamp is not provided. Do not assume a calendar deadline from the research date.

## 3. Research method and boundaries

Research combines public Globio pages, first-party descriptions of comparable products, official exam-provider material, and two public learner discussions. Competitor findings describe published functionality; this was not a hands-on audit of every assessment or a review of private customer accounts.

No access was available to Globio’s learner records, completion funnel, internal question bank, assessment accuracy, support tickets, exam outcomes, or commercial analytics. No learner interviews have been conducted for this project. Public website numbers are company claims, not our baseline.

Throughout this PRD:

- **Observed:** supported by the supplied brief or a cited public source.
- **Inference:** a product interpretation of that evidence.
- **Hypothesis:** a proposed choice or target requiring validation.

## 4. Globio context and implications

| Evidence | Status | Product implication |
|---|---|---|
| Globio presents language learning, career placement and immigration support as one journey. | Observed on [Globio About](https://globio.ai/about/). | Use outcome-oriented guidance, without making employment or immigration promises. |
| The A1 course page describes a six-week learning roadmap, everyday topics, grammar foundations, and exam preparation. | Observed on [Globio A1](https://globio.ai/learn-german/german-a1/). | Map the short check to familiar A1 situations rather than abstract trivia. |
| Globio already advertises recorded learning, AI practice and exam-preparation features. | Observed on [Globio A1](https://globio.ai/learn-german/german-a1/). | Focus this prototype on interpretation and next steps rather than recreating the learning platform. |
| Its public mock-test page offers access to a first full mock through a form, with four skills, instant reading/listening marking, and further tests/evaluation connected to Fastrack. | Observed on [Globio mock tests](https://globio.ai/german-mock-test/). | A short, ungated foundation check can act as an earlier checkpoint and refer learners onward. Do not promise direct access to paid or account-specific modules. |
| Globio describes Hindi/English support and publishes outcome statistics. | Observed on [Globio About](https://globio.ai/about/). | Use plain English initially. Localisation is a later hypothesis. Do not import marketing statistics as proof that this score works. |

**Business hypothesis:** Better identification of practice needs could support learner progress and trainer conversations. Effects on exam failures, refunds, retention or course progression cannot be claimed without outcome data.

Course prices and promotions are not needed in the readiness app. Omit exam fees too, since they vary by provider, location and candidate category.

## 5. Market comparison

This is a focused comparison of alternatives to the learner’s decision, not a market-size study.

| Alternative | What its public material establishes | What we should learn from it | Boundary for our app |
|---|---|---|---|
| Goethe “Test your German” | An initial assessment of language knowledge; recommends deeper assessment for course/exam plans. [Official test](https://www.goethe.de/lrn/pro/30-item/m/en/index.html) | Explain the scope of a short result. | Do not call an initial screen a certification or comprehensive assessment. |
| Lingoda German level test | Advertises about five minutes, no account, multiple-choice placement across A1–C1, and distinguishes placement from an official exam. [Official page](https://www.lingoda.com/en/german-level-test/) | Low entry friction is a credible pattern. | Keep our purpose specific to A1 foundations rather than assigning a broad CEFR level. |
| Busuu placement and study plan | Placement suggests where to begin; a separate study plan supports a chosen learning schedule. [Placement](https://help.busuu.com/hc/en-us/articles/16526383831569-What-is-a-Placement-Test), [study plan](https://help.busuu.com/hc/en-us/articles/16097312171153-What-s-a-Study-Plan-How-do-I-make-one) | Connect a result to an achievable action. | Give a short practice prescription without building accounts, calendars or reminders. |
| Goethe A1 practice materials | Free practice across listening, reading, writing and speaking, including exam-format tasks. [Official preparation](https://www.goethe.de/en/spr/prf/ueb/pa1.html) | A full-format mock provides evidence the short check cannot. | Refer to fuller assessment; do not reproduce a whole exam in the MVP. |
| ÖSD A1 materials | Written and oral modules, downloadable model material and digital training. [Official A1 page](https://osd.at/en/portfolio-item/oesd-zertifikat-a1-za1/) | Match onward resources to the learner’s provider. | Do not treat Goethe and ÖSD formats or marking rules as interchangeable. |
| Globio’s existing mock offering | A broader assessment route already exists in its public product. [Mock-test page](https://globio.ai/german-mock-test/) | Fit into the existing learner journey. | External referral only; no assumed LMS integration. |

**Positioning inference:** The useful distinction is A1-specific interpretation with practical follow-through. A fast quiz alone is not a distinctive product. This research does not establish that competitors lack similar recommendations.

### Qualitative learner signals

One public learner describes failing A1 despite feeling confident and receiving a higher placement indication. This illustrates a possible mismatch between confidence, placement and exam performance. It does not establish how common that mismatch is. [Learner account](https://www.reddit.com/r/German/comments/1pd5vtf/failed_my_a1_goethe_exam/)

A prospective Globio customer asks about feedback quality, speaking practice and whether AI evaluation is useful. This suggests questions about trust and actionable feedback worth investigating; it is not evidence of a defect in Globio’s service. [Public Globio discussion](https://www.reddit.com/r/GermanForBeginners/comments/1xqsomd/experiences_with_globios_a1_to_b1_german_course/)

Neither discussion is a representative sample or a verified customer interview. Do not use comments for immigration advice or exam regulations.

## 6. Assessment boundary

Goethe A1 assesses listening, reading, writing and speaking. Its reading tasks include short notes, advertisements and signs. ÖSD A1 covers those four skills within written and oral modules. These descriptions support everyday A1 contexts and establish why our three-area screen cannot establish full exam readiness. [Goethe A1](https://www.goethe.de/ins/de/en/prf/gzsd1.cfm), [ÖSD A1](https://osd.at/en/portfolio-item/oesd-zertifikat-a1-za1/)

Vocabulary and grammar are assessed foundations, not substitutes for productive or listening skills. Reading is sampled narrowly. Display listening, writing and speaking as **“Not assessed”**, never zero, inferred scores, or hidden omissions.

The score is a percentage of this question set answered correctly. It is not a projected official exam mark. Do not copy official pass thresholds into this diagnostic or suggest provider endorsement.

## 7. Users and problem

### Primary user

An adult learner in India or another developing nation who has completed or nearly completed A1 German and is considering a Goethe or ÖSD A1 exam. They want a quick, understandable check before committing time and money.

Mobile use, interrupted study sessions, limited confidence and short available study periods are design hypotheses. Validate them with actual learners rather than presenting them as researched demographic facts.

### Secondary stakeholder

A Globio trainer or counsellor who could use the learner’s breakdown to discuss next steps. Trainer dashboards, automatic alerts and access to learner records are outside the assignment MVP.

### Job to be done

“When I finish A1 and start thinking about booking my exam, help me check my foundations and choose my next practice steps, so I can make a better-informed decision.”

### Main problems to address

1. Course completion and subjective confidence give incomplete evidence of readiness.
2. An overall quiz mark can conceal an uneven profile.
3. Generic advice leaves the learner unsure what to practise next.
4. A short result may be mistaken for permission to book unless the boundary is visible.

The first point is stated in the founder’s brief; the others are product hypotheses supported by the assessment structure and desk research.

## 8. Goals, success and non-goals

### Goals

- Complete the assignment’s end-to-end flow without external service dependencies.
- Help learners explain their strongest and weakest checked areas.
- Give two or three concrete, achievable next steps grounded in their responses.
- Make the assessment’s limits understandable at the moment of decision.
- Keep content, thresholds and recommendation logic inspectable and versioned.

### Initial evaluation targets

These are proposed targets, not measured results or industry benchmarks.

| Measure | Definition | Initial target and method |
|---|---|---|
| Task completion | Recruited users who reach results without moderator intervention / recruited users who begin | At least 4 of 5 in formative usability sessions; report raw counts |
| Result comprehension | Users who correctly describe their weak area and the unassessed skills | At least 4 of 5, asked without hints |
| False assurance in copy | Users who believe the strongest band guarantees a pass or proves they should book | Zero of five in formative sessions; revise copy if any do |
| Action clarity | Users who identify one specific next practice action | At least 4 of 5 |
| Time to result | Elapsed time during an uninterrupted observed attempt | Aim for median 8–12 minutes; publish “about 10 minutes” as an estimate until measured |
| Scoring correctness | Versioned input cases match expected results | Every defined case passes |

Five usability sessions cannot establish predictive accuracy or a reliable population completion rate. Later funnel targets require a larger measured baseline.

### Non-goals for the assignment

- Full listening, speaking or writing assessment.
- Official certification, exam booking or pass probabilities.
- A complete language course or multi-level placement engine.
- Login, payments, CRM/LMS integration or trainer administration.
- Live AI grading, generated explanations or adaptive item selection.
- Remote analytics or storage of personal information by default.
- Precise predictions of how many days a learner needs to pass.

## 9. Scope and priorities

**P0:** Required for the submission. **P1:** Only after P0 works and all submission materials are complete. **Later:** Requires separate evidence and scope.

| Capability | Priority |
|---|---|
| Start screen, scope explanation and optional exam-provider choice | P0 |
| Fifteen questions, answer editing, explicit “I don’t know”, progress | P0 |
| Response review before submission and instant scoring | P0 |
| Three area scores, overall band and visible unassessed skills | P0 |
| Two or three prioritised next steps, explanations and answer review | P0 |
| Local resume, restart, storage-failure handling and repeat-attempt notice | P0 |
| Provider-appropriate external practice resources | P0 |
| Responsive behaviour, keyboard/screen-reader access, scoring tests | P0 |
| Public deployment, GitHub, README, written note and video | P0 |
| Print-friendly result and short interactive practice using fresh items | P1 |
| Alternate equivalent forms and Hindi interface | Later, after content and user validation |
| Consent-based research collection and central analytics | Later pilot |
| Human-scored additional skills and production integrations | Later |

## 10. Learner flow and required behaviour

`Start → 15 questions → response review → results → practice instructions / answer review / full-mock resource`

### Start

Required content: product name, audience, “15 questions · Vocabulary, grammar and reading · About 10 minutes”, scope limitation, and “Start check”.

Optional selector: Goethe A1 / ÖSD A1 / Not sure. Default: Not sure. Selection changes resource links only, never the questions or score. No exam date, email, phone number or account is requested.

Opening copy:

> Finished A1? Check your foundations before your exam. See what to practise next in vocabulary, grammar and reading. Listening, writing and speaking are not assessed, so this check alone cannot tell you whether to book.

If an attempt exists, offer “Continue check” and “Start again”. Starting again requires an inline confirmation because it clears local answers. Show an independent candidate-prototype disclosure; do not impersonate Globio or its providers.

### Questions

- Exactly 15 scored, single-choice items: vocabulary 1–5, grammar 6–10, reading 11–15.
- One question per view. Show area, question number and answered count.
- Each item has four answer options and a separate “I don’t know” response.
- Nothing is preselected. Choosing an option does not advance automatically.
- Back and Next preserve responses; users may change answers before submission.
- Next requires a choice or “I don’t know”; explain this inline and focus the message if needed.
- No answer feedback, hints, translations or answer keys before submission.
- No countdown or time-based penalties. The app is a low-pressure diagnostic, not a timed mock.
- Reading passages remain visible with their question and are selectable text.
- Browser Back follows the assessment history without losing the current saved response.

### Response review and submission

After question 15, show a compact response summary with links to edit each question. Show counts of ordinary responses and “I don’t know”. A finished attempt has 15 deliberate responses; unknowns are valid responses.

“See my results” submits the attempt once. Submission freezes the scored responses. Repeated clicks must not create new attempts or recalculate against a changed bank. Incomplete or invalid state returns the learner to the first unresolved question; no final band is displayed.

### Results

Show in this information order:

1. Readiness band and a plain-language next-step sentence.
2. Correct count out of 15 and, secondarily, the percentage.
3. Vocabulary, grammar and reading correct counts out of five, with text labels.
4. Visible “Listening, writing and speaking: not assessed” limitation.
5. Two or three practice/assessment actions, with a reason and estimated exercise duration.
6. Answer review and “How this result is calculated”.

The limitation cannot be confined to a tooltip, footer or collapsed explanation. A percentage is always labelled “correct on this check”, not “exam readiness %”. Never make colour the only signal.

### Answer review and onward resources

For each item show the prompt, original passage if applicable, learner response, correct response, topic and a short explanation. Unknowns are labelled “You chose ‘I don’t know’”. The submitted result remains unchanged.

Onward resources are provider-matched. Goethe users see official Goethe material and an optional, clearly labelled Globio mock resource. ÖSD users see official ÖSD material. Not-sure users see both provider options with neutral labels. Disclose that external resources may require separate access or registration. No checkout, referral tracking or implied integration is added.

## 11. Content specification

### Fixed first-version blueprint

| Slot | Area | What the question checks | Suitable context |
|---|---|---|---|
| V1 | Vocabulary | A familiar everyday verb | Buying food |
| V2 | Vocabulary | Time or a weekday expression | An appointment |
| V3 | Vocabulary | A place or service word | Travel |
| V4 | Vocabulary | A common object or household word | Home |
| V5 | Vocabulary | A common work or routine expression | Daily life |
| G1 | Grammar | Present-tense subject/verb agreement | Introducing oneself |
| G2 | Grammar | Verb position in a simple main clause | Tomorrow’s routine |
| G3 | Grammar | Basic negation | Identifying an object |
| G4 | Grammar | A basic article/case pattern | Making a purchase |
| G5 | Grammar | A simple question word | Asking where someone lives |
| R1 | Reading | Explicit day/time detail | Opening-hours notice |
| R2 | Reading | Changed plan in a short message | Appointment rescheduling |
| R3 | Reading | A stated condition | Simple advertisement |
| R4 | Reading | Who should do what | Invitation or short email |
| R5 | Reading | Meaning of a basic instruction | Public sign |

Use five independent reading texts, generally 15–45 words each, with one scored question per text. This reduces dependence on a single misunderstood passage; it does not establish statistical independence of the areas.

### Authoring requirements

- Original wording; official resources guide scope rather than supply copied exam papers.
- One unambiguous correct answer. Distractors should be plausible and grammatically parallel where appropriate.
- Target A1 language and everyday situations. Avoid specialist work, nursing or immigration knowledge.
- English instructions; German target text and options. English explanations after submission.
- No item should reveal another item’s answer.
- Difficulty is an author estimate until piloted. Seek a range of accessible to more demanding A1 items within every area; do not claim calibrated difficulty.
- Include topic tags, rationale, option IDs and a short explanation in the content data.
- Record review status honestly. A content author’s review is not independent German-teacher validation.

### Example original items, draft only

**Grammar:** “Ich ___ aus Indien.” Options: kommen / komme / kommt / kommst. Correct: **komme**. Explanation: With “ich”, the present-tense form is “komme”.

**Vocabulary:** “Ich möchte Brot kaufen. Wohin gehe ich?” Options: zum Bahnhof / zur Bäckerei / zur Post / zum Kino. Correct: **zur Bäckerei**. Explanation: A “Bäckerei” is a bakery, where you buy bread.

**Reading:** “Die Bibliothek ist am Montag geschlossen. Von Dienstag bis Freitag ist sie von 9 bis 18 Uhr geöffnet.” Question: “Kannst du am Montag um 10 Uhr Bücher ausleihen?” Options: Ja, ab 9 Uhr / Ja, bis 18 Uhr / Nein, sie ist geschlossen / Nur am Abend. Correct: **Nein, sie ist geschlossen**. Explanation: The notice explicitly says the library is closed on Monday.

Before release, verify all 15 answers and explanations. Seek an independent qualified German teacher’s review; if unavailable within the deadline, disclose this prominently in the README and methodology and retain prototype status. Do not call the bank validated.

## 12. Scoring specification

### Inputs and calculation

Each item has exactly one primary area and equal weight. Correct = 1; incorrect or “I don’t know” = 0. There is no negative marking, confidence weighting or speed adjustment.

```text
v = correct vocabulary responses, integer 0..5
g = correct grammar responses, integer 0..5
r = correct reading responses, integer 0..5
total = v + g + r
displayed overall percentage = round(total / 15 * 100)
displayed area percentage = area correct / 5 * 100
```

Calculate the band from raw counts, never the rounded percentage.

| Rule, evaluated in order | Internal ID | Learner label | Decision guidance |
|---|---|---|---|
| Every area has at least 4/5 | strong | Strong foundations | Your checked foundations look strong. Complete a full mock before deciding to book. |
| Otherwise, every area has at least 3/5 | developing | Developing foundations | Practise the gaps shown here, then complete a full mock. |
| Otherwise | practice | Foundations need practice | Start with your lowest-scoring areas and review the missed examples. |

All valid completed attempts match exactly one band. The strongest band necessarily requires at least 12/15, and the developing band at least 9/15. Minimum-area rules ensure a high total does not hide a gap.

### Why these provisional rules

- Equal weights are understandable; there is no empirical basis for more complex weights yet.
- Requiring four of five in every area is a conservative product hypothesis for a strong-foundations message.
- The middle band recognises partial progress without claiming full readiness.
- A lower score is a signal to practise the sampled material, not a diagnosis of general ability.

With five items per area, a single answer changes the area percentage by 20 points. Display counts prominently and say: “This is a small sample of A1 foundations.” Scores are not pass probabilities. Vocabulary, grammar and reading overlap, so these are useful product categories rather than proven independent ability measures.

### Required scoring examples

| Vocabulary / grammar / reading | Total | Band |
|---|---:|---|
| 5 / 5 / 5 | 15/15, 100% | strong |
| 4 / 4 / 4 | 12/15, 80% | strong |
| 5 / 5 / 3 | 13/15, 87% | developing |
| 3 / 3 / 3 | 9/15, 60% | developing |
| 5 / 5 / 2 | 12/15, 80% | practice |
| 0 / 0 / 0 | 0/15, 0% | practice |
| Fewer than 15 deliberate valid responses | Incomplete | No final band |

“How we calculate this” must explain weights, area floors, unknowns, limited coverage and unvalidated thresholds. Do not describe the most conservative band as an official recommendation to postpone an already-booked exam.

## 13. Recommendation specification

Return exactly two or three actions. Each has a title, evidence statement, exercise instructions, optional resource, and estimated exercise duration. Exercise duration is not a prediction of time to exam readiness.

### Deterministic selection

1. Identify areas with at least one incorrect/unknown response and sort by correct count ascending.
2. Resolve equal scores with a fixed presentation order: vocabulary, grammar, reading. State in code that this is a display tie-break, not a measured importance ranking.
3. Select at most two areas. For each, produce one practice action citing its count and up to two missed question topics/examples.
4. Always append one full-mock action, after targeted practice if there are gaps.
5. If there are no gaps, return two actions: maintain mixed foundations practice and complete a full mock. Do not invent a weakness.

Thus one area with gaps produces two actions; two or three areas with gaps produce three. Every area’s missed answers remain available in answer review even when it is not one of the two priorities.

### Action recipes

| Area | Example instruction | Evidence language |
|---|---|---|
| Vocabulary | Spend 10 minutes making six everyday phrases using the missed words; cover the meanings and recall them again. | “You answered 2/5 vocabulary questions correctly; these examples need review.” |
| Grammar | Spend 10 minutes writing six short sentences using the missed patterns; compare with the reviewed examples. | “You missed the verb-order example.” Never “You cannot use German word order.” |
| Reading | Spend 10 minutes reading three short notices/messages; identify who, when, where and the required action. | “You missed details in these short texts.” |
| Full mock | Attempt fresh provider-appropriate practice under its stated conditions, including listening, writing and speaking. Obtain suitable feedback on the productive tasks. | “These skills were not assessed by this check.” |

One item cannot establish a stable topic weakness. Repeated misses may justify “several examples”, but neither branch should imply a psychometric diagnosis. Templates and reasons are curated; no generated advice or API calls are required.

## 14. Experience and accessibility requirements

The primary surface is a task-focused learning tool. Visual branding, final colours, typography tokens and high-fidelity screen design are implementation-stage decisions, not approved by this PRD.

Requirements independent of that styling:

- Plain, supportive language; no shame, celebratory pass certificates or pressure to book.
- Readable on 320 CSS-pixel-wide screens without horizontal scrolling of app content.
- All actions operable by keyboard with logical focus order and visible focus indicators.
- Use native radio groups with labelled questions; arrow keys operate choices, Space selects, and Tab reaches navigation.
- On question navigation, move focus predictably to the new question heading; announce progress and errors without repeated disruptive alerts.
- Correct/incorrect/selected states have textual or icon cues in addition to colour.
- Support browser zoom, text enlargement and reduced-motion preferences. Do not convey information through animation.
- Aim for WCAG 2.2 AA: normal text contrast of at least 4.5:1 and appropriate large-text/UI contrast. Use 44×44 CSS-pixel targets as this product’s usability goal, which is stricter than the AA minimum-size criterion. See W3C’s [contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- Use English as the page language and mark German passages appropriately for assistive technology.
- No microphone, camera or audio permissions in this version.
- Keep instructions and passages available without hover-only interactions.

These are acceptance requirements, not a claim that an accessibility audit has already passed.

Test reflow at 320 CSS pixels, including the equivalent of a 1280-pixel-wide viewport at 400% browser zoom, following [W3C’s reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

## 15. Technical approach and data

### Recommended architecture

Static React + TypeScript app, using Vite as the build tool. Keep assessment data, scoring and recommendations separate from components. Use ordinary routing or equivalent state navigation that supports browser history and refresh. No backend is required for P0.

Suggested responsibilities:

```text
content/questions       Versioned items, options, answers and explanations
content/resources       Verified external links and provider labels
content/practice        Curated practice recipes
domain/scoring          Pure scoring and band calculation
domain/recommendations  Pure priority selection and evidence assembly
domain/attempt          Validation, submission and local persistence
views                   Start, question, response review, results, answer review
```

Exact filenames and libraries may change; the separation of responsibilities must remain. The public repository and browser bundle contain the answer key by design. This is a self-check, with no anti-cheating or secure-exam claim.

### Data contracts

| Object | Required fields |
|---|---|
| Question | id, area, topic, prompt, optional passage, four options with stable IDs, correctOptionId, explanation, authorDifficultyEstimate, reviewStatus |
| Assessment | assessmentVersion, scoringVersion, orderedQuestionIds |
| Attempt | schemaVersion, local attemptId, assessmentVersion, scoringVersion, providerChoice, startedAt, updatedAt, status, responses, currentQuestionIndex |
| Response | questionId and either a valid optionId or explicit unknown marker |
| Submitted result | submittedAt, frozen responses, raw area counts, total, band, recommendation IDs, repeat-exposure flag |

Persist only the current attempt and a local repeat-exposure marker. An attempt ID is not an authenticated person ID. Explanations and answer keys remain in the versioned content, not duplicated into response records unnecessarily.

### State and resilience

- Save after a response or navigation change. Resume the exact question and answers after refresh.
- Preserve a completed result on return. A new attempt starts only through the explicit restart flow.
- Expire saved attempts seven days after their last update; explain this when restoring. This is a storage policy, not a validated score-expiry period.
- Validate saved schemas, question IDs and option IDs. Corrupt, expired or incompatible content produces an explanatory reset path, not a crash or silently remapped scores.
- A version mismatch resets incompatible attempts. A deployment must not silently score old responses against a new bank.
- If browser storage is unavailable, continue in memory and explain that closing/reloading may lose progress. Do not claim successful saving.
- Avoid concurrent-tab ambiguity: show that an attempt was updated elsewhere and offer to reload it or deliberately start fresh rather than silently merging responses.
- Repeated attempts use the same initial bank and carry a notice that familiarity can improve scores. No “improvement” claim is made from repeating exposed items.
- Once the app has loaded, answers and scoring do not require a network connection. Cold-start offline access and service-worker caching are outside P0.

Provide an in-app “Clear saved data” action with inline confirmation. It clears local responses, result and repeat marker. All local data can also disappear through browser clearing; research must not rely on it for participant tracking.

### Performance and deployment

- HTTPS public deployment, accessible without the creator’s account.
- Prioritise small assets and immediate interaction; avoid remote fonts, video and large illustration dependencies in the assessment flow.
- Proposed initial JavaScript budget: at most 200 KB gzip, excluding development tooling. Measure the production build and document any justified variance.
- Check start, refresh, direct results navigation and deep links on the chosen host. Missing local attempts should route to Start with an explanation.
- Normal results should render immediately from local data without simulated loading delays.
- Expected repository commands cover clean install, development, production build, lint and scoring tests; document the actual commands once implemented.

## 16. Measurement and research data

P0 contains no remote learner analytics. Formative testing uses observation and consented research notes. The app may expose a developer-only event adapter for verification, but it must not be described as a live analytics system.

For a later consent-based pilot, define:

| Event | Purpose | Minimal proposed properties |
|---|---|---|
| assessment_started | Start denominator | Random research/attempt ID, versions, provider |
| assessment_completed | Completion funnel | Versions, raw area counts, band, duration, first-exposure status |
| recommendation_opened | Whether advice is explored | Recommendation ID, area, attempt ID |
| answer_review_opened | Explanation engagement | Attempt ID |
| mock_resource_opened | Onward intent | Provider/resource ID, attempt ID |

Completion rate = distinct eligible completed attempts / distinct eligible started attempts, with a documented observation window. A clicked mock link measures intent only, not completion, learning or exam success. Repeated events are deduplicated by attempt and event meaning.

Do not transmit names, contact details, free text, raw exam certificates or item responses by default. Later research identifiers and contact information belong in separately consented research records with a defined access/retention policy. Static hosting still generates ordinary infrastructure requests; do not promise that hosting providers collect nothing.

## 17. Score-validation plan

### Stage 1: Content and scoring validity

Ask a qualified German teacher to review correctness, A1 suitability, coverage, ambiguity and distractors. Record reviewer role, review date and changes. Verify all calculations with meaningful boundary tests. These activities establish content and implementation quality, not predictive accuracy.

### Stage 2: Five formative learner sessions

Recruit five A1 learners with varied preparation: two considering booking, one already booked, one recent first-attempt passer and one recent unsuccessful candidate. Where possible, include more than one exam provider and a learner using a phone or accessibility support. This is purposeful recruitment, not a representative sample.

Observe an attempt without teaching the interface. Ask users to explain the result and choose their next step. Record confusion, interruptions and whether language or interaction caused difficulties. Do not claim interviews happened until they actually happen.

Ask these five core questions:

1. Tell me about the last time you decided whether to book a German exam. What evidence did you use?
2. After finishing A1, which exam tasks still feel difficult? Can you show me a recent example?
3. Looking at this result, what does it tell you, and what does it leave unanswered?
4. Which suggested action would you do next? What could stop you doing it?
5. What further evidence would you need before booking or keeping your exam date?

Use neutral follow-ups. Ask whether they interpret “strong foundations” as a pass guarantee, without first explaining the intended answer.

### Stage 3: Prospective criterion comparison

Run a larger exploratory pilot, for example 60–100 first-exposure learners, subject to access and resources. This is a planning range, not a power calculation or proof of adequacy.

- Predefine the current thresholds and analysis before inspecting outcomes.
- Have learners take an independently marked, fresh, provider-appropriate full mock on the same day where feasible, otherwise within 48 hours with the interval recorded.
- For this calibration study, hold back diagnostic recommendations until after the criterion assessment, so intervening practice does not change the ability being compared. Obtain consent and explain this research procedure.
- Mark productive tasks using suitable provider rubrics, with reviewers blinded to the diagnostic result.
- Record prior exam exposure, accommodations, provider and any intervening study. Avoid reused items between the screen and full mock.
- Report full-mock outcomes by band, provider and area. Report raw counts and uncertainty intervals, especially when groups are small.
- Distinguish **false reassurance** (full-mock failures among the strong-foundation band) from **unnecessary caution** (full-mock passes in the lowest band). Neither should be hidden by a single correlation or overall accuracy figure.
- Treat thresholds tuned on these participants as development results. Evaluate revisions on a fresh cohort before claiming improved accuracy.

### Stage 4: Real exam follow-up and product impact

With separate consent, follow actual exam outcomes, dates, section results and study between the check and exam. Include attempts to contact non-responders and record why learners did not book, since analysing only exam takers introduces selection bias.

Real outcomes are the stronger criterion for the assignment’s purpose, but a long delay and additional study complicate attribution. A comparison group or appropriate experiment would be required to establish that the product reduces failures or delays. Do not equate a useful diagnostic with a proven causal impact.

No pass-probability display or “validated” claim is released on the basis of five interviews, a small convenience cohort, or correlation alone.

## 18. Acceptance criteria and release checks

| ID | Required acceptance condition |
|---|---|
| AC-01 | A new visitor starts without registration and sees the scope limitation. |
| AC-02 | The bank has 15 unique items, exactly five per area, four unique options each, one valid key and a non-empty explanation. |
| AC-03 | Every item matches its blueprint slot; all answer keys and explanations receive documented author verification. Independent review status is recorded accurately. |
| AC-04 | No choices are preselected; unknown is explicit; Back/Next/edit retain state. |
| AC-05 | Refresh restores an in-progress or completed attempt; blocked storage gives an honest warning and usable memory fallback. |
| AC-06 | Review allows editing before submission; incomplete/invalid attempts never receive a final band. |
| AC-07 | All scoring examples in section 12 pass; equal totals with different weak areas can produce different bands as specified. |
| AC-08 | Exactly two or three deterministic recommendations appear, tied to observed responses. No invented weakness appears at 15/15. |
| AC-09 | Results show all three area counts, overall count, methodology and unassessed skills without requiring a tooltip. |
| AC-10 | Provider selection changes resources only; external pages are correctly labelled and checked. |
| AC-11 | Answer review shows chosen answer, key and explanation; submitted results cannot be edited in place. |
| AC-12 | Keyboard-only use, a screen-reader spot check, 200% text enlargement and 320-pixel reflow (including 400% browser zoom from 1280 pixels) work through the complete flow. Contrast and target sizes are checked. |
| AC-13 | Corrupt/expired/version-mismatched attempts, repeated submit clicks, direct links, repeated attempts and concurrent-tab updates have the specified behaviour. |
| AC-14 | No external grading dependency, personal-data form, paid upgrade flow or claim of provider endorsement is present. |
| AC-15 | Production build, lint and domain tests pass; mobile and desktop smoke tests cover assessment, result and restart. |
| AC-16 | Live app, public code, written note and single 5–7 minute video are accessible from a signed-out context. |

Test scoring, recommendation boundaries, content integrity and meaningful persistence failure cases. Do not spend the deadline writing snapshot tests for every presentational component.

**Release blockers:** Incorrect content, incorrect bands, misleading pass claims, broken completion, missing required deliverables, or inaccessible primary interactions. Lack of independent teacher review does not justify a false validation claim; disclose the limitation if submitting a prototype before review.

## 19. Risks and unresolved questions

| Risk or uncertainty | Mitigation or next evidence |
|---|---|
| Learner mistakes a strong result for complete exam readiness | Visible limits and full-mock next step; verify comprehension in sessions. |
| Small sample and MCQ guessing inflate apparent ability | Equal transparent rules, explicit unknown, narrow claims, future fresh-form validation. Unknown does not eliminate guessing. |
| Area labels overstate topic diagnosis | Describe missed examples and counts; avoid mastery claims. |
| Incorrect or ambiguous German | Author verification, seek qualified independent review, pilot and version fixes. |
| Fixed-bank retries look like learning | Exposure notice, no improvement claim, fresh forms later. |
| External links require access or change | Curated configuration, pre-submission checks and official-provider alternatives. |
| No internal Globio evidence | Ask for anonymised readiness-to-exam outcomes and trainer insights before a production pilot. |
| Learners need another language or accommodations | Test comprehension and access; prioritise based on actual barriers. |
| Diagnostic consumes time but changes no behaviour | Observe chosen next steps; later measure completed practice/full mocks rather than clicks alone. |

Questions for a future founder discussion: How do trainers currently advise booking? Which learners and exam providers are most common? What outcome data and permissions exist? Which existing resources can be linked reliably? What tradeoff between false reassurance and unnecessary delay would the team accept?

These do not block the standalone assignment prototype. They do block claims of production integration and validated impact.

## 20. Delivery sequence

Time boxes are relative to the assignment window; if less time remains, remove P1 work first.

| Window | Output |
|---|---|
| Hours 0–6 | Confirm requirements, author all questions, verify keys, define versions and scoring. Request expert feedback if accessible without delaying the build. |
| Hours 6–18 | Complete start → questions → review → results, including deterministic recommendations. |
| Hours 18–28 | Add explanations, resources, persistence and failure states; finish mobile/accessibility requirements and domain checks. |
| Hours 28–34 | Deploy early, observe available learners/testers, correct problems. Label non-learner testing accurately. |
| Hours 34–40 | Finalise README and half-page note; verify production and public repository. |
| Hours 40–46 | Record, upload and check one video. |
| Hours 46–48 | Recheck all links and submission package; reserve buffer. |

The app is done only when it works through the public deployment. The assignment is done only when all four submission links/materials are ready.

## 21. Submission and demo requirements

The repository README must explain the learner problem, local setup, actual commands, architecture, question provenance/review status, scoring rules, recommendation logic, limitations and planned validation. Include screenshots only after the real app exists. Do not claim interviews, expert review, analytics or tests that have not occurred.

Suggested six-minute video outline:

- 0:00–1:15: The candidate’s real background and interest in the role.
- 1:15–1:45: Learner problem and why a short check needs clear boundaries.
- 1:45–3:30: Walk through the product and a result with an uneven area profile.
- 3:30–4:45: Show question data, scoring and recommendation functions.
- 4:45–5:30: Explain the provisional thresholds and omitted skills.
- 5:30–6:15: Validation plan, learnings from any actual testing, and next version.

Use a prepared result for the code explanation if necessary, while also showing that the real quiz works. Never fabricate a learner testimonial or imply that illustrative demo data is a real outcome.

## 22. Draft half-page note

*Adapt to what was actually built and tested before submission. This note describes planned validation, not completed research.*

I would treat the first version as a screen of A1 foundations, not a validated predictor of exam success. A German teacher should first review correctness, difficulty, coverage and ambiguity. I would then compare first-attempt results with a fresh, independently marked full mock covering listening, reading, writing and speaking. Reviewers should not see the diagnostic score. In a calibration study, I would show recommendations after the full mock to avoid practice changing the comparison.

I would report outcomes within each band, particularly false reassurance: learners in the strongest band who fail the full mock. I would also examine learners in the lowest band who pass, since unnecessary caution can delay them. Results need raw counts, uncertainty and provider-specific analysis. Thresholds revised using one cohort must be tested on fresh learners. With consent, later follow-up would compare actual exam outcomes, recording intervening study and missing responses. Five interviews could improve usability, but could not validate predictive accuracy.

Before version 2, I would ask five learners:

1. When did you last decide whether to book, and what evidence did you use?
2. Which exam tasks still feel difficult after A1? Can you show an example?
3. What does this result tell you, and what does it leave unanswered?
4. Which suggested action would you do next, and what might stop you?
5. What further evidence would you need before booking or keeping your exam date?

I would observe how they complete the check and interpret its result, especially whether “strong foundations” is misunderstood as a guaranteed pass.

## 23. Build handoff

Start with the content schema and complete question bank, then implement the pure scoring and recommendation functions against the examples above. Build the simplest complete learner flow before adding polish. Preserve the assessment boundaries in both product copy and code.

The central product principle is: **Every result should explain the evidence, give a practical next step, and make the missing evidence visible.**
