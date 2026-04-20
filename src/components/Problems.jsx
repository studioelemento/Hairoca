import React, { useState, useEffect, useRef } from 'react';

export default function Problems() {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problems" className="problem-section">
      <div className="container">
        <h2 className="serif-heading" style={{ textAlign: 'center', marginBottom: '3rem' }}>Struggling with Hair Problems?</h2>

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

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2 className="serif-heading" style={{ color: '#2E7D32', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            It’s time to switch to natural care.
          </h2>
          <img 
            ref={imgRef}
            src="/Hairocaproductimage.avif" 
            alt="Hairoca Product" 
            className={`mobile-only-img ${isVisible ? 'slide-in-right' : ''}`} 
          />
        </div>
      </div>
    </section>
  );
}
