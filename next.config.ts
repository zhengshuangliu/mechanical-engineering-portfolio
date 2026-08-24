import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const [owner = 'zhengshuangliu', repository = 'mechanical-engineering-portfolio'] =
  (process.env.GITHUB_REPOSITORY ?? 'zhengshuangliu/mechanical-engineering-portfolio').split('/');
const basePath = isGitHubPages ? `/${repository}` : '';
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  `https://${owner}.github.io/${repository}`;

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin,
  },
};

export default nextConfig;
