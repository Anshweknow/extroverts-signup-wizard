export type Stage = 'landing' | 'terms' | 'email' | 'otp' | 'wizard' | 'success';
export type WizardStep = 0 | 1 | 2 | 3;

export type SignupData = {
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  pronouns: string;
  bio: string;
  state: string;
  city: string;
  college: string;
  graduationYear: string;
  interests: string[];
  eventVibe: string;
  visibility: string;
  agreements: boolean;
};

export const defaultSignupData: SignupData = {
  email: '',
  firstName: '',
  lastName: '',
  age: '',
  pronouns: '',
  bio: '',
  state: '',
  city: '',
  college: '',
  graduationYear: '',
  interests: [],
  eventVibe: '',
  visibility: 'Campus only',
  agreements: false,
};
