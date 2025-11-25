/***** LEVEL-BASED LESSONS *****/
const LESSONS = [
  {
    id: "lvl1_fatiha_1_1",
    level: 1,
    title: "Al-Fātiḥah 1:1",
    subtitle: "Bismi Allāh ar-Raḥmān ar-Raḥīm",
    data: {
      surah: 1, ayah: 1,
      displayUthmani: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
      wordsDisplay: ["بِسْمِ","اللّٰهِ","الرَّحْمٰنِ","الرَّحِيمِ"],
      wordsSimple:  ["بسم","الله","الرحمن","الرحيم"],
      translits:    ["bismi","llāhi","ar-raḥmāni","ar-raḥīmi"],
      meanings:     ["in the name (of)","Allah","the Most Gracious","the Most Merciful"]
    }
  },
  {
    id: "lvl2_baqarah_2_1",
    level: 2,
    title: "Al-Baqarah 2:1",
    subtitle: "Alif Lām Mīm",
    data: {
      surah: 2, ayah: 1,
      displayUthmani: "الم",
      wordsDisplay: ["الم"],
      wordsSimple:  ["الم"],
      translits:    ["alif-lām-mīm"],
      meanings:     ["alif-lām-mīm (disconnected letters)"]
    }
  },
  {
    id: "lvl3_imran_3_1",
    level: 3,
    title: "Āl ʿImrān 3:1",
    subtitle: "Alif Lām Mīm",
    data: {
      surah: 3, ayah: 1,
      displayUthmani: "الم",
      wordsDisplay: ["الم"],
      wordsSimple:  ["الم"],
      translits:    ["alif-lām-mīm"],
      meanings:     ["alif-lām-mīm (disconnected letters)"]
    }
  },
  {
    id: "lvl4_nisa_4_1",
    level: 4,
    title: "An-Nisāʾ 4:1 (segment)",
    subtitle: "Yā ayyuhā an-nāsu ittaqū…",
    data: {
      surah: 4, ayah: 1,
      displayUthmani: "يَا أَيُّهَا النَّاسُ اتَّقُوا",
      wordsDisplay: ["يَا","أَيُّهَا","النَّاسُ","اتَّقُوا"],
      wordsSimple:  ["يا","ايها","الناس","اتقوا"],
      translits:    ["yā","ayyuhā","an-nāsu","ittaquū"],
      meanings:     ["O","you (vocative)","the people","be mindful / fear (Allah)"]
    }
  },
  {
    id: "lvl5_maidah_5_1",
    level: 5,
    title: "Al-Māʾidah 5:1 (segment)",
    subtitle: "Yā ayyuhā alladhīna āmanū…",
    data: {
      surah: 5, ayah: 1,
      displayUthmani: "يَا أَيُّهَا الَّذِينَ آمَنُوا",
      wordsDisplay: ["يَا","أَيُّهَا","الَّذِينَ","آمَنُوا"],
      wordsSimple:  ["يا","ايها","الذين","آمنوا"],
      translits:    ["yā","ayyuhā","alladhīna","āmanū"],
      meanings:     ["O","you who","believed","have believed"]
    }
  }
];

