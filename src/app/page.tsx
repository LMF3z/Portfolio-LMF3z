import { ShowItemsNavigation } from '@/components/v2/ShowItemsNavigation';
import { ShowExternalsLinks } from '@/components/v2/ShowExternalsLinks';
import { ShowDataContainer } from '@/components/v2/ShowDataContainer';

export default function HomePage() {
  return (
    <div className='lg:max-h-screen lg:grid lg:grid-cols-5 m-auto'>
      <div className='lg:pr-5 pt-16 lg:max-h-screen lg:col-span-2 lg:grid'>
        <div className='lg:flex justify-end lg:pr-28'>
          <div className='space-y-20'>
            <div className='space-y-3 text-center lg:text-left'>
              <h1>Lennon Sánchez</h1>
              <h2>Full-Stack Web Developer</h2>

              <div className='flex justify-center items-end lg:hidden'>
                <ShowExternalsLinks />
              </div>
            </div>

            <nav className='hidden lg:flex flex-col gap-3'>
              <ShowItemsNavigation label='About' href='#about' />
              <ShowItemsNavigation label='Products' href='#products' />
              <ShowItemsNavigation label='Experience' href='#experience' />
              <ShowItemsNavigation label='Projects' href='#projects' />
            </nav>

            <div className='hidden lg:flex flex-col justify-start items-center'>
              <ShowExternalsLinks />
            </div>
          </div>
        </div>
      </div>

      <ShowDataContainer />
    </div>
  );
}
