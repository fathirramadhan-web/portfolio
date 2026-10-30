# Persona 5 Style Portfolio — Fathir Hidayah Ramadhan

A Persona 5 menu-inspired portfolio built with vanilla HTML, CSS, and JavaScript (MVC pattern).

## Live

Enable GitHub Pages: Settings → Pages → Deploy from branch → main → / root.

## Structure

```
├── index.html            View skeleton
├── css/style.css         Styling + theme colors (:root)
├── js/
│   ├── model.js          Data: projects, skills, certificates, GitHub fetch
│   ├── view.js           DOM rendering, ransom lettering, wipe, cursor
│   └── controller.js     Keyboard/mouse input, navigation logic
└── assets/
    ├── favicon.svg       Browser tab icon
    ├── me.jpg            About photo
    ├── sfx/select.mp3    Menu sound
    ├── cursors/          Animated cursor sprites
    ├── menus/            Per-screen background art
    ├── cv/               Downloadable CV (PDF)
    ├── certificates/     Dicoding certificate PDFs
    └── projects/         Card thumbnail images (optional)
```

## Screens

- **HOME** — Name, tagline, navigation menu
- **PROJECTS** — 8 featured projects + GitHub repo feed
- **SKILLS** — Skill bars (AI/ML, Web, Tools, Soft Skills)
- **ABOUT** — Bio, photo, CV download
- **CERTIFICATES** — Dicoding credentials with verification links
- **CONTACT** — Email, LinkedIn, GitHub, message form

## Controls

↑ / ↓ select · Enter confirm · Esc back · click name to go home

## Run locally

```
python3 -m http.server
```

Open http://localhost:8000
