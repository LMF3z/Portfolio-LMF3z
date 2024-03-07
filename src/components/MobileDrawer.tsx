'use client';

import { useEffect, useRef, MouseEvent } from 'react';
import { useNavbarStore } from '@/store/useNavbarStore';
import ContainerModalBlur from './ContainerModalBlur';
import Link from 'next/link';

const MobileDrawer = () => {
  const containerSideRef = useRef<HTMLDivElement | null>(null);
  const ulContainerRef = useRef<HTMLUListElement | null>(null);

  const { isNavbarOpen, toggleIsNavbarOpen } = useNavbarStore();

  const handleNavbar = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === containerSideRef.current) {
      toggleIsNavbarOpen();
    }
  };

  useEffect(() => {
    if (isNavbarOpen) {
      ulContainerRef.current?.classList.remove('translate-x-[100%]');
      ulContainerRef.current?.classList.add('translate-x-0');
    } else {
      ulContainerRef.current?.classList.remove('translate-x-0');
      ulContainerRef.current?.classList.add('translate-x-[100%]');
    }
  }, [isNavbarOpen]);

  return (
    <ContainerModalBlur isOpen={isNavbarOpen}>
      <nav
        className={`w-full h-screen flex justify-end overscroll-none text-text_color_primary`}
        ref={containerSideRef}
        onClick={handleNavbar}
      >
        <ul
          ref={ulContainerRef}
          className={`w-[60%] md:w-[20%] h-full flex flex-col items-start bg-black opacity-90 translate-x-[100%] transition ease-in-out duration-300`}
        >
          <Link
            href='/about-me'
            onClick={toggleIsNavbarOpen}
            className='w-full p-3 hover:bg-gray-600 transition ease-in-out cursor-pointer hover:border-l-2'
          >
            <li>About me</li>
          </Link>
          <Link
            href='/products'
            onClick={toggleIsNavbarOpen}
            className='w-full p-3 hover:bg-gray-600 transition ease-in-out cursor-pointer hover:border-l-2'
          >
            <li>Products</li>
          </Link>
          <Link
            href='/projects'
            onClick={toggleIsNavbarOpen}
            className='w-full p-3 hover:bg-gray-600 transition ease-in-out cursor-pointer hover:border-l-2'
          >
            <li>Projects</li>
          </Link>
          <Link
            href='/skills'
            onClick={toggleIsNavbarOpen}
            className='w-full p-3 hover:bg-gray-600 transition ease-in-out cursor-pointer hover:border-l-2'
          >
            <li>Skills</li>
          </Link>
          <Link
            href='/contact-me'
            onClick={toggleIsNavbarOpen}
            className='w-full p-3 hover:bg-gray-600 transition ease-in-out cursor-pointer hover:border-l-2'
          >
            <li>Contact me</li>
          </Link>
        </ul>
      </nav>
    </ContainerModalBlur>
  );
};

export default MobileDrawer;
