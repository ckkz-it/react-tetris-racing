import React from 'react';

import StyledKeyboard from './StyledKeyboard';
import Key from './Key';
import { ArrowCode, KeyToMove } from '../../helpers';
import { KeyWrapper } from './StyledKey';

interface Props {
  onKeyDown: (key: string) => void;
}

const Keyboard = ({ onKeyDown }: Props) => {
  return (
    <StyledKeyboard>
      <KeyWrapper>
        <Key direction={ArrowCode.UP} onPress={() => onKeyDown(KeyToMove.UP)} />
      </KeyWrapper>
      <KeyWrapper>
        <Key direction={ArrowCode.LEFT} onPress={() => onKeyDown(KeyToMove.LEFT)} />
        <Key direction={ArrowCode.DOWN} onPress={() => onKeyDown(KeyToMove.DOWN)} />
        <Key direction={ArrowCode.RIGHT} onPress={() => onKeyDown(KeyToMove.RIGHT)} />
      </KeyWrapper>
    </StyledKeyboard>
  );
};

export default Keyboard;
