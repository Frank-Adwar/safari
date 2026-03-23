import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import Reveal from '../components/inner/Reveal';
import { PATHS } from '../routes/paths';

const HERO_IMG =
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2400&auto=format&fit=crop';
const HERO_ALT = 'Sunset over African savanna with acacia trees';

const destinations = [
  {
    name: 'Serengeti National Park',
    region: 'Tanzania',
    blurb:
      'Endless plains, the Great Migration, and predator-rich grasslands—ideal for first-time and returning safari travellers.',
    best: 'Jun–Oct · river crossings · Dec–Mar calving',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Elephants on the Serengeti plains',
  },
  {
    name: 'Maasai Mara',
    region: 'Kenya',
    blurb: 'Rolling savanna, big cats on open ground, and Maasai culture at the edge of the reserve.',
    best: 'Jul–Oct',
    image:
      'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Lion in tall grass, Maasai Mara',
  },
  {
    name: 'Kruger & Greater Kruger',
    region: 'South Africa',
    blurb: 'Excellent roads, malaria-free options, and reliable Big Five sightings across varied bushveld.',
    best: 'May–Sep dry season',
    image:
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Elephant in South African bush',
  },
  {
    name: 'Okavango Delta',
    region: 'Botswana',
    blurb: 'Waterways, mokoro poling, and islands rich with elephant, wild dog, and birdlife.',
    best: 'Jun–Aug peak flood',
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Okavango Delta waterways and wetlands, Botswana',
  },
];

export default function DestinationsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F3EE] font-page text-stone-800 antialiased">
      {/* Hero — full width, no inner frames */}
      <section className="relative min-h-[min(78vh,920px)] w-full">
        <motion.img
          src={HERO_IMG}
          alt={HERO_ALT}
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduceMotion ? undefined : { scale: 1.06 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/90 via-[#1c1917]/35 to-[#292524]/25" aria-hidden />
        <div className="relative mx-auto flex min-h-[min(78vh,920px)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16">
          <Reveal>
            <p className="font-label text-[11px] font-medium uppercase tracking-[0.45em] text-white/70">Where we go</p>
            <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-white">
              Destinations
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/88">
              Hand-picked parks and reserves—each with its own rhythm, wildlife, and seasonality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro — breathing room, no box */}
      <section className="mx-auto max-w-3xl px-8 py-28 text-center">
        <Reveal delay={0.05}>
          <p className="text-xl font-light leading-[1.75] text-stone-600">
            We match parks to the way you travel: private vehicle or small group, family pace or photography focus. Your route earns
            unhurried mornings on the plains and camps chosen for place—not poster walls.
          </p>
        </Reveal>
      </section>

      {/* Alternating editorial rows — image + copy, no card frames */}
      <div className="w-full">
        {destinations.map((d, i) => (
          <motion.article
            key={d.name}
            className={`flex min-h-0 w-full flex-col lg:min-h-[min(88vh,980px)] lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            initial={reduceMotion ? undefined : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative min-h-[42vh] w-full min-w-0 lg:min-h-[min(88vh,980px)] lg:w-1/2">
              <img src={d.image} alt={d.imageAlt} className="absolute inset-0 h-full w-full object-cover" loading={i < 2 ? 'eager' : 'lazy'} />
              <div className="absolute inset-0 bg-stone-900/10" aria-hidden />
            </div>
            <div className="flex w-full min-w-0 flex-col justify-center px-8 py-14 lg:w-1/2 lg:px-20 lg:py-20">
              <p className="font-label text-[10px] uppercase tracking-[0.35em] text-stone-500">{d.region}</p>
              <h2 className="mt-4 font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-medium leading-tight text-stone-900">{d.name}</h2>
              <p className="mt-6 text-[17px] font-light leading-relaxed text-stone-600">{d.blurb}</p>
              <p className="mt-10 font-label text-[11px] uppercase tracking-[0.2em] text-stone-400">Best · {d.best}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Planning — typography only */}
      <section className="mx-auto max-w-2xl px-8 py-32 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-medium tracking-tight text-stone-900">How we plan your route</h2>
          <p className="mt-8 text-[17px] font-light leading-[1.8] text-stone-600">
            Seasonality, flight connections, and drive times sit in one spreadsheet before we suggest a single camp. You see one coherent
            journey—not a patchwork of brochures.
          </p>
        </Reveal>
      </section>

      {/* Closing band — image + CTA */}
      <section className="relative min-h-[46vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          role="presentation"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917]/88 to-[#1c1917]/55" aria-hidden />
        <div className="relative mx-auto flex min-h-[46vh] max-w-4xl flex-col items-center justify-center px-8 py-16 text-center">
          <Reveal>
            <p className="font-label text-[10px] uppercase tracking-[0.35em] text-white/70">Next step</p>
            <p className="mt-4 max-w-md text-lg font-light text-white/90">Share your dates and travel style—we&apos;ll shape a route and shortlist camps.</p>
            <Link
              to={PATHS.book}
              className="mt-10 inline-block border border-white/40 bg-white/10 px-10 py-4 font-label text-[10px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-sm transition hover:bg-white hover:text-stone-900"
            >
              Start planning
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
