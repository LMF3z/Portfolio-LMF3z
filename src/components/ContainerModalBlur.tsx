'use client';

import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}

const ContainerModalBlur = ({ children, isOpen }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      containerRef.current?.classList.remove(
        'delay-1000',
        'invisible',
        'opacity-0'
      );
      containerRef.current?.classList.add('visible', 'opacity-1');
    } else {
      containerRef.current?.classList.remove('visible', 'opacity-1');
      containerRef.current?.classList.add(
        'delay-1000',
        'opacity-0',
        'invisible'
      );
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className='w-full h-screen fixed top-0 left-0 z-50 backdrop-blur opacity-0 invisible transition ease-in-out duration-300'
    >
      {children}
    </div>
  );
};

export default ContainerModalBlur;
