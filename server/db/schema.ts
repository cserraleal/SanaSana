export interface DatabaseSchema {
  users: UsersTable;
  patient_profiles: PatientProfilesTable;
  clinic_profiles: ClinicProfilesTable;
  appointments: AppointmentsTable;
  reviews: ReviewsTable;
}

export interface UsersTable {
  id: number;
  email: string;
  password_hash: string;
  user_type: 'patient' | 'clinic';
  created_at: string;
}

export interface PatientProfilesTable {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  phone: string | null;
  date_of_birth: string | null;
  created_at: string;
}

export interface ClinicProfilesTable {
  id: number;
  user_id: number;
  name: string;
  description: string | null;
  phone: string | null;
  address: string | null;
  specialties: string | null;
  rating: number;
  created_at: string;
}

export interface AppointmentsTable {
  id: number;
  patient_id: number;
  clinic_id: number;
  appointment_date: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes: string | null;
  created_at: string;
}

export interface ReviewsTable {
  id: number;
  patient_id: number;
  clinic_id: number;
  rating: number;
  comment: string | null;
  created_at: string;
}