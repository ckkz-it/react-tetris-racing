import React from 'react';
import StyledGameOver from './StyledGameOver';

interface Props {
  highScore: number;
}

const GameOver = () => <StyledGameOver>Game Over</StyledGameOver>;

export default GameOver;
