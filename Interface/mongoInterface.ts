export interface patientData {
  name: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
  };
  govtId: string;
  govtIdNumber: string;
  id: string;
}

export interface hospitalData {
  name: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
  };
  govtId: string;
  govtIdNumber: string;
  id: string;
  established: Date;
}

export interface doctorData {
  name: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
  };
  govtId: string;
  govtIdNumber: string;
  id: string;
  hospitalId: string | null;
  specialization: string;
  experience: Date;
}
