import React from 'react';
import './Agency.css';

const features = [
  { icon: '📊', title: 'Konsultasi Pemasaran', desc: 'Strategi digital & pemasaran Web3.' },
  { icon: '✍️', title: 'Pembuatan Konten', desc: 'Konten edukatif, promosi, dan kreatif.' },
  { icon: '🚀', title: 'Kampanye Digital', desc: 'Eksekusi kampanye & growth hacking.' },
  { icon: '🎨', title: 'Branding', desc: 'Desain identitas & positioning brand.' },
];

export default function Agency() {
  return (
    <section className="agency-section" data-aos="fade-up">
      <h2 className="section-title">Agency (Untuk Bisnis)</h2>
      <div className="agency-features">
        {features.map((f, i) => (
          <div className="agency-feature" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="agency-icon">{f.icon}</div>
            <div>
              <div className="agency-title">{f.title}</div>
              <div className="agency-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 