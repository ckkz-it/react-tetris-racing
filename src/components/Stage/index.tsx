import React from "react";

import StyledStage from "./StyledStage";
import { CellType, STAGE_HEIGHT, STAGE_WIDTH } from "../../helpers";
import Cell from "../Cell";

interface Props {
  stage: number[][];
}

const Stage: React.FC<Props> = ({ stage }) => {
  return (
    <StyledStage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
      {stage.map((row, y) =>
        row.map((cell, x) => <Cell key={`${y}${x}`} type={CellType.LIGHT} />)
      )}
    </StyledStage>
  );
};

export default Stage;
