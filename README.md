# Alex Lee — Portfolio (React + TypeScript)

A modern, responsive single-page portfolio built with React, TypeScript, and SASS. It features smooth navigation, skill and project banners with icons, and is optimized for GitHub Pages deployment.

- Live Demo: https://1128alex.github.io/alex-lee/
- Repository: https://github.com/1128alex/portfolio

## ✨ Features
- Single-page app with smooth in-page navigation (hash-based routing for GitHub Pages)
- Responsive layout across desktop and mobile
- Capsule-shaped interactive buttons with hover transitions
- Modular Skill and Project banners with icons and color accents
- Deployed via GitHub Pages with automated build & deploy scripts

## 🛠️ Tech Stack
- React + TypeScript
- React Router (HashRouter)
- SASS (SCSS) for modular styling
- gh-pages for deployment

## 📁 Project Structure (key parts)
```
src/
  App.tsx
  index.tsx
  assets/
    img/            # icons, logos, profile
    scss/           # SASS partials by section
  components/
    AboutMe.tsx
    Career.tsx
    Footer.tsx
    Header.tsx
    Intro.tsx
    Main.tsx
    ProjectBanner.tsx
    Projects.tsx
    SkillBanner.tsx
    Skills.tsx
  views/
    HomeView.tsx
```

## 🚀 Getting Started (Local)

1) Install dependencies
```powershell
npm install
```

2) Start the dev server
```powershell
npm start
```
Open http://localhost:3000.

## 🧱 Build
```powershell
npm run build
```
Outputs production assets to `build/`.

## 🌐 Deploy to GitHub Pages
Ensure your `package.json` contains:
```json
{
  "homepage": "https://1128alex.github.io/alex-lee/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
Then deploy:
```powershell
npm run deploy
```
This publishes `build/` to the `gh-pages` branch and serves it at the homepage URL.

## 📄 License
Please credit the author when you use parts of my repository.