/***** ALPHABET DATA *****/
const ALPHABET = [
  { base:"ا", name:"Alif", sound:"a / ā", forms:{initial:"ا", medial:"ـاـ", final:"ـا"} },
  { base:"ب", name:"Bāʾ", sound:"b", forms:{initial:"بـ", medial:"ـبـ", final:"ـب"} },
  { base:"ت", name:"Tāʾ", sound:"t", forms:{initial:"تـ", medial:"ـتـ", final:"ـت"} },
  { base:"ث", name:"Thāʾ", sound:"th as in 'think'", forms:{initial:"ثـ", medial:"ـثـ", final:"ـث"} },
  { base:"ج", name:"Jīm", sound:"j as in 'jam' (or soft g)", forms:{initial:"جـ", medial:"ـجـ", final:"ـج"} },
  { base:"ح", name:"Ḥāʾ", sound:"deep h from the throat", forms:{initial:"حـ", medial:"ـحـ", final:"ـح"} },
  { base:"خ", name:"Khāʾ", sound:"kh as in Scottish 'loch'", forms:{initial:"خـ", medial:"ـخـ", final:"ـخ"} },
  { base:"د", name:"Dāl", sound:"d", forms:{initial:"د", medial:"ـدـ", final:"ـد"} },
  { base:"ذ", name:"Dhāl", sound:"dh as in 'this'", forms:{initial:"ذ", medial:"ـذـ", final:"ـذ"} },
  { base:"ر", name:"Rāʾ", sound:"rolled r", forms:{initial:"ر", medial:"ـرـ", final:"ـر"} },
  { base:"ز", name:"Zāy", sound:"z", forms:{initial:"ز", medial:"ـزـ", final:"ـز"} },
  { base:"س", name:"Sīn", sound:"s", forms:{initial:"سـ", medial:"ـسـ", final:"ـس"} },
  { base:"ش", name:"Shīn", sound:"sh", forms:{initial:"شـ", medial:"ـشـ", final:"ـش"} },
  { base:"ص", name:"Ṣād", sound:"emphatic s", forms:{initial:"صـ", medial:"ـصـ", final:"ـص"} },
  { base:"ض", name:"Ḍād", sound:"emphatic d", forms:{initial:"ضـ", medial:"ـضـ", final:"ـض"} },
  { base:"ط", name:"Ṭāʾ", sound:"emphatic t", forms:{initial:"طـ", medial:"ـطـ", final:"ـط"} },
  { base:"ظ", name:"Ẓāʾ", sound:"emphatic dh", forms:{initial:"ظـ", medial:"ـظـ", final:"ـظ"} },
  { base:"ع", name:"ʿAyn", sound:"voiced throat sound", forms:{initial:"عـ", medial:"ـعـ", final:"ـع"} },
  { base:"غ", name:"Ghayn", sound:"gh / French r", forms:{initial:"غـ", medial:"ـغـ", final:"ـغ"} },
  { base:"ف", name:"Fāʾ", sound:"f", forms:{initial:"فـ", medial:"ـفـ", final:"ـف"} },
  { base:"ق", name:"Qāf", sound:"deep q/k from back of tongue", forms:{initial:"قـ", medial:"ـقـ", final:"ـق"} },
  { base:"ك", name:"Kāf", sound:"k", forms:{initial:"كـ", medial:"ـكـ", final:"ـك"} },
  { base:"ل", name:"Lām", sound:"l", forms:{initial:"لـ", medial:"ـلـ", final:"ـل"} },
  { base:"م", name:"Mīm", sound:"m", forms:{initial:"مـ", medial:"ـمـ", final:"ـم"} },
  { base:"ن", name:"Nūn", sound:"n", forms:{initial:"نـ", medial:"ـنـ", final:"ـن"} },
  { base:"ه", name:"Hāʾ", sound:"h as in 'house'", forms:{initial:"هـ", medial:"ـهـ", final:"ـه"} },
  { base:"و", name:"Wāw", sound:"w / ū / o", forms:{initial:"و", medial:"ـوـ", final:"ـو"} },
  { base:"ي", name:"Yāʾ", sound:"y / ī", forms:{initial:"يـ", medial:"ـيـ", final:"ـي"} },
  { base:"ء", name:"Hamzah", sound:"glottal stop, like uh-oh", forms:{initial:"ء", medial:"ـءـ", final:"ـء"} }
];

/***** ARABIC KEYBOARD + PHONETICS *****/
const PHONEME_MAP = {
  "ا":"A","أ":"A","إ":"I","آ":"Ā",
  "ب":"B","ت":"T","ث":"TH","ج":"J","ح":"Ḥ","خ":"KH","د":"D","ذ":"DH",
  "ر":"R","ز":"Z","س":"S","ش":"SH","ص":"Ṣ","ض":"Ḍ","ط":"Ṭ","ظ":"Ẓ",
  "ع":"ʿ","غ":"GH","ف":"F","ق":"Q","ك":"K","ل":"L","م":"M","ن":"N",
  "ه":"H","و":"W","ي":"Y","ء":"ʾ","ى":"Ā","ة":"H"
};
const AR_KEYS = ["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","ء"];

/***** STATE *****/
let currentLesson = null;
let activeLessonMeta = null;
let showHarakat = true;
let wordIndex = 0;
let filled = [];
let mistakeCountPos = 0;
const MISTAKES_TO_HINT = 3;

/***** PROGRESS (LEVELS) *****/
const STORAGE_KEY = "qurani_progress_v1";
let progress = { unlockedLevel: 1, completed: {} };

try {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    if (typeof parsed.unlockedLevel === "number" && parsed.completed) {
      progress = parsed;
    }
  }
} catch (e) {}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {}
}

/***** HELPERS *****/
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

