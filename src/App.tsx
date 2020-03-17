import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import Stage from './components/Stage';
import useStage from './hooks/useStage';
import usePlayer from './hooks/usePlayer';
import { checkCollision, MOVE_POSITION, SPEED } from './helpers';
import { useBorders } from './hooks/useBorders';
import { useInterval } from './hooks/useInterval';

const StageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

let timeoutId: number | null;

const App: React.FC = () => {
  console.log('rerender');
  const [speed, setSpeed] = useState<number | null>(SPEED);

  const [player, updatePlayerPos] = usePlayer();
  const [borders, setBorders, updateBordersPos] = useBorders();
  const [stage] = useStage(player, borders);

  const movePlayer = (key: string) => {
    const movePosition = MOVE_POSITION[key];
    if (checkCollision(player, stage, movePosition)) {
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
      }, 10);
    }
  };

  const startGame = () => {
    window.addEventListener('keydown', onKeyDown);
  };

  startGame();

  useInterval(() => {
    updateBordersPos();
  }, speed);

  return (
    <>
      <StageWrapper>
        <Stage stage={stage} />
      </StageWrapper>
      <button onClick={() => setSpeed(speed ? null : SPEED)}>trigger</button>
    </>
  );
};

export default App;
