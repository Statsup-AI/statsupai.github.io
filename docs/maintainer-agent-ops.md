# StatsUpAI Website: Maintainer & Agent Operations Guide

**Audience:** Maintainers and coding agents  
**Owner:** @yulinl2  
**Last verified:** 2026-05-16

This document contains advanced operations details and should stay concise but actionable.
Public canonical overview lives in [`all-you-need-to-know.md`](all-you-need-to-know.md).

## 1) CI/CD and release operations

- Primary deployment path: push to GitHub, then GitHub Pages/Actions deploy.
- First checkpoint for failures: repository **Actions** tab.
- Local command map is defined in `Makefile`:
  - `make preview`
  - `make clean`
  - `make rebuild`

## 2) Infrastructure and tooling constraints

- Hybrid stack: raw HTML + Jekyll + Quarto.
- Jekyll local execution depends on Ruby/Bundler availability.
- If local bundler tooling is missing, run setup documented in `README.md`.

## 3) Decision log guidance

When making architecture/process changes, record:
- What changed
- Why it changed
- Impacted files/areas
- Rollback path

Preferred location:
- Parent issue + linked sub-issues (see templates in `issue-hierarchy-templates.md`)
- Optional GitHub Wiki page for long-lived operational notes

## 4) Automation prompt guidance (agent-friendly)

When assigning work to coding agents:
- Specify target audience (public vs maintainer doc)
- Define allowed files/paths
- Require smallest possible scoped edits
- Require validation summary and known limitations

## 5) Troubleshooting playbooks

## A) Build/setup errors

1. Verify Ruby/Bundler available
2. Run `bundle install`
3. Run `make clean && make rebuild`

## B) Deployment not updating

1. Confirm push reached expected branch
2. Check Actions logs
3. Re-run workflow if transient failure
4. Verify no stale generated artifacts blocking updates

## C) Drift between docs

1. Keep public overview in `all-you-need-to-know.md` as canonical entry
2. Keep advanced details here
3. Cross-link instead of duplicating large blocks

