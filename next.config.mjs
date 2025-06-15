/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'muhammeddhulkifli.com',
      'github.com',
      'linkedin.com',
      'medium.com'
    ],
  },
}

export default nextConfig
