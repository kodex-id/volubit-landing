import React from 'react';
import './Footer.css';

const socials = [
  { icon: '🐦', label: 'Twitter', url: '#' },
  { icon: '💬', label: 'Telegram', url: '#' },
  { icon: '📺', label: 'YouTube', url: '#' },
];

export default function Footer() {
  return (
    <footer className="volubit-footer">
      <div className="footer-inner">
        <div className="footer-col logo-col">
          <div className="footer-logo">🔷 Volubit</div>
          <div className="footer-desc">Web3 & TechFi Community</div>
        </div>
        <div className="footer-col address-col">
          <div className="footer-title">Kantor</div>
          <div className="footer-address">Jl. Teknologi No. 88, Jakarta</div>
        </div>
        <div className="footer-col social-col">
          <div className="footer-title">Sosial Media</div>
          <div className="footer-socials">
            {socials.map((s, i) => (
              <a href={s.url} key={i} aria-label={s.label} className="footer-social-icon">{s.icon}</a>
            ))}
          </div>
        </div>
        <div className="footer-col trust-col">
          <div className="footer-title">Kepercayaan</div>
          <a href="#" className="footer-link">Trustpilot</a>
          <a href="#" className="footer-link">Pedoman Media Siber</a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Volubit. All rights reserved.</div>
    </footer>
  );
} 