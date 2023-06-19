'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';
import { GoogleButton } from '@/components/GoogleButton';
import { redirect } from 'next/navigation';
import { Spinner } from '@/components/Spinner';
import { LoginForm } from '@/components/LoginForm';

const Login = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return redirect('/');
  }
  if (status === 'loading') {
    return <Spinner size={10} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const test = e.target;
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email, password, redirect: false }).then(
      (callback) => {
        if (callback.error) {
          toast.error('Wrong login or password');
        }
        if (!callback.error) {
          toast.success('Enter Success!');
        }
      }
    );
    console.log(test);
  };

  return (
    <div className=''>
      <LoginForm handleSubmit={handleSubmit} status={status} />
    </div>
  );
};

export default Login;
