import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { positions, colors } from "../Configs/configs";
import { useEffect, useRef, useState } from "react";

import { randInt } from "three/src/math/MathUtils";
import { cube1x1Props } from "../../types/types";
import {
  BufferGeometry,
  Euler,
  Material,
  Mesh,
  MeshBasicMaterial,
  Vector3,
} from "three";

export function Cube() {
  const ref = useRef<THREE.Mesh>(null!);
  const refCube3x3 = useRef<THREE.Mesh>(null!);
  const [degX, setDegX] = useState<number>(0);
  const [degY, setDegY] = useState<number>(0);
  const [degZ, setDegZ] = useState<number>(0);

  useEffect(() => {
     ref?.current?.setRotationFromAxisAngle(new Vector3(0, 1, 1), 1); 
    
  }, []);

  type T = {
    (angle: number): BufferGeometry;
  };

  const defaultColors = ["black", "black", "black", "black", "black", "black"];
  function cube1x1({
    x = 0,
    y = 0,
    z = 0,
    colors = defaultColors,
  }: cube1x1Props) {
    return (
      <mesh
        ref={ref}
        rotation={new Euler(0,2,20)}
      >
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={10}
        />
        <mesh position={[x, y, z + 1]}>
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial color={colors[randInt(0, 5)]} />
        </mesh>
        <mesh position={[x + 1, y, z + 1]}>
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial color={colors[randInt(0, 5)]} />
        </mesh>
        <mesh position={[x + 0.5, y, z + 0.5]}>
          <boxGeometry args={[1, 1, 0]} />
          <meshStandardMaterial color={colors[randInt(0, 5)]} />
        </mesh>
        <mesh position={[x + 0.5, y, z + 1.5]}>
          <boxGeometry args={[1, 1, 0]} />
          <meshStandardMaterial color={colors[randInt(0, 5)]} />
        </mesh>
        <mesh position={[x + 0.5, y - 0.5, z + 1]}>
          <boxGeometry args={[1, 0, 1]} />
          <meshStandardMaterial color={colors[randInt(0, 5)]} />
        </mesh>
        <mesh position={[x + 0.5, y + 0.5, z + 1]}>
          <boxGeometry args={[1, 0, 1]} />
          <meshStandardMaterial color={colors[randInt(0, 5)]} />
        </mesh>
      </mesh>
    );
  }

  const cores = ["red", "green", "blue", "yellow", "white", "red"];

  const cube3x3 = (
    <mesh ref={refCube3x3}>
      <mesh position={[-1.5, -1.5, -1.5]} rotation={[degX, degY, degZ]}>
        {positions.map((pos, i) => {
          return (
            <mesh key={i}>
              {cube1x1({ x: pos[0], y: pos[1], z: pos[2], colors: cores })}
            </mesh>
          );
        })}
      </mesh>
    </mesh>
  );

  return (
    <div className="cube">
      <Canvas className="canva">
        <ambientLight />
        <pointLight position={[10, 20, 10]} />
        {/* {cube3x3} */}
        {cube1x1({ x: 0, y: 1, z: 0, colors: cores })}
      </Canvas>
    </div>
  );
}
