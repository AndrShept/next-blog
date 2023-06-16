import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

export const Badge = ({size, data, className}) => {
  return (
    <div>
      <Image
        alt='avatar'
        className={clsx('rounded-full cursor-pointer', className)}
        height={size}
        width={size}
        src={data?.user.image}
      />
    </div>
  );
};
