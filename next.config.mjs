/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['swansorter.com', 'localhost'],
    unoptimized: true,
  },
};

export default nextConfig;
