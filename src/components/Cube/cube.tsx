import "./style.css";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useRef, useState } from "react";
import THREE, { BufferGeometry, Mesh, MeshBasicMaterial, rotateInX } from "three";

export function Cube() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const [degX, setDegX] = useState<number>(0);
  const [degY, setDegY] = useState<number>(0);
  const [degZ, setDegZ] = useState<number>(0);

  type angle = {
    angle: number
  }

  const r:angle = {angle: 0.01}

  // function animate() {
  //   cubeRef.current.rotateX = (angle) => {
  //     return (
  //       <BufferGeometry >

  //       </BufferGeometry>
  //     )
  //   }; 
  //   requestAnimationFrame(() => animate());
  // }

  // useEffect(() => {
  //   animate();
  // }, []);

  const cube = (
    <Box ref={cubeRef} args={[2,2,2,1,1,5]}>

    </Box>
  );

  return (
    <div className="cube">
      <Canvas className="canva">
        <OrbitControls/>
        {cube}
      </Canvas>
    </div>
  );
}
