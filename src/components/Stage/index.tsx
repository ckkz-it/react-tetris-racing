import React from "react";

import StyledStage from "./StyledStage";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../../helpers";
import Cell from "../Cell";
import { CellType } from "../../interfaces";

interface Props {
  stage: any[][];
}

const Stage: React.FC<Props> = ({ stage }) => {
  return (
    <StyledStage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
      {stage.map(row => row.map(col => <Cell type={CellType.faded} />))}
    </StyledStage>
  );
};

export default Stage;
