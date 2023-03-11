import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { positions, colors, positions3x1 } from "../Configs/configs";
import { useEffect, useRef, useState } from "react";

import { randInt } from "three/src/math/MathUtils";
import { cube1x1Props } from "../../types/types";
import {
  BufferGeometry,
  Euler,
  Quaternion,
  AnimationClip,
  VectorKeyframeTrack,
  NumberKeyframeTrack,
  AnimationMixer,
  Mesh,
} from "three";

const defaultColors = ["black", "black", "black", "black", "black", "black"];
const cores = ["red", "green", "blue", "yellow", "white", "red"];

function cube1x1({
  x = 0,
  y = 0,
  z = 0,
  colors = defaultColors,
}: cube1x1Props) {
  const times = [0, 3, 6];
  const values = [0, 0, 0, 20, 20, 20, 0, 0, 0];

  const positionKF = new VectorKeyframeTrack(
    ".position",
    [0, 3, 6],
    [0, 0, 0, 2, 2, 2, 0, 0, 0]
  );

  const opacityKF = new NumberKeyframeTrack(
    ".material.opacity",
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 0, 1, 0, 1, 0]
  );

  const moveBlinkClip = new AnimationClip("move-n-blink", -1, [
    positionKF,
    opacityKF,
  ]);
  const mesh = new Mesh();
  const mixer = new AnimationMixer(mesh);
  const action = mixer.clipAction(moveBlinkClip);
  action.play();

  // later, you can stop the action
  // action.stop();

  const ref = useRef<THREE.Mesh>(null!);
  const [degX, setDegX] = useState<number>(0);
  const [degY, setDegY] = useState<number>(0);
  const [degZ, setDegZ] = useState<number>(0);

  const [a, setA] = useState<Euler>(new Euler(degX, degY, degZ, "XYZ"));

  //useFrame(() => (ref.current.rotation.x += 0.1));
  //const three = useThree()

  const quartenion = new Quaternion(0, 0, 0, 0);

  useEffect(() => {
    setA(new Euler(degX, degY, degZ, "XYZ"));
    console.log(ref?.current?.animations);
    //ref?.current?.setRotationFromEuler(a);
  }, [degX, degY, degZ]);

  return (
    <mesh ref={ref} animations={[moveBlinkClip]}>
      <mesh>
        <mesh position={[x, y, z + 1]}>
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial color={colors[0]} />
        </mesh>
        <mesh position={[x + 1, y, z + 1]}>
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial color={colors[1]} />
        </mesh>
        <mesh position={[x + 0.5, y, z + 0.5]}>
          <boxGeometry args={[1, 1, 0]} />
          <meshStandardMaterial color={colors[2]} />
        </mesh>
        <mesh position={[x + 0.5, y, z + 1.5]}>
          <boxGeometry args={[1, 1, 0]} />
          <meshStandardMaterial color={colors[3]} />
        </mesh>
        <mesh position={[x + 0.5, y - 0.5, z + 1]}>
          <boxGeometry args={[1, 0, 1]} />
          <meshStandardMaterial color={colors[4]} />
        </mesh>
        <mesh position={[x + 0.5, y + 0.5, z + 1]}>
          <boxGeometry args={[1, 0, 1]} />
          <meshStandardMaterial color={colors[5]} />
        </mesh>
      </mesh>
    </mesh>
  );
}

export function Cube() {
  const cube3x3 = (
    <mesh>
      <mesh position={[-1.5, -1.5, -1.5]}>
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

  const cube3x1 = (
    <mesh>
      <mesh position={[0, 0, 0]}>
        {positions3x1.map((pos, i) => {
          return (
            <mesh key={i}>
              <OrbitControls></OrbitControls>
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
        {cube1x1({ x: -0.5, y: 0, z: -1, colors: cores })}
      </Canvas>
    </div>
  );
}
