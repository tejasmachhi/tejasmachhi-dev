/**
 * Example Component: Image Usage with Centralized Image Management
 * 
 * This component demonstrates how to use the centralized ImgAssets system
 * with both Next.js Image component and regular img tags.
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ImgAssets, getImage, getCategoryImages, hasImage } from '@/data/imgAssets';

const ImageUsageExample = () => {
  const [selectedCategory, setSelectedCategory] = useState('hero');

  // Example 1: Using Next.js Image component (recommended for performance)
  const HeroSection = () => (
    <section className="hero-section">
      <h2>Hero Section with Next.js Image</h2>
      
      {/* Main hero banner with optimized loading */}
      <div className="hero-banner">
        <Image
          src={ImgAssets.hero.banner}
          alt="Hero Banner - Professional Portfolio"
          width={1200}
          height={600}
          priority // Load this image immediately
          placeholder="blur" // Show blurred placeholder while loading
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Profile image with circular crop */}
      <div className="profile-image">
        <Image
          src={ImgAssets.hero.profile}
          alt="Tejas Machhi - Professional Photo"
          width={200}
          height={200}
          className="rounded-full"
          priority
        />
      </div>
    </section>
  );

  // Example 2: Using regular img tag (for external URLs or when Image component isn't suitable)
  const TechStackSection = () => (
    <section className="tech-stack">
      <h2>Tech Stack with Regular img Tags</h2>
      
      <div className="tech-icons">
        <img 
          src={ImgAssets.tech.css} 
          alt="CSS3" 
          className="tech-icon"
          loading="lazy" // Lazy load for better performance
        />
        <img 
          src={ImgAssets.tech.bootstrap} 
          alt="Bootstrap" 
          className="tech-icon"
          loading="lazy"
        />
        <img 
          src={ImgAssets.tech.aiTools} 
          alt="AI Tools" 
          className="tech-icon"
          loading="lazy"
        />
      </div>
    </section>
  );

  // Example 3: Dynamic image selection with helper functions
  const DynamicGallery = () => {
    const categories = Object.keys(ImgAssets);
    const currentImages = getCategoryImages(selectedCategory);

    return (
      <section className="dynamic-gallery">
        <h2>Dynamic Image Gallery</h2>
        
        {/* Category selector */}
        <div className="category-selector">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Display images from selected category */}
        <div className="image-grid">
          {Object.entries(currentImages).map(([key, src]) => {
            // Skip non-image entries
            if (!src.includes('.jpg') && !src.includes('.png') && !src.includes('.svg') && !src.includes('.jpeg')) {
              return null;
            }

            return (
              <div key={key} className="image-item">
                <Image
                  src={src}
                  alt={`${selectedCategory} - ${key}`}
                  width={300}
                  height={200}
                  className="gallery-image"
                  loading="lazy"
                />
                <p className="image-label">{key}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  // Example 4: Project showcase with fallback handling
  const ProjectShowcase = () => {
    const projects = [
      { id: 'blueBerry', title: 'Blue Berry Project' },
      { id: 'omega', title: 'Omega RWD' },
      { id: 'huppTech', title: 'Hupp Tech' },
      { id: 'nonExistent', title: 'Non-existent Project' }, // Will use fallback
    ];

    return (
      <section className="project-showcase">
        <h2>Project Showcase with Fallback Handling</h2>
        
        <div className="projects-grid">
          {projects.map(project => {
            const imageSrc = hasImage('projects', project.id) 
              ? ImgAssets.projects[project.id]
              : ImgAssets.ui.comingSoon;

            return (
              <div key={project.id} className="project-card">
                <Image
                  src={imageSrc}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="project-image"
                  loading="lazy"
                />
                <h3>{project.title}</h3>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  // Example 5: Social media links with icons
  const SocialLinks = () => (
    <section className="social-links">
      <h2>Social Media Links</h2>
      
      <div className="social-icons">
        <a href="#" className="social-link" aria-label="GitHub">
          <img 
            src={ImgAssets.social.github} 
            alt="GitHub" 
            className="social-icon"
            loading="lazy"
          />
        </a>
        <a href="#" className="social-link" aria-label="LinkedIn">
          <img 
            src={ImgAssets.social.linkedin} 
            alt="LinkedIn" 
            className="social-icon"
            loading="lazy"
          />
        </a>
        <a href="#" className="social-link" aria-label="Twitter">
          <img 
            src={ImgAssets.social.twitter} 
            alt="Twitter" 
            className="social-icon"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );

  return (
    <div className="image-usage-example">
      <h1>Centralized Image Management Examples</h1>
      
      <HeroSection />
      <TechStackSection />
      <DynamicGallery />
      <ProjectShowcase />
      <SocialLinks />

      {/* Usage instructions */}
      <section className="usage-instructions">
        <h2>Usage Instructions</h2>
        <div className="code-examples">
          <h3>Import:</h3>
          <pre><code>{`import { ImgAssets, getImage, getCategoryImages, hasImage } from '@/data/imgAssets';`}</code></pre>

          <h3>Basic Usage:</h3>
          <pre><code>{`// With Next.js Image (recommended)
<Image src={ImgAssets.hero.banner} alt="Hero" width={800} height={400} />

// With regular img tag
<img src={ImgAssets.tech.css} alt="CSS" loading="lazy" />

// Dynamic selection
const imageSrc = hasImage('projects', 'blueBerry') ? ImgAssets.projects.blueBerry : ImgAssets.ui.placeholder;`}</code></pre>
        </div>
      </section>

      <style jsx>{`
        .image-usage-example {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        section {
          margin-bottom: 3rem;
          padding: 2rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
        }

        .hero-banner {
          margin-bottom: 2rem;
        }

        .profile-image {
          text-align: center;
        }

        .tech-icons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tech-icon {
          width: 48px;
          height: 48px;
          object-fit: contain;
        }

        .category-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .category-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          background: white;
          cursor: pointer;
          border-radius: 4px;
        }

        .category-btn.active {
          background: #0070f3;
          color: white;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
        }

        .image-item {
          text-align: center;
        }

        .gallery-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .social-icon:hover {
          opacity: 1;
        }

        .usage-instructions {
          background: #f5f5f5;
        }

        .code-examples {
          margin-top: 1rem;
        }

        .code-examples h3 {
          margin-top: 1.5rem;
        }

        pre {
          background: #1e1e1e;
          color: #d4d4d4;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }

        code {
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
        }

        .image-label {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default ImageUsageExample;
