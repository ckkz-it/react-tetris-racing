import React from 'react';

import StyledCell from './StyledCell';

interface Props {
  type: string;
}

const Cell: React.FC<Props> = ({ type }) => <StyledCell type={type} />;

export default React.memo(Cell);
