'use client';

import { ReactNode } from 'react';

interface ContainerModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const ContainerModal = ({
  children,
  isOpen,
  onClose,
}: ContainerModalProps) => {
  if (!isOpen) return null;

  return (
    <dialog
      className='fixed inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'
      open={isOpen}
      onClick={({ target }) => {
        const t = target as HTMLElement;

        if (t.tagName === 'DIALOG') {
          onClose();
        }
      }}
    >
      <div className='w-[90%] lg:w-[60%] h-[40%] lg:h-[60%] relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mx-4'>
        {children}
      </div>

      <button
        id='closeDialogButton'
        className='absolute top-4 right-4'
        onClick={onClose}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='lucide lucide-x-icon lucide-x'
        >
          <path d='M18 6 6 18' />
          <path d='m6 6 12 12' />
        </svg>
      </button>
    </dialog>
  );
};
