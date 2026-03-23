import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MIXKIT_HERO_POSTER, MIXKIT_HERO_VIDEO } from '../boot/prefetchAssets';
import { PATHS } from '../routes/paths';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

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

  const ease = [0.22, 1, 0.36, 1] as const;
  const dur = reduceMotion ? 0 : 0.52;
  const stagger = reduceMotion ? 0 : 0.085;
  const delay = reduceMotion ? 0 : 0.1;
  const y = reduceMotion ? 0 : 16;

  const item = {
    hidden: { opacity: reduceMotion ? 1 : 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

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
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A110D]/92 via-[#0A110D]/45 to-[#0A110D]/15 sm:via-[#0A110D]/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A110D]/88 via-transparent to-[#0A110D]/55"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1600px] flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24 xl:px-16">
        <motion.div
          className="flex max-w-[22rem] items-stretch gap-4 text-left sm:max-w-md md:max-w-lg lg:max-w-xl md:gap-5"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={item}
            className="w-px shrink-0 bg-gradient-to-b from-[#D4AF37]/90 via-[#D4AF37]/35 to-transparent"
            aria-hidden
          />
          <div className="min-w-0 space-y-6 md:space-y-7">
            <motion.p
              variants={item}
              className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#E8E5DF]/45 sm:text-[11px]"
            >
              Private safari design
            </motion.p>
            <motion.h1
              variants={item}
              id="hero-heading"
              className="font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] tracking-tight drop-shadow-[0_2px_28px_rgba(0,0,0,0.4)]"
            >
              Wild Safari
            </motion.h1>
            <motion.p
              variants={item}
              className="font-display text-[1.05rem] font-medium leading-[1.5] text-[#E8E5DF]/92 sm:text-[1.15rem] md:text-[1.25rem] md:leading-[1.48]"
            >
              Africa unfolds as a story — migration, light, silence. We build your trip as one arc: routed for the
              season, paced for you, told through camps and guides we trust.
            </motion.p>
            <motion.p
              variants={item}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8E5DF]/45 sm:text-[11px]"
            >
              Kenya · Tanzania · Southern Africa
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col gap-6 border-t border-[#E8E5DF]/10 pt-7 sm:flex-row sm:items-baseline sm:gap-12 sm:pt-8"
            >
              <Link
                to={PATHS.book}
                className="group inline-flex w-fit items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[#E8E5DF] transition sm:text-[11px]"
              >
                <span className="border-b border-[#D4AF37] pb-0.5 transition group-hover:border-[#E8E5DF]">
                  Start planning
                </span>
                <span
                  className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </Link>
              <Link
                to={PATHS.destinations}
                className="w-fit font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8E5DF]/45 transition hover:text-[#E8E5DF]/85 sm:text-[11px]"
              >
                Destinations
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
