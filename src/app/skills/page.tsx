import Image from 'next/image';
import { skillsArr } from '../assets/images';

// w-full sm:w-[80%] h-full sm:h-[90%] gallery_responsive gap-3

export default function () {
  return (
    <div className='md:min-h-[90vh] flex justify-center items-center mb-10'>
      <article className='gallery_responsive gap-5 place-items-center lg:max-w-4xl'>
        {skillsArr.map((skill, i) => (
          <figure
            key={i}
            className='w-full h-full flex flex-col justify-center items-center group cursor-pointer relative rounded-lg p-5 md:p-0'
          >
            <Image
              src={skill.icon}
              alt='logo'
              className='object-contain'
              width={2000}
              height={2000}
            />

            <div className='w-full h-[30%] absolute bottom-0 opacity-0 group-hover:opacity-100 bg-[rgba(0,0,0,0.8)] flex justify-center items-center transition-opacity duration-300 ease-in-out rounded-b-lg'>
              <p className='text-white text-center'>{skill.title}</p>
            </div>
          </figure>
        ))}
      </article>
    </div>
  );
}
