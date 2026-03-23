import React from 'react';
import PageLayout from '../components/PageLayout';
import { ContentSection } from '../components/ContentSection';
import Reveal from '../components/inner/Reveal';

const tiers = [
  {
    name: 'Classic bush camps',
    desc: 'Canvas or hybrid tents, en-suite facilities, solar power, and dining under the stars—authentic without roughing it.',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Boutique lodges',
    desc: 'Permanent structures, pools, spas where available, and curated wine lists—ideal for longer stays or mixed-age groups.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Private villas & sole-use',
    desc: 'Exclusive-use houses with dedicated staff and vehicles for families or celebratory trips.',
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
  },
];

const HERO = {
  src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2400&auto=format&fit=crop',
  alt: 'Luxury lodge pool overlooking the bush',
};

export default function LodgesPage() {
  return (
    <PageLayout
      eyebrow="Stay"
      title="Lodges & camps"
      description="We work with owner-run camps and established lodge groups that invest in staff training, guiding, and low-impact design."
      heroImage={HERO}
      wide
    >
      <div className="space-y-24">
        <div className="space-y-20">
          {tiers.map((t, i) => (
            <article key={t.name}>
              <Reveal delay={i * 0.1}>
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={`overflow-hidden rounded-sm ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={t.img}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-3xl font-medium text-stone-900">{t.name}</h3>
                    <p className="text-[16px] font-light leading-relaxed text-stone-600">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <div className="space-y-20 border-t border-stone-200/80 pt-20">
          <ContentSection title="How we choose" index={0}>
            <p>
              Location first: inside or bordering prime wildlife areas. Then guiding reputation, food quality, and how the camp handles
              sustainability—water, waste, and local employment. We revisit properties regularly and listen to guest feedback.
            </p>
          </ContentSection>

          <ContentSection title="Typical room features" index={1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {['Mosquito netting & climate control', 'Safe & charging points', 'Private deck or sala', 'Laundry (varies by camp)'].map(
                (x) => (
                  <li key={x} className="flex items-baseline gap-3 text-[15px] font-light text-stone-600">
                    <span className="font-display text-lg text-stone-300">—</span>
                    {x}
                  </li>
                ),
              )}
            </ul>
          </ContentSection>
        </div>
      </div>
    </PageLayout>
  );
}
