import { Coordinate } from './interfaces';

export const STAGE_WIDTH = 10;
export const STAGE_HEIGHT = 18;
export const INITIAL_SPEED = 400;
export const HIGH_SCORE_KEY = 'tetrisHighScore';
export const RANDOM_CAR_SHAPES = false;

export const CAR_SHAPES = [
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1],
  ],
  [
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
];

export enum KeyToMove {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

export const MOVE_POSITION: { [key: string]: Coordinate } = {
  [KeyToMove.UP]: { x: 0, y: -1 },
  [KeyToMove.DOWN]: { x: 0, y: 1 },
  [KeyToMove.LEFT]: { x: -3, y: 0 },
  [KeyToMove.RIGHT]: { x: 3, y: 0 },
};

export const EXPLOSION_ITERATIONS = 10;
export const EXPLOSION_SHAPES = [
  [
    [0, 0, 1],
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
    [1, 0, 0],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
    [1, 0, 0],
  ],
];

export const CellType = {
  DARK: '/img/dark_texture.jpg',
  LIGHT: '/img/light_texture.jpg',
};

export enum ArrowCode {
  LEFT = '\u2190',
  UP = '\u2191',
  DOWN = '\u2193',
  RIGHT = '\u2192',
}
