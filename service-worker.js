const CACHE_NAME = "advent-calendar-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/manifest.json",
];

// Installations-Ereignis
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch-Ereignis: Ressourcen aus dem Cache holen
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Aktivierungs-Ereignis: Alter Cache löschen
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
