import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { PATHS } from '../routes/paths';

export default function Footer() {
  return (
    <footer className="relative z-20 flex min-h-screen flex-col justify-center overflow-x-hidden bg-white p-6 font-page text-stone-900 sm:p-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex min-h-[400px] min-w-0 flex-col rounded-2xl border border-gray-200 p-8">
          <h3 className="mb-auto text-sm font-bold tracking-wider">DESTINATIONS</h3>
          <ul className="space-y-4 text-[15px] font-medium">
            <li>
              <Link to={PATHS.destinations} className="transition-opacity hover:opacity-70">
                All
              </Link>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Serengeti
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Maasai Mara
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Kruger National Park
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Okavango Delta
              </a>
            </li>
          </ul>
        </div>

        <div className="flex min-h-[400px] min-w-0 flex-col rounded-2xl border border-gray-200 p-8">
          <h3 className="mb-8 text-sm font-bold tracking-wider">EXPERIENCES</h3>
          <ul className="space-y-4 text-[15px] font-medium">
            <li>
              <Link to={PATHS.experiences} className="transition-opacity hover:opacity-70">
                All
              </Link>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Game Drives
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Walking Safaris
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Hot Air Balloon
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Photography Tours
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Cultural Visits
              </a>
            </li>
            <li>
              <Link to={PATHS.conservation} className="transition-opacity hover:opacity-70">
                Conservation
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex min-h-[400px] min-w-0 flex-col rounded-2xl border border-gray-200 p-8">
          <h3 className="mb-8 text-sm font-bold tracking-wider">COMPANY</h3>
          <ul className="space-y-4 text-[15px] font-medium">
            <li>
              <Link to={PATHS.home} className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70">
                Home
              </Link>
            </li>
            <li>
              <Link to={PATHS.travelInfo} className="transition-opacity hover:opacity-70">
                FAQs
              </Link>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Booking Terms
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Cookie Policy
              </a>
            </li>
            <li>
              <Link to={PATHS.contact} className="transition-opacity hover:opacity-70">
                Contact
              </Link>
            </li>
            <li>
              <Link to={PATHS.book} className="transition-opacity hover:opacity-70">
                Plan Your Trip
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex min-h-[400px] min-w-0 flex-col gap-6">
          <div className="grid flex-1 grid-cols-2 gap-6">
            <a
              href="#"
              className="flex h-full items-center justify-center rounded-2xl border border-gray-200 transition-colors hover:bg-gray-50"
            >
              <Instagram className="h-10 w-10" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="flex h-full items-center justify-center rounded-2xl border border-gray-200 transition-colors hover:bg-gray-50"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
            <div className="grid flex-1 grid-cols-3 gap-6">
            <a
              href="#"
              className="flex h-full items-center justify-center rounded-2xl border border-gray-200 transition-colors hover:bg-gray-50"
            >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-full items-center justify-center rounded-2xl border border-gray-200 transition-colors hover:bg-gray-50"
            >
                <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-full items-center justify-center rounded-2xl border border-gray-200 transition-colors hover:bg-gray-50"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
