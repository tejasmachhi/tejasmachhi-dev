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
        "Developing responsive and scalable web applications using Next.js, React, SCSS, and JavaScript",
        "Converting Figma designs into pixel-perfect, production-ready UI",
        "Optimizing website performance and improving loading speed",
        "Building reusable and maintainable component-based architecture",
        "Collaborating with backend and UI teams for seamless integration",
        "Ensuring cross-browser compatibility and responsive design standards"
      ],
      technologies: ["Next.js", "React", "SCSS", "JavaScript", "Figma"],
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
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
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
      technologies: ["HTML", "CSS", "Bootstrap"],
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
      technologies: ["HTML", "CSS", "Bootstrap", "WordPress"],
      icon: "mdi:office-building"
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Professional Journey</div>
          <h2 className="section-title">
            <span className="title-gradient">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional growth through various roles and companies, building expertise in frontend development
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card"
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
                      {item}
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
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <IconComponent icon="mdi:lightbulb" />
            </div>
            <h3>Skills & Growth</h3>
            <p>
              Everything I learned at Moltech Solution has been instrumental in my professional growth. 
              From modern development practices to collaborative teamwork, each experience has shaped me 
              into a more capable frontend developer.
            </p>
            <div className="key-skills">
              <div className="skill-item">
                <IconComponent icon="mdi:code" />
                <span>Clean Code</span>
              </div>
              <div className="skill-item">
                <IconComponent icon="mdi:palette" />
                <span>UI/UX Design</span>
              </div>
              <div className="skill-item">
                <IconComponent icon="mdi:rocket" />
                <span>Performance</span>
              </div>
              <div className="skill-item">
                <IconComponent icon="mdi:account-group" />
                <span>Teamwork</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
