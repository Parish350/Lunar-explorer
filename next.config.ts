import type { NextConfig } from "next";

// Determine basePath and assetPrefix for GitHub Pages if deploying to https://<owner>.github.io/<repo-name>
// You can set NEXT_PUBLIC_BASE_PATH in GitHub Actions or env
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",
  basePath: repoName,
  assetPrefix: repoName ? `${repoName}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
