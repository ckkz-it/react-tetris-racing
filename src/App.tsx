import React, { useState } from 'react';

import './App.css';
import Stage from './components/Stage';
import useStage from './hooks/useStage';
import usePlayer from './hooks/usePlayer';
import {
  CAR_SHAPE,
  checkCarsCollision,
  checkWallCollision,
  createBorders,
  EXPLOSION_ITERATIONS,
  HIGH_SCORE_KEY,
  INITIAL_SPEED,
  isMobile,
  MOVE_POSITION,
  STAGE_HEIGHT,
  STAGE_WIDTH,
} from './helpers';
import { useInterval } from './hooks/useInterval';
import { Car, Coordinate } from './interfaces';
import Button from './components/Button';
import Display from './components/Display';
import Wrapper from './components/Wrapper';
import Aside from './components/Aside';
import Keyboard from './components/Keyboard';

let timeoutId: number | null;

const App: React.FC = () => {
  const [speed, setSpeed] = useState<number | null>(INITIAL_SPEED);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [cars, setCars] = useState<Car[]>([]);
  const [borders, setBorders] = useState<Coordinate[]>([]);
  const [explosion, setExplosion] = useState<{ car: Car | null; iteration: number }>({ car: null, iteration: 0 });
  const [gameOver, setGameOver] = useState(false);

  const [ticks, setTicks] = useState(0);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage] = useStage(player, borders, cars, explosion);

  const movePlayer = (key: string) => {
    const movePosition = MOVE_POSITION[key];
    if (speed !== null && !checkWallCollision(player, stage, movePosition)) {
      const car = checkCarsCollision(player, cars, movePosition);
      if (!car) {
        updatePlayerPos(movePosition);
      } else {
        endGame(car);
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

  const initGame = () => {
    window.addEventListener('keydown', onKeyDown);
  };

  const restartGame = () => {
    setGameOver(false);
    setExplosion({ car: null, iteration: 0 });
    setTicks(0);
    setScore(0);
    setSecondsElapsed(0);
    resetPlayer();
    setSpeed(INITIAL_SPEED);
    setCars([]);
    setBorders([]);
  };

  const endGame = (car: Car) => {
    setGameOver(true);
    setExplosion({ car, iteration: 0 });
    saveHighScore();
  };

  const saveHighScore = () => {
    const hs = window.localStorage.getItem(HIGH_SCORE_KEY);
    if (hs) {
      if (Number(hs) < score) {
        window.localStorage.setItem(HIGH_SCORE_KEY, score.toString());
      }
    } else {
      window.localStorage.setItem(HIGH_SCORE_KEY, score.toString());
    }
  };

  const getHighScore = () => {
    const hs = window.localStorage.getItem(HIGH_SCORE_KEY);
    return hs ? Number(hs) : 0;
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

  initGame();

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
        endGame(car);
      }

      setScore(s => s + (1000 / (speed as number)) * 10);
    },
    gameOver ? null : speed,
  );

  useInterval(
    () => {
      setExplosion(e => ({ ...e, iteration: e.iteration + 1 }));
    },
    gameOver && explosion.iteration < EXPLOSION_ITERATIONS ? 70 : null,
  );

  return (
    <Wrapper>
      <Stage
        stage={stage}
        gameOver={gameOver && explosion.iteration === EXPLOSION_ITERATIONS}
        highScore={getHighScore()}
      />
      <Aside>
        <Display text={`Score: ${score}`} />
        <Button
          callback={() => setSpeed(speed ? null : INITIAL_SPEED)}
          text={speed === null ? 'Resume' : 'Pause'}
          disabled={gameOver}
        />
        {gameOver && explosion.iteration === EXPLOSION_ITERATIONS && (
          <Button callback={() => restartGame()} text={'Restart'} />
        )}
        {isMobile() && <Keyboard onKeyDown={key => movePlayer(key)} />}
      </Aside>
    </Wrapper>
  );
};

export default App;
