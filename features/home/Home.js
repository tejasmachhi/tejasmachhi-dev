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
import { ImgAssets } from "@/data/imgAssets";

export default function Home() {
  const statsRef = useRef(null);

  /* ===============================
     DATA ARRAYS
  =============================== */
  const roles = [
    "Frontend Developer",
    "UI/UX Developer",
    "Web Developer",
    "Part-Time Game Streamer (YouTube)"
  ];
  const roleColors = ["#9238faff", "#fa7901ff", "#14b8a6", "#f1120eff"];


  const statsData = [
    {
      icon: "mdi:briefcase",
      target: 25,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: "mdi:clock-time-eight",
      target: 3,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: "mdi:code-tags",
      target: 5,
      suffix: "+",
      label: "Technologies",
    },
    {
      icon: "mdi:code-tags",
      target: 2000,
      suffix: "+",

      label: "line of code written",
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
      icon: "logos:tailwindcss-icon",  // colorful official logo
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
      icon: "logos:nextjs-icon",   // colored logo
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
      icon: "devicon:canva",   // colored Canva logo
      progress: "85%",
      isIconify: true,
    },
  ];

  const projectsData = [
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
      threshold: 0.5,
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

  /* ===============================
     COMPONENT JSX
  =============================== */

  return (
    <div className="home">
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text" data-aos="fade-right">
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
                Passionate Self-Taught Frontend Developer crafting modern, responsive, and user-focused web experiences. I turn ideas into clean, scalable, and visually engaging digital products.

              </p>

              <div className="hero-buttons">
                <Button
                  href="/projects"
                  variant="primary"
                  icon="mdi:arrow-right"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  View My Work
                </Button>

                <Button
                  href="/contact"
                  variant="secondary"
                  icon="mdi:email"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <IconComponent icon="noto:rocket" className="code-icon" data-aos="zoom-in" data-aos-delay="600" />
            <div className="hero-image" data-aos="fade-left">
              <div className="hero-img-container">
                <Image
                  src={ImgAssets.HERO_BANNER}
                  alt="Tejas Machhi"
                  width={400}
                  height={400}
                  className="hero-img"
                />

              </div>
            </div>
          </div>
          {/* ================= STATS ================= */}
          <div className="hero-stats" ref={statsRef} data-aos="fade-up" data-aos-delay="80">
            {statsData.map((stat, index) => (
              <div className="stat-item" key={index} data-aos="zoom-in" >

                <div className="stat-icon">
                  <IconComponent icon={stat.icon} />
                </div>

                <div
                  className="stat-number"
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                >
                  0
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>

              </div>
            ))}
          </div>
        </div>


      </section>
      <section className="about-section" data-aos="fade-up">
        <About />
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="skills">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Technologies & Tools I Use</h2>
            <p className="section-subtitle">
              The technologies and tools I use to build clean, responsive, and high-performing web applications.
              Committed to efficiency, scalability, and writing maintainable, well-structured code.
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index} data-aos="zoom-in" data-aos-delay={50 * (index % 6)}>
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

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <Projects />

      {/* ================= Service section ================= */}
      <section className="services-section">
        <Services />
      </section>

      {/* ================= CTA ================= */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Let's Work Together</h2>
            <p>
              Have a project in mind? Let's create
              something amazing together.
            </p>

            <Button
              href="/contact"
              variant="primary"
              icon="mdi:send"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}