import React from 'react';
import PageLayout from '../components/PageLayout';
import { ContentSection } from '../components/ContentSection';
import Reveal from '../components/inner/Reveal';

const experiences = [
  {
    title: 'Game drives',
    text: 'Sunrise and sunset sorties in open vehicles—radio-linked for sightings, ethically positioned at sightings.',
  },
  {
    title: 'Walking safaris',
    text: 'Track prints and learn ecology on foot with armed guides in designated areas.',
  },
  {
    title: 'Hot-air balloon',
    text: 'Dawn flights over plains or delta channels, followed by a champagne-style bush breakfast where offered.',
  },
  {
    title: 'Cultural visits',
    text: 'Respectful community-led visits: schools, beading cooperatives, and conservation storytelling.',
  },
  {
    title: 'Night drives & hides',
    text: 'Where regulations allow—nocturnal species, bush babies, and lion on the move after dark.',
  },
];

/** Stable Unsplash sources — balloon / Maasai community / night drive use topic-appropriate photos */
const EXPERIENCE_IMAGES: Record<string, string> = {
  'Game drives':
    'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop',
  'Walking safaris':
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
  'Hot-air balloon':
    'https://images.unsplash.com/photo-1559251606-c14075631fa7?q=80&w=1200&auto=format&fit=crop',
  'Cultural visits':
    'https://images.unsplash.com/photo-1580060839134-75a5edca7e3d?q=80&w=1200&auto=format&fit=crop',
  'Night drives & hides':
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
};

const HERO = {
  src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2400&auto=format&fit=crop',
  alt: 'Campfire and open sky on safari',
};

export default function ExperiencesPage() {
  return (
    <PageLayout
      eyebrow="On the ground"
      title="Experiences"
      description="Beyond the vehicle: activities that deepen your connection to landscape, wildlife, and people—always within park rules and lodge safety briefings."
      heroImage={HERO}
      wide
    >
      <div className="space-y-20">
        <ul className="grid list-none grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {experiences.map((e, i) => (
            <li key={e.title} className="space-y-4">
              <Reveal delay={i * 0.06}>
                <div className="space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm bg-stone-200">
                    <img
                      src={EXPERIENCE_IMAGES[e.title] ?? HERO.src}
                      alt={e.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-xl font-medium text-stone-900">{e.title}</h3>
                  <p className="text-[15px] font-light leading-relaxed text-stone-600">{e.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="space-y-20 border-t border-stone-200/80 pt-20">
          <ContentSection title="Who each suits" index={0}>
            <p>
              First-timers often prioritise game drives and one special activity (balloon or walk). Photographers stack mornings and
              afternoons with flexible vehicle positioning. Families mix shorter activities with pool time and junior ranger programmes where
              camps offer them.
            </p>
          </ContentSection>

          <ContentSection title="Booking notes" index={1}>
            <p>
              Some experiences require advance booking and have weight or age limits. We confirm availability at quote stage and share
              what to wear, carry, and expect for each add-on.
            </p>
          </ContentSection>
        </div>
      </div>
    </PageLayout>
  );
}
