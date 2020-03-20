import React from 'react';

import StyledDisplay from './StyledDisplay';

interface Props {
  text: string;
}

const Display: React.FC<Props> = ({ text }) => {
  return <StyledDisplay>{text}</StyledDisplay>;
};

export default Display;
