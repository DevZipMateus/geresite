
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import TemplatesSection from '@/components/sections/TemplatesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import { allTemplates, categories } from '@/data/templateData';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTemplates = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.querySelector('#templates');
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 60,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection scrollToTemplates={scrollToTemplates} />
      <TemplatesSection templates={allTemplates} categories={categories} />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
