/* Gallery page — lists every album from image/gallery.json with a full lightbox.
   Shares the look of the main site. (Indian English throughout.) */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia && matchMedia("(pointer: coarse)").matches;
  function load(p) { return fetch(p).then(function (r) { if (!r.ok) throw new Error(p); return r.json(); }); }

  initTheme();
  Promise.all([load("data/site.json"), load("data/profile.json"), load("image/gallery.json")])
    .then(function (r) { render(r[0], r[1], r[2]); })
    .catch(function (e) {
      console.error(e);
      $("#gallery-grid").innerHTML = '<p style="font-family:monospace;color:#9b9ba4">The gallery loads from JSON, so it needs a web server (GitHub Pages or <code>python -m http.server</code>).</p>';
    });

  var ALBUMS = [];
  function render(site, profile, gallery) {
    var initials = (profile.name || "").split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2);
    $("#nav-logo").textContent = initials || "AS";
    var sec = (site.sections || {}).gallery || {};
    $("#gallery-head").innerHTML =
      (sec.eyebrow ? '<div class="eyebrow">' + esc(sec.eyebrow) + "</div>" : "") +
      '<h2 class="section-title">' + esc(sec.title || "Gallery") + "</h2>" +
      (sec.description ? '<p class="section-desc">' + esc(sec.description) + "</p>" : "");

    ALBUMS = (gallery || []).filter(function (a) { return a.images && a.images.length; });
    $("#gallery-grid").innerHTML = ALBUMS.map(function (a, i) {
      var cover = a.folder + "/" + a.images[0];
      var hint = i === 0 ? '<span class="hint-badge">\u25A6 tap to open</span>' : "";
      return '<div class="album" data-album="' + i + '">' + hint +
        '<span class="album-count">' + a.images.length + " photos</span>" +
        '<img src="' + esc(cover) + '" alt="' + esc(a.title) + '" loading="lazy" onerror="this.parentElement.style.display=\'none\'" />' +
        '<div class="album-overlay"><h4>' + esc(a.title) + '</h4><div class="meta">' + esc(sec.cta || "View album") + "</div></div></div>";
    }).join("");

    // footer
    var f = site.footer || {};
    $("#footer").innerHTML = '<span class="tagline">' + esc(f.tagline || "") + "</span><span class=\"copy\">" + esc(f.copyright || "") + "</span>";

    initReveal(); initTilt(); initLightbox();
  }

  function initTheme() {
    var t; try { t = localStorage.getItem("v7-theme"); } catch (e) {}
    t = t || "dark";
    apply(t);
    $("#theme-toggle").addEventListener("click", function () {
      t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(t); try { localStorage.setItem("v7-theme", t); } catch (e) {}
    });
    function apply(x) { document.documentElement.setAttribute("data-theme", x); var i = $("#theme-toggle i"); if (i) i.className = x === "dark" ? "fas fa-moon" : "fas fa-sun"; }
  }

  function initReveal() {
    var els = [].slice.call(document.querySelectorAll(".reveal"));
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var o = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); o.unobserve(x.target); } }); }, { threshold: 0.1 });
    els.forEach(function (e) { o.observe(e); });
  }

  function initTilt() {
    if (reduce || coarse) return;
    [].slice.call(document.querySelectorAll(".album")).forEach(function (el) {
      var g = document.createElement("span"); g.className = "card-glare"; el.appendChild(g);
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect(); var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.transform = "perspective(900px) rotateX(" + ((0.5 - py) * 6).toFixed(2) + "deg) rotateY(" + ((px - 0.5) * 6).toFixed(2) + "deg)";
        g.style.setProperty("--gx", px * 100 + "%"); g.style.setProperty("--gy", py * 100 + "%"); el.classList.add("tilting");
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; el.classList.remove("tilting"); });
    });
  }

  function initLightbox() {
    var lb = $("#lightbox"), img = $("#lightbox-img"), cap = $("#lightbox-caption");
    var cur = { a: 0, i: 0 };
    function show() { var al = ALBUMS[cur.a]; if (!al) return; img.src = al.folder + "/" + al.images[cur.i]; cap.textContent = al.title + " — " + (cur.i + 1) + "/" + al.images.length; }
    function move(d) { var al = ALBUMS[cur.a]; cur.i = (cur.i + d + al.images.length) % al.images.length; show(); }
    $("#gallery-grid").addEventListener("click", function (e) { var al = e.target.closest(".album"); if (!al) return; cur.a = parseInt(al.getAttribute("data-album"), 10); cur.i = 0; show(); lb.classList.add("open"); });
    $("#lightbox-close").addEventListener("click", function () { lb.classList.remove("open"); });
    $("#lightbox-next").addEventListener("click", function () { move(1); });
    $("#lightbox-prev").addEventListener("click", function () { move(-1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.classList.remove("open"); });
    document.addEventListener("keydown", function (e) { if (!lb.classList.contains("open")) return; if (e.key === "Escape") lb.classList.remove("open"); if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); });
  }
})();
