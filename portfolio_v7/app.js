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
    initTilt(); initMobile(); initLightbox(); initContactForm();
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
    var pills = tools.concat(tools).map(function (t) { return '<span class="tool-pill">' + esc(t) + "</span>"; }).join("");
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
    $("#work-grid").innerHTML = list.map(function (p) {
      var tags = (p.technologies || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
      var links = [];
      if (p.githubUrl) links.push('<a href="' + esc(p.githubUrl) + '" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>');
      if (p.liveUrl) links.push('<a href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Live</a>');
      if (p.linkedinUrl) links.push('<a href="' + esc(p.linkedinUrl) + '" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i> Post</a>');
      return '<article class="project">' +
        '<div class="project-media"><span class="project-type">' + esc(p.type || p.category || "") + "</span>" +
          '<img src="' + esc(p.image || "") + '" alt="' + esc(p.title) + '" loading="lazy" onerror="this.closest(\'.project-media\').style.background=\'var(--surface-2)\';this.remove()" /></div>' +
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
    $("#gallery-head").innerHTML = head(sec.eyebrow, sec.title || "Gallery", sec.description);
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
      '<div class="footer-social">' + socialLinks(p) + "</div>" +
      '<span class="copy">' + esc(f.copyright || "") + "</span>";
  }

  /* ----------------------------------------------------- helpers */
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
    [].slice.call(document.querySelectorAll(".tile")).forEach(function (el) {
      var glare = el.querySelector(".tile-glare");
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.transform = "perspective(900px) rotateX(" + ((0.5 - py) * 5).toFixed(2) + "deg) rotateY(" + ((px - 0.5) * 5).toFixed(2) + "deg) translateZ(0)";
        if (glare) { glare.style.setProperty("--gx", px * 100 + "%"); glare.style.setProperty("--gy", py * 100 + "%"); }
        el.classList.add("tilting");
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; el.classList.remove("tilting"); });
    });
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
})();
