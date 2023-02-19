import { useEffect, useState } from 'react';

export function useViewportOnResize() {
  const [isMobile, setMobile] = useState(false);
  const [isDesktop, setDesktop] = useState(false);
  const [isTablet, setTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
      setDesktop(false);
      setTablet(false);
    } else if (window.innerWidth <= 1024) {
      setMobile(false);
      setDesktop(false);
      setTablet(true);
    } else {
      setMobile(false);
      setDesktop(true);
      setTablet(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isDesktop, isTablet };
}
