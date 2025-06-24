
import { cn } from "@/lib/utils";

interface MobileMenuOverlayProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenuOverlay = ({ isMenuOpen, onClose }: MobileMenuOverlayProps) => {
  return (
    <div 
      className={cn(
        'fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300',
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
      aria-hidden="true"
    />
  );
};

export default MobileMenuOverlay;
