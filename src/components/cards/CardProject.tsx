'use client';

import Link from 'next/link';

import './card_projects.css';
import Image from 'next/image';

interface Props {
  //   children: React.ReactNode;
  project: {
    title: string;
    description: string;
    image: string | any;
    link: string;
  };
}

const CardProject = ({ project }: Props) => {
  return (
    <Link href={project.link} target='_blank'>
      <article className='container_project_card h-[80vh] group'>
        <div className='child_project_card flex flex-col justify-start items-start bg-[#ffffff] dark:bg-[#1a1a1a]'>
          <Image
            src={project.image}
            alt='image-project'
            className='w-full h-1/2 rounded-none group-hover:rounded-t-[20px] z-0'
            width={2000}
            height={2000}
          />
          <div className='w-full h-1/2 flex flex-col text-center rounded-[20px]'>
            <h2 className='my-3'>{project.title}</h2>
            <div className='w-full flex-1 flex items-center py-3 px-5 overflow-auto'>
              <p className=''>{project.description}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardProject;
