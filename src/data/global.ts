import logoSrcDark from  '/public/assets/shared/desktop/logo-dark.png';
import logoSrcLight from  '/public/assets/shared/desktop/logo-light.png';
import bgPatternImageSmall from  '/public/assets/shared/desktop/bg-pattern-three-circles.svg';
import bgPatternImageLarge from  '/public/assets/shared/desktop/bg-pattern-call-to-action.svg';

export const navListItems = ['Our Company', 'locations', 'Contact'];
export const logoSrc = logoSrcDark;

export const ourLocations = [
  {
    country: 'Canada',
    officeName: 'Designo Central Office',
    fullAddress: '3886 Wellington Street Toronto, Ontario M9C 3J5',
    phone: 'P : +1 253-863-8967',
    email: 'M : contact@designo.co',
  },
  {
    country: 'Australia',
    officeName: 'Designo AU Office',
    fullAddress: '19 Balonne Street New South Wales 2443',
    phone: 'P : (02) 6720 9092',
    email: 'M : contact@designo.au'
    
  },
  {
    country: 'United Kingdom',
    officeName: 'Designo UK Office',
    fullAddress: '13 Colorado Way Rhyd-y-fro SA8 9GA',
    phone: 'P : 078 3115 1400',
    email: 'M : contact@designo.au'
  },
]

export const footerData = {
  orderProject : {
    heading:'Let’s talk about your project',
    description:'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.',
    buttonLabel:'Get in touch',
    bgPatternImageSmall,
    bgPatternImageLarge,
  },
  logoSrc:logoSrcLight,
  navListItems,
  mainLocation: ourLocations[0],
  socialMediaIcons:[
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
}

export interface ProjectsDataProps {
  id: string;
  heading: string;
  introDescription: string;
  imageMob: any;
  imageTab: any;
  imageDesk: any;
  imageDeskSmall?: any;  
  projects: {
    title: string;
    description: string;
    image: any;
    imageAlt: string;
  }[];
}

// Projects Mock data example

export const projectsData:ProjectsDataProps[] = [
  {
    id: 'web-design',
    heading: 'Web Design',
    introDescription: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
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
      ]    
  },
  {
    id: 'app-design',
    heading: 'App Design',
    introDescription: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
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
    ]
  },
  {
    id: 'graphic-design',
    heading: 'Graphic Design',
    introDescription: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
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
    ]
  },
]
