import React from 'react';

import StyledButton from './StyledButton';

interface Props {
  callback: () => void;
  text: string;
  disabled?: boolean;
}

const Button = ({ callback, text, ...rest }: Props) => {
  return <StyledButton onClick={callback} {...rest}>{text}</StyledButton>;
};

export default Button;
