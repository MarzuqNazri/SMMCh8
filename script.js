/* ==========================================================
   SALES MARKETING IN EVENT — EDITABLE QUESTION BANK
   Each question has: zone, title, context, question, options,
   answer (zero-based option index), explanation, and fieldNote.
   Keep exactly one correct answer per question.
   ========================================================== */
const QUESTION_BANK = [
  {zone:"Audience Intelligence",title:"Audience Intelligence",context:"You are promoting a regional food-and-culture festival with a limited marketing budget.",question:"What is the strongest first step before choosing promotional channels?",options:["Design a poster and publish it everywhere","Define the target audience using relevant demographic, geographic and behavioural evidence","Offer a discount to every person who sees the event","Book a celebrity before checking audience interest"],answer:1,explanation:"Audience segmentation identifies who the event is for and what motivates them. It gives the team a defensible basis for the message, channel and budget rather than relying on assumptions.",fieldNote:"Understand the audience before you sell the experience."},
  {zone:"Audience Intelligence",title:"Audience Intelligence",context:"Research shows that young professionals value networking and practical takeaways, while families value activities for children.",question:"How should the campaign use these findings?",options:["Use one generic message so every segment sees the same benefits","Focus only on the largest segment and ignore the rest","Tailor the value proposition and message to each priority segment","Change the event concept completely for every audience"],answer:2,explanation:"Segment-specific messaging connects benefits to audience needs. The event can retain one coherent identity while highlighting networking for professionals and family activities for parents.",fieldNote:"A segment is useful when it changes a marketing decision."},
  {zone:"Audience Intelligence",title:"Audience Intelligence",context:"A sponsor asks why the team believes 18–30-year-olds will attend. The team has only informal opinions.",question:"Which evidence would best support the target-market decision?",options:["A survey of likely attendees combined with relevant past-event attendance and channel data","The event manager's personal social-media feed","A competitor's logo and colour palette","The number of staff available on event day"],answer:0,explanation:"Primary research such as surveys, combined with relevant historical and channel data, tests audience interest more reliably than personal opinion. State sample limitations and avoid treating estimates as guarantees.",fieldNote:"Use evidence to validate assumptions; document uncertainty."},
  {zone:"Positioning & Value",title:"Positioning & Value",context:"Three events compete for the same weekend audience. Your event offers hands-on workshops led by local makers.",question:"What is the most useful positioning statement?",options:["The biggest event ever, with everything for everyone","Tickets are available online","An event with many activities and food stalls","A practical maker experience where visitors learn directly from local craftspeople"],answer:3,explanation:"Effective positioning communicates a distinctive, audience-relevant benefit. A clear point of difference helps people understand why this event suits them better than alternatives.",fieldNote:"Positioning answers: why this event, for this audience?" },
  {zone:"Positioning & Value",title:"Positioning & Value",context:"A potential attendee says the ticket costs more than a general admission ticket to a competing event.",question:"What should the salesperson do first?",options:["Immediately reduce the price for everyone","Explain relevant included benefits and ask what matters most to the attendee","Criticise the competitor's event","Promise benefits that have not been confirmed"],answer:1,explanation:"Value-based selling links the price to verified benefits and explores the buyer's needs. Discounts may be appropriate, but they should follow a pricing policy and not be the automatic response.",fieldNote:"Sell relevant value, not unsupported promises."},
  {zone:"Positioning & Value",title:"Positioning & Value",context:"Your event's promise is 'an intimate premium networking experience', but the draft advert uses crowded stock imagery and vague claims.",question:"Which revision best protects the brand promise?",options:["Use luxury language repeatedly without changing the visuals","Add as many sponsor logos as possible","Use credible imagery and specific details that demonstrate the intimate networking experience","Remove all event information and use only a slogan"],answer:2,explanation:"Brand consistency means the message, imagery and actual experience reinforce one another. Specific, credible proof builds trust and reduces the risk of a mismatch between promotion and delivery.",fieldNote:"The promotional promise must match the event experience."},
  {zone:"Campaign Planning",title:"Campaign Planning",context:"The event is eight weeks away. The team has a small budget and several channels available.",question:"Which plan is most appropriate?",options:["Set objectives, map audience segments, choose suitable channels, schedule content and allocate budget","Spend the full budget on the first channel that offers a discount","Post whenever staff have free time","Use every channel equally regardless of audience behaviour"],answer:0,explanation:"A campaign plan links measurable objectives to audiences, channel choices, timing, content and resources. Channel selection should be justified by audience fit and expected performance.",fieldNote:"A campaign is a coordinated plan, not a collection of posts."},
  {zone:"Campaign Planning",title:"Campaign Planning",context:"The campaign goal is to increase advance ticket sales among university students.",question:"Which call to action is clearest?",options:["Find out more about things happening in the city","Keep an eye on our page","Tell your friends about events","Book your student ticket now using the verified student offer"],answer:3,explanation:"A strong call to action tells the audience what to do next and, where relevant, clarifies the offer. The offer must be genuine and eligibility rules should be easy to find.",fieldNote:"Make the next action obvious and truthful."},
  {zone:"Campaign Planning",title:"Campaign Planning",context:"An email campaign has a low open rate. The team wants to improve the next send.",question:"What is the most responsible first optimisation?",options:["Buy a list of unrelated email addresses","Review consent, list quality, subject line relevance and delivery data; test one change at a time","Send the same email several times in one day","Hide the unsubscribe option"],answer:1,explanation:"Reviewing permission, list quality, deliverability and relevance protects recipients and brand reputation. Controlled tests help identify which changes improve performance; opt-out mechanisms should remain accessible.",fieldNote:"Optimise responsibly; audience trust is a marketing asset."},
  {zone:"Sales Conversion",title:"Sales Conversion",context:"A corporate client is interested in a team-building event but is unsure whether the package fits their objectives.",question:"What is the best next step in a consultative sales conversation?",options:["Send the standard package without asking anything else","Pressure them to sign before the offer expires","Ask about objectives, group size, constraints and success criteria, then recommend a suitable package","Offer the lowest price regardless of scope"],answer:2,explanation:"Consultative selling diagnoses needs before proposing a solution. The recommendation should connect event features to the client's objectives, operational constraints and agreed success measures.",fieldNote:"Diagnose the need before prescribing the package."},
  {zone:"Sales Conversion",title:"Sales Conversion",context:"A buyer asks whether the venue is accessible for a guest who uses a wheelchair. You are not certain about one entrance.",question:"What is the most professional response?",options:["Confirm the details with the venue or operations team and provide accurate information promptly","Assure the buyer that everything is accessible without checking","Avoid answering and change the subject","Say accessibility is the guest's responsibility"],answer:0,explanation:"Sales communication must be accurate, especially for access and safety requirements. Verify the information with the responsible team, communicate limitations honestly and follow up promptly.",fieldNote:"Trust grows when claims are verified."},
  {zone:"Sales Conversion",title:"Sales Conversion",context:"A ticket buyer abandons checkout after seeing the total price, including fees.",question:"Which response is most likely to improve conversion ethically?",options:["Hide fees until the final payment screen","Create a false countdown timer","Send repeated messages until the buyer pays","Show transparent total pricing early, explain what is included and simplify the checkout journey"],answer:3,explanation:"Transparent pricing reduces unpleasant surprises and supports informed decisions. A simple, trustworthy checkout can reduce friction without using deceptive urgency or hiding costs.",fieldNote:"Reduce friction without misleading customers."},
  {zone:"Budget & Measurement",title:"Budget & Measurement",context:"A campaign spends RM1,000 and generates RM4,000 in ticket revenue attributable to that campaign. For this exercise, calculate ROAS as revenue divided by ad spend.",question:"What is the campaign's return on ad spend (ROAS)?",options:["0.25×","4×","RM3,000×","5×"],answer:1,explanation:"ROAS = attributed revenue ÷ advertising spend = RM4,000 ÷ RM1,000 = 4. This means RM4 in attributed revenue for each RM1 spent on ads. ROAS is not the same as profit or overall ROI.",fieldNote:"Know the metric formula before interpreting performance."},
  {zone:"Budget & Measurement",title:"Budget & Measurement",context:"A campaign receives many likes, but ticket sales remain below target.",question:"Which set of metrics best helps diagnose sales effectiveness?",options:["Only follower count and total likes","Only the number of posts published","Click-through rate, landing-page conversion rate, cost per acquisition and ticket sales","Only the number of colours used in campaign artwork"],answer:2,explanation:"Engagement can indicate attention, but conversion metrics show whether activity moves people toward purchase. Compare channel performance against the objective and use consistent attribution assumptions.",fieldNote:"Measure outcomes that match the objective."},
  {zone:"Exit Challenge",title:"Exit Challenge",context:"NEW EXAMPLE: A community arts event has 300 tickets left two weeks before opening. Past data shows local families respond to school newsletters, while young adults discover events through short videos. The remaining budget is limited.",question:"Which action best applies audience segmentation, channel fit and performance measurement together?",options:["Put the entire remaining budget into one viral-video attempt and measure views only","Send the same message to every contact and count impressions","Cut ticket prices for all buyers immediately without checking the cause of slow sales","Run tailored messages through the relevant channels, use trackable links or codes, and reallocate spend based on ticket conversions"],answer:3,explanation:"This solution connects audience insight to channel choice and measures the outcome that matters: ticket conversion. Trackable links or codes help compare channels; review results frequently and adjust within the approved budget. This new scenario tests transfer of learning, not recall alone.",fieldNote:"Final test: combine audience, channel and conversion evidence."}
];

