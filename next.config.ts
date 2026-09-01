import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  turbopack: {
    root: __dirname, // explicitly set the project root
  },
};

export default nextConfig;
