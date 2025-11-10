# Dev Patel — Portfolio (Static Site)

A lightweight, fast, multi‑page portfolio website built with HTML, CSS, and JavaScript.

## Pages
- `index.html` — Home
- `projects.html` — Projects grid with filters (Web, UX/UI, Database)
- `project-*.html` — Case study pages
- `about.html` — Bio, strengths, tools
- `contact.html` — Static form (Netlify-ready)

## Features
- Mobile navigation (hamburger)
- Dark/Light theme toggle (saved to localStorage)
- Project filtering (client-side)
- Résumé download buttons (assets/resume.pdf)
- Accessible, responsive layout (flex/grid)

## Customize
- Replace `assets/resume.pdf` with your real résumé (same file name)
- Replace images in `/images` and update alt text
- Update links to GitHub, LinkedIn in footer
- Edit colors in `:root` (brand: #c9aa71, #886939)

## Run Locally
Open `index.html` in a browser, or use a static server:

```bash
npx serve .
```

## Deploy
- **GitHub Pages**: push to a repo and enable Pages -> root
- **Vercel**: import the repo and deploy as a static project

## License
MIT
