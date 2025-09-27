import bgCirlceSmall from 'public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from 'public/assets/home/desktop/bg-pattern-hero-home.svg';
import { AboutStorySection } from '@/features/aboutPage/AboutStorySection';

import { aboutData, ourLocations } from '@/data/global';

import { AboutHero } from '@/features/aboutPage/AboutHero';
import { LocationItem } from '@/features/locationsPage/LocationItem';
import { Section } from '@/components/layout';

export const metadata = {
  title: 'About',
};

export default function About() {
  // This route defers to /[locale]/about
  return null;
}
