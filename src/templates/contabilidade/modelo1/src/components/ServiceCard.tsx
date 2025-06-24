
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group",
      className
    )}>
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
