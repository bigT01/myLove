import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'x7eoz2niieu08urz.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
