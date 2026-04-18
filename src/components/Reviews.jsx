import { useRef, useState, useEffect, useCallback } from 'react';

export default function Reviews() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const touchStartX = useRef(null);
  const mouseStartX = useRef(null);
  const isDragging = useRef(false);
  const autoPlayRef = useRef(null);

  const slides = [
    { name: 'Sarah J.', text: "I've struggled with hair fall for years, but Hairoca changed everything! Within 3 weeks I noticed a huge difference." },
    { name: 'Priya M.', text: "This is the only herbal oil that doesn't feel overly greasy. My hair is thicker and the dandruff is completely gone." },
    { name: 'Anita D.', text: "I was skeptical about natural oils, but the Brahmi and Amla blend really works. My graying has slowed down considerably. Love it!" },
    { name: 'Rahul K.', text: "Amazing product. The traditional scent is soothing and my hair feels stronger from the roots. It's a staple in my routine now." },
    { name: 'Emily R.', text: "Finally found an oil with pure ingredients! Leaves my hair incredibly soft and shiny without any harsh chemicals." }
  ];

  const getMaxIndex = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    return isMobile ? slides.length - 1 : slides.length - 3;
  }, [slides.length]);

  const goNext = useCallback(() => {
    setCurrentIndex(prev => (prev >= getMaxIndex() ? 0 : prev + 1));
  }, [getMaxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? getMaxIndex() : prev - 1));
  }, [getMaxIndex]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(goNext, 3000);
  }, [goNext]);

  const updateSlideWidth = useCallback(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      setSlideWidth(sliderRef.current.children[0].offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    const timeoutId = setTimeout(updateSlideWidth, 100);
    return () => {
      window.removeEventListener('resize', updateSlideWidth);
      clearTimeout(timeoutId);
    };
  }, [updateSlideWidth]);

  useEffect(() => {
    autoPlayRef.current = setInterval(goNext, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [goNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
      resetAutoPlay();
    }
    touchStartX.current = null;
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    const diff = mouseStartX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
      resetAutoPlay();
    }
    isDragging.current = false;
    mouseStartX.current = null;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    mouseStartX.current = null;
  };

  return (
    <section id="reviews" style={{ overflow: 'hidden', padding: '1px 0', background: 'var(--website-bg)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="serif-heading" style={{ marginBottom: '1rem' }}>What People Are Saying</h2>
        <p style={{ marginBottom: '4rem', color: '#666' }}>Real results from real users.</p>
        <div
          style={{ position: 'relative', cursor: 'grab', userSelect: 'none' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            id="testimonial-slider"
            ref={sliderRef}
            style={{
              display: 'flex',
              gap: '2rem',
              transition: 'transform 0.5s ease',
              padding: '1rem 0',
              transform: `translateX(-${currentIndex * (slideWidth + 32)}px)`,
              pointerEvents: 'none',
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
