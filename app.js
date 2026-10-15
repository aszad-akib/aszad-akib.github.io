/* =================================================================
   app.js builds every page from data.js.
   You normally don't need to edit this file. Edit data.js instead.
   ================================================================= */

/* ---------- Icons (Lucide-style line icons) ---------- */
const ICON_PATHS = {
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4M19 17v4M3 5h4M17 19h4"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  flask: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7M7 16h10"/>',
  microscope: '<path d="M6 18h8M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
  atom: '<circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  externalLink: '<path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  languages: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  arrowLeft: '<path d="m12 19-7-7 7-7M19 12H5"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'
};
const icon = (name, cls = "") =>
  `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICON_PATHS[name] || ICON_PATHS.sparkles}</svg>`;

const $ = (sel) => document.querySelector(sel);

/* ---------- Menu buttons ----------
   Top-level items with "children" become dropdown menus. */
const NAV = [
  { page: "home", label: "Home" },
  { label: "Research", children: [
      { page: "experience", label: "Research Experience", icon: "microscope" },
      { page: "publications", label: "Publications", icon: "fileText" },
      { page: "projects", label: "Projects", icon: "briefcase" } ] },
  { page: "honors", label: "Honors & Awards" },
  { label: "Experience", children: [
      { page: "internships", label: "Internships", icon: "building" },
      { page: "teaching", label: "Teaching & Mentoring", icon: "users" } ] },
  { page: "certifications", label: "Certifications & Training" },
  { page: "activities", label: "Scientific Activities" },
  { page: "leadership", label: "Leadership & Community" },
  { page: "contact", label: "Contact" }
];
/* About Me and Education live on the home page. These links scroll to them. */
const HOME_SECTIONS = { about: "home-about", education: "home-education" };
const PAGES = NAV.flatMap(n => n.children ? n.children : [n]);

function buildNav() {
  $("#navLinks").innerHTML = NAV.map(n => n.children ? `
    <div class="dropdown">
      <button type="button" class="drop-btn" aria-expanded="false">${n.label} ${icon("chevron", "caret")}</button>
      <div class="drop-menu">
        ${n.children.map(c => `<a href="#/${c.page}" data-page="${c.page}">${icon(c.icon)} ${c.label}</a>`).join("")}
      </div>
    </div>` : `<a class="top-link" href="#/${n.page}" data-page="${n.page}">${n.label}</a>`).join("");

  document.querySelectorAll(".drop-btn").forEach(btn => btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const dd = btn.parentElement;
    const willOpen = !dd.classList.contains("open");
    document.querySelectorAll(".dropdown.open").forEach(d => { d.classList.remove("open"); d.firstElementChild.setAttribute("aria-expanded", "false"); });
    if (willOpen) { dd.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
  }));
  document.addEventListener("click", () => document.querySelectorAll(".dropdown.open").forEach(d => d.classList.remove("open")));
}

function pageHead(pill, title, sub, pillIcon = "sparkles") {
  return `
    <header class="page-head">
      ${pill ? `<span class="pill">${icon(pillIcon)} ${pill}</span>` : ""}
      <h1 class="grad-title">${title}</h1>
      <div class="grad-bar"></div>
      ${sub ? `<p class="page-sub">${sub}</p>` : ""}
    </header>`;
}

/* ---------- HOME ---------- */
/* Split the name into letters. Each letter gets a small delay (--d) so they rise in one after another. */
function nameLetters() {
  let i = 0;
  return HOME.nameLines.map(line =>
    `<span class="hn-line" aria-hidden="true">${[...line].map(c => c === " " ? " " :
      `<span class="ch" style="--d:${(i++ * 0.035).toFixed(3)}s">${c}</span>`).join("")}</span>`).join("");
}

/* Letters rise into place; replayed each time the Home page is opened. */
let nameTimer = null;
function playNameIntro() {
  const name = document.getElementById("heroName");
  if (!name) return;
  clearTimeout(nameTimer);
  name.classList.remove("in", "live");
  void name.offsetWidth;                         // restart the animation
  requestAnimationFrame(() => name.classList.add("in"));
  const letters = name.querySelectorAll(".ch").length;
  nameTimer = setTimeout(() => name.classList.add("live"), 900 + letters * 35);
}

/* Letters near the cursor get lighter and a little smaller, then spring back (like the reference site). */
function setupKineticName() {
  const name = document.getElementById("heroName");
  const area = document.querySelector(".spec-hero");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!name || !area || !finePointer || reduced) return;
  const chars = [...name.querySelectorAll(".ch")];
  const RADIUS = 220;                            // how far (px) the effect reaches
  let raf = null, mx = 0, my = 0;
  const update = () => {
    raf = null;
    chars.forEach(ch => {
      const r = ch.getBoundingClientRect();
      const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
      const t = Math.max(0, 1 - d / RADIUS);     // 1 = cursor on the letter, 0 = far away
      ch.style.fontWeight = t > 0.01 ? Math.round(800 - 460 * t) : "";
      ch.style.setProperty("--s", t > 0.01 ? (1 - 0.14 * t).toFixed(3) : "1");
    });
  };
  area.addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    if (!raf) raf = requestAnimationFrame(update);
  });
  area.addEventListener("pointerleave", () => chars.forEach(ch => {
    ch.style.fontWeight = ""; ch.style.setProperty("--s", "1");
  }));
}

