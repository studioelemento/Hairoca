import { useRef, useEffect, useCallback } from 'react';

export default function Reviews() {
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const slides = [
    { name: 'Sarah J.', text: "I've struggled with hair fall for years, but Hairoca changed everything! Within 3 weeks I noticed a huge difference." },
    { name: 'Priya M.', text: "This is the only herbal oil that doesn't feel overly greasy. My hair is thicker and the dandruff is completely gone." },
    { name: 'Anita D.', text: "I was skeptical about natural oils, but the Brahmi and Amla blend really works. My graying has slowed down considerably. Love it!" },
    { name: 'Rahul K.', text: "Amazing product. The traditional scent is soothing and my hair feels stronger from the roots. It's a staple in my routine now." },
    { name: 'Emily R.', text: "Finally found an oil with pure ingredients! Leaves my hair incredibly soft and shiny without any harsh chemicals." }
  ];

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const slideElement = sliderRef.current.children[0];
        const slideWidth = slideElement ? slideElement.offsetWidth + 32 : clientWidth; // 32 is gap

        // If we are at the end, jump back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <section id="reviews" style={{ overflow: 'hidden', padding: '1px 0', background: 'var(--website-bg)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="serif-heading" style={{ marginBottom: '1rem' }}>What People Are Saying</h2>
        <p style={{ marginBottom: '4rem', color: '#666' }}>Real results from real users.</p>
        
        <div
          ref={sliderRef}
          onTouchStart={stopAutoPlay}
          onTouchEnd={startAutoPlay}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          style={{
            display: 'flex',
            gap: '2rem',
            overflowX: 'auto',
            padding: '1rem 0.5rem',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', // For Firefox
            msOverflowStyle: 'none' // For IE/Edge
          }}
          className="no-scrollbar"
        >
          {slides.map((slide, i) => (
            <div 
              className="testimonial-slide review-card" 
              key={i}
              style={{
                scrollSnapAlign: 'start',
                flexShrink: 0
              }}
            >
              <div className="stars">★★★★★</div>
              <p className="review-text">"{slide.text}"</p>
              <div className="reviewer-name">- {slide.name}</div>
            </div>
          ))}
        </div>
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      </div>
    </section>
  );
}
