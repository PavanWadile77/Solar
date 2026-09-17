import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { celestialBodies } from '../data/planets';
import {
  getPlanetTexture,
  generateSaturnRingTexture,
  getEarthNightTexture,
  getEarthCloudsTexture,
} from '../utils/planetTextures';
import {
  createAtmosphereMaterial,
  createEarthSurfaceMaterial,
  createEarthCloudsMaterial,
  createSaturnRingMaterial,
  createSunMaterial,
} from '../utils/planetShaders';

interface ExplorerProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

interface PlanetConfig {
  id: string;
  name: string;
  order: number;
  radius: number;
  distance: number;
  orbitSpeed: number;
  rotationSpeed: number;
  axialTilt: number;
  color: string;
  hasRings?: boolean;
  atmosphereColor?: THREE.Color;
  atmospherePower?: number;
  atmosphereIntensity?: number;
  atmosphereScale?: number;
}

const PLANET_CONFIGS: Record<string, PlanetConfig> = {
  sun: {
    id: 'sun',
    name: 'Sun',
    order: 0,
    radius: 11.5,
    distance: 0,
    orbitSpeed: 0,
    rotationSpeed: 0.003,
    axialTilt: 0.12,
    color: '#FFD700',
  },
  mercury: {
    id: 'mercury',
    name: 'Mercury',
    order: 1,
    radius: 1.8,
    distance: 24,
    orbitSpeed: 3.6,
    rotationSpeed: 0.008,
    axialTilt: 0.035,
    color: '#B0C4DE',
    // Mercury has NO atmosphere (vacuum world)
  },
  venus: {
    id: 'venus',
    name: 'Venus',
    order: 2,
    radius: 2.6,
    distance: 35,
    orbitSpeed: 2.1,
    rotationSpeed: -0.005, // Slow retrograde spin
    axialTilt: 3.09,
    color: '#DEB887',
    atmosphereColor: new THREE.Color(0.92, 0.82, 0.65), // Dense cream/amber haze
    atmospherePower: 2.8,
    atmosphereIntensity: 1.1,
    atmosphereScale: 1.025,
  },
  earth: {
    id: 'earth',
    name: 'Earth',
    order: 3,
    radius: 2.8,
    distance: 48,
    orbitSpeed: 1.4,
    rotationSpeed: 0.02,
    axialTilt: 0.409, // 23.4 degrees
    color: '#4E55D8',
    atmosphereColor: new THREE.Color(0.35, 0.65, 1.0), // Electric sky blue Rayleigh rim
    atmospherePower: 3.5,
    atmosphereIntensity: 1.3,
    atmosphereScale: 1.022,
  },
  mars: {
    id: 'mars',
    name: 'Mars',
    order: 4,
    radius: 2.1,
    distance: 62,
    orbitSpeed: 0.95,
    rotationSpeed: 0.019,
    axialTilt: 0.44, // 25.2 degrees
    color: '#CD5C5C',
    atmosphereColor: new THREE.Color(0.85, 0.55, 0.38), // Very thin, restrained dusty peach
    atmospherePower: 5.5,
    atmosphereIntensity: 0.65,
    atmosphereScale: 1.014,
  },
  jupiter: {
    id: 'jupiter',
    name: 'Jupiter',
    order: 5,
    radius: 6.2,
    distance: 84,
    orbitSpeed: 0.42,
    rotationSpeed: 0.04, // Very fast spin (~10h)
    axialTilt: 0.054,
    color: '#DAA520',
    atmosphereColor: new THREE.Color(0.85, 0.72, 0.58), // Subtle edge absorption
    atmospherePower: 3.5,
    atmosphereIntensity: 0.45,
    atmosphereScale: 1.018,
  },
  saturn: {
    id: 'saturn',
    name: 'Saturn',
    order: 6,
    radius: 5.2,
    distance: 110,
    orbitSpeed: 0.28,
    rotationSpeed: 0.036,
    axialTilt: 0.466, // 26.7 degrees
    color: '#F4A460',
    hasRings: true,
    atmosphereColor: new THREE.Color(0.92, 0.82, 0.62), // Golden haze
    atmospherePower: 3.5,
    atmosphereIntensity: 0.45,
    atmosphereScale: 1.018,
  },
  uranus: {
    id: 'uranus',
    name: 'Uranus',
    order: 7,
    radius: 3.8,
    distance: 136,
    orbitSpeed: 0.16,
    rotationSpeed: -0.024,
    axialTilt: 1.706, // 97.8 degrees (spins on side)
    color: '#87CEEB',
    atmosphereColor: new THREE.Color(0.48, 0.82, 0.85), // Natural pale cyan/aquamarine
    atmospherePower: 3.2,
    atmosphereIntensity: 0.75,
    atmosphereScale: 1.02,
  },
  neptune: {
    id: 'neptune',
    name: 'Neptune',
    order: 8,
    radius: 3.7,
    distance: 162,
    orbitSpeed: 0.09,
    rotationSpeed: 0.025,
    axialTilt: 0.494, // 28.3 degrees
    color: '#4169E1',
    atmosphereColor: new THREE.Color(0.20, 0.45, 0.90), // Deep natural royal azure
    atmospherePower: 3.2,
    atmosphereIntensity: 0.8,
    atmosphereScale: 1.02,
  },
};

