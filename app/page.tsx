import { formatNights } from '@/lib/format';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Eurocottage</h1>
      <p>Skelet van de applicatie. Voorbeeld: {formatNights(3)}.</p>
    </main>
  );
}
