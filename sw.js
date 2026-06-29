const CACHE_NAME = 'medtech-v1.6.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/dashboard.html',
    '/login.html',
    '/style.css',
    '/app.js',
    '/auth.js',
    '/lang.js',
    '/landing.css',
    '/landing.js',
    '/login.css',
    '/login.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});