/* Brand logos for profile buttons (Simple Icons, simpleicons.org; Web of Science uses its publisher Clarivate's mark) */
const BRAND_PATHS = {
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  researchgate: "M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z",
  orcid: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z",
  googlescholar: "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z",
  clarivate: "M11.262 18a20.588 20.588 0 0 0 3.246-1.476 20.954 20.954 0 0 0 2.852-2.064A14.46 14.46 0 0 0 19.82 12c.328.328.622.688.884 1.082.328.394.592.786.788 1.18.262.46.524.886.786 1.28.198.458.394.884.59 1.278a23.172 23.172 0 0 1-2.654 2.46 38.765 38.765 0 0 1-2.952 1.966A29.612 29.612 0 0 1 10.574 24l-.788-1.18c-.26-.46-.524-.886-.786-1.28-.209-.42-.406-.846-.59-1.278l-.59-1.376A20.4 20.4 0 0 0 11.26 18h.002zm2.754-16.918a29.61 29.61 0 0 1 3.246 1.574c.984.59 1.968 1.246 2.952 1.966a47.566 47.566 0 0 1 2.654 2.46c-.196.46-.392.886-.59 1.28-.26.458-.524.884-.786 1.278a6.16 6.16 0 0 1-.788 1.18c-.273.409-.568.803-.884 1.18a18.072 18.072 0 0 0-2.46-2.558 20.936 20.936 0 0 0-2.852-2.064 20.4 20.4 0 0 0-6.688-2.36l.59-1.38c.196-.392.394-.82.59-1.278l.786-1.18.788-1.18c1.18.262 2.328.622 3.442 1.082zm-7.574 18c-.524.066-1.016.1-1.474.1H3.492c-.46 0-.92-.034-1.378-.1a34.28 34.28 0 0 1-.786-3.54 32.942 32.942 0 0 1 0-7.18c.196-1.18.46-2.33.786-3.444l1.378-.196h1.476c.46 0 .95.032 1.474.098l1.378.196-.59 1.77c-.262.984-.46 2-.59 3.05-.066.984-.1 2-.1 3.05.066 1.048.198 2.064.394 3.048.262 1.05.558 2.034.886 2.952-.46.13-.92.196-1.378.196z",
};
const PROFILE_BUTTONS = [
  ["linkedin", "LinkedIn", "linkedin", "#0A66C2"],
  ["github", "GitHub", "github", "#181717"],
  ["webofscience", "Web of Science", "clarivate", "#5E33BF"],
  ["researchgate", "ResearchGate", "researchgate", "#00CCBB"],
  ["orcid", "ORCID", "orcid", "#A6CE39"],
  ["scholar", "Google Scholar", "googlescholar", "#4285F4"]
];
function profileButtons() {
  const L = PROFILE.links;
  return PROFILE_BUTTONS.filter(([k]) => L[k]).map(([k, label, logo, color]) => `
    <a class="brand-btn" href="${L[k]}" target="_blank" rel="noopener" style="--brand:${color}" aria-label="${label} profile">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${BRAND_PATHS[logo]}"/></svg><span>${label}</span>
    </a>`).join("");
}

