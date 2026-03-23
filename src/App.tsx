import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { BackButton } from './components/BackButton';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import SafariToursPage from './pages/SafariToursPage';
import ExperiencesPage from './pages/ExperiencesPage';
import LodgesPage from './pages/LodgesPage';
import ConservationPage from './pages/ConservationPage';
import TravelInfoPage from './pages/TravelInfoPage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';
import { PATHS } from './routes/paths';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A110D] font-sans">
      <ScrollToTop />
      <NavigationBar />
      <BackButton />
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
      <Footer />
    </div>
  );
}
