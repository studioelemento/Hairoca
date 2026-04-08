export default function HowToUse() {
  return (
    <section id="how-to-use">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="serif-heading">How to Use?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          {[
            { step: '01', text: 'Apply oil gently to scalp' },
            { step: '02', text: 'Massage for 5–10 minutes' },
            { step: '03', text: 'Leave overnight or at least 1 hour' },
            { step: '04', text: 'Wash with mild shampoo' }
          ].map((item) => (
            <div className="step-card" key={item.step}>
              <div style={{ fontWeight: 700, color: '#2E7D32', fontSize: '1.5rem', marginBottom: '1rem' }}>{item.step}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
