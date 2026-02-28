import Link from 'next/link';
import Image from 'next/image';
import IconComponent from '@/components/IconComponent';
import './ProjectCard.scss';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image 
          src={project.image} 
          alt={project.title}
          width={400}
          height={250}
          className="project-img"
        />
        <div className="project-overlay">
          <div className="project-links">
            <Link 
              href={`/projects/${project.slug}`} 
              className="project-link"
            >
              <IconComponent icon="mdi:eye" />
            </Link>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <IconComponent icon="mdi:external-link" />
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <IconComponent icon="mdi:github" />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
