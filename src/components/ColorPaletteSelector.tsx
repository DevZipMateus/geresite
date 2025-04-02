
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Palette } from 'lucide-react';

interface ColorPaletteOption {
  value: string;
  label: string;
  color: string;
}

interface ColorPaletteSelectorProps {
  onChange: (value: string) => void;
  value: string;
}

const colorOptions: ColorPaletteOption[] = [
  { value: 'default', label: 'Padrão (Azul)', color: '#1E88E5' },
  { value: 'green', label: 'Verde', color: '#43A047' },
  { value: 'purple', label: 'Roxo', color: '#8E24AA' },
  { value: 'orange', label: 'Laranja', color: '#FB8C00' },
];

const ColorPaletteSelector: React.FC<ColorPaletteSelectorProps> = ({ onChange, value }) => {
  return (
    <div className="flex items-center gap-2">
      <Palette className="h-5 w-5 text-muted-foreground" />
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-36 md:w-44">
          <SelectValue placeholder="Selecione um tema" />
        </SelectTrigger>
        <SelectContent>
          {colorOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: option.color }}
                />
                <span>{option.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ColorPaletteSelector;
