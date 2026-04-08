export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#1B1B1B', color: '#F5F9F5', padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: '2.4rem', marginBottom: '0.2rem', color: '#F5F9F5', lineHeight: '1' }}>Hairoca</div>
        <p style={{ opacity: 0.7, marginBottom: '1.2rem', fontSize: '0.95rem' }}>Pure Nature. Proven Strength.</p>
        
        <div style={{ margin: '1rem 0', opacity: 0.85, fontSize: '0.9rem', lineHeight: '1.5' }}>
          <h4 style={{ color: '#fff', marginBottom: '0.4rem', letterSpacing: '1px', fontSize: '1rem' }}>Contact Us</h4>
          <p style={{ margin: '0' }}>Hairoca Hair Oil, Udalakkav, Adat(PO)</p>
          <p style={{ margin: '0' }}>Thrissur Dt, Kerala 680551</p>
          <p style={{ margin: '0' }}>Phone: +91 80891 64334</p>
        </div>

        <div style={{ marginTop: '1.5rem', opacity: 0.4, fontSize: '0.75rem', letterSpacing: '2px' }}>
          &copy; 2026 HAIROCA NATURALS. PRESERVED BY NATURE.
        </div>
      </div>
    </footer>
  );
}
