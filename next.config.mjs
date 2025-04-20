/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['swansorter.com', 'localhost', '147.93.29.202'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swansorter.com',
      },
      {
        protocol: 'http',
        hostname: '147.93.29.202',
        port: '5000',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://swansorter.com' : '',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Add custom webpack config for better network handling
  webpack: (config, { isServer }) => {
    // Optimize bundle
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    
    return config;
  },
};

export default nextConfig;
