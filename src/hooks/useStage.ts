import { useEffect, useState } from 'react';

import { createStage, STAGE_HEIGHT } from '../helpers';
import { Car, Coordinate, Stage } from '../interfaces';

const useStage = (player: Car, borders: Coordinate[], cars: Car[]) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage: Stage): Stage => {
      // Clear stage
      const newStage = prevStage.map(row => row.map(() => 0));

      // Draw Player
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

      // Draw Cars
      cars.forEach(car =>
        car.shape.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0 && y + car.pos.y >= 0 && y + car.pos.y < STAGE_HEIGHT) {
              newStage[y + car.pos.y][x + car.pos.x] = 1;
            }
          });
        }),
      );

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, borders, cars]);

  return [stage, setStage] as any;
};

export default useStage;
