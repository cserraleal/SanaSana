import * as React from 'react';
import { ClinicCard } from './ClinicCard';

interface Clinic {
  id: number;
  name: string;
  description: string;
  specialties: string;
  rating: number;
  address: string;
  phone: string;
  image?: string;
  reviewCount: number;
}

interface ClinicsGridProps {
  clinics: Clinic[];
}

export const ClinicsGrid = ({ clinics }: ClinicsGridProps) => {
  if (clinics.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-400 text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No se encontraron clínicas
          </h3>
          <p className="text-gray-600">
            Intenta ajustar los filtros de búsqueda para encontrar más resultados.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-gray-600">
          {clinics.length} clínica{clinics.length !== 1 ? 's' : ''} encontrada{clinics.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinics.map((clinic) => (
          <ClinicCard key={clinic.id} clinic={clinic} />
        ))}
      </div>
    </div>
  );
};