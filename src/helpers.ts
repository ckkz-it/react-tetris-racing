export const FRAME_RATE = 60;
export const STAGE_WIDTH = 10;
export const STAGE_HEIGHT = 18;

export const CAR_MATRIX = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
  [1, 0, 1]
];

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill(0));
