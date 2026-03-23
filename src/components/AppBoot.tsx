import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { isPreloadMarkedDone, markPreloadDone, runInitialPreload } from '../boot/prefetchAssets';

const MIN_SPLASH_MS = 950;

type AppBootProps = {
  children: React.ReactNode;
};

/**
 * First visit (per tab session): full-screen preload of images + hero video cache.
 * Skipped when session flag is set — instant app on refresh.
 */
export default function AppBoot({ children }: AppBootProps) {
  const [ready, setReady] = useState(() => isPreloadMarkedDone());
  const [splash, setSplash] = useState(() => !isPreloadMarkedDone());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (ready) return;

    const t0 = Date.now();

    runInitialPreload((loaded, total) => {
      setProgress(total > 0 ? Math.min(100, Math.round((loaded / total) * 100)) : 0);
    }).then(() => {
      markPreloadDone();
      const rest = Math.max(0, MIN_SPLASH_MS - (Date.now() - t0));
      window.setTimeout(() => setSplash(false), rest);
    });
  }, [ready]);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => setReady(true)}>
        {splash ? (
          <motion.div
            key="splash"
            role="status"
            aria-live="polite"
            aria-busy="true"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-[#0A110D] px-8"
          >
            <p className="font-display text-4xl tracking-tight text-[#E8E5DF]">Wild Safari</p>
            <p className="mt-3 font-label text-[10px] uppercase tracking-[0.4em] text-[#E8E5DF]/45">Preparing your journey</p>
            <div className="mt-14 h-px w-48 max-w-full overflow-hidden bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent transition-[width] duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 font-label text-[10px] uppercase tracking-widest text-[#E8E5DF]/35">{progress}%</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {ready ? children : null}
    </>
  );
}
