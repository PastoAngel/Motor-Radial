# Contexto del Proyecto: Motor Radial
Fecha de generación: 2026-11-26 22:46:55

## Estructura del Proyecto (Archivos Incluidos)

```
Motor Radial/
 ├── css
 │   ├── estilos.css
 │   └── tema.css
 ├── index.html
 ├── js
 │   ├── app.js
 │   ├── motor2d.js
 │   ├── motor3d.js
 │   ├── pestanas
 │   │   ├── 01_inicio.js
 │   │   ├── 02_combustion_historia.js
 │   │   ├── 03_aviacion_estrella.js
 │   │   ├── 04_despiece_radial.js
 │   │   └── 05_ventas.js
 │   └── registro.js
 ├── manifest.json
 └── sw.js
```

---

## Contenido Detallado de los Archivos

### Archivo: `css/estilos.css`

```css
/* =========================================================
   ESTILOS GENERALES DE LA APP (USA LAS VARIABLES DE tema.css)
   ========================================================= */

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: radial-gradient(ellipse at 70% 40%, var(--fondo-1), var(--fondo-2) 70%);
  color: var(--texto);
  font: 600 clamp(14px, 1.4vw, 20px) / 1.45 var(--fuente-texto);
  overflow: hidden;
  height: 100vh;
}

#gl {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ---- Pestañas / Diapositivas ---- */
.s {
  position: absolute;
  inset: 0;
  padding: 3.5vh 5vw 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3vh;
  opacity: 0;
  pointer-events: none;
  transform: translateY(24px);
  transition: .6s;
}

.s.on {
  opacity: 1;
  pointer-events: auto;
  transform: none;
}

.L > * {
  max-width: 46vw;
}

/* ---- Títulos y textos ---- */
h1, h2, .c > b {
  font-family: var(--fuente-titulo);
  font-weight: 900;
}

h1 {
  font-size: 7vw;
  line-height: 1;
}

h1 span {
  color: var(--primario);
}

h2 {
  font-size: 2.6vw;
  text-shadow: 0 0 24px var(--p-40, #38bdf866);
}

.pill {
  border: 1px solid var(--primario);
  color: var(--primario);
  border-radius: 30px;
  padding: .2em 1em;
  width: max-content;
  letter-spacing: .2em;
  font-size: .8em;
}

h5 {
  color: var(--secundario, #34d399);
  letter-spacing: .3em;
}

.hint {
  color: #7f93b8;
  font-size: .82em;
}

.big {
  font-size: 1.18em;
  color: #cfe0ff;
}

.big b, p b {
  color: #ffffff;
  font-weight: 700;
}

/* ---- Lista de integrantes ---- */
.team {
  list-style: none;
  display: grid;
  gap: .6vh;
}

.team li {
  border: 1px solid var(--p-40, #38bdf866);
  border-radius: 30px;
  padding: .25em .6em;
  display: flex;
  gap: .8em;
  align-items: center;
  background: var(--tarjeta);
}

.team i {
  background: var(--primario);
  color: #06101f;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  display: grid;
  place-items: center;
  font-style: normal;
  font-size: .8em;
  font-weight: 900;
}

/* ---- Cuadrícula y tarjetas ---- */
.g {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2vw;
}

.g2 {
  display: grid;
  grid-template-columns: 1.35fr .9fr;
  gap: 1.4vw;
  align-items: stretch;
}

.c {
  background: var(--tarjeta);
  border: 1px solid var(--p-35, #38bdf855);
  border-radius: 14px;
  padding: .9vw 1.1vw;
  backdrop-filter: blur(6px);
  transition: transform .4s, border-color .4s, box-shadow .4s;
}

.c.foco {
  border-color: var(--primario);
  box-shadow: 0 0 24px var(--p-40, #38bdf866);
  transform: translateY(-3px);
}

.on .c {
  animation: up .7s both;
  animation-delay: calc(var(--i) * .12s);
}

@keyframes up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
}

.c > b {
  font-size: 1.2em;
  color: var(--secundario, #34d399);
}

.c h4 {
  color: #fff;
  font-size: 1.05em;
}

.c p {
  font-size: .9em;
  color: var(--texto-suave);
}

.c canvas {
  width: 100%;
  display: block;
}

.note {
  background: var(--p-15, #38bdf81f);
  border: 1px solid var(--p-30, #38bdf844);
  border-radius: 10px;
  padding: .55em 1em;
  color: #dbeafe;
  font-size: .92em;
}

.row {
  display: flex;
  gap: 3vw;
  align-items: center;
}

canvas {
  max-width: 100%;
}

/* ---- Tipografía matemática estilo LaTeX (100% offline) ---- */
.ltx {
  font-family: var(--fuente-math);
  font-size: 1.06em;
  letter-spacing: .01em;
  color: #f8fafc;
}

.ltx var {
  font-family: var(--fuente-math);
  font-style: italic;
  color: #7dd3fc;
  font-weight: 600;
}

.ltx sub, .ltx sup {
  font-style: normal;
  font-size: .7em;
  color: #cbd5e1;
}

.mdot {
  position: relative;
  display: inline-block;
  font-style: italic;
  color: #7dd3fc;
}

.mdot::before {
  content: '·';
  position: absolute;
  top: -.5em;
  left: .28em;
  font-style: normal;
  font-weight: 900;
  color: #7dd3fc;
}

.frac {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  font-size: .86em;
  line-height: 1.15;
  margin: 0 .18em;
}

.frac > span:first-child {
  border-bottom: 1.5px solid #cbd5e1;
  padding: 0 .35em .12em;
}

.frac > span:last-child {
  padding-top: .12em;
}

/* ---- Ventanas amplias de ecuaciones y operaciones ---- */
.eq-box {
  background: var(--tarjeta);
  border: 1px solid var(--p-35, #38bdf855);
  border-radius: 16px;
  padding: 1.4vw 2vw;
  display: flex;
  flex-direction: column;
  gap: 1.3vh;
  backdrop-filter: blur(6px);
}

.eq-lg {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: .45em;
  font-size: 1.35em;
  padding: .35em .7em;
  border-radius: 10px;
  background: #060b1866;
  border-left: 3px solid var(--primario);
}

.eq-lg.res {
  border-left-color: var(--secundario, #34d399);
  background: #061b1877;
}

.eq-grid2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1vw;
}

.paso {
  opacity: .1;
  transform: translateY(8px);
  transition: opacity .5s, transform .5s;
}

.paso.ver {
  opacity: 1;
  transform: none;
}

/* ---- Espacios para imágenes de piezas y evidencias ---- */
.foto {
  width: 100%;
  height: 22vh;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--p-35, #38bdf855);
  display: block;
  margin-bottom: .5em;
  background: #060b18;
}

.slot-img {
  width: 100%;
  height: 22vh;
  border: 2px dashed var(--p-40, #38bdf866);
  border-radius: 10px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: .8em;
  color: #7f93b8;
  font-size: .82em;
  background: #060b1866;
  margin-bottom: .5em;
}

.slot-img small {
  display: block;
  color: var(--primario);
  margin-top: .2em;
}

/* ---- Ventana especial: Despiece de 8 imágenes (estilo CAD animado) ---- */
.cad-sub {
  color: var(--primario);
  font-size: .98em;
  margin-top: -.6vh;
}

.cad-grid {
  display: grid;
  grid-template-columns: .95fr 1.45fr;
  gap: 1.3vw;
  align-items: stretch;
}

.cad-left {
  display: flex;
  flex-direction: column;
  gap: 1.2vh;
}

.cad-hero {
  background: #ffffff;
  border-radius: 16px;
  padding: .8vw;
  height: 50vh;
  display: grid;
  place-items: center;
  border: 2px solid var(--p-35, #38bdf855);
  overflow: hidden;
}

.cad-hero img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.cad-slot-hero {
  width: 100%;
  height: 100%;
  border: 2px dashed #94a3b8;
  border-radius: 12px;
  display: grid;
  place-items: center;
  text-align: center;
  color: #334155;
  font-size: .9em;
  padding: 1em;
}

.cad-slot-hero small {
  display: block;
  color: #0284c7;
  margin-top: .3em;
}

.cad-flow-box {
  background: var(--tarjeta);
  border: 1px solid var(--p-35, #38bdf855);
  border-radius: 14px;
  padding: .8em 1.1em;
  font-size: .9em;
}

.cad-flow-box b {
  display: block;
  color: var(--primario);
  font-family: var(--fuente-titulo);
  font-size: .85em;
  margin-bottom: .25em;
}

.cad-right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .9vw;
}

.cad-card {
  background: var(--tarjeta);
  border: 1.5px solid var(--p-35, #38bdf855);
  border-radius: 14px;
  padding: .55vw .85vw;
  display: flex;
  align-items: center;
  gap: .85vw;
  cursor: pointer;
  transition: transform .35s, border-color .35s, box-shadow .35s, background .35s;
}

.cad-card.full {
  grid-column: 1 / -1;
}

.cad-card.activo,
.cad-card:hover {
  border-color: var(--col, var(--primario));
  box-shadow: 0 0 22px var(--col, var(--primario));
  background: #102042ee;
  transform: translateY(-2px) scale(1.015);
}

.cad-thumb {
  width: 5.2vw;
  height: 9.5vh;
  object-fit: contain;
  border-radius: 10px;
  background: #ffffff12;
  padding: 4px;
  flex-shrink: 0;
}

.cad-slot-mini {
  width: 5.2vw;
  height: 9.5vh;
  border: 1.5px dashed var(--col, var(--primario));
  border-radius: 10px;
  display: grid;
  place-items: center;
  text-align: center;
  font-size: .62em;
  color: #9fb4d8;
  padding: 4px;
  flex-shrink: 0;
  background: #060b1866;
}

.cad-card b {
  display: block;
  color: var(--col, var(--primario));
  font-family: var(--fuente-titulo);
  font-size: .88em;
  letter-spacing: .04em;
}

.cad-card p {
  font-size: .78em;
  line-height: 1.25;
  color: var(--texto-suave);
  margin-top: .15em;
}

/* ---- Vista visual de 3 cilindros en Interpretación Final ---- */
.sim-grid {
  display: grid;
  grid-template-columns: .92fr 1.25fr;
  gap: 1.2vw;
  align-items: stretch;
}

.sim-canvas-wrap {
  background: #060b18cc;
  border: 1px solid var(--p-35, #38bdf855);
  border-radius: 14px;
  display: grid;
  place-items: center;
  padding: .4vw;
  overflow: hidden;
}

.sim-canvas-wrap canvas {
  width: 100%;
  max-height: 44vh;
  display: block;
}

.sim-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1vh;
}

.sim-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .8vw;
}

.sim-metrics .c {
  padding: .6vw .9vw;
}

.sim-metrics .c > b {
  font-size: .95em;
  color: var(--primario);
}

.sim-metrics h4 {
  font-size: 1.15em;
}

.sim {
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  align-items: center;
  background: var(--tarjeta);
  border: 1px solid var(--p-35, #38bdf855);
  border-radius: 12px;
  padding: .5em .9em;
  font-size: .86em;
}

.sim label {
  display: flex;
  align-items: center;
  gap: .5em;
}

.sim b {
  color: var(--primario);
  min-width: 5.5em;
}

/* Rectángulo indicador rojo / verde sin texto */
.estado-luz {
  width: 100%;
  height: 28px;
  border-radius: 10px;
  background: #ef4444;
  border: 1px solid #fca5a5;
  box-shadow: 0 0 18px #ef444488;
  transition: background .3s, border-color .3s, box-shadow .3s;
}

.estado-luz.ok {
  background: #22c55e;
  border-color: #86efac;
  box-shadow: 0 0 18px #22c55e88;
}

/* ---- Listas interactivas (4 tiempos en naranja y despiece en cyan) ---- */
ol {
  list-style: none;
  display: grid;
  gap: 1vh;
}

ul.pt {
  list-style: none;
  display: grid;
  gap: .5vh;
}

.st li, .pt li {
  background: var(--tarjeta);
  border: 1px solid var(--p-35, #38bdf855);
  border-radius: 12px;
  padding: .5em .9em;
  cursor: pointer;
  transition: .3s;
}

/* Solo la ventana de Combustión usa naranja */
.st li.on {
  border-color: #ff7a18;
  background: #ff7a182b;
  transform: translateX(6px);
}

.st li.on b {
  color: #ff7a18;
}

.pt li:hover {
  border-color: var(--primario);
  background: var(--p-20, #38bdf82e);
  transform: translateX(6px);
}

.st li b, .pt li b {
  color: var(--primario);
  display: block;
  font-family: var(--fuente-titulo);
  font-size: .82em;
}

.pt li {
  padding: .28em .75em;
  font-size: .85em;
  line-height: 1.25;
}

/* ---- Botones ---- */
button {
  background: #0b1630;
  color: #fff;
  border: 1px solid var(--primario);
  border-radius: 30px;
  padding: .35em 1em;
  font: inherit;
  cursor: pointer;
  width: max-content;
}

button:hover {
  background: var(--primario);
  color: #06101f;
}

/* ---- Orden de encendido ---- */
#ord {
  display: flex;
  gap: .5em;
}

#ord i {
  width: 2.2em;
  height: 2.2em;
  border-radius: 50%;
  border: 1px solid var(--primario);
  display: grid;
  place-items: center;
  font-style: normal;
  transition: .2s;
}

#ord i.f {
  background: var(--secundario, #34d399);
  border-color: var(--secundario, #34d399);
  color: #051210;
  box-shadow: 0 0 18px var(--secundario, #34d399);
}

/* ---- Avión animado ---- */
.plane {
  position: absolute;
  top: 10vh;
  left: -160px;
  width: 140px;
  animation: fly 8s linear infinite;
}

@keyframes fly {
  to {
    transform: translateX(115vw);
  }
}

/* ---- Diagrama PLC ---- */
.flow {
  display: flex;
  align-items: center;
  gap: 1vw;
}

.n {
  border: 1px solid var(--primario);
  border-radius: 16px;
  padding: 1.2em 1.6em;
  text-align: center;
  background: var(--tarjeta);
  font-size: 1.3em;
}

.n small {
  display: block;
  font-size: .65em;
  color: #9fb4d8;
}

.n.pl {
  border-color: var(--secundario, #34d399);
  box-shadow: 0 0 26px #34d39955;
}

.flow i {
  flex: 1;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--primario), transparent) 0 0 / 60px 4px repeat-x;
  animation: mv 1s linear infinite;
}

@keyframes mv {
  to {
    background-position: 60px 0;
  }
}

/* ---- Barra de navegación ---- */
#nav {
  position: fixed;
  bottom: 2.5vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: .7em;
  align-items: center;
  z-index: 5;
}

#dots {
  display: flex;
  gap: .35em;
}

#dots span {
  width: .6em;
  height: .6em;
  border-radius: 50%;
  background: var(--p-30, #38bdf844);
  cursor: pointer;
  transition: .3s;
}

#dots span.on {
  background: var(--primario);
  transform: scale(1.4);
}

input[type=range] {
  accent-color: var(--primario);
  width: 10em;
}
```

