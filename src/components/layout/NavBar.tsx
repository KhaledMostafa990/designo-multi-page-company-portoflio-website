import React from 'react';

export const NavBar = ({
  navRef,
  navListRef,
  navListItems,
}: {
  navRef: any;
  navListRef: any;
  navListItems: string[];
}) => {
  return (
    <>
      {/* Navigation items */}
      <nav
        ref={navRef}
        className="h-fit w-full
                absolute top-[50%] left-[0%] translate-y-[-150%]
                [&.active]:translate-y-[19%] translate-x-[-0%]
                transition-all duration-500 [&.active]:block
                [&.active]:bg-background-black md:min-w-fit
                md:static md:h-fit md:w-fit md:translate-x-0 md:translate-y-0"
      >
        <ul ref={navListRef} className="flex flex-col px-6 py-8 md:p-0 md:flex-row">
          {navListItems.map((item, index) => {

            return (
              <li
                key={index}
                className={` md:py-0 md:border-none md:mx-5`}
              >
                <a
                  href={`#${item}`}
                  className="uppercase block py-4 text-start text-white text-xl hover:underline transition-all duration-200 border-b-4 border-transparent md:py-0 md:text-xs md:text-dark-gray"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
