export function menuClickHandler(
  menuButton: HTMLButtonElement | null,
  menuRef: HTMLElement | null,
  logoRef: HTMLElement | null,
  overlayRef: HTMLElement | null,
  activeClass: string
) {
  return () => {
    if (menuButton) {
      menuButton.ariaExpanded =
        menuButton?.ariaExpanded === 'false' ? 'true' : 'false';
      menuButton.classList.toggle(activeClass);
    }
    logoRef?.firstElementChild?.classList.toggle(activeClass);
    menuRef?.classList.toggle(activeClass);
    overlayRef?.classList.toggle(activeClass);
  };
}
