export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontFamily: 'var(--font-logo)' }}>Crave Theory</h1>
      <p style={{ fontFamily: 'var(--font-tagline)' }}>Eat the Rainbow. Heal the Future.</p>
      <p style={{ fontFamily: 'var(--font-body)' }}>Join our waitlist to crave better.</p>

      <form style={{ marginTop: '2rem' }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ padding: '0.5rem', width: '250px' }}
          required
        />
        <button
          type="submit"
          style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}
        >
          Join the Waitlist
        </button>
      </form>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Already reversing cravings and reclaiming health — one box at a time.
      </p>
      <p><i>Test run underway now in New York.</i></p>
    </div>
  );
}
