import { useEffect, useRef, useState } from "react";
import "./style.css";

export function Canva() {
  const refCanva = useRef<HTMLCanvasElement>(null);
  const [gl, setGl] = useState<WebGLRenderingContext | null>()
  useEffect(() => {
    setGl(refCanva.current?.getContext('webgl'))
  }, []);
  
  useEffect(() => {
    gl?.viewport(0, 0, 500, 500);
    gl?.enable(gl.DEPTH_TEST);

    
  }, []);

  return <canvas className="canva" ref={refCanva}></canvas>;
}
