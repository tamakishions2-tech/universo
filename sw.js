const C='universo-v1',A=['./','./index.html','./icon.svg','https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
