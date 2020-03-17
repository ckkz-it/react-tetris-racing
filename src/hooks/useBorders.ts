import { useState } from 'react';

import { Coordinate } from '../interfaces';
import { createBorders, STAGE_WIDTH } from '../helpers';

export const useBorders = () => {
  const [borders, setBorders] = useState<Coordinate[]>(createBorders());

  const updateBordersPos = () => {
    const newBorders = borders.map(b => ({ ...b, y: b.y + 1 }));
    setBorders(newBorders);
  };

  return [borders, setBorders, updateBordersPos] as any;
};
