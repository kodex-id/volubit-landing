import React from 'react';
import './VIPClub.css';

const benefits = [
  { icon: '⭐', text: 'Akses sinyal & analisis eksklusif' },
  { icon: '💬', text: 'Diskusi privat dengan expert' },
  { icon: '📈', text: 'Laporan PNL bulanan' },
];
const screenshots = [
  'https://source.unsplash.com/200x120/?chart,profit',
  'https://source.unsplash.com/200x120/?finance,win',
  'https://source.unsplash.com/200x120/?crypto,profit',
];

export default function VIPClub() {
  return (
    <section className="vipclub-section" data-aos="fade-up">
      <h2 className="section-title">VIP Club</h2>
      <div className="vipclub-grid">
        <div className="vipclub-benefits">
          <ul>
            {benefits.map((b, i) => (
              <li key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="vipclub-icon">{b.icon}</span> {b.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="vipclub-gallery">
          {screenshots.map((src, i) => (
            <div className="vipclub-screenshot" key={i} style={{backgroundImage: `url(${src})`}} data-aos="fade-up" data-aos-delay={i * 100 + 100} />
          ))}
        </div>
      </div>
    </section>
  );
} 