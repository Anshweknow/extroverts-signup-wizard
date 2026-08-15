import { Toaster } from 'sonner';
import { EmailStage, OtpStage } from './features/signup/AuthStages';
import { SignupProvider, useSignup } from './features/signup/SignupContext';
import { Wizard } from './features/signup/Wizard';
import { Landing } from './pages/Landing';
import { Success } from './pages/Success';
import { Terms } from './pages/Terms';

function Screen() {
  const { stage } = useSignup();

  return (
    <>
      {stage === 'landing' && <Landing />}
      {stage === 'terms' && <Terms />}
      {stage === 'email' && <EmailStage />}
      {stage === 'otp' && <OtpStage />}
      {stage === 'wizard' && <Wizard />}
      {stage === 'success' && <Success />}
    </>
  );
}

export default function App() {
  return (
    <SignupProvider>
      <Screen />
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          style: { background: '#111014', color: '#fff', border: '1px solid #ffffff2b' },
        }}
      />
    </SignupProvider>
  );
}
