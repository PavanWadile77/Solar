import * as THREE from 'three';

// =======================================================
// 1. DYNAMIC ATMOSPHERE SHADER
// Thin limb scattering responding to Sun's direction & camera angle
// =======================================================
export const AtmosphereShader = {
  vertexShader: `
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;

    void main() {
      // Calculate world-space normal & position
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vViewDirection = normalize(cameraPosition - worldPos.xyz);

      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    uniform vec3 uSunPosition;
    uniform float uAtmospherePower;
    uniform float uAtmosphereIntensity;

    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;

    void main() {
      vec3 normal = normalize(vWorldNormal);
      vec3 viewDir = normalize(vViewDirection);
      vec3 sunDir = normalize(uSunPosition - vWorldPosition);

      // Camera limb Fresnel factor
      float NdotV = max(0.0, dot(normal, viewDir));
      float rim = pow(1.0 - NdotV, uAtmospherePower);

      // Sun lighting factor: bright on daylight side, smoothly dark on night side
      float NdotL = dot(normal, sunDir);
      float sunFacing = smoothstep(-0.25, 0.45, NdotL);

      // Soft twilight glow extension along terminator
      float twilight = smoothstep(-0.25, 0.05, NdotL) * (1.0 - smoothstep(-0.05, 0.35, NdotL));
      vec3 finalColor = uColor * (rim * sunFacing * uAtmosphereIntensity + twilight * rim * 0.4);

      float alpha = rim * (sunFacing * 0.95 + twilight * 0.35) * uAtmosphereIntensity;
      gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 1.0));
    }
  `
};

export function createAtmosphereMaterial(color: THREE.Color, power: number = 3.5, intensity: number = 1.0): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: AtmosphereShader.vertexShader,
    fragmentShader: AtmosphereShader.fragmentShader,
    uniforms: {
      uColor: { value: color },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) },
      uAtmospherePower: { value: power },
      uAtmosphereIntensity: { value: intensity },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
    depthWrite: false,
  });
}

