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