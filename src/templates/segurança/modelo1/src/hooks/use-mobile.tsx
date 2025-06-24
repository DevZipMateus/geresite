
import { useState, useEffect } from 'react';

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;
    
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}

// Hook for tablet detection
export function useTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkIsTablet();
    window.addEventListener('resize', checkIsTablet);
    
    return () => {
      window.removeEventListener('resize', checkIsTablet);
    };
  }, []);

  return isTablet;
}

// Hook for screen size detection with ultra-wide support
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...screenSize,
    isMobile: screenSize.width < 768,
    isTablet: screenSize.width >= 768 && screenSize.width < 1024,
    isDesktop: screenSize.width >= 1024 && screenSize.width < 1536,
    isLargeDesktop: screenSize.width >= 1536,
    isUltraWide: screenSize.width >= 1280 && screenSize.height <= 1920,
    aspectRatio: screenSize.width / screenSize.height
  };
}

// Hook specifically for ultra-wide screens like 1080x1920
export function useUltraWide() {
  const { width, height } = useScreenSize();
  
  return {
    isUltraWide: width >= 1080 && height <= 1920,
    isPortraitUltraWide: width < height && width >= 1080,
    needsSpecialLayout: width >= 1280 && height <= 1920
  };
}
