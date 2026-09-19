# CD Pipeline Starter

A minimal repository for the CD Pipeline assignment. It already has a working CI job in `.github/workflows/ci.yml`. Your task is to extend it with a CD job that automatically deploys to Render on every merge to `main`.

## What is already here

- `.github/workflows/ci.yml` — a GitHub Actions workflow with a `ci` job that installs dependencies and builds the project. The workflow runs on every push and on pull requests to `main`.
- `package.json` — a minimal Node.js project with a `build` script so CI has something to run.

## What you need to do

### Step 1 — Fork this repository

Fork to your own personal GitHub account and clone it locally.

### Step 2 — Generate a Render deploy hook

1. Open your Render Web Service.
2. Go to **Settings** → scroll to **Deploy Hook** → click **Generate Deploy Hook**.
3. Copy the URL — it starts with `https://api.render.com/deploy/`.

### Step 3 — Add the deploy hook as a GitHub secret

1. Open your forked repository on GitHub.
2. Go to **Settings** → **Secrets and variables** → **Actions**.
3. Click **New repository secret**.
4. Name: `RENDER_DEPLOY_HOOK_URL`
5. Value: paste the full deploy hook URL.
6. Click **Add secret**.

### Step 4 — Add the deploy job to the workflow

Open `.github/workflows/ci.yml` and add the `deploy` job below the `ci` job:

```yaml
  deploy:
    runs-on: ubuntu-latest
    needs: [ci]
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Trigger Render deploy
        run: |
          curl -X POST "${{ secrets.RENDER_DEPLOY_HOOK_URL }}"
```

### Step 5 — Enable branch protection

1. Go to your repository **Settings** → **Branches**.
2. Add a branch ruleset or protection rule for `main`.
3. Enable **Require status checks to pass before merging**.
4. Add `ci` as a required status check.
5. Save.

### Step 6 — Test the full pipeline

1. Create a new branch: `git checkout -b test/cd-pipeline`
2. Make a small visible change (e.g. add a comment to `README.md`).
3. Push the branch and open a pull request.
4. Confirm CI passes on the PR.
5. Merge the PR to `main`.
6. Go to **Actions** tab — confirm both `ci` and `deploy` jobs show green.
7. Open Render and confirm a new deploy started.

### Step 7 — Take screenshots and submit

Take the two required screenshots described in the assignment and upload them.

## Local setup

```bash
npm install
npm run build
```