const stripHarakat = s => s.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g,"");
const mapPho = ch => PHONEME_MAP[ch] || ch;
function expectedLettersFor(i){ return currentLesson.wordsSimple[i].split(""); }

/***** VIEW HELPERS *****/
function showStart(){
  $("#startScreen").classList.remove("hidden");
  $("#appScreen").classList.add("hidden");
  $("#alphabetScreen").classList.add("hidden");
}

function showAppScreen(){
  $("#appScreen").classList.remove("hidden");
  $("#startScreen").classList.add("hidden");
  $("#alphabetScreen").classList.add("hidden");
}

function showAlphabet(){
  $("#alphabetScreen").classList.remove("hidden");
  $("#startScreen").classList.add("hidden");
  $("#appScreen").classList.add("hidden");
}

/***** START SCREEN (CATALOG) *****/
function renderCatalog(){
  const grid = $("#catalog");
  grid.innerHTML = "";

  LESSONS.forEach(lesson => {
    const locked = lesson.level > progress.unlockedLevel;
    const completed = !!progress.completed[lesson.id];

    const card = document.createElement("button");
    card.type = "button";
    card.className =
      "cardlink" +
      (locked ? " locked" : "") +
      (completed ? " completed" : "");

    card.innerHTML = `
      <div class="cardlink-header">
        <span class="level-badge">Level ${lesson.level}</span>
        ${locked ? '<span class="lock-icon">🔒</span>' :
          completed ? '<span class="lock-icon">✔</span>' : ""}
      </div>
      <h3>${lesson.title}</h3>
      <p>${lesson.subtitle}</p>
    `;

    if (!locked) {
      card.addEventListener("click", () => startLesson(lesson));
    }

    grid.appendChild(card);
  });
}

function startLesson(lessonMeta){
  activeLessonMeta = lessonMeta;
  currentLesson = lessonMeta.data;

  wordIndex = 0;
  filled = [];
  mistakeCountPos = 0;

  showAppScreen();
  bootApp();
}

/***** APP RENDERERS *****/
function renderAyah(){
  const rawWords = currentLesson.wordsDisplay;
  const displayWords = showHarakat ? rawWords : rawWords.map(stripHarakat);

  let html = "";
  displayWords.forEach((w, i)=>{
    html += `<span class="ayah-word ${i===wordIndex ? "active":""}">${w}</span>`;
  });
  $("#ayahArabic").innerHTML = html;
}

function renderDots(){
  const dots = $("#wordDots");
  dots.innerHTML = "";
  currentLesson.wordsSimple.forEach((_,i)=>{
    const d = document.createElement("div");
    d.className = "dot" + (i===wordIndex ? " active":"");
    dots.appendChild(d);
  });
  $("#surahLabel").textContent = `Surah ${currentLesson.surah}:${currentLesson.ayah}`;
}

function renderSlots(){
  const box = $("#letterSlots");
  box.innerHTML = "";
  const target = expectedLettersFor(wordIndex);
  for(let i=0;i<target.length;i++){
    const slot = document.createElement("div");
    slot.className = "slot" + (filled[i] ? " filled" : "");
    slot.textContent = filled[i] || "";
    box.appendChild(slot);
  }
  renderPhonetics();
}

function renderPhonetics(){
  const ph = $("#phonetics");
  ph.innerHTML = "";
  const target = expectedLettersFor(wordIndex);

  for(let i=0;i<target.length;i++){
    const chip = document.createElement("span");
    chip.className = "pho" + (filled[i] ? "" : " empty");
    chip.textContent = filled[i] ? mapPho(filled[i]) : "__";
    ph.appendChild(chip);
  }

  const roman = (filled.map(mapPho).join("") || "");
  const remaining = "_".repeat(Math.max(0, target.length - filled.length));
  $("#romanProgress").textContent = roman + remaining;
}

function renderKeyboard(){
  const k = $("#keyboard");
  k.innerHTML = "";
  const row = document.createElement("div");
  row.className = "krow";
  AR_KEYS.forEach(ch=>{
    const key = document.createElement("button");
    key.className = "key";
    key.textContent = ch;
    key.addEventListener("click", ()=>onKey(ch));
    row.appendChild(key);
  });
  k.appendChild(row);
  clearHints();
}

function clearHints(){ $$(".key").forEach(btn=>btn.classList.remove("hint")); }
function showHintFor(letter){
  $$(".key").forEach(btn=>{ if(btn.textContent === letter){ btn.classList.add("hint"); } });
}

