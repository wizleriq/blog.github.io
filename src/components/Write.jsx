import React from 'react'
import Programming from '../src/pictures/Programming.jpeg'


export default function Write() {
  return (
    <div className='mt-10 '>
      <div>
        <img  className='w-5/6 h-80 ml-24 object-cover rounded-md' src={Programming} alt="" />
      </div>
        <form action="">
          <div  className='ml-36 font-semibold border border-none focus:border-white-100 mt-10 relative '>
            <input className='hidden'type="file" />
          <input className='w-5/6 focus:outline-none text-2xl  ' type="text" placeholder='Title' />
          <div className='pt-6 text-sm'>
            <textarea className='focus:outline-none' type='text' placeholder='Tell your story . . .'></textarea>
          </div>
          <button className='border border-none rounded-md absolute top-1  right-10 mr-24 text-white bg-teal-500 pt-1 pb-1 pr-4 pl-4 cursor-pointer font-semi-bold lg:bg-green-900'>Publishy</button>
 
          </div>
          
          
        </form>
      </div>
  )
}
