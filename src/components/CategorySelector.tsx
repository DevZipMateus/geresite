
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { categories, allTemplates } from "@/data/templateData";
import { Control } from "react-hook-form";

interface CategorySelectorProps {
  control: Control<any>;
  name: string;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const CategorySelector = ({ control, name, selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  const availableCategories = categories.filter(cat => cat.id !== 'all');
  
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Categoria do Negócio *</FormLabel>
          <Select 
            onValueChange={(value) => {
              field.onChange(value);
              onCategoryChange?.(value);
            }} 
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {availableCategories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CategorySelector;