---

### Archivo: `css/tema.css`

```css
/* =========================================================
   APARTADO DE TEMA, FONDOS Y COLORES (EDITA SOLO ESTE ARCHIVO)
   ---------------------------------------------------------
   Usa formato hexadecimal #RRGGBB en --primario, --secundario
   y --acento para que los motores 2D y 3D se sincronicen.
   ========================================================= */

:root {
  /* Fondo principal (Portada e Inicio) */
  --fondo-1: #0f2447;
  --fondo-2: #060b18;
  --tarjeta: #0b1630cc;

  /* Paleta balanceada */
  --primario: #38bdf8;        /* Azul cyan (títulos, deslizadores, bordes) */
  --secundario: #34d399;      /* Verde menta (subtítulos, números, notas) */
  --acento: #f59e0b;          /* Ámbar sutil (solo cigüeñal 3D y punto activo) */
  --texto: #e6efff;           /* Texto general */
  --texto-suave: #b8c8e8;     /* Párrafos secundarios */

  /* Tipografías */
  --fuente-titulo: Orbitron, 'Segoe UI', Arial, sans-serif;
  --fuente-texto: 'Segoe UI', Rajdhani, Arial, sans-serif;
  --fuente-math: 'Cambria Math', 'Latin Modern Math', Georgia, 'Times New Roman', serif;
}

/* ---- Variaciones suaves de fondo según la pestaña ---- */
body[data-tema="indigo"] {
  --fondo-1: #1e1b4b;
  --fondo-2: #070814;
}

body[data-tema="petroleo"] {
  --fondo-1: #0d333b;
  --fondo-2: #050f14;
}

body[data-tema="grafito"] {
  --fondo-1: #182234;
  --fondo-2: #070b12;
}
```

---

### Archivo: `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#060b18">
  <title>Motor Radial — App Interactiva</title>

  <!-- PWA e ícono -->
  <link rel="manifest" href="./manifest.json">
  <link rel="icon" href="./img/icon.svg" type="image/svg+xml">

  <!-- Estilos (tema editable + diseño general) -->
  <link rel="stylesheet" href="./css/tema.css">
  <link rel="stylesheet" href="./css/estilos.css">
</head>
<body>

  <!-- Lienzo 3D de fondo -->
  <canvas id="gl"></canvas>

  <!-- Contenedor donde se cargan todas las pestañas -->
  <main id="m"></main>

  <!-- Barra de navegación inferior -->
  <div id="nav">
    <button id="pv" title="Anterior">◀</button>
    <div id="dots"></div>
    <button id="nx" title="Siguiente">▶</button>
    <button id="fs" title="Pantalla completa">⛶</button>
  </div>

  <!-- 1. Registro base y helpers -->
  <script src="./js/registro.js"></script>

  <!-- 2. Pestañas por integrante/sección (cada pestaña es una variable global que se agrega) -->
  <script src="./js/pestanas/01_inicio.js"></script>
  <script src="./js/pestanas/02_combustion_historia.js"></script>
  <script src="./js/pestanas/03_aviacion_estrella.js"></script>
  <script src="./js/pestanas/04_despiece_radial.js"></script>
  <script src="./js/pestanas/05_ventas.js"></script>

  <!-- 3. Motores gráficos y arranque de la app -->
  <script src="./js/motor2d.js"></script>
  <script src="./js/motor3d.js"></script>
  <script src="./js/app.js"></script>

  <!-- 4. Registro PWA (solo se activa en web/GitHub Pages, nunca da error en USB) -->
  <script>
    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  </script>
</body>
</html>
```

---

### Archivo: `js/app.js`

```javascript
/* =========================================================
   CONTROLADOR PRINCIPAL DE LA APLICACIÓN
   ========================================================= */

