import Link from 'next/link';
import React from 'react';

type Item = string | { label: string; href: string };

export const NavBar = ({
  navRef,
  navListRef,
  navListItems,
  onLinkClick,
}: {
  navRef: any;
  navListRef: any;
  navListItems: Item[];
  onLinkClick?: () => void;
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
          {navListItems.map((it, index) => {
            const label = typeof it === 'string' ? it : it.label;
            const href =
              typeof it === 'string'
                ? it === 'Our Company'
                  ? '/about'
                  : `/${it.toLowerCase().replace(' ', '-')}`
                : it.href;
            return (
              <li key={index} className={` md:py-0 md:border-none md:mx-5`}>
                <Link
                  href={href}
                  onClick={onLinkClick}
                  className="uppercase block py-4 text-start text-white text-xl hover:underline transition-all duration-200 border-b-4 border-transparent md:py-0 md:text-xs md:text-dark-grey"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
