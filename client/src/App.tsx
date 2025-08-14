import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { PatientDashboard } from './pages/PatientDashboard';
import { ClinicDashboard } from './pages/ClinicDashboard';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/clinic/dashboard" element={<ClinicDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;