// =======================================================
// 2. EARTH SURFACE SHADER (DAY / NIGHT / TERMINATOR / CLOUD SHADOWS)
// City lights only on night side, daylight continents & specular oceans, cloud shadows
// =======================================================
export const EarthSurfaceShader = {
  vertexShader: `
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vViewDirection = normalize(cameraPosition - worldPos.xyz);

      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform sampler2D uDayMap;
    uniform sampler2D uNightMap;
    uniform sampler2D uCloudMap;
    uniform vec3 uSunPosition;
    uniform float uCloudOffset;

    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;
    varying vec2 vUv;

    void main() {
      vec3 normal = normalize(vWorldNormal);
      vec3 viewDir = normalize(vViewDirection);
      vec3 sunDir = normalize(uSunPosition - vWorldPosition);

      // Dot product for daylight vs night
      float NdotL = dot(normal, sunDir);

      // Smooth terminator transition
      float dayFactor = smoothstep(-0.12, 0.14, NdotL);
      float nightFactor = 1.0 - smoothstep(-0.18, 0.06, NdotL);

      // Day texture sample
      vec3 dayColor = texture2D(uDayMap, vUv).rgb;

      // Cloud shadow projection onto day surface
      vec2 shadowUv = vec2(vUv.x + uCloudOffset - sunDir.x * 0.003, vUv.y - sunDir.y * 0.002);
      float cloudShadowSample = texture2D(uCloudMap, shadowUv).a;
      dayColor *= mix(1.0, 0.58, cloudShadowSample * dayFactor);

      // Ocean specular reflection (sunlight glint on water)
      vec3 halfVector = normalize(sunDir + viewDir);
      float NdotH = max(0.0, dot(normal, halfVector));
      // Water detection based on blue dominance
      float isWater = smoothstep(0.05, 0.25, dayColor.b - dayColor.r * 0.8);
      float specular = pow(NdotH, 45.0) * isWater * dayFactor;
      vec3 specColor = vec3(0.95, 0.98, 1.0) * specular * 0.75;

      // Night city lights - visible ONLY on the night hemisphere
      vec3 nightLights = texture2D(uNightMap, vUv).rgb * 2.2;
      vec3 nightColor = nightLights * nightFactor;

      // Minimal ambient cosmic fill so night hemisphere is dark space, not pitch-gray
      vec3 ambientFill = dayColor * 0.04;

      vec3 finalColor = dayColor * dayFactor + specColor + nightColor + ambientFill;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

export function createEarthSurfaceMaterial(
  dayMap: THREE.Texture,
  nightMap: THREE.Texture,
  cloudMap: THREE.Texture
): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: EarthSurfaceShader.vertexShader,
    fragmentShader: EarthSurfaceShader.fragmentShader,
    uniforms: {
      uDayMap: { value: dayMap },
      uNightMap: { value: nightMap },
      uCloudMap: { value: cloudMap },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) },
      uCloudOffset: { value: 0 },
    },
    roughness: 0.6,
    metalness: 0.05,
  } as any);
}

// =======================================================
// 3. EARTH CLOUD LAYER SHADER
// Illuminated by sunlight on day side, dark on night side, drifting rotation
// =======================================================
export const EarthCloudsShader = {
  vertexShader: `
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform sampler2D uCloudMap;
    uniform vec3 uSunPosition;
    uniform float uCloudOffset;

    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vec3 normal = normalize(vWorldNormal);
      vec3 sunDir = normalize(uSunPosition - vWorldPosition);

      // Shaded by sunlight
      float NdotL = dot(normal, sunDir);
      float cloudLit = smoothstep(-0.15, 0.25, NdotL);

      vec2 movingUv = vec2(vUv.x + uCloudOffset, vUv.y);
      vec4 cloudSample = texture2D(uCloudMap, movingUv);

      // Clouds are bright white in sunlight, fading to deep shadow on night side
      vec3 cloudRgb = vec3(0.98, 0.98, 1.0) * max(0.04, cloudLit);
      float alpha = cloudSample.a * 0.88;

      gl_FragColor = vec4(cloudRgb, alpha);
    }
  `
};

export function createEarthCloudsMaterial(cloudMap: THREE.Texture): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: EarthCloudsShader.vertexShader,
    fragmentShader: EarthCloudsShader.fragmentShader,
    uniforms: {
      uCloudMap: { value: cloudMap },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) },
      uCloudOffset: { value: 0 },
    },
    transparent: true,
    depthWrite: false,
  });
}

// =======================================================
// 4. SATURN RINGS SHADER WITH EXACT PLANET SHADOW
// Cassini division, Encke gap, transparency, and the dark wedge shadow cast by Saturn
// =======================================================
export const SaturnRingShader = {
  vertexShader: `
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform sampler2D uRingMap;
    uniform vec3 uPlanetPosition;
    uniform float uPlanetRadius;
    uniform vec3 uSunPosition;

    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      // Ring radial UV sampling
      vec4 ringColor = texture2D(uRingMap, vec2(vUv.x, 0.5));
      if (ringColor.a < 0.02) discard;

      // Exact mathematical ray-sphere shadow:
      // Check if the ray from this ring fragment to the Sun intersects Saturn's globe
      vec3 rayOrigin = vWorldPosition;
      vec3 rayDir = normalize(uSunPosition - rayOrigin); // Direction to Sun
      vec3 oc = rayOrigin - uPlanetPosition;

      float b = dot(rayDir, oc);
      float c = dot(oc, oc) - (uPlanetRadius * uPlanetRadius);
      float discriminant = b * b - c;

      // Shadowed if ray intersects planet sphere and intersection is towards the Sun
      float shadow = 1.0;
      if (b < 0.0 && discriminant > 0.0) {
        // In the dark shadow wedge behind Saturn!
        shadow = 0.08;
      }

      // Minimal ambient cosmic light on rings
      vec3 litColor = ringColor.rgb * shadow;
      gl_FragColor = vec4(litColor, ringColor.a);
    }
  `
};

export function createSaturnRingMaterial(ringMap: THREE.Texture, radius: number): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: SaturnRingShader.vertexShader,
    fragmentShader: SaturnRingShader.fragmentShader,
    uniforms: {
      uRingMap: { value: ringMap },
      uPlanetPosition: { value: new THREE.Vector3(0, 0, 0) },
      uPlanetRadius: { value: radius },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) },
    },
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: true,
  });
}

// =======================================================
// 5. SATURN GLOBE SHADER WITH RING SHADOW
// Saturn atmospheric bands + ring shadow cast onto the equator
// =======================================================
export const SaturnGlobeShader = {
  vertexShader: `
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform sampler2D uSaturnMap;
    uniform vec3 uSunPosition;
    uniform vec3 uPlanetPosition;
    uniform float uRingInnerRadius;
    uniform float uRingOuterRadius;
    uniform mat4 uRingMatrixInverse;

    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vec3 normal = normalize(vWorldNormal);
      vec3 sunDir = normalize(uSunPosition - vWorldPosition);

      float NdotL = max(0.0, dot(normal, sunDir));
      vec3 surfaceColor = texture2D(uSaturnMap, vUv).rgb;

      // Ring shadow on planet:
      // Ray from surface point to Sun
      vec3 rayDir = normalize(uSunPosition - vWorldPosition);
      // Transform ray into ring-local coordinate system where rings lie in Y=0 plane
      vec4 localPos = uRingMatrixInverse * vec4(vWorldPosition, 1.0);
      vec4 localDir = uRingMatrixInverse * vec4(rayDir, 0.0);

      float shadowFactor = 1.0;
      if (abs(localDir.y) > 0.0001) {
        float t = -localPos.y / localDir.y;
        if (t > 0.0) { // towards Sun
          vec2 ringPlanePos = localPos.xz + localDir.xz * t;
          float dist = length(ringPlanePos);
          if (dist >= uRingInnerRadius && dist <= uRingOuterRadius) {
            // Shadowed by rings!
            shadowFactor = 0.35;
          }
        }
      }

      vec3 finalColor = surfaceColor * (NdotL * shadowFactor + 0.05);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// =======================================================
// 6. SUN PHOTOSPHERE SHADER
// Granulation convection, sunspots, and restrained corona
// =======================================================
export const SunShader = {
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform sampler2D uSunMap;
    uniform float uTime;

    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      // Subtle solar plasma convection flow
      vec2 flowUv = vUv + vec2(sin(vUv.y * 30.0 + uTime * 0.3) * 0.0015, cos(vUv.x * 30.0 + uTime * 0.3) * 0.0015);
      vec3 baseSun = texture2D(uSunMap, flowUv).rgb;

      // Limb darkening on Sun's photosphere edge (real astrophysical effect: center looks hotter than edges)
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float limb = dot(vNormal, viewDir);
      float limbDarkening = 0.45 + 0.55 * pow(max(0.0, limb), 0.5);

      vec3 finalColor = baseSun * limbDarkening * 1.15;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

export function createSunMaterial(sunMap: THREE.Texture): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: SunShader.vertexShader,
    fragmentShader: SunShader.fragmentShader,
    uniforms: {
      uSunMap: { value: sunMap },
      uTime: { value: 0 },
    },
  });
}
