import React from 'react';
import Reveal from './inner/Reveal';

type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  index?: number;
};

export function ContentSection({ title, children, className = '', index = 0 }: ContentSectionProps) {
  return (
    <Reveal delay={index * 0.07}>
      <section className={`space-y-5 ${className}`}>
        <h2 className="font-display text-3xl font-medium tracking-tight text-stone-900">{title}</h2>
        <div className="space-y-3 text-base font-light leading-relaxed text-stone-600">{children}</div>
      </section>
    </Reveal>
  );
}
