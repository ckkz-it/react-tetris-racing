import React from "react";

import StyledCell from "./StyledCell";
import { CellType } from "../../helpers";

interface Props {
  type: string;
}

const Cell: React.FC<Props> = ({ type }) => {
  return <StyledCell type={type || CellType.LIGHT} />;
};

export default Cell;
