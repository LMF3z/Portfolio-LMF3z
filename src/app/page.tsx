import Image from 'next/image';

import CustomButtonResumeDownload from '@/components/CustomButtonResumeDownload';

export default function () {
  return (
    <div className='container_view max-[440px]:h-screen min-[440px]:h-full md:h-[85vh] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:items-center'>
      <div className=''>
        <Image
          className=''
          src={'/lmf3z-logo-II.png'}
          alt='picture'
          width={2000}
          height={2000}
        />
      </div>
      <div className='flex flex-col justify-start items-center text-center gap-10'>
        <label className='text-2xl md:text-4xl'>Hi, I´m Lennon Sánchez</label>
        <h1>
          <span className='font-bold text-custom_purple'>Full-Stack</span> Web
          Developer
        </h1>

        <CustomButtonResumeDownload />
      </div>
    </div>
  );
}
