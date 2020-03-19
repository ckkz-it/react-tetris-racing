import React from 'react';

import StyledDisplay from './StyledDisplay';

interface Props {
  text: string;
}

const Display = ({ text }: Props) => {
  return <StyledDisplay>{text}</StyledDisplay>;
};

export default Display;
