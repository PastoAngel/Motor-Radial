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