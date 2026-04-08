import { useRef, useState, useEffect, useCallback } from 'react';

export default function Reviews() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const slides = [
    { name: 'Sarah J.', text: "I've struggled with hair fall for years, but Hairoca changed everything! Within 3 weeks I noticed a huge difference." },
    { name: 'Priya M.', text: "This is the only herbal oil that doesn't feel overly greasy. My hair is thicker and the dandruff is completely gone." },
    { name: 'Anita D.', text: "I was skeptical about natural oils, but the Brahmi and Amla blend really works. My graying has slowed down considerably. Love it!" },
    { name: 'Rahul K.', text: "Amazing product. The traditional scent is soothing and my hair feels stronger from the roots. It's a staple in my routine now." },
    { name: 'Emily R.', text: "Finally found an oil with pure ingredients! Leaves my hair incredibly soft and shiny without any harsh chemicals." }
  ];

  const updateSlideWidth = useCallback(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
        // Get the actual width of one slide
        setSlideWidth(sliderRef.current.children[0].offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    
    // Add small delay to ensure initial layout is complete
    const timeoutId = setTimeout(updateSlideWidth, 100);
    
    return () => {
        window.removeEventListener('resize', updateSlideWidth);
        clearTimeout(timeoutId);
    };
  }, [updateSlideWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const isMobile = window.innerWidth <= 768;
        const maxIndex = isMobile ? slides.length - 1 : slides.length - 3;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="reviews" style={{ overflow: 'hidden', padding: '5rem 0', background: 'var(--website-bg)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="serif-heading" style={{ marginBottom: '1rem' }}>What People Are Saying</h2>
        <p style={{ marginBottom: '4rem', color: '#666' }}>Real results from real users.</p>
        <div style={{ position: 'relative' }}>
          <div 
            id="testimonial-slider" 
            ref={sliderRef}
            style={{ 
              display: 'flex', 
              gap: '2rem', 
              transition: 'transform 0.5s ease', 
              padding: '1rem 0',
              // 32 equals 2rem gap
              transform: `translateX(-${currentIndex * (slideWidth + 32)}px)`
            }}
          >
            {slides.map((slide, i) => (
               <div className="testimonial-slide review-card" key={i}>
                 <div className="stars">★★★★★</div>
                 <p className="review-text">"{slide.text}"</p>
                 <div className="reviewer-name">- {slide.name}</div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
