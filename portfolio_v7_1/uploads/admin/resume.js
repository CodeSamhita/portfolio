/* Résumé renderer — pulls from the same JSON the site uses, plus resume.json.
   Education, skills, projects, awards and certifications are reused so the
   résumé always matches the live site. (Indian English throughout.) */
(function () {
  "use strict";
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  function load(p) { return fetch(p).then(function (r) { if (!r.ok) throw new Error(p); return r.json(); }); }

  Promise.all([
    load("data/profile.json"), load("data/skills.json"), load("data/journey.json"),
    load("data/projects.json"), load("data/resume.json")
  ]).then(function (r) {
    render({ profile: r[0], skills: r[1], journey: r[2], projects: r[3], resume: r[4] });
  }).catch(function (e) {
    document.getElementById("resume").innerHTML = '<p style="font-family:monospace;color:#a33">Could not load résumé data. Please run this through a web server (GitHub Pages or <code>python -m http.server</code>), not as a file.</p>';
    console.error(e);
  });

  function render(D) {
    var p = D.profile, j = D.journey, s = D.skills, pr = D.projects, rz = D.resume;
    var portfolio = "codesamhita.github.io/portfolio";
    var contact = [];
    if (p.email) contact.push('<a href="mailto:' + esc(p.email) + '"><i class="fas fa-envelope"></i> ' + esc(p.email) + "</a>");
    var phone = (j && j.activities ? "" : ""); // phone lives in contact.json normally; fall back below
    contact.push('<span><i class="fas fa-phone"></i> +91 63633 50665</span>');
    if (p.locationText) contact.push('<span><i class="fas fa-location-dot"></i> ' + esc(p.locationText) + "</span>");
    if (p.githubUrl) contact.push('<a href="' + esc(p.githubUrl) + '"><i class="fab fa-github"></i> ' + esc(p.githubUrl.replace(/^https?:\/\//, "")) + "</a>");
    if (p.linkedinUrl) contact.push('<a href="' + esc(p.linkedinUrl) + '"><i class="fab fa-linkedin"></i> LinkedIn</a>');

    var html = "";
    html += "<h1>" + esc((p.name || "").toUpperCase()) + "</h1>";
    html += '<div class="role">' + esc(p.label || "") + "</div>";
    html += '<div class="contact">' + contact.join("") + "</div>";

    // Objective
    if (rz.objective) html += "<h2>Career Objective</h2><p class=\"obj\">" + esc(rz.objective) + "</p>";

    // Education
    if (j.education && j.education.length) {
      html += "<h2>Education</h2>";
      j.education.forEach(function (e) {
        html += '<div class="item"><div class="row"><span class="t">' + esc(e.title) + '</span><span class="meta">' + esc(e.year) + '</span></div><div class="sub">' + esc(e.place) + "</div></div>";
      });
    }

    // Technical Skills (exclude the spoken-languages card from the technical block)
    if (s.capabilities && s.capabilities.length) {
      html += "<h2>Technical Skills</h2><div class=\"skills-grid\">";
      s.capabilities.forEach(function (c) {
        if (/spoken/i.test(c.title)) return;
        html += '<div class="skill-row"><b>' + esc(c.title) + ":</b> " + esc(c.text) + "</div>";
      });
      html += "</div>";
    }

    // Experience
    if (rz.experience && rz.experience.length) {
      html += "<h2>Professional Experience</h2>";
      rz.experience.forEach(function (x) {
        html += '<div class="item"><div class="row"><span class="t">' + esc(x.role) + '</span><span class="meta">' + esc(x.period) + '</span></div><div class="sub">' + esc(x.org) + "</div>";
        if (x.points && x.points.length) html += "<ul>" + x.points.map(function (pt) { return "<li>" + esc(pt) + "</li>"; }).join("") + "</ul>";
        html += "</div>";
      });
    }

    // Projects
    if (pr && pr.length) {
      html += "<h2>Technical Projects</h2>";
      pr.forEach(function (x) {
        html += '<div class="item"><div class="row"><span class="t">' + esc(x.title) + '</span><span class="meta">' + esc(x.type || x.category || "") + '</span></div>';
        html += '<div class="sub">' + esc(x.description) + "</div>";
        if (x.highlight) html += '<div class="sub" style="color:#16161a">— ' + esc(x.highlight) + "</div>";
        if (x.technologies && x.technologies.length) html += '<div class="tags">' + esc(x.technologies.join("  ·  ")) + "</div>";
        html += "</div>";
      });
    }

    // Publications
    if (rz.publications && rz.publications.length) {
      html += "<h2>Publications &amp; Research</h2><ul>" + rz.publications.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    }

    // Certifications (reuse journey.activities)
    if (j.activities && j.activities.length) {
      html += "<h2>Certifications &amp; Training</h2><ul>" + j.activities.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    }

    // Awards (reuse journey.highlights)
    if (j.highlights && j.highlights.length) {
      html += "<h2>Awards &amp; Recognition</h2><ul>" + j.highlights.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    }

    document.getElementById("resume").innerHTML = html;
    document.title = (p.name || "Résumé") + " — Résumé";
  }
})();
