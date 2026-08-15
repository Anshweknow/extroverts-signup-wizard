import { CheckCircle2, Home } from 'lucide-react';
import { Button } from '../components/Button';
import { useSignup } from '../features/signup/SignupContext';

export function Success() {
  const { data, reset } = useSignup();

  return (
    <main className="shell narrow">
      <section className="card success" aria-labelledby="success-title">
        <CheckCircle2 size={58} aria-hidden="true" />
        <p className="eyebrow">Profile complete</p>
        <h1 id="success-title">Welcome to Extroverts, {data.firstName || 'friend'}.</h1>
        <p>Your demo profile is ready. The complete frontend-only journey now covers landing, terms, email verification, the four-step wizard, and this completion state.</p>
        <Button type="button" onClick={reset}><Home size={17} aria-hidden="true" /> Restart demo</Button>
      </section>
    </main>
  );
}
