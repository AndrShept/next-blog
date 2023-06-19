'use client';
import { RegisterForm } from '@/components/RegisterForm';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';

const Register = () => {
  const router = useRouter();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(res, 'res');
      if (res.status === 201) {
        router.push('/dashboard/login?success=Account has been created');
        toast.success('Account has been created');
      }
      if (res.status === 500) {
        setLoading(false);

        toast.error('Email or name already existing');
      }
    } catch (err) {
      setError(err);
      console.log(err.message, 'err');
    }
  };
  return (
    <div>
      <RegisterForm handleSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default Register;
