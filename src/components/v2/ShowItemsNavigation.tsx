'use client';

import Link from 'next/link';
import clsx from 'clsx';

import { useCurrentSectionSelectedStore } from '@/store/useCurrentSectionSelectedStore';

export const ShowItemsNavigation = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  const { setCurrentSection, currentSection } =
    useCurrentSectionSelectedStore();

  return (
    <Link
      href={href}
      className='flex items-center gap-2 group'
      onClick={() => setCurrentSection(href)}
    >
      <span
        className={clsx(
          'group-hover:w-10 h-1 bg-white rounded-full ease-in-out duration-200',
          {
            'w-3': currentSection !== href,
            'w-10':
              (currentSection === '' && href === '#about') ||
              currentSection === href,
          }
        )}
      ></span>
      {label}
    </Link>
  );
};
