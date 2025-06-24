
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

const PlanCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  className 
}: PlanCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl overflow-hidden transition-all duration-300",
      isPopular ? "border-primary/50 shadow-lg ring-1 ring-primary/20" : "border-gray-100",
      className
    )}>
      {isPopular && (
        <div className="bg-primary text-white text-center py-2 text-sm font-medium">
          Mais Popular
        </div>
      )}
      
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        
        <div className="mt-5">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-1">/mês</span>
        </div>
        
        <ul className="mt-6 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a
          href="#contato"
          className={cn(
            "mt-8 w-full block text-center py-3 rounded-md font-medium transition-colors",
            isPopular 
              ? "bg-primary text-white hover:bg-primary/90" 
              : "bg-white text-primary border border-gray-200 hover:bg-gray-50"
          )}
        >
          Escolher Plano
        </a>
      </div>
    </div>
  );
};

export default PlanCard;
