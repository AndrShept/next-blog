import React from 'react';

const Container = ({ children }) => {
  return <div className='container  md:px-12 md:py-6 px-6 py-4 m-auto max-w-7xl min-h-screen flex flex-col justify-between'>{children}</div>;
};

export default Container;
