import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/portfolio", // <=== Required for project pages (e.g. user.github.io/repo-name)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
