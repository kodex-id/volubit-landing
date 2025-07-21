import React, { useRef, useEffect } from 'react';
import './FeaturedTicker.css';

const announcements = [
  'Kemitraan Baru: Volubit x BlockLabs',
  'Webinar Mendatang: Pengantar Analisis On-Chain',
  'Promo: Daftar VIP Club & Dapatkan Benefit Eksklusif',
];

export default function FeaturedTicker() {
  const trackRef = useRef();
  useEffect(() => {
    const track = trackRef.current;
    let isPaused = false;
    let start;
    let progress = 0;
    let req;
    const speed = 60; // px per second
    function step(ts) {
      if (!start) start = ts;
      if (!isPaused) {
        const delta = (ts - start) / 1000 * speed;
        progress = (progress + delta) % track.scrollWidth;
        track.style.transform = `translateX(-${progress}px)`;
        start = ts;
      }
      req = requestAnimationFrame(step);
    }
    req = requestAnimationFrame(step);
    track.addEventListener('mouseenter', () => { isPaused = true; });
    track.addEventListener('mouseleave', () => { isPaused = false; });
    return () => {
      cancelAnimationFrame(req);
      track.removeEventListener('mouseenter', () => { isPaused = true; });
      track.removeEventListener('mouseleave', () => { isPaused = false; });
    };
  }, []);
  return (
    <div className="featured-ticker">
      <div className="ticker-track" ref={trackRef}>
        {[...announcements, ...announcements, ...announcements].map((text, i) => (
          <span className="ticker-item" key={i}>
            <span className="ticker-dot">•</span> {text}
          </span>
        ))}
      </div>
    </div>
  );
} 