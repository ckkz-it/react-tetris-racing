import styled from "styled-components";

import { CellType } from "../../interfaces";
import texture from "../../assets/img/texture.png";

interface Props {
  type: CellType;
}

const StyledCell = styled.div<Props>`
  background: url(${texture}) #000;
  opacity: ${props => (props.type === CellType.normal ? 1 : 0.5)};
`;

export default StyledCell;
