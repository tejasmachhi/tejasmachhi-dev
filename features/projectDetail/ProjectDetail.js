'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import IconComponent from '@/components/IconComponent';
import { getProjectBySlug } from '@/data/projects';
import Button from '@/components/ui/Button/Button';
import './ProjectDetail.scss';

export default function ProjectDetail({ slug }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    // Use slug from props or params
    const projectSlug = slug || params.slug;
    const foundProject = getProjectBySlug(projectSlug);
    setProject(foundProject);
    setLoading(false);
  }, [slug, params.slug]);

  if (loading) {
    return (
      <div className="project-detail-loading">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">Loading project...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail-error">
        <div className="error-content">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button variant="primary" icon="mdi:arrow-left">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        {/* Back Button */}
        <div className="back-nav">
          <Link href="/projects">
            <Button variant="ghost" icon="mdi:arrow-left" iconPosition="left">
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="project-header">
          <div className="project-image">
            <Image 
              src={project.image} 
              alt={project.title}
              width={800}
              height={400}
              className="project-img"
            />
          </div>
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-stack">
              <h3>Technologies Used</h3>
              <div className="tech-list">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <Button 
                href={project.liveLink} 
                variant="primary"
                icon="mdi:external-link"
              >
                View Live Project
              </Button>
              <Button 
                href={project.githubLink} 
                variant="secondary"
                icon="mdi:github"
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="project-details">
          <div className="details-section">
            <h2>Project Overview</h2>
            <p>
              This project showcases my skills in modern web development, focusing on creating 
              responsive, user-friendly interfaces with clean code and best practices. The implementation 
              demonstrates my ability to work with various technologies and frameworks to deliver 
              high-quality web applications.
            </p>
          </div>

          <div className="details-section">
            <h2>Key Features</h2>
            <ul>
              <li>Responsive design that works seamlessly across all devices</li>
              <li>Modern UI/UX with smooth animations and transitions</li>
              <li>Clean, maintainable code following industry best practices</li>
              <li>Optimized performance and fast loading times</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </div>

          <div className="details-section">
            <h2>Development Process</h2>
            <p>
              The development process involved careful planning, design implementation, and rigorous testing. 
              I focused on creating a scalable solution that not only meets the current requirements but also 
              allows for future enhancements and maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
