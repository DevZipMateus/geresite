
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({ 
  content, 
  author, 
  role, 
  rating = 5,
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 transition-all duration-300",
      className
    )}>
      <div className="flex mb-4">
        {Array(rating).fill(0).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6">
        "{content}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <div className="font-medium">{author}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
