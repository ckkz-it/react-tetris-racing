import styled from "styled-components";

import { STAGE_WIDTH } from "../../helpers";

interface Props {
  type: string;
}

const StyledCell = styled.div<Props>`
  width: calc(25vw / ${STAGE_WIDTH});
  background-image: url(${props => props.type});
  background-size: cover;
`;

export default StyledCell;
