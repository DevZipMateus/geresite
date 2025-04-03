
import { useCallback, useRef, useEffect } from 'react';

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

export const useScrollToSection = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<SectionRefs>({});
  
  useEffect(() => {
    // Capture the header element for offset calculations
    headerRef.current = document.querySelector('header');
    
    // Initialize section refs
    const initSectionRefs = () => {
      // Get all section references once the DOM is loaded
      sectionRefs.current = {
        servicos: document.getElementById('servicos'),
        about: document.getElementById('about'),
        depoimentos: document.getElementById('depoimentos'),
        localizacao: document.getElementById('localizacao'),
        contato: document.getElementById('contato')
      };
      
      console.log("Section refs initialized:", Object.keys(sectionRefs.current).map(key => 
        `${key}: ${sectionRefs.current[key] ? 'found' : 'not found'}`
      ));
      
      // If any important section is not found, retry after a short delay
      const missingSection = Object.keys(sectionRefs.current).find(
        key => !sectionRefs.current[key] && key !== 'contato' // contato might be optional
      );
      
      if (missingSection) {
        console.log(`Missing section: ${missingSection}, will retry initialization`);
        setTimeout(initSectionRefs, 500);
      }
    };
    
    // Initial call to set up refs
    initSectionRefs();
    
    // Additional initialization when DOM is fully loaded
    if (document.readyState === 'complete') {
      initSectionRefs();
    } else {
      window.addEventListener('load', initSectionRefs);
      return () => window.removeEventListener('load', initSectionRefs);
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    
    const findSection = () => {
      // First try to get section from our refs
      let section = sectionRefs.current[sectionId];
      
      // If not found in refs, try to find it directly
      if (!section) {
        section = document.getElementById(sectionId);
        console.log(`Direct lookup for #${sectionId}:`, section ? 'found' : 'not found');
        
        // Update ref if found
        if (section && sectionRefs.current.hasOwnProperty(sectionId)) {
          sectionRefs.current[sectionId] = section;
        }
      }
      
      if (!section) {
        console.error(`Section with ID "${sectionId}" not found. Available sections:`, 
          Array.from(document.querySelectorAll('[id]')).map(el => el.id)
        );
        return null;
      }
      
      return section;
    };
    
    const scrollWithRetry = (retryCount = 0) => {
      const section = findSection();
      
      if (!section) {
        if (retryCount < 5) {
          console.log(`Retry ${retryCount + 1}/5 for scrolling to ${sectionId}`);
          setTimeout(() => scrollWithRetry(retryCount + 1), 300);
        }
        return;
      }
      
      // Get header height to offset scroll position
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      console.log("Header height for offset:", headerHeight);
      
      // Calculate position accounting for header
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerHeight - 20;
      
      console.log("Section position:", sectionPosition);
      console.log("Scrolling to position:", offsetPosition);
      
      // Perform scroll with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Add a confirmation log after scrolling
      setTimeout(() => {
        console.log("Scroll completed to section:", sectionId);
        // Debug scroll position vs section position
        const currentScroll = window.scrollY;
        const sectionPositionAfter = section.getBoundingClientRect().top + window.scrollY;
        console.log(`After scroll - Current scroll: ${currentScroll}, Section position: ${sectionPositionAfter}`);
      }, 1000);
    };
    
    // Start the scroll process with retry capability
    scrollWithRetry();
  }, []);

  const handleSectionClick = useCallback((e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    console.log("Navigation click to section:", sectionId);
    scrollToSection(sectionId);
  }, [scrollToSection]);

  return {
    scrollToSection,
    handleSectionClick
  };
};
