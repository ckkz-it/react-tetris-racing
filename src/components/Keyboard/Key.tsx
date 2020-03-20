import React from 'react';

import { StyledKey } from './StyledKey';

interface Props {
  direction: string;
  onPress: () => any;
}

const Key: React.FC<Props> = ({ direction, onPress }) => <StyledKey onClick={onPress}>{direction}</StyledKey>;

export default Key;
