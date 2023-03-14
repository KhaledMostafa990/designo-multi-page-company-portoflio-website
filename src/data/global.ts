import logoSrcDark from 'public/assets/shared/desktop/logo-dark.png';
import logoSrcLight from 'public/assets/shared/desktop/logo-light.png';

import heroBgImageDisk from 'public/assets/home/desktop/bg-pattern-hero-home.svg';
import heroImage from 'public/assets/home/desktop/image-hero-phone.png';

import bgPatternThreeCircle from 'public/assets/shared/desktop/bg-pattern-three-circles.svg';
import bgPatternImageSmall from 'public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from 'public/assets/shared/desktop/bg-pattern-call-to-action.svg';
import bgPatternProjectIntro from 'public/assets/app-design/desktop/bg-pattern-intro-app.svg';

import australiaImage from 'public/assets/shared/desktop/illustration-australia.svg';
import canadaImage from 'public/assets/shared/desktop/illustration-canada.svg';
import ukImage from 'public/assets/shared/desktop/illustration-united-kingdom.svg';

import canadaMapImageTab from 'public/assets/locations/tablet/image-map-canada.png';
import australiaMapImageTab from 'public/assets/locations/tablet/image-map-australia.png';
import ukMapImageTab from 'public/assets/locations/tablet/image-map-uk.png';
import canadaMapImageDesk from 'public/assets/locations/desktop/image-map-canada.png';
import australiaMapImageDesk from 'public/assets/locations/desktop/image-map-australia.png';
import ukMapImageDesk from 'public/assets/locations/desktop/image-map-united-kingdom.png';

export const navListItems = ['Our Company', 'locations', 'Contact'];
export const logoSrc = logoSrcDark;

export const bgPatternOneCircleSmall = bgPatternImageSmall;
export const bgPatternCircleProjectLarge = bgPatternProjectIntro;

// Hero Mock data example
export const heroData = {
  heroHeading: 'Award-winning custom designs and digital branding solutions',
  heroDescription:
    'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
  heroBtnText: 'Learn More',
  heroBgImageDisk,
  heroImage,
};

// Values Mock data example
export const valuesData = [
  {
    heading: 'Passionate',
    description:
      'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    imageDesk: '/assets/home/desktop/illustration-passionate.svg',
  },
  {
    heading: 'Resourceful',
    description:
      'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    imageDesk: '/assets/home/desktop/illustration-resourceful.svg',
  },
  {
    heading: 'Friendly',
    description:
      'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    imageDesk: '/assets/home/desktop/illustration-friendly.svg',
  },
];

// Our Locations Mock data example
export const ourLocations = [
  {
    country: 'Canada',
    officeName: 'Designo Central Office',
    fullAddress: '3886 Wellington Street Toronto, Ontario M9C 3J5',
    phone: 'P : +1 253-863-8967',
    email: 'M : contact@designo.co',
    image: canadaImage,
    mapImageTab: canadaMapImageTab,
    mapImageDesk: canadaMapImageDesk,
  },
  {
    country: 'Australia',
    officeName: 'Designo AU Office',
    fullAddress: '19 Balonne Street New South Wales 2443',
    phone: 'P : (02) 6720 9092',
    email: 'M : contact@designo.au',
    image: australiaImage,
    mapImageTab: australiaMapImageTab,
    mapImageDesk: australiaMapImageDesk,
  },
  {
    country: 'United Kingdom',
    officeName: 'Designo UK Office',
    fullAddress: '13 Colorado Way Rhyd-y-fro SA8 9GA',
    phone: 'P : 078 3115 1400',
    email: 'M : contact@designo.au',
    image: ukImage,
    mapImageTab: ukMapImageTab,
    mapImageDesk: ukMapImageDesk,
  },
];

