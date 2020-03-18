import { useState } from 'react';

import { Coordinate } from '../interfaces';
import { createBorders, STAGE_HEIGHT } from '../helpers';

export const useBorders = (tick: number) => {
  const [borders, setBorders] = useState<Coordinate[]>([]);

  const produceBorders = () => {
    let newBorders = borders.filter(b => b.y < STAGE_HEIGHT).map(b => ({ ...b, y: b.y + 1 }));
    if (tick % 4 === 0) {
      newBorders = newBorders.concat(createBorders());
    }
    setBorders(newBorders);
  };

  return [borders, produceBorders] as any;
};
