'use client';

import { useEffect, useState } from 'react';

type ImageViewerProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function ImageViewer({ src, alt, caption, className = '' }: ImageViewerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <>
      <button className={`image-viewer ${className}`} type="button" onClick={() => setOpen(true)} aria-label={`Expand image: ${alt}`}>
        <img src={src} alt={alt} />
        {caption && <span>{caption}<b>EXPAND ↗</b></span>}
      </button>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close image viewer">CLOSE ×</button>
          <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
          {caption && <p>{caption}</p>}
        </div>
      )}
    </>
  );
}

