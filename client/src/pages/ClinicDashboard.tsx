import * as React from 'react';
import { ClinicOverview } from '../components/clinic/ClinicOverview';
import { ScheduleManager } from '../components/clinic/ScheduleManager';
import { ClinicStats } from '../components/clinic/ClinicStats';

export const ClinicDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard de la Clínica</h1>
          <p className="text-gray-600 mt-2">Administra tu práctica médica</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ClinicOverview />
            <div className="mt-8">
              <ScheduleManager />
            </div>
          </div>
          
          <div>
            <ClinicStats />
          </div>
        </div>
      </div>
    </div>
  );
};