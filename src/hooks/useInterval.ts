import { useEffect, useRef } from 'react';

import { Callback, Hook } from '../utils/interfaces';


// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval: Hook<void> = (callback: Callback, delay: number | null) => {
  const savedCallback = useRef<Callback>();

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
