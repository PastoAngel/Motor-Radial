/* =========================================================
   PESTAÑAS: DESPIECE 3D, DESPIECE EN 8 IMÁGENES Y RADIAL
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
  ['PISTÓN', 'Sube y baja en el cilindro al recibir la fuerza de la combustión.', '#a855f7', 'imagen2.png', ''],
  ['BIELA', 'Une el pistón con el cigüeñal y convierte su vaivén en giro.', '#38bdf8', 'imagen3.png', ''],
  ['BIELA AUXILIAR', 'Se articula en la biela principal para mover los demás pistones.', '#ff7a18', 'imagen4.png', ''],
  ['CIGÜEÑAL', 'Convierte el vaivén del pistón en giro.', '#f59e0b', 'imagen5.png', ''],
  ['CAMISA DE SECCIÓN', 'Cilindro donde se desliza el pistón.', '#10b981', 'imagen6.png', ''],
  ['TAPETA', 'Tapa que cierra y sella el cilindro.', '#06b6d4', 'imagen7.png', ''],
  ['CUERPO', 'Bloque central que sostiene los cilindros y aloja el cigüeñal.', '#34d399', 'imagen8.png', 'full']
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
          <img src="./img/img_piezas/imagen1.png" alt="Despiece completo">
        </div>
        <div class="cad-flow-box">
          <b>¿CÓMO FUNCIONA?</b>
          Combustión → el pistón baja → la biela empuja → el cigüeñal gira → ¡la hélice gira!
        </div>
      </div>

      <div class="cad-right">
        ${CAD_PIEZAS.map((p, i) => `
          <div class="cad-card ${p[4]}" style="--col:${p[2]}" data-ci="${i}">
            <img class="cad-thumb" src="./img/img_piezas/${p[3]}" alt="${p[0]}">
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