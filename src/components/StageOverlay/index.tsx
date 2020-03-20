import React from 'react';

import StyledStageOverlay from './StyledStageOverlay';

interface Props {
  children: React.ReactElement;
}

const GameOver = ({ children }: Props) => <StyledStageOverlay>{children}</StyledStageOverlay>;

export default GameOver;
