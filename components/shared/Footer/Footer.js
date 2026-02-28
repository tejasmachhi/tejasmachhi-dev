"use client";

import Link from 'next/link';
import IconComponent from '@/components/IconComponent';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-text">Tejas</span>
              <span className="logo-dot">.</span>
            </div>
            <p>
              I'm a passionate self-taught frontend developer who loves creating beautiful, 
              responsive, and user-friendly websites.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/tejas_2710_/" target="_blank" rel="noopener noreferrer" className="social-link">
                <IconComponent icon="mdi:instagram" />
              </a>
              <a href="https://www.linkedin.com/in/tejas-machhi-470388187/" target="_blank" rel="noopener noreferrer" className="social-link">
                <IconComponent icon="mdi:linkedin" />
              </a>
              <a href="https://github.com/tejasmachhi" target="_blank" rel="noopener noreferrer" className="social-link">
                <IconComponent icon="mdi:github" />
              </a>
              <a href="https://wa.me/91635333122" target="_blank" rel="noopener noreferrer" className="social-link">
                <IconComponent icon="mdi:whatsapp" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Tejas Machhi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