function setFeedback(msg, ok=false){
  const f = $("#feedback");
  f.textContent = msg || "";
  f.className = "feedback " + (ok ? "ok" : (msg? "no":""));
}

/***** GAME LOGIC *****/
function onKey(letter){
  const target = expectedLettersFor(wordIndex);
  const i = filled.length;
  const want = target[i];

  if(letter === want){
    filled.push(letter);
    renderSlots();
    setFeedback("Good! Keep going…", true);
    mistakeCountPos = 0;
    clearHints();

    if(filled.length === target.length){
      setFeedback("Great! Word completed ✔️", true);
      $("#quizBlock").classList.remove("hidden");
      $("#meaningBlock").classList.remove("hidden");
      renderMeaning();
      renderQuiz();
      $("#nextWord").disabled = false;
    }
  } else {
    const nextSlot = $$(".slot")[i];
    if(nextSlot){
      nextSlot.classList.add("wrong");
      setTimeout(()=>nextSlot.classList.remove("wrong"), 300);
    }
    mistakeCountPos++;
    if(mistakeCountPos >= MISTAKES_TO_HINT){
      showHintFor(want);
      setFeedback("Hint shown. Pick the highlighted letter.", false);
    } else {
      setFeedback(`Not that letter. Try again. (${mistakeCountPos}/${MISTAKES_TO_HINT})`, false);
    }
  }
}

function renderMeaning(){
  const meaning = currentLesson.meanings?.[wordIndex] || "";
  $("#wordMeaning").textContent = meaning;
}

function markLessonComplete(){
  if (!activeLessonMeta) return;
  const id = activeLessonMeta.id;

  if (!progress.completed[id]) {
    progress.completed[id] = true;

    const nextLevel = activeLessonMeta.level + 1;
    if (nextLevel > progress.unlockedLevel) {
      progress.unlockedLevel = nextLevel;
    }

    saveProgress();
    renderCatalog();
  }
}

function renderQuiz(){
  const box = $("#quizOptions");
  const correct = currentLesson.translits[wordIndex];

  const pool = new Set([correct,"bismi","rahmani","rahimi","llāhi","ar-raḥīmi"]);
  const opts = Array.from(pool).slice(0,4).sort(()=>Math.random()-0.5);

  box.innerHTML = "";
  opts.forEach(o=>{
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = o;
    b.addEventListener("click", ()=>{
      const fb = $("#quizFeedback");
      if(o === correct){
        const isLastWord = wordIndex === currentLesson.wordsSimple.length - 1;
        fb.className = "quiz-feedback ok";
        if (isLastWord) {
          fb.textContent = "Correct! Level completed ✔️";
          markLessonComplete();
        } else {
          fb.textContent = "Correct! ✔️";
        }
        $("#nextWord").disabled = false;
      } else {
        fb.className = "quiz-feedback no";
        fb.textContent = "Try again ❌";
      }
    });
    box.appendChild(b);
  });
}

function goWord(delta){
  const newIndex = Math.min(
    Math.max(0, wordIndex + delta),
    currentLesson.wordsSimple.length - 1
  );
  wordIndex = newIndex;
  filled = [];
  mistakeCountPos = 0;
  setFeedback("");
  $("#quizBlock").classList.add("hidden");
  $("#meaningBlock").classList.add("hidden");
  $("#quizFeedback").textContent = "";
  $("#nextWord").disabled = true;

  renderAyah();
  renderDots();
  renderSlots();
  clearHints();
}

/***** ALPHABET VIEW *****/
function renderAlphabetList(){
  const list = $("#alphabetList");
  if(!list) return;
  list.innerHTML = "";

  ALPHABET.forEach((l, index)=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "alpha-item";
    btn.innerHTML = `
      <span class="name">${l.name}</span>
      <span class="letter">${l.base}</span>
    `;
    btn.addEventListener("click", ()=>showLetterDetail(index));
    list.appendChild(btn);
  });

  if(ALPHABET.length){
    showLetterDetail(0);
  }
}

