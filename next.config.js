/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  server: {
    // This will only work with Next.js 12 or newer.
    externalResolver: true,
  },
}

module.exports = nextConfig
