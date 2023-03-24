import { useEffect, useRef, useState } from "react";
import { TAngles, TCubeProps, TPoint2D } from "../../types/types";
import "./style.css";

export function Canva() {
  const [ax, setAx] = useState<number>(0);

  const refCanva = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  useEffect(() => {
    setCtx(refCanva.current?.getContext("2d"));
  }, []);

  useEffect(() => {
    console.log(ax);
  }, [ax]);

  function Cube<TCubeProps>(position: TPoint2D, size: number) {
    const x = position.x;
    const y = position.y;
    const s = size;
    const s2 = size / 2;

    const dy = ax * s * 2;

    const points = [
      { x: x - s2, y: y - s2 + dy, z: 0 - s2 },
      { x: x + s2, y: y - s2 + dy, z: 0 - s2 },
      { x: x + s2, y: y + s2 - dy, z: 0 - s2 },
      { x: x - s2, y: y + s2 - dy, z: 0 - s2 },
      { x: x - s2, y: y + s2 - dy, z: 0 + s2 },
      { x: x + s2, y: y + s2 - dy, z: 0 + s2 },
      { x: x + s2, y: y - s2 + dy, z: 0 + s2 },
      { x: x - s2, y: y - s2 + dy, z: 0 + s2 },
    ];

    const angles = {
      x: 0,
      y: 0,
      z: 0,
    };

    return { position, points, angles };
  }

  function rotate(angles: TAngles, cube: TCubeProps) {}

  useEffect(() => {
    if (ctx) {
      clearCanvas();
      const c = Cube({ x: 100, y: 100 }, 50);
      ctx.strokeStyle = "red";
      ctx.moveTo(c.points[0].x, c.points[0].y);
      for (const p of c.points) {
        ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }
  }, [ax]);


  function draw() {
    console.log("drawing...");
    if (ctx) {
      ctx.strokeStyle = "red";
      ctx.moveTo(c.points[0].x, c.points[0].y);
      for (const p of c.points) {
        ctx.lineTo(p.x, p.y);
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

  function clearCanvas() {
    if (ctx) ctx.clearRect(0, 0, 200, 200);
  }

  return (
    <div>
      <button onClick={() => draw()}>draw</button>
      <button onClick={() => setAx(ax >= 1 ? 0 : ax + 0.05)}>+</button>
      <button onClick={() => setAx(ax <= 0.06 ? 1 : ax - 0.05)}>-</button>
      <button onClick={() => clearCanvas()}>clear</button>
      <canvas
        className="canva"
        ref={refCanva}
        width={200}
        height={200}
      ></canvas>
    </div>
  );
}