(function () {
  // Tiempos automáticos (en segundos)
  const DURACION_CICLO = 20;   // Ciclo completo de combustión (4 tiempos)
  const TIEMPO_DESPIECE = 20;  // Duración total del ciclo unir/separar en 3D
  const TIEMPO_FICHA = 2.2;    // Cada cuántos segundos resalta la siguiente pieza CAD

  // Temas de fondo por pestaña (definidos en css/tema.css)
  const TEMAS = {
    'historia-combustion': 'indigo',
    'aviacion': 'indigo',
    'historia-radial': 'indigo',
    'despiece': 'petroleo',
    'despiece-fichas': 'petroleo',
    'linea': 'petroleo',
    'v': 'petroleo',
    'ventas': 'grafito',
    'ejercicio-problema': 'grafito',
    'ejercicio-fundamentales': 'grafito',
    'ejercicio-op1': 'grafito',
    'ejercicio-op2': 'grafito',
    'ejercicio-op3': 'grafito',
    'ejercicio-interpretacion': 'grafito',
    'evidencias': 'grafito'
  };

  // Sincroniza transparencias de estilos.css con los colores de tema.css
  const root = document.documentElement;
  const cs = getComputedStyle(root);
  const norm = (h, def) => {
    h = (h || '').replace('#', '').trim();
    if (h.length === 3) h = h.replace(/./g, c => c + c);
    return /^[0-9a-fA-F]{6}$/.test(h) ? '#' + h : def;
  };
  const cp = norm(cs.getPropertyValue('--primario'), '#38bdf8');
  const ca = norm(cs.getPropertyValue('--acento'), '#f59e0b');
  root.style.setProperty('--p-15', cp + '1f');
  root.style.setProperty('--p-20', cp + '2e');
  root.style.setProperty('--p-30', cp + '44');
  root.style.setProperty('--p-35', cp + '55');
  root.style.setProperty('--p-40', cp + '66');
  root.style.setProperty('--a-15', ca + '22');
  root.style.setProperty('--a-20', ca + '30');
  root.style.setProperty('--a-40', ca + '66');

  const Z = { x: 0, s: 0, rx: 0, ry: 0, e: 0, spin: 0, rot: 1 };
  const m = $('#m'), dots = $('#dots');

  // Construye las pestañas y los puntos de navegación automáticamente
  DIAPOSITIVAS.forEach((d, i) => {
    d.motor3D = { ...Z, ...(d.motor3D || {}) };
    const sec = document.createElement('section');
    sec.className = 's' + (d.alineacion === 'L' ? ' L' : '');
    sec.innerHTML = d.html;
    m.appendChild(sec);

    const dot = document.createElement('span');
    dot.onclick = () => go(i);
    dots.appendChild(dot);
  });

  const sl = $$('.s');
  const desp = DIAPOSITIVAS.find(d => d.id === 'despiece');
  const cadCards = $$('.cad-card');
  let cur = 0, T = DIAPOSITIVAS[0].motor3D;
  let speed = 1, hiP = '', th = 0, tDesp = 0, tCad = 0, cadHover = -1, tEq = 0, phi3 = 0;

  function go(n) {
    cur = Math.max(0, Math.min(DIAPOSITIVAS.length - 1, n));
    T = DIAPOSITIVAS[cur].motor3D;
    const id = DIAPOSITIVAS[cur].id;

    document.body.dataset.tema = TEMAS[id] || '';
    if (id === 'combustion') th = 0;
    if (id === 'despiece' && desp) { tDesp = 0; desp.motor3D.e = 0; }
    if (id === 'despiece-fichas') { tCad = 0; cadHover = -1; }
    if (id.startsWith('ejercicio-')) tEq = 0;

    sl.forEach((s, i) => s.classList.toggle('on', i === cur));
    [...dots.children].forEach((d, i) => d.classList.toggle('on', i === cur));
  }

  // Botones y teclado
  $('#pv').onclick = () => go(cur - 1);
  $('#nx').onclick = () => go(cur + 1);
  $('#fs').onclick = () =>
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();

  addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      go(cur + 1);
    }
    if (e.key === 'ArrowLeft') go(cur - 1);
  });

  // Combustión: saltar a tiempo si se toca
  $$('.st li').forEach(l => {
    l.onclick = () => { th = (+l.dataset.s) * P + .01; };
  });

  if ($('#sp')) $('#sp').oninput = e => { speed = +e.target.value; };

  // Despiece 3D: brillar pieza al pasar cursor/tocar
  $$('.pt li').forEach(l => {
    l.onmouseenter = l.onclick = () => { hiP = l.dataset.p; };
    l.onmouseleave = () => { hiP = ''; };
  });

  // Despiece 8 imágenes: permitir resaltar manualmente al pasar cursor/tocar
  cadCards.forEach((c, i) => {
    c.onmouseenter = c.onclick = () => { cadHover = i; };
    c.onmouseleave = () => { cadHover = -1; };
  });

  // Si tocas cualquier cuadro de ecuaciones, muestra todos los pasos de esa ventana al instante
  $$('.eq-box').forEach(b => {
    b.onclick = () => { tEq = 20; };
  });

  // Cálculos en vivo para Interpretación Final (rectángulo rojo/verde sin texto)
  const inRpm = $('#in_rpm'), inMf = $('#in_mf'), btnReset = $('#btn_reset');
  const r2 = v => Math.round((v + 1e-9) * 100) / 100;
  const simInfo = { rpm: 900, pp: 32.57, ppCil: 10.86, cierre: 0.143, riesgo: true };

  function calcEjercicio() {
    if (!inRpm || !inMf) return;
    const rpm = +inRpm.value;
    const mf = +inMf.value;
    const w = r2((2 * P * rpm) / 60);
    const pm = r2((100 * w) / 1000);
    const pc = r2((mf * 42000) / 3600);
    const pp = Math.max(0, r2(pc - pm));
    const ppCil = r2(pp / 3);
    const bsfc = Math.round((mf * 1000) / pm);
    const cierre = Math.max(0, 0.143 * (pp / 32.57) * (900 / rpm));
    const riesgo = cierre > 0.080 || bsfc > 280;

    Object.assign(simInfo, { rpm, pp, ppCil, cierre, riesgo });

    $('#val_rpm').textContent = rpm + ' rpm';
    $('#val_mf').textContent = mf.toFixed(1) + ' kg/h';
    $('#t_pp').textContent = pp.toFixed(2);
    $('#o_pm').textContent = pm.toFixed(2) + ' kW';
    $('#o_pp').textContent = pp.toFixed(2) + ' kW';
    $('#o_cil').textContent = ppCil.toFixed(2) + ' kW / cilindro';
    $('#o_bsfc').textContent = bsfc + ' g/kW·h';
    $('#o_cierre').textContent = cierre.toFixed(3) + ' mm';

    $('#o_alerta').classList.toggle('ok', !riesgo);
  }

  if (inRpm && inMf) {
    inRpm.oninput = calcEjercicio;
    inMf.oninput = calcEjercicio;
    if (btnReset) {
      btnReset.onclick = () => {
        inRpm.value = 900;
        inMf.value = 3.6;
        calcEjercicio();
      };
    }
    calcEjercicio();
  }

  // Bucle principal de animación (3D + 2D)
  const Sx = { ...Z, s: 0 }, g7 = new Array(7).fill(0);
  let fi = 0, sy = 0, last = 0, lm = -9;

  function loop(t) {
    requestAnimationFrame(loop);
    const dt = Math.min((t - last) / 1000, .05);
    last = t;

    const id = DIAPOSITIVAS[cur].id;

    // Despiece 3D: unido 2s -> se separa 10s -> se une 8s (ciclo de 20s)
    if (id === 'despiece' && desp) {
      tDesp = (tDesp + dt) % TIEMPO_DESPIECE;
      desp.motor3D.e = (tDesp >= 2 && tDesp < 12) ? 1 : 0;
    }

    // Despiece 8 imágenes: resalta paso a paso con su color
    if (id === 'despiece-fichas' && cadCards.length) {
      let activo = cadHover;
      if (activo < 0) {
        tCad += dt;
        activo = Math.floor(tCad / TIEMPO_FICHA) % cadCards.length;
      }
      cadCards.forEach((c, i) => c.classList.toggle('activo', i === activo));
    }

    // Ecuaciones paso a paso en la ventana activa
    if (id.startsWith('ejercicio-')) {
      tEq += dt;
      sl[cur].querySelectorAll('.paso').forEach(p => p.classList.toggle('ver', tEq >= +p.dataset.t));
    }

    for (const k in Z) Sx[k] += (T[k] - Sx[k]) * .06;

    fi += dt * 3 * Sx.rot * speed;
    sy = (sy + dt * .35 * Sx.spin) % (2 * P);

    const mi = Math.floor((fi - P / 2) / (2 * P / 7));
    if (mi !== lm) {
      lm = mi;
      if (mi % 2 === 0) {
        const k = ((mi % 7) + 7) % 7;
        g7[k] = 1.6;
        if (id === 'radial') $$('#ord i').forEach((n, i) => n.classList.toggle('f', i === k));
      }
    }
    for (let k = 0; k < 7; k++) g7[k] *= .93;

    render3D(Sx, fi, sy, hiP, g7, id === 'radial');

    if (id === 'combustion') {
      th = (th + dt * ((4 * P) / DURACION_CICLO)) % (4 * P);
      const s = Math.floor(th / P) % 4;
      d2($('#c3'), 'single', th - P / 2, { col: COL_2D[s], s, f: (th % P) / P });
      $$('.st li').forEach((l, i) => l.classList.toggle('on', i === s));
    }
    if (id === 'aviacion') $$('.c canvas').forEach(c => d2(c, c.dataset.t, t / 450));
    if (id === 'linea') d2($('#c9'), 'inline', t / 450);
    if (id === 'v') d2($('#c10'), 'v', t / 450);
    if (id === 'ejercicio-interpretacion') {
      phi3 += dt * (simInfo.rpm / 900) * 4.2;
      d3Sim($('#c_sim3'), phi3, t / 1000, simInfo);
    }
  }

  go(0);
  requestAnimationFrame(loop);
})();
```

---

### Archivo: `js/motor2d.js`

```javascript
/* =========================================================
   MOTOR 2D (ESQUEMAS ANIMADOS + MOTOR 3 CILINDROS LIMPIO)
   ========================================================= */

