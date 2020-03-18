import React from 'react';

import { CAR_SHAPE, CellType } from '../../helpers';
import Cell from '../Cell';

const Car: React.FC = () => {
  return (
    <>
      {CAR_SHAPE.map((row, y) => row.map((cell, x) => cell && <Cell key={`${x}${y}${cell}`} type={CellType.DARK} />))}
    </>
  );
};

export default Car;
