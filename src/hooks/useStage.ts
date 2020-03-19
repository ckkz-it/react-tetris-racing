import { useEffect, useState } from 'react';

import { createStage, EXPLOSION_SHAPES, STAGE_HEIGHT } from '../helpers';
import { Car, Coordinate, Stage } from '../interfaces';

const useStage = (
  player: Car,
  borders: Coordinate[],
  cars: Car[],
  explosion: { car: Car | null; iteration: number },
) => {
  const [stage, setStage] = useState(createStage());

  const drawOnStage = (newStage: Stage, shape: number[][], pos: Coordinate, clear = false) => {
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (clear) {
          if (y + pos.y >= 0 && y + pos.y < STAGE_HEIGHT) {
            newStage[y + pos.y][x + pos.x] = 0;
          }
        } else {
          if (value !== 0 && y + pos.y >= 0 && y + pos.y < STAGE_HEIGHT) {
            newStage[y + pos.y][x + pos.x] = 1;
          }
        }
      });
    });
  };

  useEffect(() => {
    const updateStage = (prevStage: Stage): Stage => {
      // Clear stage
      const newStage = prevStage.map(row => row.map(() => 0));

      // Draw Player
      drawOnStage(newStage, player.shape, player.pos);

      // Draw Borders
      borders.forEach(b => {
        if (b.y >= 0 && b.y < STAGE_HEIGHT) {
          newStage[b.y][b.x] = 1;
        }
      });

      // Draw Cars
      cars.forEach(car => drawOnStage(newStage, car.shape, car.pos));

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, borders, cars]);

  useEffect(() => {
    if (explosion.car !== null) {
      setStage(prevStage => {
        const car = explosion.car as Car;
        const newStage = [...prevStage];

        // Clear Player
        drawOnStage(newStage, player.shape, player.pos, true);

        // Clear area around Car
        drawOnStage(newStage, car.shape, car.pos, true);

        // Draw Explosion
        const shapeNumber = explosion.iteration % (EXPLOSION_SHAPES.length - 1);
        const shape = EXPLOSION_SHAPES[shapeNumber];
        drawOnStage(newStage, shape, car.pos);

        return newStage;
      });
    }
  }, [explosion.car, explosion.iteration, player]);

  return [stage, setStage] as any;
};

export default useStage;
