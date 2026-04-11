export default function Hero() {
  return (
    <section className="hero" id="home">
      <img 
        src="/HairocaHeroImage.avif" 
        alt="Hairoca Hero Background" 
        className="hero-bg"
        fetchpriority="high"
        loading="eager"
      />
      <div className="hero-top container">
        <h1>Bring Back Your Hair’s<br />Natural Strength & Shine</h1>
      </div>
      <div className="hero-bottom container">
        <p>100% Herbal Hair Oil to Control Hair Fall, Boost Growth & Prevent Premature Graying</p>
        <div className="trust-line">Made with Brahmi, Amla, Aloe Vera & 10+ Herbal Ingredients</div>
      </div>
    </section>
  );
}
