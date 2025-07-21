import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge" data-aos="fade-up" data-aos-delay="0">The Future of Web3 Education</div>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Learn. Build. <span className="hero-highlight">Innovate.</span>
        </h1>
        <p className="hero-sub" data-aos="fade-up" data-aos-delay="200">
          Volubit is your gateway to the world of crypto and Web3. Stay updated with the latest news and enhance your knowledge through our comprehensive educational resources.
        </p>
        <div className="hero-cta-row">
          <button className="hero-btn primary" data-aos="fade-up" data-aos-delay="300">
            Academy <span className="hero-btn-arrow">&gt;</span>
          </button>
          <button className="hero-btn outline" data-aos="fade-up" data-aos-delay="400">Tools</button>
          <button className="hero-btn outline" data-aos="fade-up" data-aos-delay="500">News</button>
        </div>
      </div>
    </section>
  );
} 