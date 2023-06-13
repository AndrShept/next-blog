import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <section>
      <div className='flex  mb-10 '>
        <Link
          className='border-2 rounded-lg border-[#bbb] h-[400px] w-[800px] bg-center  bg-cover  bg-[url(https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=748&q=80)]'
          href='blog/id'
        />
        <div className='flex flex-col gap-6 ml-10'>
          <h1 className='text-4xl font-bold'>title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            similique aliquam, quo ratione laboriosam odit tenetur iure iusto
            delectus distinctio dicta, dolores ducimus repellat, id quam
            quisquam libero autem eveniet?
          </p>
        </div>
      </div>
    </section>
  );
};
export default Blog;
