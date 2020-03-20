import { Car, Coordinate, Stage } from './interfaces';

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

export const createStage = (): Stage => Array.from(new Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill(0));

export const createBorders = (): Coordinate[] => {
  return [
    { x: 0, y: -1 },
    { x: 0, y: -2 },
    { x: 0, y: -3 },
    { x: STAGE_WIDTH - 1, y: -1 },
    { x: STAGE_WIDTH - 1, y: -2 },
    { x: STAGE_WIDTH - 1, y: -3 },
  ];
};

export const checkWallCollision = (player: Car, stage: Stage, { x: moveX, y: moveY }: Coordinate) => {
  if (
    // Out to left (including car size)
    player.pos.x + moveX + player.shape[0].length > STAGE_WIDTH ||
    // Out to right (including car size)
    player.pos.x + moveX < 0 ||
    // Out to bottom (including car size and padding of 1)
    player.pos.y + moveY + player.shape.length + 1 > STAGE_HEIGHT ||
    // Out to top (including padding of 1)
    player.pos.y + moveY - 1 < 0
  ) {
    return true;
  }
  return false;
};

export const checkCarsCollision = (player: Car, cars: Car[], { x: moveX, y: moveY }: Coordinate) => {
  for (const car of cars) {
    if (
      player.pos.x + moveX === car.pos.x &&
      // Hit car moving from left to right or vice versa being on same level of lower
      ((player.pos.y + moveY >= car.pos.y && player.pos.y + moveY < car.pos.y + car.shape.length) ||
        // Hit car moving from left to right or vice versa being on same level of higher
        (player.pos.y + moveY <= car.pos.y && player.pos.y + moveY + player.shape.length > car.pos.y))
    ) {
      return car;
    }
  }
  return null;
};

export const isMobile = () => window.innerWidth < 900;

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
