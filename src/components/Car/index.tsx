import React from 'react';

import { CAR_MATRIX, CellType } from '../../helpers';
import Cell from '../Cell';

const Car: React.FC = () => {
  return (
    <>
      {CAR_MATRIX.map((row, y) =>
        row.map(
          (cell, x) => cell && <Cell key={`${x} ${y}`} type={CellType.DARK} />,
        ),
      )}
    </>
  );
};

export default Car;
