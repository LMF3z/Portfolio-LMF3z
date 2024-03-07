'use client';

import { CgMenuLeft } from 'react-icons/cg';
import { FaMoon } from 'react-icons/fa6';
import { BsSunFill } from 'react-icons/bs';
import { useNavbarStore } from '@/store/useNavbarStore';
import Switch from './Switch';
import Link from 'next/link';

const Navbar = () => {
  const { toggleIsNavbarOpen } = useNavbarStore();

  return (
    <header className='w-full h-16 px-3 md:px-10 bg-text_color_primary dark:bg-bg_primary_color sticky top-0 z-10'>
      <nav className='h-full flex justify-between items-center'>
        <CgMenuLeft
          className='w-10 h-10  dark:text-custom_purple cursor-pointer'
          onClick={toggleIsNavbarOpen}
        />

        <Link className='hidden md:block text-3xl' href={'/'}>
          LMF3z
        </Link>

        <Link className='md:hidden' href={'/'}>
          LMF3z
        </Link>

        <div className='flex items-center gap-3'>
          <FaMoon className='w-6 h-6 block dark:hidden text-custom_purple transition-all ease-in-out duration-300' />

          <BsSunFill className='w-6 h-6 hidden dark:block text-yellow-500 transition-all ease-in-out duration-300' />

          <Switch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
