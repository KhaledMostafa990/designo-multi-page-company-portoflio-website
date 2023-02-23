// footer data props

import { Logo, PrimaryButton } from "@/components/base";
import { Section } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

interface FooterData {
  orderProject: {
    heading: string;
    description: string;
    buttonLabel: string;
    bgPatternImageSmall: string;
    bgPatternImageLarge: string;
  },
  logoSrc: any,
  navListItems: string[],
  mainLocation: {
    country: string;
    officeName: string;
    fullAddress: string;
    phone: string;
    email: string;
  },
  socialMediaIcons: {
    iconSrc: string;
    altText: string;
    link: string;
  }[],
}


export default function Footer({ data, classes }: { data: FooterData, classes: string }) {
  const { orderProject, logoSrc, navListItems, mainLocation, socialMediaIcons } = data;

  return (
    <footer className={`${classes} `}>

      <Section className="min-h-[450px] max-h-[450px] w-full absolute top-10 left-0 z-10">

        <div className="container">
          <div className="bg-primary-default rounded-2xl relative overflow-hidden col-start-2 col-span-10  xl:col-start-0 xl:col-span-12 xl:flex-row">

            {/* backgrounds pattern images */}
            <picture className="absolute top-0 left-0 w-full h-full z-10">
              <source media="(max-width: 767px)" srcSet={orderProject.bgPatternImageSmall} />
              <source media="(min-width: 768px)" srcSet={orderProject.bgPatternImageLarge} />
              <Image
                className="absolute bottom-[-15%] right-[-5%] rotate-[270deg] w-[584px] h-[584px] min-w-[584px] min-h-[584px] md:min-w-[876px] md:bottom-[-30%] md:rotate-0"
                src={orderProject.bgPatternImageSmall}
                width={876}
                height={584}
                priority
                alt="A beautiful background circle" />
            </picture>

            <div className="relative z-20 text-white flex flex-col gap-6 items-center  py-16 px-2 xl:flex-row xl:justify-between xl:gap-10 xl:px-24">
              <div className="flex flex-col items-center  gap-6 xl:gap-10 xl:items-start ">
                <h3 className="text-3xl max-w-[250px] text-center xl:max-w-sm xl:text-4xl xl:text-start">
                  {orderProject.heading}
                </h3>
                <p className="max-w-md text-center xl:text-start">{orderProject.description}</p>
              </div>
              <div>
                <PrimaryButton onLight={false} classes="">
                  {orderProject.buttonLabel}
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

      </Section>

      <Section className="bg-black">
        <div className=" container relative pb-16 pt-60">
          <div className="col-start-2 col-span-10  flex flex-col gap-12 xl:col-start-0 xl:col-span-12">

            <div className="flex flex-col items-center gap-8 xl:gap-12 text-white
              relative md:flex-row md:justify-between pb-12">
              <Logo logoSrc={logoSrc} />
              <hr className="w-full border-[0.1px]   border-dark-grey opacity-10
              md:absolute bottom-0" />
              <ul className="flex flex-col items-center gap-8 xl:gap-12 md:flex-row">
                {navListItems.map((item, index) => (
                  <li key={index}>
                    <Link href={`#${item}`}
                      className={`text-xs text-center tracking-[2px] uppercase`} >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-8 md:gap-0 md:justify-between md:flex-row">

              <div
                className="flex flex-col items-center gap-8 lg:flex-1 md:gap-0 
                md:flex-row md:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-dark-grey text-center md:text-start font-bold">{mainLocation.officeName}</p>
                  <p className=" text-dark-grey text-center md:text-start max-w-[200px]">{mainLocation.fullAddress}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-dark-grey text-center md:text-start font-bold">
                    Contact Us {` (${mainLocation.officeName.slice(mainLocation.officeName.indexOf(' '))}) `}
                  </p>
                  <p className="text-dark-grey text-center md:text-start">{mainLocation.phone}</p>
                  <p className="text-dark-grey text-center md:text-start max-w-[200px]">{mainLocation.email}</p>
                </div>
              </div>

              <div className="lg:flex-1 h-full flex justify-end items-end">
                <ul className="flex flex-row gap-5 xl:gap-10">
                  {socialMediaIcons.map((icon, index) => (
                    <li key={index}>
                      <Link href={icon.link}>
                        <Image src={icon.iconSrc} width={24} height={24} alt={icon.altText} priority />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

      </Section>
    </footer>
  );
}



