function showLetterDetail(index){
  const l = ALPHABET[index];
  const box = $("#alphabetDetail");
  if(!box) return;
  box.innerHTML = `
    <div class="alpha-main">
      <div class="alpha-big">${l.base}</div>
      <div class="alpha-info">
        <h2>${l.name}</h2>
        <p class="muted">Sound: ${l.sound}</p>
        <div class="alpha-forms">
          <div class="form-row">
            <span class="label">Isolated</span>
            <span class="form">${l.base}</span>
          </div>
          <div class="form-row">
            <span class="label">Initial</span>
            <span class="form">${l.forms.initial}</span>
          </div>
          <div class="form-row">
            <span class="label">Medial</span>
            <span class="form">${l.forms.medial}</span>
          </div>
          <div class="form-row">
            <span class="label">Final</span>
            <span class="form">${l.forms.final}</span>
          </div>
        </div>
        <button class="btn btn-primary btn-audio" disabled>🔊 Play sound (add audio later)</button>
        <p class="alpha-note">
          When you have real audio files, you can connect them here, for example:
          <code>/audio/alphabet/${l.name.toLowerCase()}.mp3</code>.
        </p>
      </div>
    </div>
  `;
}

/***** BRIGHTNESS PANEL DRAG *****/
function enableBrightnessDrag() {
  const panel = document.querySelector(".brightness-panel");
  if (!panel) return;

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  function pointerDown(e) {
    dragging = true;

    const point = e.touches ? e.touches[0] : e;
    startX = point.clientX;
    startY = point.clientY;

    const rect = panel.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;

    // Skift til left/top, så vi kan flytte frit
    panel.style.left = startLeft + "px";
    panel.style.top = startTop + "px";
    panel.style.right = "auto";
    panel.style.bottom = "auto";

    document.addEventListener("mousemove", pointerMove);
    document.addEventListener("mouseup", pointerUp);
    document.addEventListener("touchmove", pointerMove, { passive:false });
    document.addEventListener("touchend", pointerUp);
  }

  function pointerMove(e) {
    if (!dragging) return;

    const point = e.touches ? e.touches[0] : e;
    const dx = point.clientX - startX;
    const dy = point.clientY - startY;

    const newLeft = startLeft + dx;
    const newTop = startTop + dy;

    panel.style.left = newLeft + "px";
    panel.style.top = newTop + "px";

    if (e.touches) e.preventDefault(); // undgå scroll mens man trækker på mobil
  }

  function pointerUp() {
    dragging = false;
    document.removeEventListener("mousemove", pointerMove);
    document.removeEventListener("mouseup", pointerUp);
    document.removeEventListener("touchmove", pointerMove);
    document.removeEventListener("touchend", pointerUp);
  }

  panel.addEventListener("mousedown", pointerDown);
  panel.addEventListener("touchstart", pointerDown, { passive:true });
}

/***** BOOT + EVENTS *****/
function bootApp(){
  renderAyah();
  renderDots();
  renderSlots();
  renderKeyboard();

  $("#toggleHarakat").onclick = ()=>{
    showHarakat = !showHarakat;
    $("#toggleHarakat").textContent = showHarakat ? "Hide harakat" : "Show harakat";
    renderAyah();
  };

  $("#resetWord").onclick = ()=>{
    filled = []; mistakeCountPos = 0; setFeedback("");
    $("#quizBlock").classList.add("hidden");
    $("#meaningBlock").classList.add("hidden");
    $("#quizFeedback").textContent = "";
    $("#nextWord").disabled = true;
    renderSlots(); clearHints();
  };

  $("#prevWord").onclick = ()=> goWord(-1);
  $("#nextWord").onclick = ()=> goWord(+1);

  $("#homeBtn").onclick = ()=> showStart();

  // hide / show keyboard
  const kb = $("#keyboard");
  const kbBtn = $("#toggleKeyboard");
  if (kb && kbBtn) {
    kbBtn.onclick = () => {
      const isHidden = kb.classList.toggle("hidden");
      kbBtn.textContent = isHidden ? "Show keyboard" : "Hide keyboard";
    };
  }
}

function init(){
  renderCatalog();
  renderAlphabetList();

  const openAlpha = $("#openAlphabet");
  if(openAlpha) openAlpha.onclick = ()=> showAlphabet();

  const alphaBack = $("#alphaBack");
  if(alphaBack) alphaBack.onclick = ()=> showStart();

  const slider = $("#brightnessSlider");
  if(slider){
    slider.addEventListener("input", e=>{
      const val = Number(e.target.value)/100;
      document.documentElement.style.setProperty("--brightness", String(val));
    });
  }

  // gør brightness-bjælken flytbar (mus + touch)
  enableBrightnessDrag();

  $("#startScreen").classList.remove("hidden");
  $("#appScreen").classList.add("hidden");
  $("#alphabetScreen").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", init);
