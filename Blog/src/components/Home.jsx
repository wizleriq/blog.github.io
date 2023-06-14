import React from 'react';
import Header from './Header';
import Detail from './Details';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='md:w-3/4'>
          <Detail />
        </div>
        <div className='md:w-1/4'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
