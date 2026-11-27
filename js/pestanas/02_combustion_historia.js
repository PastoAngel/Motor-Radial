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

