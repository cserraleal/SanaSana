import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone, MessageSquare } from 'lucide-react';

interface Clinic {
  id: number;
  name: string;
  phone: string;
  [key: string]: any;
}

interface BookingSectionProps {
  clinic: Clinic;
}

export const BookingSection = ({ clinic }: BookingSectionProps) => {
  const handleBookAppointment = () => {
    // TODO: Open booking modal or navigate to booking page
    console.log('Booking appointment for clinic:', clinic.id);
  };

  const handleCallClinic = () => {
    window.open(`tel:${clinic.phone}`, '_self');
  };

  const handleSendMessage = () => {
    // TODO: Open message dialog or navigate to messages
    console.log('Send message to clinic:', clinic.id);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Agendar Cita</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleBookAppointment}
            className="w-full"
            size="lg"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Reservar Cita Ahora
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">O contacta directamente:</p>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleCallClinic}
                variant="outline"
                className="flex-1"
              >
                <Phone className="h-4 w-4 mr-1" />
                Llamar
              </Button>
              
              <Button 
                onClick={handleSendMessage}
                variant="outline"
                className="flex-1"
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                Mensaje
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Horarios Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Hoy</span>
              <span className="text-sm text-gray-600">3 espacios</span>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Button size="sm" variant="outline" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                10:00 AM
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                2:00 PM
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                4:30 PM
              </Button>
            </div>
            
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm font-medium">Mañana</span>
              <span className="text-sm text-gray-600">5 espacios</span>
            </div>
            
            <Button variant="ghost" className="w-full text-sm text-primary">
              Ver más horarios disponibles
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Información Importante</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <strong>Cancelaciones:</strong>
              <p>Cancela hasta 2 horas antes de tu cita sin costo.</p>
            </div>
            
            <div>
              <strong>Documentos:</strong>
              <p>Trae tu DPI y carnet de seguro médico.</p>
            </div>
            
            <div>
              <strong>Llegada:</strong>
              <p>Te recomendamos llegar 15 minutos antes.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};