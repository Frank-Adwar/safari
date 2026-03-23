import React from 'react';
import PageLayout from '../components/PageLayout';
import { ContentSection } from '../components/ContentSection';
import Reveal from '../components/inner/Reveal';

const tours = [
  {
    name: 'Classic Big Five',
    duration: '6–8 nights',
    focus: 'Lion, leopard, rhino, elephant, buffalo with flexible daily rhythm.',
  },
  {
    name: 'Migration Trails',
    duration: '7–10 nights',
    focus: 'Follow herds and river crossings with expert guides in prime locations.',
  },
  {
    name: 'Family Explorer',
    duration: '5–7 nights',
    focus: 'Shorter drives, child-friendly lodges, and guides who love teaching young travellers.',
  },
  {
    name: 'Photography Intensive',
    duration: '8–12 nights',
    focus: 'Golden-hour positioning, hides where available, and vehicles set up for lenses.',
  },
];

const HERO = {
  src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2400&auto=format&fit=crop',
  alt: 'Open safari vehicle on the plains',
};

export default function SafariToursPage() {
  return (
    <PageLayout
      eyebrow="Itineraries"
      title="Safari tours"
      description="Structured journeys with clear inclusions—lodging, guiding, park fees, and transfers—so you can focus on the wildlife."
      heroImage={HERO}
      wide
    >
      <div className="space-y-20">
        <ol className="list-none space-y-0">
          {tours.map((t, i) => (
            <li key={t.name} className={i > 0 ? 'border-t border-stone-200/80' : ''}>
              <Reveal delay={i * 0.08}>
                <div className="flex flex-col items-start gap-6 py-12 sm:flex-row sm:gap-12">
                  <span className="w-16 shrink-0 font-display text-4xl font-light tabular-nums text-stone-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-stone-900">{t.name}</h3>
                    <p className="mt-2 font-label text-[10px] uppercase tracking-[0.25em] text-stone-400">{t.duration}</p>
                    <p className="mt-5 text-[16px] font-light leading-relaxed text-stone-600">{t.focus}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="space-y-20">
          <ContentSection title="What is included" index={0}>
            <ul className="list-inside list-disc space-y-3 marker:text-stone-300">
              <li>Private or shared 4×4 game drives with qualified guides</li>
              <li>Accommodation as confirmed in your quote (full board where stated)</li>
              <li>Airstrip or road transfers as per itinerary</li>
              <li>Park and conservation fees for booked activities</li>
            </ul>
          </ContentSection>

          <ContentSection title="Pace & flexibility" index={1}>
            <p>
              Days follow the animals: early starts, rest at midday, and optional add-ons such as balloon flights or cultural visits where
              lodges allow. We adjust pacing for jet lag on arrival and build in buffer nights on multi-stop routes.
            </p>
          </ContentSection>
        </div>
      </div>
    </PageLayout>
  );
}
