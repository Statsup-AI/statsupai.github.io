# StatsUpAI Front Page Redesign

## Summary

Complete redesign of `index.html` — the homepage of the StatsUpAI website.

## What Changed

**File modified:** `index.html`

### Design Changes

- **Header/Nav:** Merged logo and navigation into a single compact navbar with mobile hamburger menu
- **Hero Section:** Replaced old slider with a clean "Our Story" section using `ourstory.jpg` background
- **Content Grid:** Added a 2x2 card grid showing Recent News, Datasets, Pipelines, and Interviews with links to their respective pages
- **Quick Links:** 4-column icon grid (Datasets, Review Articles, Pipeline, Community News) replacing old box layout
- **Quote Carousel:** Auto-rotating quotes from statisticians (Tukey, Efron, Box, Breiman) with dot navigation
- **ASA Banner:** Compact footer bar with ASA affiliation, Google Groups, Charter, and 2026 EC links
- **Scroll-to-top button**

### Technical Changes


- Added **Inter** font via Google Fonts
- Custom color palette: brand `#4C737D`, accent `#48CAE4`, background `#F1F4EF`
- Fully responsive (mobile-first with `sm:`/`md:` breakpoints)


## Files Not Touched

All other pages (`community-news.html`, `datasets.html`, `article.html`, `pipeline.html`, `team.html`, `events/`) still use the original ones. The `css/`, `js/`, `font/` directory structure remains the same, but file contents (e.g., stylesheets) may have been updated.

## New Image Assets

Verify these exist in `img/`: `logo2.png`, `ourstory.jpg`, `data.png`, `review.png`, `pipe.png`, `news.png`

## Merge Notes
s
- The old CSS/JS files in `css/` and `js/` are still needed by other pages; do not remove them
