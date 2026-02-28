export const projects = [
  {
    id: 1,
    title: "Omega",
    slug: "omega",
    description: "Responsive Web Design with modern UI/UX principles and clean aesthetics",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/assets/img/omega-rwd.png",
    liveLink: "https://omega-project.example.com",
    githubLink: "https://github.com/tejasmachhi/omega"
  },
  {
    id: 2,
    title: "Lorem 5-Page",
    slug: "lorem-5-page",
    description: "Multi-page responsive website built with Bootstrap framework and jQuery",
    tech: ["HTML", "Bootstrap", "jQuery", "Responsive Design"],
    image: "/assets/img/lorem-5-page.png",
    liveLink: "https://lorem-project.example.com",
    githubLink: "https://github.com/tejasmachhi/lorem-5-page"
  },
  {
    id: 3,
    title: "Rocket Media",
    slug: "rocket-media",
    description: "Modern business website with interactive animations and dynamic content",
    tech: ["HTML", "CSS", "JavaScript", "Animations"],
    image: "/assets/img/rocket-media.png",
    liveLink: "https://rocket-media.example.com",
    githubLink: "https://github.com/tejasmachhi/rocket-media"
  },
  {
    id: 4,
    title: "Hupp Tech",
    slug: "hupp-tech",
    description: "Technology company landing page with modern design and user experience",
    tech: ["HTML", "CSS", "jQuery", "UI/UX Design"],
    image: "/assets/img/hupp-tech.png",
    liveLink: "https://hupp-tech.example.com",
    githubLink: "https://github.com/tejasmachhi/hupp-tech"
  },
  {
    id: 5,
    title: "Blue Berry",
    slug: "blue-berry",
    description: "E-commerce website with responsive design and modern shopping experience",
    tech: ["HTML", "CSS", "Bootstrap", "E-commerce"],
    image: "/assets/img/blue-berry-p1.png",
    liveLink: "https://blue-berry.example.com",
    githubLink: "https://github.com/tejasmachhi/blue-berry"
  },
  {
    id: 6,
    title: "AI Tool Directory",
    slug: "ai-tool-directory",
    description: "AI-generated web page showcasing various AI tools and technologies",
    tech: ["HTML", "CSS", "JavaScript", "AI Integration"],
    image: "/assets/img/Ai-tools.png",
    liveLink: "https://ai-tools.example.com",
    githubLink: "https://github.com/tejasmachhi/ai-tools"
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getAllProjectSlugs = () => {
  return projects.map(project => project.slug);
};
