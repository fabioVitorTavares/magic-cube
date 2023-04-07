import * as THREE from 'three';
import { Cube } from "../Cube/cube";
import './style.css'
import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import { CanvasProps } from "../../types/types";


function Canvas({reference}: CanvasProps ) {
  return (
    <canvas className='canva' ref={reference}/>
  )
}

export function App() {

  const canvasRef = useRef<HTMLCanvasElement>() as MutableRefObject<HTMLCanvasElement>

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.current,
    antialias: true,
  });

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  useEffect(() => {
    const scene = new THREE.Scene();    
    camera.position.z = 96;

    

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement)
      
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    
    
    
    scene.add(boxMesh);


    const animate = () => {

      // boxMesh.rotation.x += 0.05;
      // boxMesh.rotation.y += 0.05;
      // boxMesh.rotation.z -= 0.05;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }
    animate();
    console.log('okok');

  }, []);

  return (
    <div>
      <Canvas reference={canvasRef}/>
    </div>
  );
}
