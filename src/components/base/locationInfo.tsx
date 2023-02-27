import React from "react";
export function LocationInfo({ location, onFooter }: { location: any, onFooter?: boolean }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-dark-grey text-center md:text-start font-bold">{location.officeName}</p>
        <p className=" text-dark-grey text-center md:text-start max-w-[200px]">{location.fullAddress}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-dark-grey text-center md:text-start font-bold">
          {onFooter ? (
            'Contact Us' + location.officeName.slice(location.officeName.indexOf(' '))
          ) :
            'Contact'
          }

        </p>
        <p className="text-dark-grey text-center md:text-start">{location.phone}</p>
        <p className="text-dark-grey text-center md:text-start max-w-[200px]">{location.email}</p>
      </div>
    </>
  );
}
