'use client';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';
import icon from '/public/google.svg';
import { GoogleButton } from '@/components/GoogleButton';
import { redirect, useRouter } from 'next/navigation';
import { Spinner } from '@/components/Spinner';

const Login = () => {
  const {data, status } = useSession();
  console.log(data?.user?.name)

  if (status === 'authenticated') {
    return redirect('/');
  }
  if (status === 'loading') {
    return <Spinner size={10}/>
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
      {/* <h1 className='text-3xl  text-center'>
          {data && `WELCOME ${data.user.name}`}
        </h1>
        {data && <Badge size={50} data={data} />} */}

      <div className='flex min-h-full m-auto flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100 max-w-[400px] rounded-xl drop-shadow-md animate-enter'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className=' text-center text-2xl font-bold  tracking-tight text-gray-900'>
            Sign in
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  autoComplete='email'
                  type='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                disabled={status === 'loading'}
                className='mt-16 disabled:bg-opacity-50 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Login
              </button>

              <span className='flex  justify-center my-2'>- OR -</span>
              <Link
                href='dashboard/register'
                className='flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Register your account
              </Link>
              <span className='mt-10 flex  justify-center my-2'>
                - Enter on google account -
              </span>
              <GoogleButton
                disabled={status === 'loading'}
                className='m-auto   w-full'
                onClick={() =>
                  status === 'authenticated'
                    ? signOut().then(() => toast.loading('Loading...'))
                    : signIn('google').then(() =>
                        toast.success('Success Enter')
                      )
                }
                text={
                  status === 'authenticated'
                    ? 'Leave with Google'
                    : 'Login with Google'
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
