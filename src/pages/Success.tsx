import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { useSignup } from '../features/signup/SignupContext';
export function Success() { const { data, reset } = useSignup(); return <main className="shell narrow"><section className="card success"><CheckCircle2 size={54} /><p className="eyebrow">Profile complete</p><h1>Welcome to Extroverts, {data.firstName || 'friend'}.</h1><p>Your demo profile is ready. You can now browse events, meet your campus circle, and show evaluators the completed frontend-only flow.</p><Button onClick={reset}>Restart demo</Button></section></main>; }
