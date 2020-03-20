import React from 'react';

import StyledButton from './StyledButton';

interface Props {
  callback: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ callback, text, ...rest }) => {
  return <StyledButton onClick={callback} {...rest}>{text}</StyledButton>;
};

export default Button;
