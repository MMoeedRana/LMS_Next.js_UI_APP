'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const navLinks = [
    {
      id: 1,
      url: '/',
      label: "Home",
    },
    {
      id: 2,
      url: '/about',
      label: "About",
    },
    {
      id: 3,
      url: '/services',
      label: "Services",
    },
    {
      id: 4,
      url: '/testimonials',
      label: "Testimonial",
    },
    {
      id: 5,
      url: '/plans',
      label: "Plans",
    },
    {
      id: 6,
      url: '/contact',
      label: "Contact",
    },
  ];

  return (
    <div className={`fixed ${navBg ? "bg-white shadow-md" : "fixed"} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <h1 className='text-xl md:text-2xl font-bold'>
          <span className='text-3xl md:text-4xl text-pink-700'>PNY</span> LMS
        </h1>
        {/* NavLinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className='nav_link'>{link.label}</p>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          <button className='md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full'>
            Join Now
          </button>
          {/* Burger menu */}
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
