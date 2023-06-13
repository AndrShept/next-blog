import { Button } from '@/components/Button';
import Image from 'next/image';
import React from 'react';

const Category = ({ params }) => {
  return (
    <div className=' '>
      <h1 className='text-3xl font-bold text-green-500'>{params.category}</h1>
      <div className='flex gap-6 items-center '>
        <div className='flex flex-col gap-8'>
          <h2 className='text-xl font-semibold'>Creative Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            nisi, tempore eos consequatur nemo amet sed quasi eius fugit laborum
            dolores impedit. Neque enim maiores officia nostrum. Quia, ex
            aspernatur.
          </p>
          <Button text='See More'/>
        </div>
        <div >
          <Image className=' border-2 rounded-lg' alt='img' height={600} width={1200} src='https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'/>
        </div>
      </div>
    </div>
  );
};

export default Category;
