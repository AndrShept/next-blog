
import Link from 'next/link';
import React from 'react';
import Layout from './layout';

export const metadata = {
  title: 'my Portfolio',
  description: 'go go go',
};

const Portfolio = () => {


  return (
   
      
      <section>
        <h3 className='font-semibold text-lg mb-4'>Choose a gallery</h3>
        <div>
          <div className='flex gap-8 '>
            <Link  className='grayscale  hover:grayscale-0  duration-200  relative w-[300px] h-[400px] border-4 border-[#bbb] bg-cover bg-[url(/illustration.png)]  ] ' href='/portfolio/illustrations'>
              <span className='absolute  right-4 bottom-4 text-2xl font-semibold text-green-500 '>Illustration</span>
            </Link>
            <Link  className='grayscale  hover:grayscale-0  duration-200  relative w-[300px] h-[400px] border-4 border-[#bbb] bg-cover bg-[url(/websites.jpg)]  ] ' href='/portfolio/websites'>
              <span className='absolute  right-4 bottom-4 text-2xl font-semibold text-green-500 '>Websites</span>
            </Link>
            <Link  className='grayscale  hover:grayscale-0  duration-200  relative w-[300px] h-[400px] border-4 border-[#bbb] bg-cover bg-[url(/apps.jpg)]  ] ' href='/portfolio/applications'>
              <span className='absolute  right-4 bottom-4 text-2xl font-semibold text-green-500 '>Application</span>
            </Link>

          </div>
        </div>
      </section>
     
   
  );
};
export default Portfolio;
