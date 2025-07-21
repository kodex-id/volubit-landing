import React from 'react';
import './CTASection.css';

export default function CTASection() {
  function handleRipple(e) {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.classList.add('ripple');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Bergabunglah dengan Volubit Sekarang!</h2>
        <p className="cta-sub">Jadilah bagian dari komunitas Web3 & TechFi paling inovatif di Indonesia.</p>
        <div className="cta-actions">
          <button className="cta-btn primary" onClick={handleRipple}>Gabung Sekarang</button>
          <button className="cta-btn secondary" onClick={handleRipple}>Hubungi Kami</button>
        </div>
      </div>
    </section>
  );
} 