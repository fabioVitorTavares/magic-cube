import { Color } from "three/src/math/Color"

export type cube1x1Props = {
  x?: number,
  y?: number,
  z?: number,
  colors?: Color[] | string[]
}

export type TPoint2D = {
  x: number,
  y: number,
}

export type TPoint3D = TPoint2D &{
  z: number,
}

export type TCube = {
  p000: TPoint3D,
  p100: TPoint3D,
  p110: TPoint3D,
  p010: TPoint3D,
  p011: TPoint3D,
  p111: TPoint3D,
  p101: TPoint3D,
  p001: TPoint3D,
}