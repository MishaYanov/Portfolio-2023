import { useRef, useCallback } from 'react';

type ThrottledFunction<T extends any[]> = (...args: T) => void;

function throttle<T extends any[]>(func: ThrottledFunction<T>, limit: number): ThrottledFunction<T> {
  let inThrottle: boolean;
  return function(this: ThisParameterType<ThrottledFunction<T>>, ...args: T) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function useThrottle<T extends any[]>(callback: ThrottledFunction<T>, delay: number): ThrottledFunction<T> {
  const throttledCallback = useRef(throttle(callback, delay)).current;

  return useCallback(throttledCallback, [throttledCallback]);
}

export default useThrottle;
