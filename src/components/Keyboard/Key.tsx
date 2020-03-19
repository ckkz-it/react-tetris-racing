import React from 'react';

import { StyledKey } from './StyledKey';

interface Props {
  direction: string;
  onPress: () => any;
}

const Key = ({ direction, onPress }: Props) => <StyledKey onClick={onPress}>{direction}</StyledKey>;

export default Key;
