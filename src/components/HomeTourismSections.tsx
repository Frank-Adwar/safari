import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarRange, Compass, Headphones, ShieldCheck } from 'lucide-react';
import { PATHS } from '../routes/paths';

const stats = [
  { icon: Compass, label: 'Destinations', value: '12+', hint: 'Across East & Southern Africa' },
  { icon: ShieldCheck, label: 'Licensed guides', value: '100%', hint: 'Local expert-led game drives' },
  { icon: Headphones, label: 'Trip support', value: '24/7', hint: 'Before & during your journey' },
  { icon: CalendarRange, label: 'Seasons planned', value: 'Year-round', hint: 'Migration & dry-season routing' },
];

const highlights = [
  {
    to: PATHS.destinations,
    title: 'Iconic parks & landscapes',
    blurb: 'Serengeti–Mara ecosystems, crater highlands, delta floodplains — routed for wildlife and light.',
    image:
      'https://images.unsplash.com/photo-1711062752104-4f7d80374874?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Wildebeest herd on open savanna',
  },
  {
    to: PATHS.lodges,
    title: 'Lodges & camps',
    blurb: 'Tented camps, boutique lodges, and family-friendly stays chosen for location and hospitality.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Safari lodge pool overlooking bush',
  },
  {
    to: PATHS.experiences,
    title: 'Experiences & encounters',
    blurb: 'Game drives, walking safaris, photography, culture, and conservation visits — paced to you.',
    image:
      'https://images.unsplash.com/photo-1582553322727-e9d04e38f4a6?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Lion resting in golden grass',
  },
];

