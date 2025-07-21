import React from 'react';
import './Academy.css';

const items = [
  {
    title: 'Bootcamp',
    desc: 'Program intensif untuk membangun skill Web3 & TechFi dari nol.',
    icon: '💡',
  },
  {
    title: 'Seminar',
    desc: 'Sesi edukasi mendalam bersama pakar industri.',
    icon: '🎤',
  },
  {
    title: 'Webinar',
    desc: 'Belajar online interaktif dengan komunitas.',
    icon: '🖥️',
  },
];

export default function Academy() {
  return (
    <section className="academy-section" data-aos="fade-up">
      <h2 className="section-title">Academy</h2>
      <div className="academy-grid">
        {items.map((item, i) => (
          <div className="academy-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="academy-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 