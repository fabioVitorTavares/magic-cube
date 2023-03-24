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

export type TCubePoints = [
  TPoint3D,
  TPoint3D,
  TPoint3D,
  TPoint3D,
  TPoint3D,
  TPoint3D,
  TPoint3D,
  TPoint3D
]

export type TAngles = {
  x: number,
  y: number,
  z: number
}

export type TCubeProps = {
  position: TPoint2D,
  points: TCubePoints,
  angles: TAngles
}