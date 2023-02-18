import Hero from "@/features/Hero";

export default function Home() {
  return (
    <>
      <Hero data={heroData} />
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