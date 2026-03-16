  "use client";
  import IconComponent from "@/components/IconComponent";
  import "./Experience.scss";

  export default function Experience() {
    const experiences = [
      {
        company: "Moltech Solution Pvt Ltd",
        location: "Ahmedabad, Gujarat",
        period: "May 2025 – Present",
        position: "Frontend Web Developer",
        type: "full-time",
        description: [
          "Designed and developed modern UI components using <span class='tech-highlight'>React.js</span> and <span class='tech-highlight'>Next.js</span> with pixel-perfect <span class='tech-highlight'>Figma</span> implementation",
          "Implemented <span class='tech-highlight'>SEO</span> optimization strategies including meta tags, structured data, and performance improvements",
          "Built responsive, reusable component libraries with proper prop interfaces and documentation",
          "Created custom hooks and utility functions for scalable <span class='tech-highlight'>React</span> architecture",
          "Optimized UI performance through code splitting, lazy loading, and component memoization",
          "Collaborated with design teams to translate <span class='tech-highlight'>Figma</span> designs into production-ready, accessible interfaces"
        ].map(item => ({ text: item, isHtml: true })),
        technologies: [
          { name: "Next.js", icon: "logos:nextjs-icon", isIconify: true },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", isIconify: true },
          { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "Strapi", icon: "logos:strapi-icon", isIconify: true }
        ],
        icon: "mdi:office-building"
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

     

          <div className="experience-timeline">
            <div className="experience-grid">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`experience-card ${index === 0 ? 'current' : ''}`}
                >
                  <div className="card-header">
                    <div className="company-icon">
                      <IconComponent icon={exp.icon} />
                    </div>
                    <div className="company-info">
                      <h3>{exp.company}</h3>
                      <div className="position-badge">
                        <span className={`badge ${exp.type}`}>
                          {exp.position}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-meta">
                    <div className="meta-item">
                      <IconComponent icon="mdi:map-marker" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="meta-item">
                      <IconComponent icon="mdi:calendar" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="card-content">
                    <ul className="responsibilities">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          <IconComponent icon="mdi:check-circle" />
                          {typeof item === 'object' ? (
                            <span dangerouslySetInnerHTML={{ __html: item.text }} />
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer">
                    <div className="tech-stack">
                      <span className="tech-label">Technologies:</span>
                      <div className="tech-list">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech.isIconify ? (
                              <IconComponent 
                                icon={tech.icon} 
                                className="tech-icon"
                                style={{ 
                                  fontSize: '11px',
                                  marginRight: '4px'
                                }} 
                              />
                            ) : (
                              <img 
                                src={tech.icon} 
                                alt={tech.name}
                                className="tech-icon"
                                style={{ 
                                  width: '11px',
                                  height: '11px',
                                  marginRight: '4px'
                                }}
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
      </section>
    );
  }
