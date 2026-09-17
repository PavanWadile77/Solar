import * as THREE from 'three';

// Cache generated textures so we don't recreate them on re-renders
const textureCache = new Map<string, THREE.CanvasTexture>();

// Simplex/Perlin-like smooth noise helper for organic planetary terrain & clouds
function createPerlinNoiseGenerator(seed: number = 42) {
  const p = new Uint8Array(512);
  let s = seed;
  const pseudoRandom = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  const perm = new Uint8Array(256);
  for (let i = 0; i < 256; i++) perm[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(pseudoRandom() * (i + 1));
    const temp = perm[i];
    perm[i] = perm[j];
    perm[j] = temp;
  }
  for (let i = 0; i < 512; i++) p[i] = perm[i & 255];

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (t: number, a: number, b: number) => a + t * (b - a);
  const grad = (hash: number, x: number, y: number) => {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };

  return function noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);

    const a = p[X] + Y;
    const aa = p[a];
    const ab = p[a + 1];
    const b = p[X + 1] + Y;
    const ba = p[b];
    const bb = p[b + 1];

    return lerp(
      v,
      lerp(u, grad(p[aa], xf, yf), grad(p[ba], xf - 1, yf)),
      lerp(u, grad(p[ab], xf, yf - 1), grad(p[bb], xf - 1, yf - 1))
    );
  };
}

const noise = createPerlinNoiseGenerator(1337);

