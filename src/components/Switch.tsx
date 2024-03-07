'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Switch = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      id='container-toggle'
      className='flex items-center pl-1 w-14 h-7 bg-gray-600 dark:bg-custom_purple rounded-full relative'
    >
      <input
        className='w-10 h-10 z-10 absolute opacity-0 peer/toggle cursor-pointer'
        type='checkbox'
        checked={theme === 'dark'}
        onChange={() => {
          if (theme === 'dark') setTheme('light');
          if (theme === 'light') setTheme('dark');
        }}
        id='toggle'
      />
      <label
        htmlFor='toggle'
        className='w-7 h-7 bg-white rounded-full absolute left-0 peer-checked/toggle:translate-x-8 lg:peer-checked/toggle:translate-x-10 transition-all ease-out duration-300'
      />
    </div>
  );
};

export default Switch;
