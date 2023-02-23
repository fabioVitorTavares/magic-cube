import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { positions, colors } from "../Configs/configs";
import { useEffect, useRef, useState } from "react";

import { randInt } from "three/src/math/MathUtils";
import { cube1x1Props } from "../../types/types";
import { Line } from "three";

export function Cube() {
  const ref = useRef<THREE.Mesh>(null!);
  const [degX, setDegX] = useState<number>(0);
  const [degY, setDegY] = useState<number>(0);
  const [degZ, setDegZ] = useState<number>(0);

  function aleatoryColor() {
    return `#${randInt(100, 999)}`;
  }

  const defaultColors = ["black", "black", "black", "black", "black", "black"];

  function cube1x1({
    x = 0,
    y = 0,
    z = 0,
    colors = defaultColors,
  }: cube1x1Props) {
    return (
      <>
        <mesh position={[x + 0, y + 0, z + 1]}>          
          <boxGeometry args={[0, 1, 1]} />          
          <meshStandardMaterial color={'black'} />
        </mesh>
        <mesh position={[x + 1, y + 0, z + 1]}>
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial color={colors[randInt(0,5)]} />
        </mesh>
        <mesh position={[x + 0.5, y + 0, z + 0.5]}>
          <boxGeometry args={[1, 1, 0]} />
          <meshStandardMaterial color={colors[randInt(0,5)]} />
        </mesh>
        <mesh position={[x + 0.5, y + 0, z + 1.5]}>
          <boxGeometry args={[1, 1, 0]} />
          <meshStandardMaterial color={colors[randInt(0,5)]} />
        </mesh>
        <mesh position={[x + 0.5, y + -0.5, z + 1]}>
          <boxGeometry args={[1, 0, 1]} />
          <meshStandardMaterial color={colors[randInt(0,5)]} />
        </mesh>
        <mesh position={[x + 0.5, y + 0.5, z + 1]}>
          <boxGeometry args={[1, 0, 1]} />
          <meshStandardMaterial color={colors[randInt(0,5)]} />
        </mesh>
      </>
    );
  }

  const cores = ["red", "green", "blue", "yellow", "white", "red"];

  const cube3x3 = (
    <>
      <OrbitControls />
      <mesh position={[-1.5, -1.5, -1.5]} rotation={[degX, degY, degZ]}>
        {positions.map((pos, i) => {
          return cube1x1({ x: pos[0], y: pos[1], z: pos[2], colors: cores });
        })}
      </mesh>
    </>
  );

  useEffect(() => {}, [degX, degY, degZ]);

  const propsCube1: cube1x1Props = {
    x: 3,
    y: 3,
    z: 1,
    colors: ["red", "green", "black", "yellow", "orange", "red"],
  };

  return (
    <div className="cube">
      <Canvas className="canva">
        <ambientLight />
        <pointLight position={[10, 20, 10]} />
        {cube3x3}
        <mesh position={[3, 3, 1]}>          
          <boxGeometry args={[1, 1, 0,1,1,0]} />
          
          <meshStandardMaterial color={'black'} wireframe={true} wireframeLinewidth={5} />
        </mesh>
      </Canvas>
    </div>
  );
}
