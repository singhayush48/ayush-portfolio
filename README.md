# Ayush Singh — Portfolio

React/Vite portfolio with an Express API and Supabase database. It accesses Supabase directly through the official JavaScript client, without an ORM.

## Architecture

```
React + Vite (Vercel) → Express API (Render) → Supabase Postgres
```

The browser only talks to the Express API. It never receives a Supabase key.

## 1. Create the Supabase database

1. Create a project in [Supabase](https://supabase.com/dashboard).
2. Open **SQL Editor** and run [`backend/supabase/schema.sql`](backend/supabase/schema.sql). This creates the tables and inserts the initial projects.
3. In **Project Settings → API**, copy the project URL and a **Secret key**. The secret key is backend-only; never put it in a frontend `VITE_` variable.

Row Level Security is enabled for both tables. Only the backend, using its server-side secret key, accesses them.

## Run locally

Use Node.js 20 or newer.

```bash
# terminal 1
cd backend
npm install
cp .env.example .env
# Add SUPABASE_URL and SUPABASE_SECRET_KEY to .env
npm run dev

# terminal 2
cd frontend
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:5173`. Vite proxies `/api` to `http://localhost:4000`. Verify the API at `http://localhost:4000/api/health` and submit the contact form to confirm a row appears in Supabase's `contact_messages` table.

## Environment variables

**backend/.env**

| Variable | Required | Description |
| --- | --- | --- |
| `SUPABASE_URL` | Yes | Project URL, e.g. `https://abc.supabase.co` |
| `SUPABASE_SECRET_KEY` | Yes | Server-only Supabase Secret key |
| `FRONTEND_URL` | Yes in production | Allowed frontend origin(s), comma-separated |
| `PORT` | No | API port; defaults to `4000` |
| `NODE_ENV` | No | `development` or `production` |

**frontend/.env**

| Variable | Required in production | Description |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Yes | Render API URL including `/api`, e.g. `https://your-api.onrender.com/api` |

## Deploy the backend to Render

1. Push this repository to GitHub.
2. In Render, choose **New → Web Service** and connect the repository.
3. Set **Root Directory** to `backend`.
4. Set **Build Command** to `npm install` and **Start Command** to `npm start`.
5. Add these environment variables:

   ```text
   NODE_ENV=production
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_SECRET_KEY=your_server_only_secret_key
   FRONTEND_URL=https://your-project.vercel.app
   ```

6. Deploy. Confirm `https://your-api.onrender.com/api/health` returns JSON.

Do not set `PORT` in Render: Render supplies it automatically. If you use a custom Vercel domain later, add it to `FRONTEND_URL` separated by a comma.

## Deploy the frontend to Vercel

1. Import the same repository into Vercel.
2. Set **Root Directory** to `frontend`; Vercel detects Vite automatically.
3. Add the environment variable below for Production (and Preview if wanted):

   ```text
   VITE_API_BASE_URL=https://your-api.onrender.com/api
   ```

4. Deploy, then update Render's `FRONTEND_URL` with the exact Vercel origin. Redeploy Render if you changed it.

The URL must have no trailing slash, and `VITE_API_BASE_URL` must include `/api`. Otherwise the contact form will fail with a CORS or 404 error.

## API

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check for Render |
| `GET` | `/api/projects` | List projects in Supabase |
| `GET` | `/api/projects/:slug` | Get a project by slug |
| `POST` | `/api/contact` | Validated, rate-limited contact submission |

`POST /api/contact` accepts:

```json
{ "name": "Your name", "email": "you@example.com", "message": "At least 10 characters" }
```

## Security

- The Supabase Secret key stays only in Render environment variables.
- Helmet, strict CORS, rate limiting, and Zod validation protect the API.
- Supabase Row Level Security prevents direct public access to these tables.
