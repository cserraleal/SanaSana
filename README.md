# SanaSana

A full-stack web application for managing and discovering clinics, built with React, Express, TypeScript, SQLite, and TailwindCSS.

## Project Structure

```
.
├── client/         # React frontend application
├── data/           # SQLite database file
├── scripts/        # Development scripts
├── server/         # Express backend API
├── package.json    # Project dependencies and scripts
├── tailwind.config.js
├── vite.config.js
├── tsconfig.json
├── tsconfig.server.json
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development servers

```bash
npm start
```
This will start both the frontend (Vite) and backend (Express) servers.

### 3. Build for production

```bash
npm run build
```

## Database

- The SQLite database is located at `data/database.sqlite`.
- You can inspect or modify it using the SQLite CLI or a GUI tool like DB Browser for SQLite.

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS, shadcn/ui, Radix UI
- **Backend:** Express, TypeScript, Kysely ORM, SQLite
- **Tooling:** Vite, PostCSS

## Scripts

- `npm start` – Runs both client and server in development mode
- `npm run build` – Builds both client and server for production

## License

# Repository Overview

**SanaSana** is a full‑stack TypeScript application for discovering and managing clinics. It combines a **React + Vite + Tailwind CSS** frontend with an **Express + SQLite** backend, orchestrated by development scripts and build tooling.

---

## Top-Level Structure

| Path                        | Purpose                                                                                   |
|-----------------------------|-------------------------------------------------------------------------------------------|
| `.gitignore`                | Ignores Node build artifacts, environment files, SQLite data, etc.                        |
| `README.md`                 | Project setup and overview.                                                               |
| `package.json`, `package-lock.json` | Dependency and script definitions.                                                |
| `tailwind.config.js`, `postcss.config.js` | Tailwind CSS and PostCSS configuration.                                  |
| `vite.config.js`            | Vite config, including dev server, aliases, and custom middleware.                        |
| `tsconfig.json`, `tsconfig.server.json` | TypeScript config for client (no emit) and server build (compiled to dist/server). |
| `components.json`           | shadcn/ui config describing paths and styling conventions.                                |
| `scripts/`                  | Node-based helper scripts. Currently only `dev.ts`.                                       |
| `client/`                   | React frontend.                                                                           |
| `server/`                   | Express backend and database layer.                                                       |

---

## scripts/

- **dev.ts** – Boots the Express API (`startServer`) then starts a Vite dev server. Includes logic for nodemon restarts, ensuring the Vite server shuts down gracefully before reload.

---

## client/ (Frontend)

- **index.html** – Vite entry point mounting React at `#root`.

- **public/** – Favicons, manifest, and PWA assets.

- **src/**
  - **main.tsx** – Initializes dark‑mode class detection and renders `<App />`.
  - **App.tsx** – Sets up React Router routes within a shared `<Layout>`.

  - **components/** (organized by feature area):
    - `Header.tsx` / `Layout.tsx` – Global navigation and page wrapper.
    - `auth/` – LoginForm and SignupForm components.
    - `clinic/` – Dashboard widgets (overview, stats, schedule management).
    - `clinic-detail/` – Components used on a single clinic’s page (hero, info, reviews, booking section).
    - `clinics/` – List/grid cards, header, and filter UI for browsing clinics.
    - `home/` – Landing page sections (hero, features, how-it-works).
    - `patient/` – Patient dashboard pieces: appointments list, overview, quick actions.
    - `ui/` – Reusable primitives (buttons, dialogs, tables, calendar, etc.) generated via shadcn/ui.

  - **hooks/**
    - `useClinicsFilters.ts` – Custom hook managing search/filter/sort state for clinic listings, including mock data.

  - **lib/**
    - `utils.ts` – Utility function `cn` to merge Tailwind class names.

  - **pages/**
    - Route components mapping to URL paths:  
      `HomePage`, `LoginPage`, `SignupPage`, `ClinicsPage`, `ClinicDetailPage`, `PatientDashboard`, `ClinicDashboard`.

---

## server/ (Backend)

- **index.ts** – Express server setup: JSON parsing, optional static serving (via `static-serve.ts`), and an exported `startServer` function. Includes self‑start when run directly.
- **static-serve.ts** – In production, serves `/public` and falls back to `index.html` for non‑API routes.
- **db/connection.ts** – Creates a Kysely connection using better-sqlite3; database path defaults to `./data/database.sqlite`.
- **db/schema.ts** – TypeScript interfaces describing tables (`users`, `patient_profiles`, `clinic_profiles`, `appointments`, `reviews`).

---

## Build & Tooling

- **Development:**  
  `npm start` runs `scripts/dev.ts` via tsx watch, starting the API on port 3001 and Vite on port 3000 with CORS and proxy config (`/api` → 3001).

- **Production build:**  
  `npm run build` compiles the frontend via Vite and the backend using TypeScript’s `tsconfig.server.json`.

- **Tailwind & PostCSS:**  
  Tailwind scans `client/index.html` and `client/src/**/*.{js,jsx,ts,tsx}`; PostCSS applies Tailwind and Autoprefixer plugins.

- **TypeScript:**  
  Client uses modern ESNext modules and path alias `@/*` → `client/src/*`; server compiles to NodeNext output in `dist/server`.

---

## Data & Environment

- **SQLite database** expected at `data/database.sqlite` (ignored by git).
- **Environment variables** (e.g., `NODE_ENV`, `PORT`, `DATA_DIRECTORY`) loaded via dotenv.

---

This layout cleanly separates frontend and backend concerns, while shared configuration in the root keeps tooling