import React from 'react';

import { CellType, STAGE_HEIGHT, STAGE_WIDTH } from '../../utils/constants';
import { Stage as IStage } from '../../utils/interfaces';
import StyledStage from './StyledStage';
import Cell from '../Cell';
import StageOverlay from '../StageOverlay';
import StyledGameOver from './StyledGameOver';
import StyledHighScore from './StyledHighScore';

interface Props {
  stage: IStage;
  gameOver: boolean;
  highScore: number;
}

const Stage: React.FC<Props> = ({ stage, gameOver, highScore }) => {
  const cells = stage.map((row, y) =>
    row.map((value, x) => <Cell key={`${y}${x}${value}`} type={value !== 0 ? CellType.DARK : CellType.LIGHT} />),
  );
  return (
    <StyledStage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
      {cells}
      {gameOver && (
        <StageOverlay>
          <>
            <StyledGameOver>GAME OVER</StyledGameOver>
            <StyledHighScore>High Score: {highScore}</StyledHighScore>
          </>
        </StageOverlay>
      )}
    </StyledStage>
  );
};

export default Stage;
