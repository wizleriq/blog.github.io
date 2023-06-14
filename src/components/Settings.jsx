import React from 'react'
import Sidebar from './Sidebar'
import Picture from '../pictures/Picture.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
// import { faLight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Settings() {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-3/4'>
          <div className='p-4'>
            <div className='flex justify-between'>
              <span className='uppercase text-red-400 mb-4'>Update your account</span>
              <span className='text-red-500 font-normal text-xs cursor-pointer'>Delete account</span>
            </div>
            <form className='flex flex-col flex-grow ' action="">
              <label className='font-semibold text-xs mb-2'>Profile Picture</label>
              <div className='flex items-center'>
                <img className='w-10 h-10 rounded-xl object-cover' src={Picture} alt="profile" />
                <label htmlFor="fileInput">
                <FontAwesomeIcon className='ml-2 cursor-pointer text-xs' icon={faUser} />
                </label>
                <input className='hidden' type="file" name="" id="fileInput" />
              </div>
              <label className='font-semi-bold mt-4'>Username</label>
              <input className='m-0 h-10  border-b-2 border-gray-200 outline-none text-gray-500' type="text" placeholder='Wisdom' required />
              <label className='font-semi-bold mt-4' >Email</label>
              <input className='m-0 h-10  border-b-2 border-gray-200 outline-none text-gray-500' type="email" placeholder='Example@gmail.com' required />
              <label className='font-semi-bold mt-4'>Password</label>
              <input className='m-0 h-10  border-b-2 border-gray-200 outline-none text-gray-500'type="password" placeholder='****'  required />
                 <button className='flex items-center justify-center border border-none bg-teal-800 w-fit pt-1 pb-1
                  pl-10 pr-10 mt-4 rounded-md mx-auto text-white'>
                Update
              </button>
            </form>
          </div>
        </div>
        <div className='w-full md:w-1/4'> 
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
