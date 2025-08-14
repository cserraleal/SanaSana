import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">SanaSana</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary">Inicio</Link>
            <Link to="/clinics" className="text-gray-600 hover:text-primary">Clínicas</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">Nosotros</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={handleLoginClick}>
              Iniciar Sesión
            </Button>
            <Button onClick={handleSignupClick}>
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};