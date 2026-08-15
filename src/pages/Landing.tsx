import { MapPin, Sparkles, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { useSignup } from '../features/signup/SignupContext';

export function Landing() {
  const { setStage } = useSignup();

  return (
    <main className="hero">
      <section className="hero-copy" aria-labelledby="landing-title">
        <div className="brand"><span className="logo">E</span><span>Extroverts</span></div>
        <p className="eyebrow">Find your people tonight</p>
        <h1 id="landing-title">Unlock campus plans, parties, and friendships that leave the group chat.</h1>
        <p className="lead">A mobile-first social signup experience with verified entry, campus-aware profile setup, and a polished dark Extroverts aesthetic.</p>
        <div className="actions">
          <Button type="button" onClick={() => setStage('terms')}>Get started</Button>
          <Button type="button" variant="secondary" onClick={() => setStage('terms')}>Read terms</Button>
        </div>
        <div className="stats" aria-label="Extroverts highlights">
          <span><Users aria-hidden="true" /> 12k+ students</span>
          <span><MapPin aria-hidden="true" /> 40+ campuses</span>
          <span><Sparkles aria-hidden="true" /> curated vibes</span>
        </div>
      </section>
      <section className="phone-card" aria-label="Extroverts event preview">
        <div className="phone-notch" />
        <div className="event-card hot"><span>FRI 10PM</span><h2>Rooftop Mixer</h2><p>83 friends nearby · high-energy match</p></div>
        <div className="event-card"><span>SAT</span><h2>After Hours</h2><p>Invite-only social circles near campus</p></div>
        <div className="event-card mini"><span>SUN</span><h2>Brunch Crew</h2><p>12 open seats</p></div>
        <div className="floating-badge">Tap in</div>
      </section>
    </main>
  );
}
