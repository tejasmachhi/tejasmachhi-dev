'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import './Header.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <span>&lt;/&gt;</span>
            </div>
            <div className="logo-text">
              <div className="logo-name">TEJAS MACHHI</div>
              <div className="logo-subtitle">FRONTEND DEVELOPER</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about-us" className="nav-link">About</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/fun" className="nav-link">Fun</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            id="mobileMenuBtn" 
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <Icon icon="mdi:close" className="close-icon" />
            ) : (
              <Icon icon="mdi:menu" className="menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} id="mobileNav">
          <div className="mobile-nav-content">
            <Link href="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
            <Link href="/about-us" className="mobile-nav-link" onClick={closeMenu}>About</Link>
            <Link href="/projects" className="mobile-nav-link" onClick={closeMenu}>Projects</Link>
            <Link href="/fun" className="mobile-nav-link" onClick={closeMenu}>Fun</Link>
            <Link href="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
