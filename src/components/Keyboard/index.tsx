import React from 'react';

import StyledKeyboard from './StyledKeyboard';
import Key from './Key';
import { ArrowCode } from '../../helpers';
import { KeyWrapper } from './StyledKey';

interface Props {
  onKeyDown: (dir: string) => any;
}

const Keyboard = ({ onKeyDown }: Props) => {
  return (
    <StyledKeyboard>
      <KeyWrapper>
        <Key direction={ArrowCode.ArrowUp} onPress={() => onKeyDown('ArrowUp')} />
      </KeyWrapper>
      <KeyWrapper>
        <Key direction={ArrowCode.ArrowLeft} onPress={() => onKeyDown('ArrowLeft')} />
        <Key direction={ArrowCode.ArrowDown} onPress={() => onKeyDown('ArrowDown')} />
        <Key direction={ArrowCode.ArrowRight} onPress={() => onKeyDown('ArrowRight')} />
      </KeyWrapper>
    </StyledKeyboard>
  );
};

export default Keyboard;
