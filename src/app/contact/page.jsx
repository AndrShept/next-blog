'use client'
import Image from 'next/image';
import React from 'react';
import contactImg from '../../../public/contact.png';
import { Button } from '@/components/Button';

const Contact = () => {
  return (
    <section className='mb-auto md:mt-16  '>
      <h1 className='text-center text-3xl font-bold'>
        Let`s Keep in Touch
      </h1>

      <div className='grid md:grid-cols-2 md:mt-20 mt-10 flex-col justify-center  gap-6 items-center '>
        <div>
          <Image src={contactImg} alt='img' height={400} width={400} />
        </div>

        <form onSubmit={(e)=> {e.preventDefault()}} action='' className='flex flex-col gap-6  '>
          <input
            className=' px-3 py-2 max-w-[400px] bg-gray-500  rounded-sm outline-none text-white  focus:border-gray-800'
            type='text'
            placeholder='name'
          />
          <input
            className='px-3 py-2  bg-gray-500  max-w-[400px] rounded-sm outline-none text-white  focus:border-gray-800'
            type='text'
            placeholder='email'
          />
          <textarea
            className='px-3 py-2  bg-gray-500 max-w-[400px]  rounded-sm outline-none text-white  focus:border-gray-800'
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='message'
          ></textarea>
          <Button text='Send' />
        </form>
      </div>
    </section>
  );
};
export default Contact;
