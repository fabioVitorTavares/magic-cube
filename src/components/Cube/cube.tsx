import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  BufferGeometryProps,
  MeshProps,
  ThreeElements,
} from "@react-three/fiber/dist/declarations/src";
import { useEffect, useRef, useState } from "react";
import { BufferGeometry, Euler, Line, LineBasicMaterial, Material, Mesh, Vector3 } from "three";
import { randInt } from "three/src/math/MathUtils";

export function Cube() {
  const ref = useRef<THREE.Mesh>(null!);
  const [degX, setDegX] = useState<number>(0);
  const [degY, setDegY] = useState<number>(0);
  const [degZ, setDegZ] = useState<number>(0);

  function aleatoryColor() {
    return `#${randInt(100, 999)}`;
  }

  const positions = [
    [0, 0, 0],
    [1, 0, 0],
    [2, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [2, 1, 0],
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 0],
    [0, 0, 1],
    [1, 0, 1],
    [2, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
    [2, 1, 1],
    [0, 2, 1],
    [1, 2, 1],
    [2, 2, 1],
    [0, 0, 2],
    [1, 0, 2],
    [2, 0, 2],
    [0, 1, 2],
    [1, 1, 2],
    [2, 1, 2],
    [0, 2, 2],
    [1, 2, 2],
    [2, 2, 2],
  ];

  const atmCube = (
    <>
      
      <OrbitControls autoRotate />
      <mesh position={[-1.5,-1.5,-1.5]}  rotation={[degX, degY, degZ]}>

      {positions.map((pos) => {
        return (
          <mesh
          position={[pos[0], pos[1], pos[2]]}
          
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={aleatoryColor()} />
          </mesh>
        );
      })}
      </mesh>
    </>
  );

  useEffect(() => {}, [degX, degY, degZ]);

  return (
    <div className="cube">
      <Canvas className="canva">
        <ambientLight />
        <pointLight position={[20, 20, 10]} />
        {atmCube}
      </Canvas>
      <input
        type="range"
        min={0}
        max={50}
        onChange={(e) => setDegX(Number(e.target.value))}
      />
      <input
        type="range"
        min={0}
        max={50}
        onChange={(e) => setDegY(Number(e.target.value))}
      />
      <input
        type="range"
        min={0}
        max={50}
        onChange={(e) => setDegZ(Number(e.target.value))}
      />
    </div>
  );
}
