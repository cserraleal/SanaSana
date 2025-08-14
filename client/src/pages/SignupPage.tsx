import * as React from 'react';
import { SignupForm } from '../components/auth/SignupForm';

export const SignupPage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Crear Cuenta</h2>
          <p className="mt-2 text-gray-600">Únete a la comunidad SanaSana</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};