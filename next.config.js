/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    // Enables the styled-components plugin
    styledComponents: true,
  },
  experimental: {
    // any experimental features you need
  },
  images: {
    domains: [
      'www.parasoft.com',
      'www.jenkins.io',
      'www.docker.com',
      'kubernetes.io',
      'www.datocms-assets.com'
    ]
  }
}

module.exports = nextConfig 