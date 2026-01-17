import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'export', // Enables static export
  basePath: '/portolio_nextjs', // Replace with your repository name
  images: {
    unoptimized: true, // Required for static export as Next.js Image Optimization doesn't work on GH Pages
  },
};

export default nextConfig;
