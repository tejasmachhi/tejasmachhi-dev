"use client";

import Link from 'next/link';
import IconComponent from '@/components/IconComponent';
import './Footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">
              <div className="logo-icon">
                <span>&lt;/&gt;</span>
              </div>
              <div className="logo-text">
                <div className="logo-name">TEJAS MACHHI</div>
                <div className="logo-subtitle">FRONTEND DEVELOPER</div>
              </div>
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
              <li><Link href="/fun">Fun</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/tejas_2710_/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <IconComponent icon="mdi:instagram" />
              </a>
              <a href="https://www.linkedin.com/in/tejas-machhi-470388187/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <IconComponent icon="mdi:linkedin" />
              </a>
              <a href="https://github.com/tejasmachhi" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <IconComponent icon="mdi:github" />
              </a>
              <a href="https://wa.me/91635333122" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <IconComponent icon="mdi:whatsapp" />
              </a>
              <a href="mailto:tejasmachhi@example.com" className="social-link" aria-label="Email">
                <IconComponent icon="mdi:email" />
              </a>
            </div>
            <div className="newsletter">
              <p>Stay updated with my latest projects</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button type="submit" className="newsletter-btn">
                  <IconComponent icon="mdi:send" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Tejas Machhi. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
