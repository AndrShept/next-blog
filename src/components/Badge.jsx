import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

export const Badge = ({size, data, className}) => {
  return (
    <div>
{   data?.user.image ? <Image
        alt='avatar'
        className={clsx('rounded-full cursor-pointer', className)}
        height={size}
        width={size}
        src={data?.user.image}
      />   :
      <div className='cursor-pointer ml-2 bg-gray-400 rounded-full w-8 h-8 uppercase text-white flex items-center justify-center'>
          <span>{data.user.name[0]}</span>
      </div>
    
    }
    </div>
  );
};
