import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 bg-[#301934]'>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-white text-sm text-center '></p>
      </div>
      <div className='w-full flex sm:w-[90%] justify-between items-center mt-3'>
      <p></p>
        <p className='text-white text-sm text-right'>
          <span>&copy;</span> Joseph Lyons
        </p>
      </div>
    </div>
  )
}

export default Footer