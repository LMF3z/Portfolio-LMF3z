'use client';

import { ICONS } from '@/app/assets/images';
import Image from 'next/image';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className='w-6 h-12 fixed top-[40vh] flex flex-col justify-between z-10'>
      <Link href={'https://github.com/LMF3z'} target='_blank'>
        <Image
          src={ICONS.github}
          alt='github'
          width={1000}
          height={1000}
          className='cursor-pointer'
        />
      </Link>
      <Link
        href={
          'https://www.linkedin.com/in/lennon-mois%C3%A9s-s%C3%A1nchez-freites-a677431bb/'
        }
        target='_blank'
      >
        <Image
          src={ICONS.linkedin}
          alt='github'
          width={1000}
          height={1000}
          className='cursor-pointer'
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
