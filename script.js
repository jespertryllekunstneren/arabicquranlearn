/***** LESSON CATALOG (startscreen) *****/
const LESSONS = [
  {
    id: "fatiha_1_1",
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
    id: "baqarah_2_1",
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
    id: "alimran_3_1",
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
    id: "nisa_4_1",
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
    id: "maidah_5_1",
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
let showHarakat = true;
let wordIndex = 0;
let filled = [];
let mistakeCountPos = 0;
const MISTAKES_TO_HINT = 3;

/***** HELPERS *****/
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const stripHarakat = s => s.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g,"");
const mapPho = ch => PHONEME_MAP[ch] || ch;
function expectedLettersFor(i){ return currentLesson.wordsSimple[i].split(""); }

/***** START SCREEN *****/
function renderCatalog(){
  const grid = $("#catalog");
  grid.innerHTML = "";
  LESSONS.forEach(item=>{
    const card = document.createElement("div");
    card.className = "cardlink";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.subtitle}</p>`;
    card.addEventListener("click", ()=> startLesson(item.data));
    grid.appendChild(card);
  });
}
function startLesson(data){
  currentLesson = data;
  wordIndex = 0; filled = []; mistakeCountPos = 0;
  $("#startScreen").classList.add("hidden");
  $("#appScreen").classList.remove("hidden");
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
      $("#nextWord").disabled = true;
    }
  } else {
    const nextSlot = $$(".slot")[i];
    if(nextSlot){ nextSlot.classList.add("wrong"); setTimeout(()=>nextSlot.classList.remove("wrong"), 300); }
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
        fb.className = "quiz-feedback ok";
        fb.textContent = "Correct! ✔️";
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
  $("#homeBtn").onclick = ()=>{
    $("#appScreen").classList.add("hidden");
    $("#startScreen").classList.remove("hidden");
  };
}

function init(){ renderCatalog(); }
document.addEventListener("DOMContentLoaded", init);
