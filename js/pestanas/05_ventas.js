/* =========================================================
   PESTAÑAS: VENTAS, EJERCICIO POR VENTANAS, MANTENIMIENTO Y REFERENCIAS
   ========================================================= */

var PESTANA_VENTAS = {
  id: 'ventas',
  alineacion: '',
  html: `
    <h2>Ventas</h2>
    <div class="g">
      <div class="c" style="--i:0">
        <img class="foto" style="height:48vh;margin-bottom:0;object-fit:contain;background:transparent;border:none" src="./img/pieza1.png" alt="Pieza 1">
      </div>
      <div class="c" style="--i:1">
        <img class="foto" style="height:48vh;margin-bottom:0;object-fit:contain;background:transparent;border:none" src="./img/pieza2.png" alt="Pieza 2">
      </div>
      <div class="c" style="--i:2">
        <img class="foto" style="height:48vh;margin-bottom:0;object-fit:contain;background:transparent;border:none" src="./img/pieza3.png" alt="Pieza 3">
      </div>
    </div>
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
        <img class="foto" style="height:42vh;margin-bottom:0;object-fit:contain;background:transparent;border:none" src="./img/compresor.png" alt="Compresor radial en planta">
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

// ---- VENTANA 7: MANTENIMIENTO (FOTO + VIDEO 1 VEZ) ----
var PESTANA_MANTENIMIENTO = {
  id: 'mantenimiento',
  alineacion: '',
  html: `
    <h2>Mantenimiento</h2>
    <div style="display:grid;grid-template-columns:.92fr 1.2fr;gap:1.4vw;align-items:center">
      <img src="./img/Imagen22.png" alt="Mantenimiento en compresor" style="width:100%;max-height:56vh;object-fit:contain;border-radius:12px;display:block">
      <video id="vid_mant" src="./img/Multimedia1.mp4" muted playsinline preload="auto" style="width:100%;max-height:56vh;object-fit:contain;border-radius:12px;display:block"></video>
    </div>
  `
};
agregarPestana(PESTANA_MANTENIMIENTO);

var PESTANA_REFERENCIAS = {
  id: 'referencias',
  alineacion: 'L',
  motor3D: { x: 2.4, s: 1, rx: .3, ry: -.6, spin: 1, rot: 5 },
  html: `
    <h2>Referencias</h2>
    <p class="big" style="line-height:1.8">
      Beer, F. P., Johnston, E. R., Jr., DeWolf, J. T., &amp; Mazurek, D. F. (2020). <i>Mechanics of materials</i> (8th ed.). McGraw-Hill Education.<br><br>
      Gunston, B. (2006). <i>World encyclopedia of aero engines: From the pioneers to the present day</i> (5th ed.). Sutton Publishing.<br><br>
      Heywood, J. B. (2018). <i>Internal combustion engine fundamentals</i> (2nd ed.). McGraw-Hill Education.
    </p>
  `
};
agregarPestana(PESTANA_REFERENCIAS);