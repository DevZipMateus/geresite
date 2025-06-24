
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar - Now scrolls with the page */}
      <div className="bg-ds3-dark text-white py-1 sm:py-2">
        <div className="container-custom flex justify-end items-center gap-2 sm:gap-6">
          <a href="mailto:vendas@safeguardepis.com.br" className="flex items-center text-xs sm:text-sm hover:text-ds3-gold transition-colors">
            <Mail size={14} className="mr-1 sm:mr-2" />
            <span className="hidden sm:inline">vendas@safeguardepis.com.br</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>
      
      {/* Main Header - Making it fully transparent and positioned lower */}
      <header className="absolute w-full bg-transparent z-10 top-6 sm:top-10">
        <div className="container-custom py-2 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-xl sm:text-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center">
                <div className="bg-ds3-gold text-ds3-dark px-3 py-2 rounded-lg font-bold text-lg sm:text-xl">
                  SAFEGUARD EPIs
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <a href="#about" onClick={e => {
                e.preventDefault();
                scrollToSection('about');
              }} className="nav-link text-white hover:text-ds3-gold cursor-pointer text-sm xl:text-base">
                Sobre Nós
              </a>
              <a href="#services" onClick={e => {
                e.preventDefault();
                scrollToSection('services');
              }} className="nav-link text-white hover:text-ds3-gold cursor-pointer text-sm xl:text-base">
                Produtos
              </a>
              <a href="#technology" onClick={e => {
                e.preventDefault();
                scrollToSection('technology');
              }} className="nav-link text-white hover:text-ds3-gold cursor-pointer text-sm xl:text-base">
                Qualidade
              </a>
              <a href="#clients" onClick={e => {
                e.preventDefault();
                scrollToSection('clients');
              }} className="nav-link text-white hover:text-ds3-gold cursor-pointer text-sm xl:text-base">
                Clientes
              </a>
              <a href="#contact" onClick={e => {
                e.preventDefault();
                scrollToSection('contact');
              }} className="nav-link text-white hover:text-ds3-gold cursor-pointer text-sm xl:text-base">
                Contato
              </a>
              
              <a href="#contact" onClick={e => {
                e.preventDefault();
                scrollToSection('contact');
              }} className="ml-2 xl:ml-4 bg-ds3-gold hover:bg-ds3-gold/90 text-ds3-dark px-4 xl:px-6 py-2 rounded font-medium transition-all text-sm xl:text-base">
                SOLICITAR ORÇAMENTO
              </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white hover:text-ds3-gold focus:outline-none p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-ds3-dark z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container-custom py-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pt-4">
            <Link to="/" className="text-xl font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-ds3-gold text-ds3-dark px-3 py-2 rounded-lg font-bold">
                SAFEGUARD EPIs
              </div>
            </Link>
            <button className="text-white hover:text-ds3-gold focus:outline-none p-2" onClick={toggleMobileMenu}>
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-base sm:text-lg">
            <a href="#about" onClick={e => {
              e.preventDefault();
              scrollToSection('about');
            }} className="text-white hover:text-ds3-gold cursor-pointer py-2">
              Sobre Nós
            </a>
            <a href="#services" onClick={e => {
              e.preventDefault();
              scrollToSection('services');
            }} className="text-white hover:text-ds3-gold cursor-pointer py-2">
              Produtos
            </a>
            <a href="#technology" onClick={e => {
              e.preventDefault();
              scrollToSection('technology');
            }} className="text-white hover:text-ds3-gold cursor-pointer py-2">
              Qualidade
            </a>
            <a href="#clients" onClick={e => {
              e.preventDefault();
              scrollToSection('clients');
            }} className="text-white hover:text-ds3-gold cursor-pointer py-2">
              Clientes
            </a>
            <a href="#contact" onClick={e => {
              e.preventDefault();
              scrollToSection('contact');
            }} className="text-white hover:text-ds3-gold cursor-pointer py-2">
              Contato
            </a>
            
            <a href="#contact" onClick={e => {
              e.preventDefault();
              scrollToSection('contact');
            }} className="bg-ds3-gold hover:bg-ds3-gold/90 text-ds3-dark px-6 py-3 rounded font-medium transition-all text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              SOLICITAR ORÇAMENTO
            </a>
          </div>
          
          <div className="mt-auto pb-8">
            <div className="text-white/70 space-y-4">
              <a href="tel:+5511987654321" className="flex items-center text-sm hover:text-ds3-gold transition-colors py-2">
                <Phone size={16} className="mr-2" />
                (11) 98765-4321
              </a>
              <a href="mailto:vendas@safeguardepis.com.br" className="flex items-center text-sm hover:text-ds3-gold transition-colors py-2">
                <Mail size={16} className="mr-2" />
                vendas@safeguardepis.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
