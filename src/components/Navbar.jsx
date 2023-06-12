'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const linksList = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className='flex justify-between flex-wrap'>
      <Link className='font-extrabold hover:text-green-400 transition-all' href='/'>NICELOGO</Link>
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