function renderHome() {
  $("#page-home").innerHTML = `
  <section class="spec-hero" aria-label="Introduction">
    <p class="spec-label">${HOME.label}</p>
    <h1 class="hero-name" id="heroName" aria-label="${PROFILE.name}">${nameLetters()}</h1>
    <div class="spec-grid">
      <dl class="spec-table">
        ${HOME.spec.map(([k, v]) => `<div class="spec-row"><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
        <div class="spec-row"><dt>Status</dt><dd><span class="status-dot" aria-hidden="true"></span>${HOME.status}</dd></div>
      </dl>
      <figure class="spec-fig">
        <img src="${HOME.photo}" alt="${HOME.photoAlt}">
      </figure>
    </div>
    <div class="spec-actions">
      <div class="spec-buttons">
        <a class="sq-btn dark" href="#/projects">View projects</a>
        <a class="sq-btn line" href="${PROFILE.cv}" target="_blank" rel="noopener">Download CV <small>.PDF</small></a>
      </div>
      <nav class="brand-row" aria-label="Research profiles">${profileButtons()}</nav>
    </div>
  </section>
  ${aboutSection()}
  ${educationSection()}`;
}

/* ---------- RESEARCH ---------- */
function ribbonCard(r, color = "") {
  const body = `
      <span class="ribbon ${color}">${r.tag}</span>
      ${r.logo ? `<div class="award-logo"><img src="${r.logo}" alt="${r.logoAlt || ""}" loading="lazy"></div>` : ""}
      <h3>${r.title}</h3>
      <p class="org">${r.org || r.area || ""}</p>
      ${r.prize ? `<p class="prize">${r.prize}</p>` : ""}
      ${r.authors ? `<p class="prize">${r.authors}</p>` : ""}
      ${r.text ? `<p class="desc">${r.text}</p>` : ""}`;
  if (r.photo) {
    return `
    <article class="card ribbon-card photo-card ${color || "gold"}">
      <figure class="pc-photo"><img src="${r.photo}" alt="${r.photoAlt || r.title}" loading="lazy"></figure>
      <div class="pc-body">${body}
        <p class="in-person">${icon("mapPin")} Attended in person</p>
      </div>
    </article>`;
  }
  return `<article class="card ribbon-card ${color || "gold"}">${body}</article>`;
}

/* ---------- HONORS ---------- */
function renderHonors() {
  const F = HONORS.featured;
  $("#page-honors").innerHTML = `
    ${pageHead("", "Achievements &amp; Recognition",
      "Fellowships, research grants, competitive awards and funded places at international programs.")}
    <div class="container">
      <h2 class="section-title">${icon("trophy")} Featured Fellowship</h2>
      <div class="timeline-wrap">
        ${featureCard({ ...F, mini: "NST", short: F.badgeTitle, orgShort: F.badgeSub, labels: F.tags }, "sparkles")}
      </div>

      <h2 class="section-title">${icon("award")} Awards, Grants &amp; Scholarships</h2>
      <div class="timeline-wrap">
        ${HONORS.awards.map(a => featureCard({ ...a, date: a.date.toUpperCase(), org: a.org.toUpperCase() }, a.icon)).join("")}
      </div>
    </div>`;
}

/* One honor in the large two-panel layout: picture + stat on the left, details on the right */
function featureCard(F, dotIcon) {
  const pic = F.photo
    ? `<div class="feat-icon feat-photo"><img src="${F.photo}" alt="${F.photoAlt || ""}" loading="lazy"></div>`
    : F.logo
      ? `<div class="feat-icon feat-logo ${F.logoWide ? "wide" : ""}"><img src="${F.logo}" alt="${F.logoAlt || ""}" loading="lazy"></div>`
      : `<div class="feat-icon">${icon("trophy")}</div>`;
  return `
    <div class="feat-item">
      <span class="t-dot">${icon(dotIcon)}</span>
      <article class="card featured">
        <div class="feat-side">
          ${pic}
          <h4>${F.short}</h4>
          <p class="small-caps">${F.orgShort}</p>
          <p class="date">${icon("calendar")} ${F.date}</p>
          <div class="feat-stat"><small># ${F.statLabel}</small><strong>${F.statValue}</strong></div>
        </div>
        <div>
          <div class="feat-org"><span class="logo-mini">${F.mini}</span> ${F.org}</div>
          <div class="tag-row">${F.labels.map(t => `<span class="tag-blue">${t}</span>`).join("")}</div>
          <h2>${F.title}</h2>
          <div class="feat-meta">${F.meta.map((m, i) => `<span>${icon(i ? "award" : "building")} ${m}</span>`).join("")}</div>
          <p>${F.text}</p>
          <div class="highlights">
            <h5>${icon("zap")} KEY HIGHLIGHTS</h5>
            <ul>${F.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
          </div>
          ${F.gallery ? `<div class="feat-gallery">${F.gallery.map(ph => `
            <figure><a href="${ph.src}" target="_blank" rel="noopener"><img src="${ph.src}" alt="${ph.alt}" loading="lazy"></a><figcaption>${ph.caption}</figcaption></figure>`).join("")}
          </div>` : ""}
        </div>
      </article>
    </div>`;
}

/* ---------- EXPERIENCE ---------- */
function renderExperience() {
  $("#page-experience").innerHTML = `
    ${pageHead("", "Research Experience",
      "Lab research, internships and mentoring across universities, national research councils and international programs.")}
    <div class="container">
      <div class="cv-list">
        ${EXPERIENCE.map(e => e.roles.map(r => `
          <article class="cv-entry">
            <div class="cv-when">
              <span class="cv-dates">${r.dates}</span>
              ${r.present ? '<span class="cv-current">Current</span>' : ""}
            </div>
            <div class="cv-body">
              <h3 class="cv-role">${r.title}</h3>
              <p class="cv-org">${e.org}</p>
              <p class="cv-place">${e.place}</p>
              <ul class="cv-points">${r.points.map(p => `<li>${p}</li>`).join("")}</ul>
            </div>
          </article>`).join("")).join("")}
      </div>
    </div>`;
}

/* ---------- EDUCATION (home page section) ---------- */
function educationSection() {
  return `
  <section class="home-section" id="home-education">
    ${pageHead("Academic Journey", "Education", "My academic background in food science, food engineering and materials research", "graduation")}
    <div class="container">
      <div class="grid-2" style="align-items:start">
        ${EDUCATION.map(e => `
          <article class="card edu-card">
            <h3>${e.degree}</h3>
            <p class="school">${e.school}</p>
            <p class="meta">${e.meta}</p>
            <dl>${e.rows.map(([k, v]) => `<div><dt>${k}:</dt> <dd>${v}</dd></div>`).join("")}</dl>
            <p style="font-weight:600;margin:0 0 .6rem">Focus Areas:</p>
            <div class="chip-cloud">${e.chips.map(c => `<span class="chip-soft">${c}</span>`).join("")}</div>
          </article>`).join("")}
      </div>
      <h2 class="section-title blue">Languages</h2>
      <div class="grid-2">
        ${LANGUAGES.map(l => `<article class="card lang-card"><div><h3>${l.name}</h3>${l.detail ? `<p class="muted">${l.detail}</p>` : ""}</div><span class="roles-pill">${l.level}</span></article>`).join("")}
      </div>
    </div>
  </section>`;
}

/* ---------- CERTIFICATIONS & TRAINING ---------- */
function renderCertifications() {
  $("#page-certifications").innerHTML = `
    ${pageHead("Lifelong Learning", "Certifications &amp; Training", "Professional training programs, online certificates and self-study tutorials", "award")}
    <div class="container">
      <h2 class="section-title blue">${icon("trophy")} Professional Training</h2>
      <div class="grid-2" style="align-items:start">
        ${TRAINING.map(t => `
          <article class="card train-card">
            ${t.logo ? `<div class="org-logo"><img src="${t.logo}" alt="${t.org} logo" loading="lazy"></div>` : ""}
            <div class="train-top"><span class="roles-pill">${t.hours}</span><span class="date-pill">${icon("calendar")} ${t.date}</span></div>
            <h3>${t.title}</h3>
            <p class="org-blue">${t.org}</p>
            ${t.certificate ? `<div class="act-actions"><a class="act-btn" data-cert href="${t.certificate}" target="_blank" rel="noopener">${icon("fileText")} Certificate (PDF)</a></div>` : ""}
            <details><summary>View modules &amp; topics</summary>
              <ul class="check-list">${t.points.map(p => `<li>${icon("check")} ${p}</li>`).join("")}</ul>
            </details>
          </article>`).join("")}
      </div>

      <h2 class="section-title blue">${icon("award")} Courses &amp; Certificates</h2>
      <div class="grid-2">
        ${COURSES.map(c => `
          <div class="card cert">
            ${c.logo ? `<div class="org-logo"><img src="${c.logo}" alt="${c.org} logo" loading="lazy"></div>` : ""}
            <div class="cert-top"><h4>${c.title}</h4></div>
            <p class="org">${c.org}</p>
            ${c.detail ? `<p class="cmeta">${c.detail}</p>` : ""}
            ${c.url || c.certificate ? `<div class="act-actions" style="margin:.85rem 0 0">
              ${c.url ? `<a class="act-btn solid" href="${c.url}" target="_blank" rel="noopener">${icon("externalLink")} Verify Credential</a>` : ""}
              ${c.certificate ? `<a class="act-btn" data-cert href="${c.certificate}" target="_blank" rel="noopener">${icon("fileText")} Certificate (PDF)</a>` : ""}
            </div>` : ""}
          </div>`).join("")}
      </div>

      <h2 class="section-title blue">${icon("bookOpen")} Tutorials &amp; Self-Study</h2>
      <article class="card"><ul class="check-list">${TUTORIALS.map(t => typeof t === "string"
        ? `<li>${icon("check")} ${t}</li>`
        : `<li>${t.logo ? `<img class="tut-logo" src="${t.logo}" alt="" loading="lazy">` : icon("check")} <span>${t.text} <a class="tut-link" href="${t.url}" target="_blank" rel="noopener">View course ${icon("externalLink", "i-ext")}</a></span></li>`).join("")}</ul></article>
    </div>`;
}

/* ---------- PUBLICATIONS ---------- */
function renderPublications() {
  $("#page-publications").innerHTML = `
    ${pageHead("", "Publications &amp; Manuscripts",
      "Manuscripts in preparation and research proposals funded by national bodies in Bangladesh")}
    <div class="container pub-page">
      <h2 class="cv-heading">Manuscripts in Preparation</h2>
      <ol class="cv-list ref-list">
        ${RESEARCH.manuscripts.map((m, i) => `
          <li class="ref-entry">
            <span class="ref-num">[${i + 1}]</span>
            <div>
              <p class="ref-cite">${m.authors} <span class="ref-title">${m.title}.</span></p>
              <p class="ref-meta"><span class="ref-status">${m.tag.charAt(0) + m.tag.slice(1).toLowerCase()}</span><span>${m.area}</span></p>
            </div>
          </li>`).join("")}
      </ol>
      <p class="ref-note"><b>Akib AH</b> = Aszad Hossain Akib</p>

      <h2 class="cv-heading">Funded Research Proposals</h2>
      <div class="cv-list">
        ${RESEARCH.grants.map(g => {
          const [funder, year] = g.org.split(" · ");
          return `
          <article class="cv-entry">
            <div class="cv-when"><span class="cv-dates">${year}</span></div>
            <div class="cv-body">
              <h3 class="cv-role">${g.title}</h3>
              <p class="cv-org">${funder}</p>
              <p class="cv-place">${g.prize}</p>
              <ul class="cv-points"><li>${g.text}</li></ul>
            </div>
          </article>`;
        }).join("")}
      </div>
    </div>`;
}

/* ---------- PROJECTS ---------- */
function projectCard(p) {
  return `
    <article class="card proj-card">
      <div class="proj-top"><h3>${p.title}</h3><span class="chip-soft">${p.type}</span></div>
      <p>${p.text}</p>
      ${p.photos ? `<div class="proj-photos">${p.photos.map(ph => `
        <figure><a href="${ph.src}" target="_blank" rel="noopener"><img src="${ph.src}" alt="${ph.alt}" loading="lazy"></a><figcaption>${ph.caption}</figcaption></figure>`).join("")}
      </div>` : ""}
      <div class="act-tags">${p.tags.map(t => `<span class="chip-soft sm">${t}</span>`).join("")}</div>
      <div class="proj-actions">
        <span class="status ${/ongoing|prep/i.test(p.status) ? "live" : ""}">${p.status}</span>
        ${p.url ? `<a class="btn-sm" href="${p.url}" target="_blank" rel="noopener">${icon("github")} GitHub</a>` : ""}
        <a class="btn-sm ${p.url ? "ghost" : ""}" href="#/${p.link}">${icon("externalLink")} Learn more</a>
      </div>
    </article>`;
}

/* Projects with a full write-up (summary, keywords, skills, report PDF) */
function featuredProject(p) {
  return `
    <article class="card proj-feature">
      <div class="pf-top">
        <span class="chip-soft">${p.type}</span>
        <span class="status ${/ongoing|prep/i.test(p.status) ? "live" : ""}">${p.status}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="pf-context">${p.context}</p>
      <div class="pf-actions">
        ${p.report ? `<a class="act-btn solid" data-cert href="${p.report}" target="_blank" rel="noopener">${icon("fileText")} ${p.reportLabel || "Report (PDF)"}</a>` : ""}
        ${p.url ? `<a class="act-btn" href="${p.url}" target="_blank" rel="noopener">${icon("github")} GitHub</a>` : ""}
        ${p.link ? `<a class="act-btn" href="#/${p.link}">${icon("externalLink")} Learn more</a>` : ""}
      </div>
      ${p.reportTitle ? `<p class="pf-report">Report: <em>${p.reportTitle}</em></p>` : ""}

      <div class="pf-body">
        <h4 class="pf-label">Summary</h4>
        <div class="pf-summary">${p.summary.map(s => `<p>${s}</p>`).join("")}</div>
        ${p.photos ? `<div class="pf-gallery" style="--cols:${p.galleryCols || (p.photos.length === 4 ? 2 : Math.max(2, Math.min(p.photos.length, 3)))}">${p.photos.map(ph => `
          <figure><a href="${ph.src}" target="_blank" rel="noopener"><img src="${ph.src}" alt="${ph.alt}" loading="lazy"${ph.chart ? ` class="chart"` : ""}${ph.pos ? ` style="object-position:${ph.pos}"` : ""}></a><figcaption>${ph.caption}</figcaption></figure>`).join("")}
        </div>` : ""}
      </div>

      <h4 class="pf-label">Keywords</h4>
      <div class="pf-keywords">
        ${Object.entries(p.keywords).map(([group, words]) => `
          <div class="kw-group"><span class="kw-name">${group[0].toUpperCase() + group.slice(1)}</span>
            <div class="chip-cloud">${words.map(w => `<span class="chip-soft ${group === "materials" ? "" : "alt"}">${w}</span>`).join("")}</div>
          </div>`).join("")}
      </div>

      <details class="pf-skills">
        <summary>Skills used in this project (${p.skills.length})</summary>
        <table class="skills-table">
          <thead><tr><th>Skill</th><th>Category</th><th>Level</th><th>Experience</th><th>Note</th></tr></thead>
          <tbody>
            ${p.skills.map(([skill, cat, level, exp, note]) => `
              <tr>
                <td data-label="Skill"><strong>${skill}</strong></td>
                <td data-label="Category">${cat}</td>
                <td data-label="Level"><span class="lvl-pill ${level.toLowerCase()}">${level}</span></td>
                <td data-label="Experience"><span class="exp-pill ${exp.toLowerCase()}">${exp}</span></td>
                <td data-label="Note">${note}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </details>
    </article>`;
}

function renderProjects() {
  const featured = PROJECTS.filter(p => p.summary);
  const others = PROJECTS.filter(p => !p.summary);
  $("#page-projects").innerHTML = `
    ${pageHead("", "Research Projects", "Computational, lab, funded, product development and analytical projects")}
    <div class="container">
      <h2 class="section-title blue">${icon("fileText")} Projects with Full Reports</h2>
      <div class="pf-list">${featured.map(featuredProject).join("")}</div>
      <h2 class="section-title blue">${icon("briefcase")} More Projects</h2>
      <div class="grid-2">${others.map(projectCard).join("")}</div>
    </div>`;
}

/* ---------- INTERNSHIPS ---------- */
function renderInternships() {
  $("#page-internships").innerHTML = `
    ${pageHead("Hands-on Training", "Internships", "Lab and industry-style internships in Malaysia and Bangladesh", "building")}
    <div class="container">
      <div class="exp-list">
        ${INTERNSHIPS.map(n => `
          <div class="exp-item">
            <span class="exp-dot"></span>
            <article class="card exp-card">
              <div class="exp-head">
                <span class="exp-icon">${icon("building")}</span>
                <div><h3>${n.title}</h3><span class="place">${icon("mapPin")} ${n.org}</span></div>
                <span class="roles-pill">${n.badge}</span>
              </div>
              <div class="role ${n.photo ? "with-photo" : ""}">
                ${n.photo ? `<figure class="side-photo"><img src="${n.photo}" alt="${n.photoCaption}" loading="lazy"><figcaption>${n.photoCaption}</figcaption></figure>` : ""}
                <div class="role-top">
                  <h4>${n.hours}</h4>
                  <span class="date-pill">${icon("calendar")} ${n.date}</span>
                </div>
                ${n.supervisor ? `<p class="muted" style="margin:0 0 .6rem">${n.supervisor}</p>` : ""}
                <ul class="check-list">${n.points.map(p => `<li>${icon("check")} ${p}</li>`).join("")}</ul>
                <div class="act-tags" style="margin:1rem 0 0">${n.tags.map(t => `<span class="chip-soft sm">${t}</span>`).join("")}</div>
                ${n.photos ? `<div class="intern-photos ${n.photosTall ? "tall" : ""}">${n.photos.map(ph => `
                  <figure><a href="${ph.src}" target="_blank" rel="noopener"><img src="${ph.src}" alt="${ph.alt}" loading="lazy"${ph.pos ? ` style="object-position:${ph.pos}"` : ""}></a><figcaption>${ph.caption}</figcaption></figure>`).join("")}
                </div>` : ""}
              </div>
            </article>
          </div>`).join("")}
      </div>
    </div>`;
}

/* ---------- TEACHING ---------- */
function renderTeaching() {
  $("#page-teaching").innerHTML = `
    ${pageHead("Giving Back", "Teaching &amp; Mentoring", "Helping students and early researchers grow in science and research", "users")}
    <div class="container">
      <div class="stat-row">
        ${TEACHING.stats.map(s => `<div class="card stat-light"><strong>${s.value}</strong><span>${s.label}</span></div>`).join("")}
      </div>
      <div class="grid-2" style="margin-top:1.75rem;align-items:start">
        ${TEACHING.roles.map(r => `
          <article class="card">
            <div class="exp-head" style="margin-bottom:1rem">
              <span class="exp-icon">${icon(r.icon)}</span>
              <div><h3>${r.title}</h3><span class="place">${icon("calendar")} ${r.date}</span></div>
            </div>
            <ul class="check-list">${r.points.map(p => `<li>${icon("check")} ${p}</li>`).join("")}</ul>
            <div class="act-tags" style="margin:1rem 0 0">${r.tags.map(t => `<span class="chip-soft sm">${t}</span>`).join("")}</div>
          </article>`).join("")}
      </div>
    </div>`;
}

/* ---------- LEADERSHIP & COMMUNITY ---------- */
function renderLeadership() {
  $("#page-leadership").innerHTML = `
    ${pageHead("Beyond Research", "Leadership &amp; Community", "Professional memberships, volunteering and community work", "heart")}
    <div class="container">
      <h2 class="section-title blue">${icon("shieldCheck")} Scientific Organization Memberships</h2>
      <div class="grid-3">
        ${MEMBERSHIPS.map(m => `
          <article class="card member-card">
            ${m.logo ? `<span class="member-logo"><img src="${m.logo}" alt="${m.name} logo" loading="lazy"></span>` : `<span class="exp-icon">${icon("shieldCheck")}</span>`}
            <h3>${m.name}</h3>
            <p class="muted">${m.role}</p>
            <span class="date-pill">${icon("calendar")} Since ${m.since}</span>
            ${m.certificate || m.url ? `<div class="act-actions" style="margin:1rem 0 0">
              ${m.certificate ? `<a class="act-btn solid" data-cert href="${m.certificate}" target="_blank" rel="noopener">${icon("fileText")} Certificate (PDF)</a>` : ""}
              ${m.url ? `<a class="act-btn" href="${m.url}" target="_blank" rel="noopener">${icon("externalLink")} Website</a>` : ""}
            </div>` : ""}
          </article>`).join("")}
      </div>
      <h2 class="section-title blue">${icon("heart")} Social Work, Volunteering &amp; Leadership</h2>
      <div class="grid-3">
        ${LEADERSHIP.map(l => `
          <article class="card mini-card">
            ${icon(l.icon)}
            <h3>${l.title}</h3>
            <p class="org-blue" style="margin:0 0 .5rem">${l.role}</p>
            <p>${l.text}</p>
            <div class="act-tags" style="margin:1rem 0 0">${l.tags.map(t => `<span class="chip-soft sm">${t}</span>`).join("")}</div>
          </article>`).join("")}
      </div>

      <h2 class="section-title blue">${BEYOND_LAB.title}</h2>
      <article class="card beyond-card">
        <div class="beyond-photos">${BEYOND_LAB.photos.map(ph => `
          <figure class="beyond-photo">
            <img src="${ph.src}" alt="${ph.alt}" loading="lazy">
            <figcaption>${ph.caption}</figcaption>
          </figure>`).join("")}
        </div>
        <div class="beyond-text">${BEYOND_LAB.paragraphs.map(p => `<p>${p}</p>`).join("")}</div>
      </article>
    </div>`;
}

/* ---------- ACTIVITIES ---------- */
/* Certificate & Project buttons.
   certificate: path to a PDF, or "pending"   project: a URL, or "pending" */
function activityButtons(a) {
  if (!a.certificate && !a.project) return "";
  const cert = !a.certificate ? "" : a.certificate === "pending"
    ? `<span class="act-btn pending" aria-disabled="true">${icon("fileText")} Certificate pending</span>`
    : `<a class="act-btn" data-cert href="${a.certificate}" target="_blank" rel="noopener">${icon("fileText")} Certificate (PDF)</a>`;
  const proj = !a.project ? "" : a.project === "pending"
    ? `<span class="act-btn pending" aria-disabled="true">${icon("github")} Project pending</span>`
    : `<a class="act-btn solid" href="${a.project}" target="_blank" rel="noopener">${icon("github")} Project</a>`;
  return `<div class="act-actions">${cert}${proj}</div>`;
}

/* If a certificate PDF hasn't been added to assets/certificates yet, show
   "Certificate pending" instead of a broken link. (Runs on Live Server and GitHub Pages.) */
const certStatus = {};
function checkCertificates() {
  if (!location.protocol.startsWith("http")) return;
  document.querySelectorAll("a[data-cert]").forEach(async (a) => {
    const url = a.getAttribute("href");
    if (!(url in certStatus)) {
      certStatus[url] = fetch(url, { method: "HEAD", cache: "no-store" }).then(r => r.ok).catch(() => true);
    }
    if (!(await certStatus[url])) {
      console.warn(`Certificate not found: ${url} (add the PDF with this exact name)`);
      a.outerHTML = `<span class="act-btn pending" aria-disabled="true">${icon("fileText")} Certificate pending</span>`;
    }
  });
}

function renderActivities(filter = "All") {
  const types = ["All", ...new Set(ACTIVITIES.map(a => a.type))];
  const list = filter === "All" ? ACTIVITIES : ACTIVITIES.filter(a => a.type === filter);
  $("#page-activities").innerHTML = `
    ${pageHead("", "Scientific Activities",
      "Summer schools, workshops, symposia and webinars on materials science, nanotechnology and computational research")}
    <div class="container">
      <div class="filter-row">
        ${types.map(t => `<button type="button" data-filter="${t}" class="${t === filter ? "on" : ""}">${t}</button>`).join("")}
      </div>
      <div class="grid-3">
        ${list.map(a => `
          <article class="card act-card ${a.photo || a.photos ? "has-photo" : ""} ${a.photos && a.photos.length > 1 ? "wide" : ""}">
            ${a.photo ? `<a href="${a.photo}" target="_blank" rel="noopener"><img class="act-photo" src="${a.photo}" alt="${a.photoAlt}" loading="lazy"></a>` : ""}
            ${a.photos ? `<div class="act-photos">${a.photos.map(ph => `
              <figure><a href="${ph.src}" target="_blank" rel="noopener"><img src="${ph.src}" alt="${ph.alt}" loading="lazy" style="object-position:${ph.focus || "50% 50%"}"></a><figcaption>${ph.caption}</figcaption></figure>`).join("")}
            </div>` : ""}
            <div class="act-top"><span class="type-pill ${a.type === "Upcoming" ? "up" : ""}">${a.type}</span>${a.status ? `<span class="present">${a.status.toUpperCase()}</span>` : ""}</div>
            <h3>${a.title}</h3>
            <p>${a.text}</p>
            <div class="act-tags">${a.tags.map(t => `<span class="tag-mini">${icon("tag")} ${t}</span>`).join("")}</div>
            ${activityButtons(a)}
            <div class="act-foot">${icon("calendar")} ${a.date}</div>
          </article>`).join("")}
      </div>
    </div>`;
  document.querySelectorAll("[data-filter]").forEach(b =>
    b.addEventListener("click", () => renderActivities(b.dataset.filter)));
  checkCertificates();
}

/* ---------- ABOUT ME (home page section) ---------- */
function aboutSection() {
  return `
  <section class="home-section" id="home-about">
    ${pageHead("", "About Me", ABOUT.subtitle)}
    <div class="container">
      <article class="card meet meet-full">
        <h2>${ABOUT.heading}</h2>
        ${ABOUT.paragraphs.map(p => `<p>${p}</p>`).join("")}
      </article>
    </div>
  </section>`;
}

/* ---------- CONTACT ---------- */
function renderContact() {
  const socials = profileButtons();

  $("#page-contact").innerHTML = `
    ${pageHead("", "Get In Touch", "Let's discuss research opportunities and collaborations")}
    <div class="container grid-2" style="align-items:start">
      <article class="card contact-card">
        <h2>Let's Connect</h2>
        <p>I'm looking for fully funded graduate research positions in nanotechnology and materials science, and I'm always happy to talk about collaborations. Feel free to reach out!</p>
        <div class="c-item"><span class="c-icon blue">${icon("mail")}</span><div><small>Email</small><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></div></div>
        ${PROFILE.phone ? `<div class="c-item"><span class="c-icon green">${icon("phone")}</span><div><small>Phone</small><a href="tel:${PROFILE.phone}">${PROFILE.phone}</a></div></div>` : ""}
        <div class="c-item"><span class="c-icon red">${icon("mapPin")}</span><div><small>Location</small><span>${PROFILE.location}</span></div></div>
        ${socials ? `<div class="socials">${socials}</div>` : ""}
      </article>
      <article class="card contact-card">
        <h2>Send a Message</h2>
        <form id="contactForm" novalidate>
          <div class="form-grid">
            <div class="field"><label for="fn">First Name</label><input id="fn" required placeholder="First name"></div>
            <div class="field"><label for="ln">Last Name</label><input id="ln" placeholder="Last name"></div>
          </div>
          <div class="field"><label for="em">Email</label><input id="em" type="email" required placeholder="you@example.com"></div>
          <div class="field"><label for="sb">Subject</label><input id="sb" placeholder="Research collaboration"></div>
          <div class="field"><label for="msg">Message</label><textarea id="msg" required placeholder="Tell me about your project or opportunity..."></textarea></div>
          <button class="btn btn-blue" type="submit">${icon("send")} Send Message</button>
          <p class="form-note" id="formNote">This opens your email app with the message filled in.</p>
        </form>
      </article>
    </div>`;

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = `${$("#fn").value} ${$("#ln").value}`.trim();
    const from = $("#em").value.trim();
    const msg = $("#msg").value.trim();
    if (!name || !from || !msg) { $("#formNote").textContent = "Please add your name, email and a message."; return; }
    const subject = $("#sb").value.trim() || "Message from your portfolio";
    const body = `${msg}\n\n${name}\n${from}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------- Router (#/home, #/research, ...) ---------- */
function route() {
  const name = (location.hash.replace("#/", "") || "home").toLowerCase();
  const section = HOME_SECTIONS[name];
  const entry = section ? PAGES[0] : (PAGES.find(p => p.page === name) || PAGES[0]);
  const page = entry.page;

  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === `page-${page}`));
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.toggle("active", a.dataset.page === page));
  document.querySelectorAll(".dropdown").forEach(d => {
    d.classList.remove("open");
    d.classList.toggle("active", !!d.querySelector(`[data-page="${page}"]`));
  });

  $("#navLinks").classList.remove("open");
  $("#menuBtn").setAttribute("aria-expanded", "false");
  $("#menuBtn").innerHTML = icon("menu");
  if (section) requestAnimationFrame(() => document.getElementById(section).scrollIntoView());
  else window.scrollTo(0, 0);
  if (page === "home" && !section) playNameIntro();
  const label = section ? (name === "about" ? "About Me" : "Education") : entry.label;
  document.title = `${PROFILE.name} | ${page === "home" && !section ? PROFILE.tagline : label}`;
}

/* ---------- Theme toggle ---------- */
function setThemeIcon() {
  const dark = document.documentElement.dataset.theme === "dark";
  $("#themeBtn").innerHTML = icon(dark ? "moon" : "sun");
}
$("#themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme === "dark";
  if (dark) delete root.dataset.theme; else root.dataset.theme = "dark";
  try { localStorage.setItem("theme", dark ? "light" : "dark"); } catch (e) {}
  setThemeIcon();
});

$("#menuBtn").addEventListener("click", () => {
  const open = $("#navLinks").classList.toggle("open");
  $("#menuBtn").setAttribute("aria-expanded", String(open));
  $("#menuBtn").innerHTML = icon(open ? "x" : "menu");
});

/* ---------- Start ---------- */
$("#logoName").textContent = PROFILE.name;
$("#logoTag").textContent = PROFILE.tagline;
$("#year").textContent = new Date().getFullYear();
buildNav();
[renderHome, renderPublications, renderProjects, renderHonors, renderExperience,
 renderInternships, renderTeaching, renderCertifications,
 renderActivities, renderLeadership, renderContact].forEach(fn => fn());
checkCertificates();
setupKineticName();
setThemeIcon();
window.addEventListener("hashchange", route);
route();
