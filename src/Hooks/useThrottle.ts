import { useRef, useCallback } from 'react';

// Define the type for the function you want to throttle
type ThrottledFunction<T extends any[]> = (...args: T) => void;

// Throttle function
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

// Custom hook
function useThrottle<T extends any[]>(callback: ThrottledFunction<T>, delay: number): ThrottledFunction<T> {
  const throttledCallback = useRef(throttle(callback, delay)).current;

  return useCallback(throttledCallback, [throttledCallback]);
}

export default useThrottle;
