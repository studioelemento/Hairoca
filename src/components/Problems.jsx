export default function Problems() {
  return (
    <section id="problems" className="problem-section">
      <div className="container">
        <h2 className="serif-heading" style={{ textAlign: 'center', marginBottom: '5rem' }}>Struggling with Hair Problems?</h2>
        
        <div className="problem-visual-grid">
          <div className="problem-col">
            <div className="problem-card-v2">
              <div className="problem-img-wrapper">
                <img src="/Section 2 - 4.avif" alt="Hair Fall" />
              </div>
              <p>Hair fall increasing day by day?</p>
            </div>
            <div className="problem-card-v2">
              <div className="problem-img-wrapper">
                <img src="/Section 2 - 3.avif" alt="Premature Greying" />
              </div>
              <p>Premature greying?</p>
            </div>
          </div>
          
          <div className="problem-col column-offset">
            <div className="problem-card-v2">
              <div className="problem-img-wrapper">
                <img src="/Section 2 - 2.avif" alt="Dandruff and Itchy Scalp" />
              </div>
              <p>Dandruff and itchy scalp?</p>
            </div>
            <div className="problem-card-v2">
              <div className="problem-img-wrapper">
                <img src="/Section 2 - 1.avif" alt="Slow Hair Growth" />
              </div>
              <p>Slow or no hair growth?</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2E7D32', fontFamily: "'Cormorant Garamond'" }}>
            It’s time to switch to natural care.
          </div>
        </div>
      </div>
    </section>
  );
}
