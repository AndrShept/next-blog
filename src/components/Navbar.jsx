'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {linksList} from '../../utils/navList.js'


const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className='flex justify-between flex-wrap items-center text'>
      <Link className='font-extrabold hover:text-green-400 transition-all md:text-2xl text-lg' href='/'>NICELOGO</Link>
      <div className='flex gap-2 items-center '>
        {linksList.map((link) => {
          const isActive = pathname === link.url;
          return (
            <Link
              key={link.id}
              href={link.url}
              className={clsx(' duration-200 font-light ', {
                'text-green-400': isActive,
              })}
            >
              {link.title}
            </Link>
          );
        })}
        <button className='bg-green-400 text-white hover:bg-green-500 duration-150 px-2 py-1 rounded-sm ml-2'>Logout</button>
      </div>
      
    </header>
  );
};

export default Navbar;
