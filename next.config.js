/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [
      'www.synopsys.com',
      'www.jenkins.io',
      'www.docker.com',
      'kubernetes.io',
      'www.datocms-assets.com'
    ]
  },
}

module.exports = nextConfig 