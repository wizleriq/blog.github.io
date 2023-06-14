import React from 'react'
import PictureImg from '../pictures/Picture.jpeg'

function Sidebar() {
  const sidebarStyle = {
    backgroundColor: '#F7F5EB',
  };
 
  
  return (
    <div className='m-4 pb-3 rounded-md pr-4 pl-4 flex flex-col text-center' style={sidebarStyle}>
      <div  className='flex flex-col items-center'> 
        <span className='uppercase border-t border-gray-500 border-thin w-full  mb-2 font-bold border-b-gray-500 border-b'>about me </span>
        <img className='w-50 h-50 object-cover pt-2 pb-2 ' src={PictureImg} alt="" />
        <p className='font-semibold'>Wisdom Darlington Ndata</p>
      </div>

      <div className='mx-4 px-4'>
        <h2 className='uppercase border-t border-gray-500 border-thin mt-4 w-full border-b-gray-500 border-b font-bold'>categories</h2>
        <ul className='mb-4 mt-4 font-semibold capitalize justify-center text-center'>
          <li className='justify-left text-center'>life</li>
          <li className='justify-left text-center'>music</li>
          <li className='justify-center text-center'>style</li>
          <li>sports</li>
          <li>tech</li>
          <li>cinemas</li>
        </ul>
      </div>

      <div>
        <span className='uppercase border-t border-gray-500  mt-4 w-full border-b-gray-500 border-b font-bold'>follow me</span>
        <div className='flex align-middle justify-center mt-3 w-full cursor-pointer'>
          <i class="fa-brands fa-facebook mr-2 ml-2"></i>
          <i class="fa-brands fa-square-twitter mr-2 ml-2"></i>
          <i class="fa-brands fa-square-pinterest mr-2 ml-2"></i>
          <i class="fa-brands fa-square-instagram ml-2"></i>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
