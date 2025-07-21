import React, { useState, useEffect } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div 
        className="hero-bg-anim" 
        aria-hidden="true" 
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      />
      <div className="hero-content">
        <h1 className="hero-title">LEARN. BUILD. INNOVATE.</h1>
        <p className="hero-sub">Platform Web3 & TechFi untuk belajar, membangun, dan berinovasi bersama komunitas terbaik.</p>
        <div className="hero-cta">
          <button className="hero-btn primary">Mulai Sekarang</button>
          <button className="hero-btn secondary">Pelajari Lebih Lanjut</button>
        </div>
      </div>
    </section>
  );
} 