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


