'use client';

import { useState, useEffect } from 'react';
import IconComponent from '@/components/IconComponent';
import './ResumeModal.scss';

export default function ResumeModal({ isOpen: externalIsOpen, onClose: externalOnClose }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const isModalOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener('open-resume-modal', handleOpenEvent);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-resume-modal', handleOpenEvent);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const resumePlainText = `TEJAS MACHHI
Ahmedabad, Gujarat, India | +91 6353331221 | tejasmachhi2710@gmail.com
GitHub: https://github.com/tejasmachhi | LinkedIn: https://www.linkedin.com/in/tejas-machhi-470388187/

PROFESSIONAL HEADLINE
Frontend UI & UI/UX Developer

PROFESSIONAL SUMMARY
Creative and detail-oriented Frontend UI & UI/UX Developer with ~1+ year of professional experience building responsive, user-centered web applications, complex enterprise data management platforms, and fluid digital interfaces. Highly versatile across modern frontend ecosystems—expert at turning complex Figma mockups into production-ready React.js and Next.js applications, customizing enterprise UI libraries (PrimeReact, Tailwind CSS, Framer Motion), and architecting modular SCSS design systems. Proven track record at Moltech Solution Pvt Ltd across 7+ core domains including Order Management Systems, HRMS portals, e-commerce templates, and dynamic business websites. Proficient in AI-augmented engineering (ChatGPT, Google Antigravity) for rapid R&D, prompt engineering, and UI component documentation. Passionate about pixel-perfection, data grids, maintainable CSS architecture, and delivering flawless user experiences.

CORE UI/UX & FRONTEND CONTRIBUTIONS
- UI/UX design implementation and frontend development
- Creative and modern interface design
- Responsive layouts across desktop, tablet, and mobile
- Complex grid and data-management interfaces
- PrimeReact component customization
- React-based reusable components and dynamic UI handling
- SCSS architecture, variables, mixins, utilities, and shared styles
- Theme and color-palette implementation
- Forms, cards, modals, dialogs, dropdowns, filters, steppers, and dashboards
- UI consistency and reusable design patterns
- QA-based UI bug fixing and production UI improvements
- Layout, spacing, alignment, typography, grid, modal, and component-level improvements
- Client requirement analysis and design implementation
- Document and email template UI development
- UI validation and testing before final delivery

TECHNICAL SKILLS
- Frontend & Modern UI: React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, SCSS / Sass, Tailwind CSS, PrimeReact, Framer Motion, Bootstrap 5, jQuery, Responsive Web Design
- UI/UX & Creative Design: UI/UX Design, Figma, Canva, Design Systems, Visual Hierarchy, Spacing & Layout, Micro-Interactions, PSD / Figma to Pixel-Perfect Code
- Enterprise Data & UI Controls: Complex Data Grids & Tables, Custom Filters, Modals & Dialogs, Steppers, Multi-step Forms, Color Palette & Theme Systems
- AI Tools & Modern R&D: ChatGPT, Google Antigravity, Advanced Prompt Engineering, Technical & Component Documentation
- Tools & Version Control: Git, GitHub, VS Code, Browser DevTools, Cross-Browser Testing & Debugging

PROFESSIONAL EXPERIENCE

Frontend Web Developer (UI/UX Focus)
Moltech Solution Pvt Ltd | Ahmedabad, Gujarat | May 2025 – Present
- Engineered responsive web applications and enterprise admin dashboards using React.js, Next.js, and PrimeReact, with the flexibility to adopt modern tech stacks and UI frameworks as required.
- Transformed complex Figma mockups and creative concepts into pixel-perfect, accessible, and responsive components across mobile, tablet, and desktop breakpoints.
- Implemented engaging micro-interactions and smooth UI transitions utilizing modern styling and Framer Motion patterns for enhanced user experience.
- Customized enterprise UI component libraries (complex data tables, filter toolbars, dialog modals, and multi-step form flows) according to design tokens.
- Leveraged modern AI tools (Google Antigravity, ChatGPT) and prompt engineering for rapid R&D, exploring creative UI patterns, and speeding up component development.
- Authored clear technical and UI component documentation to facilitate seamless design handoffs and cross-functional team collaboration.
- Structured modular, scalable SCSS & Tailwind stylesheets utilizing variables, mixins, and flex/grid layout architectures to eliminate CSS redundancy.
- Diagnosed and resolved high-priority production UI defects, cross-browser layout inconsistencies, and QA bug tickets to uphold strict design fidelity.

KEY ENTERPRISE PROJECTS & MODULES AT MOLTECH:

1. Order Management System
- Worked on UI development, redesign, enhancements, and maintenance across multiple modules and pages.
- Designed and managed complex data grids, tables, filters, action controls, modals, forms, cards, dashboards, and multi-data UI layouts.
- Worked with PrimeReact components and customized them using SCSS according to project requirements.
- Implemented and maintained theme and color-palette systems, including reusable SCSS variables and organization-level UI customization.
- Improved SCSS structure using variables, mixins, shared styles, and reusable utilities to reduce duplicate styling.
- Worked on reusable UI patterns and design components to maintain consistency across multiple modules.
- Redesigned major module interfaces including forms, cards, sidebar navigation, steppers, and detailed workflow screens.
- Improved grid-related UI including column widths, data wrapping, height handling, filters, search behavior, alignment, and layout consistency.
- Handled continuous UI bug fixing and enhancements based on QA feedback and production requirements.
- Fixed issues related to modals, grids, layouts, spacing, alignment, dropdowns, headers, filters, and action buttons.
- Performed UI validation and screen-size testing, including grid and layout checks up to laptop resolution.

2. HRMS / Human Resource Management Platform
- Worked on UI development and enhancement of HR management modules using React and PrimeReact.
- Designed and customized data grids, forms, dialogs, cards, badges, progress bars, attendance sections, filters, and action controls.
- Customized PrimeReact components using SCSS to match specific UI and design requirements.
- Worked on dynamic, data-driven UI sections and reusable interface patterns.
- Designed and improved employee-related workflows, dashboards, forms, attendance interfaces, and data-management screens.
- Improved grid layouts, frozen columns, alignment, spacing, height handling, and overall data presentation.
- Created clean and creative UI designs while maintaining consistency across the product.
- Worked on different screen sizes and adjusted layouts and components wherever required.
- Fixed QA-reported UI issues and performed continuous visual and layout improvements.
- Built reusable UI structures for repeated elements and common interface patterns.

3. Matrimony Website
- Designed and developed a modern, clean, and user-friendly Matrimony website UI.
- Created page layouts and UI sections using HTML, CSS, and SCSS with a focus on maintainable styling.
- Used reusable SCSS patterns and avoided unnecessary duplicate styling.
- Designed responsive layouts and adjusted UI components for different screen sizes.
- Worked on visual hierarchy, typography, spacing, cards, forms, buttons, sections, and overall user experience.
- Converted design requirements into polished and functional frontend interfaces.

4. E-commerce Templates
- Worked on multiple e-commerce template designs covering major shopping and customer-facing workflows.
- Designed and developed product listing pages, product detail pages, checkout pages, cart sections, order summaries, profile pages, category pages, and other major screens.
- Managed product listing interfaces with multiple products, grids, filters, cards, actions, and supporting UI elements.
- Created responsive designs across desktop, tablet, and mobile screen sizes.
- Worked on reusable SCSS structures and shared UI patterns across multiple pages.
- Improved product grids, cards, filters, spacing, alignment, buttons, checkout interfaces, and shopping-related UI.
- Focused on creating consistent, visually appealing, and user-friendly e-commerce experiences.

5. Business & Service Websites
- Worked on multiple business and service-based websites with a strong focus on UI/UX implementation and frontend development.
- Designed and developed service pages, technology pages, solution sections, headers, footers, search interfaces, login screens, modals, checkout flows, profile pages, and order-related pages.
- Implemented reusable UI sections and shared SCSS structures across different pages.
- Worked with SCSS variables, mixins, reusable components, grids, cards, steppers, dropdowns, and modals.
- Converted design references and requirements into functional and visually consistent frontend interfaces.
- Worked on responsive layouts and adjusted UI behavior across different screen sizes.
- Performed UI testing, visual validation, bug fixing, and layout improvements across multiple pages.

6. Document & Email Template UI
- Designed and developed UI layouts for document templates and email templates based on required content and design specifications.
- Created structured layouts with proper typography, spacing, sections, tables, headers, footers, and content hierarchy.
- Ensured templates maintained a consistent visual appearance and were properly aligned with the required design.
- Converted provided requirements and references into clean, usable template interfaces.

7. Client Requirements & UI Delivery
- Worked closely with client requirements, design references, and project specifications to understand the expected UI and deliver designs accordingly.
- Translated requirements into practical and user-friendly UI layouts while maintaining design consistency.
- Made required UI adjustments based on feedback and delivered the final design as per the expected requirements.
- Reviewed designs before delivery to verify layout, spacing, alignment, responsiveness, component behavior, and overall visual consistency.
- Handled design changes and iterations based on requirements while maintaining the existing UI structure and standards.

Front End Developer Intern
Dit Interactive Pvt. Ltd. | Ahmedabad, Gujarat | June 2024 – October 2024
- Coded using HTML, CSS, JavaScript, and React to develop responsive features for mobile and desktop platforms.
- Designed and updated UI layouts to meet performance, cross-browser compatibility, and usability requirements.

Frontend Developer Intern
Hupp Technologies | Ahmedabad, Gujarat | July 2022 – September 2022
- Worked with frontend technologies including HTML5, CSS3, Bootstrap 5, Sass, Git, and jQuery.
- Contributed to PSD and Figma to HTML conversion projects and built responsive layouts.

Frontend Developer Intern
Web Brains Technology | Vadodara, Gujarat | August 2021 – December 2021
- Built responsive web layouts and interface sections using HTML5, CSS3, and Bootstrap.

EDUCATION
- Bachelor of Commerce (B.Com) | MS University (The Maharaja Sayajirao University of Baroda) | 2018 – 2021
- Higher Secondary School (HSC - 12th) | GSEB | 2018 | 74%
- Secondary School (SSC - 10th) | GSEB | 2016 | 70%

LANGUAGES & INTERESTS
- Languages: English, Hindi, Gujarati
- Interests: Cricket, PC Games
- Personal Details: Date of Birth: 27/10/2000 | Nationality: Indian
`;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(resumePlainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handlePrintPdf = () => {
    window.print();
  };

  if (!isModalOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={handleClose}>
      <div 
        className="resume-modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="resume-modal-header no-print">
          <div className="header-meta">
            <h2 id="resume-modal-title">Tejas Machhi — Curriculum Vitae (CV)</h2>
            <p className="subtitle">Frontend UI & UI/UX Developer</p>
          </div>

          <div className="header-actions">
            <button 
              type="button" 
              className="action-btn action-copy" 
              onClick={handleCopyText}
              title="Copy resume text to clipboard"
            >
              <IconComponent icon={copied ? "mdi:check" : "mdi:content-copy"} />
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button 
              type="button" 
              className="action-btn action-pdf" 
              onClick={handlePrintPdf}
              title="Download / Print as PDF"
            >
              <IconComponent icon="mdi:download" />
              <span>Download PDF</span>
            </button>

            <button 
              type="button" 
              className="close-btn" 
              onClick={handleClose}
              aria-label="Close Resume Modal"
            >
              <IconComponent icon="mdi:close" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="resume-modal-body">
          <div className="resume-sheet" id="printable-resume">
            {/* Sheet Header */}
            <header className="resume-sheet-header">
              <h1 className="candidate-name">TEJAS MACHHI</h1>
              <p className="candidate-headline">Frontend UI & UI/UX Developer</p>

              <div className="candidate-contact">
                <div className="contact-item">
                  <IconComponent icon="mdi:map-marker-outline" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="contact-item">
                  <IconComponent icon="mdi:phone-outline" />
                  <span>+91 6353331221</span>
                </div>
                <div className="contact-item">
                  <IconComponent icon="mdi:email-outline" />
                  <a href="mailto:tejasmachhi2710@gmail.com">tejasmachhi2710@gmail.com</a>
                </div>
                <div className="contact-item">
                  <IconComponent icon="mdi:linkedin" />
                  <a href="https://www.linkedin.com/in/tejas-machhi-470388187/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tejas-machhi</a>
                </div>
                <div className="contact-item">
                  <IconComponent icon="mdi:github" />
                  <a href="https://github.com/tejasmachhi" target="_blank" rel="noopener noreferrer">github.com/tejasmachhi</a>
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="resume-section">
              <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
              <p className="summary-text">
                Creative and detail-oriented Frontend UI & UI/UX Developer with ~1+ year of professional experience building responsive, user-centered web applications, complex enterprise data management platforms, and fluid digital interfaces. Highly versatile across modern frontend ecosystems—expert at turning complex Figma mockups into production-ready React.js and Next.js applications, customizing enterprise UI libraries (PrimeReact, Tailwind CSS, Framer Motion), and architecting modular SCSS design systems. Proven track record at Moltech Solution Pvt Ltd across 7+ core domains including Order Management Systems, HRMS portals, e-commerce templates, and dynamic business websites. Proficient in AI-augmented engineering (ChatGPT, Google Antigravity) for rapid R&D, prompt engineering, and UI component documentation. Passionate about pixel-perfection, data grids, maintainable CSS architecture, and delivering flawless user experiences.
              </p>
            </section>

            {/* Core UI/UX & Frontend Contributions */}
            <section className="resume-section">
              <h3 className="section-title">CORE UI/UX & FRONTEND CONTRIBUTIONS</h3>
              <div className="contributions-grid">
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>UI/UX design implementation and frontend development</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Creative and modern interface design</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Responsive layouts across desktop, tablet, and mobile</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Complex grid and data-management interfaces</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>PrimeReact component customization</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>React-based reusable components and dynamic UI handling</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>SCSS architecture, variables, mixins, utilities, and shared styles</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Theme and color-palette implementation</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Forms, cards, modals, dialogs, dropdowns, filters, steppers, and dashboards</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>UI consistency and reusable design patterns</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>QA-based UI bug fixing and production UI improvements</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Layout, spacing, alignment, typography, grid, modal, and component-level improvements</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Client requirement analysis and design implementation</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>Document and email template UI development</span>
                </div>
                <div className="contribution-pill">
                  <IconComponent icon="mdi:check-circle-outline" />
                  <span>UI validation and testing before final delivery</span>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <h3 className="section-title">TECHNICAL SKILLS</h3>
              <div className="skills-grid">
                <div className="skill-row">
                  <span className="skill-label">Frontend & Modern UI:</span>
                  <span className="skill-items">React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, SCSS / Sass, Tailwind CSS, PrimeReact, Framer Motion, Bootstrap 5, jQuery, Responsive Web Design</span>
                </div>
                <div className="skill-row">
                  <span className="skill-label">UI/UX & Creative Design:</span>
                  <span className="skill-items">UI/UX Design, Figma, Canva, Design Systems, Visual Hierarchy, Spacing & Layout, Micro-Interactions, PSD / Figma to Pixel-Perfect Code</span>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Enterprise UI & Data:</span>
                  <span className="skill-items">Complex Data Grids & Tables, Custom Filters, Modals & Dialogs, Steppers, Multi-step Forms, Color Palette & Theme Systems</span>
                </div>
                <div className="skill-row">
                  <span className="skill-label">AI Tools & Modern R&D:</span>
                  <span className="skill-items">ChatGPT, Google Antigravity, Advanced Prompt Engineering, Technical & Component Documentation</span>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Tools & Version Control:</span>
                  <span className="skill-items">Git, GitHub, VS Code, Browser DevTools, Cross-Browser Testing & Debugging</span>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="resume-section">
              <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>

              {/* Role 1 - Moltech */}
              <div className="resume-card-item">
                <div className="item-head">
                  <div className="role-group">
                    <h4 className="role-title">Frontend Web Developer (UI/UX Focus)</h4>
                    <span className="company-tag">Moltech Solution Pvt Ltd</span>
                  </div>
                  <div className="meta-group">
                    <span className="date-tag">May 2025 – Present</span>
                    <span className="loc-tag">Ahmedabad, Gujarat</span>
                  </div>
                </div>

                <ul className="bullet-list main-role-bullets">
                  <li>Engineered responsive web applications and enterprise admin dashboards using React.js, Next.js, and PrimeReact, with the flexibility to adopt modern tech stacks and UI frameworks as required.</li>
                  <li>Transformed complex Figma mockups and creative concepts into pixel-perfect, accessible, and responsive components across mobile, tablet, and desktop breakpoints.</li>
                  <li>Implemented engaging micro-interactions and smooth UI transitions utilizing modern styling and Framer Motion patterns for enhanced user experience.</li>
                  <li>Customized enterprise UI component libraries (complex data tables, filter toolbars, dialog modals, and multi-step form flows) according to design tokens.</li>
                  <li>Leveraged modern AI tools (Google Antigravity, ChatGPT) and prompt engineering for rapid R&D, exploring creative UI patterns, and speeding up component development.</li>
                  <li>Authored clear technical and UI component documentation to facilitate seamless design handoffs and cross-functional team collaboration.</li>
                  <li>Structured modular, scalable SCSS & Tailwind stylesheets utilizing variables, mixins, and flex/grid layout architectures to eliminate CSS redundancy.</li>
                  <li>Diagnosed and resolved high-priority production UI defects, cross-browser layout inconsistencies, and QA bug tickets to uphold strict design fidelity.</li>
                </ul>

                {/* Key Projects & Enterprise Modules Developed at Moltech */}
                <div className="cv-projects-container">
                  <div className="projects-section-header">
                    <IconComponent icon="mdi:briefcase-check-outline" />
                    <h5>Key Enterprise Projects & Product Modules Delivered at Moltech</h5>
                  </div>

                  {/* Project 1 */}
                  <div className="cv-project-card">
                    <div className="project-card-head">
                      <div className="project-title-wrap">
                        <span className="project-badge">01</span>
                        <h6 className="project-title">Order Management System</h6>
                      </div>
                      <span className="project-type-tag">Enterprise Platform</span>
                    </div>
                    <ul className="bullet-list">
                      <li>Worked on UI development, redesign, enhancements, and maintenance across multiple modules and pages.</li>
                      <li>Designed and managed complex <strong>data grids, tables, filters, action controls, modals, forms, cards, dashboards, and multi-data UI layouts</strong>.</li>
                      <li>Worked with <strong>PrimeReact components</strong> and customized them using SCSS according to project requirements.</li>
                      <li>Implemented and maintained <strong>theme and color-palette systems</strong>, including reusable SCSS variables and organization-level UI customization.</li>
                      <li>Improved SCSS structure using <strong>variables, mixins, shared styles, and reusable utilities</strong> to reduce duplicate styling.</li>
                      <li>Worked on reusable UI patterns and design components to maintain consistency across multiple modules.</li>
                      <li>Redesigned major module interfaces including forms, cards, sidebar navigation, steppers, and detailed workflow screens.</li>
                      <li>Improved grid-related UI including <strong>column widths, data wrapping, height handling, filters, search behavior, alignment, and layout consistency</strong>.</li>
                      <li>Handled continuous UI bug fixing and enhancements based on QA feedback and production requirements.</li>
                      <li>Fixed issues related to <strong>modals, grids, layouts, spacing, alignment, dropdowns, headers, filters, and action buttons</strong>.</li>
                      <li>Performed UI validation and screen-size testing, including grid and layout checks up to laptop resolution.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="cv-project-card">
                    <div className="project-card-head">
                      <div className="project-title-wrap">
                        <span className="project-badge">02</span>
                        <h6 className="project-title">HRMS / Human Resource Management Platform</h6>
                      </div>
                      <span className="project-type-tag">Enterprise HR Portal</span>
                    </div>
                    <ul className="bullet-list">
                      <li>Worked on UI development and enhancement of HR management modules using <strong>React and PrimeReact</strong>.</li>
                      <li>Designed and customized <strong>data grids, forms, dialogs, cards, badges, progress bars, attendance sections, filters, and action controls</strong>.</li>
                      <li>Customized PrimeReact components using SCSS to match specific UI and design requirements.</li>
                      <li>Worked on dynamic, data-driven UI sections and reusable interface patterns.</li>
                      <li>Designed and improved employee-related workflows, dashboards, forms, attendance interfaces, and data-management screens.</li>
                      <li>Improved grid layouts, frozen columns, alignment, spacing, height handling, and overall data presentation.</li>
                      <li>Created clean and creative UI designs while maintaining consistency across the product.</li>
                      <li>Worked on different screen sizes and adjusted layouts and components wherever required.</li>
                      <li>Fixed QA-reported UI issues and performed continuous visual and layout improvements.</li>
                      <li>Built reusable UI structures for repeated elements and common interface patterns.</li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div className="cv-project-card">
                    <div className="project-card-head">
                      <div className="project-title-wrap">
                        <span className="project-badge">03</span>
                        <h6 className="project-title">Matrimony Website</h6>
                      </div>
                      <span className="project-type-tag">Consumer Web Portal</span>
                    </div>
                    <ul className="bullet-list">
                      <li>Designed and developed a modern, clean, and user-friendly Matrimony website UI.</li>
                      <li>Created page layouts and UI sections using <strong>HTML, CSS, and SCSS</strong> with a focus on maintainable styling.</li>
                      <li>Used reusable SCSS patterns and avoided unnecessary duplicate styling.</li>
                      <li>Designed responsive layouts and adjusted UI components for different screen sizes.</li>
                      <li>Worked on visual hierarchy, typography, spacing, cards, forms, buttons, sections, and overall user experience.</li>
                      <li>Converted design requirements into polished and functional frontend interfaces.</li>
                    </ul>
                  </div>

                  {/* Project 4 */}
                  <div className="cv-project-card">
                    <div className="project-card-head">
                      <div className="project-title-wrap">
                        <span className="project-badge">04</span>
                        <h6 className="project-title">E-commerce Templates</h6>
                      </div>
                      <span className="project-type-tag">E-Commerce Suite</span>
                    </div>
                    <ul className="bullet-list">
                      <li>Worked on multiple e-commerce template designs covering major shopping and customer-facing workflows.</li>
                      <li>Designed and developed <strong>product listing pages, product detail pages, checkout pages, cart sections, order summaries, profile pages, category pages, and other major screens</strong>.</li>
                      <li>Managed product listing interfaces with multiple products, grids, filters, cards, actions, and supporting UI elements.</li>
                      <li>Created responsive designs across <strong>desktop, tablet, and mobile</strong> screen sizes.</li>
                      <li>Worked on reusable SCSS structures and shared UI patterns across multiple pages.</li>
                      <li>Improved product grids, cards, filters, spacing, alignment, buttons, checkout interfaces, and shopping-related UI.</li>
                      <li>Focused on creating consistent, visually appealing, and user-friendly e-commerce experiences.</li>
                    </ul>
                  </div>

                  {/* Project 5 */}
                  <div className="cv-project-card">
                    <div className="project-card-head">
                      <div className="project-title-wrap">
                        <span className="project-badge">05</span>
                        <h6 className="project-title">Business & Service Websites</h6>
                      </div>
                      <span className="project-type-tag">Corporate & Services</span>
                    </div>
                    <ul className="bullet-list">
                      <li>Worked on multiple business and service-based websites with a strong focus on UI/UX implementation and frontend development.</li>
                      <li>Designed and developed <strong>service pages, technology pages, solution sections, headers, footers, search interfaces, login screens, modals, checkout flows, profile pages, and order-related pages</strong>.</li>
                      <li>Implemented reusable UI sections and shared SCSS structures across different pages.</li>
                      <li>Worked with <strong>SCSS variables, mixins, reusable components, grids, cards, steppers, dropdowns, and modals</strong>.</li>
                      <li>Converted design references and requirements into functional and visually consistent frontend interfaces.</li>
                      <li>Worked on responsive layouts and adjusted UI behavior across different screen sizes.</li>
                      <li>Performed UI testing, visual validation, bug fixing, and layout improvements across multiple pages.</li>
                    </ul>
                  </div>

                  {/* Project 6 */}
                  <div className="cv-project-card">
                    <div className="project-card-head">
                      <div className="project-title-wrap">
                        <span className="project-badge">06</span>
                        <h6 className="project-title">Document & Email Template UI</h6>
                      </div>
                      <span className="project-type-tag">Templates & Communications</span>
                    </div>
                    <ul className="bullet-list">
                      <li>Designed and developed UI layouts for <strong>document templates and email templates</strong> based on required content and design specifications.</li>
                      <li>Created structured layouts with proper typography, spacing, sections, tables, headers, footers, and content hierarchy.</li>
                      <li>Ensured templates maintained a consistent visual appearance and were properly aligned with the required design.</li>
                      <li>Converted provided requirements and references into clean, usable template interfaces.</li>
                    </ul>
                  </div>

                  {/* Project 7 */}
                  <div className="cv-project-card">
                    <div className="project-card-head">
                      <div className="project-title-wrap">
                        <span className="project-badge">07</span>
                        <h6 className="project-title">Client Requirements & UI Delivery</h6>
                      </div>
                      <span className="project-type-tag">Client Delivery & QA</span>
                    </div>
                    <ul className="bullet-list">
                      <li>Worked closely with <strong>client requirements, design references, and project specifications</strong> to understand the expected UI and deliver designs accordingly.</li>
                      <li>Translated requirements into practical and user-friendly UI layouts while maintaining design consistency.</li>
                      <li>Made required UI adjustments based on feedback and delivered the final design as per the expected requirements.</li>
                      <li>Reviewed designs before delivery to verify <strong>layout, spacing, alignment, responsiveness, component behavior, and overall visual consistency</strong>.</li>
                      <li>Handled design changes and iterations based on requirements while maintaining the existing UI structure and standards.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Role 2 - Dit Interactive */}
              <div className="resume-card-item">
                <div className="item-head">
                  <div className="role-group">
                    <h4 className="role-title">Front End Developer Intern</h4>
                    <span className="company-tag">Dit Interactive Pvt. Ltd.</span>
                  </div>
                  <div className="meta-group">
                    <span className="date-tag">June 2024 – October 2024</span>
                    <span className="loc-tag">Ahmedabad, Gujarat</span>
                  </div>
                </div>
                <ul className="bullet-list">
                  <li>Coded using HTML, CSS, JavaScript, and React to develop responsive features for mobile and desktop platforms.</li>
                  <li>Designed and updated UI layouts to meet performance, cross-browser compatibility, and usability requirements.</li>
                </ul>
              </div>

              {/* Role 3 - Hupp Technologies */}
              <div className="resume-card-item">
                <div className="item-head">
                  <div className="role-group">
                    <h4 className="role-title">Frontend Developer Intern</h4>
                    <span className="company-tag">Hupp Technologies</span>
                  </div>
                  <div className="meta-group">
                    <span className="date-tag">July 2022 – September 2022</span>
                    <span className="loc-tag">Ahmedabad, Gujarat</span>
                  </div>
                </div>
                <ul className="bullet-list">
                  <li>Worked with frontend technologies including HTML5, CSS3, Bootstrap 5, Sass, Git, and jQuery.</li>
                  <li>Contributed to PSD and Figma to HTML conversion projects and built responsive layouts.</li>
                </ul>
              </div>

              {/* Role 4 - Web Brains Technology */}
              <div className="resume-card-item">
                <div className="item-head">
                  <div className="role-group">
                    <h4 className="role-title">Frontend Developer Intern</h4>
                    <span className="company-tag">Web Brains Technology</span>
                  </div>
                  <div className="meta-group">
                    <span className="date-tag">August 2021 – December 2021</span>
                    <span className="loc-tag">Vadodara, Gujarat</span>
                  </div>
                </div>
                <ul className="bullet-list">
                  <li>Built responsive web layouts and interface sections using HTML5, CSS3, and Bootstrap.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h3 className="section-title">EDUCATION</h3>

              <div className="resume-card-item">
                <div className="item-head">
                  <div className="role-group">
                    <h4 className="role-title">Bachelor of Commerce (B.Com)</h4>
                    <span className="company-tag">MS University (The Maharaja Sayajirao University of Baroda)</span>
                  </div>
                  <span className="date-tag">2018 – 2021</span>
                </div>
              </div>

              <div className="resume-card-item">
                <div className="item-head">
                  <div className="role-group">
                    <h4 className="role-title">Higher Secondary School (HSC - 12th)</h4>
                    <span className="company-tag">GSEB — 74%</span>
                  </div>
                  <span className="date-tag">2018</span>
                </div>
              </div>

              <div className="resume-card-item">
                <div className="item-head">
                  <div className="role-group">
                    <h4 className="role-title">Secondary School (SSC - 10th)</h4>
                    <span className="company-tag">GSEB — 70%</span>
                  </div>
                  <span className="date-tag">2016</span>
                </div>
              </div>
            </section>

            {/* Languages & Interests */}
            <section className="resume-section">
              <h3 className="section-title">LANGUAGES & INTERESTS</h3>
              <div className="skills-grid">
                <div className="skill-row">
                  <span className="skill-label">Languages Known:</span>
                  <span className="skill-items">English, Hindi, Gujarati</span>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Interests & Hobbies:</span>
                  <span className="skill-items">Cricket, PC Games</span>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Personal Details:</span>
                  <span className="skill-items">Date of Birth: 27/10/2000 | Nationality: Indian</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Modal Footer Controls (Hidden when printing) */}
        <div className="resume-modal-footer no-print">
          <div className="footer-left">
            <span className="footer-tip">
              <IconComponent icon="mdi:lightbulb-on-outline" /> Tip: In print settings, uncheck <strong>Headers and footers</strong> for a 100% clean PDF without URL or timestamp.
            </span>
          </div>
          <div className="footer-right">
            <button type="button" className="btn-secondary-modal" onClick={handleClose}>
              Close
            </button>
            <button type="button" className="btn-primary-modal" onClick={handlePrintPdf}>
              <IconComponent icon="mdi:printer" /> Print / Save PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
