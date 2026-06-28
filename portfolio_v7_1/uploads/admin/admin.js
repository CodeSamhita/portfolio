/* Content Manager — load each JSON file, edit it, validate, and download the
   updated file to drop back into the repository. (Indian English throughout.) */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  var FILES = [
    { key: "site", path: "data/site.json", label: "Site & Nav" },
    { key: "profile", path: "data/profile.json", label: "Profile" },
    { key: "about", path: "data/about.json", label: "About" },
    { key: "skills", path: "data/skills.json", label: "Skills" },
    { key: "journey", path: "data/journey.json", label: "Journey" },
    { key: "projects", path: "data/projects.json", label: "Projects" },
    { key: "contact", path: "data/contact.json", label: "Contact" },
    { key: "gallery", path: "image/gallery.json", label: "Gallery" }
  ];

  var cache = {};
  var current = 0;

  initTheme();
  buildTabs();
  loadFile(0);

  function buildTabs() {
    $("#tabs").innerHTML = FILES.map(function (f, i) {
      return '<button class="tab' + (i === 0 ? " active" : "") + '" data-i="' + i + '">' + f.label + "</button>";
    }).join("");
    $("#tabs").addEventListener("click", function (e) {
      var b = e.target.closest(".tab"); if (!b) return;
      var i = parseInt(b.getAttribute("data-i"), 10);
      // remember edits in the current tab
      cache[FILES[current].key] = $("#code").value;
      document.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
      b.classList.add("active");
      loadFile(i);
    });
  }

  function loadFile(i) {
    current = i;
    var f = FILES[i];
    $("#file-name").textContent = f.path;
    setStatus("", "");
    if (cache[f.key] != null) { $("#code").value = cache[f.key]; return; }
    $("#code").value = "Loading " + f.path + " …";
    fetch(f.path).then(function (r) { if (!r.ok) throw new Error(f.path); return r.text(); })
      .then(function (txt) {
        try { txt = JSON.stringify(JSON.parse(txt), null, 2); } catch (e) {}
        cache[f.key] = txt; $("#code").value = txt;
      })
      .catch(function () {
        $("#code").value = "";
        setStatus("Could not load " + f.path + ". Open this page from a web server (GitHub Pages or python -m http.server), not as a file.", "err");
      });
  }

  function currentText() { return $("#code").value; }

  $("#btn-format").addEventListener("click", function () {
    try { $("#code").value = JSON.stringify(JSON.parse(currentText()), null, 2); setStatus("Formatted.", "ok"); }
    catch (e) { setStatus("Cannot format — " + e.message, "err"); }
  });

  $("#btn-validate").addEventListener("click", function () {
    try { JSON.parse(currentText()); setStatus("Valid JSON \u2713", "ok"); }
    catch (e) { setStatus("Invalid JSON — " + e.message, "err"); }
  });

  $("#btn-download").addEventListener("click", function () {
    var txt = currentText(), pretty;
    try { pretty = JSON.stringify(JSON.parse(txt), null, 2); }
    catch (e) { setStatus("Fix the JSON before downloading — " + e.message, "err"); return; }
    var f = FILES[current];
    cache[f.key] = pretty;
    var name = f.path.split("/").pop();
    var blob = new Blob([pretty], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 200);
    setStatus("Downloaded " + name + " — replace " + f.path + " in your repo, then commit.", "ok");
  });

  function setStatus(msg, kind) { var s = $("#status"); s.textContent = msg; s.className = "status" + (kind ? " " + kind : ""); }

  function initTheme() {
    var t; try { t = localStorage.getItem("v7-theme"); } catch (e) {}
    t = t || "dark"; apply(t);
    $("#theme-toggle").addEventListener("click", function () {
      t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(t); try { localStorage.setItem("v7-theme", t); } catch (e) {}
    });
    function apply(x) { document.documentElement.setAttribute("data-theme", x); var i = $("#theme-toggle i"); if (i) i.className = x === "dark" ? "fas fa-moon" : "fas fa-sun"; }
  }
})();