function fbm(x: number, y: number, octaves: number = 5): number {
  let value = 0;
  let amplitude = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    value += noise(x * freq, y * freq) * amplitude;
    freq *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

// ==========================================
// 1. SUN PHOTOSPHERE TEXTURE
// Realistic granular solar convection cells, sunspots with penumbra & umbra, bright faculae
// ==========================================
function generateSunTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(width, height);
  const d = imgData.data;

  // Granular convection turbulence
  for (let y = 0; y < height; y++) {
    const ny = y / height;
    // Limb darkening towards top & bottom poles for equirectangular map
    const poleDim = Math.sin(ny * Math.PI);
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const nx = x / width;

      // Multi-scale solar granulation
      const n1 = fbm(nx * 36, ny * 18, 4);
      const n2 = fbm(nx * 90, ny * 45, 3);
      const intensity = 0.72 + n1 * 0.18 + n2 * 0.1;

      // Deep solar gold to fiery bright yellow-white
      const r = Math.min(255, Math.floor(255 * intensity * (0.95 + poleDim * 0.05)));
      const g = Math.min(255, Math.floor(185 * intensity * intensity + 35));
      const b = Math.min(255, Math.floor(60 * intensity * intensity * intensity));

      d[idx] = r;
      d[idx + 1] = g;
      d[idx + 2] = b;
      d[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Add realistic Sunspot Groups (Umbra + Penumbra) in solar activity latitudes (-30° to +30°)
  const sunspotClusters = [
    { x: width * 0.28, y: height * 0.42, r: 24 },
    { x: width * 0.31, y: height * 0.44, r: 16 },
    { x: width * 0.33, y: height * 0.41, r: 11 },
    { x: width * 0.68, y: height * 0.58, r: 28 },
    { x: width * 0.71, y: height * 0.60, r: 18 },
    { x: width * 0.65, y: height * 0.56, r: 12 },
    { x: width * 0.82, y: height * 0.38, r: 19 },
    { x: width * 0.85, y: height * 0.39, r: 14 },
    { x: width * 0.14, y: height * 0.62, r: 15 },
  ];

  sunspotClusters.forEach((spot) => {
    // Bright faculae halo around sunspot
    const faculaGrad = ctx.createRadialGradient(spot.x, spot.y, spot.r * 0.8, spot.x, spot.y, spot.r * 2.2);
    faculaGrad.addColorStop(0, 'rgba(255, 245, 180, 0.45)');
    faculaGrad.addColorStop(0.5, 'rgba(255, 210, 100, 0.2)');
    faculaGrad.addColorStop(1, 'rgba(255, 150, 0, 0)');
    ctx.fillStyle = faculaGrad;
    ctx.beginPath();
    ctx.arc(spot.x, spot.y, spot.r * 2.2, 0, Math.PI * 2);
    ctx.fill();

    // Penumbra (warm dark brownish-red)
    const penumbraGrad = ctx.createRadialGradient(spot.x, spot.y, spot.r * 0.35, spot.x, spot.y, spot.r);
    penumbraGrad.addColorStop(0, '#5a1d04');
    penumbraGrad.addColorStop(0.7, '#8f380c');
    penumbraGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = penumbraGrad;
    ctx.beginPath();
    ctx.arc(spot.x, spot.y, spot.r, 0, Math.PI * 2);
    ctx.fill();

    // Umbra (dark magnetic core)
    const umbraGrad = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.r * 0.45);
    umbraGrad.addColorStop(0, '#1c0800');
    umbraGrad.addColorStop(0.8, '#320e02');
    umbraGrad.addColorStop(1, '#5a1d04');
    ctx.fillStyle = umbraGrad;
    ctx.beginPath();
    ctx.arc(spot.x, spot.y, spot.r * 0.45, 0, Math.PI * 2);
    ctx.fill();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 2. MERCURY TEXTURE
// Realistic cratered basalt/anorthosite regolith with bright ray craters and maria basins
// ==========================================
function generateMercuryTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Base grey regolith
  const imgData = ctx.createImageData(width, height);
  const d = imgData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const nx = x / width;
      const ny = y / height;

      // Multi-octave rocky terrain noise
      const n = fbm(nx * 14, ny * 14, 5) * 0.5 + 0.5;
      const nFine = fbm(nx * 60, ny * 60, 3) * 0.15;
      const val = Math.max(0, Math.min(255, Math.floor((n * 0.7 + nFine + 0.3) * 155)));

      // Subtle warm-grey mineral tint
      d[idx] = Math.min(255, val + 6);
      d[idx + 1] = Math.min(255, val + 4);
      d[idx + 2] = val;
      d[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Large impact basins (e.g. Caloris Basin)
  const basins = [
    { x: width * 0.35, y: height * 0.45, r: 140, depth: 0.3 },
    { x: width * 0.72, y: height * 0.58, r: 110, depth: 0.25 },
    { x: width * 0.18, y: height * 0.70, r: 90, depth: 0.2 },
    { x: width * 0.85, y: height * 0.32, r: 95, depth: 0.22 },
  ];

  basins.forEach(b => {
    const basinGrad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
    basinGrad.addColorStop(0, 'rgba(55, 53, 50, 0.7)');
    basinGrad.addColorStop(0.7, 'rgba(75, 73, 70, 0.4)');
    basinGrad.addColorStop(0.95, 'rgba(175, 172, 168, 0.5)'); // Rim uplift
    basinGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = basinGrad;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Hundreds of craters of varying sizes with illuminated rims & central peaks
  const rand = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  for (let i = 0; i < 400; i++) {
    const cx = rand(i * 3) * width;
    const cy = rand(i * 3 + 1) * height;
    const cr = 3 + Math.pow(rand(i * 3 + 2), 2.5) * 45;

    // Rim highlight (light from left side)
    ctx.strokeStyle = 'rgba(220, 218, 215, 0.6)';
    ctx.lineWidth = Math.max(1, cr * 0.12);
    ctx.beginPath();
    ctx.arc(cx, cy, cr, Math.PI * 0.7, Math.PI * 1.7);
    ctx.stroke();

    // Crater bowl shadow
    const cGrad = ctx.createRadialGradient(cx + cr * 0.25, cy + cr * 0.2, 0, cx, cy, cr);
    cGrad.addColorStop(0, 'rgba(30, 28, 26, 0.75)');
    cGrad.addColorStop(0.75, 'rgba(60, 58, 55, 0.4)');
    cGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = cGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
    ctx.fill();

    // Prominent ray craters with bright ejecta streaks
    if (cr > 25 && rand(i + 99) > 0.5) {
      const rayCount = 8 + Math.floor(rand(i) * 10);
      ctx.strokeStyle = 'rgba(235, 235, 230, 0.28)';
      ctx.lineWidth = 1;
      for (let r = 0; r < rayCount; r++) {
        const angle = (r / rayCount) * Math.PI * 2 + rand(r) * 0.3;
        const rayLen = cr * (2.5 + rand(r * 2) * 5.0);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
        ctx.stroke();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 3. VENUS ATMOSPHERE TEXTURE
// Opaque cream cloud cover with subtle swirling UV chevron cloud patterns
// ==========================================
function generateVenusAtmosphereTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(width, height);
  const d = imgData.data;

  for (let y = 0; y < height; y++) {
    const ny = y / height;
    const latDist = Math.abs(ny - 0.5) * 2; // 0 at equator, 1 at poles
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const nx = x / width;

      // Planetary V-shaped UV cloud wave simulation
      const wave = Math.sin(nx * Math.PI * 4 - latDist * 1.5) * 0.08;
      const n = fbm(nx * 8 + wave, ny * 12, 4);

      // Pale cream, warm ivory and soft caramel banding
      const baseR = 232 - latDist * 25 + n * 18;
      const baseG = 212 - latDist * 32 + n * 16;
      const baseB = 175 - latDist * 45 + n * 14;

      d[idx] = Math.max(0, Math.min(255, Math.floor(baseR)));
      d[idx + 1] = Math.max(0, Math.min(255, Math.floor(baseG)));
      d[idx + 2] = Math.max(0, Math.min(255, Math.floor(baseB)));
      d[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Soft atmospheric stream lines
  ctx.lineWidth = 18;
  for (let i = 0; i < 40; i++) {
    const y = (i / 40) * height;
    ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 248, 230, 0.12)' : 'rgba(180, 145, 100, 0.08)';
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(
      width * 0.33, y + Math.sin(i) * 25,
      width * 0.66, y - Math.cos(i) * 25,
      width, y
    );
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 4. EARTH DAY MAP TEXTURE
// Continents, lush vegetation, deserts, oceans with shallow shelf gradients, polar ice caps
// ==========================================
function generateEarthDayTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // 1. Deep Ocean Base with realistic bathymetry shelf
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#0c2242');
  oceanGrad.addColorStop(0.5, '#071833');
  oceanGrad.addColorStop(1, '#0c2242');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // Helper to draw realistic landmass with coastlines, desert cores and mountain ranges
  const drawContinentalPlate = (
    pts: [number, number][],
    landColor: string,
    inlandColor: string,
    shelfColor: string = 'rgba(20, 95, 140, 0.45)'
  ) => {
    // Shallow continental shelf around landmass
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 14;
    ctx.strokeStyle = shelfColor;
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath();
    ctx.stroke();

    // Landmass base
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath();
    ctx.fillStyle = landColor;
    ctx.fill();

    // Inland biome variation (mountain & desert)
    ctx.save();
    ctx.clip();
    for (let i = 0; i < 20; i++) {
      const cx = pts[0][0] + (Math.random() - 0.5) * 300;
      const cy = pts[0][1] + (Math.random() - 0.5) * 200;
      const cr = 40 + Math.random() * 80;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
      grad.addColorStop(0, inlandColor);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, cr, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  // North America
  drawContinentalPlate(
    [
      [360, 240], [480, 200], [580, 220], [680, 260], [640, 340],
      [580, 420], [540, 460], [480, 520], [420, 480], [380, 400],
      [340, 320]
    ],
    '#2d5e2a', '#8a7a40'
  );

  // South America
  drawContinentalPlate(
    [
      [540, 540], [640, 580], [700, 640], [660, 760], [600, 860],
      [560, 880], [540, 780], [500, 640]
    ],
    '#255424', '#4a7a30'
  );

  // Europe
  drawContinentalPlate(
    [
      [960, 260], [1080, 240], [1160, 280], [1140, 360], [1060, 400],
      [980, 380], [940, 320]
    ],
    '#3e6b2c', '#75783d'
  );

  // Africa & Middle East
  drawContinentalPlate(
    [
      [960, 420], [1120, 400], [1220, 460], [1240, 560], [1180, 720],
      [1120, 800], [1040, 780], [960, 620], [920, 480]
    ],
    '#8a7536', '#3b5c25' // Deserts in North, savanna in South
  );

  // Asia & Siberia
  drawContinentalPlate(
    [
      [1160, 240], [1400, 180], [1620, 220], [1720, 320], [1660, 460],
      [1540, 520], [1420, 520], [1320, 460], [1220, 380]
    ],
    '#406830', '#94854c'
  );

  // India
  drawContinentalPlate(
    [
      [1360, 480], [1440, 500], [1420, 600], [1380, 620], [1340, 540]
    ],
    '#4a7330', '#7a7d3a'
  );

  // Australia & Indonesia
  drawContinentalPlate(
    [
      [1560, 640], [1700, 620], [1760, 700], [1720, 780], [1600, 780],
      [1540, 720]
    ],
    '#9e6f36', '#704f26' // Red outback core
  );

  // Antarctica (Full ice sheet covering bottom)
  const antarctica = ctx.createLinearGradient(0, height - 140, 0, height);
  antarctica.addColorStop(0, 'transparent');
  antarctica.addColorStop(0.25, 'rgba(235, 245, 255, 0.85)');
  antarctica.addColorStop(1, '#ffffff');
  ctx.fillStyle = antarctica;
  ctx.fillRect(0, height - 140, width, 140);

  // Arctic Polar Ice Cap (Top)
  const arctic = ctx.createLinearGradient(0, 0, 0, 110);
  arctic.addColorStop(0, '#ffffff');
  arctic.addColorStop(0.75, 'rgba(235, 245, 255, 0.85)');
  arctic.addColorStop(1, 'transparent');
  ctx.fillStyle = arctic;
  ctx.fillRect(0, 0, width, 110);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 5. EARTH NIGHT MAP TEXTURE
// Realistic city lights glowing along continental coastlines & metropolitan hubs
// ==========================================
function generateEarthNightTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Pitch black cosmic night base
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  // Helper for clustering city lights
  const addMetropolitanHub = (cx: number, cy: number, radius: number, density: number = 25) => {
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.5);
    glow.addColorStop(0, 'rgba(255, 210, 110, 0.85)');
    glow.addColorStop(0.4, 'rgba(240, 170, 70, 0.45)');
    glow.addColorStop(0.8, 'rgba(200, 120, 30, 0.15)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Individual bright point lights
    for (let i = 0; i < density; i++) {
      const ang = Math.random() * Math.PI * 2;
      const d = Math.pow(Math.random(), 1.8) * radius;
      const px = cx + Math.cos(ang) * d;
      const py = cy + Math.sin(ang) * d;

      ctx.fillStyle = Math.random() > 0.3 ? '#fff5cc' : '#ffcc66';
      ctx.fillRect(px, py, 1.5, 1.5);
    }
  };

  // North America (Eastern Seaboard, Midwest, West Coast)
  addMetropolitanHub(560, 340, 45, 60); // NY/BosWash corridor
  addMetropolitanHub(510, 360, 35, 40); // Chicago/Midwest
  addMetropolitanHub(420, 380, 30, 35); // California
  addMetropolitanHub(480, 440, 25, 30); // Texas / Gulf

  // Europe (High density from London to Milan)
  addMetropolitanHub(1020, 290, 35, 50); // London / Paris
  addMetropolitanHub(1070, 310, 38, 55); // Rhine-Ruhr / Central Europe
  addMetropolitanHub(1060, 360, 28, 35); // Rome / Milan
  addMetropolitanHub(1180, 270, 24, 25); // Moscow

  // East Asia (Tokyo, Beijing, Shanghai, Seoul)
  addMetropolitanHub(1660, 390, 45, 65); // Tokyo & Japan Pacific belt
  addMetropolitanHub(1560, 360, 38, 50); // Beijing / Tianjin
  addMetropolitanHub(1580, 430, 40, 55); // Shanghai / Yangtze Delta
  addMetropolitanHub(1540, 480, 35, 45); // Pearl River Delta

  // South Asia (India Gangetic plain & coastal Mumbai)
  addMetropolitanHub(1380, 490, 40, 55); // New Delhi
  addMetropolitanHub(1360, 540, 32, 40); // Mumbai

  // South America & Australia & Africa
  addMetropolitanHub(650, 720, 35, 45); // São Paulo / Rio
  addMetropolitanHub(580, 780, 26, 30); // Buenos Aires
  addMetropolitanHub(1700, 740, 24, 30); // Sydney / Melbourne
  addMetropolitanHub(1120, 760, 20, 25); // Johannesburg
  addMetropolitanHub(1080, 430, 22, 28); // Cairo / Nile river thread

  // Subtle connecting road arteries / light strands across North America & Europe
  ctx.strokeStyle = 'rgba(255, 190, 90, 0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(560, 340); ctx.lineTo(510, 360); ctx.lineTo(480, 440); ctx.lineTo(420, 380);
  ctx.moveTo(1020, 290); ctx.lineTo(1070, 310); ctx.lineTo(1180, 270);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 6. EARTH CLOUDS TEXTURE
// High-resolution realistic swirling clouds, equatorial ITCZ, mid-latitude cyclonic spirals
// ==========================================
function generateEarthCloudsTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(width, height);
  const d = imgData.data;

  for (let y = 0; y < height; y++) {
    const ny = y / height;
    // Cloud density naturally peaks near equator (ITCZ) and mid-latitudes (45°-60°)
    const itcz = Math.exp(-Math.pow((ny - 0.5) / 0.08, 2)) * 0.45;
    const midLatNorth = Math.exp(-Math.pow((ny - 0.32) / 0.12, 2)) * 0.4;
    const midLatSouth = Math.exp(-Math.pow((ny - 0.68) / 0.12, 2)) * 0.4;
    const latBias = Math.max(0.1, itcz + midLatNorth + midLatSouth);

    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const nx = x / width;

      // Swirling cyclonic noise
      const n = fbm(nx * 10, ny * 8, 5);
      const nFine = fbm(nx * 32, ny * 24, 3) * 0.25;
      const cloudVal = n + nFine + latBias * 0.5;

      if (cloudVal > 0.42) {
        const alpha = Math.min(255, Math.floor((cloudVal - 0.42) * 450));
        d[idx] = 255;
        d[idx + 1] = 255;
        d[idx + 2] = 255;
        d[idx + 3] = alpha;
      } else {
        d[idx] = 0;
        d[idx + 1] = 0;
        d[idx + 2] = 0;
        d[idx + 3] = 0;
      }
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Add 3 iconic cyclonic vortex spirals (hurricanes / typhoons)
  const hurricanes = [
    { x: width * 0.38, y: height * 0.38, r: 60 },
    { x: width * 0.78, y: height * 0.36, r: 75 },
    { x: width * 0.62, y: height * 0.65, r: 55 },
  ];

  hurricanes.forEach(h => {
    ctx.save();
    ctx.translate(h.x, h.y);
    for (let arm = 0; arm < 3; arm++) {
      ctx.beginPath();
      const armAngle = (arm / 3) * Math.PI * 2;
      for (let t = 0; t < 25; t++) {
        const rad = (t / 25) * h.r;
        const theta = armAngle + t * 0.25;
        const px = Math.cos(theta) * rad;
        const py = Math.sin(theta) * rad;
        if (t === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 14;
      ctx.stroke();
    }
    // Eye of hurricane
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// ==========================================
// 7. MARS TEXTURE
// Rust iron oxide regolith, Valles Marineris canyon, Olympus Mons, dark Syrtis Major, polar ice caps
// ==========================================
function generateMarsTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(width, height);
  const d = imgData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const nx = x / width;
      const ny = y / height;

      // Base terrain noise
      const n = fbm(nx * 12, ny * 10, 5) * 0.5 + 0.5;
      const fine = fbm(nx * 40, ny * 35, 3) * 0.15;
      const total = n + fine;

      // Mars ochre/rust palette
      const r = Math.min(255, Math.floor(180 + total * 45));
      const g = Math.min(255, Math.floor(80 + total * 35));
      const b = Math.min(255, Math.floor(45 + total * 20));

      d[idx] = r;
      d[idx + 1] = g;
      d[idx + 2] = b;
      d[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Dark Basaltic Highlands & Maria (Syrtis Major, Acidalia Planitia)
  const darkRegions = [
    { x: width * 0.58, y: height * 0.52, rx: 160, ry: 90, rot: 0.2 }, // Syrtis Major
    { x: width * 0.32, y: height * 0.38, rx: 220, ry: 110, rot: -0.1 }, // Acidalia Planitia
    { x: width * 0.82, y: height * 0.62, rx: 190, ry: 85, rot: 0.15 },
  ];

  darkRegions.forEach(reg => {
    const grad = ctx.createRadialGradient(reg.x, reg.y, 0, reg.x, reg.y, reg.rx);
    grad.addColorStop(0, 'rgba(85, 38, 22, 0.7)');
    grad.addColorStop(0.7, 'rgba(125, 55, 32, 0.4)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(reg.x, reg.y, reg.rx, reg.ry, reg.rot, 0, Math.PI * 2);
    ctx.fill();
  });

  // Valles Marineris Canyon complex (epic 4000 km rift system)
  ctx.strokeStyle = 'rgba(65, 25, 15, 0.8)';
  ctx.lineWidth = 12;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(width * 0.35, height * 0.54);
  ctx.bezierCurveTo(
    width * 0.42, height * 0.52,
    width * 0.48, height * 0.57,
    width * 0.56, height * 0.55
  );
  ctx.stroke();

  // Olympus Mons & Tharsis Montes volcanic shields
  const volcanoes = [
    { x: width * 0.24, y: height * 0.46, r: 42 }, // Olympus Mons
    { x: width * 0.30, y: height * 0.42, r: 24 }, // Ascraeus Mons
    { x: width * 0.28, y: height * 0.48, r: 24 }, // Pavonis Mons
    { x: width * 0.26, y: height * 0.54, r: 24 }, // Arsia Mons
  ];

  volcanoes.forEach(v => {
    const vGrad = ctx.createRadialGradient(v.x, v.y, 0, v.x, v.y, v.r);
    vGrad.addColorStop(0, '#552212');
    vGrad.addColorStop(0.3, '#c2623e');
    vGrad.addColorStop(0.85, '#9e4a2b');
    vGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = vGrad;
    ctx.beginPath();
    ctx.arc(v.x, v.y, v.r, 0, Math.PI * 2);
    ctx.fill();

    // Caldera crater at peak
    ctx.fillStyle = '#2c0f06';
    ctx.beginPath();
    ctx.arc(v.x, v.y, v.r * 0.2, 0, Math.PI * 2);
    ctx.fill();
  });

  // North & South Polar Ice Caps (Water ice & CO2 dry ice)
  const nCap = ctx.createLinearGradient(0, 0, 0, 75);
  nCap.addColorStop(0, '#ffffff');
  nCap.addColorStop(0.65, 'rgba(255, 240, 235, 0.9)');
  nCap.addColorStop(1, 'transparent');
  ctx.fillStyle = nCap;
  ctx.fillRect(0, 0, width, 75);

  const sCap = ctx.createLinearGradient(0, height - 65, 0, height);
  sCap.addColorStop(0, 'transparent');
  sCap.addColorStop(0.35, 'rgba(255, 240, 235, 0.9)');
  sCap.addColorStop(1, '#ffffff');
  ctx.fillStyle = sCap;
  ctx.fillRect(0, height - 65, width, 65);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 8. JUPITER TEXTURE
// Richly colored alternating zones and belts, Great Red Spot with internal swirl, turbulent vortex ripples
// ==========================================
function generateJupiterTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Master atmospheric zones & belts
  const belts = [
    { pos: 0.00, color: '#685444' }, // North Polar Region
    { pos: 0.12, color: '#87705b' },
    { pos: 0.22, color: '#d8c5ad' }, // North Temperate Zone
    { pos: 0.30, color: '#a25e36' }, // North Temperate Belt
    { pos: 0.36, color: '#eedec9' }, // North Tropical Zone
    { pos: 0.43, color: '#883d1c' }, // North Equatorial Belt (NEB, deep rusty red)
    { pos: 0.50, color: '#f3e6d2' }, // Equatorial Zone (EZ, bright cream)
    { pos: 0.58, color: '#994a24' }, // South Equatorial Belt (SEB)
    { pos: 0.67, color: '#ebd7bd' }, // South Tropical Zone
    { pos: 0.76, color: '#8b5b3f' }, // South Temperate Belt
    { pos: 0.88, color: '#9f8570' },
    { pos: 1.00, color: '#625042' }, // South Polar Region
  ];

  const grad = ctx.createLinearGradient(0, 0, 0, height);
  belts.forEach(b => grad.addColorStop(b.pos, b.color));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Micro-turbulent cloud festoons and ripples
  for (let i = 0; i < 90; i++) {
    const y = Math.random() * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= width; x += 30) {
      const dy = Math.sin(x * 0.04 + i * 2) * 5 + Math.cos(x * 0.08 + i) * 3;
      ctx.lineTo(x, y + dy);
    }
    ctx.strokeStyle = Math.random() > 0.45 ? 'rgba(255, 240, 220, 0.22)' : 'rgba(110, 45, 18, 0.18)';
    ctx.lineWidth = 3 + Math.random() * 8;
    ctx.stroke();
  }

  // The Great Red Spot (GRS) situated at ~22° South
  const grsX = width * 0.68;
  const grsY = height * 0.63;
  const grsW = 85;
  const grsH = 48;

  // GRS hollow/cavity in SEB
  const cavity = ctx.createRadialGradient(grsX, grsY, 0, grsX, grsY, grsW * 1.3);
  cavity.addColorStop(0, '#ebd8c2');
  cavity.addColorStop(0.8, 'rgba(240, 225, 205, 0.5)');
  cavity.addColorStop(1, 'transparent');
  ctx.fillStyle = cavity;
  ctx.beginPath();
  ctx.ellipse(grsX, grsY, grsW * 1.25, grsH * 1.2, 0.05, 0, Math.PI * 2);
  ctx.fill();

  // GRS outer ring
  const grsGrad = ctx.createRadialGradient(grsX, grsY, grsW * 0.2, grsX, grsY, grsW);
  grsGrad.addColorStop(0, '#b83416');
  grsGrad.addColorStop(0.6, '#d95228');
  grsGrad.addColorStop(0.9, '#ea8c62');
  grsGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = grsGrad;
  ctx.beginPath();
  ctx.ellipse(grsX, grsY, grsW, grsH, 0.05, 0, Math.PI * 2);
  ctx.fill();

  // GRS central vortex core
  ctx.fillStyle = '#8f1f06';
  ctx.beginPath();
  ctx.ellipse(grsX, grsY, grsW * 0.35, grsH * 0.35, 0.05, 0, Math.PI * 2);
  ctx.fill();

  // White Oval storm vortices (Oval BA & pearls) in South Temperate Zone
  for (let i = 0; i < 7; i++) {
    const ox = (width * 0.15 + i * (width / 7)) % width;
    const oy = height * 0.74;
    const oGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, 16);
    oGrad.addColorStop(0, '#ffffff');
    oGrad.addColorStop(0.7, 'rgba(255, 250, 240, 0.85)');
    oGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = oGrad;
    ctx.beginPath();
    ctx.ellipse(ox, oy, 18, 10, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 9. SATURN TEXTURE
// Golden butterscotch and warm honey atmospheric banding, polar hexagon shading
// ==========================================
function generateSaturnTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const bands = [
    { pos: 0.00, color: '#7a765d' }, // North polar hexagon zone (bluish-grey tint)
    { pos: 0.15, color: '#b5a37f' },
    { pos: 0.32, color: '#e6d3ac' },
    { pos: 0.44, color: '#eedec0' }, // Equatorial bright zone
    { pos: 0.50, color: '#f3e5c9' },
    { pos: 0.56, color: '#eedec0' },
    { pos: 0.68, color: '#dfcca2' },
    { pos: 0.82, color: '#c2ad83' },
    { pos: 1.00, color: '#8a7959' }, // South polar region
  ];

  const grad = ctx.createLinearGradient(0, 0, 0, height);
  bands.forEach(b => grad.addColorStop(b.pos, b.color));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Delicate horizontal flow bands
  for (let i = 0; i < 60; i++) {
    const y = Math.random() * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(255, 252, 240, 0.12)' : 'rgba(130, 105, 65, 0.08)';
    ctx.lineWidth = 4 + Math.random() * 10;
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 10. SATURN RING ALPHA & COLOR MAP
// Precise 2048-pixel radial profile with Cassini Division, Encke Gap, C Ring, B Ring, A Ring
// ==========================================
export function generateSaturnRingTexture(): THREE.CanvasTexture {
  if (textureCache.has('saturn-ring')) {
    return textureCache.get('saturn-ring')!;
  }

  const width = 2048;
  const height = 64;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, width, 0);
  // Inner boundary: D Ring faint haze
  grad.addColorStop(0.00, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(0.06, 'rgba(130, 115, 95, 0.08)');
  
  // C Ring (faint crepe ring, semi-transparent)
  grad.addColorStop(0.08, 'rgba(150, 135, 110, 0.18)');
  grad.addColorStop(0.24, 'rgba(170, 150, 125, 0.28)');

  // Maxwell Gap
  grad.addColorStop(0.25, 'rgba(10, 10, 15, 0.02)');

  // B Ring (brightest, densest ring system)
  grad.addColorStop(0.27, 'rgba(225, 205, 175, 0.85)');
  grad.addColorStop(0.42, 'rgba(245, 230, 200, 0.96)');
  grad.addColorStop(0.58, 'rgba(225, 205, 175, 0.88)');

  // Cassini Division (4,800 km wide dark gap!)
  grad.addColorStop(0.59, 'rgba(5, 5, 8, 0.03)');
  grad.addColorStop(0.66, 'rgba(5, 5, 8, 0.03)');

  // A Ring (translucent outer ring)
  grad.addColorStop(0.67, 'rgba(215, 195, 168, 0.72)');
  grad.addColorStop(0.84, 'rgba(195, 178, 150, 0.65)');

  // Encke Gap (sharp narrow rift)
  grad.addColorStop(0.85, 'rgba(10, 10, 15, 0.05)');
  grad.addColorStop(0.87, 'rgba(10, 10, 15, 0.05)');

  // Keeler Gap & outer edge
  grad.addColorStop(0.88, 'rgba(180, 165, 140, 0.50)');
  grad.addColorStop(0.96, 'rgba(150, 135, 115, 0.22)');
  grad.addColorStop(0.98, 'rgba(120, 110, 95, 0.06)');
  grad.addColorStop(1.00, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Realistic micro-grooves (thousands of ringlets)
  for (let i = 0; i < 250; i++) {
    const x = width * 0.08 + Math.random() * width * 0.88;
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(40, 30, 20, 0.12)';
    ctx.lineWidth = 1 + Math.random() * 2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  textureCache.set('saturn-ring', texture);
  return texture;
}

// ==========================================
// 11. URANUS TEXTURE
// Natural pale aquamarine/cyan (restrained, non-neon) with subtle atmospheric banding
// ==========================================
function generateUranusTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0.0, '#7ebdc0'); // Pale cyan polar region
  grad.addColorStop(0.3, '#94cbd0');
  grad.addColorStop(0.5, '#a4d6db'); // Mild equatorial brightening
  grad.addColorStop(0.7, '#8ec5ca');
  grad.addColorStop(1.0, '#75b3b7');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Very subtle atmospheric haze bands
  for (let i = 0; i < 25; i++) {
    const y = Math.random() * height;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fillRect(0, y, width, 8 + Math.random() * 24);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ==========================================
// 12. NEPTUNE TEXTURE
// Natural deep azure/cobalt blue with subtle storm bands, Great Dark Spot, white methane cirrus streaks
// ==========================================
function generateNeptuneTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0.0, '#1a377d'); // Deep southern/northern cobalt
  grad.addColorStop(0.25, '#264eab');
  grad.addColorStop(0.5, '#2f5fc2'); // Equatorial royal blue
  grad.addColorStop(0.75, '#22469e');
  grad.addColorStop(1.0, '#152d6a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Storm bands
  for (let i = 0; i < 35; i++) {
    const y = Math.random() * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(
      width * 0.33, y + Math.sin(i) * 12,
      width * 0.66, y - Math.cos(i) * 12,
      width, y
    );
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(20, 55, 140, 0.35)' : 'rgba(75, 130, 240, 0.22)';
    ctx.lineWidth = 6 + Math.random() * 16;
    ctx.stroke();
  }

  // Neptune's Great Dark Spot (Voyager 2 anticyclone)
  const gdsX = width * 0.62;
  const gdsY = height * 0.42;
  const gdsGrad = ctx.createRadialGradient(gdsX, gdsY, 0, gdsX, gdsY, 55);
  gdsGrad.addColorStop(0, '#0c1a45');
  gdsGrad.addColorStop(0.7, '#152a65');
  gdsGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = gdsGrad;
  ctx.beginPath();
  ctx.ellipse(gdsX, gdsY, 55, 30, 0.08, 0, Math.PI * 2);
  ctx.fill();

  // High-altitude white methane cirrus cloud streaks ("Scooter" companion clouds)
  for (let i = 0; i < 25; i++) {
    const x = Math.random() * (width - 180);
    const y = height * 0.25 + Math.random() * (height * 0.5);
    const len = 50 + Math.random() * 140;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 2 + Math.random() * 3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + len, y + (Math.random() - 0.5) * 6);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Master texture accessor with caching
export function getPlanetTexture(id: string): THREE.CanvasTexture {
  if (textureCache.has(id)) {
    return textureCache.get(id)!;
  }

  let tex: THREE.CanvasTexture;
  switch (id) {
    case 'sun':
      tex = generateSunTexture();
      break;
    case 'mercury':
      tex = generateMercuryTexture();
      break;
    case 'venus':
      tex = generateVenusAtmosphereTexture();
      break;
    case 'earth':
      tex = generateEarthDayTexture();
      break;
    case 'mars':
      tex = generateMarsTexture();
      break;
    case 'jupiter':
      tex = generateJupiterTexture();
      break;
    case 'saturn':
      tex = generateSaturnTexture();
      break;
    case 'uranus':
      tex = generateUranusTexture();
      break;
    case 'neptune':
      tex = generateNeptuneTexture();
      break;
    default:
      tex = generateMercuryTexture();
  }

  textureCache.set(id, tex);
  return tex;
}

export function getEarthNightTexture(): THREE.CanvasTexture {
  if (textureCache.has('earth-night')) {
    return textureCache.get('earth-night')!;
  }
  const tex = generateEarthNightTexture();
  textureCache.set('earth-night', tex);
  return tex;
}

export function getEarthCloudsTexture(): THREE.CanvasTexture {
  if (textureCache.has('earth-clouds')) {
    return textureCache.get('earth-clouds')!;
  }
  const tex = generateEarthCloudsTexture();
  textureCache.set('earth-clouds', tex);
  return tex;
}

export function getVenusAtmosphereTexture(): THREE.CanvasTexture {
  return getPlanetTexture('venus');
}
