import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "indiawebdesigns.in",
      },
      {
        protocol: "https",
        hostname: "*.indiawebdesigns.in",
      },
      {
        protocol: "https",
        hostname: "academy.webotapp.com",
      },
      {
        protocol: "https",
        hostname: "*.webotapp.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
