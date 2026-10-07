# Pune Metro Signalling Technician Hub

Mobile document index with Pune Metro and Hajare branding, station/system filters, mapped Drive shortcuts, and an animated train banner for field technicians. The native Android app can save selected linked PDFs locally for offline use.

## Update the existing GitHub Pages repository

The Metro logo is embedded directly into `index.html`, so there is no separate Metro-logo filename or folder dependency. Extract `Pune_Metro_Signalling_GitHub_Image_Fix.zip` and upload its contents to the **existing repository root** using **Add file → Upload files**. Keep the same root layout and choose to replace same-named files, then commit to `main`.

The patch includes `index.html`, `manifest.json`, `sw.js`, `README.md`, `data.json`, the existing root branding images/icons, and `metro-train.png`. It does not create or move Drive folders. After the commit, refresh the GitHub Pages site; if an installed copy still has old cached visuals, close/reopen it or clear that site's browser storage once.

## Mobile install

Open the GitHub Pages HTTPS URL on the phone. On Android use Chrome → **Install app**. On iPhone use Safari → **Share → Add to Home Screen**. The app shell and document index cache after the first online visit. Google Drive documents need internet and the user's existing Drive access.

## Visibility and data

GitHub Pages is public. The repository exposes station names, folder IDs and sample metadata. Drive files continue to use their existing Google Drive permissions. The 12 GB document collection is not packaged in the app; the index currently contains four sample inventory rows plus the corridor scheme-plan PDF. That PDF is restricted in Drive to named accounts; grant access to field technicians before they use its app link or save it offline.


