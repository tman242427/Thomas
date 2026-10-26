/*
 * data.js — ALL of the content for Thomas's Science Lab lives in this file.
 *
 * To add a new SUBJECT (e.g. Math, Social Studies), copy the "science" object
 * inside SUBJECTS and change the fields. When there are 2+ subjects the home
 * screen shows a subject picker automatically.
 *
 * Each subject has:
 *   lessons    – [{ id, name }]           used for "quiz by lesson" and tagging
 *   notes      – [{ id, short, title, html }]   study guide sections (HTML allowed)
 *   flashcards – [{ term, def, lesson }]  lesson = a lessons[].id
 *   tests      – [{ id, name, desc, questions: [...] }]  fixed practice tests
 *
 * Each question: { id, lesson, q, choices: [..], answer: <index>, explain }
 *   - "id" must be unique within the subject. If the same id appears in several
 *     tests it is treated as the same question (used to build Random / By-lesson
 *     quizzes without repeats).
 *   - Random and by-lesson quizzes shuffle the answer order automatically.
 *
 * Password: edit PASSWORD below. (It is only a light gate — anyone who views the
 * page source can see it. Don't put private information in this app.)
 */
window.APP_CONFIG = {
  password: "mazie6",
  gateKey: "thomas_lab_unlocked_v1",
  title: "Thomas's Science Lab",
  subtitle: "6th Grade Test Prep",
  greeting: "Hey Thomas!",
  icon: "🔬"
};

