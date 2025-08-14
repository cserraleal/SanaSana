import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Phone } from 'lucide-react';

export const ScheduleManager = () => {
  const todayAppointments = [
    {
      id: 1,
      time: '9:00 AM',
      patient: 'María González',
      phone: '5555-1234',
      type: 'Consulta general',
      status: 'confirmed'
    },
    {
      id: 2,
      time: '10:30 AM',
      patient: 'Carlos Rodríguez',
      phone: '5555-5678',
      type: 'Seguimiento',
      status: 'confirmed'
    },
    {
      id: 3,
      time: '2:00 PM',
      patient: 'Ana Martínez',
      phone: '5555-9012',
      type: 'Primera consulta',
      status: 'pending'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agenda de Hoy</CardTitle>
        <CardDescription>Citas programadas para hoy</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todayAppointments.map((appointment) => (
            <div key={appointment.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="font-semibold">{appointment.time}</span>
                  </div>
                  
                  <div className="flex items-center mb-1">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{appointment.patient}</span>
                  </div>
                  
                  <div className="flex items-center mb-1">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">{appointment.phone}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                  </span>
                  
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">
                      Editar
                    </Button>
                    <Button size="sm" variant="outline">
                      Contactar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button className="w-full">
            <Calendar className="h-4 w-4 mr-2" />
            Ver Calendario Completo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};