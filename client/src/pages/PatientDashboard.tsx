import * as React from 'react';
import { PatientOverview } from '../components/patient/PatientOverview';
import { AppointmentsList } from '../components/patient/AppointmentsList';
import { QuickActions } from '../components/patient/QuickActions';

export const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard del Paciente</h1>
          <p className="text-gray-600 mt-2">Gestiona tus citas y información médica</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PatientOverview />
            <div className="mt-8">
              <AppointmentsList />
            </div>
          </div>
          
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};