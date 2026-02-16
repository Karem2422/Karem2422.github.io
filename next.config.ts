import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== Enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  /* 
    If you are deploying to a custom domain (e.g., username.github.io), keep 'basePath' empty.
    If deploying to a project page (e.g., username.github.io/portfolio), uncomment the line below:
    basePath: "/portfolio",
  */
};

export default nextConfig;
