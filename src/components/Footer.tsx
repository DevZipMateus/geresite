
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MonteSite</h3>
            <p className="text-muted-foreground">
              Soluções inteligentes que transformam seu negócio. Crie rapidamente um site profissional para sua empresa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#criar-site" className="text-muted-foreground hover:text-primary transition-colors">Criar Site</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MonteSite. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
