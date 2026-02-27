import type { NextConfig } from "next";

const nextConfig: NextConfig & { turbopack?: { root?: string } } = {
  // Ensure Turbopack uses this project folder as the workspace root
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
