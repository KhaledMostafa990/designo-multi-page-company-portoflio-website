import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton } from "./base";
export function LocationItem({
  location
}: { location: any }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <figure className="relative rounded-full bg-gradient-to-tr from-light-grey to-white">
        <Image className="min-w-[202px] min-h-[202px]" src={location.image} width={202} height={202} alt={location.country} priority />
      </figure>

      <div className="flex flex-col items-center gap-6
                  xl:gap-10">
        <h3 className='text-black text-lg uppercase'>
          {location.country}
        </h3>

        <Link href={`/locations`}>
          <PrimaryButton onLight> see Location</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
