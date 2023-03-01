import Image from "next/image";

interface StoryDataProps {
  heading: string;
  description1: string;
  description2: string;
  imageDesk: any;
}

export function AboutStorySection({
  data,
  bgCirlceSmall,
  bgPatternImageLarge
}: { data: StoryDataProps, bgCirlceSmall: any, bgPatternImageLarge: any }) {
  return (
    <>
      {/* Main image */}
      <picture className="relative z-10 w-full h-fit xl:w-fit xl:h-full">
        <Image
          className="w-full h-auto
          md:rounded-t-xl xl:rounded-t-none xl:rounded-l-xl xl:w-[476px]"
          src={data.imageDesk}
          priority
          width={350}
          height={350}
          alt="A beautiful background circle"
        />
      </picture>

      <div
        className="h-[545px] bg-primary-default/10 relative overflow-hidden
        md:h-fit md:py-16 md:rounded-b-xl 
        xl:rounded-b-none xl:rounded-r-xl xl:h-full xl:flex-1"
      >
        {/* Background image */}
        <picture className="absolute top-[-40%] right-[0%] w-fit h-auto">
          <source media="(max-width: 767px)" srcSet={bgCirlceSmall} />
          <source media="(min-width: 768px)" srcSet={bgPatternImageLarge} />
          {/* <Image
            className="hidden md:block max-w-[292px] max-h-[292px]"
            src={bgPatternImageLarge} 
            priority
            alt="A beautiful background circle"
          /> */}

          <Image
            className="max-w-[292px] max-h-[292px] md:hidden"
            src={bgCirlceSmall}
            priority
            alt="A beautiful background circle"
          />
        </picture>


        {/* Content */}
        <div
          className='text-black h-full flex flex-col justify-center items-center gap-8 px-4 text-center   xl:text-start xl:items-start xl:pl-20'
        >
          <h2 className='text-primary-default text-2xl md:text-4xl'>{data.heading}</h2>
          <p className='max-w-[355px] md:max-w-xl  xl:max-w-lg'>{data.description1}</p>
          <p className='max-w-[355px] md:max-w-xl  xl:max-w-lg'>{data.description2}</p>
        </div>
      </div></>
  );
}
