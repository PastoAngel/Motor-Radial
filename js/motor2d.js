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