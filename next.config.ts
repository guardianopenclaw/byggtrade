import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "photos.arbiton.com",
      },
      {
        protocol: "https",
        hostname: "arbiton.com",
      },
    ],
  },
};

export default nextConfig;
