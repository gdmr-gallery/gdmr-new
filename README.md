# GDMR Foundation — Animated Landing Page

This project is a Vite + React + Framer Motion revamp for a highly animated homepage experience.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publish options

### Option 1 — Vercel (recommended)
1. Push this repo to GitHub.
2. Import the repository in Vercel.
3. Vercel will auto-detect `vite` and run:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Your link will look like: `https://<project-name>.vercel.app`.

### Option 2 — Netlify
1. Push this repo to GitHub.
2. Create a new Netlify site from the repo.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Your link will look like: `https://<site-name>.netlify.app`.

## Notes
- This environment currently cannot install npm dependencies due registry policy restrictions (403), so production build validation may need to be run in your CI or local machine.
