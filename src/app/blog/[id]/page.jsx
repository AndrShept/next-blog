import Image from 'next/image';
import React from 'react';

export const fetchData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    return res.json();
  } catch (error) {
  }

};

const BlogPost = async ({ params }) => {
  const data = await fetchData(params.id);

  return (
    <section>
      <div className='grid grid-cols-2  mb-10  items-center gap-8 h-[300px]'>
        <div className='flex flex-col gap-6 ml-10 '>
          <h1 className='text-4xl font-bold'>{data.title}</h1>
          <p>{data.body}</p>
        </div>
        <div
          className='border-2 rounded-lg border-[#bbb] max-w-full min-h-full bg-center  bg-cover  bg-[url(https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=748&q=80)]'
          href='blog/id'
        ></div>
      </div>
      <p>{data.body}</p>
    </section>
  );
};

export default BlogPost;
