import React from 'react';

import { CellType, STAGE_HEIGHT, STAGE_WIDTH } from '../../helpers';
import { Stage as IStage } from '../../interfaces';
import StyledStage from './StyledStage';
import Cell from '../Cell';

interface Props {
  stage: IStage;
}

const Stage: React.FC<Props> = ({ stage }) => {
  const cells = stage.map((row, y) =>
    row.map((value, x) => <Cell key={`${y}${x}${value}`} type={value !== 0 ? CellType.DARK : CellType.LIGHT} />),
  );
  return (
    <StyledStage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
      {cells}
    </StyledStage>
  );
};

export default Stage;
