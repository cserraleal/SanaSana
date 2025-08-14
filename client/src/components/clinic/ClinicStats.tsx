import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Edit, BarChart, MessageSquare } from 'lucide-react';

export const ClinicStats = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gestión Rápida</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Editar Perfil
          </Button>
          
          <Button className="w-full justify-start" variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurar Horarios
          </Button>
          
          <Button className="w-full justify-start" variant="outline">
            <BarChart className="h-4 w-4 mr-2" />
            Ver Reportes
          </Button>
          
          <Button className="w-full justify-start" variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Mensajes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estadísticas del Mes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm">Nuevos pacientes</span>
              <span className="font-bold">23</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm">Citas completadas</span>
              <span className="font-bold">156</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm">Cancelaciones</span>
              <span className="font-bold">8</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm">Ingresos</span>
              <span className="font-bold">Q 12,450</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reseñas Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm font-medium">⭐⭐⭐⭐⭐</p>
              <p className="text-xs text-gray-600">"Excelente atención"</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm font-medium">⭐⭐⭐⭐⭐</p>
              <p className="text-xs text-gray-600">"Muy profesional"</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};