import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import bg from './assets/img/bg.jpg';
import Stage from './components/Stage';
import useStage from './hooks/useStage';
import usePlayer from './hooks/usePlayer';
import { checkWallCollision, MOVE_POSITION, INITIAL_SPEED } from './helpers';
import { useBorders } from './hooks/useBorders';
import { useInterval } from './hooks/useInterval';

const StageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  background-image: url(${bg});
  background-size: cover;
`;

let timeoutId: number | null;

const App: React.FC = () => {
  console.log('rerender');
  const [speed, setSpeed] = useState<number | null>(INITIAL_SPEED);
  const [tick, setTick] = useState(0);

  const [player, updatePlayerPos] = usePlayer();
  const [borders, produceBorders] = useBorders(tick);
  const [stage] = useStage(player, borders);

  const movePlayer = (key: string) => {
    const movePosition = MOVE_POSITION[key];
    if (checkWallCollision(player, stage, movePosition)) {
      updatePlayerPos(movePosition);
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

  const startGame = () => {
    window.addEventListener('keydown', onKeyDown);
  };

  startGame();

  useInterval(() => {
    produceBorders();
    setTick(t => t + 1);
    if (tick % 120 === 0 && speed !== null) {
      setSpeed(speed / 1.5);
    }
  }, speed);

  return (
    <>
      <StageWrapper>
        <Stage stage={stage} />
      </StageWrapper>
      <button onClick={() => setSpeed(speed ? null : INITIAL_SPEED)}>TRIGGER</button>
    </>
  );
};

export default App;
