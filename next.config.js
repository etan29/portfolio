/** @type {import('next').NextConfig} */
const repo = "portfolio";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: isGithubPages ? `/${repo}/` : "/",
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}` : "",
};

module.exports = nextConfig;
