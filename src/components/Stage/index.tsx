import React from 'react';

import { CellType, STAGE_HEIGHT, STAGE_WIDTH } from '../../constants';
import { Stage as IStage } from '../../interfaces';
import StyledStage from './StyledStage';
import Cell from '../Cell';
import StageOverlay from '../StageOverlay';

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
            <div style={{ color: '#b90000', fontSize: '1.7rem' }}>GAME OVER</div>
            <div style={{ color: '#cacaca', fontSize: '1.5rem' }}>High Score: {highScore}</div>
          </>
        </StageOverlay>
      )}
    </StyledStage>
  );
};

export default Stage;
