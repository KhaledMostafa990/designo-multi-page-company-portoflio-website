// footer data props

import Image from 'next/image';
import Link from 'next/link';
import { LocationInfo, Logo, PrimaryButton } from '@/components/base';
import { Section } from '@/components/layout';

interface FooterData {
  orderProject: {
    heading: string;
    description: string;
    buttonLabel: string;
    bgPatternImageSmall: string;
    bgPatternImageLarge: string;
  };
  logoSrc: any;
  navListItems: string[];
  mainLocation: {
    country: string;
    officeName: string;
    fullAddress: string;
    phone: string;
    email: string;
  };
  socialMediaIcons: {
    iconSrc: string;
    altText: string;
    link: string;
  }[];
  footerCopyright: string;
}

export default function Footer({ data, classes }: { data: FooterData; classes: string }) {
  const { orderProject, logoSrc, navListItems, mainLocation, socialMediaIcons, footerCopyright } =
    data;

  return (
    <footer className={`${classes} `}>
      <Section className="h-fit min-h-fit w-full absolute top-10 left-0 z-10 xl:top-[76px] xl:min-h-[292px]">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-primary-default col-start-2 col-span-10  xl:col-start-0 xl:col-span-12 xl:flex-row">
            {/* backgrounds pattern images */}
            <picture className="absolute top-0 right-0 w-full h-full z-10">
              <Image
                className="absolute bottom-[-15%] right-[-5%] rotate-[270deg]  min-w-[584px] min-h-[584px] md:hidden"
                src={orderProject.bgPatternImageSmall}
                priority
                alt="A beautiful background circle"
              />

              <Image
                className="hidden md:block absolute w-[584px] h-[584px] md:min-w-[876px] md:bottom-[-55%] md:right-0"
                src={orderProject.bgPatternImageLarge}
                priority
                alt="A beautiful background circle"
              />
            </picture>

            <div className="h-[380px] relative z-20 text-white flex flex-col gap-6 items-center justify-center px-2 xl:flex-row xl:h-[292px] xl:max-h-[292px] xl:justify-between xl:gap-10 xl:px-24">
              <div className="flex flex-col items-center  gap-6 xl:items-start ">
                <h3 className="text-3xl max-w-[250px] text-center xl:max-w-sm xl:text-4xl xl:text-start">
                  {orderProject.heading}
                </h3>
                <p className="max-w-md text-center xl:text-start">{orderProject.description}</p>
              </div>
              <div>
                <PrimaryButton onLight={false}>{orderProject.buttonLabel}</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-black">
        <div className=" container relative pb-16 pt-60 xl:pt-32">
          <div className="col-start-2 col-span-10  flex flex-col gap-12 xl:col-start-0 xl:col-span-12">
            <div
              className="flex flex-col items-center gap-8 xl:gap-12 text-white
              relative md:flex-row md:justify-between pb-12"
            >
              <Logo logoSrc={logoSrc} />
              <hr
                className="w-full border-[1.5px]   border-dark-grey opacity-50
              md:absolute bottom-0"
              />
              <ul className="flex flex-col items-center gap-8 xl:gap-12 md:flex-row">
                {navListItems.map((item, index) => {
                  const itemLink =
                    item === 'Our Company' ? '/about' : `/${item.toLowerCase().replace(' ', '-')}`;
                  return (
                    <li key={index}>
                      <Link
                        href={itemLink}
                        className={`text-xs text-center tracking-[2px] uppercase`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-8 md:gap-0 md:justify-between md:flex-row">
              <div
                className="flex flex-col items-center gap-8 lg:flex-1 md:gap-0 
                md:flex-row md:justify-between"
              >
                <LocationInfo location={mainLocation} onFooter />
              </div>

              <div className="lg:flex-1 h-full flex flex-col items-center gap-6 lg:justify-end lg:items-end">
                <ul className="flex flex-row gap-6">
                  {socialMediaIcons.map((icon, index) => (
                    <li key={index}>
                      <Link href={icon.link}>
                        <Image
                          src={icon.iconSrc}
                          width={24}
                          height={24}
                          alt={icon.altText}
                          priority
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-1 flex-col items-center justify-center text-center gap-8 max-w-[225px]">
                  <p className="text-xs leading-6 tracking-tight text-light-grey">
                    {footerCopyright}
                    <span className="block text-primary-default md:inline">
                      <a href="https://github.com/KhaledMostafa990/"> Khaled Farghly.</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
