import React from 'react'
import Programming from '../pictures/Programming.jpeg'
// import ProgrammingIMG from '../pictures/Programming.jpeg'

export default function SinglePost() {
  return (
    <div>
      <div className='w-auto  md:w-auto m-4 '>
        <img  className='w-full h-80 object-cover rounded-md' src={Programming} alt="Code " />
        <div className='text-center justify-center m-3 font-bold w-5/6'>
          <h1>Lorem ipsum dolor sit amet.
          <div className=' md:float-right cursor-pointer'>
          <i  class="fa-brands fa-facebook mr-2 bg-teal-300 "></i>
      <i class="fa-brands fa-square-twitter mr-2 bg-red-400 text-red-900"></i>
          </div>
          </h1>
          
        </div>
        <div className='flex justify-between text-yellow-700'>
          <p>Author: <b>Wisdom</b></p>
          <p>1 hour ago</p>
        </div>
        <p className='leading-7 mt-3 text-gray-700  first-letter:ml-4  first-letter:w-5 first-letter:font-bold first-letter:uppercase'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nesciunt sint maxime hic vitae corporis. Pariatur ipsa animi voluptatem reprehenderit. Quod nostrum saepe impedit perspiciatis architecto suscipit autem repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nesciunt sint maxime hic vitae corporis. Pariatur ipsa animi voluptatem reprehenderit. Quod nostrum saepe impedit perspiciatis architecto suscipit autem repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nesciunt sint maxime hic vitae corporis. Pariatur ipsa animi voluptatem reprehenderit. Quod nostrum saepe impedit perspiciatis architecto suscipit autem repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nesciunt sint maxime hic vitae corporis. Pariatur ipsa animi voluptatem reprehenderit. Quod nostrum saepe impedit perspiciatis architecto suscipit autem repellendus?</p>
      </div>
      
    </div>
  )
}
