import { useState, useMemo } from 'react';

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
  created_at: string;
}

// Mock data - in a real app this would come from an API
const mockClinics: Clinic[] = [
  {
    id: 1,
    name: 'Clínica San José',
    description: 'Clínica especializada en medicina general y cardiología con más de 20 años de experiencia brindando atención médica de calidad.',
    specialties: 'Cardiología, Medicina General',
    rating: 4.8,
    address: 'Zona 10, Ciudad de Guatemala',
    phone: '2234-5678',
    reviewCount: 156,
    created_at: '2024-01-01'
  },
  {
    id: 2,
    name: 'Centro Médico Aurora',
    description: 'Centro médico moderno con tecnología de punta para diagnósticos precisos y tratamientos efectivos.',
    specialties: 'Dermatología, Ginecología, Pediatría',
    rating: 4.6,
    address: 'Zona 13, Ciudad de Guatemala',
    phone: '2345-6789',
    reviewCount: 89,
    created_at: '2024-01-15'
  },
  {
    id: 3,
    name: 'Hospital Privado Los Alamos',
    description: 'Hospital privado con servicios completos de emergencia y especialidades médicas avanzadas.',
    specialties: 'Neurología, Ortopedia, Oftalmología',
    rating: 4.9,
    address: 'Zona 15, Ciudad de Guatemala',
    phone: '2456-7890',
    reviewCount: 234,
    created_at: '2023-12-01'
  },
  {
    id: 4,
    name: 'Clínica Dental Sonrisa',
    description: 'Especialistas en odontología estética y funcional con tratamientos innovadores para toda la familia.',
    specialties: 'Odontología',
    rating: 4.7,
    address: 'Zona 9, Ciudad de Guatemala',
    phone: '2567-8901',
    reviewCount: 78,
    created_at: '2024-02-01'
  },
  {
    id: 5,
    name: 'Centro de Psicología Integral',
    description: 'Atención psicológica profesional para niños, adolescentes y adultos con enfoques terapéuticos modernos.',
    specialties: 'Psicología',
    rating: 4.5,
    address: 'Zona 14, Ciudad de Guatemala',
    phone: '2678-9012',
    reviewCount: 45,
    created_at: '2024-01-20'
  },
  {
    id: 6,
    name: 'Clínica Pediátrica Arcoíris',
    description: 'Especialistas en pediatría con instalaciones diseñadas especialmente para el cuidado infantil.',
    specialties: 'Pediatría',
    rating: 4.8,
    address: 'Zona 11, Ciudad de Guatemala',
    phone: '2789-0123',
    reviewCount: 112,
    created_at: '2023-11-15'
  }
];

export const useClinicsFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('name');

  const filteredClinics = useMemo(() => {
    let filtered = mockClinics.filter((clinic) => {
      const matchesSearch = searchTerm === '' || 
        clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.specialties.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpecialty = selectedSpecialty === '' || 
        clinic.specialties.toLowerCase().includes(selectedSpecialty.toLowerCase());

      const matchesLocation = selectedLocation === '' || 
        clinic.address.includes(selectedLocation.split(' - ')[0]);

      const matchesRating = clinic.rating >= minRating;

      return matchesSearch && matchesSpecialty && matchesLocation && matchesRating;
    });

    // Sort the results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'location':
          return a.address.localeCompare(b.address);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedSpecialty, selectedLocation, minRating, sortBy]);

  return {
    searchTerm,
    setSearchTerm,
    selectedSpecialty,
    setSelectedSpecialty,
    selectedLocation,
    setSelectedLocation,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
    filteredClinics
  };
};