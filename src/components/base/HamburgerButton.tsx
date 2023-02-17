import React from 'react';

export function HamburgerButton({
  onClick,
  menuBtnRef,
}: {
  onClick: any;
  menuBtnRef: any;
}) {
  return (
    <>
      <div className="md:hidden flex items-center z-40">
        <button
          className="custom-hamburger-menu w-[24px] h-[18px] flex gap-[4.5px]"
          onClick={onClick}
          ref={menuBtnRef}
          type="button"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" bg-background-black block w-6 h-[2.9px]" />
          <span className=" bg-background-black block w-6 h-[2.9px]" />
          <span className=" bg-background-black block w-6 h-[2.9px]" />
        </button>
      </div>
    </>
  );
}
