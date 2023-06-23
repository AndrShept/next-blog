import React from 'react';
import clsx from 'clsx';

export const CreateForm = ({ handleSubmit, isShow, setIsShow }) => {
  return (
    <section onClick={()=> setIsShow(false)} className='absolute w-full  left-0 top-0 bottom-0 backdrop-blur-sm bg-black/50   flex items-center justify-center'>
      <div
       onClick={(e) => e.stopPropagation()}
        className={clsx(
          `px-14 py-10  border-2 transition-opacity max-w-[800px]  border-gray-400    backdrop-blur-md absolute`,
          {
            ' animate-in slide-in-from-bottom-10  fade-in duration-500 ':
              isShow,
            ' opacity-0 duration-1000 hidden  ': !isShow,
          }
        )}
      >
        <form
          
          onSubmit={handleSubmit}
          className='flex flex-col gap-6 w-max m-auto'
        >
          <h1>Add new post</h1>
          <input
            className='text-zinc-300 font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            type='text'
            placeholder='title'
            required
          />
          <input
           className='text-zinc-300 font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            type='text'
            placeholder='desc'
            required
          />
          <input
         className='text-zinc-300 font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            type='url'
            placeholder='image/URL'
            autoComplete='url'
            required
          />
          <textarea
         className='text-zinc-300 font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            cols='20'
            rows='5'
          ></textarea>
          <button className='bg-green-500 p-2 text-white'>Send</button>
        </form>
      </div>
    </section>
  );
};
