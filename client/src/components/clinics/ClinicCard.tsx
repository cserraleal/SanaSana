import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Phone, Calendar, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Clinic {
  id: number;
  name: string;
  description: string;
  specialties: string;
  rating: number;
  address: string;
  phone: string;
  image?: string;
  reviewCount: number;
}

interface ClinicCardProps {
  clinic: Clinic;
}

export const ClinicCard = ({ clinic }: ClinicCardProps) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    // TODO: Navigate to booking page or open booking modal
    console.log('Booking appointment for clinic:', clinic.id);
  };

  const handleViewDetails = () => {
    navigate(`/clinic/${clinic.id}`);
  };

  const specialtiesArray = clinic.specialties ? clinic.specialties.split(',').map(s => s.trim()) : [];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold mb-2">{clinic.name}</CardTitle>
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-2">
                {renderStars(clinic.rating)}
              </div>
              <span className="text-sm font-medium">{clinic.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500 ml-1">({clinic.reviewCount} reseñas)</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {clinic.description && (
          <CardDescription className="text-sm text-gray-600 line-clamp-2">
            {clinic.description}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {specialtiesArray.length > 0 && (
            <div>
              <div className="flex flex-wrap gap-1">
                {specialtiesArray.slice(0, 3).map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {specialtiesArray.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{specialtiesArray.length - 3} más
                  </Badge>
                )}
              </div>
            </div>
          )}
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{clinic.address}</span>
          </div>
          
          {clinic.phone && (
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{clinic.phone}</span>
            </div>
          )}
          
          <div className="flex space-x-2 pt-2">
            <Button 
              onClick={handleBookAppointment}
              className="flex-1"
              size="sm"
            >
              <Calendar className="h-4 w-4 mr-1" />
              Agendar Cita
            </Button>
            <Button 
              onClick={handleViewDetails}
              variant="outline"
              size="sm"
            >
              Ver Detalles
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};