/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // This allows for Node.js server deployment
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['swanbackend.onrender.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
