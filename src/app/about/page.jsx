import { Button } from '@/components/Button';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className=' mb-auto mt-10'>
      <div className='relative'>
        <Image
          className='rounded-sm'
          alt='jpeg'
          width={1400}
          height={1400}
          src='https://assets.contenthub.wolterskluwer.com/api/public/content/img-bfi-benefits-of-incorporating-your-business.jpg?v=72344230'
        />
        <div className='md:block absolute hidden left-4 bottom-4  bg-green-400/60 px-2 py-1 text-white rounded-sm '>
          <h2 className='font-bold md:text-xl text-sm'>Digital Storytellers</h2>
          <p className=''>Handcrafting award winning digital experience</p>
        </div>
      </div>
      <div className='grid grid-cols-2  justify-between gap-8 mt-8'>
        <div>
          <h1 className='text-4xl font-bold'>Who Are We ?</h1>
          <p className='mt-8'>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
        </div>
        <div>
          <h1 className='text-4xl font-bold'>What We Do</h1>
          <p className='mt-8'>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
          </p>
          <Button text='Contact' url='/contact' className='mt-8'/>
        </div>
      </div>
    </div>
  );
};
export default About;
