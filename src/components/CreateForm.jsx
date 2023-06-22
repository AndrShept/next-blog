import React from 'react';
import clsx from 'clsx';

export const CreateForm = ({ handleSubmit, isShow, setIsShow }) => {
  return (
    <div
      onClick={() => setIsShow(false)}
      className={clsx(
        `p-20 border-2 transition-opacity  border-gray-400  rounded-xl left-[50%] top-[1%] bg-black/50 backdrop-blur-md absolute`,
        {
          ' animate-in zoom-in-90  fade-in duration-500 ' : isShow,
          ' opacity-0 duration-1000 hidden  ': !isShow,
        }
      )}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 w-max m-auto'
      >
        <h1>Add new post</h1>
        <input
          className='text-black placeholder:text-gray-300'
          type='text'
          placeholder='title'
          required
        />
        <input
          className='text-black  placeholder:text-gray-300'
          type='text'
          placeholder='desc'
          required
        />
        <input
          className='text-black  placeholder:text-gray-300'
          type='url'
          placeholder='image/URL'
          autoComplete='url'
          required
        />
        <textarea
          className='text-black  placeholder:text-gray-300'
          cols='30'
          rows='10'
        ></textarea>
        <button className='bg-green-500 p-2 text-white'>Send</button>
      </form>
    </div>
  );
};
