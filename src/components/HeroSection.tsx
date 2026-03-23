import React, { useEffect, useRef } from 'react';
import { MIXKIT_HERO_POSTER, MIXKIT_HERO_VIDEO } from '../boot/prefetchAssets';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (mq.matches) {
        v.pause();
        v.removeAttribute('autoplay');
      } else {
        v.setAttribute('autoplay', '');
        void v.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-[#0A110D] text-[#E8E5DF]"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full min-h-[100dvh] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={MIXKIT_HERO_POSTER}
        aria-hidden
      >
        <source src={MIXKIT_HERO_VIDEO} type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A110D]/75 via-[#0A110D]/45 to-[#0A110D]/85"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-24">
        <h1
          id="hero-heading"
          className="font-serif text-4xl tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Wild Safari
        </h1>
        <p className="mt-6 max-w-xl font-mono text-sm tracking-widest uppercase text-[#E8E5DF]/90 drop-shadow-md sm:text-base">
          Expeditions across the Serengeti, Maasai Mara, and beyond.
        </p>
      </div>
    </section>
  );
}
