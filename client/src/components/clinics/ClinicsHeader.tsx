import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ClinicsHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const ClinicsHeader = ({ searchTerm, onSearchChange }: ClinicsHeaderProps) => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Encuentra tu Clínica Ideal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Descubre las mejores clínicas y especialistas médicos en Guatemala
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar por nombre de clínica, especialidad o ubicación..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 border-primary/20 focus:border-primary rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};