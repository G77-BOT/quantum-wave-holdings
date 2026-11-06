/**
 * Single source of truth for site-wide content.
 *
 * Every surface that names the company, its portfolio or its offices reads from
 * here instead of repeating literals (previously duplicated across
 * `app/page.tsx`, `app/portfolio/page.tsx`, `components/layout/Header.tsx` and
 * `components/layout/Footer.tsx`).
 *
 * Figures here are deliberately structural (counts, founding year) rather than
 * financial: AUM/revenue must come from the content owner, not from this file.
 */

export const site = {
  name: 'Quantum Wave Holdings',
  shortName: 'QWH',
  url: 'https://quantumwaveholdings.com',
  tagline: 'Corporate Excellence',
  description:
    'Quantum Wave Holdings is a holding company that builds, acquires, and grows innovative companies across multiple industries.',
  email: 'contact@quantumwaveholdings.com',
  phone: '+1 (555) 123-4567',
  phoneHref: 'tel:+15551234567',
  addressLines: ['Innovation District', 'Business Center, Global Operations'],
  founded: 2024,
  founders: 'Founded by Mohamud Abdiaziz Mohamed • VP Joseph Jackson',
  social: {
    linkedin: '#',
    twitter: '#',
  },
} as const;

export type SiteStat = {
  value: string;
  label: string;
};

/** Structural metrics only — no financial claims are made here. */
export const siteStats: SiteStat[] = [
  { value: '4', label: 'Portfolio Companies' },
  { value: '4', label: 'Sectors' },
  { value: String(site.founded), label: 'Founded' },
];

export type SiteOffice = {
  city: string;
  label: string;
  lat: number;
  lng: number;
  color: string;
};

export const siteOffices: SiteOffice[] = [
  { city: 'New York', label: 'New York HQ', lat: 40.7128, lng: -74.006, color: '#0ea5e9' },
  { city: 'London', label: 'London Office', lat: 51.5074, lng: -0.1278, color: '#6366f1' },
  { city: 'Tokyo', label: 'Tokyo Office', lat: 35.6762, lng: 139.6503, color: '#22d3ee' },
  { city: 'Sydney', label: 'Sydney Office', lat: -33.8688, lng: 151.2093, color: '#a78bfa' },
];

export type PortfolioCompany = {
  slug: string;
  name: string;
  initials: string;
  sector: string;
  summary: string;
  ownership: string;
  growth: string;
  /** Literal Tailwind classes so they stay statically discoverable. */
  gradient: string;
  accentText: string;
  href: string;
  externalUrl?: string;
};

export const siteCompanies: PortfolioCompany[] = [
  {
    slug: 'comprena-market',
    name: 'Comprena Market',
    initials: 'CM',
    sector: 'E-Commerce Platform',
    summary:
      'B2B/B2C e-commerce platform providing seamless buying and selling experiences with advanced analytics and payment solutions.',
    ownership: '100%',
    growth: '+150%',
    gradient: 'from-blue-600 to-blue-700',
    accentText: 'text-blue-600 dark:text-blue-400',
    href: '/companies/comprena-market',
    externalUrl: 'https://comprena-market.xyz',
  },
  {
    slug: 'verticalo-streaming',
    name: 'Verticalo Streaming',
    initials: 'VS',
    sector: 'Streaming Platform',
    summary:
      'Vertical streaming platform for short-form drama series and more, delivering engaging content experiences.',
    ownership: '25%',
    growth: '+150%',
    gradient: 'from-purple-600 to-purple-700',
    accentText: 'text-purple-600 dark:text-purple-400',
    href: '/companies/verticalo-streaming',
    externalUrl: 'https://vertical-streaming-platform.vercel.app',
  },
  {
    slug: 'zippy-toons',
    name: 'Zippy Toons',
    initials: 'ZT',
    sector: "Children's Content",
    summary:
      'Animated children’s content studio producing original series and characters for global streaming audiences.',
    ownership: '40%',
    growth: '+180%',
    gradient: 'from-rose-500 to-pink-600',
    accentText: 'text-rose-600 dark:text-rose-400',
    href: '/companies/zippy-toons',
    externalUrl: 'https://zippy-toons-fun.netlify.app/',
  },
  {
    slug: 'future-ventures',
    name: 'Future Ventures',
    initials: 'FV',
    sector: 'AI / ML',
    summary:
      'Applied AI venture building automation and machine-learning tooling for portfolio and partner companies.',
    ownership: '15%',
    growth: '+120%',
    gradient: 'from-emerald-600 to-teal-700',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    href: '/companies/future-ventures',
  },
];

/** Footer/nav link shape derived from the same company list. */
export const portfolioLinks = siteCompanies.map((company) => ({
  name: company.name,
  href: company.externalUrl ?? company.href,
  external: Boolean(company.externalUrl),
}));

export const primaryRoutes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/leadership', label: 'Leadership' },
  { path: '/investor-relations', label: 'Investors' },
  { path: '/careers', label: 'Careers' },
  { path: '/news', label: 'News' },
  { path: '/contact', label: 'Contact' },
];