// Footer Mock data example
export const footerData = {
  orderProject: {
    heading: 'Let’s talk about your project',
    description:
      'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.',
    buttonLabel: 'Get in touch',
    bgPatternImageSmall: bgPatternThreeCircle,
    bgPatternImageLarge,
  },
  logoSrc: logoSrcLight,
  navListItems,
  mainLocation: ourLocations[0],
  socialMediaIcons: [
    {
      iconSrc: 'assets/shared/desktop/icon-facebook.svg',
      altText: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      iconSrc: 'assets/shared/desktop/icon-twitter.svg',
      altText: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      iconSrc: 'assets/shared/desktop/icon-instagram.svg',
      altText: 'instagram',
      link: 'https://www.instagram.com/',
    },
    {
      iconSrc: 'assets/shared/desktop/icon-pinterest.svg',
      altText: 'pinterest',
      link: 'https://www.pinterest.com/',
    },
    {
      iconSrc: 'assets/shared/desktop/icon-youtube.svg',
      altText: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],
  footerCopyright: '© Easybank Template 2023. All Rights Reserved Developed by',
};

// Projects Mock data example
export const projectsData = [
  {
    id: 'web-design',
    heading: 'Web Design',
    introDescription:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    imageMob: '/assets/home/mobile/image-web-design.jpg',
    imageTab: '/assets/home/tablet/image-web-design.jpg',
    imageDesk: '/assets/home/desktop/image-web-design-large.jpg',
    imageDeskSmall: '/assets/home/desktop/image-web-design-small.jpg',
    projects: [
      {
        title: 'Express',
        description: 'A multi-carrier shipping website for ecommerce businesses',
        image: '/assets/web-design/desktop/image-express.jpg',
        imageAlt: 'Express',
      },
      {
        title: 'Transfer',
        description: 'Site for low-cost money transfers and sending money within seconds',
        image: '/assets/web-design/desktop/image-transfer.jpg',
        imageAlt: 'Transfer',
      },
      {
        title: 'Photon',
        description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
        image: '/assets/web-design/desktop/image-photon.jpg',
        imageAlt: 'Photon',
      },
      {
        title: 'Builder',
        description: 'Connects users with local contractors based on their location',
        image: '/assets/web-design/desktop/image-builder.jpg',
        imageAlt: 'Builder',
      },
      {
        title: 'Blogr',
        description: 'Blogr is a platform for creating an online blog or publication',
        image: '/assets/web-design/desktop/image-blogr.jpg',
        imageAlt: 'Blogr',
      },
      {
        title: 'Camp',
        description: 'Get expert training in coding, data, design, and digital marketing',
        image: '/assets/web-design/desktop/image-camp.jpg',
        imageAlt: 'Camp',
      },
    ],
  },
  {
    id: 'app-design',
    heading: 'App Design',
    introDescription:
      'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    imageMob: '/assets/home/mobile/image-app-design.jpg',
    imageTab: '/assets/home/tablet/image-app-design.jpg',
    imageDesk: '/assets/home/desktop/image-app-design.jpg',
    projects: [
      {
        title: 'Airfilter',
        description: 'Solving the problem of poor indoor air quality by filtering the air',
        image: '/assets/app-design/desktop/image-airfilter.jpg',
        imageAlt: 'Airfilter',
      },
      {
        title: 'Eyecam',
        description: 'Product that lets you edit your favorite photos and videos at any time',
        image: '/assets/app-design/desktop/image-eyecam.jpg',
        imageAlt: 'Eyecam',
      },
      {
        title: 'Faceit',
        description: 'Get to meet your favorite internet superstar with the faceit app',
        image: '/assets/app-design/desktop/image-faceit.jpg',
        imageAlt: 'Faceit',
      },
      {
        title: 'Todo',
        description: 'A todo app that features cloud sync with light and dark mode',
        image: '/assets/app-design/desktop/image-todo.jpg',
        imageAlt: 'Todo',
      },
      {
        title: 'Loopstudios',
        description: 'A VR experience app made for Loopstudios',
        image: '/assets/app-design/desktop/image-loopstudios.jpg',
        imageAlt: 'Loopstudios',
      },
    ],
  },
  {
    id: 'graphic-design',
    heading: 'Graphic Design',
    introDescription:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    imageMob: '/assets/home/mobile/image-graphic-design.jpg',
    imageTab: '/assets/home/tablet/image-graphic-design.jpg',
    imageDesk: '/assets/home/desktop/image-graphic-design.jpg',
    projects: [
      {
        title: 'Tim Brown',
        description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
        image: '/assets/graphic-design/desktop/image-change.jpg',
        imageAlt: 'Tim Brown',
      },
      {
        title: 'Boxed Water',
        description: 'A simple packaging concept made for Boxed Water',
        image: '/assets/graphic-design/desktop/image-boxed-water.jpg',
        imageAlt: 'Boxed Water',
      },
      {
        title: 'Science!',
        description: 'A poster made in collaboration with the Federal Art Project',
        image: '/assets/graphic-design/desktop/image-science.jpg',
        imageAlt: 'Science!',
      },
    ],
  },
];

// About Mock data example
export const aboutData = {
  heroData: {
    heading: 'About Us',
    description:
      'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
    imageMob: '/assets/about/mobile/image-about-hero.jpg',
    imageTab: '/assets/about/tablet/image-about-hero.jpg',
    imageDesk: '/assets/about/desktop/image-about-hero.jpg',
    bgSmall: bgPatternOneCircleSmall,
    bgLarge: heroBgImageDisk,
  },
  ourTalent: {
    heading: 'World-class talent',
    description1:
      'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
    description2:
      'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
    imageMob: '/assets/about/mobile/image-world-class-talent.jpg',
    imageTab: '/assets/about/tablet/image-world-class-talent.jpg',
    imageDesk: '/assets/about/desktop/image-world-class-talent.jpg',
  },
  ourDeal: {
    heading: 'The real deal',
    description1:
      'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
    description2:
      'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    imageMob: '/assets/about/mobile/image-real-deal.jpg',
    imageTab: '/assets/about/tablet/image-real-deal.jpg',
    imageDesk: '/assets/about/desktop/image-real-deal.jpg',
  },
};

// Contact Mock data example
export const contactData = {
  heading: 'Contact Us',
  description:
    'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
  formInputs: {
    name: 'Name',
    email: 'Email Address',
    phone: 'Phone',
    message: 'Message',
    button: 'Submit',
  },
  bgLarge: heroBgImageDisk,
  bgSmall: bgPatternImageSmall,
};
