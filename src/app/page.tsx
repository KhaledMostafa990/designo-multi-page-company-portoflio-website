import { Projects } from './../features/Projects';
import Hero from "@/features/Hero";
import Values from "@/features/Values";
import heroBgImageDisk from '/public/assets/home/desktop/bg-pattern-hero-home.svg';
import heroImage from '/public/assets/home/desktop/image-hero-phone.png';
import { projectsData } from '@/data/global';

export default function Home() {

  return (
    <>
      <Hero data={heroData} />
      <Projects data={projectsData} />
      <Values data={ValuesData} />
    </>
  );
}

// Hero Mock data example 
const heroData = {
  heroHeading: 'Award-winning custom designs and digital branding solutions',
  heroDescription: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
  heroBtnText: 'Learn More',
  heroBgImageDisk,
  heroImage,
};


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



