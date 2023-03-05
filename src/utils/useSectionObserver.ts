import { useEffect } from 'react';

export function useNavSectionObserver(navList: string[]) {
  useEffect(() => {
    const observer = Observer();
    
    navList.forEach((item: HTMLElement | any) => {
      const sections = document.querySelectorAll(`[data-section="${item}"]`);

      sections.forEach((section) => {
        const linkToSection = document.querySelector(
          `a[href="#${section.getAttribute('data-section')}"]`
        );

        if(!linkToSection) {
          section.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
          });
        };

        linkToSection?.addEventListener('click', (e) => {
          e.preventDefault();
          section.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
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
