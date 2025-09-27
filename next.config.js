/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15: app router enabled by default
  eslint: {
    // Allow builds to proceed even if ESLint reports issues
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
