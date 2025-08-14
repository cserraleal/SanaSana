import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Search, FileText, Settings } from 'lucide-react';

export const QuickActions = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Agendar Nueva Cita
          </Button>
          
          <Button className="w-full justify-start" variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Buscar Clínicas
          </Button>
          
          <Button className="w-full justify-start" variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Subir Documentos
          </Button>
          
          <Button className="w-full justify-start" variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configuración
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recordatorios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium">Cita mañana</p>
              <p className="text-xs text-gray-600">Clínica San José - 10:00 AM</p>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm font-medium">Exámenes pendientes</p>
              <p className="text-xs text-gray-600">Subir resultados de laboratorio</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};