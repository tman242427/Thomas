/*
 * data.js — content for Elizabeth's Study Lab (5th grade).
 * Served from /elizabeth/. Shared app code lives in the parent folder.
 *
 * To add a new SUBJECT, copy an existing subject object inside SUBJECTS and
 * change the fields. When there are 2+ subjects the home screen shows a
 * subject picker automatically.
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
 * gateKey must stay different from Thomas's site (same origin, shared localStorage).
 */
window.APP_CONFIG = {
  password: "Elizabeth3",
  gateKey: "elizabeth_lab_unlocked_v1",
  name: "Elizabeth",
  title: "Elizabeth's Study Lab",
  subtitle: "5th Grade",
  greeting: "Hey Elizabeth!",
  icon: "📚"
};

window.SUBJECTS = [
  {
    "id": "religion",
    "name": "Religion: Lessons 6-7",
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
  },
  {
    "id": "escience",
    "name": "Science: Unit 2 Lessons 1-2",
    "emoji": "🌱",
    "tagline": "5th grade · What makes living things alive & how they get energy",
    "intro": "Pick a mode to get ready for the science test on living things and energy. You've got this! 💪",
    "lessons": [
      {
        "id": 1,
        "name": "L1 · What Makes Living Things Alive?"
      },
      {
        "id": 2,
        "name": "L2 · How Organisms Obtain Energy"
      }
    ],
    "notes": [
      {
        "id": "l1",
        "short": "L1 Alive",
        "title": "Lesson 1: What Makes Living Things Alive?",
        "html": "<h2>Lesson 1: What Makes Living Things Alive?</h2>\n<p>All living things are called <strong>organisms</strong>. Organisms share the <strong>characteristics of life</strong>.</p>\n<h3>1. Made of cells</h3>\n<ul>\n<li>A <strong>cell</strong> is the smallest unit with the basic properties of life.</li>\n<li><strong>Unicellular</strong> means made of one cell. Bacteria and yeast are unicellular.</li>\n<li><strong>Multicellular</strong> means made of many cells (two or more). Dogs and trees are multicellular.</li>\n</ul>\n<h3>2. Have DNA</h3>\n<ul>\n<li><strong>DNA</strong> is the material in cells that carries all the information about how an organism looks and works.</li>\n<li>DNA is the <strong>blueprint of life</strong>. It has the instructions to grow, develop, survive, and reproduce.</li>\n</ul>\n<h3>3. Respond to stimuli</h3>\n<ul>\n<li>Living things are sensitive. They react to what is around them.</li>\n<li>You put on a sweater when you feel cold. A rabbit freezes so it can check for a predator.</li>\n<li>Plants respond to light, gravity, temperature, chemicals, and touch. They do it slowly, by changing how fast they grow or which way they grow.</li>\n</ul>\n<h3>4. Reproduce</h3>\n<ul>\n<li><strong>Reproduction</strong> is one organism making one or more new organisms.</li>\n<li>Some unicellular organisms, like bacteria, divide into two new identical organisms.</li>\n<li>Some organisms need a mate. Others can reproduce without a mate.</li>\n<li>Different organisms have different numbers of offspring. Humans usually have 1 or 2 babies at a time. Frogs can have hundreds.</li>\n</ul>\n<h3>5. Pass on traits</h3>\n<ul>\n<li>Passing genes to offspring makes the new organisms similar to their parents.</li>\n<li><strong>Animals:</strong> stripes on a tiger, a skunk's ability to spray, and overall size.</li>\n<li><strong>Plants:</strong> the color or shape of flowers, height, the shape of leaves, and the size of fruit.</li>\n<li><strong>Inherited traits</strong> are in your DNA. Height, eye color, and hair color are inherited traits.</li>\n</ul>\n<h3>6. Grow and develop</h3>\n<ul>\n<li>All organisms begin as a single cell. Then they take on the characteristics of their species.</li>\n<li>Multicellular organisms grow by <strong>adding more cells</strong>. Growth increases size and mass.</li>\n<li><strong>Development</strong> means changes over a lifetime. A tadpole developing into a frog is an amazing example.</li>\n</ul>\n<h3>7. Use energy</h3>\n<ul>\n<li>All organisms use energy. Digesting, thinking, reading, and even sleeping use energy.</li>\n<li>Cells use energy to transport substances, make new cells, and perform chemical reactions.</li>\n<li>Humans and other animals eat. Food is digested and changed so we can grow, move, stay warm, and repair our bodies.</li>\n<li>Plants get energy by <strong>photosynthesis</strong>. They take in sunlight through their leaves.</li>\n</ul>\n<div class=\"callout\"><strong>Quick check:</strong> A tree and bacteria are made of cells. A spoon, a kitchen sponge, and plastic are not. Living things need energy to grow, move, stay warm, and repair their bodies. The six vocabulary words are in the Vocabulary section.</div>"
      },
      {
        "id": "l2",
        "short": "L2 Energy",
        "title": "Lesson 2: How Organisms Obtain Energy",
        "html": "<h2>Lesson 2: How Do Organisms Obtain Energy?</h2>\n<p>Living things need energy to survive. <strong>Chemical energy</strong> is the kind used by all living things and by every cell to carry out life processes. Organisms cannot survive without the chemical energy from food.</p>\n<p>Some living things make their own food. Some get food by eating other living things.</p>\n<div class=\"sphere-grid\">\n<div class=\"sphere-pill\"><strong>Producer</strong> Makes its own food. Plants, algae, and some one-celled organisms are producers. Big or tiny, a producer changes sunlight into chemical energy.</div>\n<div class=\"sphere-pill\"><strong>Consumer</strong> Gets energy by eating other living things. Some eat producers. Some eat other consumers. Consumers include all animals, fungi, and many single-celled organisms.</div>\n</div>\n<h3>Four types of consumers</h3>\n<div class=\"sphere-grid\">\n<div class=\"sphere-pill\"><strong>Herbivore</strong> Eats only plants. Some eat fruit, some eat seeds, and a <strong>folivore</strong> eats leaves. Cows, goats, rabbits, deer, and giraffes are herbivores.</div>\n<div class=\"sphere-pill\"><strong>Carnivore</strong> Eats other animals. An <strong>obligate carnivore</strong> relies entirely on animal flesh. Wolves, cats, owls, dogs, and lions are carnivores.</div>\n<div class=\"sphere-pill\"><strong>Omnivore</strong> Eats both plants and animals, often whatever is easy to find. Orangutans, hedgehogs, chickens, ducks, pigs, and bears are omnivores.</div>\n<div class=\"sphere-pill\"><strong>Decomposer</strong> Breaks down dead plants and animals into small bits. That puts nutrients back into the soil so they can be used again. Mushrooms, earthworms, and bacteria are decomposers.</div>\n</div>\n<div class=\"callout\"><strong>Remember:</strong> Herbivore and carnivore describe how an animal's body is built, not what it likes. Humans are always omnivores, even if a person chooses not to eat meat. A cow's body can only digest plants. A cow would get sick from eating meat. When you classify, call mushrooms, worms, and bacteria <strong>decomposers</strong>.</div>\n<div class=\"practice-box\">\n<h3>Classify</h3>\n<ul>\n<li><strong>Producer:</strong> apple tree, carrot, bamboo</li>\n<li><strong>Consumer:</strong> eagle, dragonfly, cougar</li>\n<li><strong>Decomposer:</strong> mushroom, bacteria, and a worm that breaks down dead things</li>\n</ul>\n</div>"
      },
      {
        "id": "vocab",
        "short": "Vocabulary",
        "title": "Vocabulary",
        "html": "<h2>Vocabulary</h2>\n<p>These six words were on the worksheet. Learn what each one means.</p>\n<div class=\"key-terms\">\n<h3>Six words to know</h3>\n<p class=\"term-row\"><strong>Living</strong> — Something that is alive and has all the characteristics of life (made of cells, has DNA, responds to stimuli, reproduces, grows and develops, and uses energy).</p>\n<p class=\"term-row\"><strong>Nonliving</strong> — Something that is not alive and does not have all the characteristics of life. A rock, water, a spoon, and plastic are nonliving.</p>\n<p class=\"term-row\"><strong>Biotic</strong> — The living parts of an environment. Plants, animals, fungi, and bacteria are biotic.</p>\n<p class=\"term-row\"><strong>Abiotic</strong> — The nonliving parts of an environment. Sunlight, water, air, rocks, soil, and temperature are abiotic.</p>\n<p class=\"term-row\"><strong>Energy</strong> — The ability to do work or cause change. Living things need energy to grow, move, and stay alive.</p>\n<p class=\"term-row\"><strong>Characteristics</strong> — The traits or features that describe something, like the characteristics of life.</p>\n</div>\n<h3>More lesson words</h3>\n<ul>\n<li><strong>Organism</strong> — a living thing.</li>\n<li><strong>Cell</strong> — the smallest unit with the basic properties of life.</li>\n<li><strong>Unicellular / multicellular</strong> — one cell / many cells.</li>\n<li><strong>DNA</strong> — the blueprint of life inside cells.</li>\n<li><strong>Stimulus</strong> — something in the environment a living thing reacts to.</li>\n<li><strong>Inherited trait</strong> — a feature passed from parents to offspring through DNA.</li>\n<li><strong>Producer</strong> — makes its own food.</li>\n<li><strong>Consumer</strong> — gets energy by eating other living things.</li>\n<li><strong>Herbivore, carnivore, omnivore, decomposer</strong> — eats plants / eats animals / eats both / breaks down dead things.</li>\n</ul>"
      },
      {
        "id": "check",
        "short": "Check",
        "title": "Check Your Understanding",
        "html": "<h2>Check Your Understanding</h2>\n<h3>Lesson 1</h3>\n<ul>\n<li>All living things are made of cells.</li>\n<li>Unicellular means one cell. Multicellular means two or more cells.</li>\n<li>A tree and bacteria are made of cells. A spoon, a kitchen sponge, and plastic are not.</li>\n<li>Energy is needed to grow, move, stay warm, and repair bodies.</li>\n<li>Inherited traits include height, eye color, and hair color.</li>\n</ul>\n<h3>Lesson 2</h3>\n<ul>\n<li>Plants and animals are called organisms.</li>\n<li>Organisms need chemical energy.</li>\n<li>A rabbit eating vegetables is a herbivore because it eats only plants.</li>\n<li>A worm breaking down dead things is a decomposer.</li>\n</ul>\n<div class=\"practice-box\">\n<h3>Say the group out loud</h3>\n<ul>\n<li>Apple tree — producer</li>\n<li>Eagle — consumer</li>\n<li>Mushroom — decomposer</li>\n<li>Carrot — producer</li>\n<li>Dragonfly — consumer</li>\n<li>Bamboo — producer</li>\n<li>Cougar — consumer</li>\n<li>Bacteria — decomposer</li>\n</ul>\n</div>\n<div class=\"callout\"><strong>Memory line:</strong> Producers cook their own food from sunlight. Consumers eat. Decomposers clean up what has died and feed the soil.</div>"
      }
    ],
    "flashcards": [
      {
        "term": "Organism",
        "def": "A living thing. All living things are called organisms, and they share the characteristics of life.",
        "lesson": 1
      },
      {
        "term": "Living",
        "def": "Something that is alive and has all the characteristics of life: made of cells, has DNA, responds to stimuli, reproduces, grows and develops, and uses energy.",
        "lesson": 1
      },
      {
        "term": "Nonliving",
        "def": "Something that is not alive and does not have all the characteristics of life. Examples: a rock, water, a spoon, and plastic.",
        "lesson": 1
      },
      {
        "term": "Biotic",
        "def": "The living parts of an environment, such as plants, animals, fungi, and bacteria.",
        "lesson": 1
      },
      {
        "term": "Abiotic",
        "def": "The nonliving parts of an environment, such as sunlight, water, air, rocks, soil, and temperature.",
        "lesson": 1
      },
      {
        "term": "Energy",
        "def": "The ability to do work or cause change. Living things need energy to grow, move, and stay alive.",
        "lesson": 1
      },
      {
        "term": "Characteristics",
        "def": "The traits or features that describe something, like the characteristics of life.",
        "lesson": 1
      },
      {
        "term": "Cell",
        "def": "The smallest unit with the basic properties of life. All living things are made of cells.",
        "lesson": 1
      },
      {
        "term": "Unicellular",
        "def": "Made of one cell. Bacteria and yeast are unicellular.",
        "lesson": 1
      },
      {
        "term": "Multicellular",
        "def": "Made of many cells (two or more). Dogs and trees are multicellular.",
        "lesson": 1
      },
      {
        "term": "DNA",
        "def": "The material in cells that carries all the information about how an organism looks and works. It is the blueprint of life.",
        "lesson": 1
      },
      {
        "term": "What is DNA often called?",
        "def": "The blueprint of life. It holds the instructions to grow, develop, survive, and reproduce.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Respond to stimuli",
        "def": "Living things sense their environment and react. You put on a sweater when you are cold. A rabbit freezes to check for a predator.",
        "lesson": 1
      },
      {
        "term": "How do plants respond to their environment?",
        "def": "They respond to light, gravity, temperature, chemicals, and touch by slowly changing how fast they grow or which way they grow.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Reproduce",
        "def": "Reproduction is one organism making one or more new organisms. Some need a mate, and some reproduce without a mate.",
        "lesson": 1
      },
      {
        "term": "How do some bacteria reproduce?",
        "def": "They divide into two new identical organisms.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Inherited trait",
        "def": "A feature passed from parents to offspring through genes, so the offspring are similar to their parents. Inherited traits are in your DNA.",
        "lesson": 1
      },
      {
        "term": "What are some inherited traits of animals?",
        "def": "Stripes on a tiger, a skunk's ability to spray, and overall size.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "What are some inherited traits of plants?",
        "def": "Flower color or shape, height, the shape of leaves, and the size of fruit.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Grow and develop",
        "def": "Every organism starts as one cell, then takes on the traits of its species. Growth makes it bigger. Development is change over a lifetime.",
        "lesson": 1
      },
      {
        "term": "How do multicellular organisms grow?",
        "def": "They add more cells. Growth increases size and mass.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "What is an amazing example of development?",
        "def": "A tadpole developing into a frog.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Why do living things need energy?",
        "def": "To grow, move, stay warm, and repair their bodies. Cells use energy to move substances, make new cells, and do chemical reactions.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "How do plants get energy?",
        "def": "By photosynthesis. They capture sunlight through their leaves and turn it into food.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "How many offspring do humans and frogs usually have?",
        "def": "Humans usually have 1 or 2 babies at a time. Frogs can have hundreds.",
        "lesson": 1,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Chemical energy",
        "def": "The energy all living things and every cell use to carry out life processes. Organisms cannot survive without the chemical energy from food.",
        "lesson": 2
      },
      {
        "term": "Producer",
        "def": "A living thing that makes its own food, such as plants, algae, and some one-celled organisms. It changes sunlight into chemical energy.",
        "lesson": 2
      },
      {
        "term": "Consumer",
        "def": "A living thing that gets energy by eating other living things. All animals, fungi, and many single-celled organisms are consumers.",
        "lesson": 2
      },
      {
        "term": "Herbivore",
        "def": "A consumer that eats only plants. Cows, goats, rabbits, deer, and giraffes are herbivores. Some eat fruit, seeds, or leaves.",
        "lesson": 2
      },
      {
        "term": "Folivore",
        "def": "A herbivore that eats leaves. Folivore means leaf eater.",
        "lesson": 2
      },
      {
        "term": "Carnivore",
        "def": "A consumer that eats other animals. Wolves, cats, owls, dogs, and lions are carnivores.",
        "lesson": 2
      },
      {
        "term": "Obligate carnivore",
        "def": "An animal that relies entirely on animal flesh. Meat is the only food its body is built to use.",
        "lesson": 2
      },
      {
        "term": "Omnivore",
        "def": "A consumer that eats both plants and animals, often whatever is easy to find. Orangutans, hedgehogs, chickens, ducks, pigs, and bears are omnivores.",
        "lesson": 2
      },
      {
        "term": "Decomposer",
        "def": "Breaks down dead plants and animals into small bits and puts nutrients back into the soil. Mushrooms, earthworms, and bacteria are decomposers.",
        "lesson": 2
      },
      {
        "term": "Is a person who never eats meat still an omnivore?",
        "def": "Yes. Humans are always omnivores. Herbivore and carnivore describe how a body is built, not what a person chooses to eat.",
        "lesson": 2,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Why would a cow get sick from eating meat?",
        "def": "A cow's body can only digest plants. Herbivore describes how its body is built, not a food it can choose.",
        "lesson": 2,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Apple tree: producer, consumer, or decomposer?",
        "def": "Producer. An apple tree makes its own food.",
        "lesson": 2,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Eagle: producer, consumer, or decomposer?",
        "def": "Consumer. An eagle gets energy by eating other animals.",
        "lesson": 2,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Mushroom: producer, consumer, or decomposer?",
        "def": "Decomposer. A mushroom breaks down dead material and returns nutrients to the soil.",
        "lesson": 2,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Carrot, bamboo, dragonfly, cougar, and bacteria?",
        "def": "Carrot and bamboo are producers. A dragonfly and a cougar are consumers. Bacteria that break down dead things are decomposers.",
        "lesson": 2,
        "front": "Question",
        "back": "Answer"
      }
    ],
    "tests": [
      {
        "id": "practice",
        "name": "Practice Test",
        "desc": "40 questions · multiple choice, true/false, classify, and short answer · shuffled",
        "shuffle": true,
        "questions": [
          {
            "id": "es_organism",
            "lesson": 1,
            "q": "All living things are called…",
            "choices": [
              "Organisms",
              "Minerals",
              "Plastics",
              "Stimuli"
            ],
            "answer": 0,
            "explain": "All living things are called organisms. They share the characteristics of life."
          },
          {
            "id": "es_cell",
            "lesson": 1,
            "q": "What is a cell?",
            "choices": [
              "A kind of rock in the soil",
              "The smallest unit with the basic properties of life",
              "A type of sunlight",
              "A group of many animals"
            ],
            "answer": 1,
            "explain": "A cell is the smallest unit with the basic properties of life. All living things are made of cells."
          },
          {
            "id": "es_uni",
            "lesson": 1,
            "q": "What does unicellular mean?",
            "choices": [
              "Made of many cells, like a dog",
              "Not made of any cells",
              "Made of exactly one cell, like bacteria or yeast",
              "Made only of plastic"
            ],
            "answer": 2,
            "explain": "Unicellular means one cell. Bacteria and yeast are unicellular. Multicellular means many cells."
          },
          {
            "id": "es_madeof",
            "lesson": 1,
            "q": "Which pair is made of cells?",
            "choices": [
              "A spoon and a piece of plastic",
              "A kitchen sponge and a rock",
              "A glass of water and a spoon",
              "A tree and bacteria"
            ],
            "answer": 3,
            "explain": "A tree and bacteria are made of cells. A spoon, a kitchen sponge, and plastic are nonliving."
          },
          {
            "id": "es_dna",
            "lesson": 1,
            "q": "What is DNA?",
            "choices": [
              "The material in cells that carries information about how an organism looks and works",
              "A nonliving rock",
              "Food that only plants eat",
              "Something found only in animals, never in plants"
            ],
            "answer": 0,
            "explain": "DNA is the blueprint of life. It has the instructions to grow, develop, survive, and reproduce."
          },
          {
            "id": "es_stimulus",
            "lesson": 1,
            "q": "Which is an example of responding to a stimulus?",
            "choices": [
              "A plastic spoon sitting on a table",
              "A rabbit freezing to check for a predator",
              "A rock sitting in the sun",
              "Water sitting in a glass"
            ],
            "answer": 1,
            "explain": "Living things react to their environment. A rabbit freezes to check for danger. Putting on a sweater when you are cold is another example."
          },
          {
            "id": "es_bacteria",
            "lesson": 1,
            "q": "How do some bacteria reproduce?",
            "choices": [
              "They lay hundreds of eggs like a frog",
              "They grow flowers",
              "They turn into rocks",
              "They divide into two new identical organisms"
            ],
            "answer": 3,
            "explain": "Some unicellular organisms, like bacteria, reproduce by dividing into two new identical organisms."
          },
          {
            "id": "es_trait",
            "lesson": 1,
            "q": "Which is an inherited trait?",
            "choices": [
              "A scar from falling off a bike",
              "Eye color",
              "A sweater you put on when you are cold",
              "A book you read at school"
            ],
            "answer": 1,
            "explain": "Eye color, hair color, and height are inherited traits. They are passed from parents through DNA. A scar, a sweater, and a book are not."
          },
          {
            "id": "es_develop",
            "lesson": 1,
            "q": "Which is an example of development?",
            "choices": [
              "A rock getting wet in the rain",
              "Ice melting into water",
              "A tadpole changing into a frog",
              "A spoon sitting in a drawer"
            ],
            "answer": 2,
            "explain": "Development is change over a lifetime. A tadpole changing into a frog is a great example. Growth is different: multicellular organisms grow by adding more cells, which increases size and mass."
          },
          {
            "id": "es_photo",
            "lesson": 1,
            "q": "How do plants get energy?",
            "choices": [
              "By eating other animals",
              "They do not need energy",
              "By drinking soda",
              "By photosynthesis, using sunlight through their leaves"
            ],
            "answer": 3,
            "explain": "Plants get energy by photosynthesis. Sunlight enters through their leaves and is changed into food."
          },
          {
            "id": "es_v_living",
            "lesson": 1,
            "q": "What does the word living mean?",
            "choices": [
              "Something that is alive and has all the characteristics of life",
              "Anything you can touch",
              "Only animals, not plants",
              "A thing that never uses energy"
            ],
            "answer": 0,
            "explain": "Living means something is alive and has all the characteristics of life: cells, DNA, response to stimuli, reproduction, growth and development, and using energy."
          },
          {
            "id": "es_v_nonliving",
            "lesson": 1,
            "q": "Which list is all nonliving?",
            "choices": [
              "Tree, dog, and bacteria",
              "Rock, spoon, and plastic",
              "Plant, mushroom, and yeast",
              "Rabbit, frog, and cow"
            ],
            "answer": 1,
            "explain": "Nonliving things are not alive. A rock, water, a spoon, and plastic do not have all the characteristics of life."
          },
          {
            "id": "es_v_biotic",
            "lesson": 1,
            "q": "Biotic means…",
            "choices": [
              "The nonliving parts of an environment, like rocks and temperature",
              "Another word for a plastic spoon",
              "The living parts of an environment, like plants, animals, fungi, and bacteria",
              "Only the sunlight in a habitat"
            ],
            "answer": 2,
            "explain": "Biotic means the living parts of an environment: plants, animals, fungi, and bacteria."
          },
          {
            "id": "es_v_abiotic",
            "lesson": 1,
            "q": "Which is abiotic?",
            "choices": [
              "A mushroom",
              "Sunlight",
              "A deer",
              "Bacteria"
            ],
            "answer": 1,
            "explain": "Abiotic means the nonliving parts of an environment. Sunlight, water, air, rocks, soil, and temperature are abiotic."
          },
          {
            "id": "es_v_energy",
            "lesson": 1,
            "q": "What is energy?",
            "choices": [
              "A trait passed from parents",
              "A cell with no DNA",
              "Another word for a decomposer",
              "The ability to do work or cause change"
            ],
            "answer": 3,
            "explain": "Energy is the ability to do work or cause change. Living things need it to grow, move, and stay alive."
          },
          {
            "id": "es_v_char",
            "lesson": 1,
            "q": "What are characteristics?",
            "choices": [
              "The traits or features that describe something",
              "Only the colors of rocks",
              "Things that are always nonliving",
              "Another name for producers"
            ],
            "answer": 0,
            "explain": "Characteristics are the traits or features that describe something, like the characteristics of life."
          },
          {
            "id": "es_tf_cells",
            "lesson": 1,
            "tf": true,
            "keepOrder": true,
            "q": "All living things are made of cells.",
            "choices": [
              "True",
              "False"
            ],
            "answer": 0,
            "explain": "True. Every organism is made of one or more cells. Cells are the smallest units with the basic properties of life."
          },
          {
            "id": "es_tf_spoon",
            "lesson": 1,
            "tf": true,
            "keepOrder": true,
            "q": "A plastic spoon is a living thing because you can hold it.",
            "choices": [
              "True",
              "False"
            ],
            "answer": 1,
            "explain": "False. A plastic spoon is nonliving. It is not made of cells and does not have the characteristics of life."
          },
          {
            "id": "es_tf_energy",
            "lesson": 1,
            "tf": true,
            "keepOrder": true,
            "q": "Living things need energy to grow, move, stay warm, and repair their bodies.",
            "choices": [
              "True",
              "False"
            ],
            "answer": 0,
            "explain": "True. Food is changed so animals can grow, move, stay warm, and repair their bodies. Plants get their energy from the sun."
          },
          {
            "id": "es_tf_chem",
            "lesson": 2,
            "tf": true,
            "keepOrder": true,
            "q": "Organisms can survive without the chemical energy from food.",
            "choices": [
              "True",
              "False"
            ],
            "answer": 1,
            "explain": "False. Chemical energy is used by every cell. Organisms cannot survive without the chemical energy from food."
          },
          {
            "id": "es_producer",
            "lesson": 2,
            "q": "What is a producer?",
            "choices": [
              "A living thing that makes its own food",
              "An animal that eats only meat",
              "A rock that sits in the sun",
              "A worm that eats dead leaves"
            ],
            "answer": 0,
            "explain": "A producer makes its own food. Plants, algae, and some one-celled organisms change sunlight into chemical energy."
          },
          {
            "id": "es_consumer",
            "lesson": 2,
            "q": "What is a consumer?",
            "choices": [
              "A living thing that makes food from sunlight",
              "A nonliving object like a spoon",
              "A living thing that gets energy by eating other living things",
              "Only a plant"
            ],
            "answer": 2,
            "explain": "A consumer gets energy by eating other living things. Animals, fungi, and many single-celled organisms are consumers."
          },
          {
            "id": "es_herb",
            "lesson": 2,
            "q": "A rabbit eats only vegetables. What kind of consumer is it?",
            "choices": [
              "Carnivore",
              "Herbivore",
              "Omnivore",
              "Decomposer"
            ],
            "answer": 1,
            "explain": "A herbivore eats only plants. Vegetables are plants, so the rabbit is a herbivore. Cows, goats, deer, and giraffes are herbivores too."
          },
          {
            "id": "es_carn",
            "lesson": 2,
            "q": "Wolves, cats, owls, and lions are examples of…",
            "choices": [
              "Herbivores",
              "Producers",
              "Abiotic things",
              "Carnivores"
            ],
            "answer": 3,
            "explain": "Carnivores eat other animals. An obligate carnivore relies entirely on animal flesh. Wolves, cats, owls, dogs, and lions are carnivores."
          },
          {
            "id": "es_omni",
            "lesson": 2,
            "q": "What is an omnivore?",
            "choices": [
              "An animal that eats only leaves",
              "A plant that makes its own food",
              "An animal that eats both plants and animals",
              "A nonliving part of the soil"
            ],
            "answer": 2,
            "explain": "An omnivore eats both plants and animals. Orangutans, hedgehogs, chickens, ducks, pigs, and bears are omnivores."
          },
          {
            "id": "es_decomp",
            "lesson": 2,
            "q": "What does a decomposer do?",
            "choices": [
              "Makes food from sunlight",
              "Hunts live lions for fun",
              "Eats only fresh fruit from a tree",
              "Breaks down dead plants and animals and puts nutrients back into the soil"
            ],
            "answer": 3,
            "explain": "Decomposers break down dead plants and animals into small bits. Mushrooms, earthworms, and bacteria put nutrients back into the soil."
          },
          {
            "id": "es_tf_human",
            "lesson": 2,
            "tf": true,
            "keepOrder": true,
            "q": "A person who chooses not to eat meat is no longer an omnivore.",
            "choices": [
              "True",
              "False"
            ],
            "answer": 1,
            "explain": "False. Humans are always omnivores. Herbivore and carnivore describe how a body is built, not what someone likes. A cow can only digest plants and would get sick from eating meat."
          },
          {
            "id": "es_c_apple",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify an apple tree?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 0,
            "explain": "An apple tree is a producer. It is a plant, so it makes its own food from sunlight."
          },
          {
            "id": "es_c_eagle",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify an eagle?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 1,
            "explain": "An eagle is a consumer. It gets energy by eating other animals."
          },
          {
            "id": "es_c_mushroom",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify a mushroom?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 2,
            "explain": "A mushroom is a decomposer. It breaks down dead material and puts nutrients back into the soil."
          },
          {
            "id": "es_c_carrot",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify a carrot?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 0,
            "explain": "A carrot is a producer. It is a plant that makes its own food."
          },
          {
            "id": "es_c_dragon",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify a dragonfly?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 1,
            "explain": "A dragonfly is a consumer. It gets energy by eating other living things."
          },
          {
            "id": "es_c_bamboo",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify bamboo?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 0,
            "explain": "Bamboo is a producer. It is a plant, so it makes its own food."
          },
          {
            "id": "es_c_cougar",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify a cougar?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 1,
            "explain": "A cougar is a consumer. It gets energy by eating other animals."
          },
          {
            "id": "es_c_bacteria",
            "lesson": 2,
            "label": "Classify",
            "q": "How should you classify bacteria that break down dead plants and animals?",
            "choices": [
              "Producer",
              "Consumer",
              "Decomposer"
            ],
            "answer": 2,
            "explain": "In this lesson, bacteria that break down dead material are decomposers. They return nutrients to the soil. Bacteria are also unicellular living things."
          },
          {
            "id": "es_t_herb",
            "lesson": 2,
            "type": "input",
            "q": "Short answer: What do we call an animal that eats only plants?",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "herbivore",
                    "plant eater",
                    "plant-eater",
                    "planteater"
                  ]
                ],
                "placeholder": "Type your answer",
                "alsoAccept": [
                  "eats only plants",
                  "only eats plants",
                  "eats plants only",
                  "only plants"
                ]
              }
            ],
            "answerText": "Herbivore (herbivores is fine too). A plant eater also counts.",
            "explain": "A herbivore eats only plants. Cows, rabbits, deer, and giraffes are herbivores."
          },
          {
            "id": "es_t_foli",
            "lesson": 2,
            "type": "input",
            "q": "Short answer: What do we call a herbivore that eats leaves?",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "folivore",
                    "leaf eater",
                    "leaf-eater",
                    "leafeater",
                    "leaf-eating",
                    "eats leaves",
                    "eat leaves",
                    "eating leaves"
                  ]
                ],
                "placeholder": "Type your answer"
              }
            ],
            "answerText": "Folivore. Leaf eater counts too.",
            "explain": "A folivore is a leaf eater. It is a kind of herbivore."
          },
          {
            "id": "es_t_blue",
            "lesson": 1,
            "type": "input",
            "q": "Short answer: DNA is often called the blueprint of life. Type that nickname.",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "blueprint",
                    "blue print"
                  ]
                ],
                "placeholder": "Type your answer"
              }
            ],
            "answerText": "The blueprint of life.",
            "explain": "DNA is called the blueprint of life because it holds the instructions to grow, develop, survive, and reproduce."
          },
          {
            "id": "es_t_chem",
            "lesson": 2,
            "type": "input",
            "q": "Short answer: What kind of energy does every cell use to carry out life processes?",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "chemical"
                  ]
                ],
                "placeholder": "Type your answer"
              }
            ],
            "answerText": "Chemical energy.",
            "explain": "All living things and every cell use chemical energy. Organisms cannot survive without the chemical energy from food."
          },
          {
            "id": "es_t_trait",
            "lesson": 1,
            "type": "input",
            "q": "Short answer: Type ONE inherited trait (a feature passed from parents to offspring).",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "eye",
                    "eyes",
                    "height",
                    "tall",
                    "hair",
                    "stripe",
                    "skunk",
                    "spray",
                    "flower",
                    "leaf",
                    "leaves",
                    "fruit",
                    "freckle",
                    "fur",
                    "size",
                    "blonde",
                    "blond",
                    "dimple",
                    "skin"
                  ]
                ],
                "placeholder": "Type your answer"
              }
            ],
            "answerText": "Examples: height, eye color, hair color, tiger stripes, flower color, leaf shape, or fruit size.",
            "explain": "Inherited traits are in your DNA. A scar or a sweater is not an inherited trait."
          }
        ]
      }
    ]
  },
  {
    "id": "ela-grammar-tenses",
    "name": "ELA Grammar: Simple Verb Tenses",
    "emoji": "✏️",
    "tagline": "Unit 3 · Lessons 17–19: agreement, past tense, and future tense",
    "intro": "Pick a mode to practice simple verb tenses — present, past, and future. Watch the spelling rules and the time clue words. You've got this! 💪",
    "lessons": [
      {
        "id": 17,
        "name": "L17 · Present & Agreement"
      },
      {
        "id": 18,
        "name": "L18 · Simple Tense: Past"
      },
      {
        "id": 19,
        "name": "L19 · Simple Tense: Future"
      }
    ],
    "notes": [
      {
        "id": "agree",
        "short": "Present & Agreement",
        "title": "Lesson 17: Simple Present Tense & Subject-Verb Agreement",
        "html": "<h2>Lesson 17: Simple Present Tense &amp; Subject-Verb Agreement</h2>\n<p>The <strong>simple present tense</strong> tells about an action that happens <strong>now</strong>, or happens <strong>often</strong>.</p>\n<p><strong>Time clue words:</strong> now, today, every day, each day, always, often, usually.</p>\n<h3>Subject-verb agreement</h3>\n<p>The verb has to match the subject.</p>\n<ul>\n<li>A <strong>singular</strong> subject (one person or thing) takes a present-tense verb with <strong>-s</strong> or <strong>-es</strong>: Jane Goodall <strong>studies</strong> chimps. He <strong>knows</strong> the answer. The class <strong>starts</strong> at 8:00. A young chimp <strong>lives</strong> with its family.</li>\n<li>A <strong>plural</strong> subject (more than one) takes the <strong>base form</strong> of the verb, with no extra -s: The chimps <strong>live</strong> in the forest. The students <strong>know</strong> the rules. Scientists <strong>study</strong> animals. The actors <strong>watch</strong> their cues.</li>\n<li><strong>I</strong> and <strong>you</strong> also take the base form: I <strong>study</strong>. You <strong>know</strong>.</li>\n</ul>\n<h3>Quick check</h3>\n<ul>\n<li>She <strong>studies</strong> / They <strong>study</strong></li>\n<li>He <strong>knows</strong> / They <strong>know</strong></li>\n<li>The mayor <strong>speaks</strong> / The mayors <strong>speak</strong></li>\n</ul>"
      },
      {
        "id": "past",
        "short": "Past Tense",
        "title": "Lesson 18: Simple Tense — Past",
        "html": "<h2>Lesson 18: Simple Tense — Past</h2>\n<p>The <strong>simple past tense</strong> tells about an action that <strong>already happened</strong>.</p>\n<p><strong>Time clue words:</strong> yesterday, last night, last week, last year, last Saturday, earlier, ago.</p>\n<h3>Spelling rules for regular verbs</h3>\n<ol>\n<li><strong>Most verbs:</strong> just add <strong>-ed</strong>. play → <strong>played</strong>, look → <strong>looked</strong>, visit → <strong>visited</strong>, mail → <strong>mailed</strong>, watch → <strong>watched</strong>, help → <strong>helped</strong>, sign → <strong>signed</strong>.</li>\n<li><strong>Verb ends in silent e:</strong> drop the e and add <strong>-ed</strong>. hope → <strong>hoped</strong>, smile → <strong>smiled</strong>, surprise → <strong>surprised</strong>.</li>\n<li><strong>Verb ends in a consonant + y:</strong> change the y to <strong>i</strong> and add <strong>-ed</strong>. carry → <strong>carried</strong>, hurry → <strong>hurried</strong>, bury → <strong>buried</strong>, study → <strong>studied</strong>, cry → <strong>cried</strong>, reply → <strong>replied</strong>. (If the verb ends in a <em>vowel</em> + y, just add -ed: play → played.)</li>\n<li><strong>One-syllable CVC verbs</strong> (they end in a single consonant with a single vowel before it): <strong>double the final consonant</strong> and add <strong>-ed</strong>. stop → <strong>stopped</strong>, plan → <strong>planned</strong>, wrap → <strong>wrapped</strong>, drop → <strong>dropped</strong>, trip → <strong>tripped</strong>, hop → <strong>hopped</strong>, plot → <strong>plotted</strong>, drag → <strong>dragged</strong>.</li>\n</ol>\n<h3>Tricky pair</h3>\n<ul>\n<li><strong>hope → hoped</strong> (ends in e, so drop the e — do not double the p)</li>\n<li><strong>hop → hopped</strong> (one-syllable CVC, so double the p)</li>\n</ul>\n<h3>Spelling watch-outs</h3>\n<ul>\n<li>bury → <strong>buried</strong> (not burried)</li>\n<li>frighten → <strong>frightened</strong> (just add -ed; frighten is present tense)</li>\n<li>surprise → <strong>surprised</strong> (not sprise or supprised)</li>\n<li>plot → <strong>plotted</strong> (double the t; not ploted)</li>\n<li>carry → <strong>carried</strong> (not carryed)</li>\n</ul>"
      },
      {
        "id": "future",
        "short": "Future Tense",
        "title": "Lesson 19: Simple Tense — Future",
        "html": "<h2>Lesson 19: Simple Tense — Future</h2>\n<p>The <strong>simple future tense</strong> tells about an action that <strong>will happen later</strong>.</p>\n<p><strong>Time clue words:</strong> tomorrow, next week, next Monday, next year, later, soon, in the future, tonight.</p>\n<h3>How to form it</h3>\n<p>Use the helping verb <strong>will</strong> or <strong>shall</strong> plus the <strong>plain verb</strong> (no -s, no -ed).</p>\n<ul>\n<li>The senator <strong>will sign</strong> the bill tomorrow.</li>\n<li>Next week Annie <strong>will write</strong> a letter and <strong>will mail</strong> a photo.</li>\n<li>Tomorrow I <strong>shall help</strong> (or <strong>will help</strong>) with the play.</li>\n</ul>\n<h3>Will vs. shall</h3>\n<ul>\n<li>Use <strong>shall</strong> with <strong>I</strong> or <strong>we</strong>: I shall, we shall.</li>\n<li>Use <strong>will</strong> with <strong>you, he, she, it,</strong> and <strong>they</strong>.</li>\n<li><strong>Will</strong> may also be used with I and we, so <em>I will help</em> and <em>we will visit</em> are also correct.</li>\n<li>After will or shall, use the plain verb: will <strong>sign</strong>, not will signs or will signed.</li>\n</ul>\n<h3>How to choose the tense</h3>\n<ul>\n<li><strong>yesterday / last ___ / ago</strong> → past (watch the -ed spelling rules)</li>\n<li><strong>now / every day / always / often</strong> → present (and check agreement: -s for he, she, it)</li>\n<li><strong>tomorrow / next ___ / later / soon</strong> → future (<strong>will</strong> or <strong>shall</strong> + the plain verb)</li>\n</ul>\n<p>Read the whole sentence. If it has more than one verb, each verb has to match its own time clue.</p>"
      }
    ],
    "flashcards": [
      {
        "term": "carry",
        "def": "carried — ends in a consonant + y, so change y to i and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "hurry",
        "def": "hurried — ends in a consonant + y, so change y to i and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "bury",
        "def": "buried — change y to i and add -ed. Not burried.",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "study",
        "def": "studied — ends in a consonant + y, so change y to i and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "cry",
        "def": "cried — ends in a consonant + y, so change y to i and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "reply",
        "def": "replied — ends in a consonant + y, so change y to i and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "stop",
        "def": "stopped — one-syllable CVC verb, so double the p and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "plan",
        "def": "planned — one-syllable CVC verb, so double the n and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "wrap",
        "def": "wrapped — one-syllable CVC verb, so double the p and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "drop",
        "def": "dropped — one-syllable CVC verb, so double the p and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "trip",
        "def": "tripped — one-syllable CVC verb, so double the p and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "hop",
        "def": "hopped — one-syllable CVC verb, so double the p and add -ed. Not hoped.",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "plot",
        "def": "plotted — one-syllable CVC verb, so double the t and add -ed. Not ploted.",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "drag",
        "def": "dragged — one-syllable CVC verb, so double the g and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "hope",
        "def": "hoped — ends in e, so drop the e and add -ed. Not hopped.",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "smile",
        "def": "smiled — ends in e, so drop the e and add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "frighten",
        "def": "frightened — just add -ed. Frighten is present tense, not past.",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "surprise",
        "def": "surprised — ends in e, so drop the e and add -ed. Not sprise or supprised.",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "play",
        "def": "played — most verbs just add -ed. Play ends in a vowel + y, so keep the y.",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "visit",
        "def": "visited — most verbs just add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "mail",
        "def": "mailed — most verbs just add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "watch",
        "def": "watched — most verbs just add -ed",
        "lesson": 18,
        "front": "Verb",
        "back": "Past tense"
      },
      {
        "term": "Most verbs: how do you make the past tense?",
        "def": "Add -ed. play → played, look → looked, visit → visited.",
        "lesson": 18,
        "front": "Rule",
        "back": "Remember"
      },
      {
        "term": "The verb ends in silent e. Now what?",
        "def": "Drop the e and add -ed. hope → hoped, smile → smiled, surprise → surprised.",
        "lesson": 18,
        "front": "Rule",
        "back": "Remember"
      },
      {
        "term": "The verb ends in a consonant + y. Now what?",
        "def": "Change the y to i and add -ed. carry → carried, bury → buried, study → studied.",
        "lesson": 18,
        "front": "Rule",
        "back": "Remember"
      },
      {
        "term": "One-syllable CVC verb (stop, plan, hop). Now what?",
        "def": "Double the final consonant and add -ed. stop → stopped, plan → planned, hop → hopped.",
        "lesson": 18,
        "front": "Rule",
        "back": "Remember"
      },
      {
        "term": "hope vs. hop",
        "def": "hope → hoped (drop the e). hop → hopped (double the p). They are different words!",
        "lesson": 18,
        "front": "Rule",
        "back": "Remember"
      },
      {
        "term": "Simple past tense",
        "def": "Tells about an action that already happened. Time clues: yesterday, last night, last week, ago.",
        "lesson": 18,
        "front": "Term",
        "back": "Definition"
      },
      {
        "term": "Simple present tense",
        "def": "Tells about an action that happens now or happens often. Time clues: now, today, every day, always, often.",
        "lesson": 17,
        "front": "Term",
        "back": "Definition"
      },
      {
        "term": "Simple future tense",
        "def": "Tells about an action that will happen later. Use will or shall + the plain verb. Time clues: tomorrow, next week, later, soon.",
        "lesson": 19,
        "front": "Term",
        "back": "Definition"
      },
      {
        "term": "When do you use shall?",
        "def": "With I or we: I shall, we shall. Will can also be used with I and we.",
        "lesson": 19,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "When do you use will?",
        "def": "With you, he, she, it, and they. Will may also be used with I and we. After will or shall, use the plain verb (will sign, not will signs or will signed).",
        "lesson": 19,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "Singular subject-verb agreement",
        "def": "A singular subject takes a present-tense verb with -s or -es: she studies, he knows, Jane Goodall studies.",
        "lesson": 17,
        "front": "Rule",
        "back": "Remember"
      },
      {
        "term": "Plural subject-verb agreement",
        "def": "A plural subject takes the base form, with no extra -s: they study, the students know, the chimps live.",
        "lesson": 17,
        "front": "Rule",
        "back": "Remember"
      },
      {
        "term": "The class will visit the Capitol tomorrow.",
        "def": "Future tense (will visit). Tomorrow is a future time clue.",
        "lesson": 19,
        "front": "What tense?",
        "back": "Answer"
      },
      {
        "term": "Denise watched Peter Pan last night.",
        "def": "Past tense (watched). Last night is a past time clue.",
        "lesson": 18,
        "front": "What tense?",
        "back": "Answer"
      },
      {
        "term": "Jane Goodall studies chimps.",
        "def": "Present tense (studies). Jane Goodall is singular, so the verb has -s.",
        "lesson": 17,
        "front": "What tense?",
        "back": "Answer"
      },
      {
        "term": "Spelling watch-outs",
        "def": "buried (not burried); frightened (not frighten); surprised (not sprise); plotted (not ploted); carried (not carryed).",
        "lesson": 18,
        "front": "Remember",
        "back": "Correct spellings"
      },
      {
        "term": "How do you choose the tense?",
        "def": "Look at the time clue. yesterday / last / ago → past. every day / now / always → present. tomorrow / next / later → future.",
        "lesson": 19,
        "front": "Question",
        "back": "Answer"
      },
      {
        "term": "sign in the future tense",
        "def": "will sign (or shall sign with I or we). Use the plain verb after will or shall — not will signs or will signed.",
        "lesson": 19,
        "front": "Verb",
        "back": "Future tense"
      }
    ],
    "tests": [
      {
        "id": "practice",
        "name": "Practice Test",
        "desc": "40 questions · fill-in and multiple choice · simple present, past, and future tenses",
        "shuffle": true,
        "questions": [
          {
            "id": "vt_carry",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. Yesterday Maya _____ the bags into the kitchen. (carry)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "carried"
                  ]
                ],
                "alsoAccept": [
                  "carried"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "carried",
            "explain": "Carry ends in a consonant + y, so change y to i and add -ed: carried."
          },
          {
            "id": "vt_hurry",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The students _____ to get to the theater on time. (hurry)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "hurried"
                  ]
                ],
                "alsoAccept": [
                  "hurried"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "hurried",
            "explain": "Hurry ends in a consonant + y, so change y to i and add -ed: hurried."
          },
          {
            "id": "vt_bury",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The pirates _____ the treasure under the sand. (bury)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "buried"
                  ]
                ],
                "alsoAccept": [
                  "buried"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "buried",
            "explain": "Bury ends in a consonant + y, so change y to i and add -ed: buried. Be careful — it is buried, not burried."
          },
          {
            "id": "vt_stop",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The bus _____ at the red light. (stop)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "stopped"
                  ]
                ],
                "alsoAccept": [
                  "stopped"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "stopped",
            "explain": "Stop is a one-syllable CVC verb, so double the p and add -ed: stopped."
          },
          {
            "id": "vt_plan",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The class _____ a surprise party for the teacher. (plan)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "planned"
                  ]
                ],
                "alsoAccept": [
                  "planned"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "planned",
            "explain": "Plan is a one-syllable CVC verb, so double the n and add -ed: planned."
          },
          {
            "id": "vt_wrap",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. Dad _____ the birthday present in colorful paper. (wrap)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "wrapped"
                  ]
                ],
                "alsoAccept": [
                  "wrapped"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "wrapped",
            "explain": "Wrap is a one-syllable CVC verb, so double the p and add -ed: wrapped."
          },
          {
            "id": "vt_drop",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The glass _____ off the table during rehearsal. (drop)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "dropped"
                  ]
                ],
                "alsoAccept": [
                  "dropped"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "dropped",
            "explain": "Drop is a one-syllable CVC verb, so double the p and add -ed: dropped."
          },
          {
            "id": "vt_trip",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The actor _____ over a prop on stage. (trip)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "tripped"
                  ]
                ],
                "alsoAccept": [
                  "tripped"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "tripped",
            "explain": "Trip is a one-syllable CVC verb, so double the p and add -ed: tripped."
          },
          {
            "id": "vt_hope",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. We _____ the rain would stop before the play. (hope)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "hoped"
                  ]
                ],
                "alsoAccept": [
                  "hoped"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "hoped",
            "explain": "Hope ends in e, so drop the e and add -ed: hoped. Do not double the p — hopped is the past tense of hop."
          },
          {
            "id": "vt_hop",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The bunny _____ across the garden. (hop)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "hopped"
                  ]
                ],
                "alsoAccept": [
                  "hopped"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "hopped",
            "explain": "Hop is a one-syllable CVC verb, so double the p and add -ed: hopped. Hoped (from hope) is a different word."
          },
          {
            "id": "vt_study",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. Elizabeth _____ her grammar words last night. (study)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "studied"
                  ]
                ],
                "alsoAccept": [
                  "studied"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "studied",
            "explain": "Study ends in a consonant + y, so change y to i and add -ed: studied."
          },
          {
            "id": "vt_frighten",
            "lesson": 18,
            "type": "input",
            "label": "Type the past-tense verb",
            "q": "Type the past tense of the verb in parentheses. The loud thunder _____ the dogs. (frighten)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "frightened"
                  ]
                ],
                "alsoAccept": [
                  "frightened"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "frightened",
            "explain": "For frighten, just add -ed: frightened. Don't leave it as frighten — that is present tense, not past."
          },
          {
            "id": "vt_sign_fut",
            "lesson": 19,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Tomorrow the senator _____ the new bill. (sign)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "will sign"
                  ]
                ],
                "alsoAccept": [
                  "will sign"
                ],
                "placeholder": "e.g. will sign"
              }
            ],
            "answerText": "will sign",
            "explain": "Tomorrow is a future time clue, so use will + the plain verb: will sign. (Not will signs or will signed.)"
          },
          {
            "id": "vt_mail_past",
            "lesson": 18,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Yesterday Annie _____ a letter to her friend. (mail)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "mailed"
                  ]
                ],
                "alsoAccept": [
                  "mailed"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "mailed",
            "explain": "Yesterday is a past time clue, so add -ed: mailed."
          },
          {
            "id": "vt_start_pres",
            "lesson": 17,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Every morning the class _____ at 8:00. (start)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "starts"
                  ]
                ],
                "alsoAccept": [
                  "starts"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "starts",
            "explain": "Every morning is a present time clue (it happens often). The subject class is singular, so use starts, not start."
          },
          {
            "id": "vt_visit_fut",
            "lesson": 19,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Next Monday we _____ the Capitol. (visit)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "will visit",
                    "shall visit"
                  ]
                ],
                "alsoAccept": [
                  "will visit",
                  "shall visit"
                ],
                "placeholder": "e.g. will visit"
              }
            ],
            "answerText": "will visit or shall visit",
            "explain": "Next Monday is a future time clue. With we, you may write will visit or shall visit."
          },
          {
            "id": "vt_watch_past",
            "lesson": 18,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Last night Denise _____ a play about Peter Pan. (watch)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "watched"
                  ]
                ],
                "alsoAccept": [
                  "watched"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "watched",
            "explain": "Last night is a past time clue, so add -ed: watched."
          },
          {
            "id": "vt_help_fut",
            "lesson": 19,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Tomorrow I _____ with the scenery for the play. (help)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "will help",
                    "shall help"
                  ]
                ],
                "alsoAccept": [
                  "will help",
                  "shall help"
                ],
                "placeholder": "e.g. will help"
              }
            ],
            "answerText": "will help or shall help",
            "explain": "Tomorrow is a future time clue. With I, you may write will help or shall help."
          },
          {
            "id": "vt_listen_pres",
            "lesson": 17,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Each day the judge _____ carefully to every case. (listen)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "listens"
                  ]
                ],
                "alsoAccept": [
                  "listens"
                ],
                "placeholder": "Type the verb"
              }
            ],
            "answerText": "listens",
            "explain": "Each day is a present time clue. The subject judge is singular, so use listens, not listen."
          },
          {
            "id": "vt_move_fut",
            "lesson": 19,
            "type": "input",
            "label": "Type the correct verb form",
            "q": "Type the correct tense of the verb in parentheses. Next year they _____ to a new school. (move)",
            "fields": [
              {
                "kind": "text",
                "keywords": [
                  [
                    "will move"
                  ]
                ],
                "alsoAccept": [
                  "will move"
                ],
                "placeholder": "e.g. will move"
              }
            ],
            "answerText": "will move",
            "explain": "Next year is a future time clue. Use will with they (not shall): will move."
          },
          {
            "id": "vt_id_fut",
            "lesson": 19,
            "q": "What tense is the verb in this sentence?  \"The class will visit the Capitol tomorrow.\"",
            "choices": [
              "Present",
              "Past",
              "Future",
              "It has no tense"
            ],
            "answer": 2,
            "explain": "Will visit tells about an action that will happen later, and tomorrow is a future time clue. This is the simple future tense.",
            "label": "Identify the tense"
          },
          {
            "id": "vt_id_past",
            "lesson": 18,
            "q": "What tense is the verb in this sentence?  \"Denise watched Peter Pan last night.\"",
            "choices": [
              "Present",
              "Past",
              "Future",
              "It has no tense"
            ],
            "answer": 1,
            "explain": "Watched tells about an action that already happened, and last night is a past time clue. This is the simple past tense.",
            "label": "Identify the tense"
          },
          {
            "id": "vt_id_pres",
            "lesson": 17,
            "q": "What tense is the verb in this sentence?  \"Jane Goodall studies chimps in the forest.\"",
            "choices": [
              "Present",
              "Past",
              "Future",
              "It has no tense"
            ],
            "answer": 0,
            "explain": "Studies tells about something she does as a habit, in the present. The singular subject Jane Goodall takes studies with an -s.",
            "label": "Identify the tense"
          },
          {
            "id": "vt_id_fut2",
            "lesson": 19,
            "q": "What tense is the verb in this sentence?  \"Next week I shall write a letter to Grandma.\"",
            "choices": [
              "Present",
              "Past",
              "Future",
              "It has no tense"
            ],
            "answer": 2,
            "explain": "Shall write tells about an action that will happen later, and next week is a future time clue. Shall is used with I. This is the simple future tense.",
            "label": "Identify the tense"
          },
          {
            "id": "vt_id_past2",
            "lesson": 18,
            "q": "What tense is the verb in this sentence?  \"The actors practiced their lines yesterday.\"",
            "choices": [
              "Present",
              "Past",
              "Future",
              "It has no tense"
            ],
            "answer": 1,
            "explain": "Practiced tells about an action that already happened, and yesterday is a past time clue. This is the simple past tense.",
            "label": "Identify the tense"
          },
          {
            "id": "vt_sp_buried",
            "lesson": 18,
            "q": "Which is the correctly spelled past tense of bury?",
            "choices": [
              "burried",
              "buryed",
              "buried",
              "buryd"
            ],
            "answer": 2,
            "explain": "Bury ends in a consonant + y, so change y to i and add -ed: buried. Not burried or buryed.",
            "label": "Pick the correct spelling"
          },
          {
            "id": "vt_sp_surprised",
            "lesson": 18,
            "q": "Which is the correctly spelled past tense of surprise?",
            "choices": [
              "sprise",
              "surprised",
              "supprised",
              "surprized"
            ],
            "answer": 1,
            "explain": "Surprise ends in e, so drop the e and add -ed: surprised. Not sprise, supprised, or surprized.",
            "label": "Pick the correct spelling"
          },
          {
            "id": "vt_sp_plotted",
            "lesson": 18,
            "q": "Which is the correctly spelled past tense of plot?",
            "choices": [
              "ploted",
              "plot",
              "plotted",
              "ploteed"
            ],
            "answer": 2,
            "explain": "Plot is a one-syllable CVC verb, so double the t and add -ed: plotted. Not ploted.",
            "label": "Pick the correct spelling"
          },
          {
            "id": "vt_sp_carried",
            "lesson": 18,
            "q": "Which is the correctly spelled past tense of carry?",
            "choices": [
              "carryed",
              "carried",
              "carryied",
              "caried"
            ],
            "answer": 1,
            "explain": "Carry ends in a consonant + y, so change y to i and add -ed: carried. Not carryed.",
            "label": "Pick the correct spelling"
          },
          {
            "id": "vt_sp_hope_hop",
            "lesson": 18,
            "q": "Which sentence uses the correct past-tense spellings?",
            "choices": [
              "We hoped for good weather, and the rabbit hopped away.",
              "We hopped for good weather, and the rabbit hoped away.",
              "We hoppped for good weather, and the rabbit hopeed away.",
              "We hopd for good weather, and the rabbit hoppped away."
            ],
            "answer": 0,
            "explain": "Hope ends in e, so drop the e: hoped. Hop is a one-syllable CVC verb, so double the p: hopped.",
            "label": "Pick the correct spelling"
          },
          {
            "id": "vt_sent_green",
            "lesson": 19,
            "q": "Which sentence has all of its verbs in the correct tense?",
            "choices": [
              "Yesterday Senator Hal Green will sign two bills and visits a school.",
              "Yesterday Senator Hal Green signed two bills and visited a school.",
              "Yesterday Senator Hal Green signs two bills and will visited a school.",
              "Yesterday Senator Hal Green sign two bills and visit a school."
            ],
            "answer": 1,
            "explain": "Yesterday is a past time clue, so both verbs should be past tense: signed and visited.",
            "label": "Pick the correct sentence"
          },
          {
            "id": "vt_sent_annie",
            "lesson": 19,
            "q": "Which sentence has all of its verbs in the correct tense?",
            "choices": [
              "Next week I write to you and mailed a photo.",
              "Next week I wrote to you and mail a photo.",
              "Next week I will write to you and will mail a photo.",
              "Next week I writes to you and will mailed a photo."
            ],
            "answer": 2,
            "explain": "Next week is a future time clue, so both verbs need will (or shall, with I) plus the plain verb: will write and will mail.",
            "label": "Pick the correct sentence"
          },
          {
            "id": "vt_sent_play",
            "lesson": 19,
            "q": "Which sentence has all of its verbs in the correct tense?",
            "choices": [
              "Last Saturday the actors will rehearse, and tomorrow they practiced again.",
              "Last Saturday the actors rehearse, and tomorrow they practice again.",
              "Last Saturday the actors rehearsed, and tomorrow they will rehearse again.",
              "Last Saturday the actors rehearsed, and tomorrow they rehearsed again."
            ],
            "answer": 2,
            "explain": "Last Saturday is a past time clue, so use rehearsed. Tomorrow is a future time clue, so use will rehearse. Each verb has to match its own time clue.",
            "label": "Pick the correct sentence"
          },
          {
            "id": "vt_sent_gov",
            "lesson": 19,
            "q": "Which sentence has all of its verbs in the correct tense?",
            "choices": [
              "Every day the mayor speaks to reporters, and tomorrow she will answer more questions.",
              "Every day the mayor spoke to reporters, and tomorrow she answered more questions.",
              "Every day the mayor will speaks to reporters, and tomorrow she answer more questions.",
              "Every day the mayor speak to reporters, and tomorrow she shall answers more questions."
            ],
            "answer": 0,
            "explain": "Every day is a present time clue, so use speaks (singular). Tomorrow is a future time clue, so use will answer (plain verb after will).",
            "label": "Pick the correct sentence"
          },
          {
            "id": "vt_ag_studies",
            "lesson": 17,
            "q": "Choose the verb that agrees with the subject. Jane Goodall _____ chimps in Africa.",
            "choices": [
              "study",
              "studies",
              "studying",
              "study's"
            ],
            "answer": 1,
            "explain": "Jane Goodall is a singular subject, so the present-tense verb takes -s: studies, not study.",
            "label": "Subject-verb agreement"
          },
          {
            "id": "vt_ag_know",
            "lesson": 17,
            "q": "Choose the verb that agrees with the subject. The students _____ the grammar rules.",
            "choices": [
              "knows",
              "knowing",
              "know",
              "known"
            ],
            "answer": 2,
            "explain": "The students is a plural subject, so use the base form know, not knows.",
            "label": "Subject-verb agreement"
          },
          {
            "id": "vt_ag_lives",
            "lesson": 17,
            "q": "Choose the verb that agrees with the subject. A young chimp _____ with its family.",
            "choices": [
              "live",
              "lives",
              "living",
              "liven"
            ],
            "answer": 1,
            "explain": "A young chimp is a singular subject, so the present-tense verb takes -s: lives, not live.",
            "label": "Subject-verb agreement"
          },
          {
            "id": "vt_ag_watch",
            "lesson": 17,
            "q": "Choose the verb that agrees with the subject. The actors _____ their cues during every rehearsal.",
            "choices": [
              "watches",
              "watch",
              "watching",
              "was watch"
            ],
            "answer": 1,
            "explain": "The actors is a plural subject, so use the base form watch, not watches.",
            "label": "Subject-verb agreement"
          },
          {
            "id": "vt_shall_we",
            "lesson": 19,
            "q": "Which sentence uses shall correctly?",
            "choices": [
              "The dogs shall bark at the mail carrier.",
              "She shall plays the piano tonight.",
              "We shall practice the play after school.",
              "They shall to help us tomorrow."
            ],
            "answer": 2,
            "explain": "Use shall with I or we. We shall practice is correct. Shall is not used with they, she, or the dogs, and the verb after shall must be the plain form (practice, not plays or to help).",
            "label": "Will or shall?"
          },
          {
            "id": "vt_will_they",
            "lesson": 19,
            "q": "Which is the correct future-tense sentence?",
            "choices": [
              "They shall arrive tomorrow morning.",
              "They will arrive tomorrow morning.",
              "They will arrives tomorrow morning.",
              "They will arrived tomorrow morning."
            ],
            "answer": 1,
            "explain": "Use will (not shall) with they. After will, use the plain verb arrive, not arrives or arrived.",
            "label": "Will or shall?"
          }
        ]
      }
    ]
  }
];
