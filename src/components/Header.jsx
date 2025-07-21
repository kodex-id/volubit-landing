import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function MobileNav({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="mobile-nav-overlay" onClick={onClose}>
      <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
        <a href="#news" onClick={onClose}>News</a>
        <a href="#event" onClick={onClose}>Event</a>
        <a href="#tools" onClick={onClose}>Tools</a>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <header className="volubit-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🔷</span>
            <span className="logo-text">Volubit</span>
          </div>
          <nav className="nav desktop-nav">
            <a href="#news">News</a>
            <a href="#event">Event</a>
            <a href="#tools">Tools</a>
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <button className="login-btn desktop-login">Login</button>
            <button className="hamburger-btn" onClick={() => setMobileNavOpen(true)} aria-label="Open menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
