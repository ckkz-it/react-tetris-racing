import React from 'react';

import StyledStageOverlay from './StyledStageOverlay';

interface Props {
  children: React.ReactNode;
}

const GameOver: React.FC<Props> = ({ children }) => <StyledStageOverlay>{children}</StyledStageOverlay>;

export default GameOver;
