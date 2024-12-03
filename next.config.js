/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    // Enables the styled-components plugin
    styledComponents: true,
  },
  experimental: {
    // any experimental features you need
  }
}

module.exports = nextConfig 