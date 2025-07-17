import Link from 'next/link'
import React from 'react'
import { FaClock, FaEnvelope, FaFacebook, FaGithub, FaGoogle, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white py-10'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div>
            {/* Logo */}
          <h1 className='text-xl md:text-2xl font-bold'>
          <span className='text-3xl md:text-4xl text-pink-700'>PNY</span> LMS
          </h1>
          {/* Description */}
          <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem 
            ipsum dolor sit amet
          </p>
          </div>
          {/* About us Links */}
        <div>
          <h3 className='text-lg font-semibold text-gray-800'>About Us</h3>
          <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Copyright</li>
            <li>Popular Compaign</li>
          </ul>
        </div>
        {/* Our Information Links */}
        <div>
          <h3 className='text-lg font-semibold text-gray-800'>Our Information</h3>
          <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Site Map</li>
            <li>Store Hours</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold text-gray-800'>
            Contact Info
          </h3>
          <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
            <li className='flex items-center'>
              <FaMapMarkedAlt className='mr-2' />
              Lahore, Pakistan
            </li>
            <li className='flex items-center'>
              <FaPhoneAlt className='mr-2' />
              +92 322 8466169
            </li>
            <li className='flex items-center'>
              <FaClock className='mr-2' />
              3days - 6pm - 8pm 
            </li>
            <li className='flex items-center'>
              <FaEnvelope className='mr-2' />
              mmoeedrana1@gmail.com
            </li>
          </ul>
        </div>
        </div>
        {/* Bottom Section */}
        <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
          <p className='text-center md:text-left'>
            Copyright @2024 PNY LMS. All rights reserved
          </p>
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Social :</span>
            <Link href="#" className='text-gray-500 hover:text-gray-800'>
             <FaFacebook />
            </Link>
            <Link href="#" className='text-gray-500 hover:text-gray-800'>
             <FaGoogle />
            </Link>
            <Link href="#" className='text-gray-500 hover:text-gray-800'>
             <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer