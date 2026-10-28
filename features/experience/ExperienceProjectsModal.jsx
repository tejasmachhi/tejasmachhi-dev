'use client';

import { useEffect } from 'react';
import IconComponent from '@/components/IconComponent';
import './ExperienceProjectsModal.scss';

export default function ExperienceProjectsModal({ experience, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !experience) return null;

  const projects = experience.projects || [];

  return (
    <div className="exp-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="exp-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="exp-modal-header">
          <div className="header-left">
            <div className="company-badge-icon">
              <IconComponent icon={experience.icon || 'mdi:briefcase-check'} />
            </div>
            <div className="header-text">
              <div className="title-row">
                <h3>{experience.company}</h3>
                <span className="count-pill">{projects.length} Modules</span>
              </div>
              <p className="subtitle">
                Key Enterprise Projects, Client Platforms & Product Modules
              </p>
              <div className="meta-tags">
                <span className="meta-tag role-tag">
                  <IconComponent icon="mdi:account-tie" />
                  {experience.position}
                </span>
                <span className="meta-tag period-tag">
                  <IconComponent icon="mdi:calendar-range" />
                  {experience.period}
                </span>
                <span className="meta-tag loc-tag">
                  <IconComponent icon="mdi:map-marker" />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          <button 
            type="button" 
            className="btn-modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <IconComponent icon="mdi:close" />
          </button>
        </div>

        {/* Modal Quick Highlights Banner */}
        <div className="exp-modal-stats-bar">
          <div className="stat-chip">
            <IconComponent icon="mdi:layers-triple-outline" />
            <span><strong>{projects.length}</strong> Production Modules</span>
          </div>
          <div className="stat-chip">
            <IconComponent icon="mdi:palette-swatch-outline" />
            <span>Figma to Pixel-Perfect Code</span>
          </div>
          <div className="stat-chip">
            <IconComponent icon="mdi:table-large" />
            <span>Complex Data Grids & Admin Flows</span>
          </div>
          <div className="stat-chip">
            <IconComponent icon="mdi:code-json" />
            <span>Scalable Modular SCSS</span>
          </div>
        </div>

        {/* Modal Body - 7 Projects List */}
        <div className="exp-modal-body">
          <div className="projects-section-title">
            <IconComponent icon="mdi:view-grid-outline" />
            <span>Detailed Breakdown of All {projects.length} Modules</span>
          </div>

          <div className="projects-cards-list">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-detail-card">
                <div className="proj-card-head">
                  <div className="proj-head-left">
                    <span className="proj-number">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                    <h4 className="proj-title">{proj.title}</h4>
                  </div>
                  <span className="proj-category-badge">{proj.category}</span>
                </div>

                <ul className="proj-highlights-list">
                  {proj.highlights.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <IconComponent icon="mdi:check-circle" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="exp-modal-footer">
          <div className="footer-tech">
            <span className="tech-heading">Stack Used:</span>
            <div className="footer-tags">
              {experience.technologies?.slice(0, 7).map((t, i) => (
                <span key={i} className="foot-tag">{t.name}</span>
              ))}
            </div>
          </div>
          <button type="button" className="btn-close-footer" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
