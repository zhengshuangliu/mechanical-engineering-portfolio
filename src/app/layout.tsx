import type { Metadata, Viewport } from 'next';
import { siteOrigin } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Zhengshuang Liu | Mechanical Design & CAE Engineering Portfolio',
  description: 'Mechanical design, finite element analysis and structural optimization portfolio covering robot structures and large pressure equipment.',
  openGraph: {
    title: 'Zhengshuang Liu · Mechanical Design & CAE Engineering Portfolio',
    description: 'CAD · FEA · Structural Optimization · Engineering Judgment',
    url: siteOrigin,
    siteName: 'Zhengshuang Liu · Engineering Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${siteOrigin}/og.png`, width: 1200, height: 630, alt: 'Zhengshuang Liu mechanical engineering portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhengshuang Liu · Mechanical Design & CAE',
    description: 'CAD · FEA · Structural Optimization · Engineering Judgment',
    images: [`${siteOrigin}/og.png`],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#07111f',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
