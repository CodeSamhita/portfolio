# Portfolio v7 — "Modular Engineer"

A ground-up, fully data-driven portfolio. Every word, statistic, project and label is loaded from
JSON at runtime — the HTML pages are empty skeletons that the scripts fill in. British / Indian
English is used throughout.

## Pages (all share styles.css)
- index.html  / app.js     — main site: bento hero, About, Skills (with tech logos), Work, Journey, Gallery preview, Contact.
- gallery.html / gallery.js — full gallery: every album from image/gallery.json, with a lightbox.
- resume.html  / resume.js  — printable technical résumé (Download / Print). Pulls the same JSON + data/resume.json.
- admin.html   / admin.js   — Content Manager: edit any JSON file, Validate, Format and Download it back into the repo.

## New in v7
- Bento-grid hero with a live typewriter role, animated counters, status and your photo.
- Depth: a parallax particle field drifts behind everything (reacts to scroll & cursor), plus 3D tilt on EVERY card.
- On-screen hints: one-time intro tips toast, a pulsing "drag me" badge, and hover tooltips on controls.
- A live "Tech I build with" tile that switches swiftly through your stack with logos; plus tech logos in the skills marquee.
- Light / Dark theme with real floating depth in light mode; remembered across visits.
- Fluid scaling (rem / clamp / % / vw) and a mobile-first layout.
- Scroll-progress bar, active-section nav, reveal-on-scroll.

## Preserved
All v6 content word for word (About, skills, journey, contact, projects), links and gallery albums.
Broken v6 project image paths were repointed to the real photos in image/gallery/, and RoboDog was
added (it has photos and is your IEEE paper).

## Edit content (no code)
Open admin.html via a server → pick a file → edit → Validate → Download → replace the file in the
repo → commit. gallery.json lives in image/, the rest in data/.

## Run it
Loads JSON via fetch, so use a server:
    cd portfolio_v7
    python -m http.server 8000   # open http://localhost:8000
…or push to GitHub Pages. (file:// will not load the JSON.)
