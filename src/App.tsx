import React, { useState } from "react";
import styled from "styled-components";

import Stage from "./components/Stage";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Stage />
    </Wrapper>
  );
}

export default App;
