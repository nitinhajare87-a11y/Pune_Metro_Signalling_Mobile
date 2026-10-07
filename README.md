# Pune Metro Signalling Technician Hub

Mobile friendly document hub with Pune Metro and Hajare branding, station/system filters, mapped Drive folders, an animated full-length metro train, and animated Platform Screen Doors.

## Update GitHub Pages

1. Download and extract `Pune_Metro_Signalling_GitHub_Image_Fix.zip`.
2. In the existing `Pune_Metro_Signalling_Mobile` repository, choose **Add file → Upload files**.
3. Upload the extracted files into the repository root and replace same-named files. Keep all files at the root; do not make another nested folder.
4. Commit the upload to `main`. GitHub Pages will publish the changes after the deployment completes.

The moving train and PSD illustration are embedded in `index.html`; the service worker no longer depends on separately uploaded SVG art files. Its v13 cache clears the older shell and checks for the latest worker on page load.

## Refresh the installed mobile app

Connect the phone to internet, open the installed app once, then close and reopen it. If it still shows the previous version, open the site in Chrome and refresh once; the installed app should then pick up the updated cache.

For the native Android WebView install, the updated APK is provided separately as `Pune_Metro_Signalling_Android_v1.2.0.apk`. The Android project source is in `Android_App`.

## Documents and access

The app stores the document index for offline browsing. Google Drive documents still require internet unless individually saved by the native Android app, and each file retains its existing Drive permission. Restricted files remain restricted; only grant access to intended technicians. The full document collection is not bundled with the public GitHub Pages app.
