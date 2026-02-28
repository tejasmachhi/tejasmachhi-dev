"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button/Button";
import "./Home.scss";
import IconComponent from "@/components/IconComponent";
import { useEffect, useRef } from "react";
import About from "@/features/about/About";
import { useState } from "react";

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

      label: "Projects Completed",
    },
    {
      icon: "mdi:clock-time-eight",
      target: 3,

      label: "Years Experience",
    },
    {
      icon: "mdi:code-tags",
      target: 5,

      label: "Technologies",
    },
    {
      icon: "mdi:code-tags",
      target: 2000,

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
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      progress: "85%",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      progress: "88%",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      progress: "75%",
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
      name: "Responsive Design",
      icon: "mdi:devices",
      progress: "92%",
      isIconify: true,
    },
    {
      name: "Prompt Engineering",
      icon: "mdi:robot",
      progress: "88%",
      isIconify: true,
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
                I'm a passionate self-taught frontend developer who
                loves creating beautiful, responsive, and
                user-friendly websites.
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
                  href="/contact"
                  variant="secondary"
                  icon="mdi:email"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-img-container">
                <Image
                  src="/assets/img/IMG_1541.jpeg"
                  alt="Tejas Machhi"
                  width={400}
                  height={400}
                  className="hero-img"
                />
                <div className="hero-img-bg"></div>
              </div>
            </div>
          </div>
          {/* ================= STATS ================= */}
          <div className="hero-stats" ref={statsRef}>
            {statsData.map((stat, index) => (
              <div className="stat-item" key={index}>

                <div className="stat-icon">
                  <IconComponent icon={stat.icon} />
                </div>

                <div
                  className="stat-number"
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                >
                  <span>+</span>
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>

              </div>
            ))}
          </div>
        </div>


      </section>
      <section className="about">
        <About />
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Skills & Technologies
            </h2>
            <p className="section-subtitle">
              Technologies I work with
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">
                  {skill.isIconify ? (
                    <IconComponent icon={skill.icon} />
                  ) : (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                    />
                  )}
                </div>

                <h3>{skill.name}</h3>

                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{ width: skill.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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