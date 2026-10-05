# Pune Metro Signalling — Technician Hub

Mobile-first document index with Pune Metro and Hajare Electrical & Electronics branding, station-wise Google Drive folder shortcuts and system/station search.

## Important: GitHub Pages visibility

GitHub Pages on GitHub Free requires a **public repository**, so the app and `data.json` are visible to anyone. `data.json` includes station names and Google Drive folder IDs. The Drive PDFs remain governed by Google Drive permissions, but publish only if this folder map is approved for public visibility. [GitHub Pages plan requirements](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## Publish with GitHub Pages

1. Extract `Pune_Metro_Signalling_Mobile_PWA.zip` on your computer.
2. Sign in to GitHub and create a new **Public** repository (for example, `pune-metro-signalling-app`). Leave “Add a README” unchecked.
3. In the empty repository choose **Add file → Upload files**. Upload the extracted contents to the repository root: `index.html`, `data.json`, `manifest.json`, `sw.js`, `README.md`, and the complete `assets` folder. Do not upload only the ZIP; GitHub Pages will not unpack it.
4. Commit the upload to the `main` branch.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. Once GitHub provides the HTTPS Pages URL, open it on the phone. On Android Chrome use **Install app**. On iPhone Safari use **Share → Add to Home Screen**.

The app is a Progressive Web App and requires HTTPS for installation and offline caching. A local `file://` URL will not install as an app.

## Mobile and offline use

The install prompt is provided when the browser supports it; the in-app install guide explains Android and iPhone steps. After the first online visit, the service worker caches the app shell and `data.json` so the index can be browsed offline. Google Drive folders and PDFs need internet, and the signed-in Google account must already have access.

## Large PDFs

Google Drive may not preview a large PDF. If an individual Google Drive file link is added to a document row, the app provides **Open in Drive** and **Download PDF** actions. Download the file and open it with a PDF reader when Drive preview is unavailable. The current four sample document rows have no individual PDF links.

## Drive folder map and data scope

The app uses the existing repository and fixed station folder locations. System folder IDs and PSD links are stored in `data.json`; PSD is mapped only for SJO, CVC_UG, BDP, MNA and SGT. The actual 12 GB of files are not bundled, and `data.json` still contains four sample document rows.

## Local development

Run `python -m http.server 8000` in this folder and open `http://localhost:8000`. Localhost is suitable for development; phone installation requires the HTTPS GitHub Pages URL.