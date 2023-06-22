'use client';
import React, { createContext } from 'react';
import clsx from 'clsx';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState(false);
  const toggleMode = () => {
    setMode(prev => !prev);
    
  };

  return (
    <ThemeContext.Provider  value={{ mode, toggleMode }}>
        <div className={clsx('bg-[#111] text-[#bbb] opacity-100 duration-1000', {
            'bg-white text-black': mode
        })}>
      {children}
      </div>
    </ThemeContext.Provider>
  );
};
