export const navListItems = ['Our Company', 'locations', 'Contact'];
import logoSrcDark from  '/public/assets/shared/desktop/logo-dark.png';
import logoSrcLight from  '/public/assets/shared/desktop/logo-light.png';
import bgPatternImageSmall from  '/public/assets/shared/desktop/bg-pattern-three-circles.svg';
import bgPatternImageLarge from  '/public/assets/shared/desktop/bg-pattern-call-to-action.svg';
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
