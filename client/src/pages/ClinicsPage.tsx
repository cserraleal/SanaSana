import * as React from 'react';
import { ClinicsHeader } from '../components/clinics/ClinicsHeader';
import { ClinicsFilters } from '../components/clinics/ClinicsFilters';
import { ClinicsGrid } from '../components/clinics/ClinicsGrid';
import { useClinicsFilters } from '../hooks/useClinicsFilters';

export const ClinicsPage = () => {
  const {
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
  } = useClinicsFilters();

  return (
    <div className="min-h-screen bg-gray-50">
      <ClinicsHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ClinicsFilters
              selectedSpecialty={selectedSpecialty}
              onSpecialtyChange={setSelectedSpecialty}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
              minRating={minRating}
              onRatingChange={setMinRating}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
          
          <div className="lg:col-span-3">
            <ClinicsGrid clinics={filteredClinics} />
          </div>
        </div>
      </div>
    </div>
  );
};