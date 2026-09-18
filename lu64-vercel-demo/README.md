# Vercel Deploy Demo

A minimal Vite and React app used only for the mentor's live Vercel deployment demonstration. It is not the student assignment repository, though students may fork it for their own assignment submission if they prefer it over their own project.

## What this repo is for

During the session, the mentor forks this repository to their own personal GitHub account, imports it into Vercel, sets `VITE_API_URL`, and deploys it live in front of the class. The app calls `${VITE_API_URL}/health` on the deployed Express API from the previous learning unit and displays the response.

## Why it exists

It lets the mentor demonstrate, on a small and disposable project:

- importing a GitHub repository into Vercel and letting Vercel auto-detect the Vite build;
- setting `VITE_API_URL` in Vercel Project Settings before the first deploy;
- why the value is baked into the JavaScript bundle at build time, not read at run time; and
- what a preview deployment looks like compared to the production deployment.

## Local setup

```bash
npm install
cp .env.example .env
# set VITE_API_URL to your deployed Render API URL
npm run dev
```
