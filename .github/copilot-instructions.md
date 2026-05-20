# Webinar add workflow (locked-in checklist)

When adding or updating webinar entries:

1. Update `_data/webinars.yml`.
2. Add speaker/affiliation images under `assets/img/speakers/`.
3. For affiliation logos, use the exact Wikipedia/Wikimedia source and record the exact source URL in the PR.
   - If source access/verification is blocked, do not recreate/adapt logos manually.
   - Post this blocker comment in the PR:
     - `BLOCKER: Unable to verify/download official affiliation logo`
     - `Webinar: <speaker + date>`
     - `Source URL: <exact Wikipedia/Wikimedia URL>`
     - `Reason blocked: <network/access/verification issue>`
     - `Action needed: maintainer-provided verified asset before merge`
4. Replace any temporary/non-authoritative affiliation logo with the verified source file before PR close.
5. Refresh `.preview/events.html` in the same change set whenever webinar data/template/CSS/assets change.
6. Include updated preview screenshot evidence in the PR.