window.SUBJECTS = [
  {
    id: "science",
    name: "Science",
    emoji: "🔬",
    tagline: "Mountains, Volcanoes & Earthquakes (Lessons 3–5)",
    intro: "Pick a mode to get ready for your Science test. You've got this! 💪",
    lessons: [
      { id: 3, name: "L3 · Building Mountains" },
      { id: 4, name: "L4 · Volcanoes" },
      { id: 5, name: "L5 · Earthquakes (Pt. 1)" }
    ],
    notes: [
      {
        "id": "l3",
        "short": "L3 Mountains",
        "title": "Lesson 3: Building Mountains",
        "html": "\n        <h2>Lesson 3: Building Mountains</h2>\n        <ul>\n          <li><strong>Plate motion</strong> at plate boundaries applies the greatest force on rock.</li>\n          <li>Mountains rise more than about <strong>2,000 feet</strong>. They are found on land <em>and</em> in the oceans.</li>\n          <li>A group of mountains is a <strong>mountain range</strong>. The <strong>Andes</strong> are the longest range on land and are still rising.</li>\n          <li>Most of Earth's largest mountains form where plates collide at <strong>convergent boundaries</strong>.</li>\n        </ul>\n        <h3>The 3 types of stress</h3>\n        <ul>\n          <li><strong>Tension</strong> — pulls rock apart <em>(stretching taffy)</em></li>\n          <li><strong>Compression</strong> — squeezes rock together <em>(squishing a sponge)</em></li>\n          <li><strong>Shear</strong> — pushes in opposite directions so rock slides past <em>(rubbing your palms)</em></li>\n        </ul>\n        <div class=\"callout\"><strong>Stress</strong> is a force acting on a surface. <strong>Strain</strong> is the change in a rock's shape caused by stress (it can be temporary or permanent). If strain <em>breaks</em> the rock, a <strong>fault</strong> forms.</div>\n        <h3>The 3 types of mountains</h3>\n        <div class=\"sphere-grid\">\n          <div class=\"sphere-pill\"><strong>Folded</strong> Two plates collide and squeeze and buckle the crust, like pushing a rug into folds. Force: <em>compression</em>.</div>\n          <div class=\"sphere-pill\"><strong>Fault-block</strong> Forces pull the crust apart and break it into blocks; the ground on the sides drops down. Force: <em>tension</em>.</div>\n          <div class=\"sphere-pill\"><strong>Volcanic</strong> Magma breaks through at the surface, erupts and cools. After many eruptions a mountain builds up.</div>\n        </div>\n        <div class=\"key-terms\">\n          <h3>Key terms</h3>\n          <div class=\"term-row\"><strong>Stress</strong> — A force acting on a surface</div>\n          <div class=\"term-row\"><strong>Tension / Compression / Shear</strong> — Pull apart / squeeze together / slide past</div>\n          <div class=\"term-row\"><strong>Strain</strong> — Change in a rock's shape caused by stress</div>\n          <div class=\"term-row\"><strong>Fault</strong> — A crack or break in the crust where rock moves</div>\n          <div class=\"term-row\"><strong>Convergent boundary</strong> — Plates collide (push together)</div>\n          <div class=\"term-row\"><strong>Divergent boundary</strong> — Plates move apart</div>\n        </div>\n "
      },
      {
        "id": "l4",
        "short": "L4 Volcanoes",
        "title": "Lesson 4: Volcanoes",
        "html": "\n        <h2>Lesson 4: Volcanoes</h2>\n        <p>A <strong>volcano</strong> is a vent in Earth's crust through which magma, rock fragments, ash, and gases escape.</p>\n        <ul>\n          <li>Active volcanoes are found on <strong>every continent except Australia</strong>.</li>\n          <li>Volcanoes commonly form along convergent and divergent boundaries. Some form over <strong>hotspots</strong> instead.</li>\n          <li>The <strong>Ring of Fire</strong> runs along the edge of the Pacific plate, so it surrounds the <strong>Pacific Ocean</strong>. Most volcanoes (Thomas's notes say 70%) and about <strong>90% of earthquakes</strong> happen there. Most of the potentially active volcanoes in the United States are part of it.</li>\n          <li>Volcanoes are classified by shape, size, style of eruption, and what the magma is made of.</li>\n        </ul>\n        <h3>Active, dormant, or extinct?</h3>\n        <ul>\n          <li><strong>Active</strong> — erupting or likely to erupt again (awake)</li>\n          <li><strong>Dormant</strong> — \"sleeping\"; not erupting now but could (like a dormitory)</li>\n          <li><strong>Extinct</strong> — not expected to ever erupt again (gone for good, like dinosaurs)</li>\n        </ul>\n        <div class=\"callout\">Mount St. Helens (Skamania County, Washington) is an <strong>active</strong> stratovolcano. <strong>Stratovolcano</strong> is another name for a <strong>composite volcano</strong>.</div>\n        <h3>The 3 basic kinds of volcanoes</h3>\n        <div class=\"sphere-grid\">\n          <div class=\"sphere-pill\"><strong>Shield</strong> Tall and wide with flat, gently sloping sides. Gentle, nonexplosive eruptions. Relatively safe.</div>\n          <div class=\"sphere-pill\"><strong>Composite</strong> Tall and steep, the classic volcano shape. Thick, sticky lava plus ash and rocks; explosive. Most likely to make a pyroclastic flow.</div>\n          <div class=\"sphere-pill\"><strong>Cinder cone</strong> Smallest and most common. Throws blobs of lava into the air that break into pieces. Smaller eruptions.</div>\n        </div>\n        <p><strong>Pyroclastic flow</strong> = a fast-moving cloud of hot ash, gas, and rock.</p>\n        <h3>Effects of volcanoes</h3>\n        <ul>\n          <li><strong>Positive (+):</strong> rock and ash break down into fertile soil; valuable minerals like gold and silver reach the surface; lava cools into new land and bigger shorelines.</li>\n          <li><strong>Negative (&ndash;):</strong> destruction and death; ash can block the sun and affect climate; ash causes breathing (respiratory) problems.</li>\n        </ul>\n        <h3>How scientists predict an eruption</h3>\n        <ul>\n          <li>Swarms of small earthquakes (magma moving up)</li>\n          <li>Gases escaping the mountain</li>\n          <li>Acid levels in nearby rivers and lakes</li>\n        </ul>\n        <div class=\"key-terms\">\n          <h3>Key terms</h3>\n          <div class=\"term-row\"><strong>Volcano</strong> — Vent where magma, rock pieces, ash, and gases escape</div>\n          <div class=\"term-row\"><strong>Magma / Lava</strong> — Melted rock inside Earth / once it reaches the surface</div>\n          <div class=\"term-row\"><strong>Hotspot</strong> — Very hot area under a plate where volcanoes form away from boundaries</div>\n          <div class=\"term-row\"><strong>Ring of Fire</strong> — Volcano and earthquake zone around the Pacific plate</div>\n          <div class=\"term-row\"><strong>Pyroclastic flow</strong> — Fast-moving cloud of hot ash, gas, and rock</div>\n        </div>\n "
      },
      {
        "id": "l5",
        "short": "L5 Earthquakes",
        "title": "Lesson 5 (Part 1): Earthquakes",
        "html": "\n        <h2>Lesson 5 (Part 1): Earthquakes</h2>\n        <ul>\n          <li>An <strong>earthquake</strong> happens when plates try to move past each other at a boundary but their edges get <strong>stuck</strong>. Stress (pressure and energy) builds up until they break free and release energy, making the ground shake.</li>\n          <li>Earthquakes happen at random times — thousands every day, but most are too weak to feel.</li>\n          <li>Most occur in oceans or near plate boundaries, especially around the <strong>Ring of Fire</strong>.</li>\n          <li><strong>Faults</strong> are cracks or breaks in the crust where plates meet and move.</li>\n          <li>Energy travels through Earth as <strong>seismic waves</strong>, moving outward in all directions from the starting point.</li>\n          <li><strong>Seismographs</strong> detect and record the shaking. The <strong>Richter scale</strong> was the first measuring tool; today scientists use the <strong>Moment Magnitude scale</strong> because it is more accurate.</li>\n        </ul>\n        <h3>Seismic waves</h3>\n        <div class=\"sphere-grid\">\n          <div class=\"sphere-pill\"><strong>P-wave (Primary)</strong> Fastest; detected first. Push-pull: rock vibrates back and forth in the same direction the wave travels. Least damage.</div>\n          <div class=\"sphere-pill\"><strong>S-wave (Secondary)</strong> Second to arrive. Rock moves up and down or side to side. More damage to structures.</div>\n          <div class=\"sphere-pill\"><strong>Surface wave</strong> Arrives after P and S. Travels along the surface, not inside Earth. Usually the most deaths and damage.</div>\n        </div>\n        <h3>Earthquake magnitude scale</h3>\n        <div class=\"practice-box\">\n          <ul>\n            <li><strong>1.0</strong> → Micro</li>\n            <li><strong>2.0–3.0</strong> → Minor</li>\n            <li><strong>4.0</strong> → Light</li>\n            <li><strong>5.0</strong> → Moderate</li>\n            <li><strong>6.0</strong> → Strong</li>\n            <li><strong>7.0</strong> → Major</li>\n            <li><strong>8.0</strong> → Great</li>\n          </ul>\n        </div>\n        <div class=\"callout\">Memory trick (low → high): <strong>\"My Mom Lets Me Stay Mostly Good\"</strong> = Micro, Minor, Light, Moderate, Strong, Major, Great.</div>\n        <div class=\"key-terms\">\n          <h3>Key terms</h3>\n          <div class=\"term-row\"><strong>Earthquake</strong> — Shaking when stuck plates break free and release energy</div>\n          <div class=\"term-row\"><strong>Seismic waves</strong> — Waves of energy from an earthquake</div>\n          <div class=\"term-row\"><strong>Seismograph</strong> — Machine that detects and records shaking</div>\n          <div class=\"term-row\"><strong>Magnitude</strong> — How strong an earthquake is</div>\n          <div class=\"term-row\"><strong>Moment Magnitude scale</strong> — Today's more accurate earthquake scale</div>\n        </div>\n "
      },
      {
        "id": "tips",
        "short": "Test Tips",
        "title": "Most Likely on the Test + Memory Tips",
        "html": "\n        <h2>Most Likely to Be on the Test</h2>\n        <ul>\n          <li>The 3 types of stress (tension, compression, shear) and what strain and a fault are</li>\n          <li>How folded, fault-block, and volcanic mountains form</li>\n          <li>The definition of a volcano; the Ring of Fire (Pacific, 90% of earthquakes); hotspots</li>\n          <li>Shield vs. composite vs. cinder cone volcanoes; what a pyroclastic flow is; active / dormant / extinct</li>\n          <li>Positive and negative effects of volcanoes; 3 ways scientists predict eruptions</li>\n          <li>What causes an earthquake; P-waves vs. S-waves vs. surface waves; seismographs; Richter vs. Moment Magnitude; the magnitude names</li>\n        </ul>\n        <h3>Memory tips</h3>\n        <div class=\"callout\">\n          <p><strong>Stress:</strong> Tension = <em>Tug apart</em> • Compression = <em>Crush together</em> • Shear = <em>Slide past</em>.</p>\n          <p><strong>Mountains:</strong> Folded = push a rug and it folds • Fault-block = pull a chocolate bar apart and it breaks into blocks • Volcanic = built by eruptions.</p>\n          <p><strong>Volcanoes:</strong> Shield = a warrior's shield lying flat (wide, gentle) • Composite = \"composed\" of lava + ash + rock, BOOM! • Cinder cone = small cone of lava bits.</p>\n          <p><strong>Status:</strong> Active = awake • Dormant = sleeping (like a dormitory) • Extinct = gone for good, like dinosaurs.</p>\n          <p><strong>Waves:</strong> P = Primary = first, Push-pull • S = Second, Side-to-side / Shake • Surface = on the surface, worst damage.</p>\n          <p style=\"margin-bottom:0\"><strong>Magnitude:</strong> \"My Mom Lets Me Stay Mostly Good.\"</p>\n        </div>\n "
      }
    ],
    flashcards: [
      {
        "term": "Stress",
        "def": "A force acting on a surface.",
        "lesson": 3
      },
      {
        "term": "Tension",
        "def": "Stress that pulls rock apart. (Tug apart — like stretching taffy.)",
        "lesson": 3
      },
      {
        "term": "Compression",
        "def": "Stress that squeezes rock together. (Crush together — like squishing a sponge.)",
        "lesson": 3
      },
      {
        "term": "Shear",
        "def": "Stress that pushes rock in opposite directions so it slides past. (Slide past — like rubbing your palms.)",
        "lesson": 3
      },
      {
        "term": "Strain",
        "def": "A change in a rock's shape caused by stress. It can be temporary or permanent.",
        "lesson": 3
      },
      {
        "term": "Fault",
        "def": "A crack or break in the crust where rock (plates) moves. Forms when strain breaks rock.",
        "lesson": 3
      },
      {
        "term": "Mountain range",
        "def": "A group of mountains. The Andes are the longest range on land.",
        "lesson": 3
      },
      {
        "term": "Convergent boundary",
        "def": "Where plates collide (push together). Most of Earth's largest mountains form here.",
        "lesson": 3
      },
      {
        "term": "Divergent boundary",
        "def": "Where plates move apart.",
        "lesson": 3
      },
      {
        "term": "Folded mountain",
        "def": "Forms when two plates collide, squeezing and buckling the crust (like pushing a rug into folds). Force: compression.",
        "lesson": 3
      },
      {
        "term": "Fault-block mountain",
        "def": "Forms when forces pull the crust apart and break it into blocks; the ground on the sides drops down. Force: tension.",
        "lesson": 3
      },
      {
        "term": "Volcanic mountain",
        "def": "Forms when magma breaks through at the surface, erupts, and cools. Many eruptions build the mountain.",
        "lesson": 3
      },
      {
        "term": "Volcano",
        "def": "A vent in Earth's crust where magma, rock fragments, ash, and gases escape.",
        "lesson": 4
      },
      {
        "term": "Magma",
        "def": "Melted rock inside Earth. It's called lava once it reaches the surface.",
        "lesson": 4
      },
      {
        "term": "Hotspot",
        "def": "A very hot area under a plate where volcanoes can form away from plate boundaries.",
        "lesson": 4
      },
      {
        "term": "Ring of Fire",
        "def": "Volcano and earthquake zone around the edge of the Pacific plate (surrounds the Pacific Ocean). About 90% of earthquakes happen here.",
        "lesson": 4
      },
      {
        "term": "Active volcano",
        "def": "Erupting now or likely to erupt again. (Awake!)",
        "lesson": 4
      },
      {
        "term": "Dormant volcano",
        "def": "\"Sleeping\" — not erupting now, but could erupt again.",
        "lesson": 4
      },
      {
        "term": "Extinct volcano",
        "def": "Not expected to ever erupt again. (Gone for good, like dinosaurs.)",
        "lesson": 4
      },
      {
        "term": "Shield volcano",
        "def": "Tall and wide with flat, gently sloping sides. Gentle, nonexplosive eruptions — relatively safe.",
        "lesson": 4
      },
      {
        "term": "Composite volcano (stratovolcano)",
        "def": "Tall, steep, classic volcano shape. Thick, sticky lava plus ash and rocks make explosive eruptions. Most likely to make a pyroclastic flow.",
        "lesson": 4
      },
      {
        "term": "Cinder cone volcano",
        "def": "The smallest and most common kind. Throws blobs of lava into the air that break into pieces.",
        "lesson": 4
      },
      {
        "term": "Pyroclastic flow",
        "def": "A fast-moving cloud of hot ash, gas, and rock.",
        "lesson": 4
      },
      {
        "term": "Positive effects of volcanoes",
        "def": "Fertile soil from broken-down rock and ash; valuable minerals like gold and silver; new land and bigger shorelines from cooled lava.",
        "lesson": 4
      },
      {
        "term": "Negative effects of volcanoes",
        "def": "Destruction and death; ash can block the sun and affect climate; ash causes breathing (respiratory) problems.",
        "lesson": 4
      },
      {
        "term": "3 ways to predict an eruption",
        "def": "1) Swarms of small earthquakes (magma moving up). 2) Gases escaping the mountain. 3) Acid levels in nearby rivers and lakes.",
        "lesson": 4
      },
      {
        "term": "Earthquake",
        "def": "Shaking that happens when stuck plates break free and release energy.",
        "lesson": 5
      },
      {
        "term": "Seismic waves",
        "def": "Waves of energy from an earthquake that travel outward in all directions through Earth.",
        "lesson": 5
      },
      {
        "term": "P-wave (Primary)",
        "def": "Fastest wave, detected first. Push-pull motion in the same direction the wave travels. Least damage.",
        "lesson": 5
      },
      {
        "term": "S-wave (Secondary)",
        "def": "Second to arrive. Rock moves up and down or side to side. More damage to structures.",
        "lesson": 5
      },
      {
        "term": "Surface wave",
        "def": "Arrives after P and S. Travels along the surface (not inside Earth). Usually the most deaths and damage.",
        "lesson": 5
      },
      {
        "term": "Seismograph",
        "def": "A machine that detects and records earthquake shaking.",
        "lesson": 5
      },
      {
        "term": "Magnitude",
        "def": "How strong an earthquake is.",
        "lesson": 5
      },
      {
        "term": "Moment Magnitude scale",
        "def": "Today's more accurate earthquake scale. It replaced the Richter scale, the first measuring tool.",
        "lesson": 5
      },
      {
        "term": "Magnitude names (low → high)",
        "def": "Micro (1.0), Minor (2.0–3.0), Light (4.0), Moderate (5.0), Strong (6.0), Major (7.0), Great (8.0).",
        "lesson": 5
      }
    ],
    tests: [
      {
        "id": "a",
        "name": "Practice Test A",
        "desc": "25 questions · same as printed Test A",
        "questions": [
          {
            "id": "s_def",
            "lesson": 3,
            "q": "What is stress?",
            "choices": [
              "A crack in the crust where plates meet",
              "A vent where magma escapes",
              "A force acting on a surface",
              "A wave of energy that travels through Earth"
            ],
            "answer": 2,
            "explain": "Stress is the force acting on a surface."
          },
          {
            "id": "ten1",
            "lesson": 3,
            "q": "Which type of stress PULLS rock apart?",
            "choices": [
              "Tension",
              "Strain",
              "Shear",
              "Compression"
            ],
            "answer": 0,
            "explain": "Tension pulls apart."
          },
          {
            "id": "com1",
            "lesson": 3,
            "q": "Which type of stress SQUEEZES or pushes rock together?",
            "choices": [
              "Tension",
              "Strain",
              "Compression",
              "Shear"
            ],
            "answer": 2,
            "explain": "Compression squeezes/pushes together."
          },
          {
            "id": "she1",
            "lesson": 3,
            "q": "Which type of stress pushes rock in opposite directions so it slides past itself?",
            "choices": [
              "Strain",
              "Tension",
              "Shear",
              "Compression"
            ],
            "answer": 2,
            "explain": "Shear pushes in opposite directions, sliding past."
          },
          {
            "id": "flt1",
            "lesson": 3,
            "q": "If strain BREAKS a rock instead of just changing its shape, what is formed?",
            "choices": [
              "A fault",
              "A cinder cone",
              "A hotspot",
              "A seismograph"
            ],
            "answer": 0,
            "explain": "When strain breaks rock, a fault forms."
          },
          {
            "id": "fold2",
            "lesson": 3,
            "q": "Which type of mountain forms when two plates collide and squeeze and buckle Earth's crust?",
            "choices": [
              "Volcanic mountain",
              "Cinder cone volcano",
              "Folded mountain",
              "Fault-block mountain"
            ],
            "answer": 2,
            "explain": "Squeezing and buckling the crust makes folded mountains."
          },
          {
            "id": "fb1",
            "lesson": 3,
            "q": "How do fault-block mountains form?",
            "choices": [
              "Two plates collide and buckle the crust into folds.",
              "Magma breaks through and erupts again and again.",
              "Forces pull the crust apart, breaking it into blocks, and the sides drop down.",
              "Lava cools and makes a new shoreline."
            ],
            "answer": 2,
            "explain": "Fault-block = crust pulled apart into blocks; sides drop."
          },
          {
            "id": "vm1",
            "lesson": 3,
            "q": "How do volcanic mountains form?",
            "choices": [
              "The crust is pulled apart and blocks drop down.",
              "Magma breaks through at the surface, erupts, and cools; many eruptions build a mountain.",
              "Seismic waves push the ground upward.",
              "Two plates collide and squeeze the crust into folds."
            ],
            "answer": 1,
            "explain": "Volcanic mountains build up from many eruptions."
          },
          {
            "id": "v_def",
            "lesson": 4,
            "q": "What is a volcano?",
            "choices": [
              "A machine that records shaking in the ground",
              "A vent in Earth's crust through which magma, rock fragments, ash, and gases escape",
              "A mountain made only by folding rock",
              "A crack where plates get stuck and then slip"
            ],
            "answer": 1,
            "explain": "Definition of a volcano from the notes."
          },
          {
            "id": "aus",
            "lesson": 4,
            "q": "Active volcanoes are found on every continent EXCEPT which one?",
            "choices": [
              "North America",
              "Asia",
              "Antarctica",
              "Australia"
            ],
            "answer": 3,
            "explain": "Notes: active volcanoes on all continents except Australia."
          },
          {
            "id": "rof1",
            "lesson": 4,
            "q": "The Ring of Fire surrounds which ocean?",
            "choices": [
              "The Pacific Ocean",
              "The Atlantic Ocean",
              "The Arctic Ocean",
              "The Indian Ocean"
            ],
            "answer": 0,
            "explain": "The Ring of Fire surrounds the Pacific Ocean."
          },
          {
            "id": "stat_d",
            "lesson": 4,
            "q": "A volcano that is not erupting now but could erupt again someday (“sleeping”) is ____.",
            "choices": [
              "dormant",
              "active",
              "a hotspot",
              "extinct"
            ],
            "answer": 0,
            "explain": "Dormant = sleeping; could erupt again."
          },
          {
            "id": "sh1",
            "lesson": 4,
            "q": "Which type of volcano is wide with gently sloping sides and has gentle, nonexplosive eruptions?",
            "choices": [
              "Cinder cone volcano",
              "Composite volcano",
              "Fault-block mountain",
              "Shield volcano"
            ],
            "answer": 3,
            "explain": "Shield volcanoes: gentle slopes, nonexplosive eruptions."
          },
          {
            "id": "comp2",
            "lesson": 4,
            "q": "Which type of volcano is MOST likely to produce a pyroclastic flow?",
            "choices": [
              "Shield volcano",
              "Cinder cone volcano",
              "Extinct volcano",
              "Composite volcano"
            ],
            "answer": 3,
            "explain": "Composite volcanoes are most likely to make pyroclastic flows."
          },
          {
            "id": "cc1",
            "lesson": 4,
            "q": "Which type of volcano is the smallest and most common?",
            "choices": [
              "Shield volcano",
              "Cinder cone volcano",
              "Composite volcano",
              "Fault-block mountain"
            ],
            "answer": 1,
            "explain": "Cinder cones are the smallest and most common."
          },
          {
            "id": "pos1",
            "lesson": 4,
            "q": "Which is a POSITIVE effect of volcanoes on life on Earth?",
            "choices": [
              "Ash can cause breathing problems.",
              "Rock and ash break down into fertile soil.",
              "Ash can block the sun and change the climate.",
              "Eruptions can destroy towns."
            ],
            "answer": 1,
            "explain": "Fertile soil is a positive effect; the others are negative."
          },
          {
            "id": "pred1",
            "lesson": 4,
            "q": "Which is one sign scientists watch to predict a volcanic eruption?",
            "choices": [
              "The number of tourists visiting",
              "The phase of the moon",
              "How many birds fly overhead",
              "Swarms of small earthquakes showing magma is moving up"
            ],
            "answer": 3,
            "explain": "Earthquake swarms show magma moving upward."
          },
          {
            "id": "eq1",
            "lesson": 5,
            "q": "What causes an earthquake?",
            "choices": [
              "Plates get stuck at a boundary, build up stress, then break free and release energy.",
              "Magma cools into new rock at the surface.",
              "Ocean tides push hard against the shore.",
              "Ash blocks the sun and cools the ground."
            ],
            "answer": 0,
            "explain": "Stuck plates build stress, then break free and release energy."
          },
          {
            "id": "sw1",
            "lesson": 5,
            "q": "The energy released by an earthquake travels through Earth as ____.",
            "choices": [
              "magma",
              "seismic waves",
              "hotspots",
              "pyroclastic flows"
            ],
            "answer": 1,
            "explain": "Energy travels as seismic waves."
          },
          {
            "id": "p1",
            "lesson": 5,
            "q": "Which seismic waves travel the fastest and are detected FIRST?",
            "choices": [
              "S-waves",
              "Ocean waves",
              "Surface waves",
              "P-waves"
            ],
            "answer": 3,
            "explain": "P-waves are fastest and arrive first."
          },
          {
            "id": "s1",
            "lesson": 5,
            "q": "Which seismic waves arrive second, move rock up and down or side to side, and cause more damage to structures than P-waves?",
            "choices": [
              "S-waves",
              "Light waves",
              "P-waves",
              "Surface waves"
            ],
            "answer": 0,
            "explain": "S-waves: second, up-down/side-side, more damage."
          },
          {
            "id": "sf1",
            "lesson": 5,
            "q": "Which seismic waves do NOT travel inside Earth?",
            "choices": [
              "P-waves",
              "Surface waves",
              "S-waves",
              "Sound waves"
            ],
            "answer": 1,
            "explain": "Surface waves travel along the surface, not inside Earth."
          },
          {
            "id": "sg1",
            "lesson": 5,
            "q": "What do scientists use to detect and record the shaking from earthquakes?",
            "choices": [
              "A thermometer",
              "A telescope",
              "A barometer",
              "A seismograph"
            ],
            "answer": 3,
            "explain": "Seismographs detect and record shaking."
          },
          {
            "id": "mm1",
            "lesson": 5,
            "q": "Which scale do scientists use TODAY to measure earthquakes because it is more accurate?",
            "choices": [
              "The Richter scale",
              "The Fahrenheit scale",
              "The Moment Magnitude scale",
              "The pH scale"
            ],
            "answer": 2,
            "explain": "Moment Magnitude replaced Richter; more accurate."
          },
          {
            "id": "m7",
            "lesson": 5,
            "q": "An earthquake with a magnitude of 7.0 is called ____.",
            "choices": [
              "major",
              "light",
              "micro",
              "minor"
            ],
            "answer": 0,
            "explain": "7.0 = major."
          }
        ]
      },
      {
        "id": "b",
        "name": "Practice Test B",
        "desc": "25 questions · same as printed Test B",
        "questions": [
          {
            "id": "s_def2",
            "lesson": 3,
            "q": "Vocabulary match: Which word means “a force acting on a surface”?",
            "choices": [
              "Magnitude",
              "Fault",
              "Strain",
              "Stress"
            ],
            "answer": 3,
            "explain": "Stress = a force acting on a surface."
          },
          {
            "id": "ten2",
            "lesson": 3,
            "q": "Pulling on both ends of a piece of taffy until it stretches thin is most like which type of stress?",
            "choices": [
              "Magnitude",
              "Compression",
              "Tension",
              "Shear"
            ],
            "answer": 2,
            "explain": "Stretching/pulling apart = tension."
          },
          {
            "id": "com2",
            "lesson": 3,
            "q": "Pushing both ends of a sponge toward the middle is a model of which type of stress?",
            "choices": [
              "Tension",
              "Shear",
              "Compression",
              "Strain"
            ],
            "answer": 2,
            "explain": "Squeezing together = compression."
          },
          {
            "id": "str1",
            "lesson": 3,
            "q": "When stress changes the shape of a rock, the change in shape is called ____.",
            "choices": [
              "a hotspot",
              "strain",
              "tension",
              "a seismic wave"
            ],
            "answer": 1,
            "explain": "A change in shape caused by stress is strain."
          },
          {
            "id": "conv1",
            "lesson": 3,
            "q": "Most of Earth's largest mountains form where plates collide at which type of boundary?",
            "choices": [
              "Convergent",
              "Hotspot",
              "Transform",
              "Divergent"
            ],
            "answer": 0,
            "explain": "Largest mountains form at convergent (colliding) boundaries."
          },
          {
            "id": "fold1",
            "lesson": 3,
            "q": "How do folded mountains form?",
            "choices": [
              "Forces pull the crust apart and blocks drop down.",
              "Ash breaks down into fertile soil.",
              "Two plates collide, squeezing and buckling the crust.",
              "Magma erupts and cools again and again."
            ],
            "answer": 2,
            "explain": "Folded mountains = plates collide, squeeze and buckle crust."
          },
          {
            "id": "fb2",
            "lesson": 3,
            "q": "Which type of mountain forms when forces pull the crust apart, breaking it into blocks?",
            "choices": [
              "Fault-block mountain",
              "Volcanic mountain",
              "Shield volcano",
              "Folded mountain"
            ],
            "answer": 0,
            "explain": "Pulling apart into blocks makes fault-block mountains."
          },
          {
            "id": "vm2",
            "lesson": 3,
            "q": "Which type of mountain builds up over many eruptions of magma that cools at the surface?",
            "choices": [
              "Volcanic mountain",
              "Folded mountain",
              "Fault-block mountain",
              "Shear mountain"
            ],
            "answer": 0,
            "explain": "Repeated eruptions build volcanic mountains."
          },
          {
            "id": "v_def2",
            "lesson": 4,
            "q": "Vocabulary match: Which word means “a vent in Earth's crust through which magma, ash, and gases escape”?",
            "choices": [
              "Fault",
              "Seismograph",
              "Strain",
              "Volcano"
            ],
            "answer": 3,
            "explain": "That is the definition of a volcano."
          },
          {
            "id": "bnd",
            "lesson": 4,
            "q": "Volcanoes commonly form along which types of plate boundaries?",
            "choices": [
              "Convergent and divergent",
              "Transform only",
              "Volcanoes never form at boundaries",
              "Only in the middle of plates"
            ],
            "answer": 0,
            "explain": "Volcanoes commonly form at convergent and divergent boundaries."
          },
          {
            "id": "hot1",
            "lesson": 4,
            "q": "Some volcanoes do NOT form on plate boundaries. These special volcanoes form over ____.",
            "choices": [
              "seismographs",
              "hotspots",
              "folded mountains",
              "faults"
            ],
            "answer": 1,
            "explain": "Volcanoes away from boundaries form over hotspots."
          },
          {
            "id": "rof3",
            "lesson": 4,
            "q": "About what percent of Earth's earthquakes occur in the Ring of Fire?",
            "choices": [
              "About 50%",
              "About 25%",
              "About 10%",
              "About 90%"
            ],
            "answer": 3,
            "explain": "Notes: 90% of earthquakes occur in the Ring of Fire."
          },
          {
            "id": "stat_e",
            "lesson": 4,
            "q": "A volcano that is not expected to EVER erupt again is ____.",
            "choices": [
              "extinct",
              "dormant",
              "active",
              "composite"
            ],
            "answer": 0,
            "explain": "Extinct = not expected to erupt again."
          },
          {
            "id": "comp1",
            "lesson": 4,
            "q": "Which type of volcano is tall and steep and erupts thick, sticky lava with ash and rocks in explosive, dangerous eruptions?",
            "choices": [
              "Hotspot",
              "Composite volcano",
              "Cinder cone volcano",
              "Shield volcano"
            ],
            "answer": 1,
            "explain": "That describes a composite volcano."
          },
          {
            "id": "cc2",
            "lesson": 4,
            "q": "Which type of volcano throws blobs of lava into the air that break into pieces?",
            "choices": [
              "Cinder cone volcano",
              "Composite volcano",
              "Folded mountain",
              "Shield volcano"
            ],
            "answer": 0,
            "explain": "Cinder cones erupt blobs of lava that break into pieces."
          },
          {
            "id": "neg1",
            "lesson": 4,
            "q": "Which is a NEGATIVE effect of volcanoes?",
            "choices": [
              "Lava creates new land.",
              "Ash in the air can cause respiratory (breathing) problems.",
              "Ash breaks down into fertile soil.",
              "Gold and silver are brought to the surface."
            ],
            "answer": 1,
            "explain": "Respiratory problems are a negative effect."
          },
          {
            "id": "pred2",
            "lesson": 4,
            "q": "To help predict an eruption, scientists may test nearby rivers and lakes for changes in ____.",
            "choices": [
              "fish colors",
              "plastic",
              "sand color",
              "acid levels"
            ],
            "answer": 3,
            "explain": "Notes: monitor acid levels in nearby rivers and lakes."
          },
          {
            "id": "eqday",
            "lesson": 5,
            "q": "About how many earthquakes happen on Earth every day?",
            "choices": [
              "Thousands, and all are strong",
              "None – they happen once a year",
              "Only one or two",
              "Thousands, but most are too weak to feel"
            ],
            "answer": 3,
            "explain": "Thousands occur daily; most are too weak to feel."
          },
          {
            "id": "flt2",
            "lesson": 5,
            "q": "What are faults?",
            "choices": [
              "Cracks or breaks in the crust where plates meet and move",
              "Machines that record earthquakes",
              "Clouds of hot ash, gas, and rock",
              "Vents where magma escapes"
            ],
            "answer": 0,
            "explain": "Faults = cracks/breaks where plates meet and move."
          },
          {
            "id": "p2",
            "lesson": 5,
            "q": "The “P” in P-wave stands for ____.",
            "choices": [
              "pyroclastic",
              "primary",
              "plate",
              "power"
            ],
            "answer": 1,
            "explain": "P = primary (first)."
          },
          {
            "id": "s2",
            "lesson": 5,
            "q": "The “S” in S-wave stands for ____.",
            "choices": [
              "stress",
              "small",
              "secondary",
              "surface"
            ],
            "answer": 2,
            "explain": "S = secondary (second to appear)."
          },
          {
            "id": "sf2",
            "lesson": 5,
            "q": "Which seismic waves usually cause the most deaths and damage?",
            "choices": [
              "S-waves",
              "Sound waves",
              "P-waves",
              "Surface waves"
            ],
            "answer": 3,
            "explain": "Surface waves usually cause the most deaths and damage."
          },
          {
            "id": "sg2",
            "lesson": 5,
            "q": "Vocabulary match: Which word means “a machine that detects and records earthquake shaking”?",
            "choices": [
              "Richter",
              "Seismograph",
              "Hotspot",
              "Fault"
            ],
            "answer": 1,
            "explain": "A seismograph detects and records shaking."
          },
          {
            "id": "r1",
            "lesson": 5,
            "q": "Which was the FIRST scale used to measure earthquakes?",
            "choices": [
              "The Moment Magnitude scale",
              "The Fahrenheit scale",
              "The Richter scale",
              "The pH scale"
            ],
            "answer": 2,
            "explain": "The Richter scale was the first tool."
          },
          {
            "id": "m23",
            "lesson": 5,
            "q": "An earthquake with a magnitude of 2.0–3.0 is called ____.",
            "choices": [
              "strong",
              "great",
              "minor",
              "major"
            ],
            "answer": 2,
            "explain": "2.0–3.0 = minor."
          }
        ]
      },
      {
        "id": "c",
        "name": "Practice Test C",
        "desc": "25 questions · same as printed Test C",
        "questions": [
          {
            "id": "she2",
            "lesson": 3,
            "q": "Rubbing your palms past each other in opposite directions is a model of which type of stress?",
            "choices": [
              "Shear",
              "Compression",
              "Strain",
              "Tension"
            ],
            "answer": 0,
            "explain": "Sliding past in opposite directions = shear."
          },
          {
            "id": "str2",
            "lesson": 3,
            "q": "Which statement about strain is TRUE?",
            "choices": [
              "Strain only happens inside volcanoes.",
              "The change in shape is always permanent.",
              "The change in shape may be temporary or permanent.",
              "Strain is a machine that measures earthquakes."
            ],
            "answer": 2,
            "explain": "Notes: strain may be temporary or permanent."
          },
          {
            "id": "mtn_h",
            "lesson": 3,
            "q": "According to your notes, mountains rise more than about how high?",
            "choices": [
              "20 feet",
              "200 feet",
              "50 miles",
              "2,000 feet"
            ],
            "answer": 3,
            "explain": "Mountains rise over 2,000 feet."
          },
          {
            "id": "mtn_r",
            "lesson": 3,
            "q": "Mountains may stand alone, but more often they occur in groups called ____.",
            "choices": [
              "hotspots",
              "ranges",
              "faults",
              "vents"
            ],
            "answer": 1,
            "explain": "Mountains more often occur in ranges."
          },
          {
            "id": "andes1",
            "lesson": 3,
            "q": "Which is the longest mountain range on land?",
            "choices": [
              "The Himalayas",
              "The Rocky Mountains",
              "The Andes Mountains",
              "The Appalachian Mountains"
            ],
            "answer": 2,
            "explain": "The Andes are the longest mountain range (on land)."
          },
          {
            "id": "fold3",
            "lesson": 3,
            "q": "Which type of stress forms folded mountains?",
            "choices": [
              "Tension",
              "Strain",
              "Shear",
              "Compression"
            ],
            "answer": 3,
            "explain": "Folded mountains form when plates collide and squeeze (compression)."
          },
          {
            "id": "fb3",
            "lesson": 3,
            "q": "Which type of stress forms fault-block mountains?",
            "choices": [
              "Compression",
              "Shear",
              "Tension",
              "Strain"
            ],
            "answer": 2,
            "explain": "Fault-block mountains form when forces pull the crust apart (tension)."
          },
          {
            "id": "vm1",
            "lesson": 3,
            "q": "How do volcanic mountains form?",
            "choices": [
              "The crust is pulled apart and blocks drop down.",
              "Two plates collide and squeeze the crust into folds.",
              "Magma breaks through at the surface, erupts, and cools; many eruptions build a mountain.",
              "Seismic waves push the ground upward."
            ],
            "answer": 2,
            "explain": "Volcanic mountains build up from many eruptions."
          },
          {
            "id": "v_def",
            "lesson": 4,
            "q": "What is a volcano?",
            "choices": [
              "A machine that records shaking in the ground",
              "A mountain made only by folding rock",
              "A crack where plates get stuck and then slip",
              "A vent in Earth's crust through which magma, rock fragments, ash, and gases escape"
            ],
            "answer": 3,
            "explain": "Definition of a volcano from the notes."
          },
          {
            "id": "rof2",
            "lesson": 4,
            "q": "The Ring of Fire is found along the edge of which tectonic plate?",
            "choices": [
              "The African plate",
              "The Antarctic plate",
              "The Pacific plate",
              "The Eurasian plate"
            ],
            "answer": 2,
            "explain": "It runs along the edge of the Pacific plate."
          },
          {
            "id": "cls1",
            "lesson": 4,
            "q": "Volcanoes are classified (grouped) in several ways. Which is NOT one of them?",
            "choices": [
              "How many people live nearby",
              "Style of eruption",
              "Shape and size",
              "What the magma is made of"
            ],
            "answer": 0,
            "explain": "Classified by shape, size, eruption style, magma – not population."
          },
          {
            "id": "stat_a",
            "lesson": 4,
            "q": "A volcano that is erupting now or has erupted recently and is likely to erupt again is ____.",
            "choices": [
              "dormant",
              "extinct",
              "a fault",
              "active"
            ],
            "answer": 3,
            "explain": "Active = erupting or likely to erupt again soon."
          },
          {
            "id": "sh2",
            "lesson": 4,
            "q": "Which type of volcano is relatively SAFE during an eruption?",
            "choices": [
              "Shield volcano",
              "Composite volcano",
              "Stratovolcano",
              "None – all are equally explosive"
            ],
            "answer": 0,
            "explain": "Shield volcanoes have gentle eruptions, so they are relatively safe."
          },
          {
            "id": "pf1",
            "lesson": 4,
            "q": "What is a pyroclastic flow?",
            "choices": [
              "A swarm of small earthquakes",
              "A slow river of runny lava",
              "A fast-moving cloud of hot ash, gas, and rock",
              "A wave that travels through Earth"
            ],
            "answer": 2,
            "explain": "Definition from the notes."
          },
          {
            "id": "msh",
            "lesson": 4,
            "q": "Mount St. Helens in Washington is an active stratovolcano. A stratovolcano is another name for which type?",
            "choices": [
              "Composite volcano",
              "Fault-block mountain",
              "Cinder cone volcano",
              "Shield volcano"
            ],
            "answer": 0,
            "explain": "Stratovolcano = composite volcano (tall, steep, explosive)."
          },
          {
            "id": "cc1",
            "lesson": 4,
            "q": "Which type of volcano is the smallest and most common?",
            "choices": [
              "Composite volcano",
              "Cinder cone volcano",
              "Fault-block mountain",
              "Shield volcano"
            ],
            "answer": 1,
            "explain": "Cinder cones are the smallest and most common."
          },
          {
            "id": "pos2",
            "lesson": 4,
            "q": "Volcanoes can bring which valuable minerals to the surface?",
            "choices": [
              "Sand and seashells",
              "Gold and silver",
              "Coal and oil",
              "Salt and sugar"
            ],
            "answer": 1,
            "explain": "Notes: gold and silver can be brought to the surface."
          },
          {
            "id": "eq2",
            "lesson": 5,
            "q": "Vocabulary match: Plates get stuck, build up pressure, then break free and make the ground shake. This describes a(n) ____.",
            "choices": [
              "earthquake",
              "pyroclastic flow",
              "hotspot",
              "shield volcano"
            ],
            "answer": 0,
            "explain": "That is the description of an earthquake."
          },
          {
            "id": "eqwhere",
            "lesson": 5,
            "q": "Where do most earthquakes occur?",
            "choices": [
              "In oceans or near plate boundaries, especially the Ring of Fire",
              "Only in Australia",
              "In the middle of continents, far from boundaries",
              "Only at the North and South Poles"
            ],
            "answer": 0,
            "explain": "Most occur in oceans/near plate boundaries, esp. the Ring of Fire."
          },
          {
            "id": "p3",
            "lesson": 5,
            "q": "How does rock move when a P-wave passes through it?",
            "choices": [
              "It moves up and down or side to side.",
              "It pushes and pulls back and forth in the same direction the wave travels.",
              "It does not move at all.",
              "It only moves along the surface."
            ],
            "answer": 1,
            "explain": "P-waves vibrate in the same direction the wave moves."
          },
          {
            "id": "s1",
            "lesson": 5,
            "q": "Which seismic waves arrive second, move rock up and down or side to side, and cause more damage to structures than P-waves?",
            "choices": [
              "P-waves",
              "S-waves",
              "Surface waves",
              "Light waves"
            ],
            "answer": 1,
            "explain": "S-waves: second, up-down/side-side, more damage."
          },
          {
            "id": "sf1",
            "lesson": 5,
            "q": "Which seismic waves do NOT travel inside Earth?",
            "choices": [
              "P-waves",
              "Sound waves",
              "S-waves",
              "Surface waves"
            ],
            "answer": 3,
            "explain": "Surface waves travel along the surface, not inside Earth."
          },
          {
            "id": "order1",
            "lesson": 5,
            "q": "In what order do seismic waves usually arrive at a station?",
            "choices": [
              "S-waves, then P-waves, then surface waves",
              "Surface waves, then P-waves, then S-waves",
              "They all arrive at the same time",
              "P-waves, then S-waves, then surface waves"
            ],
            "answer": 3,
            "explain": "P = first, S = second, surface waves come after."
          },
          {
            "id": "mm1",
            "lesson": 5,
            "q": "Which scale do scientists use TODAY to measure earthquakes because it is more accurate?",
            "choices": [
              "The Fahrenheit scale",
              "The Moment Magnitude scale",
              "The Richter scale",
              "The pH scale"
            ],
            "answer": 1,
            "explain": "Moment Magnitude replaced Richter; more accurate."
          },
          {
            "id": "m5",
            "lesson": 5,
            "q": "An earthquake with a magnitude of 5.0 is called ____.",
            "choices": [
              "moderate",
              "minor",
              "micro",
              "great"
            ],
            "answer": 0,
            "explain": "5.0 = moderate."
          }
        ]
      },
      {
        "id": "d",
        "name": "Practice Test D",
        "desc": "25 questions · same as printed Test D",
        "questions": [
          {
            "id": "she1",
            "lesson": 3,
            "q": "Which type of stress pushes rock in opposite directions so it slides past itself?",
            "choices": [
              "Strain",
              "Tension",
              "Compression",
              "Shear"
            ],
            "answer": 3,
            "explain": "Shear pushes in opposite directions, sliding past."
          },
          {
            "id": "ten1",
            "lesson": 3,
            "q": "Which type of stress PULLS rock apart?",
            "choices": [
              "Tension",
              "Compression",
              "Shear",
              "Strain"
            ],
            "answer": 0,
            "explain": "Tension pulls apart."
          },
          {
            "id": "com2",
            "lesson": 3,
            "q": "Pushing both ends of a sponge toward the middle is a model of which type of stress?",
            "choices": [
              "Tension",
              "Shear",
              "Compression",
              "Strain"
            ],
            "answer": 2,
            "explain": "Squeezing together = compression."
          },
          {
            "id": "flt1",
            "lesson": 3,
            "q": "If strain BREAKS a rock instead of just changing its shape, what is formed?",
            "choices": [
              "A hotspot",
              "A seismograph",
              "A fault",
              "A cinder cone"
            ],
            "answer": 2,
            "explain": "When strain breaks rock, a fault forms."
          },
          {
            "id": "andes2",
            "lesson": 3,
            "q": "Which statement about the Andes Mountains is TRUE?",
            "choices": [
              "They are the longest range on land and are still rising.",
              "They are a single volcano over a hotspot.",
              "They are the shortest range and are sinking.",
              "They are found in Australia."
            ],
            "answer": 0,
            "explain": "Notes: the Andes are the longest range and still rising."
          },
          {
            "id": "fold1",
            "lesson": 3,
            "q": "How do folded mountains form?",
            "choices": [
              "Two plates collide, squeezing and buckling the crust.",
              "Ash breaks down into fertile soil.",
              "Magma erupts and cools again and again.",
              "Forces pull the crust apart and blocks drop down."
            ],
            "answer": 0,
            "explain": "Folded mountains = plates collide, squeeze and buckle crust."
          },
          {
            "id": "fb2",
            "lesson": 3,
            "q": "Which type of mountain forms when forces pull the crust apart, breaking it into blocks?",
            "choices": [
              "Shield volcano",
              "Volcanic mountain",
              "Folded mountain",
              "Fault-block mountain"
            ],
            "answer": 3,
            "explain": "Pulling apart into blocks makes fault-block mountains."
          },
          {
            "id": "vm2",
            "lesson": 3,
            "q": "Which type of mountain builds up over many eruptions of magma that cools at the surface?",
            "choices": [
              "Volcanic mountain",
              "Folded mountain",
              "Fault-block mountain",
              "Shear mountain"
            ],
            "answer": 0,
            "explain": "Repeated eruptions build volcanic mountains."
          },
          {
            "id": "hot2",
            "lesson": 4,
            "q": "Which statement is TRUE?",
            "choices": [
              "Volcanoes only form on transform boundaries.",
              "Hotspots are a type of seismic wave.",
              "Not all volcanoes form on plate boundaries; some form over hotspots.",
              "All volcanoes form on plate boundaries."
            ],
            "answer": 2,
            "explain": "Some volcanoes form over hotspots, not boundaries."
          },
          {
            "id": "rof3",
            "lesson": 4,
            "q": "About what percent of Earth's earthquakes occur in the Ring of Fire?",
            "choices": [
              "About 25%",
              "About 10%",
              "About 90%",
              "About 50%"
            ],
            "answer": 2,
            "explain": "Notes: 90% of earthquakes occur in the Ring of Fire."
          },
          {
            "id": "stat_list",
            "lesson": 4,
            "q": "Volcanoes are classified by their status of eruption. What are the three statuses?",
            "choices": [
              "Tension, compression, and shear",
              "Active, dormant, and extinct",
              "Primary, secondary, and surface",
              "Micro, minor, and light"
            ],
            "answer": 1,
            "explain": "Status: active, dormant, extinct."
          },
          {
            "id": "sh1",
            "lesson": 4,
            "q": "Which type of volcano is wide with gently sloping sides and has gentle, nonexplosive eruptions?",
            "choices": [
              "Fault-block mountain",
              "Shield volcano",
              "Cinder cone volcano",
              "Composite volcano"
            ],
            "answer": 1,
            "explain": "Shield volcanoes: gentle slopes, nonexplosive eruptions."
          },
          {
            "id": "comp1",
            "lesson": 4,
            "q": "Which type of volcano is tall and steep and erupts thick, sticky lava with ash and rocks in explosive, dangerous eruptions?",
            "choices": [
              "Cinder cone volcano",
              "Hotspot",
              "Shield volcano",
              "Composite volcano"
            ],
            "answer": 3,
            "explain": "That describes a composite volcano."
          },
          {
            "id": "cc1",
            "lesson": 4,
            "q": "Which type of volcano is the smallest and most common?",
            "choices": [
              "Shield volcano",
              "Cinder cone volcano",
              "Composite volcano",
              "Fault-block mountain"
            ],
            "answer": 1,
            "explain": "Cinder cones are the smallest and most common."
          },
          {
            "id": "neg2",
            "lesson": 4,
            "q": "How can a large volcanic eruption affect the climate?",
            "choices": [
              "It stops all wind on Earth.",
              "Lava makes the oceans freeze.",
              "Ash can block sunlight from reaching Earth.",
              "Ash makes the sun shine brighter."
            ],
            "answer": 2,
            "explain": "Ash blocking the sun can affect climate."
          },
          {
            "id": "pred3",
            "lesson": 4,
            "q": "Which is one way scientists predict volcanic eruptions?",
            "choices": [
              "Monitoring gases escaping from the mountain",
              "Counting clouds above the mountain",
              "Checking the phase of the moon",
              "Measuring the height of ocean waves"
            ],
            "answer": 0,
            "explain": "Scientists monitor gases escaping the mountain."
          },
          {
            "id": "pos3",
            "lesson": 4,
            "q": "How can cooling lava flows be helpful?",
            "choices": [
              "They stop earthquakes from happening.",
              "They turn into seismic waves.",
              "They make the air cleaner to breathe.",
              "They can create new land or make shorelines bigger."
            ],
            "answer": 3,
            "explain": "Lava cools into new land / larger shorelines."
          },
          {
            "id": "eq1",
            "lesson": 5,
            "q": "What causes an earthquake?",
            "choices": [
              "Ash blocks the sun and cools the ground.",
              "Plates get stuck at a boundary, build up stress, then break free and release energy.",
              "Magma cools into new rock at the surface.",
              "Ocean tides push hard against the shore."
            ],
            "answer": 1,
            "explain": "Stuck plates build stress, then break free and release energy."
          },
          {
            "id": "sw2",
            "lesson": 5,
            "q": "In which direction do seismic waves travel from the starting point of an earthquake?",
            "choices": [
              "Only straight up",
              "Only toward the east",
              "Only toward the ocean",
              "Outward in all directions"
            ],
            "answer": 3,
            "explain": "Seismic waves travel outward in all directions."
          },
          {
            "id": "p1",
            "lesson": 5,
            "q": "Which seismic waves travel the fastest and are detected FIRST?",
            "choices": [
              "P-waves",
              "Surface waves",
              "S-waves",
              "Ocean waves"
            ],
            "answer": 0,
            "explain": "P-waves are fastest and arrive first."
          },
          {
            "id": "s1",
            "lesson": 5,
            "q": "Which seismic waves arrive second, move rock up and down or side to side, and cause more damage to structures than P-waves?",
            "choices": [
              "Surface waves",
              "P-waves",
              "Light waves",
              "S-waves"
            ],
            "answer": 3,
            "explain": "S-waves: second, up-down/side-side, more damage."
          },
          {
            "id": "sf2",
            "lesson": 5,
            "q": "Which seismic waves usually cause the most deaths and damage?",
            "choices": [
              "P-waves",
              "Surface waves",
              "Sound waves",
              "S-waves"
            ],
            "answer": 1,
            "explain": "Surface waves usually cause the most deaths and damage."
          },
          {
            "id": "sg1",
            "lesson": 5,
            "q": "What do scientists use to detect and record the shaking from earthquakes?",
            "choices": [
              "A barometer",
              "A seismograph",
              "A thermometer",
              "A telescope"
            ],
            "answer": 1,
            "explain": "Seismographs detect and record shaking."
          },
          {
            "id": "mm1",
            "lesson": 5,
            "q": "Which scale do scientists use TODAY to measure earthquakes because it is more accurate?",
            "choices": [
              "The Moment Magnitude scale",
              "The pH scale",
              "The Fahrenheit scale",
              "The Richter scale"
            ],
            "answer": 0,
            "explain": "Moment Magnitude replaced Richter; more accurate."
          },
          {
            "id": "mstrong",
            "lesson": 5,
            "q": "Which of these earthquakes is the STRONGEST?",
            "choices": [
              "Magnitude 2.0 (minor)",
              "Magnitude 4.0 (light)",
              "Magnitude 8.0 (great)",
              "Magnitude 6.0 (strong)"
            ],
            "answer": 2,
            "explain": "8.0 (great) is the highest magnitude listed."
          }
        ]
      }
    ]
  }
];
