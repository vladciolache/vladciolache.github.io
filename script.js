/* =========================================================
   CONFIGURATION — à remplir
   ========================================================= */
const CONFIG = {
  // Clé gratuite de https://web3forms.com (entre ton courriel, tu reçois la clé).
  // Cette clé peut être publique : elle sert seulement à t'envoyer les messages.
  web3formsKey: "78bd5c0d-03ee-4cbb-84ac-e558d13f0897",

  // Lien complet de ton profil LinkedIn, ex. "https://www.linkedin.com/in/ton-profil"
  // Laisse vide pour cacher l'icône.
  linkedin: "https://www.linkedin.com/in/vlad-ciolache",
};

/* =========================================================
   TRADUCTIONS — le français est dans index.html,
   l'anglais est ici. Garde les mêmes clés (data-i18n).
   ========================================================= */
const EN = {
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.education": "Education",
  "nav.contact": "Contact",

  "hero.kicker": "Hi, my name is",
  "hero.title": "Programming student · IT, networking & cybersecurity",
  "hero.text":
    "I build applications in C#, Python and SQL, and I'm interested in system and network security. I'm currently gaining IT experience within the Canadian federal public service.",
  "hero.cta1": "See my projects",
  "hero.cta2": "Contact me",
  "hero.cv": "My resume (PDF)",

  "about.title": "About me",
  "about.p1":
    "I'm a computer programming student at Collège La Cité, combining software development with a strong interest in networking and cybersecurity.",
  "about.p2":
    "On the IT Asset Management team at Indigenous Services Canada, I process employee requests, manage the IT asset inventory, and communicate with users in both French and English.",
  "about.p3":
    "What I enjoy: solving problems, understanding how systems work, and building tools that make other people's work easier.",
  "about.f1": "Gatineau / Ottawa",
  "about.f2": "Expected graduation: 2027",
  "about.f3": "Bilingual — French & English",
  "about.f4": "Interests: programming & cybersecurity",

  "skills.title": "Skills",
  "skills.prog": "Programming",
  "skills.web": "Web & interfaces",
  "skills.infra": "Networking & security",
  "skills.tools": "Tools",
  "skills.ip": "IP addressing",
  "skills.ntfs": "NTFS permissions",

  "projects.title": "Projects",
  "projects.inprogress": "In progress",
  "projects.soon": "Coming soon",
  "projects.done": "Done",
  "projects.p1.title": "IT Asset Management System",
  "projects.p1.desc":
    "Web application to manage IT hardware inventory and employee requests (onboarding, offboarding, replacements), with ticket tracking and history.",
  "projects.p2.title": "Network Security Homelab",
  "projects.p2.desc":
    "Documented virtual lab: pfSense firewall, DMZ, Active Directory and monitoring, with network diagrams and write-ups.",
  "projects.p3.title": "This portfolio",
  "projects.p3.desc":
    "Bilingual site with no framework: light/dark theme, contact form, and GitHub Pages hosting.",

  "exp.title": "Experience",
  "exp.j1.date": "2026 — present",
  "exp.j1.title": "IT Asset Management Technician",
  "exp.j1.org": "Indigenous Services Canada · Government of Canada",
  "exp.j1.b1": "Manage IT assets for ISC and CIRNAC employees",
  "exp.j1.b2": "Process onboarding, offboarding, replacement and upgrade requests",
  "exp.j1.b3": "Track tickets in an IT service management system",
  "exp.j1.b4": "Bilingual communication with users and their managers",
  "exp.j2.title": "Laboratory Technician",
  "exp.j2.b1": "Rigorous inventory and expiration date management",
  "exp.j2.b2": "Confidential handling of controlled medications",

  "edu.title": "Education",
  "edu.e1.date": "2026 — 2027 (expected)",
  "edu.e1.title": "Computer Programming",
  "edu.e2.title": "Computer Science Technology (coursework)",
  "edu.e3.title": "High school",
  "edu.e3.org": "Nouvelle-Frontière private high school",

  "contact.title": "Get in touch",
  "contact.intro":
    "An internship, a job offer, or just a question? Send me a message and I'll get back to you quickly.",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.send": "Send",

  "footer.made": "Made with HTML, CSS & JS",
};

// Messages du formulaire dans les deux langues
const MSG = {
  fr: {
    sending: "Envoi en cours…",
    ok: "Merci ! Votre message a bien été envoyé.",
    error: "Oups, l'envoi a échoué. Réessayez dans un instant.",
    invalid: "Veuillez remplir tous les champs avec un courriel valide.",
    notConfigured: "Le formulaire n'est pas encore configuré.",
  },
  en: {
    sending: "Sending…",
    ok: "Thanks! Your message has been sent.",
    error: "Oops, something went wrong. Please try again shortly.",
    invalid: "Please fill in every field with a valid email.",
    notConfigured: "The contact form isn't set up yet.",
  },
};

/* =========================================================
   LANGUE
   ========================================================= */
const i18nNodes = document.querySelectorAll("[data-i18n]");
const FR = {};
i18nNodes.forEach((el) => (FR[el.dataset.i18n] = el.innerHTML.trim()));

let lang = "fr";

function setLang(next) {
  lang = next;
  const dict = next === "en" ? EN : FR;
  i18nNodes.forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value.replace(/&(?!amp;)/g, "&amp;");
  });
  document.documentElement.lang = next;
  const btn = document.getElementById("lang-toggle");
  btn.textContent = next === "en" ? "FR" : "EN";
  btn.setAttribute("aria-label", next === "en" ? "Passer en français" : "Switch to English");
  try { localStorage.setItem("lang", next); } catch (e) {}
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  setLang(lang === "fr" ? "en" : "fr");
});

// Langue de départ : choix sauvegardé, sinon celle du navigateur
let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) {}
const startLang = savedLang || (navigator.language.startsWith("fr") ? "fr" : "en");
if (startLang === "en") setLang("en");

/* =========================================================
   THÈME CLAIR / SOMBRE
   ========================================================= */
const root = document.documentElement;
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
if (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.dataset.theme = "light";
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* =========================================================
   MENU MOBILE
   ========================================================= */
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

/* =========================================================
   LIENS & ANNÉE
   ========================================================= */
if (CONFIG.linkedin) {
  const li = document.getElementById("linkedin-link");
  li.href = CONFIG.linkedin;
  li.hidden = false;
}
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   FORMULAIRE DE CONTACT (Web3Forms)
   ========================================================= */
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function showStatus(key, type) {
  statusEl.textContent = MSG[lang][key];
  statusEl.className = "form-status " + (type || "");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) return showStatus("invalid", "error");
  if (!CONFIG.web3formsKey) return showStatus("notConfigured", "error");

  const data = Object.fromEntries(new FormData(form));
  if (data.botcheck) return; // un robot a rempli le piège

  const button = form.querySelector("button[type=submit]");
  button.disabled = true;
  showStatus("sending");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: CONFIG.web3formsKey,
        subject: "Nouveau message du portfolio — " + data.name,
        from_name: "Portfolio vladciolache",
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    form.reset();
    showStatus("ok", "ok");
  } catch (err) {
    console.error(err);
    showStatus("error", "error");
  } finally {
    button.disabled = false;
  }
});

/* =========================================================
   ANIMATION D'APPARITION
   ========================================================= */
const revealEls = document.querySelectorAll(".section .card, .timeline > li, .facts li");
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.1 }
);
revealEls.forEach((el) => observer.observe(el));
