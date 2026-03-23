import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PATHS } from '../routes/paths';

function DesktopNavLink({
  to,
  end,
  lightNav,
  children,
}: {
  to: string;
  end?: boolean;
  lightNav: boolean;
  children: React.ReactNode;
}) {
  return (
    <NavLink to={to} end={end} className="group relative shrink-0 px-2 py-2 xl:px-3">
      {({ isActive }) => (
        <>
          <span
            className={[
              'whitespace-nowrap font-label text-[11px] uppercase tracking-[0.22em] transition-colors',
              lightNav
                ? isActive
                  ? 'text-stone-900'
                  : 'text-stone-500 group-hover:text-stone-900'
                : isActive
                  ? 'text-[#E8E5DF]'
                  : 'text-[#E8E5DF]/80 group-hover:text-[#E8E5DF]',
            ].join(' ')}
          >
            {children}
          </span>
          <span
            className={[
              'absolute bottom-1 left-2 right-2 h-px origin-left transition-transform duration-300 ease-out xl:left-3 xl:right-3',
              lightNav ? 'bg-stone-800' : 'bg-[#D4AF37]/90',
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
            ].join(' ')}
            aria-hidden
          />
        </>
      )}
    </NavLink>
  );
}

function MobileNavLink({
  to,
  end,
  lightNav,
  onNavigate,
  children,
}: {
  to: string;
  end?: boolean;
  lightNav: boolean;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'block border-b py-4 font-label text-[12px] uppercase tracking-[0.22em] transition-colors',
          lightNav
            ? isActive
              ? 'border-stone-200 text-stone-900'
              : 'border-stone-100 text-stone-600 hover:text-stone-900'
            : isActive
              ? 'border-white/15 text-[#E8E5DF]'
              : 'border-white/10 text-[#E8E5DF]/85 hover:text-[#E8E5DF]',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  );
}

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === PATHS.home;
  const lightNav = !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navShell =
    lightNav || (isHome && scrolled)
      ? lightNav
        ? 'border-stone-200/90 bg-white/[0.93] shadow-[0_4px_24px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/50 backdrop-blur-xl'
        : 'border-white/10 bg-[#0A110D]/88 shadow-[0_12px_48px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.06] backdrop-blur-xl'
      : 'border-transparent bg-transparent shadow-none ring-0';

  const logoClass = lightNav
    ? 'font-display text-xl tracking-[0.02em] text-stone-900'
    : 'font-serif text-xl tracking-tight text-[#E8E5DF]';

  const bookNav = ({ isActive }: { isActive: boolean }) => {
    if (lightNav) {
      return `relative shrink-0 overflow-hidden rounded-sm px-5 py-2.5 font-label text-[11px] font-medium uppercase tracking-[0.28em] transition-all duration-300 ${
        isActive
          ? 'bg-stone-900 text-white ring-2 ring-stone-300/80'
          : 'bg-stone-900 text-white shadow-[0_2px_12px_rgba(28,25,23,0.25)] hover:bg-stone-800 hover:shadow-md'
      }`;
    }
    return `shrink-0 rounded-sm px-5 py-2.5 font-label text-[11px] font-medium uppercase tracking-[0.28em] transition-all duration-300 ${
      isActive ? 'bg-[#E8E5DF] text-[#0A110D] ring-2 ring-[#D4AF37]/50' : 'bg-[#D4AF37] text-[#0A110D] shadow-[0_2px_16px_rgba(0,0,0,0.35)] hover:bg-[#E8E5DF]'
    }`;
  };

  const panelBg = lightNav ? 'bg-[#F5F3EE]' : 'bg-[#0A110D]';
  const panelBorder = lightNav ? 'border-stone-200/80' : 'border-white/10';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.8 }}
      className="fixed inset-x-0 top-0 z-[100]"
    >
      <div
        className={[
          'pointer-events-none absolute inset-x-0 top-0 z-[1] h-[2px] bg-gradient-to-r',
          lightNav || (isHome && scrolled)
            ? 'from-transparent via-amber-700/35 to-transparent'
            : isHome && !scrolled
              ? 'from-transparent via-white/25 to-transparent'
              : 'from-transparent via-amber-600/30 to-transparent',
        ].join(' ')}
        aria-hidden
      />

      <motion.nav
        layout
        className={[
          'relative mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-3 sm:px-4 md:px-6 xl:px-10',
          'min-h-[4.25rem]',
          'border-b transition-[border-color,background-color,box-shadow] duration-300',
          navShell,
        ].join(' ')}
        aria-label="Primary"
      >
        <motion.div
          className="flex min-w-0 shrink-0 items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className={lightNav ? 'h-6 w-6 text-stone-900' : 'h-6 w-6 text-[#E8E5DF]'} strokeWidth={2} />
            ) : (
              <Menu className={lightNav ? 'h-6 w-6 text-stone-900' : 'h-6 w-6 text-[#E8E5DF]'} strokeWidth={2} />
            )}
          </button>
          <Link to={PATHS.home} className="group flex min-w-0 flex-col gap-0.5">
            <span className={logoClass}>Wild Safari</span>
            {lightNav ? (
              <span className="font-label text-[9px] uppercase tracking-[0.35em] text-stone-400">Est. journeys</span>
            ) : (
              <span className="font-label text-[9px] uppercase tracking-[0.35em] text-[#E8E5DF]/45">Est. journeys</span>
            )}
          </Link>
        </motion.div>

        <div className="hidden min-w-0 flex-1 items-center justify-center px-0.5 xl:flex">
          <ul className="flex max-w-full flex-nowrap items-center justify-center gap-0 py-1 2xl:gap-0.5">
            {NAV_LINKS.map((item, i) => (
              <motion.li
                key={item.to}
                className="shrink-0"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
              >
                <DesktopNavLink to={item.to} end={true} lightNav={lightNav}>
                  {item.label}
                </DesktopNavLink>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
            <NavLink to={PATHS.book} className={bookNav}>
              <span className="xl:hidden">Book</span>
              <span className="hidden xl:inline">Book expedition</span>
            </NavLink>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              key="nav-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm xl:hidden"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="nav-panel"
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 34 }}
              className={`fixed inset-y-0 right-0 z-[120] flex w-[min(100vw,20rem)] flex-col border-l ${panelBorder} ${panelBg} shadow-2xl xl:hidden`}
            >
              <div className={`flex items-center justify-between border-b px-4 py-4 ${panelBorder}`}>
                <span className={`font-label text-[10px] uppercase tracking-[0.28em] ${lightNav ? 'text-stone-500' : 'text-[#E8E5DF]/60'}`}>
                  Menu
                </span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-sm"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className={lightNav ? 'h-6 w-6 text-stone-900' : 'h-6 w-6 text-[#E8E5DF]'} strokeWidth={2} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-4 pb-8 pt-2" aria-label="Mobile">
                <ul className="list-none">
                  {NAV_LINKS.map((item) => (
                    <li key={item.to}>
                      <MobileNavLink to={item.to} end={true} lightNav={lightNav} onNavigate={() => setMobileOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
