import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import bgImage from './assets/img/bg.jpg';
import Stage from './components/Stage';
import useStage from './hooks/useStage';
import usePlayer from './hooks/usePlayer';
import {
  CAR_SHAPE,
  checkCarsCollision,
  checkWallCollision,
  createBorders,
  INITIAL_SPEED,
  MOVE_POSITION,
  STAGE_HEIGHT,
  STAGE_WIDTH,
} from './helpers';
import { useInterval } from './hooks/useInterval';
import { Car, Coordinate } from './interfaces';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  background-image: url(${bgImage});
  background-size: cover;
`;

let timeoutId: number | null;

const App: React.FC = () => {
  const [speed, setSpeed] = useState<number | null>(INITIAL_SPEED);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [cars, setCars] = useState<Car[]>([]);
  const [borders, setBorders] = useState<Coordinate[]>([]);
  const [explosion, setExplosion] = useState<{ car: Car | null; iteration: number }>({ car: null, iteration: 0 });
  const [gameOver, setGameOver] = useState(false);

  const [ticks, setTicks] = useState(0);

  const [player, updatePlayerPos] = usePlayer();
  const [stage] = useStage(player, borders, cars, explosion);

  const movePlayer = (key: string) => {
    const movePosition = MOVE_POSITION[key];
    if (speed !== null && !checkWallCollision(player, stage, movePosition)) {
      const car = checkCarsCollision(player, cars, movePosition);
      if (!car) {
        updatePlayerPos(movePosition);
      } else {
        setGameOver(true);
        setExplosion({ car, iteration: 0 });
      }
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key in MOVE_POSITION) {
      e.preventDefault();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        movePlayer(e.key);
      }, 5);
    }
  };

  const getRandomSide = () => (Math.random() > 0.5 ? STAGE_WIDTH - 5 : 2);

  const startGame = () => {
    window.addEventListener('keydown', onKeyDown);
  };

  const produceBorders = () => {
    let newBorders = (borders as Coordinate[]).filter(b => b.y < STAGE_HEIGHT).map(b => ({ ...b, y: b.y + 1 }));
    if (ticks % 4 === 0) {
      newBorders = newBorders.concat(createBorders());
    }
    setBorders(newBorders);
  };

  const produceCars = () => {
    const newCars = (cars as Car[])
      .filter(c => c.pos.y < STAGE_HEIGHT)
      .map(c => ({ ...c, pos: { ...c.pos, y: c.pos.y + 1 } }));
    if (ticks % 10 === 0) {
      newCars.push({ shape: CAR_SHAPE, pos: { x: getRandomSide(), y: -3 } });
    }
    setCars(newCars);
  };

  startGame();

  useInterval(
    () => {
      setSecondsElapsed(t => t + 1);
    },
    gameOver ? null : 1000,
  );

  useInterval(
    () => {
      produceBorders();
      produceCars();

      setTicks(t => t + 1);

      // Increase speed every 30 seconds
      if (speed !== null && secondsElapsed !== 0 && secondsElapsed % 30 === 0) {
        setSpeed(speed / 1.5);
      }
      const car = checkCarsCollision(player, cars, { x: 0, y: -1 });
      if (car) {
        setGameOver(true);
        setExplosion({ car, iteration: 0 });
      }
    },
    gameOver ? null : speed,
  );

  useInterval(
    () => {
      setExplosion(e => ({ ...e, iteration: e.iteration + 1 }));
    },
    gameOver && explosion.iteration < 10 ? 70 : null,
  );

  return (
    <>
      <Wrapper>
        <Stage stage={stage} />
      </Wrapper>
      <button onClick={() => setSpeed(speed ? null : INITIAL_SPEED)}>TRIGGER</button>
    </>
  );
};

export default App;
