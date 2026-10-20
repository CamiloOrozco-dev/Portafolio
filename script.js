// ==========================================================
// Portafolio — Juan Camilo Zapata Orozco
// Interacciones: navegación, idioma (ES/EN), animaciones.
// ==========================================================

(() => {
  "use strict";

  // ---------- Traducciones al inglés ----------
  // El español es el contenido original del HTML; se guarda al cargar.
  const EN = {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Open to new opportunities",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Full Stack &amp; Backend Software Engineer",
    "hero.desc": "I build APIs, microservices and real-time distributed systems with <strong>.NET</strong>, <strong>Python</strong> and <strong>React</strong>, applying Hexagonal Architecture, TDD and <strong>Agentic AI</strong> automation.",
    "hero.cta1": "View projects",
    "hero.cta2": "Download CV",
    "stats.years": "Years of experience",
    "stats.projects": "Key projects",
    "stats.certs": "Certifications",
    "about.title": "About me",
    "about.photoBadge": "Medellín, CO · Software Engineer",
    "about.p1": "I'm a Software Engineer with 3+ years of experience designing, building and maintaining enterprise applications, REST APIs, microservices and real-time distributed systems on Linux and Docker.",
    "about.p2": "I care about clean, maintainable code: I work with <strong>Hexagonal Architecture</strong>, <strong>SOLID</strong> principles, Inversion of Control and <strong>Test-Driven Development</strong>. I've integrated software with hardware on embedded devices and automated engineering workflows by supervising <strong>AI Agents</strong>.",
    "about.p3": "I enjoy working in agile Scrum teams, writing clear documentation and turning complex requirements into stable, scalable products.",
    "about.f1": "Medellín, Colombia · Remote / Hybrid",
    "about.f2": "B.S. Software Engineering (in progress)",
    "about.f3": "Certified in Azure AI &amp; Azure OpenAI",
    "about.f4": "Scrum Foundation Professional (SFPC™)",
    "about.f5": "Native Spanish · English B1/B2",
    "skills.title": "Technical skills",
    "skills.backend": "Backend",
    "skills.db": "Databases",
    "skills.arch": "Architecture",
    "skills.ai": "AI &amp; Automation",
    "skills.embedded": "Embedded &amp; Networking",
    "skills.quality": "Quality &amp; Methodologies",
    "exp.title": "Professional experience",
    "exp.j1.date": "Oct 2024 — Present",
    "exp.j1.org": "Intelligent Systems &amp; Real-Time Control Sector",
    "exp.j1.role": "Backend &amp; Full Stack Software Developer",
    "exp.j1.b1": "Design and maintenance of the core platform, backend services and hardware integration modules for a mission-critical real-time system on Linux and embedded devices.",
    "exp.j1.b2": "Hexagonal Architecture with SOLID, IoC and GRASP to decouple the domain from data and device infrastructure.",
    "exp.j1.b3": "TDD and automated quality analysis with high unit, functional and integration test coverage.",
    "exp.j1.b4": "Engineering process automation and AI Agent supervision for code, user stories, documentation and versioning.",
    "exp.j1.b5": "Alembic migrations, encrypted distributed messaging, HTTPS and deployments with Docker Compose and SSH.",
    "exp.j2.date": "Aug 2023 — Sep 2024",
    "exp.j2.org": "International Software Consulting Firm",
    "exp.j2.role": "Software Developer (.NET · React · Azure)",
    "exp.j2.b1": "Built backend solutions with C#, .NET and SQL Server for internal and client-facing enterprise applications.",
    "exp.j2.b2": "Delivered frontend user stories with React.",
    "exp.j2.b3": "Integration test suites for APIs and microservices with Postman across multiple environments.",
    "exp.j2.b4": "Managed roles and permissions (IAM) in Microsoft Azure and worked in agile Scrum teams (including ceremonies in English) on Azure DevOps.",
    "proj.title": "Featured projects",
    "proj.intro": "A selection of solutions I've worked on. Some repositories are private due to confidentiality agreements; I'm happy to walk through their architecture in an interview.",
    "proj.tag.pro": "Professional",
    "proj.tag.int": "Integration",
    "proj.tag.auto": "Automation",
    "proj.p1.title": "Real-Time Distributed Control Platform",
    "proj.p1.desc": "Containerized microservices ecosystem (Edge &amp; Core Server) with an OpenAPI-documented REST API, secure inter-process messaging, hardware interface control, interactive console and CI/CD with automated tests.",
    "proj.p2.title": "Enterprise API with Clean Architecture",
    "proj.p2.desc": "Layered .NET 8 RESTful service with Swagger/OpenAPI, multi-stage Dockerfile, continuous integration pipeline and automated pre-commit quality checks.",
    "proj.p3.title": "Electronic Invoicing Service",
    "proj.p3.desc": "Parallel .NET and Python implementations consuming electronic invoicing APIs with OAuth2, token caching and renewal, document issuance and signed file download.",
    "proj.p4.title": "Asynchronous Workflow &amp; Webhook Automation",
    "proj.p4.desc": "Async bot integrating time-tracking platforms, team messaging and repository webhooks to automate team records and notifications.",
    "edu.title": "Education &amp; certifications",
    "edu.certs": "Certifications",
    "edu.education": "Education",
    "edu.e1": "B.S. in Software Engineering",
    "edu.e1m": "UNIMINUTO · In progress",
    "edu.e2": "Technical Degree in Software Design &amp; Development",
    "edu.e3": "Technical Degree in Software Design &amp; Development",
    "contact.title": "Let's build something together",
    "contact.text": "I'm open to Full Stack, Backend or AI solutions developer roles, remote or hybrid. Drop me a line and I'll get back to you soon.",
    "contact.cta": "Send an email",
    "contact.cv": "Resume (PDF)",
    "footer.built": "Designed and built with HTML, CSS and JavaScript."
  };

  const TYPED = {
    es: [".NET · Python · React", "Arquitectura Hexagonal + TDD", "APIs REST y Microservicios", "Docker · Linux · CI/CD", "Automatización con IA Agéntica"],
    en: [".NET · Python · React", "Hexagonal Architecture + TDD", "REST APIs & Microservices", "Docker · Linux · CI/CD", "Agentic AI Automation"]
  };

  const CV = {
    es: "assets/CV_Juan_Camilo_Zapata_ES.pdf",
    en: "assets/CV_Juan_Camilo_Zapata_EN.pdf"
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const i18nNodes = document.querySelectorAll("[data-i18n]");
  const ES = {};
  i18nNodes.forEach((el) => { ES[el.dataset.i18n] = el.innerHTML; });

  let lang = localStorage.getItem("lang") || "es";

  // ---------- Tema (Modo Oscuro / Claro) ----------
  const themeToggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (themeToggle) themeToggle.setAttribute("aria-label", lang === "en" ? "Switch to dark mode" : "Cambiar a modo oscuro");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeToggle) themeToggle.setAttribute("aria-label", lang === "en" ? "Switch to light mode" : "Cambiar a modo claro");
    }
    localStorage.setItem("theme", theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      applyTheme(isLight ? "dark" : "light");
    });
  }

  // Respetar cambio de preferencia del sistema si el usuario no tiene preferencia guardada
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "light" : "dark");
    }
  });

  // ---------- Idioma ----------
  const langToggle = document.getElementById("langToggle");
  function applyLang(next) {
    lang = next;
    const dict = lang === "en" ? EN : ES;
    i18nNodes.forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    document.documentElement.lang = lang;
    langToggle.textContent = lang === "en" ? "ES" : "EN";
    document.getElementById("cvLink").href = CV[lang];
    document.getElementById("cvLink2").href = CV[lang];
    localStorage.setItem("lang", lang);
    restartTyping();
  }
  langToggle.addEventListener("click", () => applyLang(lang === "es" ? "en" : "es"));

  // ---------- Efecto de escritura ----------
  const typedEl = document.getElementById("typed");
  let typingTimer = null;
  function restartTyping() {
    clearTimeout(typingTimer);
    const words = TYPED[lang];
    if (prefersReducedMotion) { typedEl.textContent = words[0]; return; }
    let w = 0, c = 0, deleting = false;
    const tick = () => {
      const word = words[w];
      typedEl.textContent = word.slice(0, c);
      if (!deleting && c < word.length) { c++; typingTimer = setTimeout(tick, 65); }
      else if (!deleting) { deleting = true; typingTimer = setTimeout(tick, 1600); }
      else if (c > 0) { c--; typingTimer = setTimeout(tick, 35); }
      else { deleting = false; w = (w + 1) % words.length; typingTimer = setTimeout(tick, 300); }
    };
    tick();
  }

  // ---------- Navegación ----------
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );

  // Enlace activo según la sección visible
  const sections = document.querySelectorAll("main section[id]");
  const linkById = {};
  navLinks.querySelectorAll("a").forEach((a) => { linkById[a.getAttribute("href").slice(1)] = a; });
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Object.values(linkById).forEach((a) => a.classList.remove("active"));
        const link = linkById[entry.target.id];
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => sectionObserver.observe(s));

  // ---------- Animaciones de entrada ----------
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    revealObserver.observe(el);
  });

  // ---------- Contadores ----------
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      if (prefersReducedMotion) { el.textContent = target; obs.unobserve(el); return; }
      let current = 0;
      const step = () => {
        current++;
        el.textContent = current;
        if (current < target) setTimeout(step, 180);
      };
      step();
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

  document.getElementById("year").textContent = new Date().getFullYear();

  applyLang(lang);
})();
