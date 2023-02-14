import "./style.css";
import { Canvas } from "@react-three/fiber";
import {
  BufferGeometryProps,
  MeshProps,
  ThreeElements,
} from "@react-three/fiber/dist/declarations/src";
import { useEffect, useRef, useState } from "react";
import { BufferGeometry, Material, Mesh } from "three";

export function Cube() {
  const ref = useRef<THREE.Mesh>(null!);
  const [degX, setDegX] = useState<number>(10)
  const [degY, setDegY] = useState<number>(20)
  const [degZ, setDegZ] = useState<number>(45)

  const atmCube = (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  );

  useEffect(() => {       
    
    console.log(ref.current.rotation);
    
    
    ref?.current?.rotateY(degY)
    console.log(ref.current.rotation);
    //ref?.current?.rotateZ(degZ) 
  },[])

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
