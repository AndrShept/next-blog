'use client';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { data, status } = useSession();

  return (
    <div className='m-auto'>
      <div className='flex flex-col items-center gap-8'>
        <h1 className='text-3xl  text-center'>
          {data && `WELCOME ${data.user.name}`}
        </h1>
        {data && <Badge size={50} data={data} />}
        <Link href='/dashboard/register' className='px-5 py-2 bg-sky-500 text-white '>Register</Link>
        <Button
          disabled={status === 'loading'}
          className='bg-sky-500 hover:bg-sky-600'
          onClick={() =>
            status === 'authenticated'
              ? signOut().then(() => toast.loading('Loading...'))
              : signIn('google').then(() => toast.success('Success Enter'))
          }
          text={
            status === 'authenticated'
              ? 'Leave with Google'
              : 'Login with Google'
          }
        />
      </div>
    </div>
  );
};

export default Login;
