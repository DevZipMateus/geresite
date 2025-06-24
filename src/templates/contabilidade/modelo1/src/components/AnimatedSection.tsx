
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  id?: string;
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0, 
  threshold = 0.2,
  animation = 'fade-in-up',
  id
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay, threshold]);

  const animationClasses = {
    'fade-in-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-in-right': 'opacity-0 translate-x-8',
    'slide-in-left': 'opacity-0 -translate-x-8'
  };

  return (
    <div
      id={id}
      ref={sectionRef}
      className={cn(
        animationClasses[animation],
        isVisible && 'opacity-100 translate-y-0 translate-x-0 transition-all duration-700 ease-out',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