(function () {
  const normHex = (h, def) => {
    h = (h || '').replace('#', '').trim();
    if (h.length === 3) h = h.replace(/./g, c => c + c);
    return /^[0-9a-fA-F]{6}$/.test(h) ? '#' + h : def;
  };

  const cs = getComputedStyle(document.documentElement);
  const C_PRI = normHex(cs.getPropertyValue('--primario'), '#38bdf8');
  const C_SEC = normHex(cs.getPropertyValue('--secundario'), '#34d399');
  const C_ACC = normHex(cs.getPropertyValue('--acento'), '#f59e0b');

  window.COL_2D = [C_PRI + '55', '#6366f188', C_ACC + 'aa', '#94a3b866'];

  window.d2 = function (cv, type, phi, st) {
    if (!cv) return;
    const x = cv.getContext('2d'), w = cv.width, h = cv.height;
    x.clearRect(0, 0, w, h);

    const sc = h / ({ radial: 175, single: 108 }[type] || 130);
    const R = 16 * sc, L = 48 * sc;
    let C = [];

    if (type === 'radial') {
      for (let k = 0; k < 7; k++) C.push([w / 2, h / 2, -P / 2 + k * 2 * P / 7, 0]);
    } else if (type === 'v') {
      C = [-1, 1].map(s => [w / 2, h * .72, -P / 2 + s * P / 4, 0]);
    } else if (type === 'inline') {
      for (let i = 0; i < 4; i++) C.push([w * (.2 + .2 * i), h * .72, -P / 2, i % 3 ? P : 0]);
    } else {
      C = [[w / 2, h * .78, -P / 2, 0]];
    }

    C.forEach(([cx, cy, a, ph]) => {
      const rel = phi + ph - a;
      const d = R * Math.cos(rel) + Math.sqrt(L * L - (R * Math.sin(rel)) ** 2);
      const top = L + R + 14 * sc, bw = 13 * sc;

      x.save();
      x.translate(cx, cy);
      x.rotate(a + P / 2);

      if (st) {
        x.fillStyle = st.col;
        x.fillRect(-bw, -top, 2 * bw, top - d - 5 * sc);
        x.fillStyle = '#e2e8f0';
        [[-bw / 2, st.s === 0], [bw / 2, st.s === 3]].forEach(([vx, o]) => {
          const dy = o ? 7 * sc : 0;
          x.fillRect(vx - 1.5, -top - 12 * sc + dy, 3, 12 * sc);
          x.fillRect(vx - 6 * sc, -top + dy - 2, 12 * sc, 4);
        });
        if (st.s === 2 && st.f < .3) {
          x.fillStyle = '#ffe066';
          x.beginPath();
          x.arc(0, -top + 6 * sc, 9 * sc * (1 - st.f), 0, 2 * P);
          x.fill();
        }
      }

      x.strokeStyle = C_PRI;
      x.lineWidth = 2.5;
      x.beginPath();
      x.moveTo(-bw, -(L - R - 8 * sc));
      x.lineTo(-bw, -top);
      x.lineTo(bw, -top);
      x.lineTo(bw, -(L - R - 8 * sc));
      x.stroke();

      x.fillStyle = '#e2e8f0';
      x.fillRect(-bw + 2, -d - 5 * sc, 2 * bw - 4, 10 * sc);
      x.restore();

      const px = cx + Math.cos(phi + ph) * R;
      const py = cy + Math.sin(phi + ph) * R;

      x.strokeStyle = '#cbd5e1';
      x.lineWidth = 2;
      x.beginPath();
      x.moveTo(px, py);
      x.lineTo(cx + d * Math.cos(a), cy + d * Math.sin(a));
      x.stroke();

      x.strokeStyle = C_PRI + '88';
      x.beginPath();
      x.arc(cx, cy, R, 0, 2 * P);
      x.stroke();

      x.fillStyle = C_SEC;
      x.beginPath();
      x.arc(px, py, 3.5 * sc, 0, 2 * P);
      x.fill();
    });

    if (type === 'radial') {
      x.fillStyle = '#1b2b55';
      x.strokeStyle = C_PRI;
      x.beginPath();
      x.arc(w / 2, h / 2, R * 1.2, 0, 2 * P);
      x.fill();
      x.stroke();
    }
  };

  // ---- Motor estrella de 3 cilindros simple y visual ----
  window.d3Sim = function (cv, phi, t, info) {
    if (!cv) return;
    const x = cv.getContext('2d'), w = cv.width, h = cv.height;
    x.clearRect(0, 0, w, h);

    const sc = h / 210, R = 16 * sc, L = 48 * sc;
    const cx = w * .5, cy = h * .56;
    const peligro = info.riesgo;
    const exp = Math.min(1, Math.max(0, info.cierre / 0.085));

    // Ondas de calor solo cuando hay sobrecarga térmica
    if (peligro) {
      x.save();
      x.strokeStyle = 'rgba(239, 68, 68, 0.55)';
      x.lineWidth = 2;
      for (let i = -1; i <= 1; i++) {
        const bx = cx + i * 30 * sc;
        x.beginPath();
        for (let y = 0; y <= 30; y += 5) {
          const yy = h * .16 - y * sc * .45;
          const xx = bx + Math.sin((y * .24) - t * 6 + i) * 4 * sc;
          if (y === 0) x.moveTo(xx, yy);
          else x.lineTo(xx, yy);
        }
        x.stroke();
      }
      x.restore();
    }

    const px = cx + Math.cos(phi) * R;
    const py = cy + Math.sin(phi) * R;

    // 3 cilindros a 120°
    for (let k = 0; k < 3; k++) {
      const a = -P / 2 + k * (2 * P / 3);
      const rel = phi - a;
      const d = R * Math.cos(rel) + Math.sqrt(L * L - (R * Math.sin(rel)) ** 2);
      const top = L + R + 16 * sc, bw = 15 * sc;

      x.save();
      x.translate(cx, cy);
      x.rotate(a + P / 2);

      // Fondo interior del cilindro (rojo suave en sobrecarga, limpio en seguro)
      x.fillStyle = peligro ? 'rgba(239, 68, 68, 0.18)' : 'rgba(56, 189, 248, 0.08)';
      x.fillRect(-bw, -top, 2 * bw, top - (L - R - 8 * sc));

      // Camisa del cilindro
      x.strokeStyle = peligro ? '#ef4444' : C_PRI;
      x.lineWidth = 2.5;
      x.beginPath();
      x.moveTo(-bw, -(L - R - 8 * sc));
      x.lineTo(-bw, -top);
      x.lineTo(bw, -top);
      x.lineTo(bw, -(L - R - 8 * sc));
      x.stroke();

      // Pistón expandiéndose hacia la camisa
      const gap = Math.max(0.5, (1 - exp) * 4 * sc);
      const pw = (bw - gap) * 2;
      x.fillStyle = peligro ? '#f87171' : '#e2e8f0';
      x.fillRect(-pw / 2, -d - 6 * sc, pw, 12 * sc);

      // Chispas mínimas de fricción cuando se pierde la holgura
      if (peligro && Math.sin(t * 22 + k * 2) > 0) {
        x.fillStyle = '#fde047';
        [-bw + 1.5, bw - 1.5].forEach(sx => {
          x.beginPath();
          x.arc(sx, -d, 2 * sc, 0, 2 * P);
          x.fill();
        });
      }

      x.restore();

      // Biela limpia
      x.strokeStyle = '#e2e8f0';
      x.lineWidth = 2.2;
      x.beginPath();
      x.moveTo(px, py);
      x.lineTo(cx + d * Math.cos(a), cy + d * Math.sin(a));
      x.stroke();
    }

    // Centro del cigüeñal simple (sin exceso de naranja)
    x.fillStyle = '#132242';
    x.strokeStyle = peligro ? '#ef4444' : C_PRI;
    x.lineWidth = 2.4;
    x.beginPath();
    x.arc(cx, cy, R * 1.15, 0, 2 * P);
    x.fill();
    x.stroke();

    x.fillStyle = peligro ? '#ef4444' : C_SEC;
    x.beginPath();
    x.arc(px, py, 3.8 * sc, 0, 2 * P);
    x.fill();
  };
})();
```

---

### Archivo: `js/motor3d.js`

```javascript
/* =========================================================
   MOTOR 3D PURO EN CANVAS (0 DEPENDENCIAS EXTERNAS)
   Iluminación metálica limpia y geometría ordenada.
   ========================================================= */

