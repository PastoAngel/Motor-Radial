/* =========================================================
   SERVICE WORKER (CACHÉ OFFLINE + ACTUALIZACIÓN RÁPIDA)
   Sube el número de versión (v3, v4...) cuando publiques
   cambios importantes y agrega aquí las nuevas imágenes.
   ========================================================= */

const CACHE = 'motor-radial-v3';

const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json',
  './img/icon.svg',
  './css/tema.css',
  './css/estilos.css',
  './js/registro.js',
  './js/pestanas/01_inicio.js',
  './js/pestanas/02_combustion_historia.js',
  './js/pestanas/03_aviacion_estrella.js',
  './js/pestanas/04_despiece_radial.js',
  './js/pestanas/05_ventas.js',
  './js/motor2d.js',
  './js/motor3d.js',
  './js/app.js'
];

// Instala y descarga archivos frescos (sin usar caché HTTP vieja)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(
        ARCHIVOS.map(url => c.add(new Request(url, { cache: 'reload' })))
      ))
      .then(() => self.skipWaiting())
  );
});

// Borra versiones anteriores de caché y toma el control inmediato
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-First con revalidación real (no-cache) y respaldo offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })
      .then(res => {
        if (res && res.ok) {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
        }
        return res;
      })
      .catch(() =>
        caches.match(e.request, { ignoreSearch: true }).then(resp => {
          if (resp) return resp;
          if (e.request.mode === 'navigate') return caches.match('./index.html');
        })
      )
  );
});