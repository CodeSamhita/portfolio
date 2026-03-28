# Aditya Sharma — Portfolio v6

A fully data-driven personal portfolio website built with vanilla HTML, CSS, and JavaScript.
Every piece of content — profile, projects, skills, gallery — is loaded at runtime from JSON
files, making edits as simple as updating a config.

🔗 **Live site:** [codesamhita.github.io/portfolio](https://codesamhita.github.io/portfolio/)

---

## ✨ Highlights

| Feature | Details |
|---|---|
| **Glassmorphism UI** | Dark-mode-first design with frosted glass panels, ambient glow orbs, and smooth micro-animations |
| **100% Data-Driven** | Zero hardcoded content — everything is fetched from JSON files in `data/` and `image/` |
| **Portfolio Studio** | Visual admin panel (`admin.html`) for editing profile, about, skills, journey, and projects |
| **Gallery Studio** | Dedicated manager (`admin-gallery.html`) for gallery collections with image management and history/restore |
| **Image Optimizer** | Built-in canvas-based WebP compressor for portfolio assets |
| **Folder-Based Gallery** | Each collection maps to its own `image/gallery/<slug>/` folder |
| **Auto-Backup** | Every save auto-snapshots the previous version for one-click restore |
| **Offline-First** | Runs entirely from the filesystem — no server, no build step, no batch files |

---

## 📂 Project Structure

```
portfolio v6/
├── index.html              # Main portfolio page (hero, about, skills, projects, contact)
├── gallery.html            # Public visual gallery with modal viewer
├── resume.html             # Online resume / CV page
├── admin.html              # Portfolio Studio — content admin panel
├── admin-gallery.html      # Gallery Studio — collection manager
│
├── style.css               # Global design system (tokens, components, dark/light mode)
├── gallery.css             # Gallery-specific styles (cards, modal, thumbnails)
│
├── app.js                  # Main portfolio page logic
├── gallery.js              # Public gallery viewer logic
├── admin.js                # Portfolio Studio logic
├── admin-gallery.js        # Gallery Studio logic
├── data-store.js           # Shared data layer (fetch, normalize, localStorage sync)
│
├── data/                   # JSON content files
│   ├── profile.json        # Name, links, social, focus areas
│   ├── about.json          # About section paragraphs + insight cards
│   ├── skills.json         # Capability cards + tools
│   ├── journey.json        # Education, highlights, activities
│   ├── contact.json        # Contact heading + intro text
│   └── projects.json       # Project cards (title, tech, links, images)
│
├── image/
│   ├── gallery.json        # Gallery collection definitions
│   ├── gallery-history.json# Deleted collections archive (for restore)
│   └── gallery/            # Image folders, one per collection
│       ├── wall-e-build/
│       ├── humanoid-prototype/
│       └── ...
│
└── profile.png             # Portrait image
```

---

## 🗄️ Data Architecture

All content lives in JSON files. The site never hardcodes portfolio data in HTML, CSS, or JS.

### Content JSON (`data/`)

| File | What it controls |
|---|---|
| `profile.json` | Name, role, hero text, social links, languages, focus areas |
| `about.json` | "About Me" paragraphs and insight cards |
| `skills.json` | Capability cards (icon, title, description) and tool badges |
| `journey.json` | Education history, highlights/awards, activities |
| `contact.json` | Contact section heading and intro paragraph |
| `projects.json` | Project cards with title, description, technologies, links |

### Gallery JSON (`image/`)

| File | What it controls |
|---|---|
| `gallery.json` | Active gallery collections (title, description, folder, tags, images) |
| `gallery-history.json` | Deleted collections with deletion timestamp — restorable from Gallery Studio |

### How data flows

```
JSON files on disk
    ↓  fetch()
data-store.js  ←→  localStorage (browser edits)
    ↓
app.js / gallery.js / admin.js  →  rendered HTML
```

---

## 🛠️ Admin Tools

### Portfolio Studio (`admin.html`)

Tabbed interface for editing all text content:

- **Profile** — name, hero text, social links, focus areas
- **About** — paragraphs, insight cards
- **Skills** — capability cards, tool badges
- **Journey** — education, highlights, activities
- **Projects** — add / edit / delete project cards
- **JSON** — raw JSON editor with auto-format + import/export
- **Image Tools** — canvas-based WebP compressor

### Gallery Studio (`admin-gallery.html`)

User-friendly collection manager designed for non-developers:

- **Collections tab** — big cards showing cover image, title, image count
- **Edit button** — opens a slide-in panel with all fields + visual image manager
- **Image Manager** — click any image to set as cover, hover to see remove button, add new images via file picker or manual entry
- **Delete** — moves collection to History tab with timestamp
- **History tab** — restore deleted collections or permanently purge them
- **Save buttons** — downloads updated JSON files to replace on disk

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- That's it — no Node.js, no build tools, no server

### Running Locally

1. Clone or download this repository
2. Open `portfolio v6/index.html` in your browser
3. To manage content, open `portfolio v6/admin.html`
4. To manage gallery, open `portfolio v6/admin-gallery.html`

### Adding a New Gallery Collection

1. Create a folder: `image/gallery/my-project-name/`
2. Drop your images into it
3. Open Gallery Studio → click **New Collection**
4. Fill in the title and description
5. Click **Add Images** → pick the files or type filenames
6. Click **Save Collection** then **Save gallery.json**
7. Replace `image/gallery.json` with the downloaded file

---

## 🎨 Design System

- **Colors** — HSL-based tokens with dark/light mode support
- **Typography** — Inter (body) + Outfit (headings) from Google Fonts
- **Components** — `.glass-panel`, `.btn`, `.btn-glow`, `.form-input`
- **Effects** — Ambient glow orbs, noise overlay, reveal-on-scroll animations
- **Layout** — CSS Grid + Flexbox, responsive design

---

## 📄 License

© 2026 Aditya Sharma. All rights reserved.
