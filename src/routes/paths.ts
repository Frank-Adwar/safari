export const PATHS = {
  home: '/',
  destinations: '/destinations',
  safariTours: '/safari-tours',
  experiences: '/experiences',
  lodges: '/lodges',
  conservation: '/conservation',
  travelInfo: '/travel-info',
  contact: '/contact',
  book: '/book',
} as const;

export const NAV_LINKS = [
  { label: 'Home', to: PATHS.home },
  { label: 'Destinations', to: PATHS.destinations },
  { label: 'Safari Tours', to: PATHS.safariTours },
  { label: 'Experiences', to: PATHS.experiences },
  { label: 'Lodges & Camps', to: PATHS.lodges },
  { label: 'Conservation', to: PATHS.conservation },
  { label: 'Travel Info', to: PATHS.travelInfo },
  { label: 'Contact', to: PATHS.contact },
] as const;
