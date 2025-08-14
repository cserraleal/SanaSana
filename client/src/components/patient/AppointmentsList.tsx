import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const AppointmentsList = () => {
  const appointments = [
    {
      id: 1,
      clinic: 'Clínica San José',
      specialty: 'Cardiología',
      date: '2024-01-15',
      time: '10:00 AM',
      address: 'Zona 10, Ciudad de Guatemala',
      status: 'confirmed'
    },
    {
      id: 2,
      clinic: 'Centro Médico Aurora',
      specialty: 'Dermatología', 
      date: '2024-01-18',
      time: '3:00 PM',
      address: 'Zona 13, Ciudad de Guatemala',
      status: 'pending'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mis Citas</CardTitle>
        <CardDescription>Próximas citas médicas programadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold">{appointment.clinic}</h3>
                  <p className="text-sm text-gray-600">{appointment.specialty}</p>
                  
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{appointment.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{appointment.time}</span>
                  </div>
                  
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{appointment.address}</span>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                  </span>
                  <Button size="sm" variant="outline">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};