(function () {
  const gl = $('#gl');
  const gx = gl.getContext('2d');
  let W = 0, H = 0, F = 0, DPR = 1;

  function size() {
    DPR = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth;
    H = innerHeight;
    gl.width = W * DPR;
    gl.height = H * DPR;
    F = (H / 2) / Math.tan(20 * P / 180);
  }
  addEventListener('resize', size);
  size();

  const normHex = (h, def) => {
    h = (h || '').replace('#', '').trim();
    if (h.length === 3) h = h.replace(/./g, c => c + c);
    return /^[0-9a-fA-F]{6}$/.test(h) ? '#' + h : def;
  };
  const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) || 0);

  const cs = getComputedStyle(document.documentElement);
  const C_ACC = normHex(cs.getPropertyValue('--acento'), '#ff7a18');

  const PAL = {
    piston: [232, 238, 248],
    cyl: [32, 118, 224],
    head: [148, 163, 184],
    crank: hex2rgb(C_ACC),
    body: [46, 58, 89],
    prop: [216, 42, 42]
  };

  function cylM(r, h, seg, st, rx90) {
    const f = [], rot = rx90 ? v => [v[0], -v[2], v[1]] : v => v;
    for (let k = 0; k < st; k++) {
      const y0 = -h / 2 + k * (h / st), y1 = -h / 2 + (k + 1) * (h / st);
      for (let i = 0; i < seg; i++) {
        const t0 = i * 2 * P / seg, t1 = (i + 1) * 2 * P / seg, tm = (t0 + t1) / 2;
        f.push({
          p: [
            [r * Math.cos(t0), y1, r * Math.sin(t0)],
            [r * Math.cos(t1), y1, r * Math.sin(t1)],
            [r * Math.cos(t1), y0, r * Math.sin(t1)],
            [r * Math.cos(t0), y0, r * Math.sin(t0)]
          ].map(rot),
          n: rot([Math.cos(tm), 0, Math.sin(tm)])
        });
      }
    }
    const top = [], bot = [];
    for (let i = 0; i < seg; i++) {
      const t = i * 2 * P / seg;
      top.push(rot([r * Math.cos(t), h / 2, r * Math.sin(t)]));
      bot.push(rot([r * Math.cos(t), -h / 2, r * Math.sin(t)]));
    }
    f.push({ p: top, n: rot([0, 1, 0]) }, { p: bot, n: rot([0, -1, 0]) });
    return f;
  }

  function boxM(w, h, d, segY = 1) {
    const f = [], x = w / 2, z = d / 2, sh = h / segY;
    for (let k = 0; k < segY; k++) {
      const y0 = -h / 2 + k * sh, y1 = y0 + sh;
      f.push(
        { p: [[-x, y0, z], [x, y0, z], [x, y1, z], [-x, y1, z]], n: [0, 0, 1] },
        { p: [[x, y0, -z], [-x, y0, -z], [-x, y1, -z], [x, y1, -z]], n: [0, 0, -1] },
        { p: [[x, y0, z], [x, y0, -z], [x, y1, -z], [x, y1, z]], n: [1, 0, 0] },
        { p: [[-x, y0, -z], [-x, y0, z], [-x, y1, z], [-x, y1, -z]], n: [-1, 0, 0] }
      );
      if (k === segY - 1) f.push({ p: [[-x, y1, z], [x, y1, z], [x, y1, -z], [-x, y1, -z]], n: [0, 1, 0] });
      if (k === 0) f.push({ p: [[-x, y0, -z], [x, y0, -z], [x, y0, z], [-x, y0, z]], n: [0, -1, 0] });
    }
    return f;
  }

  function sphM(r, la, lo) {
    const f = [];
    for (let i = 0; i < la; i++) {
      const p0 = i * P / la, p1 = (i + 1) * P / la;
      for (let j = 0; j < lo; j++) {
        const t0 = j * 2 * P / lo, t1 = (j + 1) * 2 * P / lo;
        const pt = (p, t) => [r * Math.sin(p) * Math.cos(t), r * Math.cos(p), r * Math.sin(p) * Math.sin(t)];
        const ps = [pt(p0, t0), pt(p1, t0), pt(p1, t1), pt(p0, t1)];
        let nx = 0, ny = 0, nz = 0;
        ps.forEach(v => { nx += v[0]; ny += v[1]; nz += v[2]; });
        const L = Math.hypot(nx, ny, nz) || 1;
        f.push({ p: ps, n: [nx / L, ny / L, nz / L] });
      }
    }
    return f;
  }

  const M_BODY = cylM(.62, .55, 20, 2, 1), M_DISC = cylM(.22, .14, 14, 1, 1), M_SHAFT = cylM(.13, 1.2, 14, 5, 1);
  const M_BLADE = boxM(.22, 1.5, .06, 5), M_HUB = sphM(.2, 6, 10), M_PIN = sphM(.1, 5, 8);
  const M_CYL = cylM(.24, .9, 16, 6, 0), M_FIN = cylM(.3, .03, 16, 1, 0), M_HEAD = cylM(.27, .12, 16, 1, 0), M_PIST = cylM(.18, .14, 14, 1, 0);

  window.render3D = function (Sx, fi, sy, hiP, g7, isRadial) {
    gx.setTransform(DPR, 0, 0, DPR, 0, 0);
    gx.clearRect(0, 0, W, H);
    if (Sx.s < .01) return;

    const e = Sx.e, rx = Sx.rx, ry = Sx.ry + sy * Sx.spin;
    const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), syR = Math.sin(ry);
    const sc = Sx.s, ex = Sx.x;
    const faces = [];

    function push(mesh, col, ox, oy, oz, rz, pz, em, emC) {
      const cz = Math.cos(rz), sz = Math.sin(rz);
      for (let i = 0; i < mesh.length; i++) {
        const q = mesh[i], n = q.n;
        const nx1 = n[0] * cz - n[1] * sz, ny1 = n[0] * sz + n[1] * cz, nz1 = n[2];
        const nx2 = nx1 * cy + nz1 * syR, ny2 = ny1, nz2 = -nx1 * syR + nz1 * cy;
        const wxn = nx2, wyn = ny2 * cx - nz2 * sx, wzn = ny2 * sx + nz2 * cx;

        let ax = 0, ay = 0, az = 0;
        const pts = [];
        for (let j = 0; j < q.p.length; j++) {
          const v = q.p[j], x0 = v[0] + ox, y0 = v[1] + oy, z0 = v[2] + oz;
          const x1 = x0 * cz - y0 * sz, y1 = x0 * sz + y0 * cz, z1 = z0 + pz;
          const x2 = x1 * cy + z1 * syR, y2 = y1, z2 = -x1 * syR + z1 * cy;
          const x3 = x2, y3 = y2 * cx - z2 * sx, z3 = y2 * sx + z2 * cx;
          const wx = x3 * sc + ex, wy = y3 * sc, wz = z3 * sc, dz = 7.5 - wz;
          if (dz <= .2) { ax = 1e9; break; }
          ax += wx; ay += wy; az += wz;
          pts.push([W / 2 + wx * F / dz, H / 2 - wy * F / dz]);
        }
        if (ax === 1e9) continue;
        const k = q.p.length;
        ax /= k; ay /= k; az /= k;
        if (wxn * (-ax) + wyn * (-ay) + wzn * (7.5 - az) <= 0) continue;

        const d1 = Math.max(0, wxn * -.566 + wyn * .424 + wzn * .707);
        const d2 = Math.max(0, wxn * .745 + wyn * -.298 + wzn * .596);
        const s1 = Math.pow(Math.max(0, wxn * -.306 + wyn * .229 + wzn * .924), 20);
        const s2 = Math.pow(Math.max(0, wxn * .418 + wyn * -.167 + wzn * .893), 20);
        const sp = 85 * s1 + 45 * s2;

        const R = Math.min(255, col[0] * (.38 + d1 * .72 + d2 * .32) + sp + emC[0] * em * .75) | 0;
        const G = Math.min(255, col[1] * (.44 + d1 * .80 + d2 * .24) + sp + emC[1] * em * .75) | 0;
        const B = Math.min(255, col[2] * (.54 + d1 * .88 + d2 * .18) + sp + emC[2] * em * .75) | 0;
        faces.push({ pts, z: az, c: `rgb(${R},${G},${B})` });
      }
    }

    function pushLine(xA, yA, xB, yB, col) {
      const xf = (x, y) => {
        const x2 = x * cy, z2 = -x * syR, y3 = y * cx - z2 * sx, z3 = y * sx + z2 * cx;
        const wx = x2 * sc + ex, wy = y3 * sc, wz = z3 * sc, dz = 7.5 - wz;
        return [W / 2 + wx * F / dz, H / 2 - wy * F / dz, wz];
      };
      const a = xf(xA, yA), b = xf(xB, yB);
      faces.push({ line: 1, a, b, z: (a[2] + b[2]) / 2, w: Math.max(2, 3 * sc), c: col });
    }

    const hi = k => hiP === k ? .85 : 0;
    push(M_BODY, PAL.body, 0, 0, 0, 0, 0, hi('body'), PAL.body);
    push(M_DISC, PAL.crank, 0, 0, 0, 0, 0, hi('crank'), PAL.crank);
    push(M_SHAFT, PAL.crank, 0, 0, 0, 0, .15 - e * .9, hi('crank'), PAL.crank);
    push(M_BLADE, PAL.prop, 0, .85, 0, fi, .75 + e * 1.3, 0, PAL.prop);
    push(M_BLADE, PAL.prop, 0, -.85, 0, fi, .75 + e * 1.3, 0, PAL.prop);
    push(M_HUB, PAL.crank, 0, 0, 0, fi, .75 + e * 1.3, hi('crank'), PAL.crank);

    const px = .3 * Math.cos(fi), py = .3 * Math.sin(fi);
    if (e > .08) push(M_PIN, PAL.crank, px, py, 0, 0, 0, hi('crank'), PAL.crank);

    for (let k = 0; k < 7; k++) {
      const a = P / 2 + k * 2 * P / 7, rz = a - P / 2, rel = fi - a;
      const d = .3 * Math.cos(rel) + Math.sqrt(.85 * .85 - (.3 * Math.sin(rel)) ** 2) + e * .35;
      push(M_CYL, PAL.cyl, 0, 1 + e * .7, 0, rz, 0, hi('cyl'), PAL.cyl);
      for (let j = 0; j < 4; j++) push(M_FIN, PAL.head, 0, 1.15 + j * .17 + e * .7, 0, rz, 0, hi('head'), PAL.crank);
      push(M_HEAD, PAL.head, 0, 1.51 + e * 1.1, 0, rz, 0, Math.max(isRadial ? g7[k] : 0, hi('head')), PAL.crank);
      if (e > .08) {
        push(M_PIST, PAL.piston, 0, d, 0, rz, 0, hi('piston'), PAL.piston);
        pushLine(px, py, d * Math.cos(a), d * Math.sin(a), hiP === 'rod' ? C_ACC : '#ffffff');
      }
    }

    faces.sort((a, b) => a.z - b.z);
    for (let i = 0; i < faces.length; i++) {
      const f = faces[i];
      if (f.line) {
        gx.strokeStyle = f.c;
        gx.lineWidth = f.w;
        gx.lineCap = 'round';
        gx.beginPath();
        gx.moveTo(f.a[0], f.a[1]);
        gx.lineTo(f.b[0], f.b[1]);
        gx.stroke();
      } else {
        gx.fillStyle = gx.strokeStyle = f.c;
        gx.lineWidth = .7;
        gx.beginPath();
        gx.moveTo(f.pts[0][0], f.pts[0][1]);
        for (let j = 1; j < f.pts.length; j++) gx.lineTo(f.pts[j][0], f.pts[j][1]);
        gx.closePath();
        gx.fill();
        gx.stroke();
      }
    }
  };
})();
```

---

### Archivo: `js/pestanas/01_inicio.js`

```javascript
/* =========================================================
   PESTAÑAS DE INICIO (VARIABLES GLOBALES QUE SE VAN AGREGANDO)
   ========================================================= */

var PESTANA_PORTADA = {
  id: 'portada',
  alineacion: 'L',
  motor3D: { x: 2.4, s: 1, rx: .35, ry: .6, spin: 1 },
  html: `
    <div class="pill">● INGENIERÍA MECÁNICA</div>
    <h1>MOTOR<br><span>RADIAL</span></h1>
    <h5>INTEGRANTES:</h5>
    <ul class="team">
      ${TM.map(t => `<li><i>${t[0]}</i>${t[1]}</li>`).join('')}
    </ul>
    <div class="hint">Usa ← → o los botones · hay piezas que puedes tocar</div>
  `
};
agregarPestana(PESTANA_PORTADA);

