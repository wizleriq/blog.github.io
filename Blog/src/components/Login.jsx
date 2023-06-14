import React from 'react'
import { Link } from 'react-router-dom';
// import Login from '../pictures/Login.jpeg'               


export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-auto mt-2' style={{ backgroundImage: `url('/pictures/Login.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <span className='font-medium text-2xl - justify-center text-center'>Login</span>
        <form className='flex flex-col mt-1'>
          <label className='mt-2 mb-2 mr-0 ml-0 font-semibold' htmlFor="">Email</label>
          <input className='border border-black bg-slate-300 p-1 border-none' type="text" placeholder='Enter your email...' />
          <label className='mt-2 mb-2 mr-0 ml-0 font-semibold' htmlFor="">Password</label>
          <input className='border border-black bg-slate-300 p-1 border-none' type="password" placeholder='Enter your password...' />
          <button className='mt-4 cursor-pointer bg-red-500 border-none text-white rounded-md pt-1 pb-1 pl-8 pr-8'>Login</button>
          <button className='border bg-teal-500  rounded-md pt-1 pb-1 pl-6 pr-6 mt-3 absolute top-12 right-3'><Link to="/register" >REGISTER</Link></button>
          
        </form>
      </div>
    </div>
  );
}

