import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const RegisterForm = ({handleSubmit, loading}) => {
  return (
    <section>
           <div className='flex min-h-full m-auto flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100 max-w-[400px] rounded-xl drop-shadow-md animate-enter'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className=' text-center text-2xl font-bold  tracking-tight text-gray-900'>
            Register your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Name
              </label>
              <div className='mt-2'>
                <input
                  autoComplete='name'
                  type='text'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
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
                disabled={loading}
                className=' mt-8 disabled:bg-opacity-50 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Register
              </button>

              <span className='flex  justify-center my-2'>- OR -</span>
              <Link
                prefetch
                href='dashboard/login'
                className='flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Login with an existing Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
