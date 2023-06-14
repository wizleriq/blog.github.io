import React from 'react';
import CodeImg from '../pictures/Code.jpeg';

function Header() {
  return (
    <div className='mt-24 sm:w-full md:w-full text-center relative md:h-full '>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start capitalize'>
        <span className='font-semibold text-1xl'>react & node</span>
        <span className='text-4xl mt-6'>blog</span>
      </div>
      <img
        className='w-full h-auto sm:max-h-96 lg:max-h-full'
        src={CodeImg}
        alt='Header'
      />
    </div>
  );
}

export default Header;
