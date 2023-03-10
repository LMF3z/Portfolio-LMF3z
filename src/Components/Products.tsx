import React from 'react';
import images from '../assets/images';
import handleModals from '../utils/handleModals';
import CardProject from './CardProject';
import CardProjectWithoutRedirect from './CardProjectWithoutRedirect';

const Products = () => {
  const openModal = () => {
    handleModals();
  };

  return (
    <section className='w-full min-h-screen text-white flex flex-col justify-center items-center space-y-10 text-justify'>
      <img
        src={images.pritingSoftIcon}
        alt='profile-icon'
        className='w-16 lg:w-20 h-16 lg:h-20'
      />
      <h1 className='text-violet'>Products</h1>

      <div className='w-full rounded-lg grid place-content-center gap-y-5 lg:gap-5 grid-cols-1 lg:grid-cols-3 text-center text-base lg:text-lg'>
        <CardProject
          imageSource={images.feeseServicesAppIcon}
          title='Feese Services App'
          description='PWA for keeping records of production and payment of hair removal employees. Tools used, React, Node with Express js and MySQL for the database.'
          link='https://drive.google.com/file/d/1FHl70Jn3HWr2QJNchxZEuAVZH-uVWmXV/view?usp=sharing'
        />

        <CardProject
          imageSource={images.clientVipAppIcon}
          title='Client Vip App'
          description='PWA to achieve better tracking of time spent by customers in the establishment and monthly payments. Expense history. Tools used: React, Express js (TypeScript) and MySQL.'
          link='https://drive.google.com/file/d/1uJ5sIKQ5GkVdHsNvsGi_8X1YZdH25WPL/view?usp=sharing'
        />

        <CardProjectWithoutRedirect
          imageSource={images.invTattooOne}
          title='Black Ink App'
          description='Administrative system to keep track of sales, products, customers, employee payments, and reports. Tools used, React, Node with Express js and MySQL for the database.'
          handleClick={openModal}
        />
      </div>
    </section>
  );
};

export default Products;
