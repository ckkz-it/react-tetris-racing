import { Car, Coordinate, Stage } from './interfaces';

export const FRAME_RATE = 60;
export const STAGE_WIDTH = 10;
export const STAGE_HEIGHT = 18;
export const SPEED = 500;

export const CAR_MATRIX = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
  [1, 0, 1],
];
export const MOVE_POSITION: { [key: string]: Coordinate } = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -3, y: 0 },
  ArrowRight: { x: 3, y: 0 },
};

export const createStage = (): Stage => Array.from(new Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill(0));

export const createBorders = (): Coordinate[] => {
  const borders: Coordinate[] = [];
  for (let y = -1; y > -20; y -= 1) {
    if (y % 4 === 0) {
      y -= 1;
    }
    borders.push({ x: 0, y });
  }
  for (let y = -1; y > -20; y -= 1) {
    if (y % 4 === 0) {
      y -= 1;
    }
    borders.push({ x: STAGE_WIDTH - 1, y });
  }
  return borders;
};

export const checkCollision = (player: Car, stage: Stage, { x: moveX, y: moveY }: { x: number; y: number }) => {
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
    return false;
  }
  return true;
};

export const CellType = {
  DARK: '/img/dark_texture.jpg',
  LIGHT: '/img/light_texture.jpg',
};
