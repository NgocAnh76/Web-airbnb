/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'unsplash.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
