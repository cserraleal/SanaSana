import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Shield, Award } from 'lucide-react';

interface Clinic {
  id: number;
  name: string;
  hours?: string;
  [key: string]: any;
}

interface ClinicInfoProps {
  clinic: Clinic;
}

export const ClinicInfo = ({ clinic }: ClinicInfoProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Información General</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Clock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Horarios de Atención</h4>
                <p className="text-gray-600 text-sm">
                  {clinic.hours || 'Lunes a Viernes: 8:00 AM - 6:00 PM'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Users className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Equipo Médico</h4>
                <p className="text-gray-600 text-sm">
                  Médicos especialistas certificados
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Seguridad</h4>
                <p className="text-gray-600 text-sm">
                  Protocolos de bioseguridad actualizados
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Award className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Certificaciones</h4>
                <p className="text-gray-600 text-sm">
                  Acreditada por el Ministerio de Salud
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Servicios Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Consultas médicas generales</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Exámenes de laboratorio</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Electrocardiogramas</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Rayos X</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Ecografías</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Consultas especializadas</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Seguimiento médico</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">Medicina preventiva</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};