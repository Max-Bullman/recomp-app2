// Famealy Service Worker
// Cache-first strategy: app loads instantly from cache, updates in background.
// Bump CACHE_VERSION whenever you push a new index.html to invalidate stale cache.

const CACHE_VERSION = 'famealy-v1';
const CACHE_NAME = CACHE_VERSION;

// Assets to pre-cache on install — the entire app is one HTML file
const PRECACHE_ASSETS = [
  '/Famealy/',
  '/Famealy/index.html',
];

// ── Install: pre-cache core assets ──────────────────────────────────────────
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(function() {
      // Take control immediately — don't wait for old SW to expire
      return self.skipWaiting();
    })
  );
});

// ── Activate: delete old cache versions ─────────────────────────────────────
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    }).then(function() {
      // Claim all open clients so the new SW takes effect without a reload
      return self.clients.claim();
    })
  );
});

// ── Fetch: cache-first for app shell, network-first for API calls ────────────
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);

  // Never intercept Supabase, Anthropic API, Google Fonts, or CDN calls
  const passthroughHosts = [
    'supabase.co',
    'anthropic.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'cdn.jsdelivr.net',
  ];
  if (passthroughHosts.some(function(h) { return url.hostname.includes(h); })) {
    return; // Let the browser handle it directly
  }

  // For same-origin requests: stale-while-revalidate
  // → Serve from cache immediately (fast), then fetch + update cache in background
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(cachedResponse) {
          const fetchPromise = fetch(event.request).then(function(networkResponse) {
            // Only cache successful GET responses
            if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(function() {
            // Network failed — cached response (if any) is already being returned
            return null;
          });

          // Return cached immediately if available, otherwise wait for network
          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});

// ── Message: allow the app to trigger a cache refresh manually ───────────────
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(function() {
      event.ports[0] && event.ports[0].postMessage({ cleared: true });
    });
  }
});
