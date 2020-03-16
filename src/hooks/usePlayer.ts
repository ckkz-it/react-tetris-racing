import { useState } from "react";

import { Player } from "../interfaces";

const usePlayer = () => {
  const [player, setPlayer] = useState<Player>({
    pos: { x: 0, y: 0 }
  });

  const updatePlayerPos = ({ x, y }: { x: number; y: number }) => {
    setPlayer(prev => ({
      ...prev,
      x: prev.pos.x + x,
      y: prev.pos.y + y
    }));
  };

  return [player, updatePlayerPos] as any;
};

export default usePlayer;
