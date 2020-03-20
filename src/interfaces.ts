import { Dispatch, SetStateAction } from 'react';

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

export type UseStateAction<T> = Dispatch<SetStateAction<T>>;

export type Hook<T> = (...args: any[]) => T;
