/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/investment',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
