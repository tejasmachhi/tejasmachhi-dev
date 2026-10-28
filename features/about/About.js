import Image from 'next/image';
import IconComponent from '@/components/IconComponent';
import './About.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="about-badge">Frontend UI & UI/UX Developer</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about who I am and what I do</p>
        </div>

        {/* 4 Cards Grid - Same Height for all cards, 1st card for img */}
        <div className="about-cards-grid">
          {/* Card 1: Image Card with exact same height */}
          <div className="about-card about-img-card">
            <div className="img-wrapper">
              <Image 
                src="/assets/img/IMG_1541.jpeg" 
                alt="Tejas Machhi" 
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                priority
                className="about-photo-img"
              />
              <div className="img-card-overlay">
                <span className="status-pill">
                  <span className="status-dot"></span>
                  Available for Work
                </span>
                <h3 className="img-card-name">Tejas Machhi</h3>
                <p className="img-card-title">Frontend UI & UI/UX Developer</p>
              </div>
            </div>
          </div>

          {/* Card 2: My Journey */}
          <div className="about-card">
            <div className="card-heading">
              <IconComponent icon="mdi:compass-outline" />
              <h3>My Journey</h3>
            </div>
            <p>
              I'm Tejas Machhi, a frontend UI developer and UI/UX developer with 1+ year of professional experience building responsive, scalable, and user-friendly web applications. I specialize in turning Figma designs into production-ready React.js and Next.js interfaces with clean, modular SCSS and modern UI libraries like PrimeReact, Tailwind CSS, and Framer Motion—adapting dynamically to whatever modern tech stack best serves the project.
            </p>
          </div>
          
          {/* Card 3: My Expertise */}
          <div className="about-card">
            <div className="card-heading">
              <IconComponent icon="mdi:lightning-bolt-outline" />
              <h3>My Expertise</h3>
            </div>
            <p>
              With a strong creative mindset, I can implement any UI design you envision—engineering responsive layouts, enterprise dashboard components, fluid animations, and robust design systems. I actively leverage modern AI tools (ChatGPT, Google Antigravity), advanced prompt engineering, and rapid R&D to accelerate development, produce clear technical documentation, and eliminate production UI bottlenecks.
            </p>
          </div>
          
          {/* Card 4: My Goal */}
          <div className="about-card">
            <div className="card-heading">
              <IconComponent icon="mdi:target" />
              <h3>My Goal</h3>
            </div>
            <p>
              My goal is to thoroughly understand and satisfy client UI requirements, delivering intuitive, high-quality UI/UX with smooth micro-interactions that bridge design and engineering to create memorable, high-converting digital products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
