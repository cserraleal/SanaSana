import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Phone, Globe, Heart } from 'lucide-react';

interface Clinic {
  id: number;
  name: string;
  description: string;
  specialties: string;
  rating: number;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  reviewCount: number;
  images?: string[];
}

interface ClinicHeroProps {
  clinic: Clinic;
}

export const ClinicHero = ({ clinic }: ClinicHeroProps) => {
  const specialtiesArray = clinic.specialties ? clinic.specialties.split(',').map(s => s.trim()) : [];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{clinic.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {renderStars(clinic.rating)}
                </div>
                <span className="text-lg font-medium">{clinic.rating.toFixed(1)}</span>
                <span className="text-gray-500 ml-2">({clinic.reviewCount} reseñas)</span>
              </div>
            </div>
            
            <Button variant="ghost" size="lg" className="text-gray-400 hover:text-red-500">
              <Heart className="h-6 w-6" />
            </Button>
          </div>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {clinic.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>{clinic.address}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>{clinic.phone}</span>
              </div>
              
              {clinic.website && (
                <div className="flex items-center text-gray-700">
                  <Globe className="h-5 w-5 mr-3 text-primary" />
                  <span>{clinic.website}</span>
                </div>
              )}
            </div>

            {specialtiesArray.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Especialidades:</h3>
                <div className="flex flex-wrap gap-2">
                  {specialtiesArray.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};