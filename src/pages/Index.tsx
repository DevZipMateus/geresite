
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AboutUs from '@/components/sections/AboutUs';
import Team from '@/components/sections/Team';
import Plans from '@/components/sections/Plans';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <AboutUs />
        <Team />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="5599999999999" />
    </div>
  );
};

export default Index;