var PESTANA_INTRO = {
  id: 'intro',
  alineacion: 'L',
  motor3D: { x: 2.4, s: 1.1, rx: .2, ry: .9, spin: 1, rot: 1.6 },
  html: `
    <svg class="plane" viewBox="0 0 140 56">
      <ellipse cx="62" cy="30" rx="38" ry="8" fill="var(--primario)"/>
      <rect x="34" y="12" width="54" height="6" rx="3" fill="var(--acento)"/>
      <rect x="34" y="38" width="54" height="6" rx="3" fill="var(--acento)"/>
      <polygon points="96,30 122,18 122,32" fill="var(--primario)"/>
      <rect x="20" y="14" width="3" height="32" rx="1.5" fill="#fff"/>
    </svg>
    <h2>Introducción</h2>
    <p class="big">
      ¿Viste alguna vez un avión antiguo con los cilindros formando una estrella?
      Ese es un <b style="color:var(--acento)">motor radial</b>: 7 cilindros alrededor de un solo cigüeñal, enfriados por aire.<br><br>
      Hoy descubrirás cómo funciona, pieza por pieza, y por qué cambió la aviación.
    </p>
  `
};
agregarPestana(PESTANA_INTRO);
```

---

### Archivo: `js/pestanas/02_combustion_historia.js`

```javascript
/* =========================================================
   PESTAÑAS: COMBUSTIÓN E HISTORIA (VARIABLES GLOBALES)
   ========================================================= */

var PESTANA_COMBUSTION = {
  id: 'combustion',
  alineacion: '',
  html: `
    <h2>¿Cómo funciona la combustión?</h2>
    <div class="row">
      <canvas id="c3" width="360" height="400"></canvas>
      <div>
        <ol class="st">
          ${ST.map((s, i) => `<li data-s="${i}"><b>${i + 1} · ${s[0]}</b>${s[1]}</li>`).join('')}
        </ol>
      </div>
    </div>
    <div class="note">1 ciclo = 2 vueltas del cigüeñal · solo el tiempo 3 produce trabajo</div>
  `
};
agregarPestana(PESTANA_COMBUSTION);

var PESTANA_HISTORIA_MOTOR = {
  id: 'historia-combustion',
  alineacion: '',
  html: `
    <h2>¿Quién creó el motor de combustión?</h2>
    ${tl(H4)}
    <div class="note">
      <b>No fue una sola persona:</b> Otto hizo práctico el motor de cuatro tiempos (1876)
      y Benz lo llevó al automóvil (1885). Antecedente: Huygens, motor de pólvora (1678).
    </div>
  `
};
agregarPestana(PESTANA_HISTORIA_MOTOR);
```

---

### Archivo: `js/pestanas/03_aviacion_estrella.js`

```javascript
/* =========================================================
   PESTAÑAS: AVIACIÓN Y MOTOR DE ESTRELLA (VARIABLES GLOBALES)
   ========================================================= */

var PESTANA_AVIACION = {
  id: 'aviacion',
  alineacion: '',
  html: `
    <h2>Los primeros motores de aviación</h2>
    <div class="g">
      ${card('inline', '1903 · En línea', 'Wright Flyer', '4 cilindros en línea, refrigerado por agua. ~12 hp y 81 kg. Hecho por Charlie Taylor y los hermanos Wright.', 0)}
      ${card('v', '1905 · En V', 'Antoinette V8', '8 cilindros en V a 90°, ~50 hp y ~50 kg (Léon Levavasseur). Su relación potencia-peso no se igualó en ~25 años.', 1)}
      ${card('radial', '1908 · Rotativo', 'Gnome', 'Cilindros en estrella enfriados por aire que giran junto con la hélice. Dominó la aviación de la Primera Guerra.', 2)}
    </div>
    <div class="note">
      <b>El reto:</b> más potencia con menos peso. El agua, el radiador y las tuberías pesan:
      la idea fue enfriar con aire y repartir los cilindros alrededor de un solo cigüeñal.
    </div>
  `
};
agregarPestana(PESTANA_AVIACION);

var PESTANA_HISTORIA_RADIAL = {
  id: 'historia-radial',
  alineacion: '',
  html: `
    <h2>Nace el motor de estrella</h2>
    ${tl(H6)}
    <div class="note">
      El Wright J-5 propulsó al Spirit of St. Louis de Lindbergh en el primer vuelo transatlántico en solitario.
    </div>
  `
};
agregarPestana(PESTANA_HISTORIA_RADIAL);
```

---

### Archivo: `js/pestanas/04_despiece_radial.js`

```javascript
/* =========================================================
   PESTAÑAS: DESPIECE 3D, DESPIECE EN 8 IMÁGENES Y RADIAL
   ---------------------------------------------------------
   Para poner tus 8 imágenes reales:
   Guárdalas en img/ y reemplaza cada <div class="cad-slot-...">
   por su <img src="./img/..." ...> indicado en el comentario.
   ========================================================= */

var PESTANA_DESPIECE = {
  id: 'despiece',
  alineacion: 'L',
  motor3D: { x: 2.4, s: .78, rx: .5, ry: .7, e: 1, rot: .6 },
  html: `
    <h2>Despiece del motor</h2>
    <ul class="pt">
      ${PT.map(p => `<li data-p="${p[0]}"><b>${p[1]}</b>${p[2]}</li>`).join('')}
    </ul>
    <div class="hint">Se une y separa solo cada 20 s · pasa el cursor por una pieza para verla brillar</div>
  `
};
agregarPestana(PESTANA_DESPIECE);

// Colores e imágenes de las 7 piezas para la ventana estilo CAD
const CAD_PIEZAS = [
  ['PISTÓN', 'Sube y baja en el cilindro al recibir la fuerza de la combustión.', '#a855f7', 'pieza_piston.png', ''],
  ['BIELA', 'Une el pistón con el cigüeñal y convierte su vaivén en giro.', '#38bdf8', 'pieza_biela.png', ''],
  ['BIELA AUXILIAR', 'Se articula en la biela principal para mover los demás pistones.', '#ff7a18', 'pieza_biela_aux.png', ''],
  ['CIGÜEÑAL', 'Convierte el vaivén del pistón en giro.', '#f59e0b', 'pieza_ciguenal.png', ''],
  ['CAMISA DE SECCIÓN', 'Cilindro donde se desliza el pistón.', '#10b981', 'pieza_camisa.png', ''],
  ['TAPETA', 'Tapa que cierra y sella el cilindro.', '#06b6d4', 'pieza_tapeta.png', ''],
  ['CUERPO', 'Bloque central que sostiene los cilindros y aloja el cigüeñal.', '#34d399', 'pieza_cuerpo.png', 'full']
];

var PESTANA_DESPIECE_FICHAS = {
  id: 'despiece-fichas',
  alineacion: '',
  html: `
    <h2>Motor de estrella</h2>
    <div class="cad-sub">Así es por dentro: 7 piezas que convierten explosiones en giro</div>
    <div class="cad-grid">
      <div class="cad-left">
        <div class="cad-hero">
          <!-- IMAGEN 1 DE 8: reemplaza el div de abajo por: <img src="./img/despiece_completo.png" alt="Despiece completo"> -->
          <div class="cad-slot-hero">
            <div>📷 Espacio Imagen 1 de 8 (Diagrama completo)<small>./img/despiece_completo.png</small></div>
          </div>
        </div>
        <div class="cad-flow-box">
          <b>¿CÓMO FUNCIONA?</b>
          Combustión → el pistón baja → la biela empuja → el cigüeñal gira → ¡la hélice gira!
        </div>
      </div>

      <div class="cad-right">
        ${CAD_PIEZAS.map((p, i) => `
          <div class="cad-card ${p[4]}" style="--col:${p[2]}" data-ci="${i}">
            <!-- IMAGEN ${i + 2} DE 8: reemplaza el div de abajo por: <img class="cad-thumb" src="./img/${p[3]}" alt="${p[0]}"> -->
            <div class="cad-slot-mini">📷 Img ${i + 2}<br>${p[3]}</div>
            <div>
              <b>${p[0]}</b>
              <p>${p[1]}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
};
agregarPestana(PESTANA_DESPIECE_FICHAS);

var PESTANA_RADIAL = {
  id: 'radial',
  alineacion: 'L',
  motor3D: { x: 2.4, s: 1.1 },
  html: `
    <h2>Funcionamiento radial</h2>
    <p class="big">
      Vista frontal: los 7 cilindros comparten un solo cigüeñal. Una biela maestra y bielas auxiliares mueven los pistones.
      Como son 7 (impar), los encendidos saltan de cilindro en cilindro y el motor gira suave.
    </p>
    <h5>ORDEN DE ENCENDIDO 1-3-5-7-2-4-6</h5>
    <div id="ord">${[1, 2, 3, 4, 5, 6, 7].map(n => `<i>${n}</i>`).join('')}</div>
    <label>Velocidad <input id="sp" type="range" min="0" max="3" step=".1" value="1"></label>
  `
};
agregarPestana(PESTANA_RADIAL);
```

---

### Archivo: `js/pestanas/05_ventas.js`

```javascript
/* =========================================================
   PESTAÑAS: EN LÍNEA, EN V, VENTAS, EJERCICIO POR VENTANAS,
   EVIDENCIAS Y REFERENCIAS
   ========================================================= */

var PESTANA_LINEA = {
  id: 'linea',
  alineacion: '',
  html: `
    <h2>Motor en línea</h2>
    <div class="row">
      <canvas id="c9" width="560" height="380"></canvas>
      <p class="big">
        Los cilindros van alineados, uno tras otro, sobre un mismo cigüeñal.
        Es largo y estrecho. Ejemplo: el Wright Flyer de 1903, con 4 cilindros en línea.
      </p>
    </div>
  `
};
agregarPestana(PESTANA_LINEA);

var PESTANA_V = {
  id: 'v',
  alineacion: '',
  html: `
    <h2>Motor en V</h2>
    <div class="row">
      <canvas id="c10" width="560" height="380"></canvas>
      <p class="big">
        Dos bancos de cilindros forman una «V» y comparten el cigüeñal: queda más corto y compacto que el motor en línea.
        Ejemplo: el Antoinette V8 (1905), con 8 cilindros en V a 90°.
      </p>
    </div>
  `
};
agregarPestana(PESTANA_V);

