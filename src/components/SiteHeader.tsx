import { sitePath } from '@/lib/site';

type SiteHeaderProps = { project?: boolean };

export function SiteHeader({ project = false }: SiteHeaderProps) {
  const home = sitePath('/');
  const links = [
    ['PROJECTS', project ? `${home}#projects` : '#projects'],
    ['PROCESS', project ? `${home}#process` : '#process'],
    ['CAPABILITIES', project ? `${home}#capabilities` : '#capabilities'],
    ['ABOUT', project ? `${home}#about` : '#about'],
  ];

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href={home} aria-label="Zhengshuang Liu portfolio home">
          <span className="brand-mark">LZ</span>
          <span className="brand-copy"><b>ZHENGSHUANG LIU</b><small>MECHANICAL DESIGN &amp; CAE</small></span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a className="nav-resume" href="https://github.com/zhengshuangliu/mechanical-engineering-portfolio">GITHUB ↗</a>
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <div>
            {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            <a href="https://github.com/zhengshuangliu/mechanical-engineering-portfolio">GITHUB ↗</a>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 ZHENGSHUANG LIU</span>
      <span>CAD · FEA · STRUCTURAL OPTIMIZATION</span>
      <a href="#top">BACK TO TOP ↑</a>
    </footer>
  );
}
