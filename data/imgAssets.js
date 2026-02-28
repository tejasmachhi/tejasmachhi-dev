/**
 * Centralized Image Asset Management System
 * 
 * This file provides a single source of truth for all image assets in the project.
 * It ensures consistent naming, prevents duplicate imports, and makes maintenance easier.
 * 
 * Usage:
 * import { ImgAssets } from '@/data/imgAssets';
 * 
 * With Next.js Image component:
 * <Image src={ImgAssets.HERO_BANNER} alt="Hero Banner" width={800} height={400} />
 * 
 * With regular img tag:
 * <img src={ImgAssets.HERO_BANNER} alt="Hero Banner" />
 */

export const ImgAssets = {
  // Hero Images
  HERO_BANNER: "/assets/img/hero-image.png",
  HERO_PROFILE: "/assets/img/IMG_1541.jpeg",
  
  // Technology Icons
  CSS_ICON: "/assets/img/css.png",
  HTML5_ICON: "/assets/img/html5.png",
  BOOTSTRAP_ICON: "/assets/img/Bootstrap_logo.svg.png",
  AI_TOOLS_ICON: "/assets/img/Ai-tools.png",
  
  // Project Images
  BLUE_BERRY_PROJECT: "/assets/img/blue-berry-p1.png",
  OMEGA_PROJECT: "/assets/img/omega-rwd.png",
  HUPP_TECH_PROJECT: "/assets/img/hupp-tech.png",
  LOREM_IMPUS_PROJECT: "/assets/img/lorem-5-page.png",
  ROCKET_MEDIA_PROJECT: "/assets/img/rocket-media.png",
  COMING_SOON: "/assets/img/comming soon.jpg",
};

// Export default for convenience
export default ImgAssets;
