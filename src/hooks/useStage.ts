import { useState } from "react";

import { createStage } from "../helpers";

const useStage = () => {
  const [stage, setStage] = useState(createStage());
  return [stage, setStage];
};

export default useStage;
