import { useEffect, useState } from 'react';

import { createStage, STAGE_HEIGHT } from '../helpers';
import { Car, Coordinate, Stage } from '../interfaces';

const useStage = (player: Car, borders: Coordinate[]) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage: Stage): Stage => {
      // Clear stage
      const newStage = prevStage.map(row => row.map(() => 0));

      // Draw Car
      player.shape.forEach((row, y) =>
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = 1;
          }
        }),
      );

      // Draw Borders
      borders.forEach(b => {
        if (b.y >= 0 && b.y < STAGE_HEIGHT) {
          newStage[b.y][b.x] = 1;
        }
      });

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, borders]);

  return [stage, setStage] as any;
};

export default useStage;
