import { useState } from 'react';
import { Button } from '../components/Button';
import { useSignup } from '../features/signup/SignupContext';

export function Terms() {
  const { setStage } = useSignup();
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="shell narrow">
      <div className="brand page-brand"><span className="logo">E</span><span>Extroverts</span></div>
      <section className="card terms" aria-labelledby="terms-title">
        <p className="eyebrow">Terms & Conditions</p>
        <h1 id="terms-title">Before you enter the room</h1>
        <p>Extroverts helps people discover social plans and meet their campus circle. This assessment build is frontend-only: it simulates signup, verification, profile progress, and completion without creating a real account.</p>
        <ul>
          <li>Be respectful, inclusive, and safe at every event.</li>
          <li>Use accurate profile information and never impersonate someone else.</li>
          <li>You must be 18 or older to continue.</li>
          <li>Non-sensitive demo progress may be stored locally in this browser.</li>
        </ul>
        <label className="check terms-check">
          <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
          <span>I have read and accept these demo terms.</span>
        </label>
        <div className="actions actions--split">
          <Button type="button" disabled={!accepted} onClick={() => setStage('email')}>Accept & continue</Button>
          <Button type="button" variant="ghost" onClick={() => setStage('landing')}>Back</Button>
        </div>
      </section>
    </main>
  );
}
