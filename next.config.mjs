/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'thevibes.network',
        },
        {
          protocol: 'https',
          hostname: 'thevibes.tech',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
        },
        {
          protocol: 'http',
          hostname: '13.203.33.173',
        },


      ],
    },};

export default nextConfig;
