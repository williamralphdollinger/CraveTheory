export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem', fontFamily: 'sans-serif' }}>
      <h1>Crave Theory Is Coming</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Real food. Real gut health. Real results.
      </p>

      <p>This isn’t another trendy diet. It’s a revolution powered by your microbiome.</p>

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
