import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import './Projects.scss';

export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and achievements</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
