/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    domains: ['localhost:8001', 'localhost:8000', 'localhost'],
    unoptimized: true
  },
  // assetPrefix: '/static'
}

module.exports = nextConfig
