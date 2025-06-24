
import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [reduceAnimations, setReduceAnimations] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceAnimations(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceAnimations(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return { reduceAnimations };
};
