/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withContentlayer(nextConfig);
