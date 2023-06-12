import React from 'react';

const Container = ({ children }) => {
  return <div className='container p-6 m-auto max-w-7xl min-h-screen flex flex-col justify-between'>{children}</div>;
};

export default Container;
