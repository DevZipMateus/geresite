
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  formUrl: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  formUrl
}) => {
  // Using the static image path instead of the dynamic one from props
  const staticImageUrl = '/lovable-uploads/00edb883-d253-4be4-a00c-96dc2057fd11.png';
  
  return (
    <Card className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="relative overflow-hidden bg-gray-100">
        <AspectRatio ratio={16/9}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl"></div>
            <img 
              id={`template-image-${id}`}
              src={staticImageUrl}
              alt={`Preview of ${title} template`}
              className="relative w-full h-full object-cover z-10"
            />
          </div>
        </AspectRatio>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs"
            asChild
          >
            <a href={`#template-${id}`} onClick={(e) => e.preventDefault()}>
              Visualizar
            </a>
          </Button>
          
          <Button 
            className="rounded-full"
            asChild
          >
            <a href={formUrl} target="_blank" rel="noopener noreferrer">
              Personalizar Agora
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TemplateCard;
