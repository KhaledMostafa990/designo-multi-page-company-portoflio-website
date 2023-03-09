export function scrollIntoView(section: Element, position: ScrollLogicalPosition) {
  section.scrollIntoView({
    block: position,
    behavior: 'smooth',
  });
}