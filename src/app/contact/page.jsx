'use client'
import Image from 'next/image';
import React from 'react';
import contactImg from '../../../public/contact.png';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Phone me',
  description: 'Contact Page',
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const area = e.target[2].value
  }
  return (
    <section className='mb-auto md:mt-16  '>
      <h1 className='text-center text-3xl font-bold'>
        Let`s Keep in Touch
      </h1>

      <div className='grid md:grid-cols-2 md:mt-20 mt-10 flex-col justify-center  gap-6 items-center '>
        <div>
          <Image src={contactImg} alt='img' height={400} width={400} />
        </div>

        <form onSubmit={handleSubmit} action='' className='flex flex-col gap-6 max-w-[400px] '>
          <input
            className=' px-3 py-2  bg-gray-500  rounded-sm outline-none text-white  focus:border-gray-800'
            type='text'
            placeholder='name'
          />
          <input
            className='px-3 py-2  bg-gray-500   rounded-sm outline-none text-white  focus:border-gray-800'
            type='text'
            placeholder='email'
          />
          <textarea
            className='px-3 py-2  bg-gray-500   rounded-sm outline-none text-white  focus:border-gray-800'
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='message'
          ></textarea>
          <Button  text='Send' />
        </form>
      </div>
    </section>
  );
};
export default Contact;