var PESTANA_VENTAS = {
  id: 'ventas',
  alineacion: '',
  html: `
    <h2>Ventas y Piezas</h2>
    <div class="g">
      <div class="c" style="--i:0">
        <!-- <img class="foto" src="./img/pieza1.jpg" alt="Motor completo"> -->
        <div class="slot-img">📷 Espacio para foto 1<small>./img/pieza1.jpg</small></div>
        <b>01 · Modelo</b>
        <h4>Motor Radial Completo</h4>
        <p>Describe aquí el prototipo, dimensiones o kit educativo.</p>
      </div>
      <div class="c" style="--i:1">
        <!-- <img class="foto" src="./img/pieza2.jpg" alt="Pistón y biela"> -->
        <div class="slot-img">📷 Espacio para foto 2<small>./img/pieza2.jpg</small></div>
        <b>02 · Detalle</b>
        <h4>Componentes y Materiales</h4>
        <p>Describe aquí ventajas, materiales o acabados de las piezas.</p>
      </div>
      <div class="c" style="--i:2">
        <!-- <img class="foto" src="./img/pieza3.jpg" alt="Paquete / contacto"> -->
        <div class="slot-img">📷 Espacio para foto 3<small>./img/pieza3.jpg</small></div>
        <b>03 · Oferta</b>
        <h4>Precio y Contacto</h4>
        <p>Agrega aquí costos, paquetes o datos de contacto.</p>
      </div>
    </div>
    <div class="note">Edita los textos y rutas de fotos en <b>js/pestanas/05_ventas.js</b>.</div>
  `
};
agregarPestana(PESTANA_VENTAS);

// ---- VENTANA 1: PLANTEAMIENTO DEL PROBLEMA ----
var PESTANA_EJERCICIO_1 = {
  id: 'ejercicio-problema',
  alineacion: '',
  html: `
    <h2>Planteamiento del Problema</h2>
    <div class="g2">
      <div class="c" style="--i:0;display:flex;flex-direction:column;justify-content:center;gap:1.8vh">
        <p class="big" style="line-height:1.65">
          Durante una inspección de rutina en planta, se detecta que un motor estrella de
          <b>3 cilindros</b> que acciona un compresor de aire está trabajando por debajo de su velocidad nominal.
          El equipo únicamente cuenta con instrumentación básica de tablero, registrando una velocidad de
          <span class="ltx"><var>n</var> = 900 rpm</span> y un consumo de diésel de
          <span class="ltx"><span class="mdot">m</span><sub>f</sub> = 3.6 kg/h</span>
          (<span class="ltx"><var>PCI</var> = 42,000 kJ/kg</span>).
          De acuerdo con la ficha técnica del fabricante, a ese régimen el motor mantiene un torque constante de
          <span class="ltx"><var>T</var> = 100 N·m</span>.
        </p>
        <div class="note" style="font-size:1.15em">
          <b>¿El motor está en condiciones seguras de continuar?</b>
        </div>
      </div>

      <div class="c" style="--i:1;display:flex;flex-direction:column;justify-content:center">
        <!-- Reemplaza por: <img class="foto" style="height:42vh" src="./img/compresor.jpg" alt="Motor estrella en planta"> -->
        <div class="slot-img" style="height:42vh;margin-bottom:0">
          <div>📷 Espacio para imagen del motor / compresor<small>./img/compresor.jpg</small></div>
        </div>
      </div>
    </div>
  `
};
agregarPestana(PESTANA_EJERCICIO_1);

// ---- VENTANA 2: ECUACIONES FUNDAMENTALES (SOLO LETRAS, 10 s) ----
var PESTANA_EJERCICIO_FUND = {
  id: 'ejercicio-fundamentales',
  alineacion: '',
  html: `
    <h2>Ecuaciones Fundamentales</h2>
    <div class="eq-box ltx">
      <div class="eq-grid2">
        <div class="eq-lg paso" data-t="0">
          <var>W</var> = <var>F</var> · <var>d</var>
        </div>
        <div class="eq-lg paso" data-t="2">
          <var>P</var><sub>mec</sub> = <var>T</var> · <var>ω</var>
          &nbsp;&nbsp;,&nbsp;&nbsp;
          <var>ω</var> = <span class="frac"><span>2<var>π</var> <var>n</var></span><span>60</span></span>
        </div>
        <div class="eq-lg paso" data-t="4">
          <var>P</var><sub>comb</sub> = <span class="frac"><span><span class="mdot">m</span><sub>f</sub> · <var>PCI</var></span><span>3600</span></span>
        </div>
        <div class="eq-lg paso" data-t="6">
          <var>P</var><sub>pérdidas</sub> = <var>P</var><sub>comb</sub> − <var>P</var><sub>mec</sub>
        </div>
        <div class="eq-lg paso" data-t="8">
          <var>BSFC</var> = <span class="frac"><span><span class="mdot">m</span><sub>f</sub></span><span><var>P</var><sub>mec</sub></span></span>
        </div>
        <div class="eq-lg paso" data-t="8">
          Δ<var>D</var> = <var>D</var><sub>0</sub> · <var>α</var> · Δ<var>T</var>
        </div>
      </div>
    </div>
    <div class="note paso" data-t="9">
      Partimos de estas leyes físicas fundamentales antes de sustituir los datos medidos en planta.
    </div>
  `
};
agregarPestana(PESTANA_EJERCICIO_FUND);

// ---- VENTANA 3: OPERACIÓN 1 — POTENCIA MECÁNICA ----
var PESTANA_EJERCICIO_OP1 = {
  id: 'ejercicio-op1',
  alineacion: '',
  html: `
    <h2>1 · Potencia Mecánica (<span class="ltx"><var>P</var><sub>mec</sub></span>)</h2>
    <div class="eq-box ltx">
      <div class="eq-lg paso" data-t="0">
        <var>ω</var> = <span class="frac"><span>2<var>π</var> <var>n</var></span><span>60</span></span>
        = <span class="frac"><span>2<var>π</var> (900)</span><span>60</span></span>
        = <b>94.25 rad/s</b>
      </div>
      <div class="eq-lg paso" data-t="2">
        <var>P</var><sub>mec</sub> = <var>T</var> · <var>ω</var>
        = (100 N·m)(94.25 rad/s)
        = <b>9,425 W</b>
      </div>
      <div class="eq-lg res paso" data-t="4">
        <var>P</var><sub>mec</sub> = <b>9.43 kW</b>
      </div>
    </div>
    <div class="note paso" data-t="4">
      Es la potencia mecánica útil real que llega al eje del compresor sin usar torquímetro.
    </div>
  `
};
agregarPestana(PESTANA_EJERCICIO_OP1);

// ---- VENTANA 4: OPERACIÓN 2 — BALANCE ENERGÉTICO ----
var PESTANA_EJERCICIO_OP2 = {
  id: 'ejercicio-op2',
  alineacion: '',
  html: `
    <h2>2 · Balance Energético (<span class="ltx"><var>P</var><sub>comb</sub></span> y <span class="ltx"><var>P</var><sub>pérdidas</sub></span>)</h2>
    <div class="eq-box ltx">
      <div class="eq-lg paso" data-t="0">
        <var>P</var><sub>comb</sub> = <span class="frac"><span><span class="mdot">m</span><sub>f</sub> · <var>PCI</var></span><span>3600</span></span>
        = <span class="frac"><span>(3.6)(42,000)</span><span>3600</span></span>
        = <b>42.00 kW</b>
      </div>
      <div class="eq-lg paso" data-t="2">
        <var>P</var><sub>pérdidas</sub> = <var>P</var><sub>comb</sub> − <var>P</var><sub>mec</sub>
        = 42.00 − 9.43
        = <b>32.57 kW</b>
      </div>
      <div class="eq-lg res paso" data-t="4">
        Por cilindro = <span class="frac"><span>32.57</span><span>3</span></span> = <b>10.86 kW/cil</b>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        Razón = <span class="frac"><span>32.57</span><span>9.43</span></span> = <b>3.45× más calor que trabajo</b>
      </div>
    </div>
    <div class="note paso" data-t="4">
      De cada 42 kW de diésel quemado, más de tres cuartas partes salen convertidas en calor al cuarto.
    </div>
  `
};
agregarPestana(PESTANA_EJERCICIO_OP2);

// ---- VENTANA 5: OPERACIÓN 3 — CONSUMO Y DILATACIÓN ----
var PESTANA_EJERCICIO_OP3 = {
  id: 'ejercicio-op3',
  alineacion: '',
  html: `
    <h2>3 · Consumo (<span class="ltx"><var>BSFC</var></span>) y Dilatación (<span class="ltx">Δ<var>D</var></span>)</h2>
    <div class="eq-box ltx">
      <div class="eq-lg paso" data-t="0">
        <var>BSFC</var> = <span class="frac"><span><span class="mdot">m</span><sub>f</sub></span><span><var>P</var><sub>mec</sub></span></span>
        = <span class="frac"><span>3,600 g/h</span><span>9.43 kW</span></span>
        = <b>382 g/kW·h</b> &nbsp;<small style="color:#9fb4d8">(normal ~220 g/kW·h)</small>
      </div>
      <div class="eq-lg paso" data-t="2">
        Δ<var>D</var><sub>Al</sub> = (100)(23×10<sup>−6</sup>)(75) = <b>0.173 mm</b>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        Δ<var>D</var><sub>Ac</sub> = (100)(12×10<sup>−6</sup>)(25) = <b>0.030 mm</b>
      </div>
      <div class="eq-lg res paso" data-t="4">
        Cierre = Δ<var>D</var><sub>Al</sub> − Δ<var>D</var><sub>Ac</sub>
        = 0.173 − 0.030 = <b>0.143 mm &gt; 0.080 mm</b>
      </div>
    </div>
    <div class="note paso" data-t="4">
      El aluminio del pistón dilata casi el doble que el acero: rompe la película de aceite y genera fricción crítica.
    </div>
  `
};
agregarPestana(PESTANA_EJERCICIO_OP3);

