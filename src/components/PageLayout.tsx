import React from 'react';
import Reveal from './inner/Reveal';

type HeroImage = {
  src: string;
  alt: string;
};

type PageLayoutProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
  /** Full-bleed image behind title — editorial, no boxed header */
  heroImage?: HeroImage;
  /** Wider content column */
  wide?: boolean;
};

export default function PageLayout({ title, eyebrow, description, children, heroImage, wide }: PageLayoutProps) {
  const contentMax = wide ? 'max-w-4xl' : 'max-w-2xl';

  if (heroImage) {
    return (
      <main className="min-h-screen bg-[#F5F3EE] font-page font-normal text-stone-800 antialiased">
        <header className="relative min-h-[58vh] w-full overflow-hidden">
          <img src={heroImage.src} alt={heroImage.alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/85 via-[#1c1917]/35 to-[#1c1917]/20" aria-hidden />
          <div className="relative flex min-h-[58vh] flex-col justify-end px-16 pb-16 pt-28">
            <Reveal>
              {eyebrow ? (
                <p className="mb-3 font-label text-[11px] font-medium uppercase tracking-[0.4em] text-white/75">{eyebrow}</p>
              ) : null}
              <h1 className="max-w-3xl font-display text-6xl font-medium leading-[1.08] tracking-tight text-white">
                {title}
              </h1>
              {description ? (
                <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85">{description}</p>
              ) : null}
            </Reveal>
          </div>
        </header>

        <div className={`mx-auto ${contentMax} px-6 py-20`}>{children}</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-page font-normal text-stone-800 antialiased">
      <header className="border-b border-stone-200/80 bg-white/60 px-6 pb-16 pt-28 backdrop-blur-sm">
        <div className={`mx-auto ${contentMax}`}>
          <Reveal>
            {eyebrow ? (
              <p className="mb-3 font-label text-[11px] font-medium uppercase tracking-[0.35em] text-stone-500">{eyebrow}</p>
            ) : null}
            <h1 className="font-display text-[3.25rem] font-medium leading-[1.1] tracking-tight text-stone-900">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-stone-600">{description}</p>
            ) : null}
            <div className="mt-10 h-px w-16 bg-gradient-to-r from-stone-400 to-transparent" aria-hidden />
          </Reveal>
        </div>
      </header>

      <div className={`mx-auto ${contentMax} px-6 py-16`}>{children}</div>
    </main>
  );
}
