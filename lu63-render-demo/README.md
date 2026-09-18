# Render Deploy Demo

A minimal Express and Prisma API used only for the mentor's live Render deployment demonstration. It is not the student assignment repository.

## What this repo is for

During the session, the mentor forks this repository to their own GitHub account, connects it to a new Render Web Service, and deploys it live in front of the class. Students may later fork this same repository to their own personal GitHub account and use it as their assignment codebase, or deploy their own existing Express and Prisma project instead. Either is acceptable for the assignment; a repository must exist under a personal account, not only under the Kalvium community organization, for Render to connect to it. The API exposes:

- `GET /health` returns `{ "status": "ok" }` and needs no database connection.
- `GET /api/notes` reads from PostgreSQL through Prisma and needs `DATABASE_URL` and a generated Prisma Client.

## Why it exists

It lets the mentor demonstrate, on a small and disposable project:

- setting the Render build command to `npm ci && npx prisma generate`;
- configuring environment variables in the Render dashboard instead of committing a `.env` file;
- what happens when `prisma generate` is missing from the build command; and
- reading Render's deploy logs to diagnose a failed first request.

## Local setup

```bash
npm install
cp .env.example .env
# set DATABASE_URL to a real PostgreSQL connection string
npx prisma generate
npm start
```
