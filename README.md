# Supersonic ULTRON Command Centre

A responsive static HTML/CSS/JavaScript business dashboard for Supersonic's four-product hospital robotics roadmap.

## Product versions

1. **ULTRON-UV-001 · UV-C Guardian** — working UV-C disinfection robot.
2. **ULTRON-Insight-002 · Insight Nexus** — ongoing environment, logistics and privacy-aware human-behaviour intelligence.
3. **ULTRON-Vitals-003 · VitalWatch** — upcoming non-diagnostic patient irregularity monitoring.
4. **ULTRON-MedAssist-004 · MedAssist** — upcoming clinician-authorised screening support and medicine delivery.

## Run locally

Open the project folder in VS Code and launch `index.html` with the Live Server extension. No npm or backend is required.

You can also run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

Upload the contents of this folder to a GitHub repository, then enable GitHub Pages from the repository settings. The included `.nojekyll` file keeps the static asset structure unchanged.

## Main editable files

- `index.html` — executive dashboard
- `robots.html` — four-product roadmap
- `version-uvc.html` — working UV-C report
- `version-insight.html` — ongoing development report
- `version-vitals.html` — upcoming simulation report
- `version-medassist.html` — upcoming simulation report
- `assets/css/styles.css` — all styling
- `assets/js/app.js` — drawer, search, local forms and print interactions

All hospital and patient records in the interface are sample or simulation data unless explicitly described as working engineering records.


## Team Supersonic logo

The admin navigation uses `assets/images/team-supersonic-logo.png`.
To replace it, overwrite that file with another PNG. The displayed desktop size is controlled by `.supersonic-logo` near the bottom of `assets/css/styles.css` (currently 126 × 126 px).
