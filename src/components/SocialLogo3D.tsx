import { useRef, useState, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// GitHub Octocat mark - circle with cat silhouette cutout
// We'll create the circle and the cat head as a combined extruded shape
const useGitHubShape = () => {
  return useMemo(() => {
    const shape = new THREE.Shape();
    // Outer circle
    const r = 1;
    const seg = 64;
    for (let i = 0; i <= seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
      else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }

    // Cat head hole (simplified octocat silhouette)
    const hole = new THREE.Path();
    // Head top
    hole.moveTo(0, 0.62);
    // Right ear
    hole.lineTo(0.15, 0.55);
    hole.lineTo(0.28, 0.72);
    hole.lineTo(0.38, 0.58);
    hole.lineTo(0.42, 0.52);
    // Right side of head
    hole.quadraticCurveTo(0.58, 0.38, 0.55, 0.15);
    // Right shoulder
    hole.quadraticCurveTo(0.6, -0.05, 0.52, -0.18);
    // Right arm
    hole.lineTo(0.55, -0.28);
    hole.quadraticCurveTo(0.58, -0.42, 0.48, -0.48);
    // Tail area
    hole.quadraticCurveTo(0.35, -0.52, 0.28, -0.42);
    hole.lineTo(0.22, -0.35);
    // Body bottom right
    hole.lineTo(0.18, -0.55);
    hole.lineTo(0.12, -0.62);
    // Bottom center
    hole.lineTo(0.06, -0.58);
    hole.lineTo(0.06, -0.42);
    hole.lineTo(0, -0.38);
    hole.lineTo(-0.06, -0.42);
    hole.lineTo(-0.06, -0.58);
    hole.lineTo(-0.12, -0.62);
    hole.lineTo(-0.18, -0.55);
    // Body bottom left
    hole.lineTo(-0.22, -0.35);
    hole.lineTo(-0.28, -0.42);
    hole.quadraticCurveTo(-0.35, -0.52, -0.48, -0.48);
    hole.quadraticCurveTo(-0.58, -0.42, -0.55, -0.28);
    hole.lineTo(-0.52, -0.18);
    hole.quadraticCurveTo(-0.6, -0.05, -0.55, 0.15);
    hole.quadraticCurveTo(-0.58, 0.38, -0.42, 0.52);
    hole.lineTo(-0.38, 0.58);
    hole.lineTo(-0.28, 0.72);
    hole.lineTo(-0.15, 0.55);
    hole.lineTo(0, 0.62);

    shape.holes.push(hole);
    return shape;
  }, []);
};

// LinkedIn "in" on rounded rect
const useLinkedInShape = () => {
  return useMemo(() => {
    const shape = new THREE.Shape();
    const w = 0.9, h = 0.9, cr = 0.18;
    // Rounded rect
    shape.moveTo(-w + cr, -h);
    shape.lineTo(w - cr, -h);
    shape.quadraticCurveTo(w, -h, w, -h + cr);
    shape.lineTo(w, h - cr);
    shape.quadraticCurveTo(w, h, w - cr, h);
    shape.lineTo(-w + cr, h);
    shape.quadraticCurveTo(-w, h, -w, h - cr);
    shape.lineTo(-w, -h + cr);
    shape.quadraticCurveTo(-w, -h, -w + cr, -h);

    // "i" dot hole
    const dot = new THREE.Path();
    const dx = -0.42, dy = 0.52, dr = 0.1;
    for (let i = 0; i <= 32; i++) {
      const a = (i / 32) * Math.PI * 2;
      if (i === 0) dot.moveTo(dx + Math.cos(a) * dr, dy + Math.sin(a) * dr);
      else dot.lineTo(dx + Math.cos(a) * dr, dy + Math.sin(a) * dr);
    }
    shape.holes.push(dot);

    // "i" stem hole
    const stem = new THREE.Path();
    stem.moveTo(-0.5, 0.3);
    stem.lineTo(-0.34, 0.3);
    stem.lineTo(-0.34, -0.35);
    stem.lineTo(-0.5, -0.35);
    stem.lineTo(-0.5, 0.3);
    shape.holes.push(stem);

    // "n" hole
    const n = new THREE.Path();
    n.moveTo(-0.18, 0.3);
    n.lineTo(-0.02, 0.3);
    // Top of n - go up then curve
    n.lineTo(-0.02, 0.22);
    n.quadraticCurveTo(0.08, 0.34, 0.25, 0.34);
    n.quadraticCurveTo(0.5, 0.34, 0.5, 0.08);
    n.lineTo(0.5, -0.35);
    n.lineTo(0.34, -0.35);
    n.lineTo(0.34, 0.04);
    n.quadraticCurveTo(0.34, 0.2, 0.2, 0.2);
    n.quadraticCurveTo(0.06, 0.2, -0.02, 0.06);
    n.lineTo(-0.02, -0.35);
    n.lineTo(-0.18, -0.35);
    n.lineTo(-0.18, 0.3);
    shape.holes.push(n);

    return shape;
  }, []);
};

interface LogoMeshProps {
  type: "github" | "linkedin";
  onClick?: () => void;
}

const LogoMesh = ({ type, onClick }: LogoMeshProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const speed = useRef(0.4);
  const glowIntensity = useRef(0);

  const githubShape = useGitHubShape();
  const linkedinShape = useLinkedInShape();
  const shape = type === "github" ? githubShape : linkedinShape;

  const extrudeSettings = useMemo(() => ({
    depth: 0.35,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.04,
    bevelSegments: 4,
  }), []);

  useFrame((_, delta) => {
    const targetSpeed = hovered ? 1.6 : 0.4;
    speed.current += (targetSpeed - speed.current) * 3 * delta;

    const targetGlow = hovered ? 1 : 0;
    glowIntensity.current += (targetGlow - glowIntensity.current) * 5 * delta;

    if (groupRef.current) {
      groupRef.current.rotation.y += speed.current * delta;
    }
  });

  const handlePointerOver = useCallback(() => {
    setHovered(true);
    document.body.style.cursor = "pointer";
  }, []);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = "auto";
  }, []);

  const logoColor = type === "github" ? "#ffffff" : "#0A66C2";

  return (
    <group
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={onClick}
    >
      <group ref={groupRef} position={[0, 0.1, 0]}>
        {/* Main extruded logo - glass-like transparent body */}
        <mesh position={[0, 0, -0.175]} castShadow>
          <extrudeGeometry args={[shape, extrudeSettings]} />
          <meshPhysicalMaterial
            color={logoColor}
            metalness={0.1}
            roughness={0.05}
            transmission={0.6}
            thickness={0.5}
            transparent
            opacity={0.85}
            emissive="#00e5c8"
            emissiveIntensity={hovered ? 0.4 : 0.08}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Cyan underglow plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]}>
          <circleGeometry args={[1.1, 32]} />
          <meshBasicMaterial
            color="#00e5c8"
            transparent
            opacity={hovered ? 0.22 : 0.08}
          />
        </mesh>
      </group>
    </group>
  );
};

interface SocialLogo3DProps {
  type: "github" | "linkedin";
  url: string;
}

export const SocialLogo3D = ({ type, url }: SocialLogo3DProps) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center gap-3">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-primary/20 bg-transparent hover:border-primary/50 transition-colors duration-300">
        {/* Subtle glow behind */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

        <Canvas
          camera={{ position: [0, 0, 3.2], fov: 42 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 5]} intensity={0.9} />
          <directionalLight position={[-2, -1, 3]} intensity={0.2} color="#00e5c8" />
          <pointLight position={[0, -2, 2]} intensity={0.4} color="#00e5c8" distance={6} />
          <LogoMesh type={type} onClick={handleClick} />
        </Canvas>
      </div>
      <span className="text-sm font-medium text-muted-foreground tracking-wide">
        {type === "github" ? "GitHub" : "LinkedIn"}
      </span>
    </div>
  );
};
