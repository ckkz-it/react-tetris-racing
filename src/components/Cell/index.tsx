import React from "react";

import { CellType } from "../../interfaces";
import StyledCell from "./StyledCell";

interface Props {
  type: CellType;
}

const Cell: React.FC<Props> = ({ type }) => {
  return <StyledCell type={type || CellType.normal} />;
};

export default Cell;
