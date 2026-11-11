/*
 * continents.js — "Continents & Oceans" content for the Science subject.
 * Loaded after data.js and map-data.js. It ADDS to the Science subject (a lesson,
 * a study-guide section, flashcards and the map quiz settings); it does not change
 * any existing content in data.js.
 */
(function () {
  "use strict";
  var sci = (window.SUBJECTS || []).filter(function (s) { return s.id === "science"; })[0];
  var MAP = window.WORLD_MAP;
  if (!sci || !MAP) return;

  // ——— The 12 places on the map quiz ———
  var PLACES = [
    { name: "North America", kind: "continent", fact: "North America has Canada, the United States and Mexico, plus Central America and the Caribbean. Greenland belongs to it too." },
    { name: "South America", kind: "continent", fact: "South America has the Amazon River and rainforest and the Andes, the longest mountain range on land. Brazil is its biggest country." },
    { name: "Europe", kind: "continent", fact: "Europe is the second-smallest continent. It is joined to Asia (together they are called Eurasia), and the Ural Mountains are the usual dividing line." },
    { name: "Africa", kind: "continent", fact: "Africa is the second-largest continent. It has the Sahara Desert and the Nile River, and the equator runs through the middle of it." },
    { name: "Asia", kind: "continent", fact: "Asia is the biggest continent and has more than half of all the people on Earth. Mount Everest is here." },
    { name: "Australia/Oceania", kind: "continent", fact: "Australia/Oceania is the smallest continent. It is Australia, New Zealand, Papua New Guinea and thousands of Pacific islands." },
    { name: "Antarctica", kind: "continent", fact: "Antarctica is around the South Pole. It is the coldest, windiest, driest continent, covered in ice, and has no permanent residents, only scientists." },
    { name: "Pacific Ocean", kind: "ocean", fact: "The Pacific is the biggest and deepest ocean, covering about one third of Earth. The Ring of Fire circles it." },
    { name: "Atlantic Ocean", kind: "ocean", fact: "The Atlantic is the second-largest ocean. It lies between the Americas on one side and Europe and Africa on the other." },
    { name: "Indian Ocean", kind: "ocean", fact: "The Indian Ocean is the third-largest and the warmest ocean. It is bordered by Africa, Asia and Australia." },
    { name: "Arctic Ocean", kind: "ocean", fact: "The Arctic is the smallest and shallowest ocean. It surrounds the North Pole and is covered with sea ice for much of the year." },
    { name: "Southern Ocean", kind: "ocean", fact: "The Southern Ocean surrounds Antarctica, south of 60°S (the dashed line on the map). It was officially named the 5th ocean in 2021." }
  ];

  sci.mapQuiz = { title: "Continents & Oceans", places: PLACES };
  sci.tagline = sci.tagline + " · plus a Continents & Oceans map quiz";
  sci.lessons.push({ id: "geo", name: "Continents & Oceans" });

  // ——— Labeled study map (built from the same map data as the quiz) ———
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function labeledMap() {
    var out = ['<svg class="geo-svg geo-study-map" viewBox="0 0 ' + MAP.width + " " + MAP.height + '" role="img" aria-label="World map with the continents and oceans labeled">',
      '<rect width="' + MAP.width + '" height="' + MAP.height + '" fill="#bfe3f5"/>',
      '<line x1="' + MAP.line60[0] + '" y1="' + MAP.line60[1] + '" x2="' + MAP.line60[2] + '" y2="' + MAP.line60[3] + '" stroke="#fff" stroke-width="1.5" stroke-dasharray="6 5"/>'];
    MAP.continents.forEach(function (c) {
      out.push('<path d="' + c.d + '" fill="' + c.color + '" stroke="#3b4a5a" stroke-width="0.6" stroke-linejoin="round"/>');
    });
    PLACES.forEach(function (p) {
      var m = MAP.markers[p.name];
      var lines = p.name.replace("/", "/\n").split(/\s(?=Ocean)|\n/);
      var isOcean = p.kind === "ocean";
      var t = '<text class="' + (isOcean ? "geo-lbl-ocean" : "geo-lbl-cont") + '" x="' + m[0] + '" y="' + m[1] + '" text-anchor="middle">';
      lines.forEach(function (ln, i) {
        t += '<tspan x="' + m[0] + '" dy="' + (i === 0 ? (lines.length > 1 ? "-0.15em" : "0.35em") : "1.15em") + '">' + esc(ln) + "</tspan>";
      });
      out.push(t + "</text>");
    });
    out.push('<text class="geo-lbl-line" x="' + (MAP.line60[0] + 8) + '" y="' + (MAP.line60[1] - 5) + '">60°S</text>');
    out.push("</svg>");
    return out.join("");
  }

  function listRows(kind) {
    return PLACES.filter(function (p) { return p.kind === kind; }).map(function (p) {
      return '<div class="term-row"><strong>' + esc(p.name.replace("/", " / ")) + "</strong> — " + esc(p.fact) + "</div>";
    }).join("");
  }

  sci.notes.push({
    id: "geo",
    short: "Continents & Oceans",
    title: "Continents & Oceans",
    html:
      "<h2>Continents &amp; Oceans</h2>" +
      "<ul>" +
      "<li>There are <strong>7 continents</strong>: North America, South America, Europe, Africa, Asia, Australia/Oceania and Antarctica.</li>" +
      "<li>There are <strong>5 oceans</strong>: Pacific, Atlantic, Indian, Arctic and Southern.</li>" +
      "<li>About <strong>71%</strong> of Earth's surface is water, and the oceans are all connected as one big world ocean.</li>" +
      "</ul>" +
      labeledMap() +
      '<p class="geo-note-cap">Study map. The dashed line is 60°S, where the Southern Ocean begins.</p>' +
      '<div class="key-terms"><h3>The 7 continents</h3>' + listRows("continent") + "</div>" +
      '<div class="key-terms"><h3>The 5 oceans</h3>' + listRows("ocean") + "</div>" +
      "<h3>Size order (biggest to smallest)</h3>" +
      '<div class="sphere-grid">' +
      '<div class="sphere-pill"><strong>Continents</strong> 1. Asia · 2. Africa · 3. North America · 4. South America · 5. Antarctica · 6. Europe · 7. Australia/Oceania</div>' +
      '<div class="sphere-pill"><strong>Oceans</strong> 1. Pacific · 2. Atlantic · 3. Indian · 4. Southern · 5. Arctic</div>' +
      "</div>" +
      '<div class="callout"><strong>Memory tips:</strong>' +
      "<p><strong>Ocean size order:</strong> <em>P</em>izza <em>A</em>nd <em>I</em>ce cream <em>S</em>ound <em>A</em>wesome = Pacific, Atlantic, Indian, Southern, Arctic.</p>" +
      "<p><strong>Arctic vs. Antarctic:</strong> the <em>Arctic</em> is an ocean at the top of the world (North Pole). <em>Antarctica</em> is a continent at the bottom (South Pole), and the Southern Ocean wraps around it.</p>" +
      "<p><strong>Australia vs. Oceania:</strong> Australia is both a country and the main landmass. Oceania also counts New Zealand and the Pacific islands.</p>" +
      "<p><strong>Pacific:</strong> biggest of all, with the Ring of Fire around it. That ties back to your volcano and earthquake lessons!</p>" +
      "</div>" +
      '<p class="geo-note-cta">Ready to practice? Go to <strong>Quiz → Continents &amp; Oceans map quiz</strong> (or tap the 🗺️ Map Quiz card on the Science home screen).</p>'
  });

  // ——— Flashcards ———
  var cards = PLACES.map(function (p) { return { term: p.name.replace("/", " / "), def: p.fact, lesson: "geo" }; });
  [
    ["How many continents are there?", "7: North America, South America, Europe, Africa, Asia, Australia/Oceania and Antarctica."],
    ["How many oceans are there?", "5: Pacific, Atlantic, Indian, Arctic and Southern."],
    ["Which is the biggest continent? The smallest?", "Biggest: Asia. Smallest: Australia/Oceania."],
    ["Which is the biggest ocean? The smallest?", "Biggest: Pacific. Smallest: Arctic."],
    ["Which ocean surrounds Antarctica?", "The Southern Ocean (south of 60°S)."],
    ["Which continents does the equator cross?", "Africa, South America and a bit of Asia (Indonesia). It also crosses the Pacific, Atlantic and Indian oceans."]
  ].forEach(function (c) {
    cards.push({ term: c[0], def: c[1], lesson: "geo", front: "Question", back: "Answer" });
  });
  cards.forEach(function (c) { sci.flashcards.push(c); });
})();
