# Gym Tracker

Next.js frontend and FastAPI backend in one repo.

## Live URLs

- Production: https://gym-tracker-one-topaz.vercel.app
- Production (team alias, requires Vercel login): https://gym-tracker-maciej-wiatrs-projects.vercel.app
- Latest `main` build (requires Vercel login): https://gym-tracker-git-main-maciej-wiatrs-projects.vercel.app

Every push to `main` on [PJS-Gym/gym-tracker](https://github.com/PJS-Gym/gym-tracker) deploys to production.

## Repo layout

- `frontend/`: Next.js app, managed with [bun](https://bun.sh)
- `backend/`: FastAPI app, managed with [uv](https://docs.astral.sh/uv/)
- `.github/workflows/`: CI

## Getting started

Frontend, on http://localhost:3000:

```bash
cd frontend
bun install
bun dev
```

Backend, on http://localhost:8000 (API docs at `/docs`):

```bash
cd backend
uv sync
uv run fastapi dev
```

## Database

Postgres runs on [Neon](https://neon.com); `neon.ts` in the repo root declares the services. Only the backend connects to it.

From the repo root:

```bash
npm i -g neon
neon login
neon link --org-id org-rough-cake-25119073 --project-id muddy-wave-76386845 --branch production
neon env pull   # writes DATABASE_URL to .env.local in the repo root
```

The backend reads that root `.env.local` (`backend/app/core/config.py`) and queries Postgres with psycopg (`backend/app/core/db.py`). Check the connection at http://localhost:8000/api/v1/health/db.

## CI

On every pull request and push to `main`:

- `frontend`: `bun install --frozen-lockfile`, `bun run lint`, `bun run build`
- `backend`: `uv sync --locked`, then checks that `app.main` imports
