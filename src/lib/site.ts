export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function sitePath(path: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}

export const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  'https://zhengshuangliu.github.io/mechanical-engineering-portfolio';