export default function HomeTourismSections() {
  return (
    <div className="relative z-10 bg-[#F5F3EE] font-page text-stone-800 antialiased">
      <section className="border-b border-stone-200/80 px-4 py-16 sm:px-6 md:py-24 lg:px-10" aria-labelledby="home-intro-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-label text-[10px] uppercase tracking-[0.35em] text-stone-500">Wild Safari</p>
          <h2 id="home-intro-heading" className="mt-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-stone-900">
            Bespoke expeditions for travellers who want depth, not a checklist
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
            We design private and small-group safaris with transparent routing, vetted lodges, and guides who know
            behaviour, seasons, and conservation context — so your time in Africa feels intentional, calm, and full of
            real encounters.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={PATHS.book}
              className="inline-flex items-center gap-2 rounded-sm bg-stone-900 px-8 py-3.5 font-label text-[10px] font-medium uppercase tracking-[0.28em] text-white transition hover:bg-stone-800"
            >
              Start planning
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
            <Link
              to={PATHS.contact}
              className="inline-flex items-center border-b border-stone-900 pb-1 font-label text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900 transition hover:opacity-70"
            >
              Talk to a specialist
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200/80 px-4 py-12 sm:px-6 lg:px-10" aria-label="At a glance">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 lg:gap-10">
          {stats.map(({ icon: Icon, label, value, hint }) => (
            <div key={label} className="flex flex-col items-center text-center md:items-start md:text-left">
              <Icon className="h-5 w-5 text-amber-800/80" strokeWidth={1.5} aria-hidden />
              <p className="mt-3 font-display text-3xl font-medium tabular-nums text-stone-900 md:text-4xl">{value}</p>
              <p className="mt-1 font-label text-[10px] uppercase tracking-[0.2em] text-stone-500">{label}</p>
              <p className="mt-2 max-w-[14rem] text-sm leading-snug text-stone-600">{hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-10" aria-labelledby="home-highlights-heading">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-2xl">
            <p className="font-label text-[10px] uppercase tracking-[0.35em] text-stone-500">Plan with us</p>
            <h2 id="home-highlights-heading" className="mt-3 font-display text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
              Where your itinerary begins
            </h2>
            <p className="mt-4 text-stone-600">
              Explore how we structure trips — from regions and camps to daily rhythm and special interests. Every
              journey is quoted individually.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {highlights.map((h) => (
              <Link
                key={h.to}
                to={h.to}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_8px_40px_rgba(28,25,23,0.06)] transition hover:border-stone-300 hover:shadow-[0_12px_48px_rgba(28,25,23,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={h.image}
                    alt={h.imageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-80" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="font-display text-xl font-medium text-stone-900 md:text-2xl">{h.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{h.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-label text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900">
                    View details
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/80 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="font-display text-2xl font-medium leading-snug text-stone-900 md:text-3xl">
            &ldquo;Every drive was planned around light and animal movement — we never felt rushed. The lodge choices
            matched what we asked for: quiet, great food, and guides who could teach as well as spot.&rdquo;
          </blockquote>
          <p className="mt-8 font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">
            — Guests, private Kenya &amp; Tanzania circuit
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-10" aria-labelledby="home-seasons-heading">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.35em] text-stone-500">Timing</p>
            <h2 id="home-seasons-heading" className="mt-3 font-display text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
              When to travel
            </h2>
            <p className="mt-4 text-stone-600">
              Dry-season months often concentrate game near water; green season brings dramatic skies, fewer vehicles,
              and excellent birding. Migration river crossings vary by year — we build dates around your priorities and
              wildlife behaviour, not brochure templates.
            </p>
            <ul className="mt-8 space-y-4 text-stone-700">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700/80" aria-hidden />
                <span>
                  <strong className="font-medium text-stone-900">Peak wildlife viewing:</strong> typically June–October
                  in many East African parks (varies by region).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700/80" aria-hidden />
                <span>
                  <strong className="font-medium text-stone-900">Value &amp; scenery:</strong> shoulder &amp; green
                  seasons can offer superb guiding with more space on the land.
                </span>
              </li>
            </ul>
            <Link
              to={PATHS.travelInfo}
              className="mt-10 inline-flex items-center gap-2 font-label text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900 underline decoration-stone-400 underline-offset-4 transition hover:opacity-70"
            >
              Read travel essentials
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>
          <div className="rounded-2xl border border-stone-200/90 bg-white p-8 shadow-[0_8px_40px_rgba(28,25,23,0.05)] md:p-10">
            <p className="font-label text-[10px] uppercase tracking-[0.28em] text-stone-500">Included in our service</p>
            <ul className="mt-6 space-y-4 text-stone-700">
              <li className="flex justify-between gap-4 border-b border-stone-100 pb-4">
                <span>Itinerary design &amp; revisions</span>
                <span className="font-label text-[10px] text-stone-500">Included</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-stone-100 pb-4">
                <span>Lodge &amp; camp shortlist</span>
                <span className="font-label text-[10px] text-stone-500">Included</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-stone-100 pb-4">
                <span>Ground transfers &amp; flight coordination</span>
                <span className="font-label text-[10px] text-stone-500">Quoted</span>
              </li>
              <li className="flex justify-between gap-4 pb-0">
                <span>On-trip assistance</span>
                <span className="font-label text-[10px] text-stone-500">24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0A110D] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.35em] text-[#E8E5DF]/50">Ready when you are</p>
            <h2 className="mt-3 font-display text-2xl font-medium text-[#E8E5DF] md:text-3xl">
              Tell us your dates, budget band, and must-sees — we&apos;ll return a clear route and options.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              to={PATHS.book}
              className="inline-flex items-center justify-center rounded-sm bg-[#D4AF37] px-8 py-3.5 font-label text-[10px] font-medium uppercase tracking-[0.28em] text-[#0A110D] transition hover:bg-[#E8E5DF]"
            >
              Request a trip
            </Link>
            <Link
              to={PATHS.contact}
              className="inline-flex items-center justify-center rounded-sm border border-[#E8E5DF]/25 px-8 py-3.5 font-label text-[10px] font-medium uppercase tracking-[0.28em] text-[#E8E5DF] transition hover:border-[#E8E5DF]/50"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
