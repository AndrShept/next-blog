'use client';
import React from 'react';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

export const Button = ({
  onClick,
  type = 'button',
  text = 'Button',
  className,
}) => {
  const { status } = useSession();
  return (
    <button
      disabled={status === 'loading' ? true : false}
      onClick={onClick}
      type={type}
      className={clsx(
        'bg-green-500 hover:bg-green-600 duration-200 px-4 py-2 rounded-sm  text-white disabled:bg-opacity-50',
        className
      )}
    >
      {text}
    </button>
  );
};
