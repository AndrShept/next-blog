'use client';
import React, { createContext } from 'react';
import clsx from 'clsx';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState(false);
  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
        <div className={clsx('bg-[#111] text-[#bbb] opacity-100 duration-500', {
            'bg-white text-[#111]': mode
        })}>
      {children}
      </div>
    </ThemeContext.Provider>
  );
};
