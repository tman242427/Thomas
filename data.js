/*
 * data.js — content for Thomas's Study Lab (6th grade).
 *
 * Elizabeth's 5th-grade subjects live in elizabeth/data.js and are served at /elizabeth/.
 *
 * To add a new SUBJECT (e.g. another unit), copy an existing subject object
 * inside SUBJECTS and change the fields. When there are 2+ subjects the home
 * screen shows a subject picker automatically.
 *
 * Each subject has:
 *   lessons    – [{ id, name }]           used for "quiz by lesson" and tagging
 *   notes      – [{ id, short, title, html }]   study guide sections (HTML allowed)
 *   flashcards – [{ term, def, lesson }]  lesson = a lessons[].id
 *   tests      – [{ id, name, desc, questions: [...], shuffle? }]  fixed practice tests
 *                (shuffle: true = question order AND answer order are shuffled each time)
 *   flashcards can also have optional  front / back  labels (default "Term" / "Definition")
 *                e.g. front: "Question", back: "Model answer".
 *
 * Each question: { id, lesson, q, choices: [..], answer: <index>, explain }
 *   - "id" must be unique within the subject. If the same id appears in several
 *     tests it is treated as the same question (used to build Random / By-lesson
 *     quizzes without repeats).
 *   - Random and by-lesson quizzes shuffle the answer order automatically.
 *
 * Password: edit APP_CONFIG.password below. (It is only a light gate — anyone who views the
 * page source can see it. Don't put private information in this app.)
 * gateKey must stay different from Elizabeth's site (same origin, shared localStorage).
 */
