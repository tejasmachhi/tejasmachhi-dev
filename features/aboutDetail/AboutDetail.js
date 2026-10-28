'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import IconComponent from '@/components/IconComponent';
import './AboutDetail.scss';

export default function AboutDetail() {
  const [activeTab, setActiveTab] = useState('all');

  const skillsData = [
    {
      category: 'core',
      title: 'Frontend Frameworks & Core',
      icon: 'mdi:react',
      skills: [
        { name: 'React.js', icon: 'logos:react' },
        { name: 'Next.js (App Router)', icon: 'logos:nextjs-icon' },
        { name: 'JavaScript (ES6+)', icon: 'logos:javascript' },
        { name: 'HTML5 & Semantic Web', icon: 'logos:html-5' },
        { name: 'REST APIs & Fetch', icon: 'mdi:api' }
      ]
    },
    {
      category: 'styling',
      title: 'Styling & Design Systems',
      icon: 'mdi:palette-outline',
      skills: [
        { name: 'Modular SCSS / Sass', icon: 'logos:sass' },
        { name: 'PrimeReact Components', icon: 'logos:primereact' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'CSS3 & Modern Layouts', icon: 'logos:css-3' },
        { name: 'Responsive Design (RWD)', icon: 'mdi:responsive' }
      ]
    },
    {
      category: 'uiux',
      title: 'UI/UX & Prototyping',
      icon: 'mdi:drawing-box',
      skills: [
        { name: 'Figma to Pixel-Perfect Code', icon: 'logos:figma' },
        { name: 'Framer Motion', icon: 'logos:framer' },
        { name: 'Design Tokens & Palettes', icon: 'mdi:palette-swatch' },
        { name: 'Enterprise Data Grids', icon: 'mdi:table-cog' },
        { name: 'Micro-Interactions & UX', icon: 'mdi:gesture-tap' }
      ]
    },
    {
      category: 'tools',
      title: 'Workflow, Tooling & AI',
      icon: 'mdi:lightning-bolt',
      skills: [
        { name: 'Google Antigravity & AI Tools', icon: 'mdi:robot-excited' },
        { name: 'Git & GitHub Version Control', icon: 'logos:git-icon' },
        { name: 'Prompt Engineering & R&D', icon: 'mdi:brain' },
        { name: 'Technical UI Documentation', icon: 'mdi:file-document-edit' }
      ]
    }
  ];

  const mindsets = [
    {
      icon: 'mdi:vector-square',
      title: 'Pixel-Perfect Design Fidelity',
      subtitle: 'Figma to Clean Code',
      description: 'I obsess over translating Figma design details into production-ready UI—matching every margin, typography hierarchy, responsive breakpoint, and interaction curve exactly as envisioned.'
    },
    {
      icon: 'mdi:robot-outline',
      title: 'AI-Augmented Development',
      subtitle: 'Fast R&D & High Velocity',
      description: 'I leverage Google Antigravity, modern generative AI tools, and systematic prompt engineering to eliminate development bottlenecks, accelerate scaffolding, and deliver solutions 3x faster.'
    },
    {
      icon: 'mdi:cube-outline',
      title: 'Modular Design Systems',
      subtitle: 'Scalable & DRY Architecture',
      description: 'Writing maintainable code with reusable SCSS variables, mixins, custom utility classes, and scalable component libraries. Enterprise codebases stay structured, readable, and clean.'
    },
    {
      icon: 'mdi:heart-pulse',
      title: 'User-Centric Empathy',
      subtitle: 'Smooth UX & Performance',
      description: 'A great UI is more than aesthetics; it must be fast, intuitive, and accessible. I engineer lightweight micro-interactions, responsive touch targets, and lag-free layouts that feel fluid.'
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Understand & Scope',
      desc: 'Analyze business goals, evaluate Figma wireframes, map component hierarchies, and plan responsive layout breakpoints.'
    },
    {
      step: '02',
      title: 'Design System & Tokens',
      desc: 'Set up reusable SCSS tokens, color schemes, typography, spacing variables, and shared layout containers for strict consistency.'
    },
    {
      step: '03',
      title: 'Component Engineering',
      desc: 'Build modular React.js & Next.js components, implement interactive states, modals, complex tables, and micro-interactions.'
    },
    {
      step: '04',
      title: 'Optimize & Polish',
      desc: 'Audit responsiveness on mobile, tablet, and 2K screens, optimize assets, verify dark/light themes, and deliver clean code.'
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(item => item.category === activeTab);

  return (
    <div className="about-detail-page">
      {/* 1. Header Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Frontend UI & UI/UX Developer</span>
          </div>
          <h1 className="hero-title">About Me</h1>
          <p className="hero-lead">
            I am Tejas Machhi, a passionate frontend developer and UI/UX specialist with professional experience in 
            building responsive, high-performance web applications and enterprise dashboards using React.js, Next.js, and PrimeReact.
          </p>

          <div className="hero-stats-strip">
            <div className="stat-pill">
              <span className="stat-num">1+</span>
              <span className="stat-lbl">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-pill">
              <span className="stat-num">10+</span>
              <span className="stat-lbl">Web Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-pill">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Figma Precision</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-pill">
              <span className="stat-num">Rapid</span>
              <span className="stat-lbl">AI-Driven R&D</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Story & Profile Section */}
      <section className="about-profile-section">
        <div className="container">
          <div className="profile-grid">
            {/* Left: Interactive Bio Card */}
            <div className="bio-card">
              <div className="bio-avatar-wrapper">
                <Image
                  src="/assets/img/IMG_1541.jpeg"
                  alt="Tejas Machhi"
                  width={240}
                  height={240}
                  priority
                  className="bio-avatar"
                />
              </div>
              <div className="bio-live-status">
                <span className="live-dot"></span>
                <span>Available for Opportunities</span>
              </div>
              <h2 className="bio-name">Tejas Machhi</h2>
              <p className="bio-role">Frontend UI & UI/UX Developer</p>
              <div className="bio-location">
                <Icon icon="mdi:map-marker" /> Ahmedabad, Gujarat, India
              </div>

              <div className="bio-quick-tags">
                <span className="q-tag">React.js</span>
                <span className="q-tag">Next.js</span>
                <span className="q-tag">PrimeReact</span>
                <span className="q-tag">SCSS</span>
                <span className="q-tag">Figma</span>
              </div>

              <div className="bio-actions">
                <button 
                  type="button" 
                  className="btn-bio-resume"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
                >
                  <Icon icon="mdi:file-document-outline" /> View Full Resume
                </button>
                <Link href="/contact" className="btn-bio-contact">
                  <Icon icon="mdi:email-outline" /> Get In Touch
                </Link>
              </div>
            </div>

            {/* Right: Narrative Columns */}
            <div className="narrative-cards">
              <div className="story-card">
                <div className="story-header">
                  <div className="story-icon journey-icon">
                    <Icon icon="mdi:compass-outline" />
                  </div>
                  <div>
                    <h3>My Journey & Professional Background</h3>
                    <span className="story-sub">From Creative UI Design to Enterprise Code</span>
                  </div>
                </div>
                <p>
                  My journey began with a strong creative intuition for clean visual design and a curiosity for how 
                  digital experiences function under the hood. Over the past 1+ year as a professional developer at 
                  <strong> Moltech Solution Pvt Ltd</strong>, I have focused on engineering scalable web applications, 
                  enterprise admin dashboards, order management workflows, and consumer portals.
                </p>
                <p>
                  I specialize in turning high-fidelity Figma files into production-ready React.js and Next.js interfaces. 
                  My focus is writing clean, modular SCSS architectures that prevent style duplication, respect responsive 
                  screen ratios, and provide smooth transitions across every breakpoint.
                </p>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <div className="story-icon expertise-icon">
                    <Icon icon="mdi:lightning-bolt" />
                  </div>
                  <div>
                    <h3>My Technical Expertise & Domain Focus</h3>
                    <span className="story-sub">Enterprise Grids, Complex Tables & Design Systems</span>
                  </div>
                </div>
                <p>
                  I have hands-on expertise building and customizing complex enterprise UI components: 
                  <strong> custom data grids</strong>, frozen table columns, interactive filter bars, dialog modals, 
                  steppers, multi-step checkout flows, and dynamic forms.
                </p>
                <p>
                  I bridge the gap between design and development by constructing robust design systems with reusable 
                  tokens and themes. Through rapid AI-assisted development (Google Antigravity, prompt engineering), 
                  I quickly test prototypes, resolve production layout bugs, and deliver maintainable frontend code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Developer Mindset & Philosophy */}
      <section className="about-mindset-section">
        <div className="container">
          <div className="section-head-center">
            <span className="section-kicker">My Core Philosophy</span>
            <h2 className="section-heading">Developer Mindset & Principles</h2>
            <p className="section-subtext">How I approach UI challenges, collaboration, and engineering delivery</p>
          </div>

          <div className="mindset-grid">
            {mindsets.map((item, idx) => (
              <div key={idx} className="mindset-card">
                <div className="mindset-icon-box">
                  <Icon icon={item.icon} />
                </div>
                <div className="mindset-content">
                  <span className="mindset-sub">{item.subtitle}</span>
                  <h3 className="mindset-title">{item.title}</h3>
                  <p className="mindset-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Skills & Technologies Matrix */}
      <section className="about-skills-section">
        <div className="container">
          <div className="section-head-center">
            <span className="section-kicker">Technical Repertoire</span>
            <h2 className="section-heading">Skills & Technology Stack</h2>
            <p className="section-subtext">A complete breakdown of my frontend development toolkit and proficiencies</p>
          </div>

          {/* Category Filter Pills */}
          <div className="skills-filter-bar">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Skills
            </button>
            <button 
              className={`filter-btn ${activeTab === 'core' ? 'active' : ''}`}
              onClick={() => setActiveTab('core')}
            >
              Frameworks & Core
            </button>
            <button 
              className={`filter-btn ${activeTab === 'styling' ? 'active' : ''}`}
              onClick={() => setActiveTab('styling')}
            >
              Styling & SCSS
            </button>
            <button 
              className={`filter-btn ${activeTab === 'uiux' ? 'active' : ''}`}
              onClick={() => setActiveTab('uiux')}
            >
              UI/UX & Design
            </button>
            <button 
              className={`filter-btn ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              Tools & AI
            </button>
          </div>

          {/* Skills Grid */}
          <div className="skills-category-grid">
            {filteredSkills.map((cat, idx) => (
              <div key={idx} className="skill-cat-card">
                <div className="skill-cat-header">
                  <Icon icon={cat.icon} className="cat-icon" />
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-chips-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-chip">
                      <Icon icon={skill.icon} className="tech-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Working Process */}
      <section className="about-process-section">
        <div className="container">
          <div className="section-head-center">
            <span className="section-kicker">Execution Framework</span>
            <h2 className="section-heading">How I Work & Deliver</h2>
            <p className="section-subtext">A structured approach to transforming requirements into polished digital interfaces</p>
          </div>

          <div className="process-grid">
            {workProcess.map((proc, idx) => (
              <div key={idx} className="process-card">
                <span className="step-number">{proc.step}</span>
                <h3 className="step-title">{proc.title}</h3>
                <p className="step-desc">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Banner */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <h2>Let's Build Something Exceptional Together</h2>
              <p>
                Whether you need a dedicated frontend UI engineer, an enterprise dashboard revamp, 
                or pixel-perfect Figma implementation, I am ready to bring your vision to life.
              </p>
              <div className="cta-actions">
                <Link href="/projects" className="cta-btn primary">
                  <Icon icon="mdi:briefcase-outline" /> Explore My Projects
                </Link>
                <Link href="/contact" className="cta-btn secondary">
                  <Icon icon="mdi:send-outline" /> Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
