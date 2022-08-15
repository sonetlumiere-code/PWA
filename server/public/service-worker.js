const cacheName = 'name-v8';
const cacheFiles = [
    '/',
    '/index.html',
    '/error.html',
    '/styles/styles.css',
    'main.js'
];

// Event when install service worker
self.addEventListener('install', e => {
    console.log('Service Worker installed');
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('caching');
                cache.addAll(cacheFiles);
            })
    )
});

// Active service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Actived');
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(keys.filter(key => key !== cacheName).map(key => caches.delete(key)))
            })
    )
});

// fetch event to download static files
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
            .then(cacheResponse => {
                return cacheResponse
            })
            .catch(() => caches.match('/error.html'))
    )
});