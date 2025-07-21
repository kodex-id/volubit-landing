import React from 'react';
import './Media.css';

const articles = [
  { title: '5 Tren Web3 di 2024', img: 'https://source.unsplash.com/400x240/?blockchain', },
  { title: 'Analisis On-Chain: Dasar & Manfaat', img: 'https://source.unsplash.com/400x240/?data,finance', },
  { title: 'Tips Sukses di Dunia Crypto', img: 'https://source.unsplash.com/400x240/?crypto', },
  { title: 'Mengenal NFT Lebih Dekat', img: 'https://source.unsplash.com/400x240/?nft', },
];

export default function Media() {
  return (
    <section className="media-section" data-aos="fade-up">
      <h2 className="section-title">Media</h2>
      <div className="media-grid">
        {articles.map((a, i) => (
          <div className="media-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="media-thumb" style={{backgroundImage: `url(${a.img})`}} />
            <div className="media-title">{a.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 