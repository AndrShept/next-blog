import React, {  useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import clsx from 'clsx';



 const ThemeButton = () => {
    const {toggleMode , mode} = useContext(ThemeContext)
  return (
    <div onClick={()=> toggleMode()} className={clsx(' cursor-pointer hover:scale-110  duration-200 flex  relative justify-between border-2 border-green-400 mr-2 gap-2 items-center px-2 py-px rounded-3xl')}>
      <div className={clsx('  absolute rounded-full bg-green-500 h-4 w-4 ', mode? 'right-1 ': 'left-1  ' )} /> 
      <span >&#9728;</span>
      <span>&#9789;</span>
    </div>
  )
}
export default ThemeButton