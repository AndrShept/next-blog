import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Blog = async () => {
  const data = await fetchData();
  return (
    <section className='m-auto'>
      {data.map((item) => (
        <div
          key={item._id}
          className='md:flex-row flex items-center md:items-start gap-8 mb-14 flex-col '
        >
          <Link
            className={`border-2 rounded-lg border-[#bbb] h-[250px] w-[400px]`}
            href={`blog/${item._id}`}
          >
            <Image
              alt='img'
              height={1000}
              width={1000}
              className='h-full rounded-lg w-full object-cover'
              src={item.image}
            />
          </Link>
          <div>
            <h1 className='text-4xl font-bold break-all'>{item.title}</h1>
            <p className='break-all'>{item.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Blog;
