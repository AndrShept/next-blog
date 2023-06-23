'use client';
import clsx from 'clsx';
import React from 'react';
import { toast } from 'react-hot-toast';

export const EditForm = ({ setIsShowEdit, isShowEdit, data, mutate }) => {
  const [editValue, setEditValue] = React.useState({
    title: data.title.trim(),
    desc: data.desc.trim(),
    image: data.image.trim(),
    content: data.content.trim(),
  });

  const handleEdit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/posts/${data._id}`, {
      method: 'PUT',
      body: JSON.stringify(editValue),
    });
    if (res.ok) {
      mutate();
      toast.success('Post success edited');
      setIsShowEdit(false);
    }
  };

  return (
    <section
      onClick={() => setIsShowEdit(false)}
      className='absolute w-full  left-0 top-0 bottom-0 backdrop-blur-sm bg-black/50   flex items-center justify-center'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          `px-20 py-14  border-2 transition-opacity w-[600px]  border-gray-400    backdrop-blur-md absolute`,
          {
            ' animate-in slide-in-from-bottom-10  fade-in duration-500 block ':
              isShowEdit,
            ' opacity-0 duration-1000 hidden  ': !isShowEdit,
          }
        )}
      >
        <form onSubmit={handleEdit} className='flex flex-col gap-6  m-auto'>
          <h1>Update your post</h1>
          <input
            className='text-zinc-300 font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            type='text'
            placeholder='title'
            required
            value={editValue.title}
            onChange={(e) =>
              setEditValue({ ...editValue, title: e.target.value })
            }
          />
          <input
            className='text-zinc-300 font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            type='text'
            placeholder='desc'
            required
            value={editValue.desc}
            onChange={(e) =>
              setEditValue({ ...editValue, desc: e.target.value })
            }
          />
          <input
            className='text-zinc-300 break-before-all font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            type='url'
            placeholder='image/URL'
            autoComplete='url'
            required
            value={editValue.image}
            onChange={(e) =>
              setEditValue({ ...editValue, image: e.target.value })
            }
          />
          <textarea
            className='text-zinc-300 font-light rounded-sm placeholder:text-gray-400 bg-zinc-700 focus:border-zinc-400  focus:ring-0   '
            cols='20'
            rows='5'
            value={editValue.content}
            onChange={(e) =>
              setEditValue({ ...editValue, content: e.target.value })
            }
          ></textarea>
          <button className='bg-green-500 p-2 text-white'>Edit Post</button>
        </form>
      </div>
    </section>
  );
};
