import React from 'react'
import BlogtwoIMG from '../pictures/Blogtwo.jpeg'
import BlogoneIMG from '../pictures/Blogone.jpg'
import './Detail.css'
import { Link } from 'react-router-dom'



export default function Detail() {
  return (
    // <div className='w-auto m-6 mr-4 mb-4 grid grid-cols-2'>
    //   <div className='text-center align-middle justify-start'>
    //     <img className=' w-5/6 h-80 object-cover rounded-md' src={BlogtwoIMG} alt="Blog" />

    // <div className='w-auto m-6 mr-4 mb-4 grid lg:grid-cols-2 gap-4'>
    //   <div className='text-center align-middle justify-start'>
    //     <Link to="/singlePost" >
    //       <img className='lg:w-full w-screen h-80 object-cover rounded-md ' src={BlogtwoIMG} alt="Blog" />
    //     </Link>

    <div className='w-auto m-6 mb-4 grid md:grid-cols-2 gap-4'>
      <div className='text-center align-middle justify-start pl-1'>
        <Link to='/singlePost'>
          <img className='md:w-full w-80 h-80 object-cover object-center  rounded-md' src={BlogtwoIMG} alt='Blog' />
        </Link>

        <div className='mb-6 align-center text-center  justify-center lg:w-full w-80 md:w-64'>
          <div className='font-sans text-orange-200 text-center mt-1 cursor-pointer mb-3'>
            <span className='mr-2'>Music</span>
            <span>life</span>
          </div>
          <span className='font-bold cursor-pointer'>
            Wisdom Darlington Ndata
          </span>
          <hr className=' hidden w-96' /> <br />
          <span className='h-4 italic text-sm'>1 hour Ago</span>
          <p className="text-s text-gray-700  items-center leading-7 mt-4 truncate max-h-20 text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus. Cras semper nulla nisl, quis faucibus turpis eleifend eget. Nulla dictum eget felis pretium dignissim. Duis ut leo velit. Pellentesque et aliquet ex. Vestibulum velit arcu, rhoncus at tristique vitae, hendrerit a nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus.</p>
        </div>
      </div>

      <div className='pl-1'>
        <Link to="/singlePost" >
          <img className='md:w-full w-80  h-80 object-cover object-center  rounded-md' src={BlogoneIMG} alt="" />
        </Link>




        <div className='mb-6 align-center text-center  justify-center lg:w-full w-80 md:w-64'>
          <div className='font-sans text-orange-200 text-center mt-1 cursor-pointer mb-3'>
            <span className='mr-2'>Music</span>
            <span className=''>life</span>
          </div>
          <span className='font-bold cursor-pointer'>
            Wisdom Darlington Ndata
          </span>
          <hr className='w-80 hidden' /> <br />
          <span className='h-4 italic text-sm text-gray-400 pt-20'>1 hour Ago</span>
          <p className='text-s text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus. Cras semper nulla nisl, quis faucibus turpis eleifend eget. Nulla dictum eget felis pretium dignissim. Duis ut leo velit. Pellentesque et aliquet ex. Vestibulum velit arcu, rhoncus at tristique vitae, hendrerit a nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus.</p>
        </div>
      </div>

      <div className='pl-1'>
        <Link to="/singlePost" >
          <img className='md:w-full w-80  h-80 object-cover object-center  rounded-md' src={BlogtwoIMG} alt="" />
        </Link>


        <div className='mb-6 align-center text-center  justify-center lg:w-full w-80 md:w-64'>
          <div className='font-sans text-orange-200 leading-20 mt-1 cursor-pointer mb-3'>
            <span className='mr-2'>Music</span>
            <span>Music</span>
          </div>
          <span className='font-bold cursor-pointer'>
            Wisdom Darlington Ndata
          </span>
          <hr className='w-80 hidden' /> <br />
          <span className='h-4 italic text-sm'>1 hour Ago</span>
          <p className='text-s text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus. Cras semper nulla nisl, quis faucibus turpis eleifend eget. Nulla dictum eget felis pretium dignissim. Duis ut leo velit. Pellentesque et aliquet ex. Vestibulum velit arcu, rhoncus at tristique vitae, hendrerit a nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus.</p>
        </div>
      </div>


      <div className='pl-1'>
        <Link to="/singlePost" >
          <img className='md:w-full w-80  h-80 object-cover object-center  rounded-md' src={BlogoneIMG} alt="" />
        </Link>
        <div className='mb-6 align-center text-center  justify-center lg:w-full w-80 md:w-64'>
          <div className='font-sans text-orange-200 leading-20 mt-1 cursor-pointer mb-3'>
            <span className='mr-2'>Music</span>
            <span>Music</span>
          </div>
          <span className='font-bold cursor-pointer'>
            Wisdom Darlington Ndata
          </span>
          <hr className='w-80 hidden' /> <br />
          <span className='h-4 italic text-sm'>1 hour Ago</span>
          <p className='text-s text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus. Cras semper nulla nisl, quis faucibus turpis eleifend eget. Nulla dictum eget felis pretium dignissim. Duis ut leo velit. Pellentesque et aliquet ex. Vestibulum velit arcu, rhoncus at tristique vitae, hendrerit a nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus.</p>
        </div>
      </div>




      <div className='pl-1'>
        <Link to="/singlePost" >
          <img className='lg:w-full w-80  h-80 object-cover object-center  rounded-md' src={BlogtwoIMG} alt="" />
        </Link>

        <div className='mb-6 align-center text-center  justify-center lg:w-full w-80 md:w-64 '>
          <div className='font-sans text-orange-200 leading-20 mt-1 cursor-pointer '>
            <span className='mr-2'>Music</span>
            <span>Music</span>
          </div>
          <span className='font-bold cursor-pointer'>
            Wisdom Darlington Ndata
          </span>
          <hr className='w-80 hidden' /> <br />
          <span className='h-4 italic text-sm'>1 hour Ago</span>
          <p className='text-s text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus. Cras semper nulla nisl, quis faucibus turpis eleifend eget. Nulla dictum eget felis pretium dignissim. Duis ut leo velit. Pellentesque et aliquet ex. Vestibulum velit arcu, rhoncus at tristique vitae, hendrerit a nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus.</p>
        </div>
      </div>



      <div className='pl-1'>
        <Link to="/singlePost" >
          <img className='lg:w-full w-80  h-80 object-cover object-center  rounded-md' src={BlogoneIMG} alt="" />
        </Link>

        <div className='mb-6 align-center text-center  justify-center lg:w-full w-80 md:w-64'>
          <div className='font-sans text-orange-200 leading-20 mt-1 cursor-pointer mb-3'>
            <span className='mr-2'>Music</span>
            <span>Music</span>
          </div>
          <span className='font-bold cursor-pointer'>
            Wisdom Darlington Ndata
          </span>
          <hr className='w-80 hidden' /> <br />
          <span className='h-4 italic text-sm'>1 hour Ago</span>
          <p className="text-s text-gray-700 leading-7 mt-4 truncate max-h-20 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus. Cras semper nulla nisl, quis faucibus turpis eleifend eget. Nulla dictum eget felis pretium dignissim. Duis ut leo velit. Pellentesque et aliquet ex. Vestibulum velit arcu, rhoncus at tristique vitae, hendrerit a nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus sit amet tortor feugiat maximus.</p>
        </div>
      </div>
    </div>
  )

}
