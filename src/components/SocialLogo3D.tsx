import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

// GitHub icon shape (simplified octocat silhouette as extruded shape)
const GitHubShape = () => {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Circle base
    const r = 0.7;
    const segments = 32;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) s.moveTo(x, y);
      else s.lineTo(x, y);
    }
    return s;
  }, []);
  return shape;
};

const LinkedInShape = () => {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const r = 0.15;
    // Rounded rectangle
    s.moveTo(-0.65 + r, -0.65);
    s.lineTo(0.65 - r, -0.65);
    s.quadraticCurveTo(0.65, -0.65, 0.65, -0.65 + r);
    s.lineTo(0.65, 0.65 - r);
    s.quadraticCurveTo(0.65, 0.65, 0.65 - r, 0.65);
    s.lineTo(-0.65 + r, 0.65);
    s.quadraticCurveTo(-0.65, 0.65, -0.65, 0.65 - r);
    s.lineTo(-0.65, -0.65 + r);
    s.quadraticCurveTo(-0.65, -0.65, -0.65 + r, -0.65);
    return s;
  }, []);
  return shape;
};

interface LogoMeshProps {
  type: "github" | "linkedin";
  onClick?: () => void;
}

const LogoMesh = ({ type, onClick }: LogoMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const targetSpeed = useRef(0.3);
  const currentSpeed = useRef(0.3);
  const glowIntensity = useRef(0);

  useFrame((_, delta) => {
    targetSpeed.current = hovered ? 1.2 : 0.3;
    currentSpeed.current += (targetSpeed.current - currentSpeed.current) * 3 * delta;

    const targetGlow = hovered ? 1 : 0;
    glowIntensity.current += (targetGlow - glowIntensity.current) * 4 * delta;

    if (meshRef.current) {
      meshRef.current.rotation.y += currentSpeed.current * delta;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = meshRef.current?.rotation.y || 0;
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.15 + glowIntensity.current * 0.25;
      const s = 1.08 + glowIntensity.current * 0.08;
      glowRef.current.scale.set(s, s, s);
    }
  });

  const githubShape = GitHubShape();
  const linkedinShape = LinkedInShape();
  const shape = type === "github" ? githubShape : linkedinShape;

  const extrudeSettings = { depth: 0.2, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3 };

  return (
    <group
      onPointerOver={() => { setHovered(true); document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = "auto"; }}
      onClick={onClick}
    >
      {/* Glow mesh */}
      <mesh ref={glowRef} position={[0, 0, -0.1]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshBasicMaterial color="#00e5c8" transparent opacity={0.15} />
      </mesh>

      {/* Main mesh */}
      <mesh ref={meshRef}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial
          color={hovered ? "#00e5c8" : "#e0e0e0"}
          metalness={0.8}
          roughness={0.2}
          emissive={hovered ? "#00e5c8" : "#000000"}
          emissiveIntensity={hovered ? 0.4 : 0}
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, -1.15, 0]}
        fontSize={0.22}
        color="#a0a0a0"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff"
      >
        {type === "github" ? "GitHub" : "LinkedIn"}
      </Text>
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
    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-card/80 border border-border/60 backdrop-blur-sm overflow-hidden group hover:border-primary/40 transition-colors duration-300">
      {/* Glow background on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-2xl" />
      <div className="absolute -inset-1 rounded-2xl bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} intensity={0.3} color="#00e5c8" />
        <LogoMesh type={type} onClick={handleClick} />
      </Canvas>
    </div>
  );
};
