import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Analyticsfeature = () => {
  return (
    <div className='pt-24 pb-16'>
      {/* define grid */}
      <div className='w-[95%] sm:w-[80%] items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* image content */}
        <div>
          <Image 
          src="/images/a.jpg" 
          alt='image' 
          width={500} 
          height={500} 
          className='object-contain' 
          />
        </div>
        {/* text content */}
        <div className='p-6'>
          <h1 className='text-base font-semibold text-orange-500'>
            Audience tracking and insights
          </h1>
          <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
            Powerful analytics tools that put you in control and are fully customizable.
          </h1>
          <p className='mt-4 text-gray-600 text-sm font-medium leading-[2rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque consequuntur saepe, explicabo eaque ipsum iure! Sit sunt esse beatae odit? Enim est porro cum rerum minima optio impedit similique.
          </p>
          <ul className='mt-7 space-y-2 text-gray-800'>
            <li className='flex items-center font-semibold'>
              <FaCheckCircle className='text-green-500 mr-2' />
              Chat prompt module supported
            </li>
            <li className='flex items-center font-semibold'>
              <FaCheckCircle className='text-green-500 mr-2' />
              Enjoy unlimited features by paid plan
            </li>
            <li className='flex items-center font-semibold'>
              <FaCheckCircle className='text-green-500 mr-2' />
              Manage ultimate conversation
            </li>
          </ul>
          <button className='mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white'>Explore More &rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default Analyticsfeature