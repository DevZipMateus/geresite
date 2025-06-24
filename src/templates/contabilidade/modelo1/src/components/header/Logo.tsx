
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <div
        className={cn(
          "text-3xl font-bold transition-all duration-300",
          scrolled ? "text-primary" : "text-primary",
          "hover:scale-105"
        )}
      >
        Contabilify
      </div>
    </a>
  );
};

export default Logo;
