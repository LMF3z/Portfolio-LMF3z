'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

import { experienceSeeds } from '@/seeds/experience.seeds';
import { projectsSeeds } from '@/seeds/projects.seeds';
import { productsSeeds } from '@/seeds/products.seeds';
import { getMonthsSince } from '@/helpers/dateHelper';
import { ContainerModal } from '../ContainerModal';
import ShowVideoPresentationModal from '../ShowVideoPresentationModal';

export const ShowDataContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentVideo, setcurrentVideo] = useState<string>('');

  return (
    <>
      <div className='lg:max-h-screen mt-5 md:mt-0 space-y-2 lg:col-span-3 lg:pb-5 px-5 lg:px-10 lg:overflow-y-auto scroll-smooth'>
        <section id='about' className='lg:pt-16 text-wrap text-lg'>
          <h2 className='ml-3 mt-10 lg:hidden'>About</h2>

          <p>
            I love playing with new technologies, analyzing and understanding
            from the requirements of what you want to create to the moment of
            giving life to the most exciting and impressive systems. My
            beginnings were with the frontend using React Js, curiosity led me
            to learn backend, using mainly Node Js frameworks. Having the
            opportunity to work for companies in Venezuela, Peru, Guatemala and
            Spain.
          </p>
          <br />
          <p>
            I managed to start with a web application to manage gyms called
            <Link
              href={'https://wa.link/zhxrr4'}
              target='_blank'
              className='text-custom_purple'
            >
              {' '}
              “Client Vip” (ask for demo)
            </Link>
            .
          </p>
          <br />
          <p>
            Currently I am working for a{' '}
            <Link href={'#experience'} className='text-custom_purple'>
              Venezuelan company
            </Link>{' '}
            where, (in the last {getMonthsSince()} months my main role has been
            as a backend developer with Nest) we have created web and mobile
            applications, helping to accelerate and improve both administrative
            and operational processes, ranging from a purchase order to customer
            delivery.
          </p>
          <br />
          <p>More than 5 years of experience and counting</p>
        </section>

        <section id='products' className='lg:pt-16'>
          <h2 className='ml-3 mt-10 lg:hidden'>Products</h2>

          <div className='space-y-7'>
            {productsSeeds.map((product, i) => (
              <div
                key={i}
                className='p-3 md:grid md:grid-cols-4 cursor-pointer bg-bg_card rounded-lg'
              >
                <div className='col-span-1 flex justify-center items-center'>
                  <Image
                    src={product.image}
                    alt='image-project'
                    className='w-[90%] h-[90%] rounded-lg'
                    width={2000}
                    height={2000}
                  />
                </div>

                <div className='space-y-3 col-span-3'>
                  <Link href={product.link} target='_blank'>
                    <div className='relative text-custom_purple'>
                      <h2 className='flex cursor-pointer'>
                        {product.title}
                        <FiExternalLink className='ml-2 mt-1 text-sm' />
                      </h2>
                    </div>
                  </Link>

                  <div>
                    <p>{product.description}</p>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    <div
                      className='bg-green-500 hover:bg-green-600 rounded-lg p-1 text-white mr-3'
                      onClick={() => {
                        setcurrentVideo(product.video);
                        setIsOpen(true);
                      }}
                    >
                      View video
                    </div>
                    {product.tools.map((tool, i) => (
                      <div
                        key={i}
                        className='bg-bg_tag_skills rounded-lg p-1 text-white'
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='experience' className='lg:pt-16'>
          <h2 className='ml-3 mt-10 lg:hidden'>Experience</h2>

          <div className='space-y-7'>
            {experienceSeeds.map((experience, i) => (
              <div
                key={i}
                className='p-3 md:grid md:grid-cols-4 cursor-pointer hover:backdrop-blur-sm hover:bg-bg_card rounded-lg'
              >
                <div className='col-span-1'>
                  <label>{experience.duration}</label>
                </div>

                <div className='space-y-3 col-span-3'>
                  <Link href={experience.link} target='_blank'>
                    <div className='text-custom_purple'>
                      <h2 className='flex '>
                        {experience.title}
                        <FiExternalLink className='ml-2 mt-1 text-sm' />
                      </h2>
                    </div>
                  </Link>

                  <div>
                    <label>{experience.role}</label>
                  </div>

                  <div>
                    <p>{experience.description}</p>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {experience.tools.map((tool, i) => (
                      <div
                        key={i}
                        className='bg-bg_tag_skills rounded-lg p-1 text-white'
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='projects' className='lg:pt-16'>
          <h2 className='ml-3 mt-10 lg:hidden'>Projects</h2>

          <div className='space-y-7'>
            {projectsSeeds.map((project, i) => (
              <div
                key={i}
                className='p-3 md:grid md:grid-cols-4 cursor-pointer hover:backdrop-blur-sm hover:bg-bg_card rounded-lg'
              >
                <div className='col-span-1 flex justify-center items-center'>
                  <Image
                    src={project.image}
                    alt='image-project'
                    className='w-[90%] h-[90%] rounded-lg'
                    width={2000}
                    height={2000}
                  />
                </div>

                <div className='space-y-3 col-span-3'>
                  <Link href={project.link} target='_blank'>
                    <div className='relative text-custom_purple'>
                      <h2 className='flex cursor-pointer'>
                        {project.title}
                        <FiExternalLink className='ml-2 mt-1 text-sm' />
                      </h2>
                    </div>
                  </Link>

                  <div>
                    <p>{project.description}</p>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {project.tools.map((tool, i) => (
                      <div
                        key={i}
                        className='bg-bg_tag_skills rounded-lg p-1 text-white'
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ContainerModal
        isOpen={isOpen}
        onClose={() => {
          setcurrentVideo('');
          setIsOpen(false);
        }}
      >
        <ShowVideoPresentationModal videoUrl={currentVideo} title='' />
      </ContainerModal>
    </>
  );
};
