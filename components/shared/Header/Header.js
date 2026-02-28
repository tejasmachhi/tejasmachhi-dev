'use client';
import { useState } from 'react';
import Link from 'next/link';
import './Header.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <span className="logo-text">Tejas</span>
              <span className="logo-dot">.</span>
            </Link>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className="nav-link" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
