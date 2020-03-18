import { useEffect, useRef } from 'react';

type cb = () => void;

export function useInterval(callback: cb, delay: number | null) {
  const savedCallback = useRef<cb>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      (savedCallback.current as cb)();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
