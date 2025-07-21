import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-anim" aria-hidden="true" />
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