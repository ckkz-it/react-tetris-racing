import React from 'react';
import StyledGameOver from './StyledGameOver';

interface Props {
  highScore: number;
}

const GameOver = ({ highScore }: Props) => (
  <StyledGameOver>
    <div>GAME OVER</div>
    <div>High Score: {highScore}</div>
  </StyledGameOver>
);

export default GameOver;
