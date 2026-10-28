/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  sassOptions: {
    includePaths: ['./components', './features'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
