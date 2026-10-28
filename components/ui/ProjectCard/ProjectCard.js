import Link from 'next/link';
import Image from 'next/image';
import IconComponent from '@/components/IconComponent';
import './ProjectCard.scss';

export default function ProjectCard({ project }) {
  const targetLink = project.liveLink || `/projects/${project.slug}`;
  const isExternal = Boolean(project.liveLink);

  return (
    <div className="project-card">
      <div className="project-image">
        <a 
          href={targetLink}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="project-image-link"
          aria-label={`Open ${project.title}`}
        >
          <Image 
            src={project.image} 
            alt={project.title}
            width={560}
            height={350}
            className="project-img"
          />
        </a>
        <div className="project-overlay">
          <div className="project-links">
            <Link 
              href={`/projects/${project.slug}`} 
              className="project-link"
              title="View Details"
              aria-label="View Details"
            >
              <IconComponent icon="mdi:eye" />
            </Link>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                title="View Live Demo (New Tab)"
                aria-label="View Live Demo"
              >
                <IconComponent icon="mdi:open-in-new" />
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                title="View on GitHub"
                aria-label="View on GitHub"
              >
                <IconComponent icon="mdi:github" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <a 
          href={targetLink}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="project-title-link"
        >
          <h3>{project.title}</h3>
        </a>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn live-btn"
              title="View Live Demo in New Tab"
            >
              <span>Live Demo</span>
              <IconComponent icon="mdi:open-in-new" />
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn github-btn"
              title="View Source on GitHub"
            >
              <IconComponent icon="mdi:github" />
              <span>GitHub</span>
            </a>
          )}
          <Link 
            href={`/projects/${project.slug}`} 
            className="action-btn details-btn"
            title="View Project Details"
          >
            <span>Details</span>
            <IconComponent icon="mdi:arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
