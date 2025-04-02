
import React, { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Upload, ImageIcon } from "lucide-react";
import { z } from "zod";
import { useFormContext } from "react-hook-form";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const logoSchema = z
  .instanceof(FileList)
  .optional()
  .refine((files) => !files || files.length === 0 || files.length === 1, "Apenas um arquivo é permitido")
  .refine(
    (files) => 
      !files || 
      files.length === 0 || 
      ACCEPTED_IMAGE_TYPES.includes(files[0].type),
    "Apenas arquivos .jpg, .jpeg e .png são aceitos"
  )
  .refine(
    (files) => 
      !files || 
      files.length === 0 || 
      files[0].size <= MAX_FILE_SIZE,
    `Tamanho máximo do arquivo é 5MB`
  );

interface LogoUploadProps {
  name: string;
}

const LogoUpload: React.FC<LogoUploadProps> = ({ name }) => {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const form = useFormContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setSelectedFileName(fileList[0].name);
    } else {
      setSelectedFileName(null);
    }
    form.setValue(name, fileList as FileList, { shouldValidate: true });
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>Logo da Empresa (opcional)</FormLabel>
          <FormControl>
            <div className="flex flex-col space-y-2">
              <label className="flex flex-col items-center px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50">
                <div className="flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {selectedFileName || "Selecione um arquivo .jpg ou .png"}
                  </span>
                </div>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {selectedFileName && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <ImageIcon className="h-4 w-4" />
                  <span>{selectedFileName}</span>
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LogoUpload;
