# Sales Marketing in Event — Escape Room

A browser-only educational escape-room game for final-year Diploma in Event Management students. It uses plain HTML, CSS and JavaScript and is designed for GitHub Pages.

## Learning outcomes

By completing the game, students practise how to:
- segment and research event audiences;
- define event positioning and communicate value;
- plan campaigns and calls to action;
- apply consultative sales and ethical customer communication;
- interpret advertising and conversion metrics;
- transfer the concepts to a new event-marketing scenario.

## Files

```text
sales-marketing-in-event/
├── index.html
├── style.css
├── script.js
└── README.md
```

All graphics are drawn with CSS. The font import uses Google Fonts as a progressive enhancement; if offline, the page falls back to system fonts. No backend, API key, package installation or build command is required.

## Test locally

1. Download and extract the ZIP.
2. Open `index.html` in a modern browser.
3. Click **Start the mission**, choose timed or untimed mode, and enter the venue.
4. Answer a question incorrectly: the correct option and explanation should appear; select an answer again to retry.
5. Answer correctly: the next-area button should appear. Continue through all 15 questions.
6. Check that the completion report shows first-attempt accuracy, total challenges, time used and explanations.
7. Use **Play again** and confirm the score resets. Use **Return to home** to leave the game.
8. Resize the browser or test on a phone-sized viewport; answer options should stack into one column.

Optional static-server test: from this folder run `python -m http.server 8000` and visit `http://localhost:8000`. This is optional and is not a build step.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `sales-marketing-in-event`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root (not inside an extra nested folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then save.
6. Wait for GitHub Pages to publish and open the displayed site URL.

## Edit the questions

Open `script.js` and find `QUESTION_BANK` near the top. Each object contains:

- `zone`: learning zone shown in the game;
- `title`: descriptive label;
- `context`: scenario background;
- `question`: question prompt;
- `options`: four answer choices;
- `answer`: zero-based index of the correct option (`0` = A, `1` = B, `2` = C, `3` = D);
- `explanation`: explanation shown after a response and in the final review;
- `fieldNote`: short note shown on the venue map.

Keep the bank at 15 questions unless you also update the displayed progress and five-zone mapping. Keep exactly one correct answer for each question. The final question is deliberately a new scenario to assess transfer, not just recall.

## Scoring and retry behaviour

Knowledge accuracy is based on whether each question was correct on the first attempt. A wrong attempt shows the best answer and rationale, but students can try again to unlock the next area. Time is a pacing aid only and does not affect the knowledge score. Untimed mode hides the timer.

## Manual testing checklist

- [ ] Start button opens mission instructions.
- [ ] Untimed toggle hides the timer during play.
- [ ] Begin game shows question 1 and progress.
- [ ] Correct answer unlocks Continue exactly once.
- [ ] Incorrect answer shows rationale and allows retry without advancing.
- [ ] Repeated clicks cannot score or advance a question more than once.
- [ ] All 15 questions can be completed.
- [ ] Final report calculates first-attempt accuracy and includes explanations.
- [ ] Restart starts a clean run.
- [ ] Home controls work from instructions, gameplay and results.
- [ ] Layout remains usable on desktop and mobile.

## Notes

The game is a teaching aid, not a substitute for the institution's approved course materials. Review the question bank against your specific lecture notes and assessment requirements before using it for formal grading.
