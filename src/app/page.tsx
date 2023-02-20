import { Projects } from './../features/Projects';
import Hero from "@/features/Hero";
import Values from "@/features/Values";

export default function Home() {
  return (
    <>
      <Hero data={heroData} />
      <Projects data={ProjectHeroData} />
      <Values data={ValuesData} />
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

// Values Mock data example 
const ValuesData = [
  {
    heading: "Passionate",
    description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    imageDesk: "/assets/home/desktop/illustration-passionate.svg",
  },
  {
    heading: "Resourceful",
    description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    imageDesk: "/assets/home/desktop/illustration-resourceful.svg",
  },
  {
    heading: "Friendly",
    description: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imageDesk: "/assets/home/desktop/illustration-friendly.svg",
  },
]



