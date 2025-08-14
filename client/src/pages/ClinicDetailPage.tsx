import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ClinicHero } from '../components/clinic-detail/ClinicHero';
import { ClinicInfo } from '../components/clinic-detail/ClinicInfo';
import { ClinicReviews } from '../components/clinic-detail/ClinicReviews';
import { BookingSection } from '../components/clinic-detail/BookingSection';

export const ClinicDetailPage = () => {
  const { id } = useParams();
  
  // TODO: Fetch clinic data based on ID
  const clinic = {
    id: parseInt(id || '1'),
    name: 'Clínica San José',
    description: 'Clínica especializada en medicina general y cardiología con más de 20 años de experiencia brindando atención médica de calidad. Contamos con médicos certificados y tecnología moderna.',
    specialties: 'Cardiología, Medicina General',
    rating: 4.8,
    address: 'Zona 10, Ciudad de Guatemala',
    phone: '2234-5678',
    email: 'info@clinicasanjose.com',
    website: 'www.clinicasanjose.com',
    hours: 'Lunes a Viernes: 7:00 AM - 6:00 PM, Sábados: 8:00 AM - 2:00 PM',
    reviewCount: 156,
    images: ['/placeholder-clinic.jpg']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClinicHero clinic={clinic} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ClinicInfo clinic={clinic} />
            <div className="mt-8">
              <ClinicReviews clinicId={clinic.id} />
            </div>
          </div>
          
          <div>
            <BookingSection clinic={clinic} />
          </div>
        </div>
      </div>
    </div>
  );
};