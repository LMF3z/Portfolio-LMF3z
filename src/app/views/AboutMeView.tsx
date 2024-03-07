'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/button/CustomButton';
import { lmf3zPhoto } from '../assets/images';

const AboutMeView = () => {
  const router = useRouter();

  return (
    <div className='container_view flex flex-col md:flex-row-reverse justify-between md:justify-center md:items-center'>
      <div className='md:w-1/2 min-h-[30vh] md:h-[80vh] flex justify-center items-center'>
        <Image
          className='w-[90%] h-[90%] lg:object-contain rounded-lg'
          src={lmf3zPhoto}
          alt='picture'
          width={2000}
          height={2000}
        />
      </div>
      <div className='md:w-1/2 min-h-[60vh] md:min-h-[80vh] text-center flex flex-col gap-10 md:gap-20 justify-center items-center'>
        <p className='text-justify flex justify-center items-center text-wrap leading-loose md:text-lg px-3'>
          I like to solve things and play with new and interesting technologies.
          Enthusiastic about self-learning, eager to improve day by day. I am
          passionate about software development. More than 4 years of experience
          and counting.
        </p>

        <div className='w-full flex justify-center gap-3'>
          <CustomButton
            handleClick={() => router.push('/skills')}
            title='Skills'
          />
          <CustomButton
            handleClick={() => router.push('/projects')}
            title='Projects'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeView;
