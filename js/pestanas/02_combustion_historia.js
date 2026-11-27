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