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