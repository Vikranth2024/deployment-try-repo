# Render PostgreSQL: Managed Database and Migrate Deploy Starter

A small Express and Prisma API, already structured to deploy to Render, but deliberately incomplete for this assignment.

## Current state

- `server.js` exposes `GET /health` and a database-backed `GET /api/notes`.
- `prisma/schema.prisma` defines a `Note` model and one committed migration already exists in `prisma/migrations/`.
- `render.yaml` describes a Render Web Service whose build command generates the Prisma Client but never applies migrations, and whose environment variables do not yet include `DIRECT_URL`.

If you deploy this starter as-is, the build succeeds, the service starts, and `GET /api/notes` fails, because the `Note` table was never created in the database.

## What you need to do

1. Fork this repository to your own personal GitHub account.
2. Provision a Render managed PostgreSQL instance.
3. Add `directUrl = env("DIRECT_URL")` to the `datasource` block in `prisma/schema.prisma`.
4. Update `render.yaml`: add `&& npx prisma migrate deploy` to `buildCommand`, and add a `DIRECT_URL` entry under `envVars`.
5. Connect your Render Web Service to your fork. Set `DIRECT_URL` to the Internal direct URL. If pooling is disabled, `DATABASE_URL` can use that same Internal direct URL. If optional pooling is enabled on an eligible paid database, set `DATABASE_URL` to the Internal Pooler URL instead.
6. Deploy, confirm the migration log shows the `Note` table being created, and confirm `GET /api/notes` returns `[]` (or saved notes) instead of failing. An empty array is a successful database query.

## Local setup

```bash
npm install
cp .env.example .env
# set DATABASE_URL to a real PostgreSQL connection string
npx prisma migrate deploy
npm start
```

## Submitting

Push your changes to your fork and open a Pull Request against your own fork's default branch (not this original starter). Follow the assignment instructions in the learning unit for what to include in the PR description before submitting the PR link.
