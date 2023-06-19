import React from 'react';
import clsx from 'clsx';

export const Spinner = ({ className, size = 6 }) => {
  return (
    <div className='m-auto flex flex-col items-center justify-center gap-2'>
      <div
        className={clsx(
          `inline-block border-[5px] rounded-full border-t-sky-600 animate-spin h-${size} w-${size} `,
          className
        )}
      />
      <span className='font-light '>Loading...</span>
    </div>
  );
};
