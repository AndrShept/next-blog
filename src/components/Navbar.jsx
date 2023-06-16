'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import {linksList} from '../utils/navList.js'
import  ThemeButton  from './ThemeButton.jsx';
import { signOut, useSession } from 'next-auth/react';
import { Button } from './Button.jsx';
import { Badge } from './Badge.jsx';


const Navbar = () => {
  const handleLogin =  () => {
    if (status === 'authenticated'){
      signOut()
      
    }
    else{
      navigate.push('/dashboard/login')
    }
  }
  const navigate = useRouter()
  const {status, data} = useSession()
  const pathname = usePathname();
  return (
    <header className='flex justify-between flex-wrap items-center text mb-14'>
      <Link className='font-extrabold  hover:text-green-400 transition-all md:text-2xl text-lg' href='/'>NICELOGO</Link>
      <div className='flex gap-2 items-center '>
        <ThemeButton/>
        {linksList.map((link) => {
          const isActive = pathname === link.url;
          return (
            <Link
              key={link.id}
              href={link.url}
              className={clsx(' duration-300 font-light   py-2 px-px border-b-2 ', {
                'text-green-400  border-green-500  ': isActive,
                'border-transparent hover:border-b-green-500/50  ': !isActive
              })}
            >
              {link.title}
            </Link>
          );
        })}
        <Button onClick={handleLogin} text={status==='authenticated'? 'Logout' : 'Login'} className='px-3 py-[3px] ml-2' />
        {data && <Badge size={30} data={data} className='ml-1'/>}
        {/* <button onClick={handleLogin} className='bg-green-500 text-white hover:bg-green-600 duration-200 px-2 py-1 rounded-sm ml-2 flex-wrap '>{status==='authenticated'? 'Logout' : 'Login'}</button> */}
      </div>
      
    </header>
  );
};

export default Navbar;
