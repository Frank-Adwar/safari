import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../routes/paths';

/**
 * One step back in browser history on each tap. No button on the home page.
 * If there is no prior history entry (e.g. deep link), goes to the homepage.
 */
export function BackButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === PATHS.home) {
    return null;
  }

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(PATHS.home);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="fixed left-3 top-[calc(4.25rem+0.5rem)] z-[95] inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white/95 px-3 py-2 font-label text-[10px] font-medium uppercase tracking-[0.22em] text-stone-800 shadow-sm backdrop-blur-md transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400 md:left-8"
      aria-label="Go back"
    >
      <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
      Back
    </button>
  );
}

export default BackButton;
