import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { positions, colors } from "../Configs/configs";
import { useEffect, useRef, useState } from "react";

import { randInt } from "three/src/math/MathUtils";

export function Cube() {
  const ref = useRef<THREE.Mesh>(null!);
  const [degX, setDegX] = useState<number>(0);
  const [degY, setDegY] = useState<number>(0);
  const [degZ, setDegZ] = useState<number>(0);

  function aleatoryColor() {
    return `#${randInt(100, 999)}`;
  }

  const atmCube = (
    <>
      <OrbitControls />
      <mesh position={[-1.5, -1.5, -1.5]} rotation={[degX, degY, degZ]}>
        {positions.map((pos, i) => {
          return (
            <mesh position={[pos[0], pos[1], pos[2]]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors[i]} />
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
    </div>
  );
}
