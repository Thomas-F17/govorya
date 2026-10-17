# Говоря — daily Bulgarian

A self-contained phone app (PWA). No accounts, no server code, no third-party scripts or fonts.
Your progress is stored only on the device, in the browser's local storage.

## Files
- `index.html` — the whole app (content, pronunciation engine, spaced repetition)
- `sw.js` — caches everything so the app works offline after the first visit
- `manifest.webmanifest`, `icons/` — lets you install it to your home screen
- `fonts/` — PT Sans for print and Bad Script for handwriting (SIL Open Font License, see the OFL files)

## Try it on your computer
    cd govorya
    python3 -m http.server 8000
Open http://localhost:8000. (Opening index.html directly works too, but without offline mode.)

## Put it online (any static host works; it needs HTTPS for offline mode)
- **GitHub Pages**: push this folder to a repo, Settings → Pages → deploy from branch.
  On a free account the repo must be public — that only exposes the app, never your progress.
- **Cloudflare Pages / Netlify**: drag the folder onto their dashboard.
- **Your own server or NAS**: copy the folder into any web root served over HTTPS.

## Install on your phone
- iPhone: open the URL in Safari → Share → Add to Home Screen.
- Android: open in Chrome → menu → Install app.
Once installed it runs offline, even if the host goes away.
Note: on iPhone the home-screen app keeps its own progress, separate from Safari — always use the icon.

## Audio
Uses your phone's built-in voices. Add a Bulgarian one:
- iPhone: Settings → Accessibility → Spoken Content → Voices → Bulgarian
- Android: Settings → Text-to-speech → Google → Install voice data → Bulgarian
"Check my pronunciation" uses the browser's speech recognition, which on some phones
sends audio to Apple or Google. It's optional; nothing else leaves the device.

## Updating
Edit `index.html` (the word list is `BG_DECK` near the top), then change `VERSION`
in `sw.js` (e.g. `govorya-v2`) so installed copies fetch the new files.

## Backups
More → Download backup file. Load it on a new phone with More → Load backup file.
