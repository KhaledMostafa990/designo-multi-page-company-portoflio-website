import { Section } from "@/components/layout";
import Image from "next/image";


interface ValueProps {
  heading: string;
  description: string;
  imageDesk: string;
}

export default function Values({ data }: { data: ValueProps[] }) {
  return (
    <Section className="w-full">
      <div className="container">
        <div className="col-start-2 col-span-10 xl:col-start-0 flex flex-col gap-5 xl:col-span-12 xl:flex-row">

          <div className="relative flex flex-col items-center w-full h-auto gap-10
            xl:flex-row">
            {data.map((value, index) => (
              <div
                key={index}
                className="relative text-black  flex flex-col items-center w-full h-auto gap-8 
                md:flex-row xl:flex-col"
              >
                <figure className="relative rounded-full bg-gradient-to-tr from-light-gray to-white">
                  <Image
                    className="min-w-[202px] min-h-[202px]"
                    src={value.imageDesk}
                    width={202}
                    height={202}
                    alt={value.heading}
                    priority
                  />
                </figure>

                <div className="flex flex-col items-center gap-4 md:items-start xl:items-center xl:gap-8">
                  <h3 className="text-lg tracking-[5px] text-center uppercase md:text-start ">
                    {value.heading}
                  </h3>
                  <p className="text-center md:text-start md:max-w-md xl:text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
