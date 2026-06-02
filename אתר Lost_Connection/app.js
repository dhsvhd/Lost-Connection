// ===== משתנים =====
let selectedPlatform = "";
let rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"));
let currentUser = null;

// ===== USERS =====
const users = [
  {
    name: "נתנאל",
    password: "NHK2012",
    pdfUrl:
      "https://drive.google.com/file/d/1bOLg2TViF8-36u01JsVyJ3eqcx8Nvstt/view?usp=sharing",
    videoUrl: "https://youtu.be/-R_QdkLAJTI",
    role: "סקסופון טנור",
    instrument: "סקסופון",
    welcome: "ברוך הבא נתנאל! כאן ה-PDF האישי שלך",
  },
  {
    name: "אליאור",
    password: "036305415",
    pdfUrl:
      "https://drive.google.com/file/d/1WSVpCzpAwtL7-QijJgxShWFNy-Vp7ui6/view?usp=sharing",
    videoUrl: "https://youtu.be/o84HUOAESfY",
    role: "בריטון 2",
    instrument: "בריטון",
    welcome: "ברוך הבא אליאור! כאן ה-PDF האישי שלך",
  },
  {
    name: "לידור",
    password: "1706",
    pdfUrl:
      "https://drive.google.com/file/d/1MUK6ZcXhECYvT6dEFF0sc_WoQHUFXzQ-/view?usp=sharing",
    videoUrl: "https://youtu.be/dkDFHH829sc",
    role: "סקסופון אלט",
    instrument: "סקסופון",
    welcome: "ברוך הבא לידור! כאן ה-PDF האישי שלך",
  },
  {
    name: "ניצן",
    password: "lost connection 2026",
    pdfUrl:
      "https://drive.google.com/file/d/1EzO1-OSvjLhUUNizEm3TOmTCJJCc15JE/view?usp=sharing",
    videoUrl: "https://youtu.be/qsmdqtX8-qg",
    role: "בריטון 1",
    instrument: "בריטון",
    welcome: "ברוך הבא ניצן! כאן ה-PDF האישי שלך",
  },
  {
    name: "ינון",
    password: "1234",
    pdfUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoUrl: "https://youtu.be/VsExU_j28eM",
    role: "תופים",
    instrument: "תופים",
    welcome: "ברוך הבא ינון! כאן ה-PDF האישי שלך",
  },
  {
    name: "אדמין",
    password: "אורי סיסמה בדוי",
    pdfUrl:
      "https://drive.google.com/file/d/1tC3jSIXqqYkYxSVHCF2bczLGnu3niHeS/view?usp=sharing",
    videoUrl: "https://youtu.be/VsExU_j28eM",
    role: "מנהל מערכת",
    instrument: "כלים",
    welcome: "ברוך הבא מנהל המערכת! גישה מלאה לכל הקבצים",
  },
];

// ===== פונקציות =====

function selectPlatform(platform) {
  selectedPlatform = platform;
  localStorage.setItem("selectedPlatform", platform);

  document.getElementById("platformSection").style.display = "none";
  document.getElementById("loginSection").style.display = "flex";

  if (rememberedUser) {
    document.getElementById("username").value = rememberedUser.username;
    document.getElementById("password").value = rememberedUser.password;
  }
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(
    (u) => u.name === username && u.password === password,
  );

  if (!user) {
    document.getElementById("errorAlert").style.display = "block";
    return;
  }

  currentUser = user;

  if (document.getElementById("rememberMe").checked) {
    localStorage.setItem(
      "rememberedUser",
      JSON.stringify({
        username,
        password,
      }),
    );
  }

  document.getElementById("loginSection").style.display = "none";
  document.getElementById("mainContainer").style.display = "block";

  document.getElementById("userWelcome").innerText = user.welcome;
}

function logout() {
  currentUser = null;

  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("platformSection").style.display = "flex";
}

// ניווט
function openShapeOfYou() {
  alert("SHAPE OF YOU");
}
function openCreation2() {
  alert("יצירה 2");
}
function openCalendar() {
  alert("לוח שנה");
}
