'use client';
import React from 'react';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import icon from '/public/google.svg';
import Image from 'next/image';

export const GoogleButton = ({
  onClick,
  text = 'Button',
  url = '/',
  className,
}) => {
  const { status } = useSession();
  return (
    <button
      disabled={status === 'loading' ? true : false}
      onClick={onClick}
      className={clsx(
        'bg-transparent hover:bg-sky-300 hover:border-sky-300 border-sky-500   hover:text-white duration-200 px-4 py-2 border-2 text-gray-500 rounded-lg    disabled:bg-opacity-50 flex items-center  justify-center',
        className
      )}
    >
      <Image priority className='mr-4' alt='button' src={icon} height={25} width={25} />
      <span> {text}</span>
    </button>
  );
};
