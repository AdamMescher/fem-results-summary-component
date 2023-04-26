/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
