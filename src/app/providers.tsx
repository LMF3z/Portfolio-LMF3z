'use client';

import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  useLayoutEffect(() => {
    if (pathName === '/') {
      document.body.classList.add('lg:overflow-hidden');
    }
  }, []);

  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
