'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import * as THREE from 'three';

export interface GlobeLocation {
  lat: number;
  lng: number;
  color?: string;
  label?: string;
  onClick?: () => void;
}

interface GlobeProps {
  locations?: GlobeLocation[];
  className?: string;
  style?: React.CSSProperties;
  autoRotate?: boolean;
  onLocationClick?: (location: GlobeLocation) => void;
}

const PRIMARY = '#0ea5e9';
const RIM = '#6366f1';

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

/** Evenly distributed dot lattice — reads as a planet without any texture asset. */
function useDotLattice(count: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const light = new THREE.Vector3(-0.45, 0.65, 0.62).normalize();
    const base = new THREE.Color(PRIMARY);
    const dim = new THREE.Color('#1d4ed8');
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const normal = new THREE.Vector3(x, y, z);
      const shade = THREE.MathUtils.clamp(normal.dot(light) * 0.5 + 0.5, 0, 1);
      const color = dim.clone().lerp(base, shade);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count]);
}

function Atmosphere() {
  return (
    <mesh scale={1.035}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        uniforms={{
          uRim: { value: new THREE.Color(RIM) },
          uPrimary: { value: new THREE.Color(PRIMARY) },
        }}
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vView;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vView = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }
        `}
        fragmentShader={`
          uniform vec3 uRim;
          uniform vec3 uPrimary;
          varying vec3 vNormal;
          varying vec3 vView;
          void main() {
            float fresnel = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vView)), 0.0, 1.0), 3.0);
            vec3 colour = mix(uPrimary, uRim, 0.5) * fresnel * 1.8;
            gl_FragColor = vec4(colour, fresnel * 0.9);
          }
        `}
      />
    </mesh>
  );
}

function OfficeMarker({
  location,
  index,
  reducedMotion,
  onSelect,
}: {
  location: GlobeLocation;
  index: number;
  reducedMotion: boolean;
  onSelect?: (location: GlobeLocation) => void;
}) {
  const haloRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const position = useMemo(() => latLngToVector3(location.lat, location.lng, 1.012), [location.lat, location.lng]);
  const color = location.color ?? PRIMARY;

  useFrame(({ clock }) => {
    if (!haloRef.current || reducedMotion) return;
    const pulse = 1 + Math.sin(clock.elapsedTime * 2.2 + index) * 0.22;
    haloRef.current.scale.setScalar(pulse);
  });

  return (
    <group position={position}>
      <mesh
        onClick={() => onSelect?.(location)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.35 : 1}
      >
        <sphereGeometry args={[0.018, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.038, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.28} depthWrite={false} />
      </mesh>
      {location.label && hovered && (
        <Html center distanceFactor={3.2} style={{ pointerEvents: 'none' }}>
          <div className="whitespace-nowrap rounded-md border border-white/15 bg-slate-950/90 px-2 py-1 text-[11px] font-medium text-white shadow-lg">
            {location.label}
          </div>
        </Html>
      )}
    </group>
  );
}

function OfficeArcs({ locations }: { locations: GlobeLocation[] }) {
  const arcs = useMemo(() => {
    const curves: THREE.Vector3[][] = [];
    for (let i = 0; i < locations.length; i += 1) {
      const next = locations[(i + 1) % locations.length];
      if (locations.length < 2) break;
      const from = latLngToVector3(locations[i].lat, locations[i].lng, 1.01);
      const to = latLngToVector3(next.lat, next.lng, 1.01);
      const mid = from.clone().add(to).multiplyScalar(0.5);
      const distance = from.distanceTo(to);
      mid.normalize().multiplyScalar(1.05 + distance * 0.28);
      curves.push(new THREE.QuadraticBezierCurve3(from, mid, to).getPoints(48));
    }
    return curves;
  }, [locations]);

  return (
    <>
      {arcs.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={PRIMARY}
          lineWidth={1.1}
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      ))}
    </>
  );
}

function GlobeScene({
  locations,
  autoRotate,
  reducedMotion,
  onLocationClick,
}: {
  locations: GlobeLocation[];
  autoRotate: boolean;
  reducedMotion: boolean;
  onLocationClick?: (location: GlobeLocation) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const { positions, colors } = useDotLattice(4200);

  useFrame(({ clock }) => {
    if (!group.current || !autoRotate || reducedMotion) return;
    group.current.rotation.y = clock.elapsedTime * 0.075;
  });

  return (
    <group ref={group}>
      {/* Dark ocean core */}
      <mesh>
        <sphereGeometry args={[0.995, 64, 64]} />
        <meshBasicMaterial color="#071019" />
      </mesh>

      {/* Dot lattice surface */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.013}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.92}
          depthWrite={false}
        />
      </points>

      <Atmosphere />
      <OfficeArcs locations={locations} />

      {locations.map((location, index) => (
        <OfficeMarker
          key={`${location.lat}-${location.lng}-${index}`}
          location={location}
          index={index}
          reducedMotion={reducedMotion}
          onSelect={onLocationClick}
        />
      ))}
    </group>
  );
}

export default function Globe({
  locations = [],
  className = '',
  style = {},
  autoRotate = true,
  onLocationClick,
}: GlobeProps) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReady(true);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  if (!ready) {
    return (
      <div
        className={`relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 ${className}`}
        style={style}
        aria-hidden="true"
      >
        <div className="h-3/4 w-3/4 max-h-[420px] max-w-[420px] rounded-full border border-sky-400/25 bg-sky-500/10" />
      </div>
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-xl ${className}`}
      style={style}
      role="img"
      aria-label="Interactive 3D globe showing portfolio company office locations"
    >
      <Canvas
        dpr={[1, 1.75]}
        frameloop={reducedMotion ? 'demand' : 'always'}
        camera={{ position: [0, 0, 3.05], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <GlobeScene
          locations={locations}
          autoRotate={autoRotate}
          reducedMotion={reducedMotion}
          onLocationClick={onLocationClick}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-x-4 gap-y-1 p-3 text-[11px] text-slate-300/80">
        {locations.map((location) => (
          <span key={location.label} className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: location.color ?? PRIMARY }} />
            {location.label}
          </span>
        ))}
      </div>
    </div>
  );
}
