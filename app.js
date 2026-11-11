(function () {
  "use strict";

  const CFG = window.APP_CONFIG;
  const SUBJECTS = window.SUBJECTS;
  const $ = (sel) => document.querySelector(sel);

  // ——— Storage (falls back quietly if the browser blocks it) ———
  function store(kind) {
    try { const s = window[kind]; s.setItem("_t", "1"); s.removeItem("_t"); return s; } catch (e) { return null; }
  }
  const LS = store("localStorage") || store("sessionStorage");

  const gate = $("#gate");
  const app = $("#app");
  const btnBack = $("#btn-home");

  // ——— State ———
  let subject = null;
  let currentView = "home";

  let flashAll = [];      // cards for the chosen filter
  let flashOrder = [];
  let flashIndex = 0;
  let flashFlipped = false;
  let flashLesson = "all";
  let knowSet = new Set();
  let learningSet = new Set();

  let quizDef = null;     // { name, build() }
  let quizList = [];      // questions in play
  let quizIndex = 0;
  let quizAnswers = [];
  let quizSelected = [];
  let quizLocked = false;

  // ——— Helpers ———
  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const as = a.slice().sort((x, y) => x - y);
    const bs = b.slice().sort((x, y) => x - y);
    return as.every((v, i) => v === bs[i]);
  }
  function answerList(q) { return Array.isArray(q.answer) ? q.answer.slice() : [q.answer]; }
  function isMulti(q) { return Array.isArray(q.answer); }

  // ——— Gate ———
  function unlock() {
    gate.classList.add("hidden");
    app.classList.remove("hidden");
    if (LS) LS.setItem(CFG.gateKey, "1");
    start();
  }
  $("#gate-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = $("#gate-pw").value.trim().toLowerCase();
    if (pw === String(CFG.password).toLowerCase()) {
      $("#gate-error").classList.add("hidden");
      unlock();
    } else {
      $("#gate-error").classList.remove("hidden");
      $("#gate-pw").value = "";
      $("#gate-pw").focus();
    }
  });

  // ——— Navigation ———
  const VIEWS = ["subjects", "home", "study", "flash", "quiz"];
  function showView(name) {
    currentView = name;
    VIEWS.forEach((v) => {
      const el = $("#view-" + v);
      if (el) el.classList.toggle("hidden", v !== name);
    });
    const multi = SUBJECTS.length > 1;
    const showBack = !(name === "subjects" || (name === "home" && !multi));
    btnBack.classList.toggle("hidden", !showBack);
    $("#subtitle").textContent = CFG.subtitle + (subject && multi && name !== "subjects" ? " · " + subject.name : "");
    window.scrollTo(0, 0);
  }

  btnBack.addEventListener("click", () => {
    if (currentView === "home") { showView("subjects"); return; }
    if (currentView === "quiz" && $("#quiz-start").classList.contains("hidden")) {
      showQuizPanel("start"); return;
    }
    showView("home");
  });

  function start() {
    $("#brand").textContent = CFG.title;
    if (SUBJECTS.length > 1) {
      renderSubjects();
      showView("subjects");
    } else {
      selectSubject(SUBJECTS[0]);
    }
  }

  function renderSubjects() {
    $("#subjects-welcome").textContent = CFG.greeting + " Pick a subject to study. 💪";
    const grid = $("#subject-grid");
    grid.innerHTML = "";
    SUBJECTS.forEach((s) => {
      const b = document.createElement("button");
      b.className = "mode-card subject-card";
      b.innerHTML = '<span class="mode-emoji">' + escapeHtml(s.emoji || "📚") + '</span><span class="mode-title">' +
        escapeHtml(s.name) + '</span><span class="mode-desc">' + escapeHtml(s.tagline || "") + "</span>";
      b.addEventListener("click", () => selectSubject(s));
      grid.appendChild(b);
    });
  }

  function selectSubject(s) {
    subject = s;
    $("#home-welcome").textContent = CFG.greeting + " " + (s.intro || "Pick a mode to get started. You've got this! 💪");
    const mapCard = $("#mode-map");
    if (mapCard) mapCard.classList.toggle("hidden", !(s.mapQuiz && window.MapQuiz));
    showView("home");
  }

  document.querySelectorAll(".mode-card[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === "study") { initStudy(); showView("study"); }
      else if (mode === "flash") { initFlash(); showView("flash"); }
      else if (mode === "quiz") { initQuizHome(); showView("quiz"); }
      else if (mode === "map") { openMapQuiz("match"); }
    });
  });

  // ——— Study ———
  function initStudy() {
    const notes = subject.notes || [];
    const nav = $("#study-nav");
    nav.innerHTML = "";
    if (!notes.length) { $("#study-content").innerHTML = "<p>No notes yet.</p>"; return; }
    notes.forEach((s, i) => {
      const chip = document.createElement("button");
      chip.className = "sec-chip" + (i === 0 ? " active" : "");
      chip.textContent = s.short || s.title;
      chip.addEventListener("click", () => {
        nav.querySelectorAll(".sec-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        $("#study-content").innerHTML = s.html;
        window.scrollTo(0, 0);
      });
      nav.appendChild(chip);
    });
    $("#study-content").innerHTML = notes[0].html;
  }

  // ——— Flashcards ———
  function initFlash() {
    flashLesson = "all";
    buildFlashFilter();
    resetFlashDeck();
  }
  function buildFlashFilter() {
    const box = $("#flash-filter");
    box.innerHTML = "";
    const lessons = subject.lessons || [];
    if (lessons.length < 2) return;
    const opts = [{ id: "all", name: "All" }].concat(lessons.map((l) => ({ id: String(l.id), name: (l.name.split("·")[0] || l.name).trim() })));
    opts.forEach((o) => {
      const chip = document.createElement("button");
      chip.className = "sec-chip" + (String(flashLesson) === o.id ? " active" : "");
      chip.textContent = o.name;
      chip.addEventListener("click", () => {
        flashLesson = o.id;
        box.querySelectorAll(".sec-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        resetFlashDeck();
      });
      box.appendChild(chip);
    });
  }
  function resetFlashDeck() {
    const all = subject.flashcards || [];
    flashAll = all.filter((c) => flashLesson === "all" || String(c.lesson) === String(flashLesson));
    flashOrder = shuffle(flashAll.map((_, i) => i));
    flashIndex = 0;
    flashFlipped = false;
    knowSet = new Set();
    learningSet = new Set();
    renderFlash();
  }
  function renderFlash() {
    $("#flash-body").classList.toggle("hidden", !flashAll.length);
    $("#flash-empty").classList.toggle("hidden", !!flashAll.length);
    if (!flashAll.length) return;
    const card = flashAll[flashOrder[flashIndex]];
    const t = $("#flash-term"), d = $("#flash-def");
    t.textContent = card.term;
    d.textContent = card.def;
    $("#flash-label-front").textContent = card.front || "Term";
    $("#flash-label-back").textContent = card.back || "Definition";
    t.classList.toggle("long", card.term.length > 24);
    d.classList.toggle("long", card.def.length > 110);
    $("#flashcard").classList.toggle("tall", Math.max(card.term.length, card.def.length) > 220);
    $("#flashcard").classList.toggle("flipped", flashFlipped);
    $("#flash-progress").textContent = (flashIndex + 1) + " / " + flashOrder.length;
    $("#stat-know").textContent = knowSet.size;
    $("#stat-learning").textContent = learningSet.size;
  }
  function flipCard() {
    flashFlipped = !flashFlipped;
    $("#flashcard").classList.toggle("flipped", flashFlipped);
  }
  function stepFlash(delta) {
    flashIndex = (flashIndex + delta + flashOrder.length) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  }
  $("#flashcard").addEventListener("click", flipCard);
  $("#flashcard").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flipCard(); }
  });
  $("#btn-shuffle").addEventListener("click", () => {
    flashOrder = shuffle(flashAll.map((_, i) => i));
    flashIndex = 0; flashFlipped = false; renderFlash();
  });
  $("#btn-prev").addEventListener("click", () => stepFlash(-1));
  $("#btn-next").addEventListener("click", () => stepFlash(1));
  $("#btn-know").addEventListener("click", () => {
    const id = flashOrder[flashIndex];
    knowSet.add(id); learningSet.delete(id); stepFlash(1);
  });
  $("#btn-learning").addEventListener("click", () => {
    const id = flashOrder[flashIndex];
    learningSet.add(id); knowSet.delete(id); stepFlash(1);
  });

  // ——— Quiz: building the menu ———
  function uniqueQuestions(s) {
    const seen = new Map();
    (s.tests || []).forEach((t) => t.questions.forEach((q) => { if (!seen.has(q.id)) seen.set(q.id, q); }));
    return Array.from(seen.values());
  }
  // Copy of a question with its choices shuffled (answer index remapped).
  function withShuffledChoices(q) {
    if (!q.choices || q.keepOrder) return q;
    const order = shuffle(q.choices.map((_, i) => i));
    const ans = answerList(q).map((a) => order.indexOf(a));
    return Object.assign({}, q, {
      choices: order.map((i) => q.choices[i]),
      answer: isMulti(q) ? ans : ans[0]
    });
  }

  function quizDefinitions(s) {
    const pool = uniqueQuestions(s);
    const defs = { tests: [], mixed: [], lessons: [], tf: [] };
    (s.tests || []).forEach((t) => {
      defs.tests.push({
        emoji: "📝", name: t.name, desc: t.desc || (t.questions.length + " questions"),
        build: () => (t.shuffle ? shuffle(t.questions).map(withShuffledChoices) : t.questions.slice())
      });
    });
    const n = Math.min(25, pool.length);
    if (pool.length) {
      defs.mixed.push({
        emoji: "🎲", name: "Random " + n, desc: n + " questions picked from every test · different each time",
        build: () => shuffle(pool).slice(0, n).map(withShuffledChoices)
      });
    }
    (s.lessons || []).forEach((l) => {
      const qs = pool.filter((q) => String(q.lesson) === String(l.id));
      if (!qs.length) return;
      defs.lessons.push({
        emoji: "📚", name: l.name, desc: qs.length + " questions · shuffled",
        build: () => shuffle(qs).map(withShuffledChoices)
      });
    });
    // True / False concept quizzes (optional: subject.trueFalse). Not mixed into the multiple-choice pools.
    const tfAll = s.trueFalse || [];
    if (tfAll.length) {
      (s.lessons || []).forEach((l) => {
        const ts = tfAll.filter((q) => String(q.lesson) === String(l.id));
        if (!ts.length) return;
        defs.tf.push({
          emoji: "✔️", name: l.name + " · T/F", desc: ts.length + " true/false statements · shuffled",
          build: () => shuffle(ts)
        });
      });
      defs.tf.push({
        emoji: "🧠", name: "All concepts · T/F", desc: "All " + tfAll.length + " true/false statements · shuffled",
        build: () => shuffle(tfAll)
      });
    }
    if (pool.length) {
      defs.lessons.push({
        emoji: "🏆", name: "Everything", desc: "All " + pool.length + " different questions · shuffled",
        build: () => shuffle(pool).map(withShuffledChoices)
      });
    }
    return defs;
  }

  function initQuizHome() {
    $("#quiz-title").textContent = subject.name + " Quiz";
    const menu = $("#quiz-menu");
    menu.innerHTML = "";
    const defs = quizDefinitions(subject);
    function group(title, list) {
      if (!list.length) return;
      const h = document.createElement("h3");
      h.className = "section-title";
      h.textContent = title;
      menu.appendChild(h);
      const wrap = document.createElement("div");
      wrap.className = "quiz-menu";
      list.forEach((d) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "quiz-opt";
        b.innerHTML = '<span class="qo-emoji">' + d.emoji + '</span><span class="qo-text"><span class="qo-title">' +
          escapeHtml(d.name) + '</span><span class="qo-desc">' + escapeHtml(d.desc) + '</span></span><span class="qo-go">›</span>';
        b.addEventListener("click", () => { if (d.map) openMapQuiz(d.map); else startQuiz(d); });
        wrap.appendChild(b);
      });
      menu.appendChild(wrap);
    }
    if (subject.mapQuiz && window.MapQuiz) {
      group("🗺️ " + subject.mapQuiz.title + " map quiz", [
        { emoji: "🗺️", name: "Match names to the map", desc: "Drag or tap names onto numbered spots · see what's right or wrong", build: null, map: "match" },
        { emoji: "🔍", name: "What is this?", desc: "One place lights up · pick its name", build: null, map: "name" }
      ]);
    }
    group("Practice tests", defs.tests);
    group("Mixed", defs.mixed);
    group("By lesson", defs.lessons);
    group("True / False", defs.tf);
    showQuizPanel("start");
  }

  // ——— Map quiz (Continents & Oceans; see mapquiz.js) ———
  function openMapQuiz(startMode) {
    initQuizHome();
    showView("quiz");
    if (window.MapQuiz && window.MapQuiz.open(subject, startMode)) showQuizPanel("map");
  }

  function showQuizPanel(which) {
    ["start", "play", "results", "map"].forEach((p) => $("#quiz-" + p).classList.toggle("hidden", p !== which));
    window.scrollTo(0, 0);
  }

  // ——— Typed answers (optional: q.type === "input") ———
  // q.fields: [{ label, kind: "number"|"ratio", value: n | [a,b,...], unit, equivalent, alsoAccept }]
  function isTyped(q) { return q.type === "input"; }
  function cleanText(s) {
    return String(s || "").toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, " ").trim();
  }
  // "5", "5.5", "$8", "8.00", "5 1/2", "11/2", "5½", ".5", "10 miles", "8 per burger"
  function parseNumber(raw) {
    let s = cleanText(raw).replace(/\u00bd/g, " 1/2").replace(/\u00bc/g, " 1/4").replace(/\u00be/g, " 3/4");
    s = s.replace(/\bper\b.*$/, "").replace(/\/\s*[a-z].*$/, "").replace(/\beach\b.*$/, "");
    s = s.replace(/[$,]/g, "").replace(/[a-z]+\.?/g, " ").replace(/\s+/g, " ").trim();
    let m;
    if ((m = s.match(/^(-?\d+)\s+(\d+)\s*\/\s*(\d+)$/))) return +m[1] + (+m[2]) / (+m[3]);
    if ((m = s.match(/^(-?\d*\.?\d+)\s*\/\s*(\d*\.?\d+)$/))) return +m[2] ? (+m[1]) / (+m[2]) : NaN;
    if ((m = s.match(/^-?\d*\.?\d+$/))) return +m[0];
    return NaN;
  }
  // "4:8", "4 : 8", "4 to 8", "4/8", "4 apples to 8 bananas", "4, 7, 9"
  function parseRatio(raw) {
    let s = cleanText(raw).replace(/\bto\b/g, ":").replace(/[\/,;\-]/g, ":").replace(/[$]/g, "");
    s = s.replace(/[a-z]+/g, " ");
    let parts = s.split(":").map((x) => x.trim()).filter((x) => x.length);
    if (parts.length === 1) parts = parts[0].split(" ").filter((x) => x.length);
    const nums = parts.map(parseNumber);
    return nums.length && nums.every((n) => isFinite(n)) ? nums : null;
  }
  function near(a, b) { return Math.abs(a - b) < 1e-6; }
  function checkField(f, raw) {
    const alt = (f.alsoAccept || []).map(cleanText);
    if (alt.indexOf(cleanText(raw)) >= 0) return { ok: true };
    if (f.kind === "text") {
      const t = cleanText(raw);
      return { ok: (f.keywords || []).every((grp) => grp.some((k) => t.indexOf(cleanText(k)) >= 0)) };
    }
    if (f.kind === "ratio") {
      const got = parseRatio(raw), want = f.value;
      if (!got || got.length !== want.length) return { ok: false };
      const same = (g) => g.every((n, i) => near(n, want[i]));
      const equiv = (g) => g[0] > 0 && g.every((n, i) => near(n * (want[0] / g[0]), want[i]));
      if (same(got) || (f.equivalent !== false && equiv(got))) return { ok: true };
      const rev = got.slice().reverse();
      if (same(rev) || (f.equivalent !== false && equiv(rev)))
        return { ok: false, hint: "Check the order — the first number goes with the first thing named." };
      return { ok: false };
    }
    const n = parseNumber(raw);
    return { ok: isFinite(n) && near(n, f.value) };
  }

  function renderTyped(q, box) {
    box.classList.add("typed");
    q.fields.forEach((f, i) => {
      const row = document.createElement("label");
      row.className = "typed-row";
      row.innerHTML = (f.label ? '<span class="typed-label">' + escapeHtml(f.label) + "</span>" : "") +
        '<span class="typed-wrap">' + (f.prefix ? '<span class="typed-unit">' + escapeHtml(f.prefix) + "</span>" : "") +
        '<input class="typed-input" type="text" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" data-idx="' + i + '" placeholder="' +
        escapeHtml(f.placeholder || (f.kind === "ratio" ? "e.g. 2:3" : f.kind === "text" ? "Type your answer" : "Type a number")) + '" />' +
        (f.unit ? '<span class="typed-unit">' + escapeHtml(f.unit) + "</span>" : "") + "</span>";
      box.appendChild(row);
    });
    box.querySelectorAll(".typed-input").forEach((inp) => {
      inp.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        const all = Array.from(box.querySelectorAll(".typed-input"));
        const next = all[all.indexOf(inp) + 1];
        if (next && !next.value.trim()) next.focus(); else $("#btn-submit-q").click();
      });
    });
  }
  function submitTyped(q, fb) {
    const inputs = Array.from($("#quiz-choices").querySelectorAll(".typed-input"));
    const vals = inputs.map((i) => i.value.trim());
    if (vals.some((v) => !v)) {
      fb.textContent = vals.length > 1 ? "Fill in every box first — you've got this!" : "Type an answer first — you've got this!";
      fb.className = "quiz-feedback no";
      return;
    }
    quizLocked = true;
    const results = q.fields.map((f, i) => checkField(f, vals[i]));
    const isCorrect = results.every((r) => r.ok);
    inputs.forEach((inp, i) => {
      inp.readOnly = true;
      inp.closest(".typed-row").classList.add(results[i].ok ? "correct" : "wrong");
    });
    const hint = results.map((r) => r.hint).filter(Boolean)[0];
    fb.className = "quiz-feedback " + (isCorrect ? "ok" : "no");
    fb.innerHTML = (isCorrect ? "<strong>Correct! ✓</strong> " : "<strong>Not quite ✗</strong> " + (hint ? escapeHtml(hint) + " " : "")) +
      '<span class="fb-answer">Answer: ' + escapeHtml(q.answerText) + "</span> " + escapeHtml(q.explain);
    quizAnswers.push({ q: q, typed: vals, correct: isCorrect });
    $("#btn-submit-q").classList.add("hidden");
    $("#btn-next-q").classList.remove("hidden");
    $("#btn-next-q").textContent = quizIndex + 1 >= quizList.length ? "See Results →" : "Next Question →";
    $("#btn-next-q").focus();
  }

  // ——— Quiz: playing ———
  function startQuiz(def) {
    quizDef = def;
    quizList = def.build();
    quizIndex = 0;
    quizAnswers = [];
    $("#quiz-name").textContent = def.name;
    showQuizPanel("play");
    renderQuestion();
  }
  function currentQ() { return quizList[quizIndex]; }

  function renderQuestion() {
    const q = currentQ();
    const multi = isMulti(q);
    quizSelected = [];
    quizLocked = false;
    $("#quiz-bar").style.width = (quizIndex / quizList.length) * 100 + "%";
    $("#quiz-num").textContent = "Question " + (quizIndex + 1) + " of " + quizList.length;
    const typeLabel = q.label || (isTyped(q) ? "Type your answer" : q.tf ? "True or False?" : (multi ? "Multi-select — pick all that apply" : "Multiple choice"));
    $("#quiz-question").innerHTML = '<span class="q-type">' + typeLabel + "</span><br>" + escapeHtml(q.q) +
      (q.visual ? '<div class="q-visual">' + q.visual + "</div>" : "");

    const box = $("#quiz-choices");
    box.innerHTML = "";
    box.classList.toggle("tf", !!(q.tf || q.yn));
    box.classList.remove("typed");
    $("#quiz-feedback").classList.add("hidden");
    $("#btn-submit-q").classList.remove("hidden");
    $("#btn-next-q").classList.add("hidden");
    if (isTyped(q)) { renderTyped(q, box); return; }
    q.choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice" + (multi ? " multi" : "") + (q.tf || q.yn ? " tf-choice" : "");
      btn.dataset.idx = i;
      btn.innerHTML = q.tf
        ? "<span>" + (i === 0 ? "✓ " : "✗ ") + escapeHtml(c) + "</span>"
        : '<span class="marker">' + (multi ? "☐" : String.fromCharCode(65 + i)) + "</span><span>" + escapeHtml(c) + "</span>";
      btn.addEventListener("click", () => onChoice(i, btn));
      box.appendChild(btn);
    });
    $("#quiz-feedback").classList.add("hidden");
    $("#btn-submit-q").classList.remove("hidden");
    $("#btn-next-q").classList.add("hidden");
  }

  function onChoice(i, btn) {
    if (quizLocked) return;
    const q = currentQ();
    if (!isMulti(q)) {
      quizSelected = [i];
      $("#quiz-choices").querySelectorAll(".choice").forEach((el) => el.classList.remove("selected"));
      btn.classList.add("selected");
    } else {
      const pos = quizSelected.indexOf(i);
      if (pos >= 0) {
        quizSelected.splice(pos, 1);
        btn.classList.remove("selected");
        btn.querySelector(".marker").textContent = "☐";
      } else {
        quizSelected.push(i);
        btn.classList.add("selected");
        btn.querySelector(".marker").textContent = "☑";
      }
    }
  }

  $("#btn-submit-q").addEventListener("click", () => {
    if (quizLocked) return;
    const q = currentQ();
    const fb = $("#quiz-feedback");
    if (isTyped(q)) { submitTyped(q, fb); return; }
    if (quizSelected.length === 0) {
      fb.textContent = "Pick an answer first — you've got this!";
      fb.className = "quiz-feedback no";
      return;
    }
    quizLocked = true;
    const correctAns = answerList(q);
    const isCorrect = arraysEqual(quizSelected, correctAns);
    $("#quiz-choices").querySelectorAll(".choice").forEach((el) => {
      const idx = +el.dataset.idx;
      if (correctAns.indexOf(idx) >= 0) el.classList.add("correct");
      if (quizSelected.indexOf(idx) >= 0 && correctAns.indexOf(idx) < 0) el.classList.add("wrong");
    });
    fb.className = "quiz-feedback " + (isCorrect ? "ok" : "no");
    fb.textContent = (isCorrect ? "Correct! ✓ " : "Not quite — keep going! ✗ ") + q.explain;
    quizAnswers.push({ q: q, selected: quizSelected.slice(), correct: isCorrect });
    $("#btn-submit-q").classList.add("hidden");
    $("#btn-next-q").classList.remove("hidden");
    $("#btn-next-q").textContent = quizIndex + 1 >= quizList.length ? "See Results →" : "Next Question →";
  });

  $("#btn-next-q").addEventListener("click", () => {
    if (quizIndex + 1 >= quizList.length) {
      showResults();
    } else {
      quizIndex++;
      renderQuestion();
      window.scrollTo(0, 0);
    }
  });

  function showResults() {
    showQuizPanel("results");
    $("#quiz-bar").style.width = "100%";
    const total = quizAnswers.length;
    const right = quizAnswers.filter((a) => a.correct).length;
    const pct = Math.round((right / total) * 100);
    $("#results-score").textContent = right + " / " + total + " (" + pct + "%)";

    let emoji = "🌟", title = "Amazing!", msg = "You're ready for that test!";
    if (pct < 60) {
      emoji = "💪"; title = "Keep practicing!";
      msg = "Review the missed questions below, then try again. You've got this, Thomas!";
    } else if (pct < 80) {
      emoji = "👍"; title = "Nice work!";
      msg = "Almost there. Look over the ones you missed and try again.";
    } else if (pct < 100) {
      emoji = "🎉"; title = "Great job!";
      msg = "You really know this stuff. Check the few you missed.";
    } else {
      emoji = "🏆"; title = "Perfect score!"; msg = "Every single one right. Awesome, Thomas!";
    }
    $("#results-emoji").textContent = emoji;
    $("#results-title").textContent = title;
    $("#results-msg").textContent = msg;

    const review = $("#results-review");
    review.innerHTML = "";
    const wrong = quizAnswers.filter((a) => !a.correct);
    if (!wrong.length) {
      review.innerHTML = '<div class="perfect">No missed questions — nothing to review! ✓</div>';
    } else {
      const h = document.createElement("h3");
      h.className = "review-title";
      h.textContent = "Review: " + wrong.length + " missed question" + (wrong.length === 1 ? "" : "s");
      review.appendChild(h);
      wrong.forEach((a) => {
        const q = a.q;
        const yours = a.typed ? a.typed.join("; ") : a.selected.map((i) => q.choices[i]).join("; ");
        const correct = isTyped(q) ? q.answerText : answerList(q).map((i) => q.choices[i]).join("; ");
        const div = document.createElement("div");
        div.className = "review-item";
        div.innerHTML = "<h4>" + escapeHtml(q.q) + "</h4>" +
          '<p class="your-ans">Your answer: ' + escapeHtml(yours) + "</p>" +
          '<p class="correct-ans">Correct answer: ' + escapeHtml(correct) + "</p>" +
          '<p class="explain">' + escapeHtml(q.explain) + "</p>";
        review.appendChild(div);
      });
    }
    window.scrollTo(0, 0);
  }

  $("#btn-retry").addEventListener("click", () => startQuiz(quizDef));
  $("#btn-quiz-menu").addEventListener("click", () => showQuizPanel("start"));
  $("#btn-quiz-home").addEventListener("click", () => showView("home"));

  // ——— Boot ———
  document.title = CFG.title;
  if (LS && LS.getItem(CFG.gateKey) === "1") unlock();
})();
