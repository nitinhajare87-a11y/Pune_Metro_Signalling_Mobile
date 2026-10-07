const CACHE_NAME = "pune-signalling-shell-v11";
const APP_FILES = [
  "./",
  "./index.html",
  "./data.json",
  "./manifest.json",
  "./branding.png",
  "./hajare-logo.png",
  "./hajare-icon-192.png",
  "./hajare-icon-512.png",
  "./metro-train.png",
  "./metro-train.svg",
  "./metro-psd.svg"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("pune-signalling-") && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      if (!response.ok) throw new Error("Network response unavailable");
      return caches.open(CACHE_NAME).then(cache => cache.put("./index.html", response.clone()).then(() => response));
    }).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(fetch(request).then(response => {
    if (!response.ok) return response;
    return caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()).then(() => response));
  }).catch(() => caches.match(request).then(cached => cached || Response.error())));
});