const $ = id => document.getElementById(id);
const screens = ["homeScreen","instructionsScreen","gameScreen","completionScreen"];
const ZONE_NAMES = ["Audience Intelligence","Positioning & Value","Campaign Planning","Sales Conversion","Budget & Measurement"];
const HALL_QUESTION_RANGES = [[0,2],[3,5],[6,8],[9,11],[12,14]];
let currentIndex = 0;
let firstTryCorrect = [];
let attempts = [];
let locked = false;
let startedAt = 0;
let timerInterval = null;
let remainingSeconds = 900;
let untimed = false;
let soundOn = false;
let audioContext = null;

function showScreen(id) {
  screens.forEach(s => $(s).classList.toggle("hidden", s !== id));
  window.scrollTo({top:0,behavior:"smooth"});
}
function toast(message) {
  const el = $("toast"); el.textContent = message; el.classList.remove("hidden");
  clearTimeout(toast.timeout); toast.timeout = setTimeout(() => el.classList.add("hidden"), 2300);
}
function playTone(freq=660, duration=.07) {
  if (!soundOn) return;
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator(), gain = audioContext.createGain();
    oscillator.frequency.value = freq; oscillator.type = "sine";
    gain.gain.setValueAtTime(.035, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(); oscillator.stop(audioContext.currentTime + duration);
  } catch (_) {}
}
function startFromHome() { showScreen("instructionsScreen"); }
function startGame() {
  currentIndex = 0; firstTryCorrect = Array(QUESTION_BANK.length).fill(null);
  attempts = QUESTION_BANK.map(() => 0); locked = false;
  untimed = $("untimedToggle").checked; remainingSeconds = 900; startedAt = Date.now();
  clearInterval(timerInterval); $("timerMetric").classList.toggle("hidden", untimed);
  updateTimer(); if (!untimed) timerInterval = setInterval(tickTimer, 1000);
  showScreen("gameScreen"); renderQuestion();
}
function tickTimer() {
  remainingSeconds = Math.max(0, 900 - Math.floor((Date.now()-startedAt)/1000));
  updateTimer();
  if (remainingSeconds <= 0) {
    clearInterval(timerInterval);
    toast("Time target reached. Finish the current learning challenge at your own pace.");
    // The timer is a pacing aid, not a forced failure condition.
  }
}
function updateTimer() {
  const secs = untimed ? 0 : Math.max(0, 900 - Math.floor((Date.now()-startedAt)/1000));
  $("timerText").textContent = `${String(Math.floor(secs/60)).padStart(2,"0")}:${String(secs%60).padStart(2,"0")}`;
}
function renderQuestion() {
  locked = false;
  const q = QUESTION_BANK[currentIndex];
  $("zoneTitle").textContent = `Zone ${String(Math.floor(currentIndex/3)+1).padStart(2,"0")}: ${q.zone}`;
  $("challengeNumber").textContent = `CHALLENGE ${String(currentIndex+1).padStart(2,"0")}`;
  $("progressText").textContent = `${String(currentIndex+1).padStart(2,"0")} / ${QUESTION_BANK.length}`;
  $("scoreText").textContent = `${Math.round(firstTryCorrect.filter(v=>v===true).length/QUESTION_BANK.length*100)}%`;
  $("progressFill").style.width = `${currentIndex/QUESTION_BANK.length*100}%`;
  $("progressFill").parentElement.setAttribute("aria-valuenow", String(currentIndex));
  $("questionText").textContent = q.question; $("questionContext").textContent = q.context;
  $("fieldNote").textContent = q.fieldNote;
  $("attemptText").textContent = "Choose one answer to test the lock.";
  $("feedbackBox").className = "feedback hidden"; $("continueButton").classList.add("hidden");
  const container = $("answersContainer"); container.innerHTML = "";
  q.options.forEach((option, i) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "answer";
    button.innerHTML = `<span class="letter">${String.fromCharCode(65+i)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = option;
    button.addEventListener("click", () => chooseAnswer(i)); container.appendChild(button);
  });
  updateMap();
}
function chooseAnswer(optionIndex) {
  if (locked) return;
  const q = QUESTION_BANK[currentIndex], buttons = [...$("answersContainer").querySelectorAll("button")];
  attempts[currentIndex]++;
  const correct = optionIndex === q.answer;
  if (firstTryCorrect[currentIndex] === null) firstTryCorrect[currentIndex] = correct;
  buttons.forEach((b,i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add("correct");
    if (i === optionIndex && !correct) b.classList.add("incorrect");
  });
  const box = $("feedbackBox"); box.className = `feedback ${correct ? "good" : "bad"}`;
  $("feedbackIcon").textContent = correct ? "✓" : "!";
  $("feedbackTitle").textContent = correct ? "Lock unlocked" : "Not quite — review the clue";
  $("feedbackText").textContent = correct
    ? `Correct. ${q.explanation}`
    : `The best answer is ${String.fromCharCode(65+q.answer)}: ${q.options[q.answer]}. ${q.explanation}`;
  box.classList.remove("hidden");
  if (correct) {
    locked = true; $("attemptText").textContent = "Access granted. Read the explanation, then continue.";
    $("continueButton").textContent = currentIndex === QUESTION_BANK.length-1 ? "View learning report →" : "Continue to next area →";
    $("continueButton").classList.remove("hidden"); playTone(820,.12);
  } else {
    $("attemptText").textContent = "Review the feedback, then select an answer to try again.";
    buttons.forEach(b => { b.disabled = false; });
    // Keep the correct answer visibly marked but allow a retry.
    buttons.forEach((b,i) => { if (i===q.answer) b.classList.add("correct"); });
    playTone(250,.12);
  }
  $("scoreText").textContent = `${Math.round(firstTryCorrect.filter(v=>v===true).length/QUESTION_BANK.length*100)}%`;
}
function continueGame() {
  if (!locked) return;
  if (currentIndex >= QUESTION_BANK.length-1) { finishGame(); return; }
  currentIndex++; renderQuestion(); playTone(540,.06);
}
function updateMap() {
  const halls = [...document.querySelectorAll(".hall")];
  halls.forEach((hall, i) => {
    const range = HALL_QUESTION_RANGES[i];
    hall.classList.toggle("complete", currentIndex > range[1]);
    hall.classList.toggle("current", currentIndex >= range[0] && currentIndex <= range[1]);
  });
  const player = $("mapPlayer");
  const positions = [{top:"33px",left:"calc(50% - 7px)"},{top:"91px",left:"calc(100% - 45px)"},{top:"151px",left:"calc(50% - 7px)"},{top:"211px",left:"20px"},{top:"calc(100% - 30px)",left:"calc(100% - 45px)"}];
  const pos = positions[Math.min(4, Math.floor(currentIndex/3))]; player.style.top = pos.top; player.style.left = pos.left;
}
function finishGame() {
  clearInterval(timerInterval);
  const correctCount = firstTryCorrect.filter(v=>v===true).length;
  const accuracy = Math.round(correctCount/QUESTION_BANK.length*100);
  const used = Math.floor((Date.now()-startedAt)/1000);
  $("progressFill").style.width = "100%";
  $("completionTitle").textContent = accuracy >= 80 ? "The venue is yours." : "Exit unlocked — keep sharpening your strategy.";
  $("completionMessage").textContent = accuracy >= 80 ? "Strong work. You applied event marketing decisions with confidence." : "You completed every challenge. Review the learning report to strengthen the concepts you missed.";
  $("finalAccuracy").textContent = `${accuracy}%`;
  $("finalSolved").textContent = `${QUESTION_BANK.length} / ${QUESTION_BANK.length}`;
  $("finalTime").textContent = untimed ? "Untimed" : formatTime(used);
  $("reviewSummary").textContent = `${correctCount} correct on first attempt · ${QUESTION_BANK.length-correctCount} to review`;
  const list = $("reviewList"); list.innerHTML = "";
  QUESTION_BANK.forEach((q,i) => {
    const details = document.createElement("details"); details.className = "review-item";
    const summary = document.createElement("summary");
    const num = document.createElement("span"); num.className = "review-num"; num.textContent = String(i+1).padStart(2,"0");
    const question = document.createElement("span"); question.className = "review-question"; question.textContent = q.question;
    const status = document.createElement("span"); status.className = `review-status ${firstTryCorrect[i] ? "" : "missed"}`; status.textContent = firstTryCorrect[i] ? "FIRST-TRY CORRECT" : "REVIEW";
    summary.append(num,question,status);
    const body = document.createElement("div"); body.className = "review-body";
    const answer = document.createElement("p"); answer.innerHTML = "<b>Best answer:</b> "; answer.append(document.createTextNode(`${String.fromCharCode(65+q.answer)}. ${q.options[q.answer]}`));
    const explain = document.createElement("p"); explain.innerHTML = "<b>Why:</b> "; explain.append(document.createTextNode(q.explanation));
    body.append(answer,explain); details.append(summary,body); list.appendChild(details);
    if (!firstTryCorrect[i]) details.open = true;
  });
  showScreen("completionScreen");
}
function formatTime(seconds) { return `${Math.floor(seconds/60)}m ${String(seconds%60).padStart(2,"0")}s`; }
function goHome() {
  clearInterval(timerInterval); showScreen("homeScreen");
}
function restart() {
  $("untimedToggle").checked = false; showScreen("instructionsScreen");
}
$("startButton").addEventListener("click", startFromHome);
$("howToButton").addEventListener("click", startFromHome);
$("brandHome").addEventListener("click", e => { e.preventDefault(); goHome(); });
$("backHomeButton").addEventListener("click", goHome);
$("beginGameButton").addEventListener("click", startGame);
$("continueButton").addEventListener("click", continueGame);
$("quitButton").addEventListener("click", () => { if (confirm("Return to the home screen? Your current run will be lost.")) goHome(); });
$("completionHomeButton").addEventListener("click", goHome);
$("restartButton").addEventListener("click", restart);
$("soundToggle").addEventListener("click", () => {
  soundOn = !soundOn; $("soundToggle").setAttribute("aria-pressed", String(soundOn));
  $("soundLabel").textContent = soundOn ? "Sound on" : "Sound off"; if(soundOn) playTone(660,.07);
});
document.addEventListener("keydown", e => {
  if ($("gameScreen").classList.contains("hidden")) return;
  if (e.key === "Enter" && !$("continueButton").classList.contains("hidden") && document.activeElement === document.body) continueGame();
});
