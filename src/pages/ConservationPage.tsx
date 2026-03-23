import React from 'react';
import PageLayout from '../components/PageLayout';
import { ContentSection } from '../components/ContentSection';
import Reveal from '../components/inner/Reveal';

const pillars = [
  {
    title: 'Anti-poaching & monitoring',
    copy: 'Support for ranger units, aerial surveillance partnerships, and K9 teams where programmes are transparent and audited.',
  },
  {
    title: 'Community livelihoods',
    copy: 'Conservancy fees, employment, and supply chains that keep benefits close to people living alongside wildlife.',
  },
  {
    title: 'Habitat restoration',
    copy: 'Tree planting, fire management, and invasive species control tied to long-term management plans.',
  },
];

const HERO = {
  src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=2400&auto=format&fit=crop',
  alt: 'Elephant herd crossing savanna',
};

export default function ConservationPage() {
  return (
    <PageLayout
      eyebrow="Impact"
      title="Conservation"
      description="Travel funds protection. We prioritise partners who publish outcomes, involve local governance, and align with national park frameworks."
      heroImage={HERO}
      wide
    >
      <div className="space-y-20">
        <Reveal>
          <p className="text-lg font-light leading-[1.8] text-stone-600">
            A share of Wild Safari bookings is directed to vetted projects—rotated by region and need. You receive a short impact summary
            with your final documents so you know where contributions landed for your trip.
          </p>
        </Reveal>

        <div className="space-y-16">
          {pillars.map((p, i) => (
            <div key={p.title}>
              <Reveal delay={i * 0.08}>
                <div className="flex flex-col gap-6 border-l-2 border-stone-300 pl-6 sm:flex-row sm:gap-12 sm:pl-8">
                  <span className="w-24 shrink-0 font-display text-5xl font-light text-stone-200">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-stone-900">{p.title}</h3>
                    <p className="mt-4 text-[16px] font-light leading-relaxed text-stone-600">{p.copy}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-200/80 pt-20">
          <ContentSection title="Responsible viewing" index={0}>
            <p>
              We brief guests on distance rules, noise, and tipping guides fairly. Drones are not used where banned; baiting and off-road
              driving follow reserve regulations. Ethical sightings come first—every time.
            </p>
          </ContentSection>
        </div>
      </div>
    </PageLayout>
  );
}
