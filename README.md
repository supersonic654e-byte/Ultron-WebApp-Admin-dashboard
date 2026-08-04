# Supersonic ULTRON Command Centre

A responsive static HTML/CSS/JavaScript business dashboard for Supersonic's four-product hospital robotics roadmap.

## Watch & Try

- **Watch the Ultron UV project video:** https://youtu.be/kQccZabbFyI?si=BuHTrbYDEwzOPGF8
- **Live demo (admin command centre):** https://supersonic654e-byte.github.io/Ultron-WebApp-Admin-dashboard/#/home

## Product versions

1. **ULTRON-UV-001 Â· UV-C Guardian** â€” working UV-C disinfection robot.
2. **ULTRON-Insight-002 Â· Insight Nexus** â€” ongoing environment, logistics and privacy-aware human-behaviour intelligence.
3. **ULTRON-Vitals-003 Â· VitalWatch** â€” upcoming non-diagnostic patient irregularity monitoring.
4. **ULTRON-MedAssist-004 Â· MedAssist** â€” upcoming clinician-authorised screening support and medicine delivery.

## Single-file build

The entire dashboard lives in one self-contained file:

- **`index.html`** â€” every page, all styling (`<style>`), all behaviour (`<script>`) and every image (embedded as `data:` URIs). It has no external dependencies, so it can be opened directly in a browser or served from any static host.

Navigation between the twelve original pages is handled by a small in-page hash router. The twelve routes are:

| Route                      | Page                                  |
|----------------------------|---------------------------------------|
| `#/home`                   | Executive overview                    |
| `#/robots`                 | Four-product roadmap                  |
| `#/hospitals`              | Hospital deployments                  |
| `#/missions`               | Mission operations                    |
| `#/patient-monitoring`     | Patient monitoring support            |
| `#/feedback`               | Feedback & upgrade requests           |
| `#/maintenance`            | Engineering maintenance               |
| `#/alerts`                 | Central alert management              |
| `#/uvc`                    | ULTRON-UV-001 working report          |
| `#/insight`                | ULTRON-Insight-002 development report |
| `#/vitals`                 | ULTRON-Vitals-003 simulation report   |
| `#/medassist`              | ULTRON-MedAssist-004 simulation report|

## Run locally

Just open `index.html` in a browser. No build step, server or backend is required.

You can also serve it:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This repository is published with GitHub Pages from the `main` branch root. The included `.nojekyll` file keeps the static file served unchanged.

All hospital and patient records in the interface are sample or simulation data unless explicitly described as working engineering records.

## License

MIT License â€” see [LICENSE](LICENSE).
