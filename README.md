# Tejas Machhi - Next.js Portfolio

A modern, production-ready portfolio website built with Next.js 14, React 18, and SCSS.

## 🚀 Features

- **Next.js 14** with App Router
- **React 18** with modern hooks
- **SCSS** with nesting and variables
- **Iconify** for beautiful icons
- **Responsive Design** for all devices
- **Dynamic Routing** for project details
- **Optimized Images** with Next.js Image component
- **Clean Architecture** with feature-based structure

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with Header & Footer
│   ├── page.js            # Home page
│   ├── about-us/          # About page
│   ├── projects/          # Projects listing
│   ├── projects/[slug]/   # Dynamic project details
│   ├── contact/           # Contact page
│   ├── error.js           # Error boundary
│   ├── not-found.js       # 404 page
│   ├── loading.js         # Loading state
│   └── globals.scss       # Global styles
├── components/            # Reusable components
│   ├── shared/           # Header, Footer
│   └── ui/               # Button, ProjectCard
├── features/             # Feature components
│   ├── home/             # Home page feature
│   ├── about/            # About page feature
│   ├── projects/         # Projects listing feature
│   ├── projectDetail/    # Project detail feature
│   └── contact/          # Contact page feature
├── data/                 # Static data
│   └── projects.js       # Projects data
├── public/               # Static assets
│   └── assets/           # Images and assets
└── styles/               # Global styles
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **SCSS** - CSS preprocessor with nesting
- **Iconify React** - Icon library
- **Next.js Image** - Optimized image component

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tejas-portfolio-2025
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build & Deploy

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive and works seamlessly across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Modern UI/UX** with clean aesthetics
- **Smooth Animations** and transitions
- **Interactive Components** with hover states
- **Professional Typography** with Inter font
- **Consistent Color Scheme** with CSS variables
- **Accessible Markup** with semantic HTML5

## 📊 Pages

1. **Home** - Hero section, about preview, projects preview, contact CTA
2. **About** - Detailed about information with personal journey
3. **Projects** - Grid layout of all projects with filtering
4. **Project Detail** - Dynamic pages for each project with full details
5. **Contact** - Contact form with information cards

## 🔧 Configuration

- **next.config.js** - Next.js configuration with image optimization
- **package.json** - Dependencies and scripts
- **SCSS Variables** - Consistent design tokens across components

## 📝 Customization

### Adding New Projects

1. Open `data/projects.js`
2. Add new project object with required fields:
```javascript
{
  id: 7,
  title: "New Project",
  slug: "new-project",
  description: "Project description",
  tech: ["HTML", "CSS", "JavaScript"],
  image: "/assets/img/project-image.png",
  liveLink: "https://example.com",
  githubLink: "https://github.com/username/repo"
}
```

### Modifying Styles

All SCSS files include variables at the top:
```scss
$primary: #111;
$accent: #4f46e5;
$text: #333;
$bg: #f9f9f9;
```

## 🌟 Key Features

- **Component-Based Architecture** - Reusable and maintainable components
- **Feature-First Structure** - Organized by features, not file types
- **Dynamic Routing** - SEO-friendly URLs for projects
- **Image Optimization** - Automatic image optimization with Next.js
- **Form Handling** - Interactive contact form with validation
- **Social Links** - Integrated social media links
- **Loading States** - Smooth loading indicators
- **Error Handling** - Graceful error pages

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Tejas Machhi** - Frontend Developer & UI/UX Developer

- Portfolio: [tejas-portfolio-2025](https://tejas-portfolio-2025.vercel.app)
- LinkedIn: [tejas-machhi](https://linkedin.com/in/tejas-machhi-470388187)
- GitHub: [tejasmachhi](https://github.com/tejasmachhi)

---

Built with ❤️ using Next.js and modern web technologies.
