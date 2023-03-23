import { useEffect, useRef, useState } from "react";
import {TCube, TPoint2D } from '../../types/types'
import "./style.css";

function Cube<TCube>(points: TPoint2D, size: number) {
  const x = points.x;
  const y = points.y;
  const s = size;
  return {
    p000: {x:x,y:y,z:0},
    p100: {x: x+s, y,0},
    p110: {x: x+s, y+s,0},
    p010: {x: x,y+s,0},
    p011: {x: x,y+s,s},
    p111: {x: x+s,y+s,s},
    p101: {x: x+s,y,s},
    p001: {x: x,y,s},
}
}


export function Canva() {
  const refCanva = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  useEffect(() => {
    setCtx(refCanva.current?.getContext("2d"));
  }, []);

  

  const cube:TCube = {
    { }, { }, { }, { }, { }, { }, { }, { }
  }

  useEffect(() => {
    if (ctx) {
      ctx.fillStyle;
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 40, 50);
    }
  }, []);

  return <canvas className="canva" ref={refCanva}></canvas>;
}
