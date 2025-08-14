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