import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
