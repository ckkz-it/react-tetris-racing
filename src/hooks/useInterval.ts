import { useEffect, useRef } from 'react';

import { Hook } from '../interfaces';

type cb = () => void;

export const useInterval: Hook<void> = (callback: cb, delay: number | null) => {
  const savedCallback = useRef<cb>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