// ---- VENTANA 6: INTERPRETACIÓN FINAL + VISUALIZACIÓN 3 CILINDROS ----
var PESTANA_EJERCICIO_3 = {
  id: 'ejercicio-interpretacion',
  alineacion: '',
  html: `
    <h2>Interpretación Final</h2>
    <div class="c" style="--i:0;padding:.65vw 1vw">
      <p style="font-size:.96em;line-height:1.45;color:#cfe0ff">
        Aunque el tablero básico no muestre alarmas avanzadas, el balance energético demuestra que mantener el equipo trabajando en estas condiciones
        <b>desperdicia combustible</b> y somete el cuarto de máquinas y los 3 cilindros a una
        <b>carga térmica crítica (<span class="ltx"><span id="t_pp">32.57</span> kW</span>)</b>,
        con alto riesgo de desgaste acelerado en bielas/pistones o falla por sobrecalentamiento.
      </p>
    </div>

    <div class="sim-grid">
      <div class="sim-canvas-wrap">
        <canvas id="c_sim3" width="440" height="320"></canvas>
      </div>

      <div class="sim-right">
        <div class="sim">
          <label><span class="ltx"><var>n</var></span>: <input id="in_rpm" type="range" min="600" max="1800" step="50" value="900"> <b id="val_rpm">900 rpm</b></label>
          <label><span class="ltx"><span class="mdot">m</span><sub>f</sub></span>: <input id="in_mf" type="range" min="1.5" max="6.0" step="0.1" value="3.6"> <b id="val_mf">3.6 kg/h</b></label>
          <button id="btn_reset">Restablecer</button>
        </div>

        <div class="sim-metrics">
          <div class="c"><b><span class="ltx"><var>P</var><sub>mec</sub></span></b><h4 id="o_pm">9.43 kW</h4><p>Potencia útil al eje</p></div>
          <div class="c"><b><span class="ltx"><var>P</var><sub>pérdidas</sub></span></b><h4 id="o_pp">32.57 kW</h4><p id="o_cil">10.86 kW / cilindro</p></div>
          <div class="c"><b><span class="ltx"><var>BSFC</var></span></b><h4 id="o_bsfc">382 g/kW·h</h4><p>Promedio normal ~220</p></div>
          <div class="c"><b><span class="ltx">Δ<var>D</var></span> cierre</b><h4 id="o_cierre">0.143 mm</h4><p>Película aceite 0.080 mm</p></div>
        </div>

        <!-- Rectángulo indicador rojo / verde sin texto -->
        <div id="o_alerta" class="estado-luz"></div>
      </div>
    </div>
  `
};
agregarPestana(PESTANA_EJERCICIO_3);

var PESTANA_EVIDENCIAS = {
  id: 'evidencias',
  alineacion: '',
  html: `
    <h2>Evidencias y Piezas del Proyecto</h2>
    <div class="g">
      <div class="c" style="--i:0">
        <!-- <img class="foto" src="./img/evidencia1.jpg" alt="Evidencia 1"> -->
        <div class="slot-img">📷 Foto de pieza / armado 1<small>./img/evidencia1.jpg</small></div>
        <h4>Pieza / Proceso 1</h4>
        <p>Agrega aquí la descripción de esta pieza o prueba.</p>
      </div>
      <div class="c" style="--i:1">
        <!-- <img class="foto" src="./img/evidencia2.jpg" alt="Evidencia 2"> -->
        <div class="slot-img">📷 Foto de pieza / armado 2<small>./img/evidencia2.jpg</small></div>
        <h4>Pieza / Proceso 2</h4>
        <p>Agrega aquí la descripción de esta pieza o prueba.</p>
      </div>
      <div class="c" style="--i:2">
        <!-- <img class="foto" src="./img/evidencia3.jpg" alt="Evidencia 3"> -->
        <div class="slot-img">📷 Foto de pieza / armado 3<small>./img/evidencia3.jpg</small></div>
        <h4>Pieza / Proceso 3</h4>
        <p>Agrega aquí la descripción de esta pieza o prueba.</p>
      </div>
    </div>
    <div class="note">Guarda tus fotos en <b>img/</b> y reemplaza cada recuadro punteado por su etiqueta <b>&lt;img&gt;</b>.</div>
  `
};
agregarPestana(PESTANA_EVIDENCIAS);

var PESTANA_REFERENCIAS = {
  id: 'referencias',
  alineacion: 'L',
  motor3D: { x: 2.4, s: 1, rx: .3, ry: -.6, spin: 1, rot: 5 },
  html: `
    <h2>Referencias</h2>
    <p class="big">
      Bolton, W. (2015). <i>Programmable logic controllers</i> (6th ed.). Newnes.<br>
      Siemens AG. (2023). <i>SIMATIC controllers – PLC overview</i>. https://www.siemens.com/simatic.
    </p>
  `
};
agregarPestana(PESTANA_REFERENCIAS);
```

---

### Archivo: `js/registro.js`

```javascript
/* =========================================================
   REGISTRO GLOBAL DE PESTAÑAS Y PLANTILLAS REUTILIZABLES
   ========================================================= */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const P = Math.PI;

// Lista ordenada de pestañas y mapa global por id (window.PESTANAS)
window.DIAPOSITIVAS = [];
window.PESTANAS = {};

// Agrega una variable global de pestaña al flujo de la app
function agregarPestana(pestana) {
  if (!pestana || !pestana.id) return;
  window.PESTANAS[pestana.id] = pestana;
  window.DIAPOSITIVAS.push(pestana);
}

// Plantilla de línea de tiempo (tarjetas en cuadrícula)
const tl = a => '<div class="g">' + a.map((x, i) =>
  `<div class="c" style="--i:${i}"><b>${x[0]}</b><h4>${x[1]}</h4><p>${x[2]}</p></div>`
).join('') + '</div>';

// Plantilla de tarjeta con animación 2D
const card = (t, y, n, p, i) =>
  `<div class="c" style="--i:${i}"><canvas data-t="${t}" width="300" height="170"></canvas><b>${y}</b><h4>${n}</h4><p>${p}</p></div>`;

// Datos compartidos
const TM = [
  ['AG', 'Aarón Alejandro García Mass'],
  ['AB', 'Ángel Adrián Basto Tumux'],
  ['AC', 'Ángel Ernesto Collado Hernández'],
  ['RO', 'Randy Eduardo Ortiz Zapata'],
  ['JG', 'José Alonzo González Moguel']
];

const ST = [
  ['Admisión', 'El pistón baja y entra la mezcla de aire y combustible.'],
  ['Compresión', 'Las válvulas se cierran y el pistón sube comprimiendo la mezcla.'],
  ['Combustión', 'La bujía da la chispa: la mezcla se enciende y empuja el pistón hacia abajo.'],
  ['Escape', 'El pistón sube y expulsa los gases quemados.']
];

const PT = [
  ['piston', 'PISTÓN', 'Sube y baja en el cilindro al recibir la fuerza de la combustión.'],
  ['rod', 'BIELA', 'Une el pistón con el cigüeñal y convierte su vaivén en giro.'],
  ['rod', 'BIELA AUXILIAR', 'Se articula en la biela principal para mover los demás pistones.'],
  ['crank', 'CIGÜEÑAL', 'Convierte el vaivén del pistón en giro.'],
  ['cyl', 'CAMISA DE SECCIÓN', 'Cilindro donde se desliza el pistón.'],
  ['head', 'TAPETA', 'Tapa que cierra y sella el cilindro.'],
  ['body', 'CUERPO', 'Bloque central que sostiene los cilindros y aloja el cigüeñal.']
];

const H4 = [
  ['1807', 'François Isaac de Rivaz', 'Patenta un motor de hidrógeno con encendido por chispa y lo instala en un carruaje.'],
  ['1860', 'Étienne Lenoir', 'Primer motor de gas usado comercialmente (sin compresión). ~280 construidos hacia 1867.'],
  ['1861–62', 'Alphonse Beau de Rochas', 'Describe el principio de cuatro tiempos; su patente fue declarada inválida.'],
  ['1876', 'Nikolaus Otto', 'Patenta el primer motor de cuatro tiempos práctico, con Daimler y Maybach.'],
  ['1885', 'Karl Benz', 'Patent-Motorwagen: motor de 4 tiempos en el que se considera el primer automóvil.'],
  ['1892–97', 'Rudolf Diesel', 'Propone el encendido por compresión; el primer motor funcional es de 1897.']
];

const H6 = [
  ['1901', 'Manly', 'Radial de 5 cilindros, refrigerado por agua, 52 hp a 950 rpm, para el Aerodrome de Langley.'],
  ['1903–04', 'Ellehammer', 'Primer radial refrigerado por aire: 3 cilindros (5 cilindros en 1907).'],
  ['1909–19', 'Era rotativa', 'Gnome, Le Rhône y Clerget dominan; su cigüeñal hueco limitaba el aire y combustible.'],
  ['1922', 'Lawrance J-1', 'Cilindros de aluminio con camisa de acero: 300 h sin fallar (lo normal eran 50).'],
  ['1925', 'Whirlwind y Wasp', 'Wright J-5 (225 hp), «el primer motor realmente fiable»; nace Pratt & Whitney con el R-1340 Wasp.'],
  ['1939–45', 'Segunda Guerra', 'R-2800 Double Wasp: 125 334 fabricados. Después, 28 cilindros (R-4360) y el relevo de los jets.']
];
```

---

### Archivo: `manifest.json`

```json
{
  "name": "Motor Radial — App Interactiva",
  "short_name": "Motor Radial",
  "description": "Presentación interactiva 3D y 2D sobre el funcionamiento e historia del motor radial.",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "orientation": "landscape",
  "background_color": "#060b18",
  "theme_color": "#060b18",
  "icons": [
    {
      "src": "./img/icon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}
```

---

### Archivo: `sw.js`

```javascript
/* =========================================================
   SERVICE WORKER (CACHÉ OFFLINE + ACTUALIZACIÓN AUTOMÁTICA)
   Si agregas un archivo nuevo en js/pestanas/, añádelo a ARCHIVOS.
   ========================================================= */

const CACHE = 'motor-radial-v2';

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
```

---

