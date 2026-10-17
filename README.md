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

## Sync between devices (optional)
Progress can be kept in step through a **private** GitHub repository of your own.
1. Create a private repository, e.g. `govorya-progress` (ticking "Add a README" is fine).
2. Create a fine-grained token at https://github.com/settings/personal-access-tokens/new
   - Repository access: Only select repositories → that repository
   - Permissions → Repository permissions → Contents: Read and write
3. In the app: More → Sync between devices → enter username, repository, token → Connect.
   Repeat step 3 on each device (the same token is fine).

The app writes one file, `progress-bg.json`, and merges card by card, keeping the most
recent review, so studying on two devices never overwrites anything. It syncs on open,
after each session, about 20 seconds after a review, and when you come back online.
The token is stored only on the device and is never included in backup files.
If the token expires, the app says so; create a new one and use "Replace the token".

## Backups
More → Download backup file. Load it on a new phone with More → Load backup file.
