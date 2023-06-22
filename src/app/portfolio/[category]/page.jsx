import { Button } from '@/components/Button';
import Image from 'next/image';
import React from 'react';
import { items } from './data.js';

const Category = ({ params }) => {
  return (
    <div >
      <h1 className='text-3xl font-bold text-green-500 mb-10'>{params.category}</h1>
      {items[params.category].map((item) => (
        <div key={item.id} className='flex gap-6 mb-10  even:flex-row-reverse'>
          <div className='flex flex-col gap-8'>
            <h2 className='text-xl font-semibold'>{item.title}</h2>
            <p>{item.desc}</p>
            <Button className='w-max' text='See More' />
          </div>
          <div>
            <Image
              className=' border-2 rounded-lg '
              alt='img'
         
              height={800}
              width={800}
              src={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
