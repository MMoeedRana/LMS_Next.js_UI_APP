import React from 'react'
import { FaBook, FaDatabase, FaDigitalTachograph, FaHtml5, FaLanguage, FaMobileAlt, FaPython, FaRobot, } from 'react-icons/fa'
import { FaPhotoFilm } from 'react-icons/fa6';

const Feature = () => {

  const features = [
    {
      icon: <FaRobot className='text-pink-500' />,
      text: "Artificial Inteteligence",
    },
    {
      icon: <FaHtml5 className='text-red-500' />,
      text: "Web Development",
    },
    {
      icon: <FaPhotoFilm className='text-blue-500' />,
      text: "Graphic Designing",
    },
    {
      icon: <FaMobileAlt className='text-yellow-500' />,
      text: "Mobile Apps Development",
    },
    {
      icon: <FaPython className='text-purple-500' />,
      text: "Python development",
    },
    {
      icon: <FaDigitalTachograph className='text-teal-500' />,
      text: "Digital Marketing",
    },
    {
      icon: <FaBook className='text-green-500' />,
      text: "Computerized Accounting",
    },
    {
      icon: <FaDatabase className='text-indigo-500' />,
      text: "Data Entry Operator",
    },
    {
      icon: <FaLanguage className='text-orange-500' />,
      text: "Ielts & Language Course",
    },
  ];

  return (
    <div  className='bg-pink-50 pt-20 pb-20'>
      <div className='w-[80%] mx-auto text-center'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
          Its everything you will ever need
        </h1>
        <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature,index) => 
           <div key={index} className='flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3'>
            <div className='text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full'>
              <span>{feature.icon}</span>
            </div>
            <span className='font-semibold'>{feature.text}</span>
           </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Feature