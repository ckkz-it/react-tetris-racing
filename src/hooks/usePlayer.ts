import { useState } from 'react';

import { Car, Coordinate } from '../interfaces';
import { CAR_SHAPES, STAGE_HEIGHT, STAGE_WIDTH } from '../helpers';

const initialPlayer = {
  pos: { x: STAGE_WIDTH - 5, y: STAGE_HEIGHT - 5 },
  shape: CAR_SHAPES[0],
};

const usePlayer = () => {
  const [player, setPlayer] = useState<Car>({...initialPlayer});

  const updatePlayerPos = ({ x, y }: Coordinate) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
    }));
  };

  const resetPlayer = () => {
    setPlayer({...initialPlayer});
  };

  return [player, updatePlayerPos, resetPlayer] as any;
};

export default usePlayer;
