/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  sassOptions: {
    includePaths: ['./components', './features'],
  },
};

module.exports = nextConfig;
