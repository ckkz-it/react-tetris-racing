import styled from 'styled-components';

import { STAGE_WIDTH } from '../../utils/constants';

interface Props {
  type: string;
}

const StyledCell = styled.div<Props>`
  width: calc(25vw / ${STAGE_WIDTH});
  background-image: url(${props => props.type});
  background-size: cover;
  box-shadow: 1px 1px 10px rgba(65, 103, 67, 0.2);
`;

export default StyledCell;
