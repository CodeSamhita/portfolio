# Portfolio v7 — "Modular Engineer"

A ground-up redesign. **Fully data-driven** — every word, stat, project, and label is
loaded from the JSON files in `data/` (and `image/gallery.json`). There is **no hardcoded
content** in the HTML or JS; the markup is an empty skeleton that `app.js` fills at runtime.

---

## What's NEW in v7 (and why)

1. **Bento-grid hero.** Replaces v6's linear hero+stats with a modular tile grid (identity,
   live typewriter role, animated stat counters, focus, status, portrait). *Why:* the bento
   layout is today's standard for showing many facets at a glance and scans far better on
   one screen. *Initiated by:* a CSS Grid of spanning tiles, each rendered from `profile.json`
   + `site.json → hero`.
2. **Light / Dark theme toggle.** *Why:* accessibility + a modern expectation; respects the
   reader. *Initiated by:* CSS custom properties swapped via `[data-theme]`, remembered in
   `localStorage`.
3. **Scroll-driven motion.** A top progress bar, active-section nav highlighting, and staggered
   reveal-on-scroll for every section. *Why:* contemporary motion standard that guides reading.
   *Initiated by:* `IntersectionObserver` + a scroll listener.
4. **Animated number counters** for the hero stats. *Initiated by:* a count-up that fires when
   the tile first enters view.
5. **Typewriter role line** cycling your focus areas. *Initiated by:* a small type/delete loop
   over `profile.focusAreas`.
6. **Infinite tools marquee** for the toolkit. *Initiated by:* a CSS keyframe track, items from
   `skills.tools`.
7. **3D tilt + glare** on the bento tiles, **magnetic shine** on primary buttons, image-zoom on
   project/gallery hovers. *Why:* tactile, "alive" micro-interactions. *Initiated by:* pointer
   tracking in `app.js` (auto-disabled on touch + reduced-motion).
8. **Built-in gallery lightbox** (keyboard + arrows) so the gallery lives on the same page
   instead of a separate file.
9. **New visual identity** — warm-amber accent on neutral near-black, Bricolage Grotesque +
   Space Mono typography (distinct from any earlier look).

## What's PRESERVED from v6

- **All of your content**, word for word: About paragraphs, skills, journey (education,
  highlights, activities), contact text, and your projects.
- The **data-driven philosophy** — now extended so even nav and section labels come from JSON.
- Your **links** (GitHub, LinkedIn, Instagram, WhatsApp, résumé) and gallery albums/photos.

> Fixes applied: your project image paths in v6 pointed at files that don't exist
> (`image/Humonoid.jpg`, etc.) — the real photos live in `image/gallery/…`, so the paths now
> point there. Your RoboDog (which has real photos and is your IEEE paper subject) was added as
> a 5th project.

---

## How to edit content (no code needed)

Everything is JSON in `data/`:

| File | Controls |
|------|----------|
| `site.json` | nav items, section eyebrows/titles, hero greeting & stats, footer |
| `profile.json` | name, role, hero lead, status, location, socials, focus areas |
| `about.json` | About paragraphs + insight cards |
| `skills.json` | capability cards + tools marquee |
| `journey.json` | education, highlights, activities |
| `projects.json` | project cards (title, category, description, tech, image, links) |
| `contact.json` | contact intro + availability |
| `image/gallery.json` | gallery albums (folder + image filenames) |

Edit the JSON, refresh, done. To add a gallery photo: drop it in the album's folder and add
its filename to that album's `images` list.

## How to run

It loads JSON via `fetch`, so it needs a server:

```bash
cd portfolio_v7
python -m http.server 8000      # then open http://localhost:8000
```

…or just push the folder to **GitHub Pages**.

**Quick look without a server:** open **`preview.html`** (double-click). It's a self-contained
offline build with the data embedded — handy for a fast preview. The real site is `index.html`.

## Structure

```
portfolio_v7/
├── index.html        # skeleton (no content)
├── styles.css        # design system + motion
├── app.js            # fetches JSON, renders everything, wires interactions
├── preview.html      # self-contained offline preview (auto-generated)
├── data/*.json       # all editable content
└── image/            # photos + gallery.json
```
