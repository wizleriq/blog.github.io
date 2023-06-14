import React from 'react'
import Sidebar from './Sidebar'
import SinglePost from './SinglePost'


export default function Single() {
  return (
      <div className='flex'>
        <div className='w-3/4'>
          <SinglePost />
        </div>
        <div className='w-1/4'>
          <Sidebar />
        </div>
      </div>
  )
}
