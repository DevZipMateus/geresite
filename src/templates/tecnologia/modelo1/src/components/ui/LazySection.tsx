
import React, { useState, useRef, useEffect } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  threshold?: number;
}

const LazySection: React.FC<LazySectionProps> = ({ children, fallback, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazySection;
