/* =========================================================
   SERVICE WORKER (CACHÉ OFFLINE + ACTUALIZACIÓN AUTOMÁTICA)
   Si agregas un archivo nuevo en js/pestanas/, añádelo a ARCHIVOS.
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

// Instala y guarda todos los archivos para uso offline
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())
  );
});

// Limpia versiones viejas de caché
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Estrategia Network-First: si hay internet baja lo último de GitHub; si no, usa caché offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});