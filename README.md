<div align="center">

# Ayush Singh — Developer Portfolio

### A terminal-inspired portfolio for a backend-focused software engineer

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=061014)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Postgres-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

**[Run locally](#run-locally)** · **[Report an issue](../../issues)**

</div>

---

## About

This is my personal developer portfolio: a responsive, terminal-inspired experience that presents my work in backend engineering, REST APIs, relational data design, and real-time systems.

It is intentionally more than a static page. The contact form is backed by a protected Express API and persists messages in Supabase.

> **Currently open to:** Backend / Software Development Engineer internships and full-time opportunities.

## Highlights

- CLI-inspired interface with a responsive, accessible design
- Detailed project case studies with architecture and schema flows
- Live contact endpoint with Zod validation, Helmet, rate limiting, and strict CORS
- Supabase-backed PostgreSQL tables with Row Level Security enabled
- Separate, deployment-ready frontend and backend services

## Tech stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express, Zod, Helmet, express-rate-limit |
| Database | Supabase PostgreSQL |
| Deployment | Vercel (frontend), Render (API) |

## Project structure

```text
.
├── frontend/                  # React + Vite client
│   ├── src/components/        # Shared UI and terminal interface components
│   ├── src/sections/          # Portfolio sections
│   ├── src/pages/             # Project case-study routes
│   └── src/lib/api.ts         # Contact API client
│
└── backend/                   # Express API
    ├── src/controllers/       # HTTP handlers
    ├── src/services/          # Supabase queries
    ├── src/middleware/        # Validation, CORS, errors, rate limiting
    └── supabase/schema.sql    # Database schema and starter data
```

## Run locally

### 1. Create the Supabase tables

Create a project in [Supabase](https://supabase.com/dashboard), open **SQL Editor**, and run:

```text
backend/supabase/schema.sql
```

This creates `projects` and `contact_messages`, enables Row Level Security, and adds starter project records.

### 2. Start the API

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Add these values to `backend/.env`:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SECRET_KEY=your_server_only_secret_key
FRONTEND_URL=http://localhost:5173
```

### 3. Start the frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Visit `http://localhost:5173`. During local development, Vite forwards API calls to `http://localhost:4000`.

## Deployment

| Service | Platform | Key setting |
| --- | --- | --- |
| Frontend | Vercel | Root directory: `frontend` |
| Backend | Render | Root directory: `backend`; start command: `npm start` |
| Database | Supabase | Run `backend/supabase/schema.sql` once |

On Render, set `NODE_ENV=production`, `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, and `FRONTEND_URL` (your exact Vercel domain).

On Vercel, set:

```env
VITE_API_BASE_URL=https://your-api.onrender.com
```

Never expose `SUPABASE_SECRET_KEY` in the frontend or commit it to GitHub.

## API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Service health check |
| `GET` | `/api/projects` | List portfolio projects |
| `GET` | `/api/projects/:slug` | Retrieve a project |
| `POST` | `/api/contact` | Submit a validated contact message |

## Contact

Feel free to connect with me through the portfolio contact form or on [GitHub](https://github.com/singhayush48) and [LinkedIn](https://www.linkedin.com/in/ayushsingh5266/).

<div align="center">

Built with care by **Ayush Singh**.

</div>
