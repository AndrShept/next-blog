import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex justify-between items-center'>
      <span>footer</span>
      <div className='flex gap-3 cursor-pointer ' >
    <Image src='/../public/1.png' alt='facebook' width={25} height={25} className='hover:scale-125 hover:saturate-100 transition-all '/>
    <Image src='/../public/2.png' alt='instag' width={25} height={25} className='hover:scale-125 hover:saturate-100 transition-transform'/>
    <Image src='/../public/3.png' alt='twitter' width={25} height={25} className='hover:scale-125 hover:saturate-100 transition-transform'/>
    <Image src='/../public/4.png' alt='youtube' width={25} height={25} className='hover:scale-125 hover:saturate-100 transition-transform'/>

      </div>
    </footer>
  );
};

export default Footer;
