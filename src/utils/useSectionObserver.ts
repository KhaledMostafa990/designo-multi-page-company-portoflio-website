import { useEffect } from 'react';
import { scrollIntoView } from './scrollIntoView';

export function useNavSectionObserver(navList: string[]) {
  useEffect(() => {
    const observer = Observer();
    
    navList.forEach((item: HTMLElement | any) => {
      const sections = document.querySelectorAll(`[data-section="${item}"]`);

      sections.forEach((section) => {
        const linkToSection = document.querySelector(
          `a[href="#${section.getAttribute('data-section')}"]`
        );
        

        linkToSection?.addEventListener('click', (e) => {
          e.preventDefault();
          scrollIntoView(section, 'start');
        });

        observer.observe(section);
      });
    });
  }, [navList]);
}


function Observer() {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        toggleActiveSection(entry);
      });
    },
    { threshold: [0.35] }
  );
}

function toggleActiveSection(entry: any) {
  // toggle in/out view active
  const linkToSection = document.querySelector(
    `a[href="#${entry.target.getAttribute('data-section')}"]`
  );

  if (entry.isIntersecting) {
    linkToSection?.classList.add('active');
  } else if (!entry.isIntersecting) {
    linkToSection?.classList.remove('active');
  }
}
