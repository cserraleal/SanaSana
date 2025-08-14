import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, FileText, MapPin } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Seguro y Confiable',
      description: 'Tus datos médicos están protegidos con los más altos estándares de seguridad'
    },
    {
      icon: Clock,
      title: 'Disponible 24/7',
      description: 'Agenda citas y consulta información en cualquier momento del día'
    },
    {
      icon: FileText,
      title: 'Historial Médico',
      description: 'Mantén todos tus documentos médicos organizados en un solo lugar'
    },
    {
      icon: MapPin,
      title: 'Cobertura Nacional',
      description: 'Encuentra clínicas especializadas en toda Guatemala'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir SanaSana?
          </h2>
          <p className="text-xl text-gray-600">
            Ofrecemos una plataforma completa para gestionar tu salud de manera inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};