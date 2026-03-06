

// Legacy imgAssets.js - Now using AppIcons for centralized management
// This file is maintained for backward compatibility

import { AppIcons } from './appIcons';

// Re-export for backward compatibility
export const ImgAssets = {
  // Hero Images
  HERO_BANNER: AppIcons.HeroBanner,
  
  // Technology Icons (Legacy naming)
  CSS_ICON: AppIcons.CSSIcon,
  HTML5_ICON: AppIcons.HTML5Icon,
  BOOTSTRAP_ICON: AppIcons.BootstrapIcon,
  AI_TOOLS_ICON: AppIcons.AiToolsIcon,
  
  // Project Images
  BLUE_BERRY_PROJECT: AppIcons.BlueBerryProject,
  OMEGA_PROJECT: AppIcons.OmegaProject,
  HUPP_TECH_PROJECT: AppIcons.HuppTechProject,
  LOREM_IMPUS_PROJECT: AppIcons.LoremImpusProject,
  ROCKET_MEDIA_PROJECT: AppIcons.RocketMediaProject,
  COMING_SOON: AppIcons.ComingSoon,
};

// Export default for convenience
export default ImgAssets;

// Recommended: Use AppIcons directly for new development
// Example usage:
// import { AppIcons } from '@/data/appIcons';
// import Image from 'next/image';
// 
// <Image src={AppIcons.heroBanner} alt="Hero Banner" width={1200} height={600} />
