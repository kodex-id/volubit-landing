import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
  return (
    <header className="volubit-header">
      <div className="header-inner">
        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">🔷</span>
          <span className="logo-text">Volubit</span>
        </div>
        {/* Nav */}
        <nav className="nav">
          <a href="#news">News</a>
          <a href="#event">Event</a>
          <a href="#tools">Tools</a>
        </nav>
        {/* Theme toggle & Login */}
        <div className="header-actions">
          <ThemeToggle />
          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
}
