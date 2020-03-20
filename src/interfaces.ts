export type Stage = number[][];

export interface Car {
  pos: { x: number; y: number };
  shape: number[][];
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface Explosion {
  car: Car | null;
  iteration: number;
}
