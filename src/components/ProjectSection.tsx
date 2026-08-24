import type { ReactNode } from 'react';

type ProjectSectionProps = {
  index: string;
  label: string;
  title: string;
  children: ReactNode;
  visual: ReactNode;
  dark?: boolean;
  id?: string;
};

export function ProjectSection({ index, label, title, children, visual, dark = false, id }: ProjectSectionProps) {
  return (
    <section className={`project-step${dark ? ' project-step-dark' : ''}`} id={id}>
      <div className="project-step-copy">
        <p className="step-index"><span>{index}</span>{label}</p>
        <h2>{title}</h2>
        <div className="step-body">{children}</div>
      </div>
      <div className="project-step-visual">{visual}</div>
    </section>
  );
}

