import React from 'react';
import './Footer.css';

const socials = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21.944 4.509a1.5 1.5 0 0 0-1.7-1.13C17.1 3.98 6.1 7.5 3.1 8.5a1.5 1.5 0 0 0-.1 2.84l3.6 1.5 1.4 4.2a1.5 1.5 0 0 0 2.4.7l2.1-2.1 3.7 2.7a1.5 1.5 0 0 0 2.4-.8l3-12a1.5 1.5 0 0 0-.1-.83zM9.7 15.1l-1.2-3.6 7.6-6.7-6.4 7.7 3.2 2.3-3.2.3z" fill="currentColor"/></svg>
    ),
    label: 'Telegram',
    url: '#',
    abbr: '',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><g fill="currentColor"><path d="M17.53 7.47a.75.75 0 0 1 0 1.06l-6.72 6.72h5.19a.75.75 0 0 1 0 1.5H7.25a.75.75 0 0 1-.75-.75V7.25a.75.75 0 0 1 1.5 0v5.19l6.72-6.72a.75.75 0 0 1 1.06 0z"/></g></svg>
    ),
    label: 'X (Twitter)',
    url: '#',
    abbr: '',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><g fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M12 7.5A4.5 4.5 0 1 0 12 16.5A4.5 4.5 0 1 0 12 7.5Z" fill="#fff"/><circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/></g></svg>
    ),
    label: 'Instagram',
    url: '#',
    abbr: '',
  },
];

const services = ["Academy", "VIP Club", "Events", "Agency"];
const resources = [
  { label: "News", url: "#" },
  { label: "Tools", url: "#" },
  { label: "Support", url: "#" },
  { label: "Pedoman Media Siber", url: "#" },
];

export default function Footer() {
  return (
    <footer className="volubit-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo">VOLUBIT</div>
          <div className="footer-desc">Empowering the next generation of financial innovators through education, community, and cutting-edge technology.</div>
          <div className="footer-socials-row">
            {socials.map((s, i) => (
              <a href={s.url} key={i} aria-label={s.label} className="footer-social-icon" title={s.label}>
                {s.icon}
                <span className="footer-social-abbr">{s.abbr}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col footer-links">
          <div className="footer-title">Services</div>
          <ul>
            {services.map((s, i) => <li key={i} style={{ animationDelay: `${i * 0.07}s` }}><a href="#">{s}</a></li>)}
          </ul>
        </div>
        <div className="footer-col footer-links">
          <div className="footer-title">Resources</div>
          <ul>
            {resources.map((r, i) => <li key={i} style={{ animationDelay: `${(i + services.length) * 0.07}s` }}><a href={r.url}>{r.label}</a></li>)}
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <div className="footer-title">Contact</div>
          <ul>
            <li style={{ animationDelay: `${(services.length + resources.length) * 0.07}s` }}><span className="footer-icon"><svg width="18" height="18" fill="none"><path d="M9 2C5.13 2 2 5.13 2 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 9 6a2.5 2.5 0 0 1 0 5.5z" fill="currentColor"/></svg></span>Jakarta Convention Center<br/>Jakarta, Indonesia</li>
            <li style={{ animationDelay: `${(services.length + resources.length + 1) * 0.07}s` }}><span className="footer-icon"><svg width="18" height="18" fill="none"><path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 9l6-4.99V4a2 2 0 0 0-2-2H4z" fill="currentColor"/></svg></span>hello@volubit.com</li>
            <li style={{ animationDelay: `${(services.length + resources.length + 2) * 0.07}s` }}><span className="footer-icon"><svg width="18" height="18" fill="none"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C4.48 22 2 19.52 2 16.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z" fill="currentColor"/></svg></span>+62 21 1234 5678</li>
            <li style={{ animationDelay: `${(services.length + resources.length + 3) * 0.07}s` }}><span className="footer-icon footer-star">★</span><a href="#" className="footer-trustpilot">Trustpilot Reviews</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 