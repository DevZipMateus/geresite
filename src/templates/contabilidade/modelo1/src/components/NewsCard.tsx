
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  className?: string;
}

const NewsCard = ({ 
  title, 
  excerpt, 
  date, 
  category,
  imageUrl,
  className 
}: NewsCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium py-1 px-2 rounded">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarIcon className="w-4 h-4 mr-1" />
          {date}
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
          Ler mais
          <svg 
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
