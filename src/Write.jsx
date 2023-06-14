import React from 'react'
import Programming from '../src/pictures/Programming.jpeg'


export default function Write() {

  const clickHandler = () =>{
    alert('Successful')
  }
  return (
    <div className='mt-10 '>
      <div>
        <img  className='w-5/6 ml-7 md:ml-10 h-80 lg:ml-24 object-cover rounded-md' src={Programming} alt="" />
      </div>
        <form action="">
          <div  className='ml-36 font-semibold border border-none focus:border-white-100 mt-10 relative '>
            <input className='hidden'type="file" />
          <input className='w-5/6 focus:outline-none text-2xl  ' type="text" placeholder='Title' />
          <div className='pt-6 text-sm'>
            <textarea className='focus:outline-none' type='text' placeholder='Tell your story . . .'></textarea>
          </div>
          <button className='border border-none rounded-md md:absolute   top-1 right-10 mr-24 text-white bg-teal-500 mt-10 pt-1 pb-1 pr-4 pl-4 cursor-pointer font-semi-bold' onClick={clickHandler}>Publish</button>
 
          </div>
          
          
        </form>
      </div>
  )
}
