import React from 'react';
import './Events.css';

const upcoming = {
  title: 'Web3 Summit 2024',
  date: '12 Mei 2024',
  desc: 'Konferensi terbesar Web3 & TechFi di Asia Tenggara.',
  img: 'https://source.unsplash.com/600x300/?conference,web3',
};
const gallery = [
  'https://source.unsplash.com/200x200/?event,web3',
  'https://source.unsplash.com/200x200/?blockchain,meetup',
  'https://source.unsplash.com/200x200/?crypto,seminar',
  'https://source.unsplash.com/200x200/?tech,conference',
];

export default function Events() {
  return (
    <section className="events-section" data-aos="fade-up">
      <h2 className="section-title">Events</h2>
      <div className="events-upcoming" data-aos="fade-up" data-aos-delay="100">
        <img src={upcoming.img} alt={`Acara mendatang: ${upcoming.title}`} className="events-upcoming-img" loading="lazy" />
        <div className="events-upcoming-info">
          <h3>{upcoming.title}</h3>
          <div className="events-date">{upcoming.date}</div>
          <p>{upcoming.desc}</p>
          <button className="events-btn">Daftar Sekarang</button>
        </div>
      </div>
      <div className="events-gallery">
        {gallery.map((src, i) => (
          <div className="events-photo" key={i} style={{backgroundImage: `url(${src})`}} data-aos="fade-up" data-aos-delay={i * 100 + 200} />
        ))}
      </div>
    </section>
  );
} 