/*
 * mapquiz.js — the Continents & Oceans map quiz.
 *   Mode 1 "Match names": drag names onto numbered spots on a world map (or tap a name, then tap a spot).
 *   Mode 2 "What is this?": one continent/ocean is highlighted; pick its name.
 * Reads subject.mapQuiz (see continents.js) and window.WORLD_MAP (map-data.js).
 */
(function () {
  "use strict";
  var MAP = window.WORLD_MAP;
  var $ = function (sel) { return document.querySelector(sel); };

  var places = [];
  var byName = {};
  var mode = "match";

  // ——— helpers ———
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function shortName(n) {
    return ({ "North America": "N. America", "South America": "S. America", "Australia/Oceania": "Oceania" })[n] || String(n).replace(" Ocean", "");
  }
  function tag(n, extra) {
    return '<span class="geo-tag' + (extra || "") + '"><span class="full">' + esc(disp(n)) + '</span><span class="short">' + esc(shortName(n)) + "</span></span>";
  }
  function disp(n) { return String(n).replace("/", " / "); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function svgBase(cls) {
    var h = '<svg class="geo-svg ' + (cls || "") + '" viewBox="0 0 ' + MAP.width + " " + MAP.height + '" role="img" aria-label="World map">' +
      '<rect width="' + MAP.width + '" height="' + MAP.height + '" fill="#bfe3f5"/>' +
      '<line x1="' + MAP.line60[0] + '" y1="' + MAP.line60[1] + '" x2="' + MAP.line60[2] + '" y2="' + MAP.line60[3] + '" stroke="#fff" stroke-width="1.5" stroke-dasharray="6 5"/>';
    MAP.continents.forEach(function (c) {
      h += '<path class="geo-land" data-name="' + esc(c.name) + '" d="' + c.d + '" fill="' + c.color + '" stroke="#3b4a5a" stroke-width="0.6" stroke-linejoin="round"/>';
    });
    h += '<text class="geo-lbl-line" x="' + (MAP.line60[0] + 8) + '" y="' + (MAP.line60[1] - 5) + '">60°S</text></svg>';
    return h;
  }
  function pos(name) {
    var m = MAP.markers[name];
    return "left:" + (m[0] / MAP.width * 100).toFixed(3) + "%;top:" + (m[1] / MAP.height * 100).toFixed(3) + "%";
  }
  function scoreWords(pct) {
    if (pct === 100) return ["🏆", "Perfect score!", "Every single one right. Awesome, Thomas!"];
    if (pct >= 80) return ["🎉", "Great job!", "You really know your map. Check the few you missed."];
    if (pct >= 60) return ["👍", "Nice work!", "Almost there. Look over the ones you missed and try again."];
    return ["💪", "Keep practicing!", "Check the answers below, then try again. You've got this, Thomas!"];
  }

  // =========================================================
  //  Mode 1 — match names to spots
  // =========================================================
  var M = null; // match state

  function buildMatch() {
    var root = $("#geo-match");
    root.innerHTML =
      '<p class="geo-help">Drag each name onto a numbered spot on the map. On an iPad or phone you can also <strong>tap a name, then tap a spot</strong>. Tap a placed name to pick it back up.</p>' +
      '<div class="geo-status"><span id="geo-count">0 / ' + places.length + ' placed</span></div>' +
      '<div class="geo-map-wrap" id="geo-map-a">' + svgBase() + '<div class="geo-spots" id="geo-spots"></div></div>' +
      '<div class="geo-bank" id="geo-bank" aria-label="Names to place"></div>' +
      '<button id="geo-check" class="btn btn-primary btn-block" type="button">Check Answers</button>' +
      '<div class="geo-actions" id="geo-actions">' +
      '<button id="geo-clear" class="btn btn-secondary" type="button">Clear all</button>' +
      '<button id="geo-shuffle" class="btn btn-secondary" type="button">🔀 Shuffle</button></div>' +
      '<div id="geo-result" class="geo-result hidden"></div>';
    $("#geo-check").addEventListener("click", checkMatch);
    $("#geo-clear").addEventListener("click", function () { M.placed = {}; M.selected = null; renderMatch(); });
    $("#geo-shuffle").addEventListener("click", newRound);
    newRound();
  }

  function newRound() {
    M = { order: shuffle(places.map(function (p) { return p.name; })), bank: shuffle(places.map(function (p) { return p.name; })),
          placed: {}, selected: null, checked: false };
    M.num = {};
    M.order.forEach(function (n, i) { M.num[n] = i + 1; });
    $("#geo-result").classList.add("hidden");
    $(".geo-status").classList.remove("scored");
    $("#geo-check").classList.remove("hidden");
    $("#geo-actions").classList.remove("hidden");
    renderMatch();
  }

  function unplacedNames() {
    var used = {};
    Object.keys(M.placed).forEach(function (k) { used[M.placed[k]] = true; });
    return M.bank.filter(function (n) { return !used[n]; });
  }

  function renderMatch() {
    var spots = $("#geo-spots");
    spots.innerHTML = "";
    places.slice().sort(function (a, b) { return M.num[a.name] - M.num[b.name]; }).forEach(function (p) {
      var key = p.name;
      var m = MAP.markers[key];
      var name = M.placed[key];
      var b = document.createElement("button");
      b.type = "button";
      b.className = "geo-spot" + (name ? " filled" : "") + (m[1] / MAP.height > 0.8 ? " label-up" : "");
      b.dataset.key = key;
      b.setAttribute("style", pos(key));
      var cls = "";
      if (M.checked) cls = M.result[key] ? " ok" : " bad";
      b.className += cls;
      b.setAttribute("aria-label", "Spot " + M.num[key] + (name ? ", holds " + disp(name) : ", empty"));
      b.innerHTML = '<span class="geo-dot">' + M.num[key] + "</span>" +
        (name ? tag(name) : "") +
        (M.checked && !M.result[key] ? tag(key, " fix") : "");
      if (M.checked && !M.result[key]) b.classList.add("show-fix");
      // taps/drags are handled with pointer events (mouse, pen, touch); "click" is only for keyboard (detail 0)
      b.addEventListener("click", function (e) { if (e.detail === 0) onSpotClick(key); });
      if (!M.checked) b.addEventListener("pointerdown", function (ev) { beginPress(ev, name, key, function () { onSpotClick(key); }); });
      spots.appendChild(b);
    });

    clampTags();
    var bank = $("#geo-bank");
    bank.innerHTML = "";
    var left = unplacedNames();
    left.forEach(function (n) {
      var c = document.createElement("button");
      c.type = "button";
      c.className = "geo-chip" + (M.selected === n ? " selected" : "");
      c.textContent = disp(n);
      c.addEventListener("click", function (e) { if (e.detail === 0) onChipClick(n); });
      c.addEventListener("pointerdown", function (ev) { beginPress(ev, n, null, function () { onChipClick(n); }); });
      bank.appendChild(c);
    });
    if (!left.length && !M.checked) {
      bank.innerHTML = '<p class="geo-bank-done">All names placed! Press <strong>Check Answers</strong> when you are ready.</p>';
    }
    bank.classList.toggle("hidden", M.checked);
    $("#geo-count").textContent = (places.length - left.length) + " / " + places.length + " placed";
    $("#geo-check").textContent = left.length ? "Check Answers (" + left.length + " not placed)" : "Check Answers";
  }

  // keep name tags from running off the left/right edge of the map
  function clampTags() {
    var wrap = $("#geo-map-a");
    var wr = wrap.getBoundingClientRect();
    wrap.querySelectorAll(".geo-tag").forEach(function (t) {
      t.style.marginLeft = "0px";
      var r = t.getBoundingClientRect();
      if (!r.width) return;
      var shift = 0;
      if (r.left < wr.left + 2) shift = wr.left + 2 - r.left;
      else if (r.right > wr.right - 2) shift = wr.right - 2 - r.right;
      if (shift) t.style.marginLeft = shift + "px";
    });
  }
  window.addEventListener("resize", function () { if (M && $("#geo-map-a")) clampTags(); });

  function place(name, key, fromKey) {
    var prev = M.placed[key];
    if (fromKey) delete M.placed[fromKey];
    M.placed[key] = name;
    if (prev && fromKey) M.placed[fromKey] = prev; // swap when moving between spots
    M.selected = null;
    renderMatch();
  }

  function onChipClick(name) {
    if (M.checked) return;
    M.selected = M.selected === name ? null : name;
    renderMatch();
    // keep keyboard focus on the chip row
  }
  function onSpotClick(key) {
    if (M.checked) return;
    var here = M.placed[key];
    if (M.selected) {
      place(M.selected, key, null);        // old name (if any) goes back to the bank
    } else if (here) {
      delete M.placed[key];                // pick it back up
      M.selected = here;
      renderMatch();
    }
  }

  // ——— drag (pointer events: mouse, pen and touch) ———
  function spotCenters() {
    return Array.prototype.map.call(document.querySelectorAll("#geo-spots .geo-spot"), function (el) {
      var r = el.querySelector(".geo-dot").getBoundingClientRect();
      return { key: el.dataset.key, el: el, x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
  }
  function nearestSpot(x, y) {
    var best = null, bd = 44;
    spotCenters().forEach(function (s) {
      var d = Math.hypot(s.x - x, s.y - y);
      if (d < bd) { bd = d; best = s; }
    });
    return best;
  }
  function beginPress(ev, name, fromKey, onTap) {
    if (M.checked || (ev.button && ev.button > 0)) return;
    var src = ev.currentTarget;
    var sx = ev.clientX, sy = ev.clientY, ghost = null, dragging = false, pid = ev.pointerId;
    try { src.setPointerCapture(pid); } catch (e) { /* ignore */ }

    function over(x, y) {
      var hit = nearestSpot(x, y);
      document.querySelectorAll("#geo-spots .geo-spot.hover").forEach(function (e) { e.classList.remove("hover"); });
      if (hit) hit.el.classList.add("hover");
      return hit;
    }
    function move(e) {
      if (e.pointerId !== pid) return;
      if (name && !dragging && Math.hypot(e.clientX - sx, e.clientY - sy) > 7) {
        dragging = true;
        ghost = document.createElement("div");
        ghost.className = "geo-ghost";
        ghost.textContent = disp(name);
        document.body.appendChild(ghost);
        src.classList.add("drag-src");
      }
      if (dragging) {
        ghost.style.left = e.clientX + "px";
        ghost.style.top = e.clientY + "px";
        over(e.clientX, e.clientY);
        e.preventDefault();
      }
    }
    function end(e) {
      if (e.pointerId !== pid) return;
      src.removeEventListener("pointermove", move);
      src.removeEventListener("pointerup", end);
      src.removeEventListener("pointercancel", end);
      try { src.releasePointerCapture(pid); } catch (er) { /* ignore */ }
      if (!dragging) { // a plain tap (finger/pointer stayed put)
        if (e.type === "pointerup" && Math.hypot(e.clientX - sx, e.clientY - sy) < 12) onTap();
        return;
      }
      var hit = e.type === "pointercancel" ? null : over(e.clientX, e.clientY);
      document.querySelectorAll("#geo-spots .geo-spot.hover").forEach(function (x) { x.classList.remove("hover"); });
      if (ghost) ghost.remove();
      src.classList.remove("drag-src");
      if (hit) place(name, hit.key, fromKey);
      else if (fromKey) { delete M.placed[fromKey]; M.selected = null; renderMatch(); }
      else renderMatch();
    }
    src.addEventListener("pointermove", move);
    src.addEventListener("pointerup", end);
    src.addEventListener("pointercancel", end);
  }

  function checkMatch() {
    if (M.checked) return;
    M.result = {};
    var right = 0;
    places.forEach(function (p) {
      var ok = M.placed[p.name] === p.name;
      M.result[p.name] = ok;
      if (ok) right++;
    });
    M.checked = true;
    M.selected = null;
    renderMatch();
    var total = places.length;
    var pct = Math.round(right / total * 100);
    var w = scoreWords(pct);
    var rows = places.slice().sort(function (a, b) { return M.num[a.name] - M.num[b.name]; }).map(function (p) {
      var ok = M.result[p.name], got = M.placed[p.name];
      return '<div class="geo-row ' + (ok ? "ok" : "bad") + '"><span class="geo-n">' + M.num[p.name] + "</span><span class=\"geo-row-text\">" +
        (ok ? "<strong>" + esc(disp(p.name)) + "</strong> ✓ Correct"
            : "<strong>It's " + esc(disp(p.name)) + "</strong> ✗ " + (got ? "You put <s>" + esc(disp(got)) + "</s>" : "You left it blank") +
              '<span class="geo-fact">' + esc(p.fact) + "</span>") +
        "</span></div>";
    }).join("");
    var missed = total - right;
    var res = $("#geo-result");
    res.innerHTML =
      '<div class="results-hero"><span class="mode-emoji big">' + w[0] + "</span><h2>" + w[1] + '</h2><p class="results-score">' + right + " / " + total + " (" + pct + "%)</p><p class=\"results-msg\">" + w[2] + "</p></div>" +
      '<h3 class="review-title">Right and wrong, spot by spot</h3><div class="geo-rows">' + rows + "</div>" +
      (missed ? '<button id="geo-retry-missed" class="btn btn-primary btn-block" type="button">Retry the ' + missed + " I missed</button>" : "") +
      '<button id="geo-again" class="btn btn-secondary btn-block" type="button">Start over (same numbers)</button>' +
      '<button id="geo-reshuffle" class="btn btn-secondary btn-block" type="button">🔀 Shuffle numbers &amp; start over</button>';
    res.classList.remove("hidden");
    $("#geo-check").classList.add("hidden");
    $("#geo-actions").classList.add("hidden");
    var rm = $("#geo-retry-missed");
    if (rm) rm.addEventListener("click", function () {
      places.forEach(function (p) { if (!M.result[p.name]) delete M.placed[p.name]; });
      // keep only correct placements
      Object.keys(M.placed).forEach(function (k) { if (M.placed[k] !== k) delete M.placed[k]; });
      M.checked = false; M.result = null;
      $(".geo-status").classList.remove("scored");
      res.classList.add("hidden");
      $("#geo-check").classList.remove("hidden");
      $("#geo-actions").classList.remove("hidden");
      renderMatch();
      window.scrollTo(0, 0);
    });
    $("#geo-again").addEventListener("click", function () { M.placed = {}; M.checked = false; M.result = null; M.selected = null; M.bank = shuffle(M.bank);
      $(".geo-status").classList.remove("scored");
      res.classList.add("hidden"); $("#geo-check").classList.remove("hidden"); $("#geo-actions").classList.remove("hidden"); renderMatch(); window.scrollTo(0, 0); });
    $("#geo-reshuffle").addEventListener("click", function () { newRound(); window.scrollTo(0, 0); });
    var st = $("#geo-count");
    st.textContent = "Score: " + right + " / " + total + " (" + pct + "%)" + (missed ? " · " + missed + " to fix" : " · all correct! 🏆");
    st.parentNode.classList.add("scored");
    window.scrollTo(0, 0);
  }

  // =========================================================
  //  Mode 2 — "What is this?" (one place highlighted)
  // =========================================================
  var N = null;

  function buildName() {
    var root = $("#geo-name");
    root.innerHTML =
      '<div id="geo-n-play">' +
      '<div class="quiz-progress-bar"><div id="geo-n-bar" class="quiz-bar-fill"></div></div>' +
      '<p id="geo-n-num" class="progress-label"></p>' +
      '<div class="geo-map-wrap" id="geo-map-b">' + svgBase() + '<div class="geo-spots" id="geo-n-ring"></div></div>' +
      '<div id="geo-n-q" class="quiz-q"></div>' +
      '<div id="geo-n-choices" class="quiz-choices"></div>' +
      '<p id="geo-n-fb" class="quiz-feedback hidden"></p>' +
      '<button id="geo-n-check" class="btn btn-primary btn-block" type="button">Check Answer</button>' +
      '<button id="geo-n-next" class="btn btn-teal btn-block hidden" type="button">Next →</button>' +
      "</div>" +
      '<div id="geo-n-results" class="hidden"></div>';
    $("#geo-n-check").addEventListener("click", checkName);
    $("#geo-n-next").addEventListener("click", nextName);
    startName();
  }

  function startName() {
    N = { qs: shuffle(places).map(function (p) {
        var others = shuffle(places.filter(function (o) { return o.kind === p.kind && o.name !== p.name; })).slice(0, 3);
        return { p: p, choices: shuffle(others.concat([p])).map(function (o) { return o.name; }) };
      }), i: 0, sel: null, locked: false, answers: [] };
    $("#geo-n-play").classList.remove("hidden");
    $("#geo-n-results").classList.add("hidden");
    renderName();
  }

  function renderName() {
    var q = N.qs[N.i], p = q.p;
    N.sel = null; N.locked = false;
    $("#geo-n-bar").style.width = (N.i / N.qs.length * 100) + "%";
    $("#geo-n-num").textContent = "Question " + (N.i + 1) + " of " + N.qs.length;
    var svg = $("#geo-map-b");
    svg.querySelectorAll(".geo-land").forEach(function (el) {
      var hl = p.kind === "continent" && el.dataset.name === p.name;
      el.classList.toggle("geo-hl", hl);
      el.classList.toggle("geo-dim", p.kind === "continent" && !hl);
    });
    svg.classList.toggle("ocean-q", p.kind === "ocean");
    var ring = $("#geo-n-ring");
    ring.innerHTML = p.kind === "ocean" ? '<div class="geo-ring" style="' + pos(p.name) + '"><span>?</span></div>' : "";
    $("#geo-n-q").innerHTML = '<span class="q-type">' + (p.kind === "continent" ? "Highlighted continent" : "Marked ocean") + "</span><br>" +
      (p.kind === "continent" ? "Which continent is lit up on the map?" : "Which ocean is marked with the ? on the map?");
    var box = $("#geo-n-choices");
    box.innerHTML = "";
    q.choices.forEach(function (c, idx) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "choice";
      b.dataset.name = c;
      b.innerHTML = '<span class="marker">' + String.fromCharCode(65 + idx) + "</span><span>" + esc(disp(c)) + "</span>";
      b.addEventListener("click", function () {
        if (N.locked) return;
        N.sel = c;
        box.querySelectorAll(".choice").forEach(function (e) { e.classList.remove("selected"); });
        b.classList.add("selected");
      });
      box.appendChild(b);
    });
    $("#geo-n-fb").classList.add("hidden");
    $("#geo-n-check").classList.remove("hidden");
    $("#geo-n-next").classList.add("hidden");
  }

  function checkName() {
    if (N.locked) return;
    var fb = $("#geo-n-fb");
    var q = N.qs[N.i], p = q.p;
    if (!N.sel) { fb.textContent = "Pick an answer first — you've got this!"; fb.className = "quiz-feedback no"; return; }
    N.locked = true;
    var ok = N.sel === p.name;
    $("#geo-n-choices").querySelectorAll(".choice").forEach(function (el) {
      if (el.dataset.name === p.name) el.classList.add("correct");
      else if (el.dataset.name === N.sel) el.classList.add("wrong");
    });
    fb.className = "quiz-feedback " + (ok ? "ok" : "no");
    fb.innerHTML = (ok ? "<strong>Correct! ✓</strong> " : "<strong>Not quite ✗</strong> ") + '<span class="fb-answer">Answer: ' + esc(disp(p.name)) + "</span> " + esc(p.fact);
    N.answers.push({ p: p, got: N.sel, ok: ok });
    $("#geo-n-check").classList.add("hidden");
    var nx = $("#geo-n-next");
    nx.classList.remove("hidden");
    nx.textContent = N.i + 1 >= N.qs.length ? "See Results →" : "Next →";
  }

  function nextName() {
    if (N.i + 1 >= N.qs.length) { resultsName(); return; }
    N.i++;
    renderName();
  }

  function resultsName() {
    $("#geo-n-play").classList.add("hidden");
    var total = N.answers.length, right = N.answers.filter(function (a) { return a.ok; }).length;
    var pct = Math.round(right / total * 100), w = scoreWords(pct);
    var wrong = N.answers.filter(function (a) { return !a.ok; });
    var review = wrong.length
      ? '<h3 class="review-title">Review: ' + wrong.length + " missed</h3>" + wrong.map(function (a) {
          return '<div class="review-item"><h4>' + (a.p.kind === "continent" ? "Highlighted continent" : "Marked ocean") + '</h4><p class="your-ans">Your answer: ' + esc(disp(a.got)) +
            '</p><p class="correct-ans">Correct answer: ' + esc(disp(a.p.name)) + '</p><p class="explain">' + esc(a.p.fact) + "</p></div>";
        }).join("")
      : '<div class="perfect">No missed questions — nothing to review! ✓</div>';
    var res = $("#geo-n-results");
    res.innerHTML = '<div class="results-hero"><span class="mode-emoji big">' + w[0] + "</span><h2>" + w[1] + '</h2><p class="results-score">' + right + " / " + total + " (" + pct + '%)</p><p class="results-msg">' + w[2] + "</p></div>" +
      '<div class="results-review">' + review + "</div>" +
      '<button id="geo-n-retry" class="btn btn-primary btn-block" type="button">Try Again (shuffled)</button>' +
      '<button id="geo-n-tomatch" class="btn btn-secondary btn-block" type="button">🗺️ Switch to Match names</button>';
    res.classList.remove("hidden");
    $("#geo-n-retry").addEventListener("click", function () { startName(); window.scrollTo(0, 0); });
    $("#geo-n-tomatch").addEventListener("click", function () { setMode("match"); window.scrollTo(0, 0); });
    window.scrollTo(0, 0);
  }

  // =========================================================
  //  Panel plumbing
  // =========================================================
  function setMode(m) {
    mode = m;
    document.querySelectorAll("#quiz-map .geo-tab").forEach(function (t) {
      var on = t.dataset.gmode === m;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    $("#geo-match").classList.toggle("hidden", m !== "match");
    $("#geo-name").classList.toggle("hidden", m !== "name");
    if (m === "match") buildMatch(); else buildName();
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("#quiz-map .geo-tab");
    if (t) setMode(t.dataset.gmode);
  });

  window.MapQuiz = {
    open: function (subject, m) {
      var cfg = subject && subject.mapQuiz;
      if (!cfg || !MAP) return false;
      places = cfg.places;
      byName = {};
      places.forEach(function (p) { byName[p.name] = p; });
      $("#geo-title").textContent = cfg.title;
      setMode(m || "match");
      return true;
    }
  };
})();
