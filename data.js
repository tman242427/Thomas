/*
 * data.js — ALL of the content for Thomas's Science Lab lives in this file.
 *
 * To add a new SUBJECT (e.g. Math, Social Studies), copy the "science" or "ela" object
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
 * Password: edit PASSWORD below. (It is only a light gate — anyone who views the
 * page source can see it. Don't put private information in this app.)
 */
window.APP_CONFIG = {
  password: "thomas6",
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
    "id": "religion",
    "name": "Elizabeth's Religion test",
    "emoji": "🕊️",
    "tagline": "Unit 2: Pentecost & Confirmation (Lessons 6–7)",
    "intro": "Pick a mode to get ready for the Religion test on Pentecost and Confirmation. You've got this! 💪",
    "lessons": [
      {
        "id": 6,
        "name": "Lesson 6 · Pentecost"
      },
      {
        "id": 7,
        "name": "Lesson 7 · Confirmation"
      }
    ],
    "notes": [
      {
        "id": "l6",
        "short": "L6 Pentecost",
        "title": "Lesson 6: Pentecost, The Day Everything Changed",
        "html": "<h2>Lesson 6: Pentecost, The Day Everything Changed</h2>\n<h3>1. The Story Before Pentecost</h3>\n<ul>\n<li>The <strong>Resurrection</strong> is when Jesus rose from the dead <strong>three days</strong> after His death.</li>\n<li>After His Resurrection, Jesus <strong>appeared to His followers</strong> and showed them that He was truly alive.</li>\n<li>The <strong>Ascension</strong> is when Jesus <strong>returned to Heaven</strong> after giving His followers a mission.</li>\n<li>Jesus promised that the <strong>Holy Spirit</strong> would give His followers <strong>power</strong> to carry out His mission.</li>\n<li>A <strong>witness</strong> tells others what they have seen, heard, or experienced.</li>\n<li>The <strong>Apostles</strong> were called to share what they knew and believed about Jesus.</li>\n<li><em>Why might the Apostles have needed help?</em> They needed <strong>courage and strength</strong> to share their faith because they were <strong>ordinary people</strong>.</li>\n</ul>\n<h3>2. The Jewish Feast of Pentecost</h3>\n<ul>\n<li>Pentecost was already a <strong>Jewish harvest festival</strong>.</li>\n<li>It was celebrated <strong>50 days after Passover</strong>.</li>\n<li>People from <strong>different places</strong> gathered in <strong>Jerusalem</strong>.</li>\n<li>They could hear the Apostles' message and <strong>share it when they returned home</strong>.</li>\n</ul>\n<h3>3. What Happened at Pentecost?</h3>\n<ul>\n<li>A sound like a <strong>strong, rushing wind</strong> was heard.</li>\n<li>What seemed like <strong>tongues of fire</strong> rested on the Apostles.</li>\n<li>The Apostles <strong>spoke in different languages</strong>, so people from different places could understand the message.</li>\n<li><strong>Peter</strong> proclaimed the Good News about Jesus, and about <strong>3,000 people</strong> believed and were baptized that day.</li>\n</ul>\n<h3>4. Before, During, and After Pentecost</h3>\n<ul>\n<li><strong>Before:</strong> Jesus gave His followers a mission and promised the Holy Spirit.</li>\n<li><strong>At Pentecost:</strong> The Holy Spirit strengthened the Apostles, who proclaimed Jesus' message (the Good News).</li>\n<li><strong>After:</strong> Many people believed and were baptized.</li>\n</ul>\n<h3>5. Understanding Pentecost</h3>\n<ul>\n<li>Pentecost is often called the <strong>birthday of the Church</strong> because the Holy Spirit strengthened the Apostles to proclaim the Good News <strong>publicly</strong>.</li>\n<li>Christians continue Jesus' mission by sharing the Good News through their <strong>words and actions</strong>.</li>\n<li>The authority to teach and lead the Church continues today through the ministry of <strong>bishops and priests</strong>.</li>\n<li>The Apostles needed the Holy Spirit to give them <strong>courage and strength</strong> to share their faith.</li>\n</ul>\n<div class=\"key-terms\">\n<h3>6. Vocabulary</h3>\n<p class=\"term-row\"><strong>Witness</strong> — someone who shares what he or she has seen, heard, or experienced.</p>\n<p class=\"term-row\">Christians witness to Jesus through their <strong>words and actions</strong>.</p>\n</div>"
      },
      {
        "id": "l7",
        "short": "L7 Confirmation",
        "title": "Lesson 7: Confirmation, From Sacrament to Mission",
        "html": "<h2>Lesson 7: Confirmation, From Sacrament to Mission</h2>\n<h3>1. What Is Confirmation?</h3>\n<ul>\n<li>Confirmation is one of the <strong>seven sacraments</strong>.</li>\n<li>Confirmation <strong>deepens the grace received in Baptism</strong> and strengthens our relationship with God and the Church.</li>\n<li><strong>Baptism, Confirmation, and the Eucharist</strong> are the three <strong>Sacraments of Christian Initiation</strong>.</li>\n<li>Confirmation strengthens Christians to be <strong>witnesses to Jesus</strong> through their words and actions.</li>\n</ul>\n<h3>2. Signs and Symbols of Confirmation</h3>\n<ul>\n<li><strong>Laying on of hands</strong> — a sign of blessing and the giving of the Holy Spirit.</li>\n<li><strong>Sacred Chrism</strong> — the blessed oil used to anoint the person being confirmed.</li>\n<li><strong>Sponsor</strong> — offers support and encouragement in living the Christian faith.</li>\n<li><strong>Bishop</strong> — the ordinary minister of Confirmation. A <strong>priest</strong> may also confirm in certain circumstances.</li>\n</ul>\n<div class=\"key-terms\">\n<h3>3. The Seven Gifts of the Holy Spirit</h3>\n<p class=\"term-row\"><strong>1. Wisdom</strong> — helps us see what is truly good and make good choices.</p>\n<p class=\"term-row\"><strong>2. Understanding</strong> — helps us understand our faith more deeply.</p>\n<p class=\"term-row\"><strong>3. Counsel (Right Judgment)</strong> — helps us choose what we should do.</p>\n<p class=\"term-row\"><strong>4. Fortitude (Courage)</strong> — helps us do what is right even when it is difficult.</p>\n<p class=\"term-row\"><strong>5. Knowledge</strong> — helps us recognize God's truth and plan.</p>\n<p class=\"term-row\"><strong>6. Piety (Reverence)</strong> — helps us love and worship God and treat others with respect.</p>\n<p class=\"term-row\"><strong>7. Fear of the Lord (Wonder and Awe)</strong> — helps us recognize God's greatness and respond with wonder and awe.</p>\n</div>\n<h3>4. Confirmation and Our Mission</h3>\n<ul>\n<li>At Pentecost, the Holy Spirit strengthened the Apostles for their mission.</li>\n<li>Confirmation strengthens the grace of Baptism and helps Christians live as <strong>witnesses to Jesus</strong>.</li>\n<li><strong>Christian witness</strong> means showing and sharing faith in Jesus through words and actions.</li>\n<li>The Holy Spirit's gifts help us <strong>put our faith into action</strong>.</li>\n</ul>\n<h3>5. Christian Witness</h3>\n<ul>\n<li>Being a Christian witness means <strong>living in a way that reflects Jesus</strong>.</li>\n<li>A fifth grader can witness to Jesus at school by <strong>helping people feel included and loved</strong>.</li>\n<li>One way to show faith through actions is by using <strong>kind words and kind actions</strong>.</li>\n</ul>"
      },
      {
        "id": "review",
        "short": "Review",
        "title": "Review: Big Ideas & Short Answers",
        "html": "<h2>Review: Big Ideas</h2>\n<ul>\n<li><strong>Why Pentecost matters:</strong> the Holy Spirit came upon the Apostles and strengthened them to proclaim the Good News.</li>\n<li>Pentecost is the <strong>birthday of the Church</strong>.</li>\n<li>The Apostles shared the <strong>Good News</strong> about Jesus.</li>\n<li>Confirmation <strong>strengthens the grace received in Baptism</strong>.</li>\n<li>The ordinary minister of Confirmation is the <strong>bishop</strong>.</li>\n<li>The Sacraments of Initiation: <strong>Baptism, Confirmation, and Eucharist</strong>.</li>\n<li>The seven gifts: <strong>Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, Fear of the Lord</strong>.</li>\n<li>Christians continue Jesus' mission and witness through <strong>words and actions</strong>.</li>\n</ul>\n<h3>Short answers</h3>\n<p><strong>Why is Pentecost called the birthday of the Church?</strong><br>The Holy Spirit strengthened the Apostles to proclaim the Good News publicly. (Jesus already had followers before Pentecost.)</p>\n<p><strong>How does Confirmation help Christians live out their faith?</strong><br>It helps us put our faith into action by helping us be witnesses to Jesus.</p>\n<p><strong>One way to be a witness at school:</strong><br>Be welcoming to a new student, be a friend, and help them feel loved and included.</p>"
      }
    ],
    "flashcards": [
      {
        "term": "Resurrection",
        "def": "When Jesus rose from the dead three days after His death.",
        "lesson": 6
      },
      {
        "term": "What did Jesus do after His Resurrection?",
        "def": "He appeared to His followers and showed them that He was truly alive.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Ascension",
        "def": "When Jesus returned to Heaven after giving His followers a mission.",
        "lesson": 6
      },
      {
        "term": "What did Jesus promise His followers before the Ascension?",
        "def": "That the Holy Spirit would give them power to carry out His mission.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Witness",
        "def": "Someone who tells others what he or she has seen, heard, or experienced.",
        "lesson": 6
      },
      {
        "term": "What were the Apostles called to do?",
        "def": "Share what they knew and believed about Jesus.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Why did the Apostles need help with their mission?",
        "def": "They were ordinary people, so they needed courage and strength to share their faith.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "What was Pentecost before the Church?",
        "def": "A Jewish harvest festival.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "When was the Jewish Pentecost celebrated?",
        "def": "50 days after Passover.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Where did people gather for Pentecost?",
        "def": "In Jerusalem, coming from many different places.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Why did it matter that visitors came from many places?",
        "def": "They heard the Apostles' message and could share it when they returned home.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "What sound was heard at Pentecost?",
        "def": "A sound like a strong, rushing wind.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "What rested on the Apostles at Pentecost?",
        "def": "What seemed like tongues of fire.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Why did the Apostles speak in different languages?",
        "def": "So people from different places could understand the message.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Who proclaimed the Good News at Pentecost?",
        "def": "Peter.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "How many people believed and were baptized at Pentecost?",
        "def": "About 3,000.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Before Pentecost",
        "def": "Jesus gave His followers a mission and promised the Holy Spirit.",
        "lesson": 6
      },
      {
        "term": "At Pentecost",
        "def": "The Holy Spirit strengthened the Apostles, who proclaimed Jesus' message (the Good News).",
        "lesson": 6
      },
      {
        "term": "After Pentecost",
        "def": "Many people believed and were baptized.",
        "lesson": 6
      },
      {
        "term": "Birthday of the Church",
        "def": "Pentecost. The Holy Spirit strengthened the Apostles to proclaim the Good News publicly.",
        "lesson": 6
      },
      {
        "term": "How do Christians continue Jesus' mission?",
        "def": "By sharing the Good News through their words and actions.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Who continues the authority to teach and lead the Church today?",
        "def": "Bishops and priests, through their ministry.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "How do Christians witness to Jesus?",
        "def": "Through their words and actions.",
        "lesson": 6,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Confirmation",
        "def": "One of the seven sacraments. It deepens the grace received in Baptism and strengthens our relationship with God and the Church.",
        "lesson": 7
      },
      {
        "term": "Sacraments of Christian Initiation",
        "def": "Baptism, Confirmation, and the Eucharist.",
        "lesson": 7
      },
      {
        "term": "What does Confirmation strengthen Christians to be?",
        "def": "Witnesses to Jesus through their words and actions.",
        "lesson": 7,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Laying on of hands",
        "def": "A sign of blessing and the giving of the Holy Spirit.",
        "lesson": 7
      },
      {
        "term": "Sacred Chrism",
        "def": "The blessed oil used to anoint the person being confirmed.",
        "lesson": 7
      },
      {
        "term": "Sponsor",
        "def": "A person who offers support and encouragement in living the Christian faith.",
        "lesson": 7
      },
      {
        "term": "Ordinary minister of Confirmation",
        "def": "The bishop. A priest may also confirm in certain circumstances.",
        "lesson": 7
      },
      {
        "term": "Wisdom",
        "def": "Helps us see what is truly good and make good choices.",
        "lesson": 7
      },
      {
        "term": "Understanding",
        "def": "Helps us understand our faith more deeply.",
        "lesson": 7
      },
      {
        "term": "Counsel (Right Judgment)",
        "def": "Helps us choose what we should do.",
        "lesson": 7
      },
      {
        "term": "Fortitude (Courage)",
        "def": "Helps us do what is right even when it is difficult.",
        "lesson": 7
      },
      {
        "term": "Knowledge",
        "def": "Helps us recognize God's truth and plan.",
        "lesson": 7
      },
      {
        "term": "Piety (Reverence)",
        "def": "Helps us love and worship God and treat others with respect.",
        "lesson": 7
      },
      {
        "term": "Fear of the Lord (Wonder and Awe)",
        "def": "Helps us recognize God's greatness and respond with wonder and awe.",
        "lesson": 7
      },
      {
        "term": "Name the Seven Gifts of the Holy Spirit",
        "def": "Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, Fear of the Lord.",
        "lesson": 7,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Christian witness",
        "def": "Showing and sharing faith in Jesus through words and actions; living in a way that reflects Jesus.",
        "lesson": 7
      },
      {
        "term": "How do the Holy Spirit's gifts help us?",
        "def": "They help us put our faith into action.",
        "lesson": 7,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "How can a 5th grader witness to Jesus at school?",
        "def": "Help people feel included and loved, like welcoming a new student and being a friend.",
        "lesson": 7,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "How does Confirmation help Christians live out their faith?",
        "def": "It helps us put faith into action by helping us be witnesses to Jesus.",
        "lesson": 7,
        "front": "Question",
        "back": "Answer"
      }
    ],
    "tests": [
      {
        "id": "practice",
        "name": "Practice Test",
        "desc": "All 42 questions · 4 choices each · shuffled",
        "shuffle": true,
        "questions": [
          {
            "id": "r6_1",
            "lesson": 6,
            "q": "What is the Resurrection?",
            "choices": [
              "Jesus returning to Heaven",
              "The Holy Spirit coming upon the Apostles",
              "Jesus being baptized in the Jordan River",
              "Jesus rising from the dead three days after His death"
            ],
            "answer": 3,
            "explain": "The Resurrection is when Jesus rose from the dead three days after His death."
          },
          {
            "id": "r6_2",
            "lesson": 6,
            "q": "What did Jesus do after His Resurrection?",
            "choices": [
              "Went straight back to Heaven without seeing anyone",
              "Hid from His followers until Pentecost",
              "Wrote letters to the Apostles",
              "Appeared to His followers and showed them He was truly alive"
            ],
            "answer": 3,
            "explain": "After His Resurrection, Jesus appeared to His followers and showed them that He was truly alive."
          },
          {
            "id": "r6_3",
            "lesson": 6,
            "q": "What is the Ascension?",
            "choices": [
              "When Jesus rose from the dead",
              "When the Holy Spirit came as tongues of fire",
              "When Jesus returned to Heaven after giving His followers a mission",
              "When Peter baptized 3,000 people"
            ],
            "answer": 2,
            "explain": "The Ascension is when Jesus returned to Heaven after giving His followers a mission."
          },
          {
            "id": "r6_4",
            "lesson": 6,
            "q": "What did Jesus promise would give His followers power to carry out His mission?",
            "choices": [
              "A great army",
              "Gold and silver",
              "The Holy Spirit",
              "The Roman emperor"
            ],
            "answer": 2,
            "explain": "Jesus promised that the Holy Spirit would give His followers power to carry out His mission."
          },
          {
            "id": "r6_5",
            "lesson": 6,
            "q": "What does a witness do?",
            "choices": [
              "Keeps what he or she saw a secret",
              "Writes the laws of the Church",
              "Tells others what he or she has seen, heard, or experienced",
              "Only listens and never speaks"
            ],
            "answer": 2,
            "explain": "A witness tells others what they have seen, heard, or experienced."
          },
          {
            "id": "r6_6",
            "lesson": 6,
            "q": "What were the Apostles called to do?",
            "choices": [
              "Build a temple in Jerusalem",
              "Stay quiet and wait in hiding",
              "Share what they knew and believed about Jesus",
              "Become kings and rulers"
            ],
            "answer": 2,
            "explain": "The Apostles were called to share what they knew and believed about Jesus."
          },
          {
            "id": "r6_7",
            "lesson": 6,
            "q": "Why might the Apostles have needed help carrying out their mission?",
            "choices": [
              "They did not know who Jesus was",
              "They were ordinary people who needed courage and strength",
              "They did not want to share their faith",
              "They were too busy with the harvest"
            ],
            "answer": 1,
            "explain": "The Apostles were ordinary people, so they needed courage and strength to share their faith."
          },
          {
            "id": "r6_8",
            "lesson": 6,
            "q": "Before it was a Christian feast, what was Pentecost?",
            "choices": [
              "A Roman holiday",
              "A winter festival of lights",
              "A Jewish harvest festival",
              "The day Jesus was born"
            ],
            "answer": 2,
            "explain": "Pentecost was already a Jewish harvest festival."
          },
          {
            "id": "r6_9",
            "lesson": 6,
            "q": "When was the Jewish feast of Pentecost celebrated?",
            "choices": [
              "50 days after Passover",
              "3 days after Passover",
              "40 days before Passover",
              "On Christmas Day"
            ],
            "answer": 0,
            "explain": "Pentecost was celebrated 50 days after Passover."
          },
          {
            "id": "r6_10",
            "lesson": 6,
            "q": "Where did people from many different places gather for Pentecost?",
            "choices": [
              "Bethlehem",
              "Jerusalem",
              "Rome",
              "Nazareth"
            ],
            "answer": 1,
            "explain": "People from different places gathered in Jerusalem."
          },
          {
            "id": "r6_11",
            "lesson": 6,
            "q": "Why was it important that people from many places were in Jerusalem at Pentecost?",
            "choices": [
              "They could hear the Apostles' message and share it when they returned home",
              "They could buy food for the harvest",
              "They could vote for a new king",
              "They could build a new city"
            ],
            "answer": 0,
            "explain": "Visitors heard the Apostles' message and could share it when they returned home."
          },
          {
            "id": "r6_12",
            "lesson": 6,
            "q": "What sound was heard at Pentecost?",
            "choices": [
              "A trumpet blast",
              "A sound like a strong, rushing wind",
              "Church bells ringing",
              "Thunder and rain"
            ],
            "answer": 1,
            "explain": "A sound like a strong, rushing wind was heard."
          },
          {
            "id": "r6_13",
            "lesson": 6,
            "q": "What seemed to rest on the Apostles at Pentecost?",
            "choices": [
              "White doves",
              "Golden crowns",
              "Tongues of fire",
              "Drops of water"
            ],
            "answer": 2,
            "explain": "What seemed like tongues of fire rested on the Apostles."
          },
          {
            "id": "r6_14",
            "lesson": 6,
            "q": "Why did the Apostles speak in different languages at Pentecost?",
            "choices": [
              "To confuse the crowd",
              "Because they forgot their own language",
              "So people from different places could understand the message",
              "To keep the message a secret"
            ],
            "answer": 2,
            "explain": "The Apostles spoke in different languages so people from different places could understand the message."
          },
          {
            "id": "r6_15",
            "lesson": 6,
            "q": "Who proclaimed the Good News about Jesus at Pentecost?",
            "choices": [
              "Pontius Pilate",
              "Peter",
              "King Herod",
              "Moses"
            ],
            "answer": 1,
            "explain": "Peter proclaimed the Good News about Jesus at Pentecost."
          },
          {
            "id": "r6_16",
            "lesson": 6,
            "q": "About how many people believed and were baptized on Pentecost?",
            "choices": [
              "About 12",
              "About 50",
              "About 3,000",
              "About 300"
            ],
            "answer": 2,
            "explain": "About 3,000 people believed and were baptized that day."
          },
          {
            "id": "r6_17",
            "lesson": 6,
            "q": "What happened BEFORE Pentecost?",
            "choices": [
              "Jesus gave His followers a mission and promised the Holy Spirit",
              "3,000 people were baptized",
              "The Apostles spoke in many languages",
              "Tongues of fire rested on the Apostles"
            ],
            "answer": 0,
            "explain": "Before Pentecost, Jesus gave His followers a mission and promised the Holy Spirit."
          },
          {
            "id": "r6_18",
            "lesson": 6,
            "q": "What happened AFTER Pentecost?",
            "choices": [
              "Many people believed and were baptized",
              "Jesus rose from the dead",
              "Jesus promised to send the Holy Spirit",
              "The Apostles stopped preaching"
            ],
            "answer": 0,
            "explain": "After Pentecost, many people believed and were baptized."
          },
          {
            "id": "r6_19",
            "lesson": 6,
            "q": "Why is Pentecost often called the birthday of the Church?",
            "choices": [
              "It was the first time Jesus had any followers",
              "It is the day Jesus was born",
              "The Holy Spirit strengthened the Apostles to proclaim the Good News publicly",
              "It is the day the first church building was finished"
            ],
            "answer": 2,
            "explain": "The Holy Spirit strengthened the Apostles to proclaim the Good News publicly. Jesus already had followers before Pentecost."
          },
          {
            "id": "r6_20",
            "lesson": 6,
            "q": "How do Christians continue Jesus' mission today?",
            "choices": [
              "By keeping their faith to themselves",
              "Only by reading books",
              "By sharing the Good News through their words and actions",
              "By waiting for another Pentecost"
            ],
            "answer": 2,
            "explain": "Christians continue Jesus' mission by sharing the Good News through their words and actions."
          },
          {
            "id": "r6_21",
            "lesson": 6,
            "q": "Through whose ministry does the authority to teach and lead the Church continue today?",
            "choices": [
              "Kings and queens",
              "Bishops and priests",
              "Teachers and coaches",
              "Mayors and governors"
            ],
            "answer": 1,
            "explain": "The authority to teach and lead the Church continues today through the ministry of bishops and priests."
          },
          {
            "id": "r6_22",
            "lesson": 6,
            "q": "Why did the Apostles need the Holy Spirit?",
            "choices": [
              "To make them rich",
              "To help them win battles",
              "To give them courage and strength to share their faith",
              "To help them bring in the harvest"
            ],
            "answer": 2,
            "explain": "The Apostles needed the Holy Spirit to give them courage and strength to share their faith."
          },
          {
            "id": "r7_23",
            "lesson": 7,
            "q": "Confirmation is one of how many sacraments?",
            "choices": [
              "Seven",
              "Three",
              "Five",
              "Twelve"
            ],
            "answer": 0,
            "explain": "Confirmation is one of the seven sacraments."
          },
          {
            "id": "r7_24",
            "lesson": 7,
            "q": "What does Confirmation do for the grace we received in Baptism?",
            "choices": [
              "Deepens it and strengthens our relationship with God and the Church",
              "Replaces it",
              "Takes it away",
              "Has nothing to do with it"
            ],
            "answer": 0,
            "explain": "Confirmation deepens the grace received in Baptism and strengthens our relationship with God and the Church."
          },
          {
            "id": "r7_25",
            "lesson": 7,
            "q": "Which are the three Sacraments of Christian Initiation?",
            "choices": [
              "Baptism, Marriage, and Holy Orders",
              "Reconciliation, Confirmation, and Anointing of the Sick",
              "Eucharist, Marriage, and Reconciliation",
              "Baptism, Confirmation, and the Eucharist"
            ],
            "answer": 3,
            "explain": "Baptism, Confirmation, and the Eucharist are the three Sacraments of Christian Initiation."
          },
          {
            "id": "r7_26",
            "lesson": 7,
            "q": "Confirmation strengthens Christians to be what?",
            "choices": [
              "Kings and rulers",
              "Silent about their faith",
              "Witnesses to Jesus through their words and actions",
              "Only church builders"
            ],
            "answer": 2,
            "explain": "Confirmation strengthens Christians to be witnesses to Jesus through their words and actions."
          },
          {
            "id": "r7_27",
            "lesson": 7,
            "q": "What is the laying on of hands a sign of?",
            "choices": [
              "Blessing and the giving of the Holy Spirit",
              "Saying goodbye",
              "Being punished",
              "Winning a contest"
            ],
            "answer": 0,
            "explain": "Laying on of hands is a sign of blessing and the giving of the Holy Spirit."
          },
          {
            "id": "r7_28",
            "lesson": 7,
            "q": "What is Sacred Chrism?",
            "choices": [
              "The water used in Baptism",
              "The bread used at Mass",
              "A candle lit at Easter",
              "The blessed oil used to anoint the person being confirmed"
            ],
            "answer": 3,
            "explain": "Sacred Chrism is the blessed oil used to anoint the person being confirmed."
          },
          {
            "id": "r7_29",
            "lesson": 7,
            "q": "What does a Confirmation sponsor do?",
            "choices": [
              "Performs the sacrament instead of the bishop",
              "Makes the Sacred Chrism",
              "Offers support and encouragement in living the Christian faith",
              "Writes the Bible readings"
            ],
            "answer": 2,
            "explain": "A sponsor offers support and encouragement in living the Christian faith."
          },
          {
            "id": "r7_30",
            "lesson": 7,
            "q": "Who is the ordinary minister of Confirmation?",
            "choices": [
              "The sponsor",
              "The bishop",
              "The parents",
              "Any member of the parish"
            ],
            "answer": 1,
            "explain": "The bishop is the ordinary minister of Confirmation. A priest may also confirm in certain circumstances."
          },
          {
            "id": "r7_31",
            "lesson": 7,
            "q": "Which gift of the Holy Spirit helps us see what is truly good and make good choices?",
            "choices": [
              "Wisdom",
              "Fortitude",
              "Piety",
              "Fear of the Lord"
            ],
            "answer": 0,
            "explain": "Wisdom helps us see what is truly good and make good choices."
          },
          {
            "id": "r7_32",
            "lesson": 7,
            "q": "Which gift helps us understand our faith more deeply?",
            "choices": [
              "Counsel",
              "Fortitude",
              "Piety",
              "Understanding"
            ],
            "answer": 3,
            "explain": "Understanding helps us understand our faith more deeply."
          },
          {
            "id": "r7_33",
            "lesson": 7,
            "q": "Which gift, also called Right Judgment, helps us choose what we should do?",
            "choices": [
              "Knowledge",
              "Counsel",
              "Fear of the Lord",
              "Piety"
            ],
            "answer": 1,
            "explain": "Counsel (Right Judgment) helps us choose what we should do."
          },
          {
            "id": "r7_34",
            "lesson": 7,
            "q": "Which gift, also called Courage, helps us do what is right even when it is difficult?",
            "choices": [
              "Fortitude",
              "Wisdom",
              "Understanding",
              "Knowledge"
            ],
            "answer": 0,
            "explain": "Fortitude (Courage) helps us do what is right even when it is difficult."
          },
          {
            "id": "r7_35",
            "lesson": 7,
            "q": "Which gift helps us recognize God's truth and plan?",
            "choices": [
              "Knowledge",
              "Fortitude",
              "Piety",
              "Counsel"
            ],
            "answer": 0,
            "explain": "Knowledge helps us recognize God's truth and plan."
          },
          {
            "id": "r7_36",
            "lesson": 7,
            "q": "Which gift, also called Reverence, helps us love and worship God and treat others with respect?",
            "choices": [
              "Wisdom",
              "Piety",
              "Fortitude",
              "Counsel"
            ],
            "answer": 1,
            "explain": "Piety (Reverence) helps us love and worship God and treat others with respect."
          },
          {
            "id": "r7_37",
            "lesson": 7,
            "q": "Which gift, also called Wonder and Awe, helps us recognize God's greatness?",
            "choices": [
              "Understanding",
              "Fear of the Lord",
              "Counsel",
              "Knowledge"
            ],
            "answer": 1,
            "explain": "Fear of the Lord (Wonder and Awe) helps us recognize God's greatness and respond with wonder and awe."
          },
          {
            "id": "r7_38",
            "lesson": 7,
            "q": "Which of these is NOT one of the Seven Gifts of the Holy Spirit?",
            "choices": [
              "Wisdom",
              "Wealth",
              "Fortitude",
              "Piety"
            ],
            "answer": 1,
            "explain": "The seven gifts are Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord. Wealth is not one of them."
          },
          {
            "id": "r7_39",
            "lesson": 7,
            "q": "What does Christian witness mean?",
            "choices": [
              "Watching a baseball game",
              "Showing and sharing faith in Jesus through words and actions",
              "Keeping your faith a secret",
              "Only going to church on holidays"
            ],
            "answer": 1,
            "explain": "Christian witness means showing and sharing faith in Jesus through words and actions. It means living in a way that reflects Jesus."
          },
          {
            "id": "r7_40",
            "lesson": 7,
            "q": "How do the gifts of the Holy Spirit help us?",
            "choices": [
              "They make us better than other people",
              "They help us win games",
              "They take the place of prayer",
              "They help us put our faith into action"
            ],
            "answer": 3,
            "explain": "The Holy Spirit's gifts help us put our faith into action."
          },
          {
            "id": "r7_41",
            "lesson": 7,
            "q": "Which is the BEST way a fifth grader can witness to Jesus at school?",
            "choices": [
              "Leave a new student out at lunch",
              "Tease classmates who are different",
              "Keep to yourself and ignore others",
              "Welcome a new student and help them feel included and loved"
            ],
            "answer": 3,
            "explain": "A fifth grader can witness to Jesus at school by helping people feel included and loved, like welcoming a new student and being a friend."
          },
          {
            "id": "r7_42",
            "lesson": 7,
            "q": "How does Confirmation connect to Pentecost?",
            "choices": [
              "Just as the Holy Spirit strengthened the Apostles at Pentecost, Confirmation strengthens us to be witnesses",
              "Confirmation is only celebrated on Passover",
              "Confirmation is when Jesus rose from the dead",
              "They are not connected at all"
            ],
            "answer": 0,
            "explain": "At Pentecost the Holy Spirit strengthened the Apostles for their mission. Confirmation strengthens the grace of Baptism and helps us live as witnesses to Jesus."
          }
        ]
      }
    ]
  }
];
