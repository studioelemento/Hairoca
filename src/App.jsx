import React, { useState, useEffect } from 'react';
import './style.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Ingredients from './components/Ingredients';
import Benefits from './components/Benefits';
import HowToUse from './components/HowToUse';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/PASTE_YOUR_FORM_ID_HERE', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
      } else {
        const data = await response.json();
        alert(data.errors ? data.errors.map(err => err.message).join(', ') : 'Oops! There was a problem submitting your form.');
        setFormStatus('idle');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form.');
      setFormStatus('idle');
    }
  };

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      e.preventDefault();
      const targetId = target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Ingredients />
      <Benefits />
      {/* <HowToUse /> */}
      <Reviews />
      <Footer />

      <a 
        id="floating-help" 
        className="floating-help"
        href="https://rvbrothers.in/hairoca-ayurvedic-hair-oil-hair-fall-control/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <span style={{ fontSize: '1.1rem' }}>🛒</span> Buy Now
      </a>

      {isModalOpen && (
        <div id="contact-modal" className="modal" style={{ display: 'block' }} onClick={(e) => {
          if (e.target.id === 'contact-modal') setIsModalOpen(false);
        }}>
          <div className="modal-content">
            <span className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</span>
            
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '4rem', color: '#2E7D32', marginBottom: '1.5rem' }}>✔</div>
                <h2 className="serif-heading" style={{ marginBottom: '1rem' }}>Message Sent!</h2>
                <p>Thank you for reaching out to Hairoca. Your enquiry has been received in our inbox, and we'll get back to you shortly.</p>
                <button className="btn" onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }} style={{ marginTop: '2rem' }}>Close</button>
              </div>
            ) : (
              <>
                <h2 className="serif-heading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Enquire Now</h2>
                <p style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>Have questions about Hairoca? Send us a message and we'll get back to you in your inbox.</p>
                
                <form id="enquiry-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows="4" placeholder="How can we help you?" required></textarea>
                  </div>
                  <button type="submit" className="btn" style={{ width: '100%', borderRadius: '4px' }} disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
