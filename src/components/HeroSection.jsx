import React from 'react';
import './HeroSection.css';

function VolubitLogo() {
  return (
    <div className="hero-logo">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 4L36.5 20.5H51L39 29.5L43.5 46L32 36.5L20.5 46L25 29.5L13 20.5H27.5L32 4Z" fill="#00CFFF"/>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section">
      <VolubitLogo />
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