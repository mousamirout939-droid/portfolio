# Mousami Rout — Portfolio (MERN Stack)

A full 10-page MERN portfolio: React (Vite + React Router) client + Express/MongoDB
API. Same stack, and the same security patterns (helmet, rate limiting, input
sanitization), as the MediCare and AI Guardian projects on the site itself.

```
portfolio-mern/
├── client/     React (Vite) frontend — 10 routed pages
└── server/     Express + MongoDB API (contact form + project data)
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero + links to every other page |
| `/about` | About + quick facts |
| `/education` | Full academic timeline: 10th, PUC, BCA + certifications |
| `/skills` | Technical skills, grouped |
| `/experience` | Work experience |
| `/projects` | Featured case studies + all GitHub repositories |
| `/projects/research-agent` | Case study |
| `/projects/ai-guardian` | Case study |
| `/projects/medicare` | Case study |
| `/contact` | Contact form + direct links |

## What's dynamic vs. static

- **Contact form** → `POST /api/contact` → saved to MongoDB (`Message` model).
- **Projects section** → `GET /api/projects` → served from MongoDB
  (`Project` model). If the API is unreachable, the client instantly falls
  back to bundled static data (`client/src/data.js`), so the site never
  shows a blank/broken state.
- Everything else (hero, skills, experience, education, certifications) is
  static content in `client/src/data.js` — no need to hit a database for
  content that basically never changes.

## 1. Local setup

### Server

```bash
cd server
npm install
cp .env.example .env
# edit .env: set MONGO_URI to a MongoDB Atlas connection string
#   (free tier at https://www.mongodb.com/cloud/atlas)
npm run seed     # populates the projects collection
npm run dev      # starts the API on http://localhost:5000
```

### Client

```bash
cd client
npm install
cp .env.example .env
# .env already points to http://localhost:5000 by default
npm run dev       # starts the site on http://localhost:5173
```

Open `http://localhost:5173`. The contact form will write to your MongoDB
`messages` collection; the projects section will load from `/api/projects`.

## 2. Deploying (same pattern as the MediCare project)

**Backend → Render**
1. Push this repo to GitHub.
2. New Web Service on Render, root directory `server`.
3. Build command: `npm install` · Start command: `npm start`.
4. Add environment variables from `server/.env.example`
   (`MONGO_URI`, `CLIENT_ORIGIN` = your Vercel URL, `PORT` is set by Render
   automatically).
5. After first deploy, run `npm run seed` once (Render Shell, or run it
   locally pointed at the same `MONGO_URI`) to populate projects.

**Frontend → Vercel**
1. Import the repo, root directory `client`.
2. Framework preset: Vite.
3. Add environment variable `VITE_API_URL` = your Render service URL
   (no trailing slash).
4. Deploy.

**Database → MongoDB Atlas**
- Free M0 cluster is enough. Create a database user, allow network access
  from Render (or `0.0.0.0/0` for simplicity), and use that connection
  string as `MONGO_URI`.

## 3. Updating content

- **Projects**: edit `server/seed.js` and re-run `npm run seed` (updates
  MongoDB), *and* update `client/src/data.js` `fallbackProjects` so the
  static fallback stays in sync.
- **GitHub repositories list** (Projects page → "All GitHub Repositories"):
  edit the `githubRepos` array in `client/src/data.js`. Each entry is
  `{ name, description, url, tags }`. Leave it empty to show a "browse my
  GitHub profile" card instead.
- **Education timeline**: edit `educationTimeline` in `client/src/data.js`
  (10th, PUC, BCA — most recent first).
- **Everything else** (bio, skills, experience, résumé PDF, photo): edit
  `client/src/data.js` and the files in `client/public/` directly — no
  database involved.
- **Résumé PDF**: replace `client/public/resume.pdf` (the "Download résumé"
  button links straight to it).

## 4. Design notes

- Palette: deep navy (`#0f1e30` / `#1f3a5f`) + teal (`#12726b`), matching the
  résumé and blazer in the portrait photo.
- Type: **Fraunces** (display), **Inter** (body/UI), **JetBrains Mono**
  (labels, stats, tech chips) — loaded via Google Fonts in `index.html`.
- Signature element: the small teal "✓ verified" tick badge used in the
  hero stats and on one proof-point per project. It's a deliberate callback
  to the Research Agent project, whose whole premise is verifying claims
  before they ship — the same idea applied to this résumé's own claims.
- All animation respects `prefers-reduced-motion`.
