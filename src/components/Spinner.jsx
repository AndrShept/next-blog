import React from 'react';
import clsx from 'clsx';

export const Spinner = ({ className, size = 'sm' }) => {
  return (
    <div className='m-auto flex flex-col items-center justify-center gap-2'>
      <div
        className={clsx(
          `inline-block border-[5px] rounded-full border-t-sky-600 animate-spin `,
          className, {
            'h-8 w-8' : size ==='sm',
            'h-10 w-10' : size ==='md',
            'h-12 w-12' : size ==='xl',
          }
        )}
      />
      <span className='font-light '>Loading...</span>
    </div>
  );
};
