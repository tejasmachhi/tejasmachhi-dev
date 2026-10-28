'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import './Header.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Projects', href: '/projects' },
    { name: 'Fun', href: '/fun' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Initialize theme state from DOM / localStorage
    const savedTheme = document.documentElement.getAttribute('data-theme') || 
      (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light';
    setTheme(savedTheme);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {}
  };

  return (
    <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          {/* Text-based Typography Logo */}
          <Link href="/" className="logo text-logo">
            <span className="logo-badge">
              <Icon icon="mdi:code-tags" className="logo-badge-icon" />
            </span>
            <div className="logo-text-wrapper">
              <span className="logo-name">
                Tejas<span className="logo-dot">.</span><span className="logo-surname">Machhi</span>
              </span>
              <span className="logo-tagline">Frontend UI & UI/UX Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`nav-link ${isLinkActive(link.href) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions: Theme Toggle + Resume Button */}
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark and light mode"
            >
              {theme === 'dark' ? (
                <Icon icon="mdi:white-balance-sunny" className="theme-icon sun-icon" />
              ) : (
                <Icon icon="mdi:moon-waning-crescent" className="theme-icon moon-icon" />
              )}
            </button>

            <button 
              type="button" 
              className="resume-nav-btn"
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
            >
              Resume
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="mobile-header-actions">
            <button
              type="button"
              className="theme-toggle-btn mobile-theme-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark and light mode"
            >
              {theme === 'dark' ? (
                <Icon icon="mdi:white-balance-sunny" className="theme-icon sun-icon" />
              ) : (
                <Icon icon="mdi:moon-waning-crescent" className="theme-icon moon-icon" />
              )}
            </button>

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
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} id="mobileNav">
          <div className="mobile-nav-content">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${isLinkActive(link.href) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <button 
              type="button" 
              className="mobile-resume-btn"
              onClick={() => {
                closeMenu();
                window.dispatchEvent(new CustomEvent('open-resume-modal'));
              }}
            >
              <Icon icon="mdi:file-document-outline" /> View Resume
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
