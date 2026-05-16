# StatsUpAI Website Toolkit: All You Need to Know

**Audience:** Contributors and maintainers  
**Owner:** @yulinl2  
**Last verified:** 2026-05-16

This is the human-first, stable overview for editing and maintaining the website.
For deeper maintainer/agent details, use [`maintainer-agent-ops.md`](maintainer-agent-ops.md).

## 1) Purpose

- Keep website updates low-friction.
- Help contributors quickly find where to edit.
- Keep one canonical overview for common workflows.

## 2) Architecture snapshot

The site is hybrid:

- **Raw HTML pages:** root `.html` files and `pages/`
- **Jekyll-generated events:** `events/`, `_layouts/`, `_includes/`, `_config.yml`, `assets/`
- **Quarto-generated community/news content:** `quarto_web/posts/*.qmd` (source), `quarto_web/site/` (rendered)

## 3) Common workflows

## A) Local preview

```bash
make preview
```

If stale output appears:

```bash
make clean
make rebuild
```

## B) Typical edit paths

- Edit classic pages directly: `index.html`, `team.html`, `pipeline.html`, `pages/*.html`
- Edit event content in `events/` and related templates in `_layouts/` and `_includes/`
- Edit community/news in `quarto_web/posts/*.qmd`

## C) Publish flow

1. Commit changes
2. Push to GitHub
3. Wait for GitHub Pages/Actions deploy
4. Verify live site updates

## 4) Deploy/debug basics

- Deployment status: GitHub repository **Actions** tab
- First-line recovery:
  - `bundle install`
  - `make clean`
  - `make rebuild`
- Avoid editing generated output unless intentionally updating generated artifacts.

## 5) Contribution flow

- Prefer focused, small commits.
- Keep one topic per change.
- Update this document or linked docs when workflows change.

## 6) Advanced/internal details

For maintainer-only or agent-facing operational guidance, see:
- [`maintainer-agent-ops.md`](maintainer-agent-ops.md)
- [`issue-hierarchy-templates.md`](issue-hierarchy-templates.md)

