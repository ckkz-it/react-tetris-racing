import { useState } from 'react';

import { Car, Coordinate } from '../interfaces';
import { CAR_SHAPE, STAGE_HEIGHT, STAGE_WIDTH } from '../helpers';

const usePlayer = () => {
  const [player, setPlayer] = useState<Car>({
    pos: { x: STAGE_WIDTH - 5, y: STAGE_HEIGHT - 5 },
    shape: CAR_SHAPE,
  });

  const updatePlayerPos = ({ x, y }: Coordinate) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
    }));
  };

  return [player, updatePlayerPos] as any;
};

export default usePlayer;
