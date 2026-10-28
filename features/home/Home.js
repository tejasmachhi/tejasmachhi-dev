"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import "./Home.scss";
import IconComponent from "@/components/IconComponent";
import { useEffect, useRef } from "react";
import About from "@/features/about/About";
import { useState } from "react";
import Services from "@/features/services/Services";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import { AppIcons } from "@/data/appIcons";

export default function Home() {
  const statsRef = useRef(null);

  /* ===============================
     DATA ARRAYS
  =============================== */
  const roles = [
    "Frontend UI Developer",
    "UI/UX Developer",
    "React.js Developer",
    "Web UI Developer"
  ];
  const roleColors = ["#9238faff", "#fa7901ff", "#14b8a6", "#3b82f6"];


  const statsData = [
    {
      renderIcon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      target: 10,
      suffix: "+",
      label: "Projects Completed",
      variant: "purple",
      barColor: "#6366f1",
    },
    {
      renderIcon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      target: 1,
      suffix: "+",
      label: "Years Experience",
      variant: "blue",
      barColor: "#2563eb",
    },
    {
      renderIcon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      target: 12,
      suffix: "+",
      label: "Technologies & Tools",
      variant: "emerald",
      barColor: "#059669",
    },
    {
      renderIcon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      target: 20,
      suffix: "k+",
      label: "Lines of Code Written",
      variant: "orange",
      barColor: "#ea580c",
    },
  ];

  const skillsData = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      progress: "95%",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      progress: "90%",
    },
    {
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      progress: "80%",
    },
    {
      name: "jQuery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      progress: "82%",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      progress: "88%",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",  
      progress: "90%",
      isIconify: true,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      progress: "85%",
    },
    {
      name: "Next.js",
      icon: "logos:nextjs-icon",   
      progress: "90%",
      isIconify: true,
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      progress: "75%",
    },

    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      progress: "78%",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      progress: "85%",
    },

    {
      name: "Canva Design",
      icon: "devicon:canva",   
      progress: "85%",
      isIconify: true,
    },
  ];

  const projectsData = [
    {
      title: "Unnati Enterprise",
      description:
        "Certified safety equipment & industrial PPE supplier website built with Next.js and SCSS.",
      image: "/assets/img/Unnati-Enterprise.png",
      tags: ["Next.js", "React", "SCSS"],
    },
    {
      title: "Modern E-Commerce Website",
      description:
        "Responsive online store built with Next.js and modern UI principles.",
      image: "/assets/img/blue-berry-p1.png",
      tags: ["Next.js", "React", "SCSS"],
    },
    {
      title: "Gaming Portfolio Website",
      description:
        "Personal brand website with animated hero and dark theme design.",
      image: "/assets/img/omega-rwd.png",
      tags: ["React", "Framer Motion", "Sass"],
    },
    {
      title: "Admin Dashboard UI",
      description:
        "Clean and modern dashboard with authentication and analytics charts.",
      image: "/assets/img/hupp-tech.png",
      tags: ["Next.js", "Chart.js", "Bootstrap"],
    },
  ];

  const servicesData = [
    {
      icon: "mdi:web",
      title: "Web Development",
      description:
        "Building responsive and scalable web applications.",
    },
    {
      icon: "mdi:palette",
      title: "UI/UX Design",
      description:
        "Designing modern and user-focused interfaces.",
    },
    {
      icon: "mdi:speedometer",
      title: "Performance Optimization",
      description:
        "Improving website speed and user experience.",
    },
    {
      icon: "mdi:youtube",
      title: "Gaming Content Creation",
      description:
        "Creating engaging gaming content and streams.",
    },
  ];

  /* ===============================
     COUNTER ANIMATION
  =============================== */

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers =
            entry.target.querySelectorAll(".stat-number");

          statNumbers.forEach((stat) => {
            const target = parseInt(
              stat.getAttribute("data-target")
            );
            const suffix =
              stat.getAttribute("data-suffix") || "";
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
              } else {
                stat.textContent = target + suffix;
              }
            };

            updateCounter();
          });

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);


  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);


  return (
    <div className="home">
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-greeting">
                <span className="wave">👋</span>
                <span>Hello, I'm</span>
              </div>
              <h1 className="hero-title">
                <span className="title-name">
                  Tejas Machhi
                </span>
                <span
                  className="title-role"
                  style={{ color: roleColors[roleIndex] }}
                >
                  {displayText}
                  <span className="cursor">|</span>
                </span>
              </h1>

              <p className="hero-description">
                Frontend UI Developer & UI/UX Specialist crafting modern, responsive, and user-centered web applications. Practical experience turning Figma designs into scalable React.js, Next.js, and PrimeReact interfaces with clean, modular SCSS.
              </p>

              <div className="hero-buttons">
                <Button
                  href="/projects"
                  variant="primary"
                  icon="mdi:arrow-right"
                >
                  View My Work
                </Button>

                <Button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
                  variant="outline"
                  icon="mdi:file-document-outline"
                >
                  View Resume
                </Button>

                <Button
                  href="/contact"
                  variant="secondary"
                  icon="mdi:email"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <IconComponent icon="noto:rocket" className="code-icon" />
            <div className="hero-image">
              <div className="hero-img-container">
                <Image
                  src={AppIcons.HeroBanner}
                  alt="Tejas Machhi"
                  width={400}
                  height={400}
                  className="hero-img"
                />

              </div>
            </div>
          </div>
          {/* ================= STATS ================= */}
          <div className="hero-stats" ref={statsRef}>
            {statsData.map((stat, index) => (
              <div className={`stat-item stat-${stat.variant}`} key={index}>
                <div className="stat-icon">
                  {stat.renderIcon ? stat.renderIcon() : <IconComponent icon={stat.icon} />}
                </div>
                <div className="stat-info">
                  <div
                    className="stat-number"
                    data-target={stat.target}
                    data-suffix={stat.suffix}
                  >
                    {stat.target}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div
                    className="stat-bar"
                    style={{ backgroundColor: stat.barColor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>



      <section className="about-section">
        <About />
      </section>
      {/* ================= Experience section ================= */}
      <section className="experience-section">
        <Experience />
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technologies & Tools I Use</h2>
            <p className="section-subtitle">
              The technologies and tools I use to build clean, responsive, and high-performing web applications.
              Committed to efficiency, scalability, and writing maintainable, well-structured code.
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">
                  {skill.isIconify ? (
                    <IconComponent icon={skill.icon} />
                  ) : (
                    <img src={skill.icon} alt={skill.name} />
                  )}
                </div>

                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Projects />

      {/* ================= Service section ================= */}
      <section className="services-section">
        <Services />
      </section>
      {/* ================= CTA ================= */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              Have a project in mind? Let's create
              something amazing together.
            </p>

            <Button
              href="/contact"
              variant="primary"
              icon="mdi:send"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}