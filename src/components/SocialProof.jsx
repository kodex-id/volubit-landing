import React, { useEffect, useRef, useState } from 'react';
import './SocialProof.css';

const stats = [
  { label: 'Anggota Komunitas', value: 18500 },
  { label: 'Pembaca Artikel', value: 92000 },
  { label: 'Event Terselenggara', value: 48 },
];
const testimonials = [
  { name: 'Andi', text: 'Volubit mengubah cara saya belajar Web3!', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Siti', text: 'Komunitasnya suportif dan edukatif.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Budi', text: 'Event dan bootcamp-nya keren banget!', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' },
];
const partners = [
  { name: 'BlockLabs', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ethereum_logo.png' },
  { name: 'CryptoID', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg' },
  { name: 'Web3Asia', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Chainlink_Logo.png' },
  { name: 'FinTechX', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Polkadot_logo.png' },
];

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    let raf;
    function update() {
      start += step;
      if (start >= target) {
        setCount(target);
      } else {
        setCount(start);
        raf = requestAnimationFrame(update);
      }
    }
    update();
    return () => raf && cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

export default function SocialProof() {
  // Count-up animasi
  const counts = stats.map(s => useCountUp(s.value));
  // Carousel
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="socialproof-section" data-aos="fade-up">
      <h2 className="section-title">Volubit dalam Data</h2>
      <div className="socialproof-stats">
        {stats.map((s, i) => (
          <div className="stat-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="stat-value">{counts[i].toLocaleString()}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="socialproof-testimonials" data-aos="fade-up" data-aos-delay="200">
        <div className="testimonial-carousel">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card${i === idx ? ' active' : ''}`} key={i}>
              <img src={t.avatar} alt={`Foto ${t.name} - Testimoni Volubit`} className="testimonial-avatar" loading="lazy" />
              <div className="testimonial-text">“{t.text}”</div>
              <div className="testimonial-name">{t.name}</div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, i) => (
            <span key={i} className={i === idx ? 'dot active' : 'dot'} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
      <div className="socialproof-partners">
        {partners.map((p, i) => (
          <div className="partner-logo" key={i} title={p.name} data-aos="fade-up" data-aos-delay={i * 80 + 300}>
            <img src={p.logo} alt={`Logo ${p.name} - Mitra Volubit`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
} 