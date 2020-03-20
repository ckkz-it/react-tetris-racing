import { useState } from 'react';

import { Car, Coordinate, Hook } from '../interfaces';
import { CAR_SHAPES, STAGE_HEIGHT, STAGE_WIDTH } from '../constants';

const initialPlayer = {
  pos: { x: STAGE_WIDTH - 5, y: STAGE_HEIGHT - 5 },
  shape: CAR_SHAPES[0],
};

export const usePlayer: Hook<[Car, (c: Coordinate) => void, () => void]> = () => {
  const [player, setPlayer] = useState<Car>({ ...initialPlayer });

  const updatePlayerPos = ({ x, y }: Coordinate) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
    }));
  };

  const resetPlayer = () => {
    setPlayer({ ...initialPlayer });
  };

  return [player, updatePlayerPos, resetPlayer];
};
