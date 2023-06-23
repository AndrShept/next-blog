'use client';
import Image from 'next/image';
import React from 'react';
import { DateTime } from 'luxon';
import { EditForm } from '@/components/EditForm';
import { Button } from '@/components/Button';
import useSWR from 'swr';
import { toast } from 'react-hot-toast';
import { fetcher } from '../page';

const EditPage = ({ params: { id } }) => {
  const [isShowEdit, setIsShowEdit] = React.useState(false);

  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts/${id}`,
    fetcher
  );

  if (isLoading) return <div>loading</div>;
  if (error) return toast.error('Error fetching data');
  return (
    <section className='  flex gap-4'>
      {isShowEdit && (
        <EditForm
          mutate={mutate}
          data={data}
          isShowEdit={isShowEdit}
          setIsShowEdit={setIsShowEdit}
        />
      )}

      <Image src={data?.image} alt='img' height={400} width={400} />
      <div className='ml-4 max-w-[400px] flex flex-col justify-between gap-6'>
        <div className='flex flex-col gap-4' >
          <h2 className='text-5xl font-bold text-zinc-200'>{data?.title}</h2>
          <p>{data?.desc}</p>
          <p className='font-light'>{data?.content}</p>
          <span className='font-light text-zinc-500'>
            {DateTime.fromISO(data?.createdAt).toLocaleString(
              DateTime.DATETIME_FULL
            )}
          </span>
        </div>
          <Button text='Edit' onClick={() => setIsShowEdit((prev) => !prev)} />
      </div>
    </section>
  );
};

export default EditPage;
