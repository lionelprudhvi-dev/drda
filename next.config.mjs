/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages project-site deployment.
  output: "export",
  basePath: "/drda",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
