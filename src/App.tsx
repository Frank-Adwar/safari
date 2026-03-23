import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { BackButton } from './components/BackButton';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { PATHS } from './routes/paths';

const HomePage = lazy(() => import('./pages/HomePage'));
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'));
const SafariToursPage = lazy(() => import('./pages/SafariToursPage'));
const ExperiencesPage = lazy(() => import('./pages/ExperiencesPage'));
const LodgesPage = lazy(() => import('./pages/LodgesPage'));
const ConservationPage = lazy(() => import('./pages/ConservationPage'));
const TravelInfoPage = lazy(() => import('./pages/TravelInfoPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookPage = lazy(() => import('./pages/BookPage'));

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-[#0A110D] px-4">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8E5DF]/50">Loading…</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A110D] font-sans">
      <ScrollToTop />
      <NavigationBar />
      <BackButton />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path={PATHS.home} element={<HomePage />} />
          <Route path={PATHS.destinations} element={<DestinationsPage />} />
          <Route path={PATHS.safariTours} element={<SafariToursPage />} />
          <Route path={PATHS.experiences} element={<ExperiencesPage />} />
          <Route path={PATHS.lodges} element={<LodgesPage />} />
          <Route path={PATHS.conservation} element={<ConservationPage />} />
          <Route path={PATHS.travelInfo} element={<TravelInfoPage />} />
          <Route path={PATHS.contact} element={<ContactPage />} />
          <Route path={PATHS.book} element={<BookPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