export const SolarSystemExplorer = ({ selectedId, onSelect }: ExplorerProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [hoveredBody, setHoveredBody] = useState<string | null>(null);

  // References for Three.js orchestration
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const requestRef = useRef<number>(0);

  // Camera tracking modes: 'overview' | 'focus'
  const isOverviewModeRef = useRef(true);
  const isTransitioningCameraRef = useRef(false);

  // State refs for continuous animation
  const isPausedRef = useRef(isPaused);
  const speedRef = useRef(speedMultiplier);
  const selectedIdRef = useRef(selectedId);
  const onSelectRef = useRef(onSelect);

  // Shader uniform references
  const sunMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const earthSurfaceMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const earthCloudsMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const saturnRingMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Synchronize state refs
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    speedRef.current = speedMultiplier;
  }, [speedMultiplier]);

  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId]);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  // Persistent orbital angle & rotation tracking
  const planetAnglesRef = useRef<Record<string, number>>({
    mercury: 0.8,
    venus: 2.1,
    earth: 3.4,
    mars: 4.8,
    jupiter: 1.2,
    saturn: 5.1,
    uranus: 2.7,
    neptune: 4.1,
  });

  const bodyMeshesRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const bodyGroupsRef = useRef<Map<string, THREE.Group>>(new Map());
  const orbitLinesRef = useRef<Map<string, THREE.LineLoop>>(new Map());
  const selectionMarkerRef = useRef<THREE.Mesh | null>(null);

  // Smooth focus on celestial body when selected
  useEffect(() => {
    if (!controlsRef.current || !cameraRef.current) return;
    isOverviewModeRef.current = false;
    isTransitioningCameraRef.current = true;
  }, [selectedId]);

  // Respect reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPaused(true);
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setIsPaused(true);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 580;

    // 1. Scene setup with near-black cosmic void
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020205);
    sceneRef.current = scene;

    // 2. Camera setup - Isometric perspective overlooking the complete solar system
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 4000);
    const overviewPos = new THREE.Vector3(0, 185, 245);
    camera.position.copy(overviewPos);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 3.5; // Allows crisp close-up inspection of every body
    controls.maxDistance = 650;
    controls.maxPolarAngle = Math.PI / 2 + 0.2;
    controlsRef.current = controls;

    // 5. Lighting: Direct sunlight with realistic dark space terminator
    // Very subtle cosmic background fill so the night hemisphere is dark space
    const cosmicAmbient = new THREE.AmbientLight(0x080a14, 0.08);
    scene.add(cosmicAmbient);

    // Radiant Sun PointLight at center (0, 0, 0)
    const sunLight = new THREE.PointLight(0xffffff, 2.8, 1600, 0.2);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // 6. Deep Space Stable Starfield
    // Distant, understated pinpoint stars with realistic apparent magnitudes and subtle spectral temperatures
    const starCount = 2500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2200 + Math.random() * 400; // Far sphere in deep cosmic infinity

      starPositions[i3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i3 + 2] = r * Math.cos(phi);

      const tint = Math.random();
      // Mostly faint pinpoint stars with subtle spectral temperature tints
      const brightness = 0.35 + Math.pow(Math.random(), 3) * 0.65;
      if (tint < 0.60) {
        // Pure cool white / Class A/F star
        starColors[i3] = 0.92 * brightness;
        starColors[i3 + 1] = 0.95 * brightness;
        starColors[i3 + 2] = 1.0 * brightness;
      } else if (tint < 0.85) {
        // Soft blue-white / Class B/O star
        starColors[i3] = 0.75 * brightness;
        starColors[i3 + 1] = 0.85 * brightness;
        starColors[i3 + 2] = 1.0 * brightness;
      } else {
        // Warm stellar gold / Class K/M star
        starColors[i3] = 1.0 * brightness;
        starColors[i3 + 1] = 0.88 * brightness;
        starColors[i3 + 2] = 0.70 * brightness;
      }
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 7. Celestial Bodies Construction
    const bodyMeshes = new Map<string, THREE.Mesh>();
    const bodyGroups = new Map<string, THREE.Group>();
    const orbitLines = new Map<string, THREE.LineLoop>();

    // ----------------------------------------------------
    // (A) Construct Sun
    // Textured emissive surface with convective granulation & restrained corona
    // ----------------------------------------------------
    const sunConfig = PLANET_CONFIGS.sun;
    const sunTex = getPlanetTexture('sun');
    const sunGeo = new THREE.SphereGeometry(sunConfig.radius, 64, 64);
    const sunMat = createSunMaterial(sunTex);
    sunMaterialRef.current = sunMat;

    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.userData = { id: 'sun', name: 'Sun' };
    scene.add(sunMesh);
    bodyMeshes.set('sun', sunMesh);

    // Restrained, elegant solar corona shell (prevents blinding bloom, preserves surface detail)
    const coronaGeo = new THREE.SphereGeometry(sunConfig.radius * 1.14, 48, 48);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffaa22,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
    scene.add(coronaMesh);

    // Outer subtle golden falloff halo
    const haloGeo = new THREE.SphereGeometry(sunConfig.radius * 1.30, 48, 48);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xff7700,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    scene.add(haloMesh);

    // ----------------------------------------------------
    // (B) Construct 8 Planets in Order
    // ----------------------------------------------------
    const planetOrder = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

    planetOrder.forEach((planetId) => {
      const cfg = PLANET_CONFIGS[planetId];
      if (!cfg) return;

      // 1. Subtle, understated orbital ring path
      const orbitPoints: THREE.Vector3[] = [];
      const segments = 180;
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        orbitPoints.push(new THREE.Vector3(Math.cos(theta) * cfg.distance, 0, Math.sin(theta) * cfg.distance));
      }
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const isSelected = selectedIdRef.current === cfg.id;
      const orbitMat = new THREE.LineBasicMaterial({
        color: isSelected ? 0xa78bfa : 0xffffff,
        transparent: true,
        opacity: isSelected ? 0.38 : 0.09,
      });
      const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
      scene.add(orbitLine);
      orbitLines.set(cfg.id, orbitLine);

      // 2. Planet Container Group (handles distance & axial tilt)
      const planetGroup = new THREE.Group();
      planetGroup.rotation.z = cfg.axialTilt;

      // 3. Planet Surface Sphere Mesh
      const sphereGeo = new THREE.SphereGeometry(cfg.radius, 64, 64);
      let planetMesh: THREE.Mesh;

      if (cfg.id === 'earth') {
        // Multi-layer Earth: Day map, Night map (city lights only on dark hemisphere), cloud shadows
        const dayTex = getPlanetTexture('earth');
        const nightTex = getEarthNightTexture();
        const cloudTex = getEarthCloudsTexture();

        const earthSurfaceMat = createEarthSurfaceMaterial(dayTex, nightTex, cloudTex);
        earthSurfaceMaterialRef.current = earthSurfaceMat;
        planetMesh = new THREE.Mesh(sphereGeo, earthSurfaceMat);

        // Separate textured cloud layer with independent drift
        const cloudGeo = new THREE.SphereGeometry(cfg.radius * 1.008, 64, 64);
        const cloudMat = createEarthCloudsMaterial(cloudTex);
        earthCloudsMaterialRef.current = cloudMat;
        const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
        cloudMesh.userData = { isCloudLayer: true };
        planetGroup.add(cloudMesh);
      } else {
        // Standard high-resolution planetary surface
        const planetTexture = getPlanetTexture(cfg.id);
        const sphereMat = new THREE.MeshStandardMaterial({
          map: planetTexture,
          roughness: cfg.id === 'venus' ? 0.85 : cfg.id === 'mercury' ? 0.95 : 0.72,
          metalness: 0.02,
        });
        planetMesh = new THREE.Mesh(sphereGeo, sphereMat);
      }

      planetMesh.userData = { id: cfg.id, name: cfg.name };
      planetGroup.add(planetMesh);
      bodyMeshes.set(cfg.id, planetMesh);

      // 4. Planet-Specific Atmospheric Rim (Rayleigh limb scattering responding to Sun direction)
      if (cfg.atmosphereColor && cfg.atmosphereScale) {
        const atmoGeo = new THREE.SphereGeometry(cfg.radius * cfg.atmosphereScale, 48, 48);
        const atmoMat = createAtmosphereMaterial(
          cfg.atmosphereColor,
          cfg.atmospherePower || 3.5,
          cfg.atmosphereIntensity || 1.0
        );
        const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
        atmoMesh.renderOrder = 3;
        planetGroup.add(atmoMesh);
      }

      // 5. Saturn Rings with Transparency & Exact Shadow Casting
      if (cfg.hasRings) {
        const innerRadius = cfg.radius * 1.25;
        const outerRadius = cfg.radius * 2.38;
        const ringGeo = new THREE.RingGeometry(innerRadius, outerRadius, 128);
        ringGeo.rotateX(Math.PI / 2);

        const ringTex = generateSaturnRingTexture();
        const ringMat = createSaturnRingMaterial(ringTex, cfg.radius);
        saturnRingMaterialRef.current = ringMat;

        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.renderOrder = 4;
        planetGroup.add(ringMesh);
      }

      // 6. Uranus delicate faint ring
      if (cfg.id === 'uranus') {
        const uRingGeo = new THREE.RingGeometry(cfg.radius * 1.22, cfg.radius * 1.48, 64);
        uRingGeo.rotateX(Math.PI / 2);
        const uRingMat = new THREE.MeshBasicMaterial({
          color: 0x9de0e2,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.22,
          depthWrite: false,
        });
        const uRingMesh = new THREE.Mesh(uRingGeo, uRingMat);
        planetGroup.add(uRingMesh);
      }

      // Initial position from persistent angles
      const currentAngle = planetAnglesRef.current[cfg.id] || 0;
      planetGroup.position.set(
        Math.cos(currentAngle) * cfg.distance,
        0,
        Math.sin(currentAngle) * cfg.distance
      );

      scene.add(planetGroup);
      bodyGroups.set(cfg.id, planetGroup);
    });

    // 8. Refined Selection Indicator Reticle
    const markerGeo = new THREE.RingGeometry(1, 1.08, 64);
    markerGeo.rotateX(Math.PI / 2);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });
    const selectionMarker = new THREE.Mesh(markerGeo, markerMat);
    scene.add(selectionMarker);
    selectionMarkerRef.current = selectionMarker;

    bodyMeshesRef.current = bodyMeshes;
    bodyGroupsRef.current = bodyGroups;
    orbitLinesRef.current = orbitLines;

    // 9. Raycasting for clicks & hover interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let pointerDownPos = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = false;
      pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist > 5) {
        isDragging = true;
      }

      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const meshes = Array.from(bodyMeshes.values());
      const intersects = raycaster.intersectObjects(meshes, true);

      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.userData?.id && hitObj.parent) {
          hitObj = hitObj.parent;
        }
        if (hitObj && hitObj.userData?.id) {
          container.style.cursor = 'pointer';
          setHoveredBody(hitObj.userData.name);
          return;
        }
      }
      container.style.cursor = 'grab';
      setHoveredBody(null);
    };

    const onPointerUp = (e: PointerEvent) => {
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist < 6 && !isDragging) {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const meshes = Array.from(bodyMeshes.values());
        const intersects = raycaster.intersectObjects(meshes, true);

        if (intersects.length > 0) {
          let hitObj: THREE.Object3D | null = intersects[0].object;
          while (hitObj && !hitObj.userData?.id && hitObj.parent) {
            hitObj = hitObj.parent;
          }
          if (hitObj && hitObj.userData?.id) {
            onSelectRef.current(hitObj.userData.id);
          }
        }
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    domElement.addEventListener('pointermove', onPointerMove);
    domElement.addEventListener('pointerup', onPointerUp);

    // 10. Animation Loop
    let lastTime = performance.now();
    let cloudOffset = 0;

    const animate = () => {
      const now = performance.now();
      const deltaSeconds = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const activeSpeed = isPausedRef.current ? 0 : speedRef.current;

      // Rotate Sun on axis & update solar convection uniform
      sunMesh.rotation.y += sunConfig.rotationSpeed;
      coronaMesh.rotation.y -= 0.0008;
      haloMesh.rotation.y += 0.0004;
      if (sunMaterialRef.current) {
        sunMaterialRef.current.uniforms.uTime.value = now * 0.001;
      }

      // Update atmospheric cloud drift for Earth
      cloudOffset += 0.00015 * (activeSpeed > 0 ? activeSpeed : 0.2);
      if (earthSurfaceMaterialRef.current) {
        earthSurfaceMaterialRef.current.uniforms.uCloudOffset.value = cloudOffset;
      }
      if (earthCloudsMaterialRef.current) {
        earthCloudsMaterialRef.current.uniforms.uCloudOffset.value = cloudOffset;
      }

      // Update orbits and planetary axial rotations
      planetOrder.forEach((planetId) => {
        const cfg = PLANET_CONFIGS[planetId];
        const group = bodyGroups.get(planetId);
        const mesh = bodyMeshes.get(planetId);

        if (cfg && group && mesh) {
          if (activeSpeed > 0) {
            const angleDelta = cfg.orbitSpeed * 0.22 * activeSpeed * deltaSeconds;
            planetAnglesRef.current[planetId] = (planetAnglesRef.current[planetId] + angleDelta) % (Math.PI * 2);

            const theta = planetAnglesRef.current[planetId];
            group.position.x = Math.cos(theta) * cfg.distance;
            group.position.z = Math.sin(theta) * cfg.distance;

            // Axial spin
            mesh.rotation.y += cfg.rotationSpeed * activeSpeed;
          }
        }
      });

      // Update Saturn rings world position for exact mathematical shadow wedge
      const saturnGroup = bodyGroups.get('saturn');
      if (saturnGroup && saturnRingMaterialRef.current) {
        saturnRingMaterialRef.current.uniforms.uPlanetPosition.value.copy(saturnGroup.position);
      }

      // Update 3D Selection Marker position & scale
      const currentSelected = selectedIdRef.current;
      if (selectionMarkerRef.current) {
        if (currentSelected === 'sun') {
          selectionMarkerRef.current.position.set(0, 0, 0);
          const s = sunConfig.radius * 1.38;
          selectionMarkerRef.current.scale.set(s, s, s);
          selectionMarkerRef.current.visible = true;
        } else {
          const selGroup = bodyGroups.get(currentSelected);
          const selCfg = PLANET_CONFIGS[currentSelected];
          if (selGroup && selCfg) {
            selectionMarkerRef.current.position.copy(selGroup.position);
            const s = selCfg.radius * (selCfg.hasRings ? 2.6 : 1.35);
            selectionMarkerRef.current.scale.set(s, s, s);
            selectionMarkerRef.current.visible = true;
          } else {
            selectionMarkerRef.current.visible = false;
          }
        }
        // Very subtle rhythmic pulse for reticle
        const pulse = 1 + Math.sin(now * 0.004) * 0.03;
        selectionMarkerRef.current.scale.multiplyScalar(pulse);
      }

      // Smooth camera transition when focusing on selected body or resetting to overview
      if (isTransitioningCameraRef.current && cameraRef.current && controlsRef.current) {
        let targetLookAt = new THREE.Vector3(0, 0, 0);
        let targetCamPos = overviewPos;

        if (!isOverviewModeRef.current) {
          if (currentSelected === 'sun') {
            targetLookAt.set(0, 0, 0);
            targetCamPos = new THREE.Vector3(0, 16, 28);
          } else {
            const activeGroup = bodyGroups.get(currentSelected);
            const activeCfg = PLANET_CONFIGS[currentSelected];
            if (activeGroup && activeCfg) {
              targetLookAt.copy(activeGroup.position);
              // Stand slightly above orbital plane and back to inspect illuminated hemisphere
              const distFactor = activeCfg.hasRings ? 4.6 : 3.4;
              const viewDist = activeCfg.radius * distFactor;
              targetCamPos = new THREE.Vector3(
                activeGroup.position.x + viewDist * 0.6,
                activeGroup.position.y + viewDist * 0.45,
                activeGroup.position.z + viewDist * 0.85
              );
            }
          }
        }

        cameraRef.current.position.lerp(targetCamPos, 0.08);
        controlsRef.current.target.lerp(targetLookAt, 0.08);

        if (cameraRef.current.position.distanceTo(targetCamPos) < 0.6) {
          isTransitioningCameraRef.current = false;
        }
      }

      controls.update();
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    // 11. Handle container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(requestRef.current);
      resizeObserver.disconnect();
      domElement.removeEventListener('pointerdown', onPointerDown);
      domElement.removeEventListener('pointermove', onPointerMove);
      domElement.removeEventListener('pointerup', onPointerUp);
      controls.dispose();
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, []);

  // Update orbit line highlight when selectedId changes without recreating scene
  useEffect(() => {
    orbitLinesRef.current.forEach((line, planetId) => {
      const isSelected = selectedId === planetId;
      const mat = line.material as THREE.LineBasicMaterial;
      if (mat) {
        mat.color.setHex(isSelected ? 0xa78bfa : 0xffffff);
        mat.opacity = isSelected ? 0.38 : 0.09;
      }
    });
  }, [selectedId]);

  // Information panel navigation
  const selectedIndex = celestialBodies.findIndex((b) => b.id === selectedId);
  const selectedBody = celestialBodies[selectedIndex] || celestialBodies[3];

  const handlePrev = useCallback(() => {
    const newIndex = (selectedIndex - 1 + celestialBodies.length) % celestialBodies.length;
    onSelect(celestialBodies[newIndex].id);
  }, [selectedIndex, onSelect]);

  const handleNext = useCallback(() => {
    const newIndex = (selectedIndex + 1) % celestialBodies.length;
    onSelect(celestialBodies[newIndex].id);
  }, [selectedIndex, onSelect]);

  // Controls actions
  const handleResetView = () => {
    isOverviewModeRef.current = true;
    isTransitioningCameraRef.current = true;
  };

  const handleZoomIn = () => {
    if (controlsRef.current && cameraRef.current) {
      const dir = new THREE.Vector3().subVectors(controlsRef.current.target, cameraRef.current.position);
      cameraRef.current.position.addScaledVector(dir, 0.22);
      controlsRef.current.update();
    }
  };

  const handleZoomOut = () => {
    if (controlsRef.current && cameraRef.current) {
      const dir = new THREE.Vector3().subVectors(cameraRef.current.position, controlsRef.current.target);
      cameraRef.current.position.addScaledVector(dir, 0.25);
      controlsRef.current.update();
    }
  };

  // Keyboard navigation & controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      setIsPaused((p) => !p);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      handleResetView();
    }
  };

  return (
    <section 
      id="explorer" 
      className="section-padding" 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
      aria-label="Solar System 3D Explorer"
    >
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px', textAlign: 'center' }}>
          Your journey starts here
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          textAlign: 'center',
          fontSize: '1.25rem',
          marginBottom: '56px',
        }}>
          Explore all eight planets and the Sun with interactive 3D controls, realistic lighting, and planetary facts.
        </p>

        <div className="explorer-wrapper">
          {/* 3D WebGL Visualization Viewport */}
          <div className="orbital-viz">
            {/* 3D Canvas Mount Point */}
            <div
              ref={canvasContainerRef}
              className="three-canvas-container"
              style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            />

            {/* Hover Tooltip Overlay */}
            {hoveredBody && (
              <div className="planet-hover-badge">
                {hoveredBody}
              </div>
            )}

            {/* Top Right View Navigation Controls */}
            <div className="top-viz-controls">
              <button
                onClick={handleZoomIn}
                className="control-btn"
                aria-label="Zoom in"
                title="Zoom In"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={handleZoomOut}
                className="control-btn"
                aria-label="Zoom out"
                title="Zoom Out"
              >
                <ZoomOut size={18} />
              </button>
              <button
                onClick={handleResetView}
                className="control-btn"
                aria-label="Reset view to overview"
                title="Reset View to Overview"
              >
                <RotateCcw size={18} />
              </button>
            </div>

            {/* Bottom Left Animation & Speed Controls */}
            <div className="viz-controls">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`control-btn ${isPaused ? 'paused' : ''}`}
                aria-label={isPaused ? 'Resume planetary orbits' : 'Pause planetary orbits'}
                title={isPaused ? 'Resume' : 'Pause'}
              >
                {isPaused ? <Play size={18} /> : <Pause size={18} />}
              </button>

              <div className="speed-pills-group" role="group" aria-label="Orbit speed multiplier">
                {[0.5, 1, 2, 4].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setSpeedMultiplier(spd)}
                    className={`speed-pill ${speedMultiplier === spd ? 'active' : ''}`}
                    aria-label={`Set speed to ${spd}x`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            {/* Illustrative Disclaimer Tag */}
            <div className="viz-disclaimer">
              Sizes, distances, and time are adjusted for visibility
            </div>
          </div>

          {/* Synchronized Information Panel */}
          <div className="info-panel">
            <div className="info-panel-header">
              <div className="body-order">
                {selectedBody.order === 0 ? '00' : String(selectedBody.order).padStart(2, '0')}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={handlePrev} 
                  className="nav-btn" 
                  aria-label="Previous celestial body"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext} 
                  className="nav-btn" 
                  aria-label="Next celestial body"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Planet Visual Preview in Info Panel */}
            <div className="preview-container">
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: selectedBody.gradient,
                  boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.5), 0 10px 30px ${selectedBody.color}40`,
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'background 0.3s ease',
                }}
              >
                {selectedBody.id === 'saturn' && <div className="saturn-ring-info" />}
              </div>
              <div className="preview-meta">
                <span className="type-tag">{selectedBody.type.toUpperCase()}</span>
                <span className="order-tag">Orbit Position: {selectedBody.order}</span>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '6px' }}>
                {selectedBody.name}
              </h3>
              <p style={{
                color: 'var(--accent-purple)',
                fontWeight: 600,
                fontSize: '1.05rem',
              }}>
                {selectedBody.descriptor}
              </p>
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '28px',
              fontSize: '0.98rem',
            }}>
              {selectedBody.introduction}
            </p>

            <div style={{ flexGrow: 1 }}>
              <h4 style={{
                fontSize: '1.05rem',
                marginBottom: '14px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                Quick Facts
              </h4>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {selectedBody.facts.map((fact, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: 'var(--accent-purple)', marginTop: '2px', flexShrink: 0 }}>•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stationary Selector Pills - Sun + 8 Planets in Order */}
        <div className="selector-row" role="tablist" aria-label="Celestial body selector">
          {celestialBodies.map((body) => (
            <button
              key={`selector-${body.id}`}
              onClick={() => onSelect(body.id)}
              className={`selector-btn${selectedId === body.id ? ' active' : ''}`}
              role="tab"
              aria-selected={selectedId === body.id}
              aria-label={`Select ${body.name}`}
            >
              <span
                className="selector-dot"
                style={{ backgroundColor: body.color }}
              />
              {body.name}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        #explorer:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 4px;
        }
        .explorer-wrapper {
          display: flex;
          flex-direction: row;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(10, 8, 30, 0.12);
          background-color: #020205;
          border: 1px solid var(--border-subtle);
          min-height: 640px;
        }
        .orbital-viz {
          flex: 1 1 65%;
          position: relative;
          overflow: hidden;
          min-height: 520px;
          background: #020205;
        }
        .three-canvas-container {
          cursor: grab;
        }
        .three-canvas-container:active {
          cursor: grabbing;
        }
        .planet-hover-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(14, 12, 28, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 6px 16px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          pointer-events: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
          animation: fadeIn 0.15s ease-out;
          z-index: 20;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .top-viz-controls {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 20;
          display: flex;
          gap: 10px;
        }
        .viz-controls {
          position: absolute;
          bottom: 24px;
          left: 24px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .control-btn {
          background-color: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .control-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.35);
          transform: translateY(-1px);
        }
        .control-btn:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 2px;
        }
        .control-btn.paused {
          background-color: var(--accent-purple);
          border-color: var(--accent-purple);
        }
        .speed-pills-group {
          display: flex;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          padding: 3px;
          gap: 2px;
        }
        .speed-pill {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
          transition: all 0.18s ease;
        }
        .speed-pill:hover {
          color: white;
        }
        .speed-pill.active {
          background-color: white;
          color: #020205;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        .speed-pill:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 1px;
        }
        .viz-disclaimer {
          position: absolute;
          bottom: 24px;
          right: 24px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(6px);
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 20;
          pointer-events: none;
        }
        .info-panel {
          flex: 1 1 35%;
          min-width: 320px;
          background-color: var(--surface-lavender);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .info-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .body-order {
          font-size: 1.1rem;
          font-weight: 800;
          font-family: var(--font-display);
          color: var(--text-secondary);
          opacity: 0.5;
        }
        .nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: white;
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.18s ease;
          cursor: pointer;
        }
        .nav-btn:hover {
          background-color: var(--accent-purple);
          color: white;
          border-color: var(--accent-purple);
          transform: translateY(-1px);
        }
        .nav-btn:focus-visible {
          outline: 2px solid var(--accent-purple);
          outline-offset: 2px;
        }
        .preview-container {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }
        .preview-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .type-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          background: rgba(120, 56, 232, 0.12);
          color: var(--accent-purple);
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          width: fit-content;
        }
        .order-tag {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .saturn-ring-info {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 175%;
          height: 42%;
          border-radius: 50%;
          border: 4px solid rgba(244, 164, 96, 0.55);
          transform: translate(-50%, -50%) rotate(24deg);
          pointer-events: none;
        }
        .selector-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 40px;
        }
        .selector-btn {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          background-color: white;
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          transition: all 0.18s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .selector-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }
        .selector-btn.active {
          background-color: var(--text-primary);
          color: white;
          border-color: var(--text-primary);
          box-shadow: 0 4px 12px rgba(16, 13, 40, 0.15);
        }
        .selector-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }
        .selector-btn.active .selector-dot {
          box-shadow: 0 0 6px currentColor;
        }
        @media (max-width: 980px) {
          .explorer-wrapper {
            flex-direction: column;
            min-height: auto;
          }
          .orbital-viz {
            min-height: 440px;
            height: 52vh;
          }
          .info-panel {
            min-width: unset;
            padding: 28px 24px;
          }
          .viz-disclaimer {
            font-size: 0.7rem;
            bottom: 16px;
            right: 16px;
          }
          .viz-controls {
            bottom: 16px;
            left: 16px;
          }
          .top-viz-controls {
            top: 16px;
            right: 16px;
          }
        }
      `}</style>
    </section>
  );
};
