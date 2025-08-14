import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ClinicReviewsProps {
  clinicId: number;
}

export const ClinicReviews = ({ clinicId }: ClinicReviewsProps) => {
  // Mock reviews data
  const reviews: Review[] = [
    {
      id: 1,
      patientName: 'María G.',
      rating: 5,
      comment: 'Excelente atención médica. El doctor fue muy profesional y las instalaciones están muy limpias. Definitivamente regresaré.',
      date: '2024-01-10'
    },
    {
      id: 2,
      patientName: 'Carlos R.',
      rating: 5,
      comment: 'Personal muy amable y eficiente. El tiempo de espera fue mínimo y la consulta fue muy completa. Muy recomendado.',
      date: '2024-01-05'
    },
    {
      id: 3,
      patientName: 'Ana M.',
      rating: 4,
      comment: 'Buena atención en general. Las instalaciones son modernas y el personal es profesional. Solo mejoraría un poco los tiempos.',
      date: '2023-12-28'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-GT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reseñas de Pacientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-sm">{review.patientName}</h4>
                  <div className="flex items-center mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <span className="text-xs text-gray-500">{formatDate(review.date)}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
          
          {reviews.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Aún no hay reseñas para esta clínica.</p>
              <p className="text-sm mt-1">¡Sé el primero en dejar una reseña!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};