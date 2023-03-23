import { useEffect, useRef, useState } from "react";
import { TCube, TPoint2D } from "../../types/types";
import "./style.css";

function Cube<TCube>(points: TPoint2D, size: number) {
  const x = points.x;
  const y = points.y;
  const s = size;

  const pontos = [{ x: x, y: y, z: 0 },
    { x: x + s, y: y, z: 0 },
    { x: x + s, y: y + s, z: 0 },
    { x: x, y: y + s, z: 0 },
    { x: x, y: y + s, z: s },
    { x: x + s, y: y + s, z: s },
    { x: x + s, y: y, z: s },
    { x: x, y: y, z: s }]
  
  // return {
  //   p000: { x: x, y: y, z: 0 },
  //   p100: { x: x + s, y: y, z: 0 },
  //   p110: { x: x + s, y: y + s, z: 0 },
  //   p010: { x: x, y: y + s, z: 0 },
  //   p011: { x: x, y: y + s, z: s },
  //   p111: { x: x + s, y: y + s, z: s },
  //   p101: { x: x + s, y: y, z: s },
  //   p001: { x: x, y: y, z: s },
  // };
  return pontos;
}

export function Canva() {
  const refCanva = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  useEffect(() => {
    setCtx(refCanva.current?.getContext("2d"));
  }, []);

  const p = Cube({x:10,y:10},50)

  function draw() {

    console.log("drawing...");
    console.log(p);
    if (ctx) {
      ctx.strokeStyle = "red";
      ctx.moveTo(p[0].x, p[0].y);
      for (const iterator of p) {
        ctx.lineTo(iterator.x, iterator.y);
      }
      ctx.stroke();
      // ctx.fillStyle = "red";
      // ctx.fillRect(0, 0, 100, 100);
      // ctx.fillRect(100, 100, 100, 100);
      // ctx.moveTo(100, 100);
      // ctx.lineTo(150, 100);
      // ctx.lineTo(150, 150);
      // ctx.lineTo(100, 150);
      // ctx.lineTo(100, 100);
      // ctx.lineTo(75, 75);
      // ctx.lineTo(125, 75);
      // ctx.lineTo(150, 100);
      // ctx.moveTo(75, 75);
      // ctx.lineTo(75, 125);
      // ctx.lineTo(100, 150);
    }
  }

  return (
    <div>
      <button onClick={() => draw()}>draw</button>
      <canvas
        className="canva"
        ref={refCanva}
        width={200}
        height={200}
      ></canvas>
    </div>
  );
}
