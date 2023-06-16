'use client';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(args).then((res) => res.json());

const Dashboard = () => {

  const session = useSession()
  const { data, error, isLoading, } = useSWR(
    'https://jsonplaceholder.typicode.com/posts/',
    fetcher
  );

  if (isLoading) return <p className='m-auto'> Loading... </p>
  if (error) return <div>ошибка загрузки</div>
  return <div>Dashboard</div>;
};
export default Dashboard;
