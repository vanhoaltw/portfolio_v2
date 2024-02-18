/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
