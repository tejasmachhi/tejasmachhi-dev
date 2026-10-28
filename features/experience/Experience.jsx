  "use client";
  import { useState } from "react";
  import IconComponent from "@/components/IconComponent";
  import { useRouter } from "next/navigation";
  import ExperienceProjectsModal from "./ExperienceProjectsModal";
  import "./Experience.scss";

  export default function Experience() {
    const router = useRouter();
    const [selectedExperienceModal, setSelectedExperienceModal] = useState(null);

    const experiences = [
      {
        company: "Moltech Solution Pvt Ltd",
        location: "Ahmedabad, Gujarat",
        period: "May 2025 – Present",
        position: "Frontend Web Developer (UI/UX Focus)",
        type: "full-time",
        description: [
          "Engineered responsive web interfaces and enterprise admin dashboards using <span class='tech-highlight'>React.js</span>, <span class='tech-highlight'>Next.js</span>, and <span class='tech-highlight'>PrimeReact</span>",
          "Transformed high-fidelity <span class='tech-highlight'>Figma</span> designs into pixel-perfect, accessible, and responsive components across all breakpoints",
          "Implemented fluid animations and micro-interactions with <span class='tech-highlight'>Framer Motion</span> & modern CSS to deliver engaging UI/UX",
          "Customized complex enterprise UI component systems including data tables, filter toolbars, dialog modals, and multi-step forms",
          "Structured modular, scalable <span class='tech-highlight'>SCSS</span> architectures utilizing variables, mixins, and flex/grid patterns to eliminate styling redundancy"
        ].map(item => ({ text: item, isHtml: true })),
        projects: [
          {
            title: "Order Management System",
            category: "Enterprise Platform",
            highlights: [
              "Designed and managed complex data grids, tables, filters, action controls, modals, forms, cards, dashboards, and multi-data UI layouts",
              "Customized PrimeReact components with SCSS according to enterprise requirements",
              "Implemented reusable theme and color-palette systems, variables, mixins, and shared utilities",
              "Optimized data grid column widths, text wrapping, height handling, search behavior, and alignment",
              "Executed continuous QA bug fixing, layout refinements, and screen-size testing up to laptop resolution"
            ]
          },
          {
            title: "HRMS / Human Resource Management Platform",
            category: "Enterprise HR Portal",
            highlights: [
              "Developed HR management modules using React and PrimeReact",
              "Customized data grids, frozen columns, dialogs, cards, badges, progress bars, attendance interfaces, and filters",
              "Built dynamic, data-driven UI sections, employee workflows, dashboards, and reusable patterns"
            ]
          },
          {
            title: "Matrimony Website",
            category: "Consumer Web Portal",
            highlights: [
              "Designed and developed a modern, user-friendly Matrimony UI using HTML, CSS, and SCSS",
              "Implemented reusable SCSS patterns avoiding duplicate styling across responsive layouts",
              "Enhanced typography, cards, search filters, forms, buttons, and user experience"
            ]
          },
          {
            title: "E-commerce Templates",
            category: "E-Commerce Suite",
            highlights: [
              "Developed product listings, detail pages, checkout flows, cart sections, order summaries, and profile screens",
              "Built responsive product grids, filters, cards, and shopping workflows across mobile, tablet, and desktop"
            ]
          },
          {
            title: "Business & Service Websites",
            category: "Corporate & Services",
            highlights: [
              "Created responsive service pages, technology sections, headers, footers, search interfaces, and modals",
              "Applied SCSS variables, mixins, steppers, dropdowns, and shared UI architecture"
            ]
          },
          {
            title: "Document & Email Template UI",
            category: "Templates & Communications",
            highlights: [
              "Designed structured UI layouts for document templates and email templates",
              "Maintained typographic hierarchy, tables, spacing, and strict visual fidelity"
            ]
          },
          {
            title: "Client Requirements & UI Delivery",
            category: "Client Delivery & QA",
            highlights: [
              "Translated client design specifications and Figma mockups into production-ready UI layouts",
              "Conducted end-to-end UI validation, spacing, responsiveness, and component consistency before delivery"
            ]
          }
        ],
        technologies: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", icon: "logos:nextjs-icon", isIconify: true },
          { name: "PrimeReact", icon: "logos:primereact", isIconify: true },
          { name: "Framer Motion", icon: "logos:framer", isIconify: true },
          { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", isIconify: true },
          { name: "AI Tools (R&D)", icon: "mdi:robot-excited-outline", isIconify: true },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
        ],
        icon: "mdi:code-tags"
      },
      {
        company: "DIT Academy",
        location: "Ahmedabad, Gujarat",
        period: "July 2024 – October 2024",
        position: "Internship Trainee",
        type: "internship",
        description: [
          "Built responsive landing pages",
          "Strengthened HTML, CSS & JavaScript fundamentals",
          "Practiced UI implementation from Figma designs"
        ],
        technologies: [
          { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "Figma", icon: "logos:figma-icon", isIconify: true }
        ],
        icon: "mdi:school"
      },
      {
        company: "Hupp Technologies Pvt. Ltd.",
        location: "Ahmedabad, Gujarat",
        period: "July 2022 – August 2022",
        position: "Jr Frontend Developer",
        type: "full-time",
        description: [
          "Developed frontend sections using HTML, CSS & Bootstrap",
          "Assisted senior developers in UI development"
        ],
        technologies: [
          { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
        ],
        icon: "mdi:office-building"
      },
      {
        company: "Webbrains Technologies Private Ltd.",
        location: "Vadodara, Gujarat",
        period: "August 2021 – December 2021",
        position: "Frontend Developer Intern",
        type: "internship",
        description: [
          "Worked on HTML, CSS & Bootstrap projects",
          "Built responsive web layouts",
          "Gained exposure to WordPress basics"
        ],
        technologies: [
          { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
         
        ],
        icon: "mdi:office-building"
      }
    ];

    return (
      <section className="experience">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Professional Journey</div>
            <h2 className="section-title">
              <span className="title-gradient">Experience & Expertise</span>
            </h2>
            <p className="section-subtitle">
              My journey as a frontend developer has been focused on creating 
              pixel-perfect, scalable web applications. I specialize in transforming Figma designs into production-ready 
              React components and building modern user interfaces that deliver exceptional user experiences.
            </p>
          </div>

          {/* Resume Action Banner */}
          <div className="resume-cta-banner">
            <div className="resume-cta-info">
              <h3 className="resume-cta-title">Looking for my Official Resume?</h3>
              <p className="resume-cta-desc">
                Review my structured work history, categorized tech stack, and key project contributions in a modern interactive view, or export directly as a print-ready PDF.
              </p>
            </div>
            <div className="resume-cta-actions">
              <button 
                type="button" 
                className="resume-btn-view"
                onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
              >
                <IconComponent icon="mdi:eye-outline" />
                <span>View Resume</span>
              </button>
              <button 
                type="button" 
                className="resume-btn-download"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-resume-modal'));
                  setTimeout(() => window.print(), 350);
                }}
              >
                <IconComponent icon="mdi:download" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          <div className="experience-timeline">
            <div className="timeline-track">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`timeline-item ${index === 0 ? 'current' : ''}`}
                >
                  {/* Timeline Spine Node */}
                  <div className="timeline-node">
                    <div className="node-icon">
                      <IconComponent icon={exp.icon} />
                    </div>
                    {index < experiences.length - 1 && <div className="node-line" />}
                  </div>

                  {/* Timeline Card */}
                  <div className="timeline-card">
                    <div className="card-top-bar">
                      <div className="company-info-group">
                        <h3 className="company-name">{exp.company}</h3>
                        <span className={`position-badge ${exp.type}`}>
                          {exp.position}
                        </span>
                      </div>
                      <div className="period-badge">
                        <IconComponent icon="mdi:calendar-range" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="location-row">
                      <IconComponent icon="mdi:map-marker-outline" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="responsibilities-list">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          <IconComponent icon="mdi:check-circle" />
                          {typeof item === 'object' ? (
                            <span dangerouslySetInnerHTML={{ __html: item.text }} />
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {exp.projects && (
                      <div className="timeline-project-cta">
                        <button 
                          type="button" 
                          className="btn-open-projects-modal"
                          onClick={() => setSelectedExperienceModal(exp)}
                        >
                          <div className="cta-left">
                            <IconComponent icon="mdi:folder-star-multiple" />
                            <div className="cta-titles">
                              <span className="main-title">Key Projects & Modules ({exp.projects.length})</span>
                              <span className="sub-title">Detailed breakdown of 7 enterprise modules at Moltech</span>
                            </div>
                          </div>
                          <div className="cta-right">
                            <span className="action-pill">View All Modules</span>
                            <IconComponent icon="mdi:arrow-top-right" />
                          </div>
                        </button>
                      </div>
                    )}

                    <div className="card-tech-footer">
                      <span className="tech-heading">Technologies:</span>
                      <div className="tech-tags-list">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="timeline-tech-tag">
                            {tech.isIconify ? (
                              <IconComponent 
                                icon={tech.icon} 
                                className="tech-icon"
                                style={{ fontSize: '12px' }} 
                              />
                            ) : (
                              <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="tech-icon"
                                style={{ width: '12px', height: '12px' }}
                              />
                            )}
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Projects & Modules Modal */}
        <ExperienceProjectsModal 
          experience={selectedExperienceModal}
          isOpen={Boolean(selectedExperienceModal)}
          onClose={() => setSelectedExperienceModal(null)}
        />
      </section>
    );
  }
