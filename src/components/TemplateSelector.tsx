
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { allTemplates } from "@/data/templateData";
import { Control } from "react-hook-form";

interface TemplateSelectorProps {
  control: Control<any>;
  name: string;
  selectedCategory?: string;
}

const TemplateSelector = ({ control, name, selectedCategory }: TemplateSelectorProps) => {
  const availableTemplates = selectedCategory 
    ? allTemplates.filter(template => template.category === selectedCategory)
    : [];
  
  if (!selectedCategory || availableTemplates.length === 0) {
    return (
      <FormItem>
        <FormLabel>Template</FormLabel>
        <div className="text-sm text-gray-500 p-3 bg-gray-50 rounded-md">
          Selecione uma categoria primeiro para ver os templates disponíveis
        </div>
      </FormItem>
    );
  }
  
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Template *</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o template" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {availableTemplates.map((template) => (
                <SelectItem key={template.id} value={template.id}>
                  <div className="flex flex-col">
                    <span className="font-medium">{template.title}</span>
                    <span className="text-xs text-gray-500">{template.description}</span>
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

export default TemplateSelector;
