'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { menuClickHandler, useNavSectionObserver, useViewportOnResize } from '@/utils';
import { HamburgerButton, Logo, Overlay } from '@/components/base';
import { NavBar } from '@/components/layout';

export type AuthDialogLabels = {
  signIn: string;
  signUp: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  cancel?: string;
  waiting?: string;
};

export default function Header({
  data,
}: {
  data: {
    navListItems: any;
    logoSrc: any;
  };
}) {
  const { navListItems, logoSrc } = data;

  const headerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const navList = useRef<HTMLElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLElement | null>(null);
  const activeClass = 'active';

  const { isDesktop } = useViewportOnResize();
  const toggleMenu = menuClickHandler(
    menuBtnRef.current,
    navRef.current,
    logoRef.current,
    overlayRef.current,
    activeClass,
  );

  useNavSectionObserver(
    (navListItems as any[]).map((it) => (typeof it === 'string' ? it : it.label)),
  );

  if (isDesktop && navRef?.current?.classList.contains('active')) toggleMenu();

  useEffect(() => {
    if (!isDesktop) {
      navListItems.forEach((item: any) => {
        const text = typeof item === 'string' ? item : item.label;
        const navLink = document.querySelector(`a[href="#${text}"]`);
        if (navLink) {
          navLink.addEventListener('click', () => {
            if (navRef?.current?.classList.contains('active')) toggleMenu();
          });
        }
      });
    }
  }, [isDesktop, navListItems, toggleMenu]);
  return (
    <header className="z-20 xl:fixed xl:w-full xl:h-[93px] xl:bg-background-default">
      <Overlay overlayRef={overlayRef} />

      <div
        ref={headerRef}
        className="container fixed bg-background-default
           transition-all duration-[0.84s] z-20
          xl:left-[50%] xl:translate-x-[-50%]"
      >
        <div className="col-start-2 col-span-10 xl:col-start-0 xl:col-span-12 py-8 flex justify-between items-center transition-all duration-[0.84s]">
          <Link href={'/'}>
            <Logo logoSrc={logoSrc} />
          </Link>

          <NavBar 
            navRef={navRef} 
            navListRef={navList} 
            navListItems={navListItems}
            onLinkClick={() => {
              if (!isDesktop && navRef?.current?.classList.contains('active')) {
                toggleMenu();
              }
            }}
          />

          {/* Auth buttons removed - now handled by TopBar */}

          <HamburgerButton onClick={toggleMenu} menuBtnRef={menuBtnRef} />
        </div>
      </div>
    </header>
  );
}
