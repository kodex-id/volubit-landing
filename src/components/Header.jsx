import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function IconSearch() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/><path d="M15.5 15.5L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}
function IconCart() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="8" cy="17" r="1" fill="currentColor"/><circle cx="15" cy="17" r="1" fill="currentColor"/><path d="M2 2h2l2.6 10.39a1 1 0 0 0 1 .61h7.72a1 1 0 0 0 1-.76l1.38-5.5H5.21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function MobileNav({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="mobile-nav-overlay" onClick={onClose}>
      <div className="mobile-nav-content" onClick={e => e.stopPropagation()}>
        <a href="#news" onClick={onClose}>News</a>
        <a href="#membership" onClick={onClose}>Membership</a>
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
          {/* Logo dihapus agar hanya ada di hero */}
          <nav className="nav desktop-nav">
            <a href="#news">NEWS</a>
            <a href="#membership">MEMBERSHIP</a>
          </nav>
          <div className="header-actions">
            <button className="icon-btn"><IconSearch /></button>
            <button className="icon-btn"><IconCart /></button>
            <ThemeToggle />
            <button className="login-btn desktop-login">LOGIN</button>
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
