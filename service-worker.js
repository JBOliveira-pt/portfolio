// Service Worker mínimo para tornar o site "installable".
// Sem cache/offline: apenas garante o controle do SW.
self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

// Sem handler de fetch => o site continua 100% online (network only).
