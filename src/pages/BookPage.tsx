import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { ContentSection } from '../components/ContentSection';
import Reveal from '../components/inner/Reveal';
import { PATHS } from '../routes/paths';

const steps = [
  'Share your preferred months, budget band, and must-see wildlife.',
  'We propose 1–2 routed options with camps, transfers, and inclusions itemised.',
  'Refine dates and activities; we hold space where possible while you decide.',
  'Confirm with a deposit; balance due before travel per your invoice schedule.',
];

const HERO = {
  src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2400&auto=format&fit=crop',
  alt: 'Open road through dramatic landscape',
};

export default function BookPage() {
  return (
    <PageLayout
      eyebrow="Reserve"
      title="Book an expedition"
      description="Transparent quotes, clear payment milestones, and financial protection wording where applicable in your market—ask us for the latest terms."
      heroImage={HERO}
      wide
    >
      <div className="space-y-24">
        <ol className="list-none space-y-0">
          {steps.map((s, i) => (
            <li key={s} className={i > 0 ? 'border-t border-stone-200/80' : ''}>
              <Reveal delay={i * 0.07}>
                <div className="flex gap-12 py-12">
                  <span className="font-display text-3xl font-light text-stone-300">{i + 1}</span>
                  <p className="flex-1 pt-1 text-[17px] font-light leading-relaxed text-stone-600">{s}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="border-t border-stone-200/80 pt-20">
          <ContentSection title="What we need from you" index={0}>
            <ul className="space-y-3 text-[15px] font-light text-stone-600">
              {['Full names as per passports', 'Dietary, medical, or mobility notes', 'Emergency contact at home', 'Insurance policy number before departure'].map(
                (x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-stone-300">—</span>
                    {x}
                  </li>
                ),
              )}
            </ul>
          </ContentSection>
        </div>

        <Reveal>
          <div className="flex flex-col items-start gap-6 border-t border-stone-200/80 pt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[16px] font-light text-stone-600">
              Prefer to talk first? We&apos;ll schedule a short call before building your quote.
            </p>
            <Link
              to={PATHS.contact}
              className="shrink-0 border-b border-stone-900 pb-1 font-label text-[10px] uppercase tracking-[0.25em] text-stone-900 transition hover:text-stone-600"
            >
              Contact us
            </Link>
          </div>
        </Reveal>
      </div>
    </PageLayout>
  );
}
