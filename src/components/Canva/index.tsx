import { useEffect, useRef, useState } from "react";
import {
  TAngles,
  TCubePoints,
  TCubeProps,
  TPoint2D,
  TPoint3D,
} from "../../types/types";
import "./style.css";

export function Canva() {
  const [ax, setAx] = useState<number>(0);
  const [xx, setXx] = useState<number>(0);
  const [x1, setX1] = useState<number>(50);
  const [x2, setX2] = useState<number>(100);

  const refCanva = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  useEffect(() => {
    setCtx(refCanva.current?.getContext("2d"));
  }, []);

  function Cube<TCubeProps>(position: TPoint2D, size: number) {
    const x = position.x;
    const y = position.y;
    const s = size;
    const s2 = size / 2;
    console.log("aqui");
    const dy = ax * s * 2;

    const points: TCubePoints = [
      { x: x - s2, y: y - s2 + dy, z: 0 - s2 },
      { x: x + s2, y: y - s2 + dy, z: 0 - s2 },
      { x: x + s2, y: y + s2 - dy, z: 0 - s2 },
      { x: x - s2, y: y + s2 - dy, z: 0 - s2 },
      { x: x - s2, y: y + s2 - dy, z: 0 + s2 },
      { x: x + s2, y: y + s2 - dy, z: 0 + s2 },
      { x: x + s2, y: y - s2 + dy, z: 0 + s2 },
      { x: x - s2, y: y - s2 + dy, z: 0 + s2 },
    ];

    const angles: TAngles = {
      x: 0,
      y: 0,
      z: 0,
    };

    return { position, points, angles };
  }

  function rotate(angles: TAngles, cube: TCubeProps) {}

  useEffect(() => {
    lop();
  }, [ax]);

  async function lop() {
    await clearCanvas();
    console.log(x1, x2);
    await draw();
  }

  async function draw() {
    if (ctx) {
      ctx.fillStyle = `#${Math.round(Math.random() * 999)}`;
      ctx.moveTo(x1, x1);

      ctx.fillRect(100, 100, x1,x1);

    }
  }
  // async function draw(c: TCubeProps) {
  //   if (ctx) {
  //     ctx.strokeStyle = `#${Math.round(Math.random() * 999)}`;
  //     ctx.moveTo(c.points[0].x, c.points[0].y);
  //     ctx.rotate(180);
  //     ctx.closePath();

  //     for (const p of c.points) {
  //       ctx.lineTo(p.x, p.y);
  //     }
  //     ctx.stroke();
  //   }
  // }

  async function clearCanvas() {
    if (ctx) {
      console.log("clear...");

      ctx.clearRect(0, 0, 500, 200);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          setAx(ax >= 1 ? 0 : ax + 0.05);
          setXx(xx + 50);
          setX1(x1 === 100 ? 50 : x1 + 10)
          setX2(x2 === 50 ? 100 : x2 - 10)
        }}
      >
        +
      </button>
      <button onClick={() => setAx(ax <= 0.06 ? 1 : ax - 0.05)}>-</button>
      <button onClick={() => clearCanvas()}>clear</button>
      <canvas
        className="canva"
        ref={refCanva}
        width={500}
        height={200}
      ></canvas>
    </div>
  );
}