window.APP_CONFIG = {
  password: "thomas6",
  gateKey: "thomas_lab_unlocked_v1",
  name: "Thomas",
  title: "Thomas's Study Lab",
  subtitle: "6th Grade",
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
    ],
    // True / False concept statements (Science). Shown as the "True / False" group in the Quiz menu.
    // Same shape as a question, plus tf:true and choices ["True","False"] (answer 0 = True, 1 = False).
    trueFalse: [
      {"id": "tf3_1", "lesson": 3, "tf": true, "q": "Folded mountains are built by compression, because two plates collide and squeeze and buckle the crust.", "choices": ["True", "False"], "answer": 0, "explain": "True. Colliding plates squeeze (compression) and buckle the crust into folded mountains, like pushing a rug into folds."},
      {"id": "tf3_2", "lesson": 3, "tf": true, "q": "Fault-block mountains form when two plates are squeezed together and the crust buckles into folds.", "choices": ["True", "False"], "answer": 1, "explain": "False. Fault-block mountains form when forces PULL the crust apart (tension) and break it into blocks. Squeezing and buckling makes folded mountains."},
      {"id": "tf3_3", "lesson": 3, "tf": true, "q": "Most of Earth's largest mountains form where plates collide at convergent boundaries.", "choices": ["True", "False"], "answer": 0, "explain": "True. Plates pushing together at convergent boundaries build most of Earth's largest mountains."},
      {"id": "tf3_4", "lesson": 3, "tf": true, "q": "Shear stress pulls rock apart until it stretches, like pulling on taffy.", "choices": ["True", "False"], "answer": 1, "explain": "False. Tension pulls rock apart like taffy. Shear pushes in opposite directions so rock slides past, like rubbing your palms."},
      {"id": "tf3_5", "lesson": 3, "tf": true, "q": "If strain is strong enough to break a rock, a fault forms.", "choices": ["True", "False"], "answer": 0, "explain": "True. Stress changes a rock's shape (strain). When strain breaks the rock instead of just bending it, a fault forms."},
      {"id": "tf3_6", "lesson": 3, "tf": true, "q": "Strain is the force acting on a rock, and stress is the change in the rock's shape.", "choices": ["True", "False"], "answer": 1, "explain": "False. It is the other way around: stress is the force acting on a surface, and strain is the change in shape the stress causes."},
      {"id": "tf3_7", "lesson": 3, "tf": true, "q": "When stress changes a rock's shape, the change is not always permanent. It can be temporary.", "choices": ["True", "False"], "answer": 0, "explain": "True. Strain, the change in a rock's shape, can be temporary or permanent."},
      {"id": "tf3_8", "lesson": 3, "tf": true, "q": "Volcanic mountains form when two plates collide and squeeze the crust into folds.", "choices": ["True", "False"], "answer": 1, "explain": "False. Volcanic mountains are built when magma breaks through at the surface, erupts, and cools. Colliding plates that squeeze and buckle the crust make folded mountains."},
      {"id": "tf3_9", "lesson": 3, "tf": true, "q": "When forces pull the crust apart into blocks, the ground on the sides of a block can drop down to form a fault-block mountain.", "choices": ["True", "False"], "answer": 0, "explain": "True. Tension pulls the crust apart and breaks it into blocks, and the ground on the sides drops down."},
      {"id": "tf3_10", "lesson": 3, "tf": true, "q": "A volcanic mountain is built up by one single eruption.", "choices": ["True", "False"], "answer": 1, "explain": "False. A volcanic mountain grows after many eruptions, as erupted material cools and builds up over time."},
      {"id": "tf4_1", "lesson": 4, "tf": true, "q": "Volcanoes can only form where two plates collide.", "choices": ["True", "False"], "answer": 1, "explain": "False. Volcanoes commonly form at convergent AND divergent boundaries, and some form over hotspots away from any boundary."},
      {"id": "tf4_2", "lesson": 4, "tf": true, "q": "A volcano can form far from a plate boundary if it sits over a hotspot, a very hot area under a plate.", "choices": ["True", "False"], "answer": 0, "explain": "True. Hotspots are very hot areas under a plate where volcanoes can form away from plate boundaries."},
      {"id": "tf4_3", "lesson": 4, "tf": true, "q": "Shield volcanoes are the most likely to make a pyroclastic flow because their thick, sticky lava erupts explosively.", "choices": ["True", "False"], "answer": 1, "explain": "False. Shield volcanoes have gentle, nonexplosive eruptions. Composite volcanoes, with thick sticky lava plus ash and rocks, are the most likely to make a pyroclastic flow."},
      {"id": "tf4_4", "lesson": 4, "tf": true, "q": "Composite volcanoes erupt explosively, and they are the type most likely to produce a pyroclastic flow.", "choices": ["True", "False"], "answer": 0, "explain": "True. Thick, sticky lava plus ash and rocks make composite (stratovolcano) eruptions explosive, and they are most likely to make a fast-moving cloud of hot ash, gas, and rock."},
      {"id": "tf4_5", "lesson": 4, "tf": true, "q": "Shield volcanoes are relatively safe because their eruptions are gentle and nonexplosive.", "choices": ["True", "False"], "answer": 0, "explain": "True. Shield volcanoes are tall and wide with gently sloping sides, and their gentle eruptions make them relatively safe."},
      {"id": "tf4_6", "lesson": 4, "tf": true, "q": "An extinct volcano is just \"sleeping\" and could erupt again at any time.", "choices": ["True", "False"], "answer": 1, "explain": "False. That describes a dormant volcano. An extinct volcano is not expected to ever erupt again."},
      {"id": "tf4_7", "lesson": 4, "tf": true, "q": "Swarms of small earthquakes near a volcano are a sign that magma is moving down and the volcano is calming.", "choices": ["True", "False"], "answer": 1, "explain": "False. Swarms of small earthquakes are a warning sign that magma is moving UP, so scientists use them to predict an eruption."},
      {"id": "tf4_8", "lesson": 4, "tf": true, "q": "Volcanoes can both help and harm: broken-down rock and ash make fertile soil and cooled lava makes new land, but ash can block the sun and cause breathing problems.", "choices": ["True", "False"], "answer": 0, "explain": "True. Positive effects include fertile soil, valuable minerals, and new land. Negative effects include destruction, ash that blocks the sun and affects climate, and respiratory problems."},
      {"id": "tf4_9", "lesson": 4, "tf": true, "q": "Earthquakes are spread evenly around the world, so the Ring of Fire is no more active than anywhere else.", "choices": ["True", "False"], "answer": 1, "explain": "False. The Ring of Fire, around the edge of the Pacific plate, is where about 90% of earthquakes and most volcanoes happen."},
      {"id": "tf4_10", "lesson": 4, "tf": true, "q": "Changes in the acid levels of nearby rivers and lakes can be one clue that a volcano may erupt.", "choices": ["True", "False"], "answer": 0, "explain": "True. Scientists predict eruptions by watching for swarms of small earthquakes, gases escaping the mountain, and changing acid levels in nearby rivers and lakes."},
      {"id": "tf5_1", "lesson": 5, "tf": true, "q": "An earthquake happens when the edges of plates get stuck, stress builds up, and then they break free and release energy.", "choices": ["True", "False"], "answer": 0, "explain": "True. Stuck plate edges build up stress until they break free, and the released energy makes the ground shake."},
      {"id": "tf5_2", "lesson": 5, "tf": true, "q": "Earthquakes happen when plates slide smoothly past each other with nothing getting stuck.", "choices": ["True", "False"], "answer": 1, "explain": "False. Earthquakes happen because the plate edges GET STUCK. Stress builds up until they break free and release energy."},
      {"id": "tf5_3", "lesson": 5, "tf": true, "q": "P-waves are detected before S-waves because P-waves are the fastest seismic waves.", "choices": ["True", "False"], "answer": 0, "explain": "True. P-waves (Primary) are fastest, so they arrive and are detected first. S-waves arrive second."},
      {"id": "tf5_4", "lesson": 5, "tf": true, "q": "S-waves are the fastest seismic waves, so a seismograph records them first.", "choices": ["True", "False"], "answer": 1, "explain": "False. P-waves are the fastest and arrive first. S-waves (Secondary) arrive second."},
      {"id": "tf5_5", "lesson": 5, "tf": true, "q": "A P-wave pushes and pulls rock in the same direction the wave travels, while an S-wave moves rock up and down or side to side.", "choices": ["True", "False"], "answer": 0, "explain": "True. P-waves are push-pull in the direction of travel. S-waves move rock up and down or side to side, which does more damage to structures."},
      {"id": "tf5_6", "lesson": 5, "tf": true, "q": "Surface waves travel deep inside Earth and cause the least damage.", "choices": ["True", "False"], "answer": 1, "explain": "False. Surface waves travel along the surface, not inside Earth, and usually cause the most deaths and damage. P-waves cause the least damage."},
      {"id": "tf5_7", "lesson": 5, "tf": true, "q": "Even though surface waves arrive after P-waves and S-waves, they usually cause the most deaths and damage.", "choices": ["True", "False"], "answer": 0, "explain": "True. Surface waves arrive last but usually do the most harm because they travel along the surface where people and buildings are."},
      {"id": "tf5_8", "lesson": 5, "tf": true, "q": "Seismic waves only travel in the direction the plates were moving.", "choices": ["True", "False"], "answer": 1, "explain": "False. Seismic waves move outward in all directions from the starting point of the earthquake."},
      {"id": "tf5_9", "lesson": 5, "tf": true, "q": "Scientists switched from the Richter scale to the Moment Magnitude scale because the Moment Magnitude scale is more accurate.", "choices": ["True", "False"], "answer": 0, "explain": "True. The Richter scale was the first measuring tool, but today scientists use the more accurate Moment Magnitude scale."},
      {"id": "tf5_10", "lesson": 5, "tf": true, "q": "Most of the thousands of earthquakes that happen every day are strong enough to feel.", "choices": ["True", "False"], "answer": 1, "explain": "False. Thousands of earthquakes happen every day, but most are too weak to feel."}
    ]
  },
  {
    "id": "ela",
    "name": "ELA",
    "emoji": "📚",
    "tagline": "The Jungle Book: vocabulary & short answers",
    "intro": "Pick a mode to get ready for your ELA test on three Jungle Book stories. You've got this! 💪",
    "lessons": [
      {
        "id": "vocab",
        "name": "Vocabulary"
      },
      {
        "id": "sa",
        "name": "Short Answer"
      }
    ],
    "notes": [
      {
        "id": "vocab",
        "short": "Vocabulary",
        "title": "Jungle Book Vocabulary",
        "html": "\n        <h2>Jungle Book Vocabulary</h2>\n        <p>These 20 words come from <em>Kaa's Hunting</em>, <em>Tiger! Tiger!</em> and <em>The White Seal</em>. Learn each meaning, then try the flashcards and the Vocabulary quiz.</p>\n        <div class=\"key-terms\">\n          <h3>20 words</h3>\n          <p class=\"term-row\"><strong>1. Outcast</strong> — Someone or something that is cast out or rejected, as from home or society.</p>\n          <p class=\"term-row\"><strong>2. Ankus</strong> — An elephant goad of India with a spike and a hook at one end.</p>\n          <p class=\"term-row\"><strong>3. Covert</strong> — Concealed or disguised; secret.</p>\n          <p class=\"term-row\"><strong>4. Straggle</strong> — To spread or be spread in a scattered fashion or at irregular intervals.</p>\n          <p class=\"term-row\"><strong>5. Careen</strong> — To lean, sway, or tip to one side while in motion.</p>\n          <p class=\"term-row\"><strong>6. Lamentation</strong> — The act of expressing grief.</p>\n          <p class=\"term-row\"><strong>7. Incursion</strong> — A hostile entrance into or invasion of a place or territory, especially a sudden one.</p>\n          <p class=\"term-row\"><strong>8. Ravine</strong> — A narrow, steep-sided valley, commonly eroded by running water.</p>\n          <p class=\"term-row\"><strong>9. Sullen</strong> — Showing irritation or ill humor by gloomy silence or reserve.</p>\n          <p class=\"term-row\"><strong>10. Herd</strong> — A number of animals kept feeding together; a drove or flock.</p>\n          <p class=\"term-row\"><strong>11. Famine</strong> — An extreme and general scarcity of food, as in a country or a large geographical area.</p>\n          <p class=\"term-row\"><strong>12. Scour</strong> — To remove dirt, grease, etc., or to cleanse or polish by hard rubbing, as with a rough or abrasive material.</p>\n          <p class=\"term-row\"><strong>13. Delusion</strong> — A false belief or opinion.</p>\n          <p class=\"term-row\"><strong>14. Zenith</strong> — The point on the celestial sphere vertically above a given position.</p>\n          <p class=\"term-row\"><strong>15. Rookery</strong> — A breeding place or colony of gregarious birds or animals, such as penguins and seals.</p>\n          <p class=\"term-row\"><strong>16. Beachmaster</strong> — A bull fur seal that has its own territory in the breeding grounds.</p>\n          <p class=\"term-row\"><strong>17. Flipper</strong> — A broad, flat limb, as of a seal or whale, especially adapted for swimming.</p>\n          <p class=\"term-row\"><strong>18. Shoal</strong> — A place where the sea, a river, or another body of water is shallow.</p>\n          <p class=\"term-row\"><strong>19. Vagabond</strong> — Wandering from place to place without any settled home; nomadic.</p>\n          <p class=\"term-row\"><strong>20. Gregarious</strong> — Living in a flock or herd, as animals.</p>\n        </div>\n      "
      },
      {
        "id": "short",
        "short": "Short Answer",
        "title": "Short Answer Questions",
        "html": "\n        <h2>Short Answer Questions</h2>\n        <p>Three questions, one for each story. Read the model answers and practice saying them in your own words.</p>\n        <div class=\"callout\">\n          <p><strong>How to write a good short answer</strong></p>\n          <ul>\n            <li>Restate the question in your first sentence.</li>\n            <li>Answer every part of the question (if it asks two things, answer both).</li>\n            <li>Use specific details from the story, not general guesses.</li>\n            <li>Write 2–4 clear sentences, then re-read for spelling.</li>\n          </ul>\n        </div>\n        <h3>Kaa's Hunting</h3>\n        <p><strong>Why do the Bandar-log (the Monkey-People) kidnap Mowgli, and why do Baloo and Bagheera seek Kaa's help to rescue him?</strong></p>\n        <div class=\"callout\"><p>The Bandar-log kidnap Mowgli because they want him in their tribe to teach them how to weave twigs together and because they crave the attention and status of having a human in their pack. Baloo and Bagheera seek out Kaa because the monkeys are terrified of the rock python, as he is the only creature in the jungle who can outmaneuver them in the trees and hypnotize them with his dance.</p></div>\n        <h3>Tiger! Tiger!</h3>\n        <p><strong>How does Mowgli successfully defeat and kill Shere Khan the tiger?</strong></p>\n        <div class=\"callout\"><p>Mowgli uses his knowledge of the village's herd of buffaloes to trap Shere Khan. With the help of Akela and the Lone Wolf, Mowgli divides the herd into two groups. They trap Shere Khan at the bottom of a steep ravine, forcing the buffaloes to stampede through it from both ends, which tramples the tiger to death.</p></div>\n        <h3>The White Seal</h3>\n        <p><strong>What motivates Kotick to spend years searching the oceans, and what does he ultimately discover?</strong></p>\n        <div class=\"callout\"><p>Kotick is motivated by the horror of witnessing human sealers slaughter a group of young seals. He vows to find a safe island where humans cannot go so his people can live in peace. After years of searching, he discovers hidden beaches protected by a treacherous, underwater wall of rock that humans cannot navigate.</p></div>\n      "
      }
    ],
    "flashcards": [
      {
        "term": "Outcast",
        "def": "Someone or something that is cast out or rejected, as from home or society.",
        "lesson": "vocab"
      },
      {
        "term": "Ankus",
        "def": "An elephant goad of India with a spike and a hook at one end.",
        "lesson": "vocab"
      },
      {
        "term": "Covert",
        "def": "Concealed or disguised; secret.",
        "lesson": "vocab"
      },
      {
        "term": "Straggle",
        "def": "To spread or be spread in a scattered fashion or at irregular intervals.",
        "lesson": "vocab"
      },
      {
        "term": "Careen",
        "def": "To lean, sway, or tip to one side while in motion.",
        "lesson": "vocab"
      },
      {
        "term": "Lamentation",
        "def": "The act of expressing grief.",
        "lesson": "vocab"
      },
      {
        "term": "Incursion",
        "def": "A hostile entrance into or invasion of a place or territory, especially a sudden one.",
        "lesson": "vocab"
      },
      {
        "term": "Ravine",
        "def": "A narrow, steep-sided valley, commonly eroded by running water.",
        "lesson": "vocab"
      },
      {
        "term": "Sullen",
        "def": "Showing irritation or ill humor by gloomy silence or reserve.",
        "lesson": "vocab"
      },
      {
        "term": "Herd",
        "def": "A number of animals kept feeding together; a drove or flock.",
        "lesson": "vocab"
      },
      {
        "term": "Famine",
        "def": "An extreme and general scarcity of food, as in a country or a large geographical area.",
        "lesson": "vocab"
      },
      {
        "term": "Scour",
        "def": "To remove dirt, grease, etc., or to cleanse or polish by hard rubbing, as with a rough or abrasive material.",
        "lesson": "vocab"
      },
      {
        "term": "Delusion",
        "def": "A false belief or opinion.",
        "lesson": "vocab"
      },
      {
        "term": "Zenith",
        "def": "The point on the celestial sphere vertically above a given position.",
        "lesson": "vocab"
      },
      {
        "term": "Rookery",
        "def": "A breeding place or colony of gregarious birds or animals, such as penguins and seals.",
        "lesson": "vocab"
      },
      {
        "term": "Beachmaster",
        "def": "A bull fur seal that has its own territory in the breeding grounds.",
        "lesson": "vocab"
      },
      {
        "term": "Flipper",
        "def": "A broad, flat limb, as of a seal or whale, especially adapted for swimming.",
        "lesson": "vocab"
      },
      {
        "term": "Shoal",
        "def": "A place where the sea, a river, or another body of water is shallow.",
        "lesson": "vocab"
      },
      {
        "term": "Vagabond",
        "def": "Wandering from place to place without any settled home; nomadic.",
        "lesson": "vocab"
      },
      {
        "term": "Gregarious",
        "def": "Living in a flock or herd, as animals.",
        "lesson": "vocab"
      },
      {
        "term": "Why do the Bandar-log (the Monkey-People) kidnap Mowgli, and why do Baloo and Bagheera seek Kaa's help to rescue him?",
        "def": "The Bandar-log kidnap Mowgli because they want him in their tribe to teach them how to weave twigs together and because they crave the attention and status of having a human in their pack. Baloo and Bagheera seek out Kaa because the monkeys are terrified of the rock python, as he is the only creature in the jungle who can outmaneuver them in the trees and hypnotize them with his dance.",
        "lesson": "sa",
        "front": "Question · Kaa's Hunting",
        "back": "Model answer"
      },
      {
        "term": "How does Mowgli successfully defeat and kill Shere Khan the tiger?",
        "def": "Mowgli uses his knowledge of the village's herd of buffaloes to trap Shere Khan. With the help of Akela and the Lone Wolf, Mowgli divides the herd into two groups. They trap Shere Khan at the bottom of a steep ravine, forcing the buffaloes to stampede through it from both ends, which tramples the tiger to death.",
        "lesson": "sa",
        "front": "Question · Tiger! Tiger!",
        "back": "Model answer"
      },
      {
        "term": "What motivates Kotick to spend years searching the oceans, and what does he ultimately discover?",
        "def": "Kotick is motivated by the horror of witnessing human sealers slaughter a group of young seals. He vows to find a safe island where humans cannot go so his people can live in peace. After years of searching, he discovers hidden beaches protected by a treacherous, underwater wall of rock that humans cannot navigate.",
        "lesson": "sa",
        "front": "Question · The White Seal",
        "back": "Model answer"
      }
    ],
    "tests": [
      {
        "id": "vocab",
        "name": "Vocabulary Quiz",
        "desc": "All 20 words · 4 choices each · shuffled",
        "shuffle": true,
        "questions": [
          {
            "id": "v01",
            "lesson": "vocab",
            "q": "What does the word \"Outcast\" mean?",
            "choices": [
              "To spread or be spread in a scattered fashion or at irregular intervals.",
              "A broad, flat limb, as of a seal or whale, especially adapted for swimming.",
              "A number of animals kept feeding together; a drove or flock.",
              "Someone or something that is cast out or rejected, as from home or society."
            ],
            "answer": 3,
            "explain": "Outcast: Someone or something that is cast out or rejected, as from home or society."
          },
          {
            "id": "v02",
            "lesson": "vocab",
            "q": "What does the word \"Ankus\" mean?",
            "choices": [
              "A false belief or opinion.",
              "Living in a flock or herd, as animals.",
              "An elephant goad of India with a spike and a hook at one end.",
              "A broad, flat limb, as of a seal or whale, especially adapted for swimming."
            ],
            "answer": 2,
            "explain": "Ankus: An elephant goad of India with a spike and a hook at one end."
          },
          {
            "id": "v03",
            "lesson": "vocab",
            "q": "What does the word \"Covert\" mean?",
            "choices": [
              "A narrow, steep-sided valley, commonly eroded by running water.",
              "A broad, flat limb, as of a seal or whale, especially adapted for swimming.",
              "A breeding place or colony of gregarious birds or animals, such as penguins and seals.",
              "Concealed or disguised; secret."
            ],
            "answer": 3,
            "explain": "Covert: Concealed or disguised; secret."
          },
          {
            "id": "v04",
            "lesson": "vocab",
            "q": "What does the word \"Straggle\" mean?",
            "choices": [
              "To remove dirt, grease, etc., or to cleanse or polish by hard rubbing, as with a rough or abrasive material.",
              "A breeding place or colony of gregarious birds or animals, such as penguins and seals.",
              "Concealed or disguised; secret.",
              "To spread or be spread in a scattered fashion or at irregular intervals."
            ],
            "answer": 3,
            "explain": "Straggle: To spread or be spread in a scattered fashion or at irregular intervals."
          },
          {
            "id": "v05",
            "lesson": "vocab",
            "q": "What does the word \"Careen\" mean?",
            "choices": [
              "To lean, sway, or tip to one side while in motion.",
              "To spread or be spread in a scattered fashion or at irregular intervals.",
              "A bull fur seal that has its own territory in the breeding grounds.",
              "A number of animals kept feeding together; a drove or flock."
            ],
            "answer": 0,
            "explain": "Careen: To lean, sway, or tip to one side while in motion."
          },
          {
            "id": "v06",
            "lesson": "vocab",
            "q": "What does the word \"Lamentation\" mean?",
            "choices": [
              "A narrow, steep-sided valley, commonly eroded by running water.",
              "The act of expressing grief.",
              "To spread or be spread in a scattered fashion or at irregular intervals.",
              "An elephant goad of India with a spike and a hook at one end."
            ],
            "answer": 1,
            "explain": "Lamentation: The act of expressing grief."
          },
          {
            "id": "v07",
            "lesson": "vocab",
            "q": "What does the word \"Incursion\" mean?",
            "choices": [
              "Someone or something that is cast out or rejected, as from home or society.",
              "A place where the sea, a river, or another body of water is shallow.",
              "A hostile entrance into or invasion of a place or territory, especially a sudden one.",
              "Living in a flock or herd, as animals."
            ],
            "answer": 2,
            "explain": "Incursion: A hostile entrance into or invasion of a place or territory, especially a sudden one."
          },
          {
            "id": "v08",
            "lesson": "vocab",
            "q": "What does the word \"Ravine\" mean?",
            "choices": [
              "An extreme and general scarcity of food, as in a country or a large geographical area.",
              "To spread or be spread in a scattered fashion or at irregular intervals.",
              "A false belief or opinion.",
              "A narrow, steep-sided valley, commonly eroded by running water."
            ],
            "answer": 3,
            "explain": "Ravine: A narrow, steep-sided valley, commonly eroded by running water."
          },
          {
            "id": "v09",
            "lesson": "vocab",
            "q": "What does the word \"Sullen\" mean?",
            "choices": [
              "Showing irritation or ill humor by gloomy silence or reserve.",
              "A number of animals kept feeding together; a drove or flock.",
              "An extreme and general scarcity of food, as in a country or a large geographical area.",
              "To spread or be spread in a scattered fashion or at irregular intervals."
            ],
            "answer": 0,
            "explain": "Sullen: Showing irritation or ill humor by gloomy silence or reserve."
          },
          {
            "id": "v10",
            "lesson": "vocab",
            "q": "What does the word \"Herd\" mean?",
            "choices": [
              "An extreme and general scarcity of food, as in a country or a large geographical area.",
              "A number of animals kept feeding together; a drove or flock.",
              "To lean, sway, or tip to one side while in motion.",
              "A narrow, steep-sided valley, commonly eroded by running water."
            ],
            "answer": 1,
            "explain": "Herd: A number of animals kept feeding together; a drove or flock."
          },
          {
            "id": "v11",
            "lesson": "vocab",
            "q": "What does the word \"Famine\" mean?",
            "choices": [
              "An extreme and general scarcity of food, as in a country or a large geographical area.",
              "A hostile entrance into or invasion of a place or territory, especially a sudden one.",
              "Someone or something that is cast out or rejected, as from home or society.",
              "The act of expressing grief."
            ],
            "answer": 0,
            "explain": "Famine: An extreme and general scarcity of food, as in a country or a large geographical area."
          },
          {
            "id": "v12",
            "lesson": "vocab",
            "q": "What does the word \"Scour\" mean?",
            "choices": [
              "The point on the celestial sphere vertically above a given position.",
              "To remove dirt, grease, etc., or to cleanse or polish by hard rubbing, as with a rough or abrasive material.",
              "A false belief or opinion.",
              "A place where the sea, a river, or another body of water is shallow."
            ],
            "answer": 1,
            "explain": "Scour: To remove dirt, grease, etc., or to cleanse or polish by hard rubbing, as with a rough or abrasive material."
          },
          {
            "id": "v13",
            "lesson": "vocab",
            "q": "What does the word \"Delusion\" mean?",
            "choices": [
              "A false belief or opinion.",
              "A broad, flat limb, as of a seal or whale, especially adapted for swimming.",
              "An elephant goad of India with a spike and a hook at one end.",
              "The act of expressing grief."
            ],
            "answer": 0,
            "explain": "Delusion: A false belief or opinion."
          },
          {
            "id": "v14",
            "lesson": "vocab",
            "q": "What does the word \"Zenith\" mean?",
            "choices": [
              "A narrow, steep-sided valley, commonly eroded by running water.",
              "To spread or be spread in a scattered fashion or at irregular intervals.",
              "A bull fur seal that has its own territory in the breeding grounds.",
              "The point on the celestial sphere vertically above a given position."
            ],
            "answer": 3,
            "explain": "Zenith: The point on the celestial sphere vertically above a given position."
          },
          {
            "id": "v15",
            "lesson": "vocab",
            "q": "What does the word \"Rookery\" mean?",
            "choices": [
              "The point on the celestial sphere vertically above a given position.",
              "A place where the sea, a river, or another body of water is shallow.",
              "A breeding place or colony of gregarious birds or animals, such as penguins and seals.",
              "A broad, flat limb, as of a seal or whale, especially adapted for swimming."
            ],
            "answer": 2,
            "explain": "Rookery: A breeding place or colony of gregarious birds or animals, such as penguins and seals."
          },
          {
            "id": "v16",
            "lesson": "vocab",
            "q": "What does the word \"Beachmaster\" mean?",
            "choices": [
              "Wandering from place to place without any settled home; nomadic.",
              "A number of animals kept feeding together; a drove or flock.",
              "A bull fur seal that has its own territory in the breeding grounds.",
              "To remove dirt, grease, etc., or to cleanse or polish by hard rubbing, as with a rough or abrasive material."
            ],
            "answer": 2,
            "explain": "Beachmaster: A bull fur seal that has its own territory in the breeding grounds."
          },
          {
            "id": "v17",
            "lesson": "vocab",
            "q": "What does the word \"Flipper\" mean?",
            "choices": [
              "A place where the sea, a river, or another body of water is shallow.",
              "A breeding place or colony of gregarious birds or animals, such as penguins and seals.",
              "A broad, flat limb, as of a seal or whale, especially adapted for swimming.",
              "Showing irritation or ill humor by gloomy silence or reserve."
            ],
            "answer": 2,
            "explain": "Flipper: A broad, flat limb, as of a seal or whale, especially adapted for swimming."
          },
          {
            "id": "v18",
            "lesson": "vocab",
            "q": "What does the word \"Shoal\" mean?",
            "choices": [
              "A number of animals kept feeding together; a drove or flock.",
              "Living in a flock or herd, as animals.",
              "A place where the sea, a river, or another body of water is shallow.",
              "To spread or be spread in a scattered fashion or at irregular intervals."
            ],
            "answer": 2,
            "explain": "Shoal: A place where the sea, a river, or another body of water is shallow."
          },
          {
            "id": "v19",
            "lesson": "vocab",
            "q": "What does the word \"Vagabond\" mean?",
            "choices": [
              "Wandering from place to place without any settled home; nomadic.",
              "To remove dirt, grease, etc., or to cleanse or polish by hard rubbing, as with a rough or abrasive material.",
              "A place where the sea, a river, or another body of water is shallow.",
              "A bull fur seal that has its own territory in the breeding grounds."
            ],
            "answer": 0,
            "explain": "Vagabond: Wandering from place to place without any settled home; nomadic."
          },
          {
            "id": "v20",
            "lesson": "vocab",
            "q": "What does the word \"Gregarious\" mean?",
            "choices": [
              "Living in a flock or herd, as animals.",
              "A place where the sea, a river, or another body of water is shallow.",
              "Showing irritation or ill humor by gloomy silence or reserve.",
              "An extreme and general scarcity of food, as in a country or a large geographical area."
            ],
            "answer": 0,
            "explain": "Gregarious: Living in a flock or herd, as animals."
          }
        ]
      },
      {
        "id": "sa",
        "name": "Short Answer Review",
        "desc": "6 questions on the three short-answer prompts · shuffled",
        "shuffle": true,
        "questions": [
          {
            "id": "sa1",
            "lesson": "sa",
            "q": "Why do the Bandar-log (the Monkey-People) kidnap Mowgli?",
            "choices": [
              "They want him in their tribe to teach them how to weave twigs together, and they crave the attention and status of having a human in their pack.",
              "They saw human sealers slaughter young seals and want Mowgli to help them find a safe island.",
              "They want Mowgli to help them trap a tiger at the bottom of a steep ravine.",
              "They want Mowgli to hypnotize the rock python with a dance."
            ],
            "answer": 0,
            "explain": "The Bandar-log want him in their tribe to teach them to weave twigs together, and they crave the attention and status of having a human in their pack."
          },
          {
            "id": "sa2",
            "lesson": "sa",
            "q": "Why do Baloo and Bagheera seek Kaa's help to rescue Mowgli?",
            "choices": [
              "Kaa is the only creature in the jungle who can teach the monkeys to weave twigs together.",
              "Kaa knows the village's herd of buffaloes and can divide it into two groups.",
              "The monkeys are terrified of the rock python, the only creature in the jungle who can outmaneuver them in the trees and hypnotize them with his dance.",
              "Kaa can lead them to a safe island where humans cannot go."
            ],
            "answer": 2,
            "explain": "The monkeys are terrified of Kaa, the rock python, who can outmaneuver them in the trees and hypnotize them with his dance."
          },
          {
            "id": "sa3",
            "lesson": "sa",
            "q": "What does Mowgli use to trap Shere Khan the tiger?",
            "choices": [
              "A hypnotic dance that puts the tiger under a spell.",
              "His knowledge of the village's herd of buffaloes.",
              "A treacherous, underwater wall of rock that cannot be navigated.",
              "His skill at weaving twigs together into a trap."
            ],
            "answer": 1,
            "explain": "Mowgli uses his knowledge of the village's herd of buffaloes to trap Shere Khan."
          },
          {
            "id": "sa4",
            "lesson": "sa",
            "q": "How is Shere Khan finally killed?",
            "choices": [
              "Kaa hypnotizes Shere Khan with his dance, and the tiger can no longer move.",
              "Human sealers slaughter Shere Khan on the beach.",
              "Shere Khan is trapped behind a wall of rock under the ocean.",
              "With help from Akela and the Lone Wolf, Mowgli divides the buffalo herd into two groups, traps Shere Khan at the bottom of a steep ravine, and the buffaloes stampede through from both ends and trample him."
            ],
            "answer": 3,
            "explain": "Mowgli, Akela and the Lone Wolf divide the herd into two groups and trap Shere Khan at the bottom of a steep ravine. The buffaloes stampede through it from both ends and trample the tiger to death."
          },
          {
            "id": "sa5",
            "lesson": "sa",
            "q": "What motivates Kotick to spend years searching the oceans?",
            "choices": [
              "He wants to teach the other seals how to weave twigs together.",
              "He is horrified by the sight of human sealers slaughtering a group of young seals, and he vows to find a safe island where humans cannot go so his people can live in peace.",
              "He wants the attention and status of having a human in his pack.",
              "He wants to trap Shere Khan with a herd of buffaloes."
            ],
            "answer": 1,
            "explain": "Kotick is motivated by the horror of witnessing human sealers slaughter young seals. He vows to find a safe island where humans cannot go so his people can live in peace."
          },
          {
            "id": "sa6",
            "lesson": "sa",
            "q": "After years of searching, what does Kotick ultimately discover?",
            "choices": [
              "A steep ravine where humans cannot follow.",
              "A village with a herd of buffaloes.",
              "Hidden beaches protected by a treacherous, underwater wall of rock that humans cannot navigate.",
              "A tribe of monkeys who crave the attention of humans."
            ],
            "answer": 2,
            "explain": "After years of searching, Kotick discovers hidden beaches protected by a treacherous, underwater wall of rock that humans cannot navigate."
          }
        ]
      }
    ]
  },
  {
    "id": "math",
    "name": "Math",
    "emoji": "➗",
    "tagline": "Mid-Mission 2 Review (Ratios)",
    "intro": "Pick a mode to get ready for the Math Mid-Mission 2 Review on ratios. Type your answers and see right away if you got them! 💪",
    "lessons": [
      {
        "id": "A",
        "name": "Topic A · What are Ratios?"
      },
      {
        "id": "B",
        "name": "Topic B · Equivalent Ratios"
      },
      {
        "id": "C",
        "name": "Topic C · Representing Equivalent Ratios"
      }
    ],
    "notes": [
      {
        "id": "a",
        "short": "A · Ratios",
        "title": "Topic A: What are Ratios?",
        "html": "\n<h2>Topic A: What are Ratios?</h2>\n<ul>\n<li>A <strong>ratio</strong> compares two (or more) amounts.</li>\n<li>You can write it 3 ways: <strong>4:8</strong>, <strong>4 to 8</strong>, or <strong>4/8</strong>.</li>\n<li><strong>Order matters!</strong> “Apples to bananas” means the apples number goes <em>first</em>. 4 apples to 8 bananas is 4:8, but bananas to apples is 8:4.</li>\n<li>A ratio can compare 3 things too: 4 L orange to 7 L strawberry to 9 L apple is <strong>4:7:9</strong>.</li>\n<li>Many ratios can be <strong>simplified</strong> by dividing both numbers by the same number: 4:8 ÷ 4 = <strong>1:2</strong>.</li>\n</ul>\n<h3>Tip for typing answers</h3>\n<ul><li>Type a ratio like <strong>4:8</strong>, <strong>4 to 8</strong>, or <strong>4/8</strong>. A simplified ratio like 1:2 counts too.</li>\n<li>Numbers can be <strong>5.5</strong> or <strong>5 1/2</strong>. You don't have to type the units.</li></ul>\n"
      },
      {
        "id": "b",
        "short": "B · Equivalent",
        "title": "Topic B: Equivalent Ratios",
        "html": "\n<h2>Topic B: Equivalent Ratios</h2>\n<ul>\n<li><strong>Equivalent ratios</strong> show the same relationship. You get one by <strong>multiplying or dividing BOTH numbers by the same number</strong>.</li>\n<li>2:10 × 2 = 4:20 → equivalent ✓</li>\n<li>1:2 × 4 = 4:8, <em>not</em> 4:12 → 1:2 and 4:12 are <strong>not</strong> equivalent ✗</li>\n<li>Quick check: <strong>simplify both</strong> and see if they match. 18:24 ÷ 6 = 3:4 ✓ &nbsp; 30:40 ÷ 10 = 3:4 ✓</li>\n</ul>\n<h3>Recipes</h3>\n<ul>\n<li><strong>Double</strong> a recipe → multiply every amount by 2. 4 cups flour : 1 tsp chips → <strong>8 : 2</strong>.</li>\n<li><strong>Triple</strong> a recipe → multiply every amount by 3 → <strong>12 : 3</strong>.</li>\n<li>Doubling or tripling keeps the <strong>same taste</strong> (equivalent ratio).</li>\n<li>To change the taste (like more chocolatey), change the ratio: <strong>more chocolate chips for the same flour</strong>.</li>\n</ul>\n"
      },
      {
        "id": "c",
        "short": "C · Number lines",
        "title": "Topic C: Representing Equivalent Ratios",
        "html": "\n<h2>Topic C: Representing Equivalent Ratios</h2>\n<ul>\n<li>A <strong>double number line</strong> has two lines that line up. Numbers straight above/below each other go together.</li>\n<li>Whatever you do to one line (× or ÷), do the <strong>same</strong> to the other line.</li>\n</ul>\n<svg class=\"dnl\" viewBox=\"0 0 360 140\" role=\"img\" aria-label=\"double number line\"><text class=\"lb\" x=\"6\" y=\"40\">Burgers</text><text class=\"lb\" x=\"6\" y=\"56\">(#)</text><line class=\"ln\" x1=\"92\" y1=\"44\" x2=\"350\" y2=\"44\"/><polyline class=\"ln\" points=\"100,38 92,44 100,50\"/><polyline class=\"ln\" points=\"342,38 350,44 342,50\"/><line class=\"tk\" x1=\"104\" y1=\"36\" x2=\"104\" y2=\"52\"/><text class=\"nm\" x=\"104\" y=\"30\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"135.7\" y1=\"36\" x2=\"135.7\" y2=\"52\"/><text class=\"nm\" x=\"135.7\" y=\"30\" text-anchor=\"middle\">1</text><line class=\"tk\" x1=\"326\" y1=\"36\" x2=\"326\" y2=\"52\"/><text class=\"nm\" x=\"326\" y=\"30\" text-anchor=\"middle\">7</text><text class=\"lb\" x=\"6\" y=\"94\">Price</text><text class=\"lb\" x=\"6\" y=\"110\">($)</text><line class=\"ln\" x1=\"92\" y1=\"98\" x2=\"350\" y2=\"98\"/><polyline class=\"ln\" points=\"100,92 92,98 100,104\"/><polyline class=\"ln\" points=\"342,92 350,98 342,104\"/><line class=\"tk\" x1=\"104\" y1=\"90\" x2=\"104\" y2=\"106\"/><text class=\"nm\" x=\"104\" y=\"124\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"135.7\" y1=\"90\" x2=\"135.7\" y2=\"106\"/><text class=\"nm\" x=\"135.7\" y=\"124\" text-anchor=\"middle\">8</text><line class=\"tk\" x1=\"326\" y1=\"90\" x2=\"326\" y2=\"106\"/><text class=\"nm\" x=\"326\" y=\"124\" text-anchor=\"middle\">56</text></svg>\n<ul>\n<li>The <strong>unit price</strong> (or <strong>unit rate</strong>) is the amount for <strong>1</strong>. 7 burgers for $56 → divide both by 7 → <strong>$8 for 1 burger</strong>.</li>\n<li>Grace: 2 miles in 11 minutes → ÷ 2 → <strong>1 mile in 5.5 minutes</strong>. 55 minutes is 11 × 5, so she runs 2 × 5 = <strong>10 miles</strong>.</li>\n</ul>\n<h3>Which tastes stronger?</h3>\n<ul>\n<li>Find the amount <strong>per 1 cup</strong> of milk for each recipe, then compare.</li>\n<li>Matthew: 5 cups oreos ÷ 4 cups milk = <strong>1.25</strong>. AJ: 7 ÷ 5 = <strong>1.4</strong>. Bigger number = more oreo-y → <strong>AJ</strong>.</li>\n</ul>\n"
      }
    ],
    "flashcards": [
      {
        "term": "Ratio",
        "def": "A comparison of two or more amounts, like 4 apples to 8 bananas.",
        "lesson": "A",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "3 ways to write a ratio",
        "def": "4:8, 4 to 8, or 4/8",
        "lesson": "A",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "Does order matter in a ratio?",
        "def": "Yes! “Apples to bananas” means apples go first: 4:8, not 8:4.",
        "lesson": "A",
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Simplify 4:8",
        "def": "Divide both by 4 → 1:2",
        "lesson": "A",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "Orange 4 L, strawberry 7 L, apple 9 L. Ratio orange : strawberry : apple?",
        "def": "4:7:9",
        "lesson": "A",
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Equivalent ratios",
        "def": "Ratios that show the same relationship. Multiply or divide BOTH numbers by the same number.",
        "lesson": "B",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "How do you check if two ratios are equivalent?",
        "def": "Simplify both (or multiply one) and see if they match.",
        "lesson": "B",
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Double 4 cups flour : 1 tsp chips",
        "def": "8 cups flour : 2 tsp chips",
        "lesson": "B",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "Triple 4 cups flour : 1 tsp chips",
        "def": "12 cups flour : 3 tsp chips",
        "lesson": "B",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "Is 1:2 equivalent to 4:12?",
        "def": "No. 1:2 = 4:8. 4:12 simplifies to 1:3.",
        "lesson": "B",
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Double number line",
        "def": "Two lined-up number lines that show equivalent ratios. Do the same × or ÷ to both lines.",
        "lesson": "C",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "Unit price / unit rate",
        "def": "The amount for ONE. Example: $56 for 7 burgers → $56 ÷ 7 = $8 per burger.",
        "lesson": "C",
        "front": "Term",
        "back": "Meaning"
      },
      {
        "term": "2 miles in 11 minutes → 1 mile?",
        "def": "Divide both by 2 → 5.5 minutes",
        "lesson": "C",
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "How to compare which recipe is stronger",
        "def": "Find the amount per 1 cup for each (divide), then compare.",
        "lesson": "C",
        "front": "Term",
        "back": "Meaning"
      }
    ],
    "tests": [
      {
        "id": "review",
        "name": "Mid-Mission 2 Review",
        "desc": "All 13 questions from the review sheet, in order",
        "questions": [
          {
            "id": "m1",
            "lesson": "A",
            "type": "input",
            "q": "1) What is the ratio of apples to bananas in this image?",
            "visual": "<div class=\"emoji-row\" aria-label=\"4 apples and 8 bananas\"><span class=\"grp\"><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span></span><span class=\"grp\"><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span></span></div>",
            "fields": [
              {
                "kind": "ratio",
                "value": [
                  4,
                  8
                ],
                "label": "apples : bananas",
                "placeholder": "e.g. 3:5"
              }
            ],
            "answerText": "4:8 (which simplifies to 1:2)",
            "explain": "Count each fruit: 4 apples and 8 bananas. Apples come first because the question says apples TO bananas, so it's 4:8. Dividing both by 4 gives 1:2, so 1:2 is also correct."
          },
          {
            "id": "m2",
            "lesson": "A",
            "type": "input",
            "q": "2) To make fruit punch Joe mixed 4 liters of orange juice and 7 liters of strawberry juice and 9 liters of apple juice. a) The ratio of orange juice to strawberry juice to apple juice is __ : __ : __ ?",
            "visual": "<div class=\"juice\"><span>🍊 Orange: 4 L</span><span>🍓 Strawberry: 7 L</span><span>🍏 Apple: 9 L</span></div>",
            "fields": [
              {
                "kind": "ratio",
                "value": [
                  4,
                  7,
                  9
                ],
                "label": "orange : strawberry : apple",
                "placeholder": "e.g. 1:2:3"
              }
            ],
            "answerText": "4:7:9",
            "explain": "Write the amounts in the same order the juices are named: 4 liters orange, 7 liters strawberry, 9 liters apple → 4:7:9. (You can also say “4 to 7 to 9.”)"
          },
          {
            "id": "m3a",
            "lesson": "B",
            "type": "input",
            "q": "In a recipe for cookies Adam used 4 cups of flour and 1 teaspoon of chocolate chips. 3a) How can Adam double his recipe?",
            "fields": [
              {
                "kind": "number",
                "value": 8,
                "label": "Flour",
                "unit": "cups"
              },
              {
                "kind": "number",
                "value": 2,
                "label": "Chocolate chips",
                "unit": "tsp"
              }
            ],
            "answerText": "8 cups of flour and 2 teaspoons of chocolate chips",
            "explain": "Doubling means multiplying BOTH amounts by 2: 4 × 2 = 8 cups of flour and 1 × 2 = 2 teaspoons of chocolate chips. The ratio 8:2 is equivalent to 4:1, so the cookies taste the same."
          },
          {
            "id": "m3b",
            "lesson": "B",
            "q": "In a recipe for cookies Adam used 4 cups of flour and 1 teaspoon of chocolate chips. 3b) How can Adam make his cookies taste more chocolatey?",
            "choices": [
              "Add more chocolate chips but keep the same 4 cups of flour",
              "Add more flour but keep the same 1 teaspoon of chocolate chips",
              "Double both the flour and the chocolate chips",
              "Triple both the flour and the chocolate chips"
            ],
            "answer": 0,
            "explain": "To taste more chocolatey, the ratio of chocolate chips to flour has to go UP: more chocolate chips for the same flour (or less flour for the same chips). Doubling or tripling both keeps an equivalent ratio, so it would taste the same."
          },
          {
            "id": "m3c",
            "lesson": "B",
            "type": "input",
            "q": "In a recipe for cookies Adam used 4 cups of flour and 1 teaspoon of chocolate chips. 3c) How can Adam triple his recipe?",
            "fields": [
              {
                "kind": "number",
                "value": 12,
                "label": "Flour",
                "unit": "cups"
              },
              {
                "kind": "number",
                "value": 3,
                "label": "Chocolate chips",
                "unit": "tsp"
              }
            ],
            "answerText": "12 cups of flour and 3 teaspoons of chocolate chips",
            "explain": "Tripling means multiplying BOTH amounts by 3: 4 × 3 = 12 cups of flour and 1 × 3 = 3 teaspoons of chocolate chips. 12:3 is equivalent to 4:1."
          },
          {
            "id": "m4",
            "lesson": "B",
            "q": "Are these ratios equivalent? 4) 2:10 and 4:20",
            "answer": 0,
            "choices": [
              "Yes",
              "No"
            ],
            "yn": true,
            "keepOrder": true,
            "label": "Yes or No?",
            "explain": "Yes. Multiply both parts of 2:10 by 2 and you get 4:20. Both simplify to 1:5."
          },
          {
            "id": "m5",
            "lesson": "B",
            "q": "Are these ratios equivalent? 5) 1:2 and 4:12",
            "answer": 1,
            "choices": [
              "Yes",
              "No"
            ],
            "yn": true,
            "keepOrder": true,
            "label": "Yes or No?",
            "explain": "No. Multiplying 1:2 by 4 gives 4:8, not 4:12. 4:12 simplifies to 1:3, which is different from 1:2."
          },
          {
            "id": "m6",
            "lesson": "B",
            "q": "Are these ratios equivalent? 6) 3:4 and 18:24",
            "answer": 0,
            "choices": [
              "Yes",
              "No"
            ],
            "yn": true,
            "keepOrder": true,
            "label": "Yes or No?",
            "explain": "Yes. Multiply both parts of 3:4 by 6: 3 × 6 = 18 and 4 × 6 = 24, so 18:24 = 3:4."
          },
          {
            "id": "m7",
            "lesson": "B",
            "q": "Are these ratios equivalent? 7) 30:40 and 3:4",
            "answer": 0,
            "choices": [
              "Yes",
              "No"
            ],
            "yn": true,
            "keepOrder": true,
            "label": "Yes or No?",
            "explain": "Yes. Divide both parts of 30:40 by 10 and you get 3:4."
          },
          {
            "id": "m8",
            "lesson": "C",
            "type": "input",
            "q": "8) A store is selling 7 burgers for $56, what is the unit price of the burgers?",
            "visual": "<svg class=\"dnl\" viewBox=\"0 0 360 140\" role=\"img\" aria-label=\"double number line\"><text class=\"lb\" x=\"6\" y=\"40\">Burgers</text><text class=\"lb\" x=\"6\" y=\"56\">(#)</text><line class=\"ln\" x1=\"92\" y1=\"44\" x2=\"350\" y2=\"44\"/><polyline class=\"ln\" points=\"100,38 92,44 100,50\"/><polyline class=\"ln\" points=\"342,38 350,44 342,50\"/><line class=\"tk\" x1=\"104\" y1=\"36\" x2=\"104\" y2=\"52\"/><text class=\"nm\" x=\"104\" y=\"30\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"326\" y1=\"36\" x2=\"326\" y2=\"52\"/><text class=\"nm\" x=\"326\" y=\"30\" text-anchor=\"middle\">7</text><text class=\"lb\" x=\"6\" y=\"94\">Price</text><text class=\"lb\" x=\"6\" y=\"110\">($)</text><line class=\"ln\" x1=\"92\" y1=\"98\" x2=\"350\" y2=\"98\"/><polyline class=\"ln\" points=\"100,92 92,98 100,104\"/><polyline class=\"ln\" points=\"342,92 350,98 342,104\"/><line class=\"tk\" x1=\"104\" y1=\"90\" x2=\"104\" y2=\"106\"/><text class=\"nm\" x=\"104\" y=\"124\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"326\" y1=\"90\" x2=\"326\" y2=\"106\"/><text class=\"nm\" x=\"326\" y=\"124\" text-anchor=\"middle\">56</text></svg>",
            "fields": [
              {
                "kind": "number",
                "value": 8,
                "prefix": "$",
                "unit": "per burger",
                "placeholder": "Price of 1 burger"
              }
            ],
            "answerText": "$8 per burger",
            "explain": "Unit price = price for ONE burger. Divide both lines by 7: 7 burgers ÷ 7 = 1 burger and $56 ÷ 7 = $8. So 1 burger costs $8."
          },
          {
            "id": "m9a",
            "lesson": "C",
            "type": "input",
            "q": "9) This double line diagram shows Grace running at a constant speed. 9a) How long did it take Grace to run 1 mile?",
            "visual": "<svg class=\"dnl\" viewBox=\"0 0 360 140\" role=\"img\" aria-label=\"double number line\"><text class=\"lb\" x=\"6\" y=\"40\">Distance</text><text class=\"lb\" x=\"6\" y=\"56\">(miles)</text><line class=\"ln\" x1=\"92\" y1=\"44\" x2=\"350\" y2=\"44\"/><polyline class=\"ln\" points=\"100,38 92,44 100,50\"/><polyline class=\"ln\" points=\"342,38 350,44 342,50\"/><line class=\"tk\" x1=\"104\" y1=\"36\" x2=\"104\" y2=\"52\"/><text class=\"nm\" x=\"104\" y=\"30\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"148.4\" y1=\"36\" x2=\"148.4\" y2=\"52\"/><text class=\"nm\" x=\"148.4\" y=\"30\" text-anchor=\"middle\">2</text><text class=\"lb\" x=\"6\" y=\"94\">Time</text><text class=\"lb\" x=\"6\" y=\"110\">(minutes)</text><line class=\"ln\" x1=\"92\" y1=\"98\" x2=\"350\" y2=\"98\"/><polyline class=\"ln\" points=\"100,92 92,98 100,104\"/><polyline class=\"ln\" points=\"342,92 350,98 342,104\"/><line class=\"tk\" x1=\"104\" y1=\"90\" x2=\"104\" y2=\"106\"/><text class=\"nm\" x=\"104\" y=\"124\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"148.4\" y1=\"90\" x2=\"148.4\" y2=\"106\"/><text class=\"nm\" x=\"148.4\" y=\"124\" text-anchor=\"middle\">11</text></svg>",
            "fields": [
              {
                "kind": "number",
                "value": 5.5,
                "unit": "minutes",
                "placeholder": "e.g. 4.5",
                "alsoAccept": [
                  "5:30",
                  "5 min 30 sec",
                  "5 min 30 s",
                  "5 minutes 30 seconds",
                  "5 minutes and 30 seconds",
                  "5 and a half",
                  "5 and a half minutes",
                  "five and a half",
                  "five and a half minutes"
                ]
              }
            ],
            "answerText": "5.5 minutes (5½ minutes, or 5 minutes 30 seconds)",
            "explain": "2 miles takes 11 minutes. To get to 1 mile, divide both by 2: 2 ÷ 2 = 1 mile and 11 ÷ 2 = 5.5 minutes."
          },
          {
            "id": "m9b",
            "lesson": "C",
            "type": "input",
            "q": "9) Grace runs 2 miles in 11 minutes at a constant speed. 9b) At this rate, how far could Grace run in 55 minutes?",
            "visual": "<svg class=\"dnl\" viewBox=\"0 0 360 140\" role=\"img\" aria-label=\"double number line\"><text class=\"lb\" x=\"6\" y=\"40\">Distance</text><text class=\"lb\" x=\"6\" y=\"56\">(miles)</text><line class=\"ln\" x1=\"92\" y1=\"44\" x2=\"350\" y2=\"44\"/><polyline class=\"ln\" points=\"100,38 92,44 100,50\"/><polyline class=\"ln\" points=\"342,38 350,44 342,50\"/><line class=\"tk\" x1=\"104\" y1=\"36\" x2=\"104\" y2=\"52\"/><text class=\"nm\" x=\"104\" y=\"30\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"148.4\" y1=\"36\" x2=\"148.4\" y2=\"52\"/><text class=\"nm\" x=\"148.4\" y=\"30\" text-anchor=\"middle\">2</text><text class=\"lb\" x=\"6\" y=\"94\">Time</text><text class=\"lb\" x=\"6\" y=\"110\">(minutes)</text><line class=\"ln\" x1=\"92\" y1=\"98\" x2=\"350\" y2=\"98\"/><polyline class=\"ln\" points=\"100,92 92,98 100,104\"/><polyline class=\"ln\" points=\"342,92 350,98 342,104\"/><line class=\"tk\" x1=\"104\" y1=\"90\" x2=\"104\" y2=\"106\"/><text class=\"nm\" x=\"104\" y=\"124\" text-anchor=\"middle\">0</text><line class=\"tk\" x1=\"148.4\" y1=\"90\" x2=\"148.4\" y2=\"106\"/><text class=\"nm\" x=\"148.4\" y=\"124\" text-anchor=\"middle\">11</text></svg>",
            "fields": [
              {
                "kind": "number",
                "value": 10,
                "unit": "miles",
                "placeholder": "Number of miles"
              }
            ],
            "answerText": "10 miles",
            "explain": "55 minutes is 5 times 11 minutes (11 × 5 = 55). Multiply the distance by 5 too: 2 × 5 = 10 miles."
          },
          {
            "id": "m10",
            "lesson": "C",
            "q": "10) Matthew and AJ are making oreo smoothies. Matthew used 4 cups of milk and 5 cups of oreos. AJ used 5 cups of milk and 7 cups of oreos. Whose recipe will taste more like oreos?",
            "choices": [
              "AJ's recipe",
              "Matthew's recipe",
              "They will taste the same"
            ],
            "answer": 0,
            "explain": "Compare cups of oreos for each 1 cup of milk. Matthew: 5 ÷ 4 = 1.25 cups of oreos per cup of milk. AJ: 7 ÷ 5 = 1.4 cups of oreos per cup of milk. 1.4 is more than 1.25, so AJ's tastes more like oreos."
          }
        ]
      }
    ]
  },
{
  "id": "socialstudies",
  "name": "Social Studies",
  "emoji": "🏯",
  "tagline": "U5L2: Early Dynasties — Shang & Zhou",
  "intro": "Pick a mode to get ready for the Shang & Zhou Dynasties test. You've got this! 💪",
  "lessons": [
    {
      "id": 1,
      "name": "Part 1 · Shang Dynasty"
    },
    {
      "id": 2,
      "name": "Part 2 · Zhou Dynasty"
    }
  ],
  "notes": [
    {
      "id": "shang",
      "short": "Shang",
      "title": "Part 1: The Shang Dynasty",
      "html": "<h2>The Shang Dynasty</h2><p><em>Target: describe how the Shang impacted ancient China.</em></p><ul><li><strong>Dynasty:</strong> When one family rules a country or region for a long time; a new dynasty begins when a new family takes control.</li><li><strong>Son of Heaven:</strong> The Shang priest-king, expected to keep good relations between the worldly and heavenly realms.</li><li><strong>Anyang:</strong> Center of the Shang Dynasty, on the North China Plain by the Yellow River.</li><li><strong>Warlords:</strong> Military leaders (nobles) with their own armies, appointed by Shang kings to govern conquered lands.</li><li><strong>Oracle bones:</strong> Used by Shang kings to contact gods and ancestors before big decisions; thousands found by archaeologists.</li><li><strong>Shang Di:</strong> The Shang supreme god.</li><li><strong>Pleasing the gods:</strong> Gods could bring good or bad fortune, so people offered gifts.</li><li><strong>Characters:</strong> The symbols of Chinese writing, written with a brush; an art form then and now.</li><li><strong>First written language:</strong> The Shang were the first dynasty to write and record their history.</li><li><strong>Honoring ancestors today:</strong> Burning small paper copies of food, clothing and items at temples for the afterlife.</li><li><strong>Bronze:</strong> Shang made some of the finest bronze artifacts: urns, sculptures, weapons, wine vessels.</li><li><strong>Silk:</strong> Made from silkworms; China's most guarded secret; used as currency; a status symbol commoners couldn't wear.</li><li><strong>Why the Shang lost power:</strong> Huge rich–poor gap; kings lived in luxury and were cruel, losing the people's support.</li></ul>"
    },
    {
      "id": "zhou",
      "short": "Zhou",
      "title": "Part 2: The Zhou Dynasty",
      "html": "<h2>The Zhou Dynasty</h2><p><em>Target: describe how the Zhou shaped ancient China.</em></p><ul><li><strong>Zhou (pronounced JOH):</strong> Dynasty that overthrew the Shang; larger, less harsh, preferred farming; lasted 800 years — the longest.</li><li><strong>Wen Wang:</strong> Aristocrat who planned the rebellion; his son crossed the Yellow River and defeated the Shang.</li><li><strong>Mandate:</strong> Having the authority to act in a certain way.</li><li><strong>Mandate of Heaven:</strong> Zhou belief that kings ruled because heaven gave them the authority; Zhou worshipped heaven instead of a supreme god.</li><li><strong>Saddles & stirrups:</strong> Invented by the Chinese in the Zhou era so soldiers could ride horses while throwing spears.</li></ul>"
    }
  ],
  "flashcards": [
    {
      "term": "Dynasty",
      "def": "When one family rules a country or region for a long time; a new dynasty begins when a new family takes control.",
      "lesson": 1
    },
    {
      "term": "Son of Heaven",
      "def": "The Shang priest-king, expected to keep good relations between the worldly and heavenly realms.",
      "lesson": 1
    },
    {
      "term": "Anyang",
      "def": "Center of the Shang Dynasty, on the North China Plain by the Yellow River.",
      "lesson": 1
    },
    {
      "term": "Warlords",
      "def": "Military leaders (nobles) with their own armies, appointed by Shang kings to govern conquered lands.",
      "lesson": 1
    },
    {
      "term": "Oracle bones",
      "def": "Used by Shang kings to contact gods and ancestors before big decisions; thousands found by archaeologists.",
      "lesson": 1
    },
    {
      "term": "Shang Di",
      "def": "The Shang supreme god.",
      "lesson": 1
    },
    {
      "term": "Pleasing the gods",
      "def": "Gods could bring good or bad fortune, so people offered gifts.",
      "lesson": 1
    },
    {
      "term": "Characters",
      "def": "The symbols of Chinese writing, written with a brush; an art form then and now.",
      "lesson": 1
    },
    {
      "term": "First written language",
      "def": "The Shang were the first dynasty to write and record their history.",
      "lesson": 1
    },
    {
      "term": "Honoring ancestors today",
      "def": "Burning small paper copies of food, clothing and items at temples for the afterlife.",
      "lesson": 1
    },
    {
      "term": "Bronze",
      "def": "Shang made some of the finest bronze artifacts: urns, sculptures, weapons, wine vessels.",
      "lesson": 1
    },
    {
      "term": "Silk",
      "def": "Made from silkworms; China's most guarded secret; used as currency; a status symbol commoners couldn't wear.",
      "lesson": 1
    },
    {
      "term": "Why the Shang lost power",
      "def": "Huge rich–poor gap; kings lived in luxury and were cruel, losing the people's support.",
      "lesson": 1
    },
    {
      "term": "Zhou (pronounced JOH)",
      "def": "Dynasty that overthrew the Shang; larger, less harsh, preferred farming; lasted 800 years — the longest.",
      "lesson": 2
    },
    {
      "term": "Wen Wang",
      "def": "Aristocrat who planned the rebellion; his son crossed the Yellow River and defeated the Shang.",
      "lesson": 2
    },
    {
      "term": "Mandate",
      "def": "Having the authority to act in a certain way.",
      "lesson": 2
    },
    {
      "term": "Mandate of Heaven",
      "def": "Zhou belief that kings ruled because heaven gave them the authority; Zhou worshipped heaven instead of a supreme god.",
      "lesson": 2
    },
    {
      "term": "Saddles & stirrups",
      "def": "Invented by the Chinese in the Zhou era so soldiers could ride horses while throwing spears.",
      "lesson": 2
    }
  ],
  "tests": [
    {
      "id": "u5l2",
      "name": "Shang & Zhou Dynasties (U5L2) Test",
      "desc": "35 multiple choice + 3 short answer · shuffled",
      "shuffle": true,
      "questions": [
        {
          "id": "ss1",
          "lesson": 1,
          "q": "What is a dynasty?",
          "choices": [
            "When a group of farmers shares the land",
            "When a country holds an election every year",
            "When one family rules a country or region for a long period of time",
            "When an army rules for one short battle"
          ],
          "answer": 2,
          "explain": "A dynasty is when one family rules a country or region for a long time. A new dynasty begins when a new family takes control."
        },
        {
          "id": "ss2",
          "lesson": 1,
          "q": "When does a new dynasty begin?",
          "choices": [
            "When the king has a birthday",
            "When a new family takes control",
            "When the Yellow River floods",
            "When a new god is worshipped"
          ],
          "answer": 1,
          "explain": "A new dynasty starts when a new family takes control."
        },
        {
          "id": "ss3",
          "lesson": 1,
          "q": "The Shang ruler was a kind of priest-king known as the…",
          "choices": [
            "Lord of the River",
            "King of Bronze",
            "Master of Silk",
            "Son of Heaven"
          ],
          "answer": 3,
          "explain": "The Shang ruler was called the Son of Heaven and was expected to keep good relations between the worldly and heavenly realms."
        },
        {
          "id": "ss4",
          "lesson": 1,
          "q": "Near what city was the Shang Dynasty centered, on the North China Plain?",
          "choices": [
            "Anyang",
            "Luoyang",
            "Chang'an",
            "Beijing"
          ],
          "answer": 0,
          "explain": "The map shows the Shang centered near Anyang, by the Yellow River."
        },
        {
          "id": "ss5",
          "lesson": 1,
          "q": "Which river was the Shang Dynasty located by?",
          "choices": [
            "The Yellow River",
            "The Nile River",
            "The Tigris River",
            "The Indus River"
          ],
          "answer": 0,
          "explain": "The Shang were on the North China Plain by the Yellow River."
        },
        {
          "id": "ss6",
          "lesson": 1,
          "q": "How did the Shang kings get more land after starting with only a small area?",
          "choices": [
            "They sent out armies to conquer surrounding lands",
            "They bought land with gold coins",
            "They traded silk for land",
            "Neighbors gave them land as gifts"
          ],
          "answer": 0,
          "explain": "At first the Shang controlled a small area, but they sent armies to conquer surrounding lands."
        },
        {
          "id": "ss7",
          "lesson": 1,
          "q": "Who did Shang kings appoint to govern conquered territories?",
          "choices": [
            "Farmers",
            "Merchants",
            "Warlords",
            "Priests from other lands"
          ],
          "answer": 2,
          "explain": "Shang kings appointed warlords to govern conquered territories."
        },
        {
          "id": "ss8",
          "lesson": 1,
          "q": "What were warlords?",
          "choices": [
            "Military leaders who led their own armies",
            "Farmers who raised silkworms",
            "Artists who made bronze vases",
            "Scribes who wrote on oracle bones"
          ],
          "answer": 0,
          "explain": "Warlords were military leaders with their own armies. They were nobles, which helped Shang kings stay in power."
        },
        {
          "id": "ss9",
          "lesson": 1,
          "q": "Much of what we know about the Shang comes from thousands of what objects found by archaeologists?",
          "choices": [
            "Clay tablets",
            "Oracle bones",
            "Paper books",
            "Stone pyramids"
          ],
          "answer": 1,
          "explain": "Archaeologists found thousands of oracle bones that teach us about the Shang."
        },
        {
          "id": "ss10",
          "lesson": 1,
          "q": "Why did Shang kings use oracle bones?",
          "choices": [
            "To contact gods and ancestors before important decisions",
            "To count their silk",
            "To build bridges",
            "To make weapons"
          ],
          "answer": 0,
          "explain": "An important duty of the king was contacting gods and ancestors before big decisions, using oracle bones."
        },
        {
          "id": "ss11",
          "lesson": 1,
          "q": "Shang kings believed they got their WISDOM from…",
          "choices": [
            "Their ancestors",
            "Foreign kings",
            "Their warlords",
            "Merchants"
          ],
          "answer": 0,
          "explain": "Shang kings believed their power came from the gods and their wisdom came from their ancestors."
        },
        {
          "id": "ss12",
          "lesson": 1,
          "q": "What was the name of the Shang supreme god?",
          "choices": [
            "Wen Wang",
            "Anyang",
            "Zhou",
            "Shang Di"
          ],
          "answer": 3,
          "explain": "The Shang worshipped many gods plus a supreme god, Shang Di."
        },
        {
          "id": "ss13",
          "lesson": 1,
          "q": "How did Shang people try to please their gods?",
          "choices": [
            "By building the Great Wall",
            "By writing letters with a pen",
            "By wearing silk",
            "By offering gifts"
          ],
          "answer": 3,
          "explain": "Gods could bring good or bad fortune, so people offered them gifts."
        },
        {
          "id": "ss14",
          "lesson": 1,
          "q": "Where did the Shang believe their gods lived?",
          "choices": [
            "In rivers, mountains and seas",
            "Only in the king's palace",
            "In bronze vases",
            "Under the oracle bones"
          ],
          "answer": 0,
          "explain": "The Shang believed gods lived in rivers, mountains and seas."
        },
        {
          "id": "ss15",
          "lesson": 1,
          "q": "The Shang were the first dynasty in China to…",
          "choices": [
            "Ride horses with saddles",
            "Have a written language and record their history",
            "Worship heaven",
            "Last 800 years"
          ],
          "answer": 1,
          "explain": "The Shang were the first dynasty to have a written language and record their history."
        },
        {
          "id": "ss16",
          "lesson": 1,
          "q": "In Chinese writing, the symbols are called…",
          "choices": [
            "Characters",
            "Letters",
            "Hieroglyphs",
            "Numbers"
          ],
          "answer": 0,
          "explain": "Chinese writing uses symbols called characters, written with a brush."
        },
        {
          "id": "ss17",
          "lesson": 1,
          "q": "What tool is used to write Chinese characters, both then and now?",
          "choices": [
            "A pencil",
            "A stone chisel",
            "A feather quill",
            "A brush"
          ],
          "answer": 3,
          "explain": "A brush is the writing tool, and Chinese writing is an art form."
        },
        {
          "id": "ss18",
          "lesson": 1,
          "q": "How do many Chinese people still honor their ancestors today?",
          "choices": [
            "By burning small paper copies of food, clothing and other items at temples",
            "By building bronze statues of them",
            "By sending them silk",
            "By writing on oracle bones"
          ],
          "answer": 0,
          "explain": "The paper copies stand for things the departed need in the afterlife."
        },
        {
          "id": "ss19",
          "lesson": 1,
          "q": "The Shang created some of the finest artifacts ever made out of which metal?",
          "choices": [
            "Bronze",
            "Gold",
            "Iron",
            "Silver"
          ],
          "answer": 0,
          "explain": "Shang bronze artifacts include urns for grain, sculptures, weapons and wine vessels."
        },
        {
          "id": "ss20",
          "lesson": 1,
          "q": "Silk is made from…",
          "choices": [
            "Cotton plants",
            "Silkworms",
            "Sheep's wool",
            "Tree bark"
          ],
          "answer": 1,
          "explain": "Shang farmers learned to make silk from silkworms they raised."
        },
        {
          "id": "ss21",
          "lesson": 1,
          "q": "Why was silk such an important secret?",
          "choices": [
            "For centuries silk was made only in China, and the secret was closely guarded",
            "Silk was poisonous",
            "Only gods could make silk",
            "Silk was made from bronze"
          ],
          "answer": 0,
          "explain": "The secret of making silk was the most guarded secret in China's history."
        },
        {
          "id": "ss22",
          "lesson": 1,
          "q": "Silk was so precious it was even used as…",
          "choices": [
            "Building material for houses",
            "Food for horses",
            "Fuel for fires",
            "A form of currency (money)"
          ],
          "answer": 3,
          "explain": "Silk was so valuable it was used like money."
        },
        {
          "id": "ss23",
          "lesson": 1,
          "q": "Who was NOT allowed to wear silk?",
          "choices": [
            "Common people",
            "Kings",
            "Nobles",
            "Aristocrats"
          ],
          "answer": 0,
          "explain": "Silk was a status symbol, and common people were prohibited from wearing it."
        },
        {
          "id": "ss24",
          "lesson": 1,
          "q": "Why did the Shang kings lose the support of the people?",
          "choices": [
            "They gave away too much silk",
            "They lived in luxury and treated people cruelly",
            "They stopped using oracle bones",
            "They moved the capital to Egypt"
          ],
          "answer": 1,
          "explain": "There was a huge gap between rich and poor, and the cruel, luxurious kings lost the people's support."
        },
        {
          "id": "ss25",
          "lesson": 2,
          "q": "Who planned the rebellion to overthrow the Shang?",
          "choices": [
            "Wen Wang",
            "Shang Di",
            "The Son of Anyang",
            "A merchant from Luoyang"
          ],
          "answer": 0,
          "explain": "Wen Wang, a powerful aristocrat, planned the rebellion. His son led the army that defeated the Shang."
        },
        {
          "id": "ss26",
          "lesson": 2,
          "q": "Who actually led the army across the Yellow River to defeat the Shang?",
          "choices": [
            "Wen Wang's brother",
            "Wen Wang's son",
            "Shang Di",
            "A Shang warlord"
          ],
          "answer": 1,
          "explain": "Wen Wang's son led the army across the Yellow River and started the Zhou Dynasty."
        },
        {
          "id": "ss27",
          "lesson": 2,
          "q": "How did Zhou kings rule compared to Shang kings?",
          "choices": [
            "Much more cruelly",
            "With no king at all",
            "Much like them, but not as harshly",
            "Exactly like Egyptian pharaohs"
          ],
          "answer": 2,
          "explain": "Zhou kings ruled much like the Shang, but not as harshly."
        },
        {
          "id": "ss28",
          "lesson": 2,
          "q": "The Zhou people preferred ___ over invading.",
          "choices": [
            "Fishing at sea",
            "Building pyramids",
            "Sailing",
            "Farming"
          ],
          "answer": 3,
          "explain": "The Zhou were civilized and preferred farming over invading."
        },
        {
          "id": "ss29",
          "lesson": 2,
          "q": "About how long did the Zhou Dynasty last?",
          "choices": [
            "80 years",
            "800 years, the longest of all dynasties",
            "200 years",
            "2,000 years"
          ],
          "answer": 1,
          "explain": "The Zhou lasted 800 years, the longest of all Chinese dynasties."
        },
        {
          "id": "ss30",
          "lesson": 2,
          "q": "What does 'mandate' mean?",
          "choices": [
            "Having the authority to act in a certain way",
            "A kind of bronze vase",
            "A type of silk cloth",
            "A war chariot"
          ],
          "answer": 0,
          "explain": "Mandate means having the authority to act in a certain way."
        },
        {
          "id": "ss31",
          "lesson": 2,
          "q": "What did Zhou kings claim gave them the right to rule China?",
          "choices": [
            "Oracle bones",
            "The Silk Secret",
            "The Mandate of Heaven",
            "The Bronze Law"
          ],
          "answer": 2,
          "explain": "Zhou kings said they ruled because they had the Mandate of Heaven."
        },
        {
          "id": "ss32",
          "lesson": 2,
          "q": "How did Zhou worship change from the Shang?",
          "choices": [
            "They stopped believing in anything",
            "They moved from worshipping a supreme god to worshipping heaven",
            "They worshipped only silkworms",
            "They worshipped the Shang kings"
          ],
          "answer": 1,
          "explain": "The Zhou switched from a supreme god (Shang Di) to worshipping heaven."
        },
        {
          "id": "ss33",
          "lesson": 2,
          "q": "Which inventions did the Chinese create first during the Zhou Dynasty?",
          "choices": [
            "Saddles and stirrups",
            "Paper and printing",
            "Wheels and chariots",
            "Bronze and silk"
          ],
          "answer": 0,
          "explain": "Warriors switched from chariots to horses, so the Chinese invented saddles and stirrups."
        },
        {
          "id": "ss34",
          "lesson": 2,
          "q": "Why were saddles and stirrups useful to Zhou soldiers?",
          "choices": [
            "They made chariots faster",
            "They let soldiers ride horses while throwing spears",
            "They helped farmers plant rice",
            "They kept silk safe"
          ],
          "answer": 1,
          "explain": "Saddles and stirrups let soldiers ride and throw spears at the same time."
        },
        {
          "id": "ss35",
          "lesson": 2,
          "q": "Which dynasty covered a LARGER area, including Luoyang and Chang'an?",
          "choices": [
            "Shang",
            "Neither — they were the same size",
            "Zhou",
            "Egypt"
          ],
          "answer": 2,
          "explain": "The Zhou became larger than the Shang."
        },
        {
          "id": "ssa1",
          "lesson": 1,
          "type": "input",
          "q": "Short answer: Why was silk in such high demand for trading? (one sentence)",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "china",
                  "secret",
                  "only",
                  "precious",
                  "valu",
                  "rare",
                  "status",
                  "currency",
                  "money"
                ]
              ],
              "placeholder": "Type your answer"
            }
          ],
          "answerText": "Silk was made only in China and its making was a closely guarded secret, so it was rare, precious, a status symbol and even used as money.",
          "explain": "Any answer mentioning it was only made in China / secret / precious / used as money counts."
        },
        {
          "id": "ssa2",
          "lesson": 1,
          "type": "input",
          "q": "Short answer: Name ONE way the Shang kings tried to make decisions or stay in power.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "oracle",
                  "warlord",
                  "ancestor",
                  "god",
                  "noble",
                  "army",
                  "armies"
                ]
              ],
              "placeholder": "Type your answer"
            }
          ],
          "answerText": "They used oracle bones to contact gods and ancestors, and appointed warlords (nobles with armies) to govern conquered lands.",
          "explain": "Oracle bones or warlords are both great answers."
        },
        {
          "id": "ssa3",
          "lesson": 2,
          "type": "input",
          "q": "Short answer: What is the Mandate of Heaven?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "heaven"
                ],
                [
                  "right",
                  "authority",
                  "rule",
                  "power",
                  "allow"
                ]
              ],
              "placeholder": "Type your answer"
            }
          ],
          "answerText": "The Zhou belief that kings ruled China because heaven gave them the authority (right) to rule.",
          "explain": "Your answer should mention heaven AND the right/authority to rule."
        }
      ]
    }
  ]
},
{
  "id": "ela-jungle-whole",
  "name": "ELA: Jungle Book",
  "emoji": "🐯",
  "tagline": "Whole Book Test (11/18)",
  "intro": "Pick a mode to get ready for the Jungle Book whole-book test on 11/18. Study guide, flashcards, then the practice test. You've got this! 💪",
  "lessons": [
    {
      "id": "jb",
      "name": "Jungle Book"
    },
    {
      "id": "sjb",
      "name": "Second Book"
    },
    {
      "id": "themes",
      "name": "Themes"
    },
    {
      "id": "chars",
      "name": "Characters"
    }
  ],
  "notes": [
    {
      "id": "jb",
      "short": "Book 1",
      "title": "The Jungle Book (Questions 1–8)",
      "html": "<h2>The Jungle Book (Questions 1–8)</h2>\n<p>These stories are in the first book. Read each answer, then say it back in your own words. Your test is <strong>11/18</strong>.</p>\n<h3>1. Mowgli's Brothers — the price for Mowgli</h3>\n<p><strong>What price does Bagheera pay to buy Mowgli's acceptance into the Seeonee Wolf Pack?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> A bull, and a fat one, newly killed. The Law says that if the pack is unsure about a cub, his life can be bought with a bull killed near Council Rock. Bagheera the black panther pays that price, so the pack accepts Mowgli.</p></div>\n<h3>2. Mowgli's Brothers — the Red Flower</h3>\n<p><strong>How does Mowgli defend himself and Akela when Shere Khan tries to take over Council Rock?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Mowgli steals a pot of fire — the Red Flower — from the village. He lights a branch, beats Shere Khan over the head with it, and singes him. The wolves are terrified of fire, so he drives them off and saves Akela, the Lone Wolf, from being killed.</p></div>\n<h3>3. Kaa's Hunting — the rescue</h3>\n<p><strong>How does Kaa rescue Mowgli from the Bandar-log at the Cold Lairs?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> The monkeys trap Mowgli in a ruined summer-house. Baloo and Bagheera fight them first and are almost beaten. Then Kaa the python arrives, scatters the monkeys with huge blows, and smashes the marble wall so Mowgli can jump free. After that, Kaa's Hunger Dance hypnotizes the monkeys so they cannot chase the three friends. (The dance comes after the rescue. It even starts to pull Baloo and Bagheera in, so Mowgli leads them away.)</p></div>\n<h3>4. Tiger! Tiger! — the ravine</h3>\n<p><strong>How does Mowgli trap and defeat Shere Khan in the ravine?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Grey Brother and Akela (the Lone Wolf — they are two wolves, not the same wolf) help him split the village buffalo herd. Akela drives the bulls to the top of the dry ravine. Grey Brother holds the cows at the bottom so Shere Khan cannot slip out. Mowgli rides the lead bull, Rama, and the herd stampedes from both ends. The buffaloes trample Shere Khan to death. Mowgli skins him and later pegs the hide on Council Rock.</p></div>\n<h3>5. Tiger! Tiger! — driven out of the village</h3>\n<p><strong>Why do the villagers turn against Mowgli and exile him after he kills Shere Khan?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Buldeo, the hunter, wanted the 100-rupee reward and the tiger's hide. When he sees Mowgli give orders to Akela, he runs home with a story of sorcery. The villagers throw stones and shout \"Sorcerer! Wolf's brat! Jungle-demon!\" The priest waves them on. Messua warns Mowgli that they say he is a wizard who can turn into a beast. He leaves the village. He will not let the wolves hurt the people, because Messua was kind to him.</p></div>\n<h3>6. The White Seal — the guide</h3>\n<p><strong>Who finally guides Kotick to the secret, hunter-free island sanctuary?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Sea Cow (the sea cows). The walrus Sea Vitch only tells Kotick to go ask Sea Cow. Sea cows cannot talk, so Kotick follows them. They swim north and lead him through a long, dark tunnel under the sea to quiet beaches where men cannot land. Kotick then brings the other seals there.</p></div>\n<h3>7. Rikki-Tikki-Tavi — the last egg</h3>\n<p><strong>Why does Rikki-tikki leave one of Nagaina's eggs intact?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> He smashes the other eggs, then grabs the last one and races to the veranda. Nagaina is coiled by Teddy's chair, ready to strike. Rikki-tikki uses that last egg as bait: \"the very last of the brood.\" Nagaina turns away from Teddy to save it, and Teddy's father pulls the boy to safety. Rikki-tikki then follows her and finishes the fight.</p></div>\n<h3>8. Toomai of the Elephants and Her Majesty's Servants</h3>\n<p><strong>What common theme connects the animals to their human handlers?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Trust, loyalty, and obedience between animals and the people who know them. In \"Toomai of the Elephants,\" Kala Nag trusts Little Toomai, takes him to the secret elephant dance, and the drivers honor the boy because the elephants accept him. In \"Her Majesty's Servants,\" the camp animals — horses, mules, camels, bullocks, and elephants — each obey a rider or driver. The army works only because every animal and handler does a job and trusts the chain of command.</p></div>"
    },
    {
      "id": "sjb",
      "short": "Book 2",
      "title": "The Second Jungle Book (Questions 9–17)",
      "html": "<h2>The Second Jungle Book (Questions 9–17)</h2>\n<p>These stories finish Mowgli's life in the jungle and add other tales. Same test: <strong>11/18</strong>.</p>\n<h3>9. How Fear Came — the Water Truce</h3>\n<p><strong>Why are all the jungle animals allowed to drink together at the Waingunga without hunting each other?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> A terrible drought has dried the river until the Peace Rock shows. Hathi the elephant proclaims the Water Truce, as his father did before him. While the truce lasts, it is death to kill at the drinking places, so hunter and hunted can drink side by side.</p></div>\n<h3>10. How Fear Came — the First Tiger</h3>\n<p><strong>What mistake did the First Tiger make that brought shame and stripes upon his kind?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Tha, the First of the Elephants, made the First Tiger the judge of the jungle. In those days the tiger was yellow, with no stripes, and he ate fruit and grass. One night a buck pushed him. The tiger forgot he was the judge and broke the buck's neck. That was the first death in the jungle, so Death got in — and Fear followed. Tha ordered the trees and creepers to mark the killer. They drew stripes on his hide as he ran to the cave of Fear (Man). Tigers still wear those stripes of shame.</p></div>\n<h3>11. The Miracle of Purun Bhagat</h3>\n<p><strong>How do the wild Himalayan animals repay Purun Dass for sharing his food and shelter?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Purun Dass gives up his power, becomes the holy man Purun Bhagat, and shares his shrine and food with the animals. On a stormy night they will not sit by the fire. The langur monkey and the barasingh deer warn him that the mountain is falling. He rides the deer down to the village, leads the people across the valley to high ground, and dies after they are safe. The villagers call it a miracle.</p></div>\n<h3>12. Letting in the Jungle — why nobody is killed</h3>\n<p><strong>Why does Mowgli refuse to let the jungle animals kill the villagers when the town is destroyed?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> The young elephant says \"Kill, then.\" Mowgli answers that bones do him no good. Hathi asks, \"There will be no killing?\" because he does not want the smell of an old slaughter. Mowgli agrees: \"I do not wish even their bones to lie on the clean earth. Let them go and find a fresh lair.\" He has smelled the blood of Messua, the woman who fed him and whom the village would have killed. Only new grass on their doorsteps can take that smell away. So the animals let the jungle swallow the fields and huts, and the people run. He does not give \"hunters will come\" as his reason.</p></div>\n<h3>13. The Undertakers — the mugger's ending</h3>\n<p><strong>What ironic fate befalls the giant mugger crocodile?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> The mugger boasts about eating people. He still dreams of one miss: a little white child in a boat whose hands slipped between his teeth. The child's mother fired a pistol. Years later that same person — now an Englishman about five at the time, who built the railway bridge — shoots the mugger dead from the bridge with a heavy rifle. The child he failed to eat grows up and kills him.</p></div>\n<h3>14. The King's Ankus</h3>\n<p><strong>What happens to the jeweled goad after Mowgli throws it away?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> The ankus is an elephant goad, jeweled and cruel. The White Cobra who guards the treasure under the Cold Lairs warns that it is Death. Mowgli throws it into the forest. Six men die for it in one night: each killer is killed by the next, and the last deaths come by poison (the \"Apple of Death\"). Mowgli says the fault was his for bringing a man-thing into the jungle. He throws the ankus back into the treasure vault so it cannot kill again.</p></div>\n<h3>15. Quiquern</h3>\n<p><strong>What does the mysterious spirit dog Quiquern turn out to be?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> Not a spirit. Kotuko's two sled dogs got fastened together: the black leader's harness loop caught in the copper collar of Kotuko the dog. Side by side they looked like one animal with eight legs and two heads. That \"Quiquern\" led Kotuko and the girl over the ice to a safe islet and to food.</p></div>\n<h3>16. Red Dog</h3>\n<p><strong>How does Mowgli use the Little People of the Rocks to defeat the dholes?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> The Little People are the wild black bees of the Bee Rocks. Mowgli rubs himself with garlic so they will not sting him, then taunts the dholes (the red dogs) and races them across the rocks. He kicks the bee-hives open and leaps into the Waingunga, where Kaa's coils catch him. The bees rise in a roaring cloud, sting the pack, and many dholes fall into the river. The current sweeps them downstream to the wolves, who finish the fight.</p></div>\n<h3>17. The Spring Running</h3>\n<p><strong>Why does Mowgli feel sorrowful and out of place during the Time of New Talk?</strong></p>\n<div class=\"callout\"><p><strong>Answer:</strong> The Time of New Talk is spring, when the jungle runs, sings, and is full of new life. Mowgli runs too, but it does not quiet him. He is growing into a man. He feels a second step on his trail and is drawn toward people. Kaa tells him, \"Man goes to Man at the last, though the Jungle does not cast him out.\" He says goodbye to Baloo, Kaa, and the wolves and returns to humankind. The sorrow is the ache of not fitting the jungle anymore.</p></div>"
    },
    {
      "id": "themes",
      "short": "Themes",
      "title": "Cross-Book Themes (Questions 18–20)",
      "html": "<h2>Cross-Book Themes (Questions 18–20)</h2>\n<p>These are \"best answer\" ideas. Learn the model answer, then practice choosing the strongest choice on the quiz.</p>\n<h3>18. How Mowgli's identity changes</h3>\n<p><strong>How does Mowgli's identity shift from the beginning of <em>The Jungle Book</em> to the end of <em>The Second Jungle Book</em>?</strong></p>\n<div class=\"callout\"><p><strong>Model answer:</strong> At the start he is a baby bought into the Seeonee pack with a bull. He grows up as a wolf-brother and becomes Master of the Jungle, using the Law, fire, and his friends to beat Shere Khan. People cast him out as a sorcerer, but the jungle does not. By <em>The Spring Running</em> he is no longer at home in the Time of New Talk. He accepts that he is a man and goes back to people, with the jungle still his to call on. He moves from wolf-cub, to master between two worlds, to a young man who chooses humankind.</p></div>\n<h3>19. The Law of the Jungle and human laws</h3>\n<p><strong>Compare the Law of the Jungle with the laws and behavior of human society in these stories.</strong></p>\n<div class=\"callout\"><p><strong>Model answer:</strong> The Law of the Jungle is strict but fair. It tells animals how to hunt, how to buy a cub's life, when not to kill at the water (the Water Truce), and that a punishment settles the score with no nagging afterward. It protects the pack. Human society in the stories is often greedy, superstitious, and cruel: Buldeo wants the reward and calls Mowgli a demon, the village stones him and would kill Messua, and six men murder one another for a jeweled ankus. Kipling does not say every person is bad — Messua is kind, and some handlers truly know their animals — but the Law looks orderly next to human fear and greed.</p></div>\n<h3>20. Why the standalone stories matter</h3>\n<p><strong>How do stories like \"The White Seal,\" \"Rikki-Tikki-Tavi,\" and \"Quiquern\" reinforce the Mowgli tales?</strong></p>\n<div class=\"callout\"><p><strong>Model answer:</strong> They are not about Mowgli, but they repeat his themes in new places. Kotick searches the sea until he finds a home safe from hunters, just as Mowgli has to find where he belongs. Rikki-tikki shows courage and loyalty by protecting Teddy's family, the way Baloo, Bagheera, and Kaa protect Mowgli. Kotuko, lost on the ice, is led to safety by loyalty he does not understand at first. All three put a smaller hero against a dangerous world and ask what courage, loyalty, and a safe place to belong are worth. They also keep the nature-and-people theme: animals and humans share one world, sometimes as partners and sometimes as enemies.</p></div>"
    },
    {
      "id": "chars",
      "short": "Characters",
      "title": "Characters to Know",
      "html": "<h2>Characters to Know</h2>\n<div class=\"key-terms\">\n<p class=\"term-row\"><strong>Mowgli</strong> — The man's cub, raised by wolves. Becomes Master of the Jungle, then returns to people.</p>\n<p class=\"term-row\"><strong>Mother Wolf (Raksha)</strong> — Adopts Mowgli and defies Shere Khan at the cave.</p>\n<p class=\"term-row\"><strong>Akela</strong> — The Lone Wolf. Leader of the Seeonee pack until he misses a kill. Helps Mowgli trap Shere Khan.</p>\n<p class=\"term-row\"><strong>Grey Brother</strong> — Eldest of Mother Wolf's cubs and Mowgli's closest wolf brother. Brings news and helps drive the buffaloes.</p>\n<p class=\"term-row\"><strong>Baloo</strong> — The sleepy brown bear who teaches Mowgli the Law of the Jungle.</p>\n<p class=\"term-row\"><strong>Bagheera</strong> — The black panther. Buys Mowgli's place in the pack with a bull and gives him sharp advice.</p>\n<p class=\"term-row\"><strong>Shere Khan</strong> — The lame tiger (Lungri). Hunts Mowgli and is trampled by the buffaloes.</p>\n<p class=\"term-row\"><strong>Kaa</strong> — The great rock python. Breaks Mowgli out of the summer-house, dances the Hunger Dance, and catches him under the Bee Rocks.</p>\n<p class=\"term-row\"><strong>Bandar-log</strong> — The Monkey People. They have no Law, kidnap Mowgli, and take him to the Cold Lairs.</p>\n<p class=\"term-row\"><strong>Hathi</strong> — The wild elephant. Proclaims the Water Truce and, with his sons, lets the jungle into the village.</p>\n<p class=\"term-row\"><strong>Messua</strong> — The village woman who takes Mowgli in as her son. The pack will not harm the village because she was kind.</p>\n<p class=\"term-row\"><strong>Buldeo</strong> — The village hunter. Wants the tiger reward and tells the priest Mowgli is a sorcerer.</p>\n<p class=\"term-row\"><strong>Kotick</strong> — The white seal who spends years finding beaches where seal hunters cannot go.</p>\n<p class=\"term-row\"><strong>Sea Cow</strong> — The huge, silent sea cows who lead Kotick through the underwater tunnel.</p>\n<p class=\"term-row\"><strong>Rikki-tikki-tavi</strong> — A brave mongoose who saves Teddy's family from the cobras Nag and Nagaina.</p>\n<p class=\"term-row\"><strong>Nagaina</strong> — Nag's wife. She tries to kill Teddy to get her garden back. Rikki-tikki lures her off with her last egg.</p>\n<p class=\"term-row\"><strong>Little Toomai</strong> — An elephant-driver's son. Kala Nag carries him to the elephants' secret dance.</p>\n<p class=\"term-row\"><strong>Purun Bhagat</strong> — Once the powerful Sir Purun Dass. As a holy man he shares his food with wild animals, and they warn him of a landslide.</p>\n<p class=\"term-row\"><strong>Kotuko</strong> — The Inuit boy in \"Quiquern.\" His two tangled dogs become the \"spirit\" that leads him to safety.</p>\n<p class=\"term-row\"><strong>Dholes</strong> — The Red Dogs, a huge wild-dog pack. Mowgli breaks them with the bees and the wolves.</p>\n<p class=\"term-row\"><strong>White Cobra</strong> — The ancient white cobra who guards the king's treasure under the Cold Lairs and calls the ankus Death.</p>\n</div>\n<h3>Quick test traps</h3>\n<div class=\"callout\">\n<p>Akela <em>is</em> the Lone Wolf. Grey Brother is a different wolf.</p>\n<p>Kaa's Hunger Dance happens <em>after</em> he breaks the wall. It is not what pulls Mowgli out.</p>\n<p>Mowgli does not spare the village because he is afraid of hunters. He refuses their bones and lets the jungle take the fields.</p>\n<p>The mugger's \"child\" was about five, not a baby in arms. The boy lives, and that man later shoots him.</p>\n<p style=\"margin-bottom:0\">Quiquern is two real dogs stuck together, not a ghost.</p>\n</div>"
    }
  ],
  "flashcards": [
    {
      "term": "In \"Mowgli's Brothers,\" what price does Bagheera pay so the pack will accept Mowgli?",
      "def": "A bull, and a fat one, newly killed, near Council Rock. The Law says a cub's life can be bought at that price.",
      "lesson": "jb",
      "front": "Question · Mowgli's Brothers",
      "back": "Answer"
    },
    {
      "term": "How does Mowgli defend himself and Akela at Council Rock?",
      "def": "He brings the Red Flower (fire) in a pot, beats Shere Khan with a burning branch, singes him, and drives the frightened wolves away.",
      "lesson": "jb",
      "front": "Question · Mowgli's Brothers",
      "back": "Answer"
    },
    {
      "term": "How does Kaa rescue Mowgli at the Cold Lairs?",
      "def": "After Baloo and Bagheera fight the monkeys, Kaa scatters the Bandar-log and smashes the summer-house wall so Mowgli can escape. Then the Hunger Dance holds the monkeys.",
      "lesson": "jb",
      "front": "Question · Kaa's Hunting",
      "back": "Answer"
    },
    {
      "term": "How does Mowgli kill Shere Khan?",
      "def": "Grey Brother and Akela split the buffalo herd and stampede it from both ends of a ravine. The buffaloes trample the tiger.",
      "lesson": "jb",
      "front": "Question · Tiger! Tiger!",
      "back": "Answer"
    },
    {
      "term": "Why do the villagers drive Mowgli out?",
      "def": "Buldeo wanted the reward for the hide. He calls Mowgli a sorcerer. The village stones him and shouts that he is a wolf-demon who can turn into a beast.",
      "lesson": "jb",
      "front": "Question · Tiger! Tiger!",
      "back": "Answer"
    },
    {
      "term": "Who leads Kotick to the safe island?",
      "def": "Sea Cow. The sea cows lead him through a dark tunnel under the sea to beaches where hunters cannot land.",
      "lesson": "jb",
      "front": "Question · The White Seal",
      "back": "Answer"
    },
    {
      "term": "Why does Rikki-tikki keep one of Nagaina's eggs?",
      "def": "He uses the last egg as bait to lure Nagaina away from Teddy on the veranda.",
      "lesson": "jb",
      "front": "Question · Rikki-Tikki-Tavi",
      "back": "Answer"
    },
    {
      "term": "What theme connects \"Toomai of the Elephants\" and \"Her Majesty's Servants\"?",
      "def": "Trust, loyalty, and obedience between animals and the people who handle them.",
      "lesson": "jb",
      "front": "Question · Toomai / Servants",
      "back": "Answer"
    },
    {
      "term": "Why may the animals drink together at the Waingunga without hunting?",
      "def": "The Water Truce. In a drought the Peace Rock shows, and Hathi forbids killing at the drinking places.",
      "lesson": "sjb",
      "front": "Question · How Fear Came",
      "back": "Answer"
    },
    {
      "term": "What mistake brought the tiger his stripes?",
      "def": "The First Tiger, the judge, killed a buck who pushed him — the first death. Trees and creepers striped him as he ran, and Death and Fear entered the jungle.",
      "lesson": "sjb",
      "front": "Question · How Fear Came",
      "back": "Answer"
    },
    {
      "term": "How do the animals repay Purun Bhagat?",
      "def": "They warn him that the mountain is falling. He leads the villagers to safety and then dies.",
      "lesson": "sjb",
      "front": "Question · Purun Bhagat",
      "back": "Answer"
    },
    {
      "term": "Why won't Mowgli let the animals kill the villagers?",
      "def": "Bones do him no good. He will not leave their bodies on the earth. He lets them run and has the jungle swallow the fields so new grass replaces the smell of Messua's blood.",
      "lesson": "sjb",
      "front": "Question · Letting in the Jungle",
      "back": "Answer"
    },
    {
      "term": "What ironic end does the mugger meet?",
      "def": "The Englishman who shoots him from the bridge is the child whose hands once slipped through the mugger's teeth. The boy was about five. The man he missed grows up and kills him.",
      "lesson": "sjb",
      "front": "Question · The Undertakers",
      "back": "Answer"
    },
    {
      "term": "What happens to the jeweled ankus after Mowgli throws it away?",
      "def": "Six men kill or are killed for it in one night. Mowgli brings it back to the White Cobra's treasure under the Cold Lairs.",
      "lesson": "sjb",
      "front": "Question · The King's Ankus",
      "back": "Answer"
    },
    {
      "term": "What is Quiquern really?",
      "def": "Kotuko's two sled dogs, stuck together by a harness and a collar, so they look like one dog with eight legs and two heads.",
      "lesson": "sjb",
      "front": "Question · Quiquern",
      "back": "Answer"
    },
    {
      "term": "How do the Little People of the Rocks defeat the dholes?",
      "def": "Mowgli (rubbed with garlic) leads the dholes over the Bee Rocks. The bees sting them. He jumps to Kaa in the river, and the wolves fight the dholes downstream.",
      "lesson": "sjb",
      "front": "Question · Red Dog",
      "back": "Answer"
    },
    {
      "term": "Why is Mowgli sorrowful in the Time of New Talk?",
      "def": "Spring fills the animals, but he is growing into a man and no longer fits the jungle. He is drawn back to people. The jungle does not cast him out.",
      "lesson": "sjb",
      "front": "Question · The Spring Running",
      "back": "Answer"
    },
    {
      "term": "How does Mowgli's identity change across the two books?",
      "def": "He begins as a wolf-cub bought with a bull, becomes Master of the Jungle, and at the end accepts that he is a man and returns to people.",
      "lesson": "themes",
      "front": "Question · Themes",
      "back": "Answer"
    },
    {
      "term": "How is the Law of the Jungle different from human behavior in the stories?",
      "def": "The Law is fair, orderly, and protects the pack. Humans are often greedy, superstitious, and cruel — though some, like Messua, are kind.",
      "lesson": "themes",
      "front": "Question · Themes",
      "back": "Answer"
    },
    {
      "term": "How do \"The White Seal,\" \"Rikki-Tikki-Tavi,\" and \"Quiquern\" fit the Mowgli stories?",
      "def": "They repeat courage, loyalty, and the search for a safe place to belong, and they show animals and people sharing one world.",
      "lesson": "themes",
      "front": "Question · Themes",
      "back": "Answer"
    },
    {
      "term": "Mowgli",
      "def": "A boy raised by the Seeonee wolves. He becomes Master of the Jungle, kills Shere Khan, and at last goes back to people.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Mother Wolf (Raksha)",
      "def": "She adopts baby Mowgli and faces Shere Khan when he comes to the cave.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Father Wolf",
      "def": "He finds the baby and, with Mother Wolf, brings Mowgli to Council Rock.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Akela",
      "def": "The Lone Wolf, leader of the pack. Mowgli saves him with fire. Later he helps stampede the buffaloes. He is not a second wolf besides \"the Lone Wolf\" — that is his name.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Grey Brother",
      "def": "Mowgli's wolf brother. He spies on Shere Khan and helps split the buffalo herd.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Baloo",
      "def": "The brown bear who teaches Mowgli the Law. He is badly hurt fighting the monkeys.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Bagheera",
      "def": "The black panther who pays a fat, newly killed bull so the pack will accept Mowgli.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Shere Khan",
      "def": "The lame tiger who wants Mowgli dead. He is singed by the Red Flower, then trampled by buffaloes in a ravine.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Kaa",
      "def": "The rock python. He smashes the summer-house wall, dances the Hunger Dance, and catches Mowgli in the river under the Bee Rocks.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Bandar-log",
      "def": "The Monkey People. Lawless and foolish, they kidnap Mowgli and carry him to the Cold Lairs, a ruined city.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Hathi",
      "def": "The wild elephant. He proclaims the Water Truce and later lets the jungle destroy the village.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Messua",
      "def": "The woman who mothers Mowgli in the village. Her kindness is why he will not let the wolves hunt the street.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Buldeo",
      "def": "The village hunter. He wants the 100 rupees for Shere Khan's hide and spreads the story that Mowgli is a sorcerer.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Kotick",
      "def": "The white seal. After he sees hunters club the seals, he searches the oceans for a beach they cannot reach.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Sea Cow",
      "def": "Silent sea cows. They guide Kotick through an underwater tunnel to the safe island. (Sea Vitch the walrus only tells him to ask them.)",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Rikki-tikki-tavi",
      "def": "A mongoose who guards an English family in India and kills the cobras Nag and Nagaina.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Nag and Nagaina",
      "def": "Two cobras. Nag is killed in the bathroom. Nagaina comes for Teddy, and Rikki-tikki lures her away with her last egg.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Little Toomai",
      "def": "A mahout's son. The elephant Kala Nag takes him to see the elephants dance, a sight no person was supposed to see.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Kala Nag",
      "def": "The old elephant who trusts Toomai's family and carries Little Toomai to the dance.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Purun Bhagat",
      "def": "Sir Purun Dass, who leaves power to live as a holy man. The animals he fed warn him of a landslide, and he saves the village.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Kotuko",
      "def": "An Inuit boy in \"Quiquern.\" Starving on the ice, he follows what he thinks is a spirit dog.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Quiquern",
      "def": "Seems to be an eight-legged spirit dog. It is really Kotuko's two dogs tangled together by harness and collar.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Dholes",
      "def": "The Red Dogs, a fierce wild pack. Mowgli leads them onto the Bee Rocks so the Little People (bees) can break them.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Little People of the Rocks",
      "def": "The wild black bees who live in the Bee Rocks. Their stings defeat most of the dholes.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "White Cobra",
      "def": "Guards the king's treasure under the Cold Lairs. He calls the jeweled ankus Death.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "The Red Flower",
      "def": "The jungle name for fire. Beasts fear it. Mowgli uses it to save Akela and drive Shere Khan off Council Rock.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Council Rock",
      "def": "The hill where the wolf pack meets. Mowgli is accepted there, and he later spreads Shere Khan's hide on the stone.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Cold Lairs",
      "def": "A ruined city where the Bandar-log live. Kaa rescues Mowgli from the summer-house there. The king's treasure is underneath.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Water Truce",
      "def": "Hathi's peace during a drought, announced when the Peace Rock shows. No killing at the drinking places.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Time of New Talk",
      "def": "Spring, when animals run and sing. Mowgli feels out of place and knows he must go to Man.",
      "lesson": "chars",
      "front": "Term",
      "back": "Definition"
    }
  ],
  "tests": [
    {
      "id": "whole",
      "name": "Whole Book Practice Test",
      "desc": "All 20 questions · multiple choice, 4 typed answers, and 3 best-answer theme questions · in test order",
      "questions": [
        {
          "id": "wb01",
          "lesson": "jb",
          "q": "1. In \"Mowgli's Brothers,\" what price does Bagheera pay to buy Mowgli's acceptance into the Seeonee Wolf Pack?",
          "choices": [
            "A bull, and a fat one, newly killed near Council Rock",
            "Shere Khan's striped hide",
            "A herd of village buffaloes",
            "The jeweled ankus from the Cold Lairs"
          ],
          "answer": 0,
          "explain": "The Law says a doubted cub's life is bought with a bull, and a fat one. Bagheera pays with a bull he has newly killed."
        },
        {
          "id": "wb02",
          "lesson": "jb",
          "q": "2. In \"Mowgli's Brothers,\" how does Mowgli defend himself and Akela when Shere Khan tries to take over Council Rock?",
          "choices": [
            "He stampedes buffaloes over the tiger at the Rock",
            "He brings the Red Flower — fire — beats Shere Khan with a burning branch, singes him, and drives the wolves off",
            "He asks Kaa to hypnotize the pack with the Hunger Dance",
            "He leads the pack across the Bee Rocks so the bees will attack Shere Khan"
          ],
          "answer": 1,
          "explain": "Bagheera tells him to steal the Red Flower from the village. Fire is the one thing the council fears. The buffalo trap comes later, in \"Tiger! Tiger!\""
        },
        {
          "id": "wb03",
          "lesson": "jb",
          "q": "3. In \"Kaa's Hunting,\" how does Kaa rescue Mowgli from the Bandar-log at the Cold Lairs?",
          "choices": [
            "Kaa's Hunger Dance pulls Mowgli out while Baloo and Bagheera are still fighting",
            "Baloo and Bagheera fight first. Kaa then scatters the monkeys and smashes the summer-house wall so Mowgli can escape. The Hunger Dance comes after, to hold the monkeys",
            "Hathi knocks the city wall down and carries Mowgli out on his trunk",
            "Mowgli walks out alone after he gives the Snake's Call, and Kaa never reaches the city"
          ],
          "answer": 1,
          "explain": "Order matters. The bears and the panther are losing. Kaa breaks the wall to free Mowgli. The Hunger Dance is how he keeps the monkeys from following — it is not the rescue itself."
        },
        {
          "id": "wb04",
          "lesson": "jb",
          "q": "4. In \"Tiger! Tiger!,\" how does Mowgli trap and defeat Shere Khan in the ravine?",
          "choices": [
            "With Grey Brother and Akela he splits the buffalo herd and stampedes it from both ends of the ravine. The buffaloes trample Shere Khan",
            "He and Buldeo shoot the tiger with the old Tower musket",
            "He sets the ravine grass on fire and burns the tiger",
            "Akela fights Shere Khan alone while Mowgli watches from the village gate"
          ],
          "answer": 0,
          "explain": "Akela drives the bulls to the head of the ravine. Grey Brother blocks the foot with the cows. Akela is the Lone Wolf — Grey Brother is a different wolf."
        },
        {
          "id": "wb05",
          "lesson": "jb",
          "type": "input",
          "label": "Short answer",
          "q": "5. In \"Tiger! Tiger!,\" why do the villagers turn against Mowgli and exile him after he kills Shere Khan?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "sorcer",
                  "wizard",
                  "magic",
                  "demon",
                  "devil",
                  "enchant",
                  "beast",
                  "turn"
                ],
                [
                  "stone",
                  "exile",
                  "cast",
                  "drove",
                  "drive",
                  "thrown",
                  "throw",
                  "shout",
                  "shoot",
                  "buldeo",
                  "priest",
                  "reward",
                  "rupee",
                  "bounty",
                  "hide"
                ]
              ],
              "placeholder": "A sentence or two is enough"
            }
          ],
          "answerText": "Buldeo wanted the 100-rupee reward and the hide. He tells a tale of sorcery. The villagers stone Mowgli and call him a sorcerer, a wolf's brat, and a jungle-demon who can turn into a beast.",
          "explain": "Include both ideas if you can: they think he is a sorcerer or demon, and they stone him or drive him out. Buldeo also wanted the bounty."
        },
        {
          "id": "wb06",
          "lesson": "jb",
          "q": "6. In \"The White Seal,\" who finally guides Kotick to the secret, hunter-free island?",
          "choices": [
            "Sea Vitch the walrus, who swims the whole way with him",
            "Kerick, a kind sealer who hides a beach from the other men",
            "Sea Cow — the sea cows lead him through a tunnel under the sea",
            "Sea Pig the porpoise, who finds the island during a storm"
          ],
          "answer": 2,
          "explain": "Sea Vitch only says, \"Go and ask Sea Cow.\" Kotick follows the sea cows north, and they lead him through a dark underwater hole to safe beaches."
        },
        {
          "id": "wb07",
          "lesson": "jb",
          "type": "input",
          "label": "Short answer",
          "q": "7. In \"Rikki-Tikki-Tavi,\" why does Rikki-tikki leave one of Nagaina's eggs intact?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "egg"
                ],
                [
                  "bait",
                  "lure",
                  "draw",
                  "away",
                  "teddy",
                  "distract",
                  "trick",
                  "save",
                  "veranda",
                  "family"
                ]
              ],
              "placeholder": "A sentence or two is enough"
            }
          ],
          "answerText": "He takes the last egg as bait and carries it to the veranda, where Nagaina is about to strike Teddy. She turns away from the boy to save the egg.",
          "explain": "Your answer should mention the egg and why he keeps it: to lure Nagaina away from Teddy or the family."
        },
        {
          "id": "wb08",
          "lesson": "jb",
          "q": "8. In \"Toomai of the Elephants\" and \"Her Majesty's Servants,\" what common theme connects the animals to their human handlers?",
          "choices": [
            "Animals should never trust a human, because every handler is a hunter",
            "Both stories are about Mowgli learning to ride in the queen's army",
            "Trust, loyalty, and obedience: Kala Nag accepts Toomai, and the camp animals each obey the person who handles them",
            "The theme is that fire, the Red Flower, is the only way to control elephants and horses"
          ],
          "answer": 2,
          "explain": "Toomai is honored because the elephants trust him. The camp animals in \"Her Majesty's Servants\" explain how each one obeys a driver so the whole army can work."
        },
        {
          "id": "wb09",
          "lesson": "sjb",
          "q": "9. In \"How Fear Came,\" why are the jungle animals temporarily allowed to drink together at the Waingunga without hunting each other?",
          "choices": [
            "Mowgli orders a holiday after he kills Shere Khan",
            "The Water Truce: a great drought uncovers the Peace Rock, and Hathi forbids killing at the drinking places",
            "The First Tiger promises one night a year when no animal may be afraid",
            "The monkeys declare peace at the Cold Lairs"
          ],
          "answer": 1,
          "explain": "When the Peace Rock shows, Hathi proclaims the Water Truce. Until the rains return, hunter and hunted may drink side by side."
        },
        {
          "id": "wb10",
          "lesson": "sjb",
          "q": "10. In Hathi's tale in \"How Fear Came,\" what mistake did the First Tiger make that brought shame and stripes?",
          "choices": [
            "He was born striped, and he refused Tha's offer to be judge of the jungle",
            "He was the judge, but when a buck pushed him he killed it — the first death. The trees and creepers striped him as he ran, and Death and Fear entered the jungle",
            "He showed mercy to Man, so Tha painted him as a punishment for being too kind",
            "The Gray Ape scratched the stripes into him for telling the truth"
          ],
          "answer": 1,
          "explain": "He forgot he was judge and broke the buck's neck. That killing let Death in, and Fear followed. The stripes are the mark Tha ordered so the killer could be known."
        },
        {
          "id": "wb11",
          "lesson": "sjb",
          "q": "11. In \"The Miracle of Purun Bhagat,\" how do the wild animals repay him for sharing food and shelter?",
          "choices": [
            "They plow his fields and bring him gold from the village",
            "They warn him that the hillside is about to fall, and he leads the villagers to safety before he dies",
            "They drive the village away so he can keep the shrine to himself",
            "They teach him the Law of the Jungle and make him Master of the pack"
          ],
          "answer": 1,
          "explain": "The langur and the barasingh deer will not rest. Purun Bhagat understands the mountain is falling, wakes the village, and dies after the people reach high ground."
        },
        {
          "id": "wb12",
          "lesson": "sjb",
          "q": "12. In \"Letting in the Jungle,\" why does Mowgli refuse to let the animals kill the villagers?",
          "choices": [
            "He is afraid that killing men will bring hunters with guns, so he hides until the village forgets him",
            "The Law says he must kill every person who hurt Messua, and he only waits for a better night",
            "Bones do him no good, and he will not leave their bodies on the clean earth. He lets the people run and has the jungle swallow the fields, because only new grass can replace the smell of Messua's blood",
            "Bagheera has already eaten Buldeo, so there is nobody left to punish"
          ],
          "answer": 2,
          "explain": "Hathi asks, \"There will be no killing?\" Mowgli agrees. The punishment is letting the jungle in, not a slaughter. \"Hunters will come\" is not the reason he gives."
        },
        {
          "id": "wb13",
          "lesson": "sjb",
          "q": "13. In \"The Undertakers,\" what ironic fate befalls the giant mugger?",
          "choices": [
            "The jackal talks him into leaving the river, and he dries up on the road",
            "Mowgli skins him and pegs the hide on Council Rock",
            "An Englishman shoots him from the railway bridge. Years before, when that man was a little boy about five, the mugger had tried to catch his hands and missed",
            "The adjutant crane pecks through his neck plates while he sleeps"
          ],
          "answer": 2,
          "explain": "The mugger boasts of the child whose hands slipped between his teeth, and whose mother fired a pistol. That child grows up to be the man on the bridge. He was about five, not a baby in arms."
        },
        {
          "id": "wb14",
          "lesson": "sjb",
          "q": "14. In \"The King's Ankus,\" what happens to the jeweled goad after Mowgli throws it away?",
          "choices": [
            "Bagheera keeps it as a toy, and no one else ever sees it",
            "Men kill for it — six die in one night — so Mowgli returns it to the treasure under the Cold Lairs",
            "Hathi snaps it in half and buries the jewels",
            "The White Cobra melts it and the curse ends at once"
          ],
          "answer": 1,
          "explain": "The ankus is Death, just as the White Cobra warned. Six men die for it. Mowgli throws it back into the vault so it will not kill a seventh."
        },
        {
          "id": "wb15",
          "lesson": "sjb",
          "q": "15. In \"Quiquern,\" what does the mysterious spirit dog turn out to be?",
          "choices": [
            "A real eight-legged ghost sent by the sea goddess Sedna",
            "Kotuko's two dogs, fastened together by a harness and a collar so they look like one animal with eight legs and two heads",
            "One dog wearing a spare harness that drags behind him",
            "A polar bear that Kotuko mistook for a dog in the dark"
          ],
          "answer": 1,
          "explain": "The black leader's harness loop cinched tight in Kotuko-the-dog's copper collar. The girl laughs: \"Look at his eight legs and double head!\""
        },
        {
          "id": "wb16",
          "lesson": "sjb",
          "type": "input",
          "label": "Short answer",
          "q": "16. In \"Red Dog,\" how does Mowgli use the Little People of the Rocks (the wild bees) to defeat the dholes?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "bee",
                  "little people"
                ],
                [
                  "dhole",
                  "red dog"
                ],
                [
                  "rock",
                  "sting",
                  "river",
                  "kaa",
                  "waingunga",
                  "wolf",
                  "pack"
                ]
              ],
              "placeholder": "A sentence or two is enough"
            }
          ],
          "answerText": "He rubs on garlic so the bees will not sting him, leads the dholes over the Bee Rocks, and leaps into the river where Kaa catches him. The bees sting the dholes, many fall into the water, and the wolves fight them downstream.",
          "explain": "Mention the bees or the Little People, the dholes (red dogs), and the trick: the rocks, the stings, the river, or Kaa."
        },
        {
          "id": "wb17",
          "lesson": "sjb",
          "type": "input",
          "label": "Short answer",
          "q": "17. In \"The Spring Running,\" why does Mowgli feel sorrowful and out of place during the Time of New Talk?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "man",
                  "human",
                  "people",
                  "person",
                  "men",
                  "grown",
                  "growing"
                ],
                [
                  "spring",
                  "new talk",
                  "belong",
                  "fit",
                  "sorrow",
                  "sad",
                  "drawn",
                  "lonely",
                  "out of place",
                  "no longer",
                  "doesn't fit",
                  "does not fit",
                  "not a wolf",
                  "leave the jungle",
                  "back to"
                ]
              ],
              "placeholder": "A sentence or two is enough"
            }
          ],
          "answerText": "He is growing into a man. Spring (the Time of New Talk) fills the animals with joy, but he feels restless and sad because he no longer fits the jungle. He is drawn back to people. The jungle does not cast him out.",
          "explain": "A good answer says he is becoming a man (or is drawn to people) and that he feels sad, out of place, or unfit for the jungle in spring."
        },
        {
          "id": "wb18",
          "lesson": "themes",
          "q": "18. How does Mowgli's identity shift from the beginning of The Jungle Book to the end of The Second Jungle Book?",
          "choices": [
            "He starts as a wolf-cub bought into the pack, becomes Master of the Jungle, and at the end accepts that he is a man and returns to people. The jungle does not cast him out",
            "He remains a wolf for both books and never thinks about people again",
            "The pack drives him out at the end of The Spring Running, and he is forbidden to remember the jungle",
            "He takes Shere Khan's place and rules the jungle as a tiger"
          ],
          "answer": 0,
          "explain": "Best answer: wolf-cub, then Master of the Jungle, then a young man who chooses humankind. Kaa says, \"Man goes to Man at the last, though the Jungle does not cast him out.\"",
          "label": "Best answer"
        },
        {
          "id": "wb19",
          "lesson": "themes",
          "q": "19. Which statement best compares the Law of the Jungle with human society in Kipling's stories?",
          "choices": [
            "The Law is only \"kill or be killed,\" and human villages are always kinder and more orderly",
            "There is no real difference: animals and people break every promise",
            "The Law is fair and orderly and protects the pack — it even stops killing during the Water Truce. People in the stories are often greedy, superstitious, and cruel, as when the village stones Mowgli or men kill for the ankus",
            "Human law is the model for the jungle, and Baloo teaches Mowgli the village rules"
          ],
          "answer": 2,
          "explain": "Best answer: the Law protects the weak of the pack and settles scores cleanly. Human crowds in these stories often act from greed and fear. Messua is the reminder that not every person is cruel.",
          "label": "Best answer"
        },
        {
          "id": "wb20",
          "lesson": "themes",
          "q": "20. How do standalone stories like \"The White Seal,\" \"Rikki-Tikki-Tavi,\" and \"Quiquern\" reinforce the Mowgli tales?",
          "choices": [
            "They are filler stories and do not share any ideas with Mowgli's life",
            "They show the same themes — courage, loyalty, and finding a safe place to belong — with other heroes, and they keep exploring how animals and people share one world",
            "Each one proves that only humans matter and animals cannot be loyal",
            "All three are secret chapters about Shere Khan's cubs"
          ],
          "answer": 1,
          "explain": "Best answer: Kotick's search for a safe home, Rikki-tikki's loyalty to a family, and Kotuko's rescue on the ice echo Mowgli's courage, loyalty, and question of where he belongs.",
          "label": "Best answer"
        }
      ]
    }
  ]
},
{
  "id": "religion-year",
  "name": "Religion: Liturgical Year",
  "emoji": "⛪",
  "tagline": "Quiz 11/19",
  "intro": "Pick a mode to get ready for the Liturgical Year quiz on 11/19. Study guide, flashcards, then the practice quiz. You've got this! 💪",
  "lessons": [
    {
      "id": "vocab",
      "name": "Vocabulary"
    },
    {
      "id": "seasons",
      "name": "Seasons"
    },
    {
      "id": "review",
      "name": "Short Answer"
    }
  ],
  "notes": [
    {
      "id": "vocab",
      "short": "Vocabulary",
      "title": "Key Vocabulary",
      "html": "<h2>Key Vocabulary</h2>\n<p>Quiz day is <strong>11/19</strong>. Learn the word, then the flashcards.</p>\n<div class=\"key-terms\">\n<p class=\"term-row\"><strong>Liturgy</strong> — The official public <strong>prayer</strong> of the Church. It includes (1) the celebration of the <strong>Eucharist</strong> (Mass), (2) the other <strong>sacraments</strong>, and (3) the Liturgy of the <strong>Hours</strong>.</p>\n<p class=\"term-row\"><strong>Liturgy of the Hours</strong> — The Church's official daily prayer (morning, evening, and other hours), not only Sunday Mass.</p>\n<p class=\"term-row\"><strong>Venerate</strong> — To show <strong>honor</strong> (respect) and devotion to Mary, the Mother of God, and to all the <strong>saints</strong>. We venerate them. We worship God alone.</p>\n<p class=\"term-row\"><strong>Liturgical year</strong> — The Church's calendar of seasons. Through it we celebrate the entire <strong>mystery of Christ</strong>.</p>\n<p class=\"term-row\"><strong>Early Church</strong> — Followed many <strong>Jewish</strong> customs of prayer and worship. They prayed the <strong>Psalms</strong> and kept the Sabbath.</p>\n<p class=\"term-row\"><strong>Sabbath</strong> — Catholics celebrate <strong>Sunday</strong> as the Sabbath because it is the day <strong>Jesus rose</strong> from the dead.</p>\n<p class=\"term-row\"><strong>Spring equinox</strong> — The sun crosses the <strong>equator</strong>, so day and night are about equal all over the world. The Church uses that date to help set <strong>Easter</strong> (and the Triduum). Easter is the Sunday after the first full moon on or after the spring equinox.</p>\n<p class=\"term-row\"><strong>Paschal Mystery</strong> — Jesus' suffering, death, Resurrection, and Ascension. \"Paschal\" comes from Passover: passing from death to new life.</p>\n</div>"
    },
    {
      "id": "seasons",
      "short": "Seasons",
      "title": "The Liturgical Seasons",
      "html": "<h2>The Liturgical Seasons</h2>\n<p>The calendar walks us through the different parts of Jesus' life and the mysteries of our faith. Match each season to its color.</p>\n<div class=\"sphere-grid\">\n<div class=\"sphere-pill\"><strong>Advent · purple</strong> Start of the Church calendar. <em>4 weeks.</em> Joyful preparation for the coming of Christ. A new reading cycle begins in Advent.</div>\n<div class=\"sphere-pill\"><strong>Christmas · white</strong> Begins on Christmas Day with the <em>birth</em> of Jesus. Celebrated for 12 days. The season ends with the Feast of the <em>Baptism of the Lord</em>.</div>\n<div class=\"sphere-pill\"><strong>Ordinary Time (1st) · green</strong> Rest and <em>continuing growth</em>. Readings often focus on Jesus' <em>life</em> and teaching.</div>\n<div class=\"sphere-pill\"><strong>Lent · purple</strong> <em>40 days</em>, beginning on <em>Ash Wednesday</em>. Prayer, sacrifice, and preparation for Easter. The three pillars: <em>prayer, fasting, and almsgiving</em>.</div>\n<div class=\"sphere-pill\"><strong>Triduum · red</strong> \"Triduum\" means <em>3 days</em>: Holy Thursday, Good Friday, and Holy Saturday. We celebrate the <em>Paschal Mystery</em>. It is the greatest celebration of the Church, and the whole year turns around it. On this quiz the color is <em>red</em> because Good Friday is red.</div>\n<div class=\"sphere-pill\"><strong>Easter · white</strong> We rejoice in Jesus' <em>Resurrection</em> and Ascension. Lasts <em>50 days</em>, ending at Pentecost.</div>\n<div class=\"sphere-pill\"><strong>Ordinary Time (2nd) · green</strong> The <em>longest</em> season. The first Sunday after Pentecost is <em>Trinity Sunday</em>. The last Sunday is <em>Christ the King</em>.</div>\n</div>\n<div class=\"callout\">\n<p><strong>Watch these two mix-ups</strong></p>\n<ul>\n<li><strong>Triduum</strong> is the three days (Holy Thursday, Good Friday, Holy Saturday). <strong>Trinity Sunday</strong> is the first Sunday <em>after Pentecost</em>, in Ordinary Time. They are not the same.</li>\n<li><strong>Good Friday</strong> is the only day of the year with <strong>no Mass</strong>. The Eucharist is <strong>not consecrated</strong> that day.</li>\n<li>Christmas is celebrated for <strong>12 days</strong>. The liturgical season then lasts until the <strong>Baptism of the Lord</strong>.</li>\n<li>Purple and violet are the same answer for Advent and Lent.</li>\n</ul>\n</div>\n<h3>Color match</h3>\n<div class=\"practice-box\"><ul>\n<li>Advent — purple (violet)</li>\n<li>Christmas — white</li>\n<li>Ordinary Time — green (both parts)</li>\n<li>Lent — purple (violet)</li>\n<li>Triduum — red</li>\n<li>Easter — white</li>\n</ul></div>"
    },
    {
      "id": "short",
      "short": "Short Answers",
      "title": "Check for Understanding + Short Answers",
      "html": "<h2>Short Answers</h2>\n<p>Say these in your own words. On the quiz, a close answer counts. After you submit, compare yours with the model answer.</p>\n<h3>1. What is the purpose of the liturgical year?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> The liturgical year helps us celebrate and remember the whole mystery of Christ — his life, death, and Resurrection — all year long, and to grow closer to God.</p></div>\n<h3>2. Why do Catholics celebrate Sunday as the Sabbath?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> Catholics celebrate Sunday as the Sabbath because it is the day Jesus rose from the dead.</p></div>\n<h3>3. What are the three pillars of Lent?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> The three pillars of Lent are prayer, fasting, and almsgiving.</p></div>\n<h3>4. What is the most important celebration of the Church?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> The Easter Triduum is the greatest and most important celebration of the Church. During those three days we remember the Paschal Mystery, and the whole liturgical year is centered on it.</p></div>\n<h3>5. What event do we celebrate at Easter?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> At Easter we celebrate Jesus' Resurrection. The Easter season also rejoices in his Ascension.</p></div>\n<h3>6. Why is Advent purple, and what are we preparing for?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> Advent is purple (violet), a color of preparation and waiting. It is a joyful time of getting ready for the coming of Christ.</p></div>\n<h3>7. What is the Paschal Mystery?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> The Paschal Mystery is Jesus' suffering, death, Resurrection, and Ascension — his passing through death into new life. We celebrate it most of all at the Triduum, and at every Mass.</p></div>\n<h3>8. Why is Good Friday different from every other day?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> Good Friday is different from every other day because it is the only day of the year with no Mass. The Eucharist is not consecrated on Good Friday. We remember Jesus' death on the cross. (People may still receive Communion from hosts consecrated on Holy Thursday.)</p></div>\n<h3>9. Why is Ordinary Time green?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> Green is the color of life, hope, and growth. Ordinary Time is when we keep growing in faith and listen to the stories of Jesus' everyday life and teaching.</p></div>\n<h3>10. What do the Christmas and Easter seasons have in common?</h3>\n<div class=\"callout\"><p><strong>Model answer:</strong> Christmas and Easter both use the color white, and both are joyful seasons of Jesus' life: his birth at Christmas, and his Resurrection at Easter.</p></div>"
    }
  ],
  "flashcards": [
    {
      "term": "Liturgy",
      "def": "The official public prayer of the Church. It includes the Eucharist (Mass), the other sacraments, and the Liturgy of the Hours.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Liturgy of the Hours",
      "def": "The Church's official daily prayer, prayed at different hours of the day — part of the liturgy, not only Sunday Mass.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Venerate",
      "def": "To show honor and devotion to Mary, the Mother of God, and to all the saints. Veneration is not the same as worshipping God.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Liturgical year",
      "def": "The Church's year of seasons. Through it we celebrate the entire mystery of Christ.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Sabbath",
      "def": "Catholics keep Sunday as the Sabbath because Jesus rose from the dead on Sunday.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Early Church prayer",
      "def": "The early Church followed many Jewish customs. They prayed the Psalms and kept the Sabbath.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Spring equinox",
      "def": "When the sun crosses the equator and day and night are about equal. It helps set the date of Easter and the Triduum.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Paschal Mystery",
      "def": "Jesus' suffering, death, Resurrection, and Ascension — his passover from death into new life.",
      "lesson": "vocab",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Advent",
      "def": "Purple (violet). The start of the Church calendar. Four weeks of joyful preparation for the coming of Christ. A new reading cycle begins.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Christmas",
      "def": "White. Begins with the birth of Jesus. Celebrated for 12 days, and the season ends with the Baptism of the Lord.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Ordinary Time (first part)",
      "def": "Green. A time of rest and continuing growth. Readings often focus on Jesus' life and teaching.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Lent",
      "def": "Purple. Forty days beginning on Ash Wednesday. Prayer, sacrifice, and preparation for Easter. Pillars: prayer, fasting, almsgiving.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Triduum",
      "def": "Red on this quiz (Good Friday is red). Three days: Holy Thursday, Good Friday, Holy Saturday. The Paschal Mystery — the greatest celebration of the Church.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Easter",
      "def": "White. We rejoice in Jesus' Resurrection and Ascension. The season lasts 50 days.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Ordinary Time (second part)",
      "def": "Green. The longest season. It opens with Trinity Sunday (the first Sunday after Pentecost) and ends on Christ the King Sunday.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Three pillars of Lent",
      "def": "Prayer, fasting, and almsgiving.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Trinity Sunday",
      "def": "The first Sunday after Pentecost, in Ordinary Time. Not the same as the Triduum.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Christ the King Sunday",
      "def": "The last Sunday of the liturgical year, at the end of Ordinary Time.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Good Friday",
      "def": "The only day of the year with no Mass. The Eucharist is not consecrated. We remember Jesus' death.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "The three days of the Triduum",
      "def": "Holy Thursday, Good Friday, and Holy Saturday.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "Baptism of the Lord",
      "def": "The feast that ends the Christmas season.",
      "lesson": "seasons",
      "front": "Term",
      "back": "Definition"
    },
    {
      "term": "How long is Advent?",
      "def": "Four weeks.",
      "lesson": "seasons",
      "front": "Question",
      "back": "Answer"
    },
    {
      "term": "How long is Lent?",
      "def": "40 days, beginning on Ash Wednesday.",
      "lesson": "seasons",
      "front": "Question",
      "back": "Answer"
    },
    {
      "term": "How long is the Easter season?",
      "def": "50 days.",
      "lesson": "seasons",
      "front": "Question",
      "back": "Answer"
    },
    {
      "term": "How long is Christmas celebrated on the sheet?",
      "def": "12 days (the Twelve Days of Christmas). The season ends with the Baptism of the Lord.",
      "lesson": "seasons",
      "front": "Question",
      "back": "Answer"
    },
    {
      "term": "What is the purpose of the liturgical year?",
      "def": "The liturgical year helps us celebrate and remember the whole mystery of Christ — his life, death, and Resurrection — all year long, and to grow closer to God.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "Why is Sunday the Christian Sabbath?",
      "def": "Catholics celebrate Sunday as the Sabbath because it is the day Jesus rose from the dead.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "What are the three pillars of Lent?",
      "def": "The three pillars of Lent are prayer, fasting, and almsgiving.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "What is the Church's greatest celebration?",
      "def": "The Easter Triduum is the greatest and most important celebration of the Church. During those three days we remember the Paschal Mystery, and the whole liturgical year is centered on it.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "What do we celebrate at Easter?",
      "def": "At Easter we celebrate Jesus' Resurrection. The Easter season also rejoices in his Ascension.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "Why is Advent purple, and what do we prepare for?",
      "def": "Advent is purple (violet), a color of preparation and waiting. It is a joyful time of getting ready for the coming of Christ.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "What is the Paschal Mystery?",
      "def": "The Paschal Mystery is Jesus' suffering, death, Resurrection, and Ascension — his passing through death into new life. We celebrate it most of all at the Triduum, and at every Mass.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "Why is Good Friday different from every other day?",
      "def": "Good Friday is different from every other day because it is the only day of the year with no Mass. The Eucharist is not consecrated on Good Friday. We remember Jesus' death on the cross. (People may still receive Communion from hosts consecrated on Holy Thursday.)",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "Why is Ordinary Time green?",
      "def": "Green is the color of life, hope, and growth. Ordinary Time is when we keep growing in faith and listen to the stories of Jesus' everyday life and teaching.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    },
    {
      "term": "What do Christmas and Easter have in common?",
      "def": "Christmas and Easter both use the color white, and both are joyful seasons of Jesus' life: his birth at Christmas, and his Resurrection at Easter.",
      "lesson": "review",
      "front": "Question",
      "back": "Model answer"
    }
  ],
  "tests": [
    {
      "id": "ly-quiz",
      "name": "Liturgical Year Practice Quiz",
      "desc": "43 questions · multiple choice, true/false, color match, numbers, and 10 short answers · in order",
      "questions": [
        {
          "id": "r01",
          "lesson": "vocab",
          "q": "What is the liturgy?",
          "choices": [
            "The official public prayer of the Church",
            "A private prayer you say only at bedtime",
            "The book of Bible stories used in class",
            "A holiday from school on a saint's day"
          ],
          "answer": 0,
          "explain": "Liturgy means the official public prayer of the Church."
        },
        {
          "id": "r02",
          "lesson": "vocab",
          "q": "Which list names what the liturgy includes?",
          "choices": [
            "Only private prayers and school chapel songs",
            "The Eucharist (Mass), the other sacraments, and the Liturgy of the Hours",
            "Advent, Lent, and summer vacation",
            "The Psalms only, with no Mass and no sacraments"
          ],
          "answer": 1,
          "explain": "Three parts: the Eucharist, the other sacraments, and the Liturgy of the Hours."
        },
        {
          "id": "r03",
          "lesson": "vocab",
          "q": "What does it mean to venerate Mary and the saints?",
          "choices": [
            "To worship them as if they were God",
            "To show them honor and devotion",
            "To forget them during the liturgical year",
            "To celebrate their feasts only in Ordinary Time"
          ],
          "answer": 1,
          "explain": "Venerate means honor and devotion. Worship belongs to God alone."
        },
        {
          "id": "r04",
          "lesson": "vocab",
          "q": "What do we celebrate throughout the liturgical year?",
          "choices": [
            "Only the birth of Jesus",
            "The entire mystery of Christ",
            "The history of the Jewish kings",
            "Only the rules of the Church building"
          ],
          "answer": 1,
          "explain": "The liturgical year celebrates the whole mystery of Christ, season by season."
        },
        {
          "id": "r05",
          "lesson": "vocab",
          "q": "Which sentence is true about the early Church?",
          "choices": [
            "They refused every Jewish custom and never prayed the Psalms",
            "They followed many Jewish customs of prayer and worship, prayed the Psalms, and kept the Sabbath",
            "They invented Advent, Lent, and the Triduum in the first week",
            "They celebrated Sunday because it was the spring equinox"
          ],
          "answer": 1,
          "explain": "The early Church kept Jewish customs of prayer, including the Psalms and the Sabbath."
        },
        {
          "id": "r06",
          "lesson": "vocab",
          "q": "Why do Catholics celebrate Sunday as the Sabbath?",
          "choices": [
            "Because the spring equinox always falls on Sunday",
            "Because Jesus rose from the dead on Sunday",
            "Because the Temple in Jerusalem closed on Sunday",
            "Because Lent always begins on Sunday"
          ],
          "answer": 1,
          "explain": "Sunday is the Lord's Day, the day of the Resurrection."
        },
        {
          "id": "r07",
          "lesson": "vocab",
          "q": "What is the spring equinox, and why does it matter for the Church year?",
          "choices": [
            "The sun crosses the equator, so day and night are about equal. That date helps set Easter and the Triduum",
            "It is the darkest day of the year, and it begins Advent",
            "It is the day the sun stops over Bethlehem, and it begins Christmas",
            "It is a Jewish fast that replaced the Sabbath"
          ],
          "answer": 0,
          "explain": "Day and night are about equal when the sun crosses the equator. Easter is set from that spring date."
        },
        {
          "id": "r08",
          "lesson": "seasons",
          "q": "Which sentence is true about Advent?",
          "choices": [
            "It is green, lasts 50 days, and celebrates the Resurrection",
            "It is purple, lasts four weeks, begins the Church calendar, and is a time of joyful preparation. A new reading cycle starts",
            "It is white, begins on Ash Wednesday, and lasts 40 days",
            "It is red, lasts three days, and is the same thing as the Triduum"
          ],
          "answer": 1,
          "explain": "Advent: purple, four weeks, the start of the liturgical year, joyful preparation for Christ's coming. Reading cycles change, and the new cycle begins in Advent."
        },
        {
          "id": "r09",
          "lesson": "seasons",
          "q": "Which sentence is true about Christmas?",
          "choices": [
            "The color is white. It begins with the birth of Jesus, is celebrated for 12 days, and the season ends with the Baptism of the Lord",
            "The color is purple. It begins on Ash Wednesday and ends on Good Friday",
            "The color is green. It is the longest season and ends on Christ the King",
            "The color is red. It lasts three days and has no Mass"
          ],
          "answer": 0,
          "explain": "White for joy. Christmas Day celebrates Jesus' birth. Twelve days of Christmas, and the season ends at the Baptism of the Lord."
        },
        {
          "id": "r10",
          "lesson": "seasons",
          "q": "What is the focus of the first part of Ordinary Time?",
          "choices": [
            "A time of rest and continuing growth, with readings about Jesus' life and teaching. The color is green",
            "A 40-day fast that begins on Ash Wednesday",
            "The three days of the Paschal Mystery",
            "A four-week wait before Christmas"
          ],
          "answer": 0,
          "explain": "Green Ordinary Time focuses on continued growth and on Jesus' life and ministry."
        },
        {
          "id": "r11",
          "lesson": "seasons",
          "q": "Which sentence is true about Lent?",
          "choices": [
            "It is white, lasts 12 days, and celebrates Jesus' birth",
            "It is purple, lasts 40 days, begins on Ash Wednesday, and prepares us for Easter. The three pillars are prayer, fasting, and almsgiving",
            "It is green, is the longest season, and ends on Trinity Sunday",
            "It is red, lasts 3 days, and is another name for Easter"
          ],
          "answer": 1,
          "explain": "Lent: purple, 40 days, Ash Wednesday, preparation for Easter. Pillars: prayer, fasting, almsgiving."
        },
        {
          "id": "r12",
          "lesson": "seasons",
          "q": "What is the Triduum?",
          "choices": [
            "The first Sunday after Pentecost, when we honor the Father, the Son, and the Holy Spirit",
            "Three days — Holy Thursday, Good Friday, and Holy Saturday — when we celebrate the Paschal Mystery. It is the greatest celebration of the Church. On this quiz its color is red",
            "The 50 days after Easter Sunday",
            "The four weeks of preparation before Christmas"
          ],
          "answer": 1,
          "explain": "Triduum means three days. The whole liturgical year is centered on this celebration of the Paschal Mystery. Do not confuse it with Trinity Sunday."
        },
        {
          "id": "r13",
          "lesson": "seasons",
          "q": "What is true about Good Friday?",
          "choices": [
            "It is the only day of the year with no Mass, and the Eucharist is not consecrated",
            "It is the day the Church celebrates the most Masses of the year",
            "The Eucharist is consecrated three times, at dawn, noon, and night",
            "It is the start of Advent"
          ],
          "answer": 0,
          "explain": "No Mass, and no consecration. The Church remembers Jesus' death. Communion that day uses hosts consecrated on Holy Thursday."
        },
        {
          "id": "r14",
          "lesson": "seasons",
          "q": "Which sentence is true about the Easter season?",
          "choices": [
            "The color is white. We rejoice in Jesus' Resurrection and Ascension, and the season lasts 50 days",
            "The color is purple. It lasts 4 weeks and starts the Church year",
            "The color is green. It is a quiet season with no feast",
            "The color is red. It lasts 40 days and begins on Ash Wednesday"
          ],
          "answer": 0,
          "explain": "Easter is white, for joy. Resurrection and Ascension. Fifty days, through Pentecost."
        },
        {
          "id": "r15",
          "lesson": "seasons",
          "q": "Which sentence is true about the second part of Ordinary Time?",
          "choices": [
            "It is the longest season, the color is green, the first Sunday after Pentecost is Trinity Sunday, and the last Sunday is Christ the King",
            "It is the shortest season, the color is red, and it is called the Triduum",
            "It begins on Ash Wednesday and ends on Good Friday",
            "The first Sunday after Pentecost is the Triduum, and the last Sunday is Easter"
          ],
          "answer": 0,
          "explain": "Longest season, green. Trinity Sunday is the first Sunday after Pentecost — not the Triduum. Christ the King closes the year."
        },
        {
          "id": "r16",
          "lesson": "vocab",
          "tf": true,
          "keepOrder": true,
          "q": "The liturgy is only the Mass. The other sacraments and the Liturgy of the Hours are not part of it.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 1,
          "explain": "False. The liturgy includes the Eucharist, the other sacraments, AND the Liturgy of the Hours."
        },
        {
          "id": "r17",
          "lesson": "vocab",
          "tf": true,
          "keepOrder": true,
          "q": "To venerate Mary means we worship her as God.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 1,
          "explain": "False. Venerate means to show honor and devotion. Worship is for God alone."
        },
        {
          "id": "r18",
          "lesson": "seasons",
          "tf": true,
          "keepOrder": true,
          "q": "Advent begins the liturgical year and lasts four weeks.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 0,
          "explain": "True. Advent is the start of the Church calendar and lasts four weeks of joyful preparation."
        },
        {
          "id": "r19",
          "lesson": "seasons",
          "tf": true,
          "keepOrder": true,
          "q": "Lent begins on Ash Wednesday and lasts 40 days.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 0,
          "explain": "True. Ash Wednesday starts the 40 days of prayer, fasting, and preparation for Easter."
        },
        {
          "id": "r20",
          "lesson": "seasons",
          "tf": true,
          "keepOrder": true,
          "q": "Good Friday is the only day of the year when Mass is not celebrated.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 0,
          "explain": "True. There is no Mass on Good Friday."
        },
        {
          "id": "r21",
          "lesson": "seasons",
          "tf": true,
          "keepOrder": true,
          "q": "The Eucharist is consecrated on Good Friday.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 1,
          "explain": "False. The Eucharist is not consecrated on Good Friday. There is no Mass that day."
        },
        {
          "id": "r22",
          "lesson": "seasons",
          "tf": true,
          "keepOrder": true,
          "q": "The first Sunday after Pentecost is called the Triduum.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 1,
          "explain": "False. That Sunday is Trinity Sunday. The Triduum is Holy Thursday, Good Friday, and Holy Saturday."
        },
        {
          "id": "r23",
          "lesson": "seasons",
          "tf": true,
          "keepOrder": true,
          "q": "Christ the King Sunday is the last Sunday of the liturgical year.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 0,
          "explain": "True. The second part of Ordinary Time ends with Christ the King."
        },
        {
          "id": "r24",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "Color match: Advent's liturgical color is ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "purple",
                  "violet"
                ]
              ],
              "placeholder": "Type the missing word"
            }
          ],
          "answerText": "purple (violet)",
          "explain": "Advent is purple, a color of preparation. Violet counts too."
        },
        {
          "id": "r25",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "Color match: Christmas's liturgical color is ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "white"
                ]
              ],
              "placeholder": "Type the missing word"
            }
          ],
          "answerText": "white",
          "explain": "Christmas is white, the color of joy."
        },
        {
          "id": "r26",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "Color match: the first part of Ordinary Time is ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "green"
                ]
              ],
              "placeholder": "Type the missing word"
            }
          ],
          "answerText": "green",
          "explain": "Ordinary Time is green, for growth and hope."
        },
        {
          "id": "r27",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "Color match: Lent's liturgical color is ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "purple",
                  "violet"
                ]
              ],
              "placeholder": "Type the missing word"
            }
          ],
          "answerText": "purple (violet)",
          "explain": "Lent is purple, like Advent. Violet counts too."
        },
        {
          "id": "r28",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "Color match: on this quiz, the Triduum's color is ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "red"
                ]
              ],
              "placeholder": "Type the missing word"
            }
          ],
          "answerText": "red",
          "explain": "The sheet marks the Triduum red because Good Friday is red."
        },
        {
          "id": "r29",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "Color match: Easter's liturgical color is ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "white"
                ]
              ],
              "placeholder": "Type the missing word"
            }
          ],
          "answerText": "white",
          "explain": "Easter is white, like Christmas."
        },
        {
          "id": "r30",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "Color match: the second part of Ordinary Time is ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "green"
                ]
              ],
              "placeholder": "Type the missing word"
            }
          ],
          "answerText": "green",
          "explain": "Both parts of Ordinary Time are green."
        },
        {
          "id": "r31",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "How many weeks does Advent last?",
          "fields": [
            {
              "kind": "number",
              "value": 4,
              "unit": "weeks",
              "placeholder": "Type a number",
              "alsoAccept": [
                "four",
                "four weeks",
                "4 weeks"
              ]
            }
          ],
          "answerText": "4 weeks",
          "explain": "Advent lasts four weeks."
        },
        {
          "id": "r32",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "How many days does Lent last?",
          "fields": [
            {
              "kind": "number",
              "value": 40,
              "unit": "days",
              "placeholder": "Type a number",
              "alsoAccept": [
                "forty",
                "forty days",
                "40 days"
              ]
            }
          ],
          "answerText": "40 days",
          "explain": "Lent lasts 40 days, from Ash Wednesday."
        },
        {
          "id": "r33",
          "lesson": "seasons",
          "type": "input",
          "label": "Fill in",
          "q": "How many days does the Easter season last?",
          "fields": [
            {
              "kind": "number",
              "value": 50,
              "unit": "days",
              "placeholder": "Type a number",
              "alsoAccept": [
                "fifty",
                "fifty days",
                "50 days"
              ]
            }
          ],
          "answerText": "50 days",
          "explain": "Easter lasts 50 days, from Easter Sunday to Pentecost."
        },
        {
          "id": "r34",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Check for understanding: What is the purpose of the liturgical year?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "christ",
                  "jesus",
                  "mystery",
                  "god"
                ],
                [
                  "celebrat",
                  "remember",
                  "year",
                  "life",
                  "grow",
                  "closer",
                  "faith"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "The liturgical year helps us celebrate and remember the whole mystery of Christ — his life, death, and Resurrection — all year long, and to grow closer to God.",
          "explain": "Mention celebrating or remembering Christ (or his mystery, or his life) through the year, or growing closer to God."
        },
        {
          "id": "r35",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Check for understanding: Why do Catholics keep Sunday as the Sabbath?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "rose",
                  "risen",
                  "resurrection",
                  "rising"
                ],
                [
                  "sunday"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "Catholics celebrate Sunday as the Sabbath because it is the day Jesus rose from the dead.",
          "explain": "Your answer needs the Resurrection (rose, risen, or Resurrection) AND the word Sunday."
        },
        {
          "id": "r36",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Check for understanding: What are the three pillars of Lent?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "pray"
                ],
                [
                  "fasting",
                  "fast,",
                  "fast.",
                  "fast and",
                  "to fast",
                  "a fast",
                  "fast "
                ],
                [
                  "alms",
                  "charity",
                  "poor"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "The three pillars of Lent are prayer, fasting, and almsgiving.",
          "explain": "Name all three: prayer, fasting, and almsgiving."
        },
        {
          "id": "r37",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Check for understanding: What is the greatest and most important celebration of the Church?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "triduum",
                  "paschal"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "The Easter Triduum is the greatest and most important celebration of the Church. During those three days we remember the Paschal Mystery, and the whole liturgical year is centered on it.",
          "explain": "The Easter Triduum, when we celebrate the Paschal Mystery. \"Easter\" alone is the season; the greatest celebration is the Triduum."
        },
        {
          "id": "r38",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Check for understanding: What event do we celebrate at Easter?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "resurrect",
                  "rose",
                  "risen"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "At Easter we celebrate Jesus' Resurrection. The Easter season also rejoices in his Ascension.",
          "explain": "Jesus' Resurrection. You can also mention the Ascension."
        },
        {
          "id": "r39",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Why is Advent purple, and what are we preparing for?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "prepar",
                  "wait",
                  "expect",
                  "ready",
                  "coming"
                ],
                [
                  "christ",
                  "jesus",
                  "christmas"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "Advent is purple (violet), a color of preparation and waiting. It is a joyful time of getting ready for the coming of Christ.",
          "explain": "Purple means preparation or waiting. We are preparing for the coming of Christ."
        },
        {
          "id": "r40",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "What is the Paschal Mystery?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "death",
                  "died",
                  "cross",
                  "suffer",
                  "passion"
                ],
                [
                  "resurrect",
                  "rose",
                  "risen",
                  "ascension",
                  "new life"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "The Paschal Mystery is Jesus' suffering, death, Resurrection, and Ascension — his passing through death into new life. We celebrate it most of all at the Triduum, and at every Mass.",
          "explain": "Include Jesus' death (or suffering) AND his Resurrection or Ascension."
        },
        {
          "id": "r41",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Why is Good Friday different from every other day of the year?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "mass",
                  "eucharist",
                  "consecrat"
                ],
                [
                  "no mass",
                  "no eucharist",
                  "not consecrat",
                  "isn't consecrat",
                  "is not consecrat",
                  "without mass",
                  "without a mass",
                  "only day",
                  "don't",
                  "do not",
                  "cannot",
                  "can't",
                  "no celebration"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "Good Friday is different from every other day because it is the only day of the year with no Mass. The Eucharist is not consecrated on Good Friday. We remember Jesus' death on the cross. (People may still receive Communion from hosts consecrated on Holy Thursday.)",
          "explain": "Say that there is no Mass, or that the Eucharist is not consecrated. It is the only day like that."
        },
        {
          "id": "r42",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "Why is Ordinary Time green?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "life",
                  "hope",
                  "grow",
                  "growth"
                ],
                [
                  "jesus",
                  "christ",
                  "faith",
                  "teach",
                  "ministry",
                  "ordinary",
                  "gospel",
                  "everyday"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "Green is the color of life, hope, and growth. Ordinary Time is when we keep growing in faith and listen to the stories of Jesus' everyday life and teaching.",
          "explain": "Green stands for life, hope, or growth, and the season is about growing in faith or about Jesus' life and teaching."
        },
        {
          "id": "r43",
          "lesson": "review",
          "type": "input",
          "label": "Short answer",
          "q": "What do the Christmas season and the Easter season have in common?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "white"
                ],
                [
                  "joy",
                  "joyful",
                  "celebrat",
                  "jesus",
                  "christ",
                  "birth",
                  "resurrect",
                  "happy",
                  "glad"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "Christmas and Easter both use the color white, and both are joyful seasons of Jesus' life: his birth at Christmas, and his Resurrection at Easter.",
          "explain": "Both are white, and both joyfully celebrate a mystery of Jesus (his birth, his Resurrection, or both)."
        }
      ]
    }
  ]
},
{
  "id": "science-oceans",
  "name": "Science: Unit 4 Oceans, Lessons 1–5",
  "emoji": "🌊",
  "tagline": "Exploring oceans, properties, the seafloor, resources, currents & waves",
  "intro": "Pick a mode to get ready for your Science test on Unit 4 Oceans, Lessons 1–5. You've got this! 💪",
  "lessons": [
    {
      "id": 1,
      "name": "L1 · Exploring the Oceans"
    },
    {
      "id": 2,
      "name": "L2 · Properties of Ocean Waters"
    },
    {
      "id": 3,
      "name": "L3 · The Ocean Floor"
    },
    {
      "id": 4,
      "name": "L4 · Ocean Resources and Pollution"
    },
    {
      "id": 5,
      "name": "L5 · Currents and Waves"
    }
  ],
  "notes": [
    {
      "id": "l1",
      "short": "L1 Exploring Oceans",
      "title": "Lesson 1: Exploring the Oceans",
      "html": "\n        <h2>Lesson 1: Exploring the Oceans</h2>\n        <p><strong>Oceanography</strong> is the science of studying the water, plants, animals and land in the ocean.</p>\n        <h3>Mapping the ocean floor with SONAR</h3>\n        <p><strong>SONAR</strong> stands for <strong>Sound Navigation and Ranging</strong>.</p>\n        <p>Steps scientists use to map the ocean floor:</p>\n        <ol>\n          <li>The ship sends out a signal called a <strong>ping</strong>.</li>\n          <li>Scientists time how long the sound waves take to reach the ocean bottom and bounce back to the ship.</li>\n          <li>That measurement lets them calculate the <strong>depth</strong> of the ocean.</li>\n          <li>They use the data to <strong>map the ocean floor</strong>.</li>\n        </ol>\n        <p><strong>Underwater submersibles</strong> let researchers explore parts of the ocean they could never otherwise access.</p>\n        <h3>One global ocean</h3>\n        <ul>\n          <li>All the world's oceans are connected, forming one huge <strong>global ocean</strong>.</li>\n          <li>It covers <strong>more than 70%</strong> of Earth's surface. (Your sheet said 75%. Remember <em>more than 70%</em>; 70, 71, or 75 all count on this practice test.)</li>\n          <li>The 5 largest oceans are the <strong>Pacific</strong>, <strong>Atlantic</strong>, <strong>Indian</strong>, <strong>Arctic</strong> and <strong>Southern</strong>.</li>\n        </ul>\n        <div class=\"key-terms\">\n          <h3>The 5 largest oceans</h3>\n          <p class=\"term-row\"><strong>Pacific</strong> — The largest ocean. Home to the <strong>Mariana Trench</strong>, the deepest point on Earth. Split into 2 parts by the Equator.</p>\n          <p class=\"term-row\"><strong>Atlantic</strong> — The second-largest ocean. Home to the <strong>Bermuda Triangle</strong>. Also split into 2 parts by the Equator.</p>\n          <p class=\"term-row\"><strong>Indian</strong> — One of the five largest oceans.</p>\n          <p class=\"term-row\"><strong>Arctic</strong> — The smallest and shallowest ocean.</p>\n          <p class=\"term-row\"><strong>Southern</strong> — The name Southern Ocean didn't exist until <strong>2000</strong>; it was known as the <strong>Antarctic Ocean</strong>.</p>\n        </div>\n        <div class=\"callout\">Both the Atlantic and the Pacific are split into 2 parts by the <strong>Equator</strong>.</div>\n      "
    },
    {
      "id": "l2",
      "short": "L2 Ocean Waters",
      "title": "Lesson 2: Properties of Ocean Waters",
      "html": "\n        <h2>Lesson 2: Properties of Ocean Waters</h2>\n        <h3>Salt and salinity</h3>\n        <ul>\n          <li>Most ocean salt is <strong>sodium chloride</strong>, the same as table salt.</li>\n          <li>Rivers and streams dissolve minerals on land, including salt, and carry them to the ocean.</li>\n          <li>When water evaporates, the <strong>salt stays behind</strong>.</li>\n          <li>Hotter, drier climates have <strong>higher salinity</strong> than cool areas because warm temperatures cause more evaporation.</li>\n        </ul>\n        <h3>Density</h3>\n        <ul>\n          <li><strong>Density</strong> is how heavy or thick the water is.</li>\n          <li>Salt adds mass, which increases salinity and density.</li>\n          <li>The colder the water, the more dense it is.</li>\n          <li>As you go deeper, <strong>temperature drops</strong> and <strong>pressure and density increase</strong>.</li>\n        </ul>\n        <h3>The 3 zones (based on light and depth)</h3>\n        <div class=\"key-terms\">\n          <p class=\"term-row\"><strong>1. Sunlight zone</strong> — Shallow; gets the most sunlight; where most <strong>photosynthesis</strong> occurs.</p>\n          <p class=\"term-row\"><strong>2. Twilight zone</strong> — Most sunlight is gone.</p>\n          <p class=\"term-row\"><strong>3. Midnight zone</strong> — Plants don't grow. Most animals make their own light (<strong>bioluminescence</strong>).</p>\n        </div>\n      "
    },
    {
      "id": "l3",
      "short": "L3 Ocean Floor",
      "title": "Lesson 3: The Ocean Floor",
      "html": "\n        <h2>Lesson 3: The Ocean Floor</h2>\n        <div class=\"key-terms\">\n          <h3>Continental shelf</h3>\n          <p>The <strong>continental shelf</strong> is the shallow, gently sloping extension of the continent under water.</p>\n          <ul>\n            <li>It extends hundreds of miles.</li>\n            <li>It is usually less than <strong>200 meters</strong> deep.</li>\n            <li>It is an important <strong>fishing</strong> area.</li>\n            <li>It is home to <strong>coral reefs</strong> and <strong>kelp forests</strong>.</li>\n          </ul>\n          <h3>Abyssal plains</h3>\n          <p>The <strong>abyssal plains</strong> are the flattest regions on Earth.</p>\n          <ul>\n            <li>They stretch thousands of kilometers.</li>\n            <li>They cover more of Earth's surface than all the continents combined.</li>\n            <li>Deep-sea life there is adapted to extreme <strong>cold</strong>, <strong>pressure</strong> and <strong>darkness</strong>.</li>\n          </ul>\n        </div>\n      "
    },
    {
      "id": "l4",
      "short": "L4 Resources &amp; Pollution",
      "title": "Lesson 4: Ocean Resources and Pollution",
      "html": "\n        <h2>Lesson 4: Ocean Resources and Pollution</h2>\n        <p>The greatest demand on the ocean is for <strong>food</strong>.</p>\n        <h3>Living resources</h3>\n        <ul>\n          <li><strong>Fishing</strong> — a multi-billion-dollar industry.</li>\n          <li><strong>Aquaculture</strong> — raising seafood in ponds to sell.</li>\n          <li><strong>Seaweed</strong> — used as a thickener in jelly.</li>\n        </ul>\n        <h3>Non-living resources</h3>\n        <ul>\n          <li><strong>Oil and natural gas</strong> (petroleum) — <strong>nonrenewable</strong>.</li>\n          <li>Seafloor minerals called <strong>nodules</strong> — difficult to retrieve, so they are expensive.</li>\n          <li><strong>Desalination</strong> — making fresh water from ocean water.</li>\n        </ul>\n        <h3>Pollution</h3>\n        <ul>\n          <li><strong>Trash and plastic dumping</strong> — plastics can harm or kill animals.</li>\n          <li><strong>Oil spills</strong>.</li>\n        </ul>\n      "
    },
    {
      "id": "l5",
      "short": "L5 Currents &amp; Waves",
      "title": "Lesson 5: Currents and Waves",
      "html": "\n        <h2>Lesson 5: Currents and Waves</h2>\n        <div class=\"callout\"><strong>Note:</strong> Answers in this lesson were filled in by Roo because the last study page was blank. Please check these with your class notes.</div>\n        <h3>Currents</h3>\n        <ul>\n          <li>Giant streams of water flowing within the ocean are called <strong>currents</strong>.</li>\n          <li>There are 2 categories: <strong>surface currents</strong> and <strong>deep water currents</strong>.</li>\n          <li>The biggest factor causing surface currents is <strong>air currents, or wind</strong>.</li>\n          <li>The stronger and longer the wind blows, the stronger the current.</li>\n          <li><strong>Global (prevailing) wind belts</strong> greatly affect surface currents. These winds always blow in the same direction.</li>\n          <li>Major surface currents of the world are <strong>named</strong> and always travel the same way; some are warm and some are cold. (\"Predictable\" is also a fair way to say this.)</li>\n        </ul>\n        <h3>Waves</h3>\n        <ul>\n          <li>The <strong>crest</strong> is the highest point of a wave.</li>\n          <li>The <strong>trough</strong> is the lowest point between two crests.</li>\n          <li><strong>Wave height</strong> is measured from the trough to the crest.</li>\n          <li>The <strong>speed of the wind</strong> and the <strong>length of time it blows</strong> determine the height (size) of a wave.</li>\n          <li><strong>Rip currents</strong> are one of the greatest dangers to swimmers.</li>\n        </ul>\n      "
    },
    {
      "id": "tips",
      "short": "Test Tips",
      "title": "Most Likely on the Test + Memory Tips",
      "html": "\n        <h2>Most Likely to Be on the Test</h2>\n        <ul>\n          <li>What oceanography is, and what SONAR stands for</li>\n          <li>The 4 steps to map the ocean floor (ping → time the bounce → calculate depth → map)</li>\n          <li>One global ocean covering more than 70% of Earth, and the 5 largest oceans</li>\n          <li>Pacific = largest and Mariana Trench; Atlantic = second and Bermuda Triangle; both split by the Equator</li>\n          <li>Southern Ocean was called the Antarctic Ocean until 2000; Arctic = smallest and shallowest</li>\n          <li>Sodium chloride, how salt gets to the ocean, and why hotter/drier climates are saltier</li>\n          <li>Density, and how temperature, salt, and depth change it</li>\n          <li>The 3 light zones: sunlight (photosynthesis), twilight, midnight (bioluminescence)</li>\n          <li>Continental shelf vs. abyssal plains</li>\n          <li>Living and non-living resources, desalination, plastics, and oil spills</li>\n          <li>Currents, wind, crests, troughs, wave height, and rip currents</li>\n        </ul>\n        <h3>Memory tips</h3>\n        <div class=\"callout\">\n          <p><strong>SONAR:</strong> Sound Navigation and Ranging — a ship <em>pings</em>, times the bounce, finds the <em>depth</em>, then <em>maps</em> the floor.</p>\n          <p><strong>Oceans (largest → smallest to remember):</strong> Pacific, Atlantic, Indian, Southern, Arctic. Arctic is also the shallowest.</p>\n          <p><strong>Zones:</strong> Sunlight (plants can photosynthesize) → Twilight (most light is gone) → Midnight (animals make their own light).</p>\n          <p><strong>Waves:</strong> Crest = highest point. Trough = lowest point. Height = trough to crest.</p>\n        </div>\n        <div class=\"callout\"><strong>Lesson 5:</strong> Answers in this lesson were filled in by Roo because the last study page was blank. Please check these with your class notes.</div>\n      "
    }
  ],
  "flashcards": [
    {
      "term": "Oceanography",
      "def": "The science of studying the water, plants, animals and land in the ocean.",
      "lesson": 1
    },
    {
      "term": "SONAR",
      "def": "Sound Navigation and Ranging. Used to map the ocean floor.",
      "lesson": 1
    },
    {
      "term": "Ping",
      "def": "The signal a ship sends out when mapping the ocean floor with SONAR.",
      "lesson": 1
    },
    {
      "term": "Steps to map the ocean floor",
      "def": "1) The ship sends out a ping. 2) Scientists time how long the sound waves take to reach the bottom and bounce back. 3) That measurement lets them calculate the depth. 4) They use the data to map the ocean floor.",
      "lesson": 1
    },
    {
      "term": "Underwater submersibles",
      "def": "Vehicles that let researchers explore parts of the ocean they could never otherwise access.",
      "lesson": 1
    },
    {
      "term": "Global ocean",
      "def": "All the world's oceans are connected, forming one huge global ocean that covers more than 70% of Earth's surface. (Your sheet said 75%.)",
      "lesson": 1
    },
    {
      "term": "Five largest oceans",
      "def": "Pacific, Atlantic, Indian, Arctic, and Southern.",
      "lesson": 1
    },
    {
      "term": "Pacific Ocean",
      "def": "The largest ocean. Home to the Mariana Trench, the deepest point on Earth. Split into 2 parts by the Equator.",
      "lesson": 1
    },
    {
      "term": "Mariana Trench",
      "def": "The deepest point on Earth, located in the Pacific Ocean.",
      "lesson": 1
    },
    {
      "term": "Atlantic Ocean",
      "def": "The second-largest ocean. Home to the Bermuda Triangle. Split into 2 parts by the Equator.",
      "lesson": 1
    },
    {
      "term": "Bermuda Triangle",
      "def": "A region in the Atlantic Ocean.",
      "lesson": 1
    },
    {
      "term": "Equator (oceans)",
      "def": "Splits both the Atlantic Ocean and the Pacific Ocean into 2 parts.",
      "lesson": 1
    },
    {
      "term": "Southern Ocean",
      "def": "The name didn't exist until 2000; it was known as the Antarctic Ocean.",
      "lesson": 1
    },
    {
      "term": "Antarctic Ocean",
      "def": "The earlier name for the Southern Ocean (before 2000).",
      "lesson": 1
    },
    {
      "term": "Arctic Ocean",
      "def": "The smallest and shallowest ocean.",
      "lesson": 1
    },
    {
      "term": "Sodium chloride",
      "def": "The most common ocean salt; the same as table salt.",
      "lesson": 2
    },
    {
      "term": "How salt gets into the ocean",
      "def": "Rivers and streams dissolve minerals on land, including salt, and carry them to the ocean.",
      "lesson": 2
    },
    {
      "term": "Why oceans stay salty",
      "def": "When water evaporates, the salt stays behind.",
      "lesson": 2
    },
    {
      "term": "Salinity and climate",
      "def": "Hotter, drier climates have higher salinity than cool areas because warm temperatures cause more evaporation.",
      "lesson": 2
    },
    {
      "term": "Density",
      "def": "How heavy or thick the water is.",
      "lesson": 2
    },
    {
      "term": "Salt and density",
      "def": "Salt adds mass, which increases salinity and density.",
      "lesson": 2
    },
    {
      "term": "Temperature and density",
      "def": "The colder the water, the more dense it is.",
      "lesson": 2
    },
    {
      "term": "Changes with depth",
      "def": "As you go deeper, temperature drops and pressure and density increase.",
      "lesson": 2
    },
    {
      "term": "Sunlight zone",
      "def": "The shallow zone that gets the most sunlight, where most photosynthesis occurs.",
      "lesson": 2
    },
    {
      "term": "Twilight zone",
      "def": "The zone where most sunlight is gone.",
      "lesson": 2
    },
    {
      "term": "Midnight zone",
      "def": "The deepest light zone, where plants don't grow and most animals make their own light (bioluminescence).",
      "lesson": 2
    },
    {
      "term": "Bioluminescence",
      "def": "Light that animals make themselves, especially in the midnight zone.",
      "lesson": 2
    },
    {
      "term": "Continental shelf",
      "def": "The shallow, gently sloping extension of the continent under water. It extends hundreds of miles and is usually less than 200 meters deep.",
      "lesson": 3
    },
    {
      "term": "Why the continental shelf matters",
      "def": "It is an important fishing area and is home to coral reefs and kelp forests.",
      "lesson": 3
    },
    {
      "term": "Abyssal plains",
      "def": "The flattest regions on Earth. They stretch thousands of km and cover more of Earth's surface than all the continents combined.",
      "lesson": 3
    },
    {
      "term": "Deep-sea life",
      "def": "Life on the abyssal plains is adapted to extreme cold, pressure, and darkness.",
      "lesson": 3
    },
    {
      "term": "Greatest demand (ocean resources)",
      "def": "Food.",
      "lesson": 4
    },
    {
      "term": "Fishing",
      "def": "A living ocean resource; a multi-billion-dollar industry.",
      "lesson": 4
    },
    {
      "term": "Aquaculture",
      "def": "Raising seafood in ponds to sell.",
      "lesson": 4
    },
    {
      "term": "Seaweed",
      "def": "A living resource used as a thickener in jelly.",
      "lesson": 4
    },
    {
      "term": "Oil and natural gas",
      "def": "Non-living ocean resources (petroleum). They are nonrenewable.",
      "lesson": 4
    },
    {
      "term": "Nodules",
      "def": "Seafloor minerals that are difficult to retrieve, so they are expensive.",
      "lesson": 4
    },
    {
      "term": "Desalination",
      "def": "Making fresh water from ocean water.",
      "lesson": 4
    },
    {
      "term": "Plastic pollution",
      "def": "Trash and plastic dumping in the ocean; plastics can harm or kill animals.",
      "lesson": 4
    },
    {
      "term": "Oil spills",
      "def": "A form of ocean pollution.",
      "lesson": 4
    },
    {
      "term": "Currents",
      "def": "Giant streams of water flowing within the ocean.",
      "lesson": 5
    },
    {
      "term": "Two categories of currents",
      "def": "Surface currents and deep water currents.",
      "lesson": 5
    },
    {
      "term": "What causes surface currents",
      "def": "The biggest factor is air currents, or wind. The stronger and longer the wind blows, the stronger the current.",
      "lesson": 5
    },
    {
      "term": "Global (prevailing) wind belts",
      "def": "They greatly affect surface currents. The winds always blow in the same direction.",
      "lesson": 5
    },
    {
      "term": "Major surface currents",
      "def": "They are named and always travel the same way; some are warm and some are cold. (Predictable is also a fair word.)",
      "lesson": 5
    },
    {
      "term": "Crest",
      "def": "The highest point of a wave.",
      "lesson": 5
    },
    {
      "term": "Trough",
      "def": "The lowest point between two crests.",
      "lesson": 5
    },
    {
      "term": "Wave height",
      "def": "Measured from the trough to the crest.",
      "lesson": 5
    },
    {
      "term": "What determines wave height",
      "def": "The speed of the wind and the length of time it blows.",
      "lesson": 5
    },
    {
      "term": "Rip currents",
      "def": "One of the greatest dangers to swimmers.",
      "lesson": 5
    }
  ],
  "tests": [
    {
      "id": "oceans-practice",
      "name": "Practice Test",
      "desc": "40 questions · mixed multiple choice, fill-in, and short answer · same as the printed test",
      "questions": [
        {
          "id": "oc1",
          "lesson": 1,
          "q": "What is oceanography?",
          "choices": [
            "The science of studying only the animals in the ocean",
            "The science of studying the water, plants, animals and land in the ocean",
            "A tool ships use to send a ping to the ocean floor",
            "The name for the shallow part of a continent under water"
          ],
          "answer": 1,
          "explain": "Oceanography is the science of studying the water, plants, animals and land in the ocean."
        },
        {
          "id": "oc2",
          "lesson": 1,
          "q": "What does SONAR stand for?",
          "choices": [
            "Salt, Ocean, Navigation And Research",
            "Southern Ocean Navigation And Rescue",
            "Sound Navigation and Ranging",
            "Signal, Number, Angle, and Range"
          ],
          "answer": 2,
          "explain": "SONAR stands for Sound Navigation and Ranging."
        },
        {
          "id": "oc3",
          "lesson": 1,
          "type": "input",
          "q": "When scientists map the ocean floor, the ship sends out a signal called a ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "ping"
                ]
              ],
              "placeholder": "Type your answer",
              "alsoAccept": [
                "a ping",
                "the ping",
                "ping signal",
                "a ping signal"
              ]
            }
          ],
          "answerText": "ping",
          "explain": "The ship sends out a signal called a ping."
        },
        {
          "id": "oc4",
          "lesson": 1,
          "type": "input",
          "label": "Short answer",
          "q": "List the steps scientists use to map the ocean floor with SONAR.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "ping",
                  "signal",
                  "sound"
                ],
                [
                  "time",
                  "bounce",
                  "return",
                  "back"
                ],
                [
                  "depth",
                  "deep",
                  "map",
                  "floor"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "1) The ship sends out a ping. 2) Scientists time how long the sound waves take to reach the bottom and bounce back. 3) That measurement lets them calculate the depth. 4) They use the data to map the ocean floor.",
          "explain": "You need the idea of a ping/signal, timing the bounce back, and using that to find the depth or map the floor."
        },
        {
          "id": "oc5",
          "lesson": 1,
          "q": "What do underwater submersibles let researchers do?",
          "choices": [
            "Make fresh water from ocean water",
            "Raise seafood in ponds to sell",
            "Explore parts of the ocean they could never otherwise access",
            "Measure wave height from the trough to the crest"
          ],
          "answer": 2,
          "explain": "Underwater submersibles let researchers explore parts of the ocean they could never otherwise access."
        },
        {
          "id": "oc6",
          "lesson": 1,
          "type": "input",
          "q": "The world's oceans are connected as one huge global ocean. About how much of Earth's surface do they cover?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "70",
                  "71",
                  "75"
                ]
              ],
              "placeholder": "Type the amount (a percent is fine)",
              "alsoAccept": [
                "more than 70%",
                "more than 70 percent",
                "more than 70",
                "over 70%",
                "over 70",
                "over 70 percent",
                "70%",
                "71%",
                "75%",
                "70 percent",
                "71 percent",
                "75 percent",
                "about 75%",
                "about 70%",
                "more then 70%"
              ]
            }
          ],
          "answerText": "more than 70% (your sheet said 75%; 70, 71, or 75 all count)",
          "explain": "The notes use more than 70% of Earth's surface. Your sheet said 75%, so 70, 71, or 75 are all accepted here."
        },
        {
          "id": "oc7",
          "lesson": 1,
          "q": "Which ocean is the largest, and what famous feature is found there?",
          "choices": [
            "Atlantic Ocean; the Bermuda Triangle",
            "Pacific Ocean; the Mariana Trench",
            "Arctic Ocean; the Mariana Trench",
            "Southern Ocean; the Bermuda Triangle"
          ],
          "answer": 1,
          "explain": "The Pacific is the largest ocean and is home to the Mariana Trench, the deepest point on Earth."
        },
        {
          "id": "oc8",
          "lesson": 1,
          "q": "Which two oceans are each split into 2 parts by the Equator?",
          "choices": [
            "Indian and Arctic",
            "Arctic and Southern",
            "Atlantic and Pacific",
            "Pacific and Arctic"
          ],
          "answer": 2,
          "explain": "Both the Atlantic and the Pacific are split into 2 parts by the Equator. The Atlantic is also the second-largest ocean and home to the Bermuda Triangle."
        },
        {
          "id": "oc9",
          "lesson": 1,
          "type": "input",
          "q": "The name Southern Ocean didn't exist until 2000. What was that ocean known as before then?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "antarctic"
                ]
              ],
              "placeholder": "Type your answer",
              "alsoAccept": [
                "antarctic ocean",
                "the antarctic ocean",
                "antarctic",
                "the antarctic"
              ]
            }
          ],
          "answerText": "the Antarctic Ocean",
          "explain": "The name Southern Ocean didn't exist until 2000; it was known as the Antarctic Ocean."
        },
        {
          "id": "oc10",
          "lesson": 1,
          "q": "Which ocean is the smallest and shallowest?",
          "choices": [
            "Pacific Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean"
          ],
          "answer": 3,
          "explain": "The Arctic is the smallest and shallowest ocean."
        },
        {
          "id": "oc11",
          "lesson": 2,
          "q": "Most ocean salt is ____, which is the same as table salt.",
          "choices": [
            "calcium carbonate",
            "sodium chloride",
            "potassium iodide",
            "magnesium sulfate"
          ],
          "answer": 1,
          "explain": "Most ocean salt is sodium chloride, the same as table salt."
        },
        {
          "id": "oc12",
          "lesson": 2,
          "q": "How does salt get into the ocean?",
          "choices": [
            "Salt falls from clouds during storms",
            "Animals in the midnight zone make salt",
            "Rivers and streams dissolve minerals on land, including salt, and carry them to the ocean",
            "Desalination plants add salt to seawater"
          ],
          "answer": 2,
          "explain": "Rivers and streams dissolve minerals on land, including salt, and carry them to the ocean. When water evaporates, the salt stays behind."
        },
        {
          "id": "oc13",
          "lesson": 2,
          "q": "When ocean water evaporates, what happens to the salt?",
          "choices": [
            "The salt evaporates with the water",
            "The salt stays behind",
            "The salt turns into freshwater",
            "The salt sinks into the midnight zone and disappears"
          ],
          "answer": 1,
          "explain": "When water evaporates, the salt stays behind. That is a big reason the ocean stays salty."
        },
        {
          "id": "oc14",
          "lesson": 2,
          "type": "input",
          "q": "Why do hotter, drier climates have higher salinity than cool areas?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "evaporat",
                  "evapourat"
                ],
                [
                  "warm",
                  "hot",
                  "heat",
                  "high temperature",
                  "higher temperature"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "Hotter, drier climates have higher salinity because warm temperatures cause more evaporation.",
          "explain": "Warm temperatures cause more evaporation, so more water leaves and more salt is left behind.",
          "label": "Short answer"
        },
        {
          "id": "oc15",
          "lesson": 2,
          "type": "input",
          "q": "Density is how ____ or ____ the water is.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "heavy"
                ],
                [
                  "thick"
                ]
              ],
              "placeholder": "Type both words",
              "alsoAccept": [
                "heavy or thick",
                "thick or heavy",
                "heavy and thick",
                "thick and heavy"
              ]
            }
          ],
          "answerText": "heavy or thick",
          "explain": "Density is how heavy or thick the water is."
        },
        {
          "id": "oc16",
          "lesson": 2,
          "q": "Which statement about density is true?",
          "choices": [
            "Salt adds mass, which increases salinity and density, and colder water is more dense",
            "Salt lowers density, and warmer water is always more dense",
            "Density stays the same no matter how salty or cold the water is",
            "Only pressure, not salt or temperature, can change density"
          ],
          "answer": 0,
          "explain": "Salt adds mass, which increases salinity and density. The colder the water, the more dense it is."
        },
        {
          "id": "oc17",
          "lesson": 2,
          "q": "As you go deeper in the ocean, what happens to temperature, pressure, and density?",
          "choices": [
            "Temperature rises, and pressure and density decrease",
            "Temperature, pressure, and density all decrease",
            "Temperature drops, and pressure and density increase",
            "Temperature and pressure drop, but density stays the same"
          ],
          "answer": 2,
          "explain": "As you go deeper, temperature drops and pressure and density increase."
        },
        {
          "id": "oc18",
          "lesson": 2,
          "q": "Which zone is shallow, gets the most sunlight, and is where most photosynthesis occurs?",
          "choices": [
            "The twilight zone",
            "The sunlight zone",
            "The midnight zone",
            "The abyssal plain"
          ],
          "answer": 1,
          "explain": "The sunlight zone is shallow, gets the most sunlight, and is where most photosynthesis occurs."
        },
        {
          "id": "oc19",
          "lesson": 2,
          "q": "In the midnight zone, plants don't grow and most animals ____.",
          "choices": [
            "must swim up to the sunlight zone every day to eat plants",
            "make their own light (bioluminescence)",
            "live only on the continental shelf",
            "cannot survive the darkness at all"
          ],
          "answer": 1,
          "explain": "In the midnight zone, plants don't grow and most animals make their own light (bioluminescence). The twilight zone is the one where most sunlight is gone."
        },
        {
          "id": "oc20",
          "lesson": 3,
          "q": "What is the continental shelf?",
          "choices": [
            "The flattest region on Earth, in the deep ocean",
            "The shallow, gently sloping extension of the continent under water",
            "A seafloor mineral that is expensive to retrieve",
            "The deepest point on Earth, in the Pacific Ocean"
          ],
          "answer": 1,
          "explain": "The continental shelf is the shallow, gently sloping extension of the continent under water."
        },
        {
          "id": "oc21",
          "lesson": 3,
          "type": "input",
          "q": "The continental shelf is usually less than how many meters deep?",
          "fields": [
            {
              "kind": "number",
              "value": 200,
              "placeholder": "Type the number",
              "alsoAccept": [
                "200 meters",
                "200 m",
                "less than 200",
                "less than 200 meters",
                "less than 200 m",
                "under 200",
                "under 200 meters",
                "<200",
                "< 200",
                "usually less than 200",
                "usually less than 200 meters"
              ],
              "unit": "meters"
            }
          ],
          "answerText": "200 meters (usually less than 200 meters deep)",
          "explain": "The continental shelf is usually less than 200 meters deep. It extends hundreds of miles and is an important fishing area, home to coral reefs and kelp forests."
        },
        {
          "id": "oc22",
          "lesson": 3,
          "type": "input",
          "label": "Short answer",
          "q": "Describe the continental shelf and name one reason it is important.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "shelf",
                  "extension",
                  "continent",
                  "slope",
                  "sloping"
                ],
                [
                  "shallow",
                  "200",
                  "fish",
                  "fishing",
                  "coral",
                  "kelp"
                ]
              ],
              "placeholder": "Type a sentence or two"
            }
          ],
          "answerText": "The continental shelf is the shallow, gently sloping extension of the continent under water. It is usually less than 200 meters deep, is an important fishing area, and is home to coral reefs and kelp forests.",
          "explain": "Mention that it is the shallow underwater edge of a continent, plus a fact such as its depth, fishing, coral reefs, or kelp forests."
        },
        {
          "id": "oc23",
          "lesson": 3,
          "q": "Which statement about abyssal plains is true?",
          "choices": [
            "They are steep underwater mountains near the shore",
            "They are the flattest regions on Earth, stretch thousands of km, and cover more of Earth's surface than all the continents combined",
            "They are usually less than 200 meters deep",
            "They are where most photosynthesis occurs"
          ],
          "answer": 1,
          "explain": "Abyssal plains are the flattest regions on Earth. They stretch thousands of km and cover more of Earth's surface than all the continents combined."
        },
        {
          "id": "oc24",
          "lesson": 3,
          "q": "Deep-sea life on the abyssal plains is adapted to ____.",
          "choices": [
            "hot water, low pressure, and bright sunlight",
            "extreme cold, pressure, and darkness",
            "living in kelp forests and coral reefs",
            "fresh water made by desalination"
          ],
          "answer": 1,
          "explain": "Deep-sea life there is adapted to extreme cold, pressure, and darkness."
        },
        {
          "id": "oc25",
          "lesson": 4,
          "q": "The greatest demand for ocean resources is for ____.",
          "choices": [
            "gold",
            "nodules",
            "food",
            "desalination machines"
          ],
          "answer": 2,
          "explain": "The greatest demand is for food."
        },
        {
          "id": "oc26",
          "lesson": 4,
          "q": "What is aquaculture?",
          "choices": [
            "Dumping trash and plastic into the ocean",
            "Raising seafood in ponds to sell",
            "Making fresh water from ocean water",
            "A multi-billion-dollar industry that only harvests wild fish"
          ],
          "answer": 1,
          "explain": "Aquaculture is raising seafood in ponds to sell. Fishing is the multi-billion-dollar industry that harvests wild seafood."
        },
        {
          "id": "oc27",
          "lesson": 4,
          "type": "input",
          "q": "Seaweed is a living ocean resource. What is it used as in jelly?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "thicken",
                  "thickener",
                  "thickening"
                ]
              ],
              "placeholder": "Type your answer",
              "alsoAccept": [
                "a thickener",
                "thickener",
                "as a thickener",
                "thickener in jelly"
              ]
            }
          ],
          "answerText": "a thickener",
          "explain": "Seaweed is used as a thickener in jelly."
        },
        {
          "id": "oc28",
          "lesson": 4,
          "q": "Oil and natural gas from the ocean are a type of ____, and they are ____.",
          "choices": [
            "living resource; renewable",
            "petroleum (non-living resource); nonrenewable",
            "seafloor mineral called nodules; easy to retrieve",
            "desalination product; made from seaweed"
          ],
          "answer": 1,
          "explain": "Oil and natural gas are petroleum, a non-living resource, and they are nonrenewable."
        },
        {
          "id": "oc29",
          "lesson": 4,
          "q": "Seafloor minerals called nodules are expensive mainly because they are ____.",
          "choices": [
            "already used as a thickener in jelly",
            "renewable and very common",
            "difficult to retrieve",
            "only found on the continental shelf"
          ],
          "answer": 2,
          "explain": "Nodules are difficult to retrieve, so they are expensive."
        },
        {
          "id": "oc30",
          "lesson": 4,
          "type": "input",
          "q": "What is the word for making fresh water from ocean water?",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "desalin"
                ]
              ],
              "placeholder": "Type your answer",
              "alsoAccept": [
                "desalination",
                "desalinization",
                "desalinisation",
                "desalinate",
                "to desalinate"
              ]
            }
          ],
          "answerText": "desalination",
          "explain": "Desalination is making fresh water from ocean water."
        },
        {
          "id": "oc31",
          "lesson": 4,
          "q": "Which of these is a way people pollute the ocean?",
          "choices": [
            "Aquaculture in ponds",
            "Using seaweed as a thickener",
            "Trash and plastic dumping, which can harm or kill animals, and oil spills",
            "Mapping the ocean floor with SONAR"
          ],
          "answer": 2,
          "explain": "Pollution includes trash and plastic dumping (plastics can harm or kill animals) and oil spills."
        },
        {
          "id": "oc32",
          "lesson": 5,
          "type": "input",
          "q": "Giant streams of water flowing within the ocean are called ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "current"
                ]
              ],
              "placeholder": "Type your answer",
              "alsoAccept": [
                "currents",
                "a current",
                "ocean currents",
                "ocean current"
              ]
            }
          ],
          "answerText": "currents",
          "explain": "Giant streams of water flowing within the ocean are called currents. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc33",
          "lesson": 5,
          "q": "What are the two categories of ocean currents?",
          "choices": [
            "Warm currents and rip currents",
            "Surface currents and deep water currents",
            "Crest currents and trough currents",
            "Pacific currents and Atlantic currents"
          ],
          "answer": 1,
          "explain": "The two categories are surface currents and deep water currents. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc34",
          "lesson": 5,
          "q": "What is the biggest factor causing surface currents?",
          "choices": [
            "Earthquakes on the abyssal plains",
            "Desalination plants along the coast",
            "Air currents, or wind",
            "Oil spills"
          ],
          "answer": 2,
          "explain": "The biggest factor causing surface currents is air currents, or wind. The stronger and longer the wind blows, the stronger the current. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc35",
          "lesson": 5,
          "q": "Which statement about global (prevailing) wind belts is true?",
          "choices": [
            "They have no effect on surface currents",
            "They greatly affect surface currents, and the winds always blow in the same direction",
            "They only blow at night in the midnight zone",
            "They change direction every hour, so currents cannot be named"
          ],
          "answer": 1,
          "explain": "Global (prevailing) wind belts greatly affect surface currents; the winds always blow in the same direction. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc36",
          "lesson": 5,
          "type": "input",
          "q": "Major surface currents of the world are ____ and always travel the same way; some are warm and some are cold.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "named",
                  "predictable",
                  "name"
                ]
              ],
              "placeholder": "Type your answer",
              "alsoAccept": [
                "named",
                "predictable",
                "named / predictable",
                "named and predictable"
              ]
            }
          ],
          "answerText": "named (predictable also counts)",
          "explain": "Major surface currents are named and always travel the same way. \"Predictable\" is also accepted. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc37",
          "lesson": 5,
          "type": "input",
          "q": "The highest point of a wave is called the ____. The lowest point between two crests is called the ____.",
          "fields": [
            {
              "kind": "text",
              "keywords": [
                [
                  "crest"
                ]
              ],
              "placeholder": "Highest point",
              "alsoAccept": [
                "the crest",
                "crest"
              ],
              "label": "Highest point"
            },
            {
              "kind": "text",
              "keywords": [
                [
                  "trough"
                ]
              ],
              "placeholder": "Lowest point",
              "alsoAccept": [
                "the trough",
                "trough"
              ],
              "label": "Lowest point"
            }
          ],
          "answerText": "crest; trough",
          "explain": "The crest is the highest point of a wave. The trough is the lowest point between two crests. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc38",
          "lesson": 5,
          "q": "Wave height is measured from the ____ to the ____.",
          "choices": [
            "shore to the open ocean",
            "trough to the crest",
            "sunlight zone to the midnight zone",
            "continental shelf to the abyssal plain"
          ],
          "answer": 1,
          "explain": "Wave height is measured from the trough to the crest. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc39",
          "lesson": 5,
          "q": "What determines the height (size) of a wave?",
          "choices": [
            "The salinity of the water and the number of fish nearby",
            "The speed of the wind and the length of time it blows",
            "Whether the current is named or not",
            "How deep the continental shelf is"
          ],
          "answer": 1,
          "explain": "The speed of the wind and the length of time it blows determine the height (size) of a wave. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        },
        {
          "id": "oc40",
          "lesson": 5,
          "q": "Which of these is one of the greatest dangers to swimmers?",
          "choices": [
            "Abyssal plains",
            "Kelp forests",
            "Rip currents",
            "Desalination"
          ],
          "answer": 2,
          "explain": "Rip currents are one of the greatest dangers to swimmers. Check this with your class notes — Lesson 5 answers were filled in by Roo."
        }
      ]
    }
  ]
},
];
