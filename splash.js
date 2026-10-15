/* ================= SPLASH SCREEN =================
   A lattice of nodes, each joined to its three nearest neighbours, drifts across the
   screen. A whirl opens it up, then the nodes near the letters of the name lean onto
   their outlines so the word appears out of the web. The cursor pushes the web aside
   and lights it gold; a click sends a ripple. "Enter the site" (or Enter / Escape)
   whirls it away. Shown once per visit (sessionStorage).

   Plain Canvas 2D, no libraries. Loaded right after the #splash markup in index.html.
   Change WORD below to change the name. */
(function () {
  "use strict";

  var WORD = "Aszad";
  var FONT_FAMILY = '"Lexend", "Segoe UI", system-ui, sans-serif';
  var FONT_WEIGHT = 700;
  var INK = "92, 198, 206";    // the web: the site's light teal (--accent-light)
  var HOT = "227, 196, 91";    // around the cursor: the site's gold (--gold-light)

  var splash = document.getElementById("splash");
  if (!splash) return;

  var seen = false;
  try { seen = sessionStorage.getItem("splashSeen") === "1"; } catch (e) {}
  if (seen) { splash.remove(); return; }

  var canvas = splash.querySelector("canvas");
  var ctx = canvas && canvas.getContext && canvas.getContext("2d");
  var enterBtn = document.getElementById("splashEnter");
  if (!ctx) { splash.remove(); return; }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("splash-lock");

  /* ---------- tuning ---------- */
  var K_HOME = 14;         // spring back to a node's place in the lattice, 1/s²
  var K_CAPTURE = 110;     // spring for a node the letters have caught
  var PULL = 2.6;          // how far (in cells) a node may lean onto a letter's outline
  var DRIFT = 2.4;         // gentle flow-noise drift, cells/s²
  var DAMPING = 5.5;       // velocity lost per second
  var POINTER_RADIUS = 150;
  var K_POINTER = 2200;
  var PULSE_SPEED = 720, PULSE_WIDTH = 64, K_PULSE = 5200, PULSE_DECAY = 1.6, PULSE_LIFE = 2.2;
  var SWIRL_SPIN = 3000;   // whirl: tangential push at its core, px/s²
  var SWIRL_PULL = 900;    // whirl: inward pull at its core (falls off twice as fast as the spin)
  var SWIRL_RADIUS = 0.6;  // whirl reach, as a share of the screen's short side: the whole web turns

  // Timeline, in seconds. The whirl is still winding down while the word gathers,
  // so the letters form inside the turning web.
  var T = {
    fadeIn: 0.35,
    swirlUp: 0.5, swirlHold: 1.5, swirlDown: 2.8,
    wordFrom: 1.8, wordAt: 3.0,
    actionsAt: 2.5,
    autoEnter: 7,          // enters by itself if the visitor does nothing (not while they play with the cursor)
    releaseFor: 0.9, fadeFrom: 0.15, fadeFor: 0.75
  };
  var SDF_STEP = 2;        // resolution of the letter distance field, px per texel

  /* ---------- state ---------- */
  var W = 0, H = 0, dpr = 1, cell = 12, n = 0;
  var px, py, vx, vy, hx, hy, lx, ly, capture, seed, look, edges;
  var sdf = null, sdfW = 0, sdfH = 0, far = 1e4, rim = 8;
  var pointer = { x: 0, y: 0, on: 0 };
  var pulse = { x: 0, y: 0, at: -1 };
  var time = 0, clock = 0, released = -1, ready = false, finished = false, raf = 0, last = 0;
  var wordGain = 0, swirl = 0, lastPlay = -10;

  /* ---------- helpers ---------- */
  function smooth(a, b, x) { var t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function hash(x, y) {
    var h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return h - Math.floor(h);
  }
  function valueNoise(x, y) {
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    var a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  }

  /* Exact Euclidean distance transform (Felzenszwalb & Huttenlocher), 1-D pass. */
  var INF = 1e20;
  function edt1d(f, len, d, v, z) {
    var k = 0, q, s;
    v[0] = 0; z[0] = -INF; z[1] = INF;
    for (q = 1; q < len; q++) {
      s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      while (s <= z[k]) { k--; s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]); }
      k++; v[k] = q; z[k] = s; z[k + 1] = INF;
    }
    k = 0;
    for (q = 0; q < len; q++) { while (z[k + 1] < q) k++; d[q] = (q - v[k]) * (q - v[k]) + f[v[k]]; }
  }
  function edt2d(grid, w, h) {
    var m = Math.max(w, h), f = new Float64Array(m), d = new Float64Array(m),
        v = new Int32Array(m), z = new Float64Array(m + 1), x, y;
    for (x = 0; x < w; x++) {
      for (y = 0; y < h; y++) f[y] = grid[y * w + x];
      edt1d(f, h, d, v, z);
      for (y = 0; y < h; y++) grid[y * w + x] = d[y];
    }
    for (y = 0; y < h; y++) {
      var row = y * w;
      for (x = 0; x < w; x++) f[x] = grid[row + x];
      edt1d(f, w, d, v, z);
      for (x = 0; x < w; x++) grid[row + x] = d[x];
    }
  }

  /* ---------- the word: signed distance to the letters' outline, in px ---------- */
  function buildField() {
    sdfW = Math.ceil(W / SDF_STEP); sdfH = Math.ceil(H / SDF_STEP);
    var off = document.createElement("canvas");
    off.width = sdfW; off.height = sdfH;
    var o = off.getContext("2d", { willReadFrequently: true });

    o.font = FONT_WEIGHT + " 100px " + FONT_FAMILY;
    var m = o.measureText(WORD);
    var asc = m.actualBoundingBoxAscent || 72, desc = m.actualBoundingBoxDescent || 2;
    var tw = m.width, th = asc + desc;
    var size = 100 * Math.min(W * (W < 640 ? 0.86 : 0.7) / tw, H * 0.42 / th);
    var wordH = th * size / 100;
    var baseline = H * 0.45 + (asc - desc) / 2 * size / 100;

    o.setTransform(1 / SDF_STEP, 0, 0, 1 / SDF_STEP, 0, 0);
    o.font = FONT_WEIGHT + " " + size + "px " + FONT_FAMILY;
    o.textAlign = "center"; o.textBaseline = "alphabetic"; o.fillStyle = "#000";
    o.fillText(WORD, W / 2, baseline);

    var alpha = o.getImageData(0, 0, sdfW, sdfH).data, count = sdfW * sdfH;
    var toIn = new Float64Array(count), toOut = new Float64Array(count), i;
    for (i = 0; i < count; i++) {
      var inside = alpha[i * 4 + 3] >= 128;
      toIn[i] = inside ? 0 : INF;
      toOut[i] = inside ? INF : 0;
    }
    edt2d(toIn, sdfW, sdfH); edt2d(toOut, sdfW, sdfH);

    far = wordH * 0.5;
    sdf = new Float32Array(count);
    for (i = 0; i < count; i++) {
      var dd = toIn[i] > 0 ? Math.sqrt(toIn[i]) - 0.5 : -(Math.sqrt(toOut[i]) - 0.5);
      dd *= SDF_STEP;
      sdf[i] = dd < -far ? -far : dd > far ? far : dd;
    }
    rim = Math.max(4, wordH * 0.04);
    return wordH;
  }

  function sdfAt(x, y) {
    var ix = (x / SDF_STEP) | 0, iy = (y / SDF_STEP) | 0;
    if (x < 0 || y < 0 || ix >= sdfW || iy >= sdfH) return far;
    return sdf[iy * sdfW + ix];
  }

  /* ---------- the lattice ---------- */
  function build() {
    var rect = splash.getBoundingClientRect();
    W = Math.max(1, Math.round(rect.width)); H = Math.max(1, Math.round(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);

    var wordH = buildField();
    var reach = 0.22 * wordH;

    // ~130 px² of screen per node, finer when the word is small (phones) so the
    // letters stay several cells thick and readable.
    cell = Math.max(5, Math.min(Math.sqrt(130), wordH / 22));
    var cols = Math.ceil(W / cell) + 3, rows = Math.ceil(H / cell) + 3;
    while (cols * rows > 16000) { cell *= 1.08; cols = Math.ceil(W / cell) + 3; rows = Math.ceil(H / cell) + 3; }
    n = cols * rows;

    px = new Float32Array(n); py = new Float32Array(n); vx = new Float32Array(n); vy = new Float32Array(n);
    hx = new Float32Array(n); hy = new Float32Array(n); lx = new Float32Array(n); ly = new Float32Array(n);
    capture = new Float32Array(n); seed = new Float32Array(n); look = new Uint8Array(n);

    var rand = mulberry32(23713), jitter = 0.78, c, r, i;
    for (r = 0; r < rows; r++) for (c = 0; c < cols; c++) {
      i = r * cols + c;
      hx[i] = px[i] = (c - 1.5 + 0.5 + (rand() - 0.5) * jitter) * cell;
      hy[i] = py[i] = (r - 1.5 + 0.5 + (rand() - 0.5) * jitter) * cell;
      seed[i] = rand();

      // How this node leans onto the outline once the word has formed: toward the
      // nearest edge of a letter, from outside or inside, by at most PULL cells.
      var d = sdfAt(hx[i], hy[i]), e = Math.max(1, 0.5 * cell);
      var gx = sdfAt(hx[i] + e, hy[i]) - sdfAt(hx[i] - e, hy[i]);
      var gy = sdfAt(hx[i], hy[i] + e) - sdfAt(hx[i], hy[i] - e);
      var gl = Math.hypot(gx, gy);
      var w = Math.pow(1 - smooth(0, reach, Math.abs(d)), 1.5);
      capture[i] = w;
      if (gl > 1e-4 && w > 0) {
        var move = Math.min(Math.abs(d), PULL * cell * w) * (d > 0 ? -1 : 1);
        lx[i] = gx / gl * move; ly[i] = gy / gl * move;
      }
    }

    // Each node joins its three nearest neighbours (searched in the 5x5 cells around it).
    var list = [], seenPair = {}, best = [];
    for (r = 0; r < rows; r++) for (c = 0; c < cols; c++) {
      i = r * cols + c; best.length = 0;
      for (var rr = Math.max(0, r - 2); rr <= Math.min(rows - 1, r + 2); rr++)
        for (var cc = Math.max(0, c - 2); cc <= Math.min(cols - 1, c + 2); cc++) {
          var j = rr * cols + cc;
          if (j === i) continue;
          var dist = (hx[i] - hx[j]) * (hx[i] - hx[j]) + (hy[i] - hy[j]) * (hy[i] - hy[j]);
          if (best.length < 3) best.push([j, dist]);
          else if (dist < best[2][1]) best[2] = [j, dist];
          else continue;
          best.sort(function (a, b) { return a[1] - b[1]; });
        }
      for (var b = 0; b < best.length; b++) {
        var a1 = Math.min(i, best[b][0]), a2 = Math.max(i, best[b][0]), key = a1 * n + a2;
        if (!seenPair[key]) { seenPair[key] = 1; list.push(a1, a2); }
      }
    }
    edges = Int32Array.from(list);
  }

  /* ---------- the timeline ---------- */
  function timeline() {
    swirl = reduce ? 0 : smooth(0, T.swirlUp, time) * (1 - smooth(T.swirlHold, T.swirlDown, time));
    wordGain = reduce ? 1 : smooth(T.wordFrom, T.wordAt, time);
    canvas.style.opacity = (reduce ? 1 : smooth(0, T.fadeIn, time)).toFixed(3);

    if (released < 0 && !reduce && time >= T.autoEnter && time - lastPlay > 1.5) enter();
    if (released >= 0) {
      var h = time - released;
      wordGain = Math.min(wordGain, 1 - smooth(0, T.releaseFor, h));
      splash.style.opacity = (1 - smooth(T.fadeFrom, T.fadeFrom + T.fadeFor, h)).toFixed(3);
    }
    if (!ready && (reduce || time >= T.actionsAt)) {
      ready = true; splash.classList.add("is-ready");
      if (enterBtn) try { enterBtn.focus({ preventScroll: true }); } catch (e) { enterBtn.focus(); }
    }
  }

  /* ---------- physics ---------- */
  function step(dt) {
    var cx = W / 2, cy = H / 2, sr = SWIRL_RADIUS * Math.min(W, H);
    var spin = SWIRL_SPIN * swirl, pull = SWIRL_PULL * swirl, loosen = 1 - 0.55 * swirl;
    var kHome = K_HOME * loosen, damp = Math.exp(-DAMPING * dt);
    var noiseScale = 0.4 / cell, drift = cell * DRIFT, nt = time * 0.06;
    var pulseAge = pulse.at >= 0 ? time - pulse.at : -1;
    if (pulseAge > PULSE_LIFE) { pulse.at = -1; pulseAge = -1; }
    var ring = pulseAge * PULSE_SPEED, pulseFade = pulseAge >= 0 ? K_PULSE * Math.exp(-pulseAge * PULSE_DECAY) : 0;

    for (var i = 0; i < n; i++) {
      var x = px[i], y = py[i];
      var w = capture[i] * wordGain;
      var k = kHome + (K_CAPTURE - kHome) * w;
      var fx = (hx[i] + lx[i] * wordGain - x) * k;
      var fy = (hy[i] + ly[i] * wordGain - y) * k;

      if (swirl > 0.001) {
        var rx = x - cx, ry = y - cy, dist = Math.sqrt(rx * rx + ry * ry) || 1;
        var fall = Math.exp(-dist / sr);
        rx /= dist; ry /= dist;
        fx += -ry * spin * fall - rx * pull * fall * fall;
        fy += rx * spin * fall - ry * pull * fall * fall;
      }

      if (!reduce) {
        var nx = hx[i] * noiseScale + seed[i] * 11 + nt, ny = hy[i] * noiseScale + seed[i] * 11 + nt, ep = 0.05;
        var dnx = valueNoise(nx + ep, ny) - valueNoise(nx - ep, ny);
        var dny = valueNoise(nx, ny + ep) - valueNoise(nx, ny - ep);
        fx += dny / (2 * ep) * drift;
        fy += -dnx / (2 * ep) * drift;
      }

      if (pointer.on) {
        var ax = x - pointer.x, ay = y - pointer.y, pr = Math.sqrt(ax * ax + ay * ay);
        if (pr < POINTER_RADIUS) {
          var pp = 1 - pr / POINTER_RADIUS, f = pp * pp * K_POINTER / Math.max(pr, 1);
          fx += ax * f; fy += ay * f;
        }
      }

      if (pulseAge >= 0) {
        var bx = x - pulse.x, by = y - pulse.y, br = Math.sqrt(bx * bx + by * by) || 1;
        var band = Math.exp(-Math.pow((br - ring) / PULSE_WIDTH, 2)) * pulseFade / br;
        fx += bx * band; fy += by * band;
      }

      vx[i] = (vx[i] + fx * dt) * damp;
      vy[i] = (vy[i] + fy * dt) * damp;
      px[i] = x + vx[i] * dt;
      py[i] = y + vy[i] * dt;
    }
  }

  /* ---------- drawing ---------- */
  function render() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    var litEdge = rim + 6, hot2 = (POINTER_RADIUS * 0.8) * (POINTER_RADIUS * 0.8), i;

    // 0 = web, 1 = on the letters, 2 = near the cursor
    for (i = 0; i < n; i++) {
      var s = 0;
      if (pointer.on) {
        var dx = px[i] - pointer.x, dy = py[i] - pointer.y;
        if (dx * dx + dy * dy < hot2) s = 2;
      }
      if (!s && wordGain > 0.05 && sdfAt(px[i], py[i]) < litEdge) s = 1;
      look[i] = s;
    }

    var maxLen2 = (2.6 * cell) * (2.6 * cell);
    var web = new Path2D(), lit = new Path2D(), hot = new Path2D();
    for (var e = 0; e < edges.length; e += 2) {
      var a = edges[e], b = edges[e + 1];
      var ex = px[a] - px[b], ey = py[a] - py[b];
      if (ex * ex + ey * ey > maxLen2) continue;   // stretched edges let go
      var p = look[a] === 2 || look[b] === 2 ? hot : (look[a] === 1 && look[b] === 1 ? lit : web);
      p.moveTo(px[a], py[a]); p.lineTo(px[b], py[b]);
    }
    ctx.lineWidth = 0.6; ctx.strokeStyle = "rgba(" + INK + ", 0.26)"; ctx.stroke(web);
    ctx.lineWidth = 0.9; ctx.strokeStyle = "rgba(" + INK + ", " + (0.26 + 0.6 * wordGain).toFixed(3) + ")"; ctx.stroke(lit);
    ctx.lineWidth = 0.9; ctx.strokeStyle = "rgba(" + HOT + ", 0.75)"; ctx.stroke(hot);

    var dots = [new Path2D(), new Path2D(), new Path2D()], sizes = [1.5, 2.6, 2.8];
    for (i = 0; i < n; i++) {
      var sz = sizes[look[i]], hs = sz / 2;
      dots[look[i]].rect(px[i] - hs, py[i] - hs, sz, sz);
    }
    ctx.fillStyle = "rgba(" + INK + ", 0.5)"; ctx.fill(dots[0]);
    ctx.fillStyle = "rgba(" + INK + ", " + (0.5 + 0.5 * wordGain).toFixed(3) + ")"; ctx.fill(dots[1]);
    ctx.fillStyle = "rgba(" + HOT + ", 0.95)"; ctx.fill(dots[2]);
  }

  /* ---------- loop ---------- */
  function frame(now) {
    raf = 0;
    var dt = last ? Math.min((now - last) / 1000, 1 / 30) : 0;
    last = now; time += dt;
    timeline();
    if (dt > 0) { var sub = dt > 1 / 50 ? 2 : 1; for (var s = 0; s < sub; s++) step(dt / sub); }
    render();
    if (released >= 0 && time > released + 0.95) return finish();
    raf = requestAnimationFrame(frame);
  }

  function settleStill() {
    // Reduced motion: place every node where it belongs, draw once.
    for (var i = 0; i < n; i++) { px[i] = hx[i] + lx[i]; py[i] = hy[i] + ly[i]; vx[i] = vy[i] = 0; }
    timeline(); render();
  }

  /* ---------- leaving ---------- */
  function enter() {
    if (released >= 0 || finished) return;
    try { sessionStorage.setItem("splashSeen", "1"); } catch (e) {}
    released = time;
    pointer.on = 0;
    // Otherwise timeline() fades the web and the overlay out and frame() calls finish().
    if (reduce) { splash.classList.add("is-leaving"); setTimeout(finish, 350); }
  }

  function finish() {
    if (finished) return;
    finished = true;
    if (raf) cancelAnimationFrame(raf);
    document.documentElement.classList.remove("splash-lock");
    window.removeEventListener("resize", onResize);
    window.removeEventListener("keydown", onKey);
    splash.classList.add("is-leaving");
    setTimeout(function () { splash.remove(); }, 600);
  }

  /* ---------- input ---------- */
  function onMove(ev) {
    if (ev.pointerType && ev.pointerType !== "mouse") return;
    var r = splash.getBoundingClientRect();
    pointer.x = ev.clientX - r.left; pointer.y = ev.clientY - r.top; pointer.on = released < 0 ? 1 : 0; lastPlay = time;
  }
  function onDown(ev) {
    if (released >= 0 || reduce || ev.target.closest(".splash-actions")) return;
    var r = splash.getBoundingClientRect();
    pulse.x = ev.clientX - r.left; pulse.y = ev.clientY - r.top; pulse.at = time; lastPlay = time;
  }
  function onKey(ev) {
    if (ev.key === "Escape" || (ev.key === "Enter" && document.activeElement === document.body)) enter();
  }
  var resizeTimer = 0;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { build(); if (reduce) settleStill(); }, 150);
  }

  splash.addEventListener("pointermove", onMove, { passive: true });
  splash.addEventListener("pointerleave", function () { pointer.on = 0; }, { passive: true });
  splash.addEventListener("pointerdown", onDown, { passive: true });
  if (enterBtn) enterBtn.addEventListener("click", enter);
  window.addEventListener("keydown", onKey);
  window.addEventListener("resize", onResize);

  /* ---------- start (once the heading font is ready, so the letters are right) ---------- */
  function start() {
    try { build(); } catch (e) { finish(); return; }
    if (reduce) settleStill();
    else raf = requestAnimationFrame(frame);
  }
  var fontReady = document.fonts && document.fonts.load
    ? document.fonts.load(FONT_WEIGHT + " 100px " + FONT_FAMILY.split(",")[0]).catch(function () {})
    : Promise.resolve();
  var timeout = new Promise(function (res) { setTimeout(res, 1500); });
  Promise.race([fontReady, timeout]).then(function () {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
    else start();
  });
})();
