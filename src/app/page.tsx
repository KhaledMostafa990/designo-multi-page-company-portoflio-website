import { Projects } from './../features/Projects';
import Hero from "@/features/Hero";


export default function Home() {
  return (
    <>
      <Hero data={heroData} />
      <Projects data={ProjectHeroData} />
    </>
  );
}


// Hero Mock data example 
const heroData = {
  heroHeading: 'Award-winning custom designs and digital branding solutions',
  heroDescription: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
  heroBtnText: 'Learn More',
  heroBgImageDisk: '/assets/home/desktop/bg-pattern-hero-home.svg',
  heroImage: '/assets/home/desktop/image-hero-phone.png',
};

// Project Hero Mock data example

const ProjectHeroData = [
  {
    heading: 'Web Design',
    imageMob: '/assets/home/mobile/image-web-design.jpg',
    imageTab: '/assets/home/tablet/image-web-design.jpg',
    imageDesk: '/assets/home/desktop/image-web-design-large.jpg',
    imageDeskSmall: '/assets/home/desktop/image-web-design-small.jpg',
    imageAlt: 'Web Design',
  },
  {
    heading: 'App Design',
    imageMob: '/assets/home/mobile/image-app-design.jpg',
    imageTab: '/assets/home/tablet/image-app-design.jpg',
    imageDesk: '/assets/home/desktop/image-app-design.jpg',
    imageAlt: 'App Design',
  },
  {
    heading: 'Graphic Design',
    imageMob: '/assets/home/mobile/image-graphic-design.jpg',
    imageTab: '/assets/home/tablet/image-graphic-design.jpg',
    imageDesk: '/assets/home/desktop/image-graphic-design.jpg',
    imageAlt: 'Graphic Design',
  },
]
