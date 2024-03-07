'use client';

import './layout_loader.css';

const LayoutLoader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='hourglassBackground'>
        <div className='hourglassContainer'>
          <div className='hourglassCurves'></div>
          <div className='hourglassCapTop'></div>
          <div className='hourglassGlassTop'></div>
          <div className='hourglassSand'></div>
          <div className='hourglassSandStream'></div>
          <div className='hourglassCapBottom'></div>
          <div className='hourglassGlass'></div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLoader;
