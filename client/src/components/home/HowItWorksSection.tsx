import * as React from 'react';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Crea tu cuenta',
      description: 'Regístrate como paciente o clínica en menos de 2 minutos'
    },
    {
      number: '2',
      title: 'Busca especialistas',
      description: 'Encuentra la clínica perfecta usando nuestros filtros avanzados'
    },
    {
      number: '3',
      title: 'Agenda tu cita',
      description: 'Selecciona fecha y hora que mejor se adapte a tu horario'
    },
    {
      number: '4',
      title: 'Recibe atención',
      description: 'Asiste a tu cita y recibe la mejor atención médica'
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600">
            En cuatro simples pasos tendrás acceso a la mejor atención médica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};