import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">The Future of Web3 Education</div>
        <h1 className="hero-title">
          Learn. Build. <span className="hero-highlight">Innovate.</span>
        </h1>
        <p className="hero-sub">
          Volubit is your gateway to the world of crypto and Web3. Stay updated with the latest news and enhance your knowledge through our comprehensive educational resources.
        </p>
        <div className="hero-cta-row">
          <button className="hero-btn primary">
            Academy <span className="hero-btn-arrow">&gt;</span>
          </button>
          <button className="hero-btn outline">News</button>
          <button className="hero-btn outline">Tools</button>
        </div>
      </div>
    </section>
  );
} 