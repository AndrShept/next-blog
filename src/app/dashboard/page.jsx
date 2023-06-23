'use client';
import React from 'react';
import { CreateForm } from '@/components/CreateForm';
import { Spinner } from '@/components/Spinner';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';
import { Button } from '@/components/Button';
import Link from 'next/link';

export const fetcher = (...args) => fetch(args).then((res) => res.json());

const Dashboard = () => {
  const [isShow, setIsShow] = React.useState(false);
  const session = useSession();
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session.data?.user.name}`,
    fetcher
  );
  const handleDelete = async (id) => {
    try {
      const ok = confirm('Дійсно хочете видалити цей пост??');

      if (ok) {
        await fetch(`/api/posts/` + id, {
          method: 'DELETE',
        });
        mutate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      e.target.reset();
      if (res.ok) {
        setIsShow(false)
        toast.success('Post Created');
        mutate();
      }
    } catch (error) {}
  };

  if (session.status === 'unauthenticated') return redirect('dashboard/login');
  if (error) return <div> data loading error </div>;
  if (isLoading) return <Spinner size='md' />;
  return (
    <div  className=''>
      <Button
        className='mb-4 '
        onClick={() => setIsShow((prev) => !prev)}
        text='Create post'
      />
{ isShow &&     <CreateForm
        handleSubmit={handleSubmit}
        setIsShow={setIsShow}
        isShow={isShow}
      />}
      {isLoading
        ? `loading...`
        : data?.map((post) => (
            <div key={post._id}>
              <Link href={`dashboard/${post._id}`}>
                <Image
                  onLoadingComplete={(image) =>
                    image.classList.remove('opacity-0')
                  }
                  className='transition-opacity opacity-0 duration-[1s]'
                  height={200}
                  width={200}
                  alt='img'
                  src={post.image}
                />
              </Link>
              <h2> {post.title}</h2>
              <span
                className='cursor-pointer duration-200 hover:text-red-600'
                onClick={() => handleDelete(post._id)}
              >
                X
              </span>
            </div>
          ))}
    </div>
  );
};
export default Dashboard;
