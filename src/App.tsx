import React, { useState } from 'react';

import './App.css';
import { useStage } from './hooks/useStage';
import { usePlayer } from './hooks/usePlayer';
import { useInterval } from './hooks/useInterval';
import { useScore } from './hooks/useScore';
import { checkCarsCollision, checkWallCollision, createBorders, getRandomInt, isMobile } from './utils/helpers';
import * as constants from './utils/constants';
import { Car, Coordinate, Explosion } from './utils/interfaces';
import Stage from './components/Stage';
import Button from './components/Button';
import Display from './components/Display';
import Wrapper from './components/Wrapper';
import Aside from './components/Aside';
import Keyboard from './components/Keyboard';

let timeoutId: number | null;

const App: React.FC = () => {
  const [speed, setSpeed] = useState<number | null>(null);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [cars, setCars] = useState<Car[]>([]);
  const [borders, setBorders] = useState<Coordinate[]>([]);
  const [explosion, setExplosion] = useState<Explosion>({ car: null, iteration: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [ticks, setTicks] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage] = useStage(player, borders, cars, explosion);
  const [score, setScore, getHighScore, saveHighScore, resetHighScore] = useScore();

  const _movePlayer = (key: string) => {
    const movePosition = constants.MOVE_POSITION[key];
    if (speed !== null && !gameOver && !checkWallCollision(player, stage, movePosition)) {
      const car = checkCarsCollision(player, cars, movePosition);
      if (!car) {
        updatePlayerPos(movePosition);
      } else {
        endGame(car);
      }
    }
  };

  const movePlayer = (key: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      _movePlayer(key);
    }, 5);
  };

  const getRandomSide = () => (Math.random() > 0.5 ? constants.STAGE_WIDTH - 5 : 2);

  const startGame = () => {
    setSpeed(constants.INITIAL_SPEED);
    setGameStarted(true);
  };

  const restartGame = () => {
    setGameOver(false);
    setExplosion({ car: null, iteration: 0 });
    setTicks(0);
    setScore(0);
    setSecondsElapsed(0);
    resetPlayer();
    setSpeed(constants.INITIAL_SPEED);
    setCars([]);
    setBorders([]);
  };

  const endGame = (car: Car) => {
    setGameOver(true);
    setExplosion({ car, iteration: 0 });
    saveHighScore();
  };

  const produceBorders = () => {
    let newBorders = (borders as Coordinate[])
      .filter(b => b.y < constants.STAGE_HEIGHT)
      .map(b => ({ ...b, y: b.y + 1 }));
    if (ticks % 4 === 0) {
      newBorders = newBorders.concat(createBorders());
    }
    setBorders(newBorders);
  };

  const produceCars = () => {
    const newCars = (cars as Car[])
      .filter(c => c.pos.y < constants.STAGE_HEIGHT)
      .map(c => ({ ...c, pos: { ...c.pos, y: c.pos.y + 1 } }));
    const lastSpawnedCar = newCars[newCars.length - 1];
    if (newCars.length === 0 || (ticks % getRandomInt(8, 10) === 0 && lastSpawnedCar.pos.y > 4)) {
      let sh: number[][];
      if (constants.RANDOM_CAR_SHAPES) {
        sh = constants.CAR_SHAPES[Math.floor(Math.random() * constants.CAR_SHAPES.length)];
      } else {
        sh = constants.CAR_SHAPES[0];
      }
      newCars.push({ shape: sh, pos: { x: getRandomSide(), y: -3 } });
    }
    setCars(newCars);
  };

  useInterval(
    () => {
      setSecondsElapsed(t => t + 1);
    },
    gameOver || paused ? null : 1000,
  );

  useInterval(
    () => {
      produceBorders();
      produceCars();

      setTicks(t => t + 1);

      // Increase speed every 30 seconds
      if (speed !== null && secondsElapsed !== 0 && secondsElapsed % 30 === 0) {
        setSpeed(speed / 1.1);
      }
      const car = checkCarsCollision(player, cars, { x: 0, y: -1 });
      if (car) {
        endGame(car);
        return;
      }

      setScore((s: number) => Math.floor(s + (1000 / (speed as number)) * 10));
    },
    gameOver || paused ? null : speed,
  );

  useInterval(
    () => {
      setExplosion(e => ({ ...e, iteration: e.iteration + 1 }));
    },
    gameOver && explosion.iteration < constants.EXPLOSION_ITERATIONS ? 70 : null,
  );

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (ticks !== 0 && e.key in constants.MOVE_POSITION) {
      e.preventDefault();
      movePlayer(e.key);
    }
  });

  return (
    <Wrapper>
      <Stage
        stage={stage}
        gameOver={gameOver && explosion.iteration === constants.EXPLOSION_ITERATIONS}
        highScore={getHighScore()}
        gameStarted={gameStarted}
      />
      <Aside>
        {isMobile() && <Keyboard onKeyDown={key => movePlayer(key)} />}
        <Display text={`Score: ${score}`} />
        {gameOver && getHighScore() && explosion.iteration === constants.EXPLOSION_ITERATIONS && (
          <Button callback={() => resetHighScore()} text={'Reset High Score'} />
        )}
        {!gameStarted && <Button callback={() => startGame()} text={'Start Game'} />}
        {gameStarted && (
          <Button
            callback={() => !gameOver && setPaused(!paused)}
            text={paused ? 'Resume' : 'Pause'}
            disabled={gameOver}
          />
        )}
        {gameOver && explosion.iteration === constants.EXPLOSION_ITERATIONS && (
          <Button callback={() => restartGame()} text={'Restart'} />
        )}
      </Aside>
    </Wrapper>
  );
};

export default App;
