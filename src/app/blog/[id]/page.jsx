import Image from 'next/image';
import React from 'react';

export const fetchData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const generateMetadata = async ({params: {id}})=> {
  const post = await fetchData(id);
   return {
    title: post.title,
    description: post.content,
  };
}
const BlogPost = async ({ params : {id} }) => {
  const data = await fetchData(id);

  return (
    <section>
      <div className='grid grid-cols-2  mb-10  items-center gap-8 '>
        <div className='flex flex-col gap-6 ml-10 '>
          <h1 className='text-4xl font-bold'>{data.title}</h1>
          <p>{data.desc}</p>
        </div>
        <div className='max-h-[300px] max-w-[400px] border-2 rounded-lg border-[#bbb] '>
          <Image
          alt='img'
            src={data.image}
            width={1000}
            height={1000}
            className='h-full w-full object-cover  ]'
            href='blog/id'
          />
        </div>
      </div>
      <p>{data.content}</p>
    </section>
  );
};

export default BlogPost;
