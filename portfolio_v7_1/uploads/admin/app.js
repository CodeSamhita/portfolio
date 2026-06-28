/* =============================================================
   PORTFOLIO v7 — dynamic renderer.
   Loads every section from JSON. No content is hardcoded here.
   ============================================================= */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia && matchMedia("(pointer: coarse)").matches;

  function load(p) { return fetch(p).then(function (r) { if (!r.ok) throw new Error(p); return r.json(); }); }

  function loadAll() {
    // Deployed site fetches the JSON (fully dynamic). The standalone preview.html
    // defines window.__PORTFOLIO_DATA__ so it can render offline via file://.
    if (window.__PORTFOLIO_DATA__) return Promise.resolve(window.__PORTFOLIO_DATA__);
    return Promise.all([
      load("data/site.json"), load("data/profile.json"), load("data/about.json"),
      load("data/skills.json"), load("data/journey.json"), load("data/projects.json"),
      load("data/contact.json"), load("image/gallery.json")
    ]).then(function (r) {
      return { site: r[0], profile: r[1], about: r[2], skills: r[3], journey: r[4], projects: r[5], contact: r[6], gallery: r[7] };
    });
  }

  var D = {};
  loadAll().then(function (data) {
    D = data;
    boot();
  }).catch(function (e) {
    console.error(e);
    var app = $("#app");
    if (app) app.innerHTML = '<p style="padding:160px 24px;text-align:center;font-family:monospace;color:#9b9ba4;max-width:560px;margin:0 auto">This portfolio loads its content from JSON files, so it needs to run from a web server (GitHub Pages, or <code>python -m http.server</code>) rather than being opened directly as a file.</p>';
  });

  function boot() {
    document.title = (D.site.meta && D.site.meta.title) || document.title;
    renderNav(); renderHero(); renderAbout(); renderSkills();
    renderWork(); renderJourney(); renderGallery(); renderContact(); renderFooter();
    initTheme(); initScroll(); initReveal(); initTypewriter(); initCounters();
    initTilt(); initMobile(); initLightbox(); initContactForm(); initSkillCycle(); initAmbient(); initHints();
  }

  /* ----------------------------------------------------- NAV */
  function renderNav() {
    var p = D.profile, site = D.site;
    var initials = (p.name || "").split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2);
    $("#nav-logo").textContent = initials || "AS";
    var links = (site.nav || []).map(function (n) {
      return '<a href="#' + esc(n.id) + '" class="nav-link" data-link="' + esc(n.id) + '">' + esc(n.label) + "</a>";
    }).join("");
    $("#nav-links").innerHTML = links;
    $("#mobile-menu").innerHTML = links;
    var resume = $("#nav-resume");
    resume.href = p.resumeUrl || "#";
    resume.textContent = (site.hero && site.hero.ctaSecondary) || "Résumé";
  }

  /* ----------------------------------------------------- HERO / BENTO */
  function renderHero() {
    var p = D.profile, h = D.site.hero || {};
    var social = socialLinks(p, "tile-social-inline");
    var stats = (h.stats || []).map(function (s) {
      return '<div class="tile tile-stat"><span class="tile-glare"></span>' +
        '<div class="num" data-count="' + (s.value || 0) + '">0<span>' + esc(s.suffix || "") + "</span></div>" +
        '<div class="lbl">' + esc(s.label) + "</div></div>";
    }).join("");

    var bento =
      '<div class="tile tile-identity"><span class="tile-glare"></span>' +
        '<div>' +
          '<div class="greeting">' + esc(h.greeting || "Hi, I\'m") + "</div>" +
          "<h1>" + esc(p.name) + "</h1>" +
          '<div class="role"><span id="tw"></span><span class="cursor">_</span></div>' +
          '<p class="lead">' + esc(p.heroLead || "") + "</p>" +
        "</div>" +
        '<div class="hero-cta">' +
          '<a href="#work" class="btn btn-primary">' + esc(h.ctaPrimary || "View my work") + ' <i class="fas fa-arrow-down"></i></a>' +
          '<a href="' + esc(p.resumeUrl || "#") + '" class="btn btn-ghost" target="_blank" rel="noopener">' + esc(h.ctaSecondary || "Résumé") + ' <i class="fas fa-file-lines"></i></a>' +
          '<div class="hero-social">' + social + "</div>" +
        "</div>" +
      "</div>" +
      '<div class="tile tile-portrait"><span class="tile-glare"></span><img src="' + esc(p.portrait || "") + '" alt="' + esc(p.name) + '" onerror="this.style.display=\'none\'" /></div>' +
      '<div class="tile tile-stack"><span class="tile-glare"></span><div class="stack-eyebrow"><span class="stack-live"></span>Tech I build with</div><div class="stack-display" id="stack-display"><i class="stack-ico fas fa-microchip"></i><span class="stack-name"></span></div></div>' +
      stats +
      '<div class="tile tile-focus"><span class="tile-glare"></span>' +
        '<div class="focus-eyebrow">' + esc(p.heroEyebrow || "Focus") + "</div>" +
        '<div class="focus-line">' + esc(p.label || "") + "</div>" +
      "</div>" +
      '<div class="tile tile-now"><span class="tile-glare"></span>' +
        '<div class="now-label">' + esc(p.statusLabel || "Currently") + "</div>" +
        '<div class="now-text">' + esc(p.statusText || "") + "</div>" +
        '<div class="now-loc"><i class="fas fa-location-dot"></i> ' + esc(p.locationText || "") + "</div>" +
      "</div>";

    $("#bento").innerHTML = bento;
    $("#scroll-hint").textContent = h.scrollHint || "Scroll to explore";

    // inline social style hook
    var s = document.createElement("style");
    s.textContent = ".hero-social{display:inline-flex;gap:8px;margin-left:4px}.hero-social a{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--surface-2);border:1px solid var(--border);color:var(--text);transition:all .3s var(--ease)}.hero-social a:hover{color:var(--accent);border-color:var(--accent);transform:translateY(-3px)}";
    document.head.appendChild(s);
  }

  function socialLinks(p) {
    var items = [
      [p.githubUrl, "fab fa-github", "GitHub"],
      [p.linkedinUrl, "fab fa-linkedin-in", "LinkedIn"],
      [p.instagramUrl, "fab fa-instagram", "Instagram"],
      [p.whatsappUrl, "fab fa-whatsapp", "WhatsApp"],
      [p.email ? "mailto:" + p.email : "", "fas fa-envelope", "Email"]
    ];
    return items.filter(function (i) { return i[0]; }).map(function (i) {
      return '<a href="' + esc(i[0]) + '" target="_blank" rel="noopener" aria-label="' + esc(i[2]) + '"><i class="' + i[1] + '"></i></a>';
    }).join("");
  }

  /* ----------------------------------------------------- ABOUT */
  function renderAbout() {
    var a = D.about, sec = (D.site.sections || {}).about || {};
    $("#about-head").innerHTML = head(sec.eyebrow, a.heading);
    $("#about-copy").innerHTML = (a.paragraphs || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
    $("#about-insights").innerHTML = (a.insights || []).map(function (i) {
      return '<div class="insight"><span class="tag">' + esc(i.tag) + "</span><h4>" + esc(i.title) + "</h4><p>" + esc(i.text) + "</p></div>";
    }).join("");
  }

  /* ----------------------------------------------------- SKILLS */
  function renderSkills() {
    var s = D.skills, sec = (D.site.sections || {}).skills || {};
    $("#skills-head").innerHTML = head(sec.eyebrow, s.heading);
    $("#capability-grid").innerHTML = (s.capabilities || []).map(function (c) {
      return '<div class="capability"><div class="ico"><i class="' + esc(c.icon || "fas fa-cube") + '"></i></div>' +
        "<h4>" + esc(c.title) + "</h4><p>" + esc(c.text) + "</p></div>";
    }).join("");
    var tools = (s.tools || []);
    var pills = tools.concat(tools).map(function (t) { return '<span class="tool-pill">' + logoFor(t) + "<span>" + esc(t) + "</span></span>"; }).join("");
    $("#tools-track").innerHTML = pills;
  }

  /* ----------------------------------------------------- WORK */
  function renderWork() {
    var list = D.projects || [], sec = (D.site.sections || {}).work || {};
    $("#work-head").innerHTML = head(sec.eyebrow, sec.title || "Selected Work", sec.description);
    var cats = ["All"]; list.forEach(function (p) { if (cats.indexOf(p.category) < 0 && p.category) cats.push(p.category); });
    $("#work-filters").innerHTML = cats.map(function (c, i) {
      return '<button class="chip' + (i === 0 ? " active" : "") + '" data-filter="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");
    paintProjects(list);

    $("#work-filters").addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $("#work-filters").querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      b.classList.add("active");
      var f = b.getAttribute("data-filter");
      paintProjects(f === "All" ? list : list.filter(function (p) { return p.category === f; }));
    });
  }
  function paintProjects(list) {
    var CATICON = { IoT: "fas fa-house-signal", Robotics: "fas fa-robot", AI: "fas fa-brain", Hardware: "fas fa-microchip", Security: "fas fa-shield-halved", Web: "fas fa-code" };
    $("#work-grid").innerHTML = list.map(function (p) {
      var tags = (p.technologies || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
      var links = [];
      if (p.githubUrl) links.push('<a href="' + esc(p.githubUrl) + '" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>');
      if (p.liveUrl) links.push('<a href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Live</a>');
      if (p.linkedinUrl) links.push('<a href="' + esc(p.linkedinUrl) + '" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i> Post</a>');
      return '<article class="project">' +
        '<div class="project-media' + (p.image ? "" : " no-img") + '"><span class="project-type">' + esc(p.type || p.category || "") + "</span>" +
          '<i class="proj-art ' + (CATICON[p.category] || "fas fa-microchip") + '"></i>' +
          (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy" onerror="this.closest(\'.project-media\').classList.add(\'no-img\');this.remove()" />' : "") + "</div>" +
        '<div class="project-body"><h3>' + esc(p.title) + "</h3>" +
          '<p class="desc">' + esc(p.description) + "</p>" +
          (p.highlight ? '<p class="hl">' + esc(p.highlight) + "</p>" : "") +
          '<div class="project-tags">' + tags + "</div>" +
          '<div class="project-links">' + links.join("") + "</div>" +
        "</div></article>";
    }).join("");
  }

  /* ----------------------------------------------------- JOURNEY */
  function renderJourney() {
    var j = D.journey, sec = (D.site.sections || {}).journey || {};
    $("#journey-head").innerHTML = head(sec.eyebrow, j.heading);
    $("#edu-label").textContent = sec.eduLabel || "Education";
    $("#highlights-label").textContent = sec.highlightsLabel || "Highlights";
    $("#activities-label").textContent = sec.activitiesLabel || "Activities";
    $("#education-list").innerHTML = (j.education || []).map(function (e) {
      return '<div class="timeline-item"><h4>' + esc(e.title) + '</h4><div class="place">' + esc(e.place) + '</div><div class="year">' + esc(e.year) + "</div></div>";
    }).join("");
    $("#highlights-list").innerHTML = (j.highlights || []).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("");
    $("#activities-list").innerHTML = (j.activities || []).map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
  }

  /* ----------------------------------------------------- GALLERY */
  var ALBUMS = [];
  function renderGallery() {
    var g = (D.gallery || []).filter(function (a) { return a.images && a.images.length; });
    ALBUMS = g;
    var sec = (D.site.sections || {}).gallery || {};
    $("#gallery-head").innerHTML = head(sec.eyebrow, sec.title || "Gallery", sec.description) +
      '<a class="btn btn-ghost" href="gallery.html" style="margin-top:1.1rem" data-hint="See every album">View full gallery <i class="fas fa-arrow-right"></i></a>';
    $("#gallery-grid").innerHTML = g.map(function (a, idx) {
      var cover = a.folder + "/" + a.images[0];
      return '<div class="album" data-album="' + idx + '">' +
        '<span class="album-count">' + a.images.length + " photos</span>" +
        '<img src="' + esc(cover) + '" alt="' + esc(a.title) + '" loading="lazy" onerror="this.parentElement.style.display=\'none\'" />' +
        '<div class="album-overlay"><h4>' + esc(a.title) + '</h4><div class="meta">' + esc(sec.cta || "View album") + "</div></div></div>";
    }).join("");
  }

  /* ----------------------------------------------------- CONTACT */
  function renderContact() {
    var c = D.contact, p = D.profile, sec = (D.site.sections || {}).contact || {};
    $("#contact-head").innerHTML = head(sec.eyebrow, c.heading);
    var channels = [];
    if (p.email) channels.push(channel("fas fa-envelope", "Email", p.email, "mailto:" + p.email));
    var phone = (c.availability || "").match(/[+]?\d[\d\s-]{8,}/);
    if (phone) channels.push(channel("fas fa-phone", "Phone", phone[0].trim(), "tel:" + phone[0].replace(/\s/g, "")));
    if (p.githubUrl) channels.push(channel("fab fa-github", "GitHub", "@" + p.githubUrl.split("/").pop(), p.githubUrl));
    if (p.linkedinUrl) channels.push(channel("fab fa-linkedin-in", "LinkedIn", "Connect", p.linkedinUrl));
    $("#contact-info").innerHTML =
      '<p class="intro">' + esc(c.intro || "") + "</p>" +
      '<p class="availability">' + esc(c.availability || "") + "</p>" +
      '<div class="contact-channels">' + channels.join("") + "</div>";
  }
  function channel(icon, label, val, href) {
    return '<a class="contact-channel" href="' + esc(href) + '" target="_blank" rel="noopener">' +
      '<i class="' + icon + '"></i><div><div class="c-label">' + esc(label) + '</div><div class="c-val">' + esc(val) + "</div></div></a>";
  }

  /* ----------------------------------------------------- FOOTER */
  function renderFooter() {
    var f = D.site.footer || {}, p = D.profile;
    $("#footer").innerHTML =
      '<span class="tagline">' + esc(f.tagline || "") + "</span>" +
      '<div class="footer-links"><a href="gallery.html">Gallery</a><a href="' + esc(p.resumeUrl || "resume.html") + '">R\u00e9sum\u00e9</a><a href="admin.html">Manage content</a></div>' +
      '<div class="footer-social">' + socialLinks(p) + "</div>" +
      '<span class="copy">' + esc(f.copyright || "") + "</span>";
  }

  /* ----------------------------------------------------- helpers */
  // map a tech name to a logo (Devicon where available, Font Awesome fallback)
  var DEV = { python:"devicon-python-plain", c:"devicon-c-plain", "c++":"devicon-cplusplus-plain", "c#":"devicon-csharp-plain",
    java:"devicon-java-plain", kotlin:"devicon-kotlin-plain", javascript:"devicon-javascript-plain", js:"devicon-javascript-plain",
    react:"devicon-react-original", reactjs:"devicon-react-original", node:"devicon-nodejs-plain", nodejs:"devicon-nodejs-plain",
    flask:"devicon-flask-original", html:"devicon-html5-plain", html5:"devicon-html5-plain", css:"devicon-css3-plain", css3:"devicon-css3-plain",
    bootstrap:"devicon-bootstrap-plain", mysql:"devicon-mysql-plain", git:"devicon-git-plain", github:"devicon-github-original",
    linux:"devicon-linux-plain", ubuntu:"devicon-ubuntu-plain", arduino:"devicon-arduino-plain", raspberrypi:"devicon-raspberrypi-line",
    ros:"devicon-ros-original", ros2:"devicon-ros-original", tensorflow:"devicon-tensorflow-original", pytorch:"devicon-pytorch-original",
    opencv:"devicon-opencv-plain", vscode:"devicon-vscode-plain", numpy:"devicon-numpy-original", pandas:"devicon-pandas-original" };
  var FA = { powerbi:"fas fa-chart-column", tinkercad:"fas fa-cube", easyeda:"fas fa-microchip", platformio:"fas fa-microchip",
    esp32:"fas fa-microchip", freertos:"fas fa-gears", mqtt:"fas fa-tower-broadcast", jetsonnano:"fas fa-microchip",
    whisper:"fas fa-microphone-lines", langchain:"fas fa-link", scikitlearn:"fas fa-brain", littlefs:"fas fa-floppy-disk", photoshop:"fas fa-image", premierepro:"fas fa-film" };
  function logoFor(name) {
    var k = String(name).toLowerCase().replace(/[^a-z0-9+#]/g, "");
    if (DEV[k]) return '<i class="' + DEV[k] + ' colored"></i>';
    if (FA[k]) return '<i class="' + FA[k] + '"></i>';
    return '<i class="fas fa-microchip"></i>';
  }

  function initHints() {
    var seen;
    try { seen = sessionStorage.getItem("v7-hints"); } catch (e) {}
    if (seen || reduce) return;
    var tips = [
      "\u2726 Tip: drag the 3D shape in the intro to spin it",
      "\u25D0 Tip: switch light / dark from the top-right",
      "\u29C9 Tip: hover the cards \u2014 they tilt in 3D",
      "\u25A6 Tip: tap any gallery photo to open it full-size"
    ];
    var box = document.createElement("div");
    box.className = "hint-toast";
    box.innerHTML = '<span class="hint-dot"></span><span class="hint-text"></span><button class="hint-x" aria-label="Dismiss">&times;</button>';
    document.body.appendChild(box);
    var txt = box.querySelector(".hint-text"), i = 0, timer;
    function show() {
      txt.textContent = tips[i];
      box.classList.add("in");
      timer = setTimeout(function () {
        box.classList.remove("in");
        i++;
        if (i < tips.length) setTimeout(show, 500); else done();
      }, 3600);
    }
    function done() { try { sessionStorage.setItem("v7-hints", "1"); } catch (e) {} setTimeout(function () { box.remove(); }, 600); }
    box.querySelector(".hint-x").addEventListener("click", function () { clearTimeout(timer); box.classList.remove("in"); done(); });
    setTimeout(show, 1600);
  }

  function head(eyebrow, title, desc) {
    return (eyebrow ? '<div class="eyebrow">' + esc(eyebrow) + "</div>" : "") +
      "<h2 class=\"section-title\">" + esc(title || "") + "</h2>" +
      (desc ? '<p class="section-desc">' + esc(desc) + "</p>" : "");
  }

  /* ===================== INTERACTIONS ===================== */
  function initTheme() {
    var saved;
    try { saved = localStorage.getItem("v7-theme"); } catch (e) {}
    var theme = saved || (D.site.meta && D.site.meta.themeDefault) || "dark";
    apply(theme);
    $("#theme-toggle").addEventListener("click", function () {
      theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(theme);
      try { localStorage.setItem("v7-theme", theme); } catch (e) {}
    });
    function apply(t) {
      document.documentElement.setAttribute("data-theme", t);
      var i = $("#theme-toggle i");
      if (i) i.className = t === "dark" ? "fas fa-moon" : "fas fa-sun";
    }
  }

  function initScroll() {
    var bar = $("#scroll-progress"), nav = $("#nav");
    var links = [].slice.call(document.querySelectorAll(".nav-link"));
    function onScroll() {
      var st = window.scrollY || document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
      nav.classList.toggle("scrolled", st > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    // active link
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var id = en.target.id;
            links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("data-link") === id); });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["home", "about", "skills", "work", "journey", "gallery", "contact"].forEach(function (id) {
        var s = document.getElementById(id); if (s) obs.observe(s);
      });
    }
  }

  function initReveal() {
    var els = [].slice.call(document.querySelectorAll(".reveal"));
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { obs.observe(e); });
  }

  function initTypewriter() {
    var node = $("#tw"); if (!node) return;
    var words = (D.profile.focusAreas || [D.profile.label || ""]).filter(Boolean);
    if (!words.length) return;
    if (reduce) { node.textContent = words[0]; return; }
    var wi = 0, ci = 0, del = false;
    (function tick() {
      var w = words[wi];
      node.textContent = w.slice(0, ci);
      if (!del && ci < w.length) { ci++; setTimeout(tick, 70); }
      else if (!del && ci === w.length) { del = true; setTimeout(tick, 1500); }
      else if (del && ci > 0) { ci--; setTimeout(tick, 35); }
      else { del = false; wi = (wi + 1) % words.length; setTimeout(tick, 220); }
    })();
  }

  function initCounters() {
    var nums = [].slice.call(document.querySelectorAll(".num[data-count]"));
    if (!nums.length) return;
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count")) || 0;
      var suffix = el.querySelector("span") ? el.querySelector("span").outerHTML : "";
      if (reduce) { el.innerHTML = target + suffix; return; }
      var start = null, dur = 1200;
      requestAnimationFrame(function step(ts) {
        if (!start) start = ts;
        var prog = Math.min((ts - start) / dur, 1);
        var val = Math.round(target * (1 - Math.pow(1 - prog, 3)));
        el.innerHTML = val + suffix;
        if (prog < 1) requestAnimationFrame(step);
      });
    }
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); obs.unobserve(en.target); } });
      }, { threshold: 0.5 });
      nums.forEach(function (n) { obs.observe(n); });
    } else { nums.forEach(run); }
  }

  function initTilt() {
    if (reduce || coarse) return;
    function arm(el, max, glare) {
      if (el.__tilt) return; el.__tilt = true;
      if (!glare) {
        glare = document.createElement("span"); glare.className = "card-glare"; el.appendChild(glare);
      }
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.transform = "perspective(900px) rotateX(" + ((0.5 - py) * max).toFixed(2) + "deg) rotateY(" + ((px - 0.5) * max).toFixed(2) + "deg)";
        glare.style.setProperty("--gx", px * 100 + "%");
        glare.style.setProperty("--gy", py * 100 + "%");
        el.classList.add("tilting");
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; el.classList.remove("tilting"); });
    }
    function scan() {
      [].slice.call(document.querySelectorAll(".tile")).forEach(function (el) { arm(el, 5, el.querySelector(".tile-glare")); });
      [].slice.call(document.querySelectorAll(".project, .capability, .insight, .album")).forEach(function (el) { arm(el, 6); });
    }
    scan();
    // re-arm cards that are rendered later (project filtering, gallery, etc.)
    if (window.MutationObserver) {
      new MutationObserver(scan).observe(document.getElementById("app") || document.body, { childList: true, subtree: true });
    }
  }

  function initMobile() {
    var burger = $("#nav-burger"), menu = $("#mobile-menu");
    if (!burger) return;
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) { menu.classList.remove("open"); burger.classList.remove("open"); } });
  }

  function initLightbox() {
    var lb = $("#lightbox"), img = $("#lightbox-img"), cap = $("#lightbox-caption");
    var cur = { album: 0, idx: 0 };
    function open(ai, ii) { cur.album = ai; cur.idx = ii; show(); lb.classList.add("open"); }
    function show() {
      var a = ALBUMS[cur.album]; if (!a) return;
      img.src = a.folder + "/" + a.images[cur.idx];
      cap.textContent = a.title + " — " + (cur.idx + 1) + "/" + a.images.length;
    }
    function move(d) { var a = ALBUMS[cur.album]; cur.idx = (cur.idx + d + a.images.length) % a.images.length; show(); }
    $("#gallery-grid").addEventListener("click", function (e) {
      var al = e.target.closest(".album"); if (!al) return;
      open(parseInt(al.getAttribute("data-album"), 10), 0);
    });
    $("#lightbox-close").addEventListener("click", function () { lb.classList.remove("open"); });
    $("#lightbox-next").addEventListener("click", function () { move(1); });
    $("#lightbox-prev").addEventListener("click", function () { move(-1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.classList.remove("open"); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    });
  }

  function initContactForm() {
    var form = $("#contact-form"); if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#cf-name").value.trim(), email = $("#cf-email").value.trim(), msg = $("#cf-msg").value.trim();
      var note = form.querySelector(".form-note");
      if (!note) { note = document.createElement("p"); note.className = "form-note"; form.appendChild(note); }
      if (!name || !email || !msg) { note.className = "form-note err"; note.textContent = "Please fill in every field."; return; }
      var to = D.profile.email || "";
      var body = encodeURIComponent("Hi Aditya,\n\n" + msg + "\n\n— " + name + " (" + email + ")");
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent("Portfolio enquiry from " + name) + "&body=" + body;
      note.className = "form-note ok"; note.textContent = "Opening your email app…";
      form.reset();
    });
  }

  function initSkillCycle() {
    var disp = document.getElementById("stack-display");
    if (!disp) return;
    var tools = (D.skills && D.skills.tools) || [];
    if (!tools.length) return;
    var ico = disp.querySelector(".stack-ico"), name = disp.querySelector(".stack-name");
    function set(t) {
      var m = logoFor(t).match(/class="([^"]+)"/);
      ico.className = "stack-ico " + (m ? m[1] : "fas fa-microchip");
      name.textContent = t;
    }
    var i = 0; set(tools[0]);
    if (reduce) return;
    setInterval(function () {
      i = (i + 1) % tools.length;
      disp.classList.remove("flip"); void disp.offsetWidth; disp.classList.add("flip");
      set(tools[i]);
    }, 1150);
  }

  function initAmbient() {
    if (reduce) return;
    var c = document.createElement("canvas");
    c.id = "ambient-canvas"; c.setAttribute("aria-hidden", "true");
    document.body.appendChild(c);
    var x = c.getContext("2d"); if (!x) return;
    var DPR = Math.min(window.devicePixelRatio || 1, 2), W, H, P = [], mx = 0, my = 0, tmx = 0, tmy = 0, raf = null;
    function rgb() {
      var h = (getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#ff6a3d").replace("#", "");
      if (h.length === 3) h = h.replace(/(.)/g, "$1$1");
      var n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function size() {
      W = c.clientWidth = window.innerWidth; H = c.clientHeight = window.innerHeight;
      c.width = W * DPR; c.height = H * DPR; x.setTransform(DPR, 0, 0, DPR, 0, 0); make();
    }
    function make() {
      var n = Math.max(36, Math.min(110, (W * H / 17000) | 0)); P = [];
      for (var i = 0; i < n; i++) P.push({ x: Math.random(), y: Math.random(), z: Math.random(), vx: (Math.random() - 0.5) * 0.0002, vy: (Math.random() - 0.5) * 0.0002, r: Math.random() * 1.4 + 0.4 });
    }
    function tick() {
      mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
      var col = rgb(); x.clearRect(0, 0, W, H);
      for (var i = 0; i < P.length; i++) {
        var p = P[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1; if (p.y < 0 || p.y > 1) p.vy *= -1;
        var d = 1 - p.z;
        var px = (p.x - 0.5) * W * (0.7 + d * 0.6) + W / 2 + mx * d * 46;
        var py = (p.y - 0.5) * H * (0.7 + d * 0.6) + H / 2 + my * d * 46;
        var a = d * 0.45 + 0.06;
        x.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + a + ")";
        x.beginPath(); x.arc(px, py, p.r * (d * 1.6 + 0.5), 0, 6.283); x.fill();
        if (p.z < 0.18) { x.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + (a * 0.16) + ")"; x.beginPath(); x.arc(px, py, p.r * 5, 0, 6.283); x.fill(); }
      }
      raf = requestAnimationFrame(tick);
    }
    window.addEventListener("resize", size);
    if (!coarse) window.addEventListener("pointermove", function (e) { tmx = e.clientX / window.innerWidth - 0.5; tmy = e.clientY / window.innerHeight - 0.5; }, { passive: true });
    size(); raf = requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (raf) { cancelAnimationFrame(raf); raf = null; } }
      else if (!raf) { raf = requestAnimationFrame(tick); }
    });
  }
})();
