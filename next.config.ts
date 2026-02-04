import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Untuk stock photos gratis berkualitas
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Untuk mockup
      },
    ],
  },
};

export default nextConfig;
