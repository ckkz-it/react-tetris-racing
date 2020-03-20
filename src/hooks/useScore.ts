import { useState } from 'react';

import { HIGH_SCORE_KEY } from '../utils/constants';
import { Callback, Hook, UseStateAction } from '../utils/interfaces';

export const useScore: Hook<[number, UseStateAction<number>, () => number, Callback, Callback]> = () => {
  const [score, setScore] = useState(0);

  const saveHighScore = () => {
    const hs = window.localStorage.getItem(HIGH_SCORE_KEY);
    if (hs) {
      if (Number(hs) < score) {
        window.localStorage.setItem(HIGH_SCORE_KEY, score.toString());
      }
    } else {
      window.localStorage.setItem(HIGH_SCORE_KEY, score.toString());
    }
  };

  const getHighScore = () => {
    const hs = window.localStorage.getItem(HIGH_SCORE_KEY);
    return hs ? Number(hs) : 0;
  };

  const resetHighScore = () => {
    window.localStorage.removeItem(HIGH_SCORE_KEY);
    setScore(0);
  };

  return [score, setScore, getHighScore, saveHighScore, resetHighScore];
};
