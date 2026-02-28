"use client";

import "./Services.scss";
import IconComponent from "@/components/IconComponent";

export default function Services() {
  const servicesData = [
    {
      icon: "mdi:web",
      title: "Web Development",
      description:
        "Building modern, responsive, and scalable web applications using the latest technologies.",
    },
    {
      icon: "mdi:palette",
      title: "UI/UX Design",
      description:
        "Designing clean, intuitive, and user-focused interfaces that enhance user experience.",
    },
    {
      icon: "mdi:speedometer",
      title: "Performance Optimization",
      description:
        "Optimizing websites for speed, accessibility, and better performance.",
    },
    {
      icon: "mdi:youtube",
      title: "Gaming Content Creation",
      description:
        "Creating engaging gaming content and live streams on YouTube.",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            What I can do for you
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <IconComponent icon={service.icon} />
              </div>

              <h3 className="service-title">
                {service.title}
              </h3>

              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
