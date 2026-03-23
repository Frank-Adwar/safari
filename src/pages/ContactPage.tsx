import React from 'react';
import PageLayout from '../components/PageLayout';
import Reveal from '../components/inner/Reveal';

const HERO = {
  src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop',
  alt: 'Mountain horizon at dawn',
};

export default function ContactPage() {
  return (
    <PageLayout
      eyebrow="We are here"
      title="Contact"
      description="Questions about dates, families, photography, or a custom route—send a note and a specialist will reply within one business day."
      heroImage={HERO}
      wide
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-medium text-stone-900">Office</h2>
              <dl className="mt-8 space-y-8 text-[15px] font-light text-stone-600">
                <div>
                  <dt className="font-label text-[10px] uppercase tracking-[0.25em] text-stone-400">Email</dt>
                  <dd className="mt-2">
                    <a
                      href="mailto:hello@wildsafari.example"
                      className="border-b border-stone-300 pb-0.5 text-stone-900 transition hover:border-stone-600"
                    >
                      hello@wildsafari.example
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-label text-[10px] uppercase tracking-[0.25em] text-stone-400">Phone</dt>
                  <dd className="mt-2">
                    <a href="tel:+254700000000" className="text-stone-900 hover:text-stone-600">
                      +254 700 000 000
                    </a>
                    <span className="mt-1 block text-sm text-stone-500">WhatsApp on request</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-label text-[10px] uppercase tracking-[0.25em] text-stone-400">Hours</dt>
                  <dd className="mt-2 leading-relaxed">Mon–Fri · 08:00–18:00 EAT · 24/7 emergency line for travelling clients</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <label className="block">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-stone-500">Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="mt-3 w-full border-0 border-b border-stone-300 bg-transparent py-2 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-stone-800"
                  placeholder=" "
                />
              </label>
              <label className="block">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-stone-500">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-3 w-full border-0 border-b border-stone-300 bg-transparent py-2 text-stone-800 outline-none transition focus:border-stone-800"
                />
              </label>
              <label className="block">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-stone-500">Trip idea</span>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-3 w-full resize-y border-0 border-b border-stone-300 bg-transparent py-2 text-stone-800 outline-none transition focus:border-stone-800"
                  placeholder="Dates, destinations, party size…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="group relative overflow-hidden bg-stone-900 px-10 py-4 font-label text-[10px] font-medium uppercase tracking-[0.28em] text-white transition hover:bg-stone-800"
            >
              <span className="relative z-10">Send enquiry</span>
            </button>
          </form>
        </Reveal>
      </div>

      <p className="mt-20 text-center text-xs font-light text-stone-400">Replace placeholder contact details before going live.</p>
    </PageLayout>
  );
}
