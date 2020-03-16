import React, { useState } from "react";
import styled from "styled-components";

import Stage from "./components/Stage";
import { createStage } from "./helpers";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Stage stage={createStage()} />
    </Wrapper>
  );
};

export default App;
