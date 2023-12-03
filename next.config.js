/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.fl.yelpcdn.com',
          port: '',
          pathname: '/bphoto/**',
        },
      ],
    },
  }
  
  
