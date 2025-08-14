import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ClinicsFiltersProps {
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

export const ClinicsFilters = ({
  selectedSpecialty,
  onSpecialtyChange,
  selectedLocation,
  onLocationChange,
  minRating,
  onRatingChange,
  sortBy,
  onSortChange
}: ClinicsFiltersProps) => {
  const specialties = [
    'Cardiología',
    'Dermatología',
    'Ginecología',
    'Pediatría',
    'Neurología',
    'Ortopedia',
    'Oftalmología',
    'Psicología',
    'Medicina General',
    'Odontología'
  ];

  const locations = [
    'Zona 1 - Centro Histórico',
    'Zona 4 - Centro Cívico',
    'Zona 9 - Centro Comercial',
    'Zona 10 - Zona Viva',
    'Zona 11 - Mariscal',
    'Zona 12 - Colonia Reformador',
    'Zona 13 - Aurora',
    'Zona 14 - Las Américas',
    'Zona 15 - Vista Hermosa',
    'Zona 16 - Cayalá'
  ];

  const handleClearFilters = () => {
    onSpecialtyChange('');
    onLocationChange('');
    onRatingChange(0);
    onSortChange('name');
  };

  const handleSpecialtyChange = (value: string) => {
    if (value === 'all') {
      onSpecialtyChange('');
    } else {
      onSpecialtyChange(value);
    }
  };

  const handleLocationChange = (value: string) => {
    if (value === 'all') {
      onLocationChange('');
    } else {
      onLocationChange(value);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Filtros</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleClearFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4 mr-1" />
            Limpiar
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="specialty">Especialidad</Label>
            <Select value={selectedSpecialty || 'all'} onValueChange={handleSpecialtyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Todas las especialidades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las especialidades</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="location">Ubicación</Label>
            <Select value={selectedLocation || 'all'} onValueChange={handleLocationChange}>
              <SelectTrigger>
                <SelectValue placeholder="Todas las ubicaciones" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las ubicaciones</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Calificación mínima: {minRating === 0 ? 'Cualquiera' : `${minRating.toFixed(1)} estrellas`}</Label>
            <div className="mt-2">
              <Slider
                value={[minRating]}
                onValueChange={([value]) => onRatingChange(value)}
                max={5}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="sort">Ordenar por</Label>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nombre A-Z</SelectItem>
                <SelectItem value="rating">Mejor calificación</SelectItem>
                <SelectItem value="newest">Más recientes</SelectItem>
                <SelectItem value="location">Ubicación</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};