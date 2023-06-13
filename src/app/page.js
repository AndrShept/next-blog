import Image from 'next/image';
import hero from '../../public/hero.png';

export default function Home() {
  return (
    <main className='grid grid-cols-2 gap-4 items-center '>
      <div className='flex flex-col gap-7'>
        <h1 className='font-bold md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500'>
          {' '}
          Better design for your digital products.
        </h1>
        <p className=''>
          Turning your idea into Reality. We bring together the teams from the <br/>
          global tech industry
        </p>
        <button className='bg-indigo-600 hover:bg-indigo-700 duration-200 px-4 py-3 rounded-sm w-max'>See Our Works</button>
      </div>

      <div>
        <Image priority src={hero} width={500} height={500} alt='heroImg'  className='animate-wiggle'/>
      </div>
    </main>
  );
}
