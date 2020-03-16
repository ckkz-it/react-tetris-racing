import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Stage from "./components/Stage";
import useStage from "./hooks/useStage";
import usePlayer from "./hooks/usePlayer";
import { SPEED } from "./helpers";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const App: React.FC = () => {
  const [speed, setSpeed] = useState(SPEED);

  const [stage] = useStage();
  const [player, updatePlayerPos] = usePlayer();

  const movePlayer = (e: KeyboardEvent) => {
    console.log(e);
    const up = e.key === "ArrowUp";
    const left = e.key === "ArrowLeft";
    const right = e.key === "ArrowRight";
    if (up) {
      updatePlayerPos({ x: 0, y: 1 });
    }
    if (left) {
      updatePlayerPos({ x: -1, y: 0 });
    }
    if (right) {
      updatePlayerPos({ x: 1, y: 0 });
    }
  };

  const startGame = () => {
    window.addEventListener("keydown", movePlayer);
  };

  startGame();

  return (
    <Wrapper>
      <Stage stage={stage as number[][]} />
    </Wrapper>
  );
};

export default App;
